// Practice Exam data — each exam is a curated list of narrative IDs
// that are presented together as a timed, full-length exam experience.

export interface PracticeExam {
  id: string;
  title: string;
  description: string;
  narrativeIds: string[];
}

export const practiceExams: PracticeExam[] = [
  {
    id: "practice-exam-1",
    title: "Practice Exam 1",
    description: "11 clinical narratives • ~4 hours",
    narrativeIds: [
      "13-marisol-ptsd",
      // More narratives will be added as they are created
    ],
  },
];

export const getPracticeExamById = (id: string): PracticeExam | undefined =>
  practiceExams.find((e) => e.id === id);
