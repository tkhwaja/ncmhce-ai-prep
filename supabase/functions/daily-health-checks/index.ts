// Daily platform health checks. Runs each check in parallel, returns a
// structured summary, and writes a row to health_check_runs.
//
// Invoked by daily-diagnostic-report so results land in the 10am ET email.
import { createClient } from 'npm:@supabase/supabase-js@2'
import { createStripeClient } from '../_shared/stripe.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

type Status = 'pass' | 'warn' | 'fail'
interface CheckResult {
  name: string
  category: string
  status: Status
  message: string
  durationMs: number
}

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? Deno.env.get('SUPABASE_PUBLISHABLE_KEY')!
const SITE_HOST = 'https://theexampath.com'

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

async function timed(
  name: string,
  category: string,
  fn: () => Promise<{ status: Status; message: string }>,
): Promise<CheckResult> {
  const start = Date.now()
  try {
    const r = await fn()
    return { name, category, ...r, durationMs: Date.now() - start }
  } catch (e) {
    return {
      name,
      category,
      status: 'fail',
      message: (e as Error).message?.slice(0, 200) ?? 'unknown error',
      durationMs: Date.now() - start,
    }
  }
}

async function pingFn(
  path: string,
  opts: { method?: string; body?: unknown; expect?: number[] } = {},
) {
  const res = await fetch(`${FUNCTIONS_BASE}/${path}`, {
    method: opts.method ?? 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': ANON_KEY,
      'Authorization': `Bearer ${ANON_KEY}`,
    },
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
  })
  const text = await res.text()
  const ok = (opts.expect ?? [200, 400, 401, 422]).includes(res.status)
  return { ok, status: res.status, body: text.slice(0, 200) }
}

// ── Checks ───────────────────────────────────────────────────────────────

const checkFrontend = () =>
  timed('Marketing site reachable', 'Frontend', async () => {
    const res = await fetch(`${SITE_HOST}/`, { redirect: 'follow' })
    if (!res.ok) return { status: 'fail' as const, message: `${SITE_HOST} returned ${res.status}` }
    const html = await res.text()
    if (!/<title>[^<]+<\/title>/i.test(html)) {
      return { status: 'warn' as const, message: 'Page loaded but <title> missing' }
    }
    return { status: 'pass' as const, message: `200 OK · ${html.length.toLocaleString()} bytes` }
  })

const checkSitemap = () =>
  timed('Sitemap reachable', 'Frontend', async () => {
    const res = await fetch(`${SITE_HOST}/sitemap.xml`)
    if (!res.ok) return { status: 'fail' as const, message: `status ${res.status}` }
    const xml = await res.text()
    if (!xml.includes('<urlset')) return { status: 'warn' as const, message: 'sitemap.xml not a urlset' }
    return { status: 'pass' as const, message: '200 OK' }
  })

const edgeFnChecks = (): Array<Promise<CheckResult>> => {
  const fns: Array<[string, Parameters<typeof pingFn>[1]?]> = [
    ['check-signup-status', { body: { email: 'healthcheck-noop@example.invalid' }, expect: [200, 400] }],
    ['get-stripe-price', { body: { priceId: 'pro_monthly', environment: 'sandbox' }, expect: [200, 400, 404] }],
    ['create-checkout', { body: {}, expect: [400, 422] }],
    ['create-portal-session', { body: {}, expect: [400, 401, 422] }],
    // waitlist-signup intentionally excluded — only used during pre-launch
    ['free-diagnostic-lead', { body: {}, expect: [400, 422] }],
    ['handle-email-unsubscribe', { method: 'GET', expect: [200, 400, 404] }],
    ['handle-email-suppression', { body: {}, expect: [400, 401, 422] }],
    ['send-transactional-email', { body: {}, expect: [400, 401, 422] }],
    ['payments-webhook', { body: {}, expect: [400, 401] }],
    ['auth-email-hook', { body: {}, expect: [400, 401, 422] }],
  ]
  return fns.map(([name, opts]) =>
    timed(`Edge fn: ${name}`, 'Edge functions', async () => {
      const r = await pingFn(name, opts)
      if (!r.ok) return { status: 'fail' as const, message: `HTTP ${r.status} — ${r.body}` }
      return { status: 'pass' as const, message: `HTTP ${r.status}` }
    }),
  )
}

const checkStripeSandbox = () =>
  timed('Stripe sandbox key valid', 'Payments', async () => {
    const stripe = createStripeClient('sandbox')
    const prices = await stripe.prices.list({ limit: 1, active: true })
    return { status: 'pass' as const, message: `API reachable · ${prices.data.length} price(s) found` }
  })

const checkStripeLive = () =>
  timed('Stripe live key valid', 'Payments', async () => {
    if (!Deno.env.get('STRIPE_LIVE_API_KEY')) {
      return { status: 'warn' as const, message: 'Live key not configured (pre go-live)' }
    }
    const stripe = createStripeClient('live')
    const prices = await stripe.prices.list({ limit: 1, active: true })
    return { status: 'pass' as const, message: `API reachable · ${prices.data.length} price(s)` }
  })

const checkStripeCheckoutSession = () =>
  timed('Stripe test checkout session creates', 'Payments', async () => {
    const stripe = createStripeClient('sandbox')
    const prices = await stripe.prices.list({ limit: 10, active: true })
    const price = prices.data.find((p) => p.type === 'recurring') ?? prices.data[0]
    if (!price) return { status: 'warn' as const, message: 'No prices to test against' }
    const session = await stripe.checkout.sessions.create({
      mode: price.type === 'recurring' ? 'subscription' : 'payment',
      ui_mode: 'embedded',
      return_url: `${SITE_HOST}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      line_items: [{ price: price.id, quantity: 1 }],
    })
    if (!session.client_secret) {
      return { status: 'fail' as const, message: 'Session created but no client_secret' }
    }
    return { status: 'pass' as const, message: `client_secret OK (price ${price.id})` }
  })

const checkWebhookSecrets = () =>
  timed('Stripe webhook secrets present', 'Payments', async () => {
    const sandbox = Deno.env.get('PAYMENTS_SANDBOX_WEBHOOK_SECRET')
    const live = Deno.env.get('PAYMENTS_LIVE_WEBHOOK_SECRET')
    if (!sandbox) return { status: 'fail' as const, message: 'Sandbox webhook secret missing' }
    if (!live) return { status: 'warn' as const, message: 'Live webhook secret missing (pre go-live)' }
    return { status: 'pass' as const, message: 'Both webhook secrets configured' }
  })

const checkBrevo = () =>
  timed('Brevo API reachable', 'Email', async () => {
    const lovableKey = Deno.env.get('LOVABLE_API_KEY')
    const brevoKey = Deno.env.get('BREVO_API_KEY')
    if (!lovableKey || !brevoKey) {
      return { status: 'fail' as const, message: 'Brevo connector secrets missing' }
    }
    const res = await fetch('https://connector-gateway.lovable.dev/brevo/account', {
      headers: {
        'Authorization': `Bearer ${lovableKey}`,
        'X-Connection-Api-Key': brevoKey,
      },
    })
    const body = await res.text()
    if (!res.ok) return { status: 'fail' as const, message: `HTTP ${res.status} — ${body.slice(0, 120)}` }
    return { status: 'pass' as const, message: 'OK' }
  })

const checkEmailQueue = () =>
  timed('Email queue not backing up', 'Email', async () => {
    const { data, error } = await supabase
      .from('email_send_log')
      .select('status')
      .eq('status', 'pending')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
    if (error) return { status: 'warn' as const, message: error.message }
    const pending = data?.length ?? 0
    if (pending > 500) return { status: 'fail' as const, message: `${pending} pending in last 24h` }
    if (pending > 100) return { status: 'warn' as const, message: `${pending} pending in last 24h` }
    return { status: 'pass' as const, message: `${pending} pending in last 24h` }
  })

const checkEmailDLQ = () =>
  timed('Email DLQ clean', 'Email', async () => {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const { data, error } = await supabase
      .from('email_send_log')
      .select('id, recipient_email, template_name, error_message')
      .eq('status', 'dlq')
      .gte('created_at', since)
    if (error) return { status: 'warn' as const, message: error.message }
    const n = data?.length ?? 0
    if (n === 0) return { status: 'pass' as const, message: '0 DLQ messages in last 24h' }
    return {
      status: 'fail' as const,
      message: `${n} DLQ: ${data!.slice(0, 3).map((r) => `${r.template_name}→${r.recipient_email}`).join(', ')}`,
    }
  })

const checkLovableAI = () =>
  timed('Lovable AI Gateway reachable', 'AI', async () => {
    const key = Deno.env.get('LOVABLE_API_KEY')
    if (!key) return { status: 'fail' as const, message: 'LOVABLE_API_KEY missing' }
    const res = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-lite',
        messages: [{ role: 'user', content: 'ping' }],
        max_tokens: 1,
      }),
    })
    const body = await res.text()
    if (!res.ok) return { status: 'fail' as const, message: `HTTP ${res.status} — ${body.slice(0, 120)}` }
    return { status: 'pass' as const, message: 'OK' }
  })

const checkOrphanedSubscriptions = () =>
  timed('No orphaned subscriptions', 'Database', async () => {
    const { data: subs, error } = await supabase
      .from('subscriptions')
      .select('user_id')
      .limit(2000)
    if (error) return { status: 'warn' as const, message: error.message }
    const userIds = Array.from(new Set((subs ?? []).map((s) => s.user_id))).filter(Boolean) as string[]
    if (userIds.length === 0) return { status: 'pass' as const, message: 'No subscriptions yet' }
    const { data: profs, error: e2 } = await supabase
      .from('profiles')
      .select('id')
      .in('id', userIds)
    if (e2) return { status: 'warn' as const, message: e2.message }
    const have = new Set((profs ?? []).map((p) => p.id))
    const orphans = userIds.filter((u) => !have.has(u))
    if (orphans.length > 0) return { status: 'fail' as const, message: `${orphans.length} orphan(s)` }
    return { status: 'pass' as const, message: `${userIds.length} subscription user(s) all valid` }
  })

const checkProfilesIntegrity = () =>
  timed('Profiles have emails', 'Database', async () => {
    const { count, error } = await supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .or('email.is.null,email.eq.')
    if (error) return { status: 'warn' as const, message: error.message }
    if ((count ?? 0) > 0) return { status: 'warn' as const, message: `${count} profile(s) missing email` }
    return { status: 'pass' as const, message: 'All profiles have email' }
  })

const checkActiveSubsTable = () =>
  timed('Subscriptions table reachable', 'Database', async () => {
    const { count, error } = await supabase
      .from('subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('environment', 'live')
      .in('status', ['active', 'trialing'])
    if (error) return { status: 'fail' as const, message: error.message }
    return { status: 'pass' as const, message: `${count ?? 0} active live subscription(s)` }
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const started = Date.now()
  const all = await Promise.all([
    checkFrontend(),
    checkSitemap(),
    ...edgeFnChecks(),
    checkStripeSandbox(),
    checkStripeLive(),
    checkStripeCheckoutSession(),
    checkWebhookSecrets(),
    checkBrevo(),
    checkEmailQueue(),
    checkEmailDLQ(),
    checkLovableAI(),
    checkOrphanedSubscriptions(),
    checkProfilesIntegrity(),
    checkActiveSubsTable(),
  ])

  const pass = all.filter((r) => r.status === 'pass').length
  const warn = all.filter((r) => r.status === 'warn').length
  const fail = all.filter((r) => r.status === 'fail').length
  const duration = Date.now() - started
  const summary = { results: all, pass, warn, fail, duration }

  try {
    await supabase.from('health_check_runs').insert({
      summary: summary as never,
      pass_count: pass,
      warn_count: warn,
      fail_count: fail,
      duration_ms: duration,
    })
  } catch (e) {
    console.error('Failed to persist health check run', e)
  }

  return new Response(JSON.stringify(summary), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
