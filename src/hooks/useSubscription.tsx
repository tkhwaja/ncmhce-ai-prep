import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { DEFAULT_EXAM_TRACK, EXAM_TRACKS, type ExamTrack } from "@/config/exam-tracks";

interface SubscriptionRow {
  price_id: string | null;
  status: string;
  cancel_at_period_end: boolean | null;
  current_period_end: string | null;
}

interface SubscriptionState {
  /** Access to the NCMHCE track — the historical meaning of this flag. */
  hasAccess: boolean;
  /** Access to a specific exam track. */
  hasAccessTo: (track: ExamTrack) => boolean;
  /** Every track the user currently has access to. */
  entitledTracks: ExamTrack[];
  loading: boolean;
  /** Status of the most recent subscription (NCMHCE-first, for existing UI). */
  status: string | null;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string | null;
  /** Per-track subscription detail, for billing UI. */
  trackStatus: (track: ExamTrack) => {
    status: string | null;
    cancelAtPeriodEnd: boolean;
    currentPeriodEnd: string | null;
  };
  refresh: () => Promise<void>;
}

/** Maps a stored Stripe price lookup key to the track it grants. */
const trackForPriceId = (priceId: string | null | undefined): ExamTrack => {
  if (!priceId) return DEFAULT_EXAM_TRACK;
  // NCE may be purchased through the founder price or the regular monthly price.
  if (priceId === "nce_founder_monthly" || priceId === "nce_monthly") return "nce";
  for (const cfg of Object.values(EXAM_TRACKS)) {
    if (cfg.priceId === priceId) return cfg.id;
  }
  // Unknown/legacy price ids keep their historical meaning: NCMHCE access.
  return DEFAULT_EXAM_TRACK;
};

/** Subscription active, or canceled but still inside the paid period. */
const rowIsActive = (row: SubscriptionRow): boolean => {
  const future = !row.current_period_end || new Date(row.current_period_end) > new Date();
  if (["active", "trialing"].includes(row.status)) return future;
  if (row.status === "canceled") {
    return !!row.current_period_end && new Date(row.current_period_end) > new Date();
  }
  return false;
};

export function useSubscription(): SubscriptionState {
  const { user, profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<SubscriptionRow[]>([]);

  const env = getStripeEnvironment();

  const fetch = async () => {
    if (!user) {
      setRows([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data } = await supabase
      .from("subscriptions")
      .select("price_id, status, cancel_at_period_end, current_period_end")
      .eq("user_id", user.id)
      .eq("environment", env)
      .order("created_at", { ascending: false });

    setRows((data as SubscriptionRow[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Legacy paid users (one-time $349) still get access
  const legacyPaid = profile?.payment_status === "paid";
  // Founding members / comped accounts: access via access_expires_at on profile
  const foundingActive =
    !!profile?.access_expires_at && new Date(profile.access_expires_at) > new Date();
  // Personal owner override for testing
  const ownerOverride = profile?.email?.toLowerCase() === "tahahareb7@gmail.com";

  const latestByTrack = useMemo(() => {
    // Rows arrive newest-first, so the first row per track is the current one.
    const map = new Map<ExamTrack, SubscriptionRow>();
    for (const row of rows) {
      const track = trackForPriceId(row.price_id);
      if (!map.has(track)) map.set(track, row);
    }
    return map;
  }, [rows]);

  const hasAccessTo = (track: ExamTrack): boolean => {
    if (ownerOverride) return true;
    // Profile-level grants (legacy purchases, founding members, comps) are
    // NCMHCE entitlements — they predate the NCE track.
    if (track === DEFAULT_EXAM_TRACK && (legacyPaid || foundingActive)) return true;
    const row = latestByTrack.get(track);
    return !!row && rowIsActive(row);
  };

  const trackStatus = (track: ExamTrack) => {
    const row = latestByTrack.get(track);
    return {
      status: row?.status ?? null,
      cancelAtPeriodEnd: !!row?.cancel_at_period_end,
      currentPeriodEnd: row?.current_period_end ?? null,
    };
  };

  const entitledTracks = (Object.keys(EXAM_TRACKS) as ExamTrack[]).filter(hasAccessTo);

  // Legacy top-level fields describe the NCMHCE subscription, preserving the
  // behavior every existing call site relies on.
  const primary = trackStatus(DEFAULT_EXAM_TRACK);

  return {
    hasAccess: hasAccessTo(DEFAULT_EXAM_TRACK),
    hasAccessTo,
    entitledTracks,
    loading,
    status: primary.status,
    cancelAtPeriodEnd: primary.cancelAtPeriodEnd,
    currentPeriodEnd: primary.currentPeriodEnd,
    trackStatus,
    refresh: fetch,
  };
}
