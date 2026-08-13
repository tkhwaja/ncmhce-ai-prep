import type { NCEPracticeExam } from "./types";

/**
 * Sample NCE practice exams.
 *
 * This is a format placeholder. The real launch exams will be full-length
 * (typically 200 questions) and domain-weighted. The sample uses the 8
 * available sample questions so the runner and results pages can be tested.
 */

export const ncePracticeExams: NCEPracticeExam[] = [
  {
    id: "nce-practice-exam-1",
    title: "NCE Practice Exam 1",
    description: "8 sample questions • 20 minutes • one question per domain",
    questionIds: [
      "nce-q-001",
      "nce-q-002",
      "nce-q-003",
      "nce-q-004",
      "nce-q-005",
      "nce-q-006",
      "nce-q-007",
      "nce-q-008",
    ],
    timeLimitMinutes: 20,
    passingScore: 70,
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
