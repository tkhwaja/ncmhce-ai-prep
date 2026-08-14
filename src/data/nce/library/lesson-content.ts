import type { NceLessonContent } from "./types";

/**
 * Authored NCE lesson content, keyed by canonical lesson id (e.g. "CH-05-L03").
 *
 * The library renders structure from `curriculum.ts` and looks up authored
 * content here. A lesson without a record renders as "Content in production",
 * so modules can be imported one at a time with no page changes.
 *
 * Content batches (OR-01 first) get appended to this registry.
 */
export const nceLessonContent: Record<string, NceLessonContent> = {};

export const getNceLessonContent = (lessonId: string): NceLessonContent | undefined =>
  nceLessonContent[lessonId];

export const isNceLessonPublished = (lessonId: string): boolean => lessonId in nceLessonContent;
