import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Per-user NCE library progress.
 *
 * Progress is keyed by canonical lesson id, so completion is identical whether a
 * lesson was opened from a subject collection, a blueprint hub, or search.
 * Stored locally for now; the shape maps 1:1 onto a future backend table.
 */

export interface NceLessonProgress {
  opened?: boolean;
  completed?: boolean;
  /** Last knowledge-check accuracy, 0–1. */
  checkAccuracy?: number;
  updatedAt: string;
}

interface NceProgressState {
  lessons: Record<string, NceLessonProgress>;
  lastLessonId?: string;
  lastModuleId?: string;
}

const EMPTY: NceProgressState = { lessons: {} };

const storageKey = (userId?: string) => `nce-library-progress:${userId ?? "guest"}`;

const read = (userId?: string): NceProgressState => {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
};

export const useNceLibraryProgress = () => {
  const { user } = useAuth();
  const userId = user?.id;
  const [state, setState] = useState<NceProgressState>(() => read(userId));

  useEffect(() => setState(read(userId)), [userId]);

  const persist = useCallback(
    (next: NceProgressState) => {
      setState(next);
      try {
        localStorage.setItem(storageKey(userId), JSON.stringify(next));
      } catch {
        /* storage unavailable — progress stays in memory for this session */
      }
    },
    [userId],
  );

  const update = useCallback(
    (lessonId: string, patch: Partial<NceLessonProgress>, moduleId?: string) => {
      const prev = state.lessons[lessonId] ?? { updatedAt: new Date().toISOString() };
      persist({
        ...state,
        lastLessonId: lessonId,
        lastModuleId: moduleId ?? state.lastModuleId,
        lessons: {
          ...state.lessons,
          [lessonId]: { ...prev, ...patch, updatedAt: new Date().toISOString() },
        },
      });
    },
    [persist, state],
  );

  const markOpened = useCallback(
    (lessonId: string, moduleId?: string) => update(lessonId, { opened: true }, moduleId),
    [update],
  );

  const setCompleted = useCallback(
    (lessonId: string, completed: boolean, moduleId?: string) =>
      update(lessonId, { completed }, moduleId),
    [update],
  );

  const recordCheckAccuracy = useCallback(
    (lessonId: string, accuracy: number) => update(lessonId, { checkAccuracy: accuracy }),
    [update],
  );

  const isCompleted = useCallback(
    (lessonId: string) => !!state.lessons[lessonId]?.completed,
    [state.lessons],
  );

  const completedCount = useCallback(
    (lessonIds: string[]) => lessonIds.filter((id) => state.lessons[id]?.completed).length,
    [state.lessons],
  );

  return {
    progress: state,
    markOpened,
    setCompleted,
    recordCheckAccuracy,
    isCompleted,
    completedCount,
    lastLessonId: state.lastLessonId,
  };
};
