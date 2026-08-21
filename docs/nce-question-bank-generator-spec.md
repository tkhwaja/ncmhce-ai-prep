# NCE Question Bank — Generator Spec (Batches 002–010, 900 items)

Hand this whole document to the generator. It is self-contained: quotas, field shape,
writing rules, and the metadata the app needs so 1,000 items stay navigable.

Bank target: **1,000 items**. Batch 001 (items `NCE-QB-CUR-0001`–`0100`) is already imported.
Deliver **9 batches of exactly 100 items**, one JSON file per batch.

---

## 1. Deliverable

One file per batch: `nce_questions_batch_00X.json`

```json
{ "batchId": "002", "questions": [ /* exactly 100 items */ ] }
```

A bare top-level array is also accepted. Import command (run by the dev, not the generator):

```bash
bun scripts/import-nce-batch.ts nce_questions_batch_002.json --questions
```

The importer **rejects the whole batch** if any quota, required field, ID-sequence,
or duplicate rule below is violated. Nothing is partially imported.

---

## 2. Item field shape (all fields required unless marked optional)

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
  "explanation": "2–4 sentences teaching the underlying principle.",
  "keyTakeaway": "Stability across time is test-retest reliability, not internal consistency.",
  "tags": ["psychometrics", "reliability"]
}
```

Rules per field:

| Field | Rule |
| --- | --- |
| `id` | `NCE-QB-CUR-####`, continuing the global sequence. Batch 002 = 0101–0200, 003 = 0201–0300, … 010 = 0901–1000. No gaps, no reuse. |
| `domain` | Exactly one of the eight study areas in §3. Verbatim string, no abbreviations. |
| `blueprintDomainId` | `D1`–`D6` per §4. |
| `taskCode` | NBCC task code such as `2.C`. Optional but preferred. |
| `topic` | 2–5 word label. **Required** — it powers the topic drills and search. Use the controlled list in §6 where one fits. |
| `subtopic` | One short phrase naming the exact discrimination being tested. |
| `moduleId` | Curriculum module the item links back to: `PO-01`…`PO-06`, `SC-01`…, `CH-01`…, `GC-01`…, `AT-01`…, `CD-01`…, `RP-01`…`RP-05`. Must be a real module id. |
| `difficultyLevel` | Integer 2–5 per §5. Do **not** send `difficulty` — the importer derives Easy/Medium/Hard. |
| `stem` | One question. 15–70 words. No "Which of the following…" filler openings on more than 20% of items. |
| `options` | Exactly 4, one correct, similar length (longest ≤ 1.6× shortest). |
| `correctAnswerIndex` | 0-based. Spread across 0/1/2/3 — each position ≥ 15% of the batch. |
| `optionRationales` | Exactly 4, aligned by index. Correct one starts `"Correct."`, others start `"Incorrect."` and name the specific error. |
| `explanation` | 2–4 sentences, teaches the principle, not just "option C is best". |
| `keyTakeaway` | One sentence, ≤ 140 chars. |
| `tags` | 2–4 lowercase keywords, hyphenated. Used by search. |

Do **not** author: `difficulty`, `blueprintDomainName` (importer adds them).

---

## 3. Study-area (CACREP) targets across the 900 items

Batch 001 over-weighted Counseling and Helping Relationships. These are the
**cumulative** end-state counts for the full 1,000-item bank:

| Study area (`domain` value, verbatim) | Bank target | Already in 001 | Remaining across 002–010 |
| --- | --- | --- | --- |
| Professional Counseling Orientation and Ethical Practice | 150 | 24 | 126 |
| Social and Cultural Diversity | 110 | 6 | 104 |
| Human Growth and Development | 110 | 5 | 105 |
| Career Development | 100 | 3 | 97 |
| Counseling and Helping Relationships | 250 | 52 | 198 |
| Group Counseling and Group Work | 100 | 4 | 96 |
| Assessment and Testing | 110 | 3 | 107 |
| Research and Program Evaluation | 70 | 3 | 67 |

Per-batch guidance (±3 per area): batches 002–004 lead with the thinnest areas
(Assessment and Testing, Research, Career Development, Group Work, Social and Cultural
Diversity), batches 005–010 run roughly proportional to the remaining column.

---

## 4. NBCC work-behavior quota — per batch of 100 (±3)

| Domain | Title | Items per 100 |
| --- | --- | --- |
| D1 | Professional Practice and Ethics | 12 |
| D2 | Intake, Assessment, and Diagnosis | 12 |
| D3 | Areas of Clinical Focus | 29 |
| D4 | Treatment Planning | 9 |
| D5 | Counseling Skills and Interventions | 30 |
| D6 | Core Counseling Attributes | 8 |

Both §3 and §4 must hold at once: study area = *what content*, D1–D6 = *what behavior*.

---

## 5. Difficulty spread — per batch of 100 (±5)

| `difficultyLevel` | Item kind | Count |
| --- | --- | --- |
| 2 | Recall, definition, term discrimination | 15 |
| 3 | Straightforward application to a 1–2 sentence vignette | 45 |
| 4 | Analysis / "what should the counselor do NEXT" / multi-factor | 30 |
| 5 | Hardest discrimination between two defensible options | 10 |

---

## 6. Topic hygiene (this is what keeps the bank feeling organized)

- Each `topic` may appear **at most 3 times per batch** and **at most 8 times across the whole bank**.
- Maintain a running topic ledger across batches and include it with each delivery as
  `topics_used_through_batch_00X.md` so the next batch does not re-test the same point.
- Every batch should touch **at least 35 distinct topics**.
- Use consistent topic naming so drills group cleanly — e.g. always `Informed Consent`,
  never a mix of `Consent`, `Informed consent process`, `Client consent`.

Anchor topic vocabulary (extend as needed, keep the casing):
Informed Consent · Confidentiality and Privilege · Duty to Warn · Mandated Reporting ·
Supervision and Consultation · Scope of Practice · Boundary and Multiple Relationships ·
Cultural Humility · Acculturation · Privilege and Oppression · Piaget · Erikson ·
Attachment · Moral Development · Grief and Loss · Holland/RIASEC · Super's Life-Span ·
Krumboltz Social Learning · Career Assessment · Person-Centered · CBT · REBT · DBT · ACT ·
Solution-Focused · Motivational Interviewing · Family Systems · Narrative Therapy ·
Working Alliance · Termination and Referral · Crisis and Risk Assessment ·
Substance Use Screening · Yalom Therapeutic Factors · Group Stages · Group Leadership ·
Co-Leadership and Ethics in Groups · Reliability · Validity · Standardization and Norms ·
Standard Scores and Percentiles · Diagnostic Interviewing · DSM-5-TR Differential ·
Research Designs · Sampling · Statistical Significance · Program Evaluation · Outcome Measurement

---

## 7. Content accuracy rules

- DSM-5-TR wording for anything diagnostic; never invent criteria or thresholds.
- Ethics items must be traceable to the ACA Code of Ethics.
- Keep "exam strategy" out of stems and rationales — teach the principle.
- No "all of the above", "none of the above", double negatives, or absolutes ("always", "never")
  in the keyed option unless the principle genuinely is absolute.
- No client-identifying real cases, no prep-company folklore stated as fact.
- Pre-July-2027 exam version: 4 options, no multi-select, no drag-and-drop.

---

## 8. Self-check the generator must run before delivering a batch

1. 100 items, IDs contiguous and in the batch's assigned range.
2. Study-area counts within ±3 of the batch plan; D1–D6 within ±3; difficulty within ±5.
3. Every `moduleId` is a real module id; every item has `topic` and `keyTakeaway`.
4. `optionRationales.length === options.length === 4` on every item; exactly one `"Correct."`.
5. Correct-answer position distribution: each of A–D ≥ 15%.
6. No duplicated stems (compare normalized text) and no topic over its cap.
7. Deliver the batch JSON + the updated topic ledger.

---

## 9. Batch schedule

| Batch | ID range | Lead study areas |
| --- | --- | --- |
| 002 | 0101–0200 | Assessment and Testing, Research and Program Evaluation |
| 003 | 0201–0300 | Career Development, Group Counseling and Group Work |
| 004 | 0301–0400 | Social and Cultural Diversity, Human Growth and Development |
| 005 | 0401–0500 | Counseling and Helping Relationships, Professional Orientation |
| 006 | 0501–0600 | Assessment and Testing, Counseling and Helping Relationships |
| 007 | 0601–0700 | Human Growth and Development, Career Development |
| 008 | 0701–0800 | Group Work, Social and Cultural Diversity |
| 009 | 0801–0900 | Counseling and Helping Relationships, Ethics |
| 010 | 0901–1000 | Proportional top-up to hit the §3 bank targets exactly |
