// Founding-member offer window: live until end of May 31, 2026.
// Banner, popup, and /founding checkout all auto-disable on June 1, 2026.
export const FOUNDING_OFFER_END = new Date("2026-06-01T00:00:00-04:00");

export function isFoundingOfferActive(now: Date = new Date()): boolean {
  return now < FOUNDING_OFFER_END;
}
