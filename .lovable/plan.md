I’ll fix the Learning Library so each major section has one dropdown only, instead of creating a second dropdown inside it for lessons/subsections.

What I’ll change:

1. Update the shared Learning Library renderer
- In `ModuleRenderer.tsx`, change the lesson-based renderer so `lessons` are displayed as headings/cards inside the already-open major section.
- Remove the inner `CollapsibleSection` wrapper currently used for each lesson.
- Keep the outer module section dropdowns, such as:
  - Biopsychosocial Framework
  - Intake Process
  - Clinical Domains to Assess
  - Risk / Priority
  - Treatment Planning
  - Documentation
- Inside each opened section, lesson titles like “Biopsychosocial-Spiritual Framework” will appear as normal subheadings, not separate dropdowns.

2. Apply the same no-nested-dropdown rule across the Learning Library
- Review all renderer areas that create dropdowns inside dropdowns.
- Flatten nested dropdown patterns where content can reasonably live under the same opened section.
- Preserve intentional single-level section dropdowns so the page is still organized and not one giant wall of text.

3. Fix formatting consistency while doing this
- Keep tables, callouts, exam cues, common traps, memory anchors, and mini-practice questions formatted as readable cards/lists.
- Avoid raw JSON-like display, unnecessary double quotes, or code-looking output.
- Ensure `PTSD`, `DSM`, `NCMHCE`, `ACA`, etc. remain properly capitalized where renderer formatting touches text.

4. Verify every Learning Library module at the code level
- Check every module JSON file in `src/data/library/` for structures that produce nested dropdowns.
- Verify the shared renderer no longer produces the “two dropdowns” experience in Clinical Case Conceptualization or other modules that use the same format.
- Run a search after changes for nested `CollapsibleSection` usage in Learning Library rendering and remove/adjust remaining cases that cause the problem.

Technical details:
- Primary file: `src/components/library/ModuleRenderer.tsx`
- Likely approach: replace the lesson-level collapsible in `ComprehensiveLearningSection` with a non-collapsible `Card`/section layout.
- Additional review: nested collapsibles in diagnostic categories, differential tables, and generic object rendering will be checked and flattened if they create dropdown-within-dropdown behavior in the Learning Library.