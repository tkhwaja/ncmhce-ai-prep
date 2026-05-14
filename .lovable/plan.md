## Send the blast

Invoke `blast-confirm-reminders` in `mode=blast`:

- Fetches unconfirmed `auth.users` (33 eligible)
- Excludes `tcl2019@yahoo.com` (already received Email A/B)
- Excludes any addresses on the suppression list
- For each remaining user, generates a fresh Supabase `magiclink` (one-click confirms + logs in) and sends the `signup-confirmation-reminder` template
- Idempotency key per user: `signup-confirm-reminder-<userId>-v1` so reruns won't duplicate sends
- Batches of 5 with small delay to stay within rate limits

After it runs I'll report: total sent, any skipped (suppressed/errored), and confirm the recipient count matches 33.