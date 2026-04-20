// Official NCMHCE-format narrative types.
// One case = three sections, each with a session label + (optional) section narrative + multiple-choice questions.
// Question numbering is continuous across sections (Q1..Qn).

export type NarrativeDomain =
  | "Professional practice and ethics"
  | "Intake/assessment/diagnosis"
  | "Treatment planning"
  | "Counseling skills and interventions"
  | "Core counseling attributes";

export const NARRATIVE_DOMAINS: NarrativeDomain[] = [
  "Intake/assessment/diagnosis",
  "Professional practice and ethics",
  "Core counseling attributes",
  "Treatment planning",
  "Counseling skills and interventions",
];

export interface NarrativeQuestion {
  id: string;
  questionNumber: number; // continuous across sections
  domain: NarrativeDomain;
  stem: string;
  options: string[];
  correctAnswer: number; // index
  explanation: string;
}

export interface NarrativeSection {
  sessionLabel: string; // e.g. "First session", "Fourth session"
  sectionNarrative: string; // shown in the right panel when this section unlocks
  questions: NarrativeQuestion[];
}

export interface NarrativeClientInfo {
  age: number;
  sexAssignedAtBirth: string;
  genderIdentity: string;
  pronouns: string;
  sexualOrientation: string;
  raceEthnicity: string;
  relationshipStatus: string;
  setting: string;
  payment: string;
  typeOfCounseling: string;
  provisionalDiagnosis: string;
}

export interface Narrative {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  /** Optional override for per-section minutes. Defaults to 20. */
  minutesPerSection?: number;
  clientInfo: NarrativeClientInfo;
  presentingProblem: string;
  mentalStatusObservation: string;
  familyHistory: string;
  workHistory: string;
  intakeSessionSummary: string;
  sections: NarrativeSection[];
}

export const totalQuestionCount = (n: Narrative): number =>
  n.sections.reduce((acc, s) => acc + s.questions.length, 0);
