## Goal

Fully remove `tahahareb18@gmail.com` and `tahahareb7@gmail.com` from the database so you can sign up and run the free diagnostic again as a fresh user, then wait for your go-ahead before any batch emails are sent.

## What I'll delete (data only — no schema changes)

For both `tahahareb18@gmail.com` and `tahahareb7@gmail.com`:

1. **`auth.users`** — removes the account so signup works as new (cascades into `profiles` via the existing handler relationship; I'll also explicitly clean `profiles` in case any row is orphaned).
2. **`profiles`** — explicit delete to be safe.
3. **`free_diagnostic_leads`** — so the diagnostic form treats you as a brand-new lead.
4. **`email_send_log`** — clears prior send history for these two addresses (keeps the admin email dashboard clean).
5. **`email_unsubscribe_tokens`** — clears any token tied to these addresses.
6. **`suppressed_emails`** — clears any suppression entry (in case Mailgun marked one as bounced/complained during the broken window) so future sends aren't silently blocked.
7. **`narrative_attempts`, `practice_exam_attempts`, `flashcard_progress`, `study_plans`, `notes`, `chat_sessions`, `active_sessions`, `feedback`, `posts`, `replies`, `subscriptions`** — any rows tied to the user_id of either account, so nothing dangles.

Currently `tahahareb18@gmail.com` is the only one with a real account; `tahahareb7@gmail.com` only has email-log history. The deletes are scoped by email/user_id so they won't touch any other data.

## What I will NOT do

- No schema migrations.
- No batch emails (Email A apology / Email B breakdown). I'll wait until you explicitly say "send them."
- No code changes — this is purely a DB cleanup.

## After cleanup

You can:
- Sign up again with either address to test the new confirmation email + the "Check your email" flow.
- Re-run the free diagnostic to test the breakdown email.
- Verify replies to either email land in `support@theexampath.com`.

Once you confirm both flows look good, tell me to fire Email A (and/or Email B) and I'll send them.
