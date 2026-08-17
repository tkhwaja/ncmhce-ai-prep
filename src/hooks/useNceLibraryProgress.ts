import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

/**
 * Per-user NCE library progress.
 *
 * Progress is keyed by canonical lesson id, so completion is identical whether a
 * lesson was opened from a subject collection, a blueprint hub, or search.
 *
 * Signed-in users are backed by `nce_lesson_progress` (syncs across devices);
 * knowledge-check attempts are also appended to `nce_knowledge_check_results`.
 * Guests fall back to localStorage, and any local progress recorded before
 * signing in is merged into the account on first load.
 */

export interface NceLessonProgress {
  opened?: boolean;
  completed?: boolean;
  /** Last knowledge-check accuracy, 0–1. */
  checkAccuracy?: number;
  moduleId?: string;
  updatedAt: string;
}

interface NceProgressState {
  lessons: Record<string, NceLessonProgress>;
  lastLessonId?: string;
  lastModuleId?: string;
}

const EMPTY: NceProgressState = { lessons: {} };

const storageKey = (userId?: string) => `nce-library-progress:${userId ?? "guest"}`;

const readLocal = (userId?: string): NceProgressState => {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
};

const writeLocal = (userId: string | undefined, state: NceProgressState) => {
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(state));
  } catch {
    /* storage unavailable — progress stays in memory for this session */
  }
};

export const useNceLibraryProgress = () => {
  const { user } = useAuth();
  const userId = user?.id;
  const [state, setState] = useState<NceProgressState>(() => readLocal(userId));
  const [loading, setLoading] = useState(!!userId);
  const stateRef = useRef(state);
  stateRef.current = state;

  /* ---------------- load ---------------- */
  useEffect(() => {
    let cancelled = false;

    if (!userId) {
      setState(readLocal(undefined));
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("nce_lesson_progress")
        .select("lesson_id, module_id, opened, completed, check_accuracy, updated_at")
        .eq("user_id", userId);

      if (cancelled) return;

      if (error) {
        // fall back to whatever is cached locally for this account
        setState(readLocal(userId));
        setLoading(false);
        return;
      }

      const lessons: Record<string, NceLessonProgress> = {};
      let latest: { id: string; moduleId?: string; at: string } | undefined;
      for (const row of data ?? []) {
        lessons[row.lesson_id] = {
          opened: row.opened ?? undefined,
          completed: row.completed ?? undefined,
          checkAccuracy: row.check_accuracy === null ? undefined : Number(row.check_accuracy),
          moduleId: row.module_id ?? undefined,
          updatedAt: row.updated_at,
        };
        if (!latest || row.updated_at > latest.at) {
          latest = { id: row.lesson_id, moduleId: row.module_id ?? undefined, at: row.updated_at };
        }
      }

      const next: NceProgressState = {
        lessons,
        lastLessonId: latest?.id,
        lastModuleId: latest?.moduleId,
      };
      setState(next);
      writeLocal(userId, next);
      setLoading(false);

      // one-time merge of pre-sign-in guest progress
      const guest = readLocal(undefined);
      const pending = Object.entries(guest.lessons).filter(([id]) => !lessons[id]);
      if (pending.length) {
        await supabase.from("nce_lesson_progress").upsert(
          pending.map(([lessonId, p]) => ({
            user_id: userId,
            lesson_id: lessonId,
            module_id: p.moduleId ?? null,
            opened: p.opened ?? true,
            completed: !!p.completed,
            check_accuracy: p.checkAccuracy ?? null,
            completed_at: p.completed ? p.updatedAt : null,
          })),
          { onConflict: "user_id,lesson_id" },
        );
        try {
          localStorage.removeItem(storageKey(undefined));
        } catch {
          /* ignore */
        }
        if (!cancelled) {
          const merged: NceProgressState = {
            ...next,
            lessons: { ...Object.fromEntries(pending), ...lessons },
          };
          setState(merged);
          writeLocal(userId, merged);
        }
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  /* ---------------- write ---------------- */
  const update = useCallback(
    (lessonId: string, patch: Partial<NceLessonProgress>, moduleId?: string) => {
      const current = stateRef.current;
      const prev = current.lessons[lessonId];
      const merged: NceLessonProgress = {
        ...prev,
        ...patch,
        moduleId: moduleId ?? prev?.moduleId,
        updatedAt: new Date().toISOString(),
      };

      // no-op guard: avoids a write every time an already-opened lesson mounts
      if (
        prev &&
        prev.opened === merged.opened &&
        prev.completed === merged.completed &&
        prev.checkAccuracy === merged.checkAccuracy &&
        prev.moduleId === merged.moduleId
      ) {
        if (current.lastLessonId !== lessonId) {
          const next = { ...current, lastLessonId: lessonId, lastModuleId: merged.moduleId };
          setState(next);
          writeLocal(userId, next);
        }
        return;
      }

      const next: NceProgressState = {
        ...current,
        lastLessonId: lessonId,
        lastModuleId: merged.moduleId ?? current.lastModuleId,
        lessons: { ...current.lessons, [lessonId]: merged },
      };
      setState(next);
      writeLocal(userId, next);

      if (!userId) return;
      void supabase.from("nce_lesson_progress").upsert(
        {
          user_id: userId,
          lesson_id: lessonId,
          module_id: merged.moduleId ?? null,
          opened: merged.opened ?? true,
          completed: !!merged.completed,
          check_accuracy: merged.checkAccuracy ?? null,
          completed_at: merged.completed ? merged.updatedAt : null,
        },
        { onConflict: "user_id,lesson_id" },
      );
    },
    [userId],
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
    (
      lessonId: string,
      accuracy: number,
      details?: {
        moduleId?: string;
        correctCount?: number;
        questionCount?: number;
        answers?: Record<string, number>;
      },
    ) => {
      update(lessonId, { checkAccuracy: accuracy }, details?.moduleId);
      if (!userId) return;
      void supabase.from("nce_knowledge_check_results").insert({
        user_id: userId,
        lesson_id: lessonId,
        module_id: details?.moduleId ?? null,
        accuracy,
        correct_count: details?.correctCount ?? null,
        question_count: details?.questionCount ?? null,
        answers: details?.answers ?? {},
      });
    },
    [update, userId],
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
    loading,
    markOpened,
    setCompleted,
    recordCheckAccuracy,
    isCompleted,
    completedCount,
    lastLessonId: state.lastLessonId,
  };
};
