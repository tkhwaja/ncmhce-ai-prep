## Problem

Qanta Qureshi (qrafia77@gmail.com) signed up multiple times. Each attempt enqueued a `signup` confirmation email and a `free-diagnostic-breakdown` email, and every single one ended in the dead-letter queue with the error:

> Emails disabled for this project

The email domain `notify.theexampath.com` itself is fully verified — the issue is that the project-level "Lovable Emails" toggle is currently **off**, so the send pipeline rejects everything. This is also impacting any other user who signed up recently or requested the free diagnostic.

## Fix

1. Re-enable Lovable Emails for the project (flips the toggle that's currently blocking sends). After this, the auth-email-hook and `send-transactional-email` queue will start delivering again automatically — no redeploy needed.
2. Verify it worked by checking that newly-enqueued emails move from `pending` → `sent` (not `dlq`) in the send log.
3. Manually trigger a fresh confirmation email to qrafia77@gmail.com so Qanta gets it without having to re-sign-up. Two options:
   - Resend the Supabase auth confirmation email for her existing user, OR
   - If her account is in a broken half-confirmed state, delete the auth user and ask her to sign up once more.
4. Check the email send log for any other recent users hit by the same `Emails disabled` error and let you know who they are so you can decide whether to reach out / resend.

## Why this happened

Lovable Emails was disabled at some point (either intentionally or as a side-effect of an earlier change). Disabling it doesn't break the templates or domain — it just makes the send pipeline reject every queued email with the exact error we're seeing in the logs. Re-enabling it is a single toggle and is fully reversible.

## Out of scope

- No changes to signup flow, templates, or Stripe.
- Not switching email providers — `notify.theexampath.com` is already verified on Lovable Emails.
