// Founding-member offer ended May 31, 2026. Standard $79/mo pricing is now live.
// Existing founding members retain access via profile.access_expires_at — that
// check lives in useSubscription and is independent of this flag.
export const FOUNDING_OFFER_END = new Date("2026-06-01T00:00:00-04:00");

export function isFoundingOfferActive(_now: Date = new Date()): boolean {
  return false;
}
