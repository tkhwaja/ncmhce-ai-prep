import type { Narrative } from "./types";

export const bennettMedicationAndSleepReferralNarrative: Narrative = {
  id: 'exam-03-09-bennett-medication-and-sleep-referral',
  title: 'Bennett — Medication and Sleep Referral',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [7, 7, 6],

  clientInfo: {
    age: 42,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender man',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black/African American',
    relationshipStatus: 'Married; one adolescent child',
    setting: 'Outpatient co-occurring-disorders clinic receiving a primary-care referral',
    payment: 'Employer-sponsored health insurance',
    typeOfCounseling: 'Individual counseling with authorized medical, sleep-medicine, and family coordination',
    provisionalDiagnosis: 'Sedative, Hypnotic, or Anxiolytic Use Disorder, severe: F13.20; Generalized Anxiety Disorder: F41.1; Insomnia Disorder: F51.01',
  },

  presentingProblem: `Bennett R., a 42-year-old municipal building-safety inspector, arrives after his primary-care practice refused an early alprazolam refill. He calls this “a medication problem, not a drug problem.” Alprazolam began nine years ago for worry and insomnia; the current prescription is 1 mg three times daily. Zolpidem 10 mg nightly was added six years ago.

During the past eighteen months, Bennett has taken four to five alprazolam tablets on some days, requested four early refills in six months, reported one bottle lost, and used old tablets while awaiting authorization. He becomes guarded about whether every tablet came from his current prescriber. At least five attempts to resume the prescribed dose ended within days because of anxiety, shaking, nausea, sleeplessness, and impending-doom sensations. He interprets this as undertreated anxiety rather than loss of control.

His last alprazolam was nineteen hours ago, and the next refill is eight days away. He took zolpidem last night and denies recent alcohol, opioids, stimulants, or cannabis. He now reports tremor, sweating, nausea, light sensitivity, muscle twitching, and a pounding pulse. Twice he notices a peripheral shadow but recognizes no one is present. He is oriented. He recalls awakening on the bathroom floor during an earlier weekend without alprazolam; his wife heard a crash, but no one witnessed a seizure and he sought no care.

Bennett wants either to stop “cold turkey” over the weekend or have the counselor divide his remaining zolpidem as a substitute. He drove to the clinic. He denies current suicidal intent, but after the refill denial thought it might be easier “not to wake up for a while.” Several old medication bottles remain somewhere at home.

Anxiety predates sedative use. Since his twenties, difficult-to-control worries about money, family safety, work errors, health, and disappointing others have occurred with restlessness, tension, irritability, poor concentration, and disturbed sleep even during stable medication access. He denies elevated mood, decreased need for sleep with increased energy, grandiosity, or psychosis. Two remote panic attacks produced no persistent panic-focused fear or avoidance.

Insomnia also predates medication. Bennett may need ninety minutes to fall asleep, awakens repeatedly, keeps an irregular bedtime, checks work email in bed, and naps after poor nights. A sleep clinic diagnosed obstructive sleep apnea, but he uses continuous positive airway pressure inconsistently because the mask feels confining. He believes zolpidem is indispensable and has not returned to sleep medicine.` ,

  mentalStatusObservation: `Bennett is neatly dressed but perspiring. He is alert and fully oriented. Speech is coherent and mildly rapid; mood is “angry and on edge,” with tense, constricted affect. Thought process is linear, although bodily sensations and the doorway repeatedly pull his attention. No fixed delusion or sustained hallucination is elicited. A fine bilateral tremor is visible. Clinic staff measure pulse at 112 and blood pressure at 158/96. He minimizes risk while recognizing that abrupt medication changes can be dangerous. Judgment is compromised regarding driving and self-directed withdrawal. His passive wish not to wake requires further assessment.` ,

  familyHistory: `Bennett lives with his wife and fifteen-year-old son. His wife wants to provide collateral because she believes he conceals his dose, but Bennett has not authorized contact. He fears surveillance and having every conflict attributed to pills. His father had severe alcohol-related problems and died of liver disease; Bennett rarely drinks because he fears resembling him.

Bennett recalls clinicians assuming drug seeking before hearing him. “A Black man asks for relief and suddenly he is an addict.” He expects either shame or dismissal of bias. Addiction also evokes his father's violence and broken promises. He requests precise language, transparent diagnostic reasoning, and separation of physiological dependence from character. His religious community is supportive, but he declines clergy involvement.` ,

  workHistory: `Bennett has worked for the city for eleven years. His job includes driving, climbing ladders, entering unfinished structures, and issuing stop-work orders. During the past year he arrived late seven times, omitted two reports, and repeated one completed inspection, which he attributes to insomnia and understaffing.

Three months ago, after an extra alprazolam tablet before a hostile meeting, he sideswiped a barrier in a city vehicle. He called it distraction and did not disclose medication use. A coworker recently described him as slowed and forgetful. Bennett fears records will automatically reach his supervisor, although the referral is not employer mandated and no records have been requested.` ,

  intakeSessionSummary: `The immediate task is not final diagnosis or routine therapy. Abrupt interruption of a short-acting benzodiazepine, autonomic and perceptual symptoms, possible prior collapse, medication access, passive death-related thinking, and impaired driving judgment require prompt assessment and medical disposition. Counseling staff do not prescribe substitutes or design tapers.

After stabilization, assessment must reconstruct sources, doses, co-ingestants, reduction attempts, control, craving, consequences, medical factors, and anxiety and sleep across time, using authorized records and collateral. Expected tolerance or withdrawal during appropriate treatment cannot alone count toward a use-disorder diagnosis; an original prescription cannot exclude one.` ,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-bennett-q1',
          questionNumber: 1,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best immediate response to Bennett’s presentation?',
          options: [
            'Ask Bennett to remain at the clinic while the counselor requests a bridge prescription from primary care, because restoring his usual dose is the least disruptive way to distinguish baseline anxiety from withdrawal before emergency resources are used',
            'Complete a structured withdrawal rating, involve his wife with permission, and arrange overnight home observation with instructions to seek emergency care if confusion, hallucinations, or a witnessed seizure develops',
            'Help Bennett postpone the cold-turkey plan by spacing the remaining zolpidem through the weekend, then schedule addiction-medicine assessment before the next workday so he does not independently combine medications',
            'Interrupt routine intake, assess immediate medical and suicide risk, and arrange monitored same-day medical evaluation with safe transport and a direct handoff',
          ],
          correctAnswer: 3,
          explanation: 'Bennett may be developing clinically significant benzodiazepine withdrawal, and risk may escalate despite his current orientation. A short-acting medication, sustained high exposure, abrupt interruption, autonomic findings, perceptual disturbance, possible prior collapse, passive death-related thinking, other medication access, and impaired driving judgment support same-day medical evaluation rather than outpatient observation. The counselor should clarify last use, co-ingestants, seizure history, access, suicide risk, and transport while arranging a direct handoff and preventing him from driving. Requesting or restoring a dose is a prescriber decision and could delay evaluation. A rating scale may support communication but does not make home monitoring sufficient. Zolpidem is not a counselor-directed substitute, and any self-designed schedule is outside scope and unsafe.',
        },
        {
          id: 'exam-03-bennett-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'After immediate stabilization, which assessment strategy best distinguishes physiological dependence from a sedative-related use disorder and co-occurring conditions?',
          options: [
            'Reconcile every sedative source, dose, timing pattern, reduction attempt, craving, and functional consequence; evaluate behavioral criteria apart from medically expected tolerance or withdrawal; and map anxiety and sleep symptoms longitudinally',
            'Defer diagnostic assessment until Bennett completes a medically supervised taper, because withdrawal, rebound insomnia, and rebound anxiety make every substance-use and anxiety criterion unreliable while medication remains in his system',
            'Use prescription-monitoring records and toxicology as the primary evidence, because discrepancies between those objective findings and Bennett’s account can distinguish a use disorder from anxiety-driven overuse without potentially biased collateral reports',
            'Diagnose a sedative-related disorder provisionally from early refills, dose escalation, and current withdrawal, then determine whether generalized anxiety and insomnia remain after sustained abstinence before documenting additional conditions',
          ],
          correctAnswer: 0,
          explanation: 'A source-by-source and time-linked assessment can distinguish expected physical adaptation from impaired control, craving, time spent obtaining or recovering, role failures, hazardous use, continued use despite harm, and sacrificed activities. When a sedative is taken under appropriate medical supervision, tolerance and withdrawal alone are not counted toward a use-disorder diagnosis; behavioral evidence remains essential. Anxiety and insomnia should be mapped before medication exposure, during stable access, during escalation, and during reduction rather than assumed primary or substance induced. Waiting for complete discontinuation delays useful formulation and may be unrealistic. Monitoring records and toxicology are useful but cannot establish motive, control, impairment, or the complete syndrome. Assigning a disorder from dependence-related findings and early refills alone risks diagnostic overreach.',
        },
        {
          id: 'exam-03-bennett-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond to Bennett’s concern that Black patients seeking relief are quickly labeled addicts?',
          options: [
            'Assure Bennett that this clinic uses standardized criteria and therefore race cannot influence diagnosis, then explain that dose escalation makes a substance-use diagnosis necessary regardless of the original prescription',
            'Invite Bennett to document prior discriminatory encounters in detail before discussing medication behavior, because establishing the validity of his mistrust is necessary for culturally responsive diagnostic assessment',
            'Acknowledge the reality and impact of biased care, distinguish physical dependence and behavioral diagnosis from moral identity, and invite Bennett to examine the evidence and preferred language collaboratively',
            'Validate that prescribed medication use differs from addiction and agree to avoid substance-use terminology until outside records establish intentional deception, loss of control, or acquisition from multiple prescribers',
          ],
          correctAnswer: 2,
          explanation: 'Cultural responsiveness requires acknowledging that bias can shape care and that Bennett’s mistrust has understandable meaning, while retaining disciplined uncertainty about the diagnosis. Separating physiological dependence, a possible behavioral syndrome, and moral identity creates room to review criteria transparently and to negotiate respectful language without erasing risk. Standardized criteria reduce neither implicit bias nor the need for humility, and dose escalation alone does not compel the diagnosis. Bennett need not prove discrimination before present treatment can become trustworthy. Agreeing in advance to avoid accurate terminology or requiring intentional deception makes diagnosis contingent on morality rather than the full behavioral pattern.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Bennett accepts ambulance transport. An emergency team confirms benzodiazepine withdrawal and monitors him without delirium or a witnessed seizure. Medical clinicians stabilize him and arrange rapid follow-up with an addiction-medicine prescriber, who assumes responsibility for an individualized conversion and gradual taper. Bennett signs specific coordination authorizations.

Records and authorized collateral show five sedative fills from two practices in six months. Bennett obtained a second alprazolam prescription through telehealth after primary care declined an increase, without informing either practice. He used his wife's clonazepam three times and spent hours calling pharmacies or searching cabinets when supplies ran low.

Bennett now estimates taking four to six milligrams of alprazolam on most workdays and sometimes combining zolpidem with a late dose. Morning resolutions to follow the prescription often ended by afternoon. He became preoccupied when fewer than ten tablets remained, abandoned basketball, missed his son's events, and withdrew to sleep or recover from fogginess. Use continued after his wife threatened separation, the vehicle collision, and medical warnings about memory and apnea. He hid bottles and minimized use. At least eight behavioral criteria remain even without tolerance or withdrawal.

Diffuse worry, tension, irritability, concentration problems, and disturbed sleep began years before sedative exposure and persisted during stable access. They span work, finances, family safety, and health, although withdrawal magnifies them. No mania, primary psychosis, or other substance-induced syndrome emerges.

Sleep medicine identifies undertreated obstructive sleep apnea and chronic insomnia involving conditioned arousal, variable scheduling, napping, and time awake in bed. Apnea, sedative effects, anxiety, and learned behavior all contribute; withdrawal alone does not explain the pattern. Bennett accepts mask refitting. He meets no alcohol or opioid use-disorder criteria.

Bennett rejects humiliation and abrupt abstinence but wants to remain employed, repair trust, sleep without escalating medication, and manage anxiety. He authorizes limited coordination among the counselor, prescribers, sleep clinician, and wife, without giving anyone unrestricted access to therapy content.` ,
      questions: [
        {
          id: 'exam-03-bennett-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which formulation is best supported by the accumulated information?',
          options: [
            'Physiological benzodiazepine dependence without a use disorder, with generalized anxiety and insomnia, because the symptoms began in treatment and withdrawal-related tolerance and dose escalation are expected after long-term prescribing',
            'Severe Sedative, Hypnotic, or Anxiolytic Use Disorder with physiological dependence, plus Generalized Anxiety Disorder and Insomnia Disorder, because numerous behavioral criteria remain after tolerance and withdrawal are excluded',
            'Substance/Medication-Induced Anxiety Disorder and Substance/Medication-Induced Sleep Disorder, because both syndromes intensify when the sedative dose falls and cannot be diagnosed independently until the taper is complete',
            'Generalized Anxiety Disorder with iatrogenic sedative dependence and nonadherence, because a legitimate initial prescription and the absence of intoxication-seeking prevent a substance-use diagnosis despite concealment and hazardous use',
          ],
          correctAnswer: 1,
          explanation: 'Bennett demonstrates impaired control, unsuccessful reduction, craving or preoccupation, substantial time obtaining medication, role failures, interpersonal consequences, hazardous use, continued use despite physical and psychological harm, and abandoned activities. The number of behavioral criteria supports severe Sedative, Hypnotic, or Anxiolytic Use Disorder even without counting tolerance or withdrawal. Physiological dependence is also present but does not replace the behavioral diagnosis. Generalized anxiety clearly predates medication and persists outside withdrawal; chronic insomnia likewise has an independent longitudinal pattern with multiple contributors. Intoxication-seeking and an illicit origin are not required. Symptom amplification during withdrawal does not erase co-occurring disorders established across other periods.',
        },
        {
          id: 'exam-03-bennett-q5',
          questionNumber: 5,
          domain: 'Treatment planning',
          stem: 'Which integrated treatment plan best fits Bennett’s risks, diagnoses, goals, and current level of care?',
          options: [
            'Use a prescriber-led individualized gradual taper with withdrawal monitoring; coordinate CBT and motivational or relapse-prevention work, CBT-I and apnea care, family-supported safety, and treatment of generalized anxiety',
            'Require inpatient detoxification followed by a medication-free interval before beginning psychotherapy, because continued prescribed exposure prevents accurate anxiety treatment and reinforces Bennett’s belief that he cannot function without sedatives',
            'Have the counselor translate a published dose-reduction protocol into weekly pill targets while the prescriber monitors vital signs, then begin exposure for worry and sleep restriction once Bennett reaches half of his original dose',
            'Maintain the current medication dose until CBT eliminates excessive worry and insomnia, then ask primary care to discontinue both sedatives rapidly so withdrawal does not become prolonged reinforcement for continued use',
          ],
          correctAnswer: 0,
          explanation: 'The plan must integrate medical withdrawal safety with the functions and consequences of use. A qualified prescriber should individualize and adjust a gradual taper; counseling can address motivation, triggers, secrecy, craving, worry, coping, relapse prevention, and relationship repair. CBT-I should be coordinated with sleep medicine and adapted for apnea, sedation, occupational safety, and taper-related variability rather than delayed arbitrarily. Family participation remains consent-limited and goal directed. The available stabilized presentation does not by itself require inpatient detoxification or a psychotherapy delay. The counselor must not convert a guideline into dosing instructions. Holding the dose until anxiety disappears and then stopping rapidly misunderstands dependence and could produce dangerous withdrawal.',
        },
        {
          id: 'exam-03-bennett-q6',
          questionNumber: 6,
          domain: 'Professional practice and ethics',
          stem: 'The addiction-medicine prescriber asks the counselor to recommend Bennett’s exact milligram reduction for the next two weeks. What should the counselor do?',
          options: [
            'Select the most conservative published percentage reduction and document that it is a behavioral recommendation rather than a prescription, because the counselor observes Bennett more frequently than the medical clinician',
            'Recommend holding the dose whenever anxiety or insomnia increases, because symptom-contingent flexibility protects the alliance and leaves the prescriber free to approve or reject the counselor’s proposed schedule',
            'Decline any further discussion of medication or withdrawal so role boundaries remain unmistakable, and send only attendance and diagnosis information if Bennett has authorized those disclosures',
            'Share authorized observations about use, symptoms, functioning, adherence, and risk; defer dose selection and medical monitoring to the prescriber; and clarify communication and urgent-response roles',
          ],
          correctAnswer: 3,
          explanation: 'The counselor contributes behavioral, functional, alliance, adherence, sleep, and risk information within the authorization, while the qualified prescriber determines medication conversion, dose reductions, holds, and medical monitoring. Explicitly defining who responds to which warning signs supports integrated care without practicing outside competence. Relabeling a dose recommendation as behavioral does not change its clinical function. Anxiety or insomnia may signal many processes and cannot become a counselor-created dosing rule. Refusing all medication-related communication would fragment care; scope is preserved through role clarity, not silence.',
        },
      ],
    },
    {
      sessionLabel: 'Eleventh week',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Seven weeks into the plan, the prescriber has reduced Bennett's benzodiazepine exposure by about twenty percent, slowing once when insomnia and autonomic symptoms emerged. Bennett uses continuous positive airway pressure most nights, attends work, and practices scheduled worry time, stimulus control, paced breathing, and urge-surfing. No further driving incident occurs.

After a contentious work review and his son's minor car accident, Bennett sleeps poorly for two nights. He finds a hidden alprazolam bottle and takes two tablets in addition to the taper supply. Calling the counselor the next morning, he reports no alcohol, opioid, zolpidem, or other sedative use and denies suicidal intent. He is alert, coherent, and not driving, without perceptual disturbance, marked tremor, slowed breathing, or confusion. He fears disclosure will end treatment or reach his employer.

“Now every mistake proves I am my father, and you were waiting for me to lie.” Bennett alternates between calling the tablets medically necessary and acknowledging that he hid an escape route. He asks the counselor not to inform the prescriber despite an authorization that specifically covers dosing deviations relevant to taper safety. After reviewing its scope, he does not revoke it but insists on participating in any contact.

Three weeks later, urgent care prescribes oxycodone after dental extraction. Bennett discloses neither the taper nor the opioid across teams. During telehealth, he drifts out of frame, speaks indistinctly, and responds only briefly. His wife says he took taper medication and a pain pill an hour ago. She cannot wake him fully, counts about seven shallow breaths per minute, and sees gray lips. She has naloxone from a community training but questions whether it applies to a prescribed opioid. No emergency service has been contacted.` ,
      questions: [
        {
          id: 'exam-03-bennett-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best response to Bennett’s disclosure that he took tablets from the hidden bottle?',
          options: [
            'Praise the disclosure, maintain confidentiality from the prescriber to protect future honesty, and use the session to recommit Bennett to taking only the next scheduled dose unless objective withdrawal signs appear',
            'Refer Bennett for emergency evaluation and recommend that the taper be restarted from its original dose, because any unplanned benzodiazepine use during reduction creates unpredictable seizure and overdose risk',
            'Assess dose, co-use, intoxication, withdrawal, suicide risk, and driving; review the safety need and authorization; include Bennett in prompt prescriber contact; then revise safeguards',
            'Ask Bennett and his wife to discard every hidden medication immediately while connected by video, then postpone prescriber contact until the counselor can determine whether the event reflects craving or undertreated anxiety',
          ],
          correctAnswer: 2,
          explanation: 'The counselor first determines whether the extra dose, co-ingestants, symptoms, access, suicidality, or driving require emergency action. Unplanned dosing affects taper safety, so the counselor should review the still-active authorization, explain the purpose of disclosure, and include Bennett in prompt prescriber contact. A nonshaming functional analysis can then examine stress, sleep loss, the hidden supply, urges, relief, and consequences before safeguards are revised. Concealment undermines coordinated care. Current findings do not automatically require emergency transfer or a return to the original dose, which the counselor could not order. Safe disposal may follow coordination, but compelling it first and delaying the prescriber reverses the sequence.',
        },
        {
          id: 'exam-03-bennett-q8',
          questionNumber: 8,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond to Bennett’s claim that the lapse proves the counselor sees him as his father?',
          options: [
            'Acknowledge the identity threat and courage involved in disclosure, separate Bennett from the behavior, and explore both the relief sought and the secrecy without abandoning accountability',
            'Reassure Bennett that one lapse is not clinically significant and offer to remove the severe diagnosis if all future medication use follows the taper, because diagnostic flexibility can repair trust',
            'Clarify that the diagnosis is based on objective criteria rather than the counselor’s opinion, then redirect to the hidden bottle so family history does not become a way to avoid responsibility',
            'Validate that the comparison with his father is stigmatizing, agree not to use addiction language in session, and ask the prescriber to discuss medication nonadherence separately from counseling',
          ],
          correctAnswer: 0,
          explanation: 'The response holds empathy, identity, function, and responsibility together. Bennett’s voluntary disclosure is clinically meaningful; naming its courage and the feared resemblance to his father supports alliance. Separating personhood from behavior permits curious examination of why the tablets offered relief and why they were hidden, without minimizing safety or colluding with secrecy. Calling the event insignificant makes trust contingent on future perfection and treats diagnosis as a bargaining tool. Reciting objective criteria before addressing the rupture is likely to intensify shame. Avoiding accurate language and splitting the team abandons collaborative formulation rather than making it less stigmatizing.',
        },
        {
          id: 'exam-03-bennett-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do in response to Bennett’s condition during the telehealth session?',
          options: [
            'Ask his wife to stimulate him and recheck respirations in five minutes while the counselor calls the urgent-care prescriber, because confirming whether the pain-pill dose was therapeutic should precede emergency opioid-reversal measures',
            'Direct immediate activation of emergency medical services, have his wife administer available naloxone as trained while following dispatcher guidance, maintain contact, and ensure a direct handoff',
            'Have his wife administer naloxone and drive Bennett to the emergency department if he becomes more alert, because avoiding an ambulance may reduce delay and protect the confidentiality of his substance-use treatment',
            'Tell his wife not to give naloxone because it will not reverse benzodiazepines, place Bennett on his side, and remain connected while monitoring breathing until the prescribed opioid is likely to wear off',
          ],
          correctAnswer: 1,
          explanation: 'Markedly reduced responsiveness, approximately seven shallow breaths per minute, gray lips, and recent combined benzodiazepine and opioid exposure indicate a life-threatening emergency. The counselor should direct the wife to call emergency services immediately, use available naloxone according to her training and dispatcher instructions because opioid effect may be contributing, follow emergency guidance for positioning or rescue support, remain connected when feasible, and facilitate a direct handoff. Response must not wait for dose verification or another respiratory count. Naloxone can restore opioid-related breathing even though it does not reverse benzodiazepines and may require repeat dosing by trained responders. A temporarily improved person still needs emergency evaluation and should not be transported by an untrained family driver. Monitoring at home risks fatal deterioration.',
        },
      ],
    },
  ],
};
