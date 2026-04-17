// Hardcoded demo data for Dashboard + Analytics preview.
// Remove or gate behind a flag when real data is flowing.

export const DEMO_MODE = true;

export const demoDashboardStats = {
  narrativesCompleted: 12,
  averageScore: 78,
  studyStreakDays: 9,
  hoursStudied: 34,
};

export const demoRecentActivity = [
  { id: "a1", type: "narrative", title: "Priya — Generalized Anxiety Disorder", score: 82, when: "2 hours ago" },
  { id: "a2", type: "flashcards", title: "DSM-5-TR Mood Disorders deck", score: 24, when: "Yesterday" },
  { id: "a3", type: "narrative", title: "Priya — Generalized Anxiety Disorder", score: 75, when: "Yesterday" },
  { id: "a4", type: "narrative", title: "Priya — Generalized Anxiety Disorder", score: 71, when: "2 days ago" },
  { id: "a5", type: "flashcards", title: "Ethics & Boundaries deck", score: 18, when: "3 days ago" },
];

// New 5-domain demo attempts matching the official NCMHCE format.
const DOMAINS = {
  intake: "Intake/assessment/diagnosis",
  ethics: "Professional practice and ethics",
  attrs: "Core counseling attributes",
  tx: "Treatment planning",
  skills: "Counseling skills and interventions",
};

export const demoAttempts = [
  { simulation_id: "priya-gad", total_score: 62, completed_at: "2025-04-02T10:00:00Z", created_at: "2025-04-02T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 60, [DOMAINS.ethics]: 80, [DOMAINS.attrs]: 70, [DOMAINS.tx]: 55, [DOMAINS.skills]: 65 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 68, completed_at: "2025-04-04T10:00:00Z", created_at: "2025-04-04T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 70, [DOMAINS.ethics]: 80, [DOMAINS.attrs]: 75, [DOMAINS.tx]: 65, [DOMAINS.skills]: 70 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 71, completed_at: "2025-04-06T10:00:00Z", created_at: "2025-04-06T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 75, [DOMAINS.ethics]: 85, [DOMAINS.attrs]: 70, [DOMAINS.tx]: 65, [DOMAINS.skills]: 72 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 74, completed_at: "2025-04-08T10:00:00Z", created_at: "2025-04-08T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 78, [DOMAINS.ethics]: 85, [DOMAINS.attrs]: 75, [DOMAINS.tx]: 70, [DOMAINS.skills]: 75 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 73, completed_at: "2025-04-10T10:00:00Z", created_at: "2025-04-10T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 72, [DOMAINS.ethics]: 80, [DOMAINS.attrs]: 78, [DOMAINS.tx]: 70, [DOMAINS.skills]: 70 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 79, completed_at: "2025-04-12T10:00:00Z", created_at: "2025-04-12T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 82, [DOMAINS.ethics]: 85, [DOMAINS.attrs]: 80, [DOMAINS.tx]: 75, [DOMAINS.skills]: 78 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 76, completed_at: "2025-04-13T10:00:00Z", created_at: "2025-04-13T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 78, [DOMAINS.ethics]: 80, [DOMAINS.attrs]: 78, [DOMAINS.tx]: 72, [DOMAINS.skills]: 75 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 81, completed_at: "2025-04-14T10:00:00Z", created_at: "2025-04-14T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 84, [DOMAINS.ethics]: 88, [DOMAINS.attrs]: 82, [DOMAINS.tx]: 78, [DOMAINS.skills]: 80 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 80, completed_at: "2025-04-15T10:00:00Z", created_at: "2025-04-15T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 82, [DOMAINS.ethics]: 85, [DOMAINS.attrs]: 80, [DOMAINS.tx]: 76, [DOMAINS.skills]: 80 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 83, completed_at: "2025-04-16T10:00:00Z", created_at: "2025-04-16T10:00:00Z",
    domain_scores: { [DOMAINS.intake]: 85, [DOMAINS.ethics]: 88, [DOMAINS.attrs]: 82, [DOMAINS.tx]: 80, [DOMAINS.skills]: 80 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 85, completed_at: "2025-04-17T09:00:00Z", created_at: "2025-04-17T09:00:00Z",
    domain_scores: { [DOMAINS.intake]: 88, [DOMAINS.ethics]: 90, [DOMAINS.attrs]: 85, [DOMAINS.tx]: 82, [DOMAINS.skills]: 82 }, ig_selections: [] },
  { simulation_id: "priya-gad", total_score: 82, completed_at: "2025-04-17T11:00:00Z", created_at: "2025-04-17T11:00:00Z",
    domain_scores: { [DOMAINS.intake]: 84, [DOMAINS.ethics]: 86, [DOMAINS.attrs]: 84, [DOMAINS.tx]: 78, [DOMAINS.skills]: 80 }, ig_selections: [] },
];
