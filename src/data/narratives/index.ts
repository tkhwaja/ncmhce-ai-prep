import type { Narrative } from "./types";
import { priyaGad } from "./01-priya-gad";
import { marcusMdd } from "./02-marcus-mdd";

export type { Narrative, NarrativeSection, NarrativeQuestion, NarrativeDomain, NarrativeClientInfo } from "./types";
export { NARRATIVE_DOMAINS, totalQuestionCount } from "./types";

export const narratives: Narrative[] = [priyaGad, marcusMdd];

export const getNarrativeById = (id: string | undefined): Narrative | undefined =>
  narratives.find((n) => n.id === id);
