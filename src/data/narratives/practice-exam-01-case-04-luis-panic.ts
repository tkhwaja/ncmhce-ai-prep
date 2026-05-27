import type { Narrative } from "./types";

export const luisPanicNarrative: Narrative = {
  id: 'practice-exam-01-case-04-luis-panic',
  title: 'Luis — Panic Disorder',
  difficulty: "Intermediate",
  minutesPerSection: 7,
  category: 'Panic Disorder',

  clientInfo: {
    age: 36,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender Male',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Latino (Puerto Rican)',
    relationshipStatus: 'Married',
    setting: 'Integrated primary care behavioral health clinic',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Panic Disorder: F41.0',
  },

  presentingProblem: `You are a licensed mental health counselor embedded in an integrated primary care clinic. Your client was referred by his primary care physician after four urgent care or emergency department visits in the past three months for episodes of chest tightness, dizziness, sweating, trembling, shortness of breath, and fear that he was having a heart attack. Each medical workup has been negative for acute cardiac pathology. He stated, "I know they keep saying my heart is fine, but when it starts happening, it does not feel like anxiety. It feels like I am dying in real time."

The client reported that the first episode occurred six months ago while driving over a bridge on his way to work. He described sudden pounding in his chest, tingling in his hands, a sensation that he could not get enough air, and intense fear that he would lose control of the car and drive off the bridge. He pulled over and called 911. He stated, "After that, it was like my body learned a new trick and kept doing it whenever it wanted."

He reported recurrent unexpected panic attacks since then, occurring approximately two to three times per week. Some attacks appear to come "out of nowhere" while others now occur in situations he has begun to fear, especially bridges, highways, crowded checkout lines, and long meetings where he feels unable to leave easily. He stated, "Now I am afraid of being afraid. I scan myself all day. If my chest feels weird for one second, I am already bracing for the next attack." He has started avoiding driving routes that include bridges and has left work meetings abruptly on multiple occasions. His supervisor recently asked whether everything is okay.

The client works as an assistant manager at a grocery distribution warehouse. He has used increasing amounts of sick time to avoid driving to a second site that requires highway travel. He stated, "I am starting to build my whole life around not having one of these." He reported sleeping poorly because he lies awake monitoring his body and worrying about another episode the next day.

He denied current substance misuse. He drinks one to two beers on weekends and denied illicit drug use. He consumes large amounts of coffee, typically four to five cups on workdays, which he says he needs "to function." He denied trauma history, denied obsessions or compulsions, and denied depressive symptoms beyond frustration and embarrassment. He denied suicidal or homicidal ideation. He stated, "I am not trying to die. I am trying very hard not to."`,

  mentalStatusObservation: `Your client presented in a warehouse uniform and work boots. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. He appeared tired, with dark circles under his eyes. Eye contact was appropriate, though he periodically placed a hand on his chest when discussing his symptoms. Speech was normal in rate and volume, becoming faster when describing panic episodes. Mood was reported as "frustrated and on edge." Affect was anxious but reactive and congruent. Psychomotor activity was mildly restless; he shifted in his seat and bounced one knee while discussing driving. Thought processes were linear and goal-directed. Thought content was notable for catastrophic misinterpretation of bodily sensations, anticipatory anxiety, and increasing situational avoidance. He denied delusions, hallucinations, suicidal ideation, and homicidal ideation. Insight was fair: he acknowledged that providers keep telling him the episodes are panic but stated that his body still "doesn't buy it." Judgment appeared intact. He denied problematic alcohol or drug use. Recent primary care labs, ECG, and cardiac evaluation were unremarkable per referral notes.`,

  familyHistory: `The client is the middle of three siblings and was raised in a close Puerto Rican family in the Bronx. He currently lives with his wife and their eight-year-old son. His mother, age 63, has a long history of "nerves" and has avoided highways for years, though she has never had formal mental health treatment. His older sister has been treated for generalized anxiety disorder. His father died of a myocardial infarction at age 58, which the client identified as one reason the panic symptoms have been difficult for him to dismiss. He stated, "When your father dies young from his heart, chest pain means something in your family." No known family history of bipolar disorder, psychotic disorders, or completed suicide.`,

  workHistory: `The client graduated from community college with an associate degree in logistics and has worked in warehouse operations for thirteen years. He has been at his current company for six years and was promoted to assistant manager last year. His employer views him as reliable and technically strong. The recent panic symptoms have begun affecting his attendance, willingness to travel between sites, and ability to stay in supervisory meetings. He has not disclosed the full extent of his panic symptoms to coworkers, telling them only that he has been dealing with "medical stuff." He worries that being seen as anxious will damage his credibility as a manager.`,

  intakeSessionSummary: `You reviewed the primary care referral and recent negative medical workups. You administered the Panic Disorder Severity Scale (PDSS), which yielded a score in the moderate clinical range. You administered the PHQ-9, on which he scored a 5, indicating mild depressive symptoms likely secondary to sleep disruption and reduced confidence. You conducted a focused risk assessment; he denied suicidal ideation, self-harm history, and homicidal ideation. You provided initial psychoeducation about panic, including the fight-or-flight response and the role of catastrophic interpretation in maintaining the cycle. You discussed evidence-based treatment, particularly CBT for panic disorder with interoceptive exposure and gradual situational exposure. You also discussed reducing reassurance-seeking medical visits unless medically indicated. He stated, "If there is an actual plan besides just telling me to calm down, I am in." Weekly sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: 'luis-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Luis has had multiple unexpected attacks with rapid-peaking somatic symptoms, persistent worry about recurrence, and emerging avoidance. Which single finding most strongly distinguishes Panic Disorder from Specific Phobia (situational) in this presentation?',
          options: [
            'He experiences chest pain, dyspnea, and depersonalization during the episodes.',
            'At least some attacks have occurred out-of-the-blue without a cue, and concern about future attacks persists between them.',
            'He has begun avoiding highways and bridges where escape feels difficult.',
            'His medical workups including ECG and cardiac labs have been unremarkable.',
          ],
          correctAnswer: 1,
          explanation: 'Specific Phobia attacks are cued by the feared object or situation. Panic Disorder requires unexpected, uncued attacks plus persistent concern or behavioral change. Symptom intensity, situational avoidance, and a negative medical workup are consistent with both diagnoses and do not discriminate between them.',
        },
        {
          id: 'luis-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'Luis says, "I know they keep saying my heart is fine, but when it starts happening, it does not feel like anxiety." What is the most therapeutic response?',
          options: [
            'The cardiac workups are clear, so the next step is trusting the data over the sensation.',
            'What is it like to be told you are safe by a body that keeps telling you that you are not?',
            'Panic feels physically convincing because the same fight-or-flight system fires in both real danger and false alarms.',
            'Many clients with panic describe that same gap between what they know and what they feel.',
          ],
          correctAnswer: 1,
          explanation: 'Each option contains some truth, but the best response stays with the felt contradiction he just named instead of arguing the evidence, lecturing physiology, or normalizing through a cohort. Psychoeducation and normalization are useful, but follow rather than replace empathic exploration of the affect.',
        },
        {
          id: 'luis-q3',
          questionNumber: 3,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Luis avoids highways, bridges, and meetings where escape feels difficult and has reduced site visits at work. What is the most accurate diagnostic action?',
          options: [
            'Add a separate diagnosis of Agoraphobia given clear fear of situations where escape is difficult.',
            'Assess whether avoidance is panic-cued and panic-protective versus genuinely independent fear of two or more agoraphobic situations sustained for six months.',
            'Defer any agoraphobia consideration since the avoidance has developed in the context of panic.',
            'Document situational specific phobia for bridges as a comorbidity.',
          ],
          correctAnswer: 1,
          explanation: 'DSM-5-TR Agoraphobia is diagnosed independently from Panic Disorder and requires fear or avoidance of ≥2 agoraphobic situations for ≥6 months, with disproportionate, persistent, impairing avoidance — not simply panic-driven avoidance still in flux. The clinician should assess the threshold rather than reflexively coding or dismissing it.',
        },
        {
          id: 'luis-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'Which is the most clinically defensible first behavioral target after psychoeducation in CBT for Luis\'s panic disorder?',
          options: [
            'Begin situational in vivo exposure to highways since avoidance is impairing his work.',
            'Introduce interoceptive exposure to feared bodily sensations to disconfirm catastrophic misinterpretation before in vivo work.',
            'Train diaphragmatic breathing as the primary tool to abort attacks when they begin.',
            'Schedule a cardiac re-evaluation with his PCP so he can fully commit to the psychological model.',
          ],
          correctAnswer: 1,
          explanation: 'Catastrophic misinterpretation of bodily sensations is the maintaining mechanism in panic. Interoceptive exposure directly targets that fear and typically precedes or runs alongside graded in vivo work. Breathing retraining used to abort attacks often becomes a safety behavior, and another cardiac workup would reinforce reassurance-seeking.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      sectionNarrative: `Your client arrived on time and reported that the psychoeducation "helped more than I expected." His PDSS score this week is modestly improved. He has begun monitoring his panic cycle and noticed that his symptoms escalate fastest when he starts checking his pulse, controlling his breathing in a rigid way, or scanning for exits. He stated, "I didn\'t realize how much I was doing to prevent the panic that actually keeps it running."

You introduced interoceptive exposure last session. He practiced spinning in a chair briefly to induce dizziness and running in place to raise his heart rate. He described the exercises as "awful but weirdly helpful." He stated, "I hated it. But it was the first time I made the feeling happen on purpose and didn\'t call 911." He has also reduced his coffee from five cups a day to two.

He disclosed a setback from the previous week. While driving with his eight-year-old son in the car, he felt the start of panic on an overpass. He exited the highway abruptly and pulled into a gas station. His son asked, "Are you having the chest thing again?" The client said he felt ashamed that his son has started noticing a pattern. He reported that he told his son, "Daddy just needed a minute," and changed the subject.

He also reported that his wife has become increasingly reassuring. She now texts him before longer drives, "You are okay. Your heart is okay. You are not going to pass out." He stated, "It calms me down for a second. Then I need another one." He asked, "Do I tell her to stop helping me? Because that feels messed up when she is trying so hard."`,
      questions: [
        {
          id: 'luis-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'What is the primary purpose of interoceptive exposure in panic treatment?',
          options: [
            'To eliminate all bodily anxiety sensations',
            'To increase the client\'s tolerance for feared bodily sensations and disconfirm catastrophic beliefs',
            'To distract from panic symptoms with exercise',
            'To determine whether the panic is medically dangerous',
          ],
          correctAnswer: 1,
          explanation: 'Interoceptive exposure targets fear of internal sensations by intentionally evoking them and allowing new learning to occur. The goal is not eliminating sensations, distracting from them, or conducting a medical test.',
        },
        {
          id: 'luis-q6',
          questionNumber: 6,
          domain: 'Counseling skills and interventions',
          stem: 'The client\'s wife provides frequent reassurance texts before drives. What is the most useful clinical guidance?',
          options: [
            'Tell her she must stop all reassurance immediately',
            'Help the client explain how reassurance can maintain panic and develop alternative support responses with her',
            'Encourage the reassurance because it reduces his distress',
            'Advise couples therapy before continuing panic treatment',
          ],
          correctAnswer: 1,
          explanation: 'Reassurance can become a maintaining behavior in panic disorder. Helping the client communicate this and collaboratively develop more supportive, non-reassurance-based responses respects the relationship while targeting the cycle.',
        },
        {
          id: 'luis-q7',
          questionNumber: 7,
          domain: 'Core counseling attributes',
          stem: 'The client felt ashamed after his son noticed a pattern and asked about the "chest thing." What is the most therapeutic response?',
          options: [
            '"Children notice more than we think. What was it like to realize he has been tracking this too?"',
            '"You should not let him see the panic anymore."',
            '"At least you pulled over and kept him safe."',
            '"He is probably too young to remember it anyway."',
          ],
          correctAnswer: 0,
          explanation: 'This response invites exploration of the client\'s shame, fatherhood concerns, and emotional meaning of the moment. Directive reassurance or minimization would miss the relational significance.',
        },
        {
          id: 'luis-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'The client asks whether you can write a note excusing him from highway travel at work while he is in treatment. What is the most appropriate response?',
          options: [
            'Write the note because reduced exposure will lower panic',
            'Decline and explain that permanent avoidance recommendations would contradict treatment goals; explore whether a short-term work accommodation request should instead be discussed with his physician or employer as appropriate',
            'Tell him he must continue all travel with no changes',
            'Contact his supervisor directly to explain panic disorder',
          ],
          correctAnswer: 1,
          explanation: 'The counselor should avoid reinforcing long-term avoidance when exposure is part of treatment, while still discussing practical, appropriate channels for temporary workplace issues. Direct employer contact without consent is inappropriate, and rigid refusal without exploration is not collaborative.',
        },
      ],
    },
    {
      sessionLabel: 'Ninth session',
      sectionNarrative: `Your client arrived on time for his ninth session. His PDSS score has improved significantly from intake. He reported that he has driven over two smaller bridges without pulling over and completed multiple interoceptive exercises independently between sessions. He described one recent moment during a grocery store line in which he felt the familiar wave of panic, noticed the thought "I am going to pass out," and remained in line long enough for the intensity to decrease. He stated, "That was the first time I saw the thing rise and fall without me doing some emergency maneuver."

He also reported a meaningful conversation with his son. He told him, in simple language, that sometimes his body sends a false alarm that feels intense but is not dangerous, and that grown-ups can learn skills for it too. He stated, "He looked relieved. I think he had decided something was very wrong with me."

Work remains a challenge. He completed one drive to the secondary warehouse site using the highway, though he described being "drained" afterward. His supervisor has continued to ask general questions about whether his health is okay. The client does not want to disclose more than necessary. He asked, "How do I know when this is good enough? Not perfect. Just good enough that I\'m not organizing my whole life around it anymore?"`,
      questions: [
        {
          id: 'luis-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'The client asks when treatment is "good enough." What is the most appropriate response?',
          options: [
            'Tell him he is done once he has no anxiety sensations at all',
            'Collaboratively review functional improvement, remaining avoidance, and relapse prevention needs rather than aiming for zero anxiety',
            'Advise him to stay in treatment until he no longer thinks about panic',
            'Use the PDSS score alone to determine discharge',
          ],
          correctAnswer: 1,
          explanation: 'Panic treatment aims for reduced fear, reduced avoidance, and restored functioning, not the total absence of anxiety sensations. Collaborative review of functioning and relapse prevention is more clinically sound than perfectionism or score-only decisions.',
        },
        {
          id: 'luis-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'The client remained in a grocery line long enough for the panic to decrease. What learning is most important in that moment?',
          options: [
            'That panic must always be distracted away quickly',
            'That feared sensations and anxiety can peak and subside without escape or rescue behaviors',
            'That grocery stores are objectively safe',
            'That his panic was never real',
          ],
          correctAnswer: 1,
          explanation: 'A central learning target in panic treatment is that anxiety and bodily sensations can rise and fall without catastrophic outcome or escape behavior. This is more important than broad safety generalizations or invalidating the reality of his distress.',
        },
        {
          id: 'luis-q11',
          questionNumber: 11,
          domain: 'Professional practice and ethics',
          stem: 'The supervisor keeps asking whether the client\'s health is okay. What is the most appropriate clinical guidance?',
          options: [
            'Tell him he should fully disclose the diagnosis to reduce stigma',
            'Help him develop a brief response that protects his privacy while addressing workplace functioning',
            'Call the supervisor to reassure him',
            'Recommend he quit before his credibility suffers',
          ],
          correctAnswer: 1,
          explanation: 'Workplace disclosure is a personal decision. Helping the client prepare a concise, privacy-protective response supports functioning and autonomy without pressuring disclosure or avoidance.',
        },
        {
          id: 'luis-q12',
          questionNumber: 12,
          domain: 'Core counseling attributes',
          stem: 'The client said, "Not perfect. Just good enough." What does this statement most suggest clinically?',
          options: [
            'He is giving up on treatment',
            'He is beginning to shift from fear-driven control toward functional recovery and realistic goals',
            'He is minimizing residual panic symptoms',
            'He is asking for discharge immediately',
          ],
          correctAnswer: 1,
          explanation: 'This reflects therapeutic movement away from absolute control and toward functional, values-based recovery. It is an encouraging sign of increased flexibility rather than defeat or minimization.',
        },
      ],
    },
  ],
};
