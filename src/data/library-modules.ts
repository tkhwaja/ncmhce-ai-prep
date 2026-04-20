import examOverview from "./library/exam-overview.json";
import glossary from "./library/glossary.json";
import research from "./library/research.json";
import career from "./library/career.json";
import psychopharmacology from "./library/psychopharmacology.json";
import groupCounseling from "./library/group-counseling.json";

export type LibraryCategory =
  | "Orientation"
  | "Core Domains"
  | "Integration Domains"
  | "Supporting Domains";

export interface LibraryModule {
  id: string;
  title: string;
  category: LibraryCategory;
  description: string;
  icon: string;
  keyConcepts: string[];
  tags: string[];
  /** Legacy text content for old-style modules */
  content?: string;
  /** Rich structured JSON data for new modules */
  data?: any;
  /** Special module type */
  moduleType?: "glossary" | "standard";
}

export const libraryModules: LibraryModule[] = [
  // === ORIENTATION ===
  {
    id: "exam-overview-and-blueprint",
    title: "Exam Overview & Blueprint",
    category: "Orientation",
    icon: "ClipboardCheck",
    description: examOverview.intro.summary,
    keyConcepts: examOverview.intro.learningObjectives,
    tags: examOverview.uiHints.tags,
    data: examOverview,
  },

  // === CORE DOMAINS (Tier 1) ===
  {
    id: "assessment-diagnosis",
    title: "Assessment & Diagnosis",
    category: "Core Domains",
    icon: "ClipboardCheck",
    description:
      "Master DSM-5-TR diagnostic criteria, differential diagnosis, and clinical assessment instruments used in the NCMHCE.",
    keyConcepts: [
      "DSM-5-TR diagnostic criteria and classification",
      "Differential diagnosis process",
      "Mental Status Examination (MSE)",
      "Standardized assessment instruments (PHQ-9, GAD-7, AUDIT, PCL-5)",
      "Biopsychosocial assessment model",
      "Cultural considerations in diagnosis",
      "Rule-out criteria and comorbidity",
      "Severity specifiers and course modifiers",
    ],
    tags: ["assessment", "diagnosis", "dsm", "ncmhce"],
    content: `## Understanding DSM-5-TR and Clinical Diagnosis

The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) is the standard classification system used by mental health professionals in the United States. For the NCMHCE, you must be proficient in applying DSM-5-TR criteria to clinical vignettes, identifying the most appropriate diagnosis based on presenting symptoms, history, and clinical observations.

The DSM-5-TR organizes disorders into chapters based on shared features. Key chapters frequently tested on the NCMHCE include: Depressive Disorders, Anxiety Disorders, Trauma- and Stressor-Related Disorders, Substance-Related and Addictive Disorders, Personality Disorders, and Neurodevelopmental Disorders.

## Differential Diagnosis

Differential diagnosis is the systematic process of distinguishing between disorders that share similar presenting symptoms. On the NCMHCE, you will frequently need to differentiate between conditions such as Major Depressive Disorder vs. Bipolar II Disorder, Generalized Anxiety Disorder vs. Adjustment Disorder with Anxiety, PTSD vs. Acute Stress Disorder, and Substance-Induced disorders vs. independent mental health conditions.

## Clinical Assessment Instruments

Familiarity with commonly used assessment tools is essential. The PHQ-9 measures depression severity, the GAD-7 assesses generalized anxiety, the AUDIT screens for alcohol use disorders, and the PCL-5 evaluates PTSD symptoms.

## The Biopsychosocial Model

Clinical assessment should always consider biological factors (genetics, medical conditions, medications), psychological factors (cognitive patterns, coping mechanisms, personality traits), and social factors (family dynamics, cultural background, socioeconomic status, support systems).`,
  },
  {
    id: "counseling-theories",
    title: "Counseling Theories & Techniques",
    category: "Core Domains",
    icon: "Lightbulb",
    description:
      "Review major counseling theories including CBT, DBT, Person-Centered, Psychodynamic, Solution-Focused, and MI.",
    keyConcepts: [
      "Cognitive Behavioral Therapy (CBT) — Beck, Ellis",
      "Dialectical Behavior Therapy (DBT) — Linehan",
      "Person-Centered Therapy — Rogers",
      "Psychodynamic/Psychoanalytic approaches — Freud, Jung",
      "Solution-Focused Brief Therapy (SFBT) — de Shazer",
      "Motivational Interviewing (MI) — Miller & Rollnick",
      "Family Systems Theory — Bowen, Minuchin",
      "Existential Therapy — Yalom, Frankl",
    ],
    tags: ["theories", "cbt", "dbt", "mi", "ncmhce"],
    content: `## Major Counseling Theories for the NCMHCE

The NCMHCE tests your ability to apply theoretical orientations to clinical scenarios. Rather than memorizing theory in isolation, focus on understanding when each approach is most appropriate and how theoretical concepts inform treatment decisions.

## Cognitive Behavioral Therapy (CBT)

Developed by Aaron Beck and Albert Ellis, CBT is based on the premise that thoughts, feelings, and behaviors are interconnected. Key techniques include cognitive restructuring, behavioral experiments, activity scheduling, and exposure. CBT is the most extensively researched therapy approach.

## Dialectical Behavior Therapy (DBT)

Created by Marsha Linehan, DBT was originally developed for Borderline Personality Disorder. The four skill modules are mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.

## Person-Centered Therapy

Carl Rogers developed Person-Centered Therapy based on the belief that individuals have an inherent tendency toward growth. The three core conditions — unconditional positive regard, empathic understanding, and congruence — are considered both necessary and sufficient for therapeutic change.

## Solution-Focused Brief Therapy (SFBT)

Developed by Steve de Shazer and Insoo Kim Berg, SFBT focuses on solutions rather than problems. Key techniques include the miracle question, exception-finding questions, scaling questions, and coping questions.

## Motivational Interviewing (MI)

William Miller and Stephen Rollnick developed MI as a collaborative communication style. The four processes are engaging, focusing, evoking, and planning. Key skills include OARS (open questions, affirmations, reflections, summaries).`,
  },
  {
    id: "ethics-professional-practice",
    title: "Ethics & Legal Issues",
    category: "Core Domains",
    icon: "Scale",
    description:
      "Study the ACA Code of Ethics, confidentiality requirements, mandated reporting, and dual relationships.",
    keyConcepts: [
      "ACA Code of Ethics (2014) — key sections",
      "Confidentiality and its limits",
      "Informed consent requirements",
      "Dual/multiple relationships",
      "Mandated reporting obligations",
      "Duty to warn (Tarasoff)",
      "Scope of practice and referral",
      "Cultural competence as ethical obligation",
    ],
    tags: ["ethics", "legal", "aca", "confidentiality", "ncmhce"],
    content: `## Ethics and Professional Practice on the NCMHCE

Ethical reasoning is woven throughout the NCMHCE. The exam presents ethical dilemmas embedded within clinical simulations.

## ACA Code of Ethics (2014)

Key sections include: Section A (The Counseling Relationship), Section B (Confidentiality and Privacy), Section C (Professional Responsibility).

## Confidentiality and Its Limits

Exceptions include: danger to self, danger to others (Tarasoff), suspected child/elder abuse, court orders, and client consent.

## Informed Consent

Should include: nature and goals of counseling, counselor's qualifications, limits of confidentiality, fees, risks and benefits, right to refuse treatment, and emergency procedures.

## Dual Relationships

The ACA Code does not categorically prohibit all dual relationships but warns against those that could impair professional judgment or increase exploitation risk.

## Mandated Reporting and Duty to Warn

Counselors are mandated reporters for suspected child abuse and neglect. Tarasoff established a duty to protect identifiable third parties from serious harm.`,
  },
  {
    id: "crisis-intervention",
    title: "Crisis, Trauma & Disaster Counseling",
    category: "Core Domains",
    icon: "AlertTriangle",
    description:
      "Learn suicide assessment, safety planning, duty to warn, and crisis intervention strategies.",
    keyConcepts: [
      "Suicide risk assessment (Columbia Protocol, SAD PERSONS)",
      "Safety planning intervention",
      "Lethal means counseling",
      "Crisis stabilization techniques",
      "Duty to warn and protect",
      "Involuntary hospitalization criteria",
      "Trauma-informed crisis response",
      "De-escalation strategies",
    ],
    tags: ["crisis", "trauma", "suicide", "safety", "ncmhce"],
    content: `## Crisis Intervention on the NCMHCE

Crisis intervention is one of the most critical competencies tested. The exam frequently presents scenarios where clients are in acute distress.

## Suicide Risk Assessment

Comprehensive assessment includes: ideation, plan, intent, previous attempts, risk factors, and protective factors. Tools include C-SSRS and SAD PERSONS scale.

## Safety Planning

The Safety Planning Intervention (SPI) includes six steps: recognizing warning signs, internal coping strategies, social distraction, people to contact for help, professional contacts, and making the environment safe.

## Lethal Means Counseling

Reducing access to lethal means is one of the most effective suicide prevention strategies.

## Crisis Stabilization

Immediate goals: ensuring safety, reducing acute distress, restoring a sense of control. Key strategies include grounding techniques, validation, and de-escalation.

## When to Hospitalize

Appropriate when a client presents imminent danger to self/others and is unwilling or unable to engage in voluntary treatment.`,
  },
  {
    id: "treatment-planning",
    title: "Treatment Planning",
    category: "Core Domains",
    icon: "FileText",
    description:
      "Learn evidence-based treatment approaches by disorder, treatment plan writing, and outcome measurement.",
    keyConcepts: [
      "Evidence-based treatment selection",
      "SMART treatment goals",
      "Treatment plan components (goals, objectives, interventions)",
      "Matching treatment to diagnosis",
      "CBT for depression and anxiety",
      "EMDR and PE for trauma",
      "Motivational Interviewing for substance use",
      "DBT for borderline personality disorder",
    ],
    tags: ["treatment", "planning", "ebp", "ncmhce"],
    content: `## Evidence-Based Treatment Planning

Treatment planning translates clinical assessment into actionable steps. The NCMHCE expects you to select interventions supported by research evidence.

## Components of a Treatment Plan

Includes: presenting problems, diagnostic impressions, treatment goals, measurable objectives, therapeutic interventions, and frequency/duration. Goals should follow the SMART framework.

## Evidence-Based Treatments by Disorder

**Depressive Disorders**: CBT and Behavioral Activation are first-line.
**Anxiety Disorders**: CBT with exposure-based techniques is the gold standard.
**Trauma-Related Disorders**: PE, CPT, and EMDR are most evidence-based.
**Substance Use Disorders**: MI is essential for addressing ambivalence.

## Outcome Measurement

Includes establishing baseline functioning, selecting outcome measures, conducting progress reviews, and modifying the treatment plan based on response.`,
  },

  // === INTEGRATION DOMAINS (Tier 2) ===
  {
    id: "counselor-attributes",
    title: "Core Counseling Attributes",
    category: "Integration Domains",
    icon: "Heart",
    description:
      "Develop therapeutic alliance skills, cultural competence, and professional self-awareness.",
    keyConcepts: [
      "Therapeutic alliance and working relationship",
      "Unconditional positive regard",
      "Empathic understanding",
      "Congruence and genuineness",
      "Cultural competence and humility",
      "Self-awareness and countertransference",
      "Professional boundaries",
      "Multicultural counseling competencies",
    ],
    tags: ["counselor", "alliance", "multicultural", "ncmhce"],
    content: `## Counselor Attributes and Core Competencies

The NCMHCE tests counselor attributes primarily through the quality of responses selected in clinical simulations.

## The Therapeutic Alliance

Research consistently shows the therapeutic alliance is one of the strongest predictors of treatment outcomes. Key components include agreement on goals, agreement on tasks, and an emotional bond.

## Cultural Competence and Humility

Cultural competence involves awareness of one's own cultural values, knowledge of diverse cultural backgrounds, and development of culturally appropriate intervention skills.

## Self-Awareness and Countertransference

Counselors must maintain awareness of their own emotional reactions, biases, and blind spots. Countertransference can subtly influence clinical decisions.`,
  },
  {
    id: "group-counseling",
    title: "Group Counseling",
    category: "Integration Domains",
    icon: "Heart",
    description: groupCounseling.intro.summary,
    keyConcepts: groupCounseling.intro.learningObjectives,
    tags: groupCounseling.uiHints.tags,
    data: groupCounseling,
  },
  {
    id: "psychopharmacology",
    title: "Psychopharmacology",
    category: "Integration Domains",
    icon: "AlertTriangle",
    description: psychopharmacology.intro.summary,
    keyConcepts: psychopharmacology.intro.learningObjectives,
    tags: psychopharmacology.uiHints.tags,
    data: psychopharmacology,
  },

  // === SUPPORTING DOMAINS (Tier 3) ===
  {
    id: "career-development",
    title: "Career Development",
    category: "Supporting Domains",
    icon: "Lightbulb",
    description: career.intro.summary,
    keyConcepts: career.intro.learningObjectives,
    tags: career.uiHints.tags,
    data: career,
  },
  {
    id: "research-and-program-evaluation",
    title: "Research & Program Evaluation",
    category: "Supporting Domains",
    icon: "FileText",
    description: research.intro.summary,
    keyConcepts: research.intro.learningObjectives,
    tags: research.uiHints.tags,
    data: research,
  },
  {
    id: "key-terms-glossary",
    title: "Key Terms Glossary",
    category: "Supporting Domains",
    icon: "FileText",
    description: glossary.intro.summary,
    keyConcepts: glossary.intro.learningObjectives,
    tags: glossary.uiHints.tags,
    data: glossary,
    moduleType: "glossary",
  },
];

export const categoryOrder: LibraryCategory[] = [
  "Orientation",
  "Core Domains",
  "Integration Domains",
  "Supporting Domains",
];
