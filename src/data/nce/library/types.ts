/**
 * NCE Learning Library data model.
 *
 * Two-axis architecture (blueprint §1):
 *  - "Learn by Subject": 9 collections (orientation + 8 CACREP knowledge areas)
 *  - "Review by Blueprint": 6 official NBCC weighted domains that reuse the SAME
 *    canonical lesson records via metadata mapping. No lesson is ever duplicated.
 */

export type NceExamVersion = "current" | "2027";

export type NceContentType =
  | "concept"
  | "theory-profile"
  | "theory-comparison"
  | "theorist-profile"
  | "applied-skill"
  | "assessment-statistics"
  | "ethics-legal-decision"
  | "clinical-concern"
  | "timeline"
  | "formula-score-guide"
  | "case-integration"
  | "quick-review";

export type NceLessonDifficulty = "foundational" | "intermediate" | "advanced";

/** Structural reference to a lesson inside a module (always present). */
export interface NceLessonRef {
  id: string;
  slug: string;
  title: string;
  order: number;
  /** Defaults to DEFAULT_LESSON_MINUTES when omitted. */
  estimatedMinutes?: number;
  contentType?: NceContentType;
  /** Which exam version(s) this lesson applies to. Defaults to both. */
  examVersions?: NceExamVersion[];
}

export interface NceModule {
  id: string;
  title: string;
  collectionSlug: string;
  description?: string;
  learningObjectives?: string[];
  lessons: NceLessonRef[];
}

export interface NceCollection {
  slug: string;
  title: string;
  icon: string;
  description: string;
  /** Max two labels are shown on a collection card (blueprint §6.1). */
  topicLabels: string[];
  whyItMatters?: string;
  learningObjectives?: string[];
  modules: NceModule[];
}

/* ---------------- Authored lesson content (blueprint §11) ---------------- */

export interface NceKeyConcept {
  term: string;
  definition: string;
}

export interface NceComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface NceDoNotConfuse {
  item: string;
  confusedWith: string;
  distinction: string;
}

export interface NceKnowledgeCheck {
  id: string;
  stem: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  /** Why each distractor is wrong — required for full-quality lessons. */
  optionRationales?: string[];
}

export interface NceSource {
  title: string;
  url?: string;
}

/** Canonical authored content for one lesson, keyed by lesson id. */
export interface NceLessonContent {
  lessonId: string;
  estimatedMinutes: number;
  contentType: NceContentType;
  difficulty?: NceLessonDifficulty;
  examVersions: NceExamVersion[];
  /** Current 6-domain blueprint ids this lesson is reviewed under. */
  currentDomains: string[];
  /** 2027 6-domain blueprint ids. */
  futureDomains?: string[];
  tags: string[];
  searchAliases?: string[];
  keyTerms?: string[];
  whyItMatters: string;
  learningObjectives: string[];
  /** Paragraphs of core teaching text. */
  coreExplanation: string[];
  keyConcepts?: NceKeyConcept[];
  comparisonTables?: NceComparisonTable[];
  howTested?: string[];
  appliedExample?: string;
  examTraps?: string[];
  doNotConfuse?: NceDoNotConfuse[];
  memoryAnchor?: string;
  keyTakeaways: string[];
  knowledgeChecks?: NceKnowledgeCheck[];
  relatedLessonIds?: string[];
  relatedQuestionIds?: string[];
  sources?: NceSource[];
  reviewedOn?: string;
}

/* ---------------- Blueprint domains ---------------- */

export interface NceBlueprintDomain {
  id: string;
  title: string;
  percentage: number;
  /** Official scored-item count (current exam only). */
  scoredItems?: number;
  description: string;
  taskSummary: string[];
  /** Module ids whose lessons are assembled into this hub. */
  moduleIds: string[];
}

export interface NceQuickReviewResource {
  id: string;
  title: string;
  description: string;
  /** Source modules that must be authored before this resource is built. */
  sourceModuleIds: string[];
  status: "planned" | "available";
}

export const DEFAULT_LESSON_MINUTES = 12;
