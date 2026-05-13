# Make the Free Diagnostic Case Harder

## Why

Current score distribution from `free_diagnostic_leads` (82 submissions on Tessa GAD case, 14 questions):

| Score | Count | % |
|------:|------:|--:|
| 100 (14/14) | 19 | 23% |
| 93 (13/14) | 32 | 39% |
| 86 (12/14) | 24 | 29% |
| 79 (11/14) | 3 | 4% |
| ≤64 | 4 | 5% |

23% perfect and ~62% scoring 93+ is too easy for a "diagnostic" — it under-sells the gap the paid product fills. Goal: bring the perfect-score rate down to **10–15%** and shift the median into the 70s–low 80s, which is closer to real NCMHCE difficulty.

## Approach

Keep the case (Tessa, GAD), the 14-question structure, the 3 sections, the narrative, the timing, and the domain mix. **Only the questions and rationales change.** Difficulty comes from better distractors and harder stems, not from trick questions.

### Concrete edits to `src/data/free-diagnostic-bundle.json`

1. **Tighten distractors.** Today most items have 1 obviously correct option and 3 clearly weak ones (e.g. "Reassure her that this is just anxiety" vs "Clarify what she means and assess for safety"). Rewrite each item so:
   - At least 2 options are clinically defensible.
   - The "best" answer wins on a specific NCMHCE principle (sequencing, safety-first, evidence base, scope of practice, ethical priority), not on being the only sane choice.
   - Remove obviously bad straw-man options ("just calm down", "tell her it's nothing", etc.).

2. **Add NCMHCE-style "best next step" framing** on ~6 of the 14 items. These are the items that statistically separate strong from weak test-takers (e.g. "*before* assigning homework, what should the counselor do *first*?" with two correct-sounding sequencing options).

3. **Upgrade ~3 items to higher-order reasoning**:
   - One diagnostic item that requires ruling out OCD / Adjustment Disorder / Illness Anxiety as plausible alternatives, not just "is this GAD yes/no".
   - One ethics/scope item (e.g. fiancé requesting an update — release, informed consent, and clinical judgment all in play).
   - One treatment-planning item that distinguishes CBT *technique sequencing* (psychoeducation → worry monitoring → cognitive restructuring → behavioral experiments) rather than "pick CBT vs psychoanalysis".

4. **Rewrite explanations** for every changed item so each rationale:
   - Says why the correct answer wins.
   - Says why each *plausible* distractor is second-best (not just wrong).
   - Names the NCMHCE principle being tested.
   This matches the project's existing rationale standard and reinforces the teaching value even when users miss items.

5. **Bump `difficulty` from `"intermediate"` to `"advanced"`** in the bundle so the UI label matches reality.

### What does NOT change

- Case narrative, MSE, family/work history, intake summary.
- Section count (3), question count (14), domain distribution, recommended minutes.
- Scoring logic, lead-capture flow, results email, or any DB schema.
- Practice exams and other narratives.

## Validation

- After editing, I'll re-read the bundle and spot-check that every item still has exactly 4 options and a valid `correctAnswer` index.
- No DB migration needed. Existing `free_diagnostic_leads` rows stay as historical data; new submissions will reflect the harder question set.
- We can re-check the score distribution after ~20 new submissions and tune further if needed.

## Open questions

1. Want me to keep the **same 14 question topics** and just rewrite distractors/stems, or is it OK to swap a couple of topics entirely (e.g. drop one easy "rapport" question and add one diagnostic-rule-out question)?
2. Should I also generate **2–3 extra hard items** so the case has 16–17 questions total, or strictly stay at 14?
