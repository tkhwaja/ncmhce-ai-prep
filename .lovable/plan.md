## Goal

When a user clicks **Cancel** in Profile, actually cancel their Stripe subscription at period end (keeps access until paid period ends), in addition to the existing support-feedback email. UI should immediately reflect "cancels at period end".

## Changes

### 1. `supabase/functions/submit-cancellation-feedback/index.ts`
After the support email is sent successfully, also cancel the Stripe sub:
- Accept `environment: 'sandbox' | 'live'` in the request body (validated; no default).
- After loading the latest `subscriptions` row for the user, also select `stripe_subscription_id` and `environment`.
- If a row exists with a `stripe_subscription_id` matching the requested env AND status is not already `canceled` AND `cancel_at_period_end` is not already true:
  - `const stripe = createStripeClient(env)`
  - `await stripe.subscriptions.update(stripe_subscription_id, { cancel_at_period_end: true })`
- Let the existing `customer.subscription.updated` webhook update the local row (no direct DB write needed — webhook is already wired).
- If the user has no Stripe sub (founding member / one-time), skip the Stripe call — email-only behavior preserved.
- Wrap the Stripe call in try/catch: if it fails, still return success for the email but include `stripeCancelError` in the response so the client can surface it. Do not swallow silently.

### 2. `src/pages/Profile.tsx` — `handleSubmitCancellation`
- Pass `environment: getStripeEnvironment()` in the invoke body.
- On success, call `sub.refresh()` so the UI updates without a reload.
- Update the success toast copy:
  - With Stripe sub: *"Subscription canceled. You'll keep access until {date}."*
  - Founding/no-sub: *"Feedback submitted. Our team will follow up shortly."*
- If response includes `stripeCancelError`, show a destructive toast pointing to "Manage Billing".

### 3. No DB migration, no webhook changes
The webhook (`payments-webhook` → `handleSubscriptionUpdated`) already syncs `cancel_at_period_end` and `status` into the `subscriptions` table.

## Manual test plan (sandbox)

1. Log in as the test user with the active sandbox sub.
2. Profile → Cancel → pick reason → Submit.
3. Verify in this order:
   - Toast shows "Subscription canceled. You'll keep access until …".
   - `subscriptions` row (sandbox, this user): `cancel_at_period_end=true`, `status` still `active`.
   - Profile UI now shows *"Status: active (cancels at period end)"* and hides the Cancel button.
   - Support inbox received the `subscription-cancellation-feedback` email.
   - Stripe sandbox dashboard shows the sub scheduled to cancel at period end.
4. Re-open the dialog — Cancel button should no longer be present (guarded by `!sub.cancelAtPeriodEnd && sub.status !== 'canceled'`).

## Out of scope
- No immediate (mid-period) cancellation / refund flow — period-end only.
- No change to founding-member / legacy paid flow beyond the existing feedback email.
- No new fields on the cancel dialog.
