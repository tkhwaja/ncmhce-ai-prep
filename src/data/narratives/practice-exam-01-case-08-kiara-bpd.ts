import type { Narrative } from "./types";

export const kiaraBPDPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-08-kiara-bpd',
  title: 'Kiara — Borderline Personality Disorder',
  category: 'Borderline Personality Disorder',
  difficulty: "Advanced",
  minutesPerSection: 7,

  clientInfo: {
    age: 27,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Black/African American',
    relationshipStatus: 'Single',
    setting: 'Community mental health clinic',
    payment: 'Medicaid',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Borderline Personality Disorder: F60.3',
  },

  presentingProblem: `You are a licensed mental health counselor at a community mental health clinic. Your client was referred after discharge from a psychiatric emergency program nine days ago. She presented there following a breakup, heavy drinking, and superficial cuts to her forearm that did not require stitches. She was evaluated, medically cleared, not admitted, and referred for outpatient counseling. At intake she stated, "Everybody keeps acting like I’m trying to die. I’m trying to stop feeling abandoned for five minutes."

The client reported a long-standing pattern of intense, unstable relationships, rapidly shifting emotions, chronic emptiness, and impulsive behavior that worsens when she fears rejection. She described the recent breakup with her on-and-off girlfriend of eighteen months as "the last straw," though by history it fit a familiar pattern. She stated, "If somebody pulls back even a little, it feels like the floor opens up under me." She reported sending more than forty text messages in one night after her girlfriend said she needed "space." When no reply came, the client drank, cut her arm, and called a friend saying, "I can’t do this anymore." She denied suicidal intent and stated the self-harm was meant "to get my body to match my head."

She reported beginning to cut herself at age 15 after arguments with her mother and periods of feeling "too much for everybody." She endorsed recurrent episodes of anger, shame, frantic efforts to avoid abandonment, dissociative "floaty" feelings during interpersonal conflict, and sudden swings between idealizing and devaluing other people. She stated, "I either feel obsessed with someone or disgusted by them. It changes fast." She described herself as never knowing who she is for very long. She changes her style, goals, and sense of identity depending on who she is close to at the time.

The client works as a hairstylist in a busy salon. She reported talent and strong client loyalty but inconsistent attendance after emotionally difficult weekends. She stated, "People love me until I miss one shift or get an attitude. Then I become the problem." She described her manager as supportive but "tired of my chaos." She has been placed on a final warning for one no-call/no-show day last month.

She reported a history of childhood invalidation and instability. Her father was inconsistently involved and frequently promised visits he did not keep. Her mother worked multiple jobs and "loved me, but did not have space for me to fall apart." The client stated, "I learned early that if I felt something, I’d better feel it alone or get called dramatic." She denied psychosis, mania, and current homicidal ideation. She denied a history of suicide attempts but endorsed past self-harm during high distress. She drinks socially on weekends and reported occasional episodes of heavy drinking after relationship conflict. She denied other substance use.

The client denied current suicidal intent but acknowledged, "When I get activated, I stop caring what happens to me." She identified one close friend, Tiana, as the only person she consistently trusts. She stated she is willing to try therapy because, "Whatever I’m doing on my own is obviously not working."`,

  mentalStatusObservation: `Your client presented in fashionable salon attire with careful makeup and nails. She was alert and oriented to person, place, time, and situation. Grooming was excellent. Eye contact was direct and at times intense. Speech was fluent, coherent, and variable in rate depending on emotional content. Mood was reported as "embarrassed and mad." Affect was labile, shifting from tearful to sarcastic to guarded within the session. Psychomotor activity was mildly restless; she adjusted her sleeves repeatedly and bounced one leg when discussing the breakup. Thought processes were linear overall though highly emotionally driven. Thought content was notable for abandonment fears, shame, anger, splitting-type perceptions of others, chronic emptiness, and self-critical beliefs. No delusions or hallucinations were evident. She described brief dissociative feelings during conflict but was fully oriented in session. Insight was partial; she recognized the repetitive nature of her crises but struggled to pause when distressed. Judgment was fair outside crisis and poor during emotional escalation. She denied current suicidal intent, plan, and preparatory behavior. She denied homicidal ideation. Superficial healing cuts were visible on her left forearm. She denied current intoxication or withdrawal and denied significant medical concerns.`,

  familyHistory: `The client is the older of two daughters. Her mother, age 49, worked multiple jobs throughout the client’s childhood and is now a home health aide. Their relationship is emotionally close but conflictual; the client stated, "My mother loves me and also thinks I choose every bad thing that happens to me." Her father has a long history of inconsistent contact, broken promises, and periods of disappearance. She has a younger sister, age 22, in nursing school, whom she describes as "the stable one." The client reported that a maternal aunt had "bad depression" and was hospitalized once after a suicide attempt. She suspects her father has alcohol problems but does not know of any formal diagnosis. No known family history of bipolar disorder or schizophrenia.`,

  workHistory: `The client completed cosmetology school after high school and has worked as a licensed hairstylist for seven years. She has a strong clientele and is highly skilled in color work and styling for textured hair. She has remained at her current salon for almost two years, longer than any previous job. She reported a pattern of work instability tied to interpersonal conflict, lateness after emotional crises, and walking out after perceived disrespect. Financial stress is recurrent because her income fluctuates with attendance and client retention. She rents a room from an older cousin and hopes eventually to open a small suite of her own, though she stated her life currently feels "too unstable to trust myself with more responsibility."`,

  intakeSessionSummary: `You completed a thorough risk assessment focused on self-harm, suicidal intent, substance use during crises, and protective factors. The client denied current suicidal intent, plan, and preparatory behavior, and identified Tiana as a support person she would answer during a crisis. You administered the Columbia Suicide Severity Rating Scale and completed a collaborative safety plan. You reviewed limits of confidentiality and explained that self-harm without suicidal intent still requires active monitoring. Based on her long-standing pattern of unstable relationships, affective instability, identity disturbance, chronic emptiness, frantic efforts to avoid abandonment, anger, impulsive behavior, transient stress-related dissociation, and recurrent self-harm, Borderline Personality Disorder was discussed as a working diagnosis. You introduced a DBT-informed treatment framework emphasizing life-threatening behaviors first, followed by therapy-interfering behaviors, emotion regulation, distress tolerance, and interpersonal effectiveness. She stated, "I don’t need somebody to baby me. I need somebody to help me not burn my own life down." Weekly sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'kiara-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature most strongly supports Borderline Personality Disorder rather than an adjustment disorder after a breakup?',
          options: [
            'Recent self-harm after conflict',
            'A pervasive, long-standing pattern of instability in relationships, identity, affect, and impulse control',
            'Feeling sad after a relationship ended',
            'One episode of heavy drinking',
          ],
          correctAnswer: 1,
          explanation: 'Borderline Personality Disorder is defined by a pervasive pattern across time and contexts, not merely a recent crisis. The client’s chronic instability in relationships, identity, affect, and self-harm history points to a personality pattern rather than a time-limited adjustment reaction.',
        },
        {
          id: 'kiara-q2',
          questionNumber: 2,
          domain: 'Professional practice and ethics',
          stem: 'The client says, "I’m not trying to die, so people need to stop overreacting." What is the most appropriate response?',
          options: [
            'Accept that no further risk assessment is needed',
            'Explain that non-suicidal self-injury still requires careful assessment and safety planning',
            'Tell her cutting always means suicidal intent',
            'Warn her she will be hospitalized if she cuts again',
          ],
          correctAnswer: 1,
          explanation: 'Non-suicidal self-injury and suicidal behavior are distinct, but both warrant careful clinical attention. The counselor should assess intent, function, triggers, means, and protective factors rather than dismiss the behavior or equate it automatically with a suicide attempt.',
        },
        {
          id: 'kiara-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'The client said, "I’m trying to stop feeling abandoned for five minutes." What is the most therapeutic initial response?',
          options: [
            '"That sounds exhausting and intense. I’m glad you said it that directly."',
            '"You need to stop giving other people so much power."',
            '"That’s a cognitive distortion caused by low self-esteem."',
            '"You were not abandoned. She only asked for space."',
          ],
          correctAnswer: 0,
          explanation: 'Validation is foundational with clients who have chronic invalidation histories. Acknowledging the intensity of the experience without endorsing unsafe behavior helps build alliance and reduces the likelihood of reenacting invalidation in treatment.',
        },
        {
          id: 'kiara-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'What is the highest-priority initial treatment target for this client?',
          options: [
            'Exploring childhood attachment trauma in depth',
            'Reducing self-harm and other life-threatening or high-risk behaviors',
            'Improving job satisfaction',
            'Reuniting with her girlfriend',
          ],
          correctAnswer: 1,
          explanation: 'In a DBT-informed approach, life-threatening and self-damaging behaviors are treated first. Trauma exploration, work goals, and relationship concerns matter, but they follow stabilization and safety.',
        },
        {
          id: 'kiara-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'The client describes quickly shifting from idealizing to despising the same person. This is most consistent with:',
          options: [
            'Thought broadcasting',
            'Splitting',
            'Exposure avoidance',
            'Obsessions',
          ],
          correctAnswer: 1,
          explanation: 'Splitting involves viewing self or others in all-good or all-bad terms with rapid shifts between the two. It is a common feature in Borderline Personality Disorder and often intensifies under attachment threat.',
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived ten minutes late to her fifth session and appeared guarded at first. She reported that she had not cut herself in the past four weeks but described coming "close" twice. She used cold water, paced breathing, and called Tiana once instead. She stated, "I still wanted to explode. I just didn’t."

She described a conflict at work that became a meaningful treatment test. Her manager asked her to switch a Saturday shift to accommodate another stylist. The client initially perceived this as proof that she was being disrespected and almost quit by text. She stated, "My first thought was, ‘She thinks I’m disposable.’" Instead, she waited, used the STOP skill, and responded the next morning asking whether the request was optional or urgent. Her manager replied that it was optional and apologized for the wording. The client stated, "I felt stupid and relieved at the same time."

She also disclosed a new challenge in therapy itself. Last week you needed to reschedule her appointment due to a training. She reported feeling furious and humiliated, and said, "I immediately thought, ‘Of course. She’s sick of me already.’" She nearly did not return. She stated, "I know you’re going to turn this into a growth moment, but it actually wrecked my whole day." She also acknowledged that she did not answer your rescheduling message for six hours because she wanted you to "feel ignored back."

Her diary card shows reduced intensity and duration of emotional crises, though the frequency of abandonment-based thoughts remains high. She reported that heavy drinking has decreased because she now recognizes it makes her urges worse the next day. She has begun noticing the sequence of trigger → interpretation → action urge more clearly. She asked, "Is it normal that I’m seeing the pattern better but still feeling just as crazy when it happens?"`,
      questions: [
        {
          id: 'kiara-q6',
          questionNumber: 6,
          domain: 'Core counseling attributes',
          stem: 'The client says your rescheduling "wrecked" her whole day. What is the most appropriate response?',
          options: [
            '"That reaction seems disproportionate."',
            '"I can hear how strongly that landed for you, and it makes sense we should talk about what it brought up."',
            '"You know I had a valid reason to reschedule."',
            '"It sounds like you are transferring old feelings onto me."',
          ],
          correctAnswer: 1,
          explanation: 'The therapeutic alliance with BPD clients benefits from direct validation and willingness to discuss rupture. Defending yourself, confronting intensity prematurely, or moving too quickly to interpretation can escalate shame and reenact invalidation.',
        },
        {
          id: 'kiara-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'The client nearly quit by text after a work request but instead used STOP and clarified the situation. This most clearly demonstrates:',
          options: [
            'Suppression of emotion',
            'Effective distress tolerance interrupting an impulsive behavior chain',
            'Avoidance of interpersonal conflict',
            'Dependence on external reassurance',
          ],
          correctAnswer: 1,
          explanation: 'Using a DBT skill to interrupt action urges and gather more information is a clear example of distress tolerance in action. She did not avoid the issue; she responded more effectively after pausing.',
        },
        {
          id: 'kiara-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'The client nearly skipped therapy after a rupture caused by rescheduling. What is the most appropriate therapist stance?',
          options: [
            'Avoid discussing the rupture so she can calm down',
            'Explore the rupture directly because therapy-interfering behaviors are legitimate treatment targets',
            'Terminate if she threatens not to attend again',
            'Reduce boundaries to reassure her',
          ],
          correctAnswer: 1,
          explanation: 'Therapy-interfering behaviors, including withdrawal after perceived rejection, should be addressed directly in structured treatment. Avoidance misses the clinical opportunity; punitive or overly flexible responses both undermine treatment.',
        },
        {
          id: 'kiara-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'The client asks whether it is normal to see the pattern better while still feeling intensely overwhelmed. What is the most appropriate response?',
          options: [
            'Tell her insight should reduce symptoms quickly',
            'Normalize that awareness often improves before emotional reactivity decreases',
            'Shift immediately into trauma processing',
            'Suggest medication changes as the primary solution',
          ],
          correctAnswer: 1,
          explanation: 'Clients often recognize chains and triggers before they can reliably regulate them. Naming that sequence as normal supports persistence and reduces shame while reinforcing ongoing skills practice.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived on time for her twelfth session. She has gone nine weeks without self-harm. Her diary card shows fewer crisis-level episodes, and when she does escalate, the duration has decreased. She reported one major challenge and one major success during the past month.

The challenge involved her former girlfriend unexpectedly contacting her after several weeks of no contact. The client stated, "Old me would have gone right back in or blown everything up." Instead, she waited twenty-four hours, consulted her goals, and sent a brief message saying she was not willing to restart contact without a calmer conversation in person. She described feeling proud and grief-stricken at the same time. "I still wanted her to pick me. I just didn’t need to destroy myself over it."

The success involved work. After a difficult but constructive meeting, her manager removed the final warning and told her she has been more reliable and more direct. The client stated, "I didn’t realize how much of my life was reacting before I had facts." She is considering training an apprentice at the salon, which would be the first time she has taken a mentoring role.

She also disclosed a painful family moment. Her father texted after six months of silence asking, "You good?" She laughed while recounting it but then cried. She stated, "That text was so small, and somehow it hit every bruise I have." She did not reply immediately. Instead, she wrote three versions of a response and brought them to session. She asked, "How do I answer him without pretending I’m not angry and without handing him my whole nervous system again?"

She denied suicidal intent and self-harm urges this week. She expressed interest in continuing treatment and asked what the next phase should focus on now that she feels "less constantly on fire."`,
      questions: [
        {
          id: 'kiara-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'The client wants to respond to her father without pretending she is not angry and without losing control. What is the most appropriate next step?',
          options: [
            'Write the message for her',
            'Use interpersonal effectiveness skills to help her clarify goals, boundaries, and desired tone before responding',
            'Tell her not to respond at all',
            'Encourage immediate emotional honesty without editing',
          ],
          correctAnswer: 1,
          explanation: 'DBT interpersonal effectiveness is designed for exactly this kind of value-laden, high-activation communication. Helping her identify objectives, relationship goals, and self-respect goals supports an intentional response rather than avoidance or impulsive discharge.',
        },
        {
          id: 'kiara-q11',
          questionNumber: 11,
          domain: 'Core counseling attributes',
          stem: 'The client says, "I still wanted her to pick me. I just didn’t need to destroy myself over it." Clinically, this most reflects:',
          options: [
            'Suppressed dependency needs',
            'Improved capacity to hold painful attachment feelings without acting self-destructively',
            'Residual denial about the relationship',
            'Evidence the diagnosis was inaccurate',
          ],
          correctAnswer: 1,
          explanation: 'A key marker of progress is not the absence of attachment pain, but increased capacity to feel it without self-harm, chaos, or impulsive reenactment. Her statement reflects both emotional honesty and behavioral change.',
        },
        {
          id: 'kiara-q12',
          questionNumber: 12,
          domain: 'Treatment planning',
          stem: 'Now that self-harm has decreased and crises are shorter, treatment should next emphasize:',
          options: [
            'Immediate termination because the highest-risk behaviors have improved',
            'Continued consolidation of emotion regulation and interpersonal skills, with later exploration of deeper patterns as stability holds',
            'Shifting entirely to career coaching',
            'Reducing therapy to as-needed crisis visits only',
          ],
          correctAnswer: 1,
          explanation: 'Once acute safety is more stable, treatment can deepen while maintaining gains in regulation and relationships. Abrupt termination or narrowing the focus prematurely would ignore the developmental nature of BPD recovery.',
        },
        {
          id: 'kiara-q13',
          questionNumber: 13,
          domain: 'Professional practice and ethics',
          stem: 'The client asks you to read all three draft texts to her father and tell her which one to send. What is the most appropriate response?',
          options: [
            'Choose the most mature-sounding message',
            'Refuse to read them because that would create dependence',
            'Review them collaboratively while avoiding taking over the decision, so she strengthens her own judgment',
            'Tell her to send none of them until next month',
          ],
          correctAnswer: 2,
          explanation: 'The counselor can help the client evaluate options without making the decision for her. Taking over undermines autonomy; blanket refusal misses the skill-building opportunity; delaying arbitrarily is not clinically grounded.',
        },
      ],
    },
  ],
};
