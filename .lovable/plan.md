# NCE Onboarding Flow: When Users Pick Their Exam Track

## Current state
- Signup only asks for name, email, password, and an optional target exam date.
- Every new user lands on the NCMHCE track by default.
- NCE is production-hidden (`NCE_ENABLED = import.meta.env.DEV`); the header switcher only appears when NCE is enabled and multiple tracks are available.
- Curation is already wired: `useExamTrack()` reads `profile.active_exam_track`, and the Dashboard, sidebar, quick actions, stats, practice exams, question bank, flashcards, and study plan all react to the active track.
- Checkout accepts a `?track=` param but defaults to NCMHCE.

## Proposed onboarding flow

### 1. Track selection happens during signup
Add a required "I’m studying for" step/field on the signup page with two cards:
- **NCMHCE** — Clinical case simulations, diagnosis, treatment planning.
- **NCE** — Multiple-choice mastery across the eight core counseling areas.

The selected track is stored in `profile.active_exam_track` when the account is created.

### 2. First-login welcome confirms the choice
After email confirmation and first login, show a one-time welcome modal:
- Confirms the selected exam track.
- Explains what content is unlocked.
- Offers a single primary CTA ("Go to Dashboard" / "Start Studying").
- Includes an "I picked the wrong exam" link that opens the track switcher.

### 3. UI curates immediately from that point
From the first dashboard load onward:
- Sidebar nav shows the track-specific menu (Narratives for NCMHCE, Question Bank for NCE, etc.).
- Dashboard quick actions, stats labels, and AI recommendations use the active track.
- Practice exams, flashcards, learning library, and study plan load track-specific content.
- Header shows the track switcher so users can change later.

### 4. Existing users stay on NCMHCE by default
Users without `active_exam_track` resolve to NCMHCE, preserving current behavior.

### 5. Checkout respects the selected track
- `/checkout` already accepts `?track=nce|ncmhce`.
- After signup, if the user subscribes, the checkout CTA passes their selected track so they pay for the right product.

## Implementation steps

1. **Signup page**
   - Add a required exam-track selector (radio cards) to `src/pages/Signup.tsx`.
   - Include it in the form schema and pass it to `supabase.auth.signUp()` user metadata as `active_exam_track`.

2. **Profile creation / auth hook**
   - Ensure the `handle_new_user()` trigger or `AuthContext` writes `active_exam_track` from user metadata into `profiles.active_exam_track`.

3. **Welcome modal**
   - Create a lightweight `WelcomeModal` component.
   - Show it on `/dashboard` when `?new=true` and the user has no completed activity yet.
   - Dismissal stores a local flag so it does not reappear.

4. **Track switcher visibility**
   - Keep `ExamTrackSwitcher` in the header; it will appear automatically once `NCE_ENABLED` is flipped to `true` in production.

5. **Checkout CTA**
   - Update any post-signup subscribe CTAs to include `?track=<selectedTrack>`.

6. **Tests**
   - Add a test that verifies signup metadata flows to `profile.active_exam_track`.
   - Add a test that verifies dashboard quick actions switch between NCMHCE and NCE.

## Open product questions
- Should the signup selector appear now (while NCE is still hidden in production) or only after NCE launches?
- Should the welcome modal also prompt for target exam date if the user skipped it during signup?
- Should switching tracks later reset or preserve per-track progress? (Current code keeps per-track progress separate, so it is preserved.)
