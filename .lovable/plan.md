## Goal
Replace existing logo, favicon, app icons, social/OG image, and manifest with the new "ring" brand assets from the uploaded `The_Exam_Path.zip`. Keep everything else (layout, copy, behavior) untouched.

## Asset mapping (from zip → project)

Favicons & app icons → `public/`
- `favicon/favicon.ico` → `public/favicon.ico`
- `favicon/favicon-16.png` → `public/favicon-16.png`
- `favicon/favicon-32.png` → `public/favicon-32x32.png` (replace existing)
- `icon/apple-touch-icon-180.png` → `public/apple-touch-icon.png` (replace)
- `icon/android-chrome-192.png` → `public/android-chrome-192x192.png` (replace)
- `icon/android-chrome-512.png` → `public/android-chrome-512x512.png` (replace)
- `icon/maskable-512.png` → `public/maskable-512.png` (new)

Social
- `social/og-cover-1200x630.png` → `public/og-cover.png` (replace `og-cover.jpg` references; delete old `og-cover.jpg`)

Logo SVGs (used in-app)
- `logo/ring-mark-dark.svg` → `src/assets/brand/ring-mark-dark.svg` (full color on navy — for dark surfaces)
- `logo/ring-mark-light.svg` → `src/assets/brand/ring-mark-light.svg` (for light surfaces)
- `logo/ring-mark-mono-white.svg` → `src/assets/brand/ring-mark-mono-white.svg`
- `logo/ring-mark-mono-navy.svg` → `src/assets/brand/ring-mark-mono-navy.svg`
- `logo/ring-mark-crisp-dark.svg` / `ring-mark-crisp-light.svg` → `src/assets/brand/` (small-size variants <32px)
- `logo/wordmark-dark.svg`, `wordmark-light.svg`, `lockup-dark.svg`, `lockup-light.svg` → `src/assets/brand/` (available for future use)

Public favicon SVG
- Replace `public/favicon.svg` with `ring-mark-dark.svg` content (for browsers that prefer SVG favicons).

## Code changes

1. `index.html`
   - Update `<link rel="icon">` set to match new files (svg + 16/32 PNG + ico).
   - Update `apple-touch-icon` href (path unchanged, file replaced).
   - Update OG/Twitter image URL to `https://theexampath.com/og-cover.png?v=3` (and width/height stay 1200×630).
   - Update JSON-LD `logo` URL to `https://theexampath.com/android-chrome-512x512.png` (already correct — keep) OR switch to `/ring-mark-dark-512.png`. Will keep existing android-chrome path since the file is now the new ring mark.
   - Keep current `<title>` and meta description (those are user copy, not in scope).

2. `public/site.webmanifest`
   - Keep current structure but add `maskable-512.png` entry with `purpose: "maskable"`. Names/colors already match brand (`#162033`).

3. `public/favicon.svg`
   - Overwrite with new ring-mark SVG.

4. `src/components/icons/svg/logo-mark.svg`
   - Replace contents with the new ring mark (mono variant scaled to 24×24 viewBox) so existing `<TceIcon name="logo-mark">` usage in `AppSidebar` automatically uses the new mark, inheriting `currentColor`. Use `ring-mark-mono-navy.svg` content adapted to 24×24 viewBox with `currentColor`.

5. `src/components/landing/Navbar.tsx`
   - Currently imports `@/components/icons/svg/logo-mark.svg` as a raster `<img>`. Switch import to the new full-color SVG `@/assets/brand/ring-mark-light.svg` (transparent variant) so the navbar shows the new ring mark in brand colors instead of the inherited primary-only outline. Size unchanged (`h-7 w-7`).
   - Keep the wordmark text + tagline as-is.

6. Old file cleanup
   - Delete `public/og-cover.jpg` (replaced by `og-cover.png`).

## Out of scope
- No changes to email templates, color tokens (`index.css`), typography, copy, routes, or components beyond logo/favicon swap.
- No introduction of DM Sans / JetBrains Mono fonts — that would be a separate typography pass.
- No edits to `src/integrations/supabase/*` or DB.

## Files touched
- Add: `public/favicon.ico`, `public/favicon-16.png`, `public/maskable-512.png`, `src/assets/brand/*` (logo SVG set)
- Replace: `public/favicon.svg`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`, `public/og-cover.*`, `public/site.webmanifest`, `src/components/icons/svg/logo-mark.svg`
- Edit: `index.html`, `src/components/landing/Navbar.tsx`
- Delete: `public/og-cover.jpg`
