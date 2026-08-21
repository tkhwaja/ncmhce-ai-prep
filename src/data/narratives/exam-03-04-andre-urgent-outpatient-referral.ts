import type { Narrative } from "./types";

export const andreUrgentOutpatientReferralNarrative: Narrative = {
  id: 'exam-03-04-andre-urgent-outpatient-referral',
  title: 'Andre — Urgent Outpatient Referral',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [8, 7, 7],

  clientInfo: {
    age: 32,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender man',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black / Haitian American',
    relationshipStatus: 'Married; two children',
    setting: 'Same-day intake program within an outpatient behavioral-addictions clinic',
    payment: 'Employer-sponsored insurance',
    typeOfCounseling: 'Individual counseling with psychiatric, family, peer, financial, and higher-level-of-care coordination',
    provisionalDiagnosis: 'Gambling Disorder, severe: F63.0',
  },

  presentingProblem: `You are a licensed mental health counselor in an outpatient clinic specializing in behavioral and substance addictions. Andre B., a 32-year-old logistics coordinator, accepts a same-day intake after his wife, Lena, discovers extensive sports-betting and online-casino debt. Andre says he came voluntarily, then adds, “Voluntary is a generous word. She said treatment or she takes the kids.”

Lena found $46,000 in credit-card and personal-loan debt, an $18,000 withdrawal from joint savings, and messages showing that Andre borrowed $9,500 from his sister. Andre had told Lena that a payroll error delayed their mortgage payment. He now alternates between admitting the losses and saying one carefully selected parlay could “erase the whole disaster.” He checked live odds twice in the waiting room and has three betting applications open on his phone.

Andre began legal sports betting four years ago. During the past 18 months, he progressed from $25 bets to wagers of $1,000 or more, online casino play, and repeated cash advances. He thinks about odds during work and family activities, increases stakes to recreate earlier excitement, and has made at least six unsuccessful attempts to stop. When he deletes applications, he becomes irritable and restless, then reinstalls them. He bets after conflict or shame, returns quickly to recover losses, conceals statements, and has asked relatives to cover urgent bills. His marriage is at risk, and he received a work warning for watching games and placing bets during shifts.

Andre says the behavior might be “bipolar.” A paternal cousin has Bipolar I Disorder. During a recent three-night betting streak, Andre slept about three hours nightly, spoke quickly on betting forums, and planned several simultaneous wagers. He was exhausted each morning and used caffeine to remain awake. He denies a distinct period of elevated or persistently irritable mood, decreased need for sleep without fatigue, unusual energy outside gambling, grandiosity, expansive sociability, psychosis, or broad increases in goal-directed and risky behavior. The betting pattern has continued during otherwise ordinary mood for years. A complete longitudinal assessment is still needed.

Andre also worries that repeated lying means he has “no conscience.” He admits manipulating explanations to obtain money and once used Lena’s saved card number after promising not to gamble. He denies theft from work, aggression, arrests, reckless disregard outside gambling, or a childhood pattern of cruelty, fire setting, serious theft, or other conduct problems. He shows guilt and does not minimize Lena’s right to protect joint finances, although the reliability of self-report remains uncertain.

For nine days, Andre has felt ashamed, restless, and intermittently hopeless. He still works, cares for his children, enjoys basketball when not betting, and does not describe a sustained major depressive syndrome. When asked what he fears most, he says, “If Lena leaves and everyone knows what I did, there is not much reason to wake up.” He initially calls this “just a figure of speech.” He has no documented attempt or self-injury history. Current ideation, intent, planning, access, preparatory behavior, substance use, and ability to maintain safety have not yet been assessed.

Andre grew up in a close Haitian American Baptist family. He says his father taught that “a man protects the household; he does not gamble the roof over their heads.” Andre values the faith community but does not want church leaders contacted. He resists language that seems to erase responsibility: “If you call it an illness so I feel better, Lena will think therapy is another hustle.”

Before the appointment, Lena leaves a voicemail saying Andre has concealed accounts and that she needs to know whether he is attending treatment before deciding how to protect the children and remaining money. No authorization permits disclosure to her. She does not mention a suicide threat in the message but offers to provide bank records and observations.`,

  mentalStatusObservation: `Andre is appropriately dressed and fully oriented. He is tense, ashamed, and cooperative, with repeated glances toward his silenced phone. Speech becomes rapid when he describes a possible winning strategy but remains coherent and interruptible. Mood is “trapped.” Affect is anxious and constricted, with tearfulness when discussing his children; there is no sustained elevation, expansiveness, or marked irritability.

Thought process is linear. Content includes chasing-loss logic, catastrophic expectations about exposure, guilt, and an ambiguous death-related statement. There is no psychosis. Attention narrows around betting cues. Insight fluctuates between acknowledging loss of control and believing skill can repair the damage. Financial judgment is severely impaired. Suicide judgment and current capacity to maintain safety remain undetermined pending direct assessment.`,

  familyHistory: `Andre lives with Lena and their children, ages 6 and 3. Lena works part time and believed the family had approximately six months of emergency savings. She has now moved her paycheck to an individual account and frozen joint credit. Andre experiences these actions as humiliating but says she has reason not to trust him.

His parents and younger sister live nearby. His father is a church deacon and views gambling as a moral failure; his mother worries primarily about family reputation. The paternal cousin’s Bipolar I Disorder involved clear episodes of minimal sleep, grandiosity, excessive spending across domains, and hospitalization. Andre’s sister previously paid a loan without knowing gambling caused it. No known family suicide has occurred.

Andre has not authorized family participation. You explain that family may offer information even when you cannot disclose information back, and that safety exceptions depend on clinical findings, applicable law, and minimum necessary disclosure.`,

  workHistory: `Andre has worked for a regional shipping company for seven years and was promoted to logistics coordinator two years ago. He has generally been reliable. During the past year, he placed bets at work, missed a freight update while watching a game, borrowed from two coworkers, and received one written warning. He does not control company funds and no employer theft is reported.

Andre fears job loss if treatment records identify gambling. He asks for a generic attendance letter but has not authorized broader employer communication. His current financial crisis includes mortgage arrears, high-interest debt, and family loans. You explain that debt intervention matters but cannot substitute for suicide assessment, diagnostic clarification, or treatment of the behavior generating the losses.`,

  intakeSessionSummary: `You explain that the first priorities are immediate safety and accurate formulation, not adjudicating the marriage or designing a repayment plan. Andre’s death-related statement requires a direct suicide inquiry before disposition. You will assess ideation, intent, plan, access, preparation, past behavior, acute stressors, intoxication, protective factors, and ability to collaborate with a safety response rather than rely on one screening score or his description of the comment as figurative.

You also plan a criterion-based gambling assessment, a timeline of mood and energy independent of betting, substance and medical screening, and developmental review of any pervasive rule-breaking pattern. Deception associated with an addiction does not automatically establish a personality disorder, while shame and family history do not prove or exclude bipolar disorder.

Andre declines a release for Lena but agrees that you may listen to her collateral message without confirming his attendance or treatment. You revisit confidentiality limits, including serious and imminent danger, and tell Andre you will involve him in safety communication when feasible without promising secrecy that could prevent protection.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-andre-q1',
          questionNumber: 1,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s most appropriate next action after Andre’s statement that there may be little reason to wake up?',
          options: [
            'Administer a validated suicide screener and proceed with the gambling interview if he does not endorse active ideation on the measure',
            'Conduct a direct suicide inquiry covering ideation, intent, plan, access, preparation, history, acute drivers, protective factors, and ability to maintain safety',
            'Ask permission to involve Lena immediately because relationship dissolution is both the stated trigger and the strongest available protective factor',
            'Clarify whether the statement reflects shame or a depressive syndrome before asking detailed suicide questions that could intensify defensiveness',
          ],
          correctAnswer: 1,
          explanation: 'Andre’s statement requires a direct, individualized suicide inquiry now. A screening instrument may structure part of the process but cannot determine risk, disposition, or safety by itself. The counselor needs current ideation, intent, planning, access, preparatory acts, past behavior, intoxication, acute losses, reasons for living, and capacity to collaborate. Lena may become an essential support or recipient of minimum necessary safety information, but the counselor should first clarify the threat unless delay itself would be dangerous. Exploring shame and diagnostic context remains important after immediate risk is characterized. Direct questions do not create suicidality; avoiding them because Andre is defensive could miss the case’s highest-priority problem.',
        },
        {
          id: 'exam-03-andre-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which available fact currently weighs most strongly against explaining Andre’s gambling as part of a manic or hypomanic episode?',
          options: [
            'His most extreme losses followed sports events and online promotions rather than an unprovoked shift in mood or behavior',
            'He expresses guilt, fear of consequences, and concern for his children rather than grandiosity or indifference about the financial damage',
            'His rapid speech is interruptible, his thought process is linear, and he shows no psychosis during the current intake examination',
            'Gambling and chasing losses persisted across years of ordinary mood, while curtailed sleep caused fatigue without a broader episodic change in energy',
          ],
          correctAnswer: 3,
          explanation: 'The strongest evidence is longitudinal: the behavior persists outside any distinct mood-and-energy episode, and short sleep reflects prolonged betting followed by fatigue rather than decreased need for sleep. Triggers, guilt, organized thought, and absence of current psychosis may inform assessment, but none excludes bipolar disorder. Manic episodes can be irritable, nonpsychotic, and followed by remorse. The diagnosis should turn on a clear departure from baseline involving clustered mood, energy, activity, sleep, cognition, and judgment changes—not on family history or one overlapping symptom. Continued assessment is warranted, but the available course supports a primary gambling process more strongly than episodic mania.',
        },
        {
          id: 'exam-03-andre-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond when Andre says that diagnosing a disorder would help him evade moral and family responsibility?',
          options: [
            'Explain that an addictive disorder reduces voluntary control and ask him to defer moral judgments until symptoms stabilize enough for accurate reflection',
            'Agree that repair and restitution should precede diagnostic language so treatment does not reinforce externalization or further damage Lena’s trust',
            'Respect his faith and accountability concerns, distinguish explanation from excuse, and explore how treatment, truthfulness, boundaries, and repair can coexist',
            'Offer referral to a culturally matched faith-based counselor because secular addiction treatment may conflict with his family’s moral framework',
          ],
          correctAnswer: 2,
          explanation: 'Andre is asking whether compassion will erase agency. The best response respects his moral and cultural framework without endorsing shame as treatment. A diagnosis can explain a patterned loss of control while accountability addresses honesty, safeguards, restitution, and future choices; neither cancels the other. Asking him to suspend moral concerns may communicate that the clinician’s model outranks his values. Delaying diagnosis until repair reverses appropriate sequencing and may leave the active disorder untreated. Faith-based support could be added if Andre wants it, but referral based on assumed incompatibility stereotypes both his faith and secular care. Collaborative integration is more responsive than either absolution or condemnation.',
        },
        {
          id: 'exam-03-andre-q4',
          questionNumber: 4,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor handle Lena’s voicemail before any acute safety exception has been established?',
          options: [
            'Receive and document her collateral, avoid confirming Andre’s treatment, assess the information with him, and seek specific authorization for useful future coordination',
            'Decline the bank records because information obtained without reciprocal disclosure could compromise neutrality in Andre’s individual treatment',
            'Confirm only that Andre attended intake because Lena’s joint financial exposure makes attendance directly relevant to her protection of the children',
            'Return the call without discussing diagnosis, using Andre’s general consent to treatment as implied permission for spouse involvement in addiction care',
          ],
          correctAnswer: 0,
          explanation: 'The counselor may receive relevant collateral without disclosing protected treatment information in return. The source and limits should be documented, and Andre should be invited into transparent coordination and a specific authorization when clinically useful. Marriage, shared debt, and concern for children do not automatically authorize confirmation of attendance or treatment. General consent to receive care is not a release to a spouse. Refusing offered information would discard potentially important diagnostic and safety data. If later assessment supports a serious and imminent threat, applicable law may permit minimum necessary disclosure to a person able to lessen it; that exception should not be invoked prospectively for routine financial concerns.',
        },
      ],
    },
    {
      sessionLabel: 'Third session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `The initial suicide assessment found intermittent thoughts that his family might be better without him but no current plan, intent, preparation, or known lethal-means access. Andre identified his children as reasons for living, agreed to a written safety plan and frequent contact, and accepted an urgent psychiatric evaluation. Lena drove him home after Andre authorized only that day’s safety coordination. Disposition was revisited rather than inferred from the screen.

Over the next week, records and interviews clarify the gambling course. During the past 12 months, Andre has been persistently preoccupied, needed increasing stakes, repeatedly failed to stop, become restless when trying, gambled when distressed, chased losses, lied to conceal the extent, jeopardized marriage and work, and relied on others for bailout money. No distinct manic or hypomanic syndrome is identified. Substance screening is negative, and medical review does not suggest another cause.

Developmental history and collateral do not show conduct disorder before age 15 or a pervasive adult pattern of aggression, irresponsibility, criminality, reckless disregard, or exploitation independent of gambling. Andre’s deception and misuse of shared funds are serious and require accountability, but the current evidence does not establish a broad personality pattern.

At the third session, circumstances have changed. Lena scheduled a divorce consultation for the following morning and told Andre he cannot stay in the home tonight. Andre reveals that yesterday he purchased a handgun, placed it in his car, drafted a note to his children, and selected a parking area where he intends to die after Lena’s appointment. He says he has “about sixty percent intent,” cannot promise not to act, and drank several shots before arriving. He refuses to give the counselor his car key and says, “Do not call Lena. She has had enough of my damage.” His children remain reasons for living, but he says that dying before they understand what happened may protect them from shame.

Andre is now unable to describe a credible way to remain safe without external intervention. The clinic has access to a mobile crisis team, emergency medical services, and hospital psychiatric evaluation. Any disclosure must follow applicable law, clinic procedure, and the minimum information necessary to reduce danger.`,
      questions: [
        {
          id: 'exam-03-andre-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnostic formulation best fits the established longitudinal evidence?',
          options: [
            'Bipolar I Disorder, current episode with mixed features, because severe gambling, curtailed sleep, rapid speech, agitation, and suicidality indicate activation',
            'Antisocial Personality Disorder with problematic gambling because repeated deception, misuse of shared funds, workplace impairment, and manipulation reflect disregard for others',
            'Gambling Disorder, severe, because eight or more criteria occur outside a manic episode and produce marked relational, occupational, and financial impairment',
            'Adjustment Disorder with mixed anxiety and depressed mood because the most acute symptoms and suicidal crisis followed exposure of the financial losses',
          ],
          correctAnswer: 2,
          explanation: 'Andre meets all nine gambling criteria in the relevant period, supporting severe Gambling Disorder. The behavior persists across ordinary mood, and the case does not establish a manic episode. Rapid speech, curtailed sleep, agitation, financial risk, and suicidality can overlap with bipolar presentations, but their clustering and course do not support that explanation here. Deception and financial harm are clinically serious without proving Antisocial Personality Disorder, which requires a pervasive pattern and evidence of conduct disorder before age 15. Adjustment-related distress may describe part of the current crisis but cannot account for the entrenched addictive pattern that produced it. Acute suicide risk must be addressed independently of the final diagnostic label.',
        },
        {
          id: 'exam-03-andre-q6',
          questionNumber: 6,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best immediate response to Andre’s new suicide disclosure?',
          options: [
            'Negotiate voluntary surrender of the car key and firearm, then use the existing safety plan if Andre can identify continuous family supervision overnight',
            'Maintain direct observation, activate emergency psychiatric evaluation and safe transport, address lethal access, and disclose only what is necessary to people reducing the threat',
            'Contact Lena first because she knows the vehicle and can secure the firearm, then decide with her whether emergency hospitalization is needed',
            'Use the mobile crisis team only if Andre refuses a final collaborative safety plan, because involuntary escalation may intensify shame and treatment avoidance',
          ],
          correctAnswer: 1,
          explanation: 'Andre now has intent, a specific plan, lethal access, preparation, intoxication, an imminent trigger, and inability to maintain safety independently. He requires continuous observation and emergency psychiatric evaluation, with secure transport and active lethal-means intervention. Collaboration and voluntary care remain preferable when feasible, but another safety-plan negotiation is not an adequate substitute at this level of acute risk. Lena may help reduce danger, yet she should not be made the decision maker or asked to retrieve a firearm before emergency systems are activated. The counselor may disclose minimum necessary information to capable supports or responders as permitted by law and policy; Andre’s request for secrecy does not override the immediate protection obligation.',
        },
        {
          id: 'exam-03-andre-q7',
          questionNumber: 7,
          domain: 'Treatment planning',
          stem: 'Assuming Andre is stabilized and discharged, which step-down plan best matches the full formulation?',
          options: [
            'Combine frequent suicide reassessment and safety planning with gambling-specific CBT and motivational work, access barriers, peer support, psychiatric care, and coordinated financial and family services',
            'Begin couples treatment and professional debt negotiation first because relationship rupture and insolvency are the acute drivers most likely to reactivate suicide risk',
            'Refer directly to residential gambling treatment because severe diagnostic status plus a firearm plan makes routine community care categorically insufficient',
            'Use weekly individual counseling and Gamblers Anonymous while Lena controls finances, increasing intensity only if Andre gambles or becomes suicidal again',
          ],
          correctAnswer: 0,
          explanation: 'Post-crisis care must address both suicide risk and the disorder generating recurrent financial and relational crises. The integrated option includes frequent reassessment, a living safety plan, lethal-means safety, gambling-specific treatment, practical access restrictions, recovery support, psychiatric follow-up, and coordinated financial and family work. Couples and debt services may be important but should not become substitutes for direct treatment and safety management. Residential care could be indicated after individualized assessment; neither severe diagnosis nor one crisis makes it categorically necessary. Routine weekly care with spouse-controlled money places too much responsibility on Lena and waits for deterioration before supplying an intensity already justified by recent risk.',
        },
        {
          id: 'exam-03-andre-q8',
          questionNumber: 8,
          domain: 'Intake/assessment/diagnosis',
          stem: 'How should Andre’s deception and misuse of shared funds affect assessment for Antisocial Personality Disorder?',
          options: [
            'Treat them as sufficient adult evidence because financial exploitation and repeated lying demonstrate disregard for others even without criminal charges',
            'Exclude the disorder because genuine guilt and attachment to his children are incompatible with an antisocial personality organization',
            'Defer personality assessment until gambling remission because addictive behavior makes all current interpersonal and legal evidence diagnostically unusable',
            'Assess a pervasive cross-context adult pattern and conduct disorder before age 15 while distinguishing gambling-linked deception from broader disregard',
          ],
          correctAnswer: 3,
          explanation: 'Antisocial Personality Disorder requires more than serious dishonesty in one addictive context. Assessment must establish the required developmental history and a pervasive pattern across adult functioning, while considering whether current acts cluster around gambling. Absence of criminal charges is not decisive, and harmful financial behavior should not be minimized. Conversely, remorse or family attachment does not by itself exclude a personality disorder. Waiting for complete remission may improve clarity but is not necessary before gathering developmental, collateral, occupational, relational, and legal history. The correct answer neither overpathologizes addiction-related deception nor excuses conduct that warrants accountability and risk management.',
        },
      ],
    },
    {
      sessionLabel: 'Eleventh session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Andre completes a brief psychiatric hospitalization followed by eight weeks in an intensive gambling-focused outpatient program. The firearm is transferred out of his access through a lawful safety arrangement. He and the outpatient team revise his safety plan, and risk is reassessed frequently. Psychiatric evaluation does not identify a manic, psychotic, major depressive, or substance-induced episode.

Treatment includes motivational work, gambling-specific CBT, trigger and urge management, peer meetings, application and website blocking, formal self-exclusion where available, and a financial counselor. With Andre’s agreement, paychecks enter an account used for essential bills, new credit is frozen, and he receives a defined personal amount. Lena has access to agreed financial records but is not made responsible for detecting every urge. Andre returns to work with restricted phone access during shifts. No further suicidal intent or preparation is reported.

After seven gambling-free weeks, Andre discovers that a prediction-market platform is not blocked and wagers $420 following an argument with Lena. He stops before chasing the loss, tells Lena and the counselor within 12 hours, and closes the account. Lena says the lapse proves all privacy is dangerous. She requests every therapy note, a list of anything Andre has said about money, and permanent access to his phone. Andre authorizes one partner consultation limited to safety planning, broad treatment goals, and their collaborative financial agreement; he does not authorize release of psychotherapy content or records. The relationship remains individual counseling, not couples therapy.

During the consultation, Lena says, “I cannot consent to staying married if you know financial secrets and hide behind confidentiality.” Andre responds, “One bet means I am exactly who I was. They might be better off collecting the life insurance before I drain everything again.” He looks down and will not initially clarify whether this is a new suicide thought.`,
      questions: [
        {
          id: 'exam-03-andre-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'How should the lapse be incorporated into Andre’s treatment plan?',
          options: [
            'Transfer full financial and device control to Lena because the existing collaborative safeguards failed to prevent access to an unblocked platform',
            'Analyze the argument-access-wager sequence, reinforce prompt interruption and disclosure, close the loophole, and revise coping, financial, and safety supports',
            'Return Andre to the intensive program’s first phase because severe gambling after a suicidal crisis makes any lapse evidence of insufficient stabilization',
            'Shift toward controlled gambling because an abstinence standard may convert a contained wager into shame, concealment, and renewed suicide risk',
          ],
          correctAnswer: 1,
          explanation: 'The lapse supplies actionable information without erasing seven weeks of recovery. Functional analysis identifies the trigger, access failure, decision points, consequences, and protective acts; the plan can reinforce stopping, rapid disclosure, and account closure while strengthening barriers, coping, financial safeguards, and suicide monitoring. Lena needs protection and choice, but making her the permanent surveillance system burdens the relationship and does not build Andre’s recovery. A higher level of care may be needed if recurrence, loss of control, or risk warrants it, not automatically after one contained event. Controlled gambling should not be adopted reflexively because shame emerged; the treatment goal remains a collaborative, risk-informed decision.',
        },
        {
          id: 'exam-03-andre-q10',
          questionNumber: 10,
          domain: 'Professional practice and ethics',
          stem: 'What is the counselor’s best response to Lena’s demand for all gambling-related therapy information?',
          options: [
            'Share financial-risk disclosures because Lena’s exposure and the children’s welfare outweigh ordinary individual-treatment privacy after documented deception',
            'Adopt a no-secrets policy for the remainder of treatment and allow Andre to decide whether to accept it before the next individual session',
            'Honor the limited authorization, support voluntary financial transparency, and establish separate informed-consent rules prospectively if the role changes to couples therapy',
            'End the consultation and refer the couple elsewhere because Lena’s request creates an unavoidable conflict between Andre’s confidentiality and her financial safety',
          ],
          correctAnswer: 2,
          explanation: 'Lena’s need for informed financial boundaries is legitimate, but it does not give her automatic access to Andre’s records or individual-session content. The counselor should stay within the specific authorization, facilitate voluntary disclosure tied to the financial agreement, and help Lena make decisions using information Andre consents to share. A no-secrets policy cannot be imposed retroactively on prior individual disclosures. If the clinician later assumes a couples role, the clients need new informed consent about who the client is, records, contact, secrets, and foreseeable consequences. Referral is not automatically required; the roles can remain clear. Acute safety exceptions remain available when their legal criteria are met, but ordinary financial risk does not erase confidentiality.',
        },
        {
          id: 'exam-03-andre-q11',
          questionNumber: 11,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do first after Andre says his family may be better off collecting his life insurance?',
          options: [
            'Pause the partner and relapse discussion and directly reassess current suicide ideation, intent, plan, access, preparation, intoxication, and capacity for safety',
            'Ask Lena whether the statement resembles Andre’s prior crisis, using her answer to determine whether the established safety plan should be activated',
            'Challenge the all-or-nothing interpretation by contrasting the contained lapse with Andre’s recent recovery, then reassess suicide risk if hopelessness remains',
            'Invite Andre to use his urge-management sequence while Lena identifies immediate financial boundaries that could restore his sense of control',
          ],
          correctAnswer: 0,
          explanation: 'The life-insurance statement is new suicide-relevant content in a client with a recent high-acute-risk episode. Safety assessment again takes precedence over relapse processing, reassurance, couples work, or financial problem solving. The counselor should ask Andre directly about current ideation, intent, planning, access, preparation, substance use, and ability to maintain safety, then choose disposition from the findings. Lena’s observations are useful but cannot replace Andre’s direct assessment or make her responsible for triage. Cognitive and relapse interventions may follow if the client can safely engage. Improvement and a contained lapse do not justify assuming that the statement is merely shame-based or rhetorical.',
        },
      ],
    },
  ],
};
