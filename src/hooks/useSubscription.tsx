import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { isFreePromoActive } from "@/lib/freePromo";

interface SubscriptionState {
  hasAccess: boolean;
  loading: boolean;
  status: string | null;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string | null;
  refresh: () => Promise<void>;
}

export function useSubscription(): SubscriptionState {
  const { user, profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string | null>(null);
  const [cancelAtPeriodEnd, setCancelAtPeriodEnd] = useState(false);
  const [currentPeriodEnd, setCurrentPeriodEnd] = useState<string | null>(null);

  const env = getStripeEnvironment();

  const fetch = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data } = await supabase
      .from("subscriptions")
      .select("status, cancel_at_period_end, current_period_end")
      .eq("user_id", user.id)
      .eq("environment", env)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (data) {
      setStatus(data.status);
      setCancelAtPeriodEnd(!!data.cancel_at_period_end);
      setCurrentPeriodEnd(data.current_period_end);
    } else {
      setStatus(null);
      setCancelAtPeriodEnd(false);
      setCurrentPeriodEnd(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Subscription active OR canceled but still within paid period
  const subActive =
    !!status &&
    ((["active", "trialing"].includes(status) &&
      (!currentPeriodEnd || new Date(currentPeriodEnd) > new Date())) ||
      (status === "canceled" && currentPeriodEnd && new Date(currentPeriodEnd) > new Date()));

  // Legacy paid users (one-time $349) still get access
  const legacyPaid = profile?.payment_status === "paid";

  // Founding members: 1-year access via access_expires_at on profile
  const foundingActive =
    !!profile?.access_expires_at && new Date(profile.access_expires_at) > new Date();

  // Free promo window: everyone has full access until May 31, 2026
  const promoActive = isFreePromoActive();

  return {
    hasAccess: !!subActive || legacyPaid || foundingActive || promoActive,
    loading,
    status,
    cancelAtPeriodEnd,
    currentPeriodEnd,
    refresh: fetch,
  };
}
