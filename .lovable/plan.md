# How to author the remaining 900 NCE questions

Short answer: not random. There is already a structure in place, and Batch 001 drifted from it — so the next 900 should be authored to a fixed per-batch blueprint quota, in batches of 100, using the same field shape the practice exam items already use.

## What already exists

- `src/data/nce/questions-batch-001.ts` — 100 items, tagged with the 8 CACREP study areas, difficulty, tags, per-option rationales.
- `src/data/nce/practice-exam-01-items.ts` — 200 items with a richer shape: NBCC blueprint domain (D1-D6), task code, topic/subtopic, 1-5 difficulty, key takeaway.
- `src/data/nce/library/blueprint-domains.ts` — official NBCC weights for the current exam: Professional Practice and Ethics 12%, Intake/Assessment/Diagnosis 12%, Areas of Clinical Focus 29%, Treatment Planning 9%, Counseling Skills and Interventions 30%, Core Counseling Attributes 8%.
- `scripts/import-nce-batch.ts` — importer + validator, but it currently handles **library lesson markdown only**, not question batches.
- `src/test/nce-content-integrity.test.ts` — validates the bank on every test run.

## Problem the plan fixes

Batch 001's distribution is heavily skewed: 52 items in Counseling and Helping Relationships, but only 3 in Career Development, 3 in Research and Program Evaluation, 4 in Group Work, 6 in Social and Cultural Diversity. Difficulty is 80 Hard / 20 Medium — harder than the real exam. Bank items also carry no blueprint domain tag, so they can't feed blueprint-accurate drills or analytics.

## The structure to author against

Batches of 100 (9 batches: 002-010). Each batch is a self-contained mini-exam-shaped set, so any batch can back a drill, a study-plan block, or a future practice exam.

Per-batch quota by NBCC blueprint domain (matches the real weights):

```text
D1  Professional Practice and Ethics ............ 12
D2  Intake, Assessment, and Diagnosis ........... 12
D3  Areas of Clinical Focus ..................... 29
D4  Treatment Planning ..........................  9
D5  Counseling Skills and Interventions ......... 30
D6  Core Counseling Attributes ..................  8
                                                 ---
                                                 100
```

Per-batch difficulty spread (1-5 scale, closer to the real exam):

```text
Level 2 (recall/definition) ....... 15
Level 3 (application) ............. 45
Level 4 (analysis/next-step) ...... 30
Level 5 (hardest discrimination) .. 10
```

Also required per batch:
- Every item maps to a curriculum module id (PO-01, AT-03, CH-05, ...) so questions link back to library lessons.
- No topic repeated more than 3 times inside a batch; each batch carries a topic list so later batches avoid re-testing the same points.
- 4 options, exactly one correct, per-option rationale for all four, overall explanation, one-line key takeaway.
- The correct-answer index is spread roughly evenly across A/B/C/D.

Balancing note: Batches 002-010 also correct Batch 001's skew, so the finished 1,000-item bank lands on the blueprint weights overall, with Career Development, Research, Group Work, and Social/Cultural Diversity brought up to their proper share.

## Handoff format

Same working pattern as the library batches: you author in a single file per batch, I import and validate.

- You provide one JSON file per batch (`nce_questions_batch_002.json`) in the same field shape as the practice exam items.
- I extend `scripts/import-nce-batch.ts` with a `--questions` mode that converts the JSON into a typed `src/data/nce/questions-batch-00X.ts` and fails the import if the quota, difficulty spread, rationale count, or module id mapping is off.
- A batch spec sheet (`docs/nce-question-batch-spec.md`) states the quotas, field definitions, style rules, and a worked example item to author from — including it in the authoring prompt is what keeps distribution on target.

## Technical work in this plan

1. Extend `NCEQuestion` in `src/data/nce/types.ts` with `blueprintDomainId`, `blueprintDomainName`, `taskCode?`, `topic`, `subtopic?`, `moduleId?`, `difficultyLevel` (1-5), `keyTakeaway?` — all optional-tolerant so Batch 001 keeps compiling.
2. Backfill Batch 001: add blueprint domain, topic, module id, and 1-5 difficulty to its 100 items, and re-map its difficulty labels toward the target spread.
3. Write `docs/nce-question-batch-spec.md` (the authoring spec above).
4. Add `--questions` import + validation mode to `scripts/import-nce-batch.ts`.
5. Add bank-level integrity tests: overall blueprint distribution within tolerance, unique ids and stems, valid correct-answer index, 4 rationales per item, module ids resolve in the curriculum.
6. Register each imported batch in `src/data/nce/questions.ts` as it lands.

Nothing here is published; NCE stays behind `NCE_ENABLED`.

## Suggested batch order

Fill the thin areas first so the bank is usable early: Batch 002 Research + Assessment/Testing heavy, 003 Career Development + Group Work heavy, 004 Social and Cultural Diversity + Human Growth heavy, then 005-010 on straight blueprint quota.
