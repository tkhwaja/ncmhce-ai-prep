import type { Narrative } from "./types";

export const terrencePtsdPanicAlcohol: Narrative = {
  id: '25-marcus-ptsd-panic-alcohol',
  title: 'Terrence — PTSD with Dissociative Symptoms, Panic Disorder, and Alcohol Use Disorder',
  category: "Trauma and Substance Use",
  difficulty: "Advanced",
  recommendedTimeBySectionMinutes: [9, 9, 8],

  clientInfo: {
    age: 41,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender Male',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black / African American',
    relationshipStatus: 'Married',
    setting: 'Community trauma and substance use clinic receiving fire-department EAP referrals',
    payment: 'EAP benefit transitioning to commercial insurance',
    typeOfCounseling: 'Individual counseling with authorized medical, substance use, family, and occupational coordination',
    provisionalDiagnosis: 'Posttraumatic Stress Disorder, with dissociative symptoms: F43.10; Panic Disorder: F41.0; Alcohol Use Disorder, moderate: F10.20',
  },

  presentingProblem: `You are a licensed mental health counselor in a trauma and substance use clinic. Terrence R., a 41-year-old Black firefighter lieutenant, requests an urgent appointment after encouragement from his wife, Alyssa, and a union peer-support representative. His six EAP visits are for treatment; you were not retained to determine fitness for duty. Terrence immediately asks whether his chief can obtain his diagnosis or notes.

Fourteen months ago, a floor collapsed during an apartment fire, killing Terrence’s colleague Luis and one child. Terrence struck his head, was briefly disoriented, and declined recommended follow-up. Since then he has nightmares, intrusive images, avoidance, guilt, detachment, irritability, sleep disturbance, hypervigilance, and diminished family and recreational involvement. A low-air chirp or wet-ash odor can make the current setting recede while he sees the collapsed hallway, hears Luis, and reaches or crawls as if the rescue is occurring. The episodes are brief, cue linked, and followed by restored context. Separately, he sometimes feels outside his body or experiences the station as unreal while knowing where he is. Between episodes he has organized thought, intact reality testing, and no hallucinations or delusions.

During the past six months Terrence has also experienced abrupt surges of palpitations, chest pressure, shaking, choking, tingling, heat, and fear of death or loss of control. Some follow trauma reminders, but at least five occurred without an evident trauma cue. They peak within minutes. He now checks his pulse and oxygen saturation, avoids exercise alone, chooses routes near hospitals, and persistently anticipates another attack. One urgent-care ECG was reassuring, but he has not completed a broader cardiopulmonary or neurologic evaluation.

Terrence began drinking to sleep after the fire and now consumes five to seven standard drinks most evenings. He frequently exceeds his intended amount, has made three unsuccessful efforts to stop, experiences strong craving, and continues despite worsened nightmares and conflict. He denies morning drinking, previous withdrawal seizure, or alcohol use while on duty. Eleven hours after his last drink, he has tremor, sweating, nausea, and a pulse of 112. Anxiety, early withdrawal, another medical condition, or combined causes remain possible.

Two nights ago a memorial video triggered vivid reliving after approximately eight drinks. Terrence crouched behind a kitchen island calling a mayday, then said, “Maybe one clean exit is the only decision I cannot fail.” He placed the locked case containing his loaded handgun on the table and considered shooting himself for several minutes without opening it. His brother Darius removed the firearm and ammunition for lawful off-site storage. Terrence currently denies intent and another firearm but says he cannot predict how he would think if intoxicated and reliving the fire. He identifies family, crew, and faith as reasons to live and agrees not to drive. Meanwhile, his chief requests notes and a statement that Terrence is safe to return by Friday; Terrence has signed no authorization.` ,

  mentalStatusObservation: `Terrence is neatly groomed, alert, and fully oriented. Speech is coherent and goal directed, becoming faster—but not pressured—when he describes panic. Mood is “ashamed and wired”; affect is constricted, anxious, and intermittently tearful. Thought content includes guilt, hopelessness, recent suicide-specific thinking, and realistic employment concerns. He denies current intent, plan, homicidal ideation, mania, or psychosis.

When a cart alarm sounds, Terrence becomes pale and says the room looks distant. He retains the date and location, follows orientation prompts, and recovers within one minute. Concentration varies, and the causes of recent memory lapses remain uncertain among dissociation, alcohol, sleep loss, panic, and possible head-injury effects. Insight is fair; judgment was impaired while intoxicated and triggered. Recent firearm-related preparation, alcohol use, reexperiencing, uncertain future intent, and autonomic findings outweigh reassurance from his present denial and protective factors.` ,

  familyHistory: `Terrence was raised in a stable working-class family emphasizing faith, service, and reliability. His grandfather drank heavily after military service, and his mother received treatment for recurrent depression. There is no known family history of psychosis, bipolar disorder, suicide death, or withdrawal seizure.

Terrence and Alyssa have been married for 15 years and have a 13-year-old son. Alyssa has monitored his sleep, hidden keys after drinking, and repeatedly checked whether he is “back in the building.” Terrence experiences both care and surveillance. He describes racialized experiences in which quietness was interpreted either as invulnerability or threat, alongside fire-service pressure to remain operational. These concerns may shape disclosure without replacing individualized risk assessment.` ,

  workHistory: `Terrence has worked in fire service for 16 years and was promoted to lieutenant three years ago. Before the collapse, evaluations described calm command and sound risk assessment. Since returning 12 days after the incident, he has traded assignments, declined promotion testing, and used leave after drinking.

Three weeks ago a low-air alarm during a basement fire produced 20 seconds of reliving; Terrence moved toward a blocked room despite a partner’s direction, then reoriented and completed an orderly exit. A later panic surge during equipment inspection led him to request relief. He is now on paid administrative leave pending an independent occupational evaluation. The chief requests diagnosis, prognosis, notes, and clearance, while the union reports a separate fitness process. Terrence recognizes that treatment, employer communication, and fitness determination are related but distinct roles.` ,

  intakeSessionSummary: `You review informed consent, EAP limits, documentation, confidentiality, and the difference between treatment and occupational evaluation. A clinical interview supports all PTSD clusters, recurrent depersonalization and derealization, repeated unexpected panic attacks with persistent concern and avoidance, and four supported AUD criteria. Trauma-bound sensory reliving with restored context does not establish primary psychosis. Screening scores support severity monitoring but do not determine diagnosis.

You assess suicide history, firearm and other means, alcohol timing, withdrawal history, violence, supports, dependents, occupational events, medical symptoms, and willingness to accept care. Current denial, family monitoring, or firearm removal is not treated as dispositive. Possible withdrawal, cardiac illness, toxic exposure, sleep disruption, medication effects, and mild traumatic brain injury remain in the differential.

Given the recent firearm behavior, intoxication-linked suicidal thinking, uncertain future safety, autonomic signs, incompletely evaluated chest symptoms, and dissociative reliving, you arrange immediate psychiatric and medical evaluation. Terrence agrees to supervised voluntary transfer with Alyssa and does not drive. Darius confirms continued firearm separation. You disclose only what the receiving team needs for safe transfer, consult clinic procedure, and document the evidence, uncertainty, collateral information, and decision process.` ,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: 'marcus-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation best integrates the supported syndromes without prematurely closing the differential?',
          options: [
            'PTSD with dissociative symptoms and moderate AUD; classify all non-cued attacks as trauma-related until sustained abstinence clarifies them',
            'PTSD, Panic Disorder, and moderate AUD; defer the dissociative specifier until neurologic testing excludes every possible medical contributor',
            'PTSD with dissociative symptoms, Panic Disorder, and moderate AUD, while retaining withdrawal, medical, sleep, toxic, and head-injury contributors',
            'Schizoaffective Disorder with moderate AUD because sensory reliving and suicide ideation occur without a continuously observed mood episode',
          ],
          correctAnswer: 2,
          explanation: 'The full formulation preserves both positive evidence and uncertainty. PTSD explains trauma-specific symptoms; recurrent depersonalization and derealization support its dissociative specifier. Unexpected attacks followed by persistent concern and avoidance support Panic Disorder beyond trauma-cued arousal. Four described criteria support moderate AUD. Medical, withdrawal, sleep, toxic, and head-injury contributors still require assessment, but their possibility does not erase independently supported syndromes. Trauma-bound reliving with restored context does not establish schizoaffective disorder.',
        },
        {
          id: 'marcus-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'What is the best interpretation of Terrence’s episodes of seeing the hallway and hearing Luis?',
          options: [
            'Alcohol-withdrawal perceptual disturbance is primary because autonomic signs coexist, even though similar episodes occurred throughout the preceding year',
            'They are dissociative flashbacks because trauma-specific cues evoke present-tense reliving followed by restoration of context and reality testing',
            'They are trauma-themed hallucinations within a primary psychotic disorder because Terrence briefly acts on perceptions others cannot verify',
            'They are episodes of depersonalization because Terrence later recognizes the event was not occurring and sometimes views himself externally',
          ],
          correctAnswer: 1,
          explanation: 'The discriminating features are cue linkage, trauma-specific content, present-tense reliving, brief duration, and recovery of contextual awareness. Alcohol withdrawal remains urgent to evaluate, but it does not best explain a year-long pattern of trauma-bound episodes. Perceptual vividness and behavior during reliving do not independently establish psychosis. Depersonalization occurs elsewhere in the case, but feeling detached from oneself does not fully describe reenactment of an entire traumatic scene.',
        },
        {
          id: 'marcus-q3',
          questionNumber: 3,
          domain: 'Treatment planning',
          stem: 'Which immediate disposition best addresses the combined suicide, alcohol, and unresolved medical risks?',
          options: [
            'Complete an outpatient safety plan and arrange next-day medical follow-up because current intent is denied and firearm access is interrupted',
            'Transfer for psychiatric evaluation first and postpone withdrawal or cardiopulmonary assessment unless symptoms worsen during behavioral observation',
            'Arrange medical withdrawal evaluation first and reassess suicide risk after autonomic symptoms and possible intoxication effects have resolved',
            'Arrange supervised same-day psychiatric and medical evaluation, maintain means separation, prevent driving, and communicate necessary transfer information',
          ],
          correctAnswer: 3,
          explanation: 'Neither present denial nor interrupted firearm access neutralizes recent preparatory behavior, intoxication-linked suicidal thinking, uncertain future intent, and reliving. Tremor, sweating, tachycardia, nausea, and chest symptoms also require timely medical assessment. The safest disposition addresses both domains without using one to postpone the other. Outpatient planning remains useful after immediate evaluation, while supervision, transportation, necessary information transfer, and continued lethal-means separation reduce risk during the transition.',
        },
        {
          id: 'marcus-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which assessment strategy best separates overlapping psychiatric, substance-related, and medical contributors?',
          options: [
            'Combine urgent medical assessment with a longitudinal timeline of cues, alcohol timing, exertion, sleep, orientation, cognition, injury, and collateral observations',
            'Delay final psychiatric formulation until 30 days of abstinence because active alcohol use makes trauma and panic phenomenology clinically uninterpretable',
            'Repeat PTSD, panic, dissociation, and alcohol scales after a second ECG, assigning each episode to the measure with greatest change',
            'Treat duty-related episodes as PTSD unless neuropsychological testing proves a neurologic cause, while classifying home episodes by symptom content',
          ],
          correctAnswer: 0,
          explanation: 'The counselor needs both immediate medical evaluation and longitudinal phenomenology. Timing, triggers, content, orientation, exertion, sleep, alcohol exposure, injury, collateral observations, and functional consequences can clarify interacting causes. A short abstinence period may improve later interpretation but should not delay treatment of supported conditions. Rating scales track constructs rather than allocate causation. Neither workplace location nor failure to prove a neurologic cause establishes that PTSD explains a particular episode.',
        },
        {
          id: 'marcus-q5',
          questionNumber: 5,
          domain: 'Professional practice and ethics',
          stem: 'How should you initially respond to the chief’s request for notes and immediate clearance?',
          options: [
            'Provide a diagnosis-free functional restriction because immediate coworker safety permits disclosure without authorization even outside the occupational process',
            'Ask Terrence for a narrow authorization and provide a temporary fitness opinion while the independent evaluator completes the formal assessment',
            'Clarify the treating role, disclose nothing without a valid basis, and direct fitness questions to the established independent evaluation process',
            'Release the intake summary because an EAP referral creates implied employer access when the employee holds a safety-sensitive position',
          ],
          correctAnswer: 2,
          explanation: 'The chief does not automatically obtain treatment information through an EAP referral. Even a diagnosis-free restriction communicates protected clinical information, and a treating counselor should not casually assume the independent fitness role. The counselor should review the actual agreement, authorization, law, policy, and any genuine exception. If Terrence later authorizes limited communication, factual treatment information may be shared within scope without promising safety or converting treatment into occupational evaluation.',
        },
      ],
    },
    {
      sessionLabel: 'Sixth session',
      sectionNarrative: `Seven weeks later, Terrence returns after emergency medical and psychiatric evaluation, monitored uncomplicated withdrawal, five days of dual-diagnosis stabilization, and continuing intensive outpatient substance-use care. He reports 47 days without alcohol and strong cravings near shift-change time. Medical evaluation found no acute cardiac, toxic, or structural neurologic condition; concussion, sleep, and neuropsychological follow-up remain scheduled. He denies current suicide or violence ideation. Firearms remain with Darius, and access will be reconsidered through a fresh assessment rather than a calendar date.

PTSD symptoms remain significant. A diesel odor and low-air chirp recently triggered 40 seconds of trauma-specific reliving; a peer’s orientation prompts helped him recover. In a supermarket, Terrence experienced racing heart, tingling, derealization, and fear of cardiac arrest without trauma imagery. A repeat medical evaluation was reassuring. He now avoids the store and exercise bicycle and continues to interpret elevated pulse as dangerous.

Terrence wants trauma-focused care while continuing recovery treatment. One group member insists on one year of abstinence first; another urges immediate intensive exposure. Terrence is willing to monitor dissociation, maintain a crisis plan, and coordinate providers but resists a universal sobriety threshold. He also explains that clinicians have interpreted his quietness alternately as proof of stability or concealed danger and asks you to inquire rather than infer.

An independent occupational clinician has begun the established fitness process. The chief again seeks full notes and a prognosis. The evaluator offers a narrowly worded request for attendance, broad functional observations, and treatment recommendations relevant to work, excluding psychotherapy process notes. Terrence has not signed it and asks you instead for a letter guaranteeing that he is completely safe.` ,
      questions: [
        {
          id: 'marcus-q6',
          questionNumber: 6,
          domain: 'Core counseling attributes',
          stem: 'Which response best integrates cultural humility with responsible risk assessment?',
          options: [
            'Use identical observable criteria without discussing identity so concerns about bias cannot influence the objectivity of future assessments',
            'Accept Terrence’s account without collateral because prior stereotyping makes additional verification likely to reproduce racial and occupational harm',
            'Acknowledge possible racialized and occupational interpretations, ask what silence means here, and continue direct individualized assessment without assumptions',
            'Treat quietness as probable suppression until trust develops because Black male firefighters face strong expectations to appear invulnerable',
          ],
          correctAnswer: 2,
          explanation: 'Cultural humility requires examining how bias, role expectations, and realistic employment concerns may shape communication while preserving direct individualized assessment. An identity-blind stance can hide rather than eliminate bias. Conversely, responsiveness does not require abandoning collateral or accepting safety conclusions uncritically. Assuming that Terrence’s identities determine the meaning of silence simply substitutes a new stereotype. The counselor should name possibilities tentatively and privilege Terrence’s contextual meaning.',
        },
        {
          id: 'marcus-q7',
          questionNumber: 7,
          domain: 'Treatment planning',
          stem: 'Which plan best coordinates PTSD and alcohol treatment at this stage?',
          options: [
            'Require one year of verified abstinence before trauma processing while using supportive counseling and monitoring as the principal PTSD interventions',
            'Maintain recovery care and safety planning while beginning paced evidence-based trauma work when Terrence can remain engaged and use supports',
            'Treat panic and AUD first, beginning PTSD treatment only after cravings and dissociative episodes have both completely resolved',
            'Begin standard-intensity trauma processing now but suspend substance-use groups temporarily to reduce competing demands and conflicting formulations',
          ],
          correctAnswer: 1,
          explanation: 'Readiness depends on current safety, withdrawal resolution, engagement, craving management, orientation, preferences, and capacity to use supports—not an arbitrary abstinence duration or complete symptom elimination. PTSD and AUD can maintain one another, so coordinated or integrated care is preferable to rigid sequencing. Trauma work should be paced and monitored rather than automatically delayed or delivered without regard to dissociation. Recovery treatment remains active rather than being suspended during trauma-focused care.',
        },
        {
          id: 'marcus-q8',
          questionNumber: 8,
          domain: 'Counseling skills and interventions',
          stem: 'After appropriate medical review, which intervention most directly addresses Terrence’s panic-maintaining fear of bodily sensations?',
          options: [
            'Begin graded exercise exposure while temporarily permitting scheduled pulse checks, fading them only after Terrence repeatedly records normal readings',
            'Complete trauma-memory processing before inducing bodily sensations because derealization may otherwise be mistaken for a dissociative flashback',
            'Practice symptom induction within substance-use group so craving, panic, and accountability can be addressed in one coordinated setting',
            'Use graded interoceptive and in-vivo exposure while reducing safety behaviors and monitoring medical guidance, dissociation, and recovery risk',
          ],
          correctAnswer: 3,
          explanation: 'Interoceptive exposure tests catastrophic predictions about benign sensations, while in-vivo practice reverses avoidance of exercise and stores. Pulse checking can preserve the belief that safety depends on monitoring, even if later fading is planned. Trauma work may improve cue-linked arousal but does not replace direct panic treatment, and derealization can be assessed during graded work. Combining every intervention in a group is not automatically clinically or procedurally appropriate.',
        },
        {
          id: 'marcus-q9',
          questionNumber: 9,
          domain: 'Professional practice and ethics',
          stem: 'What is the best response to the narrow occupational request and Terrence’s demand for a guarantee?',
          options: [
            'Decline a guarantee, review the authorization with Terrence, and provide only accurate authorized information while preserving the evaluator’s role',
            'Decline all occupational contact until treatment ends because providing functional observations would inevitably create a prohibited dual relationship',
            'Send the requested functional information without authorization because excluding diagnosis and process notes makes the communication nonclinical',
            'Provide a current-safety guarantee qualified by self-report because the evaluator, rather than the treating counselor, makes the final decision',
          ],
          correctAnswer: 0,
          explanation: 'A future-safety guarantee is clinically indefensible. Terrence should understand the request’s scope, possible benefits and risks, recipients, revocation limits, and alternatives before authorizing disclosure. With valid authorization, the counselor may share limited factual information without becoming the fitness evaluator. Neither functional language nor omission of diagnosis removes confidentiality. Categorical refusal may unnecessarily obstruct an independent process that can use appropriately bounded treatment input.',
        },
        {
          id: 'marcus-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'Terrence anticipates heavy drinking at a retirement banquet but fears that declining alcohol will expose his diagnosis. What should you do?',
          options: [
            'Recommend avoiding all department gatherings during the first recovery year because occupational cues and alcohol availability create excessive combined risk',
            'Use motivational relapse planning, protect current abstinence, and rehearse privacy-preserving refusal, support, transportation, and exit strategies',
            'Plan a two-drink limit with Alyssa present so Terrence can test whether social use differs from solitary trauma-related drinking',
            'Encourage disclosure to the peer-support representative so the crew can monitor drinking without receiving formal diagnostic information',
          ],
          correctAnswer: 1,
          explanation: 'The response should respect privacy while linking the decision to Terrence’s recovery goals and recent consequences. He can consider whether to attend, bring support, use a nonclinical refusal, arrange transportation, monitor cravings, and leave early. Universal social avoidance may increase isolation, while a controlled-drinking test at a high-risk event is poorly timed. Peer support can help if Terrence chooses it, but attendance does not require informal workplace monitoring or disclosure.',
        },
      ],
    },
    {
      sessionLabel: 'Eighteenth session',
      sectionNarrative: `Eight months after intake, Terrence remains engaged in coordinated trauma and recovery care. His PCL-5 score fell from 63 to 24, panic attacks occur less than monthly, and he tolerates exercise sensations without routine monitoring. He reports no suicide ideation for seven months; firearms remain with Darius pending separate reassessment. Neuropsychological evaluation found mild attentional variability without enough evidence for a neurocognitive disorder.

An independent occupational clinician approved a graduated return. Terrence completed supervised training and non-command responses without unsafe action. He authorizes a limited treatment summary to the evaluator, not the chief, but wants it to state that his risk is zero.

At an anniversary barbecue, Terrence drank two beers after seven abstinent months. He noticed an urge to buy liquor, called Darius, went home without driving or further use, and informed Alyssa and his recovery counselor the next morning. Alyssa calls it a relapse; Terrence calls it proof of controlled drinking. He briefly considers leaving therapy to prevent documentation. The event requires assessment but does not alone establish catastrophic relapse or safe controlled use.

Three days later, during a medically approved stair drill, he experienced palpitations, heat, tingling, fear of fainting, and derealization. He remained oriented to the training tower, reported no trauma image or sound, followed the planned exit, and recovered within six minutes. He now assumes any derealization means operationally unsafe PTSD dissociation.

Terrence also describes guilt and betrayal connected to obeying the evacuation order while Luis moved toward the trapped child. He asks whether “moral injury” replaces PTSD. The evaluator requests updated functional observations and whether the alcohol use or drill episode changed recommendations. Terrence asks you to omit the drinking, decide fitness yourself, and connect firearm return to successful work performance.` ,
      questions: [
        {
          id: 'marcus-q11',
          questionNumber: 11,
          domain: 'Treatment planning',
          stem: 'What is the best response to Terrence’s alcohol use at the anniversary event?',
          options: [
            'Treat the use as relapse requiring higher care because prior alcohol use interacted with suicidal thinking and firearm access',
            'Regard stopping after two drinks as evidence supporting controlled use, while retaining monitoring during anniversaries and work events',
            'Document the event without changing treatment because Terrence sought support before intoxication, driving, suicidality, or additional use occurred',
            'Conduct a nonshaming chain and risk assessment, strengthen the recovery plan, and coordinate care without presuming catastrophe or safety',
          ],
          correctAnswer: 3,
          explanation: 'The episode matters because alcohol previously interacted with trauma, suicidality, and firearm risk. Analysis should examine cues, social pressure, decisions, craving, protective actions, current suicide and access risk, and subsequent behavior. Terrence’s early disclosure and help-seeking are strengths but do not prove controlled drinking is safe. Conversely, two drinks do not automatically erase progress or mandate a higher level of care. The response should be proportionate, collaborative, and coordinated.',
        },
        {
          id: 'marcus-q12',
          questionNumber: 12,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation of the stair-climb episode is best supported?',
          options: [
            'A panic attack with derealization is most supported, while exertional, alcohol-related, trauma, medical, and functional implications still require review',
            'A trauma-cued panic attack is most supported because a fire-service drill can activate PTSD even without trauma-specific reliving',
            'A dissociative flashback is most supported because derealization during an occupational reminder is equivalent to reliving the traumatic event',
            'Alcohol withdrawal is most supported because autonomic symptoms occurred three days after renewed drinking despite the limited amount reported',
          ],
          correctAnswer: 0,
          explanation: 'The rapid somatic surge, fear, derealization, preserved orientation, and absence of trauma-specific content most strongly support a panic attack. The drill context means PTSD and occupational implications should still be considered, but context alone does not establish a flashback. Derealization can accompany panic without present-tense trauma reliving. Two beers three days earlier do not establish withdrawal. Exertional symptoms still merit appropriate medical and functional review despite a leading psychological formulation.',
        },
        {
          id: 'marcus-q13',
          questionNumber: 13,
          domain: 'Counseling skills and interventions',
          stem: 'How should moral injury be incorporated into Terrence’s treatment?',
          options: [
            'Add moral injury as a separate diagnosis because protector-role violation explains distress beyond the fear-based symptoms required for PTSD',
            'Use cognitive restructuring solely to establish that Terrence had no responsibility, postponing betrayal and grief until guilt has resolved',
            'Use it as a complementary framework for grief, values, responsibility, betrayal, meaning, and risk without replacing established diagnoses',
            'Defer moral-injury work until PTSD remission because discussing responsibility during residual symptoms may reactivate dissociation and alcohol craving',
          ],
          correctAnswer: 2,
          explanation: 'Moral injury is a useful clinical framework, not a separate DSM diagnosis. It can broaden attention to omission, betrayal, values, shame, grief, trust, responsibility, repair, and meaning while PTSD, depression, substance use, and suicide risk continue to be assessed. The counselor should not force total exoneration or delay values-based work until symptoms disappear. Pacing remains individualized, but the topic is not inherently contraindicated when residual symptoms remain.',
        },
        {
          id: 'marcus-q14',
          questionNumber: 14,
          domain: 'Professional practice and ethics',
          stem: 'What is the most defensible response to the evaluator’s updated request?',
          options: [
            'Omit the alcohol event because off-duty behavior falls outside occupational relevance and Terrence controls all facts after signing an authorization',
            'Clarify authorization and relevance, provide accurate limited treatment information, avoid guarantees, and leave individualized fitness decisions to the evaluator',
            'Disclose both events and recommend continued restriction because any resumed alcohol use plus derealization creates unacceptable emergency-response risk',
            'Clear full duty based on symptom reduction and successful graduated work while addressing firearm access through a separate treatment recommendation',
          ],
          correctAnswer: 1,
          explanation: 'The counselor should clarify the exact authorization, the evaluator’s functional question, applicable requirements, and Terrence’s concerns. Neither every off-duty fact nor no off-duty fact is automatically relevant. Accurate minimum-necessary input may describe observed functioning, treatment response, recommendations, and uncertainty without guaranteeing safety or deciding fitness. The evaluator retains the occupational role. Firearm access requires a separate current lethal-means and legal assessment rather than being inferred from work performance.',
        },
      ],
    },
  ],
};