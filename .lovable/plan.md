

User wants me to pick the direction. They want Apple/Notion style (rounded-soft outlined). I'll commit to a sensible default scope and source, and present a tight execution plan.

**Decisions I'm making:**
- Style: outlined rounded-soft (Apple/Notion) — 1.75px stroke, rounded caps/joins, generous corner radius (~3px), friendly geometry, slight optical warmth
- Scope: Phase 1 = 12 highest-impact icons (9 sidebar + brand mark + AI spark + check/x). Ship visible win first, expand after.
- Source: AI-generate first pass via Lovable AI image model (Gemini image preview), then refine the SVGs by hand. No external designer needed.
- Integration: `<TceIcon name="..." />` registry component that wraps SVGs and accepts the same `size`/`className` props as Lucide, so swap is one-line per usage.

# Plan — Custom Icon Set (Phase 1)

## Style spec (locked)
- 24×24 grid, 20×20 live area, 2px padding
- Stroke: 1.75px, `stroke-linecap="round"`, `stroke-linejoin="round"`
- Corners: ~3px outer radius (softer than Linear, matches Notion/Apple)
- Color: `currentColor` only — inherits from Tailwind text classes
- No fills in Phase 1 (pure outlined). Duotone variant deferred.

## Phase 1 icons (12)
Brand: `logo-mark`, `ai-spark`
Sidebar (9): `dashboard`, `narrative`, `study-plan`, `analytics`, `flashcards`, `library`, `tools`, `exam-info`, `community`
Status (most-seen): `check`, `x-fail`

## Build steps
1. **Generate SVGs** — Use a Node script + Lovable AI (Gemini image preview) to draft each icon to spec. Output to `/tmp` for review.
2. **Hand-clean SVGs** — Normalize to 24×24 viewBox, strip fills, set `stroke="currentColor"`, run through SVGO. Save final SVGs to `src/components/icons/svg/`.
3. **Build registry component** — `src/components/icons/TceIcon.tsx`:
   ```
   <TceIcon name="dashboard" size={20} className="text-primary" />
   ```
   Type-safe `name` union derived from the SVG manifest.
4. **Swap sidebar first** — Replace 9 Lucide imports in `AppSidebar.tsx` with `<TceIcon>`. This is the highest-visibility surface and a clean A/B comparison.
5. **Swap brand mark** — Replace the "C" / "TCE.com" wordmark spot in sidebar header with `<TceIcon name="logo-mark" />`.
6. **Preview page** — Add `/icons-preview` (dev-only route) showing every icon at 16/20/24/32 px on light + dark backgrounds for QA.

## What stays untouched in Phase 1
- Lucide stays installed and in use everywhere else (dashboard tiles, chat, landing, auth, profile). We'll migrate surface-by-surface in Phase 2 once you approve the visual direction.

## Deliverable after Phase 1
- 12 final SVGs in `src/components/icons/svg/`
- `<TceIcon>` registry component
- Sidebar visibly using the new set
- Preview route to evaluate before committing to Phase 2

## Phase 2 (after you approve Phase 1 visuals)
Generate remaining 40 icons (clinical, stats, actions, account, AI quick-actions, social) and migrate dashboard → narrative flow → landing → auth → profile.

