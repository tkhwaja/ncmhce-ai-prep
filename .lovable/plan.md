
User wants:
1. Every human contact point → `support@thecounselorexam.com` (footer Contact link is the only one I know of; need to check if there are others)
2. Automated emails → continue from `noreply@thecounselorexam.com` via `notify.` sending domain (already the case)
3. Explanation of how password reset currently works

Let me think about scope:

**Human contact points to audit:**
- Footer Contact link → currently `mailto:hello@...` → change to `support@`
- Need to grep for other `mailto:` links and any "contact us" / "support" references in the codebase

**Automated emails — already correct:**
- `send-transactional-email/index.ts` already sends from `NCMHCE AI Prep <noreply@thecounselorexam.com>` via `notify.thecounselorexam.com` sending domain. No change needed.
- Waitlist confirmation uses this path. ✓

**Password reset flow (already implemented, just needs explanation):**
- `src/pages/ForgotPassword.tsx` — user enters email, calls `supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/reset-password' })`
- Supabase Auth generates a recovery link and sends an email using its **default Lovable auth email template** (no custom auth-email-hook is scaffolded in this project — I checked the function list earlier, only `send-transactional-email`, `handle-email-*`, `payments-*`, `counselor-chat`, `waitlist-signup`, `process-email-queue`, `create-checkout`, `get-stripe-price` exist).
- The default email comes from Lovable's default sender (NOT from `noreply@thecounselorexam.com` — because no `auth-email-hook` is deployed).
- User clicks the link → lands on `/reset-password` with a recovery session → enters new password → `supabase.auth.updateUser({ password })` updates it.

So a relevant gap: **password reset emails currently do NOT use the branded `noreply@thecounselorexam.com` sender** because auth email templates have not been scaffolded. The user said "for other automated tasks" they want noreply too — password reset is one of those.

I should mention this and offer to scaffold auth email templates so password reset (and future signup confirmation, magic links) come from `noreply@thecounselorexam.com` with branded styling matching the app.

Let me quickly verify there are no other mailto links I'm missing before finalizing.

## Plan

### 1. Audit & swap human contact points to `support@thecounselorexam.com`
- Search the codebase for all `mailto:` links and contact references.
- Update each to point to `support@thecounselorexam.com`. Known: Footer Contact link.

### 2. Confirm automated emails already use `noreply@`
- The waitlist confirmation and any future transactional email already send from `NCMHCE AI Prep <noreply@thecounselorexam.com>` via the verified `notify.thecounselorexam.com` sending domain. No code change needed.

### 3. How password reset works today
- User goes to `/forgot-password`, enters email.
- App calls Supabase Auth's `resetPasswordForEmail`, which generates a one-time recovery link and emails it.
- **Current sender**: Lovable's default auth email template (generic Lovable branding) — NOT `noreply@thecounselorexam.com`. This is because no custom auth email hook has been set up yet.
- User clicks the link → lands on `/reset-password` with a temporary recovery session → submits new password → `supabase.auth.updateUser({ password })` saves it → redirected to `/dashboard`.

### 4. Recommended: brand the auth emails so password reset comes from `noreply@`
To make password reset (and future signup verification, magic links) send from `noreply@thecounselorexam.com` with branded styling matching the rest of the app, I can set up custom auth email templates. This is a one-time setup that:
- Adds an auth email hook that intercepts password reset, signup confirmation, magic link, and email change emails
- Sends them via the same `notify.thecounselorexam.com` infrastructure
- Applies the app's brand colors and tone
- Once deployed, the default Lovable auth emails are replaced

I'll do this as part of the plan since the user explicitly said "other automated tasks" should use `noreply`.

### Steps to implement
1. Grep codebase for `mailto:` and contact references; update all human contact points to `support@thecounselorexam.com`.
2. Set up custom auth email templates so password reset and other auth emails send from `noreply@thecounselorexam.com` with branded styling.
3. Deploy the new auth email hook.
4. No changes needed to the existing waitlist confirmation flow — it already uses `noreply@`.

### What stays the same
- `notify.thecounselorexam.com` sending infrastructure (already verified, working)
- Waitlist confirmation email (already from `noreply@`)
- Password reset UX flow (`/forgot-password` → email → `/reset-password`) — only the email's sender + branding changes
