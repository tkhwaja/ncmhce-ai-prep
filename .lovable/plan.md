# One Governing NCE Authoring Spec + Strict Importer

Your generator's spec is good and matches the platform's data model. We'll merge it into the single spec file the project already points to, correct the two things it gets wrong or leaves implicit, and make the importer refuse batches that break the rules instead of quietly patching them.

## 1. Merge into one spec

`docs/nce-library-batch-spec.md` gets rewritten as the generator's Batches 10–51 specification, kept nearly verbatim (governing decisions, current-exam version lock, 51-module batch order, size budget, front matter, lesson schema, knowledge-check rules, accuracy/voice, delivery checklist, frozen 01–09, Batch 10 target, source links).

Corrections applied during the merge:

- **Word projection.** Their figure of 128,112 words for the frozen batches doesn't match the imported files (~103k). The merged spec states the measured count and a realistic final range of roughly 270,000–310,000 words, keeping their correct conclusion that a 180k–200k library is impossible while 01–09 stay frozen.
- **Curriculum rewrite is expected.** Adds a short note that a compact 5–6 lesson module will not match the placeholder lesson list in the platform's curriculum, so each import rewrites that module's lesson entries. This is normal and not a spec violation — it's what batches 03–09 already did.
- **Lesson-count ceiling.** Their hard max of 6 lessons (7 only for CH-05, CH-07, CH-09, AT-03, AT-06) replaces the looser rule in my old spec.
- **Domain-value warning.** Calls out explicitly that `treatment-planning-continuity-of-care` and `provision-counseling-interventions` were used by mistake in earlier batches and are now rejected, so the generator doesn't copy them from the older files.

No other doc is kept as a competing spec.

## 2. Harden the importer

`scripts/import-nce-batch.ts` gains a strict mode for Batches 10+ that fails the import (non-zero exit, no files written) when:

- `blueprintDomain` is a 2027-era id — the aliases that silently rewrote them stay available only for the already-imported 01–09 modules.
- A module has more than 6 lessons, unless its id is one of the five approved high-yield modules, which allow 7.
- Any knowledge check does not have exactly 4 options.
- `difficulty` is a span such as `foundational-intermediate` rather than a single allowed value.
- `estimatedMinutes` in front matter doesn't equal the sum of the lesson values.
- Lesson IDs are non-sequential, or a slug isn't unique lowercase kebab-case.

Each failure prints the module, lesson, and exact rule broken so you can hand the message straight back to the generator.

## 3. Keep the test gate

The existing suites (`nce-lesson-content`, `nce-library-structure`, `nce-lesson-view`, `nce-content-integrity`) stay the second gate after import. One addition: a check that no lesson content record carries a 2027 domain id in `currentDomains`.

## Not touched

Batches 01–09 stay exactly as imported. Nothing is published — NCE remains behind `NCE_ENABLED`.

## Technical notes

- Spec: rewrite `docs/nce-library-batch-spec.md`.
- Importer: add a validation pass in `scripts/import-nce-batch.ts` that collects all violations and exits before writing `src/data/nce/library/lesson-content/<module-id>.ts`.
- Strictness applies to markdown module batches; the `--questions` mode for the question bank is unchanged.
