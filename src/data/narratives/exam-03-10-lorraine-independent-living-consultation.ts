import type { Narrative } from "./types";

export const lorraineIndependentLivingConsultationNarrative: Narrative = {
  id: 'exam-03-10-lorraine-independent-living-consultation',
  title: 'Lorraine — Independent Living Consultation',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [9, 8, 8],

  clientInfo: {
    age: 72,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender woman',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black/Jamaican American',
    relationshipStatus: 'Widowed; two adult children',
    setting: 'Outpatient counseling clinic receiving a geriatric primary-care referral',
    payment: 'Medicare',
    typeOfCounseling: 'Individual counseling with consent-limited family, medical, and neuropsychological coordination',
    provisionalDiagnosis: 'Mild Neurocognitive Disorder, provisionally due to multiple etiologies: G31.84',
  },

  presentingProblem: `Lorraine H., a 72-year-old retired school administrator, agrees to an evaluation after her primary-care clinician receives concerns from Lorraine's daughter. Lorraine lives alone, drives, cooks, manages medication, attends church, and handles her finances. She says the appointment is “to calm everybody down,” not because she needs supervision.

During the past year, Lorraine has repeated several stories, missed two appointments, paid one utility bill twice, and received two late notices. She now uses automatic payments and a written calendar. Once she left soup heating until a smoke alarm sounded; she had gone to the porch to answer a call. Three months ago, leaving an unfamiliar medical complex, she drove in the wrong direction for twenty minutes before using navigation. Her daughter also noticed two new scrapes on Lorraine's car. Lorraine recalls one scrape from a narrow garage and cannot explain the other. She has not become lost in her neighborhood or had a collision involving another person.

Lorraine's husband died fourteen months ago. She reports loneliness, reduced appetite, lighter sleep, and less interest in gardening, especially near anniversaries. She still enjoys church, music, her grandchildren, and weekly cards. Low mood occurs several days per week rather than most of nearly every day. She denies pervasive worthlessness, psychomotor change, sustained inability to experience pleasure, suicidal ideation, mania, psychosis, or problematic substance use. She attributes every memory lapse to grief; her daughter attributes every disagreement to dementia.

Medical history includes hypertension, type 2 diabetes, urinary urgency, hearing loss, and a remote transient ischemic attack. Lorraine inconsistently wears hearing aids. She takes prescribed medications independently but also uses diphenhydramine most nights and an over-the-counter sleep product whose ingredients she cannot name. No recent laboratory work, medication review, brain imaging, or formal cognitive evaluation is available. There is no current fever, intoxication, altered consciousness, or rapidly fluctuating attention.

A brief office cognitive screen completed at primary care fell below its referral threshold, with weaknesses in delayed recall and set shifting. The record notes that Lorraine forgot her hearing aids and became irritated during testing. Her clinician appropriately documented that the result was a screen, not a diagnosis. Lorraine completed college in Jamaica, immigrated at age 25, and has used English professionally for decades.

Lorraine's daughter wants the counselor to certify that Lorraine cannot manage money or drive. Lorraine believes her daughter wants control of the family home. A nephew has recently begun helping with groceries and online banking. Lorraine plans to add him as a joint account holder because “he is the only one who treats me like an adult.” She can describe joint ownership generally but has not reviewed withdrawal rights, alternatives, or how the change would affect her estate.` ,

  mentalStatusObservation: `Lorraine is well groomed, alert, and fully oriented. Speech is fluent, with two word-finding pauses. Mood is “annoyed but lonely”; affect is reactive and appropriate. Thought process is linear. No psychosis or intoxication is evident. She recalls the purpose of the visit and recent public events but repeats one detail after thirty minutes. Attention is sustained in conversation. Insight is partial: she recognizes compensatory strategies help but sees family concern as entirely self-interested. Judgment is adequate for routine choices; complex financial and driving decisions require further assessment.` ,

  familyHistory: `Lorraine has a daughter who lives forty miles away and a son overseas. Her nephew visits several times weekly. Family members disagree about whether he is helpful or opportunistic. Lorraine has not executed a financial power of attorney and has no court-appointed guardian.

Lorraine describes independence as hard won after immigration and widowhood. She expects elders to be consulted, not managed, and recalls her own mother losing meaningful choices once relatives labeled her confused. She also acknowledges that refusing all help can become a matter of pride. The counselor must neither romanticize family involvement nor treat disagreement, age, or cognitive screening as proof of incapacity.` ,

  workHistory: `Lorraine retired voluntarily five years ago after twenty-eight years in education. She continues to lead a church scholarship committee but recently asked another member to track deadlines. Her financial and organizational baseline was unusually strong, making subtle change meaningful even though she remains independent. She receives a pension and Social Security, owns her home, and has substantial savings.` ,

  intakeSessionSummary: `No diagnosis or global capacity conclusion is established at intake. Assessment must reconstruct the course and functional effect of cognitive, mood, sleep, sensory, medical, and medication factors using Lorraine's account, appropriate testing, records, and authorized collateral. A low screener score cannot determine etiology, driving fitness, financial capacity, or need for guardianship.

Lorraine signs an authorization allowing her daughter to provide observations but not receive diagnosis or treatment information. She authorizes coordination with primary care and agrees to discuss neuropsychological evaluation. The counselor explains that capacity is decision specific, may improve with supports, and is not synonymous with a neurocognitive diagnosis.` ,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-lorraine-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which initial assessment strategy best addresses Lorraine’s presentation?',
          options: [
            'Repeat the same cognitive screen with hearing aids, diagnose according to the corrected score, and use instrumental-activity failures to determine whether the disorder is mild or major',
            'Treat grief and sleep disturbance for eight weeks before pursuing cognitive evaluation, because depression-related cognitive symptoms must improve before a neurocognitive disorder can be assessed validly',
            'Establish timeline and baseline, assess mood, delirium, medications, sleep, sensory and medical factors, examine functional independence, and obtain authorized collateral and specialty evaluation',
            'Refer directly for a legal competency evaluation because conflicting family reports, financial change, driving concerns, and a low screening result place diagnosis outside a counselor’s role',
          ],
          correctAnswer: 2,
          explanation: 'A longitudinal, multi-source, culturally and sensorily appropriate assessment must integrate medical and medication contributors, mood, sleep, hearing, delirium, objective change, and functional independence. A repeated screen may add data but cannot establish diagnosis, etiology, capacity, or driving fitness. Treating grief first could delay reversible or progressive findings. Legal competency referral is premature; clinical capacity is decision specific, and the counselor can coordinate assessment without independently assigning neurological etiology.',
        },
        {
          id: 'exam-03-lorraine-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'Lorraine says the referral is another attempt to take control from an older Black woman. What is the best response?',
          options: [
            'Acknowledge the threat to autonomy and possible bias, ask what outcomes Lorraine wants, and propose examining specific abilities and risks while preserving her authority wherever possible',
            'Reassure Lorraine that the counselor will not involve family or question independent living unless medical testing proves dementia, because trust must precede any safety intervention',
            'Explain that her professional history may make ordinary age-related decline feel especially threatening, then redirect to objective testing so family conflict does not distort the evaluation',
            'Validate her concern by allowing Lorraine to select which cognitive findings may be documented, while limiting assessment to the goals she considers unrelated to driving or finances',
          ],
          correctAnswer: 0,
          explanation: 'This response validates concerns about age, race, and lost authority without promising a conclusion or abandoning safety assessment. Specific decisions, supports, values, and least-restrictive options make collaboration concrete. Dementia is not the threshold for all safety action, so reassurance is inaccurate. Interpreting Lorraine before exploring her experience risks dismissal. She directs goals and consent, but cannot require inaccurate documentation or omission of clinically relevant risk.',
        },
        {
          id: 'exam-03-lorraine-q3',
          questionNumber: 3,
          domain: 'Professional practice and ethics',
          stem: 'Lorraine’s daughter leaves detailed driving observations and asks whether Lorraine has dementia. What should the counselor do under the signed authorization?',
          options: [
            'Return the call and provide the provisional differential without session details, because the authorization permits the daughter’s participation in assessment and the driving concern affects public safety',
            'Refuse to receive or document the information unless Lorraine expands the authorization, because one-way collateral creates an unfair clinical record that Lorraine cannot meaningfully challenge',
            'Confirm only that Lorraine is a client, collect the observations, and disclose whether urgent driving action is recommended while withholding diagnosis until evaluation is complete',
            'Receive relevant observations without disclosing protected information, clarify the one-way boundary, evaluate reliability, and discuss the collateral and its implications with Lorraine',
          ],
          correctAnswer: 3,
          explanation: 'The daughter may provide information but may not receive diagnosis, attendance confirmation, treatment content, or recommendations. The counselor can listen, clarify the boundary, document source and context, assess reliability, and discuss relevant concerns with Lorraine. Driving concern does not automatically authorize reciprocal disclosure; an exception needs its own basis. Refusing collateral wastes Lorraine’s permission, while confirming client status or a recommendation exceeds it.',
        },
        {
          id: 'exam-03-lorraine-q4',
          questionNumber: 4,
          domain: 'Counseling skills and interventions',
          stem: 'How should the counselor explore Lorraine’s capacity to add her nephew as a joint account holder?',
          options: [
            'Use the cognitive-screen cutoff and recent late payments to estimate financial capacity, then refer to an attorney only if the two sources lead to different conclusions',
            'Meet privately, optimize hearing and comprehension, and assess whether she can communicate a choice, understand and appreciate consequences, reason about alternatives, and express consistent values',
            'Ask Lorraine to delay the change until neuropsychological results are available, because proceeding while diagnostic uncertainty remains would make any consent legally vulnerable',
            'Have Lorraine explain the plan with her daughter and nephew present, because agreement among interested relatives is the most reliable evidence that the decision is informed and voluntary',
          ],
          correctAnswer: 1,
          explanation: 'Decision-specific capacity includes communicating a choice, understanding information, appreciating personal consequences, and reasoning among alternatives. Hearing, privacy, complexity, values, and supports should be optimized first. A cognitive score and bill errors cannot substitute for this assessment, and diagnostic uncertainty does not suspend choice. Relatives may offer information, but joint presence can conceal coercion and cannot establish that Lorraine is deciding voluntarily.',
        },
      ],
    },
    {
      sessionLabel: 'Sixth week',
      // Recommended pacing: ~9 minutes
      sectionNarrative: `With Lorraine's authorization, geriatric primary care reviews medication, sensory, metabolic, vascular, and sleep factors. Diphenhydramine and the unidentified sleep product are discontinued under medical guidance. Blood count, metabolic panel, thyroid testing, vitamin B12, and urinalysis show no explanation for an acute confusional state. Hearing aids are adjusted. Brain imaging shows chronic small-vessel ischemic change without acute lesion. Lorraine is referred for sleep-apnea evaluation and vascular-risk management.

In culturally informed neuropsychological testing completed with hearing accommodations, Lorraine shows modest decline from estimated prior ability in delayed learning and executive switching. Effort is adequate. Depression measures show mild symptoms that do not explain the pattern. Basic self-care is intact. She still cooks, takes medication correctly, travels familiar routes, shops, and manages routine transactions. Calendars, automatic payments, written steps, and extra time preserve instrumental independence. The evaluator supports Mild Neurocognitive Disorder, with vascular and other contributors under evaluation, and does not establish a specific degenerative disease.

Daily mood records show grief-related sadness and reduced appetite but no sustained two-week period of pervasive depressed mood or anhedonia and no suicidal ideation. Anxiety centers on family conflict and evaluation rather than excessive worry across domains. Sleep improves after medication changes and routine adjustment but remains intermittently disrupted.

Lorraine does not add her nephew to the account. During a private session, she discloses giving him $9,000 for a business after he repeatedly said she owed him for helping. Bank alerts then showed three withdrawals totaling $3,400 using her card. Lorraine authorized grocery purchases but not cash withdrawals. The nephew said he would stop helping and “let your daughter put you in a home” if she reported him. Lorraine asks the counselor to keep this private because she fears family rupture. She can identify the unauthorized transactions, wants the card blocked, and understands that a report may anger him.

For this case, state law designates licensed counselors as mandated reporters when they have reasonable cause to suspect financial exploitation of an adult age 60 or older. Proof and a finding of incapacity are not required. A report must be made promptly to Adult Protective Services using the minimum necessary information; the client should be informed when doing so will not increase danger.` ,
      questions: [
        {
          id: 'exam-03-lorraine-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnostic formulation is best supported at this point?',
          options: [
            'Major Depressive Disorder with cognitive impairment, because bereavement, appetite loss, insomnia, reduced gardening, and variable effort explain both the subjective and objective decline',
            'Mild Neurocognitive Disorder, provisionally involving multiple contributors, because modest objective decline requires compensatory strategies but does not substantially eliminate independent functioning',
            'Major Neurocognitive Disorder, possible vascular etiology, because financial errors, unsafe cooking, exploitation vulnerability, and driving uncertainty establish loss of instrumental independence',
            'Delirium due to medication effects, because anticholinergic sleep aids, variable memory, and vascular disease can produce cognitive findings even when alertness appears normal during appointments',
          ],
          correctAnswer: 1,
          explanation: 'History and adapted testing support modest decline, while extra effort and compensatory tools preserve independence—the pattern of Mild Neurocognitive Disorder. Etiology remains provisional because vascular, sleep, medication, sensory, and degenerative contributors need follow-up. Grief symptoms neither meet major-depression criteria nor explain the profile. Errors create risk but not the dependence required for Major Neurocognitive Disorder. Delirium’s acute, fluctuating disturbance in attention and awareness is absent.',
        },
        {
          id: 'exam-03-lorraine-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which plan best integrates Lorraine’s diagnosis, preserved abilities, modifiable contributors, and goals?',
          options: [
            'Begin dementia-oriented caregiver management, transfer finances to her daughter, and restrict independent activities until repeat testing shows that cognitive performance has stabilized',
            'Focus counseling on grief and family communication while primary care monitors cognition annually, because adding formal supports now may reinforce disability and increase family conflict',
            'Refer for guardianship and driving cessation while treating vascular risks, because early legal protection prevents exploitation and accidents before mild impairment progresses',
            'Use compensatory tools and psychotherapy, coordinate medical, sensory and sleep care, strengthen chosen financial and transportation safeguards, and monitor cognition and function longitudinally',
          ],
          correctAnswer: 3,
          explanation: 'This plan supports independence while reducing risk through memory tools, psychotherapy, medical and sleep coordination, hearing and vascular care, chosen supports, financial safeguards, transportation planning, and monitoring. A mild diagnosis does not justify transferred control, guardianship, or universal restriction. Counseling alone misses medical and functional contributors. Least-restrictive supports preserve autonomy rather than reinforce disability. It can adjust as functioning changes.',
        },
        {
          id: 'exam-03-lorraine-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do first after Lorraine privately describes the nephew’s conduct?',
          options: [
            'Privately assess danger and coercion, counter blame, support urgent account protection, and collaborate on the required report and immediate safety plan',
            'Invite the nephew to explain the withdrawals before involving outside systems, because Lorraine retains capacity and a family misunderstanding is less restrictive than an abuse investigation',
            'Ask Lorraine to call her daughter and transfer financial control during the session, because stopping further access takes priority over preserving Lorraine’s choice of support person',
            'Complete a formal financial-capacity screen before discussing protective action, because reporting a voluntary gift as exploitation could undermine Lorraine’s autonomy and therapeutic trust',
          ],
          correctAnswer: 0,
          explanation: 'First clarify danger, access, threats, dependence, unauthorized activity, and safe contacts. Validation counters shame; account protection can limit loss. Explain and plan the required report collaboratively when safe, although consent is not its legal basis. Confronting the nephew may increase danger or permit evidence to disappear. The daughter gains no automatic control, and neither incapacity nor a completed investigation is required before responding.',
        },
        {
          id: 'exam-03-lorraine-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'Lorraine understands the situation but refuses an Adult Protective Services report. What is the counselor’s best action under the stated law?',
          options: [
            'Honor the refusal because a capable adult may choose financially risky relationships, document informed refusal, and report only if later evidence shows she cannot protect herself',
            'Seek an emergency guardianship order before reporting, because Adult Protective Services should not investigate a capable adult over her objection without judicial authorization',
            'Make the prompt mandated report with minimum necessary information, explain the action and continuing choices when safe, document the basis, and continue collaborative safety planning',
            'Report the nephew to police and the bank instead of Adult Protective Services, because confirmed unauthorized withdrawals convert reasonable suspicion into a criminal matter outside counseling',
          ],
          correctAnswer: 2,
          explanation: 'The stated threshold is reasonable suspicion, not incapacity or consent. The counselor must report promptly, limit disclosure, document the basis, inform Lorraine when safe, and preserve her role in later choices. Capacity does not cancel the duty, and guardianship is neither prerequisite nor proportionate. Police or bank contact may supplement safety planning but cannot replace the specified Adult Protective Services report.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth week',
      // Recommended pacing: ~8 minutes
      sectionNarrative: `Adult Protective Services accepts the report. With Lorraine's participation, her bank blocks the card, documents the unauthorized withdrawals, and adds a trusted-contact alert without transferring account ownership. The nephew stops visiting. Lorraine remains angry that the counselor reported but also says the threats had frightened her.

Six weeks later, Lorraine arrives for a morning appointment markedly different from baseline. She cannot sustain attention long enough to follow a question, alternates between drowsiness and agitation, misidentifies the office as a school, and reaches for insects that are not present. She was organized at church two days earlier. Her daughter reports new urinary frequency, poor fluid intake, and a fall overnight. Lorraine has a temperature of 101.2°F and cannot reliably describe what medication she took. The counselor has no evidence that this represents gradual progression.

Emergency medical evaluation identifies a urinary infection, dehydration, and delirium superimposed on her prior cognitive impairment. After treatment, attention and orientation return near the documented baseline. Repeat cognitive interpretation is deferred until she is medically stable.

Once recovered, a driver-rehabilitation specialist reviews the unexplained car damage, two newly disclosed near misses, slowed hazard response, and an on-road evaluation. The specialist recommends that Lorraine stop driving. Lorraine states that she will drive her grandson forty miles that afternoon because “a test cannot take my keys.” She rejects her daughter's offered ride and has immediate access to the car.

For this case, the jurisdiction does not require a report based merely on age or diagnosis. It permits a narrowly tailored disclosure to the motor-vehicle agency or emergency authorities when documented impairment creates a clear and substantial danger of serious harm through imminent driving and reasonable voluntary risk-reduction efforts have failed. Clinic policy requires supervisor or legal consultation when feasible and disclosure of only the information necessary to address the danger.` ,
      questions: [
        {
          id: 'exam-03-lorraine-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best response to Lorraine’s abrupt change at the twelfth-week appointment?',
          options: [
            'Administer the prior cognitive screen and compare scores before deciding whether the change is delirium, progression to major impairment, or distress about the protective-services report',
            'Use grounding, hydration, and family orientation cues in the office, then reassess after thirty minutes because fluctuating attention can temporarily improve without emergency intervention',
            'End outpatient treatment and refer for dementia placement evaluation, because hallucinations, disorientation, a fall, and inability to report medications show that independent living has failed',
            'Treat this as a possible medical emergency, arrange urgent evaluation and direct handoff, and avoid attributing the abrupt change to her prior diagnosis',
          ],
          correctAnswer: 3,
          explanation: 'Acute onset, fluctuating attention and arousal, disorientation, visual phenomena, fever, a fall, urinary symptoms, and recent baseline functioning suggest delirium or another emergency. Arrange urgent evaluation, safe transport, relevant information transfer, and direct handoff. Testing must not delay care, and office grounding is insufficient. Delirium superimposed on mild impairment does not establish irreversible progression or need for placement. Recovery guides later planning.',
        },
        {
          id: 'exam-03-lorraine-q10',
          questionNumber: 10,
          domain: 'Professional practice and ethics',
          stem: 'After recovery, how should the counselor respond to Lorraine’s stated plan to drive her grandson that afternoon?',
          options: [
            'Report the Mild Neurocognitive Disorder diagnosis immediately to the motor-vehicle agency, because an on-road recommendation removes the usual confidentiality protection for any licensed older driver',
            'Assess immediacy, review the evidence, attempt a voluntary no-driving and transportation plan, consult as feasible, and use the permitted minimum disclosure if the substantial imminent danger remains',
            'Respect Lorraine’s decision because she has not been adjudicated incapacitated, document the specialist’s advice, and revisit alternatives after the planned trip if no accident occurs',
            'Ask her daughter to take the keys without Lorraine’s consent and notify the grandson’s parent, because family action is less restrictive than disclosing health information to an agency',
          ],
          correctAnswer: 1,
          explanation: 'Risk rests on driving performance, the on-road recommendation, immediate access, a long trip, and a child passenger—not age or diagnosis. Seek voluntary restriction and transportation, involve authorized supports, consult under policy, and use only the permitted minimum disclosure if imminent danger persists. Adjudicated incapacity is unnecessary. Secret key removal may escalate conflict, while automatic diagnostic reporting exceeds the stated rule.',
        },
        {
          id: 'exam-03-lorraine-q11',
          questionNumber: 11,
          domain: 'Treatment planning',
          stem: 'Which revised plan is most appropriate after Lorraine’s delirium resolves?',
          options: [
            'Interpret the episode as evidence that mild impairment is progressing, arrange daily family supervision, and repeat neuropsychological testing immediately to determine whether guardianship is now indicated',
            'Return to the original plan unchanged because delirium was medically reversible and should not influence the established cognitive diagnosis, supports, or future safety monitoring',
            'Reestablish medical baseline, review recurrence risks, reassess cognition later, continue least-restrictive cognitive and financial supports, implement transportation alternatives, and update the safety plan',
            'Suspend psychotherapy until neurology determines etiology, because counseling goals cannot be revised responsibly while vascular disease, delirium history, and possible degeneration remain unresolved',
          ],
          correctAnswer: 2,
          explanation: 'The plan separates a reversible episode from the longitudinal condition while addressing the vulnerability it revealed. Medical follow-up, recurrence prevention, delayed reassessment, cognitive and exploitation supports, transportation, mood work, and warning signs can preserve autonomy. Delirium neither proves progression nor justifies guardianship, but it cannot be ignored in future planning. Etiologic uncertainty does not require suspending psychotherapy. Supports remain adjustable.',
        },
        {
          id: 'exam-03-lorraine-q12',
          questionNumber: 12,
          domain: 'Core counseling attributes',
          stem: 'Lorraine says the exploitation report and driving response prove the counselor never respected her. What is the best reply?',
          options: [
            'Acknowledge the losses of privacy and control, explain the specific duties without defensiveness, distinguish protective actions from global incapacity, and invite Lorraine to renegotiate client-owned goals',
            'Apologize for damaging trust and offer to exclude family, protective services, and driving from future sessions unless Lorraine independently raises them, restoring her control over treatment scope',
            'Review the objective evidence supporting both actions so Lorraine can see that the counselor’s decisions were clinically correct, then ask whether she wishes to continue treatment',
            'Emphasize that mandated action is not a therapeutic choice and redirect to coping with cognitive decline, because debating completed legal duties may reinforce anger and treatment resistance',
          ],
          correctAnswer: 0,
          explanation: 'Repair begins by recognizing the impact of actions Lorraine opposed. Transparent explanation can coexist with humility and a distinction between targeted duties and global incapacity. Renegotiating goals restores agency without promising to ignore future obligations. Excluding relevant subjects would create unsafe treatment. Proving correctness before addressing harm is defensive, while labeling the rupture resistance dismisses a legitimate experience. Curiosity matters.',
        },
      ],
    },
  ],
};
