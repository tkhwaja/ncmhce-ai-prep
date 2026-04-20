

# V1 Launch — Comprehensive Edit Plan

This is a large scope covering every page in the app. The work is organized into **4 phases** by priority, with the most critical items first.

---

## Phase 1: Core Infrastructure and Data Persistence (Foundation)

These items are blockers for everything else.

### 1A. Light/Dark Mode Toggle
- Add a theme provider context (`ThemeProvider`) wrapping the app
- Store preference in `localStorage` 
- Add `:root` light mode CSS variables alongside the existing dark ones in `index.css`
- Place a sun/moon toggle switch in the AppHeader next to the AI chat button

### 1B. Sidebar Navigation Reorder
- Update `navItems` array in `AppSidebar.tsx` to: Dashboard, Narratives, Study Plan, Learning Library, Flashcards, Analytics, Study Tools, Community, Exam Info

### 1C. AI Chat Button Size (Dashboard)
- Increase the AI chat toggle button in `AppHeader.tsx` from `size="icon"` (h-4 w-4 icon) to a larger, more prominent button with label text on desktop

### 1D. Narrative Type Flexibility (3 or 4 sections)
- Change the `sections` type in `types.ts` from a fixed tuple `[S, S, S]` to `NarrativeSection[]` (minimum 3)
- Update `NarrativePage.tsx` to dynamically handle any section count instead of hardcoding 3
- Some new narratives will use 4 sections

### 1E. Narrative Completion Memory
- The `simulation_attempts` table already exists with `completed_at` and `total_score`
- Verify the `NarrativePage.tsx` submit logic correctly writes to this table on completion
- The `Narratives.tsx` list already reads attempts and shows completion status — confirm it works end-to-end
- Rename the DB table from `simulation_attempts` to `narrative_attempts` via migration (update all code references)

### 1F. Study Plan Persistence Fix
- The study plan already saves to Supabase `study_plans` table and loads on mount — verify it persists across sessions
- Fix the "always 10 weeks" issue: update the AI prompt to calculate actual weeks between now and exam date, and instruct it to generate that exact number of weeks
- Update prompt to reference only platform-provided content (Learning Library modules, flashcard decks, narratives) rather than generic suggestions

### 1G. Flashcard Results Persistence
- Flashcard progress already saves to `flashcard_progress` table
- Add a "Retake" button that resets progress for a deck and restarts the session
- Ensure results display correctly when returning to a completed deck

---

## Phase 2: Page-Level Improvements

### 2A. Narratives Page Updates
- **Time estimate**: Calculate display time based on question count (e.g., ~3 min per question) instead of fixed `minutesPerSection × 3`
- **Full Practice Exams**: Create a new `FullExam` component and route (`/exam/:id`) that chains 11 narratives with a single cumulative timer (~4 hours), with the option to review per-narrative or at the end
- **Content**: Expand to 10+ narratives using AI-assisted generation (seed data files). Will need you to provide clinical case content or approve AI-generated cases

### 2B. Analytics Page Fixes
- **Domain Performance text cutoff**: Increase the domain label area width, remove `truncate`, and use proper wrapping or shorter abbreviations in the radar chart `PolarAngleAxis`
- **AI Insights formatting**: Update the prompt to request structured markdown with headers (Strengths, Areas for Improvement, Recommendations), and render with `ReactMarkdown` with proper `prose` styling. Add more user context to the prompt (flashcard progress, study plan completion, time studied)

### 2C. Study Tools Improvements
- **Pomodoro Timer pinning**: Extract `PomodoroTimer` into a floating widget component that renders in `AppLayout.tsx` (bottom-left corner), with show/hide toggle in the sidebar footer
- **Notes save bug**: The notes auto-save every 30s but don't save on note switch. Add `saveNote()` call before `selectNote()` when switching between notes
- **Feynman Technique**: Update the AI prompt to return structured feedback with clear sections (bullet points, not paragraphs). Render with ReactMarkdown
- **Additional study tools**: Add description cards for: Active Recall, Spaced Repetition explanation, Mind Mapping tips, Cornell Notes method — each as an informational card with "Try it" guidance

### 2D. Learning Library Overhaul
- **Domain-based organization**: Restructure into sections matching the 5 NCMHCE domains plus a "Disorders & Mental Health Conditions" section
- **Search bar**: Add a search input at the top filtering modules by title and key concepts
- **Filters and sorting**: Add domain filter dropdown and A-Z / Most Recent sort options
- **Quick Review subpage**: Add a `/library/quick-review` route with condensed concept summaries designed for last-minute review (1-2 days before exam)
- **Visual content**: Add placeholder sections for diagrams and concept maps within modules (you mentioned you'll provide topic content)
- **Remove video references**: Strip all `videoPlaceholder` badges and video UI since there are no videos at launch

### 2E. Exam Info Page Cleanup
- Replace the raw markdown rendering with structured React components: proper heading hierarchy, spaced sections, callout boxes for key facts, numbered lists with visual separators
- Add visual spacing between sections and better typography

### 2F. Feedback Section
- Add a "Feedback" option in the user dropdown menu (AppHeader) or as a small floating button
- Opens a dialog with a textarea and category selector (Bug, Feature Request, General)
- Submits to a `feedback` table in the database with `user_id`, `category`, `body`, `created_at`
- Auto-subjects the email notification as "User Feedback — [category]"

---

## Phase 3: AI Chat Contextual Awareness

### 3A. Global AI Chat Availability
- The AI chat sidebar already exists in `AppLayout.tsx` on every page
- Make it collapsible (already is) and ensure the toggle button is prominent on all pages

### 3B. Contextual AI Awareness
- Update `AIChatSidebar` to accept richer context props: current narrative ID, current question number, current flashcard deck, current study plan week
- Pass this context from each page through `AppLayout` using React context or URL-based detection
- Update the system prompt in `counselor-chat` edge function to include this context so the AI knows exactly what the user is looking at

---

## Phase 4: Community Features (Largest Scope)

### 4A. User Profiles & Usernames
- Add a `username` column to `profiles` table (unique, required)
- Add username search in Community page
- Add online status indicator (green/red/orange circle) using Supabase Realtime presence

### 4B. Direct Messaging
- New `direct_messages` table: `id, sender_id, recipient_id, body, read_at, created_at`
- DM interface accessible from user profile popovers
- Real-time message delivery via Supabase Realtime

### 4C. Study Groups
- New `study_groups` table: `id, name, creator_id, meeting_link, created_at`
- New `study_group_members` table: `id, group_id, user_id, status (invited/accepted/declined), joined_at`
- New `notifications` table for real-time invite notifications
- Group creation form with member invite (by username search)
- Meeting link field for external video calls

### 4D. Collaborative Narrative Sessions
- New `group_narrative_sessions` table tracking which narrative the group is on
- Show which question each participant is on next to their name
- Collapsible participant panel within the narrative view
- Indicator badge showing "Group Study" mode

---

## Database Migrations Required

1. Rename `simulation_attempts` → `narrative_attempts` (or add a view)
2. Add `username` column to `profiles` (unique constraint)
3. Create `feedback` table
4. Create `direct_messages` table
5. Create `study_groups` + `study_group_members` tables
6. Create `notifications` table
7. Create `group_narrative_sessions` table
8. Add RLS policies for all new tables

---

## Estimated Implementation Order

| Priority | Items | Effort |
|----------|-------|--------|
| **Do first** | 1B sidebar reorder, 1C AI button size, 2C notes save bug, 2E exam info cleanup | Small — quick wins |
| **Then** | 1A dark/light mode, 1D flexible sections, 1F study plan fixes, 2B analytics fixes | Medium |
| **Then** | 2D library overhaul, 2F feedback, 3A-3B AI context, 2A narrative time + 10 narratives | Large |
| **Last** | 4A-4D community features (username, DMs, groups, collaborative sessions), 2A full practice exams | Very large |

---

## What I Need From You

1. **Narrative content**: To reach 10+ narratives, either provide case data files or approve AI-generated clinical cases
2. **Learning Library topics**: You mentioned providing a complete topic list — I'll need that before restructuring the library
3. **Privacy/Terms draft**: You mentioned "draft policies" — clarify if this is a legal page to add to the app
4. **Approval on Community scope**: The DM + study groups + collaborative narratives feature set is substantial. Confirm if all of Phase 4 is needed for V1 launch or can be deferred

