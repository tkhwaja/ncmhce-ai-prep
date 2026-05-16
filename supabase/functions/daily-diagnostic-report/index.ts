// Daily diagnostic report — runs via pg_cron at both 23:00 and 00:00 UTC.
// Self-checks current Eastern time and only proceeds at hour 19 (7 PM ET, DST-aware).
// Idempotency key per calendar day (Eastern) prevents duplicate sends.
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Compute current Eastern time parts (DST-aware via Intl).
function easternParts(now = new Date()) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
    hour12: false, weekday: 'long',
  })
  const parts = fmt.formatToParts(now)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const y = get('year'), m = get('month'), d = get('day')
  return {
    hour: parseInt(get('hour'), 10),
    minute: parseInt(get('minute'), 10),
    isoDate: `${y}-${m}-${d}`,
    label: `${get('weekday')}, ${new Date(`${y}-${m}-${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
  }
}

async function fetchPosthog(query: string): Promise<any> {
  const apiKey = Deno.env.get('POSTHOG_PERSONAL_API_KEY')
  const projectId = Deno.env.get('POSTHOG_PROJECT_ID')
  if (!apiKey || !projectId) throw new Error('PostHog secrets missing')
  const res = await fetch(`https://us.posthog.com/api/projects/${projectId}/query/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query } }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`PostHog ${res.status}: ${text.slice(0, 200)}`)
  }
  return await res.json()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const url = new URL(req.url)
  const force = url.searchParams.get('force') === '1'

  const { hour, isoDate, label } = easternParts()
  if (!force && hour !== 10) {
    return new Response(JSON.stringify({ skipped: true, reason: `not 10am ET (hour=${hour})` }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const idempotencyKey = `daily-report-${isoDate}`

  // Idempotency: skip if we already enqueued/sent today
  const { data: existing } = await supabase
    .from('email_send_log')
    .select('id')
    .eq('template_name', 'daily-diagnostic-report')
    .ilike('error_message', `%${idempotencyKey}%`)
    .limit(1)
  // Fallback: check by metadata-less log via narrow window today
  const { data: recentSend } = await supabase
    .from('email_send_log')
    .select('id, status, created_at')
    .eq('template_name', 'daily-diagnostic-report')
    .gte('created_at', new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString())
    .limit(1)
  if (!force && (existing?.length || recentSend?.length)) {
    return new Response(JSON.stringify({ skipped: true, reason: 'already sent today' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const errors: string[] = []
  const sinceIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  // ── Signups (auth.users via admin API) ────────────────────────────────
  let confirmed = 0, unconfirmed = 0
  const recentEmails = new Set<string>()
  try {
    let page = 1
    while (page < 20) {
      const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 })
      if (error) throw error
      for (const u of data.users) {
        const created = u.created_at ? new Date(u.created_at).getTime() : 0
        if (created >= Date.now() - 24 * 60 * 60 * 1000) {
          if (u.email_confirmed_at) confirmed++
          else unconfirmed++
          if (u.email) recentEmails.add(u.email.toLowerCase())
        }
      }
      if (data.users.length < 1000) break
      page++
    }
  } catch (e) {
    errors.push(`Signups lookup failed: ${(e as Error).message}`)
  }

  // ── Free diagnostic leads ─────────────────────────────────────────────
  let diagnosticLeads = 0
  const diagEmails = new Set<string>()
  try {
    const { data, error } = await supabase
      .from('free_diagnostic_leads')
      .select('email')
      .gte('submitted_at', sinceIso)
    if (error) throw error
    diagnosticLeads = data?.length ?? 0
    data?.forEach((r) => r.email && diagEmails.add(r.email.toLowerCase()))
  } catch (e) {
    errors.push(`Free diagnostic leads failed: ${(e as Error).message}`)
  }

  // ── Waitlist signups ──────────────────────────────────────────────────
  let waitlistOnly = 0
  try {
    const { data, error } = await supabase
      .from('waitlist_signups')
      .select('email')
      .gte('created_at', sinceIso)
    if (error) throw error
    data?.forEach((r) => {
      const e = r.email?.toLowerCase()
      if (e && !recentEmails.has(e) && !diagEmails.has(e)) waitlistOnly++
    })
  } catch (e) {
    errors.push(`Waitlist lookup failed: ${(e as Error).message}`)
  }

  const totalUniqueLeads = new Set<string>([
    ...recentEmails, ...diagEmails,
  ]).size + waitlistOnly

  // ── Revenue (subscriptions started in window, live env) ───────────────
  let newCustomers = 0, revenueAmt = 0, activeSubscriptions = 0
  try {
    const { data: newSubs } = await supabase
      .from('subscriptions')
      .select('id, created_at, environment, status')
      .eq('environment', 'live')
      .gte('created_at', sinceIso)
    newCustomers = newSubs?.length ?? 0
    const { count } = await supabase
      .from('subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('environment', 'live')
      .in('status', ['active', 'trialing'])
    activeSubscriptions = count ?? 0
  } catch (e) {
    errors.push(`Revenue lookup failed: ${(e as Error).message}`)
  }

  // ── Email health (last 24h, deduped by message_id) ────────────────────
  let emailSent = 0, emailFailed = 0, emailSuppressed = 0
  try {
    const { data } = await supabase
      .from('email_send_log')
      .select('message_id, status, created_at')
      .gte('created_at', sinceIso)
      .order('created_at', { ascending: false })
    const latest = new Map<string, string>()
    for (const r of data ?? []) {
      const key = r.message_id ?? r['id' as keyof typeof r] as unknown as string
      if (!latest.has(key)) latest.set(key, r.status)
    }
    for (const s of latest.values()) {
      if (s === 'sent') emailSent++
      else if (['failed', 'dlq', 'bounced', 'complained'].includes(s)) emailFailed++
      else if (s === 'suppressed') emailSuppressed++
    }
  } catch (e) {
    errors.push(`Email health failed: ${(e as Error).message}`)
  }

  // ── PostHog traffic + funnel ──────────────────────────────────────────
  let visitors = 0, pageviews = 0, avgSessionSec = 0, bounceRatePct = 0
  let topPages: Array<{ label: string; value: number }> = []
  let topSources: Array<{ label: string; value: number }> = []
  let devices: Array<{ label: string; value: number }> = []
  let topCountries: Array<{ label: string; value: number }> = []
  let landingViews = 0, signupViews = 0, diagnosticPageViews = 0

  try {
    const overview = await fetchPosthog(`
      SELECT
        uniq(person_id) AS visitors,
        count() AS pageviews
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 1 DAY
    `)
    visitors = Number(overview?.results?.[0]?.[0] ?? 0)
    pageviews = Number(overview?.results?.[0]?.[1] ?? 0)
  } catch (e) { errors.push(`PostHog overview: ${(e as Error).message}`) }

  try {
    const r = await fetchPosthog(`
      SELECT properties.$pathname AS page, count() AS c
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 1 DAY
      GROUP BY page ORDER BY c DESC LIMIT 5
    `)
    topPages = (r?.results ?? []).map((row: any[]) => ({ label: row[0] ?? '(unknown)', value: Number(row[1]) }))
    landingViews = topPages.find((p) => p.label === '/')?.value ?? 0
    signupViews = topPages.find((p) => p.label === '/signup')?.value ?? 0
    diagnosticPageViews = topPages.find((p) => p.label === '/free-diagnostic-case')?.value ?? 0
  } catch (e) { errors.push(`PostHog pages: ${(e as Error).message}`) }

  // If a key page wasn't in top 5, query it directly
  try {
    if (signupViews === 0) {
      const r = await fetchPosthog(`SELECT count() FROM events WHERE event = '$pageview' AND properties.$pathname = '/signup' AND timestamp >= now() - INTERVAL 1 DAY`)
      signupViews = Number(r?.results?.[0]?.[0] ?? 0)
    }
    if (landingViews === 0) {
      const r = await fetchPosthog(`SELECT count() FROM events WHERE event = '$pageview' AND properties.$pathname = '/' AND timestamp >= now() - INTERVAL 1 DAY`)
      landingViews = Number(r?.results?.[0]?.[0] ?? 0)
    }
    if (diagnosticPageViews === 0) {
      const r = await fetchPosthog(`SELECT count() FROM events WHERE event = '$pageview' AND properties.$pathname = '/free-diagnostic-case' AND timestamp >= now() - INTERVAL 1 DAY`)
      diagnosticPageViews = Number(r?.results?.[0]?.[0] ?? 0)
    }
  } catch (e) { errors.push(`PostHog funnel-pages: ${(e as Error).message}`) }

  try {
    const r = await fetchPosthog(`
      SELECT coalesce(nullIf(properties.$referring_domain, ''), 'Direct') AS src, count() AS c
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 1 DAY
      GROUP BY src ORDER BY c DESC LIMIT 5
    `)
    topSources = (r?.results ?? []).map((row: any[]) => ({ label: row[0] ?? 'Direct', value: Number(row[1]) }))
  } catch (e) { errors.push(`PostHog sources: ${(e as Error).message}`) }

  try {
    const r = await fetchPosthog(`
      SELECT coalesce(properties.$device_type, '(unknown)') AS d, count() AS c
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 1 DAY
      GROUP BY d ORDER BY c DESC
    `)
    devices = (r?.results ?? []).map((row: any[]) => ({ label: row[0], value: Number(row[1]) }))
  } catch (e) { errors.push(`PostHog devices: ${(e as Error).message}`) }

  try {
    const r = await fetchPosthog(`
      SELECT coalesce(properties.$geoip_country_code, 'Unknown') AS c, count() AS n
      FROM events
      WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 1 DAY
      GROUP BY c ORDER BY n DESC LIMIT 5
    `)
    topCountries = (r?.results ?? []).map((row: any[]) => ({ label: row[0], value: Number(row[1]) }))
  } catch (e) { errors.push(`PostHog countries: ${(e as Error).message}`) }

  // Build funnel
  const totalSignups = confirmed + unconfirmed
  const funnel = [
    { label: 'Landing page views (/)', value: landingViews },
    {
      label: 'Signup page views',
      value: signupViews,
      conversionFromPrev: landingViews > 0 ? (signupViews / landingViews) * 100 : null,
    },
    {
      label: 'New signups (any state)',
      value: totalSignups,
      conversionFromPrev: signupViews > 0 ? (totalSignups / signupViews) * 100 : null,
    },
    {
      label: 'Confirmed accounts',
      value: confirmed,
      conversionFromPrev: totalSignups > 0 ? (confirmed / totalSignups) * 100 : null,
    },
    { label: 'Diagnostic page views', value: diagnosticPageViews },
    {
      label: 'Diagnostic completions',
      value: diagnosticLeads,
      conversionFromPrev: diagnosticPageViews > 0 ? (diagnosticLeads / diagnosticPageViews) * 100 : null,
    },
  ]

  const templateData = {
    reportDateLabel: label,
    windowLabel: 'Last 24 hours (ending 7:00 PM ET)',
    signups: { confirmed, unconfirmed, waitlistOnly, diagnosticLeads, totalUniqueLeads },
    funnel,
    traffic: { visitors, pageviews, avgSessionSec, bounceRatePct, topPages, topSources, devices, topCountries },
    revenue: { newCustomers, revenue: revenueAmt, activeSubscriptions },
    emailHealth: { sent: emailSent, failed: emailFailed, suppressed: emailSuppressed },
    errors,
  }

  // Send via existing transactional pipeline (fixed recipient set in template)
  const { data: sendResult, error: sendError } = await supabase.functions.invoke('send-transactional-email', {
    body: {
      templateName: 'daily-diagnostic-report',
      idempotencyKey,
      templateData,
    },
  })

  if (sendError) {
    console.error('daily-diagnostic-report send failed', sendError)
    return new Response(JSON.stringify({ ok: false, error: String(sendError) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true, idempotencyKey, sendResult, errors }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
