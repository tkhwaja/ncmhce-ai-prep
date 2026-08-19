# NCE Learning Library — Authoring Spec (Batches 10–51)

Single source of truth for generating NCE Learning Library content. Hand this whole file
to the content generator. It merges the generator's Batches 10–51 spec with the platform's
importer rules, and supersedes the format used for Batches 01–09 (already imported; see
section 8).

The importer (`scripts/import-nce-batch.ts`) **enforces** everything marked "blocks the
import." A batch that violates one of those rules writes nothing and exits with an error
list, so it is cheaper to follow the format than to fix it afterwards.

---

## 1. Exam version lock

Content targets the **current NCE (pre-July 2027)**:

- Six-domain NBCC blueprint (see valid `blueprintDomain` values in section 4).
- Four-option multiple-choice items only. Never three options, never five.
- No "new 2027 blueprint" framing, badges, or domain names in lesson prose.

The July 2027 blueprint exists in the platform for later use. Using its domain ids in a
batch **blocks the import**.

---

## 2. Golden rule: one batch = one curriculum module

Do not invent module numbering or split a module across batches. The curriculum is fixed
in the platform at **51 modules**, so there are **51 batches total**. Batches 01–09 are
done, leaving **42 remaining**.

### Remaining modules to author, in order

| # | Module ID | Title |
|---|---|---|
| 10 | CH-02 | Foundational Counseling Skills |
| 11 | CH-03 | Psychodynamic and Adlerian Approaches |
| 12 | CH-04 | Humanistic and Experiential Approaches |
| 13 | CH-05 | Behavioral and Cognitive-Behavioral Approaches |
| 14 | CH-06 | Brief, Constructivist, and Contemporary Approaches |
| 15 | CH-07 | Trauma, Crisis, Suicide, and Safety Interventions |
| 16 | CH-08 | Couples and Family Systems |
| 17 | CH-09 | Case Conceptualization, Treatment Planning, and Continuity |
| 18 | CH-10 | Applied Areas of Clinical Focus |
| 19 | HG-01 | Foundations of Lifespan Development |
| 20 | HG-02 | Cognitive, Moral, and Psychosocial Development |
| 21 | HG-03 | Attachment, Learning, and Social Development |
| 22 | HG-04 | Development Across Childhood and Adolescence |
| 23 | HG-05 | Adulthood, Aging, Grief, and Life Transitions |
| 24 | HG-06 | Family Development, Trauma, and Atypical Development |
| 25 | SC-01 | Multicultural Counseling Foundations |
| 26 | SC-02 | Identity Development and Intersectionality |
| 27 | SC-03 | Power, Privilege, Oppression, and Social Justice |
| 28 | SC-04 | Culturally Responsive Assessment and Intervention |
| 29 | SC-05 | Counseling Diverse Populations |
| 30 | AT-01 | Foundations, Purposes, and Ethics of Assessment |
| 31 | AT-02 | Descriptive Statistics and Score Distributions |
| 32 | AT-03 | Reliability, Validity, and Measurement Error |
| 33 | AT-04 | Test Construction, Selection, and Interpretation |
| 34 | AT-05 | Major Categories of Counseling Assessment |
| 35 | AT-06 | Clinical Interview, MSE, Risk, and Diagnostic Assessment |
| 36 | AT-07 | Outcome Assessment and Feedback |
| 37 | GW-01 | Group Foundations, Types, and Planning |
| 38 | GW-02 | Group Ethics, Rules, and Member Preparation |
| 39 | GW-03 | Stages of Group Development |
| 40 | GW-04 | Therapeutic Factors and Group Process |
| 41 | GW-05 | Group Leadership Skills and Interventions |
| 42 | CD-01 | Career Counseling Foundations and Assessment |
| 43 | CD-02 | Trait-and-Factor and Person–Environment Approaches |
| 44 | CD-03 | Developmental and Lifespan Career Theories |
| 45 | CD-04 | Learning, Cognitive, and Constructivist Career Theories |
| 46 | CD-05 | Career Intervention Across Populations and Transitions |
| 47 | RP-01 | Research Foundations and Designs |
| 48 | RP-02 | Sampling, Bias, Ethics, and Evidence Quality |
| 49 | RP-03 | Descriptive and Inferential Statistical Reasoning |
| 50 | RP-04 | Program Evaluation and Needs Assessment |
| 51 | RP-05 | Evidence-Based Practice and Research Interpretation |

---

## 3. Size budget

Batches 01–09 ran long (~1,400–1,700 words per lesson, 7–8 lessons per module). Tighten
from Batch 10 onward:

| Unit | Target | Hard max |
|---|---|---|
| Lessons per module | **5–6** | 6 (7 only for the modules named below) — blocks the import |
| Words per lesson | **700–900** | 1,000 |
| Knowledge checks per lesson | **2** | 3 — blocks the import |
| Est. minutes per lesson | **8–10** | 12 |
| Words per module | **4,000–5,000** | 6,000 |

**Weighting exception — 7 lessons and up to 6,000 words** for these high-yield modules
only: `CH-05`, `CH-07`, `CH-09`, `AT-03`, `AT-06`. Every other module is capped at 6.

### Realistic library size

Batches 01–09 as imported are ~103,000 words. Batches 10–51 at 4–5k words each add
168,000–210,000, so the finished library lands around **270,000–310,000 words** — roughly
3x the NCMHCE library (88,000 words). That is the accepted tradeoff: NCE is a broad
multiple-choice exam, and 01–09 keep their extra depth. Do not pad to hit a number, and
do not exceed the per-module ceiling to "match" the earlier batches.

### How to cut without losing value
- One idea per paragraph; 3–5 sentences max.
- Prefer a table or bulleted comparison over prose whenever contrasting 2+ concepts.
- Do not restate a point in the Overview, the body, and the takeaways. Say it once.
- Cut generic reassurance and motivational filler — the platform's tone lives in the UI.
- One short clinical vignette per lesson (2–4 sentences), not one per section.

---

## 4. File format

One markdown file per module. Filename:

```
NCE_Content_Batch_<NN>_<MODULE-ID>_<Module_Title_With_Underscores>.md
```

### Module front matter (top of file, once)

```yaml
---
moduleId: CH-02
moduleTitle: Foundational Counseling Skills
subjectArea: counseling-helping-relationships
blueprintDomain: counseling-skills-interventions
difficulty: intermediate
estimatedMinutes: 45
---
```

- `moduleId` — must exist in the platform curriculum. Blocks the import if unknown.
- `subjectArea` — one of: `orientation`, `professional-orientation-ethics`,
  `counseling-helping-relationships`, `human-growth-development`,
  `social-cultural-diversity`, `assessment-testing`, `group-counseling-group-work`,
  `career-development`, `research-program-evaluation`.
- `blueprintDomain` — exactly one of the **current** six ids:
  `professional-practice-ethics`, `intake-assessment-diagnosis`, `areas-clinical-focus`,
  `treatment-planning`, `counseling-skills-interventions`, `core-counseling-attributes`.
  **Forbidden (2027-only, blocks the import):** `treatment-planning-continuity-of-care`,
  `treatment-planning-continuity-care`, `provision-counseling-interventions`,
  `provision-of-counseling-interventions`, `intake-assessment`, `indirect-client-care`,
  `legal-ethical-compliance`, `professional-development-self-awareness`.
- `difficulty` — a **single** value: `foundational`, `intermediate`, or `advanced`.
  Spans like `foundational-intermediate` block the import.
- `estimatedMinutes` — must equal the sum of the lesson estimates. Blocks the import.

### Lesson structure (repeat per lesson)

Heading names must match exactly — they map to typed fields, and unrecognized `###`
headings are dumped into the body text.

```markdown
## Lesson CH-02-L01 — Attending, Observing, and Nonverbal Behavior
slug: attending-observing-nonverbal
estimatedMinutes: 9

### Overview
2–3 sentences on what this lesson covers.

### Why It Matters for the NCE
2–3 sentences, concrete about how the exam tests it.

### Key Concepts
- **Term** — one-line definition.
- ... (5–9 bullets)

### In Practice
One short vignette (2–4 sentences) plus the counselor's best next move.

### Comparison Table
| Concept | Definition | NCE cue |
|---|---|---|
(Optional but encouraged; max 2 tables per lesson.)

### Exam Traps
- Trap phrased as the wrong instinct → why it's wrong → what's correct instead.
- (2–4 bullets)

### Memory Anchors
- Short mnemonic or one-line hook. (2–3 bullets)

### Key Takeaways
- What the learner should walk away holding. (2–4 bullets)

### Knowledge Checks
1. Question stem?
   - A) option
   - B) option
   - C) option
   - D) option
   - **Answer: B**
   - **Rationale:** Why B is best AND why the strongest distractor fails.
2. (second check, same shape)
```

Rules the importer enforces — each one blocks the batch:
- Lesson IDs must be `<MODULE-ID>-L01`, `-L02`, … sequential, no gaps.
- `slug` must be lowercase kebab-case and unique within the module.
- Every lesson needs `### Why It Matters for the NCE`, `### Overview`, and
  `### Key Takeaways` (Memory Anchors are used as a fallback for takeaways).
- Every knowledge check needs exactly 4 options, one bolded `**Answer: X**`, and a
  `**Rationale:**` naming why the correct option wins *and* why a distractor tempts.
- No duplicate question stems anywhere in the library.

Lesson IDs that are not yet in the curriculum import as a **warning**, not an error — the
module's lesson list in the platform is rewritten to match the batch.

---

## 5. Content accuracy rules

- Align to the **NBCC NCE content outline** and **CACREP 8 core areas**; no prep-company folklore.
- Diagnostic content aligns to **DSM-5-TR**. Never invent criteria.
- Ethics content cites the **ACA Code of Ethics** by principle, not by fabricated section numbers.
- Clearly label statements as *exam strategy*, *clinical best practice*, or *diagnostic criteria*.
- Never imply a guaranteed pass.
- Tone: calm clinical supervisor coaching an anxious test-taker. Professional, not academic.

---

## 6. Delivery workflow

1. Generator produces one `.md` file per module, in the order listed in section 2.
2. Send 1–3 batches at a time (more than that slows review).
3. Import runs through `scripts/import-nce-batch.ts`, which auto-detects the compact
   format, validates it, then writes
   `src/data/nce/library/lesson-content/<module-id>.ts` and registers it.
4. Tests that gate the import: `src/test/nce-lesson-content.test.ts`,
   `nce-library-structure.test.ts`, `nce-lesson-view.test.tsx`, `nce-content-integrity.test.ts`.

---

## 7. Question batches

Multiple-choice bank items are a **separate** pipeline with its own brief:
`docs/nce-question-batch-spec.md`. Do not mix bank questions into a library batch; the
lesson knowledge checks in section 4 are the only questions a library batch carries.

---

## 8. Already-delivered batches (01–09)

OR-01, OR-02, PO-01 … PO-06, and CH-01 are imported and live in preview. They are longer
than this spec (7–8 lessons, ~1,400 words/lesson). **Leave them as they are** — they cover
orientation and the ethics/legal core, the highest-weight, highest-anxiety material on the
exam, so the extra depth is justified. No rewrite, no re-import.

If any of them later reads as bloated in use, the fix is trimming individual lessons in
place, not regenerating the module.
