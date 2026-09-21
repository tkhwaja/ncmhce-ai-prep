import { useEffect, useMemo, useRef } from "react";
import type { Session } from "@supabase/supabase-js";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const HEARTBEAT_MS = 60_000;
const CLAIM_RETRY_DELAY_MS = 1_500;

function getDeviceLabel(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad/.test(ua)) return "iOS device";
  if (/Android/.test(ua)) return "Android device";
  if (/Mac/.test(ua)) return "Mac";
  if (/Windows/.test(ua)) return "Windows PC";
  if (/Linux/.test(ua)) return "Linux";
  return "Unknown device";
}

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  const [, payload] = token.split(".");
  if (!payload) return null;

  try {
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const decoded = atob(padded);
    return JSON.parse(decoded) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function getStableSessionId(session: Session): string | null {
  const payload = decodeJwtPayload(session.access_token);
  const jwtSessionId = payload?.session_id;

  if (typeof jwtSessionId === "string" && jwtSessionId.length > 0) {
    return `session:${jwtSessionId}`;
  }

  return null;
}

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
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
  const userId = user?.id;
  const sessionId = useMemo(() => (session ? getStableSessionId(session) : null), [session]);

  useEffect(() => {
    if (!userId || !sessionId) {
      claimedRef.current = false;
      return;
    }

    const deviceLabel = getDeviceLabel();
    let cancelled = false;

    const upsertClaim = async () => {
      // upsert on user_id (unique index) -> overwrites any prior session
      const { error } = await supabase
        .from("active_sessions")
        .upsert(
          { user_id: userId, session_id: sessionId, device_label: deviceLabel, last_seen: new Date().toISOString() },
          { onConflict: "user_id" }
        );

      return !error;
    };

    const claim = async () => {
      if (await upsertClaim()) {
        claimedRef.current = true;
        return true;
      }

      await supabase.auth.refreshSession();
      if (cancelled) return false;

      await wait(CLAIM_RETRY_DELAY_MS);
      if (cancelled) return false;

      const claimed = await upsertClaim();
      claimedRef.current = claimed;
      return claimed;
    };

    const heartbeat = async () => {
      if (cancelled) return;
      if (!claimedRef.current) {
        await claim();
        return;
      }

      const { data } = await supabase
        .from("active_sessions")
        .select("session_id")
        .eq("user_id", userId)
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
        .eq("user_id", userId)
        .eq("session_id", sessionId);
    };

    claim();
    const id = setInterval(heartbeat, HEARTBEAT_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, sessionId]);
}
