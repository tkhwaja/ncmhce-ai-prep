// Helpers for narrative pacing + timing.
// NCMHCE official format: 11 case simulations, 4-hour total time including ~15 min break.
// => 11 cases / (240 - 15) min = ~20.45 min per case for an average ~11-question case.

const PER_QUESTION_SECONDS = (225 * 60) / (11 * 11); // ~111 sec per question

export const getNarrativeDurationSeconds = (questionCount: number): number => {
  // Floor at 8 minutes so very short narratives still feel timed.
  return Math.max(8 * 60, Math.round(questionCount * PER_QUESTION_SECONDS));
};

// 5 / 5 / 4 reveal split — first part shown immediately, second revealed after Q5,
// third revealed after Q10. Returns the index of the highest part the user has unlocked
// based on how many DM questions they've answered.
export const getUnlockedPart = (answeredCount: number): 0 | 1 | 2 => {
  if (answeredCount >= 10) return 2;
  if (answeredCount >= 5) return 1;
  return 0;
};

// Split a long narrative string into 3 parts for staged reveal.
// Strategy: split on blank lines (paragraphs) and group as evenly as possible into 3.
export const splitNarrativeIntoParts = (narrative: string): [string, string, string] => {
  const paragraphs = narrative.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length <= 1) {
    // Fall back to char split
    const len = narrative.length;
    return [
      narrative.slice(0, Math.floor(len / 3)),
      narrative.slice(Math.floor(len / 3), Math.floor((2 * len) / 3)),
      narrative.slice(Math.floor((2 * len) / 3)),
    ];
  }
  const third = Math.ceil(paragraphs.length / 3);
  const part1 = paragraphs.slice(0, third).join("\n\n");
  const part2 = paragraphs.slice(third, third * 2).join("\n\n");
  const part3 = paragraphs.slice(third * 2).join("\n\n");
  return [part1, part2 || "", part3 || ""];
};

export const PART_LABELS = [
  "Part 1 — Intake & Demographics",
  "Part 2 — Continued Assessment",
  "Part 3 — Final Session & Follow-up",
] as const;
