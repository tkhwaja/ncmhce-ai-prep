import type { NCEFlashcardDeck } from "./types";

/**
 * Sample NCE flashcard decks.
 *
 * Each deck maps to one NCE domain. The shape matches the existing flashcard
 * format so the same study UI and spaced-repetition logic can be reused.
 */

export const nceFlashcardDecks: NCEFlashcardDeck[] = [
  {
    id: "nce-flash-ethics",
    name: "Ethics & Professional Practice",
    icon: "flash-ethical-codes",
    domain: "Professional Counseling Orientation and Ethical Practice",
    cards: [
      {
        id: "nce-flash-ethics-1",
        front: "What are the five foundational principles of the ACA Code of Ethics?",
        back: "Autonomy, nonmaleficence, beneficence, justice, fidelity.",
      },
      {
        id: "nce-flash-ethics-2",
        front: "When is breaking confidentiality ethically and legally required?",
        back: "Imminent danger to self or others, abuse of vulnerable populations, court order, and in some cases supervision. Always document and inform clients of limits in advance.",
      },
    ],
  },
  {
    id: "nce-flash-diversity",
    name: "Social & Cultural Diversity",
    icon: "flash-theories",
    domain: "Social and Cultural Diversity",
    cards: [
      {
        id: "nce-flash-diversity-1",
        front: "What is cultural encapsulation?",
        back: "Being trapped in one's own cultural assumptions and unable to perceive reality from another's cultural frame (Wrenn).",
      },
      {
        id: "nce-flash-diversity-2",
        front: "What is the difference between cultural competence and cultural humility?",
        back: "Cultural competence suggests an endpoint of knowledge; cultural humility is a lifelong stance of self-reflection, learning, and power-awareness.",
      },
    ],
  },
  {
    id: "nce-flash-development",
    name: "Human Growth & Development",
    icon: "flash-dsm",
    domain: "Human Growth and Development",
    cards: [
      {
        id: "nce-flash-dev-1",
        front: "What is Erikson's crisis for adolescence?",
        back: "Identity vs. role confusion.",
      },
      {
        id: "nce-flash-dev-2",
        front: "What are Piaget's four stages of cognitive development?",
        back: "Sensorimotor, preoperational, concrete operational, formal operational.",
      },
    ],
  },
  {
    id: "nce-flash-career",
    name: "Career Development",
    icon: "flash-modalities",
    domain: "Career Development",
    cards: [
      {
        id: "nce-flash-career-1",
        front: "What are the six RIASEC types in Holland's theory?",
        back: "Realistic, Investigative, Artistic, Social, Enterprising, Conventional.",
      },
      {
        id: "nce-flash-career-2",
        front: "In Super's theory, what changes over the lifespan?",
        back: "Self-concept. Career choices reflect the evolving self-concept across life roles and stages.",
      },
    ],
  },
  {
    id: "nce-flash-helping",
    name: "Counseling & Helping Relationships",
    icon: "flash-crisis",
    domain: "Counseling and Helping Relationships",
    cards: [
      {
        id: "nce-flash-helping-1",
        front: "What are Rogers's three core conditions?",
        back: "Empathy, unconditional positive regard, and congruence (genuineness).",
      },
      {
        id: "nce-flash-helping-2",
        front: "What does OARS stand for in Motivational Interviewing?",
        back: "Open questions, Affirmations, Reflections, Summaries.",
      },
    ],
  },
  {
    id: "nce-flash-group",
    name: "Group Counseling & Group Work",
    icon: "flash-assessment",
    domain: "Group Counseling and Group Work",
    cards: [
      {
        id: "nce-flash-group-1",
        front: "What is universality in Yalom's curative factors?",
        back: "Members feel less alone when they realize others share similar struggles, thoughts, or feelings.",
      },
      {
        id: "nce-flash-group-2",
        front: "What are Tuckman's five group stages?",
        back: "Forming, storming, norming, performing, adjourning.",
      },
    ],
  },
  {
    id: "nce-flash-assessment",
    name: "Assessment & Testing",
    icon: "flash-assessment",
    domain: "Assessment and Testing",
    cards: [
      {
        id: "nce-flash-assess-1",
        front: "What is the difference between reliability and validity?",
        back: "Reliability = consistency of measurement. Validity = whether the test measures what it claims to measure.",
      },
      {
        id: "nce-flash-assess-2",
        front: "What does the MMPI-2 F scale measure?",
        back: "Infrequency or unusual responding. High scores may indicate random responding, exaggeration, or confusion.",
      },
    ],
  },
  {
    id: "nce-flash-research",
    name: "Research & Program Evaluation",
    icon: "flash-theories",
    domain: "Research and Program Evaluation",
    cards: [
      {
        id: "nce-flash-research-1",
        front: "What does a p-value below .05 indicate?",
        back: "Statistical significance — the result is unlikely to have occurred by chance under the null hypothesis.",
      },
      {
        id: "nce-flash-research-2",
        front: "What is evidence-based practice?",
        back: "Integrating the best available research with clinical expertise and client values and preferences.",
      },
    ],
  },
];
