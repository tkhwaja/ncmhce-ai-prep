# Plan: Unlock Practice Exam 1 + Brand Asset Spec Sheet

Two deliverables in this plan:
1. Make Practice Exam 1 (11 narratives) fully takeable, scored, saved, and viewable in progress history.
2. Produce a brand asset spec sheet for your graphic designer.

---

## Part 1 — Unlock Practice Exam 1

Today: the 11 narratives and the `practiceExams` data file exist, and individual narrative attempts already save to the `narrative_attempts` table. What's missing is the wrapper that runs the 11 cases as one timed exam, aggregates the score, saves the exam-level result, and shows it in a history view.

### What I'll build

**1. Practice Exam landing/intro page** — `/practice-exams`
   - Lists Practice Exam 1 (and any future exams) as a card.
   - Shows: # of narratives (11), estimated time (~4 hrs), 1 ungraded pretest case (matches real NCMHCE), best score, last attempt date.
   - "Start Exam" and "Resume" buttons.

**2. Practice Exam runner** — `/practice-exam/:examId`
   - Sequentially walks the user through all 11 narratives in the exam's order.
   - Single persistent timer across the whole exam (saved so refresh doesn't lose it).
   - Progress indicator: "Case 4 of 11."
   - One narrative is randomly designated ungraded per attempt (logic already in `src/lib/practice-exams.ts`) — user sees it normally; it just doesn't count toward the score.
   - Pause/resume + auto-save after each case.
   - On finish → submits and routes to results page.

**3. Practice Exam results page** — `/practice-exam/:examId/results/:attemptId`
   - Overall scaled score (graded cases only) with pass/fail style indicator.
   - Per-domain breakdown (Assessment, Counseling, Ethics, Treatment, Intervention).
   - Per-case mini-cards: case name, score, graded/ungraded tag, link to review that narrative's answers + rationales.
   - Time used vs. allotted.

**4. Progress / history**
   - New "Practice Exams" section on the Dashboard showing latest attempt + best score.
   - Full attempt history list on the Practice Exams page (date, score, time, view-results link).
   - Hooks into existing Analytics page so domain scores from practice exams roll into trend charts.

**5. Backend (Lovable Cloud)**
   - New `practice_exam_attempts` table:
     - `id`, `user_id`, `practice_exam_id`, `started_at`, `completed_at`, `time_spent_seconds`
     - `narrative_attempt_ids` (array of FK-style refs into existing `narrative_attempts`)
     - `ungraded_narrative_ids` (array)
     - `total_score`, `graded_case_count`, `domain_scores` (jsonb)
     - `status` ('in_progress' | 'completed' | 'abandoned')
   - RLS: users can only read/write their own rows.
   - Reuses existing `narrative_attempts` table for per-case data — no duplication.

**6. Access gating**
   - Practice Exams sit behind the existing `PaidFeatureGate` wrapper, same as Narratives. (If you want it free/unlocked for all users, tell me and I'll skip the gate.)

**7. Sidebar/nav**
   - Add a "Practice Exams" entry to the sidebar with the existing icon set.

### Out of scope for this plan
- Building Practice Exam 2/3 content. The framework will support adding more exams later just by appending to `src/data/practice-exams.ts`.
- AI-generated written feedback on the full exam (per-narrative feedback already exists).

---

## Part 2 — Brand Asset Spec Sheet

I'll generate a downloadable PDF + Markdown spec sheet at `/mnt/documents/brand-asset-spec.pdf` covering everywhere your logo currently appears, with exact dimensions and file requirements. It will include:

### Logo system
- Primary wordmark: "The Exam **Path**" (Path in primary blue)
- Logo mark: the rounded-square checkmark-in-C symbol currently in `public/favicon.svg`
- Color tokens: primary blue, background dark navy `#162033`, accent green `#34d399` (HSL equivalents included)
- Required variants: full-color, single-color light, single-color dark, mark-only
- Clear-space and minimum-size rules
- Required file formats: SVG (master), PNG @1x/@2x/@3x, monochrome PDF

### Favicon + app icons (with exact pixel sizes)
| Asset | Size | Format | Path / Use |
|---|---|---|---|
| Master favicon | vector | SVG | `/favicon.svg` |
| Classic favicon | 32×32, 16×16 | ICO/PNG | `/favicon.ico`, `/favicon-32x32.png` |
| Apple touch icon | 180×180 | PNG | `/apple-touch-icon.png` |
| Android Chrome | 192×192, 512×512 | PNG | `/android-chrome-*.png` |
| PWA maskable | 512×512 (with 80% safe zone) | PNG | manifest |
| Microsoft tile | 144×144, 270×270 | PNG | optional |

### Social / Open Graph
- `og-cover.jpg` — 1200×630, <300 KB, JPG, sRGB, headline-safe area 1000×400 centered
- Twitter card — same 1200×630 used as `summary_large_image`
- Square share — 1080×1080 (LinkedIn/IG)

### Google Search listing
- Organization logo (JSON-LD): square PNG, min 112×112, recommended **512×512**, on solid background, served at `/android-chrome-512x512.png`
- Sitelinks search box: handled in metadata (no asset needed)
- Favicon for Google results: 8×8 multiple, currently `/favicon.svg` — Google requires min 48×48 raster fallback

### Email (transactional)
- Email header logo: 600px wide max, 2× retina (1200px source), PNG with transparent background
- Mono fallback for dark-mode clients

### App UI
- Sidebar/header mark: 28×28 displayed (provide 56×56 @2x SVG/PNG)
- Loading splash: 256×256 centered on `#162033`

### Print / business
- Vector master (.ai or .svg) for any print collateral, CMYK + Pantone callouts

The spec sheet will list **what to deliver**, **target dimensions**, **file format**, **color mode**, **background requirements**, and **where it's used in code** so your designer can hand back a zip you can drop straight in.

---

## Order of work
1. Create `practice_exam_attempts` table (migration).
2. Build runner + results pages + dashboard widget.
3. Add nav entry + landing card.
4. Generate the brand spec sheet PDF and place in `/mnt/documents/`.

Let me know if you'd like Practice Exams gated behind paid (default) or free, and whether you want the timer to be strict (auto-submit at 0:00) or soft (warn + allow finish). I'll proceed with **paid-gated + strict timer** unless you say otherwise.