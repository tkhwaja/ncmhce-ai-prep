// One-off blast: sends signup-recovery-apology to diagnostic leads with no profile,
// and free-diagnostic-breakdown to leads whose email_sent_at is null.
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, serviceKey)

  const send = async (templateName: string, recipientEmail: string, idempotencyKey: string, templateData: Record<string, unknown> = {}) => {
    try {
      const r = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateName, recipientEmail, idempotencyKey, templateData }),
      })
      const body = await r.text()
      return { ok: r.ok, status: r.status, body }
    } catch (e) {
      return { ok: false, status: 0, body: String(e) }
    }
  }

  // ---------- EMAIL A: signup-recovery-apology ----------
  // Distinct emails from leads NOT in profiles, NOT suppressed.
  const { data: aRows, error: aErr } = await supabase.rpc('exec_sql' as any, {}).then(() => ({ data: null as any, error: null as any })).catch(() => ({ data: null, error: null }))
  // Fallback: use direct query
  const { data: profileRows } = await supabase.from('profiles').select('email').not('email', 'is', null)
  const profileSet = new Set((profileRows || []).map((r: any) => String(r.email).toLowerCase()))
  const { data: suppRows } = await supabase.from('suppressed_emails').select('email')
  const suppSet = new Set((suppRows || []).map((r: any) => String(r.email).toLowerCase()))

  const { data: allLeads } = await supabase.from('free_diagnostic_leads')
    .select('id,email,full_name,total_score,correct_answers,total_questions,domain_scores,email_sent_at,submitted_at')
    .order('submitted_at', { ascending: false })

  const seenA = new Set<string>()
  const aTargets: string[] = []
  for (const lead of allLeads || []) {
    const e = String(lead.email).toLowerCase()
    if (profileSet.has(e)) continue
    if (suppSet.has(e)) continue
    if (seenA.has(e)) continue
    seenA.add(e)
    aTargets.push(lead.email)
  }

  const aResults: Array<{ email: string; ok: boolean; status: number }> = []
  for (const email of aTargets) {
    const res = await send('signup-recovery-apology', email, `blast-emailA-${email.toLowerCase()}-v1`)
    aResults.push({ email, ok: res.ok, status: res.status })
  }

  // ---------- EMAIL B: free-diagnostic-breakdown ----------
  // Latest lead per email where email_sent_at is null.
  const seenB = new Set<string>()
  const bLeads: any[] = []
  for (const lead of allLeads || []) {
    if (lead.email_sent_at) continue
    const e = String(lead.email).toLowerCase()
    if (suppSet.has(e)) continue
    if (seenB.has(e)) continue
    seenB.add(e)
    bLeads.push(lead)
  }

  const computeStrongWeak = (domain_scores: any) => {
    if (!domain_scores || typeof domain_scores !== 'object') return { strongest: undefined, weakest: undefined }
    const entries = Object.entries(domain_scores).filter(([, v]) => typeof v === 'number') as [string, number][]
    if (!entries.length) return { strongest: undefined, weakest: undefined }
    entries.sort((a, b) => b[1] - a[1])
    return { strongest: entries[0][0], weakest: entries[entries.length - 1][0] }
  }

  const bResults: Array<{ email: string; ok: boolean; status: number }> = []
  for (const lead of bLeads) {
    const { strongest, weakest } = computeStrongWeak(lead.domain_scores)
    const res = await send('free-diagnostic-breakdown', lead.email, `blast-emailB-${lead.id}-v1`, {
      fullName: lead.full_name,
      totalScore: lead.total_score,
      correctAnswers: lead.correct_answers,
      totalQuestions: lead.total_questions,
      strongestDomain: strongest,
      weakestDomain: weakest,
    })
    if (res.ok) {
      await supabase.from('free_diagnostic_leads')
        .update({ email_sent_at: new Date().toISOString() })
        .eq('id', lead.id)
    }
    bResults.push({ email: lead.email, ok: res.ok, status: res.status })
  }

  return new Response(JSON.stringify({
    emailA: { total: aResults.length, success: aResults.filter(r => r.ok).length, failures: aResults.filter(r => !r.ok) },
    emailB: { total: bResults.length, success: bResults.filter(r => r.ok).length, failures: bResults.filter(r => !r.ok) },
  }, null, 2), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
