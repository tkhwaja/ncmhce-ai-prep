import type { Narrative } from "./types";

export const yusefPostHospitalFollowUpNarrative: Narrative = {
  id: 'exam-03-02-yusef-post-hospital-follow-up',
  title: 'Yusef — Post-Hospital Follow-Up',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 34,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender man',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Arab / Palestinian American',
    relationshipStatus: 'Divorced; no children',
    setting: 'Community outpatient clinic specializing in serious mental illness and post-hospital transition',
    payment: 'Employer-sponsored insurance',
    typeOfCounseling: 'Individual counseling with psychiatric, substance-use, family, and vocational coordination',
    provisionalDiagnosis: 'Schizoaffective Disorder, bipolar type: F25.0; Cannabis Use Disorder, moderate: F12.20',
  },

  presentingProblem: `You are a licensed mental health counselor in a post-hospital community clinic. Yusef A., a 34-year-old transit-systems data analyst, attends five days after a 12-day admission. His discharge summary lists “unspecified psychotic disorder; rule out bipolar disorder with psychotic features; rule out substance-induced disorder.” He was prescribed lithium and risperidone and sees the psychiatrist in six days.

During the 11 days before admission, Yusef slept two or three hours nightly without fatigue, spoke rapidly, moved among projects, sent more than 180 messages, and spent $6,800 on radio equipment. He believed variable-message traffic signs contained a route he had been selected to decode to protect displaced families. He drove at high speed between signs, entered a restricted transit lot, climbed onto his building’s roof with a receiver, and heard “the Dispatcher” comment on his progress. His sister contacted a crisis team when he sought his car keys at 3:00 a.m.

Yusef agrees that his sleep, spending, driving, and communication were “out of control,” but remains uncertain about the messages. “Maybe my brain connected things that were not connected. Or maybe medication makes people dismiss what they cannot measure.” He now sleeps six or seven hours, feels slowed, and is no longer pressured. He returned most equipment but still notices repetition in bus numbers and hears a faint Dispatcher two or three times weekly. He says he can choose not to act.

For four years, Yusef used high-potency cannabis concentrate most evenings and weekends. In the month before admission, he used several times daily to “quiet the Dispatcher,” although some products made signs feel more personally directed. Admission toxicology was positive only for cannabis. He reports no use since discharge, other nonprescribed substances, or significant alcohol use. Inpatient medical studies did not identify another cause, but complete records are pending.

During the past two and a half years, Yusef recalls imprecisely dated periods of depression, suspiciousness, and unusual energy. At times he stayed in bed, lost interest, felt guilty, and found criticism embedded in spreadsheets; at others he felt unusually capable and slept little. He cannot say whether psychosis continued without prominent mood symptoms. Daily cannabis use overlapped much of this course. His sister recalls depressed months and other stretches when “his mood looked normal but he still argued with announcements.”

Yusef is a practicing Muslim. Prayer, dreams, and signs from God have long held meaning in his family, and he says prior clinicians treated spiritual language as illness. His mother distinguishes faith from recent behavior: “We pray for guidance. We do not believe the highway board privately assigns him missions.” His imam affirmed that spiritual meaning and treatment can coexist without endorsing the route belief. Yusef permits contact only for a specific clinical reason.

He denies current suicidal or homicidal thoughts and commanding voices. “I was not trying to die on the roof. I was trying to get a clean signal.” His sister holds his car keys and has secured roof access; he wants the keys before work suspension ends. He fears that another crisis response, especially involving police, could expose him to anti-Muslim assumptions or occupational loss. He asks whether counseling can help him “keep what matters without being treated like every thought is dangerous.”`,

  mentalStatusObservation: `Yusef arrives on time, appropriately groomed, fully oriented, polite, watchful, and cooperative. Mild leg restlessness increases when medication is discussed. Speech is organized and normal, with brief latency around the voice. Mood is “flattened and worried about work.” Affect is constricted but reactive, without current euphoria or marked irritability.

Thought process is linear. Content includes residual ideas of reference and uncertainty about the route. He does not appear internally preoccupied and reports no voice during the session. There is no current flight of ideas, pressured speech, grandiosity, or disorganization. Attention and memory are adequate.

Insight is mixed: Yusef recognizes recent impairment and accepts treatment while retaining partial conviction. Judgment has improved but was severely impaired during the episode. He denies suicidal or homicidal ideation; accidental-harm risk involving psychosis, activation, driving, heights, and access remains incompletely assessed. Supports include family, faith community, housing, professional identity, and treatment engagement.`,

  familyHistory: `Yusef lives alone near his older sister, Samira, his primary support. Their parents immigrated before he was born. The family is close, private about mental health, and concerned that diagnostic labels carry stigma and racialized surveillance. Samira is direct about safety but does not want ordinary religious practice pathologized.

Their mother had two major depressive episodes. A paternal uncle reportedly had minimal-sleep periods, expansive plans, suspiciousness, and financial losses, but no verified diagnosis. There is no known completed suicide. Yusef’s marriage ended three years ago amid withdrawal and cannabis use; no spousal contact is authorized.

Yusef’s release permits Samira to participate in safety planning and scheduling and the clinic to share urgent safety information and appointment logistics—not psychotherapy content, diagnosis, or general progress. You explain that family may provide information even when reciprocal disclosure is limited.`,

  workHistory: `Yusef has a master’s degree in urban informatics and eight years with a municipal transportation authority. Until two years ago, reviews described careful analysis and strong collaboration. More recently, he missed deadlines, accused a supervisor of altering data to test him, and made unapproved dashboard changes. During the episode he emailed executives overnight, entered a restricted lot, and described a humanitarian assignment.

He is on paid medical leave. Human resources requests return documentation and may seek a fitness-for-duty opinion. Yusef wants certification that he is safe and ready for live-system access but fears disclosure will end his career. You explain that communication requires authorization, minimum necessary disclosure, and distinction between treatment and independent evaluation.`,

  intakeSessionSummary: `You explain that the recent episode established mania and psychosis, but the final diagnosis depends on course. You will reconstruct full mood episodes, any sustained mood-independent psychosis, the proportion of active and residual illness occupied by mood episodes, and symptoms during verified abstinence. With authorization, you request hospital, outpatient, primary-care, and substance-treatment records.

You ask which beliefs are shared, personally meaningful but flexible, or fixed and privately referential, and how each affects functioning. Yusef says this is more respectful than being asked whether he is “religious or delusional.”

The immediate plan assesses suicide, violence, accidental harm, judgment, access, command content, adherence, sleep, substances, and ability to use supports. You will coordinate with the prescriber rather than direct medication changes. Samira may hold the keys while risk is clarified, with duration unresolved. Diagnosis remains provisional.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-yusef-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnostic approach is most appropriate at the first post-hospital session?',
          options: [
            'Assign Bipolar I Disorder with psychotic features because the documented manic syndrome provides the most parsimonious explanation for the hospitalization',
            'Assign a cannabis-induced psychotic disorder provisionally because heavy concentrate use immediately preceded admission and toxicology excluded other substances',
            'Assign schizoaffective disorder provisionally because psychotic experiences appear to have persisted after the manic symptoms improved in the hospital',
            'Document mania and psychosis while reconstructing mood-independent psychosis, overall mood burden, abstinence, and competing causes before choosing a longitudinal diagnosis',
          ],
          correctAnswer: 3,
          explanation: 'The recent manic and psychotic syndromes are well supported, but the competing diagnoses turn on information not yet established. Schizoaffective disorder requires both sustained psychosis outside a major mood episode and major mood episodes during most of the total active and residual illness. Bipolar I with psychotic features would fit if psychosis occurred only during mood episodes. Heavy cannabis exposure demands causal assessment, but temporal overlap and a positive screen do not by themselves prove a substance-induced disorder. Residual symptoms five days after discharge may reflect incomplete resolution of the same mood episode rather than mood-independent psychosis. The best approach preserves what is known, obtains the decisive timeline, and avoids false precision.',
        },
        {
          id: 'exam-03-yusef-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which additional finding would most strongly support schizoaffective disorder over both Bipolar I Disorder with psychotic features and schizophrenia?',
          options: [
            'Psychosis becomes more intense during both manic and depressive episodes and requires antipsychotic treatment after each episode',
            'Psychosis continued at least two weeks without a major mood episode, while full mood episodes occupied most of the overall illness',
            'A first-degree relative confirms prior mood elevation and psychosis, and the current episode persists beyond the expected period of cannabis intoxication',
            'The client has recurrent manic and depressive episodes, with residual suspiciousness and functional decline between episodes despite treatment adherence',
          ],
          correctAnswer: 1,
          explanation: 'Both parts of the correct option are necessary to separate the leading longitudinal diagnoses. Psychosis for at least two weeks in the absence of a major mood episode distinguishes schizoaffective disorder from bipolar disorder with psychotic features; mood episodes present for most of the total illness distinguishes it from schizophrenia with superimposed mood episodes. Greater psychotic intensity during mood episodes, residual symptoms after an episode, family history, and persistence beyond acute intoxication are important but do not establish both boundaries. “Between episodes” is also too imprecise unless records show that a major mood syndrome had actually remitted during a qualifying interval.',
        },
        {
          id: 'exam-03-yusef-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond to Yusef’s concern that clinicians interpret spiritual language as pathology?',
          options: [
            'Acknowledge the concern and explore shared meaning, flexibility, conviction, context, distress, and functioning without endorsing or dismissing the belief',
            'Avoid discussing religious content until psychosis has remitted because cultural exploration could inadvertently strengthen referential or grandiose beliefs',
            'Ask the imam to determine which beliefs are religiously acceptable, then treat any experiences outside that boundary as probable psychotic symptoms',
            'Reassure Yusef that faith is not being questioned, while limiting assessment to whether the signs or voices create objectively dangerous behavior',
          ],
          correctAnswer: 0,
          explanation: 'Culturally responsive assessment neither pathologizes faith nor grants clinical truth to a belief because it uses spiritual language. The counselor should examine whether an experience is shared or understandable within the client’s community, how rigidly it is held, what alternatives are possible, and whether it produces distress or impairment. Deferring the topic would leave a central source of meaning and diagnostic error unexamined. An imam may be a helpful consultant with permission, but the counselor cannot outsource diagnosis or define minority beliefs by clerical approval. Assessing only dangerousness is too narrow because psychotic symptoms may matter through impairment, distress, or loss of reality testing even when no immediate danger occurs.',
        },
        {
          id: 'exam-03-yusef-q4',
          questionNumber: 4,
          domain: 'Counseling skills and interventions',
          stem: 'Yusef denies suicidal and homicidal intent and says the roof incident was not self-harm. What is the counselor’s best immediate response?',
          options: [
            'Accept the distinction, maintain the existing family precautions, and focus risk monitoring on any future command hallucinations or explicit intent',
            'Arrange emergency readmission because recent psychosis, rooftop behavior, and requests for car keys make outpatient risk management insufficient',
            'Assess current psychosis, activation, accidental-harm pathways, judgment, access, adherence, and capacity to use supports, then select the least restrictive safe disposition',
            'Use a standard suicide assessment and, if it remains negative, return the keys because restrictions without suicidal intent could undermine autonomy and alliance',
          ],
          correctAnswer: 2,
          explanation: 'The roof and driving behaviors may create serious danger without suicidal intent. A complete assessment therefore includes accidental harm, impaired judgment, psychosis and mood activation, command content, sleep, substances, medication, access to vehicles and heights, recent behavior, and ability to collaborate with supports. The findings—not one denial or one historical fact—determine whether outpatient precautions, urgent evaluation, or hospitalization is needed. Automatic readmission may be warranted if acute instability or inability to maintain safety emerges, but it is premature before current assessment. A suicide-only screen misses the main pathway, while indefinite restrictions without individualized review would unnecessarily compromise autonomy.',
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `By the fifth session, records permit reconstruction of 28 months of active and residual illness. A seven-month major depressive episode included depressed mood, anhedonia, guilt, appetite loss, slowing, poor concentration, and passive death wishes. Auditory commentary and referential beliefs appeared during its final five months.

After depression fully remitted, notes documented six weeks of usual sleep, energy, activity, speech, and affect. During four consecutive weeks of that euthymic interval, Yusef still heard commentary, believed transit announcements contained private criticism, and worked reduced hours. This was not brief residual mood improvement.

Records later document a six-week manic episode with decreased sleep need, elevated and irritable mood, pressure, grandiosity, increased activity, spending, and psychosis. A nearly eight-month major depression and the recent mania followed. Conservative review places full mood syndromes during approximately 18 of the 28 months of active or residual psychotic illness. Psychosis was strongest during mood episodes but also occurred outside them.

Substance records show a seven-week intensive outpatient program with four negative observed tests. During five euthymic weeks, Yusef still heard the Dispatcher and covered route numbers on his windows because they felt directed at him. Symptoms were not confined to intoxication or withdrawal, although cannabis intensified salience, insomnia, and paranoia.

Yusef meets five cannabis-use criteria: tolerance, craving, unsuccessful reduction, work interference, and continued use despite paranoia and family conflict. No withdrawal or other substance disorder is identified. Medical review remains unrevealing.

The fuller safety assessment supports intensive outpatient care. Yusef has no suicidal, homicidal, or command content; no new roof behavior; improving reality testing; reliable attendance; and willingness to call before acting on a sign. Samira retains the keys under a weekly reviewed plan containing symptom thresholds, crisis contacts, preferred nonpolice alternatives when feasible, and conditions for urgent evaluation.

Yusef says, “Cannabis sometimes made signals louder, but it gave me the only hour when I did not care. If you say it did nothing, I will stop telling you when I want it.”

Samira leaves a voicemail that Yusef questioned whether lithium is “erasing his intuition” and asks if he stopped it. The release permits appointment logistics and urgent safety information—not diagnosis, adherence details, or general progress.`,
      questions: [
        {
          id: 'exam-03-yusef-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation is now best supported by the complete longitudinal record?',
          options: [
            'Bipolar I Disorder with psychotic features and Cannabis Use Disorder, moderate, because psychosis is most severe during major mood episodes',
            'Schizoaffective Disorder, bipolar type, and Cannabis Use Disorder, moderate, because mood-independent psychosis and majority-duration mood episodes are both documented',
            'Schizophrenia and Cannabis Use Disorder, moderate, because psychosis persists outside mood episodes and causes enduring occupational dysfunction',
            'Cannabis-induced psychotic disorder with cannabis-induced bipolar disorder because high-potency use preceded and repeatedly intensified both symptom clusters',
          ],
          correctAnswer: 1,
          explanation: 'The record establishes a manic episode, major depressive episodes, at least four weeks of psychosis during verified euthymia, and major mood episodes during most of the 28-month active and residual illness. That pattern supports schizoaffective disorder, bipolar type. Bipolar I with psychotic features does not account for the documented mood-independent psychosis. Schizophrenia is less fitting because full mood episodes occupy the majority rather than a minority of the illness. Cannabis use is clinically consequential and meets a moderate use-disorder threshold, but persistent psychosis during verified abstinence and euthymia argues against making cannabis the sole cause. Exacerbation, temporal overlap, and comorbidity should not be mistaken for complete causation.',
        },
        {
          id: 'exam-03-yusef-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which initial treatment plan best matches Yusef’s formulation and current level of stability?',
          options: [
            'Prioritize medication adherence and cannabis abstinence, postponing psychotherapy and vocational decisions until delusional conviction has fully remitted',
            'Begin insight-oriented exploration of the Dispatcher’s personal meaning while the prescriber determines whether mood or psychotic symptoms should be treated first',
            'Refer to separate psychosis and substance programs so each disorder receives specialist care without competing formulations in the same treatment relationship',
            'Coordinate psychiatric care with recovery-oriented CBT for psychosis, motivational substance work, family education, sleep and relapse planning, and staged vocational support',
          ],
          correctAnswer: 3,
          explanation: 'Yusef has interacting psychotic, mood, substance, safety, family, and occupational needs. Coordinated care can address medication and side effects, coping and reality testing, sleep, cannabis change, relapse detection, family collaboration, and return-to-work goals without waiting for perfect insight or symptom elimination. Medication and abstinence are important but are not sufficient reasons to withhold psychotherapy or rehabilitation. Unstructured exploration of meaning before stability and coping are secure may increase rumination and does not resolve sequencing. Separate programs may be appropriate when clinically necessary, but fragmentation risks contradictory plans and makes the client responsible for integrating closely related conditions. The plan should remain prioritized and individualized rather than simply adding every available service.',
        },
        {
          id: 'exam-03-yusef-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best response to Yusef’s statement that cannabis both helped him disengage from the signals and sometimes intensified them?',
          options: [
            'Explain that perceived short-term relief is part of dependence and contrast it with evidence that high-potency cannabis worsens psychosis',
            'Accept his account and focus on lower-potency products because insisting on abstinence would sacrifice disclosure and harm reduction',
            'Reflect both functions, examine his use-symptom patterns with permission, elicit discrepancies with recovery goals, and support self-directed change',
            'Recommend a monitored abstinence trial and defer discussion of ambivalence until symptom ratings can establish whether cannabis has a causal effect',
          ],
          correctAnswer: 2,
          explanation: 'The response uses motivational interviewing: it accurately reflects ambivalence, respects autonomy, invites examination of personally observed consequences, and links change talk to Yusef’s own values. Education and a monitored abstinence period may be useful with permission, but leading with correction can recreate the invalidation he explicitly predicts and reduce disclosure. Recommending lower-potency use before assessing goals and risk assumes a harm-reduction target the client has not chosen and may be unsafe given his history. Deferring ambivalence work also misses the moment when his competing motivations are available. The counselor can be transparent about psychosis risk while avoiding argument, collusion, or a demand that Yusef deny the short-term effect he experienced.',
        },
        {
          id: 'exam-03-yusef-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor handle Samira’s voicemail under the current release?',
          options: [
            'Receive and document the collateral information, avoid confirming treatment details beyond the authorization, assess the concern with Yusef, and clarify transparent communication boundaries',
            'Return the call and confirm adherence only if Yusef has stopped medication, because the safety exception overrides the limited release once relapse is possible',
            'Ask Samira to resubmit the concern through the prescriber because accepting one-way collateral creates information that cannot ethically be used in counseling',
            'Document that the source is unverified but do not raise the statement with Yusef unless objective evidence of nonadherence or deterioration appears',
          ],
          correctAnswer: 0,
          explanation: 'A confidentiality limit on disclosure does not require the counselor to refuse information a family member offers. The counselor may receive and document the voicemail, use it in clinical assessment, and avoid confirming adherence, diagnosis, or progress outside the release. The concern should be discussed directly and nonpunitively with Yusef, including how collateral will be handled, because covert reliance could damage trust. A possible relapse does not automatically create an emergency exception or authorize unrestricted disclosure; the counselor must assess whether a legally recognized serious and imminent safety circumstance exists. Routing all collateral elsewhere or ignoring it until independently proven would discard relevant information and weaken coordinated risk assessment.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `Seven weeks later, Yusef consistently attends counseling, psychiatry, and a dual-diagnosis group. When signs feel directed at him, he labels the experience, rates conviction and distress, checks context, seeks an alternative explanation, and delays action. He and Samira review safety weekly. With prescriber-guided adjustments, sleep stabilized near seven hours, mania resolved, and the Dispatcher decreased to brief indistinct experiences once or twice weekly. He resumed cooking, mosque attendance, and some social contact.

After nine weeks without cannabis, Yusef used once following a stressful human-resources email. Tension fell briefly, then bus announcements felt significant. He discarded the remainder and disclosed the lapse, but says, “If abstinence is the measure, I failed. Maybe I should leave before the group removes me.”

Distressing sexual side effects and restlessness led him to skip risperidone twice without telling the prescriber. Over four nights, sleep fell to four or five hours; he is “not that tired,” photographs repeated route numbers, and briefly wondered whether an announcement emphasized his name. Speech is slightly faster but interruptible. He has made no purchases or restricted entries and denies command content, suicidal or homicidal ideation, and intent to follow a sign. Samira holds his keys. Psychiatry is scheduled in twelve days.

With authorization, human resources sends a form asking the treating counselor to certify safe performance of all duties, interpretation of live data, city driving, restricted access, and future nondangerousness. Your work addressed treatment and recovery; you have not completed an independent occupational evaluation, reviewed every essential function, or performed fitness testing.

Yusef adds, “Part of me knows the route was illness. Another misses being certain I had a purpose. If you make me call it meaningless, I can give the answer you want, but I will not believe you.”`,
      questions: [
        {
          id: 'exam-03-yusef-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best immediate response to the current cluster of reduced sleep, missed medication, renewed referential thinking, and cannabis use?',
          options: [
            'Arrange psychiatric hospitalization because the same relapse sequence preceded dangerous behavior and self-report cannot establish safety during emerging mania',
            'Address cannabis first and reassess after several days of abstinence because substance exposure makes the mood and psychosis findings diagnostically uninterpretable',
            'Reassess psychosis, activation, sleep need, adherence, access, and risk; activate the relapse plan, coordinate promptly with the prescriber, and escalate care if findings warrant',
            'Increase self-monitoring and schedule an extra counseling visit while preserving the routine psychiatry appointment because no dangerous behavior or full syndrome is present',
          ],
          correctAnswer: 2,
          explanation: 'The symptom cluster is an early-warning pattern with several modifiable drivers and a history of rapid progression to dangerous judgment. It requires current assessment, immediate use of the individualized plan, prompt prescriber coordination, increased support, and a level-of-care decision based on the findings. Automatic hospitalization may become necessary, but the available facts do not yet establish inability to collaborate, imminent danger, or need for the most restrictive option. Treating cannabis as the only interpretable cause ignores missed medication, reduced sleep need, and the established primary disorder. Waiting for a full syndrome or the routine appointment forfeits the purpose of relapse prevention. The counselor coordinates medication concerns but does not independently prescribe, stop, or change doses.',
        },
        {
          id: 'exam-03-yusef-q10',
          questionNumber: 10,
          domain: 'Treatment planning',
          stem: 'How should the single cannabis lapse be incorporated into treatment planning?',
          options: [
            'Treat it as clinical data: analyze the stress-use-consequence sequence, reinforce rapid disclosure and disposal, revise supports, and renew a collaboratively chosen recovery goal',
            'Recommend a higher level of substance treatment because any use during psychosis indicates that the current integrated outpatient plan has failed',
            'Reset the abstinence date and apply the group’s relapse protocol consistently so reassurance does not inadvertently minimize the relationship between cannabis and psychosis',
            'Shift from abstinence to moderated use because an all-or-nothing goal appears to be producing shame and may reduce future honesty',
          ],
          correctAnswer: 0,
          explanation: 'A lapse is important without erasing nine weeks of change or automatically proving treatment failure. Functional analysis identifies the trigger, expected relief, actual effects, protective actions, and missing supports; reinforcing prompt disclosure and disposal strengthens recovery behavior. The level of care should change if severity, recurrence, safety, or inability to meet goals indicates it—not solely because one use occurred. A rigid reset may be required for administrative tracking but should not become the clinical meaning of the event. Automatically adopting moderated use substitutes the counselor’s reaction for a collaborative risk-informed decision and may be poorly matched to Yusef’s psychosis history. Accountability and nonshaming care are compatible.',
        },
        {
          id: 'exam-03-yusef-q11',
          questionNumber: 11,
          domain: 'Professional practice and ethics',
          stem: 'What is the counselor’s most appropriate response to the employer’s fitness-for-duty form?',
          options: [
            'Complete the form using current mental-status and adherence findings, while qualifying that no clinician can guarantee future behavior',
            'Decline all employer communication because a treating counselor should never release functional information in an employment matter',
            'Ask the psychiatrist to cosign the form because medical involvement resolves the counselor’s dual-role and predictive limitations',
            'Clarify role and request, provide authorized factual information within competence, and refer definitive fitness questions for an appropriate independent evaluation',
          ],
          correctAnswer: 3,
          explanation: 'The form asks the treating counselor to make broad occupational and predictive judgments that the treatment evaluation was not designed to support. The counselor should clarify essential functions and the intended use, discuss risks and limits with Yusef, release only authorized and minimum necessary factual information within competence, and avoid unsupported assurances. An appropriately qualified independent evaluator can address formal fitness when required. Refusing every communication is unnecessarily absolute because limited functional documentation or accommodation information may be clinically and ethically appropriate. A psychiatrist’s signature does not by itself cure incompatible roles, inadequate occupational data, or impossible certainty. The issue is not merely adding a disclaimer; it is matching the opinion to role, methods, competence, and evidence.',
        },
        {
          id: 'exam-03-yusef-q12',
          questionNumber: 12,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best response to Yusef’s statement that surrendering the route belief would also mean surrendering purpose?',
          options: [
            'Normalize grief after psychosis and redirect him toward work and faith activities that provide purpose without revisiting the belief’s evidentiary basis',
            'Explore what certainty and purpose provided, validate the loss without validating the route, and collaboratively examine evidence, alternatives, costs, and chosen values',
            'Use gentle Socratic questions to help him reach an explicit conclusion that the route was a symptom before exploring replacement sources of meaning',
            'Affirm that the spiritual meaning can remain true even if acting on literal transit messages was unsafe, because disputing meaning would weaken cultural responsiveness',
          ],
          correctAnswer: 1,
          explanation: 'Yusef is describing both residual conviction and grief over identity and purpose. The counselor can validate the emotional function of the experience without confirming its literal content, then use collaborative curiosity to examine evidence, alternatives, consequences, and values. Redirecting immediately to other activities may bypass the loss and the remaining belief. Requiring a prescribed conclusion makes apparent “insight” a compliance test and may produce concealment rather than flexible reality testing. Affirming the belief’s truth goes beyond respecting spiritual meaning and risks reinforcing a delusion. Recovery-oriented CBT for psychosis aims for reduced distress, safer choices, and greater cognitive flexibility; it does not require humiliation, cultural erasure, or forced agreement with the clinician.',
        },
      ],
    },
  ],
};
