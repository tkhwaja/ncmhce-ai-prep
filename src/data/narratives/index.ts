import type { Narrative, NarrativeDomain } from "./types";
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
import { keishaAdjustment } from "./11-keisha-adjustment";
import { miguelSocialAnxiety } from "./12-miguel-social-anxiety";
import { marisolPtsd } from "./13-marisol-ptsd";
import { claudetteHoarding } from "./14-claudette-hoarding";
import { rowenaAdhd } from "./15-rowena-adhd";
import { leilaAutism } from "./16-leila-autism";
import { soniaSomaticSymptom } from "./17-sonia-somatic-symptom";
import { nadiaBulimia } from "./20-nadia-bulimia";
import { darnellPanic } from "./19-darnell-panic";
import { carmenOud } from "./18-carmen-oud";
import { safiyaSchizophreniform } from "./21-safiya-schizophreniform";
import { rafaelHoarding } from "./24-rafael-hoarding";
import { noraSpecificPhobia } from "./25-nora-specific-phobia";
import { andreMdd } from "./27-andre-mdd";
import { malikaSocialAnxiety } from "./22-malika-social-anxiety";
import { hanaInsomnia } from "./23-hana-insomnia";
import { mateoBodyDysmorphic } from "./26-mateo-body-dysmorphic";
import { rafaelPtsd } from "./28-rafael-ptsd";
import { reneeDid } from "./32-renee-did";
import { alinaPostpartumOcd } from "./33-alina-postpartum-ocd";
import { daniellePeripartumMDDNarrative } from "./exam-01-02-danielle-mdd";
import { nehaGADPracticeExamNarrative } from "./practice-exam-01-case-03-neha-gad";
import { luisPanicNarrative } from "./practice-exam-01-case-04-luis-panic";
import { rachelAUDNarrative } from "./practice-exam-01-case-05-rachel-aud";
import { samuelOCDPracticeExamNarrative } from "./practice-exam-01-case-06-samuel-ocd";
import { monicaBipolarIIPracticeExamNarrative } from "./practice-exam-01-case-07-monica-bipolar-ii";
import { kiaraBPDPracticeExamNarrative } from "./practice-exam-01-case-08-kiara-bpd";
import { emilyBulimiaPracticeExamNarrative } from "./practice-exam-01-case-09-emily-bulimia";
import { ericaProlongedGriefPracticeExamNarrative } from "./practice-exam-01-case-10-erica-prolonged-grief";
import { jonahSchizophreniformPracticeExamNarrative } from "./practice-exam-01-case-11-jonah-schizophreniform";
import { niaMddSuicidePracticeExam2Narrative } from "./practice-exam-02-case-01-nia-mdd-suicide";
import { gabrielPtsdMoralInjuryPracticeExam2Narrative } from "./practice-exam-02-case-02-gabriel-ptsd-moral-injury";
import { leenaOcdRelationshipPracticeExam2Narrative } from "./practice-exam-02-case-03-leena-ocd-relationship";
import { camilaBipolarIIAdhdPracticeExam2Narrative } from "./practice-exam-02-case-04-camila-bipolar-ii-adhd";
import { omarAudCourtPracticeExam2Narrative } from "./practice-exam-02-case-05-omar-aud-court";
import { mayaAutismBurnoutPracticeExam2Narrative } from "./practice-exam-02-case-06-maya-autism-burnout";
import { imaniBpdAbandonmentPracticeExam2Narrative } from "./practice-exam-02-case-07-imani-bpd-abandonment";
import freeDiagnosticBundle from "@/data/free-diagnostic-bundle.json";

export type { Narrative, NarrativeSection, NarrativeQuestion, NarrativeDomain, NarrativeClientInfo } from "./types";
export { NARRATIVE_DOMAINS, totalQuestionCount } from "./types";
export { getNarrativeSectionMinutes, getNarrativeSectionMinutesAt, getNarrativeTotalMinutes } from "./timing";

const freeDiagnosticNarrative: Narrative = {
  id: freeDiagnosticBundle.freeNarrative.id,
  title: freeDiagnosticBundle.freeNarrative.title,
  category: "Free Diagnostic Case",
  difficulty:
    freeDiagnosticBundle.freeNarrative.difficulty === "advanced"
      ? "Advanced"
      : freeDiagnosticBundle.freeNarrative.difficulty === "beginner"
        ? "Beginner"
        : "Intermediate",
  recommendedTimeBySectionMinutes: freeDiagnosticBundle.freeNarrative.sections.map(
    (section) => section.recommendedTimeMinutes ?? 7,
  ),
  clientInfo: freeDiagnosticBundle.freeNarrative.clientInfo,
  presentingProblem: freeDiagnosticBundle.freeNarrative.presentingProblem,
  mentalStatusObservation: freeDiagnosticBundle.freeNarrative.mentalStatusObservation,
  familyHistory: freeDiagnosticBundle.freeNarrative.familyHistory,
  workHistory: freeDiagnosticBundle.freeNarrative.workHistory,
  intakeSessionSummary: freeDiagnosticBundle.freeNarrative.intakeSessionSummary,
  sections: freeDiagnosticBundle.freeNarrative.sections.map((section) => ({
    sessionLabel: section.sessionLabel,
    sectionNarrative: section.sectionNarrative,
    recommendedTimeMinutes: section.recommendedTimeMinutes,
    questions: section.questions.map((question) => ({
      ...question,
      domain: question.domain as NarrativeDomain,
    })),
  })),
};

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
  keishaAdjustment,
  miguelSocialAnxiety,
  marisolPtsd,
  claudetteHoarding,
  rowenaAdhd,
  leilaAutism,
  soniaSomaticSymptom,
  carmenOud,
  darnellPanic,
  nadiaBulimia,
  safiyaSchizophreniform,
  rafaelHoarding,
  noraSpecificPhobia,
  andreMdd,
  malikaSocialAnxiety,
  hanaInsomnia,
  mateoBodyDysmorphic,
  rafaelPtsd,
  reneeDid,
  alinaPostpartumOcd,
  kiaraBPDPracticeExamNarrative,
  emilyBulimiaPracticeExamNarrative,
  ericaProlongedGriefPracticeExamNarrative,
  jonahSchizophreniformPracticeExamNarrative,
];

const practiceExamNarratives: Narrative[] = [
  daniellePeripartumMDDNarrative,
  nehaGADPracticeExamNarrative,
  luisPanicNarrative,
  rachelAUDNarrative,
  samuelOCDPracticeExamNarrative,
  monicaBipolarIIPracticeExamNarrative,
  niaMddSuicidePracticeExam2Narrative,
  gabrielPtsdMoralInjuryPracticeExam2Narrative,
  leenaOcdRelationshipPracticeExam2Narrative,
  camilaBipolarIIAdhdPracticeExam2Narrative,
  omarAudCourtPracticeExam2Narrative,
  mayaAutismBurnoutPracticeExam2Narrative,
  imaniBpdAbandonmentPracticeExam2Narrative,
];

const allNarratives: Narrative[] = [freeDiagnosticNarrative, ...narratives, ...practiceExamNarratives];

export const getNarrativeById = (id: string | undefined): Narrative | undefined =>
  allNarratives.find((n) => n.id === id);

export const freeDiagnosticCase = freeDiagnosticNarrative;
