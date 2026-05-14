// Free-access promotional window: full platform free for everyone until end of May 31, 2026.
export const FREE_PROMO_END = new Date("2026-06-01T00:00:00-04:00");

export function isFreePromoActive(now: Date = new Date()): boolean {
  return now < FREE_PROMO_END;
}
