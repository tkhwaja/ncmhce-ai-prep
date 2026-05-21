import type { Narrative } from "./types";

export const rachelAUDNarrative: Narrative = {
  id: 'practice-exam-01-case-05-rachel-aud',
  title: 'Rachel — Alcohol Use Disorder',
  difficulty: "Intermediate",
  minutesPerSection: 6,
  category: 'Alcohol Use Disorder',

  clientInfo: {
    age: 42,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'White',
    relationshipStatus: 'Separated',
    setting: 'Community outpatient substance use clinic',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Alcohol Use Disorder, moderate: F10.20',
  },

  presentingProblem: `You are a licensed mental health counselor in an outpatient substance use clinic. Your client self-referred two weeks after an incident in which her 15-year-old daughter called the client\'s sister because the client was intoxicated and asleep on the couch when she was supposed to pick her younger son up from basketball practice. The client stated, "Nobody got hurt. But I saw my daughter\'s face when my sister showed up. That was the moment I couldn\'t keep calling this stress."

The client reported that her drinking increased significantly over the past eighteen months during a contentious separation from her husband. She stated that what began as "a couple glasses of wine to settle down" became a nightly pattern of drinking one bottle of wine and often more after the children went to bed. On weekends, especially when the children were with their father, she reported drinking earlier in the day and sometimes hiding empty bottles before they returned. She stated, "I have become someone who knows which recycling bin makes the least noise."

She denied morning drinking on workdays and denied prior detox or seizures. She reported multiple unsuccessful attempts to cut down, typically lasting three to five days before returning to drinking during periods of loneliness, anger after legal or co-parenting conflict, or after putting the children to bed. She stated, "The house gets quiet and my head gets loud. Drinking flips the switch off for a few hours."

The client works full time as a dental office manager and has maintained employment, though she has gone to work hungover multiple times and called out sick twice in the past month after drinking heavily. She stated that coworkers do not know the extent of her drinking. Her sister has told her she needs help. Her estranged husband has begun documenting parenting concerns and has threatened to ask for more custody time if the client does not address her alcohol use.

She denied current illicit drug use. She denied current suicidal ideation and denied a history of suicide attempts. She endorsed shame, guilt, poor sleep, irritability, and depressed mood, but stated these symptoms feel tied to the drinking and the separation rather than to a separate longstanding mood disorder. She asked, "If I am not falling-down-drunk every day and I still have a job, does this count as a real problem? Because it feels real now."`,

  mentalStatusObservation: `Your client presented in business-casual clothing directly from work. She was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. Eye contact was steady, though tearful at points when discussing her children. Speech was normal in rate and volume. Mood was reported as "ashamed and exhausted." Affect was congruent, with appropriate range. Psychomotor activity was mildly tense; she held her hands clasped tightly in her lap. Thought processes were linear and goal-directed. Thought content was notable for shame, minimization followed by increasing insight, and fear about parenting consequences. She denied hallucinations, delusions, suicidal ideation, and homicidal ideation. Insight was fair and improving. Judgment appeared intact in session. She denied history of withdrawal seizures or delirium tremens but described shakiness, sweating, and anxiety on the second day of previous attempts to stop drinking. No acute intoxication was observed.`,

  familyHistory: `The client is the oldest of two siblings. Her father is a retired contractor with a long history of heavy drinking that the family referred to as "blowing off steam." He was never formally treated. Her mother has a history of depression after the deaths of her own parents and took antidepressant medication briefly when the client was in college. The client is close to her younger sister, who lives nearby and has become her main support during the separation. She has two children, ages 15 and 11. The older child has become increasingly angry and watchful; the younger child is described as "still mostly confused." No known family history of psychotic disorders, bipolar disorder, or completed suicide.`,

  workHistory: `The client earned an associate degree in health administration and has worked in dental settings for nearly twenty years. She has managed the current office for six years and is viewed as competent and organized. She stated that work has been the one area where she has still felt effective, though she acknowledged that hangovers have affected concentration and patience with staff. Financially, she relies on her income and is concerned that more visible impairment could jeopardize both her employment and her position in custody proceedings.`,

  intakeSessionSummary: `You completed an intake focused on substance use history, withdrawal risk, parenting concerns, and motivation for change. You administered the AUDIT, on which she scored in the high-risk clinical range, and the PHQ-9, on which she scored 10, suggesting moderate depressive symptoms that will need reassessment after a period of sobriety or reduction. You completed a risk assessment; she denied suicidal ideation, self-harm, and homicidal ideation. You assessed withdrawal history and determined that, while she reports prior mild withdrawal symptoms, she does not currently report a history that automatically indicates inpatient detox; you advised medical evaluation if withdrawal symptoms escalate and encouraged consultation with her PCP or an addiction medicine provider. You discussed evidence-based treatment options including motivational interviewing, CBT relapse prevention, peer support, and possible medication referral. She agreed to weekly therapy and stated, "I need something stronger than good intentions."`,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: 'rachel-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature most strongly supports Alcohol Use Disorder rather than situational overdrinking alone?',
          options: [
            'Stress related to a separation',
            'Repeated unsuccessful efforts to cut down despite consequences',
            'Drinking mostly at home',
            'Maintaining employment',
      ],
    },
    {
      sessionLabel: 'Fifth session',
      sectionNarrative: `Your client arrived on time and reported that she has had ten alcohol-free days out of the last fourteen. She described one lapse two weekends ago after receiving a hostile email from her husband\'s attorney. She drank half a bottle of wine alone after the children were asleep and stopped herself from buying more. She stated, "Old me would have turned that into the whole weekend. This time I hated it halfway through." She came to session worried that the lapse means treatment is already failing.

She has started identifying high-risk times more clearly: after legal conflict, after the children go to bed, and on Sunday evenings when the house feels empty and the upcoming week feels overwhelming. She also reported that her older daughter remains distant. The daughter recently told her, "I never know which version of you I\'m coming home to." The client cried while recounting this and stated, "That sentence should knock me flat. It kind of did."

She attended one community recovery meeting but felt uncomfortable when several members spoke in highly confrontational ways about denial. She stated, "I already feel ashamed. I do not need more people yelling at my shame." She asked whether that means recovery groups are "not for me" or whether she just went to the wrong one.`,
      questions: [
        {
          id: 'rachel-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'The client had one drinking episode after a period of improvement and now fears treatment is failing. What is the most useful clinical framing?',
          options: [
            'Frame it as proof that she is not ready for outpatient care',
            'Treat it as clinically meaningful lapse data to analyze rather than as total failure',
            'Tell her one lapse does not matter',
            'Recommend she restart treatment from the beginning',
      ],
    },
    {
      sessionLabel: 'Tenth session',
      sectionNarrative: `Your client arrived for her tenth session with noticeable improvement in affect and organization. She reported twenty-four consecutive alcohol-free days. She has been using a written evening plan that includes calling her sister, taking a walk after dinner, limiting unstructured time in the kitchen, and leaving her debit card with her sister on high-risk weekends. She stated, "The cravings still show up, but they are less bossy now."

Her daughter remains guarded but has begun engaging again in small ways. Last week, the daughter asked if they could watch a movie together. The client described this as "tiny and huge at the same time." She also reported that her younger son recently asked why she has been going out to meetings and therapy so much. She has not yet explained her alcohol problem to either child in direct language.

She asked a forward-looking question: "How do I talk to my kids honestly without making them feel like they have to take care of me?" She also reported that her husband\'s attorney requested documentation of treatment attendance. She is comfortable with limited verification that she is attending treatment but does not want broader clinical details released.`,
      questions: [
        {
          id: 'rachel-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate focus for this phase of treatment?',
          options: [
            'Shift toward relapse prevention, strengthening sober routines, and repairing functioning in key relationships',
            'Terminate immediately because she has reached 24 days sober',
            'Focus exclusively on her daughter\'s anger',
            'Reduce treatment to monthly since cravings are less intense',
      ],
    },
  ],
};
