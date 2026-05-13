# Launch Plan: Founding Member Offer → June 1 Subscription

## Phase 1 — Export your email list (today)

I'll generate a CSV (downloadable from `/mnt/documents/`) with all collected contacts, deduped by email, with a `segment` column so you can filter in Sequenzy:

- `practice_exam` — completed the free diagnostic case (~79, includes full name + score)
- `signup` — created an account but didn't take diagnostic
- `waitlist` — only joined waitlist

Columns: `email, full_name, segment, signed_up_at, diagnostic_score`. ~93 unique emails total.

## Phase 2 — Stripe products (test now, live before June 1)

Two products in test mode (auto-syncs to live on publish):

1. **`founding_yearly`** — **$67 one-time payment, 1 year of access** (not lifetime)
2. **`ncmhce_monthly`** — $79/month subscription

For #1 I'll record `access_expires_at = now() + 1 year` on the user (new column on `profiles` or a `lifetime_purchases`-style row, renamed to `access_grants`). After that date, access reverts and they'd need to subscribe to the $79/mo plan.

You can fully test both in sandbox with card `4242 4242 4242 4242` before May 31.

## Phase 3 — Landing page changes

1. **Top announcement banner** (sticky, dismissible) — "🎉 Founding Member: 1 year of access for $67 (reg. $79/mo). Offer ends May 31 →" linking to `/founding`.
2. **Welcome popup** — fires once per visitor (localStorage flag) ~3s after landing. Same offer, dismissible.
3. **`/founding` page** — short pitch + embedded Stripe checkout for `founding_yearly`. Clearly states "1 year of access, then standard $79/mo pricing applies."
4. **Pricing section** — replace the current "Beta" card with the real $79/mo card, plus a highlighted founding offer callout (until May 31).

## Phase 4 — Auto-switchover on June 1

- **May 13 → May 31**: banner + popup + `/founding` checkout active.
- **June 1**: banner/popup auto-hide via `new Date() < new Date('2026-06-01')` check baked into the components — no republish needed. `/founding` page itself will also redirect to `/signup` after the cutoff.
- Founding members keep their 1 year of access (until purchase date + 365 days). After expiry they see the standard $79/mo offer.

## Phase 5 — Email copy for Sequenzy

Drafted to match your tone spec (professional, appreciative, urgency without spam) with corrected offer wording: **$67 one-time, 1 year of access, 7 days only**, then standard pricing applies. Delivered as plain text + HTML, CTA → `https://theexampath.com/founding`.

## Technical notes

- Stripe products use existing `_shared/stripe.ts` gateway.
- One-time `founding_yearly` purchase will set `profiles.access_expires_at` via the existing `payments-webhook` (extended to handle `checkout.session.completed` for `mode: 'payment'`).
- `useSubscription.hasAccess` extended to also return true when `profile.access_expires_at > now()`.
- Banner/popup are pure frontend.

## Order of execution after you approve

1. Export & deliver CSV
2. Create Stripe products (test)
3. Add `access_expires_at` column + extend webhook + update `useSubscription`
4. Build `/founding` page + banner + popup with May 31 cutoff
5. Update pricing section
6. Draft email copy
7. You test the flow in preview with test card
8. Publish + complete Stripe go-live before May 31

Want me to proceed end-to-end, or adjust anything first (banner copy, popup timing, exact end time on May 31)?
