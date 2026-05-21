import type { Narrative } from "./types";

export const samuelOCDPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-06-samuel-ocd',
  title: 'Samuel — Obsessive-Compulsive Disorder',
  category: 'Obsessive-Compulsive Disorder',
  difficulty: "Intermediate",
  minutesPerSection: 8,

  clientInfo: {
    age: 35,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender Male',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Latino (Puerto Rican American)',
    relationshipStatus: 'Married',
    setting: 'Private practice',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Obsessive-Compulsive Disorder: F42.2',
  },

  presentingProblem: `You are a licensed mental health counselor in private practice. Your client self-referred after searching online for therapists who treat OCD. He stated, "I need someone who actually knows what this is, because if one more person tells me to just relax, I am going to lose my mind."

The client reported intrusive, repetitive thoughts focused on causing accidental or intentional harm, despite having no desire to hurt anyone. He stated, "I know these thoughts are mine, but they don’t feel like me." He described recurrent fears that he may leave the stove on and burn down the apartment building, accidentally hit a pedestrian while driving, or impulsively stab a loved one while preparing dinner. He stated, "I can be chopping onions and my brain goes, ‘What if you just did it?’ And then I feel sick to my stomach because I would never do that."

The client reported compulsive behaviors that have intensified over the past year. He checks the stove and front door multiple times before leaving home, often taking photos on his phone to reassure himself later. He circles back while driving to make sure he did not hit someone, especially after driving over potholes or speed bumps. He mentally reviews interactions with others to determine whether he might have acted in a dangerous or inappropriate way without realizing it. He asks his wife questions such as, "You know I would never hurt anyone, right?" He stated, "It helps for a second. Then my brain says, ‘Well, what if she only thinks she knows you?’"

The client reported the symptoms began around age 16 with fears that he had accidentally offended God by having blasphemous thoughts during Mass. He grew up in a close Catholic family and described years of shame about his mind. He stated, "I used to confess thoughts that weren’t even beliefs. They were just mental junk, and I still thought I needed forgiveness." He reported that the content of the obsessions has shifted over time, but the pattern has remained the same: a disturbing thought, intense fear that the thought means something about his character, and repetitive efforts to gain certainty.

The client works as a building code inspector for the city. He reported that his job, which requires attention to safety details, has become increasingly difficult because he cannot tell when he is being appropriately careful versus when OCD has taken over. He stated, "I used to trust my judgment. Now everything feels like it could be negligence." His wife has become frustrated with his repeated checking and reassurance seeking, though he described her as loving and "trying hard not to snap." He recently turned down his sister’s request to babysit his six-year-old niece because he was afraid of being alone with a child while having intrusive harm thoughts. He cried while describing this and stated, "That one made me feel like OCD stole something important from me."

The client denied any history of violent behavior, suicidal ideation, homicidal intent, psychosis, or substance misuse. He drinks socially once or twice per month and denied cannabis or other drug use. He reported mild depressive symptoms related to shame and frustration but stated, "If this got quiet, I think I’d mostly feel like myself again."`,

  mentalStatusObservation: `Your client presented in clean work clothes and steel-toed boots, having come directly from work. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. Eye contact was appropriate, though he occasionally looked down when describing the content of his intrusive thoughts. Speech was coherent, organized, and mildly rapid when anxious. Mood was reported as "ashamed and exhausted." Affect was anxious and constricted but appropriate to content, with visible distress when discussing his niece and cooking fears. Psychomotor activity was notable for hand-wringing and repeated jaw tension. Thought processes were linear and goal-directed. Thought content was notable for intrusive harm obsessions, inflated responsibility, mental review, reassurance seeking, and compulsive checking. He demonstrated strong insight; he repeatedly identified the thoughts as unwanted and inconsistent with his values. There was no evidence of delusions, hallucinations, or mania. Judgment was intact. He denied current or past suicidal ideation, homicidal intent, and self-harm. He denied problematic substance use. No acute medical issues were reported.`,

  familyHistory: `The client is the second of three siblings in a close Puerto Rican Catholic family. His parents have been married for forty years and live nearby. He described his mother as "a loving worrier" who often seeks repeated reassurance about family safety, and his father as practical, emotionally reserved, and strongly values responsibility. The client stated that mental health was not openly discussed in the home, though anxiety was often framed as being "high-strung" or "thinking too much." He reported that one maternal uncle was known for repeatedly checking locks and appliances but was never formally evaluated. No known family history of bipolar disorder, schizophrenia, or completed suicide. The client described his younger sister and her daughter as especially important relationships in his life, which makes his avoidance of babysitting particularly painful.`,

  workHistory: `The client completed an associate degree in construction technology and has worked for the city for eleven years, first as a permit coordinator and currently as a building code inspector. He is regarded as conscientious and reliable. He reported that his work has historically suited him because he genuinely cares about safety and precision. Over the past year, however, he has begun spending excessive time rechecking reports and photographs before submission, occasionally staying late to make sure he has not "missed something catastrophic." He denied formal disciplinary action but worries that his productivity is declining. His wife works as a speech-language pathologist in a public elementary school. They do not have children and have been discussing starting a family, which the client stated has intensified his fear-based obsessions about harm and responsibility.`,

  intakeSessionSummary: `You administered the Yale-Brown Obsessive Compulsive Scale (Y-BOCS), and the client scored 27, consistent with severe OCD symptoms. You administered the PHQ-9, and he scored 7, suggesting mild depressive symptoms likely secondary to OCD-related impairment and shame. You completed a thorough risk assessment and differentiated intrusive harm obsessions from actual intent or desire to harm. He clearly identified the thoughts as ego-dystonic, unwanted, and inconsistent with his values. You provided psychoeducation about OCD, including the role of obsessions, compulsions, reassurance seeking, and thought-action fusion. You discussed Exposure and Response Prevention (ERP) as the evidence-based treatment and explained that treatment would involve reducing checking, mental review, and reassurance seeking rather than trying to eliminate thoughts. The client stated, "If the goal is to stop obeying the thoughts, I can work with that." Weekly sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: "samuel-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature most strongly supports OCD with harm obsessions rather than actual violent intent?",
          options: [
            "The intrusive thoughts involve knives, driving, and harm to others",
            "He avoids babysitting his niece because the thoughts scare him",
            "The thoughts are ego-dystonic, distressing, inconsistent with his values, and followed by reassurance seeking and checking",
            "He works in a safety-related profession and is highly conscientious",
          ],
          correctAnswer: 2,
          explanation: "Harm obsessions in OCD are typically unwanted, ego-dystonic, and followed by compulsive attempts to gain certainty or reduce distress. Content involving harm alone does not indicate dangerousness.",
        },
        {
          id: "samuel-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "The client reports intrusive images of stabbing a loved one while cooking but denies any desire, plan, or history of violence. What is the most appropriate clinical action at intake?",
          options: [
            "Treat the thoughts as homicidal ideation and initiate emergency intervention",
            "Avoid detailed questions about the thoughts because assessment may reinforce OCD",
            "Assess intent, history, access, impulse control, and ego-dystonicity while differentiating obsessions from actual risk",
            "Reassure him that people with OCD never act on intrusive harm thoughts",
          ],
          correctAnswer: 2,
          explanation: "The clinician should neither overreact nor dismiss the content. Careful assessment distinguishes ego-dystonic obsessions from actual intent while preserving safety and diagnostic accuracy.",
        },
        {
          id: "samuel-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "The client asks, 'You know I would never hurt anyone, right?' What response best maintains the alliance without reinforcing reassurance-seeking?",
          options: [
            "Of course. You are clearly a good person.",
            "I hear how badly you want certainty right now; let’s notice the urge to ask and what happens if we do not answer OCD’s demand.",
            "I cannot answer that because it would be unethical.",
            "The fact that you are worried proves you are safe.",
          ],
          correctAnswer: 1,
          explanation: "Direct reassurance usually reduces anxiety briefly but reinforces the OCD cycle. The best answer validates distress while helping the client observe and resist the reassurance ritual.",
        },
        {
          id: "samuel-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: "What is the most appropriate first-line counseling approach for this client?",
          options: [
            "Supportive therapy focused on reducing general stress until the thoughts disappear",
            "Exposure and Response Prevention targeting checking, reassurance seeking, avoidance, and mental review",
            "Thought-stopping whenever violent images arise",
            "Anger-management training because the obsessions involve harm",
          ],
          correctAnswer: 1,
          explanation: "ERP is a first-line treatment for OCD. Thought-stopping and reassurance can strengthen the disorder, and harm-themed obsessions do not automatically indicate an anger-management problem.",
        },
        {
          id: "samuel-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: "The client asks whether he should start medication because ERP sounds difficult. What is the best response?",
          options: [
            "Recommend an SSRI because OCD often responds well to it",
            "Tell him medication should be avoided until ERP has failed",
            "Discuss that medication evaluation can be helpful for OCD and offer referral/coordination with a prescriber while clarifying counselor scope",
            "Advise him to choose either medication or therapy because doing both complicates treatment",
          ],
          correctAnswer: 2,
          explanation: "Counselors should not prescribe or recommend specific medication decisions, but they can discuss referral for medication evaluation and coordinate with prescribers when clinically appropriate.",
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `Your client arrived on time for his fifth session and reported that treatment has been "hard in the exact way you said it would be." His Y-BOCS score this week is 22. He completed several lower-level ERP exercises, including leaving the apartment after checking the stove only once, resisting the urge to look at photos of the stove on his phone during work, and driving home without circling back after hitting a pothole. He stated, "I hated every minute of it. But the panic came down without me doing the thing, which still feels illegal somehow."

He also disclosed a challenge involving his wife. After one exposure, he asked her whether he seemed "off" while chopping vegetables, hoping she would reassure him that he did not look dangerous. She declined to answer directly because they had discussed reducing reassurance. He reported becoming irritated and then ashamed. He stated, "Part of me knew she was helping. Part of me felt abandoned for about ten minutes."

The client described a significant trigger from the previous weekend. His sister asked if he could watch his niece for one hour while she ran an errand. He panicked and declined. He then spent much of the evening mentally reviewing whether refusing meant he was "protecting her from himself" or "letting OCD win." He stated, "I can’t tell if avoidance is wisdom or illness anymore." He also reported that while driving to work yesterday, he saw a bicyclist swerve near his lane. He did not circle back, but he spent twenty minutes scanning local traffic alerts online to make sure there had been no accident.

He asked you directly, "How do I explain this to my wife in a way that doesn’t make me sound insane and doesn’t turn her into my full-time OCD manager?"`,

      questions: [
        {
          id: "samuel-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "Samuel is willing to reduce checking but wants to begin by deleting all stove photos and driving without looking in the rearview mirror after bumps. What is the best clinical response?",
          options: [
            "Agree because rapid elimination of rituals produces faster progress",
            "Discourage exposure until he feels more confident",
            "Collaboratively build a graded hierarchy that targets rituals while keeping tasks safe and tolerable",
            "Focus only on cognitive restructuring because exposure would be too risky with harm thoughts",
          ],
          correctAnswer: 2,
          explanation: "ERP should be structured, graded, and safe. The clinician should reduce rituals collaboratively without assigning tasks that are too extreme or genuinely unsafe.",
        },
        {
          id: "samuel-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: "The client says, 'If I thought it, some part of me must want it.' Which concept is most relevant to address?",
          options: [
            "Catastrophic misinterpretation of bodily sensations",
            "Thought-action fusion",
            "Dissociation",
            "Manic impulsivity",
          ],
          correctAnswer: 1,
          explanation: "Thought-action fusion involves treating the presence of a thought as morally or behaviorally equivalent to action or desire. This is highly relevant in harm-themed OCD.",
        },
        {
          id: "samuel-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: "The client says avoiding his niece made him feel like OCD 'stole something important.' What response best deepens the work without reassuring or rushing exposure?",
          options: [
            "You know you would never hurt her, so we need to get you back to babysitting.",
            "It sounds like the disorder is attacking a relationship that reflects who you want to be, not who OCD says you are.",
            "Avoidance is the problem, so the next step is babysitting her immediately.",
            "Your sister should understand that OCD is not dangerous.",
          ],
          correctAnswer: 1,
          explanation: "This response validates the loss and connects the work to values without giving reassurance or assigning premature exposure.",
        },
        {
          id: "samuel-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: "His wife has been answering repeated reassurance questions to prevent his distress from escalating. What is the best treatment direction?",
          options: [
            "Ask her to stop all reassurance immediately and refuse to engage when he is anxious",
            "Coach the couple, with consent, on gradually reducing accommodation while supporting him through distress",
            "Encourage her to continue reassurance until ERP reduces symptoms",
            "Exclude her from treatment because reassurance is a marital issue",
          ],
          correctAnswer: 1,
          explanation: "Family accommodation often maintains OCD. Reducing it gradually with consent, psychoeducation, and support is more appropriate than abrupt refusal or continued accommodation.",
        },
        {
          id: "samuel-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "His wife emails you a list of his checking rituals and asks whether she is 'making him worse.' You do not have written consent to communicate with her. What should you do?",
          options: [
            "Reply with general psychoeducation because she is his spouse",
            "Thank her for the information but avoid disclosing client information, then discuss consent and possible spouse involvement with Samuel",
            "Ignore the email completely because it is not from the client",
            "Forward the email to Samuel and ask him to respond",
          ],
          correctAnswer: 1,
          explanation: "The counselor may receive collateral information but cannot disclose treatment information without consent. The next step is to address consent and possible involvement with the client.",
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived on time for his twelfth session. His Y-BOCS score is 13, down from 27 at intake. He reported substantial progress: he now checks the stove once, no longer saves photos to review later, and can usually drive home without online checking afterward. He stated, "The thoughts still show up, but they don’t automatically become a courtroom anymore."

He described a meaningful recent success. Two weeks ago, he babysat his niece for forty-five minutes while his sister picked up medication. He reported intense anxiety for the first ten minutes, followed by a gradual decrease. He did not hide kitchen knives, did not text his wife for reassurance, and did not mentally review the visit afterward. He stated, "I was present enough to actually hear her tell me a story about a lizard at school. That felt bigger than the exposure."

He also reported a new challenge related to future planning. He and his wife have resumed discussing whether to start trying for a baby next year. He stated, "I’m better, but now OCD is trying to tell me that if I become a father, that’s the ultimate responsibility test and I’ll fail it." He recognized this as OCD but said the fear still hooks him. He asked, "How do I know when I’m actually ready to step down from weekly therapy instead of just wanting a gold star for doing better?"`,

      questions: [
        {
          id: "samuel-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: "Samuel drove over several potholes and resisted circling back, even though anxiety stayed high for twenty minutes. What is the key therapeutic learning to reinforce?",
          options: [
            "He can make anxiety disappear by waiting long enough",
            "He can tolerate uncertainty and distress without performing the compulsion",
            "He has proven he will never hit anyone while driving",
            "Driving is no longer a trigger and should be removed from treatment",
          ],
          correctAnswer: 1,
          explanation: "ERP does not prove absolute safety or eliminate all anxiety. It teaches tolerance of uncertainty and reduced reliance on compulsions.",
        },
        {
          id: "samuel-q12",
          questionNumber: 12,
          domain: "Treatment planning",
          stem: "The client has improved but worries that intrusive thoughts may return when he and his wife begin trying to have a child. What is the best next treatment focus?",
          options: [
            "Delay family planning until intrusive thoughts stop completely",
            "Develop relapse-prevention plans for predictable responsibility-based triggers while continuing values-based ERP",
            "Shift the diagnosis to generalized anxiety because the worry now involves parenting",
            "Recommend that his wife monitor him around children",
          ],
          correctAnswer: 1,
          explanation: "Parenthood may predictably trigger inflated responsibility and harm obsessions. The best focus is relapse prevention and values-based ERP, not avoidance, diagnosis change, or external monitoring.",
        },
        {
          id: "samuel-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: "He says, 'Maybe recovery is not proving I’m safe. Maybe it’s living without asking the question all day.' What is the best clinical interpretation?",
          options: [
            "He is minimizing legitimate risk",
            "He is developing a more adaptive relationship with uncertainty",
            "He is avoiding deeper childhood religious material",
            "He is becoming less invested in treatment",
          ],
          correctAnswer: 1,
          explanation: "This statement shows movement away from certainty-seeking and toward tolerating uncertainty, a central target in OCD treatment.",
        },
        {
          id: "samuel-q14",
          questionNumber: 14,
          domain: "Treatment planning",
          stem: "Which indicator best suggests Samuel is ready to step down session frequency?",
          options: [
            "He reports having no intrusive thoughts for two weeks",
            "His wife says he asks fewer reassurance questions",
            "He can identify triggers, resist compulsions more consistently, and has a plan for responding to symptom spikes",
            "He avoids cooking and babysitting less often but still feels anxious",
          ],
          correctAnswer: 2,
          explanation: "Step-down should be based on skill use, relapse planning, and improved functioning, not simply temporary symptom absence or reassurance from others.",
        },
      ],
    },
  ],
};
