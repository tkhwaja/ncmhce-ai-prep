import { describe, it, expect } from "vitest";
import { narratives } from "@/data/narratives";

describe("narrative integrity", () => {
  for (const n of narratives) {
    it(`${n.id}: question IDs and numbers are unique and sequential`, () => {
      const ids: string[] = [];
      const nums: number[] = [];
      for (const s of n.sections) {
        for (const q of s.questions) {
          ids.push(q.id);
          nums.push(q.questionNumber);
        }
      }
      expect(new Set(ids).size, `duplicate question ids in ${n.id}: ${ids.join(",")}`).toBe(ids.length);
      expect(new Set(nums).size, `duplicate question numbers in ${n.id}: ${nums.join(",")}`).toBe(nums.length);
      // sequential 1..N
      const expected = nums.map((_, i) => i + 1);
      expect(nums).toEqual(expected);
    });
  }
});
