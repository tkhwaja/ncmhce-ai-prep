# Adding an NCE Track Alongside NCMHCE

Goal: a second exam track (NCE) that mirrors the existing layout and quality, built entirely behind a feature flag so current NCMHCE users see zero change until you say "go live."

## Guiding rules

1. **Nothing ships early.** All NCE UI sits behind a build flag that is off in production. Every deploy in the meantime is safe.
2. **Additive only.** No existing table, column, route, or component changes behavior for current users. New columns get defaults of `ncmhce` so all existing data stays correct.
3. **Separate subscription.** NCE is its own product/price. Existing NCMHCE subscribers are unaffected; they can add NCE separately.
4. **Switch anytime.** An exam switcher in the app header; progress is tracked per track so a user with both never sees mixed data.
5. **Content placeholder first.** Since NCE material doesn't exist yet, the build delivers the full structure plus a validated upload format, so content can drop in later without code changes.

## Current status

```text
Phase 1  Foundation          DONE   track config, DB migration, per-track entitlements, feature flag
Phase 2  Track-aware shell   DONE   provider wired into App.tsx, sidebar, paywall, checkout, AI chat gating
Phase 3  NCE content shapes  NEXT   question bank, practice exams, library modules, flashcards, validation suite
Phase 4  Billing             PENDING separate NCE Stripe product/price, track-aware webhook mapping
Phase 5  Content load + launch PENDING upload NCE material, final QA, flip the flag
```

## Decisions already made

- **Access model:** separate NCE subscription, not bundled into NCMHCE.
- **Exam switching:** users can switch anytime and can hold both subscriptions.
- **Launch content:** full parity placeholder structure, content uploaded later.

## Decisions still needed from you

1. **NCE price** — same $79/month, or different? And do you want a both-exams bundle price at launch or later?
2. **Question volume target** for launch (e.g. 500 bank questions + 2 full 200-question practice exams) so the practice-exam weighting math is built to the right size.

## Phase 3 — NCE content structures + upload path (next)

NCE is a multiple-choice exam across eight domains, not case simulations, so it needs its own shapes:

- **Question bank**: domain-tagged multiple-choice items with rationales for correct *and* incorrect options (matching your rationale standard).
- **Practice exams**: fixed-length, timed, domain-weighted sets drawn from the bank.
- **Library modules**: same renderer as today, NCE domain structure.
- **Flashcards**: same deck format, NCE decks.
- A schema + validation test suite so any content you add is checked automatically for duplicate IDs, missing rationales, bad domain tags, and answer-key errors — the same class of check that caught the duplicate-question bug in the NCMHCE narratives.
- Empty datasets ship with clean "content coming soon" states so nothing looks broken mid-build.

**Gate:** validation tests pass on a small sample set I generate as a format example for you to approve.

## Phase 4 — Billing

- New NCE product and monthly price in test mode, synced to live on publish.
- Checkout, paywall, and profile billing become track-aware: a user can hold NCMHCE, NCE, or both, with the paywall naming the right exam and price.
- Webhook maps the purchased price to the right track. NCMHCE mapping is unchanged, so live subscribers are untouched.

**Gate:** sandbox purchase of NCE-only, NCMHCE-only, and both; verify each unlocks exactly its own track and nothing else.

## Phase 5 — Content load + launch

- You upload NCE material; validation runs on every batch.
- Full pre-launch pass: every route on both tracks, paywall states, mobile, dark mode, integrity tests, health checks extended to cover NCE.
- Flip the flag on and publish. Marketing/landing/SEO updates for NCE at the same time.

## What I need from you to start Phase 3

- Answer the two decisions above (price and question volume target).
- After Phase 3 I'll give you one sample question and one sample library module in the exact format; approve those and everything else can be produced against them.

## Technical notes

- Track config centralized in `src/config/exam-tracks.ts`; data lives under `src/data/nce/` mirroring `src/data/library/` and `src/data/narratives/`.
- Flag: `VITE_ENABLE_NCE`, on in `.env.development`, off in `.env.production` until launch.
- `useSubscription` already exposes `hasAccessTo(track)` while keeping the current `hasAccess` boolean as an NCMHCE alias, so no existing call site breaks.
- Stripe entitlement mapping keys off `price_id` (stable across sandbox/live), not `product_id`.
- New content gets a Vitest suite modeled on `narrative-integrity.test.ts`.
