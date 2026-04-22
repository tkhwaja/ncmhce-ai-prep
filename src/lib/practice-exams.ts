import { getPracticeExamById } from "@/data/practice-exams";

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

export const getUngradedNarrativeIdsForAttempt = (
  practiceExamId: string,
  attemptKey: string,
) => {
  const exam = getPracticeExamById(practiceExamId);
  if (!exam || !exam.ungradedNarrativeCount || exam.ungradedNarrativeCount <= 0) {
    return [] as string[];
  }

  const pool = [...exam.narrativeIds];
  const selected: string[] = [];
  let seed = hashString(`${practiceExamId}:${attemptKey}`);

  while (pool.length > 0 && selected.length < exam.ungradedNarrativeCount) {
    const index = seed % pool.length;
    selected.push(pool.splice(index, 1)[0]);
    seed = hashString(`${seed}:${selected.length}`);
  }

  return selected;
};

export const isNarrativeUngradedForAttempt = (
  practiceExamId: string,
  attemptKey: string,
  narrativeId: string,
) => getUngradedNarrativeIdsForAttempt(practiceExamId, attemptKey).includes(narrativeId);