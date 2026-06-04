// Practice Exam data — each exam is a curated list of narrative IDs
// that are presented together as a timed, full-length exam experience.

export interface PracticeExam {
  id: string;
  title: string;
  description: string;
  narrativeIds: string[];
  ungradedNarrativeCount?: number;
  comingSoon?: boolean;
}

export const practiceExams: PracticeExam[] = [
  {
    id: "practice-exam-1",
    title: "Practice Exam 1",
    description: "11 clinical narratives • ~4 hours",
    ungradedNarrativeCount: 1,
    narrativeIds: [
      "01-priya-gad",
      "02-marcus-mdd",
      "03-david-ptsd",
      "04-elena-bipolar",
      "05-james-aud",
      "exam-01-02-danielle-mdd",
      "practice-exam-01-case-03-neha-gad",
      "practice-exam-01-case-04-luis-panic",
      "practice-exam-01-case-05-rachel-aud",
      "practice-exam-01-case-06-samuel-ocd",
      "practice-exam-01-case-07-monica-bipolar-ii",
    ],
  },
  {
    id: "practice-exam-2",
    title: "Practice Exam 2",
    description: "In progress — being built case by case (Elite tier)",
    narrativeIds: [
      "practice-exam-02-case-01-nia-mdd-suicide-risk",
      "practice-exam-02-case-02-gabriel-ptsd-moral-injury",
      "practice-exam-02-case-03-leena-ocd-relationship-centered",
    ],
    comingSoon: true,
  },
];

export const getPracticeExamById = (id: string): PracticeExam | undefined =>
  practiceExams.find((e) => e.id === id);
