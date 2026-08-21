// Practice Exam data — each exam is a curated list of narrative IDs
// that are presented together as a timed, full-length exam experience.

export interface PracticeExam {
  id: string;
  title: string;
  description: string;
  narrativeIds: string[];
  ungradedNarrativeCount?: number;
  comingSoon?: boolean;
  /** ISO date (YYYY-MM-DD) the exam shipped. NEW badge auto-expires after NEW_BADGE_DAYS. */
  releasedAt?: string;
}

export const NEW_BADGE_DAYS = 14;

/** True while an exam is still within the NEW badge window. */
export const isExamNew = (exam: Pick<PracticeExam, "releasedAt" | "comingSoon">): boolean => {
  if (exam.comingSoon || !exam.releasedAt) return false;
  const added = new Date(`${exam.releasedAt}T00:00:00Z`).getTime();
  if (Number.isNaN(added)) return false;
  return Date.now() - added < NEW_BADGE_DAYS * 24 * 60 * 60 * 1000;
};

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
    description: "11 clinical narratives • ~4 hours",
    ungradedNarrativeCount: 1,
    narrativeIds: [
      "practice-exam-02-case-01-nia-mdd-suicide-risk",
      "practice-exam-02-case-02-gabriel-ptsd-moral-injury",
      "practice-exam-02-case-03-leena-ocd-relationship-centered",
      "practice-exam-02-case-04-camila-bipolar-ii-adhd-differential",
      "practice-exam-02-case-05-omar-aud-court-involved",
      "practice-exam-02-case-06-maya-autism-burnout",
      "practice-exam-02-case-07-imani-bpd-abandonment",
      "practice-exam-02-case-08-julian-panic-cardiac-anxiety",
      "practice-exam-02-case-09-tessa-bulimia-medical-risk",
      "practice-exam-02-case-10-ari-schizophreniform-first-episode",
      "practice-exam-02-case-11-marcia-prolonged-grief-caregiver-identity",
    ],
    releasedAt: "2026-07-15",
  },
  {
    id: "practice-exam-3",
    title: "Practice Exam 3",
    description: "11 clinical narratives • ~4 hours",
    ungradedNarrativeCount: 1,
    narrativeIds: [
      "exam-03-01-amara-school-referral",
      "exam-03-02-yusef-post-hospital-follow-up",
      "exam-03-03-lian-neurology-follow-up",
      "exam-03-04-desmond-urgent-outpatient-referral",
      "exam-03-05-celeste-presurgical-consultation",
      "exam-03-06-rohan-workplace-consultation",
      "exam-03-07-naomi-adolescent-medicine-referral",
      "exam-03-08-mireya-cyclical-mood-consultation",
      "exam-03-09-bennett-medication-and-sleep-referral",
      "exam-03-10-lorraine-independent-living-consultation",
      "exam-03-11-talia-campus-support-consultation",
    ],
    releasedAt: "2026-08-21",
  },

];

export const getPracticeExamById = (id: string): PracticeExam | undefined =>
  practiceExams.find((e) => e.id === id);
