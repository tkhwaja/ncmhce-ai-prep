## Goal
Give `latanya@authenticperspectivescc.com` a full year of free access starting from her original subscription date, and ensure Stripe does not charge her again.

## How access works in this app
`useSubscription` grants access if ANY of these are true:
1. An active `subscriptions` row (Stripe-managed)
2. `profiles.payment_status = 'paid'` (legacy)
3. `profiles.access_expires_at` is in the future (founding-member style)

That means we don't need to touch Stripe billing dates at all — we can grant access purely through `profiles.access_expires_at`, then cancel her Stripe subscription so she's never billed again.

## Steps

### 1. Look up her account (read-only)
Run a `SELECT` against `profiles` and `subscriptions` for her email to get:
- `profiles.id`
- `subscriptions.stripe_subscription_id`
- `subscriptions.stripe_customer_id`
- `subscriptions.current_period_end`
- her original subscription start date (`subscriptions.created_at` or `current_period_start` of the first row)

### 2. Grant 1 year of free access in our DB
Insert/update `profiles` for her user:
```sql
UPDATE profiles
SET access_expires_at = <original_subscription_start> + INTERVAL '1 year',
    payment_status = 'comped'
WHERE email = 'latanya@authenticperspectivescc.com';
```
The `prevent_profile_sensitive_update` trigger blocks user edits to these fields but **bypasses for `service_role`**, so this runs fine as an admin SQL insert/update.

This alone guarantees access for 1 year regardless of Stripe status.

### 3. Stop Stripe from charging her
Two options — I recommend **Option A**:

**Option A (recommended): Cancel her Stripe subscription at period end.**
She keeps the time she already paid for, never gets billed again, and our `access_expires_at` covers the full year. One-time edge function call (or done by you in Stripe Dashboard) — no recurring management needed.

**Option B: Extend her Stripe subscription's `trial_end` by 12 months with `proration_behavior: 'none'`.**
Keeps the subscription "live" in Stripe but pauses billing for a year. More fragile — if anything changes on the sub, webhooks could overwrite state.

### 4. Send her the confirmation email
Use the draft email already prepared confirming her year of free access from her original subscription date.

## Technical details

- **No schema changes required.** Everything uses existing columns (`profiles.access_expires_at`, `profiles.payment_status`).
- **Migration vs insert tool:** This is a data update, so it goes through the insert/update path (service_role), not a schema migration.
- **Stripe cancellation:** Easiest path is for you to cancel her sub in the Stripe Dashboard (Customer → Subscription → Cancel → "at period end"). If you'd rather I build a small admin edge function to do it programmatically, I can — but for a one-off comp, Dashboard is faster.
- **Webhook safety:** When Stripe eventually fires `customer.subscription.deleted`, our webhook will mark the `subscriptions` row `canceled`. That's fine — her access still flows through `access_expires_at` on the profile.

## What I need from you to proceed
1. Confirm: cancel her Stripe sub via **Dashboard** (you) or **build an admin function** (me)?
2. Confirm her "original subscription date" should be the date of her **first** subscription row (in case she has more than one). I'll surface the exact date from the DB before applying the update.
