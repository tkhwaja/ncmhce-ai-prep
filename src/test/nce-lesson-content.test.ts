import { describe, it, expect } from "vitest";
import { nceLessonContent } from "@/data/nce/library/lesson-content";
import { nceCollections } from "@/data/nce/library/curriculum";
import {
  nceCurrentBlueprintDomains,
  nceFutureBlueprintDomains,
} from "@/data/nce/library/blueprint-domains";

const lessonIds = new Set(
  nceCollections.flatMap((c) => c.modules.flatMap((m) => m.lessons.map((l) => l.id))),
);
const currentDomainIds = new Set(nceCurrentBlueprintDomains.map((d) => d.id));
const futureDomainIds = new Set(nceFutureBlueprintDomains.map((d) => d.id));
const records = Object.values(nceLessonContent);

describe("authored NCE lesson content", () => {
  it("has content imported", () => {
    expect(records.length).toBeGreaterThan(0);
  });

  it("maps every record onto a curriculum lesson with a matching key", () => {
    for (const [key, rec] of Object.entries(nceLessonContent)) {
      expect(key, `${key} key/lessonId mismatch`).toBe(rec.lessonId);
      expect(lessonIds.has(key), `${key} is not in the curriculum`).toBe(true);
    }
  });

  it("includes the required teaching sections", () => {
    for (const rec of records) {
      expect(rec.whyItMatters.length, `${rec.lessonId} whyItMatters`).toBeGreaterThan(20);
      expect(rec.coreExplanation.length, `${rec.lessonId} coreExplanation`).toBeGreaterThan(0);
      expect(rec.keyTakeaways.length, `${rec.lessonId} keyTakeaways`).toBeGreaterThan(0);
      expect(rec.estimatedMinutes, `${rec.lessonId} estimatedMinutes`).toBeGreaterThan(0);
      expect(rec.examVersions.length, `${rec.lessonId} examVersions`).toBeGreaterThan(0);
    }
  });

  it("uses known blueprint domain ids", () => {
    for (const rec of records) {
      for (const d of rec.currentDomains)
        expect(currentDomainIds.has(d), `${rec.lessonId} current domain ${d}`).toBe(true);
      for (const d of rec.futureDomains ?? [])
        expect(futureDomainIds.has(d), `${rec.lessonId} future domain ${d}`).toBe(true);
    }
  });

  it("has answerable knowledge checks with unique ids and rationales", () => {
    const seen = new Set<string>();
    for (const rec of records) {
      for (const c of rec.knowledgeChecks ?? []) {
        expect(seen.has(c.id), `duplicate check id ${c.id}`).toBe(false);
        seen.add(c.id);
        expect(c.stem.length, `${c.id} stem`).toBeGreaterThan(10);
        expect(c.options.length, `${c.id} options`).toBeGreaterThanOrEqual(3);
        expect(new Set(c.options).size, `${c.id} duplicate options`).toBe(c.options.length);
        expect(c.correctAnswerIndex, `${c.id} correct index`).toBeGreaterThanOrEqual(0);
        expect(c.correctAnswerIndex, `${c.id} correct index`).toBeLessThan(c.options.length);
        expect(c.explanation.length, `${c.id} rationale`).toBeGreaterThan(20);
      }
    }
  });

  it("has no leftover markdown artifacts in prose", () => {
    for (const rec of records) {
      const prose = [rec.whyItMatters, ...rec.keyTakeaways, ...(rec.examTraps ?? [])].join(" ");
      expect(prose, `${rec.lessonId} prose contains markdown table pipes`).not.toMatch(/\|\s*---/);
      expect(prose, `${rec.lessonId} prose contains a heading marker`).not.toMatch(/(^|\s)#{2,}\s/);
    }
  });

  it("keeps comparison tables rectangular", () => {
    for (const rec of records) {
      for (const t of rec.comparisonTables ?? []) {
        expect(t.headers.length, `${rec.lessonId} table headers`).toBeGreaterThan(1);
        for (const row of t.rows)
          expect(row.length, `${rec.lessonId} table "${t.title}" row width`).toBe(
            t.headers.length,
          );
      }
    }
  });
});
