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
          stem: 'Which feature most strongly supports Panic Disorder rather than an isolated panic attack?',
          options: [
            'Chest tightness during episodes',
            'Unexpected recurrent panic attacks followed by persistent concern and behavioral change',
            'A family history of anxiety',
            'Poor sleep after the episodes',
          ],
          correctAnswer: 1,
          explanation: 'Panic Disorder requires recurrent unexpected panic attacks plus at least one month of persistent worry about additional attacks and/or maladaptive behavioral change. Chest symptoms, family history, and poor sleep can occur in many anxiety presentations but do not define the disorder.',
        },
        {
          id: 'luis-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'The client said, "I know they keep saying my heart is fine, but when it starts happening, it does not feel like anxiety." What is the most therapeutic response?',
          options: [
            '"It is definitely anxiety, not your heart."',
            '"That makes sense. Panic feels physically convincing, which is part of why it can be so frightening."',
            '"You need to trust the doctors and stop going to the ER."',
            '"Let\'s not focus on the physical symptoms."',
          ],
          correctAnswer: 1,
          explanation: 'Validating that panic feels physically real strengthens alliance and reduces shame without reinforcing a medical misinterpretation. Arguing, directing, or bypassing the physical experience usually increases resistance.',
        },
        {
          id: 'luis-q3',
          questionNumber: 3,
          domain: 'Intake/assessment/diagnosis',
          stem: 'The client is avoiding bridges, highways, and meetings where escape feels difficult. What should be assessed next?',
          options: [
            'Possible agoraphobic avoidance patterns',
            'Oppositional behavior at work',
            'Obsessive-compulsive rituals',
            'Manic activation',
          ],
          correctAnswer: 0,
          explanation: 'Avoidance of places where escape may feel difficult or help unavailable during panic-like symptoms raises the question of agoraphobic patterns. This is clinically relevant for case conceptualization and treatment planning.',
        },
        {
          id: 'luis-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate first-line counseling approach for this client?',
          options: [
            'CBT for panic disorder with psychoeducation, interoceptive exposure, and situational exposure',
            'Supportive counseling only until he feels less anxious',
            'Psychodynamic interpretation of unconscious conflict',
            'Thought stopping whenever bodily symptoms begin',
          ],
          correctAnswer: 0,
          explanation: 'CBT for panic disorder is the evidence-based first-line treatment and typically includes psychoeducation, cognitive work, interoceptive exposure, and gradual in vivo exposure. The other options do not directly target the mechanisms maintaining panic.',
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
