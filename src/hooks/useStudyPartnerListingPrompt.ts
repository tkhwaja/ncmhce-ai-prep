import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Decides whether to invite a member to list themselves in the Study Partners
 * directory. A member who already has a listing (listed or not) is never asked
 * again, and each surface remembers its own dismissal locally.
 */
export type ListingPromptSurface = "dashboard" | "results";

const DISMISS_DAYS: Record<ListingPromptSurface, number> = {
  dashboard: 30,
  results: 7,
};

const key = (surface: ListingPromptSurface, userId: string) =>
  `tep:listing-prompt:${surface}:${userId}`;

const dismissedRecently = (surface: ListingPromptSurface, userId: string): boolean => {
  try {
    const raw = localStorage.getItem(key(surface, userId));
    if (!raw) return false;
    const at = Number(raw);
    if (!Number.isFinite(at)) return false;
    return Date.now() - at < DISMISS_DAYS[surface] * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
};

export const useStudyPartnerListingPrompt = (surface: ListingPromptSurface) => {
  const { user } = useAuth();
  const [hasListing, setHasListing] = useState<boolean | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!user) {
      setHasListing(null);
      return;
    }
    setDismissed(dismissedRecently(surface, user.id));
    (async () => {
      const { data, error } = await supabase
        .from("study_partner_profiles")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();
      if (cancelled) return;
      // On error we stay quiet rather than nagging on a failed read.
      setHasListing(error ? true : Boolean(data));
    })();
    return () => {
      cancelled = true;
    };
  }, [user, surface]);

  const dismiss = useCallback(() => {
    setDismissed(true);
    if (!user) return;
    try {
      localStorage.setItem(key(surface, user.id), String(Date.now()));
    } catch {
      /* storage unavailable */
    }
  }, [surface, user]);

  return {
    shouldPrompt: Boolean(user) && hasListing === false && !dismissed,
    dismiss,
  };
};

export default useStudyPartnerListingPrompt;
