## Findings

PostHog is wired into the app, but it is sending to the wrong PostHog project key.

Current app key:
```text
phc_SsJXq6AmOHYQsp8IXiyowjjFGcjYpq7FIzE4cXI3c8k
```

Connected PostHog project key from your PostHog account:
```text
phc_yid9EPPDRD5QSoAosgshrftbJqvcNfms6Ey5RbbFi5xL
```

I also checked the connected PostHog project directly: it has no events ingested yet. That matches what you see in Activity.

## Plan

1. Replace the old PostHog public project key in `src/lib/posthog.ts` with the active key from your connected PostHog project.
2. Keep the host as `https://us.i.posthog.com` because your connected project is US-hosted.
3. Leave the existing tracking behavior in place:
   - route-change `$pageview`
   - autocapture
   - signup event
   - user identify on signup
4. After implementation, reload the preview/live site and verify that a request goes to PostHog.

## Expected result

After the site reloads, PostHog Activity should start showing pageview/autocapture events for the connected project.