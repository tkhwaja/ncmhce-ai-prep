/**
 * Free NCE diagnostic.
 *
 * A short, balanced multiple-choice diagnostic used as the public lead magnet
 * for the NCE track — the mirror of the free NCMHCE diagnostic case.
 *
 * Items are drawn deterministically from the authored question bank: the first
 * `ITEMS_PER_DOMAIN` items available in each of the eight CACREP content areas,
 * so every area is represented and the score report is meaningful.
 */

import { NCE_DOMAINS, type NCEDomain, type NCEQuestion } from "./types";
import { nceQuestions } from "./questions";

export const NCE_DIAGNOSTIC_ITEMS_PER_DOMAIN = 3;

/** Minutes allowed, matching real NCE pacing (~70 seconds per item). */
export const NCE_DIAGNOSTIC_MINUTES = 30;

const pickForDomain = (domain: NCEDomain): NCEQuestion[] =>
  nceQuestions
    .filter((q) => q.domain === domain)
    .slice(0, NCE_DIAGNOSTIC_ITEMS_PER_DOMAIN);

/** The diagnostic item set, ordered by content area. */
export const nceDiagnosticQuestions: NCEQuestion[] = NCE_DOMAINS.flatMap((d) =>
  pickForDomain(d as NCEDomain),
);

export const NCE_DIAGNOSTIC_ID = "nce-free-diagnostic-01";

/** Short label used in results and email copy. */
export const shortDomainLabel = (domain: string): string =>
  domain
    .replace("Professional Counseling Orientation and Ethical Practice", "Orientation & Ethics")
    .replace("Social and Cultural Diversity", "Social & Cultural Diversity")
    .replace("Human Growth and Development", "Human Growth & Development")
    .replace("Counseling and Helping Relationships", "Counseling & Helping Relationships")
    .replace("Group Counseling and Group Work", "Group Counseling & Group Work")
    .replace("Assessment and Testing", "Assessment & Testing")
    .replace("Research and Program Evaluation", "Research & Program Evaluation");
