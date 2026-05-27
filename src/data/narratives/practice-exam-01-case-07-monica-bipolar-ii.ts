import type { Narrative } from "./types";

export const monicaBipolarIIPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-07-monica-bipolar-ii',
  title: 'Monica — Bipolar II Disorder',
  category: 'Bipolar II Disorder',
  difficulty: "Advanced",
  minutesPerSection: 7,

  clientInfo: {
    age: 29,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Filipina American',
    relationshipStatus: 'Partnered',
    setting: 'Outpatient behavioral health clinic with psychiatric collaboration',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Bipolar II Disorder, current episode depressed: F31.81',
  },

  presentingProblem: `You are a licensed mental health counselor in an outpatient behavioral health clinic. Your client was referred by her primary care physician after completing a depression screening that revealed significant symptoms and a more detailed follow-up interview that raised concern for bipolar spectrum illness. The client stated, "I came in thinking I was just bad at handling stress. Now everyone is asking me about times when I felt too good, and I don’t know what counts."

The client reported a current depressive period lasting approximately seven weeks, characterized by low mood, fatigue, decreased motivation, guilt, poor concentration, reduced appetite, and social withdrawal. She stated, "Everything feels heavy and embarrassing. Even texting back feels like a task I need to apologize for." She reported arriving late to work twice in the past month, missing one deadline, and feeling unlike herself. She denied current suicidal intent but endorsed passive thoughts such as, "It would be easier if I could disappear for a while." She denied plan, intent, or preparatory behavior.

When asked about prior mood changes, the client described recurrent periods lasting four to six days during which she sleeps three to four hours per night, feels unusually confident, becomes highly productive, talks more quickly, starts multiple projects, spends impulsively online, and feels "like the interesting version of myself is back." She stated, "Those are the weeks where I deep-clean my whole apartment at 2 a.m., design a side business, flirt with strangers online, and think, ‘Finally, I’m normal again.’" She denied psychotic symptoms during these periods and denied a history of hospitalization. She acknowledged that friends and her partner have sometimes told her she seems "sped up" or "intense" during these times, but she has historically dismissed those comments because she feels better than she does in her depressed states.

The client reported that nine months ago, her PCP prescribed an SSRI for presumed recurrent depression. She stated that during the second month on the medication she had a ten-day stretch of very low sleep, excessive confidence, unusual irritability, and impulsive online spending. She maxed out one credit card purchasing equipment for a small candle-making business she no longer pursues. She stopped the medication on her own because she felt "too revved up and kind of obnoxious." She did not tell the prescriber what happened because she was embarrassed and assumed it meant she had "faked being depressed."

The client works as an associate art director at a marketing agency. She described her job as deadline-driven and creatively rewarding but noted that her mood shifts affect how consistently she works. She stated, "When I’m low, I can’t think. When I’m high-energy, I have ideas for days, but I also become impossible to edit." Her partner of three years has become increasingly concerned and recently told her, "I never know whether I’m about to get the shut-down version of you or the version that wants to reorganize our whole life overnight."

The client denied substance misuse, reporting occasional alcohol on weekends and no cannabis or illicit drug use. She denied trauma symptoms, obsessions, compulsions, and panic attacks. She has never previously received specialty mental health treatment. She stated, "I’m scared of this diagnosis because part of me feels like the best parts of me are about to get medicalized."`,

  mentalStatusObservation: `Your client presented casually dressed and appeared tired but attentive. She was alert and oriented to person, place, time, and situation. Grooming and hygiene were adequate. Eye contact was appropriate. Speech was soft and somewhat slowed when discussing her current depressive symptoms, though her pace increased noticeably when describing past high-energy periods. Mood was reported as "flat, ashamed, and confused." Affect was constricted but reactive. Psychomotor activity was mildly slowed. Thought processes were linear and coherent. Thought content was notable for self-criticism, depressive hopelessness without active suicidality, and increasing recognition that past "good weeks" may have been clinically significant mood episodes rather than simple relief from depression. No delusions, hallucinations, or gross disorganization were evident. Insight was emerging. Judgment was intact, though historically reduced during probable hypomanic periods involving impulsive spending and reduced sleep. She denied current suicidal intent, homicidal ideation, and self-harm. She denied current substance misuse. No acute medical issues were reported.`,

  familyHistory: `The client is the older of two siblings in a Filipino American family. Her parents immigrated to the United States in their twenties and own a small restaurant. She described her family as loving, achievement-focused, and likely to describe mental health problems in functional terms such as "being lazy," "being dramatic," or "working too hard." The client reported that a maternal aunt had "nervous breakdowns" and periods of not sleeping, followed by long depressive periods, though no formal diagnosis is known. Her younger brother has ADHD. No known family history of schizophrenia or completed suicide. The client stated that emotional endurance is highly valued in her family and that she has often hidden mood swings by framing them as work stress.`,

  workHistory: `The client earned a bachelor’s degree in graphic design and has worked in advertising for six years. She has been with her current agency for three years and was promoted to associate art director last year. She is talented and well-regarded creatively but described inconsistent output depending on her mood state. During high-energy stretches she generates a large volume of ideas and can become unusually confident, overcommitted, and argumentative in team meetings. During depressive phases she becomes avoidant, slower, and doubtful of her abilities. She is financially independent but currently carrying approximately $8,000 in credit card debt, much of it related to impulsive online purchases made during a recent likely hypomanic period.`,

  intakeSessionSummary: `You administered the PHQ-9, and the client scored 17, indicating moderately severe depressive symptoms. You administered the Mood Disorder Questionnaire as a screening aid, which was positive and supported further assessment of bipolar spectrum symptoms. You completed a thorough risk assessment; she endorsed passive thoughts of escape but denied suicidal plan, intent, and preparatory behavior. You provided psychoeducation about bipolar spectrum disorders, including the distinction between Bipolar I and Bipolar II, and clarified that counselors do not prescribe medication but often coordinate with psychiatrists or other prescribers when medication evaluation is indicated. You discussed the importance of tracking sleep, energy, impulsive behavior, and mood shifts over time. With the client’s consent, you arranged a psychiatric referral within the clinic for medication evaluation and discussed a treatment framework including psychoeducation, sleep and routine stabilization, CBT-oriented work for depression, and relapse-prevention planning. The client stated, "I can tolerate scary if it at least explains the pattern." Weekly therapy sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: "monica-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Monica describes 4-6 day periods of reduced sleep need, increased productivity, impulsive spending, and elevated confidence followed by depressive crashes. Which single finding most reliably differentiates Bipolar II from Cyclothymic Disorder in her presentation?",
          options: [
            "Her hypomanic periods include functional change observable to others.",
            "She has met full criteria for at least one Major Depressive Episode in addition to discrete hypomanic episodes.",
            "Her mood shifts have been present for more than two years.",
            "Her impulsive spending has produced concrete financial consequences.",
          ],
          correctAnswer: 1,
          explanation: "Cyclothymic Disorder involves subsyndromal mood elevations and subsyndromal depressive symptoms for ≥2 years without ever meeting full episode criteria. Bipolar II requires at least one hypomanic episode plus at least one full MDE. Observable change, duration, and consequences are consistent with both and do not discriminate.",
        },
        {
          id: "monica-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "Monica reports that during an SSRI trial last year she had 10 days of barely sleeping, racing thoughts, irritability, and a spending spree that ended in significant debt. How should this episode be classified diagnostically?",
          options: [
            "Substance/medication-induced bipolar disorder, since the symptoms occurred during SSRI exposure.",
            "Persisting beyond the physiological effect of the medication, the episode counts toward a Bipolar I or II diagnosis depending on severity and duration.",
            "Antidepressant activation that does not contribute to a bipolar diagnosis regardless of duration.",
            "A hypomanic episode that automatically establishes Bipolar I given the spending consequences.",
          ],
          correctAnswer: 1,
          explanation: "DSM-5-TR specifies that hypomanic/manic symptoms emerging during antidepressant treatment but persisting beyond the medication\'s physiological effect at a fully syndromal level count toward bipolar diagnosis. Reflexive substance-induced coding ignores persistence; full dismissal ignores the spectrum; severity of consequences alone does not establish mania.",
        },
        {
          id: "monica-q3",
          questionNumber: 3,
          domain: "Professional practice and ethics",
          stem: "Monica asks whether you can tell her PCP what medication she should be on. What is the most appropriate response?",
          options: [
            "Decline to discuss medications since the topic is fully outside counselor scope.",
            "With written authorization, share a clinical summary of mood pattern, prior antidepressant activation, and sleep data with the PCP and recommend psychiatric prescriber referral for medication selection.",
            "Tell her that mood stabilizers are generally indicated and the PCP can prescribe one to bridge to psychiatry.",
            "Encourage her to ask the PCP to restart the SSRI at a lower dose given the depressive symptoms.",
          ],
          correctAnswer: 1,
          explanation: "Counselors do not prescribe but should actively coordinate by sharing relevant clinical information and recommending appropriate level of prescriber expertise. Total avoidance fails the client; recommending agents or dosing steps into prescribing.",
        },
        {
          id: "monica-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: "Which initial counseling plan best fits Monica while psychiatric evaluation is pending?",
          options: [
            "Standard behavioral activation to address current depressive symptoms, since activation reliably reduces depression.",
            "Interpersonal and Social Rhythm Therapy elements: sleep/wake stabilization, social rhythm regularity, mood and energy tracking, psychoeducation, and harm-reduction planning around spending.",
            "CBT for depression with cognitive restructuring of negative thoughts as the primary intervention.",
            "Supportive therapy only, deferring active intervention until medication is initiated.",
          ],
          correctAnswer: 1,
          explanation: "IPSRT-aligned routine and sleep stabilization is the best-evidenced psychosocial framework for bipolar spectrum disorders and is appropriate before and alongside medication. Standalone behavioral activation can precipitate hypomania; restructuring alone misses circadian drivers; supportive-only delays active care.",
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived on time for her fourth session. She completed a mood and sleep log for the previous three weeks. Her PHQ-9 score this week is 12. She attended a psychiatric evaluation in the clinic and, after discussion with the prescriber, began a mood stabilizer two weeks ago. She reported mild fatigue and nausea but has continued taking the medication. She stated, "I hate that I’m paying this much attention to my sleep now, but I also see the pattern more clearly than I ever have."

Her mood log showed that before depressive crashes, she often has four- to five-day periods of significantly reduced sleep, racing ideas, increased social activity, unusual confidence, and impulsive purchases. She reported a recent situation in which she almost accepted a freelance branding project on top of her full-time job because she suddenly felt "capable of building an empire in a week." She caught herself, looked at her sleep log, and realized she had slept about four hours per night for three nights.

She also described tension with her partner, who stated last weekend, "I miss your spark, but I don’t miss the chaos." The client reported feeling angry and misunderstood. She stated, "Part of me heard, ‘The calmer version of you is boring.’" After reflection, she acknowledged that her partner may have been trying to say he values her creativity but not the impulsive fallout that often follows. She asked, "How do I know which parts are me and which parts are symptoms?"

She disclosed another concern. Her supervisor has offered her the chance to lead a high-visibility campaign launch next month that would involve several late nights and weekend work. The client feels excited and validated but is worried that the sleep disruption could destabilize her further. She stated, "I don’t want to start building my life around being fragile, but I also don’t want to ignore obvious patterns anymore."`,

      questions: [
        {
          id: "monica-q5",
          questionNumber: 5,
          domain: "Counseling skills and interventions",
          stem: "The client wants to 'force' herself out of depression by staying up late to complete creative projects because productivity makes her feel better. What is the best clinical response?",
          options: [
            "Support the plan because increased activity is behavioral activation",
            "Discourage all creative work until her mood is stable",
            "Validate the wish for momentum while emphasizing sleep protection and paced activation to avoid triggering hypomanic patterns",
            "Tell her productivity is a symptom and should be avoided",
          ],
          correctAnswer: 2,
          explanation: "In bipolar spectrum conditions, behavioral activation must be balanced with sleep and routine stabilization. Staying up late may increase risk of mood destabilization.",
        },
        {
          id: "monica-q6",
          questionNumber: 6,
          domain: "Core counseling attributes",
          stem: "The client says, 'I’m scared the best parts of me are about to get medicalized.' Which response is most therapeutic?",
          options: [
            "Bipolar II does not define you, so try not to think of it that way.",
            "What feels at risk if we name some of those high-energy periods as symptoms?",
            "Medication will not take away your creativity.",
            "The diagnosis is necessary so treatment can be accurate.",
          ],
          correctAnswer: 1,
          explanation: "The best response explores the personal meaning of diagnosis and the fear of losing identity. Reassurance or explanation may be true but moves too quickly past the client’s concern.",
        },
        {
          id: "monica-q7",
          questionNumber: 7,
          domain: "Treatment planning",
          stem: "Her partner offers to send you examples of Monica’s 'sped up' weeks and wants to know whether Monica is bipolar. What should you do?",
          options: [
            "Accept the information and confirm that Bipolar II is the working diagnosis because collateral is clinically useful",
            "Decline all partner input because individual therapy must remain separate",
            "Discuss with Monica whether she wants partner involvement, obtain written consent before any two-way communication, and clarify limits",
            "Ask the partner to monitor Monica’s sleep and spending and report weekly",
          ],
          correctAnswer: 2,
          explanation: "Collateral can be useful in bipolar assessment, but it requires client consent and clear boundaries. The partner should not become an unconsented monitor or recipient of diagnosis information.",
        },
        {
          id: "monica-q8",
          questionNumber: 8,
          domain: "Intake/assessment/diagnosis",
          stem: "During a prior SSRI trial, she had ten days of very low sleep, excessive confidence, irritability, and impulsive spending. How should this information be used clinically?",
          options: [
            "It proves the SSRI caused Bipolar II Disorder",
            "It is irrelevant because she stopped the medication herself",
            "It increases concern for bipolar spectrum illness and should be communicated to the prescriber with consent",
            "It means she should never take any psychiatric medication",
          ],
          correctAnswer: 2,
          explanation: "Antidepressant-associated activation can be a clue to bipolar spectrum illness and is important for medication evaluation. It does not prove causation or rule out all medication.",
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Your client arrived on time for her tenth session. Her PHQ-9 score is 6. She reported improved mood stability, more consistent sleep, and better recognition of early warning signs. She declined the campaign launch in its original form but negotiated a modified role with fewer late-night obligations. She stated, "That felt weirdly adult. I didn’t go full grand-gesture, and I didn’t disappear either."

She described one recent challenge. After two nights of shortened sleep due to a family event at her parents’ restaurant, she noticed herself feeling unusually energized, more flirtatious online, and tempted to buy expensive camera equipment she does not need. She did not make the purchase. Instead, she reviewed her mood chart, prioritized sleep, and told her partner, "I think I’m getting a little activated." She stated that naming it out loud helped reduce the sense of momentum.

She also reported a complicated shift in how she thinks about her family. Her mother recently said, "Maybe you just need to pray more and work less." The client felt dismissed but also recognized that her mother was trying, in her own language, to speak about strain and limits. The client asked, "How do I keep from turning every future mood change into a crisis? I don’t want to live scanning myself all the time."

She is wondering whether she is ready to move from weekly therapy to biweekly sessions and asked what maintenance should look like if things continue going well.`,

      questions: [
        {
          id: "monica-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: "The client has improved depressive symptoms and is tracking sleep, spending, and mood shifts. What is the most appropriate ongoing treatment focus?",
          options: [
            "Terminate therapy because depressive symptoms are improved",
            "Relapse prevention focused on early warning signs, sleep/routine protection, medication collaboration, and coping with shame",
            "Shift to insight work only because symptom tracking is now established",
            "Encourage her to increase productivity to regain confidence",
          ],
          correctAnswer: 1,
          explanation: "Bipolar II treatment requires ongoing relapse prevention, recognition of early warning signs, routine stabilization, and coordinated care, even after depressive symptoms improve.",
        },
        {
          id: "monica-q10",
          questionNumber: 10,
          domain: "Counseling skills and interventions",
          stem: "Which client statement should be treated as the clearest early warning sign of possible hypomanic escalation?",
          options: [
            "I finally answered several emails I had avoided.",
            "I feel embarrassed about the credit card debt.",
            "I slept four hours and felt amazing, so I started redesigning the apartment at 2 a.m.",
            "I felt sad after arguing with my partner.",
          ],
          correctAnswer: 2,
          explanation: "Decreased need for sleep with increased energy and goal-directed activity is a key early warning sign of hypomania. The other statements may matter but are less specific.",
        },
        {
          id: "monica-q11",
          questionNumber: 11,
          domain: "Professional practice and ethics",
          stem: "The client asks whether she should give her partner access to her credit cards during high-energy periods. What is the best response?",
          options: [
            "Tell her to give the partner control because impulsive spending is part of the disorder",
            "Explore a collaborative, voluntary financial safety plan that preserves autonomy and can be activated by agreed-upon warning signs",
            "Avoid discussing finances because it is outside counseling scope",
            "Tell her partner privately to remove the cards if symptoms return",
          ],
          correctAnswer: 1,
          explanation: "A voluntary, collaborative plan can reduce harm while respecting autonomy. The counselor should not direct coercive control or involve the partner without consent.",
        },
        {
          id: "monica-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: "The client says, 'I’m learning that stable doesn’t have to mean boring, but I don’t fully believe it yet.' What response best supports this phase of treatment?",
          options: [
            "That belief will come once your medication is fully adjusted.",
            "Let’s keep testing what creativity looks like when it is supported by sleep instead of fueled by escalation.",
            "You should avoid big creative projects until the diagnosis feels less threatening.",
            "Stability is the priority, even if it feels boring.",
          ],
          correctAnswer: 1,
          explanation: "The response supports identity integration and values-based living while reinforcing sleep and routine protection. It avoids reassurance, avoidance, or framing stability as a loss.",
        },
      ],
    },
  ],
};
