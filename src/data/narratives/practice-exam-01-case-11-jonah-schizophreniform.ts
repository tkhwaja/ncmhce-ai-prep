import type { Narrative } from "./types";

export const jonahSchizophreniformPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-11-jonah-schizophreniform',
  title: 'Jonah — Schizophreniform Disorder',
  category: 'Schizophreniform Disorder',
  difficulty: "Advanced",
  minutesPerSection: 6,

  clientInfo: {
    age: 21,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender Male',
    pronouns: 'He/him',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Latino (Puerto Rican)',
    relationshipStatus: 'Single',
    setting: 'University counseling center with coordinated early psychosis specialty care',
    payment: 'Student health plan',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Schizophreniform Disorder: F20.81',
  },

  presentingProblem: `You are a licensed mental health counselor at a university counseling center. Your client was referred to you after discharge from a nine-day psychiatric hospitalization six days ago. He was hospitalized following increasing paranoia, profound sleep loss, social withdrawal, and auditory hallucinations. He stated in the first session, "Everybody keeps saying psychosis like that explains anything. I know I lost my footing. I still don't fully trust what happened."

The client is a junior architecture student who had been performing well academically until approximately 10 weeks ago. According to the discharge summary and the client's own account, he began sleeping less, isolating from friends, and becoming increasingly convinced that classmates were recording him during studio critiques and embedding hidden messages about him in group chats. He reported hearing two male voices commenting on his actions, particularly late at night. He stated, "Not like somebody standing next to me. More like they were in the room but not in the room." He became preoccupied with the idea that the campus Wi-Fi system was being used to identify students who were "weak enough to break."

The client reported that the most acute deterioration occurred over about 10 days before hospitalization. He slept fewer than three hours per night, stopped attending classes, and began writing pages of notes connecting innocuous events into a pattern he believed proved he was being monitored. His roommate contacted the resident assistant after finding him awake for two nights in a row, crying and saying, "If I go to sleep, I won't know what they're doing." During hospitalization he was started on risperidone and discharged with psychiatric follow-up through an affiliated early psychosis program.

The client now reports reduced intensity of paranoia and no current certainty that others are monitoring him, but he remains frightened by how real the beliefs and voices felt. He stated, "Part of me knows it was an episode. Part of me still checks whether people are looking at me too long." He denied current command hallucinations. He reported that one voice during the acute phase said, "Don't trust them. Stay awake," but denied that voices ever instructed him to harm himself or anyone else.

The client identifies as both culturally Catholic and spiritually curious. His mother initially described the episode as a possible spiritual attack and wanted him to see a prayer group before returning to campus. The client stated, "I don't think my mom is being stupid. In my family, not everything gets put in medical words first. I just also know I need people to stop acting like prayer and treatment are enemies." He denied a history of mania, significant depression preceding the episode, and trauma symptoms. He reported occasional cannabis use during his first two years of college but denied use during the month before hospitalization and denied other substances. Toxicology screening on admission was negative. He denied current suicidal ideation, homicidal ideation, and self-harm history.`,

  mentalStatusObservation: `Your client presented in clean casual clothing and appeared somewhat sedated but fully engaged. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. Eye contact was intermittent; he occasionally glanced toward the office door when hallway noise occurred but was able to redirect. Speech was coherent, soft, and slowed, likely related in part to recent medication initiation. Mood was reported as "shaken and embarrassed." Affect was constricted but appropriate to content. Psychomotor activity was mildly slowed. Thought processes were linear and reality-based during the session, though with residual suspiciousness and self-monitoring when discussing the acute episode. Thought content was notable for recent persecutory delusions now partially remitted, fear of relapse, shame, and uncertainty about how much to trust his perceptions. He denied current auditory hallucinations during the session and denied command hallucinations since discharge. No current suicidal or homicidal ideation was endorsed. Insight was partial but improving; he recognized that the episode represented a major break from his usual functioning. Judgment was fair and improving, demonstrated by willingness to attend follow-up care. Recent physical workup during hospitalization was unremarkable, and toxicology was negative.`,

  familyHistory: `The client is the eldest of three children. He was raised in a multigenerational household for much of childhood, with strong involvement from his maternal grandmother. His mother works as a medical assistant and his father drives for a municipal transit system. He described his family as loving, proud, and private. They are active in a Catholic parish and also hold culturally blended beliefs about dreams, intuition, and spiritual protection. A paternal uncle was reportedly hospitalized in his twenties for what family members described as "a nervous breakdown" and later lived with chronic mental health difficulties, though the client does not know the diagnosis. No known family history of bipolar disorder or completed suicide. The client said his parents are frightened and highly attentive since the hospitalization, sometimes to the point of asking for details he does not want to share.`,

  workHistory: `The client is a full-time undergraduate architecture student with a strong portfolio and a prior GPA above 3.6. He works six hours per week in the campus fabrication lab. Before the episode, faculty described him as bright, thoughtful, and somewhat perfectionistic. Over the month preceding hospitalization he stopped turning in design revisions, missed critiques, and ignored texts from peers. He is currently on a temporary academic reduction plan arranged through student support services and is considering whether to complete two courses remotely while stabilizing. He is not working in the fabrication lab this month.`,

  intakeSessionSummary: `You reviewed the hospital discharge summary and the early psychosis program recommendations with the client. You conducted a thorough risk assessment, including direct questions about suicidal ideation, command hallucinations, self-harm, violence risk, medication adherence, and substance use. He denied current suicidal or homicidal ideation and denied current command hallucinations. You clarified the counseling center's role within coordinated care: individual therapy, monitoring symptoms and functioning, supporting insight and coping, and collaborating with psychiatry and student support services with consent. You provided psychoeducation on early warning signs, sleep protection, substance avoidance, and the value of coordinated specialty care for first-episode psychosis. You normalized that culturally meaningful spiritual practices can coexist with medical and psychological treatment when they are not reinforcing delusional beliefs. Weekly sessions were scheduled, and the client signed releases for coordination with psychiatry and student support services, but not for unrestricted communication with his parents.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'jonah-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature most strongly supports Schizophreniform Disorder in this presentation?',
          options: [
            'He is embarrassed about what happened',
            'He had a first psychotic episode with delusions and hallucinations lasting more than one month but less than six months',
            'He has a family history of mental illness',
            'He identifies with spiritual beliefs',
          ],
          correctAnswer: 1,
          explanation: 'Schizophreniform Disorder is diagnosed when schizophrenia-spectrum symptoms are present for at least one month but less than six months. The client\'s psychotic symptoms persisted long enough and were substantial enough to fit this duration-based diagnosis. Embarrassment, family history, and spirituality do not establish the disorder.',
        },
        {
          id: 'jonah-q2',
          questionNumber: 2,
          domain: 'Professional practice and ethics',
          stem: 'The client\'s mother calls asking for a full explanation of what he said in therapy because she is paying his tuition. What is the most appropriate response?',
          options: [
            'Provide a general summary because she is financially responsible for him',
            'Decline to share clinical information without the client\'s permission and invite her to share concerns she wants the counselor to know',
            'Tell her the client forbade contact',
            'Discuss the case if she agrees to keep the information private',
          ],
          correctAnswer: 1,
          explanation: 'Because the client is an adult, tuition payment does not grant access to his mental health treatment. The counselor may listen to collateral information from family without disclosing protected clinical content, unless the client has authorized such communication.',
        },
        {
          id: 'jonah-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'The client says prayer and treatment should not be treated as enemies. What is the most therapeutic stance?',
          options: [
            'Encourage him to choose one framework so treatment is not confused',
            'Acknowledge that culturally meaningful spiritual practices can coexist with treatment as long as they do not reinforce psychosis',
            'Avoid discussing spirituality because it may worsen symptoms',
            'Tell him spiritual explanations are part of the illness',
          ],
          correctAnswer: 1,
          explanation: 'A culturally responsive stance respects the client\'s spiritual framework without collapsing into it or pathologizing it. The key clinical task is to support practices that are grounding and meaningful while avoiding collusion with delusional interpretations.',
        },
        {
          id: 'jonah-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate first-phase counseling focus for this client after discharge?',
          options: [
            'Intensive insight-oriented exploration of childhood conflicts',
            'Stabilization, monitoring symptoms, sleep protection, reality testing, and coordinated care',
            'Immediate trauma processing of the hospitalization',
            'Confronting residual suspiciousness to build insight quickly',
          ],
          correctAnswer: 1,
          explanation: 'Early treatment after a first psychotic episode should emphasize stabilization, psychoeducation, symptom monitoring, support for medication adherence, sleep protection, and coordinated specialty care. Confrontation or deep exploratory work too early can destabilize rather than help.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived for his fourth session reporting that he has remained free of voices for nearly three weeks and that paranoid thoughts now feel more like "flares of doubt" than fixed certainty. He has attended psychiatric follow-up consistently and is taking risperidone as prescribed, but he reported frustration with side effects including morning grogginess, increased appetite, and feeling mentally slowed during design work. He stated, "I know the medication helped. I also feel like I'm moving through wet cement until noon."

He reported a difficult interaction with his father, who told him, "You seem normal now, so maybe you can get off the meds and just pray harder." The client became angry and left the room. He stated, "My parents want me better but they want it to be over quickly. That's not the same thing." He wants his parents involved generally, especially around practical support, but does not want them given details of every symptom or therapy conversation.

The client also described anxiety about returning to campus studio classes next week. He has worked with student support services on a reduced course load, but one professor requested a "clearance letter" stating that he is safe to return and able to manage stress. The client asked whether you can write such a letter. He stated, "I don't want this turning into me having to prove I'm not dangerous because I had one episode."

He denied current suicidal ideation, homicidal ideation, and command hallucinations. He reported one brief night of reduced sleep after staying up late working on a model, which frightened him because sleep loss was part of the original episode. He used the coping plan developed with psychiatry, took the PRN medication recommended by his prescriber, and slept the following night.`,
      questions: [
        {
          id: 'jonah-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'The client reports sedation and cognitive slowing from risperidone. What is the most appropriate counselor response?',
          options: [
            'Tell him to stop taking it if the side effects continue',
            'Encourage him to discuss side effects promptly with his prescriber while continuing coordinated monitoring',
            'Assure him side effects always disappear quickly',
            'Interpret the complaint as resistance to treatment',
          ],
          correctAnswer: 1,
          explanation: 'Medication side effects are clinically important, but adjusting medication is outside the counselor\'s scope. The appropriate response is to support timely communication with the prescriber while monitoring adherence, function, and symptom recurrence through coordinated care.',
        },
        {
          id: 'jonah-q6',
          questionNumber: 6,
          domain: 'Professional practice and ethics',
          stem: 'The client wants his parents involved generally but not given details of every session. What is the best next step?',
          options: [
            'Refuse all parent involvement to protect privacy',
            'Have the client complete a limited release specifying what information may be shared and for what purpose',
            'Let the parents participate only if they attend therapy with him',
            'Share broad updates as long as no diagnosis is discussed',
          ],
          correctAnswer: 1,
          explanation: 'A limited, purpose-specific release allows family involvement while preserving the client\'s control and privacy. This is especially useful in coordinated care when practical support is helpful but unrestricted disclosure would undermine autonomy and trust.',
        },
        {
          id: 'jonah-q7',
          questionNumber: 7,
          domain: 'Professional practice and ethics',
          stem: 'A professor requests a "clearance letter" stating the client is safe to return to class. What is the most appropriate response?',
          options: [
            'Provide the letter to support the client\'s reentry',
            'Decline any written communication with the university',
            'Clarify what documentation is actually needed, obtain proper authorization, and avoid making fitness-for-duty guarantees outside scope',
            'Write that he is not dangerous as long as he remains on medication',
          ],
          correctAnswer: 2,
          explanation: 'Counselors should not provide broad fitness-for-duty or safety guarantees outside their role. The appropriate approach is to clarify the institution\'s needs, obtain consent, and provide narrowly accurate information within scope, if clinically appropriate.',
        },
        {
          id: 'jonah-q8',
          questionNumber: 8,
          domain: 'Intake/assessment/diagnosis',
          stem: 'The client was frightened by one brief night of reduced sleep. Clinically, the most appropriate interpretation is:',
          options: [
            'it proves relapse is occurring',
            'it is an important early warning sign to monitor, especially given sleep disruption during the initial episode',
            'it is irrelevant because psychosis has remitted',
            'it indicates bipolar disorder rather than psychosis',
          ],
          correctAnswer: 1,
          explanation: 'Sleep disruption is a major early warning sign in many psychotic and mood-spectrum relapses. One brief night does not prove recurrence, but it is clinically important to monitor within a relapse-prevention framework.',
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      // Recommended pacing: ~5 minutes
      sectionNarrative: `Your client arrived for his tenth session approximately three months after intake. He has remained engaged with psychiatry, counseling, and student support services. He reports no auditory hallucinations for seven weeks and no fixed persecutory beliefs, though he occasionally notices himself scanning peers' facial expressions for signs of judgment. He has returned to two studio courses and one lecture course with accommodations and is passing all three.

He described a meaningful shift in insight. He stated, "I still hate that this happened. But I don't spend every day trying to prove it didn't. That feels different." He has begun telling one close friend a limited version of what happened and said the friend responded with more ease than he expected. He also reported a successful conversation with his mother in which he said, "You can pray for me and still trust my doctors." He described this as one of the first times he felt adult rather than "managed" in the aftermath of the episode.

The client raised one new concern. A friend from before the hospitalization invited him to a birthday weekend where cannabis will likely be present and said, "One hit isn't going to break your brain." The client reported feeling embarrassed that he no longer trusts himself around substances. He asked, "How do I talk about recovery without turning into a walking diagnosis?"`,
      questions: [
        {
          id: 'jonah-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'What should be the primary focus of treatment at this phase?',
          options: [
            'Immediate termination because positive symptoms have remitted',
            'Relapse prevention, identity recovery, support for academic functioning, and continued coordinated care',
            'Deep analysis of every delusional belief from the acute episode',
            'Switching entirely to family therapy',
          ],
          correctAnswer: 1,
          explanation: 'As acute psychotic symptoms remit, treatment should focus on relapse prevention, rebuilding identity and functioning, strengthening supports, and maintaining coordinated specialty care. Premature termination or overly narrow focus can undermine recovery.',
        },
        {
          id: 'jonah-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'How should the counselor respond to the invitation to a weekend where cannabis will likely be present?',
          options: [
            'Tell him never to attend social events where substances might be present',
            'Explore the pressure, reinforce psychoeducation about substance risk after psychosis, and help him develop a specific plan for declining use and leaving if needed',
            'Advise one small amount is acceptable if his medication is working',
            'Focus only on whether his friend is supportive enough',
          ],
          correctAnswer: 1,
          explanation: 'Substance avoidance is clinically important after a psychotic episode, and the counselor should help the client plan concretely for real-world risk situations. Blanket avoidance advice may be unrealistic, while minimizing cannabis risk would be unsafe.',
        },
        {
          id: 'jonah-q11',
          questionNumber: 11,
          domain: 'Core counseling attributes',
          stem: 'The client asks how to talk about recovery without becoming "a walking diagnosis." What is the most therapeutic response?',
          options: [
            '"You should be open about your diagnosis to reduce stigma."',
            '"What would it look like to let this be part of your story without letting it become your whole identity?"',
            '"You may be minimizing the seriousness of what happened."',
            '"It is usually best not to tell friends about psychosis."',
          ],
          correctAnswer: 1,
          explanation: 'The response supports identity integration rather than identity foreclosure. It invites the client to develop a recovery narrative that acknowledges the episode without reducing himself to it, which is central to long-term stabilization and dignity.',
        },
      ],
    },
  ],
};
