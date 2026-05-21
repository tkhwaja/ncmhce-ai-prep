import type { Narrative } from "./types";

export const andreMdd: Narrative = {
  id: "27-andre-mdd",
  title: `Andre — Major Depressive Disorder`,
  category: "Depressive Disorders",
  difficulty: "Intermediate",
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 41,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him",
    sexualOrientation: "Heterosexual",
    raceEthnicity: `Black/African American and Haitian American`,
    relationshipStatus: "Separated",
    setting: `Employee assistance program-linked outpatient counseling`,
    payment: `EAP sessions transitioning to private insurance`,
    typeOfCounseling: "Individual",
    provisionalDiagnosis: `Major Depressive Disorder, recurrent episode, moderate, with anxious distress: F33.1`,
  },

  presentingProblem: `You are a licensed mental health counselor providing outpatient counseling through an employee assistance program. Your client was referred after his supervisor noticed declining performance and encouraged him to use EAP sessions before formal disciplinary action occurred. The client stated, "I am not here because I want to talk about feelings. I am here because I cannot afford to lose my job."

The client is a 41-year-old Haitian American man who works as an operations supervisor for a public transit maintenance facility. He has held the position for 12 years and is known for being dependable, calm under pressure, and protective of his team. Over the past four months, he has been arriving late, missing documentation deadlines, forgetting small but important details, and withdrawing from coworkers. He stated, "I used to be the person everyone came to when the place was falling apart. Now I sit in the parking lot for twenty minutes trying to make myself walk inside."

The client reported depressed mood most days, loss of interest in activities he previously enjoyed, fatigue, difficulty concentrating, reduced appetite, early-morning waking, irritability, and feelings of worthlessness. He used to play dominoes with cousins on Friday nights, coach his son’s basketball drills, and cook large Sunday meals for family. He stated, "Now everything feels like work. Even answering a text feels like somebody put a brick in my hand." He has lost approximately 12 pounds over the past three months without trying.

The current episode began after several overlapping stressors. Six months ago, his wife of 15 years asked for a separation, stating that he had been emotionally unavailable for years. Two months later, his mother had a stroke and moved in with his older sister, who now expects the client to contribute financially and visit weekly. He also worries about his 13-year-old son, who has become quiet and angry since the separation. The client stated, "Everybody needs me steady. My wife, my son, my mother, my sister, my staff. I do not know where I am supposed to put the part of me that is not steady."

He reported a prior depressive episode in his late twenties after his father died suddenly of a heart attack. At that time, he isolated, drank more heavily for several months, and eventually improved without formal treatment. He denied any history of manic or hypomanic episodes, psychosis, psychiatric hospitalization, suicide attempts, or self-harm. He drinks two to three beers on some weekends and denied current substance misuse. He denied cannabis or other drugs.

When asked about suicidal ideation, the client paused and said, "I am not going to kill myself. I need to say that clearly. But sometimes on the Belt Parkway, I think if a truck hit me, at least I would not have to keep doing this." He denied intent, plan, preparatory behavior, or access to firearms. He stated that his son is his strongest protective factor. He said, "My boy already thinks I left him because I moved out. I would never leave him that way too."

The client described cultural and family pressure to remain strong. His mother, who immigrated from Haiti before he was born, often says, "A man carries his house on his back." He stated, "That sounds noble until your back gives out." He worries therapy means he has failed as a husband, father, son, and supervisor. At the same time, he appeared relieved when you reflected the amount he has been carrying and said quietly, "Nobody says it like that. They just ask what else I can handle." `,

  mentalStatusObservation: `Your client presented in work pants, a plain black jacket, and boots. Grooming and hygiene were adequate, though he appeared tired, with dark circles under his eyes. He was alert and oriented to person, place, time, and situation. Eye contact was intermittent at first and became more consistent as the session progressed. Speech was low in volume, normal in rate, and coherent. Mood was reported as "empty and aggravated." Affect was constricted and congruent, with brief tearfulness when discussing his son.

Psychomotor activity was slowed; he sat with shoulders rounded and hands clasped. Thought processes were linear and goal-directed. Thought content was notable for hopelessness, guilt, perceived failure in multiple roles, and passive thoughts of death without active suicidal intent. There was no evidence of delusions, hallucinations, or formal thought disorder. He denied homicidal ideation. He denied manic or hypomanic symptoms, including decreased need for sleep, elevated mood, increased goal-directed activity, impulsive spending, or grandiosity. Insight was fair; he recognized that his functioning has changed but minimized the emotional significance. Judgment was generally intact, though impaired by avoidance and delayed help-seeking. He denied current substance misuse. He reported poor sleep, reduced appetite, fatigue, and weight loss. He has not had a physical exam in over a year.`,

  familyHistory: `The client is the youngest of three siblings. His parents immigrated from Haiti in the 1970s and raised the family in Brooklyn. His father worked as a taxi driver and died suddenly when the client was 28. His mother, age 74, recently experienced a stroke and now requires help with transportation, finances, and medication management. The client’s older sister is the primary hands-on caregiver and often tells him he is "not doing enough." His older brother lives out of state and is minimally involved. The client described a family pattern of handling distress privately and treating endurance as a moral duty. No known family history of bipolar disorder, schizophrenia, or completed suicide. His father drank heavily during periods of financial stress but was never formally treated. The client is separated from his wife and co-parents one son, age 13.`,

  workHistory: `The client completed some college and began working in public transit maintenance in his early twenties. He advanced from technician to operations supervisor and takes pride in knowing the job from the ground up. His role involves managing schedules, safety checks, staff conflicts, documentation, and last-minute equipment issues. He has historically received strong evaluations, but over the past four months his supervisor has documented lateness, missed reports, and reduced responsiveness. The client fears that asking for help or taking leave will make him appear weak and jeopardize promotion eligibility. He has not disclosed details about his separation or depression at work, only saying that he has "family stuff going on." `,

  intakeSessionSummary: `You completed a full intake assessment and administered the PHQ-9, on which the client scored 18, consistent with moderately severe depressive symptoms. You administered the GAD-7, on which he scored 11, consistent with moderate anxiety, particularly worry about work, finances, parenting, and his mother’s health. You conducted a direct suicide risk assessment after his statement about being hit by a truck. He denied active suicidal intent, plan, preparatory behavior, access to firearms, and history of attempts. Protective factors include his son, religious upbringing, work identity, and willingness to attend counseling despite discomfort.

You discussed the provisional diagnosis of Major Depressive Disorder, recurrent episode, moderate, with anxious distress. You provided psychoeducation about depression as affecting mood, sleep, appetite, concentration, motivation, and physical energy rather than being a weakness of character. You reviewed treatment options including CBT, behavioral activation, interpersonal work around role transitions, and possible coordination with his primary care physician for medical evaluation and medication discussion if he chooses. You clarified that counselors do not prescribe medication but can coordinate care with consent. He agreed to weekly sessions through EAP and to discuss insurance transition if he continues beyond the covered sessions.`,

  sections: [
    {
      sessionLabel: `First session`,
      sectionNarrative: ``,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `andre-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `The client’s symptoms occur after separation, caregiving stress, and work pressure. Which detail most strongly supports Major Depressive Disorder rather than Adjustment Disorder with depressed mood?`,
          options: [
            `His depressive symptoms began after identifiable life stressors`,
            `He has depressed mood, anhedonia, weight loss, insomnia, impaired concentration, worthlessness, passive death ideation, and marked impairment across work and family roles`,
            `He feels guilty about not helping his mother enough`,
            `He has difficulty communicating with his separated wife`,
      ],
    },
    {
      sessionLabel: `Fourth session`,
      sectionNarrative: `Your client arrived for his fourth session appearing slightly more rested but still guarded. His PHQ-9 score is 15, down from 18 at intake. He completed a behavioral activation assignment by taking his son to a nearby park to shoot basketball for 30 minutes. He stated, "I did not want to go. I sat in the car first. But once we were there, he talked more than he has in weeks." He became tearful and said, "I did not realize he was waiting for me to come back to myself."

He also attempted to rejoin Friday dominoes with his cousins but left after 20 minutes because he felt overwhelmed by questions about the separation. He stated, "Everybody had jokes. Nobody meant harm. But I felt like if I stayed, I was going to either snap or cry." He has continued arriving late to work twice per week, though he completed one overdue report and responded to his supervisor’s emails the same day.

A new clinical issue emerged. His older sister called him selfish for not visiting their mother more often. He sent her money for medical supplies but avoided calling back. He stated, "I know she is doing more than me. That is true. But every time she calls, I feel like I am being put on trial." He reports guilt, resentment, and fear that he is failing his mother. He also disclosed that he has not scheduled his own physical exam because he is afraid of being told he has high blood pressure like his father.

He asked you, "How do I know what is depression and what is just me being weak or selfish?" `,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `andre-q6`,
          questionNumber: 6,
          domain: `Counseling skills and interventions`,
          stem: `The basketball outing with his son is most clinically useful because it:`,
          options: [
            `Proves his depressive symptoms are improving because he enjoyed part of the activity`,
            `Functions as behavioral activation tied to a valued role even though motivation was low`,
            `Shows that parenting repair should replace individual depression work`,
            `Demonstrates that his son is the main cause of his improvement`,
      ],
    },
    {
      sessionLabel: `Tenth session`,
      sectionNarrative: `Your client arrived for his tenth session and reported noticeable but uneven improvement. His PHQ-9 score is now 9 and his GAD-7 score is 7. He completed a physical exam; his blood pressure was elevated, and his physician recommended lifestyle changes and follow-up monitoring. He stated, "I hated hearing it, but I also felt less haunted after I went. Avoiding it was making my father’s death happen again in my head."

He has been taking his son to the park weekly and recently attended one of his son’s school games. His son asked whether the separation was his fault. The client told him, "No. Adults can have problems with each other and still both love you." He reported that this conversation hurt but also felt important. He stated, "I have been so busy feeling like a failed husband that I almost missed that he needed me to say I was still his father."

At work, he used a planned conversation with his supervisor to acknowledge that family and health issues have affected his performance. Without disclosing details, he requested a temporary adjustment in administrative deadlines and agreed to a written plan to catch up on reports. He described the conversation as "humiliating but not fatal." His supervisor responded more supportively than expected.

A new issue emerged around his mother. During a visit, she told him, "You look tired in your spirit." He unexpectedly cried in front of her. She held his hand and said in Haitian Creole, "Even the strong tree bends in heavy rain." He stated, "I did not know my mother had language for that." He is now considering telling his sister more directly what he can and cannot do rather than avoiding her calls.

He asked, "If I am doing better, why do I still feel grief for the person I was before everything cracked?" `,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `andre-q11`,
          questionNumber: 11,
          domain: `Treatment planning`,
          stem: `Given his symptom improvement and continued role strain, what treatment focus best fits this phase?`,
          options: [
            `Terminate because his PHQ-9 has moved into the mild range`,
            `Consolidate gains, prevent relapse, strengthen routines, and continue interpersonal work around fatherhood, caregiving, separation, and work`,
            `Shift entirely to couples therapy because the separation triggered the episode`,
            `Move to trauma processing because his father’s death still affects medical avoidance`,
      ],
    },
  ],
};
