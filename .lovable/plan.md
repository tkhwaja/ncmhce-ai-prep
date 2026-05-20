# Safely upgrade narrative questions without disrupting active attempts

## The problem

Narratives live as static TypeScript files in `src/data/narratives/*.ts` and ship in the JS bundle. If you edit a question (stem, options, or `correctAnswer` index) and deploy, **every user currently mid-attempt** reloads with different content:

- Answers they already picked may now point at the wrong option index (scoring breaks).
- Question count or order can shift, corrupting their progress UI.
- Their completed score on the results page no longer matches what they answered.

The `narrative_attempts` row only stores `narrative_id` + `dm_answers` (a JSON of selected indices). There is no snapshot of the questions they actually saw, so today the runner is always coupled to whatever is in the latest bundle.

## Recommended approach: snapshot-on-start

When a user begins an attempt, freeze the exact narrative content into their attempt row. The runner reads from the snapshot, not from the live `getNarrativeById`. New attempts always pick up the latest (harder) version; in-progress attempts finish on the version they started.

This is the most robust option because it survives any future edit — content, scoring, even narrative deletion — with no coordination needed at deploy time.

### What changes

1. **DB migration**: add two nullable columns to `narrative_attempts`:
   - `narrative_version text` — short version string (e.g. `"2026-05-20"` or `"v2"`)
   - `narrative_snapshot jsonb` — the full `Narrative` object as it existed when the attempt started
2. **Narrative data**: add a `version: string` field to the `Narrative` type. Bump it whenever you change questions.
3. **Attempt creation** (wherever `narrative_attempts` is inserted — in `PracticeExamRunner.tsx` / `NarrativePage.tsx`): also write `narrative_version` and `narrative_snapshot` from the current `getNarrativeById(id)`.
4. **Attempt loading**: in the runner and results pages, prefer `attempt.narrative_snapshot` when present; fall back to `getNarrativeById` for legacy attempts that pre-date the snapshot column.
5. **Scoring** (`src/lib/practice-exam-scoring.ts` and any inline scoring in the runner): score against the snapshot's `correctAnswer` indices, not the live narrative.

### Rollout

- Ship the snapshot infrastructure first (no content changes). Existing in-flight attempts continue using `getNarrativeById` via the fallback — no disruption.
- Once deployed, every newly started attempt is self-contained.
- Then push your harder questions whenever you like. In-progress attempts finish on the old version; new attempts get the new one.

### Trade-offs

- Snapshots add ~5–50 KB of JSON per attempt row. Negligible at this scale.
- Once snapshotted, you can't retroactively "fix a typo" for users mid-attempt without writing a small script. Acceptable.

## Alternatives considered (not recommended as the primary fix)

- **Versioned files side-by-side** (`09-mei-ocd.ts` + `09-mei-ocd-v2.ts`, attempt records which version): works, but you accumulate dead files forever and have to remember to wire each version into the registry.
- **Deploy during a quiet window + show a "please finish within X minutes" banner**: doesn't actually prevent breakage, just reduces the surface area. Bad UX.
- **Block edits until all in-progress attempts complete**: not practical — there's almost always someone mid-case.

## Technical notes

- The `version` field is for your own tracking and audit — the snapshot is the source of truth at runtime.
- Keep `Narrative` import paths unchanged; only the runner/scoring layer learns about the snapshot.
- Realtime/streak/analytics code that depends on `total_score` is unaffected since scoring still writes the same integer to the same column.
- No change needed to `src/data/narratives/index.ts` aside from the optional `version` field on each export.
