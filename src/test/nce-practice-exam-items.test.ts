import { describe, it, expect } from "vitest";
import { getNCEExamItems, getNCEPracticeExamById } from "@/data/nce/practice-exams";

describe("NCE Practice Exam 1 item set", () => {
  const exam = getNCEPracticeExamById("nce-practice-exam-1")!;
  const items = getNCEExamItems("nce-practice-exam-1");

  it("has the full 200-item current format", () => {
    expect(items).toHaveLength(200);
    expect(items.filter((i) => i.scored)).toHaveLength(160);
    expect(items.filter((i) => !i.scored)).toHaveLength(40);
    expect(exam.format?.testingMinutes).toBe(225);
    expect(exam.format?.breakAfterQuestion).toBe(100);
  });

  it("is not accessible to users yet", () => {
    expect(exam.comingSoon).toBe(true);
  });

  it("has sequential ids, four options, valid keys and rationales", () => {
    const ids = new Set<string>();
    items.forEach((item, idx) => {
      expect(item.sequence).toBe(idx + 1);
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
      expect(item.options).toHaveLength(4);
      expect(item.optionRationales).toHaveLength(4);
      expect(item.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(item.correctAnswerIndex).toBeLessThan(4);
      expect(item.stem.length).toBeGreaterThan(20);
      expect(item.explanation.length).toBeGreaterThan(20);
      expect(item.keyTakeaway.length).toBeGreaterThan(5);
    });
  });

  it("matches the scored blueprint weights", () => {
    const counts = items
      .filter((i) => i.scored)
      .reduce<Record<string, number>>((acc, i) => {
        acc[i.blueprintDomainId] = (acc[i.blueprintDomainId] ?? 0) + 1;
        return acc;
      }, {});
    expect(counts).toEqual(exam.scoredBlueprint);
  });
});
