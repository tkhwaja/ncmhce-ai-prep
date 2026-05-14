// One-off blast: signup-recovery-apology + free-diagnostic-breakdown.
// Idempotent: skips recipients already logged for the same template in last 24h.
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

  const url = new URL(req.url)
  const mode = url.searchParams.get('mode') || 'both' // 'a' | 'b' | 'both'

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

  const { data: profileRows } = await supabase.from('profiles').select('email').not('email', 'is', null)
  const profileSet = new Set((profileRows || []).map((r: any) => String(r.email).toLowerCase()))
  const { data: suppRows } = await supabase.from('suppressed_emails').select('email')
  const suppSet = new Set((suppRows || []).map((r: any) => String(r.email).toLowerCase()))
  const { data: recentLogs } = await supabase.from('email_send_log')
    .select('recipient_email,template_name,status')
    .gte('created_at', new Date(Date.now() - 24 * 3600 * 1000).toISOString())
  const alreadySentA = new Set<string>()
  const alreadySentB = new Set<string>()
  for (const l of recentLogs || []) {
    const e = String(l.recipient_email).toLowerCase()
    if (l.template_name === 'signup-recovery-apology') alreadySentA.add(e)
    if (l.template_name === 'free-diagnostic-breakdown') alreadySentB.add(e)
  }

  const { data: allLeads } = await supabase.from('free_diagnostic_leads')
    .select('id,email,full_name,total_score,correct_answers,total_questions,domain_scores,email_sent_at,submitted_at')
    .order('submitted_at', { ascending: false })

  const aResults: any[] = []
  const bResults: any[] = []

  // ---------- EMAIL A ----------
  if (mode === 'a' || mode === 'both') {
    const seen = new Set<string>()
    const targets: string[] = []
    for (const lead of allLeads || []) {
      const e = String(lead.email).toLowerCase()
      if (profileSet.has(e) || suppSet.has(e) || seen.has(e) || alreadySentA.has(e)) continue
      seen.add(e); targets.push(lead.email)
    }
    // Run in parallel batches of 10
    for (let i = 0; i < targets.length; i += 10) {
      const batch = targets.slice(i, i + 10)
      const res = await Promise.all(batch.map(email =>
        send('signup-recovery-apology', email, `blast-emailA-${email.toLowerCase()}-v2`)
      ))
      res.forEach((r, idx) => aResults.push({ email: batch[idx], ok: r.ok, status: r.status }))
    }
  }

  // ---------- EMAIL B ----------
  if (mode === 'b' || mode === 'both') {
    const seen = new Set<string>()
    const leadTargets: any[] = []
    for (const lead of allLeads || []) {
      if (lead.email_sent_at) continue
      const e = String(lead.email).toLowerCase()
      if (suppSet.has(e) || seen.has(e) || alreadySentB.has(e)) continue
      seen.add(e); leadTargets.push(lead)
    }
    const computeStrongWeak = (ds: any) => {
      if (!ds || typeof ds !== 'object') return { strongest: undefined, weakest: undefined }
      const entries = Object.entries(ds).filter(([, v]) => typeof v === 'number') as [string, number][]
      if (!entries.length) return { strongest: undefined, weakest: undefined }
      entries.sort((a, b) => b[1] - a[1])
      return { strongest: entries[0][0], weakest: entries[entries.length - 1][0] }
    }
    for (let i = 0; i < leadTargets.length; i += 10) {
      const batch = leadTargets.slice(i, i + 10)
      const res = await Promise.all(batch.map(lead => {
        const { strongest, weakest } = computeStrongWeak(lead.domain_scores)
        return send('free-diagnostic-breakdown', lead.email, `blast-emailB-${lead.id}-v2`, {
          fullName: lead.full_name,
          totalScore: lead.total_score,
          correctAnswers: lead.correct_answers,
          totalQuestions: lead.total_questions,
          strongestDomain: strongest,
          weakestDomain: weakest,
        }).then(r => ({ r, lead }))
      }))
      for (const { r, lead } of res) {
        if (r.ok) {
          await supabase.from('free_diagnostic_leads')
            .update({ email_sent_at: new Date().toISOString() })
            .eq('id', lead.id)
        }
        bResults.push({ email: lead.email, ok: r.ok, status: r.status })
      }
    }
  }

  return new Response(JSON.stringify({
    emailA: { attempted: aResults.length, success: aResults.filter(r => r.ok).length, failures: aResults.filter(r => !r.ok) },
    emailB: { attempted: bResults.length, success: bResults.filter(r => r.ok).length, failures: bResults.filter(r => !r.ok) },
  }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
})
