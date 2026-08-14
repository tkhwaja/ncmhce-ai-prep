import { describe, expect, it } from "vitest";
import { nceCollections, nceCurrentBlueprintDomains, nceFutureBlueprintDomains } from "@/data/nce/library";
import { allLessons, getDomainLessons } from "@/lib/nce-library";

const moduleIds = new Set(nceCollections.flatMap((c) => c.modules.map((m) => m.id)));

describe("NCE learning library structure", () => {
  it("has the nine blueprint collections in curriculum order", () => {
    expect(nceCollections.map((c) => c.slug)).toEqual([
      "orientation",
      "professional-orientation-ethics",
      "counseling-helping-relationships",
      "human-growth-development",
      "social-cultural-diversity",
      "assessment-testing",
      "group-counseling-group-work",
      "career-development",
      "research-program-evaluation",
    ]);
  });

  it("uses unique lesson ids across the whole library", () => {
    const ids = allLessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every module at least one lesson", () => {
    for (const c of nceCollections)
      for (const m of c.modules) expect(m.lessons.length).toBeGreaterThan(0);
  });

  it("maps every blueprint domain to real modules and lessons", () => {
    for (const d of [...nceCurrentBlueprintDomains, ...nceFutureBlueprintDomains]) {
      for (const id of d.moduleIds) expect(moduleIds.has(id)).toBe(true);
      expect(getDomainLessons(d).length).toBeGreaterThan(0);
    }
  });

  it("keeps official current-exam weights at 100% and 160 scored items", () => {
    expect(nceCurrentBlueprintDomains.reduce((s, d) => s + d.percentage, 0)).toBe(100);
    expect(nceCurrentBlueprintDomains.reduce((s, d) => s + (d.scoredItems ?? 0), 0)).toBe(160);
    expect(nceFutureBlueprintDomains.reduce((s, d) => s + d.percentage, 0)).toBe(100);
  });
});
