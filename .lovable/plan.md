## What's going on

Your `/founding` page already calls `create-checkout` with `priceId: "founding_yearly"` (lookup key). The edge function looks that up in Stripe via `lookup_keys` — if no Stripe price has that lookup key, checkout fails with "Price not found." That's almost certainly why you don't see the $67 offer wired up: the **product/price was never created in Stripe**.

The webhook (`payments-webhook`) is already correct: when a `checkout.session.completed` event comes in for a session whose line item has `lookup_key === "founding_yearly"`, it sets `profiles.access_expires_at = now + 1 year` and `payment_status = "founding"`. Then `useSubscription` grants access while `access_expires_at` is in the future.

So the only missing piece in code is the Stripe product itself. The cleanup of old products is a manual step in the payments dashboard (Lovable doesn't expose a delete-product tool).

## What clicking "Claim founding access" actually does

1. User lands on `/founding` (from email link, banner, popup, or pricing card).
2. The page mounts `<StripeEmbeddedCheckout priceId="founding_yearly" ...>`.
3. That component calls the `create-checkout` edge function, which:
   - Looks up the Stripe price by `lookup_key: "founding_yearly"`
   - Creates an embedded Checkout Session in `payment` mode (one-time)
   - Returns a `clientSecret`
4. Stripe's embedded form renders inline — user enters card and pays.
5. Stripe redirects to `/checkout/return?session_id=...`.
6. In parallel, Stripe fires `checkout.session.completed` to `payments-webhook`, which writes `access_expires_at = now + 365d` on the user's profile.
7. `useSubscription` sees `foundingActive === true` and unlocks the app.

## Plan

### 1. Create the founding product in Stripe (test mode)
Use Lovable's payments tool to create:
- **Product**: `founding_yearly` — "Founding Member — 1 Year Access"
- **Price ID (lookup key)**: `founding_yearly`
- **Amount**: $67 one-time (6700 cents, USD, no recurring interval)
- **Quantity**: locked to 1
- **Tax code**: `txcd_10103001` (SaaS / electronic services)

Lovable auto-syncs test → live on publish, so this single call covers both environments.

### 2. Ask you about tax handling
Stripe Embedded Checkout requires deciding once: full compliance (+3.5%, Stripe handles tax filing), calculation-only (+0.5%, you file), or none. I'll ask you before wiring this so we don't accidentally enable the higher fee.

### 3. Old products cleanup
I can't delete old Stripe products from here. After step 1 you'll:
- Open the Payments dashboard you're on now
- Archive the legacy products you no longer want shown ("Archive" — Stripe doesn't allow hard delete of products with prior charges)
- Confirm only the active SKUs remain: `ncmhce_monthly` ($79/mo) and `founding_yearly` ($67 one-time)

### 4. Test in sandbox (preview env uses `pk_test_`)
1. Open the preview URL, log in (or sign up) with a test account.
2. Click your email's CTA → lands on `/founding`.
3. Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.
4. Should redirect to `/checkout/return?session_id=...`.
5. Verify the webhook fired: check the user's row in `profiles` — `access_expires_at` should be ~1 year out, `payment_status = 'founding'`.
6. Navigate into a gated page (e.g. a paid narrative) — access should be granted.

### 5. Go live
Once test passes, hit Publish. Lovable copies the test product/price to live and the live webhook secret is already configured. Send the real email and the `/founding` link becomes a real $67 charge.

## Technical details

- Code is already correct — no source edits needed unless you change pricing or want to lock down the page when sold-out.
- `src/lib/foundingOffer.ts` auto-disables the offer at `2026-06-01T00:00:00-04:00` (banner, popup, and `/founding` route all redirect on June 1).
- Webhook detection is by `lookup_key === "founding_yearly"` on the line item, so do not rename the price ID after launch.
- If you want to *also* archive the old `$349 one-time` legacy product so it can never be checked out again, that's a dashboard click — the `useSubscription` hook still honors anyone who already paid via `profile.payment_status === "paid"`.