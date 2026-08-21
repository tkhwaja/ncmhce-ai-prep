# Export the NCE question generator spec as a downloadable file

The spec already exists in the project at `docs/nce-question-bank-generator-spec.md`. It just isn't in your documents folder, so there's nothing to download yet.

## What this does

Copy the spec to your documents folder as `nce-question-bank-generator-spec.md`, so you get a preview/download card in chat and can hand the file straight to your generator.

No project code changes, no content changes to the spec.

## Confirmation on your question

The spec already requires, for every one of the 900 items:

- `options` — exactly 4, one correct, similar lengths
- `correctAnswerIndex` — 0-based, spread across A–D (each position at least 15% of the batch)
- `optionRationales` — exactly 4, index-aligned; the correct one starts "Correct.", the other three start "Incorrect." and name the specific error
- `explanation` — 2–4 sentences teaching the underlying principle
- `keyTakeaway` — one sentence, 140 characters max
- Navigation metadata: `topic`, `subtopic`, `moduleId`, `blueprintDomainId`, `taskCode`, `difficultyLevel`, `tags`

So the generator is instructed to produce question + four answer choices + per-choice rationale + overall explanation + takeaway, not bare questions.
