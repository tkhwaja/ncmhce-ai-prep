import type { Narrative } from "./types";
import { priyaGad } from "./priya-gad";

export type { Narrative, NarrativeSection, NarrativeQuestion, NarrativeDomain, NarrativeClientInfo } from "./types";
export { NARRATIVE_DOMAINS, totalQuestionCount } from "./types";

export const narratives: Narrative[] = [priyaGad];

export const getNarrativeById = (id: string | undefined): Narrative | undefined =>
  narratives.find((n) => n.id === id);
