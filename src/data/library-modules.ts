export interface LibraryModule {
  id: string;
  title: string;
  domain: string;
  description: string;
  icon: string;
  keyConcepts: string[];
  content: string;
  videoPlaceholder?: boolean;
}

export const libraryModules: LibraryModule[] = [
  {
    id: "assessment-diagnosis",
    title: "Assessment & Diagnosis",
    domain: "Assessment & Diagnosis",
    icon: "ClipboardCheck",
    description: "Master DSM-5-TR diagnostic criteria, differential diagnosis, and clinical assessment instruments used in the NCMHCE.",
    keyConcepts: [
      "DSM-5-TR diagnostic criteria and classification",
      "Differential diagnosis process",
      "Mental Status Examination (MSE)",
      "Standardized assessment instruments (PHQ-9, GAD-7, AUDIT, PCL-5)",
      "Biopsychosocial assessment model",
      "Cultural considerations in diagnosis",
      "Rule-out criteria and comorbidity",
      "Severity specifiers and course modifiers"
    ],
    videoPlaceholder: true,
    content: `## Understanding DSM-5-TR and Clinical Diagnosis

The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) is the standard classification system used by mental health professionals in the United States. For the NCMHCE, you must be proficient in applying DSM-5-TR criteria to clinical vignettes, identifying the most appropriate diagnosis based on presenting symptoms, history, and clinical observations.

The DSM-5-TR organizes disorders into chapters based on shared features. Key chapters frequently tested on the NCMHCE include: Depressive Disorders, Anxiety Disorders, Trauma- and Stressor-Related Disorders, Substance-Related and Addictive Disorders, Personality Disorders, and Neurodevelopmental Disorders. For each disorder, you should know the essential diagnostic criteria, duration requirements, exclusion criteria, and common differential diagnoses.

## Differential Diagnosis

Differential diagnosis is the systematic process of distinguishing between disorders that share similar presenting symptoms. On the NCMHCE, you will frequently need to differentiate between conditions such as Major Depressive Disorder vs. Bipolar II Disorder, Generalized Anxiety Disorder vs. Adjustment Disorder with Anxiety, PTSD vs. Acute Stress Disorder, and Substance-Induced disorders vs. independent mental health conditions. The key to successful differential diagnosis is careful attention to symptom duration, onset, severity, and the presence or absence of specific distinguishing features.

## Clinical Assessment Instruments

Familiarity with commonly used assessment tools is essential. The PHQ-9 measures depression severity, the GAD-7 assesses generalized anxiety, the AUDIT screens for alcohol use disorders, and the PCL-5 evaluates PTSD symptoms. Understanding when to administer these instruments, how to interpret scores, and their limitations is critical for the Information Gathering section of the NCMHCE.

## The Biopsychosocial Model

Clinical assessment should always consider biological factors (genetics, medical conditions, medications), psychological factors (cognitive patterns, coping mechanisms, personality traits), and social factors (family dynamics, cultural background, socioeconomic status, support systems). The NCMHCE frequently tests your ability to integrate information across these domains when formulating a comprehensive clinical picture.`
  },
  {
    id: "treatment-planning",
    title: "Treatment Planning",
    domain: "Treatment Planning",
    icon: "FileText",
    description: "Learn evidence-based treatment approaches by disorder, treatment plan writing, and outcome measurement.",
    keyConcepts: [
      "Evidence-based treatment selection",
      "SMART treatment goals",
      "Treatment plan components (goals, objectives, interventions)",
      "Matching treatment to diagnosis",
      "CBT for depression and anxiety",
      "EMDR and PE for trauma",
      "Motivational Interviewing for substance use",
      "DBT for borderline personality disorder"
    ],
    videoPlaceholder: true,
    content: `## Evidence-Based Treatment Planning

Treatment planning is a cornerstone of clinical mental health counseling and a heavily tested area on the NCMHCE. An effective treatment plan translates the clinical assessment into actionable steps that guide the therapeutic process. The NCMHCE expects you to select interventions that are supported by research evidence and appropriate for the client's specific diagnosis, cultural background, and personal circumstances.

## Components of a Treatment Plan

A comprehensive treatment plan includes: presenting problems (identified through assessment), diagnostic impressions (DSM-5-TR diagnoses), treatment goals (broad, long-term desired outcomes), measurable objectives (specific, time-limited steps toward goals), therapeutic interventions (specific techniques and approaches), and frequency/duration of treatment. Goals should follow the SMART framework — Specific, Measurable, Achievable, Relevant, and Time-bound.

## Evidence-Based Treatments by Disorder

**Depressive Disorders**: Cognitive Behavioral Therapy (CBT) and Behavioral Activation are first-line treatments. Interpersonal Therapy (IPT) is also well-supported. For severe cases, coordination with prescribers for medication management is appropriate.

**Anxiety Disorders**: CBT with exposure-based techniques is the gold standard. Relaxation training, cognitive restructuring, and systematic desensitization are key interventions. For GAD, worry exposure and cognitive defusion techniques are particularly effective.

**Trauma-Related Disorders**: Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), and Eye Movement Desensitization and Reprocessing (EMDR) are the most evidence-based treatments for PTSD. Trauma-focused CBT is recommended for children and adolescents.

**Substance Use Disorders**: Motivational Interviewing (MI) is essential for addressing ambivalence about change. Cognitive Behavioral approaches, contingency management, and 12-step facilitation are well-supported. The Stages of Change model (Prochaska & DiClemente) guides intervention selection.

## Outcome Measurement

Effective treatment planning includes mechanisms for measuring progress. This involves establishing baseline functioning, selecting appropriate outcome measures, conducting regular progress reviews, and modifying the treatment plan based on client response. The NCMHCE may test your ability to recognize when a treatment approach is not working and when to adjust the plan.`
  },
  {
    id: "counseling-theories",
    title: "Counseling Theories",
    domain: "Counseling Theories",
    icon: "Lightbulb",
    description: "Review major counseling theories including CBT, DBT, Person-Centered, Psychodynamic, Solution-Focused, and MI.",
    keyConcepts: [
      "Cognitive Behavioral Therapy (CBT) — Beck, Ellis",
      "Dialectical Behavior Therapy (DBT) — Linehan",
      "Person-Centered Therapy — Rogers",
      "Psychodynamic/Psychoanalytic approaches — Freud, Jung",
      "Solution-Focused Brief Therapy (SFBT) — de Shazer",
      "Motivational Interviewing (MI) — Miller & Rollnick",
      "Family Systems Theory — Bowen, Minuchin",
      "Existential Therapy — Yalom, Frankl"
    ],
    videoPlaceholder: true,
    content: `## Major Counseling Theories for the NCMHCE

The NCMHCE tests your ability to apply theoretical orientations to clinical scenarios. Rather than memorizing theory in isolation, focus on understanding when each approach is most appropriate and how theoretical concepts inform treatment decisions.

## Cognitive Behavioral Therapy (CBT)

Developed by Aaron Beck and Albert Ellis, CBT is based on the premise that thoughts, feelings, and behaviors are interconnected. Maladaptive cognitions (cognitive distortions) contribute to emotional distress and dysfunctional behavior. Key techniques include cognitive restructuring, behavioral experiments, activity scheduling, and exposure. CBT is the most extensively researched therapy approach and has strong evidence for depression, anxiety, PTSD, OCD, and eating disorders. On the NCMHCE, CBT is frequently the correct treatment choice.

## Dialectical Behavior Therapy (DBT)

Created by Marsha Linehan, DBT was originally developed for Borderline Personality Disorder and chronic suicidality. It combines CBT techniques with mindfulness practices and emphasizes the dialectic between acceptance and change. The four skill modules are mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. DBT is delivered through individual therapy, skills group, phone coaching, and therapist consultation team. It is now also used for substance use disorders, eating disorders, and treatment-resistant depression.

## Person-Centered Therapy

Carl Rogers developed Person-Centered Therapy based on the belief that individuals have an inherent tendency toward growth and self-actualization. The three core conditions — unconditional positive regard, empathic understanding, and congruence (genuineness) — are considered both necessary and sufficient for therapeutic change. This approach is non-directive, emphasizing the therapeutic relationship as the primary vehicle for change. On the NCMHCE, Person-Centered skills are foundational counselor attributes tested across all simulations.

## Solution-Focused Brief Therapy (SFBT)

Developed by Steve de Shazer and Insoo Kim Berg, SFBT focuses on solutions rather than problems. Key techniques include the miracle question, exception-finding questions, scaling questions, and coping questions. This approach is particularly useful for brief interventions and when clients present with concrete, goal-oriented concerns. SFBT is strengths-based and future-oriented.

## Motivational Interviewing (MI)

William Miller and Stephen Rollnick developed MI as a collaborative, goal-oriented communication style designed to strengthen personal motivation for change. The four processes of MI are engaging, focusing, evoking, and planning. Key skills include open-ended questions, affirmations, reflections, and summaries (OARS). MI is particularly effective for substance use disorders and any situation where ambivalence about change is present. The Stages of Change model (precontemplation, contemplation, preparation, action, maintenance) often accompanies MI.`
  },
  {
    id: "ethics-professional-practice",
    title: "Ethics & Professional Practice",
    domain: "Ethics & Professional Practice",
    icon: "Scale",
    description: "Study the ACA Code of Ethics, confidentiality requirements, mandated reporting, and dual relationships.",
    keyConcepts: [
      "ACA Code of Ethics (2014) — key sections",
      "Confidentiality and its limits",
      "Informed consent requirements",
      "Dual/multiple relationships",
      "Mandated reporting obligations",
      "Duty to warn (Tarasoff)",
      "Scope of practice and referral",
      "Cultural competence as ethical obligation"
    ],
    videoPlaceholder: true,
    content: `## Ethics and Professional Practice on the NCMHCE

Ethical reasoning is woven throughout the NCMHCE. Rather than testing ethics in isolation, the exam presents ethical dilemmas embedded within clinical simulations. You must recognize ethical issues, apply the ACA Code of Ethics, and select the most appropriate course of action within the context of client care.

## ACA Code of Ethics (2014)

The American Counseling Association (ACA) Code of Ethics is the primary ethical framework for professional counselors. Key sections include: Section A (The Counseling Relationship), Section B (Confidentiality and Privacy), Section C (Professional Responsibility), Section D (Relationships with Other Professionals), Section F (Supervision, Training, and Teaching), and Section H (Distance Counseling, Technology, and Social Media). For the NCMHCE, Sections A, B, and C are most frequently tested.

## Confidentiality and Its Limits

Confidentiality is the cornerstone of the therapeutic relationship. However, counselors must understand the legal and ethical exceptions: danger to self (suicidal ideation with plan and intent), danger to others (duty to warn per Tarasoff v. Regents), suspected child abuse or neglect (mandated reporting), suspected elder abuse, court orders, and when the client provides written consent. On the NCMHCE, you may be tested on your ability to recognize when a confidentiality exception applies and what steps to take.

## Informed Consent

Informed consent is both an ethical requirement and a legal document. It should include: the nature and goals of counseling, the counselor's qualifications, limits of confidentiality, fees and billing practices, risks and benefits of treatment, alternatives to treatment, the client's right to refuse or terminate treatment, and emergency procedures. Informed consent is an ongoing process, not a one-time event. Special considerations apply for minors, clients with diminished capacity, and mandated clients.

## Dual and Multiple Relationships

The ACA Code of Ethics does not categorically prohibit all dual relationships but warns against those that could reasonably be expected to impair professional judgment or increase the risk of exploitation. Counselors should avoid relationships where objectivity could be compromised. When dual relationships are unavoidable (e.g., in rural communities), counselors should take steps to manage boundaries and document their decision-making process.

## Mandated Reporting and Duty to Warn

Counselors are mandated reporters in all 50 states for suspected child abuse and neglect. The Tarasoff ruling established a duty to protect identifiable third parties from serious harm. The specific requirements vary by state, but the general principle is that when a client presents a credible threat to an identifiable person, the counselor must take reasonable steps to protect the potential victim, which may include warning the person, notifying law enforcement, or hospitalizing the client.`
  },
  {
    id: "crisis-intervention",
    title: "Crisis Intervention",
    domain: "Crisis Intervention",
    icon: "AlertTriangle",
    description: "Learn suicide assessment, safety planning, duty to warn, and crisis intervention strategies.",
    keyConcepts: [
      "Suicide risk assessment (Columbia Protocol, SAD PERSONS)",
      "Safety planning intervention",
      "Lethal means counseling",
      "Crisis stabilization techniques",
      "Duty to warn and protect",
      "Involuntary hospitalization criteria",
      "Trauma-informed crisis response",
      "De-escalation strategies"
    ],
    videoPlaceholder: true,
    content: `## Crisis Intervention on the NCMHCE

Crisis intervention is one of the most critical competencies tested on the NCMHCE. The exam frequently presents scenarios where clients are in acute distress, and your ability to recognize crisis indicators, assess risk, and implement appropriate interventions is essential. Missing a critical safety item in the Information Gathering section — such as failing to assess for suicidal ideation — is heavily penalized.

## Suicide Risk Assessment

Comprehensive suicide assessment includes evaluating: ideation (passive vs. active), plan (specificity, lethality, availability of means), intent (subjective desire to die), previous attempts (number, recency, lethality), risk factors (mental health diagnoses, substance use, recent losses, social isolation, access to lethal means, family history of suicide), and protective factors (reasons for living, social support, children, religious beliefs, therapeutic alliance). Validated tools include the Columbia Suicide Severity Rating Scale (C-SSRS) and the SAD PERSONS scale. On the NCMHCE, always assess suicide risk when clinical indicators are present.

## Safety Planning

The Safety Planning Intervention (SPI), developed by Stanley and Brown, is a brief intervention for individuals at risk of suicide. It includes six steps: (1) recognizing personal warning signs, (2) identifying internal coping strategies, (3) listing people and social settings that provide distraction, (4) identifying people to contact for help, (5) listing professionals and agencies to contact in crisis, and (6) making the environment safe by reducing access to lethal means. Safety plans should be collaborative, personalized, and written down for the client to keep.

## Lethal Means Counseling

Research consistently shows that reducing access to lethal means is one of the most effective suicide prevention strategies. Counselors should assess for access to firearms, medications, and other means. Lethal means counseling involves discussing safe storage of firearms (locked safe, trigger lock, temporary removal from home), securing medications, and addressing other accessible means. This conversation should be conducted sensitively and collaboratively with the client and, when appropriate, family members.

## Crisis Stabilization and De-escalation

When a client presents in acute crisis, the immediate goals are ensuring safety, reducing acute distress, and restoring a sense of control. Key de-escalation strategies include: maintaining a calm, non-threatening demeanor; using open-ended questions; validating the client's emotional experience; identifying immediate needs; and helping the client access coping resources. Grounding techniques (5-4-3-2-1 sensory exercise, deep breathing, progressive muscle relaxation) can help reduce acute distress.

## When to Hospitalize

Involuntary psychiatric hospitalization (also called civil commitment or involuntary hold) is appropriate when a client presents an imminent danger to themselves or others and is unwilling or unable to engage in voluntary treatment. The specific legal criteria vary by state, but generally require evidence of: mental illness, dangerousness (to self or others), and inability to care for oneself. Counselors should be familiar with their state's procedures for initiating an involuntary hold.`
  },
  {
    id: "counselor-attributes",
    title: "Counselor Attributes",
    domain: "Counselor Attributes",
    icon: "Heart",
    description: "Develop therapeutic alliance skills, cultural competence, and professional self-awareness.",
    keyConcepts: [
      "Therapeutic alliance and working relationship",
      "Unconditional positive regard",
      "Empathic understanding",
      "Congruence and genuineness",
      "Cultural competence and humility",
      "Self-awareness and countertransference",
      "Professional boundaries",
      "Multicultural counseling competencies"
    ],
    videoPlaceholder: true,
    content: `## Counselor Attributes and Core Competencies

The NCMHCE assesses not just what you know, but how you would practice as a counselor. The Counselor Attributes and Core Competencies domain evaluates your understanding of the therapeutic relationship, cultural competence, professional self-awareness, and the interpersonal skills essential to effective counseling.

## The Therapeutic Alliance

Research consistently identifies the therapeutic alliance as one of the strongest predictors of positive treatment outcomes, regardless of theoretical orientation. The alliance consists of three components: agreement on therapeutic goals, agreement on tasks of therapy, and the emotional bond between counselor and client. On the NCMHCE, questions about counselor attributes often test your understanding of how to build, maintain, and repair the therapeutic alliance. Ruptures in the alliance (disagreements, misunderstandings, or emotional disconnections) are normal and, when repaired effectively, can actually strengthen the relationship.

## Core Conditions (Rogers)

Carl Rogers identified three core conditions as necessary and sufficient for therapeutic change: unconditional positive regard (accepting the client without judgment), empathic understanding (accurately perceiving the client's internal experience and communicating that understanding), and congruence (being genuine and authentic in the therapeutic relationship). These conditions form the foundation of effective counseling across all theoretical orientations.

## Cultural Competence and Humility

Cultural competence involves awareness (of one's own cultural values and biases), knowledge (of diverse cultural worldviews and practices), and skills (the ability to adapt counseling approaches to be culturally responsive). Cultural humility goes further, emphasizing an ongoing commitment to self-reflection, recognizing power dynamics in the therapeutic relationship, and approaching each client as the expert on their own cultural experience. The NCMHCE frequently presents cases involving cultural considerations — including race, ethnicity, gender identity, sexual orientation, socioeconomic status, disability, and religious/spiritual beliefs.

## Self-Awareness and Countertransference

Professional self-awareness is the ongoing practice of examining one's own emotional reactions, biases, assumptions, and limitations. Countertransference — the counselor's emotional reactions to the client that are influenced by the counselor's own unresolved issues — is a normal part of the therapeutic process but must be managed effectively. Strategies for managing countertransference include personal therapy, regular supervision, journaling, and mindfulness practices. On the NCMHCE, you may encounter scenarios where recognizing and managing countertransference is essential to providing ethical and effective care.

## Professional Boundaries

Maintaining appropriate professional boundaries protects both the client and the counselor. Boundary issues can include self-disclosure (sharing too much or too little), touch, gift-giving, social media connections, and dual relationships. Effective boundary management requires ongoing self-reflection, consultation with supervisors or colleagues, and clear communication with clients about the nature and limits of the counseling relationship.`
  }
];
