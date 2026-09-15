# Carry the exam choice through the free NCMHCE assessment results

## Current state (verified)

The exam choice is already wired through onboarding:

- The free assessment starts on a chooser page asking which exam the visitor is preparing for, then sends them to the NCMHCE clinical case or the 24-question NCE knowledge diagnostic.
- The email capture on the results screen records which exam the person chose.
- Signup has an exam picker, and it arrives pre-selected when someone comes from the NCE diagnostic (`/signup?track=nce`).
- After signup, the welcome screen and the rest of the app adapt to the chosen exam.

The one gap: the NCMHCE case results screen has a "Get Full Access" button that goes to signup **without** naming the exam, so those visitors land on signup with the picker on its default value rather than clearly pre-set to NCMHCE.

## Change

On the NCMHCE free case results screen, make the account button carry the NCMHCE choice into signup so the exam is already selected when they arrive, matching how the NCE diagnostic already behaves.

Also make the surrounding copy exam-aware rather than hard-coded, so this same screen reads correctly if it is ever reused for another exam.

## Technical detail

- `src/pages/NarrativePage.tsx`, public-mode results CTA (~line 698): `navigate("/signup")` becomes `navigate("/signup?track=ncmhce")`.
- Same card: keep the heading/pricing copy sourced from the NCMHCE track config (`EXAM_TRACKS.ncmhce`) instead of the literal "$79/month" string, so price and exam name stay in one place.
- No changes to the NCE flow, the chooser, signup itself, or any content data.

## Verification

- Typecheck and build.
- Walk the free NCMHCE case to results in the preview and confirm the button lands on signup with NCMHCE pre-selected.
