import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const IDLE_MS = 60 * 60 * 1000; // 1 hour
const ACTIVITY_EVENTS = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "visibilitychange"];

/**
 * Signs the user out after 1 hour of no interaction with the page.
 */
export function useIdleLogout() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!user) return;

    const reset = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(async () => {
        toast({
          title: "Signed out for inactivity",
          description: "You were signed out after 1 hour of inactivity.",
        });
        await signOut();
      }, IDLE_MS);
    };

    ACTIVITY_EVENTS.forEach((evt) => window.addEventListener(evt, reset, { passive: true }));
    reset();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      ACTIVITY_EVENTS.forEach((evt) => window.removeEventListener(evt, reset));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
}
