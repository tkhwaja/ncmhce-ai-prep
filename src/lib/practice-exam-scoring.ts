import { getNarrativeById, NARRATIVE_DOMAINS, type NarrativeDomain } from "@/data/narratives";

export interface NarrativeAttemptRow {
  id: string;
  narrative_id: string;
  total_score: number | null;
  domain_scores: Record<string, number> | null;
  time_spent: number | null;
  completed_at: string | null;
  created_at: string;
}

export interface PracticeExamComputedScore {
  totalScore: number;
  gradedCaseCount: number;
  ungradedCaseCount: number;
  totalCases: number;
  domainScores: Record<NarrativeDomain, number>;
  perCase: Array<{
    narrativeId: string;
    title: string;
    score: number | null;
    isUngraded: boolean;
    completed: boolean;
    attemptId?: string;
  }>;
  totalTimeSeconds: number;
}

export const computePracticeExamScore = (
  narrativeIds: string[],
  ungradedNarrativeIds: string[],
  attemptsByNarrativeId: Record<string, NarrativeAttemptRow>,
): PracticeExamComputedScore => {
  let gradedSum = 0;
  let gradedCount = 0;
  let totalTime = 0;
  const domainTotals: Record<string, { sum: number; count: number }> = {};
  NARRATIVE_DOMAINS.forEach((d) => (domainTotals[d] = { sum: 0, count: 0 }));

  const perCase = narrativeIds.map((nid) => {
    const narrative = getNarrativeById(nid);
    const attempt = attemptsByNarrativeId[nid];
    const isUngraded = ungradedNarrativeIds.includes(nid);
    const completed = !!attempt?.completed_at;

    if (completed && attempt) {
      totalTime += attempt.time_spent ?? 0;
      if (!isUngraded && attempt.total_score !== null) {
        gradedSum += attempt.total_score;
        gradedCount += 1;
        Object.entries(attempt.domain_scores ?? {}).forEach(([d, s]) => {
          if (!domainTotals[d]) domainTotals[d] = { sum: 0, count: 0 };
          domainTotals[d].sum += s;
          domainTotals[d].count += 1;
        });
      }
    }

    return {
      narrativeId: nid,
      title: narrative?.title ?? nid,
      score: completed ? (attempt?.total_score ?? null) : null,
      isUngraded,
      completed,
      attemptId: attempt?.id,
    };
  });

  const domainScores: Record<string, number> = {};
  Object.entries(domainTotals).forEach(([d, { sum, count }]) => {
    domainScores[d] = count > 0 ? Math.round(sum / count) : 0;
  });

  return {
    totalScore: gradedCount > 0 ? Math.round(gradedSum / gradedCount) : 0,
    gradedCaseCount: gradedCount,
    ungradedCaseCount: ungradedNarrativeIds.length,
    totalCases: narrativeIds.length,
    domainScores: domainScores as Record<NarrativeDomain, number>,
    perCase,
    totalTimeSeconds: totalTime,
  };
};
