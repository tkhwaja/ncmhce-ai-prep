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
          stem: 'Which feature of the presentation most strongly supports Generalized Anxiety Disorder rather than normal situational stress?',
          options: [
            'She is planning a wedding',
            'She experiences worry across multiple domains that is persistent, excessive, and difficult to control',
            'She has headaches and stomach discomfort',
            'She wants to perform well at work',
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
    },
  ],
};
