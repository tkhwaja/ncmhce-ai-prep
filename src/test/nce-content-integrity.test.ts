import { describe, it, expect } from "vitest";
import {
  nceQuestions,
  ncePracticeExams,
  nceLibraryModules,
  nceFlashcardDecks,
} from "@/data/nce";
import {
  validateNCEQuestions,
  validateNCEPracticeExams,
  validateNCELibraryModules,
  validateNCEFlashcardDecks,
  validateAllNCEContent,
} from "@/lib/nce-content-validation";

describe("NCE content integrity", () => {
  it("has no question validation errors", () => {
    const errors = validateNCEQuestions(nceQuestions);
    expect(errors).toEqual([]);
  });

  it("has no practice-exam validation errors", () => {
    const errors = validateNCEPracticeExams(ncePracticeExams, nceQuestions);
    expect(errors).toEqual([]);
  });

  it("has no library-module validation errors", () => {
    const errors = validateNCELibraryModules(nceLibraryModules);
    expect(errors).toEqual([]);
  });

  it("has no flashcard-deck validation errors", () => {
    const errors = validateNCEFlashcardDecks(nceFlashcardDecks);
    expect(errors).toEqual([]);
  });

  it("passes the full aggregate validation", () => {
    const errors = validateAllNCEContent({
      questions: nceQuestions,
      practiceExams: ncePracticeExams,
      libraryModules: nceLibraryModules,
      flashcardDecks: nceFlashcardDecks,
    });
    expect(errors).toEqual([]);
  });

  it("has at least one question per NCE domain", () => {
    const domains = new Set(nceQuestions.map((q) => q.domain));
    expect(domains.size).toBe(8);
  });

  it("does not allow duplicate question ids", () => {
    const ids = nceQuestions.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
