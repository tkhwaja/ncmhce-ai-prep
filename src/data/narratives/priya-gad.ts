import type { Narrative } from "./types";

// Placeholder seed case. Real content will be supplied separately.
export const priyaGad: Narrative = {
  id: "priya-gad",
  title: "Priya — Generalized Anxiety Disorder",
  category: "Anxiety Disorders",
  difficulty: "Intermediate",
  minutesPerSection: 20,
  clientInfo: {
    age: 29,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Woman",
    pronouns: "she/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "South Asian (Indian-American)",
    relationshipStatus: "Engaged, living with partner",
    setting: "Outpatient community mental health clinic",
    payment: "Private insurance (PPO)",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Generalized Anxiety Disorder (provisional)",
  },
  presentingProblem:
    "Priya is a 29-year-old software engineer presenting with persistent, excessive worry about work performance, her upcoming wedding, and her parents' health for the past 8 months. She reports difficulty falling asleep, muscle tension in her shoulders and jaw, irritability, and difficulty concentrating during meetings. She describes feeling 'on edge most days' and says the worry feels 'uncontrollable.' She denies panic attacks but notes increasing avoidance of work presentations.",
  mentalStatusObservation:
    "Client appears her stated age, well-groomed, and dressed appropriately. She is cooperative and engaged but speaks rapidly. Eye contact is appropriate. Mood is described as 'anxious'; affect is congruent and mildly restricted. Thought process is linear and goal-directed; thought content reveals worry themes but no SI/HI, no perceptual disturbances. Cognition grossly intact. Insight and judgment are good.",
  familyHistory:
    "Mother has a history of treated depression and anxiety. Father has type 2 diabetes and hypertension. One younger sister, no known mental health history. Client describes her family as 'close but high-pressure,' with strong cultural emphasis on academic and career achievement.",
  workHistory:
    "Bachelor's degree in computer science. Currently a senior software engineer at a mid-sized tech company for 4 years. Recently promoted, with new responsibilities including leading team meetings and presentations. She enjoys her technical work but reports that the visibility of the new role has 'made the worry worse.'",
  intakeSessionSummary:
    "During intake, Priya identified work-related anxiety as her top concern, followed by wedding-planning stress and worry about her father's recent hypertension diagnosis. She denies any history of trauma, substance use beyond occasional social drinking (1–2 drinks/week), and has no prior mental health treatment. She agreed to a course of weekly individual counseling and completed a GAD-7 (score: 16, severe) and PHQ-9 (score: 6, mild). The counselor provided psychoeducation about anxiety and obtained informed consent.",
  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "", // first section uses intake summary above; no extra narrative
      questions: [
        {
          id: "priya-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Based on the information gathered during intake, which DSM-5-TR diagnosis is most appropriate as a provisional diagnosis?",
          options: [
            "Adjustment Disorder with Anxiety",
            "Generalized Anxiety Disorder",
            "Panic Disorder",
            "Social Anxiety Disorder",
          ],
          correctAnswer: 1,
          explanation:
            "Priya endorses excessive, uncontrollable worry across multiple domains for more than 6 months, with associated symptoms (sleep disturbance, muscle tension, irritability, difficulty concentrating). This meets DSM-5-TR criteria for Generalized Anxiety Disorder. Adjustment Disorder is ruled out by duration; Panic Disorder requires recurrent panic attacks; Social Anxiety Disorder centers on fear of social evaluation, not generalized worry.",
        },
        {
          id: "priya-q2",
          questionNumber: 2,
          domain: "Professional practice and ethics",
          stem: "Which of the following is the most important ethical action for the counselor to complete during the first session?",
          options: [
            "Begin exposure-based interventions immediately",
            "Obtain informed consent including limits of confidentiality",
            "Contact the client's primary care physician",
            "Recommend an immediate psychiatric referral",
          ],
          correctAnswer: 1,
          explanation:
            "Per the ACA Code of Ethics (A.2), informed consent — including the nature of services, fees, risks, benefits, and limits of confidentiality — must be reviewed at the outset of the counseling relationship. Other actions may follow once consent is established.",
        },
        {
          id: "priya-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "Priya states, 'I just feel like I'm letting everyone down.' Which counselor response best reflects accurate empathy?",
          options: [
            "'You shouldn't feel that way — you've accomplished so much.'",
            "'It sounds like the pressure to meet everyone's expectations feels overwhelming right now.'",
            "'Have you tried writing down your accomplishments?'",
            "'That's a common cognitive distortion called personalization.'",
          ],
          correctAnswer: 1,
          explanation:
            "A reflective, empathic response that names the client's underlying experience builds rapport and demonstrates accurate understanding. Reassurance, advice-giving, or technical labeling early in treatment can shut down exploration.",
        },
        {
          id: "priya-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: "Which assessment instrument is most appropriate for monitoring symptom change for Priya across treatment?",
          options: ["MMPI-2", "GAD-7", "Beck Depression Inventory-II", "PCL-5"],
          correctAnswer: 1,
          explanation:
            "The GAD-7 is a brief, validated self-report scale designed specifically to screen for and measure severity of generalized anxiety symptoms over the past two weeks, making it appropriate for ongoing monitoring.",
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      sectionNarrative:
        "Three weeks later, Priya reports a small reduction in physical tension after starting daily diaphragmatic breathing. However, she had a difficult week: she received critical feedback on a project, and her father was briefly hospitalized for chest pain (later determined to be non-cardiac). She reports increased worry, difficulty concentrating, and one night where she stayed up until 3 AM 'going over everything that could go wrong.' She asks the counselor, 'Am I ever going to feel normal again?' Her GAD-7 score this week is 14.",
      questions: [
        {
          id: "priya-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: "Which evidence-based treatment is most appropriate to introduce as the primary intervention for Priya's GAD?",
          options: [
            "Eye Movement Desensitization and Reprocessing (EMDR)",
            "Cognitive Behavioral Therapy with cognitive restructuring and worry exposure",
            "Long-term psychodynamic therapy",
            "Dialectical Behavior Therapy skills group",
          ],
          correctAnswer: 1,
          explanation:
            "CBT — particularly cognitive restructuring combined with imaginal/worry exposure and relaxation training — has the strongest empirical support as a first-line treatment for GAD per APA practice guidelines.",
        },
        {
          id: "priya-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "Priya reports staying up at night 'going over everything that could go wrong.' Which CBT-based intervention most directly targets this pattern?",
          options: [
            "Behavioral activation",
            "Worry postponement and scheduled worry time",
            "Mindfulness-based body scan",
            "Systematic desensitization hierarchy",
          ],
          correctAnswer: 1,
          explanation:
            "Stimulus-control techniques such as worry postponement and a scheduled 'worry time' are evidence-based CBT interventions that directly target chronic, intrusive worry — particularly nighttime rumination.",
        },
        {
          id: "priya-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: "When Priya asks 'Am I ever going to feel normal again?', the counselor's best response is to:",
          options: [
            "Promise her that she will fully recover within 12 sessions.",
            "Validate her discouragement, normalize setbacks in recovery, and collaboratively review progress so far.",
            "Redirect her to the agenda for today's session.",
            "Suggest she consider medication as a more reliable path.",
          ],
          correctAnswer: 1,
          explanation:
            "Validation paired with realistic, hope-instilling feedback supports the therapeutic alliance without making promises that exceed the counselor's scope. Reviewing progress reinforces self-efficacy.",
        },
        {
          id: "priya-q8",
          questionNumber: 8,
          domain: "Treatment planning",
          stem: "Given Priya's GAD-7 score of 14 and ongoing functional impairment, which adjunct recommendation is most appropriate at this stage?",
          options: [
            "Refer for psychiatric evaluation to consider SSRI medication.",
            "Recommend immediate inpatient hospitalization.",
            "Discontinue counseling until symptoms remit.",
            "Refer to a 12-step program.",
          ],
          correctAnswer: 0,
          explanation:
            "Combined CBT plus SSRI is a well-supported approach for moderate-to-severe GAD when monotherapy with psychotherapy is insufficient. A psychiatric referral allows the client to make an informed decision about pharmacotherapy. Hospitalization is not indicated.",
        },
        {
          id: "priya-q9",
          questionNumber: 9,
          domain: "Professional practice and ethics",
          stem: "Priya's fiancé calls the office and asks how she is doing in counseling. The counselor should:",
          options: [
            "Provide a brief progress update since they live together.",
            "Confirm or deny that Priya is a client only if asked directly.",
            "Decline to confirm or deny that Priya is a client without her written authorization.",
            "Transfer the call to Priya's voicemail.",
          ],
          correctAnswer: 2,
          explanation:
            "Confidentiality (ACA A.7, B.1) prohibits the counselor from confirming or denying a client relationship — let alone disclosing information — without written authorization from the client.",
        },
      ],
    },
    {
      sessionLabel: "Tenth session",
      sectionNarrative:
        "Six weeks later, Priya has completed worry-postponement practice, structured cognitive-restructuring exercises, and three brief in-session exposures (delivering a short presentation to the counselor and recording herself). She started sertraline 4 weeks ago and reports the side effects have stabilized. Her GAD-7 score is now 7 (mild range). Wedding planning is mostly complete. She tells the counselor, 'I want to start thinking about wrapping up — I feel like I have my tools.' She also discloses that her sister recently confided suicidal thoughts and asks the counselor for advice on how to help.",
      questions: [
        {
          id: "priya-q10",
          questionNumber: 10,
          domain: "Treatment planning",
          stem: "Which is the most appropriate next step in treatment planning given Priya's progress?",
          options: [
            "Terminate immediately at the next session.",
            "Continue weekly sessions indefinitely.",
            "Begin a collaborative termination process including relapse-prevention planning and a tapered session schedule.",
            "Refer Priya to a different counselor for a fresh perspective.",
          ],
          correctAnswer: 2,
          explanation:
            "When clinical goals are largely met, ethical termination involves collaborative planning, relapse prevention, and often a gradual taper (e.g., biweekly, then monthly) — not abrupt termination.",
        },
        {
          id: "priya-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: "Which intervention is most central to relapse prevention for GAD?",
          options: [
            "Identifying early warning signs and rehearsing coping strategies.",
            "Increasing the dose of SSRI prophylactically.",
            "Avoiding all anxiety-provoking situations.",
            "Discontinuing all self-monitoring.",
          ],
          correctAnswer: 0,
          explanation:
            "Relapse-prevention plans focus on recognizing early warning signs, rehearsing learned coping strategies, and identifying when to re-engage support — empowering the client to self-manage future stressors.",
        },
        {
          id: "priya-q12",
          questionNumber: 12,
          domain: "Professional practice and ethics",
          stem: "Priya discloses that her sister recently confided suicidal thoughts and asks the counselor for advice on how to help. The counselor should:",
          options: [
            "Offer to call the sister directly to assess risk.",
            "Provide Priya with general psychoeducation on warning signs, safe-messaging, and crisis resources (e.g., 988), and encourage the sister to seek her own provider.",
            "Decline to discuss the topic since the sister is not the client.",
            "Diagnose the sister based on Priya's description.",
          ],
          correctAnswer: 1,
          explanation:
            "It is within scope to provide psychoeducation, safe-messaging guidance, and crisis resources to a client about a third party. The counselor should not assess, diagnose, or treat someone who is not the client; the sister should be encouraged to access her own care.",
        },
        {
          id: "priya-q13",
          questionNumber: 13,
          domain: "Intake/assessment/diagnosis",
          stem: "Priya's GAD-7 has dropped from 16 to 7. Which best describes this change?",
          options: [
            "Symptom remission",
            "Clinically significant improvement to mild range",
            "No meaningful change",
            "Symptom exacerbation",
          ],
          correctAnswer: 1,
          explanation:
            "A drop of 5 or more points on the GAD-7 generally reflects clinically meaningful change. A score of 7 falls in the mild range, indicating substantial — but not yet full — remission.",
        },
        {
          id: "priya-q14",
          questionNumber: 14,
          domain: "Core counseling attributes",
          stem: "Which counselor attribute is most important during the termination phase?",
          options: [
            "Maintaining strict professional distance",
            "Genuineness and honoring the client's growth while supporting autonomy",
            "Detailed self-disclosure about the counselor's own experiences",
            "Strict adherence to a written script",
          ],
          correctAnswer: 1,
          explanation:
            "Genuine acknowledgement of the client's progress, paired with respect for client autonomy, supports a healthy termination and reinforces the gains made in treatment.",
        },
      ],
    },
  ],
};
