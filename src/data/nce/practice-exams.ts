import type { NCEPracticeExam } from "./types";
import type { NCEExamItem } from "./practice-exam-types";
import { ncePracticeExam01Items } from "./practice-exam-01-items";

/**
 * Full-length NCE practice exams.
 *
 * Exam 1 is authored and imported (200 items: 160 scored + 40 field-test) but
 * stays `comingSoon` so it is not accessible to users while the item set is in
 * SME review. The runner UI can still be previewed in development.
 */

export const ncePracticeExams: NCEPracticeExam[] = [
  {
    id: "nce-practice-exam-1",
    title: "NCE Practice Exam 1",
    description: "Full-length • 200 questions • 3 hours 45 minutes • scheduled break at question 100",
    questionIds: ncePracticeExam01Items.map((i) => i.id),
    timeLimitMinutes: 225,
    passingScore: 70,
    comingSoon: true,
    itemSet: "pe-01",
    scoredBlueprint: { D1: 19, D2: 19, D3: 47, D4: 14, D5: 48, D6: 13 },
    format: {
      totalItems: 200,
      scoredItems: 160,
      fieldTestItems: 40,
      testingMinutes: 225,
      breakAfterQuestion: 100,
      breakMinutes: 15,
      lockFirstHalfAfterBreak: true,
    },
  },
  {
    id: "nce-practice-exam-2",
    title: "NCE Practice Exam 2",
    description: "Full-length exam • 200 questions • 3 hours 45 minutes",
    questionIds: [],
    timeLimitMinutes: 225,
    passingScore: 70,
    comingSoon: true,
  },
];

export const getNCEPracticeExamById = (id: string): NCEPracticeExam | undefined =>
  ncePracticeExams.find((e) => e.id === id);

/** Authored items for an exam, in presentation order. */
export const getNCEExamItems = (id: string): NCEExamItem[] => {
  const exam = getNCEPracticeExamById(id);
  if (exam?.itemSet === "pe-01") {
    return [...ncePracticeExam01Items].sort((a, b) => a.sequence - b.sequence);
  }
  return [];
};
