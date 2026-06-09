## Goal

Close the email-relay JWT bypass (ERROR-level) and remove the public test email endpoint. No impact on current users, paying customers, or any working email flow.

## The vulnerability (in plain terms)

Three edge functions claim to require a service-role token, but they only base64-decode the token's middle segment — they never verify the signature. Anyone on the internet can hand-craft a fake token whose payload says `{"role":"service_role"}` and gain full access to:

- `send-transactional-email` — send any template to any email address
- `sync-brevo-founders-list` — push your contact list to Brevo
- `sync-brevo-second-blast` — same

A fourth function, `test-send-emails`, has no auth at all and can spam any address through your sending infrastructure.

## Changes

### 1. `supabase/functions/send-transactional-email/index.ts`
Remove the `atob(bearer.split('.')[1])` branch. Keep only the literal comparison `bearer === SUPABASE_SERVICE_ROLE_KEY`. Update the misleading comment that says `verify_jwt = true`.

### 2. `supabase/functions/sync-brevo-founders-list/index.ts`
Same fix: delete the atob branch, keep only the literal service-role key comparison.

### 3. `supabase/functions/sync-brevo-second-blast/index.ts`
Same fix. Also remove the `ADMIN_EMAILS` branch (it relies on the same unverified payload).

### 4. Delete `supabase/functions/test-send-emails/`
One-off helper, no longer needed. The file's own comment says "Safe to delete after use."

### 5. Deploy the three edited functions

After the edits, redeploy `send-transactional-email`, `sync-brevo-founders-list`, and `sync-brevo-second-blast`.

### 6. Mark the two findings as fixed in the scanner

`send_email_jwt_bypass` and `test_send_no_auth`.

## Why this is safe for current users

All legitimate callers of `send-transactional-email` already pass the real service-role key in the Authorization header:

- `auth-email-hook` (auth emails — signup, password reset, magic link)
- `process-email-queue` (the queue worker that actually delivers all emails)
- `blast-confirm-reminders` and `blast-recovery-emails` (admin tools, internal)
- `daily-diagnostic-report` (cron job)

The literal-key branch is what they all hit today. Removing only the broken atob branch changes nothing for them. Paying customers, signup confirmation emails, password resets, and Stripe-driven notifications all keep working exactly as before.

The two Brevo sync functions are admin-only and invoked manually with the service-role key, so the same applies.

`test-send-emails` is not referenced by any frontend or backend code — safe to delete.

## Out of scope (handled next, in order of impact)

- `blast-confirm-reminders` and `blast-recovery-emails` — open admin endpoints. Higher friction to fix because the signup page currently calls `blast-confirm-reminders` with the anon key. Needs its own plan.
- `create_checkout_no_auth` (warn) — Stripe checkout trusts client-supplied `userId`.
- Remaining warn-level findings (waitlist read policy, leaked-password protection, SECURITY DEFINER exec grants, public bucket listing).
