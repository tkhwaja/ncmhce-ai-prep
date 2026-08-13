import type { NCELibraryModule } from "./types";

/**
 * Sample NCE learning-library modules.
 *
 * Each module maps to one of the eight NCE work-behavior domains. The format
 * mirrors the existing library module shape so the same renderer and search
 * logic can be reused.
 */

export const nceLibraryModules: NCELibraryModule[] = [
  {
    id: "nce-ethics",
    title: "Professional Counseling Orientation & Ethical Practice",
    category: "Professional Counseling Orientation and Ethical Practice",
    icon: "Scale",
    description:
      "Foundational ethical principles, professional identity, counseling scope of practice, and the ACA Code of Ethics as they appear on the NCE.",
    keyConcepts: [
      "Autonomy, nonmaleficence, beneficence, justice, fidelity",
      "Informed consent and confidentiality limits",
      "Mandatory vs. permissive reporting",
      "Scope of practice and competence",
      "Professional advocacy and identity",
    ],
    tags: ["ethics", "ACA", "professionalism", "boundaries"],
    content: `## Overview

The NCE treats professional orientation and ethics as the foundation of counseling practice. Expect questions on the ACA Code of Ethics, scope of practice, credentialing, and the five guiding principles.

## Key Concepts

- **Autonomy** — respect the client's right to self-determination.
- **Nonmaleficence** — do no harm.
- **Beneficence** — promote client welfare.
- **Justice** — provide equal access and fair treatment.
- **Fidelity** — keep commitments and maintain trust.

## How it shows up on the NCE

Questions often present a scenario and ask what the counselor should do first. The first step is usually to protect welfare, consult or document, and act within scope.

## Common exam traps

- Choosing the most clinically elegant intervention before checking whether it is within the counselor's scope.
- Confusing mandatory reporting requirements with general confidentiality.
- Assuming a minor has the same confidentiality rights as an adult in every state.

## Quick memory anchor

When stuck, ask: "What protects the client, respects autonomy, and stays within my scope?"`,
  },
  {
    id: "nce-diversity",
    title: "Social & Cultural Diversity",
    category: "Social and Cultural Diversity",
    icon: "Heart",
    description:
      "Cultural identity, privilege, oppression, advocacy, and culturally responsive counseling strategies for the NCE.",
    keyConcepts: [
      "Cultural encapsulation and ethnocentrism",
      "Cultural humility vs. cultural competence",
      "Intersectionality and multiple identities",
      "Multicultural counseling competencies",
      "Social justice and advocacy",
    ],
    tags: ["culture", "diversity", "social justice", "advocacy"],
    content: `## Overview

This domain tests your ability to recognize cultural context, avoid imposing your own worldview, and advocate for clients from marginalized groups.

## Key Concepts

- **Cultural encapsulation** — inability to perceive reality outside one's own cultural assumptions.
- **Cultural humility** — lifelong commitment to self-reflection and learning from clients.
- **Intersectionality** — overlapping identities such as race, gender, class, and sexual orientation shape experience.

## How it shows up on the NCE

Look for questions about worldview, language, spirituality, family structure, and systemic barriers. The best answer usually honors the client's culture rather than correcting it.

## Common exam traps

- Treating all members of a cultural group as identical.
- Assuming a client's problem is primarily cultural when it may be universal.
- Failing to consult or refer when a cultural gap exceeds your competence.

## Quick memory anchor

Start with curiosity, not certainty. The client is the expert on their own culture.`,
  },
  {
    id: "nce-human-development",
    title: "Human Growth & Development",
    category: "Human Growth and Development",
    icon: "Lightbulb",
    description:
      "Lifespan development, theories of learning and personality, and developmental crises relevant to the NCE.",
    keyConcepts: [
      "Erikson's psychosocial stages",
      "Piaget's cognitive development",
      "Attachment theory",
      "Maslow's hierarchy of needs",
      "Lifespan transitions and crises",
    ],
    tags: ["development", "lifespan", "Erikson", "attachment"],
    content: `## Overview

Human growth and development questions cover typical and atypical development across the lifespan, including major theories and age-appropriate tasks.

## Key Concepts

- **Erikson** — trust vs. mistrust (infancy), autonomy vs. shame (toddler), initiative vs. guilt (preschool), industry vs. inferiority (school age), identity vs. role confusion (adolescence), intimacy vs. isolation (young adulthood), generativity vs. stagnation (middle adulthood), integrity vs. despair (older adulthood).
- **Piaget** — sensorimotor, preoperational, concrete operational, formal operational.
- **Attachment** — secure, anxious, avoidant, disorganized patterns.

## How it shows up on the NCE

Questions often describe a client at a particular age and ask which developmental task or crisis is most relevant.

## Common exam traps

- Confusing Erikson's stages with Piaget's stages.
- Assuming chronological age always matches developmental stage.
- Over-pathologizing normative life transitions.

## Quick memory anchor

Match the age to the crisis, then match the crisis to the intervention.`,
  },
  {
    id: "nce-career",
    title: "Career Development",
    category: "Career Development",
    icon: "ClipboardCheck",
    description:
      "Career theories, assessment tools, and decision-making models used in career counseling for the NCE.",
    keyConcepts: [
      "Holland's RIASEC model",
      "Super's life-span, life-space theory",
      "Krumboltz's social learning theory",
      "Work values and barriers",
      "Career decision-making models",
    ],
    tags: ["career", "Holland", "Super", "RIASEC"],
    content: `## Overview

Career counseling questions assess your knowledge of theories, assessment instruments, and the cultural and systemic factors that influence career choice.

## Key Concepts

- **Holland RIASEC** — Realistic, Investigative, Artistic, Social, Enterprising, Conventional.
- **Super** — self-concept changes over the lifespan; roles interact across life spaces.
- **Krumboltz** — career choice is shaped by learning experiences, modeling, and reinforcement.

## How it shows up on the NCE

Expect questions that ask which theory explains a client's career indecision or which assessment matches a client's interests.

## Common exam traps

- Confusing interest inventories with aptitude or personality tests.
- Ignoring the influence of family, culture, and economy on career choice.
- Choosing the most sophisticated theory when a simpler one fits the scenario.

## Quick memory anchor

Holland = person-environment fit; Super = self-concept over time; Krumboltz = learning experiences.`,
  },
  {
    id: "nce-helping-relationships",
    title: "Counseling & Helping Relationships",
    category: "Counseling and Helping Relationships",
    icon: "BookOpen",
    description:
      "Theories, techniques, and relationship factors that support effective counseling for the NCE.",
    keyConcepts: [
      "Person-centered core conditions",
      "Cognitive behavioral techniques",
      "Motivational interviewing",
      "The working alliance",
      "Transference and countertransference",
    ],
    tags: ["theories", "CBT", "MI", "alliance"],
    content: `## Overview

This domain covers the counseling relationship itself: how to build rapport, select interventions, and respond ethically and empathically.

## Key Concepts

- **Rogers's core conditions** — empathy, unconditional positive regard, congruence.
- **CBT** — thoughts, feelings, and behaviors are interconnected; change one to change the others.
- **Motivational interviewing** — elicit change talk, roll with resistance, support self-efficacy.

## How it shows up on the NCE

Scenario questions often ask what the counselor should say or do next. The best answer usually strengthens the alliance and respects client autonomy.

## Common exam traps

- Giving advice before fully understanding the client's perspective.
- Using a complex technique when simple reflection would be more appropriate.
- Missing signs of countertransference that should be processed in supervision.

## Quick memory anchor

Relationship first, technique second.`,
  },
  {
    id: "nce-group",
    title: "Group Counseling & Group Work",
    category: "Group Counseling and Group Work",
    icon: "Users",
    description:
      "Group dynamics, stages, leadership styles, and Yalom's curative factors for the NCE.",
    keyConcepts: [
      "Yalom's curative factors",
      "Group stages: forming, storming, norming, performing, adjourning",
      "Group leader roles and styles",
      "Screening and preparation",
      "Ethical issues in groups",
    ],
    tags: ["group", "Yalom", "stages", "leadership"],
    content: `## Overview

Group counseling questions test your understanding of how groups develop, what makes them effective, and how leaders manage ethical and interpersonal dynamics.

## Key Concepts

- **Yalom's curative factors** — universality, altruism, instillation of hope, imparting information, corrective recapitulation, development of socializing techniques, imitative behavior, interpersonal learning, group cohesiveness, catharsis, existential factors.
- **Group stages** — forming, storming, norming, performing, adjourning (Tuckman).
- **Ethical issues** — confidentiality in a group setting, informed consent, leader competence.

## How it shows up on the NCE

Look for questions about member conflict, leader interventions, and stage-appropriate responses.

## Common exam traps

- Treating a group as a collection of individual sessions.
- Choosing a directive leader response when the group needs to process its own dynamics.
- Forgetting that confidentiality cannot be guaranteed in a group.

## Quick memory anchor

Groups heal through connection, not just content.`,
  },
  {
    id: "nce-assessment",
    title: "Assessment & Testing",
    category: "Assessment and Testing",
    icon: "ClipboardCheck",
    description:
      "Test selection, administration, interpretation, and ethical use of assessment tools for the NCE.",
    keyConcepts: [
      "Reliability, validity, standardization",
      "Intelligence, achievement, and personality tests",
      "Behavioral assessment",
      "Cultural fairness and bias",
      "Reporting and feedback",
    ],
    tags: ["assessment", "testing", "validity", "reliability"],
    content: `## Overview

Assessment questions require you to choose, administer, and interpret instruments appropriately while considering validity, reliability, and cultural fairness.

## Key Concepts

- **Reliability** — consistency of measurement.
- **Validity** — whether the test measures what it claims to measure.
- **Standardization** — uniform administration and scoring.
- **Cultural fairness** — instruments should be normed on populations similar to the client.

## How it shows up on the NCE

Questions may describe a client and ask which assessment is most appropriate, or may present a score and ask how to interpret it ethically.

## Common exam traps

- Using a test outside its intended population or purpose.
- Confusing reliability with validity.
- Failing to explain results in language the client understands.

## Quick memory anchor

Reliable = consistent. Valid = accurate for its purpose.`,
  },
  {
    id: "nce-research",
    title: "Research & Program Evaluation",
    category: "Research and Program Evaluation",
    icon: "FileText",
    description:
      "Research methods, statistics, evidence-based practice, and program evaluation for the NCE.",
    keyConcepts: [
      "Quantitative vs. qualitative designs",
      "Experimental, quasi-experimental, and correlational research",
      "Descriptive and inferential statistics",
      "Evidence-based practice",
      "Program evaluation models",
    ],
    tags: ["research", "statistics", "EBP", "evaluation"],
    content: `## Overview

This domain tests your ability to consume and apply research, understand basic statistics, and evaluate counseling programs.

## Key Concepts

- **Quantitative** — numerical data, hypothesis testing, generalizability.
- **Qualitative** — themes, meanings, context-rich understanding.
- **Evidence-based practice** — integrate research, clinical expertise, and client values.
- **Program evaluation** — assess outcomes, processes, and stakeholder needs.

## How it shows up on the NCE

Expect questions on research design, interpreting p-values and effect sizes, and applying findings to clinical decisions.

## Common exam traps

- Confusing correlation with causation.
- Treating statistical significance as proof of practical importance.
- Selecting a qualitative design when the goal is generalizable comparison.

## Quick memory anchor

Significance tells you the result is unlikely to be chance; effect size tells you whether it matters.`,
  },
];
