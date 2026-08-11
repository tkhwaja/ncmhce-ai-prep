import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import {
  DEFAULT_EXAM_TRACK,
  EXAM_TRACKS,
  NCE_ENABLED,
  availableTracks,
  resolveTrack,
  trackConfig,
  type ExamTrack,
  type ExamTrackConfig,
} from "@/config/exam-tracks";

const STORAGE_KEY = "tep:exam-track";

interface ExamTrackContextValue {
  track: ExamTrack;
  config: ExamTrackConfig;
  /** Tracks the user can switch between. Length 1 while NCE is hidden. */
  tracks: ExamTrackConfig[];
  /** True when a switcher should be shown at all. */
  multiTrack: boolean;
  setTrack: (track: ExamTrack) => void;
}

const ExamTrackContext = createContext<ExamTrackContextValue | undefined>(undefined);

export const useExamTrack = (): ExamTrackContextValue => {
  const ctx = useContext(ExamTrackContext);
  if (!ctx) {
    // Safe fallback so any component can call this without a provider —
    // important while NCE is dark and parts of the tree are unchanged.
    return {
      track: DEFAULT_EXAM_TRACK,
      config: trackConfig(DEFAULT_EXAM_TRACK),
      tracks: availableTracks(),
      multiTrack: false,
      setTrack: () => {},
    };
  }
  return ctx;
};

export const ExamTrackProvider = ({ children }: { children: ReactNode }) => {
  const { user, profile, refreshProfile } = useAuth();

  const [track, setTrackState] = useState<ExamTrack>(() => {
    if (typeof window === "undefined") return DEFAULT_EXAM_TRACK;
    return resolveTrack(window.localStorage.getItem(STORAGE_KEY));
  });

  // Profile is the source of truth once it loads.
  useEffect(() => {
    if (!profile) return;
    const fromProfile = resolveTrack(
      (profile as { active_exam_track?: string }).active_exam_track,
    );
    setTrackState(fromProfile);
    try {
      window.localStorage.setItem(STORAGE_KEY, fromProfile);
    } catch {
      /* storage unavailable */
    }
  }, [profile]);

  const setTrack = (next: ExamTrack) => {
    const resolved = resolveTrack(next);
    if (resolved === track) return;
    setTrackState(resolved);
    try {
      window.localStorage.setItem(STORAGE_KEY, resolved);
    } catch {
      /* storage unavailable */
    }
    if (user) {
      void supabase
        .from("profiles")
        .update({ active_exam_track: resolved })
        .eq("id", user.id)
        .then(() => refreshProfile());
    }
  };

  const tracks = availableTracks();

  return (
    <ExamTrackContext.Provider
      value={{
        track,
        config: EXAM_TRACKS[track],
        tracks,
        multiTrack: NCE_ENABLED && tracks.length > 1,
        setTrack,
      }}
    >
      {children}
    </ExamTrackContext.Provider>
  );
};
