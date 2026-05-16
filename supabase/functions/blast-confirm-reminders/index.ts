// One-off blast: signup-confirmation-reminder for unconfirmed auth users.
// Generates a fresh magiclink per user (which auto-confirms email + logs in).
// Modes:
//   ?mode=preview&to=<email>  -> sends 1 sample to <to>, using a real
//                                 unconfirmed user's link (specify with &as=<email>),
//                                 or just a placeholder URL if &as is omitted.
//   ?mode=blast               -> sends to all 33 unconfirmed users (excludes overlap).
//   default                   -> dry run: returns who would be targeted, sends nothing.
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Excluded — already received Email A/B from prior blast
const EXCLUDED = new Set<string>(['tcl2019@yahoo.com'])

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, serviceKey)

  const url = new URL(req.url)
  const mode = url.searchParams.get('mode') || 'dryrun'
  const previewTo = url.searchParams.get('to') || ''
  const previewAs = url.searchParams.get('as') || ''

  const sendEmail = async (templateName: string, recipientEmail: string, idempotencyKey: string, templateData: Record<string, unknown>) => {
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

  const generateConfirmLink = async (email: string): Promise<string | null> => {
    try {
      const { data, error } = await supabase.auth.admin.generateLink({
        type: 'magiclink',
        email,
        options: { redirectTo: 'https://www.theexampath.com/reset-password?welcome=true' },
      })
      if (error) {
        console.error('generateLink failed', email, error)
        return null
      }
      return data?.properties?.action_link ?? null
    } catch (e) {
      console.error('generateLink threw', email, e)
      return null
    }
  }

  // Fetch all unconfirmed auth users (paginate)
  const unconfirmed: Array<{ id: string; email: string; full_name?: string }> = []
  let page = 1
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }
    for (const u of data.users) {
      if (!u.email_confirmed_at && u.email) {
        const e = u.email.toLowerCase()
        if (EXCLUDED.has(e)) continue
        unconfirmed.push({ id: u.id, email: u.email, full_name: u.user_metadata?.full_name as string | undefined })
      }
    }
    if (data.users.length < 1000) break
    page++
  }

  // Skip anyone we already emailed in last 24h (idempotency)
  const { data: recentLogs } = await supabase.from('email_send_log')
    .select('recipient_email,template_name')
    .eq('template_name', 'signup-confirmation-reminder')
    .gte('created_at', new Date(Date.now() - 24 * 3600 * 1000).toISOString())
  const alreadySent = new Set((recentLogs || []).map((r: any) => String(r.recipient_email).toLowerCase()))
  const targets = unconfirmed.filter(u => !alreadySent.has(u.email.toLowerCase()))

  // Suppression
  const { data: suppRows } = await supabase.from('suppressed_emails').select('email')
  const suppSet = new Set((suppRows || []).map((r: any) => String(r.email).toLowerCase()))
  const eligible = targets.filter(u => !suppSet.has(u.email.toLowerCase()))

  if (mode === 'dryrun') {
    return new Response(JSON.stringify({
      mode: 'dryrun',
      total_unconfirmed: unconfirmed.length,
      eligible_count: eligible.length,
      excluded_overlap: [...EXCLUDED],
      sample_targets: eligible.slice(0, 5).map(u => u.email),
    }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  if (mode === 'preview') {
    if (!previewTo) {
      return new Response(JSON.stringify({ error: 'preview mode requires &to=<email>' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }
    let confirmUrl = 'https://www.theexampath.com/login'
    let asEmail = ''
    if (previewAs) {
      const link = await generateConfirmLink(previewAs)
      if (link) {
        confirmUrl = link
        asEmail = previewAs
      }
    } else if (eligible.length > 0) {
      const sample = eligible[0]
      const link = await generateConfirmLink(sample.email)
      if (link) {
        confirmUrl = link
        asEmail = sample.email
      }
    }
    const r = await sendEmail('signup-confirmation-reminder', previewTo, `preview-confirm-reminder-${Date.now()}`, {
      confirmUrl,
      name: 'Taha (preview)',
    })
    return new Response(JSON.stringify({
      mode: 'preview', sent_to: previewTo, link_belongs_to: asEmail || '(placeholder)',
      send_result: r,
    }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  if (mode === 'single') {
    const target = (url.searchParams.get('email') || '').toLowerCase()
    if (!target) {
      return new Response(JSON.stringify({ error: 'single mode requires &email=<email>' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }
    let u = unconfirmed.find(x => x.email.toLowerCase() === target)
      ?? eligible.find(x => x.email.toLowerCase() === target)
    // Fall back: look up directly so confirmed users can still get a magiclink
    if (!u) {
      const { data: lu } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 })
      const found = lu?.users.find((x: any) => x.email?.toLowerCase() === target)
      if (found && found.email) {
        u = { id: found.id, email: found.email, full_name: found.user_metadata?.full_name as string | undefined }
      }
    }
    // Support-recovery: if user truly doesn't exist, create an unconfirmed placeholder so we can send them a magic link
    if (!u) {
      const { data: created, error: createErr } = await supabase.auth.admin.createUser({
        email: target,
        email_confirm: false,
      })
      if (createErr || !created?.user?.email) {
        return new Response(JSON.stringify({ error: 'user_create_failed', target, detail: createErr?.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
      }
      u = { id: created.user.id, email: created.user.email, full_name: undefined }
    }
    const link = await generateConfirmLink(u.email)
    if (!link) {
      return new Response(JSON.stringify({ error: 'link_gen_failed', email: u.email }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }
    const r = await sendEmail('signup-confirmation-reminder', u.email, `manual-recovery-${u.id}-${Date.now()}`, {
      confirmUrl: link,
      name: u.full_name,
    })
    return new Response(JSON.stringify({ mode: 'single', email: u.email, name: u.full_name, send_result: r }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  if (mode === 'blast') {
    const results: any[] = []
    for (let i = 0; i < eligible.length; i += 5) {
      const batch = eligible.slice(i, i + 5)
      const res = await Promise.all(batch.map(async u => {
        const link = await generateConfirmLink(u.email)
        if (!link) return { email: u.email, ok: false, reason: 'link_gen_failed' }
        const r = await sendEmail('signup-confirmation-reminder', u.email, `confirm-reminder-${u.id}-v1`, {
          confirmUrl: link,
          name: u.full_name,
        })
        return { email: u.email, ok: r.ok, status: r.status }
      }))
      results.push(...res)
    }
    return new Response(JSON.stringify({
      mode: 'blast',
      attempted: results.length,
      success: results.filter(r => r.ok).length,
      failures: results.filter(r => !r.ok),
    }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  if (mode === 'cron') {
    // Auto-recovery: unconfirmed >48h, lifetime cap of 2 reminder sends per recipient.
    const cutoff = Date.now() - 48 * 3600 * 1000
    const aged = unconfirmed.filter(u => {
      // use eligible filtering (suppression) — but ignore the 24h recent-send filter and recompute cap below
      return true
    })

    // Lifetime cap: count all signup-confirmation-reminder sends per recipient
    const { data: allReminderLogs } = await supabase.from('email_send_log')
      .select('recipient_email,created_at')
      .eq('template_name', 'signup-confirmation-reminder')
    const sendCounts = new Map<string, number>()
    for (const r of (allReminderLogs || [])) {
      const k = String((r as any).recipient_email).toLowerCase()
      sendCounts.set(k, (sendCounts.get(k) || 0) + 1)
    }

    // Get auth.users created_at via listUsers we already have — refetch with created_at
    const ageMap = new Map<string, number>()
    let p = 1
    while (true) {
      const { data, error } = await supabase.auth.admin.listUsers({ page: p, perPage: 1000 })
      if (error) break
      for (const u of data.users) {
        if (u.email) ageMap.set(u.email.toLowerCase(), new Date(u.created_at).getTime())
      }
      if (data.users.length < 1000) break
      p++
    }

    const cronTargets = unconfirmed.filter(u => {
      const e = u.email.toLowerCase()
      if (suppSet.has(e)) return false
      const created = ageMap.get(e) ?? 0
      if (created > cutoff) return false // too new
      if ((sendCounts.get(e) || 0) >= 2) return false // hit lifetime cap
      return true
    })

    // ISO week stamp for idempotency
    const now = new Date()
    const onejan = new Date(now.getFullYear(), 0, 1)
    const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7)
    const weekStamp = `${now.getFullYear()}w${week}`

    const results: any[] = []
    for (let i = 0; i < cronTargets.length; i += 5) {
      const batch = cronTargets.slice(i, i + 5)
      const res = await Promise.all(batch.map(async u => {
        const link = await generateConfirmLink(u.email)
        if (!link) return { email: u.email, ok: false, reason: 'link_gen_failed' }
        const r = await sendEmail('signup-confirmation-reminder', u.email, `auto-recovery-${u.id}-${weekStamp}`, {
          confirmUrl: link,
          name: u.full_name,
        })
        return { email: u.email, ok: r.ok, status: r.status }
      }))
      results.push(...res)
    }
    return new Response(JSON.stringify({
      mode: 'cron',
      week: weekStamp,
      total_unconfirmed: unconfirmed.length,
      eligible: cronTargets.length,
      attempted: results.length,
      success: results.filter(r => r.ok).length,
      failures: results.filter(r => !r.ok),
    }, null, 2), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: 'unknown mode' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
})
