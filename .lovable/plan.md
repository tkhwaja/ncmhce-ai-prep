## Goal
Simulate a support-recovery flow for `tahahareb7@gmail.com`: wipe any existing record so it's a clean slate, then send a branded magic link that completes signup on click.

## Steps

1. **Check current state** — Query `auth.users` (and `profiles`) for `tahahareb7@gmail.com` to confirm whether the user exists and whether they're confirmed.

2. **Delete the existing user** — If found, delete from `auth.users` via the Supabase admin API. The `profiles` row will cascade via `handle_new_user` re-creation on next signup. Also clean up any rows in `email_send_log` / `suppressed_emails` for that address if present (so the send isn't blocked).

3. **Send the magic link** — Call the existing `blast-confirm-reminders` edge function in `single` mode:
   ```
   GET /functions/v1/blast-confirm-reminders?mode=single&email=tahahareb7@gmail.com
   Authorization: Bearer <service-role-key>
   ```
   This generates a fresh magic link via `supabase.auth.admin.generateLink({ type: 'magiclink' })` and sends the branded `signup-confirmation-reminder` email template. Clicking the link auto-confirms the email and logs the user straight into `/dashboard`.

   Note: `single` mode currently requires the user to exist in `auth.users` (it calls `generateLink` on an email). So the order matters — we need a fresh signup placeholder OR we use a different path. Two options:
   - **Option A (recommended):** Don't delete first. Just re-send the magic link to the existing unconfirmed user. This is the realistic support flow ("you signed up but couldn't confirm — here's a fresh link").
   - **Option B:** Delete the user, then create a new auth user via admin API with that email (unconfirmed), then send the magic link.

## Question for you
Do you want **Option A** (keep the existing record, just send a fresh magic link — most realistic support scenario) or **Option B** (fully delete + recreate from scratch)?

Once you confirm, I'll run it and report back with the send result.