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
          id: `kiara-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `Which pattern most strongly supports Borderline Personality Disorder rather than an Adjustment Disorder related to the recent breakup?`,
          options: [
            `She engaged in superficial cutting after the breakup`,
            `She reports intense sadness and anger after her girlfriend asked for space`,
            `She has a long-standing pattern of unstable relationships, identity disturbance, affective instability, abandonment sensitivity, impulsivity, dissociation, and recurrent self-harm`,
            `She drank heavily one night after relationship conflict`,
          ],
          correctAnswer: 2,
          explanation: `The key distinction is the pervasive, long-standing cross-context pattern. A breakup, alcohol use, or one self-harm episode could occur in many disorders, but the broader enduring pattern supports BPD.`,
        },
        {
          id: `kiara-q2`,
          questionNumber: 2,
          domain: `Professional practice and ethics`,
          stem: `Kiara says, “I’m not trying to die. I’m trying to stop feeling abandoned for five minutes.” What is the most appropriate clinical response?`,
          options: [
            `Accept her explanation and document the cutting as non-suicidal self-injury only`,
            `Explain that cutting always reflects suicidal intent, even when the client denies it`,
            `Validate the function of self-harm while completing a direct risk assessment, safety plan, and monitoring of escalation risk`,
            `Warn her that any future cutting will require hospitalization`,
          ],
          correctAnswer: 2,
          explanation: `Non-suicidal self-injury and suicidal behavior are distinct but can overlap in risk. The clinician should validate the function without minimizing danger and should assess intent, means, history, escalation, substance use, and protective factors.`,
        },
        {
          id: `kiara-q3`,
          questionNumber: 3,
          domain: `Core counseling attributes`,
          stem: `Which response best validates Kiara’s abandonment pain without reinforcing self-harm or crisis escalation?`,
          options: [
            `“You were not abandoned; your girlfriend asked for space.”`,
            `“The fear feels unbearable, and we need to find ways for you to survive it without hurting yourself.”`,
            `“You need to stop giving relationships so much control over your safety.”`,
            `“It makes sense that you cut if the pain was that intense.”`,
          ],
          correctAnswer: 1,
          explanation: `The response validates emotional intensity while clearly orienting toward safer behavior. It avoids invalidating the fear, blaming the client, or implying self-harm is understandable as a solution.`,
        },
        {
          id: `kiara-q4`,
          questionNumber: 4,
          domain: `Treatment planning`,
          stem: `In the first phase of treatment, which target should receive highest priority?`,
          options: [
            `Processing childhood invalidation and father abandonment`,
            `Reducing self-harm, substance-related crisis escalation, and other high-risk behaviors`,
            `Helping her decide whether to reconnect with her ex-girlfriend`,
            `Improving salon attendance and professional identity`,
          ],
          correctAnswer: 1,
          explanation: `DBT-informed treatment prioritizes life-threatening and high-risk behaviors first. Trauma history, relationships, and work are important, but stabilization and safety come first.`,
        },
        {
          id: `kiara-q5`,
          questionNumber: 5,
          domain: `Intake/assessment/diagnosis`,
          stem: `Her rapid shifts from idealizing people to feeling disgusted by them are best understood as:`,
          options: [
            `Psychotic thought disorganization`,
            `Splitting under attachment threat`,
            `Manic mood cycling`,
            `Obsessive rumination`,
          ],
          correctAnswer: 1,
          explanation: `Splitting involves rapid shifts between all-good and all-bad views of self or others, often intensified by attachment threat. This does not reflect psychosis or mania based on the case details.`,
        },
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
          id: `kiara-q6`,
          questionNumber: 6,
          domain: `Core counseling attributes`,
          stem: `Kiara says your rescheduling “wrecked” her whole day and made her think you were sick of her. What is the best therapist response?`,
          options: [
            `“I had a valid training, but I understand the timing was difficult.”`,
            `“This seems like transference from your father’s inconsistency.”`,
            `“I can hear how strongly that landed, and I want us to look at what happened between the message, the fear, and the urge to not come back.”`,
            `“We need to keep boundaries clear, so rescheduling cannot become a crisis.”`,
          ],
          correctAnswer: 2,
          explanation: `The best answer validates the rupture and turns it into a treatment target without defending, overinterpreting, or rigidly emphasizing boundaries in a way that may feel invalidating.`,
        },
        {
          id: `kiara-q7`,
          questionNumber: 7,
          domain: `Counseling skills and interventions`,
          stem: `Kiara almost quit by text after a work request but used STOP and clarified the request the next morning. What is the most accurate clinical interpretation?`,
          options: [
            `She avoided confrontation by delaying the response`,
            `She interrupted an impulsive behavior chain and checked facts before acting`,
            `She suppressed her anger to preserve her job`,
            `She sought reassurance from her manager instead of trusting herself`,
          ],
          correctAnswer: 1,
          explanation: `She paused, regulated enough to delay action, and clarified facts before responding. This is effective chain interruption and distress tolerance, not avoidance or suppression.`,
        },
        {
          id: `kiara-q8`,
          questionNumber: 8,
          domain: `Professional practice and ethics`,
          stem: `Kiara did not answer your rescheduling message for six hours because she wanted you to “feel ignored back.” What is the best way to address this?`,
          options: [
            `Ignore it because she returned to session and did not self-harm`,
            `Frame it as a therapy-interfering behavior and explore the function without shaming her`,
            `Set a rule that she must respond to scheduling messages within 24 hours`,
            `Interpret it as manipulation and clarify that therapy will not continue if she retaliates`,
          ],
          correctAnswer: 1,
          explanation: `The behavior interferes with treatment and reflects an attachment/retaliation pattern. It should be addressed directly and nonjudgmentally, not ignored, punished, or labeled manipulatively.`,
        },
        {
          id: `kiara-q9`,
          questionNumber: 9,
          domain: `Treatment planning`,
          stem: `Kiara asks if it is normal to see the pattern more clearly but still feel overwhelmed when activated. What is the best response?`,
          options: [
            `“Insight usually comes before consistent regulation, so this is a real but early stage of change.”`,
            `“If you can see the pattern, you should be able to stop it with practice.”`,
            `“This means trauma work should wait until you feel less activated.”`,
            `“Medication may be needed because skills are not reducing intensity fast enough.”`,
          ],
          correctAnswer: 0,
          explanation: `Recognizing chains often precedes reliable emotion regulation. The response normalizes early progress without implying insight is enough, prematurely changing treatment focus, or overemphasizing medication.`,
        },
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
          id: `kiara-q10`,
          questionNumber: 10,
          domain: `Counseling skills and interventions`,
          stem: `Kiara wants to respond to her father without pretending she is not angry and without “handing him my whole nervous system again.” What is the best intervention?`,
          options: [
            `Use interpersonal effectiveness to clarify objectives, relationship goals, self-respect goals, boundaries, and likely consequences before responding`,
            `Encourage her to avoid responding until she no longer feels activated`,
            `Help her send the most emotionally honest version so she stops self-silencing`,
            `Suggest she keep the response brief and neutral to avoid escalation`,
          ],
          correctAnswer: 0,
          explanation: `Interpersonal effectiveness helps the client balance objectives, relationship, and self-respect. The other answers prescribe avoidance, discharge, or a specific style without doing the clinical decision-making work.`,
        },
        {
          id: `kiara-q11`,
          questionNumber: 11,
          domain: `Core counseling attributes`,
          stem: `Kiara says, “I still wanted her to pick me. I just didn’t need to destroy myself over it.” What does this most likely reflect?`,
          options: [
            `Suppressed dependency needs that require deeper attachment work before discharge`,
            `Improved ability to experience attachment pain without impulsive self-destruction`,
            `Residual denial about wanting the relationship back`,
            `A shift from BPD to adjustment-related grief`,
          ],
          correctAnswer: 1,
          explanation: `This statement reflects a key treatment gain: the pain remains, but the client is less controlled by it behaviorally. BPD recovery does not require absence of attachment needs.`,
        },
        {
          id: `kiara-q12`,
          questionNumber: 12,
          domain: `Treatment planning`,
          stem: `Self-harm has decreased, crisis duration is shorter, and functioning is improving. What is the best next phase of treatment?`,
          options: [
            `Immediate termination because the primary safety target has improved`,
            `Continue consolidating emotion regulation and interpersonal effectiveness while gradually deepening work on identity, attachment, and patterns as stability holds`,
            `Switch entirely to career coaching because work stability is now the main goal`,
            `Move immediately into intensive trauma processing because she is no longer cutting`,
          ],
          correctAnswer: 1,
          explanation: `Improved safety allows treatment to deepen gradually while maintaining stabilization. Immediate termination or abrupt trauma processing would be premature.`,
        },
        {
          id: `kiara-q13`,
          questionNumber: 13,
          domain: `Professional practice and ethics`,
          stem: `Kiara asks you to read three draft texts to her father and tell her which one to send. What is the best response?`,
          options: [
            `Choose the version that best protects her emotional boundaries`,
            `Decline to read them because that would create dependence`,
            `Review the drafts collaboratively while helping her evaluate goals and consequences without taking over the decision`,
            `Tell her to send none of them until she has discussed it with Tiana`,
          ],
          correctAnswer: 2,
          explanation: `The counselor can support skill-building without becoming the decision-maker. This preserves autonomy and strengthens judgment.`,
        },
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
