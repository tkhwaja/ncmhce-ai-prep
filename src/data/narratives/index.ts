import type { Narrative } from "./types";
import { priyaGad } from "./01-priya-gad";
import { marcusMdd } from "./02-marcus-mdd";
import { davidPtsd } from "./03-david-ptsd";
import { elenaBipolar } from "./04-elena-bipolar";
import { jamesAud } from "./05-james-aud";
import { aishaPtsdIpv } from "./06-aisha-ptsd-ipv";
import { jordanAnorexia } from "./07-jordan-anorexia";
import { robertGrief } from "./08-robert-prolonged-grief";
import { meiOcd } from "./09-mei-ocd";
import { tyroneBpd } from "./10-tyrone-bpd";

export type { Narrative, NarrativeSection, NarrativeQuestion, NarrativeDomain, NarrativeClientInfo } from "./types";
export { NARRATIVE_DOMAINS, totalQuestionCount } from "./types";

export const narratives: Narrative[] = [
  priyaGad,
  marcusMdd,
  davidPtsd,
  elenaBipolar,
  jamesAud,
  aishaPtsdIpv,
  jordanAnorexia,
  robertGrief,
  meiOcd,
  tyroneBpd,
];

export const getNarrativeById = (id: string | undefined): Narrative | undefined =>
  narratives.find((n) => n.id === id);
