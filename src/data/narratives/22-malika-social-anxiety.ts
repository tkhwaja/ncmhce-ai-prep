import type { Narrative } from "./types";

export const malikaSocialAnxiety: Narrative = {
  id: "22-malika-social-anxiety",
  title: `Malika — Social Anxiety Disorder`,
  category: "Anxiety Disorders",
  difficulty: "Intermediate",
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 32,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: `Black/African American`,
    relationshipStatus: "Engaged",
    setting: `Outpatient community mental health clinic`,
    payment: `Commercial insurance`,
    typeOfCounseling: "Individual",
    provisionalDiagnosis: `Social Anxiety Disorder: F40.10`,
  },

  presentingProblem: `You are a licensed mental health counselor in an outpatient community mental health clinic. Your client self-referred after declining a promotion opportunity at work for the second time in one year. She stated, "I know I am capable. That is what makes this so embarrassing. I can do the work. I cannot handle being watched doing the work."

The client is a 32-year-old Black woman who works as a senior patient care coordinator in a large outpatient medical practice. She has been with the practice for six years and is known as reliable, organized, and compassionate with patients. Her supervisor recently encouraged her to apply for a team lead role. The position would involve training new staff, speaking during morning huddles, occasionally presenting workflow updates to physicians, and handling escalated patient concerns. She initially agreed to apply, then withdrew the application the night before the interview after imagining herself stumbling over words in front of the leadership team.

The client reported a long-standing fear of being judged, embarrassed, or exposed as incompetent in social and performance situations. She stated, "I rehearse before I make phone calls. I reread emails until the words stop looking like words. If someone looks at me while I am talking, I start monitoring my face, my voice, my hands, everything." She avoids speaking in meetings unless directly called on, avoids eating in front of coworkers, and often chooses virtual trainings over in-person events even when in-person attendance would help her career.

She described multiple safety behaviors. She writes scripts before routine conversations, overprepares for simple updates, avoids eye contact, speaks quickly to finish sooner, wears neutral clothing to avoid being noticed, sits near exits during meetings, and checks with trusted coworkers afterward to ask if she "sounded weird." She stated, "The reassurance helps for a minute. Then I replay it again and find a new thing I did wrong." She denied recurrent unexpected panic attacks. Anxiety occurs most strongly in situations involving possible scrutiny, evaluation, performance, or social visibility.

The symptoms began in adolescence. She recalled being teased in middle school after reading aloud and mispronouncing a word. She also remembered a high school teacher saying, "Speak up, nobody can hear you," while the class laughed. Her family emphasized composure, respectability, and not "giving people something to talk about." She stated, "In my family, people noticed everything—your tone, your clothes, whether you were too loud, too quiet, too much. I learned to stay polished and small."

The client is engaged to a supportive fiancé, Aaron. He encourages her to pursue the promotion and tells her she is "more qualified than half the people in charge." She appreciates him but sometimes feels invalidated by his confidence in her. She stated, "He thinks I need a pep talk. I need my body not to act like a meeting is a firing squad." She has not told many people the extent of her anxiety because she worries they will see her as weak or dramatic.

She reported mild depressive symptoms secondary to feeling stuck and ashamed. She sleeps six to seven hours most nights but often lies awake after socially stressful days replaying conversations. Appetite is normal. She denied suicidal ideation, homicidal ideation, self-harm, mania, psychosis, trauma symptoms, obsessive-compulsive rituals, and substance misuse. She drinks wine socially one or two times per month. She stated that she wants counseling because she is tired of "watching other people with less experience step into rooms I keep talking myself out of." `,

  mentalStatusObservation: `Your client presented in neat professional attire after coming from work. Grooming and hygiene were excellent. She was alert and oriented to person, place, time, and situation. Eye contact was polite but somewhat limited when discussing embarrassment. Speech was clear and coherent, though she spoke more quickly when describing work meetings and slowed when discussing family expectations. Mood was reported as "frustrated and embarrassed." Affect was anxious, constricted, and congruent with content, with brief tearfulness when discussing the promotion she declined.

Psychomotor activity was mildly tense; she clasped her hands and adjusted her sleeves while discussing performance situations. Thought processes were linear and goal-directed. Thought content was notable for fear of negative evaluation, anticipatory anxiety, self-monitoring, post-event rumination, shame, and concern about professional stagnation. No delusions, hallucinations, or formal thought disorder were evident. She denied suicidal and homicidal ideation. Insight was good; she recognized that her fear is excessive relative to the actual danger, but she described feeling unable to stop the physiological and cognitive spiral. Judgment was generally intact, though impaired around avoidance of leadership, meetings, and career opportunities. She denied substance misuse. No acute medical concerns were reported.`,

  familyHistory: `The client is the oldest of three siblings. She was raised by both parents in a close-knit family and described her home as loving but highly concerned with presentation, achievement, and public respectability. Her mother is a school administrator and her father works for the city. The client stated that her parents taught her to be careful in public spaces because "people judge Black women twice as hard." She experiences this message as both protective and constricting. Her younger sister is outgoing and works in sales; the client often compares herself unfavorably to her. Her younger brother recently completed college and often comes to her for practical advice. No known family history of bipolar disorder, schizophrenia, or completed suicide. Her mother has a history of anxiety but has never received formal treatment.`,

  workHistory: `The client completed a bachelor’s degree in health administration and has worked in healthcare operations for eight years. At her current outpatient medical practice, she handles scheduling, patient complaints, insurance coordination, and workflow troubleshooting. Coworkers often rely on her for quiet problem-solving. Her performance reviews are strong, but supervisors have repeatedly noted that she should speak up more in meetings and consider leadership. She has turned down two leadership opportunities because of fear of interviews, presentations, and being evaluated by physicians and senior administrators. She worries that staying in her current role will limit her income and long-term career growth.`,

  intakeSessionSummary: `You completed a full intake assessment and administered the Liebowitz Social Anxiety Scale, which indicated marked social and performance anxiety with significant avoidance. You administered the GAD-7, on which she scored 8, reflecting mild to moderate anxiety, and the PHQ-9, on which she scored 7, reflecting mild depressive symptoms related to shame and professional stagnation. You assessed for panic disorder, generalized anxiety disorder, major depressive disorder, PTSD, OCD, and avoidant personality features. Her symptoms were most clearly tied to social scrutiny, performance evaluation, embarrassment, and negative judgment rather than broad worry, unexpected panic attacks, trauma re-experiencing, obsessions/compulsions, or pervasive personality-level avoidance across all domains.

You discussed the provisional diagnosis of Social Anxiety Disorder. You provided psychoeducation about the cycle of anticipatory anxiety, self-focused attention, safety behaviors, avoidance, post-event rumination, and short-term relief that maintains social anxiety. You introduced a CBT-based treatment plan including cognitive restructuring, reduction of safety behaviors, graded exposure to social and performance situations, attention training, and values-based goals around career and relationships. You clarified that the goal is not to become extroverted or fearless, but to help her act according to values even when anxiety is present. She agreed to weekly sessions and stated, "I do not need to become loud. I just want fear to stop making my decisions." `,

  sections: [
    {
      sessionLabel: `First session`,
      sectionNarrative: ``,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `malika-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `Which detail most strongly supports Social Anxiety Disorder rather than Generalized Anxiety Disorder?`,
          options: [
            `She worries about career advancement and professional stagnation`,
            `Her anxiety is centered on possible scrutiny, embarrassment, performance failure, and negative evaluation`,
            `She has difficulty sleeping after stressful days`,
            `Her symptoms have been present since adolescence`,
          ],
          correctAnswer: 1,
          explanation: `Social Anxiety Disorder is centered on fear of negative evaluation in social or performance situations. GAD involves broader, difficult-to-control worry across multiple domains. Duration and sleep difficulty can occur in both.`,
        },
        {
          id: `malika-q2`,
          questionNumber: 2,
          domain: `Intake/assessment/diagnosis`,
          stem: `The client reports intense physical anxiety during meetings and presentations but denies recurrent unexpected panic attacks. How should this affect the diagnosis?`,
          options: [
            `It rules out Social Anxiety Disorder because physical panic symptoms indicate Panic Disorder`,
            `It supports Panic Disorder because she avoids meetings to prevent panic`,
            `It remains consistent with Social Anxiety Disorder when the symptoms are tied to feared scrutiny and evaluation`,
            `It suggests Agoraphobia because she sits near exits during meetings`,
          ],
          correctAnswer: 2,
          explanation: `Physical anxiety can occur in Social Anxiety Disorder. The key distinction is that her symptoms are triggered by social/performance scrutiny, not recurrent unexpected panic attacks or fear of panic itself.`,
        },
        {
          id: `malika-q3`,
          questionNumber: 3,
          domain: `Core counseling attributes`,
          stem: `The client says she learned to stay “polished and small” because people judge Black women “twice as hard.” Which response best validates context without reducing the case to culture alone?`,
          options: [
            `“That belief may be reinforcing your anxiety and avoidance.”`,
            `“It sounds like that message was protective in some ways and also became a rule that keeps you from taking up space.”`,
            `“Your family likely wanted to prepare you for discrimination.”`,
            `“We should focus on what is in your control rather than how others judge Black women.”`,
          ],
          correctAnswer: 1,
          explanation: `The response honors the reality and protective intent of the message while exploring its current cost. The other options are too corrective, explanatory, or bypass the sociocultural context.`,
        },
        {
          id: `malika-q4`,
          questionNumber: 4,
          domain: `Treatment planning`,
          stem: `What is the most appropriate initial treatment plan for Malika?`,
          options: [
            `CBT for social anxiety with psychoeducation, cognitive restructuring, safety-behavior reduction, and graded exposure`,
            `Insight-oriented exploration of family expectations before any behavioral work`,
            `Assertiveness training only because her main issue is not speaking up`,
            `Relaxation training alone to reduce physiological symptoms before meetings`,
          ],
          correctAnswer: 0,
          explanation: `CBT with graded exposure and reduction of safety behaviors is an evidence-based approach for Social Anxiety Disorder. Family meaning and assertiveness may be included but should not replace the full social anxiety treatment plan.`,
        },
        {
          id: `malika-q5`,
          questionNumber: 5,
          domain: `Professional practice and ethics`,
          stem: `The client asks whether you can write a note telling her employer she should not have to present during morning huddles. What is the best response?`,
          options: [
            `Write the note because presentations are a clear symptom trigger`,
            `Decline all documentation because workplace accommodations are outside counseling`,
            `Discuss the purpose, risks, and possible effects of documentation while avoiding recommendations that automatically reinforce avoidance`,
            `Recommend that she disclose the diagnosis to HR before seeking any accommodation`,
          ],
          correctAnswer: 2,
          explanation: `Documentation may be appropriate in limited situations, but the counselor should avoid blanket avoidance recommendations that maintain social anxiety. Disclosure and accommodation decisions require careful discussion and consent.`,
        },
      ],
    },
    {
      sessionLabel: `Fourth session`,
      sectionNarrative: `Your client arrived for her fourth session and reported that she completed a monitoring log. She identified three common anxiety cycles: overpreparing before meetings, self-monitoring during conversations, and replaying perceived mistakes afterward. She was surprised by how much time post-event rumination consumed. She stated, "I thought the meeting was the problem. Actually, the meeting is twenty minutes. The replay is three hours."

She completed one lower-level exposure by asking a clarifying question during a staff huddle. Her anxiety rose sharply, especially when two coworkers turned to look at her, but she stayed in the conversation and did not apologize afterward. She stated, "I hated every second. But nobody laughed. Nobody acted like I was weird. I still replayed it later, but not as long."

A new issue emerged at work. Her supervisor again encouraged her to consider the team lead role and asked her to co-facilitate a ten-minute training for new staff. The client immediately wanted to decline. She stated, "My first thought was, absolutely not. My second thought was, this is exactly the kind of thing I keep avoiding." She is willing to consider it if it can be planned as an exposure rather than treated as "just be confident."

She also discussed her fiancé’s support. Aaron continues to tell her, "You’ll be fine; everyone likes you." She said she knows he means well, but his reassurance feels like pressure to perform calmness. She stated, "I do not need him to convince me I’m not anxious. I need him to not panic when I am." She asked whether he should attend a session to understand the treatment plan.

Her LSAS score has decreased slightly. She denied suicidal ideation, self-harm, substance misuse, or major depressive symptoms. She continues to feel shame after social interactions but reports that she is beginning to see avoidance as "the thing that keeps taking choices away from me." `,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `malika-q6`,
          questionNumber: 6,
          domain: `Counseling skills and interventions`,
          stem: `Malika says the meeting lasts twenty minutes but the replay lasts three hours. What intervention most directly targets this maintaining factor?`,
          options: [
            `Teach relaxation skills before meetings so the replay becomes less intense`,
            `Help her identify post-event rumination as a safety behavior and practice limiting replay while reviewing objective learning`,
            `Encourage her to ask coworkers for feedback after meetings`,
            `Explore childhood memories of being corrected in public`,
          ],
          correctAnswer: 1,
          explanation: `Post-event rumination maintains social anxiety by reinforcing threat and self-criticism. Treatment should target replay as a maintaining behavior while preserving useful learning.`,
        },
        {
          id: `malika-q7`,
          questionNumber: 7,
          domain: `Counseling skills and interventions`,
          stem: `She asked a clarifying question in a staff huddle, felt anxious, stayed present, and did not apologize afterward. What learning should be reinforced?`,
          options: [
            `Her coworkers probably did not notice her anxiety`,
            `She can participate while anxious without using apology or escape as safety behaviors`,
            `Asking questions is safer than making statements`,
            `Her anxiety decreased because the exposure was successful`,
          ],
          correctAnswer: 1,
          explanation: `The key learning is not that anxiety disappeared or that others did not notice. It is that she can act effectively while anxious and reduce safety behaviors.`,
        },
        {
          id: `malika-q8`,
          questionNumber: 8,
          domain: `Treatment planning`,
          stem: `Her supervisor asks her to co-facilitate a ten-minute training. What is the best clinical approach?`,
          options: [
            `Encourage her to accept immediately because avoiding would reinforce social anxiety`,
            `Plan it collaboratively as a graded exposure, including specific safety behaviors to reduce and coping goals to practice`,
            `Recommend delaying the training until lower-level exposures no longer create anxiety`,
            `Help her request that the supervisor lead most of the training`,
          ],
          correctAnswer: 1,
          explanation: `The training can be a useful exposure if it fits the hierarchy and has clear learning targets. Forcing acceptance, waiting for no anxiety, or diluting the task too much can undermine treatment.`,
        },
        {
          id: `malika-q9`,
          questionNumber: 9,
          domain: `Core counseling attributes`,
          stem: `Malika says she does not need her fiancé to convince her she is not anxious; she needs him not to panic when she is. What is the most therapeutic response?`,
          options: [
            `“It sounds like reassurance feels like pressure, while steadiness would help you practice courage without performing calm.”`,
            `“You should explain to him that reassurance keeps anxiety alive.”`,
            `“Aaron probably feels helpless and is trying to be supportive.”`,
            `“This may be a good reason to bring him into session.”`,
          ],
          correctAnswer: 0,
          explanation: `The response captures the distinction between reassurance and supportive steadiness. It validates her experience before moving into education or partner-session planning.`,
        },
        {
          id: `malika-q10`,
          questionNumber: 10,
          domain: `Professional practice and ethics`,
          stem: `She asks whether Aaron should attend a session to understand treatment. What should be established first?`,
          options: [
            `That Aaron agrees not to reassure her anymore after the session`,
            `The purpose of the session, Malika’s consent, confidentiality limits, and what support role would be clinically useful`,
            `That Aaron understands Social Anxiety Disorder before attending`,
            `That the session will not shift into couples counseling`,
          ],
          correctAnswer: 1,
          explanation: `A partner-support session can be useful when the purpose, consent, confidentiality, and role boundaries are clear. The counselor should not impose Aaron’s behavior or avoid all relational complexity.`,
        },
      ],
    },
    {
      sessionLabel: `Tenth session`,
      sectionNarrative: `Your client arrived for her tenth session with mixed pride and disbelief. She co-facilitated the ten-minute training for new staff. She used one note card instead of a full script, intentionally slowed her speech, and allowed herself to pause once without apologizing. Her anxiety was high at the beginning but decreased enough that she was able to answer two questions from new staff. She stated, "I did not feel confident. I felt scared and did it anyway. That is annoying because now I cannot say I am incapable."

Her supervisor gave positive feedback and again encouraged her to apply for the team lead position. This time, the client did not withdraw immediately. She completed the application and scheduled the interview. She stated, "I still think I might embarrass myself, but I also think I am tired of treating embarrassment like death."

She reported a meaningful conversation with Aaron. He attended one support-focused session and has shifted from reassurance to asking, "Do you want encouragement, practice, or space?" She described this as helpful because it allows her to name what she needs without pretending she is calm. She also attended a family dinner and chose to tell her younger sister that she is working on anxiety in therapy. Her sister responded, "You always seemed like you had it together. I wish I knew it felt like that inside." Malika became tearful describing this and said, "I did not realize how lonely it was to be seen as composed all the time."

A new challenge emerged as the interview approaches. The client wants to prepare, but she recognizes that exhaustive scripting can become a safety behavior. She asked, "How do I prepare enough to respect the opportunity without preparing so much that fear is still running the room?" Her LSAS score has decreased into the moderate range. She denies suicidal ideation, self-harm, mania, psychosis, or substance misuse. `,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: `malika-q11`,
          questionNumber: 11,
          domain: `Counseling skills and interventions`,
          stem: `She says, “I did not feel confident. I felt scared and did it anyway.” What is the most important therapeutic meaning?`,
          options: [
            `Confidence is beginning to replace anxiety`,
            `She learned that valued action is possible even without feeling calm or certain`,
            `The exposure worked because anxiety decreased during the training`,
            `She should now move quickly to more difficult presentations`,
          ],
          correctAnswer: 1,
          explanation: `The key clinical learning is that she can act according to values while anxiety is present. The goal is not perfect confidence or rapid escalation.`,
        },
        {
          id: `malika-q12`,
          questionNumber: 12,
          domain: `Counseling skills and interventions`,
          stem: `She asks how to prepare for the interview without letting fear run the room. What is the best intervention?`,
          options: [
            `Limit preparation to a values-based plan, practice tolerating imperfect answers, and identify which behaviors are preparation versus safety behaviors`,
            `Encourage her to overprepare because interviews are objectively evaluative`,
            `Discourage preparation so the interview becomes a stronger exposure`,
            `Have Aaron conduct repeated mock interviews until her anxiety drops`,
          ],
          correctAnswer: 0,
          explanation: `Preparation can be adaptive or anxiety-maintaining. The best plan distinguishes reasonable preparation from safety behaviors such as exhaustive scripting, certainty-seeking, or over-rehearsal.`,
        },
        {
          id: `malika-q13`,
          questionNumber: 13,
          domain: `Core counseling attributes`,
          stem: `After her sister says she always seemed like she had it together, Malika says she did not realize how lonely it was to be seen as composed all the time. What response best deepens the work?`,
          options: [
            `“Composure protected you, and it also kept people from knowing when you needed support.”`,
            `“Your sister’s response shows people may be more understanding than you expect.”`,
            `“This is why disclosure can be healing.”`,
            `“You do not have to be composed anymore.”`,
          ],
          correctAnswer: 0,
          explanation: `The response captures the dialectic: composure had a protective function and a relational cost. It avoids turning the moment into reassurance or a prescription.`,
        },
        {
          id: `malika-q14`,
          questionNumber: 14,
          domain: `Treatment planning`,
          stem: `With improved functioning and an upcoming leadership interview, what is the best next phase of treatment?`,
          options: [
            `Terminate because she completed a major exposure and symptoms are moderate`,
            `Continue exposure-based work, relapse prevention, leadership-related practice, and reduction of remaining safety behaviors`,
            `Shift entirely to career coaching because the anxiety is now work-specific`,
            `Recommend medication because residual anxiety before the interview suggests CBT is incomplete`,
          ],
          correctAnswer: 1,
          explanation: `Improvement should be consolidated and generalized to high-value situations. Residual anxiety is expected and does not mean treatment failed or should shift away from the anxiety formulation.`,
        },
      ],
    },
  ],
};
