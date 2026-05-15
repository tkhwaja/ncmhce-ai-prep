## What's happening

When you click the test checkout link, you land on `/checkout` (or `/founding`). Both routes are now **lazy-loaded** (a change we made yesterday for code-splitting). While the JS chunk downloads, React shows a Suspense fallback — and right now that fallback is an **invisible blank div**:

```tsx
const RouteFallback = () => (
  <div className="min-h-screen w-full bg-background" aria-hidden="true" />
);
```

So two things look identical to you:
1. Chunk is still loading → blank screen (briefly)
2. Chunk **failed to load** (stale hash from our recent rebuild, cached old `index.html` pointing at a chunk that no longer exists) → blank screen forever, no error, no spinner

The console log `[vite] server connection lost. Polling for restart...` from your last session is consistent with #2 — the dev server restarted after our Vite config change and the browser is holding a stale module reference.

## Fix

Two small changes in `src/App.tsx`:

1. **Make the fallback visible** — swap the blank div for a centered spinner so a loading state is obvious instead of looking broken.

2. **Recover from chunk-load failures** — wrap the `Suspense` in a tiny error boundary that detects `ChunkLoadError` / "Failed to fetch dynamically imported module" and force-reloads the page once. This is the standard fix for the stale-hash problem after a deploy/rebuild and prevents the permanent blank screen.

No changes to checkout logic, Stripe code, edge functions, or routing. Pure presentation/resilience fix in one file.

## Verification

After the change I'll open the preview at `/checkout` and `/founding` in the browser tool to confirm:
- A spinner shows briefly, then the page renders
- No blank-screen state remains
- Console has no chunk-load errors

## Note on the underlying behavior

Once this lands, if you ever see a brief spinner-then-reload on `/checkout`, that's the recovery doing its job after a code push — not a bug. In production (after publish) chunk hashes are stable so this only affects active dev sessions right after a rebuild.
