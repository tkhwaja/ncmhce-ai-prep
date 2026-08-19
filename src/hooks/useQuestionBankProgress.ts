import { useCallback, useEffect, useState } from "react";

/**
 * Lightweight per-browser progress for the NCE question bank.
 * Tracks which items a user has attempted and whether they got them right,
 * so the bank can offer "unseen only" and "missed only" drills.
 */

export type QuestionAttempt = { correct: boolean; at: string };
export type QuestionBankProgress = Record<string, QuestionAttempt>;

const STORAGE_KEY = "nce-question-bank-progress-v1";

const read = (): QuestionBankProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as QuestionBankProgress) : {};
  } catch {
    return {};
  }
};

export const useQuestionBankProgress = () => {
  const [progress, setProgress] = useState<QuestionBankProgress>({});

  useEffect(() => {
    setProgress(read());
  }, []);

  const recordAttempts = useCallback((results: { id: string; correct: boolean }[]) => {
    setProgress((prev) => {
      const next = { ...prev };
      const at = new Date().toISOString();
      results.forEach(({ id, correct }) => {
        next[id] = { correct, at };
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — progress stays in memory for this session */
      }
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setProgress({});
  }, []);

  return { progress, recordAttempts, resetProgress };
};
