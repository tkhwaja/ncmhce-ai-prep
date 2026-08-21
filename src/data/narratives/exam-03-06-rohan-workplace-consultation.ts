import type { Narrative } from "./types";

export const rohanWorkplaceConsultationNarrative: Narrative = {
  id: 'exam-03-06-rohan-workplace-consultation',
  title: 'Rohan — Workplace Consultation',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [7, 7, 7],

  clientInfo: {
    age: 45,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender man',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Indian American',
    relationshipStatus: 'Married; two children',
    setting: 'External employee assistance program contracted by a medical-device manufacturer',
    payment: 'Employer-sponsored EAP benefit',
    typeOfCounseling: 'Mandated assessment and brief individual counseling with narrowly authorized workplace coordination',
    provisionalDiagnosis: 'Obsessive-Compulsive Personality Disorder: F60.5',
  },

  presentingProblem: `You are a licensed mental health counselor at an external employee assistance program. Rohan P., a 45-year-old senior quality-systems engineer, was directed to attend after a conflict at Axiom Medical Systems, a manufacturer of infusion pumps. The referral requests six sessions for “anger, perfectionism, and inability to collaborate” and asks whether Rohan is fit to resume unrestricted supervisory duties. Rohan says HR told him failure to participate may affect his employment. The EAP is not automatically the company's fitness-for-duty evaluator, and the referral does not define what information HR expects.

Rohan has not signed the employer's proposed authorization, which permits disclosure of attendance, diagnosis, treatment plan, progress, prognosis, and complete records. He brings it marked with 31 objections. “You are paid by them,” he says. “If this is therapy, my work is private. If it is an evaluation, stop pretending I chose it.” He wants a letter stating he has no anger disorder and that his project authority should be restored.

The precipitating incident concerned a delayed software release. Rohan refused to approve a validation packet because a supplier certificate contained a lot-number discrepancy and several documents used inconsistent headings, spacing, and revision language. He locked the shared packet, copied 73 employees on a message accusing management of “normalizing preventable harm,” and spoke over his director during a review meeting. When the director ordered release pending minor corrections, Rohan struck a binder against the table and said, “I will not attach my name to negligence.” Security escorted him from the room. He made no threat and touched no person.

Rohan insists the referral converts professional integrity into pathology. Two years earlier, he identified a firmware defect that might have caused incorrect dosing and helped avert a recall. “If I had been flexible then, patients could have been hurt.” He says engineers are paid to find what agreeable people miss. He also acknowledges that the current packet remained unfinished for nine weeks, his team worked repeated weekends, and two employees requested reassignment from him.

Rohan routinely creates detailed review matrices and examines subordinates' work line by line. He often rewrites documents himself because teaching the correction takes longer and “people repeat errors unless they see the exact form.” A 20-minute review can take three hours. He works 65 to 75 hours weekly, checks work from family dinners, and has not used a full vacation week in eight years. He describes this as responsibility, not compulsion: “I choose to check because the cost of missing something is real.”

For four months, since conflict over the delayed release intensified, Rohan has slept about five hours, felt jaw tension, and worried about his job, savings, his father's health, and his daughter's college plans. He creates spreadsheets for each concern and says anxiety decreases once a plan is complete. He denies panic, depressive episodes, substance misuse, mania, psychosis, or suicidal and homicidal ideation. Violence assessment still requires direct attention because of the workplace incident, but the referral's word “anger” does not itself establish dangerousness or a diagnosis.

Rohan asks whether repeated checking means obsessive-compulsive disorder. His younger sister has that diagnosis and performs contamination rituals she recognizes as excessive. Rohan denies unwanted contamination, harm, taboo, symmetry, or responsibility intrusions and denies rituals intended to neutralize them. He checks the front door once, does not repeat household appliances, and does not fear that thoughts themselves cause events. His work reviews feel justified and consistent with his standards. Further assessment must examine whether symptoms have been omitted or whether a different pattern better explains the behavior.

Rohan was raised in New Jersey by parents who immigrated from India. His father, an accountant, emphasized precision, thrift, and professional duty. Rohan says correcting a family member was a form of investment: “Indifference says anything is good enough.” He worries that a clinician will stereotype achievement and immigrant discipline. Cultural and occupational values must be understood without assuming they explain either healthy rigor or impairment.

When asked what he wants apart from HR's letter, Rohan pauses. He wants to lead the next product cycle, sleep without mentally revising documents, and have his 17-year-old daughter resume sharing college essays with him. He adds that these are consequences of other people's sensitivity, not evidence that he should become careless.`,

  mentalStatusObservation: `Rohan is punctual, formally dressed, and fully oriented. He presents an indexed binder and corrects the counselor's use of “quality check” to “design-control verification.” Speech is precise and increasingly forceful but remains coherent and interruptible. Mood is “insulted”; affect is constricted with brief irritation. Thought process is linear, detailed, and rule-bound. There is no psychosis, mania, intoxication, suicidal content, or expressed threat. Attention repeatedly returns to procedural defects. Insight into interpersonal and efficiency costs is limited; judgment is strong about technical hazards and less flexible when risk is ambiguous or others use different methods.`,

  familyHistory: `Rohan lives with his wife, Leela, their 17-year-old daughter, Anika, and 12-year-old son. Leela says on an unsigned collateral form that Rohan rewrites family messages, audits household spending, and converts trips into timed itineraries. Anika stopped sharing essays after he replaced her voice with “a defensible structure.” Rohan has not authorized family contact and says their complaints omit the problems his planning prevents.

His father remains exacting and frugal; his mother describes Rohan as serious from childhood. His sister's OCD includes unwanted contamination fears and washing that she tries to resist. No family personality diagnosis, bipolar disorder, psychosis, suicide, or violence is reported. Rohan says thrift and correction are respected in his family but rejects the idea that any ethnic group has one personality style.`,

  workHistory: `Rohan has worked at Axiom for 11 years and was promoted three times. He has exceptional technical knowledge and documented success identifying consequential defects. During the past four years, however, seven direct reports requested transfers, three projects missed internal deadlines, and two completed audits were reopened because Rohan continued revising language after requirements were satisfied. He refuses to delegate final review unless staff use his exact sequence.

The current leave is administrative, not a finding of disability or dangerousness. HR asks the counselor to “help management decide” whether Rohan can supervise again. You explain that actual job performance, essential functions, workplace risk, EAP treatment, and a formal occupational evaluation are related but not interchangeable questions.`,

  intakeSessionSummary: `Before substantive counseling, you explain the mandated nature of the referral, potential employment consequences of nonparticipation, the EAP's role, confidentiality and its exceptions, record practices, and the exact information that could be released only with valid authorization. Rohan may refuse the broad release and discuss a narrower authorization. You will not promise a particular employer decision or provide a fitness opinion outside the agreed role and your competence.

Assessment will examine the incident and violence risk without equating anger with danger. Diagnostic work will use a longitudinal, cross-context history of perfectionism, control, delegation, work devotion, flexibility, moral rigidity, spending, and functional impact. It will distinguish chosen, ego-syntonic standards from unwanted obsessions and neutralizing compulsions; trait rigidity from diffuse uncontrollable worry; and clinically significant impairment from conscientious behavior suited to regulated work.

You also explain that treatment goals need not begin with accepting a personality label. Rohan can identify outcomes he owns, such as finishing work efficiently, retaining safety judgment, restoring chosen relationships, and sleeping more consistently.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-rohan-q1',
          questionNumber: 1,
          domain: 'Professional practice and ethics',
          stem: 'What should the counselor do before beginning substantive assessment or counseling with Rohan?',
          options: [
            'Contact HR to determine what employment decision is pending, then structure informed consent around the specific information management says it needs',
            'Explain the mandated status, roles, confidentiality, requested disclosures, and foreseeable consequences, then obtain specific authorization before releasing information',
            'Ask Rohan to sign the broad authorization temporarily because the counselor can later withhold details that prove irrelevant to the referral',
            'Decline the case because employer direction makes voluntary counseling impossible and prevents a therapeutic relationship from being ethically established',
          ],
          correctAnswer: 1,
          explanation: 'Mandated clients still require informed consent tailored to the referral. Rohan should understand the counselor’s role, who may receive information, what is requested, confidentiality and exceptions, the possible consequences of refusing or withdrawing authorization, and the distinction between counseling and a fitness evaluation. Disclosure requires a valid basis and should be limited to what Rohan specifically authorizes unless another legal exception applies. HR’s preference does not define the counselor’s ethical role. A broad release should not be treated as a temporary convenience. Mandated participation does not automatically make counseling unethical; transparency and genuine choice within the constraints are essential.',
        },
        {
          id: 'exam-03-rohan-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which assessment strategy best distinguishes the principal explanations for Rohan’s behavior?',
          options: [
            'Compare his error-detection rate with company benchmarks, because objectively superior performance would favor conscientiousness over a mental disorder',
            'Administer an OCD inventory and a generalized-anxiety scale, then use whichever score is higher as the primary formulation',
            'Ask whether checking relieves anxiety; relief after review would identify a compulsion, whereas persistent tension would support generalized anxiety',
            'Assess longitudinal pervasiveness, flexibility, function, and impairment while clarifying unwanted intrusions, rituals, diffuse worry, and occupational norms',
          ],
          correctAnswer: 3,
          explanation: 'The strongest differential is longitudinal and functional. A personality pattern must be enduring, pervasive, inflexible, and impairing rather than inferred from one workplace dispute. OCD requires obsessions, compulsions, or both; checking alone is not diagnostic. GAD requires the appropriate course and a pattern of difficult-to-control worry with associated symptoms, not simply tension during discipline. Performance data and occupational standards matter because rigor may be adaptive, but technical success does not rule out a disorder affecting efficiency and relationships. Scales can supplement assessment; a higher score cannot organize the case by itself. Anxiety reduction occurs after many behaviors and does not uniquely identify a compulsion.',
        },
        {
          id: 'exam-03-rohan-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond when Rohan says the company hired therapy to relabel professional integrity as illness?',
          options: [
            'Acknowledge coercion and the possibly valid safety concern, clarify the role, and invite a useful outcome without deciding the workplace dispute',
            'Reassure him that the counselor works only for him, because the therapeutic alliance requires separating treatment completely from the employer’s referral purpose',
            'Explain that both technical competence and maladaptive personality traits can coexist, then ask which diagnostic criteria he is willing to examine first',
            'Validate his whistleblower identity and recommend an employment attorney before continuing, because counseling cannot be neutral while retaliation remains possible',
          ],
          correctAnswer: 0,
          explanation: 'The counselor should neither collude with management nor reflexively adopt Rohan’s account. Naming the coercive context and acknowledging that a safety concern may be legitimate conveys respect, while role transparency avoids a false promise that the employer is irrelevant. Inviting a client-owned outcome creates room for alliance without requiring diagnostic agreement. Saying the counselor works only for Rohan is inaccurate when an employer referral and possible authorized report exist. Leading with personality criteria is premature and likely to intensify resistance. Legal consultation may be Rohan’s option, but the counselor should not assume retaliation or abandon the clinical role on that basis.',
        },
        {
          id: 'exam-03-rohan-q4',
          questionNumber: 4,
          domain: 'Counseling skills and interventions',
          stem: 'Which response best converts Rohan’s externally imposed referral into an initial client-owned counseling goal?',
          options: [
            'Ask him to identify one personality trait he is willing to reduce so progress can be demonstrated to HR within six sessions',
            'Begin sleep and relaxation training because symptom relief is neutral and does not require discussing his contested workplace behavior',
            'Link his goals to a measurable experiment in completing or delegating a low-risk task within agreed standards while preserving defined safety checks',
            'Focus on documenting that he did not threaten anyone, since clearing the anger allegation is the only goal he currently endorses without qualification',
          ],
          correctAnswer: 2,
          explanation: 'The collaborative experiment connects outcomes Rohan values—effective leadership, timely completion, and preserved safety—to an observable change without demanding that he accept a diagnosis or become careless. Selecting a low-risk task and defining required controls protects against using therapy to pressure unsafe approval. Asking him to reduce a “trait” adopts the employer’s frame and may invite performance for the report rather than meaningful engagement. Sleep work could help but would avoid the functional pattern driving the referral. Documenting absence of a threat may be part of assessment, yet narrowing counseling to exoneration leaves no client-owned change target.',
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Rohan authorizes the EAP to confirm attendance, participation, and general functional recommendations; he does not authorize diagnosis, session content, or records. A separate conversation clarifies that the EAP is providing counseling and referral recommendations, not a formal fitness-for-duty determination. With consent, HR supplies performance documents and the validation packet.

Technical review confirms that the supplier certificate contained a lot-number discrepancy that required correction. It did not establish a dosing hazard or justify holding the entire release. Twenty-six other objections involved style, preferred wording, redundant calculations, or requests for certainty beyond the written standard. Rohan's legitimate catch and disproportionate response must both remain in the formulation.

Longitudinal interviews show the pattern beyond the current conflict. In graduate school, Rohan submitted his thesis late after repeatedly reformatting citations. At work he misses the larger deadline while perfecting details, cannot delegate unless others follow his method, and continues revising completed work. He treats leisure as wasted time, works despite family plans, applies moral rules inflexibly to minor gifts and reimbursements, and saves obsolete manuals and components because discarding them feels irresponsible. Although financially secure, he restricts ordinary family spending and says hardship builds discipline. Leela describes the same control in travel, budgeting, chores, and parenting. The pattern has been stable since early adulthood.

Rohan reports no unwanted intrusive thoughts or neutralizing rituals. His reviews are intentional and consistent with what he believes competent people should do. Current worry and tension began four months ago, fluctuate with the employment dispute, and diminish when a plan is complete; the available course does not establish a chronic diffuse anxiety syndrome. There is no mood episode, psychosis, substance cause, or medical explanation. His occupation and family values support precision and duty, but they do not require chronic incompletion, inability to delegate, or impairment across settings.

Rohan accepts that his method has costs but says the alternatives prove that treatment means lowering standards. He agrees to work only on methods that preserve explicit safety requirements.`,
      questions: [
        {
          id: 'exam-03-rohan-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnosis is best supported by the accumulated evidence?',
          options: [
            'Obsessive-Compulsive Disorder, because repeated checking, inability to stop reviewing, and feared patient harm constitute obsessions and compulsions despite limited insight',
            'Obsessive-Compulsive Personality Disorder, because pervasive ego-syntonic perfectionism, control, rigidity, overwork, and nondelegation have impaired functioning since early adulthood',
            'Generalized Anxiety Disorder, because work, finances, health, and family worries are accompanied by insomnia and muscular tension across several domains',
            'No mental disorder, because regulated engineering rewards error prevention and the disputed certificate confirms that Rohan’s standards detected a real problem',
          ],
          correctAnswer: 1,
          explanation: 'The evidence supports an enduring, cross-context pattern of preoccupation with details and standards, perfectionism that interferes with completion, excessive work devotion, reluctance to delegate, rigidity, and inflexible spending and moral behavior, with substantial impairment. The traits are largely ego-syntonic and date to early adulthood. Checking is not enough for OCD; no unwanted obsessions or neutralizing compulsions are established. Anxiety symptoms span several topics but have a four-month, dispute-linked course and do not yet establish GAD. A legitimate safety finding must not be erased, yet one correct objection does not explain pervasive dysfunction. Occupational conscientiousness becomes clinically relevant when it is inflexible and costly across settings.',
        },
        {
          id: 'exam-03-rohan-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which treatment plan best fits Rohan’s formulation and current willingness to participate?',
          options: [
            'Use exposure and response prevention for all checking, then consider an SSRI if he cannot resist reviewing safety documents without reassurance',
            'Treat generalized anxiety first with relaxation and scheduled worry, postponing personality-focused work until employment stress and sleep normalize',
            'Use the six sessions to confront denial and document insight, then refer for long-term psychodynamic therapy if he accepts the personality diagnosis',
            'Build from his functional goals using collaborative formulation, graded flexibility and delegation experiments, cognitive work, and longer-term therapy referral as indicated',
          ],
          correctAnswer: 3,
          explanation: 'Rohan is most likely to engage through goals he owns and a formulation that distinguishes safety from overcontrol. Treatment can test predictions, vary standards by risk, practice delegation, examine all-or-nothing rules, improve emotional and interpersonal awareness, and consider longer-term CBT, schema-focused, or other appropriate personality treatment. ERP designed for OCD should not be applied indiscriminately to legitimate safety review when OCD is not established. Treating only situational anxiety leaves the pervasive pattern untouched. Confronting “denial” and making acceptance of a label the criterion for progress would intensify resistance and serve the employer rather than the client. Medication referral may address a comorbid condition if one emerges, not the personality pattern by default.',
        },
        {
          id: 'exam-03-rohan-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best first behavioral experiment for Rohan’s belief that delegation necessarily compromises safety?',
          options: [
            'Choose a low-risk document, define essential criteria and a time limit, permit another qualified method, and compare predicted with actual outcomes',
            'Have Rohan delegate final approval of a high-risk validation packet so that disconfirming evidence is strong enough to alter an entrenched belief',
            'Ask a colleague to reproduce Rohan’s exact checklist without consultation, because successful replication would show that delegation can preserve his standards',
            'Limit Rohan to one review of all documents for a week and process the resulting anxiety, allowing exceptions only after the experiment is complete',
          ],
          correctAnswer: 0,
          explanation: 'A useful experiment targets the maintaining belief without manufacturing unacceptable risk. Rohan and the counselor can choose a low-risk task, define nonnegotiable requirements, permit a competent alternative method, set a completion boundary, and review what actually happened. Delegating high-risk final approval would confound flexibility with unsafe practice and predictably destroy trust. Requiring the colleague to copy Rohan’s checklist tests obedience, not delegation or tolerance of different effective methods. A global one-review rule ignores task risk and exceeds a graded experiment. The aim is not to prove that details never matter; it is to develop evidence about when control is necessary, optional, or counterproductive.',
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Rohan elects to continue beyond the required sessions. He identifies his own goals: complete defined work within deadlines, reserve intensive review for high-risk tasks, eat two work-free dinners weekly, and let Anika retain authorship of her applications. He practices ranking decisions by safety consequence, using “required, preferred, or irrelevant” criteria, and recording predicted versus actual outcomes. A delegated low-risk memo contains one stylistic choice he dislikes but meets every requirement. He submits it without rewriting. Sleep increases to six and a half hours.

Progress is disrupted when Rohan catches an incorrect calibration setting in a high-risk test plan. The junior engineer thanks him and corrects it before testing. Rohan says, “There is the evidence. The first time I loosen control, an error appears.” Review shows that the planned high-risk check—not after-hours rewriting or control of the colleague's method—identified the error. He nevertheless resumes reviewing low-risk files and cancels a family dinner.

HR then asks for complete counseling notes and a statement that Rohan is “psychologically fit for unrestricted supervisory duty.” His signed authorization permits only attendance, dates of participation, and general functional recommendations. HR says Rohan will remain on leave without a definitive letter. Rohan does not expand the release and asks you to send a favorable opinion anyway because the company already knows why he was referred.

With Rohan's authorization, Leela attends a session. She says precision and anticipating problems are expressions of care in both families, and worries therapy is teaching irresponsibility. Rohan adds that Western counseling prizes comfort over duty. Leela also reports that correction has crowded out warmth and that the children conceal ordinary mistakes. Rohan says the family wants the benefits of his vigilance without tolerating its discipline.`,
      questions: [
        {
          id: 'exam-03-rohan-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor respond to HR’s request and Rohan’s request for a favorable fitness statement?',
          options: [
            'Send a favorable functional opinion without diagnosis because both parties want the same result and the employer already knows the referral concerns',
            'Release the notes to an occupational evaluator rather than HR, because treatment records may be shared between professionals when employment safety is involved',
            'Stay within the authorization and counseling role, explain the limits, and recommend a separate qualified occupational evaluation if required',
            'Refuse any further workplace communication because HR’s pressure has made even the previously authorized attendance confirmation ethically compromised',
          ],
          correctAnswer: 2,
          explanation: 'Neither employment pressure nor Rohan’s desired outcome expands the authorization or the counselor’s role. The counselor should limit disclosure to authorized information, explain that a favorable statement cannot be supplied merely because both parties want it, and distinguish treatment observations from a formal job-related fitness evaluation. If such an evaluation is legitimately required, referral to a qualified independent professional with a clearly defined question is appropriate. The company’s prior knowledge does not waive confidentiality. Records cannot be transferred to another evaluator without a valid basis. Previously authorized limited communication does not become unethical solely because HR asks for more; the counselor should maintain the boundary and document the request.',
        },
        {
          id: 'exam-03-rohan-q9',
          questionNumber: 9,
          domain: 'Core counseling attributes',
          stem: 'What is the counselor’s best response to Rohan and Leela’s concern that treatment devalues culturally meaningful duty and correction?',
          options: [
            'Explain that family values can be honored privately, but workplace and parenting behavior must follow evidence-based flexibility goals to avoid impairment',
            'Explore this family’s meanings of duty, protection, warmth, and autonomy while examining when correction serves or narrows valued relationships',
            'Ask them to identify which behaviors are authentically cultural so those are excluded from treatment and only idiosyncratic rigidity is targeted',
            'Recommend a culturally matched family therapist because an individual counselor cannot determine whether correction reflects tradition, personality, or both',
          ],
          correctAnswer: 1,
          explanation: 'The best response treats culture as lived and negotiated rather than as either pathology or immunity from examination. The counselor can invite both partners’ meanings, recognize duty and protection as values, and explore the functional point at which correction displaces warmth, autonomy, effectiveness, or connection. Declaring flexibility goals universally superior imposes the counselor’s frame. Dividing behaviors into purely cultural and purely personal categories is artificial and risks stereotyping. A culturally matched referral may be offered if desired or if competence is insufficient, but it is not automatically required. Humility includes curiosity, attention to power, and willingness to revise the formulation without abandoning assessment of impairment.',
        },
        {
          id: 'exam-03-rohan-q10',
          questionNumber: 10,
          domain: 'Treatment planning',
          stem: 'How should the newly discovered calibration error affect Rohan’s continuing treatment plan?',
          options: [
            'Validate the catch, distinguish required high-risk controls from low-risk overreview, and refine the hierarchy using the detection pathway and relapse sequence',
            'Pause delegation experiments until the workplace confirms that no other errors occurred, because real safety evidence changes the risk-benefit balance of exposure',
            'Repeat the same low-risk experiment immediately so Rohan does not reinforce avoidance by treating one unrelated error as proof that control is necessary',
            'Shift treatment toward acceptance of irreducible workplace uncertainty and stop analyzing whether particular reviews are justified, because content debate maintains rigidity',
          ],
          correctAnswer: 0,
          explanation: 'The error is real and should be incorporated rather than minimized. Analysis shows that a planned, proportionate high-risk control detected it; indiscriminate low-risk rechecking and control of others’ methods did not. The hierarchy can therefore become more precise, and the relapse sequence—from valid catch to global rule to overwork and canceled dinner—can be targeted. Suspending all delegation overgeneralizes from one event and rewards rigidity. Immediate repetition without collaborative analysis may feel like invalidation and miss useful data. Refusing to discuss the content creates a false choice between acceptance and safety. Treatment aims for flexible, risk-matched standards, not reduced vigilance everywhere.',
        },
      ],
    },
  ],
};
