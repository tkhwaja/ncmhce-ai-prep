## 1. Visible scrollbar in Learning Library modules

Right now the page uses the browser's default scrollbar, which on dark mode blends into the background. Add a custom scrollbar utility that uses our design tokens so it's visible but still subtle.

- In `src/index.css`, add a new `.themed-scrollbar` utility under `@layer utilities`:
  - WebKit: `::-webkit-scrollbar` width 10px, track `hsl(var(--muted))`, thumb `hsl(var(--primary) / 0.5)` with `border-radius: 8px` and a 2px transparent border for inset look; hover thumb `hsl(var(--primary) / 0.75)`.
  - Firefox: `scrollbar-width: thin; scrollbar-color: hsl(var(--primary) / 0.5) hsl(var(--muted));`
- Apply it to the Library module detail wrapper and any internal scroll containers (the sidebar list inside `CompactObjectBrowser` in `ModuleRenderer.tsx`, plus the GlossaryView scroll regions). The page itself already scrolls on `<body>` — also add the utility to `body` via a class on the Library page wrapper so the main scrollbar in the module view becomes visible.

## 2. Bookmark on each study dropdown

Inside each module, the user wants a small bookmark button in the top-right of every collapsible study section so they can mark where to resume next session.

- Storage: `localStorage` key `library:bookmarks` → `Record<moduleId, string>` storing the last-bookmarked section id (one bookmark per module — picking a new one replaces the previous so the user always has one clear "resume here" anchor).
- Add a tiny `useBookmark(moduleId)` hook in `src/hooks/useBookmark.ts` exposing `{ bookmarkedId, toggle(id), isBookmarked(id) }`.
- Update `CollapsibleSection` in `src/components/library/ModuleRenderer.tsx` to accept an optional `sectionId` and render a `Bookmark` / `BookmarkCheck` (lucide) icon button in the trigger row, right side, before the chevron. Clicking it toggles the bookmark and stops propagation so it doesn't open/close the section.
- Wire `moduleId` down from `LibraryModuleDetail` → `ModuleRenderer` → each `GuidedSection`/`CollapsibleSection` (a single prop drill — `ModuleRenderer` already builds these sections, so it can pass a stable `sectionId` derived from the existing `slugifySectionId` helper).
- On opening a module, if a bookmark exists: scroll that section into view and auto-open it (use the existing `id` we already set on `<section>` for navigator anchors).
- Show a small "Resume where you left off" pill at the top of the module detail when a bookmark exists, that scrolls to and opens the bookmarked section.

## 3. "Back to top" button at end of module

- Add a `BackToTopButton` component rendered at the bottom of `LibraryModuleDetail` (inside the module detail return, after the Quiz Me button block).
- It's a simple `<Button variant="outline">` with an `ArrowUp` icon and label "Back to top" that calls `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- Also add a floating version: a small fixed circular button in the bottom-right that fades in once the user scrolls past ~600px (listen to `scroll` on window, throttle with `requestAnimationFrame`). Same scroll-to-top action. Uses `bg-primary text-primary-foreground` with subtle shadow so it's discoverable without being noisy.

## 4. Cleaner Exam Info page

The current `ExamInfo.tsx` renders every bullet with a `CheckCircle2` icon, every numbered item inside a circular `Badge`, every `>` block as an `Alert`, and every `###` heading prefixed with a `BookOpen` icon — that's where the "stars everywhere" feeling comes from. Restructure for a calm, document-like read.

Changes to `src/pages/ExamInfo.tsx`:
- Replace the icon-prefixed `###` heading with a plain semantic `<h3>` (no icon), tighter top spacing.
- Replace per-bullet `CheckCircle2` icons with a clean disc list (`list-disc` with `marker:text-primary`), one consistent indent.
- Replace numbered `Badge` circles with a normal `list-decimal` ordered list, primary-colored markers.
- Keep the `>` callout but make it lighter: a left-border accent (`border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r`) instead of the full Alert component, with no leading icon.
- Add an at-a-glance header strip on each section with 2–4 key facts (e.g. for "About": format, scored questions, time limit, delivery) parsed once into a small "highlights" array per section in `src/data/exam-info.ts`. Optional but recommended — falls back gracefully when not provided.
- Type scale: bump body to `text-[15px]` with `leading-7`, headings to `text-lg`/`text-xl`, generous section spacing (`space-y-6`), and a single subtle `Separator` between major `##` blocks.
- Remove the `h-1 w-12 bg-primary` underline under the section title (redundant with the new typography hierarchy).
- Mobile tab strip: keep, but use `Badge`-styled pills with consistent sizing.

No changes to data files except optionally adding a `highlights?: { label: string; value: string }[]` field on each section.

## Files touched

- `src/index.css` — add `.themed-scrollbar` utility.
- `src/hooks/useBookmark.ts` — new.
- `src/components/library/ModuleRenderer.tsx` — bookmark button on `CollapsibleSection`, accept `moduleId` prop, thread `sectionId`.
- `src/pages/Library.tsx` — pass `module.id` into `ModuleRenderer`, render resume pill + back-to-top button, apply `themed-scrollbar`.
- `src/components/library/BackToTopButton.tsx` — new (floating + inline variants).
- `src/pages/ExamInfo.tsx` — restructured renderer.
- `src/data/exam-info.ts` — optional `highlights` field per section.

## Notes / tradeoffs

- Bookmarks are stored locally per browser (no backend). If you'd rather sync them to the user's account, say the word and I'll add a `library_bookmarks` table behind RLS instead.
- One bookmark per module keeps the UI dead-simple ("resume here"). If you want multiple bookmarks per module, the same hook trivially extends to a `Set<sectionId>`.
