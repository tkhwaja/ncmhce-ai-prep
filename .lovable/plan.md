## Goal
Send a branded "finish your signup — confirm your email" reminder to the 33 unconfirmed signups (excluding `tcl2019@yahoo.com` who already received Email A/B). Send a preview to your personal email first for approval before blasting.

## What I'll build

### 1. New email template — `signup-confirmation-reminder`
A short, warm reminder noting:
- They started signup at The Exam Path but their email was never confirmed
- One-click button: **"Confirm my email"** → fresh Supabase confirmation link generated per recipient via the admin API (`generateLink` with type `signup`), so it actually works (old confirmation tokens may have expired)
- Soft offer of help via support@theexampath.com
- Same brand styling as the recovery-apology template (header image, navy/white, primary blue button)

### 2. New edge function — `blast-confirm-reminders`
Mirrors the existing `blast-recovery-emails` pattern:
- Pulls all `auth.users` where `email_confirmed_at IS NULL`
- Skips: any address in `suppressed_emails`, any address that received `signup-confirmation-reminder` in last 24h (idempotency), and `tcl2019@yahoo.com` (the overlap)
- For each remaining user: generates a fresh confirmation link via `supabase.auth.admin.generateLink({ type: 'signup', email, password: 'unused-placeholder' })` — actually, since the user already exists, the correct call is `generateLink({ type: 'magiclink', email })` which will both confirm them AND log them in on click. This is the cleanest UX.
- Sends `signup-confirmation-reminder` with the generated link
- Supports `?mode=preview&to=<email>` to send a single sample to your personal email without touching anyone else

### 3. Sample first
Before any blast, I'll invoke the function in preview mode:
- Send 1 sample to `tahahareb7@gmail.com` with a real-looking (but harmless / pointing at a test account) confirmation URL
- You confirm the email looks good
- Then I run the real blast to the 33 users

## Technical details

**Why magic-link instead of resending the original confirmation:**
The original signup confirmation tokens may have expired (Supabase default is 24h). Generating a fresh `magiclink` for an unconfirmed user both confirms their email AND signs them in on click — one-step, no friction.

**Excluded recipient:** `tcl2019@yahoo.com` (already received Email A or B from yesterday's blast).

**Targets:** 33 unconfirmed `auth.users` rows. Idempotency key: `signup-confirm-reminder-<userId>-v1`.

## Sequence
1. Show you the email copy (subject + body text) for approval
2. Create template `.tsx` + register in `registry.ts`
3. Create `blast-confirm-reminders` edge function
4. Deploy both
5. Send 1 preview to `tahahareb7@gmail.com` and report back
6. Wait for your "go" before sending to the 33

## What I need from you before starting
1. **Approval of the email copy** (I'll draft and send it inline in the next message before writing any code)
2. **Subject line preference** — proposed: *"Finish setting up your Exam Path account"*
3. **Confirm**: send to `tahahareb7@gmail.com` for the preview (same as last time)?