import type { NceBlueprintDomain, NceQuickReviewResource } from "./types";

/**
 * Official current NCE blueprint (administered before July 1, 2027):
 * 200 items / 160 scored / 3 hours 45 minutes.
 * Source: NBCC NCE content outline — https://nbcc.org/assets/exam/nce_content_outline.pdf
 */
export const nceCurrentBlueprintDomains: NceBlueprintDomain[] = [
  {
    id: "professional-practice-ethics",
    title: "Professional Practice and Ethics",
    percentage: 12,
    scoredItems: 19,
    description:
      "Professional identity, ethical and legal obligations, confidentiality, documentation, boundaries, supervision, and counselor wellness.",
    taskSummary: [
      "Apply ethical codes and decision-making models to practice dilemmas",
      "Manage informed consent, confidentiality, and mandated reporting",
      "Maintain records, boundaries, competence, and appropriate referrals",
      "Use supervision, consultation, and self-care responsibly",
    ],
    moduleIds: ["PO-01", "PO-02", "PO-03", "PO-04", "PO-05", "PO-06", "AT-01", "RP-02", "RP-05", "CH-01", "CH-09"],
  },
  {
    id: "intake-assessment-diagnosis",
    title: "Intake, Assessment, and Diagnosis",
    percentage: 12,
    scoredItems: 19,
    description:
      "Screening, clinical interviewing, psychometrics, culturally fair assessment, risk assessment, and diagnostic reasoning.",
    taskSummary: [
      "Select, administer, and interpret assessments appropriately",
      "Conduct intake interviews, mental status exams, and risk screening",
      "Apply DSM-5-TR reasoning to differential and co-occurring presentations",
      "Communicate results and limitations to clients and collaborators",
    ],
    moduleIds: ["AT-01", "AT-02", "AT-03", "AT-04", "AT-05", "AT-06", "AT-07", "SC-04", "CH-07", "CH-09", "CH-10", "HG-06"],
  },
  {
    id: "areas-clinical-focus",
    title: "Areas of Clinical Focus",
    percentage: 29,
    scoredItems: 47,
    description:
      "Recognizing and responding to the clinical, developmental, cultural, and situational concerns counselors most often treat.",
    taskSummary: [
      "Recognize presenting concerns across the lifespan and across cultures",
      "Match counselor response to the concern, severity, and context",
      "Account for co-occurring, systemic, and identity-related factors",
    ],
    moduleIds: ["CH-07", "CH-10", "HG-04", "HG-05", "HG-06", "SC-02", "SC-03", "SC-04", "SC-05", "CD-05", "AT-06"],
  },
  {
    id: "treatment-planning",
    title: "Treatment Planning",
    percentage: 9,
    scoredItems: 14,
    description:
      "Case conceptualization, goal setting, intervention alignment, progress monitoring, and continuity of care.",
    taskSummary: [
      "Build theory-based conceptualizations and prioritize concerns",
      "Write measurable goals and objectives and align interventions",
      "Monitor progress, revise plans, and plan aftercare or termination",
    ],
    moduleIds: ["CH-09", "AT-06", "AT-07", "CH-07", "SC-04", "GW-05"],
  },
  {
    id: "counseling-skills-interventions",
    title: "Counseling Skills and Interventions",
    percentage: 30,
    scoredItems: 48,
    description:
      "Applying theories, counseling skills, crisis responses, group techniques, and culturally responsive interventions.",
    taskSummary: [
      "Use foundational skills to build and repair the working alliance",
      "Select theory-consistent interventions for the client and stage of care",
      "Respond effectively to crisis, resistance, and group dynamics",
    ],
    moduleIds: ["CH-01", "CH-02", "CH-03", "CH-04", "CH-05", "CH-06", "CH-07", "CH-08", "CH-09", "CH-10", "GW-03", "GW-04", "GW-05", "SC-04", "HG-04", "HG-05", "HG-06"],
  },
  {
    id: "core-counseling-attributes",
    title: "Core Counseling Attributes",
    percentage: 8,
    scoredItems: 13,
    description:
      "The counselor's own stance: empathy, self-awareness, cultural humility, ethical maturity, and use of self in the relationship.",
    taskSummary: [
      "Demonstrate empathy, congruence, and unconditional positive regard",
      "Maintain self-awareness and manage countertransference",
      "Practice cultural humility and reflective, ethical professionalism",
    ],
    moduleIds: ["CH-01", "CH-02", "SC-01", "SC-02", "SC-03", "SC-04", "PO-05", "PO-06", "GW-04", "GW-05"],
  },
];

/**
 * NCE specifications effective July 1, 2027: 170 items / 140 scored /
 * 3 options per item / scaled score 100–500 with a fixed passing point of 360.
 * Source: https://nbcc.org/assets/exam/NCE_exam_spec_2027.pdf
 * Never shown to a current-exam user as if it applied to their exam.
 */
export const nceFutureBlueprintDomains: NceBlueprintDomain[] = [
  {
    id: "professional-development-self-awareness",
    title: "Professional Development and Counselor Self-Awareness",
    percentage: 15,
    description: "Professional identity, reflective practice, supervision, wellness, and ongoing development.",
    taskSummary: [],
    moduleIds: ["PO-01", "PO-05", "PO-06", "CH-01", "SC-01"],
  },
  {
    id: "intake-assessment",
    title: "Intake and Assessment",
    percentage: 18,
    description: "Intake interviewing, screening, assessment selection and interpretation, and risk assessment.",
    taskSummary: [],
    moduleIds: ["AT-01", "AT-02", "AT-03", "AT-04", "AT-05", "AT-06", "SC-04"],
  },
  {
    id: "treatment-planning-continuity-care",
    title: "Treatment Planning and Continuity of Care",
    percentage: 15,
    description: "Conceptualization, goal setting, care coordination, progress monitoring, and termination.",
    taskSummary: [],
    moduleIds: ["CH-09", "AT-07", "GW-05", "CD-05"],
  },
  {
    id: "provision-counseling-interventions",
    title: "Provision of Counseling Interventions",
    percentage: 20,
    description: "Theory-based intervention delivery, counseling skills, crisis response, and group work.",
    taskSummary: [],
    moduleIds: ["CH-02", "CH-03", "CH-04", "CH-05", "CH-06", "CH-07", "CH-08", "CH-10", "GW-03", "GW-04", "GW-05"],
  },
  {
    id: "indirect-client-care",
    title: "Indirect Client Care",
    percentage: 12,
    description: "Consultation, collaboration, advocacy, referral, documentation, and program evaluation.",
    taskSummary: [],
    moduleIds: ["PO-06", "SC-03", "RP-01", "RP-02", "RP-03", "RP-04", "RP-05"],
  },
  {
    id: "legal-ethical-compliance",
    title: "Legal and Ethical Compliance",
    percentage: 20,
    description: "Ethical codes, confidentiality, legal duties, records, technology, and boundaries.",
    taskSummary: [],
    moduleIds: ["PO-02", "PO-03", "PO-04", "PO-05", "GW-02", "AT-01"],
  },
];

/** Quick Review toolkit (blueprint §10). Built after source modules are authored. */
export const nceQuickReviewResources: NceQuickReviewResource[] = [
  { id: "qr-theory-comparison", title: "Master Counseling Theory Comparison", description: "Side-by-side view of goals, counselor stance, key techniques, and best-fit presentations.", sourceModuleIds: ["CH-03", "CH-04", "CH-05", "CH-06"], status: "planned" },
  { id: "qr-theorists", title: "Major Theorists and Signature Concepts", description: "Who said what, and the single concept each theorist is tested on.", sourceModuleIds: ["CH-03", "CH-04", "CH-05", "CH-06", "HG-02", "HG-03"], status: "planned" },
  { id: "qr-lifespan-timeline", title: "Lifespan Development Timeline", description: "Ages, stages, and tasks across Erikson, Piaget, Kohlberg, and attachment research.", sourceModuleIds: ["HG-02", "HG-03", "HG-04", "HG-05"], status: "planned" },
  { id: "qr-career-theories", title: "Career Theory Comparison", description: "Holland, Super, Gottfredson, Krumboltz, SCCT, and narrative approaches at a glance.", sourceModuleIds: ["CD-02", "CD-03", "CD-04"], status: "planned" },
  { id: "qr-group", title: "Group Stages, Leader Tasks, and Therapeutic Factors", description: "What happens in each stage and what the leader does about it.", sourceModuleIds: ["GW-03", "GW-04", "GW-05"], status: "planned" },
  { id: "qr-psychometrics", title: "Assessment Score and Psychometrics Guide", description: "Score types, distributions, reliability, validity, and standard error in one sheet.", sourceModuleIds: ["AT-02", "AT-03", "AT-04"], status: "planned" },
  { id: "qr-stat-selector", title: "Research Design and Statistical-Test Selector", description: "Pick the design and the test from the research question.", sourceModuleIds: ["RP-01", "RP-03"], status: "planned" },
  { id: "qr-ethics-decision", title: "Ethics and Legal Decision Guide", description: "Ordered decision steps for the dilemmas the NCE reuses most.", sourceModuleIds: ["PO-02", "PO-03", "PO-04"], status: "planned" },
  { id: "qr-confidentiality", title: "Confidentiality and Informed Consent Comparison", description: "Confidentiality vs. privilege, exceptions, minors, groups, and releases.", sourceModuleIds: ["PO-03", "PO-04", "GW-02"], status: "planned" },
  { id: "qr-concern-response", title: "Clinical Concern Recognition and Counselor Response Guide", description: "Presentation cues mapped to the expected first counselor response.", sourceModuleIds: ["CH-07", "CH-10"], status: "planned" },
  { id: "qr-confused-terms", title: "Commonly Confused NCE Terms", description: "Term pairs the exam uses as distractors, with the distinction that separates them.", sourceModuleIds: ["PO-02", "AT-03", "RP-03", "CH-05"], status: "planned" },
  { id: "qr-glossary", title: "Searchable NCE Glossary", description: "Every key term, theorist, and instrument in the library, searchable with aliases.", sourceModuleIds: [], status: "planned" },
];
