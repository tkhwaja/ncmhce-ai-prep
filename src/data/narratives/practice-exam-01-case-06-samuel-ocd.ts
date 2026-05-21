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
    },
  ],
};
