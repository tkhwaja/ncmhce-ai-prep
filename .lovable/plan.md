## Goal

Three things in one pass:
1. Confirm screens scale properly on phone widths.
2. Run a platform-wide smoke test of the critical flows.
3. Verify the first paying user (Amanda Feder, aminakf1989@gmail.com) is set up correctly.

## What I already checked

**First paying user — looks healthy.**
- Profile: `payment_status = early_access`, `access_expires_at = 2027-05-31`. This is exactly what the founding-offer webhook (`early_access_yearly` lookup key) is supposed to set.
- No row in `subscriptions` — correct, founding is a one-time $67 payment, not a subscription. Access is gated through `profile.access_expires_at`, which `useSubscription.foundingActive` honors.
- Right now `isFreePromoActive()` is also true (free for everyone until May 31, 2026), so every gate is open regardless. Her paid year takes over automatically on June 1 via `foundingActive`.
- Email log: signup confirmation sent. No purchase-receipt email exists in the system today (Stripe sends its own receipt). I'll flag this rather than silently add a new template.

**Known gaps to confirm in this pass:**
- We did not send our own purchase confirmation — only Stripe's receipt. Want me to add one?
- `PaidFeatureGate` is currently a pass-through (renders children, ignores `feature`). Fine during the free promo, but it means access checks are only enforced by `useSubscription` consumers. Worth re-enabling before June 1.

## Mobile responsiveness audit (≤768px)

Walk through every public + signed-in screen at 390px and 360px in the browser tool. For each, check:
- Horizontal scroll / overflow
- Tap targets ≥40px
- Text legibility, no clipped headings
- Forms usable with on-screen keyboard
- Sticky headers/footers don't cover content

Screens to verify:
- Landing: `/`, `/founding`, `/free-diagnostic-case`, `/checkout`, `/checkout/return`
- Auth: `/login`, `/signup`, `/forgot-password`, `/reset-password`
- App shell: sidebar drawer, header, footer
- App pages: `/dashboard`, `/narratives`, `/narrative/:id`, `/library`, `/flashcards`, `/practice-exams`, `/practice-exam/:id/attempt/:id`, `/practice-exam/:id/results/:id`, `/study-plan`, `/analytics`, `/profile`, `/exam-info`, `/tools`

Fixes will be scoped to presentation only (Tailwind responsive classes, spacing, stacking) — no logic changes.

## Platform smoke test

Using the browser tool against the preview, signed in as a test account:
1. Landing → click "Get free access" → signup → redirect → dashboard renders.
2. Login → dashboard.
3. Open a narrative → answer a few items → submit → results render → attempt is saved (`narrative_attempts`).
4. Library: open one module from each of the 5 domains, confirm content renders.
5. Flashcards: open a deck, mark one card, verify `flashcard_progress` row.
6. Practice Exam: start an attempt, navigate cases, verify state persists on refresh.
7. Founding checkout (test mode): start session, complete with `4242 4242 4242 4242`, verify return page + profile updates to `early_access`.
8. Profile page: data loads, edits save.
9. AI chat sidebar: opens, sends a message, response streams.
10. Sign out → redirects, gated routes blocked.

Anything broken gets fixed in the same pass (frontend bugs only). Anything ambiguous gets reported back for your call.

## Amanda — extra confirmations

- Confirm she can actually load `/dashboard`, `/narratives`, `/library` (I'll do this by reading her profile + simulating the access checks; I can't log in as her).
- Verify her access end date math: webhook sets `access_expires_at` from Stripe's period end. Hers reads `2027-05-31`, exactly the founding terms (May 31, 2026 → May 31, 2027). ✅
- Recommend (don't auto-do): send her a personal welcome email since we don't have a purchase template yet.

## Out of scope

- Adding new features.
- Re-enabling `PaidFeatureGate` enforcement (separate decision, tied to June 1 promo end).
- Adding a purchase-confirmation email template (will ask before doing).

## Deliverable

A single report back with: mobile issues found + fixed, smoke-test results per flow (pass/fail), and confirmation on Amanda. Code changes will be Tailwind/responsive tweaks only.
