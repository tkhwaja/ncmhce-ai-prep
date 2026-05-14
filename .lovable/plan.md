Yes — A and B are complementary and smart. **B prevents the problem** (stops users from creating the duplicate-signup mess Yvette hit), and **A is the safety net** (catches anyone who still slips through or abandons mid-confirmation). Together they should drive unconfirmed-signup support tickets to roughly zero.

One caveat worth flagging: B requires us to detect "this email already has a pending confirmation" *before* the user submits the signup form. Supabase deliberately obfuscates this on the client (anti-enumeration). We'll need a tiny edge function that the signup page can call to check status — see technical notes.

---

## A. Weekly auto-recovery cron

**Goal:** Any user who signed up >48h ago and is still unconfirmed automatically receives a fresh magic-link reminder, capped at 2 lifetime reminders so we don't spam.

1. Reuse the existing `blast-confirm-reminders` edge function. Add a new `mode=cron` branch that:
   - Selects unconfirmed users where `created_at < now() - 48h`
   - Excludes anyone on the suppression list
   - Excludes anyone who has already received 2 `signup-confirmation-reminder` sends (count from `email_send_log`)
   - Generates a fresh magiclink per user and sends with idempotency key `auto-recovery-<userId>-<weekNumber>`
2. Schedule via `pg_cron` to run weekly (Tuesday 10am UTC — mid-week, mid-morning US):
   ```
   select cron.schedule('weekly-confirm-recovery', '0 10 * * 2', $$ ... net.http_post(...) $$);
   ```
3. Return a summary log (attempted / sent / skipped-cap / suppressed) so we can monitor.

## B. Frontend safeguard on /signup

**Goal:** When a user enters an email that already has an unconfirmed account, instead of silently creating yet another duplicate signup row (which invalidates prior magic links), show an inline UI offering: "We already sent you a confirmation link — resend it" or "Log in via magic link instead."

1. **New edge function `check-signup-status`** (public, no JWT):
   - Input: `{ email }`
   - Uses service-role `auth.admin.listUsers` (filtered) to find the user
   - Returns one of: `{ status: 'new' }` (no account → proceed normally), `{ status: 'unconfirmed' }`, or `{ status: 'confirmed' }` — never returns user details, just status
   - Rate-limited (simple in-memory or basic check) to deter enumeration abuse
2. **Update `src/pages/Signup.tsx`:**
   - On email blur (or just before `onSubmit`), call `check-signup-status`
   - If `unconfirmed`: replace the create-account flow with a panel saying *"Looks like you already started signing up. We can resend your confirmation link — one click and you're in."* with a **Resend confirmation link** button that invokes `blast-confirm-reminders?mode=single&email=...`
   - If `confirmed`: show *"You already have an account."* with a **Log in** link and a **Forgot password?** link
   - If `new`: proceed with the existing `supabase.auth.signUp` flow
3. Keep the current "Check your email" success dialog unchanged.

---

## Technical notes

- **Files touched:**
  - `supabase/functions/blast-confirm-reminders/index.ts` — add `mode=cron` branch with 2-send cap
  - `supabase/functions/check-signup-status/index.ts` — new public function (CORS, rate-limit, status-only response)
  - `supabase/config.toml` — add `[functions.check-signup-status] verify_jwt = false`
  - `src/pages/Signup.tsx` — pre-submit status check + two new UI states (unconfirmed, confirmed)
  - One SQL migration for the `pg_cron` schedule (uses anon key + function URL, applied via insert tool per scheduling guidance)
- **Anti-enumeration:** `check-signup-status` returns coarse status only (no name, no signup date), and we'll add a basic per-IP rate limit (e.g. 10/min) to keep it from being scraped.
- **Idempotency:** Cron uses `auto-recovery-<userId>-<isoWeek>` so re-running the same week is a no-op. The 2-send lifetime cap is enforced by counting `email_send_log` rows with template `signup-confirmation-reminder` for that recipient.
- **No DB schema changes needed** — everything keys off `auth.users` + existing `email_send_log`.

Approve and I'll build A + B in one pass and deploy.