Root cause
--------
The recent study-plan update added a `resolveStudyActivity` mapping that rewrites the visible text of stored activities when the page renders. LaTanya's existing plan contains generic AI-generated labels such as:

- "Study Learning Library: Treatment Planning"
- "Practice Narrative: Case Conceptualization"
- "Practice Narrative: Treatment Sequencing"

The resolver silently converts those into different real-resource titles, and it even falls back across resource types (a "Practice Narrative" can resolve to a "Study Learning Library" module). That makes it look like items were removed or swapped, and it breaks the mental model the user had for her progress.

Fix
---
1. In `src/pages/StudyPlan.tsx`, change `resolveStudyActivity` so it **never rewrites the visible label** of a stored activity. The text the user saved is the text they should see.
2. Only add a clickable link when the stored activity prefix and topic cleanly match an existing resource of the **same type** (library, flashcard, narrative). Remove cross-type fallbacks.
3. If there is no clean match, render the activity as plain text (or with a generic section link), exactly as it appeared before the clickable-link update.
4. Keep the stricter AI prompt for **newly generated** plans so future plans use exact resource names, but do not re-interpret old plans through that mapping.

No database migration is needed: existing `plan_data` stays untouched; the fix is purely in the display resolver.

Testing
-------
- Add/update a unit test that feeds LaTanya's actual stored activity strings into the resolver and asserts:
  - Labels remain unchanged.
  - Only exact same-type matches produce a non-generic link.
  - Non-matching generic labels still render with their original text.
- Manually verify the study plan page renders her plan correctly after the fix.

Communication
-------------
Draft a direct, calm response for LaTanya explaining that her items were not deleted; the new clickable-link feature was rewriting the labels and causing confusion, and that the fix restores the original labels so she can keep working from where she left off.