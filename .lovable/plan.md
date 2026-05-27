## Short answer

No — Practice Exam 1 was **not** updated for difficulty. The narratives are the original versions, and the database confirms it:

**Recent completions on Practice Exam 1:**
- 98%, 97%, 97%, 97%, 96%, 93% (last 6 finishers)
- Every domain averaging 88–100%

That's not user skill — that's the item bank. I reviewed the questions in `practice-exam-01-case-03-neha-gad.ts` and the pattern is consistent across all 11 cases: the correct answer is obvious and the 3 distractors are weak (one is blaming, one is advice-giving, one is clinically absurd). Real NCMHCE items have 2–3 *plausible* options where the difference is subtle clinical judgment.

## What to change

Rewrite the question bank for all 11 Practice Exam 1 cases to NCMHCE-grade difficulty, without changing the narratives, scoring engine, exam structure, or UI.

**Files touched (data only):**
- `src/data/narratives/01-priya-gad.ts`
- `src/data/narratives/02-marcus-mdd.ts`
- `src/data/narratives/03-david-ptsd.ts`
- `src/data/narratives/04-elena-bipolar.ts`
- `src/data/narratives/05-james-aud.ts`
- `src/data/narratives/exam-01-02-danielle-mdd.ts`
- `src/data/narratives/practice-exam-01-case-03-neha-gad.ts`
- `src/data/narratives/practice-exam-01-case-04-luis-panic.ts`
- `src/data/narratives/practice-exam-01-case-05-rachel-aud.ts`
- `src/data/narratives/practice-exam-01-case-06-samuel-ocd.ts`
- `src/data/narratives/practice-exam-01-case-07-monica-bipolar-ii.ts`

No code changes, no schema changes, no scoring logic changes. Existing user attempts remain valid (questions are referenced by id; I'll keep ids stable and only rewrite stems/options/correctAnswer/explanation).

## Difficulty rubric I'll apply to every item

1. **Two-plausible distractor rule** — at least two options must be defensible-sounding clinical actions. Discriminator is *order of operations*, *stage of treatment*, *ethical priority*, or *specificity to diagnosis*.
2. **Remove "obvious-wrong" options** — no blaming family, no "tell them to just stop," no "ignore the symptom," no advice the user would never pick.
3. **Test sequencing, not recognition** — e.g. "what do you do *next*" when safety, informed consent, assessment, and intervention are all reasonable in isolation.
4. **Domain-true scoring traps** — Assessment/Diagnosis items force differential reasoning (GAD vs. adjustment vs. OCD vs. illness anxiety), not category labeling.
5. **Ethics items** — pull from ACA Code real sections (A.2 informed consent, B.2.a duty to warn, A.4.b personal values, C.2.a boundaries of competence) with two options that both *sound* ethical.
6. **Treatment planning items** — distinguish phase-of-treatment (stabilization vs. processing vs. relapse prevention) and evidence-based first-line vs. reasonable second-line.
7. **Calibrate target score** — average completion should land **70–80%** for a prepared test-taker, with weaker domains pulling individuals into the 60s. No item bank where 6/6 finishers clear 93%.

## Scope guardrails

- I will **not** touch Practice Exam 2 (still coming-soon), the standalone narratives shown outside the exam, the scoring engine, or the UI.
- I will **keep question ids stable** so existing `narrative_attempts` rows continue to map.
- I will **keep question counts per case the same** so the exam length and timing don't shift.
- I will **not** rewrite the narrative text, MSE, or intake summaries — only the question stems, options, correctAnswer index, and explanations.

## Out of scope (ask if you want these too)

- Recalibrating Practice Exam 2 when it ships (will mirror this rubric automatically).
- Adding a difficulty indicator on the results screen ("Your score vs. typical NCMHCE pass band").
- Resetting/flagging the 6 inflated historical attempts.

Want me to proceed with the rewrite across all 11 cases?