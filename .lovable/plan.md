
Three asks: (1) reasonable password rules + signup polish, (2) anti-account-sharing, (3) switch pricing to $129/month subscription.

## 1. Signup polish (reasonable password rules)
- Min 8 chars, must contain a letter and a number. No symbol/uppercase requirement.
- Add **Confirm Password** field with match check
- Live strength meter (Weak / Fair / Strong) with colored bar + small checklist
- Disable Create Account until rules pass + passwords match
- Fix verification redirect: `emailRedirectTo` → `/dashboard` (currently lands on landing page)
- Implementation: rewrite `src/pages/Signup.tsx` with react-hook-form + zod (both already installed)

## 2. Anti-account-sharing — honest tradeoffs
No method is perfect. Three real options:

- **Single active session (recommended).** Track active session per user. New login on any device silently signs out the previous one. Industry standard (Spotify-lite). Low friction — users can switch devices freely, just can't be logged in on two at once.
- **Concurrent-use flagging.** Allow multiple sessions but log heartbeats; if 2+ different IPs active in the same hour, email a warning, suspend on repeat. Passive, less aggressive.
- **Device lock.** Bind subscription to first device's fingerprint. Blocks all others. **Not recommended** — users WILL get locked out switching laptop ↔ phone ↔ work computer and you'll get refund requests.

I'll ask which you want before building. Implementation for the recommended option:
- New `active_sessions` table (`user_id`, `session_id`, `device_label`, `last_seen`, `created_at`)
- On login: insert row, mark current session
- App heartbeat every 60s updates `last_seen` and checks if a newer session exists for the same user → if yes, sign out with toast: "Signed in on another device"

## 3. Pricing → $129/month subscription
Current: one-time $349 (`ncmhce_full_access_onetime`, `mode: "payment"`). Switch to recurring monthly.

Changes:
- Create new Stripe product `ncmhce_monthly` at $129/month recurring
- Migration: add `subscriptions` table + `has_active_subscription()` security-definer function (per Stripe subscriptions pattern)
- Update `payments-webhook/index.ts` to handle `customer.subscription.created/updated/deleted` events (currently only handles `checkout.session.completed`)
- Update `src/components/landing/PricingSection.tsx` — copy: "$129/month", remove "lifetime" / "one-time" / "$349", update CTA
- Update `src/pages/CheckoutPage.tsx` — `priceId="ncmhce_monthly"`, update heading to "Start Your Subscription"
- Update `src/components/PaidFeatureGate.tsx` — query subscription status (not `profile.payment_status`), button: "Subscribe — $129/month"
- New `useSubscription` hook that queries `subscriptions` table for active row
- Add Stripe Customer Portal: new `create-portal-session` edge function + "Manage Subscription" button on `/profile` so users can cancel
- Keep old `ncmhce_full_access_onetime` product alive (don't break existing paid users) — `PaidFeatureGate` will treat anyone with `payment_status='paid'` OR an active subscription as having access

## Questions before I build

1. **Anti-sharing approach?** — Single active session (recommended) / Concurrent-use flagging / Device lock / Skip for now
2. **FIRST15 promo code on the pricing card** — Keep it (15% off first month) or remove?
3. **When user cancels, when does access end?** — End of paid month (standard) or immediately?
