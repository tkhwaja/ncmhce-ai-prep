# NCE Track — Phase 3 + 4 Plan

Goal: build the NCE content structure and upload path so content can be dropped in without code changes, while keeping NCE invisible in production until launch.

## Decisions resolved

- **NCE pricing**: founding price $59/month for the first week, regular $69/month. Founders keep $59 as long as their subscription stays active; if they cancel and return, they pay the current $69. NCMHCE stays at $79/month.
- **Launch question volume**: 1,000 question-bank items + 2 full-length NCE practice exams. You will provide the actual content later; this phase ships the validated structure and sample format.

## Phase 3 — NCE content structures + upload path (next)

1. **Define NCE data types** in `src/data/nce/types.ts` for multiple-choice questions, practice exams, library modules, and flashcards.
2. **Create sample data** in `src/data/nce/`:
   - One question per NCE domain (8 questions) so the format is clear.
   - One sample 50-question practice exam drawn from the bank.
   - One sample library module per domain.
   - One sample flashcard deck per domain.
3. **Build validation suite** in `src/lib/nce-content-validation.ts` and `src/test/nce-content-integrity.test.ts` to catch duplicate IDs, missing rationales, bad domain tags, and answer-key errors before any upload goes live.
4. **Add a `/questions` route** for the NCE question bank, behind the same feature flag so it is invisible in production.
5. **Make existing pages track-aware** by filtering database reads on `exam_track` (dashboard, narratives, practice exams, flashcards, library, study plan, analytics). This ensures users with both tracks never see mixed progress.
6. **Add a content-switching helper** (`src/lib/exam-content.ts`) so pages use the correct content set based on the active exam track.

**Gate:** all existing pages behave identically for NCMHCE users, all tests pass, and NCE remains hidden in production.

## Phase 4 — NCE billing

1. Create two Stripe products/prices in test mode:
   - `nce_founding_monthly` — $59/month (for first-week signups; founders keep this price as long as they stay subscribed).
   - `nce_monthly` — $69/month (regular price after founding week).
2. Update `src/config/exam-tracks.ts` with the new price IDs and a founding-price option.
3. Update the checkout flow to choose the correct price based on the current date/founding window.
4. Update the webhook to map each NCE price to the NCE track.

**Gate:** sandbox test purchases of NCE-only, NCMHCE-only, and both subscriptions unlock exactly the right tracks.

## Phase 5 — Launch

1. You upload the 1,000 questions and 2 exams; validation runs on every batch.
2. Full QA pass on both tracks (routes, paywall, mobile, dark mode, tests, health checks).
3. Flip the `NCE_ENABLED` flag and publish.

## What I need from you now

Approve this plan so I can start Phase 3 immediately. No further decisions are needed until Phase 4.