/**
 * NCE content types.
 *
 * The NCE is a multiple-choice knowledge exam across eight CACREP-derived
 * domains. These shapes are intentionally separate from the NCMHCE
 * case-simulation types so both exams can evolve independently.
 */

export const NCE_DOMAINS = [
  "Professional Counseling Orientation and Ethical Practice",
  "Social and Cultural Diversity",
  "Human Growth and Development",
  "Career Development",
  "Counseling and Helping Relationships",
  "Group Counseling and Group Work",
  "Assessment and Testing",
  "Research and Program Evaluation",
] as const;

export type NCEDomain = (typeof NCE_DOMAINS)[number];

export type NCEDifficulty = "Easy" | "Medium" | "Hard";

export interface NCEQuestion {
  /** Stable ID used across the bank, practice exams, and analytics. */
  id: string;
  /** NCE work-behavior domain this item belongs to. */
  domain: NCEDomain;
  /** Multiple-choice stem. */
  stem: string;
  /** Answer options. The correct option is at correctAnswerIndex. */
  options: string[];
  /** Zero-based index of the correct option. */
  correctAnswerIndex: number;
  /** Overall rationale / teaching explanation. */
  explanation: string;
  /** Per-option rationales (optional but strongly encouraged). */
  optionRationales?: string[];
  /** Estimated difficulty. */
  difficulty?: NCEDifficulty;
  /** Optional tags for filtering and search. */
  tags?: string[];

  /* ---- Blueprint metadata (authored from batch 002 onward, backfilled on 001) ---- */
  /** NBCC work-behavior domain id (D1–D6) this item is written to. */
  blueprintDomainId?: string;
  /** Human-readable NBCC domain title matching blueprintDomainId. */
  blueprintDomainName?: string;
  /** Optional NBCC task code(s) the item targets. */
  taskCode?: string;
  /** Short topic label used for topic-repeat limits and drills. */
  topic?: string;
  /** Optional finer-grained topic detail. */
  subtopic?: string;
  /** Curriculum module id the item maps back to (e.g. "AT-03"). */
  moduleId?: string;
  /** Authored difficulty on the 1–5 scale used by the practice exams. */
  difficultyLevel?: number;
  /** One-line takeaway shown after review. */
  keyTakeaway?: string;
}


export interface NCEPracticeExam {
  id: string;
  title: string;
  description: string;
  /** Ordered list of question IDs drawn from the bank. */
  questionIds: string[];
  /** Total time allowed in minutes. */
  timeLimitMinutes: number;
  /** Passing score as a percentage (default 70). */
  passingScore?: number;
  /** Optional domain weight map for score breakdowns. */
  domainWeights?: Partial<Record<NCEDomain, number>>;
  /** Marks an exam that is not yet ready for users. */
  comingSoon?: boolean;
  /** Marks a newly released exam. */
  isNew?: boolean;
  /** Full-length runner format (item counts, timing, scheduled break). */
  format?: import("./practice-exam-types").NCEExamFormat;
  /** Authored item set backing this exam, when it has one. */
  itemSet?: "pe-01";
  /** Scored-item counts per NBCC blueprint domain id (D1–D6). */
  scoredBlueprint?: Record<string, number>;
  /** ISO date the exam shipped. */
  releasedAt?: string;
}

export interface NCELibraryModule {
  id: string;
  title: string;
  /** NCE domain or sub-topic category. */
  category: string;
  description: string;
  icon: string;
  keyConcepts: string[];
  tags: string[];
  /** Legacy text content for simple modules. */
  content?: string;
  /** Rich structured JSON data for complex modules. */
  data?: unknown;
  moduleType?: "standard" | "glossary";
}

export interface NCEFlashcard {
  id: string;
  front: string;
  back: string;
}

export interface NCEFlashcardDeck {
  id: string;
  name: string;
  icon: string;
  /** Domain this deck targets. */
  domain: NCEDomain;
  cards: NCEFlashcard[];
}
