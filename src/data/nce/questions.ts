import type { NCEQuestion } from "./types";
import { nceQuestionsBatch001 } from "./questions-batch-001";
import { nceQuestionsBatch002 } from "./questions-batch-002";
import { nceQuestionsBatch003 } from "./questions-batch-003";
import { nceQuestionsBatch004 } from "./questions-batch-004";
import { nceQuestionsBatch005 } from "./questions-batch-005";
import { nceQuestionsBatch006 } from "./questions-batch-006";
import { nceQuestionsBatch007 } from "./questions-batch-007";
import { nceQuestionsBatch008 } from "./questions-batch-008";
import { nceQuestionsBatch009 } from "./questions-batch-009";
import { nceQuestionsBatch010 } from "./questions-batch-010";

/**
 * Sample NCE question bank.
 *
 * This file demonstrates the exact format future uploads must follow.
 * Each item is domain-tagged, has a single correct answer, and includes
 * rationales for the correct and incorrect options.
 */

const sampleQuestions: NCEQuestion[] = [
  {
    id: "nce-q-001",
    domain: "Professional Counseling Orientation and Ethical Practice",
    stem: "A long-term client sends a friend request to a counselor on a personal social-media account. According to the ACA Code of Ethics, what is the counselor's most appropriate first response?",
    options: [
      "Accept the request but restrict the client to a professional-only list.",
      "Decline the request and discuss how dual relationships can impair objectivity and exploit the client.",
      "Accept the request because counseling has ended and six months have passed.",
      "Ignore the request to avoid making the client feel rejected.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "The ACA Code of Ethics (A.5.d) directs counselors to avoid nonprofessional interactions that could impair objectivity or exploit the client. Social-media friendships blur professional boundaries and are best addressed directly with the client.",
    optionRationales: [
      "Accepting the request creates a dual relationship and gives the client access to personal information.",
      "Correct. This response models clear boundaries and invites a transparent conversation about the therapeutic relationship.",
      "A six-month rule is not an ethical safeguard; even post-termination, social-media friendships can be problematic.",
      "Ignoring the request misses an opportunity to reinforce boundaries and process the client's request therapeutically.",
    ],
    difficulty: "Medium",
    tags: ["ethics", "boundaries", "dual relationships", "social media"],
  },
  {
    id: "nce-q-002",
    domain: "Social and Cultural Diversity",
    stem: "A counselor consistently interprets a client's behavior only through the counselor's own cultural values and fails to consider the client's worldview. This is best described as:",
    options: [
      "Cultural humility.",
      "Cultural encapsulation.",
      "Acculturation.",
      "Ethnocentrism.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Cultural encapsulation (Wrenn) refers to being trapped in one's own cultural assumptions and unable to perceive reality from another's cultural frame. It is a common barrier to culturally responsive counseling.",
    optionRationales: [
      "Cultural humility is the opposite: an ongoing commitment to self-reflection and learning from the client's culture.",
      "Correct. Cultural encapsulation means the counselor cannot step outside their own cultural bubble.",
      "Acculturation is the process of adapting to a new culture, not a counselor bias.",
      "Ethnocentrism involves judging other cultures as inferior; encapsulation is the inability to perceive outside one's own frame.",
    ],
    difficulty: "Medium",
    tags: ["culture", "diversity", "cultural encapsulation", "bias"],
  },
  {
    id: "nce-q-003",
    domain: "Human Growth and Development",
    stem: "According to Erikson's psychosocial theory, the central developmental crisis of adolescence is:",
    options: [
      "Trust vs. mistrust.",
      "Autonomy vs. shame and doubt.",
      "Initiative vs. guilt.",
      "Identity vs. role confusion.",
    ],
    correctAnswerIndex: 3,
    explanation:
      "Erikson's fifth stage, adolescence, centers on identity vs. role confusion. The adolescent's task is to develop a coherent sense of self, values, and direction.",
    optionRationales: [
      "Trust vs. mistrust is the crisis of infancy.",
      "Autonomy vs. shame and doubt is the crisis of early childhood.",
      "Initiative vs. guilt is the crisis of preschool years.",
      "Correct. Adolescents wrestle with who they are versus the confusion of competing roles and expectations.",
    ],
    difficulty: "Easy",
    tags: ["Erikson", "development", "adolescence", "identity"],
  },
  {
    id: "nce-q-004",
    domain: "Career Development",
    stem: "In Holland's RIASEC model, a client who prefers creative expression, values originality, and dislikes highly structured routines is most likely which type?",
    options: [
      "Realistic.",
      "Investigative.",
      "Artistic.",
      "Conventional.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Holland's Artistic type is characterized by creativity, self-expression, imagination, and a preference for unstructured environments.",
    optionRationales: [
      "Realistic types prefer hands-on, technical, or outdoor work.",
      "Investigative types enjoy research, analysis, and problem-solving.",
      "Correct. Artistic types thrive on creative, expressive, and nonconforming activities.",
      "Conventional types prefer structured, detail-oriented, and rule-based work.",
    ],
    difficulty: "Easy",
    tags: ["Holland", "RIASEC", "career theory", "personality"],
  },
  {
    id: "nce-q-005",
    domain: "Counseling and Helping Relationships",
    stem: "Which of the following is considered one of Rogers's three core conditions that are necessary and sufficient for therapeutic change?",
    options: [
      "Interpretation of unconscious conflict.",
      "Accurate empathic understanding.",
      "Direct advice giving.",
      "Behavioral homework assignments.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Rogers identified unconditional positive regard, empathic understanding, and congruence (genuineness) as the core conditions for client growth.",
    optionRationales: [
      "Interpretation is central to psychodynamic therapy, not person-centered therapy.",
      "Correct. Accurate empathic understanding is a core condition in Rogers's person-centered approach.",
      "Direct advice giving is generally inconsistent with the person-centered, non-directive stance.",
      "Homework is more characteristic of CBT than of Rogers's core conditions.",
    ],
    difficulty: "Easy",
    tags: ["Rogers", "person-centered", "empathy", "core conditions"],
  },
  {
    id: "nce-q-006",
    domain: "Group Counseling and Group Work",
    stem: "Yalom identified universality as a curative factor because it helps group members:",
    options: [
      "Feel less isolated by recognizing that others share similar struggles.",
      "Practice new behaviors in a safe environment.",
      "Receive direct interpretations from the group leader.",
      "Develop altruism by helping other members.",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Universality reduces shame and isolation by showing members that their problems, thoughts, and feelings are not unique.",
    optionRationales: [
      "Correct. Universality counters the sense of being alone with one's difficulties.",
      "Practicing new behaviors reflects the corrective recapitulation or behavioral rehearsal factors, not universality.",
      "Direct leader interpretations are not the focus of universality.",
      "Altruism is a separate curative factor involving helping others.",
    ],
    difficulty: "Medium",
    tags: ["Yalom", "group therapy", "curative factors", "universality"],
  },
  {
    id: "nce-q-007",
    domain: "Assessment and Testing",
    stem: "On the MMPI-2, which scale is designed to detect unusual or atypical patterns of responding that may invalidate the clinical profile?",
    options: [
      "Scale 2 (Depression).",
      "Scale 7 (Psychasthenia).",
      "The F (Infrequency) scale.",
      "The K (Correction) scale.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "The F scale is a validity scale that flags infrequent or unusual responding. Elevations may indicate random responding, exaggeration, or confusion.",
    optionRationales: [
      "Scale 2 is a clinical scale measuring depression, not a validity scale.",
      "Scale 7 is a clinical scale measuring anxiety and obsessive features.",
      "Correct. The F scale is a validity indicator for atypical response patterns.",
      "The K scale measures defensiveness or denial, not unusual responding per se.",
    ],
    difficulty: "Hard",
    tags: ["MMPI-2", "validity scales", "assessment", "personality testing"],
  },
  {
    id: "nce-q-008",
    domain: "Research and Program Evaluation",
    stem: "In a counseling research study, a p-value of .03 means that:",
    options: [
      "The effect size is large.",
      "There is a 97% probability the alternative hypothesis is true.",
      "The result is statistically significant at the conventional .05 alpha level.",
      "The finding has high practical significance for clinical practice.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A p-value less than the alpha level (commonly .05) means the observed result is unlikely under the null hypothesis and is therefore statistically significant. It does not indicate effect size or practical significance.",
    optionRationales: [
      "Effect size is a separate calculation and is not provided by the p-value.",
      "A p-value does not give the probability that a hypothesis is true.",
      "Correct. .03 is below the conventional .05 threshold, so the result is statistically significant.",
      "Practical/clinical significance depends on effect size and real-world relevance, not the p-value alone.",
    ],
    difficulty: "Medium",
    tags: ["research", "statistics", "p-value", "significance"],
  },
];

export const nceQuestions: NCEQuestion[] = [
  ...sampleQuestions,
  ...nceQuestionsBatch001,
  ...nceQuestionsBatch002,
  ...nceQuestionsBatch003,
  ...nceQuestionsBatch004,
  ...nceQuestionsBatch005,
  ...nceQuestionsBatch006,
  ...nceQuestionsBatch007,
  ...nceQuestionsBatch008,
  ...nceQuestionsBatch009,
  ...nceQuestionsBatch010,
];
