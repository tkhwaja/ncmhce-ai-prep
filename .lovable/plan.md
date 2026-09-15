# Get real members listed in the Study Partners directory

Today the directory works, but only one member has actually created a listing, so almost nobody is reachable. This adds gentle, dismissible prompts in the places members already look, inviting them to list themselves.

## What gets added

1. **Dashboard prompt card**
   A small card near the top of the dashboard, shown only to members who have no listing yet:
   "Studying alone? Add yourself to the Study Partners directory and get matched with people sitting the same exam." One button goes straight to the directory with the listing form open. A quiet "Not now" dismisses it for 30 days.

2. **Prompt after finishing a case or practice set**
   On the results screen, for members without a listing, a single line under the existing buttons: "Compare your reasoning with someone sitting the same exam" with a link to create a listing. Shown at most once a week, and never on the free public case.

3. **Welcome flow mention**
   Add a short community line to the welcome screen new members see, so listing themselves is part of getting set up rather than something to discover later.

4. **Better empty state in the directory**
   When the real directory is nearly empty, lead with the invitation to list yourself rather than showing seeded profiles first, and make "Create my listing" the clear primary action.

5. **A small nudge inside Messages**
   When a member has no conversations yet, the empty Messages tab points them at the directory and at creating a group, instead of only saying they have no messages.

## Rules the prompts follow

- Never shown to a member who already has a listing (listed or not).
- Dismissals remembered per member so nothing nags.
- No prompt on public/unauthenticated pages.
- Nothing changes for members who already use the community.

## Technical detail

- New `useStudyPartnerListingPrompt` hook: reads the member's row in `study_partner_profiles` once, exposes `shouldPrompt`, and stores dismissals in `localStorage` keyed by user id and prompt surface (`dashboard`, `results`).
- New `ListingPromptCard` component in `src/components/community/`, reused by the dashboard and the Messages empty state.
- Deep link: `/community?tab=partners&listing=new` — `StudyPartnersTab` reads the `listing` param and opens `PartnerProfileForm` expanded.
- Edits: `src/pages/Dashboard.tsx` (card above Quick Actions), `src/pages/NarrativePage.tsx` (authenticated results only, `!publicMode`), `src/components/WelcomeModal.tsx` (one line), `src/components/community/StudyPartnersTab.tsx` (empty-state ordering + `listing` param), `src/components/community/MessagesTab.tsx` (empty state).
- No database, RLS, or messaging-logic changes. Sample profiles stay as they are.

## Verification

- Typecheck, build, and the existing test suite.
- Preview walkthrough: a member without a listing sees the dashboard card, the link opens the form pre-expanded, saving a listing makes every prompt disappear, and dismissing hides it without breaking the page.
