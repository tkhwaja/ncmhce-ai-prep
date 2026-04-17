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
  { id: "a1", type: "narrative", title: "Case 3: Substance Use & Marital Conflict", score: 82, when: "2 hours ago" },
  { id: "a2", type: "flashcards", title: "DSM-5-TR Mood Disorders deck", score: 24, when: "Yesterday" },
  { id: "a3", type: "narrative", title: "Case 1: Adult Major Depression", score: 75, when: "Yesterday" },
  { id: "a4", type: "narrative", title: "Case 2: OCD with Comorbid Anxiety", score: 71, when: "2 days ago" },
  { id: "a5", type: "flashcards", title: "Ethics & Boundaries deck", score: 18, when: "3 days ago" },
];

export const demoAttempts = [
  { simulation_id: "sim-1-mdd", total_score: 62, completed_at: "2025-04-02T10:00:00Z", created_at: "2025-04-02T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 60, "Treatment Planning": 55, "Counselor Attributes & Core Competencies": 70, "Professional Practice & Ethics": 80, "Information Gathering": 65 },
    ig_selections: ["ig1-2", "ig1-3", "ig1-9"] },
  { simulation_id: "sim-2-ocd", total_score: 68, completed_at: "2025-04-04T10:00:00Z", created_at: "2025-04-04T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 70, "Treatment Planning": 65, "Counselor Attributes & Core Competencies": 75, "Professional Practice & Ethics": 80, "Information Gathering": 70 },
    ig_selections: ["ig2-2", "ig2-3", "ig2-9"] },
  { simulation_id: "sim-3-aud", total_score: 71, completed_at: "2025-04-06T10:00:00Z", created_at: "2025-04-06T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 75, "Treatment Planning": 65, "Counselor Attributes & Core Competencies": 70, "Professional Practice & Ethics": 85, "Information Gathering": 72 },
    ig_selections: ["ig3-2", "ig3-3", "ig3-9", "ig3-10"] },
  { simulation_id: "sim-1-mdd", total_score: 74, completed_at: "2025-04-08T10:00:00Z", created_at: "2025-04-08T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 78, "Treatment Planning": 70, "Counselor Attributes & Core Competencies": 75, "Professional Practice & Ethics": 85, "Information Gathering": 75 },
    ig_selections: ["ig1-2", "ig1-3", "ig1-7", "ig1-9"] },
  { simulation_id: "sim-4-aud2", total_score: 73, completed_at: "2025-04-10T10:00:00Z", created_at: "2025-04-10T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 72, "Treatment Planning": 70, "Counselor Attributes & Core Competencies": 78, "Professional Practice & Ethics": 80, "Information Gathering": 70 },
    ig_selections: ["ig4-2", "ig4-3", "ig4-9"] },
  { simulation_id: "sim-2-ocd", total_score: 79, completed_at: "2025-04-12T10:00:00Z", created_at: "2025-04-12T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 82, "Treatment Planning": 75, "Counselor Attributes & Core Competencies": 80, "Professional Practice & Ethics": 85, "Information Gathering": 78 },
    ig_selections: ["ig2-2", "ig2-3", "ig2-7", "ig2-9"] },
  { simulation_id: "sim-5-bpd", total_score: 76, completed_at: "2025-04-13T10:00:00Z", created_at: "2025-04-13T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 78, "Treatment Planning": 72, "Counselor Attributes & Core Competencies": 78, "Professional Practice & Ethics": 80, "Information Gathering": 75 },
    ig_selections: ["ig5-2", "ig5-3", "ig5-9"] },
  { simulation_id: "sim-3-aud", total_score: 81, completed_at: "2025-04-14T10:00:00Z", created_at: "2025-04-14T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 84, "Treatment Planning": 78, "Counselor Attributes & Core Competencies": 82, "Professional Practice & Ethics": 88, "Information Gathering": 80 },
    ig_selections: ["ig3-2", "ig3-3", "ig3-7", "ig3-9", "ig3-10"] },
  { simulation_id: "sim-1-mdd", total_score: 80, completed_at: "2025-04-15T10:00:00Z", created_at: "2025-04-15T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 82, "Treatment Planning": 76, "Counselor Attributes & Core Competencies": 80, "Professional Practice & Ethics": 85, "Information Gathering": 80 },
    ig_selections: ["ig1-2", "ig1-3", "ig1-7", "ig1-9"] },
  { simulation_id: "sim-4-aud2", total_score: 83, completed_at: "2025-04-16T10:00:00Z", created_at: "2025-04-16T10:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 85, "Treatment Planning": 80, "Counselor Attributes & Core Competencies": 82, "Professional Practice & Ethics": 88, "Information Gathering": 80 },
    ig_selections: ["ig4-2", "ig4-3", "ig4-9", "ig4-10"] },
  { simulation_id: "sim-2-ocd", total_score: 85, completed_at: "2025-04-17T09:00:00Z", created_at: "2025-04-17T09:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 88, "Treatment Planning": 82, "Counselor Attributes & Core Competencies": 85, "Professional Practice & Ethics": 90, "Information Gathering": 82 },
    ig_selections: ["ig2-2", "ig2-3", "ig2-7", "ig2-9", "ig2-10"] },
  { simulation_id: "sim-5-bpd", total_score: 82, completed_at: "2025-04-17T11:00:00Z", created_at: "2025-04-17T11:00:00Z",
    domain_scores: { "Assessment & Diagnosis": 84, "Treatment Planning": 78, "Counselor Attributes & Core Competencies": 84, "Professional Practice & Ethics": 86, "Information Gathering": 80 },
    ig_selections: ["ig5-2", "ig5-3", "ig5-7", "ig5-9"] },
];
