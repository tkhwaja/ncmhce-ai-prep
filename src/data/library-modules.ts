import examOverview from "./library/exam-overview.json";
import glossary from "./library/glossary.json";
import research from "./library/research.json";
import career from "./library/career.json";
import psychopharmacology from "./library/psychopharmacology.json";
import groupCounseling from "./library/group-counseling.json";
import humanDevelopment from "./library/human-development.json";
import clinicalCase from "./library/clinical-case-conceptualization.json";
import ethicsLegal from "./library/ethics-legal.json";
import crisisTrauma from "./library/crisis-trauma.json";
import assessmentTesting from "./library/assessment-testing.json";
import dsm5tr from "./library/dsm-5-tr.json";
import counselingTheories from "./library/counseling-theories.json";

export type LibraryCategory =
  | "Orientation"
  | "Core Domains"
  | "Integration Domains"
  | "Supporting Domains";

export interface LibraryModule {
  id: string;
  title: string;
  category: LibraryCategory;
  description: string;
  icon: string;
  keyConcepts: string[];
  tags: string[];
  /** Legacy text content for old-style modules */
  content?: string;
  /** Rich structured JSON data for new modules */
  data?: any;
  /** Special module type */
  moduleType?: "glossary" | "standard";
}

export const libraryModules: LibraryModule[] = [
  // === ORIENTATION ===
  {
    id: "exam-overview-and-blueprint",
    title: "Exam Overview & Blueprint",
    category: "Orientation",
    icon: "ClipboardCheck",
    description: examOverview.intro.summary,
    keyConcepts: examOverview.intro.learningObjectives,
    tags: examOverview.uiHints.tags,
    data: examOverview,
  },

  // === CORE DOMAINS ===
  {
    id: "assessment-and-testing",
    title: "Assessment & Testing",
    category: "Core Domains",
    icon: "ClipboardCheck",
    description: assessmentTesting.intro.summary,
    keyConcepts: assessmentTesting.intro.learningObjectives,
    tags: assessmentTesting.uiHints.tags,
    data: assessmentTesting,
  },
  {
    id: "dsm-5-tr-diagnoses",
    title: "DSM-5-TR Diagnoses",
    category: "Core Domains",
    icon: "ClipboardCheck",
    description: dsm5tr.intro.summary,
    keyConcepts: dsm5tr.intro.learningObjectives,
    tags: dsm5tr.uiHints.tags,
    data: dsm5tr,
  },
  {
    id: "counseling-theories-techniques",
    title: "Counseling Theories & Techniques",
    category: "Core Domains",
    icon: "Lightbulb",
    description: counselingTheories.intro.summary,
    keyConcepts: counselingTheories.intro.learningObjectives,
    tags: counselingTheories.uiHints.tags,
    data: counselingTheories,
  },
  {
    id: "ethics-and-legal-issues",
    title: "Ethics & Legal Issues",
    category: "Core Domains",
    icon: "Scale",
    description: ethicsLegal.intro.summary,
    keyConcepts: ethicsLegal.intro.learningObjectives,
    tags: ethicsLegal.uiHints.tags,
    data: ethicsLegal,
  },
  {
    id: "crisis-trauma-and-disaster-counseling",
    title: "Crisis, Trauma & Disaster Counseling",
    category: "Core Domains",
    icon: "AlertTriangle",
    description: crisisTrauma.intro.summary,
    keyConcepts: crisisTrauma.intro.learningObjectives,
    tags: crisisTrauma.uiHints.tags,
    data: crisisTrauma,
  },
  {
    id: "clinical-case-conceptualization",
    title: "Clinical Case Conceptualization",
    category: "Core Domains",
    icon: "FileText",
    description: clinicalCase.intro.summary,
    keyConcepts: clinicalCase.intro.learningObjectives,
    tags: clinicalCase.uiHints.tags,
    data: clinicalCase,
  },

  // === INTEGRATION DOMAINS ===
  {
    id: "human-development-and-lifespan",
    title: "Human Development & Lifespan",
    category: "Integration Domains",
    icon: "Heart",
    description: humanDevelopment.intro.summary,
    keyConcepts: humanDevelopment.intro.learningObjectives,
    tags: humanDevelopment.uiHints.tags,
    data: humanDevelopment,
  },
  {
    id: "group-counseling",
    title: "Group Counseling",
    category: "Integration Domains",
    icon: "Heart",
    description: groupCounseling.intro.summary,
    keyConcepts: groupCounseling.intro.learningObjectives,
    tags: groupCounseling.uiHints.tags,
    data: groupCounseling,
  },
  {
    id: "psychopharmacology",
    title: "Psychopharmacology",
    category: "Integration Domains",
    icon: "AlertTriangle",
    description: psychopharmacology.intro.summary,
    keyConcepts: psychopharmacology.intro.learningObjectives,
    tags: psychopharmacology.uiHints.tags,
    data: psychopharmacology,
  },

  // === SUPPORTING DOMAINS ===
  {
    id: "career-development",
    title: "Career Development",
    category: "Supporting Domains",
    icon: "Lightbulb",
    description: career.intro.summary,
    keyConcepts: career.intro.learningObjectives,
    tags: career.uiHints.tags,
    data: career,
  },
  {
    id: "research-and-program-evaluation",
    title: "Research & Program Evaluation",
    category: "Supporting Domains",
    icon: "FileText",
    description: research.intro.summary,
    keyConcepts: research.intro.learningObjectives,
    tags: research.uiHints.tags,
    data: research,
  },
  {
    id: "key-terms-glossary",
    title: "Key Terms Glossary",
    category: "Supporting Domains",
    icon: "FileText",
    description: glossary.intro.summary,
    keyConcepts: glossary.intro.learningObjectives,
    tags: glossary.uiHints.tags,
    data: glossary,
    moduleType: "glossary",
  },
];

export const categoryOrder: LibraryCategory[] = [
  "Orientation",
  "Core Domains",
  "Integration Domains",
  "Supporting Domains",
];
