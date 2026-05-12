## Add two new individual narratives

Convert the two uploaded JSON cases into TypeScript narrative files matching the existing pattern (e.g. `21-safiya-schizophreniform.ts`) and register them in the individual narratives list.

### Difficulty assignment
- **Nora — Specific Phobia, Blood-Injection-Injury Type** → **Intermediate** (medium). Single focused phobia, clear treatment path (exposure + applied tension), moderate ethics/coordination complexity. JSON suggests intermediate.
- **Rafael — Hoarding Disorder** → **Advanced** (hard). Older adult, eviction/legal pressure, family scope/confidentiality, safety risk, MI + CBT, capacity considerations, cultural dynamics. JSON suggests advanced.

### Files to create
1. `src/data/narratives/25-nora-specific-phobia.ts`
   - Export `noraSpecificPhobia: Narrative`
   - `id: "25-nora-specific-phobia"`, `difficulty: "Intermediate"`, `category: "Specific Phobia"`
   - 3 sections (5 / 5 / 3 questions), 13 total
   - `recommendedTimeBySectionMinutes: [8, 8, 7]`
2. `src/data/narratives/24-rafael-hoarding.ts`
   - Export `rafaelHoarding: Narrative`
   - `id: "24-rafael-hoarding"`, `difficulty: "Advanced"`, `category: "Hoarding Disorder"`
   - 3 sections (5 / 5 / 4 questions), 14 total
   - `recommendedTimeBySectionMinutes: [8, 8, 8]`

All narrative prose, MSE, family/work history, intake summary, section narratives, questions, options, correct answers, and explanations are copied verbatim from the uploaded JSON. Domain values are mapped to the existing `NarrativeDomain` union.

### Index registration
Update `src/data/narratives/index.ts`:
- Import `rafaelHoarding` from `./24-rafael-hoarding`
- Import `noraSpecificPhobia` from `./25-nora-specific-phobia`
- Append both to the `narratives` array (after `safiyaSchizophreniform`, before the practice-exam-only entries) so they appear on the Narratives library page and remain searchable/filterable.

### Out of scope
- No DB changes. No routing changes (existing `/narrative/:id` route handles both).
- No changes to Practice Exam 1 (these are individual library cases).
- No changes to scoring, analytics, or UI components.

### Verification
- After implementation, confirm the two cards appear on `/narratives` with correct difficulty badges and question counts (13 and 14), and that opening either narrative loads all 3 sections.
