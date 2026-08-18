import type { Narrative } from "./types";

export const anjaliAtypicalAnorexiaOcd: Narrative = {
  id: '24-anjali-atypical-anorexia-ocd',
  title: 'Anjali — Atypical Anorexia Nervosa and OCD',
  category: "Feeding and Eating Disorders",
  difficulty: "Advanced",
  recommendedTimeBySectionMinutes: [9, 9, 8],

  clientInfo: {
    age: 30,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Indian American / Gujarati American, second generation',
    relationshipStatus: 'Partnered',
    setting: 'Hospital-affiliated outpatient eating-disorders and anxiety clinic',
    payment: 'Commercial insurance',
    typeOfCounseling: 'Individual counseling with authorized medical, nutritional, psychiatric, and partner collaboration',
    provisionalDiagnosis: 'Other Specified Feeding or Eating Disorder, atypical anorexia nervosa: F50.89; Obsessive-Compulsive Disorder: F42.2',
  },

  presentingProblem: `You are a licensed mental health counselor in an outpatient eating-disorders and anxiety clinic. Anjali S., a 30-year-old second-generation Gujarati Indian American woman, presents after encouragement from her physician and partner, Nisha. Anjali describes “anxiety around food” but doubts she can have an eating disorder because her body mass index remains in a non-low range. During ten months she lost approximately 26% of her prior weight, with acceleration over the last three months after a clinician praised her initial loss.

Anjali delays eating until midafternoon, measures ingredients, restricts dietary fat and starch, and follows a shrinking “clean” food list. She weighs herself repeatedly, body checks, and exercises despite dizziness, weakness, and an ankle strain. Missing exercise produces intense guilt and immediate fear of body change. She calls ordinary restaurant portions binges, but careful assessment finds no recurrent objectively large episodes with loss of control. She denies vomiting, laxatives, diuretics, or secretive large-quantity eating.

Anjali has followed flexible lacto-vegetarian practices since adolescence for ethical, family, and religious reasons. Before the current illness she ate rice, dal, dairy, sweets, and restaurant meals and stopped religious fasts if unwell. She now excludes many customary foods, restricts outside observances, and secretly continues fasts after relatives resume eating. Her mother observes that vegetarianism is longstanding but fear of a spoonful of oil is new. Anjali fears clinicians will either pathologize her culture or use it to excuse every restrictive behavior.

A distinct pattern began at age 16. Anjali experiences intrusive images of her parents dying and fears an incomplete prayer or stove check could cause harm. She repeats phrases until exact, checks in sequences, requests reassurance, and washes sealed groceries because of improbable chemical transfer. Rituals consume 90 minutes to three hours daily and are experienced as unwanted and excessive. Restaurant avoidance can reflect ethical concern about meat contact, calorie and body fears, contamination obsession, or overlapping functions.

During six weeks of reduced intake, Anjali has become irritable, withdrawn, tearful, indecisive, mentally foggy, and less interested in sex or recreation. She sometimes wishes she could disappear from “all the rules” but denies intent, planning, preparatory behavior, or desire to die. She denies mania, psychosis, substance misuse, and trauma reexperiencing. She asks whether medication could improve concentration before anyone “makes this about weight.”` ,

  mentalStatusObservation: `Anjali arrives early in layered clothing on a warm day and initially remains standing. She is meticulously groomed, alert, and oriented. Speech is soft and mildly slowed; thought is linear but ruminative. Mood is “ashamed and on edge,” with constricted, tearful affect. She has no psychosis or mania. Thought content includes weight-gain fear, overvaluation of shape and control, ego-dystonic harm and contamination obsessions, and passive escape language without current suicide intent.

Anjali recognizes most OCD predictions as improbable but defends further weight loss as necessary for health. Attention and working memory are below her occupational baseline. Earlier medical records show a resting pulse in the mid-40s, marked orthostatic pulse increase with lightheadedness, low temperature, intermittent palpitations, and near-syncope the previous evening. No ECG or same-day laboratory evaluation has occurred. Her non-low body size does not resolve the medical concern created by rapid loss, inadequate intake, symptoms, and vital signs.` ,

  familyHistory: `Anjali was born in the United States to parents who emigrated from Gujarat. Her close Hindu family values shared lacto-vegetarian meals and selected fasts with religious, ethical, relational, and sensory meanings. Relatives also made frequent comments about girls being “healthy, not heavy,” and an aunt recently praised Anjali’s loss without knowing about her symptoms.

Her mother has recurrent depression, and a maternal cousin received OCD treatment. Anjali and Nisha have lived together for four years. Nisha prepares “safe” meals, confirms calories, completes checks, and reassures Anjali. After the near-syncope, she also hid the scale, photographed meals, monitored the bathroom, and threatened to call Anjali’s parents. Anjali permits limited collaboration but experiences both accommodation and surveillance as threats to autonomy.` ,

  workHistory: `Anjali is a senior product manager for a health-technology company. Previously decisive and reliable, she now rereads messages, forgets meetings, and postpones complex decisions. She walks during video meetings, skips team lunches, and declined travel because she could not control food preparation. A voluntary company wellness challenge rewards steps and weight loss; Anjali compulsively checks its leaderboard and adds late-night exercise.

Anjali has not disclosed a diagnosis and does not want the counselor deciding whether she needs leave. She sometimes works from her parents’ home in another state and assumes therapy can continue by video. She also worries that an insurer’s broad record request could expose unrelated details. These concerns require accurate consent, jurisdictional review, location-specific emergency planning, and carefully bounded disclosures.` ,

  intakeSessionSummary: `You assess eating behavior, weight trajectory, exercise, objective binge criteria, purging, fluids, syncope, cardiac symptoms, cognition, OCD, mood, suicide risk, medication and supplements, substance use, supports, and safe transportation. A structured interview supports substantial restriction and weight loss, intense fear of gain, behavior interfering with restoration, body checking, overvaluation, and limited recognition of seriousness. Because current weight is not low, the working diagnosis is OSFED, atypical anorexia nervosa rather than anorexia nervosa. The evidence does not support a binge-based disorder. A Y-BOCS-informed interview supports separate longstanding OCD.

You explain that medical risk cannot be inferred from appearance or BMI alone. You do not prescribe a meal plan, target weight, cardiac interpretation, or medication. Near-syncope, bradycardia, orthostatic change, palpitations, rapid loss, and ongoing restriction require immediate medical assessment and multidisciplinary level-of-care determination.

Anjali agrees that Nisha may transport her and that the receiving team may receive the vital signs, near-syncope, intake, activity, and relevant symptoms, while unrelated family and OCD details remain private. When she hesitates, you seek voluntary transfer, explain risk, consult clinic procedure, and remain prepared to follow applicable emergency law and policy if necessary. You document consent changes, evidence, consultation, and the minimum information used for safe continuity.` ,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: 'anjali-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation best accounts for Anjali’s full presentation?',
          options: [
            'Anorexia Nervosa, restricting type, with OCD because rapid loss and cardiovascular instability satisfy the clinically low-weight requirement',
            'OCD with secondary restrictive eating because contamination, exactness, reassurance, and ritualized food handling predated substantial weight loss',
            'OSFED, atypical anorexia nervosa, with obsessive-compulsive features because starvation can account for the longstanding harm and checking rituals',
            'OSFED, atypical anorexia nervosa, with co-occurring OCD because distinct weight-driven and obsession-driven syndromes are independently supported',
          ],
          correctAnswer: 3,
          explanation: 'Atypical anorexia nervosa captures all anorexia features except low body weight; medical instability does not replace that criterion. Anjali’s weight-driven restriction, checking, exercise, fear, and limited insight are not fully explained by contamination. Her harm, chemical-contamination, checking, exactness, and reassurance symptoms began years earlier, consume substantial time, and extend beyond eating concerns, supporting separate OCD. Undernutrition may intensify rigidity and cognition without retroactively accounting for the longstanding syndrome.',
        },
        {
          id: 'anjali-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'How should culturally meaningful vegetarianism and fasting be differentiated from eating-disorder behavior?',
          options: [
            'Use family practice as the baseline, classifying only restrictions that occur outside a recognized observance as clinically significant',
            'Assess meaning, context, flexibility, secrecy, nutritional effect, distress, and weight or shape function without presuming cultural authenticity or pathology',
            'Preserve vegetarian restrictions as culturally protected while evaluating fasting and exercise separately for weight-control or obsessional functions',
            'Temporarily suspend vegetarianism and fasting so behavioral response can reveal whether each practice was cultural, obsessional, or weight driven',
          ],
          correctAnswer: 1,
          explanation: 'Surface form is insufficient. Longstanding shared vegetarianism can coexist with new fear-driven exclusions, and a culturally meaningful fast can also be recruited into an eating-disorder cycle. Function, flexibility, context, secrecy, consequences, and Anjali’s own meaning distinguish them better than a calendar, family vote, or protected category. Blanket suspension is coercive and clinically unnecessary. Cultural responsiveness neither pathologizes difference nor exempts a harmful behavior from individualized assessment.',
        },
        {
          id: 'anjali-q3',
          questionNumber: 3,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which finding most strongly argues against bulimia nervosa or binge-eating disorder?',
          options: [
            'There are no recurrent objectively large episodes with loss of control, while restriction and weight-gain prevention organize the syndrome',
            'Exercise and fasting occur after perceived overeating, but their frequency has not been confirmed through prospective behavioral monitoring',
            'Her body weight is not low, making a binge-based disorder more likely than either typical or atypical anorexia nervosa',
            'She denies purging and secretive large-quantity eating, although subjective binges and compensatory exercise remain clinically significant',
          ],
          correctAnswer: 0,
          explanation: 'Bulimia nervosa and binge-eating disorder require recurrent objective binge episodes involving both a large amount and loss of control. Anjali uses “binge” for ordinary portions, so the clinician must clarify the phenomenon rather than accept the label. Exercise, fasting, guilt, non-low weight, and subjective overeating can occur across eating disorders. Absence of purging distinguishes some patterns but does not itself exclude binge-eating disorder; absence of qualifying binges is the decisive evidence.',
        },
        {
          id: 'anjali-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate immediate response to Anjali’s intake findings?',
          options: [
            'Obtain same-day laboratory and ECG orders while allowing Anjali to travel independently because orientation and current suicide intent remain reassuring',
            'Continue assessment while consulting the eating-disorder team, escalating only if syncope recurs or her resting pulse declines further',
            'Arrange immediate medical assessment with safe transport and necessary information, then determine level of care from the complete picture',
            'Refer to partial hospitalization and schedule medical testing the next morning if Anjali agrees to stop exercise and eat with Nisha',
          ],
          correctAnswer: 2,
          explanation: 'Near-syncope, bradycardia, marked orthostatic change, palpitations, low temperature, rapid loss, and continued restriction require immediate medical evaluation. Orientation and low acute suicide risk do not establish cardiovascular safety or safe independent travel. Delaying until another event or using behavioral promises as medical clearance is inappropriate. The counselor facilitates evaluation and communicates relevant facts; qualified eating-disorder professionals determine the level of care from medical, nutritional, behavioral, psychiatric, and support factors.',
        },
        {
          id: 'anjali-q5',
          questionNumber: 5,
          domain: 'Professional practice and ethics',
          stem: 'Anjali limits disclosure while urgent medical transfer is arranged. Which response is most defensible?',
          options: [
            'Give Nisha the intake findings needed to recognize deterioration because transportation responsibility creates a temporary clinical need to know',
            'Clarify partner and receiving-team roles, honor authorized limits, share necessary safety information, and use emergency authority only when applicable',
            'Share exact weight and the eating-disorder diagnosis but withhold OCD content because measurements and diagnoses are less sensitive than psychotherapy material',
            'Withhold all information after Anjali narrows consent, allowing the medical team to repeat assessment unless she loses decisional capacity during transfer',
          ],
          correctAnswer: 1,
          explanation: 'Nisha’s transportation role does not create blanket access, and the receiving team’s information needs differ from a partner’s. Anjali may meaningfully limit routine disclosure while authorizing facts necessary for safe evaluation. Diagnosis and weight are not categorically less private. If authorization becomes insufficient during a true emergency, the counselor follows applicable law and policy rather than inventing an automatic rule. Complete silence can impair continuity, while full disclosure exceeds the stated purpose.',
        },
      ],
    },
    {
      sessionLabel: 'Sixth session',
      sectionNarrative: `Seven weeks later, Anjali returns after medical stabilization, specialized partial hospitalization, and step-down care. The team attributed cardiovascular and cognitive findings to rapid loss and inadequate intake; no independent cardiac, endocrine, or substance cause emerged. She follows an individualized nutrition plan, receives medical monitoring, and has paused unapproved exercise. Concentration, sleep, temperature intolerance, and mood are improving, though she remains ambivalent about restoration.

Anjali describes nearly leaving care after staff called her “healthy-looking” and “not as sick as the thin patients.” She also recognizes that consistent nourishment improved her mental fog. Her dietitian has incorporated familiar vegetarian foods without assuming that cultural preference or every avoidance is pathological.

Anjali and her clinicians disagree about how to classify overlapping behavior. Calorie counting and body checking occur near weight fears; washing and exact prayers long predate the eating disorder; restaurant avoidance changes across situations. Anjali wants one permanent diagnostic label for each action. She proposes eating alone at an unreviewed restaurant while refusing all reassurance. Her dietitian worries that this could disrupt nutritional structure, while an OCD clinician worries that indefinite postponement could strengthen rituals. Anjali asks whether one disorder must be treated first.

With consent, Nisha joins part of the session. She still prepares backup meals and answers safety questions, but also checks browser history, watches the bathroom, and compares receipts with the nutrition plan. Anjali deletes step data to avoid scrutiny. Both want a support plan that reduces accommodation without converting Nisha into a clinician. Anjali also expects to attend the next video session while visiting her parents in another state.` ,
      questions: [
        {
          id: 'anjali-q6',
          questionNumber: 6,
          domain: 'Core counseling attributes',
          stem: 'How should you respond to the body-size-based comments Anjali experienced in treatment?',
          options: [
            'Validate their impact, then redirect to objective medical evidence so appearance-based interactions do not displace the urgency of recovery tasks',
            'Document the concern and request that the program avoid all body discussion because corrective comments can also reinforce comparison',
            'Validate the harm, separate illness severity from appearance, and ask what would make necessary care safer and more collaborative',
            'Explain that reassurance was likely intended to reduce fear, while acknowledging that the wording may have unintentionally minimized symptoms',
          ],
          correctAnswer: 2,
          explanation: 'The response validates impact without defending intent, accurately separates severity from appearance, and restores Anjali’s participation in care. Immediate redirection to medical facts can reproduce the experience of not being heard. Avoiding all body-related discussion is impractical because respectful conversations about nutrition, health, and body image remain necessary. Speculating that staff intended reassurance centers their motives rather than Anjali’s experience and may minimize a treatment-interfering rupture.',
        },
        {
          id: 'anjali-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'Which treatment strategy best addresses both disorders without confusing their maintaining functions?',
          options: [
            'Establish regular eating through CBT-E before beginning ERP, because simultaneous response prevention could destabilize nutritional rehabilitation',
            'Complete ERP for food-related contamination first so clinicians can identify which residual avoidance is maintained by weight and shape concerns',
            'Use one transdiagnostic exposure protocol for all rituals because uncertainty reduction and negative reinforcement maintain both symptom clusters',
            'Coordinate CBT-E for eating-disorder mechanisms with graded ERP for OCD while keeping exposures consistent with medical and nutrition plans',
          ],
          correctAnswer: 3,
          explanation: 'A coordinated plan can address both disorders without treating every rigid behavior as equivalent. CBT-E targets regular eating, overvaluation, checking, avoidance, and dietary rules; ERP targets obsessions and rituals such as washing, checking, repetition, and reassurance. Food-related exposure must support rather than undermine the nutrition plan. Rigidly completing one treatment first can prolong the other, while a single undifferentiated protocol ignores distinct feared outcomes and can turn exposure into restriction or control.',
        },
        {
          id: 'anjali-q8',
          questionNumber: 8,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which method most accurately classifies Anjali’s overlapping rituals?',
          options: [
            'Classify by feared outcome and reinforcing function, revising the formulation when one behavior serves cultural, obsessional, and weight-related purposes',
            'Attribute rituals predating weight loss to OCD and later rituals to malnutrition or eating pathology unless symptoms persist after restoration',
            'Classify food and body rituals as eating-disorder symptoms while reserving OCD for nonfood harm, checking, and exactness rituals',
            'Treat family-endorsed practices as culturally congruent and classify only private or family-disapproved behaviors through psychiatric formulation',
          ],
          correctAnswer: 0,
          explanation: 'The visible behavior, object, onset date, and family approval do not establish function. Restaurant avoidance, for example, may protect an ethical value, reduce contamination uncertainty, prevent calorie exposure, or serve several purposes. Functional analysis examines antecedents, feared outcomes, short-term relief, and longer consequences. Undernutrition can intensify rigidity without erasing longstanding OCD. A formulation should remain testable and revisable rather than forcing every food-related act into one diagnostic category.',
        },
        {
          id: 'anjali-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best plan for Nisha’s accommodation and surveillance?',
          options: [
            'Stop reassurance and meal involvement immediately while retaining observation of exercise, bathroom use, and medical warning signs during step-down care',
            'Create a consented, time-limited plan defining practical support, reduced accommodation, observable warning signs, privacy limits, and scheduled review',
            'Continue nutrition-plan verification while tapering reassurance for harm obsessions because eating-disorder monitoring has greater immediate medical relevance',
            'Remove Nisha from treatment tasks so support cannot become coercive, relying on clinicians for meals, exposure, and relapse monitoring',
          ],
          correctAnswer: 1,
          explanation: 'The plan should distinguish practical support from ritual participation and surveillance. Agreed meal logistics, transport, or response to observable warning signs may be appropriate, while reassurance, browser inspection, bathroom watching, and indefinite data review can maintain symptoms or secrecy. Abrupt removal of all support may conflict with current care needs. Prioritizing one disorder does not justify unbounded monitoring. Consent, capacity, safety, and effectiveness require explicit boundaries and repeated review.',
        },
        {
          id: 'anjali-q10',
          questionNumber: 10,
          domain: 'Professional practice and ethics',
          stem: 'What should occur before counseling Anjali by video while she is in another state?',
          options: [
            'Provide one continuity session, then verify jurisdictional requirements before scheduling further treatment because interruption may create greater clinical risk',
            'Transfer care to an in-state clinician because temporary travel generally ends the original counselor’s authority to provide any clinical contact',
            'Continue treatment under the clinic-state license if Anjali uses her permanent address and local emergency contacts are documented beforehand',
            'Verify her physical location, determine applicable authorization and policy, and establish lawful continuity and local emergency arrangements before treatment',
          ],
          correctAnswer: 3,
          explanation: 'Professional requirements generally turn on where the client is physically located during the service, along with the counselor’s jurisdiction, payer, and organizational rules. Continuity concerns matter but do not create automatic permission to practice first and investigate later. Temporary travel also does not always require immediate transfer; lawful options vary. Using a permanent address cannot change actual location. Requirements and local emergency resources should be resolved before clinical treatment begins.',
        },
      ],
    },
    {
      sessionLabel: 'Eighteenth session',
      sectionNarrative: `Nine months after intake, Anjali has maintained consistent nutrition and outpatient medical stability for several months. Concentration and mood are near baseline, while the team continues monitoring rather than retroactively dismissing earlier mood symptoms. She no longer routinely weighs herself, counts calories, or exercises against guidance. ERP reduced her OCD symptoms from severe to mild.

Anjali and Nisha now use a written support plan rather than surveillance. A stressful product launch and the company wellness challenge nevertheless activated a cluster over ten days: four skipped snacks, a reinstalled step application, prolonged label comparison, increasingly low-fat choices, and secret pleasure after weight-loss praise. Anjali disclosed the changes early. She has no syncope, purging, objective binge episodes, acute medical instability, or current suicidal ideation.

Anjali’s medical clinician sees no current cardiac contraindication to low-intensity movement, while her dietitian notes that recent snack skipping could make increased activity unsafe if fueling does not change. Anjali wants to begin 10K training immediately and argues that a tracker provides objective accountability. The team has not agreed on progression, measurement, or behavioral readiness.

Anjali is considering a future family fast that matters spiritually and relationally. She fears it could become a socially protected return to restriction and asks for a permanent rule. Her insurer also requests records for continued-care review. Anjali first says, “Send everything,” then worries that details about sexuality, family conflict, and harm obsessions are irrelevant.` ,
      questions: [
        {
          id: 'anjali-q11',
          questionNumber: 11,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate response to Anjali’s recent warning-sign cluster?',
          options: [
            'Monitor another week because early disclosure, stable medical data, and absence of weight information make escalation potentially reinforcing',
            'Target label comparison through ERP while preserving current nutrition and movement choices until an objective medical change clarifies the function',
            'Activate the relapse plan, restore structure and supports, reassess medical and psychiatric status, and adjust care if the pattern progresses',
            'Resume partial hospitalization because clustered restriction and compulsive activity after prior instability indicate failure of outpatient relapse prevention',
          ],
          correctAnswer: 2,
          explanation: 'The linked return of skipped nutrition, tracking, label comparison, low-fat selection, and reinforcement from praise is more informative than any behavior alone. Relapse planning is intended for early use, before major weight or medical deterioration. The team should restore regular eating, reduce maintaining behaviors, assess current status and stressors, involve consented supports, and adjust intensity if needed. Automatic readmission is premature, but waiting for objective deterioration forfeits the advantage of early disclosure.',
        },
        {
          id: 'anjali-q12',
          questionNumber: 12,
          domain: 'Counseling skills and interventions',
          stem: 'Which plan best supports Anjali’s return to exercise and movement?',
          options: [
            'Use coordinated graded activity with adequate fueling, rest flexibility, medical monitoring, and repeated assessment of motive, compulsion, and recovery',
            'Delay intentional exercise until Anjali reports no body dissatisfaction, comparison, or urge to compensate for eating on stressful days',
            'Begin 10K training without electronic tracking because removing the primary compulsive mechanism makes self-directed progression therapeutically useful',
            'Use a tracker with limits reviewed by the dietitian and Nisha so objective data can separate healthy training from subjective fear',
          ],
          correctAnswer: 0,
          explanation: 'Return to movement is not determined by stated enjoyment or one metric. It should integrate medical stability, adequate intake and recovery, injury status, graded progression, the ability to rest, flexibility, and reduced compensatory function. Waiting for perfect body image is unnecessarily absolute, while immediate endurance training can outpace recovery. Tracking and partner review may recreate competition, compulsion, or surveillance; any measurement requires a specific rationale and monitoring of its actual effects.',
        },
        {
          id: 'anjali-q13',
          questionNumber: 13,
          domain: 'Professional practice and ethics',
          stem: 'How should you handle the insurer request after Anjali expresses concern about her initial broad permission?',
          options: [
            'Send the full record after confirming her first instruction because later anxiety about disclosure does not invalidate consent given voluntarily',
            'Provide diagnosis, attendance, and medical stability only because minimum-necessary principles exclude psychotherapy symptoms from payer review',
            'Clarify the request and authorization, explain risks and alternatives, and release only appropriately authorized information relevant under actual requirements',
            'Decline disclosure unless subpoenaed because psychotherapy records and sensitive identity information remain privileged during utilization review',
          ],
          correctAnswer: 2,
          explanation: 'Anjali’s concern requires clarification before disclosure, not reliance on the earliest broad statement or categorical refusal. The counselor should identify purpose, recipient, scope, authorization requirements, payer contract, applicable law, policy, and whether selected records or a focused summary can meet the legitimate need. “Minimum necessary” does not produce one universal content list. Unrelated sensitive information should not be included merely because a larger record might appear more persuasive.',
        },
        {
          id: 'anjali-q14',
          questionNumber: 14,
          domain: 'Core counseling attributes',
          stem: 'How should you respond to Anjali’s request for a permanent rule about religious fasting?',
          options: [
            'Recommend permanent abstinence because prior medical instability makes intentional fasting incompatible with recovery regardless of future function or observance',
            'Explore meaning and relapse function, coordinate individualized medical and nutrition guidance, consider alternatives, and preserve Anjali’s informed agency',
            'Defer fasting until one year of behavioral remission so cultural participation cannot obscure whether restriction has regained a weight-control function',
            'Support symbolic participation without food restriction because substituting a nonnutritional observance is the safest culturally responsive clinical compromise',
          ],
          correctAnswer: 1,
          explanation: 'The counselor should avoid both automatic endorsement and permanent prohibition. Anjali’s history makes fasting clinically relevant, especially during renewed warning signs, but surface similarity does not erase cultural meaning. Individualized assessment considers motives, flexibility, secrecy, anticipated effects, values, alternatives, warning signs, and current medical and nutritional guidance. A fixed remission period is another universal rule, and the counselor should not prescribe one “culturally correct” substitute for Anjali.',
        },
      ],
    },
  ],
};