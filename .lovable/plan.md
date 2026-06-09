## Goal

Fix the critical security issue: any logged-in user can currently run an update on their own `profiles` row and set `payment_status = 'paid'` or push `access_expires_at` into the future, unlocking the platform for free.

## Why current paying customers are safe

- Paid status is written by **Stripe webhooks / edge functions using the service role key**, not by the browser.
- The fix only blocks the *client* from writing `payment_status` and `access_expires_at`. Service role keeps full access.
- No data is changed. Existing `paid` users stay `paid`, existing `access_expires_at` values stay intact.
- The frontend never legitimately writes these two columns, so no UI breaks.

## The fix (one database migration)

There is already a function in the database called `prevent_profile_sensitive_update` that does exactly the right thing:
- If the caller is `service_role` → allow anything (webhooks keep working).
- Otherwise → block changes to `payment_status`, `email`, and `id`.

But it is not currently attached to the `profiles` table, so it never runs. The migration will:

1. Attach `prevent_profile_sensitive_update` as a `BEFORE UPDATE` trigger on `public.profiles`.
2. Extend the function to also block changes to `access_expires_at` from non-service-role callers (the existing version only guards `payment_status`, `email`, `id`).
3. Tighten the RLS UPDATE policy on `profiles` to add a `WITH CHECK (auth.uid() = id)` as defense-in-depth, so even if the trigger were dropped, users still can't write rows belonging to others.

## What this does NOT change

- No table columns added or removed.
- No data rewritten.
- No edge functions changed.
- No frontend code changed.
- Stripe webhook (`payments-webhook`) and any admin edge functions continue to update `payment_status` and `access_expires_at` normally because they use the service role key.

## Verification after deploy

- Confirm a logged-in test user gets a permission error when attempting `update profiles set payment_status='paid'` from the browser.
- Confirm an existing paid user still sees paid access (no change to their row).
- Confirm a fresh Stripe test checkout still flips a new user to paid via the webhook.
- Re-run the security scan and mark `profiles_payment_self_update` as fixed.

## Out of scope (will be tackled in follow-up plans)

The other ERROR-level findings (email function auth bypasses, open blast endpoints, `test-send-emails`) are not touched here so this change stays small and low-risk. We will handle them next, in order of impact.
