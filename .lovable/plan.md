## What's actually going on

The daily diagnostic flagged two failures:
- `check-signup-status` → HTTP 503 `SUPABASE_EDGE_RUNTIME_SERVICE_DEGRADED`
- `auth-email-hook` → HTTP 503 `SUPABASE_EDGE_RUNTIME_SERVICE_DEGRADED`

I just pinged both functions live:
- `check-signup-status` → 200 OK (`{"status":"new"}`)
- `auth-email-hook` → 401 "Invalid signature" (expected for an empty body)

Both functions are healthy. The 503 is a Lovable Cloud / edge-runtime platform-level "service degraded" response — usually a transient cold-start or regional hiccup, not a bug in our code. Nothing in our codebase caused it, and there is nothing to "fix" in the functions themselves.

The real fix is to make the daily health check resilient to transient infra blips so a single flaky ping doesn't generate a scary red "2 failing" email when the system is actually fine.

## Plan

Update `supabase/functions/daily-health-checks/index.ts`:

1. **Retry on transient platform errors.** In `pingFn`, if the response is 5xx **or** the body contains `SUPABASE_EDGE_RUNTIME_SERVICE_DEGRADED` / `BOOT_ERROR`, retry up to 2 times with a short backoff (e.g. 800ms, then 1600ms) before recording the result.

2. **Classify lingering 503s as `warn`, not `fail`.** If after retries the function still returns a 5xx with a known platform-degradation code, mark the check as `warn` with a message like "Platform degraded (transient) — retried 3x". A true function bug (4xx outside expected set, or 5xx with a real error body) still fails.

3. **Verify by re-running the function locally** via `curl_edge_functions` after deploy to confirm both endpoints respond as expected.

No changes to `check-signup-status` or `auth-email-hook` themselves — they're working correctly.

## Email to send (no user action needed)

> Subject: Daily diagnostic — false alarm, system is healthy
>
> Hi,
>
> The two failures in this morning's diagnostic (`check-signup-status` and `auth-email-hook`) were transient platform errors from the edge runtime ("service temporarily unavailable"), not bugs in the functions. I re-tested both and they're responding normally.
>
> I'm updating the daily health check to retry transient platform errors and downgrade them to a warning instead of a failure, so you won't get a red alert next time the infrastructure has a brief hiccup.
>
> — The Exam Path Team
