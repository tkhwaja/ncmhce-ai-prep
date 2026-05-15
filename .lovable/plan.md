## Why

PostHog is currently **half-connected**: the daily diagnostic report edge function can *read* from PostHog's API, but the site itself never *sends* any events. There's no `posthog-js` SDK, no init call, no autocapture. That's why your PostHog project is empty.

## What I'll build

1. **Install `posthog-js`** in the project.

2. **Add a PostHog provider** at `src/lib/posthog.ts` + initialize it in `src/main.tsx`:
   - Autocapture clicks, form submits, sessions
   - Manual `$pageview` capture wired into React Router so SPA navigation is tracked
   - `person_profiles: 'identified_only'` to keep MTU costs sane
   - Disable in dev (only run when `import.meta.env.PROD`) so localhost noise doesn't pollute data

3. **Identify users on auth**: in the auth state listener, call `posthog.identify(user.id, { email })` on sign-in and `posthog.reset()` on sign-out. This makes the signup → confirmed → paid funnel actually work in the daily report.

4. **Track key funnel events** explicitly so the report's funnel metrics light up:
   - `landing_viewed` (home `/`)
   - `signup_started`, `signup_completed`
   - `email_confirmed`
   - `diagnostic_started`, `diagnostic_completed`
   - `checkout_started`, `purchase_completed`

5. **Configuration**:
   - Use the **Project API Key** (`phc_...`) — public, safe in frontend
   - Default to **US host** (`https://us.i.posthog.com`) since that's the most common; one-line change if you're on EU
   - Read from `VITE_POSTHOG_KEY` if present, otherwise fall back to a hardcoded constant once you give me the key

## What I need from you

The **PostHog Project API Key** (starts with `phc_...`).
Find it at: PostHog → Settings (bottom-left) → Project → "Project API Key".

⚠️ This is **not** the same as the `POSTHOG_PERSONAL_API_KEY` you already gave me. The personal one reads data; the project key writes events.

Also confirm: **US or EU PostHog?** (I'll default to US if you don't say.)

## After it's deployed

- Open your site in an incognito window, click around, sign up.
- Within ~30 seconds, events should show up in PostHog → Activity → Live events.
- Tomorrow's 7 PM ET diagnostic report will start showing real visitor/pageview/funnel numbers instead of zeros.

## Out of scope (say the word if you want them)

- Session recordings (off by default — easy to turn on)
- Feature flags / experiments
- Heatmaps / toolbar
- Server-side event capture from edge functions
