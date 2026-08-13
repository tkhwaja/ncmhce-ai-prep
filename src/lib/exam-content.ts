import type { ExamTrack } from "@/config/exam-tracks";
import { narratives, getNarrativeById } from "@/data/narratives";
import { practiceExams as ncmhcePracticeExams, getPracticeExamById as getNCMHCEPracticeExamById } from "@/data/practice-exams";
import { libraryModules as ncmhceLibraryModules } from "@/data/library-modules";
import { flashcardDecks as ncmhceFlashcardDecks } from "@/data/flashcards";
import {
  nceQuestions,
  ncePracticeExams,
  nceLibraryModules,
  nceFlashcardDecks,
  getNCEPracticeExamById,
} from "@/data/nce";
import { NARRATIVE_DOMAINS } from "@/data/narratives/types";
import { NCE_DOMAINS } from "@/data/nce/types";

/**
 * Returns the active content set for the current exam track.
 *
 * This keeps NCMHCE and NCE content completely separate so a user with
 * subscriptions to both never sees mixed progress or mismatched UI.
 */

export const getActiveNarratives = (track: ExamTrack) =>
  track === "nce" ? [] : narratives;

export const getNarrativeByIdForTrack = (track: ExamTrack, id: string) =>
  track === "nce" ? undefined : getNarrativeById(id);

export const getActiveQuestions = (track: ExamTrack) =>
  track === "nce" ? nceQuestions : [];

export const getQuestionByIdForTrack = (track: ExamTrack, id: string) =>
  track === "nce" ? nceQuestions.find((q) => q.id === id) : undefined;

export const getActivePracticeExams = (track: ExamTrack) =>
  track === "nce" ? ncePracticeExams : ncmhcePracticeExams;

export const getPracticeExamByIdForTrack = (track: ExamTrack, id: string) =>
  track === "nce" ? getNCEPracticeExamById(id) : getNCMHCEPracticeExamById(id);

export const getActiveLibraryModules = (track: ExamTrack) =>
  track === "nce" ? nceLibraryModules : ncmhceLibraryModules;

export const getActiveFlashcardDecks = (track: ExamTrack) =>
  track === "nce" ? nceFlashcardDecks : ncmhceFlashcardDecks;

export const getActiveDomains = (track: ExamTrack): string[] =>
  track === "nce" ? [...NCE_DOMAINS] : [...NARRATIVE_DOMAINS];

export const getActiveCategoryOrder = (track: ExamTrack): string[] => {
  if (track === "nce") {
    return [...NCE_DOMAINS];
  }
  return ["Orientation", "Core Domains", "Integration Domains", "Supporting Domains"];
};
