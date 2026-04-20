import type { Narrative } from "./types";

export const elenaBipolar: Narrative = {
  id: "04-elena-bipolar",
  title: "Elena — Bipolar I Disorder",
  category: "Mood Disorders",
  difficulty: "Advanced",

  clientInfo: {
    age: 31,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her / Ella",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Latina (Mexican American, first generation)",
    relationshipStatus: "Single, divorced",
    setting: "Community mental health agency",
    payment: "Medicaid",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Bipolar I Disorder, most recent episode manic, severe, with psychotic features: F31.2",
  },

  presentingProblem: `You are a licensed mental health counselor at a community mental health agency serving a predominantly Latino neighborhood. Your client was referred following discharge from a seven-day inpatient psychiatric hospitalization three days ago. She was brought to the emergency department by her sister after family members became concerned about her behavior. She is bilingual (Spanish-English) and has chosen to conduct sessions in English. She stated, "My sister told me to come here. She said if I don't come, I can't see my daughter until I do."

The client reported that prior to hospitalization, she had been "feeling amazing" for about three weeks. She stated, "I was finally getting things done. I cleaned the whole house at 3 AM. I started six projects. I felt like God had finally given me what I was praying for." She reported sleeping two to three hours per night without feeling tired. She began spending beyond her means, purchasing supplies for a business she was going to start. Her credit card debt increased by approximately $8,000 over ten days. She called her ex-husband repeatedly at night with detailed plans for reconciliation despite a restraining order that remains in effect.

The client stated that during the week before hospitalization, she began to believe that her neighbors were monitoring her through her smoke detectors. She disconnected them and covered them with aluminum foil. She reported hearing "a voice like an angel" telling her she had been chosen to help other Latina mothers. She stopped eating because she believed the food in her refrigerator had been tampered with. Her sister arrived to pick up the client's seven-year-old daughter for school and found the client sitting on the kitchen floor, writing a manifesto in Spanish across the kitchen walls in permanent marker. Her sister called 911.

The client has a history of a depressive episode at age 23, during which she was briefly hospitalized after a medication overdose. She has not received consistent mental health treatment since. She was diagnosed with Bipolar I Disorder during the current hospitalization and was started on lithium and olanzapine. She reported that her symptoms have "quieted down" since starting medication, but she stated, "I don't think I need pills. I just needed to sleep more. I'm not crazy." She expressed significant fear about losing custody of her daughter, who is currently staying with the client's mother.`,

  mentalStatusObservation: `Your client presented dressed neatly in a blouse and jeans; her hair was styled and she wore makeup. She was alert and oriented to person, place, time, and situation. Grooming was good. Eye contact was appropriate to direct. Speech was at a normal rate and volume; she occasionally paused to search for English words she would have spoken more easily in Spanish. Mood was reported as "tired and scared." Affect was mildly constricted, appropriate to content, with brief moments of tearfulness when discussing her daughter. Psychomotor activity was calm. Thought processes were linear and goal-directed. Thought content was notable for minimization of recent psychotic symptoms ("I was just stressed"), ambivalence about medication, and significant worry about custody. She denied current delusions; when asked about the smoke detector beliefs, she stated, "I don't really think that anymore. I think I was just not sleeping." She reported no current hallucinations. She denied current suicidal ideation. She has a history of one suicide attempt at age 23. She denied illicit substance use and reported drinking "maybe a glass of wine on holidays." A recent inpatient physical was unremarkable; her lithium level drawn two days ago was within therapeutic range.`,

  familyHistory: `The client is the youngest of four children. Her parents immigrated from Jalisco, Mexico in 1988. Her father passed away eight years ago from complications of diabetes. Her mother lives nearby and is her primary support. She has three older siblings who all live in the area. Her older sister, age 39, is her emergency contact and is currently caring for her daughter along with the client's mother. The client reported that her mother was diagnosed with "nervios" in Mexico as a young woman and took medication "for a little while" but "prayed her way out of it." She reported that a maternal aunt was hospitalized multiple times in Mexico and died by suicide at age 44. "Nobody in the family talked about it. They said she had a weak faith." The client's paternal grandfather was known for "drinking too much and being too happy, then too sad." No formal diagnosis history for relatives, but the family pattern is notable.`,

  workHistory: `The client completed an associate's degree in medical office administration. She worked as a medical receptionist for five years before her divorce three years ago. She was fired from her position nine months ago after showing up to work with increasingly erratic behavior during what was likely an earlier hypomanic period that was not recognized as such at the time. She has worked part-time as a receptionist at a local auto body shop for the past four months. Her employment there is currently on hold pending her return from medical leave. The client is the primary financial support for herself and her daughter. She receives child support inconsistently from her ex-husband. She currently receives Medicaid and food stamps.`,

  intakeSessionSummary: `You reviewed the discharge summary from the inpatient unit with the client. You discussed the confirmed diagnosis of Bipolar I Disorder and the role of medication. You administered the Young Mania Rating Scale (current score: 6, consistent with euthymia on medication) and the PHQ-9 (score: 12, indicating moderate depression likely related to the post-manic depletion and situational stressors). You conducted a thorough risk assessment; she denied current suicidal or homicidal ideation. You discussed the importance of medication adherence for preventing future episodes and explored her ambivalence with respect and without pressure. You clarified the scope of what you can and cannot do regarding the Child Protective Services open assessment and custody questions. You provided her with a release of information form to authorize communication with her psychiatrist. You scheduled weekly sessions and coordinated with her psychiatrist for biweekly medication management.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "elena-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature of the client's history most strongly supports a diagnosis of Bipolar I Disorder rather than Bipolar II or Major Depressive Disorder?",
          options: [
            "The presence of a prior depressive episode",
            "A manic episode with psychotic features requiring hospitalization",
            "Her family history of mental illness",
            "Her ambivalence about medication",
          ],
          correctAnswer: 1,
          explanation: "Bipolar I Disorder requires at least one manic episode (often severe enough to cause marked impairment or require hospitalization, with or without psychotic features). Bipolar II requires hypomanic episodes without meeting full manic criteria. The client's psychotic features and hospitalization confirm the Bipolar I diagnosis.",
        },
        {
          id: "elena-q2",
          questionNumber: 2,
          domain: "Core counseling attributes",
          stem: 'The client said her mother "prayed her way out of it" when she had nervios. How should you respond to this statement?',
          options: [
            "Correct the misconception by explaining that prayer does not treat mental illness",
            "Validate the cultural meaning of nervios while exploring what supports help the client herself",
            "Avoid discussing religion to maintain professional boundaries",
            "Recommend the client attend church regularly as part of her support system",
          ],
          correctAnswer: 1,
          explanation: "Cultural humility requires taking the client's cultural framework seriously as a source of meaning and support, while also supporting evidence-based treatment. Exploring what supports — spiritual, familial, clinical — are meaningful to the client herself honors her autonomy and culture without imposing or dismissing.",
        },
        {
          id: "elena-q3",
          questionNumber: 3,
          domain: "Professional practice and ethics",
          stem: 'The client\'s sister calls to report that the client seems "fine" at home and asks whether medication is really necessary. What is the most appropriate response?',
          options: [
            "Explain to the sister why medication is medically necessary",
            "Decline to discuss the client's treatment without written authorization and invite the sister to share observations without disclosing clinical content",
            "Refuse to take the call since the client has not authorized contact",
            "Agree with the sister and suggest the client reduce the medication",
          ],
          correctAnswer: 1,
          explanation: "You cannot confirm clinical information without written authorization. However, you can listen to collateral observations a family member offers, without disclosing clinical content back. This respects confidentiality and allows family observations to inform care through appropriate channels.",
        },
        {
          id: "elena-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: "Which of the following is most important to monitor on an ongoing basis given the client's diagnosis and current medications?",
          options: [
            "Her daughter's academic performance",
            "Early warning signs of mood episodes and medication adherence",
            "Her ex-husband's compliance with the restraining order",
            "Her weight and sleep only",
          ],
          correctAnswer: 1,
          explanation: "Ongoing assessment of early warning signs (sleep changes, mood elevation, racing thoughts, risk behaviors) combined with medication adherence is central to preventing relapse in Bipolar I Disorder. Weight and sleep are components but not the full picture.",
        },
        {
          id: "elena-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: 'The client states, "I don\'t think I need pills." From a motivational interviewing perspective, what is the most appropriate initial response?',
          options: [
            "Warn her about the high risk of relapse if she stops medication",
            "Explore her specific concerns about medication and what she hopes for from treatment",
            "Tell her you cannot continue therapy if she stops medication",
            "Refer her back to her psychiatrist to handle the medication question",
          ],
          correctAnswer: 1,
          explanation: "Medication ambivalence is common after a first manic episode. Exploring specific concerns (side effects, identity, stigma, cost) and what she hopes for allows collaborative problem-solving. Warnings and ultimatums typically increase resistance.",
        },
      ],
    },
    {
      sessionLabel: "Sixth session",
      sectionNarrative: `Your client arrived on time and appeared stable. Her YMRS this week is 4 and her PHQ-9 is 8. She has continued her medications consistently and has seen her psychiatrist twice. She returned to work part-time two weeks ago. Her daughter returned to living with her four days ago following a successful CPS assessment and safety plan. She stated, "She was so happy to come home. I was so scared she wouldn't want to."

The client reported a new challenge. Her mother and older sister have been "hovering" since her hospitalization, calling multiple times a day and dropping by unannounced. Her mother has begun to give her daughter gifts and food that conflict with the client's parenting decisions. Her mother told her last week, "I'm just making sure you're okay. You scared us, mija." The client stated, "I know they love me. But I feel like I'm a patient in my own house. My sister asked if I had taken my pills this morning. In front of my daughter." She reported feeling "ashamed all the time" and stated, "My family looks at me like I might break again."

She also reported increasing difficulty with her ex-husband. The restraining order is still in effect, but he has begun sending messages through their daughter. He told the seven-year-old that "Mommy is sick and can't take care of you anymore." The client stated, "I want to strangle him but I can't even talk to him. My daughter doesn't know what to do with this." The client has consulted a family law attorney through legal aid and is considering requesting a modification to custody that clarifies no communication through their daughter.

She disclosed that she has had brief moments over the past two weeks where she has thought, "Maybe I don't need the lithium. I've been fine for weeks." She reported continuing to take it as prescribed but stated, "I notice the thought."`,
      questions: [
        {
          id: "elena-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client reports her mother and sister are monitoring her closely and this is causing her distress. What is the most appropriate clinical focus?",
          options: [
            "Recommend she move out to establish independence",
            "Explore her feelings and help her consider how to communicate boundaries with her family while honoring their concern",
            "Call her mother and sister to explain what is and isn't helpful",
            "Suggest she temporarily reduce contact with her family",
          ],
          correctAnswer: 1,
          explanation: "Supporting the client in processing her experience and developing her own language for setting boundaries respects both her autonomy and the cultural importance of family. Directive solutions (moving out, reducing contact) or the counselor intervening directly with family members bypass her agency.",
        },
        {
          id: "elena-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: 'The client said, "I notice the thought" about not needing lithium. How should you respond to this disclosure?',
          options: [
            "Warn her that stopping lithium without consultation is dangerous",
            "Acknowledge the thought without alarm, explore its context, and affirm her decision to continue medication",
            "Report this to her psychiatrist immediately as a warning sign",
            "Redirect to a different topic to avoid reinforcing the thought",
          ],
          correctAnswer: 1,
          explanation: "Normalizing the thought while reinforcing her adaptive choice to notice without acting builds her metacognitive awareness — a protective factor in bipolar disorder. Alarm, immediate outside reports, or redirection miss the opportunity to strengthen her relationship with medication decisions.",
        },
        {
          id: "elena-q8",
          questionNumber: 8,
          domain: "Professional practice and ethics",
          stem: "The client's ex-husband is violating the restraining order by sending messages through their daughter. What is the most appropriate action for you as her counselor?",
          options: [
            "Contact law enforcement on her behalf",
            "Document the disclosure and support her in consulting with her family law attorney about options",
            "Contact her ex-husband directly to tell him to stop",
            "File a mandated report with CPS about the ex-husband's behavior",
          ],
          correctAnswer: 1,
          explanation: "The counselor's role is to document, support the client's agency, and help her engage appropriate legal resources. Direct contact with the ex-husband or unilateral reporting exceeds scope. CPS reporting has specific criteria that are not obviously met by messages through a child about a parent's illness, absent additional concerning information.",
        },
        {
          id: "elena-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: "What is the most appropriate long-term treatment goal for this client given her diagnosis?",
          options: [
            "Discontinue all medication within one year",
            "Identify early warning signs and develop a relapse prevention plan with family support",
            "Achieve full custody of her daughter",
            "Return to full-time work immediately",
          ],
          correctAnswer: 1,
          explanation: "A written relapse prevention plan identifying personal early warning signs, action steps, and family/clinical contacts is a core evidence-based intervention for Bipolar I Disorder. It supports long-term stability and is measurable, client-centered, and within the scope of counseling.",
        },
        {
          id: "elena-q10",
          questionNumber: 10,
          domain: "Core counseling attributes",
          stem: 'The client says, "My family looks at me like I might break again." What is the most therapeutic response?',
          options: [
            '"They love you. They don\'t see you that way."',
            '"What is it like to be looked at that way in your own home?"',
            '"You need to tell them to stop treating you like that."',
            '"That\'s a cognitive distortion. They\'re just concerned."',
          ],
          correctAnswer: 1,
          explanation: "An open-ended reflective question invites the client to explore the emotional weight of being surveilled by the people who love her. Reassurance, direction, or dismissing her perception as distorted all miss the therapeutic opportunity.",
        },
      ],
    },
    {
      sessionLabel: "Twelfth session",
      sectionNarrative: `Your client arrived on time and reported continued stability. Her YMRS is 2 and her PHQ-9 is 5. She has now been on medication for four months without missed doses. She had her dose of olanzapine reduced by her psychiatrist last month; lithium remains at the same dose with therapeutic blood levels. She returned to full-time work three weeks ago. Her daughter is thriving in second grade and the client reported attending a school event last week "where I was just another mom in the audience. Not the one who scared everyone."

She reported significant progress with her family. She had a difficult but productive conversation with her mother and older sister three weeks ago, in which she shared specifically what had been helpful and what had been hurtful. She used English words she had prepared in advance with you. Her mother cried; her sister apologized. The daily check-ins have become twice-weekly and by her initiation. She stated, "I didn't know I could do that. Talk to them like that, in their faces, with respect, and still ask for what I needed. I learned that here."

She also reported that her petition for modification of the custody arrangement was granted last week; her ex-husband is now prohibited from using their daughter as a messenger. She stated, "I slept better that night than I have in years."

The client expressed a new concern. She is considering beginning to date again and wonders how to disclose her diagnosis to a potential partner. She asked, "When do I tell someone? On the first date? After a year? Do I have to tell them at all?" She has not yet been on any dates and is not currently seeing anyone specific. She stated, "I don't want to be defined by this. But I don't want to lie either."

Finally, she reported a specific worry about her daughter. Her daughter, now nearly eight, has begun asking questions about why Mommy takes pills every morning. She asked you, "What do I say?"`,
      questions: [
        {
          id: "elena-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: "The client asks how to explain her medication to her young daughter. What is the most appropriate guidance?",
          options: [
            "Tell her to explain the diagnosis in full so her daughter understands",
            "Suggest she keep the medication hidden to avoid the question entirely",
            "Help her develop age-appropriate language that is honest and non-frightening",
            "Recommend she wait until the daughter is older to discuss it",
          ],
          correctAnswer: 2,
          explanation: "Age-appropriate honesty supports the child's trust and emotional literacy without overwhelming her. Full diagnostic disclosure is inappropriate for a seven-year-old; hiding or deferring the conversation models secrecy about mental health and leaves the child to invent more frightening explanations.",
        },
        {
          id: "elena-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: "The client asks when to disclose her diagnosis to a new romantic partner. What is the most appropriate response?",
          options: [
            "Tell her to disclose on the first date to be honest",
            "Tell her to never disclose unless asked directly",
            "Help her explore her own values about when and how disclosure feels right, including timing, depth, and safety",
            "Tell her disclosure depends on whether the relationship becomes serious",
          ],
          correctAnswer: 2,
          explanation: "Disclosure decisions are personal and situational. The therapist's role is to help the client develop her own framework for when, how much, and to whom disclosure feels safe and congruent with her values — not to prescribe timing.",
        },
        {
          id: "elena-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: 'The client reflects, "I didn\'t know I could do that. I learned that here." What is the most appropriate response?',
          options: [
            '"You\'ve done all the work. I just listen."',
            '"What does it mean to you to recognize that in yourself?"',
            '"Let\'s add that to your progress journal."',
            '"This is a sign you\'re ready to reduce session frequency."',
          ],
          correctAnswer: 1,
          explanation: "An open-ended question supports the client's further integration of her growth. Deflection of her attribution (\"I just listen\"), logging the moment, or pivoting to termination planning all miss the opportunity to deepen her recognition.",
        },
        {
          id: "elena-q14",
          questionNumber: 14,
          domain: "Treatment planning",
          stem: "The client is stable, working, parenting, and engaged with a psychiatrist. What is the most appropriate current treatment plan adjustment?",
          options: [
            "Terminate therapy since she has achieved stability",
            "Maintain weekly sessions indefinitely given the chronicity of the diagnosis",
            "Consider tapering to biweekly sessions with a focus on relapse prevention and ongoing skill consolidation",
            "Refer her to a support group and end individual work",
          ],
          correctAnswer: 2,
          explanation: "Tapering session frequency while maintaining continuity supports long-term stability without fostering dependence or terminating prematurely. Bipolar I Disorder is chronic, but effective counseling does not require weekly sessions indefinitely; the shift to biweekly supports consolidation and sustainable care.",
        },
      ],
    },
  ],
};
