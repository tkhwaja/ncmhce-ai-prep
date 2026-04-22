import type { Narrative } from "./types";
import { totalQuestionCount } from "./types";

const wordsPerMinute = 215;
const questionDecisionMinutes = 0.6;
const minTotalMinutes = 21;
const maxTotalMinutes = 24;

const countWords = (text: string) =>
  text
    .replace(/[`*_#>-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const getNarrativeReadingWords = (narrative: Narrative) => {
  const narrativeText = [
    narrative.title,
    narrative.presentingProblem,
    narrative.mentalStatusObservation,
    narrative.familyHistory,
    narrative.workHistory,
    narrative.intakeSessionSummary,
    ...narrative.sections.flatMap((section) => [
      section.sessionLabel,
      section.sectionNarrative,
      ...section.questions.flatMap((question) => [question.stem, ...question.options]),
    ]),
  ].join(" ");

  return countWords(narrativeText);
};

export const getNarrativeTotalMinutes = (narrative: Narrative) => {
  if (narrative.minutesPerSection) {
    return narrative.minutesPerSection * narrative.sections.length;
  }

  const readingMinutes = getNarrativeReadingWords(narrative) / wordsPerMinute;
  const questionMinutes = totalQuestionCount(narrative) * questionDecisionMinutes;
  const estimatedMinutes = Math.round(readingMinutes + questionMinutes);

  return Math.min(maxTotalMinutes, Math.max(minTotalMinutes, estimatedMinutes));
};

export const getNarrativeSectionMinutes = (narrative: Narrative) => {
  if (narrative.minutesPerSection) {
    return narrative.minutesPerSection;
  }

  return getNarrativeTotalMinutes(narrative) >= 23 ? 8 : 7;
};