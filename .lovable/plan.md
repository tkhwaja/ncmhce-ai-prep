## Problem

On mobile, the Exam Information page shows a tall blue bar on the left and the content card squeezed into a narrow column on the right.

Cause: in `src/pages/ExamInfo.tsx`, the desktop sidebar, the mobile tab strip, and the content `Card` are all children of the same `flex gap-8` row. The desktop sidebar is hidden on mobile (`hidden md:block`), but the mobile tab strip (`md:hidden flex ...`) stays a flex row child next to the `Card`. Because flex items stretch to the row's height by default, the active pill button (filled with `bg-primary`) gets stretched into a full-height blue column — that's the "weird blue bar." The `Card` then takes the remaining width, which is why text is squeezed and overflowing.

## Fix

Restructure the layout in `src/pages/ExamInfo.tsx` so the mobile tab strip is not a sibling of the content `Card` inside the desktop row:

- Make the outer container stack vertically on mobile and switch to row only at `md`.
- Move the mobile tab strip out of the row so it renders above the `Card` on mobile only.
- Keep the desktop sidebar + content as the `md:flex md:flex-row md:gap-8` row.
- Keep all existing tokens, typography, and content rendering untouched.

Result: on mobile, the page becomes a single readable column (tabs on top, content card below). On `md+`, the sidebar + content row is unchanged.

## Scope

- File: `src/pages/ExamInfo.tsx` (layout wrapper only)
- No changes to content, styling tokens, or other pages.
