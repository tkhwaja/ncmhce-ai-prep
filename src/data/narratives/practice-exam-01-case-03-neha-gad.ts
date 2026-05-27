import type { Narrative } from "./types";

export const nehaGADPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-03-neha-gad',
  title: 'Neha — Generalized Anxiety Disorder',
  difficulty: "Intermediate",
  minutesPerSection: 7,
  category: 'Generalized Anxiety Disorder',

  clientInfo: {
    age: 32,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'South Asian (Indian American, second generation)',
    relationshipStatus: 'Engaged',
    setting: 'Integrated primary care behavioral health clinic',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Generalized Anxiety Disorder: F41.1',
  },

  presentingProblem: `You are a licensed mental health counselor embedded in an integrated primary care clinic. Your client was referred by her primary care physician after repeated visits over the past six months for headaches, muscle tension, insomnia, stomach discomfort, and intermittent chest tightness. Cardiac workup and lab results have been unremarkable. The client stated, "I know my doctor thinks this is anxiety. I also know anxiety can’t be the reason my whole body feels like it’s bracing for impact all day."

The client reported chronic worry that she described as present "for as long as I can remember," with a marked increase over the past nine months. She identified multiple areas of worry occurring on most days: her father’s health after a mild stroke last year, her mother’s dependence on her for scheduling and translation during medical appointments, her younger brother’s financial instability, the possibility of making a mistake at work, wedding planning, and the fear that if she "lets one thing slide, five things will fall apart behind it." She stated, "My brain acts like every small thing is the first domino in a disaster."

The client works as an operations manager for a growing biotech company. She reported strong performance reviews but said she spends excessive time checking emails before sending them, mentally rehearsing conversations, and staying late to prevent hypothetical errors. She stated, "I’m the person people rely on because I catch things. That sounds positive. It doesn’t feel positive from the inside." She estimated spending two to three hours nightly reviewing the workday in her head, replaying conversations, and anticipating what could go wrong the next day.

She reported difficulty falling asleep at least five nights per week, frequent jaw clenching, irritability, and feeling exhausted but unable to "power down." She described herself as the eldest daughter in a close-knit family and stated, "In my family, being dependable is love. You don’t wait for people to ask. You just handle it." She expressed conflict about this role. She loves her parents and feels pride in being trusted, but she also described resentment and guilt when family members assume she will manage logistics. She stated, "If I say no, I feel selfish. If I say yes, I feel trapped."

The client denied panic attacks, though she reported moments of intense physiological anxiety when her phone rings late at night or when either parent texts, "Call me when you can." She denied obsessions, compulsions, trauma history, manic symptoms, psychosis, substance misuse, and suicidal or homicidal ideation. She drinks one to two cups of coffee each morning and one glass of wine with dinner on some weekends. She denied using cannabis or other substances.

She reported that her fiancé has become increasingly concerned. He told her recently, "You are never actually in the room with me. You’re always in the next problem already." She stated that this hurt because it felt true. She said, "I don’t want to be someone who is technically successful and emotionally unavailable to everyone she loves. I just also don’t know how to stop being the person who keeps everything from falling apart."`,

  mentalStatusObservation: `Your client presented professionally dressed in work attire and appeared physically tired. She was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. Eye contact was appropriate and steady. Speech was clear, coherent, and mildly pressured at times when discussing family responsibilities, though not suggestive of mania. Mood was reported as "wired and tired." Affect was anxious but controlled, with occasional rueful humor when describing her tendency to overfunction. Psychomotor activity was notable for shoulder tension and repeated rubbing of her temples. Thought processes were linear, organized, and detail-oriented. Thought content was notable for excessive worry, catastrophizing, responsibility beliefs, and persistent anticipation of negative outcomes. No delusions, hallucinations, or other psychotic symptoms were evident. Insight was good; she recognized that her worry is excessive and difficult to control. Judgment was intact. She denied current or past suicidal ideation, homicidal ideation, and self-harm. She denied problematic substance use. Recent physical evaluation through primary care was within normal limits, with the exception of muscle tension and stress-related somatic complaints reported by the client.`,

  familyHistory: `The client is the eldest of two children. Her parents immigrated from Gujarat, India, before she was born. Her father, age 67, is a retired motel owner recovering from a mild stroke last year. Her mother, age 61, manages the household and relies heavily on the client to help navigate health care systems, insurance calls, and paperwork. The client described her family as loving, hardworking, and emotionally restrained. She stated, "People show love through sacrifice, not through talking about feelings." Her younger brother, age 27, works inconsistently in freelance videography and often asks the client for practical help. No known family history of bipolar disorder, psychosis, or completed suicide. The client reported that her maternal aunt has "always been a worrier" and frequently seeks reassurance from family members about health concerns. The client denied abuse history and described her childhood as stable but highly achievement-focused.`,

  workHistory: `The client earned a bachelor’s degree in public health and a master’s degree in operations management. She has worked at her current company for four years and was promoted twice. She is regarded as highly competent, responsive, and dependable. She noted, however, that coworkers often bring problems to her because she rarely says no. She described difficulty delegating and a persistent fear that an error by someone else will become her responsibility. She works approximately fifty to fifty-five hours most weeks despite being salaried for forty. She is financially stable and contributes money intermittently to her parents’ expenses, although they have not explicitly asked her to do so. She is currently planning a wedding with her fiancé, who works as a physical therapist.`,

  intakeSessionSummary: `You administered the GAD-7, and the client scored 17, indicating severe anxiety symptoms. You administered the PHQ-9, and the client scored 8, consistent with mild depressive symptoms likely secondary to chronic anxiety and sleep disruption. You completed a risk assessment; she denied suicidal ideation, self-harm, or homicidal ideation. You collaborated with her on an initial formulation of generalized anxiety characterized by pervasive, difficult-to-control worry across multiple domains, muscle tension, irritability, poor sleep, and responsibility beliefs. You provided psychoeducation about the anxiety cycle, the distinction between productive problem-solving and unproductive worry, and the role of avoidance, reassurance seeking, and overfunctioning in maintaining anxiety. You discussed a CBT-oriented treatment plan including worry monitoring, scheduled worry time, cognitive restructuring, boundary exploration, relaxation skills, and sleep-focused interventions. She stated, "I don’t need a motivational speech. I need a way to live that doesn’t feel like emergency management every day." Weekly sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'neha-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Neha endorses chronic worry, overworking, family caretaking, and sleep disruption. Which finding would most clearly tip the formulation toward GAD rather than an Adjustment Disorder with anxiety related to her father\'s diagnosis?',
          options: [
            'The intensity of her worry has worsened in the year since her father\'s heart attack.',
            'She has experienced excessive, hard-to-control worry across multiple domains more days than not for substantially longer than six months, predating the cardiac event.',
            'She meets full somatic criteria including muscle tension, fatigue, and irritability.',
            'Her GAD-7 score of 17 indicates severe symptoms.',
          ],
          correctAnswer: 1,
          explanation: 'Adjustment Disorder requires symptoms tied to an identifiable recent stressor within roughly three months and remitting within six months of its termination. Worry predating the stressor by years across multiple domains is the diagnostic differentiator. Symptom severity, somatic load, and worsening after a stressor are all consistent with GAD but do not by themselves rule out adjustment.',
        },
        {
          id: 'neha-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'The client says, "If I say no, I feel selfish. If I say yes, I feel trapped." What is the most therapeutic response?',
          options: [
            'It sounds like saying no is the work we need to focus on.',
            'It sounds like either choice carries a cost, and the cost itself may be telling us something.',
            'Many eldest daughters from immigrant families describe this exact bind.',
            'Let\'s look at where that rule first showed up in your life.',
          ],
          correctAnswer: 1,
          explanation: 'The best response stays with her articulated dilemma and invites her to name what the cost reveals, without prescribing the answer, generalizing to a cohort, or jumping to origin work before she has named the affect. Each distractor is defensible but moves past her in-the-moment experience.',
        },
        {
          id: 'neha-q3',
          questionNumber: 3,
          domain: 'Treatment planning',
          stem: 'For the opening phase of CBT for GAD with Neha, which is the single best first move?',
          options: [
            'Begin Socratic disputation of her catastrophic predictions during session to weaken belief credibility.',
            'Introduce worry monitoring so she can distinguish triggers, predictions, productive problem-solving, and unproductive worry loops.',
            'Train applied relaxation as the primary intervention to lower baseline arousal before cognitive work.',
            'Assign scheduled worry-postponement time to contain worry to a fixed window.',
          ],
          correctAnswer: 1,
          explanation: 'Self-monitoring is the standard early-phase task in CBT for GAD because the client cannot restructure or experiment with patterns she has not yet mapped. Disputation, relaxation-only, and worry postponement are all defensible CBT components but are not the recommended first move and can become safety behaviors if introduced without prior monitoring.',
        },
        {
          id: 'neha-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Neha reports brief chest tightness when her phone rings late at night but denies discrete attacks peaking within minutes with multiple panic symptoms. How should this shape the working formulation?',
          options: [
            'Add Panic Disorder as a comorbid working diagnosis since chest tightness occurs with a clear physiological cue.',
            'Note cue-linked physiological arousal within the GAD presentation and reassess if discrete unexpected attacks emerge.',
            'Defer the GAD diagnosis until a 30-day symptom diary establishes whether attacks are truly absent.',
            'Conceptualize the chest tightness as a somatic symptom disorder feature given her family medical history.',
          ],
          correctAnswer: 1,
          explanation: 'Panic Disorder requires recurrent unexpected attacks plus persistent worry or behavior change about them. Cue-linked physiological spikes are common in GAD and do not warrant a panic diagnosis. Diagnoses are provisional and revisable; deferring diagnosis or layering an unsupported somatic disorder both overreach the data.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `Your client arrived on time for her fourth session and brought a completed worry log. Her GAD-7 score this week is 13. She reported that monitoring her worry was "annoying but weirdly useful." She noticed that many of her worries begin with a practical issue and quickly expand into catastrophic chains. She gave the example of her father texting, "Call me when you have a second," which led her to imagine hospitalization, permanent disability, financial collapse, and being unable to manage both work and family. When she called, he only wanted help resetting a pharmacy password.

She reported partial benefit from scheduled worry time but said she often turns the exercise into covert planning. She stated, "I sit down to worry on purpose and then end up making color-coded lists that make me feel temporarily calmer and somehow more responsible." She also reported increasing awareness of reassurance seeking. She texts her fiancé questions such as, "Do you think I sounded rude in that email?" or "Do you think my mom is upset with me?" several times per week. She noted that reassurance helps for "five minutes max."

A major stressor occurred last week when her father had transient chest pain and her mother called three times in fifteen minutes while the client was in a meeting. The client left work abruptly, drove to her parents’ house, and then to urgent care with them. The workup was benign. She stated, "Everyone was relieved. I was furious. Then I felt guilty for being furious." Her fiancé later told her, "Every time your family goes into alarm mode, you go with them, and then you need a day to come back to yourself."

The client reported that her fiancé asked whether he could join one session to understand how to support her without becoming "another emergency response unit." The client said she liked the idea but also worried it would become a session about "what’s wrong with me." She then asked, "Am I a bad daughter if I stop answering every call like it’s a fire alarm?"`,
      questions: [
        {
          id: 'neha-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'The client turns scheduled worry time into elaborate list-making that reduces anxiety temporarily. What is the best clinical understanding of this pattern?',
          options: [
            'It shows the intervention is working perfectly',
            'It may function as a subtle safety behavior that reduces uncertainty without changing the worry cycle',
            'It indicates obsessive-compulsive disorder',
            'It means she is not a good candidate for CBT',
          ],
          correctAnswer: 1,
          explanation: 'When worry time becomes elaborate organizing or list-making that primarily reduces distress, it can act as a safety behavior rather than true exposure to uncertainty. The task is not to eliminate structure completely, but to help the client notice when “planning” is actually anxiety management.',
        },
        {
          id: 'neha-q6',
          questionNumber: 6,
          domain: 'Counseling skills and interventions',
          stem: 'The fiancé wants to join a session to learn how to support the client. What is the most appropriate next step?',
          options: [
            'Invite him to the next session because support partners should be included',
            'Decline because individual therapy should remain individual',
            'Explore the client’s goals for his involvement, obtain her consent, and clarify the purpose and limits of a joint session',
            'Ask the fiancé to email you his concerns before deciding',
          ],
          correctAnswer: 2,
          explanation: 'Partner involvement can be clinically useful, but it must be led by the client’s goals and informed consent. Clarifying purpose and boundaries preserves the individual therapy frame while allowing support when it is therapeutically beneficial.',
        },
        {
          id: 'neha-q7',
          questionNumber: 7,
          domain: 'Core counseling attributes',
          stem: 'The client asks, "Am I a bad daughter if I stop answering every call like it’s a fire alarm?" What is the most therapeutic response?',
          options: [
            '"No, healthy boundaries do not make you a bad daughter."',
            '"What does being a good daughter mean to you, and where did you learn that?"',
            '"You need to stop letting guilt control you."',
            '"Your parents are too dependent on you."',
          ],
          correctAnswer: 1,
          explanation: 'Exploring the client’s own definition of duty, care, and identity opens clinically important territory without imposing the counselor’s values. Immediate reassurance or blaming the family can shut down a deeper exploration of cultural meaning and self-expectation.',
        },
        {
          id: 'neha-q8',
          questionNumber: 8,
          domain: 'Counseling skills and interventions',
          stem: 'The brief relief the client gets from texting her fiancé for reassurance is best understood as:',
          options: [
            'Evidence that reassurance is the primary intervention she needs',
            'A maintaining factor that temporarily reduces anxiety but reinforces future reassurance seeking',
            'A sign of dependent personality disorder',
            'A normal communication pattern unrelated to treatment',
          ],
          correctAnswer: 1,
          explanation: 'Reassurance provides short-term relief but often strengthens the long-term anxiety cycle by teaching the client that uncertainty must be resolved externally. In CBT for GAD, helping the client reduce reliance on reassurance is often a useful target.',
        },
        {
          id: 'neha-q9',
          questionNumber: 9,
          domain: 'Professional practice and ethics',
          stem: 'Before any joint session with the client’s fiancé, what is most ethically important?',
          options: [
            'Obtaining a release and clarifying what information the client wants shared in that meeting',
            'Asking the fiancé to promise not to discuss the session afterward',
            'Switching the case to couples therapy immediately',
            'Informing the parents so they are not excluded',
          ],
          correctAnswer: 0,
          explanation: 'Even when the client wants a support person involved, confidentiality and scope must be handled explicitly. Clarifying the client’s consent and the intended focus of the meeting is essential. Involving others or changing treatment format without discussion would be inappropriate.',
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived on time for her tenth session. Her GAD-7 score this week is 7 and her PHQ-9 is 4. She reported sleeping more consistently, with fewer nights spent replaying the day. She has reduced evening email checking, uses a brief wind-down routine, and is more able to distinguish between a solvable problem and an anxious “what if” spiral. She stated, "My mind still offers me ten disasters before breakfast. I just don’t automatically treat them like instructions anymore."

She described one significant success and one ongoing challenge. At work, she delegated a time-sensitive project to a colleague without double-checking every step. She reported feeling intense discomfort for several hours but did not step back in. The project went well. She stated, "It was almost insulting how fine everything was without me overfunctioning." At home, she has begun waiting before returning non-urgent family calls and has practiced saying, "I can help with this after work," instead of dropping everything immediately.

The joint support session with her fiancé occurred two weeks ago with the client’s consent and clear focus. She described it as helpful. Her fiancé has reduced reassurance-giving and instead asks questions such as, "Is this a problem to solve right now, or is this anxiety asking for certainty?" The client said this is "annoying in the most effective possible way."

The ongoing challenge is her mother’s reaction. After the client did not answer a mid-afternoon call immediately, her mother later said, "You used to always be available." The client reported feeling guilty for the rest of the evening. She stated, "Part of me still thinks calm means I’m neglecting something. But another part of me is starting to realize calm might just mean I’m actually here."

She asked you directly, "How do I know when I’m ready to step down from weekly therapy without just turning that into another thing to worry about?"`,
      questions: [
        {
          id: 'neha-q10',
          questionNumber: 10,
          domain: 'Treatment planning',
          stem: 'The client asks how to know when she is ready to step down from weekly therapy. What is the most appropriate response?',
          options: [
            'Recommend termination now because her scores improved',
            'Collaboratively review symptom change, functioning, remaining targets, and a relapse-prevention plan before reducing frequency',
            'Keep weekly therapy indefinitely because GAD is chronic',
            'Tell her readiness is a feeling and she should trust her instinct',
          ],
          correctAnswer: 1,
          explanation: 'Step-down planning is best based on collaborative review of symptom improvement, functional change, remaining treatment goals, and relapse prevention. Neither abrupt termination nor indefinite weekly treatment is indicated solely based on diagnosis.',
        },
        {
          id: 'neha-q11',
          questionNumber: 11,
          domain: 'Counseling skills and interventions',
          stem: 'The client delegated a project and tolerated the discomfort without stepping back in. Clinically, this is best understood as:',
          options: [
            'Avoidance of leadership responsibility',
            'Behavioral experimentation that challenges responsibility beliefs and intolerance of uncertainty',
            'Evidence she no longer has anxiety',
            'A form of exposure and response prevention for compulsions',
          ],
          correctAnswer: 1,
          explanation: 'Letting go of excessive checking and overcontrol while observing the outcome functions as a behavioral experiment in CBT for GAD. It directly tests predictions about disaster and over-responsibility. Improvement does not mean symptoms are fully gone, and this is not classic ERP for OCD.',
        },
        {
          id: 'neha-q12',
          questionNumber: 12,
          domain: 'Core counseling attributes',
          stem: 'The client says, "Part of me still thinks calm means I’m neglecting something." What is the most therapeutic response?',
          options: [
            '"That belief has been wrong all along."',
            '"What has calm come to mean in your life, and what makes it hard to trust?"',
            '"You need to remind yourself daily that rest is productive."',
            '"That is just your anxiety talking."',
          ],
          correctAnswer: 1,
          explanation: 'This response deepens exploration of the client’s lived meaning of calm, vigilance, and responsibility rather than arguing with her experience. Labeling or correcting too quickly can flatten an important therapeutic insight.',
        },
        {
          id: 'neha-q13',
          questionNumber: 13,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate final-phase focus for this client if she steps down from weekly sessions?',
          options: [
            'Eliminate all future anxiety symptoms',
            'Relapse prevention, early warning sign identification, and continued practice with uncertainty and boundaries',
            'Shift entirely to family therapy with her parents',
            'Discontinue all structured interventions to build confidence',
          ],
          correctAnswer: 1,
          explanation: 'The final phase of treatment for GAD typically emphasizes relapse prevention, recognition of early warning signs, and ongoing independent use of skills around uncertainty, reassurance seeking, and boundaries. The goal is not zero anxiety, but flexible, sustainable management.',
        },
      ],
    },
  ],
};
