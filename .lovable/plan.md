# Daily Platform Health Checks

A nightly self-test that exercises every critical config and API path, with results folded into the existing daily diagnostic email you already receive at 10am ET. No browser automation — fast, cheap, and catches the class of issues that broke things today (misconfigured Site URL, expired/missing secrets, broken edge functions, stuck email queue, Stripe checkout regression).

## What gets checked each day

Each check returns `pass` / `warn` / `fail` with a short reason. All failures bubble up into a new "System Health" section in the daily email — green checks if everything passed, red rows with details if not.

### 1. Auth & config invariants
- Supabase Site URL == `https://theexampath.com` (this is what bit us with Sarah's reset link)
- Redirect allow-list contains both `theexampath.com` and the lovable.app preview
- Google OAuth provider enabled
- `auth-email-hook` reachable and returns expected shape

### 2. Edge function health
Ping each public function with a harmless probe payload and assert 2xx (or expected 4xx for bad input):
- `create-checkout`, `create-portal-session`, `get-stripe-price`
- `check-signup-status`, `waitlist-signup`, `free-diagnostic-lead`
- `send-transactional-email` (dry-run mode), `process-email-queue`
- `handle-email-unsubscribe`, `handle-email-suppression`
- `counselor-chat` (small test prompt)
- `payments-webhook` (signature-rejection check — confirms it's listening)

### 3. Stripe (sandbox/test mode only)
- Create a real test-mode checkout session for the live price IDs → assert `client_secret` returned
- Confirm webhook secret is set and webhook endpoint reachable
- List recent failed payment intents in last 24h (surface count, not alert)
- Confirm both sandbox and live API keys present and valid (auth-only call, no charges)

### 4. Email pipeline
- Brevo API key valid (account info call)
- Sender domain `theexampath.com` still verified
- `pgmq` queues exist and aren't backing up (>100 pending = warn, >500 = fail)
- DLQ message count in last 24h
- `email_send_state` cron job last-ran timestamp is recent (<10 min)

### 5. Database invariants
- No orphaned subscriptions (subscription rows with no matching auth user)
- No profiles missing email
- `user_roles` table reachable with RLS intact
- No long-running queries / locks
- Row counts for key tables vs yesterday (flag >50% drop)

### 6. AI gateway
- `LOVABLE_API_KEY` valid via a 1-token completion call
- PostHog API key valid (already implicitly tested by the report)

### 7. Frontend smoke (lightweight, no browser)
- `GET https://theexampath.com/` returns 200 with expected `<title>` and meta description
- `GET /sitemap.xml` returns 200 and parses
- `GET /robots.txt` returns 200
- Favicon and manifest reachable
- Critical JS bundle hash present (catches deploy failures)

## How it runs

- **New edge function:** `daily-health-checks` — runs all checks in parallel, returns a structured JSON result.
- **Scheduling:** invoked from inside the existing `daily-diagnostic-report` function right before the email is composed (no new cron job needed). Adds ~5–10s to that function's runtime.
- **Output:** new `systemHealth` block on the email template with a green ✓ banner if all pass, or a red section listing each failure with the check name, error, and any actionable hint.
- **Storage:** results written to a new `health_check_runs` table so you can chart drift over time later.

## Why not GitHub Actions / Playwright

You picked Level 1 only, so this stays entirely inside Lovable Cloud:
- No external runner to maintain
- No GitHub Actions secrets to sync
- No headless browser cost
- Runs in the same context as the rest of your monitoring

If you later want to add real signup → checkout → reset browser flows, that's a clean follow-up (Level 2) we can layer on without changing any of this.

## Technical details

Files to create:
- `supabase/functions/daily-health-checks/index.ts` — orchestrator + all check implementations, each as a small async function returning `{ name, status, message, durationMs }`
- New table `health_check_runs` (id, run_at, summary jsonb, pass_count, warn_count, fail_count) with RLS locked to service_role + admin reads
- Update `supabase/functions/daily-diagnostic-report/index.ts` to `invoke('daily-health-checks')` and pass results into `templateData.systemHealth`
- Update `supabase/functions/_shared/transactional-email-templates/daily-diagnostic-report.tsx` to render a new "System Health" section at the top of the email
- `supabase/config.toml`: add `[functions.daily-health-checks]` with `verify_jwt = true`

Stripe test-mode checks use `createStripeClient('sandbox')` with the existing `STRIPE_SANDBOX_API_KEY`. No live-mode mutations. No real charges. No emails sent to real users from the checks themselves.

Total work: ~1 hour. No new secrets needed.
