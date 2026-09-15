# Fix the Learning Library crash when opening a module

## Your content is all there

All 51 modules you sent are in the app — every subject area (orientation, professional practice, counseling helping relationships, human growth, social and cultural, assessment, group work, career, research) is loaded, along with their lessons and knowledge checks. Nothing is missing.

## Why the page breaks

The crash is not a content problem. The library's main page is built so that opening a collection, module, or lesson exits early and swaps in the detail view. That early exit happens before some of the page's own setup work runs, and React refuses to continue rendering when that happens — so the screen goes blank the moment you click through from the library home.

This is confirmed in the library's top-level component: the collection/module/lesson branches return before the hooks that compute the search results, next lesson, and collection ordering.

Notably, loading a link directly (like the page you are on now) can work, while clicking through from the library home crashes — which matches what you are seeing.

## The fix

Reorder the library's top-level component so all of its setup work runs on every render, and only then decide which view to show. No content, layout, copy, or progress-tracking behavior changes.

Then verify by walking the library in the preview:
- library home loads
- open each of the 9 collections
- open a module inside one, then a lesson, complete a knowledge check, and go back
- direct links with a lesson, module, collection, or domain in the URL still load
- no errors in the browser console

## Technical detail

`src/components/library/nce/NceLibrary.tsx` violates the rules of hooks: the `lessonParam` / `moduleParam` / `collectionParam` / `domainParam` early returns sit above the `useMemo` calls for `nextLesson`, `searchResults`, and `visibleCollections`, so the hook count differs between the hub render and a detail render ("rendered fewer hooks than expected"). Move all four early returns below every hook call and keep the hooks unconditional. The child views (`NceCollectionView`, `NceModuleView`, `NceLessonView`, `NceBlueprintHubView`) already call their hooks before any early return and need no change.
