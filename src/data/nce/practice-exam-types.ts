import type { NCEDomain } from "./types";

/**
 * A single item inside a full-length NCE practice exam.
 *
 * Exam items live separately from the study question bank so an exam is never
 * "pre-studied" through the bank, and so field-test (unscored) items can be
 * mixed in exactly like the real NCE.
 */
export interface NCEExamItem {
  id: string;
  /** 1-based position in the exam. */
  sequence: number;
  /** Scored items contribute to the raw score; field-test items do not. */
  scored: boolean;
  /** CACREP study area, used for study-area breakdowns. */
  domain: NCEDomain;
  /** NBCC work-behavior domain id (D1–D6). */
  blueprintDomainId: string;
  blueprintDomainName: string;
  taskCode?: string;
  topic: string;
  subtopic?: string;
  /** Authored difficulty on a 1–5 scale. */
  difficultyLevel: number;
  stem: string;
  options: string[];
  correctAnswerIndex: number;
  optionRationales: string[];
  explanation: string;
  keyTakeaway: string;
}

/** Runner configuration for one full-length exam. */
export interface NCEExamFormat {
  totalItems: number;
  scoredItems: number;
  fieldTestItems: number;
  testingMinutes: number;
  /** Scheduled break shown after this question number. */
  breakAfterQuestion?: number;
  breakMinutes?: number;
  /** After the break, answers before the break are permanently locked. */
  lockFirstHalfAfterBreak?: boolean;
}
