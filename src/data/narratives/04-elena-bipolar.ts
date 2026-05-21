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
          stem: `Which feature most strongly distinguishes Bipolar I Disorder from Major Depressive Disorder with psychotic features in this case?`,
          options: [
            `Her history of a depressive episode at age 23`,
            `A distinct manic episode with decreased need for sleep, spending, impairment, hospitalization, and psychotic features`,
            `Her current fear about losing custody`,
            `Her family’s language of nervios`,
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
          stem: `Her family asks about pills in front of her daughter and drops by unannounced. What is the best clinical focus?`,
          options: [
            `Help her plan respectful boundaries that preserve support without making her feel monitored`,
            `Tell her to reduce family contact until she is fully stable`,
            `Call the family to instruct them how to behave`,
            `Frame the family’s behavior as controlling and harmful`,
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
          stem: `Her daughter asks why Mommy takes pills every morning. What guidance is most appropriate?`,
          options: [
            `Tell her to say the pills are vitamins to prevent worry`,
            `Help her create honest, age-appropriate language that explains health care without frightening details`,
            `Explain the full diagnosis so the child does not imagine worse`,
            `Defer the question until her daughter is older`,
      ],
    },
  ],
};
