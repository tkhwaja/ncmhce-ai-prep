# Open NCE for full testing

## What will change
- Unlock both 200-question NCE practice exams and update the release-state tests.
- Mark the NCE track as content-ready and open NCE subscriptions throughout onboarding, navigation, pricing, and paid feature gates.
- Keep the $59 founding price for the first seven days, then automatically use the regular $69 monthly price; subscribers retain the price they purchased.
- Make the checkout success page track-aware so NCE purchases are not reported as NCMHCE purchases.
- Harden checkout identity and NCE entitlement handling so a paid NCE subscription is reliably assigned to the signed-in purchaser and correct track.
- Enable Stripe’s automatic tax handling for this digital subscription and preserve promotion-code support.

## Stripe verification
- Verify both test and live NCE products are active at $59 and $69 monthly.
- Verify their lookup keys and entitlement metadata match the application.
- Exercise a Stripe test-mode NCE checkout, return flow, subscription record, access grant, billing portal, and cancellation path without charging a real card.
- Leave live checkout configured and ready for publication.

## Full user walkthrough
- Test NCE selection from free diagnostic and signup.
- Test a paid NCE user’s dashboard, 1,008-question bank, 51-module library, both practice exams, study plan, analytics, flashcards, tools, and community entry points.
- Check direct URLs, refresh/resume behavior, mobile presentation, and browser errors.
- Run the focused integrity tests plus the project’s automated verification.

## Launch readiness output
- Add a concise roadmap/checklist documenting completed NCE launch work and any remaining manual marketing/publishing actions.
- Do not publish the site; all changes remain available for your review first.

## Technical details
- Update `src/config/exam-tracks.ts`, `src/data/nce/practice-exams.ts`, and the corresponding tests.
- Update checkout return analytics to derive the purchased track and price instead of hard-coding NCMHCE/$79.
- Authenticate checkout creation server-side rather than trusting a browser-supplied user ID.
- Preserve the Stripe price lookup keys `nce_founder_monthly` and `nce_monthly`, whose live and test products are already active with correct entitlement metadata.
