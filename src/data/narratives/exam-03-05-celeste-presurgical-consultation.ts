import type { Narrative } from "./types";

export const celestePresurgicalConsultationNarrative: Narrative = {
  id: 'exam-03-05-celeste-presurgical-consultation',
  title: 'Celeste — Presurgical Consultation',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [7, 7, 6],

  clientInfo: {
    age: 27,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender woman',
    pronouns: 'She/her',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Filipina American',
    relationshipStatus: 'Single; lives with an older sister',
    setting: 'Behavioral health consultation service embedded in an academic medical center',
    payment: 'Commercial insurance for the consultation; proposed cosmetic procedure is self-pay',
    typeOfCounseling: 'Individual counseling with psychiatric, surgical, and family coordination as authorized',
    provisionalDiagnosis: 'Body Dysmorphic Disorder, with poor insight: F45.22',
  },

  presentingProblem: `You are a licensed mental health counselor in an academic medical center's behavioral health consultation service. Celeste R., a 27-year-old user-experience designer, was referred by facial plastic surgeon Dr. Benton after requesting cosmetic rhinoplasty. The referral asks whether she is “psychologically cleared,” has realistic expectations, and is at low risk for postoperative self-harm. Her authorization permits a brief summary to the surgeon, not psychotherapy notes, unrestricted records, or family and employer communication.

Celeste wears a face mask although precautions are optional. She says it conceals a nose that “leans left, balloons at the tip, and makes my face masculine.” She wants a letter stating that surgery is necessary and safe: “Dr. Benton already has eyes. I need you to stop him from using therapy as another gate.”

The surgeon documents a subtle dorsal irregularity visible on close examination, no obstruction, and proportions within expected variation. Celeste calls this risk-management language. She brings 214 annotated photographs taken at different ages, angles, and focal lengths and insists that you review them in sequence because wide-angle images “hide the rotation.” She says clinicians reassure her without examining the right evidence.

The concern began at 14 after classmates mocked her profile. Her mother suggested a narrower bridge would look “more polished,” while relatives praised her sister Mara's smaller nose and lighter skin. Celeste recognizes the effects of anti-Asian beauty standards, colorism, and family comparison but says they do not explain the measurable defect.

In college she checked reflections, compared profiles, and avoided uncontrolled photographs. At 24 she received nasal filler, felt improved for six weeks, then believed one side had become heavy. She had the filler dissolved, completed two laser treatments for faint cheek redness, and consulted five clinicians. Each intervention, she says, exposed a problem previously obscured.

Her nose, cheeks, or facial symmetry occupy five to seven hours daily. She checks mirrors, cameras, or windows 40 to 70 times, presses her nose, contours it, retakes photographs, compares faces online, and repeatedly asks Mara whether an angle is “structurally wrong.” Reassurance helps briefly and then becomes evidence: a quick answer means protection, while hesitation proves there is something to study.

Celeste has worked remotely for eight months because video reverses her face. She arranges lighting, uses a filter, and turns video off if the angle seems wrong. She declined a promotion, missed a friend's wedding after seeing a rehearsal photograph, and ended dates when partners looked toward her nose. She believes strangers touch their noses after seeing hers, while allowing “maybe a five-percent chance” that vigilance affects what she notices.

She restricts sodium and carbohydrates before photographs because facial “puffiness amplifies the distortion.” She lost eight pounds during a month of consultations and regained five. She denies bingeing, purging, compulsive exercise, fear of weight gain, or evaluating herself primarily by weight. Her body mass index is 21.2 and menses are regular, but eating behavior and shape overvaluation still require assessment.

Celeste calls her photograph review “compulsive.” She denies obsessions or rituals outside appearance and experiences the facial belief as accurate perception, not a senseless intrusion. She reports no hallucinations, disorganization, or fixed beliefs unrelated to appearance. A paternal uncle has a psychotic disorder, which makes her wary that strong conviction will be mislabeled.

For one month she has slept five to six hours while editing photographs and felt ashamed and less interested in dating, but she still enjoys an accessibility project. She denies episodic elevation or broad activation. She says surgery would let her “have a future not organized around hiding,” then adds, “If I have to remain visible like this, I cannot promise I will keep volunteering for it.” Asked whether she means suicide, she says, “I knew one sentence would hijack the appointment. I am not answering until I know whether you work for me or the surgeon.” Current risk has not been established.`,

  mentalStatusObservation: `Celeste is punctual, carefully groomed, and oriented. She removes her mask for 20 seconds after changing the light, checks her phone camera four times, and presses her nose. Speech is articulate and occasionally rapid when discussing photographs. Mood is “humiliated”; affect is anxious but reactive. Thought process is linear and detailed. Content centers on perceived defects, others' reactions, procedures, and cultural invalidation. There is no hallucination, thought disorder, mania, or broader delusional content. Insight is poor but not absent. Judgment is intact outside appearance-related checking, avoidance, reassurance, and procedure seeking. Suicide disposition remains undetermined.`,

  familyHistory: `Celeste lives with Mara, 31, who calls herself Celeste's “camera operator, reality checker, and emergency contact.” No authorization permits contact. Mara has taken comparison photographs, evaluated lighting, called Celeste's workplace after difficult appearance days, and accompanied her to consultations. Refusal feels like abandonment; participation becomes proof the defect is visible.

Their parents immigrated from the Philippines. Celeste describes warmth and sacrifice alongside comments about complexion, nose shape, weight, and marriageability. She rejects reducing her distress to culture. Her mother has anxiety, a cousin received treatment for anorexia nervosa, and her paternal uncle has a psychotic disorder. No family suicide is known. Mara and a college friend remain potential supports. You explain routine family involvement requires authorization; a safety disclosure would depend on clinical findings, law, and minimum necessary information.`,

  workHistory: `Celeste has four years of strong reviews at a financial-technology company. Remote work was approved after she reported “post-procedure migraines.” She now spends up to two work hours arranging and checking her image, has missed deadlines, and declined a promotion with an 18-percent raise. Her manager requested a meeting about availability. Celeste asks whether the surgical consultation can support permanent camera exemption, but she has not authorized employer contact and the referral is not an occupational evaluation.

She saved $13,000 for surgery and paid two nonrefundable consultation fees. She views postponement as a financial harm while acknowledging that filler and laser procedures did not bring durable relief.`,

  intakeSessionSummary: `You explain that the consultation assesses symptoms, safety, and treatment need and provides only an authorized summary relevant to the surgeon. You cannot guarantee future safety, make the surgeon's decision, or certify a cosmetic result. The evaluator role, recipient, report limits, foreseeable use, authorization, and implications of continuing treatment require clarification.

Celeste's statement requires direct suicide assessment before photographs, workplace documentation, or procedural recommendations. A screener may assist but cannot replace inquiry into ideation, intent, plan, access, preparation, history, drivers, protective factors, and capacity for safety.

Diagnostic assessment will examine observability of the defect, time occupied, repetitive responses, avoidance, impairment, insight, procedure history, and course. It will also assess weight-and-shape concerns, nutrition, broader rituals, psychosis outside appearance, mood, social fears, medical findings, substance effects, and culture. Neither the surgeon's description nor repeated measurement alone will decide whether Celeste's suffering is real.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-celeste-q1',
          questionNumber: 1,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do first after Celeste says she cannot promise she will keep volunteering to remain visible?',
          options: [
            'Complete the appearance-symptom screen so the counselor can determine whether the statement reflects disorder-related distress or a realistic response to disfigurement',
            'Clarify the third-party evaluation role and report limits before asking about suicide, because Celeste is withholding information until she knows who the counselor represents',
            'Ask Celeste to agree that she will not act before the next appointment, then continue the interview while monitoring whether her willingness to engage improves',
            'Acknowledge her concern about being hijacked and conduct a direct suicide inquiry covering ideation, intent, plan, access, preparation, history, drivers, and capacity for safety',
          ],
          correctAnswer: 3,
          explanation: 'The statement is suicide-relevant and current risk is unknown, so direct individualized assessment takes priority. The counselor can validate Celeste’s fear that disclosure will eclipse her concerns while still asking clearly about ideation, intent, planning, access, preparation, past behavior, acute drivers, protective factors, and ability to maintain safety. Clarifying the evaluator role is ethically important and should occur early, but it cannot delay an urgent safety inquiry once concerning content emerges. A symptom screen cannot determine suicide disposition, and a promise not to act is not an assessment or safety intervention. The counselor should neither assume the statement is rhetorical nor treat disclosure as proof that hospitalization is required before the facts are known.',
        },
        {
          id: 'exam-03-celeste-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which assessment approach would best distinguish among the leading diagnostic possibilities without prematurely validating or disputing Celeste’s facial belief?',
          options: [
            'Ask independent observers to rate the defect, compare their ratings with Celeste’s photographs, and determine whether her concern is proportionate to the visual evidence',
            'Assess preoccupation, repetitive behaviors, impairment, insight, weight-and-shape overvaluation, broader rituals, and psychotic symptoms outside the appearance theme',
            'Use an obsessive-compulsive inventory first; if checking scores in the clinical range, defer eating and psychosis assessment until the rituals have been treated',
            'Request the surgeon’s categorical opinion about whether a defect exists, then assess delusional conviction only if the surgeon finds no objective abnormality',
          ],
          correctAnswer: 1,
          explanation: 'The differential depends on the complete symptom organization, not a vote about Celeste’s nose. Assessment should establish an appearance preoccupation, repetitive checking or camouflaging, impairment, and insight while determining whether weight or shape chiefly explains the concern, whether obsessions and compulsions extend beyond appearance, and whether psychotic symptoms occur outside that theme. Observer ratings and the surgeon’s findings may add context, but making them the diagnostic gate risks turning assessment into reassurance or adjudication. A high checking score is nonspecific and does not justify postponing competing differentials. Strong conviction can occur within an appearance-focused disorder; conviction alone does not establish a primary psychotic disorder.',
        },
        {
          id: 'exam-03-celeste-q3',
          questionNumber: 3,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor respond to the surgeon’s request for a psychological clearance determination?',
          options: [
            'Clarify the evaluation purpose, client and report recipient, obtain informed authorization, and communicate relevant findings and limits without guaranteeing safety or making the surgical decision',
            'Decline all communication because only a psychologist or psychiatrist may offer any behavioral opinion related to elective surgery',
            'Provide a categorical cleared-or-not-cleared answer because narrowing the report to the referral question best protects Celeste’s confidentiality',
            'Send the consultation record because authorization for a summary implies access to the supporting clinical data the surgeon needs to rely responsibly on the recommendation in this case',
          ],
          correctAnswer: 0,
          explanation: 'The counselor should define the consultation role, who the client is, what will be reported, foreseeable uses, confidentiality limits, and the boundaries of professional competence. With valid authorization, the counselor can provide clinically relevant findings and recommendations, including risk concerns or a recommendation to defer a procedure, while making clear that a prediction of zero risk is impossible and the surgeon retains the medical decision. Refusing any contribution overstates discipline-based restrictions. A forced binary may conceal uncertainty and exceed what the evidence supports. Authorization for a limited summary does not imply release of the full record or psychotherapy notes. The report should disclose no more than its legitimate purpose requires.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Celeste participates in a structured suicide assessment. During the past month, she had passive wishes not to wake up on eight days and conditional thoughts that death would be preferable if every surgeon refused help. She denies current intent, selected method, preparation, intoxication, or firearm access. At 25, after believing filler ruined her face, she searched whether her prescription pain medication could be fatal, held the bottle intending to swallow the pills, and called Mara before taking anything. Mara secured it. Celeste denies other suicidal behavior or self-injury.

Her niece, Mara, and hope of being understood are reasons for living. Celeste collaborates on a safety plan, narrowly authorizes Mara to secure excess medication, and accepts twice-weekly contact. She does not meet local emergency-detention criteria, but past aborted behavior, conditional ideation, isolation, and the pending decision require active monitoring. You document findings, outpatient rationale, warning signs, coping steps, emergency resources, support involvement, and planned reassessment.

The facial preoccupation averages six hours daily. The irregularity is slight and often unnoticed until Celeste identifies it. Checking, comparing, photographing, camouflaging, reassurance, mental review, and avoidance are repetitive responses that cause marked impairment. She remains nearly certain the defect explains others' behavior but allows a small possibility that attention, focal length, and anxiety affect perception. No psychotic symptom occurs outside appearance.

Food monitoring and medical review show adequate intake, stable weight, normal laboratory findings, no bingeing or compensation, and no fear of weight gain. Brief restriction is intended to alter facial appearance; weight or body fat is not her principal self-evaluation. There are no nonappearance obsessions or compulsions. Fear of scrutiny occurs chiefly when she believes the facial problem is visible, not across unrelated evaluation.

Within the authorization, Dr. Benton reports that Celeste requested millimeter guarantees, became distressed when perfect symmetry could not be promised, and called 16 times in one week. He has not scheduled surgery and asks whether postponement is advisable. Celeste will continue counseling only if accepting his opinion is not a condition of care.`,
      questions: [
        {
          id: 'exam-03-celeste-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation is best supported by the accumulated evidence?',
          options: [
            'Delusional Disorder, somatic type, because Celeste remains almost certain that a facial abnormality exists despite contrary professional opinions',
            'Obsessive-Compulsive Disorder, because intrusive appearance thoughts lead to checking, reassurance seeking, photographing, and mental review',
            'Body Dysmorphic Disorder, with poor insight, because a slight perceived defect drives preoccupation, repetitive responses, and marked impairment without another better explanation',
            'Other Specified Feeding or Eating Disorder, because repeated food restriction, weight change, and facial-shape management establish disordered eating even without fear of weight gain',
          ],
          correctAnswer: 2,
          explanation: 'Celeste has a persistent preoccupation with a defect that is slight to others, performs multiple repetitive behaviors and mental acts, and has marked impairment. Weight and body fat do not chiefly explain the concern, and the available evidence does not establish another disorder as the better account. Her near-certainty supports poor insight; an appearance belief can reach very high conviction within Body Dysmorphic Disorder and does not automatically become Delusional Disorder. The absence of broader obsessions and compulsions weighs against separate OCD. Appearance-motivated food changes warrant monitoring, but the case does not establish the defining psychopathology or behavior pattern of an eating disorder.',
        },
        {
          id: 'exam-03-celeste-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best initial therapeutic stance when Celeste says she will not participate if treatment requires accepting that her nose is normal?',
          options: [
            'Explain that exposure cannot work until she recognizes the defect is imagined, and use the surgeon’s findings to strengthen insight before behavioral treatment',
            'Agree not to discuss the belief’s accuracy and focus only on depression and social withdrawal until Celeste independently questions her conclusions within an unstructured supportive alliance for several weeks',
            'Validate that bias and a slight irregularity may be real, then confirm which photographed angles are objectively distorted so treatment targets only excessive concern',
            'Validate her suffering and autonomy, avoid an argument or reassurance, and collaboratively examine whether checking, avoidance, and procedure seeking move her toward the life she wants',
          ],
          correctAnswer: 3,
          explanation: 'With poor insight, engagement is strengthened by respecting autonomy, validating distress, and developing discrepancy between Celeste’s goals and the consequences of her current coping pattern. The counselor need not win an argument about appearance before treatment begins. Requiring her to call the defect imaginary is confrontational and may intensify dropout. Ignoring the belief while treating only secondary symptoms leaves the maintaining cycle untouched. Confirming which angles are truly defective turns therapy into appearance adjudication and can function as reassurance. A collaborative functional formulation allows motivational and cognitive-behavioral work to begin even while Celeste remains uncertain or unconvinced about the diagnostic explanation.',
        },
        {
          id: 'exam-03-celeste-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which initial treatment plan best fits Celeste’s severity, insight, procedure seeking, and suicide history?',
          options: [
            'Offer specialized CBT with exposure and response prevention, seek psychiatric evaluation for an SSRI, continue collaborative safety monitoring, and coordinate a recommendation to defer surgery within the authorization',
            'Support the least invasive surgical correction first, because a slight objective irregularity makes psychotherapy impossible to interpret while the concern remains untreated and the surgeon monitors expectations through follow-up appointments',
            'Refer for antipsychotic monotherapy and suspend behavioral treatment, because near-delusional conviction predicts that exposure will reinforce rather than weaken the belief',
            'Begin supportive therapy and a complete ban on photographs while monitoring mood, adding structured appearance work only after suicidal thoughts have fully remitted',
          ],
          correctAnswer: 0,
          explanation: 'Marked impairment supports specialized CBT that addresses appearance-focused cognitions and includes graded exposure and prevention of checking, reassurance, comparison, camouflage, and avoidance. Psychiatric evaluation for an SSRI is appropriate, with careful monitoring given Celeste’s age and suicide history. Safety planning and reassessment should continue, especially around surgical decisions. With authorization, the counselor may recommend deferral while evidence-based care proceeds, without making the surgeon’s decision. Cosmetic correction is not a diagnostic experiment and prior procedures produced only transient relief. Poor insight does not make antipsychotic monotherapy the routine first choice. An absolute photograph ban is not a graded, functional intervention, and waiting for all suicidal thoughts to disappear could indefinitely postpone treatment of a major driver of risk.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Dr. Benton postpones surgery on his own clinical judgment. The authorized summary describes the symptom pattern, impairment, suicide history, risk-prediction limits, monitoring, and recommendation for treatment before reconsideration. It does not declare permanent ineligibility, guarantee safety, or include unrelated details. Celeste remains in care after you distinguish his decision from your role.

A psychiatric clinician starts fluoxetine, discusses off-label use and alternatives, and monitors agitation, anxiety, and suicidal thinking. Celeste reports no activation. Counseling maps how triggers produce focused attention and catastrophic meaning; checking, comparison, camouflage, reassurance, and avoidance reduce uncertainty briefly but strengthen doubt. Graded tasks include one planned mirror use before shopping, five minutes of unfiltered video, and permitting a friend to choose one photograph without review. Preoccupation falls to three hours daily, and Celeste returns to the office weekly.

She still believes a structural problem exists. Examination finds a minor septal deviation that may cause occasional congestion but does not explain the preoccupation, rituals, or social interpretations. Celeste says this proves the behavioral formulation denied medical reality and that any mental health diagnosis must be withdrawn.

With authorization, Mara joins one session. She says refusing photographs feels cruel, while reassurance requires “the exact right tone” and can consume an hour. Celeste argues that family comments and Western beauty standards are real, so reducing reassurance is racial invalidation: “You cannot claim to respect my culture if the goal is to make me tolerate an Asian face.”

The next week, a candid workplace photograph appears in a group chat. Coworkers use laughing emojis about an unrelated caption, but Celeste interprets covert ridicule. She compares images for four hours, asks Mara 23 versions of one question, calls in sick, and schedules an overseas consultation advertising “guaranteed facial harmony.” She reports passive thoughts of disappearing but denies intent, plan, access, or preparation and can use the safety plan. She asks you to decide whether the photograph proves postponement caused harm.`,
      questions: [
        {
          id: 'exam-03-celeste-q7',
          questionNumber: 7,
          domain: 'Intake/assessment/diagnosis',
          stem: 'How should the minor septal deviation and Celeste’s continuing high conviction affect the diagnostic formulation?',
          options: [
            'Withdraw the mental health diagnosis because any documented anatomical finding means the appearance concern is no longer based on a perceived defect',
            'Add Delusional Disorder because continued conviction after treatment shows that the belief is fixed rather than maintained by checking and avoidance',
            'Retain the formulation if the concern remains grossly disproportionate and behaviorally impairing, while separately addressing the limited medical finding and monitoring insight',
            'Change the diagnosis to Somatic Symptom Disorder because a documented physical finding plus excessive health behavior is the required combination rather than an appearance-focused disorder',
          ],
          correctAnswer: 2,
          explanation: 'A slight physical feature does not negate Body Dysmorphic Disorder when the preoccupation and repetitive responses remain markedly excessive and impairing. The counselor should neither deny the septal finding nor allow it to explain symptoms it does not account for. High conviction remains captured by the insight specifier when the belief is confined to the perceived appearance defect and occurs within the established syndrome; persistence during partial treatment does not itself require Delusional Disorder. Somatic Symptom Disorder centers on distressing somatic symptoms and health-related thoughts or behaviors, whereas this pattern centers on perceived appearance. Diagnostic reasoning should integrate proportion, function, theme, and course rather than require either a perfectly normal examination or total acceptance of the formulation.',
        },
        {
          id: 'exam-03-celeste-q8',
          questionNumber: 8,
          domain: 'Core counseling attributes',
          stem: 'What is the counselor’s most therapeutic response to Celeste’s concern that reducing reassurance invalidates racialized beauty experiences?',
          options: [
            'Emphasize that evidence-based response prevention applies regardless of culture, while inviting Celeste to process identity concerns after symptom reduction',
            'Acknowledge the reality and personal impact of racialized standards, examine the counselor’s power and assumptions, and distinguish that context from whether reassurance expands Celeste’s freedom',
            'Ask Mara to continue culturally affirming reassurance but stop facial measurements, preserving family validation while targeting the more objective ritual',
            'Refer Celeste to a Filipina clinician because the rupture shows that a counselor outside her culture cannot conduct appearance-focused treatment neutrally and cultural humility cannot bridge the difference',
          ],
          correctAnswer: 1,
          explanation: 'Cultural responsiveness requires taking racialized beauty standards and family experience seriously, inviting correction, and examining power rather than treating culture as an obstacle to a protocol. It is also possible to explore whether repeated reassurance narrows Celeste’s life without denying that bias exists or that comments caused harm. Postponing identity concerns communicates that technique outranks her lived experience. Reassurance remains part of the maintaining cycle even when phrased affirmingly, so dividing it into culturally valid and invalid rituals misses its function. A culturally matched referral may be offered if Celeste wants one or competence is insufficient, but assuming only an identity-matched counselor can help is not responsive, collaborative care.',
        },
        {
          id: 'exam-03-celeste-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best response to Celeste’s setback after the workplace photograph?',
          options: [
            'Review the screenshots together and identify neutral evidence, because accurate reinterpretation must precede renewed exposure after a socially ambiguous trigger',
            'Ask Mara to provide one standardized reassurance response each day, then fade it once Celeste resumes work and cancels the overseas consultation',
            'Pause exposure until Celeste concedes that the emojis were unrelated, because behavioral experiments require agreement about the feared belief and support for the original formulation before restarting behavioral tasks',
            'Reassess suicide risk, analyze the trigger-to-ritual sequence, reinforce use of the safety plan, and resume graded exposure and response prevention without deciding what the image proves',
          ],
          correctAnswer: 3,
          explanation: 'The return of passive death-related thinking warrants direct reassessment because Celeste has prior aborted behavior and a new procedural response to distress. If outpatient care remains appropriate, the setback can be analyzed for trigger, selective attention, meaning, checking, reassurance, avoidance, and procedure seeking. Treatment then reinforces safety-plan use and returns to collaboratively graded exposure and response prevention. Detailed screenshot review can become reassurance and implies that uncertainty must be resolved before living. A daily reassurance allotment preserves the same functional cycle and burdens Mara. Exposure does not require Celeste to admit the feared interpretation is false; it can test whether she can tolerate uncertainty and choose valued behavior without ritualizing.',
        },
      ],
    },
  ],
};
