# Getting the NCE track launch-ready

## 1. Answering your questions first

**Exam Info NCE tab — already done.** `src/data/exam-info-nce.ts` has four sections (About the NCE, Strategies, Test-Day Checklist, FAQ) and the Exam Info page swaps to them automatically when the track is NCE.

**Where users choose their exam — the up-front choice is already the design, and it's the right one.** Signup asks for the exam track before the account is created, it's stored on the profile, and the whole app (sidebar nav, dashboard, study plan, library, flashcards, practice, analytics, pricing) reshapes off that one value. Per-section pickers would mean a choice on every page, split progress, and confusing analytics. The only extra piece we keep is the quiet track switcher in Profile / header for people studying for both — no change needed there.

## 2. NCE free diagnostic (first build item)

Today `/free-diagnostic-case` is hard-wired to the NCMHCE narrative. We mirror the funnel rather than invent a new one.

- **Chooser step:** a new `/free-diagnostic` page with two cards — "NCMHCE: clinical case simulation" and "NCE: 40-question knowledge diagnostic." Landing page, hero, navbar, and footer CTAs point here. `/free-diagnostic-case` keeps working as the NCMHCE deep link.
- **NCE diagnostic format:** 40 multiple-choice items, 5 per CACREP area, drawn from a dedicated diagnostic set (not the paid bank, so nothing is spent) — you supply the items, or I pull a balanced set from the existing 100-item batch as a first pass.
- **Same funnel as NCMHCE:** answer → name + email gate → scored results by content area → strengths/gaps → emailed PDF-style breakdown → CTA into the NCE track signup.
- **Backend:** reuse `free_diagnostic_leads` with an `exam_track` column and NCE-shaped domain scores; add an NCE variant of the diagnostic-report email template. Lead events fire the same Meta/PostHog tracking.
- NCE diagnostic stays behind `NCE_ENABLED` until you flip the launch switch, exactly like the rest of the track.

## 3. NCE readiness checklist

**Done**
- Track config, routing, sidebar, dashboard, study plan, analytics, profile, pricing ($59 founding / $69 regular), Stripe products
- Signup track selection + welcome modal
- Exam Info NCE sections; landing page NCE positioning
- Library architecture (8 subject areas × 6 NBCC domains), lesson renderer, DB-backed progress
- Practice Exam 1: all 200 items imported, 225-minute runner with the Q100 break, results by domain
- Question bank: 100 of 1,000 items imported, importer script in place

**Remaining before launch**
1. **Question bank:** 900 more items (batches of ~100, same markdown handoff). Blocked on your content.
2. **Question Bank UI:** practice modes (domain drill, timed set, missed-questions review), progress + accuracy tracking per domain, saved sessions.
3. **Learning Library content:** only the OR-01 batch is authored; the other seven subject areas need lessons + knowledge checks.
4. **Flashcards:** 16 NCE cards today; needs full decks across the eight areas.
5. **Practice Exam 2:** items to author, then wire like Exam 1.
6. **Free diagnostic (section 2 above).**
7. **Analytics for NCE:** content-area accuracy, readiness estimate, weak-area recommendations feeding the study plan.
8. **Study plan generation** tuned to NCE (question quotas, area rotation) rather than case narratives.
9. **Emails:** NCE welcome, diagnostic breakdown, founding-price confirmation.
10. **SEO:** NCE landing content, meta, FAQ/JSON-LD, sitemap entries.
11. **Launch flip:** set `NCE_ENABLED = true`, unhide Practice Exam 1, publish.

## 4. Suggested build order

Diagnostic chooser + NCE diagnostic → Question Bank practice UI → analytics/study-plan tuning → content batches as they arrive → emails + SEO → launch flip.

## Technical notes

- New files: `src/pages/FreeDiagnosticChooser.tsx`, `src/pages/FreeDiagnosticNce.tsx`, `src/data/nce/diagnostic.ts`.
- Migration: add `exam_track` (default `ncmhce`) to `free_diagnostic_leads`; keep existing rows valid.
- New transactional template `nce-diagnostic-breakdown` registered in the template registry.
- Everything new is gated by `NCE_ENABLED`; nothing publishes until you approve.
