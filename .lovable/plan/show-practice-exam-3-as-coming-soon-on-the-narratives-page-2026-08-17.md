# Show Practice Exam 3 as Coming Soon on the Narratives page

## What's happening

The "Full-Length Practice Exams" row on the Narratives tab hard-codes two cards (Exam 1 and Exam 2). Practice Exam 3 exists in the exam data with its coming-soon flag, and it already renders correctly on the Practice Exams page, but the Narratives page never reads that data — so no third card appears.

## What to change

In `src/pages/Narratives.tsx`, add a third card to the same grid for Practice Exam 3, styled to match the locked treatment already used on the Practice Exams page:

- Muted icon (lock) instead of the primary brain icon
- "COMING SOON" pill in the top-right corner
- Description text from the exam data ("In development • coming soon")
- Reduced opacity, no hover/primary highlight
- Not clickable — no navigation, disabled button

The card reads its title/description/coming-soon state from the existing practice exam data rather than being hard-coded, so future changes to the exam entry flow through automatically.

## Notes

Presentation-only change to one page; no data, routing, or access-control changes. Exam 3's seeded narrative stays unreachable to users.
