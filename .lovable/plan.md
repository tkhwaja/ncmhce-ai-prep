# Status update since the blast

**Blast went out:** 2026-05-14 ~15:00 UTC (Email A: 86 sends, Email B: 68 sends in that hour, plus a small trickle after).

**New signups since the blast (4 total):**
| Email | Name | Signed up | From lead list? |
|---|---|---|---|
| bobbibigler2024@gmail.com | Bobbi Bigler | 16:05 UTC | No |
| sseal@liberty.edu | Stacey Seal | 15:54 UTC | No |
| tahahareb7@gmail.com | Taha Khwaja | 15:47 UTC | You (test) |
| mail.klein@gmail.com | yosef klein | 15:25 UTC | No |

**Conversions directly from the blast recipient list: 0 so far.** None of the 4 new signup emails match any address in `free_diagnostic_leads`. Recovery emails often convert over 24–72h, so it's still early.

# Plan: delete your personal accounts

Same cleanup as last time, scoped to `tahahareb7@gmail.com` and `tahahareb18@gmail.com`:

1. Delete from `auth.users` (cascades to `profiles`, `active_sessions`, `flashcard_progress`, `narrative_attempts`, `practice_exam_attempts`, `study_plans`, `chat_sessions`, `notes`, `feedback`, `posts`, `replies`, `subscriptions` via user_id where applicable — manual deletes for any that don't cascade).
2. Leave `free_diagnostic_leads` and `email_send_log` rows intact (so you stay testable on the blast/dedup logic).
3. Confirm with a count query that both auth users and profiles are gone.

After approval I'll run the deletion and re-check signup numbers.