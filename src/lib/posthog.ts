import posthog from "posthog-js";

const POSTHOG_KEY = "phc_yid9EPPDRD5QSoAosgshrftbJqvcNfms6Ey5RbbFi5xL";
const POSTHOG_HOST = "https://us.i.posthog.com";

let initialized = false;

export function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false, // we handle pageviews manually on route change
    capture_pageleave: true,
    autocapture: true,
  });
}

export { posthog };
