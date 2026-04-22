
Goal: improve how your site appears in Google results and rebuild the Learning Library into a genuinely comprehensive exam-prep resource, starting with Human Development.

What I found
- The site already has a `public/favicon.ico`, but there is no fuller brand icon setup in `index.html` (no explicit PNG favicon set, no Apple touch icon, no web manifest, and no richer site icon configuration).
- The HTML metadata still contains older search copy such as “Join the waitlist for early access,” which weakens the Google listing and no longer matches the live funnel.
- The Learning Library already supports structured content well: nested sections, cards, alerts, badges, collapsibles, quick review blocks, drills, and glossary views.
- The Human Development module data already includes some strong material, including Erikson, but the renderer currently treats most rich content as generic nested text/cards instead of truly visual learning aids like tables, comparison matrices, developmental maps, and stage-based diagrams.

Implementation plan

1. Fix Google search appearance and brand icon
- Create a simple, clean brand mark that works at tiny sizes for Google/browser tabs.
- Replace the current favicon setup with a proper multi-size icon pack:
  - favicon.ico
  - 32x32 and 192x192 PNG variants
  - Apple touch icon
  - manifest reference if helpful
- Update `index.html` metadata so title/description reflect the current offer instead of waitlist language.
- Make the homepage and brand references consistent with the new positioning.

Expected outcome:
- Google has the correct icon assets to use next to the listing.
- The listing copy better matches the actual product.
- Search result appearance becomes more professional, though Google may take time to refresh cached icons/snippets.

2. Upgrade the Learning Library renderer so it can show true study visuals
- Extend `ModuleRenderer` with purpose-built visual patterns instead of relying mostly on generic collapsible sections.
- Add support for structured educational components such as:
  - comparison tables
  - stage timeline tables
  - age-band maps
  - “normal vs concerning” grids
  - theory-to-clinical-application matrices
  - decision trees / exam reasoning maps
  - developmental red-flag panels
- Keep these components consistent with the existing design system and library page layout.

Expected outcome:
- Modules feel like real study guides, not sparse dropdown notes.
- Dense topics become easier to learn and review quickly.

3. Rebuild Human Development as the first comprehensive section
- Expand the Human Development module into a fuller study resource covering:
  - Erikson stages with age range, developmental task, counseling relevance, common exam clues, and failure patterns
  - Piaget with practical intervention implications
  - Kohlberg and moral reasoning
  - Vygotsky and learning/scaffolding relevance
  - Bronfenbrenner ecological systems
  - attachment styles and treatment implications
  - identity development, including multicultural and racial/cultural identity considerations where appropriate
  - lifespan milestones from childhood through older adulthood
  - normal vs atypical developmental patterns
  - aging, grief, cognition, and differential issues
  - family/school/social-context effects on development
- Add genuinely useful visuals for this section, such as:
  - Erikson stage table
  - Piaget vs Erikson comparison
  - lifespan milestone map
  - ecological systems diagram
  - attachment style comparison table
  - developmental red flags by age range
- Add richer case-based application:
  - mini clinical examples
  - exam traps
  - “what the counselor should do next” examples
  - checkpoint review questions

Expected outcome:
- Human Development becomes a full reference and exam-prep module instead of a brief overview.

4. Review-and-approve workflow for the library, one section at a time
- Implement Human Development first.
- After that, use the same richer structure to expand the remaining modules in sequence, with your approval between sections.
- Best next candidates after Human Development:
  - DSM-5-TR Diagnoses
  - Assessment & Testing
  - Counseling Theories & Techniques
  - Ethics & Legal Issues
  - Crisis/Trauma
  - Case Conceptualization

Technical details
- Files likely involved for the icon/search work:
  - `index.html`
  - `public/` icon assets
  - possibly `src/components/landing/Navbar.tsx` or other branding references
- Files likely involved for the library upgrade:
  - `src/components/library/ModuleRenderer.tsx`
  - `src/pages/Library.tsx`
  - `src/data/library/human-development.json`
  - potentially `src/data/library-modules.ts` if metadata/tags/objectives are refined
- The current renderer already supports structured JSON, so the cleanest path is:
  1. add richer component types in the renderer
  2. reshape Human Development data to use those richer structures
  3. repeat that content model for the remaining modules
- For the visual study aids, I would generate clean structured content and diagrams/tables using the available AI-backed workflow, but the final output will be stored in your codebase as maintainable JSON/UI structures rather than opaque blobs.

Proposed delivery order
1. Brand icon + metadata cleanup for Google/search
2. Library renderer upgrade for visual learning components
3. Human Development full expansion
4. Your review/approval
5. Continue section-by-section

Definition of done for this round
- The site has a proper branded favicon/icon system and updated search metadata.
- The Human Development module is substantially more comprehensive.
- The Human Development section includes multiple visual learning aids, not just dropdown text.
- The structure is reusable for expanding every other Learning Library topic after your review.
