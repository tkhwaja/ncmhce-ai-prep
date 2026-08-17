# NCE Learning Library — Complete Layout + Content Pipeline

The library structure (9 collections, ~50 modules, ~350 lesson slots, blueprint hubs, lesson reader) already exists and renders. This phase finishes the layout, imports the OR-01 orientation batch as the quality reference, moves progress into the database, and builds a markdown importer so every future batch drops in fast and consistently.

## How we'll organize the library

Two ways into the same lessons — no content is ever duplicated:

```text
Learn by Subject                     Review by Blueprint
Orientation                          Professional Practice & Ethics   12%
Professional Orientation & Ethics    Intake, Assessment & Diagnosis   12%
Social & Cultural Diversity          Areas of Clinical Focus          29%
Human Growth & Development     --->  Treatment Planning                9%
Career Development                   Counseling Skills & Interventions 30%
Counseling & Helping Relationships   Core Counseling Attributes        8%
Group Counseling & Group Work
Assessment & Testing                 (2027 blueprint swaps in
Research & Program Evaluation         automatically by exam date)
```

Collection -> Module -> Lesson. Each lesson carries metadata (domains, tags, exam version, content type), so blueprint hubs and Quick Review sheets assemble themselves from the same records.

## What gets built

**1. Import OR-01 (8 lessons, ~55 min)**
All eight orientation lessons with why-it-matters, objectives, core teaching text, tables, exam traps, do-not-confuse pairs, key takeaways, and knowledge checks with per-option rationales. This becomes the visible quality bar for every later batch.

**2. Markdown importer**
A script that converts a batch markdown file (same format as OR-01) into typed lesson data, then validates it: required sections present, one correct answer per knowledge check, rationale coverage, valid domain ids, unique lesson ids, module/lesson ids matching the curriculum. You send markdown; I run the importer and review the diff.

**3. Layout completion**
- Library hub: continue-studying, per-collection progress, study-time estimates, search across titles, tags, aliases, and key terms.
- Collection and module pages: objectives, lesson lists with completion state, domain badges, "content in production" state for unwritten lessons.
- Lesson reader: sticky section nav, prev/next, bookmark, mark-complete, inline knowledge check with rationale reveal, related lessons, sources.
- Blueprint hubs: weight, scored-item count, domain task summary, assembled lesson playlist with progress.
- Quick Review tab: the 12 planned reference sheets shown as locked/coming-soon until their source modules are authored.
- Mobile pass on all views; NCMHCE library untouched.

**4. Progress in the database**
New `nce_lesson_progress` table (user, lesson id, opened/completed, completed_at) and `nce_knowledge_check_results` (lesson id, question id, correct, answered_at), both RLS-scoped to the owner with the required grants. Existing local progress is migrated on first load, then the dashboard and study plan can read real NCE progress.

## Consistency with NCMHCE

Same design tokens, card/accordion patterns, badge styles, and tone as the NCMHCE library. Structural integrity tests extend the existing `nce-library-structure.test.ts` so a bad batch fails the test run instead of reaching users.

## Content handoff format

Batch order I suggest: OR-02 study plan, then PO (ethics), AT (assessment), CH (theories/skills), then SC, HG, CD, GW, RP. Keep each batch to one module, in the OR-01 markdown shape, with front matter ids matching the curriculum.

## Not published

NCE stays behind the `NCE_ENABLED` flag; nothing becomes visible to users until you flip it after your own review.

## Technical notes

- Content lives in `src/data/nce/library/lesson-content/` split per module, re-exported from a registry so files stay reviewable.
- Importer at `scripts/import-nce-batch.ts` (dev-only, not shipped in the bundle).
- Progress hook `useNceLibraryProgress` switches to Supabase-backed reads/writes with optimistic UI, keeping its current API so views don't change.
