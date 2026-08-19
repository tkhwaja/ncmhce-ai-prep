# NCE Learning Library — Authoring Spec (Batches 10+)

This is the authoritative brief for generating NCE Learning Library content batches.
Hand this whole file to the content generator. It supersedes the format used for
Batches 01–09 (those are already imported and stay as-is; see "Already-delivered batches").

---

## 1. Golden rule: one batch = one curriculum module

Do **not** invent module numbering or split a module across batches. The curriculum is
fixed in the platform. There are **51 modules total**, so there are **51 batches total**
(not 42, not 80). Batches 01–09 are done, leaving **42 remaining batches** — which lines
up with the generator's count, as long as each one is exactly one module.

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

## 2. Size budget (this is the change from Batches 01–09)

Batches 01–09 ran long (~1,400–1,700 words per lesson, 8 lessons per module).
Tighten from Batch 10 onward:

| Unit | Target | Hard max |
|---|---|---|
| Lessons per module | **5–6** | 7 |
| Words per lesson | **700–900** | 1,000 |
| Knowledge checks per lesson | **2** | 3 |
| Est. minutes per lesson | **8–10** | 12 |
| Words per module | **4,000–5,000** | 6,000 |

Whole library lands around 180k–200k words (about 2x the NCMHCE library at 88k). That is
the right ratio: NCE is a broad multiple-choice exam, so breadth beats depth.

**Weighting exception — allow 7 lessons and up to 6,000 words** for these high-yield
modules only: CH-05, CH-07, CH-09, AT-03, AT-06. Everything else stays at 5–6 lessons.

### How to cut without losing value
- One idea per paragraph; 3–5 sentences max.
- Prefer a table or bulleted comparison over prose whenever contrasting 2+ concepts.
- No restating the same point in the Overview, the body, and the Summary. Say it once.
- Cut generic reassurance/motivational filler — the platform's tone lives in the UI.
- Examples: one short clinical vignette per lesson, 2–4 sentences, not one per section.

---

## 3. File format

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
estimatedMinutes: 50
---
```

- `subjectArea` — one of: `orientation`, `professional-orientation-ethics`,
  `counseling-helping-relationships`, `human-growth-development`,
  `social-cultural-diversity`, `assessment-testing`, `group-counseling-group-work`,
  `career-development`, `research-program-evaluation`.
- `blueprintDomain` — one of: `professional-practice-ethics`,
  `intake-assessment-diagnosis`, `areas-clinical-focus`,
  `treatment-planning-continuity-of-care`, `provision-counseling-interventions`,
  `core-counseling-attributes`.
- `difficulty` — a **single** value: `foundational`, `intermediate`, or `advanced`.
  Do not write spans like `foundational-intermediate`.
- `estimatedMinutes` — sum of the lesson estimates.

### Lesson structure (repeat per lesson)

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

Rules that the importer enforces — violations block the batch:
- Lesson IDs must be `<MODULE-ID>-L01`, `-L02`, … sequential, no gaps.
- `slug` must be lowercase kebab-case, unique within the module.
- Every knowledge check needs exactly 4 options, one bolded answer, and a rationale
  that names why the correct option wins *and* why a distractor tempts.
- Heading names must match exactly as written above (they map to typed fields).
- No duplicate question stems anywhere in the library.

---

## 4. Content accuracy rules

- Align to the **NBCC NCE content outline** and **CACREP 8 core areas**; no prep-company folklore.
- Diagnostic content aligns to **DSM-5-TR**. Never invent criteria.
- Ethics content cites the **ACA Code of Ethics** by principle, not by fabricated section numbers.
- Clearly label statements as *exam strategy*, *clinical best practice*, or *diagnostic criteria*.
- Never imply a guaranteed pass.
- Tone: calm clinical supervisor coaching an anxious test-taker. Professional, not academic.

---

## 5. Delivery workflow

1. Generator produces one `.md` file per module, in the order listed in section 1.
2. Send 1–3 batches at a time (more than that slows review).
3. Import runs through `scripts/import-nce-batch.ts`, which validates front matter,
   lesson IDs, knowledge-check shape, and word/lesson budgets, then writes
   `src/data/nce/library/lesson-content/<module-id>.ts` and registers it.
4. Tests that gate the import: `src/test/nce-lesson-content.test.ts`,
   `nce-library-structure.test.ts`, `nce-lesson-view.test.tsx`, `nce-content-integrity.test.ts`.

---

## 6. Already-delivered batches (01–09)

OR-01, OR-02, PO-01 … PO-06, CH-01 are imported and live in preview. They are longer than
this spec (8 lessons, ~1,400 words/lesson). **Leave them as they are** — they cover
orientation and the ethics/legal core, which is the highest-weight, highest-anxiety
material on the exam, so extra depth is justified there. No rewrite, no re-import.

If any of them later reads as bloated in use, the fix is trimming individual lessons in
place, not regenerating the module.
