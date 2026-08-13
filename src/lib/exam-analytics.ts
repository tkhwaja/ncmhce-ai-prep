import type { ExamTrack } from "@/config/exam-tracks";

export interface AnalyticsDomainConfig {
  domains: string[];
  shortNames: Record<string, string>;
  aliases: Record<string, string>;
}

const ncmhceConfig: AnalyticsDomainConfig = {
  domains: [
    "Intake/assessment/diagnosis",
    "Professional practice and ethics",
    "Core counseling attributes",
    "Treatment planning",
    "Counseling skills and interventions",
  ],
  shortNames: {
    "Intake/assessment/diagnosis": "Assessment",
    "Professional practice and ethics": "Ethics",
    "Core counseling attributes": "Core Counseling",
    "Treatment planning": "Treatment",
    "Counseling skills and interventions": "Interventions",
  },
  aliases: {
    "Assessment & Diagnosis": "Intake/assessment/diagnosis",
    "Information Gathering": "Intake/assessment/diagnosis",
    "Professional Practice & Ethics": "Professional practice and ethics",
    "Counselor Attributes & Core Competencies": "Core counseling attributes",
    "Treatment Planning": "Treatment planning",
    "Counseling Skills & Interventions": "Counseling skills and interventions",
  },
};

const nceConfig: AnalyticsDomainConfig = {
  domains: [
    "Professional Counseling Orientation and Ethical Practice",
    "Social and Cultural Diversity",
    "Human Growth and Development",
    "Career Development",
    "Counseling and Helping Relationships",
    "Group Counseling and Group Work",
    "Assessment and Testing",
    "Research and Program Evaluation",
  ],
  shortNames: {
    "Professional Counseling Orientation and Ethical Practice": "Ethics",
    "Social and Cultural Diversity": "Diversity",
    "Human Growth and Development": "Development",
    "Career Development": "Career",
    "Counseling and Helping Relationships": "Helping",
    "Group Counseling and Group Work": "Group",
    "Assessment and Testing": "Assessment",
    "Research and Program Evaluation": "Research",
  },
  aliases: {},
};

export const getAnalyticsConfig = (track: ExamTrack): AnalyticsDomainConfig =>
  track === "nce" ? nceConfig : ncmhceConfig;
