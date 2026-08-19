import { describe, it, expect } from "vitest";
import {
  nceQuestions,
  ncePracticeExams,
  nceLibraryModules,
  nceFlashcardDecks,
} from "@/data/nce";
import { NCE_DOMAINS } from "@/data/nce/types";
import { nceCollections } from "@/data/nce/library/curriculum";
import { nceLessonContent } from "@/data/nce/library/lesson-content";
import {
  nceCurrentBlueprintDomains,
  nceFutureBlueprintDomains,
} from "@/data/nce/library/blueprint-domains";
import {
  nceDiagnosticQuestions,
  NCE_DIAGNOSTIC_ITEMS_PER_DOMAIN,
} from "@/data/nce/diagnostic";
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

describe("free NCE diagnostic", () => {
  it("covers all eight content areas with the configured item count", () => {
    const byDomain = new Map<string, number>();
    nceDiagnosticQuestions.forEach((q) =>
      byDomain.set(q.domain, (byDomain.get(q.domain) ?? 0) + 1),
    );
    expect(byDomain.size).toBe(NCE_DOMAINS.length);
    byDomain.forEach((count) => expect(count).toBe(NCE_DIAGNOSTIC_ITEMS_PER_DOMAIN));
  });

  it("has unique items with valid correct answers", () => {
    const ids = new Set(nceDiagnosticQuestions.map((q) => q.id));
    expect(ids.size).toBe(nceDiagnosticQuestions.length);
    nceDiagnosticQuestions.forEach((q) => {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.options[q.correctAnswerIndex]).toBeTruthy();
    });
  });
});

describe("question bank blueprint metadata", () => {
  const curriculumModuleIds = new Set(
    nceCollections.flatMap((c) => c.modules.map((m) => m.id)),
  );
  const BLUEPRINT_IDS = ["D1", "D2", "D3", "D4", "D5", "D6"];
  /** Target share of the finished 1,000-item bank, per NBCC blueprint domain. */
  const BLUEPRINT_TARGET: Record<string, number> = {
    D1: 12,
    D2: 12,
    D3: 29,
    D4: 9,
    D5: 30,
    D6: 8,
  };

  const authored = nceQuestions.filter((q) => q.blueprintDomainId);

  it("has unique ids and stems across the bank", () => {
    const ids = new Set(nceQuestions.map((q) => q.id));
    const stems = new Set(nceQuestions.map((q) => q.stem.trim().toLowerCase()));
    expect(ids.size).toBe(nceQuestions.length);
    expect(stems.size).toBe(nceQuestions.length);
  });

  it("keeps every item answerable with a rationale per option", () => {
    nceQuestions.forEach((q) => {
      expect(q.options[q.correctAnswerIndex]).toBeTruthy();
      expect(q.explanation.length).toBeGreaterThan(30);
      if (q.optionRationales) expect(q.optionRationales.length).toBe(q.options.length);
    });
  });

  it("tags blueprint-authored items with a valid domain, topic, module and level", () => {
    expect(authored.length).toBeGreaterThan(0);
    authored.forEach((q) => {
      expect(BLUEPRINT_IDS).toContain(q.blueprintDomainId);
      expect(q.blueprintDomainName).toBeTruthy();
      expect(q.topic).toBeTruthy();
      expect(curriculumModuleIds.has(q.moduleId ?? "")).toBe(true);
      expect(q.difficultyLevel).toBeGreaterThanOrEqual(1);
      expect(q.difficultyLevel).toBeLessThanOrEqual(5);
    });
  });

  it("lands on the blueprint weights once the bank is large enough", () => {
    // Batches 002+ correct batch 001's skew; only enforce the mix at scale.
    if (authored.length < 500) return;
    BLUEPRINT_IDS.forEach((domain) => {
      const share = (authored.filter((q) => q.blueprintDomainId === domain).length / authored.length) * 100;
      expect(Math.abs(share - BLUEPRINT_TARGET[domain])).toBeLessThanOrEqual(4);
    });
  });
});

describe("NCE lesson content blueprint hygiene", () => {
  it("never files a lesson's current-exam review under a July 2027 domain id", () => {
    const futureOnly = new Set(
      nceFutureBlueprintDomains
        .map((d) => d.id)
        .filter((id) => !nceCurrentBlueprintDomains.some((c) => c.id === id)),
    );
    for (const rec of Object.values(nceLessonContent))
      for (const d of rec.currentDomains)
        expect(futureOnly.has(d), `${rec.lessonId} currentDomains includes 2027-only "${d}"`).toBe(
          false,
        );
  });
});
