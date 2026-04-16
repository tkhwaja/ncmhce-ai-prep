import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const HEARTBEAT_MS = 60_000;

function getDeviceLabel(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad/.test(ua)) return "iOS device";
  if (/Android/.test(ua)) return "Android device";
  if (/Mac/.test(ua)) return "Mac";
  if (/Windows/.test(ua)) return "Windows PC";
  if (/Linux/.test(ua)) return "Linux";
  return "Unknown device";
}

/**
 * Enforces a single active session per user.
 * On mount: claims the active session slot for this user (overwriting any prior session).
 * Heartbeat: every 60s, checks if our session_id still owns the slot. If not, signs out.
 */
export function useActiveSessionEnforcement() {
  const { user, session, signOut } = useAuth();
  const { toast } = useToast();
  const claimedRef = useRef(false);

  useEffect(() => {
    if (!user || !session) {
      claimedRef.current = false;
      return;
    }

    const sessionId = session.access_token.slice(-32); // unique-enough fingerprint per session
    const deviceLabel = getDeviceLabel();
    let cancelled = false;

    const claim = async () => {
      // upsert on user_id (unique index) -> overwrites any prior session
      await supabase
        .from("active_sessions")
        .upsert(
          { user_id: user.id, session_id: sessionId, device_label: deviceLabel, last_seen: new Date().toISOString() },
          { onConflict: "user_id" }
        );
      claimedRef.current = true;
    };

    const heartbeat = async () => {
      if (cancelled) return;
      const { data } = await supabase
        .from("active_sessions")
        .select("session_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!data) {
        // slot lost, reclaim
        await claim();
        return;
      }

      if (data.session_id !== sessionId) {
        // Another device took over
        toast({
          title: "Signed in on another device",
          description: "Your account was signed in elsewhere. You've been signed out here.",
          variant: "destructive",
        });
        await signOut();
        return;
      }

      // Refresh last_seen
      await supabase
        .from("active_sessions")
        .update({ last_seen: new Date().toISOString() })
        .eq("user_id", user.id)
        .eq("session_id", sessionId);
    };

    claim();
    const id = setInterval(heartbeat, HEARTBEAT_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, session?.access_token]);
}
