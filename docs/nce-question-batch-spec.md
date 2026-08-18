# NCE Question Batch Authoring Spec

Use this document as the authoring brief for every question batch after Batch 001.
Include it (or paste its rules) in the authoring prompt — the quotas are what keep the
1,000-item bank aligned with the real NBCC blueprint.

Target: 1,000 items total. Batch 001 (100 items) is already imported. Batches 002–010
supply the remaining 900, 100 items per batch.

## Deliverable

One JSON file per batch, named `nce_questions_batch_00X.json`, containing either a top-level
array of items or `{ "batchId": "002", "questions": [ ... ] }`.

Import with:

```bash
bun scripts/import-nce-batch.ts nce_questions_batch_002.json --questions
```

The importer refuses the batch if any quota, field, or duplicate rule below is violated.

## Per-batch blueprint quota (NBCC current exam weights)

| Domain | Title | Items per 100 |
| --- | --- | --- |
| D1 | Professional Practice and Ethics | 12 |
| D2 | Intake, Assessment, and Diagnosis | 12 |
| D3 | Areas of Clinical Focus | 29 |
| D4 | Treatment Planning | 9 |
| D5 | Counseling Skills and Interventions | 30 |
| D6 | Core Counseling Attributes | 8 |

Tolerance: ±3 items per domain.

## Per-batch difficulty spread

| difficultyLevel | Kind of item | Items per 100 |
| --- | --- | --- |
| 2 | Recall / definition / term discrimination | 15 |
| 3 | Straightforward application to a short vignette | 45 |
| 4 | Analysis, "what should the counselor do NEXT", multi-factor reasoning | 30 |
| 5 | Hardest discrimination between two defensible options | 10 |

Tolerance: ±5 items per level. The importer derives the `Easy/Medium/Hard` label from the level
(2 = Easy, 3 = Medium, 4–5 = Hard), so do not send a label.

## Item rules

- Exactly 4 options, exactly one correct.
- `optionRationales` must have one entry per option: incorrect options start with "Incorrect."
  and name the specific reason; the correct one starts with "Correct."
- `explanation` teaches the underlying principle in 2–4 sentences; `keyTakeaway` is one line.
- Every item maps to a curriculum module id (`PO-01`…`RP-05`) so it can link back to a lesson.
- `topic` may repeat at most 3 times inside a batch. Keep a running topic list across batches so
  the same point is not re-tested repeatedly.
- Spread the correct answer roughly evenly across positions A–D (each at least 15%).
- No "all of the above" / "none of the above", no double negatives, no option that is longer than
  the others purely because it is correct.
- Content must align with DSM-5-TR, the ACA Code of Ethics, and CACREP-derived areas. No invented
  criteria, no prep-company folklore presented as fact.

## Field shape

```json
{
  "id": "NCE-QB-CUR-0101",
  "domain": "Assessment and Testing",
  "blueprintDomainId": "D2",
  "taskCode": "2.C",
  "topic": "Reliability and Validity",
  "subtopic": "Test-retest versus internal consistency",
  "moduleId": "AT-03",
  "difficultyLevel": 3,
  "stem": "A counselor needs evidence that a symptom measure produces stable scores across two weeks. Which evidence is MOST relevant?",
  "options": ["...", "...", "...", "..."],
  "correctAnswerIndex": 2,
  "optionRationales": ["Incorrect. ...", "Incorrect. ...", "Correct. ...", "Incorrect. ..."],
  "explanation": "...",
  "keyTakeaway": "Stability across time is test-retest reliability, not internal consistency.",
  "tags": ["psychometrics", "reliability"]
}
```

`id` continues the `NCE-QB-CUR-####` sequence (Batch 001 ends at 0100, so Batch 002 starts at 0101).
`blueprintDomainName` and `difficulty` are added by the importer — do not author them.

## Batch order (fills thin areas first)

| Batch | Emphasis within the blueprint quota |
| --- | --- |
| 002 | Research and Program Evaluation + Assessment and Testing heavy |
| 003 | Career Development + Group Counseling and Group Work heavy |
| 004 | Social and Cultural Diversity + Human Growth and Development heavy |
| 005–010 | Straight blueprint quota, spread across all eight study areas |

Emphasis means: keep the D1–D6 quota above, but choose the *study areas* inside each domain so the
thin CACREP areas catch up. Batch 001 over-weighted Counseling and Helping Relationships (52 items)
and under-weighted Career Development (3), Research (3), Group Work (4), and Social and Cultural
Diversity (6).

## After import

`src/data/nce/questions.ts` registers each batch, and `src/test/nce-content-integrity.test.ts`
re-validates the whole bank (ids, stems, rationales, module ids, blueprint coverage) on every run.
