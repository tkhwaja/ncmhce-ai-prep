export type ExamLikelihoodLevel = "highest" | "high" | "moderate" | "low";

export type ExamLikelihood = {
  level: ExamLikelihoodLevel;
  label: string;
  shortLabel: string;
  rationale: string;
};

const LIKELIHOOD: Record<ExamLikelihoodLevel, ExamLikelihood> = {
  highest: {
    level: "highest",
    label: "Highest yield",
    shortLabel: "Highest",
    rationale: "Directly maps to heavily weighted NCMHCE domains or common case-study decisions.",
  },
  high: {
    level: "high",
    label: "High yield",
    shortLabel: "High",
    rationale: "Commonly tested as applied clinical knowledge, ethics, assessment, treatment planning, or interventions.",
  },
  moderate: {
    level: "moderate",
    label: "Moderate yield",
    shortLabel: "Moderate",
    rationale: "Useful supporting knowledge; likely to appear when it affects case formulation or counseling decisions.",
  },
  low: {
    level: "low",
    label: "Lower yield",
    shortLabel: "Lower",
    rationale: "Specialized or less central; know the broad recognition points rather than memorizing details.",
  },
};

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();

const includesAny = (text: string, terms: string[]) => terms.some((term) => text.includes(term));

const highestTerms = [
  "counseling skills", "intervention", "crisis", "suicide", "homicide", "safety", "risk", "danger",
  "intake", "assessment", "diagnosis", "diagnostic", "differential", "mse", "mental status", "level of care",
  "treatment plan", "treatment planning", "goals", "objectives", "ethics", "ethical", "confidentiality",
  "informed consent", "mandated reporting", "duty to protect", "abuse", "neglect", "trauma", "substance use",
  "addiction", "depression", "anxiety", "panic", "ptsd", "bipolar", "psychosis", "eating", "ocd",
  "therapeutic alliance", "empathy", "empathic", "core counseling", "case conceptualization", "biopsychosocial",
];

const highTerms = [
  "cbt", "cognitive behavioral", "dbt", "motivational interviewing", "mi", "family therapy", "group", "multicultural",
  "culture", "career", "human development", "developmental", "attachment", "solution-focused", "person-centered",
  "psychometrics", "validity", "reliability", "standardization", "assessment instrument", "screening",
  "research", "program evaluation", "documentation", "records", "supervision", "consultation", "termination",
  "relapse", "prevention", "grief", "ipv", "domestic violence", "relationship violence", "sleep", "insomnia",
];

const lowTerms = [
  "medication", "medications", "psychopharmacology", "antipsychotic", "antidepressant", "benzodiazepine", "ssri", "snri",
  "mood stabilizer", "stimulant", "side effect", "rare", "specific phobia", "hoarding", "somatic symptom",
  "schizophreniform", "brief psychotic", "cyclothymic", "delusional", "paraphilic", "dissociative", "factitious",
  "historical", "founder", "timeline", "publication", "neurotransmitter", "dosage", "pharmacokinetic",
];

export const getExamLikelihood = (topic: string, context = ""): ExamLikelihood => {
  const text = normalize(`${topic} ${context}`);

  if (!text) return LIKELIHOOD.moderate;
  if (includesAny(text, highestTerms)) return LIKELIHOOD.highest;

  if (includesAny(text, lowTerms)) {
    if (includesAny(text, ["suicide", "risk", "safety", "substance use", "withdrawal", "toxicity", "side effect", "contraindication"])) {
      return LIKELIHOOD.moderate;
    }
    return LIKELIHOOD.low;
  }

  if (includesAny(text, highTerms)) return LIKELIHOOD.high;

  if (includesAny(text, ["exam trap", "exam cue", "exam pearl", "what to do next", "best next", "ncmhce"])) {
    return LIKELIHOOD.high;
  }

  return LIKELIHOOD.moderate;
};
