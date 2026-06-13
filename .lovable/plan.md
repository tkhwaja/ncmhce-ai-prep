## What's happening

The user (latanyadeniese@gmail.com) just upgraded and clicked into the **DSM-5-TR Diagnoses** module in the Learning Library. The page crashed with "Something went wrong loading this page" — that fallback comes from the `ChunkErrorBoundary` in `src/App.tsx`, which catches *any* render error (not just chunk-load errors). When she clicks Reload it returns her to `/library` because the selected module is held only in local React state and is lost on refresh.

So the bug is a **runtime render error inside the DSM-5-TR module page**, most likely in `ModuleRenderer.tsx` (`DiagnosticCategories` or one of the related sub-renderers) hitting an unexpected shape in `src/data/library/dsm-5-tr.json`. No runtime error is currently captured in logs (her crash happened on production, not in our sandbox), so step 1 is to reproduce it.

## Plan

### 1. Reproduce in the live preview
- Open the preview, log in (or use my own paid test account), navigate to **Library → DSM-5-TR Diagnoses**.
- Capture the exact error from the browser console / runtime errors.

### 2. Fix the render crash
- Patch the offending renderer in `src/components/library/ModuleRenderer.tsx` (likely `DiagnosticCategories`, `redFlags`, `differentialDiagnosis`, or `severity` block) to defensively handle the unexpected shape.
- If a single JSON entry in `src/data/library/dsm-5-tr.json` is malformed, also fix the data.

### 3. Harden the error boundary so this never blanks a page again
Right now `ChunkErrorBoundary` returns a generic "Something went wrong" screen for *every* error and only auto-reloads chunk errors. For non-chunk errors I'll:
- Log the error to the console (and to PostHog if available) with component stack, so future incidents leave a trail.
- Show a more helpful fallback with a **"Back to Library"** button in addition to Reload, so users aren't stuck.
- Keep the chunk-reload behavior unchanged.

### 4. Add the DSM-5-TR module page to the daily health check
The Level 1 daily health checks ping edge functions and the homepage but don't render-test any library module. I'll add a lightweight "module data integrity" check to `daily-health-checks` that imports each library JSON file and walks the shapes the renderers expect (presence of `title`, arrays where arrays are expected, `severity` is dict-or-string, `redFlags` items have a `title`, etc.). This would have caught today's bug before the user did.

### 5. Verify
- Re-open the DSM-5-TR module in the preview and confirm it renders end-to-end.
- Run the health-check function and confirm it reports the module as healthy.

## Technical details

- Crash surface: `src/components/library/ModuleRenderer.tsx` (lines ~1494-1631 for `DiagnosticCategories`).
- Error fallback: `src/App.tsx` `ChunkErrorBoundary` (lines 68-107).
- Health check: `supabase/functions/daily-health-checks/index.ts` — add a `checkLibraryModules()` step that runs server-side over the JSON files bundled in the function (or re-uses a shared schema validator).
- No DB or auth changes; no Stripe changes; no user-data changes.

## Quick question before I start

Want me to go ahead and reproduce + fix now (option A), or just patch the error boundary today so the user sees a friendlier screen and dig into the DSM render bug tomorrow (option B)? I'd recommend **option A** — the user is blocked from a core paid feature right now.
