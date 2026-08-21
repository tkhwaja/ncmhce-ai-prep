import type { Narrative } from "./types";

export const mireyaCyclicalMoodConsultationNarrative: Narrative = {
  id: 'exam-03-08-mireya-cyclical-mood-consultation',
  title: 'Mireya — Cyclical Mood Consultation',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [7, 7, 6],

  clientInfo: {
    age: 36,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender woman',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Mexican American',
    relationshipStatus: 'Married; one school-age child',
    setting: 'Outpatient counseling practice receiving a referral from primary care',
    payment: 'Commercial health insurance',
    typeOfCounseling: 'Individual counseling with authorized medical and psychiatric coordination',
    provisionalDiagnosis: 'Premenstrual Dysphoric Disorder: F32.81',
  },

  presentingProblem: `Mireya L., a 36-year-old operations manager, requests evaluation for “either PMDD or bipolar disorder.” For approximately 14 months, she has noticed periods of marked irritability, rapid mood shifts, hopelessness, anxiety, rejection sensitivity, poor concentration, fatigue, food cravings, insomnia, bloating, and breast tenderness. She believes symptoms begin seven to ten days before menstruation and improve within several days after bleeding starts. Her evidence is a phone calendar in which she entered arguments, absences, and menstrual dates after they occurred; she did not record symptoms daily or during well periods.

During these episodes, a delayed reply from her supervisor can feel like impending termination, ordinary noise becomes intolerable, and a minor household disagreement can become proof that her marriage is failing. Last month she sent a confrontational email to three executives, left work early, and cried in her car. Three days after menstruation began, she apologized, revised the proposal effectively, and felt “like I had my judgment back.” Her husband says the change seems abrupt, but he also says attributing conflict to hormones lets Mireya avoid responsibility. She fears both being dismissed and using a diagnosis to excuse harm.

Today is eight days after the onset of menstruation. Mireya reports normal mood, interest, energy, sleep, concentration, and appetite. She feels embarrassed about the prior week but not depressed. She denies current suicidal ideation. During two recent premenstrual episodes, however, she thought her family might be better without her and briefly imagined driving through a highway barrier. She denies selecting a location, rehearsing, or intending to act. She did not tell anyone because the thoughts ended after menstruation. There is no history of suicide attempt or self-injury.

Seven years ago, following childbirth, Mireya experienced a five-month depressive episode with pervasive sadness, anhedonia, guilt, insomnia, and passive death wishes across the menstrual cycle. Psychotherapy and family support helped, and she reports full remission. No other clearly sustained depressive episode is established. Current work stress is present all month, but she reports that emotional symptoms are qualitatively different during the suspected premenstrual interval.

The bipolar differential cannot be dismissed. Mireya's mother has bipolar I disorder and was hospitalized for mania. Mireya describes two or three “reset days” after some menstrual periods when she cleans, catches up on work, and speaks more confidently. She sleeps six to seven hours rather than eight and feels relieved, not exhausted. She denies grandiosity, pressured speech, racing thoughts, risky behavior, psychosis, or consequences during those days. At age 25, after receiving a promotion, she spent $1,200 on a certification and worked late for three nights; the course was completed and no broader episode is recalled. A detailed lifetime mood history and collateral information are still needed.

Medical and hormonal contributors also remain open. Mireya had postpartum thyroiditis that resolved, has recently experienced occasional heat intolerance and palpitations, and changed from a hormonal intrauterine device to a copper device 16 months ago. Menstrual cycles now range from 26 to 32 days. She takes an over-the-counter “hormone support” supplement but cannot identify every ingredient. No current laboratory or gynecologic evaluation has been completed. She drinks one or two alcoholic beverages weekly, uses no cannabis or stimulants, and denies other substance use.

Mireya asks the counselor to tell her primary-care clinician to prescribe fluoxetine only before menstruation because a friend uses it that way. She worries that daily medication will dull her good weeks and fears antidepressants because of her mother's bipolar history. The counseling role includes assessment, psychotherapy, authorized coordination, and monitoring; no formal medication evaluation has yet occurred.` ,

  mentalStatusObservation: `Mireya arrives punctually and is neatly dressed. She is alert, fully oriented, and engaged. Speech is fluent and normally paced. Mood is “fine today, worried about next month”; affect is full and congruent. Thought process is linear and reflective. There is no psychosis, mania, intoxication, or current suicidal or homicidal intent. She can describe the effect of her behavior on others without denying the severity of her premenstrual distress. Insight is good regarding uncertainty but vulnerable to retrospective certainty when recalling recent conflicts. Judgment is intact during the interview.` ,

  familyHistory: `Mireya lives with her husband and their seven-year-old child. Her husband is willing to participate but wants the counselor to confirm whether symptoms are “real” before changing family routines. Mireya's mother has bipolar I disorder with multiple hospitalizations; an aunt has recurrent major depression. No family suicide is reported.

Mireya's parents immigrated from Mexico. She recalls being told that menstruation was private and that capable women should “aguántate”—endure without burdening others. She values resilience but believes this message delayed help. She also resists stereotypes that Latina women are emotionally volatile. Assessment must examine culture, gendered dismissal, and family beliefs without using them to confirm or disconfirm a biological or psychiatric formulation.` ,

  workHistory: `Mireya has worked for a regional logistics company for nine years and was promoted twice. Performance is strong during most weeks. Over the past year, six documented conflicts, four unscheduled absences, and two abandoned presentations occurred near dates she retrospectively identifies as premenstrual. She also faces a demanding reorganization throughout the month. Her supervisor has requested a meeting but has not demanded diagnosis or medical documentation. Mireya wants to prevent another damaging email while preserving her leadership role.` ,

  intakeSessionSummary: `No diagnosis is confirmed at intake. Assessment must compare mood and impairment across cycle phases while also examining lifetime episodes, suicide risk, substances, medications, supplements, sleep, medical factors, and authorized collateral information. Mireya agrees to record daily rather than only after conflicts so that remembered timing can be compared with observed course.

Mireya agrees to discuss involving her husband in a limited safety role but does not authorize disclosure of all session content. She wants the counselor to address risk without assuming that every difficult thought requires hospitalization.` ,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-mireya-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which assessment approach best addresses the principal diagnostic uncertainty?',
          options: [
            'Assign a provisional premenstrual diagnosis from the calendar, begin treatment, and use response during the next cycle as diagnostic confirmation',
            'Collect daily symptoms and impairment across at least two cycles while assessing lifetime mood episodes, risk, substances, treatment exposures, and medical factors',
            'Compare a depression measure before menstruation with a mania measure after menstruation, then diagnose the condition producing the larger score change',
            'Prioritize the family bipolar history and obtain psychiatric evaluation before asking Mireya to track symptoms that could delay needed mood-stabilizing treatment or distort a future medication response',
          ],
          correctAnswer: 1,
          explanation: 'Prospective daily ratings across at least two symptomatic cycles are central because retrospective reports often overestimate timing and omit baseline symptoms. The record must capture symptoms, impairment, onset, remission, and asymptomatic intervals while a separate longitudinal assessment addresses major depression, spontaneous hypomania or mania, suicide risk, substances, medications, supplements, and medical or reproductive factors. Treatment response cannot confirm a diagnosis because several conditions may improve nonspecifically. Comparing two scale peaks substitutes instruments for formulation. Family bipolar history raises the need for careful assessment and prescriber caution but does not justify diagnosing or treating bipolar disorder before evidence of an episode.',
        },
        {
          id: 'exam-03-mireya-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'Mireya says previous clinicians called her symptoms “just hormones,” while relatives told her to endure quietly. What is the best response?',
          options: [
            'Explain that severe cyclical impairment is biologically based and therefore different from culturally reinforced emotional suppression or ordinary menstrual discomfort',
            'Ask which clinician dismissed her, because documenting gender bias should precede assessment of whether the symptoms actually follow a menstrual pattern',
            'Emphasize that resilience and symptom expression can coexist, then invite her husband to verify whether her account is accurate across several cycles before defining treatment goals',
            'Validate the dismissal and pressure she experienced, remain uncertain about cause, and explore what respectful assessment and accountability would mean to her',
          ],
          correctAnswer: 3,
          explanation: 'The counselor can validate harm from dismissal and gendered pressure without prematurely confirming a biological diagnosis. Asking how Mireya wants both suffering and responsibility held in treatment supports collaboration and cultural humility. Declaring the problem biologically based exceeds the available evidence and creates a false separation between biology and culture. Investigating a prior clinician before addressing present needs centers proof of bias over the client. Husband collateral may later help with consent, but requiring him to verify her experience repeats invalidation and shifts authority away from Mireya.',
        },
        {
          id: 'exam-03-mireya-q3',
          questionNumber: 3,
          domain: 'Counseling skills and interventions',
          stem: 'How should the counselor respond to Mireya’s premenstrual thoughts of driving through a highway barrier despite her denial of current ideation?',
          options: [
            'Assess the prior thoughts, intent, planning, access, warning signs, and protective factors now, then create a phase-informed safety plan with escalation thresholds',
            'Document passive cyclical ideation and repeat the assessment when symptoms return, because current denial prevents an accurate estimate of acute intent',
            'Ask Mireya to avoid driving during the predicted premenstrual week and contact the counselor if thoughts persist beyond the onset of menstruation',
            'Arrange immediate hospitalization because recurrent method imagery, recurrence across two cycles, and family responsibility outweigh current denial and the absence of preparatory behavior',
          ],
          correctAnswer: 0,
          explanation: 'Risk assessment is indicated now even though Mireya is currently asymptomatic. The counselor should clarify the form, frequency, controllability, intent, planning, access, past behavior, precipitants, protective factors, and changes across the cycle, then make a collaborative plan tied to early warning signs and explicit urgent-care thresholds. Waiting for recurrence loses a prevention opportunity and treats current denial as an assessment barrier. Avoiding driving may become one agreed safety measure, but it cannot replace comprehensive assessment or make persistence after menstruation the danger threshold. The available facts do not automatically require hospitalization; disposition follows individualized risk findings.',
        },
      ],
    },
    {
      sessionLabel: 'Tenth week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Mireya completes daily symptom and impairment ratings for two full cycles rather than recording only difficult days. In cycle one, marked affective lability, irritability, depressed mood, anxiety, diminished interest, concentration difficulty, fatigue, increased appetite, insomnia, and physical symptoms rise during the final eight days before menstruation. Seven symptoms reach clinically significant severity, interfere with work and marriage, begin improving on the second day of bleeding, and are minimal by day four. Ratings remain absent or mild through the postmenstrual week.

Cycle two shows the same organization. Six symptoms become clinically significant during the final seven days, with another work conflict and canceled family event. They remit by the third day after menstruation begins. A midcycle argument produces one evening of moderate distress but no sustained depressive syndrome. Ratings during follicular phases show normal interest, concentration, self-worth, sleep, and functioning. Mireya reports that similar episodes occurred during at least ten of the preceding twelve cycles.

A structured lifetime interview and husband collateral support one remote postpartum major depressive episode but no other pervasive depressive episode. The energetic postmenstrual days involve seven hours of sleep, ordinary catch-up tasks, and no elevated or expansive mood, grandiosity, pressured speech, racing thoughts, unusual sociability, risk, or impairment. The promotion-related spending at age 25 was planned, affordable, and not part of a broader syndrome. No spontaneous hypomanic or manic episode is established, although the strong family history remains clinically important.

Primary care and gynecology review the records with Mireya's authorization. Pregnancy testing, blood count, metabolic studies, and thyroid testing are unremarkable. The clinician finds no evidence that current palpitations represent thyroid disease and does not identify a reproductive disorder that better accounts for the mood pattern. Mireya stops the unverified supplement under medical guidance. Her cycles appear ovulatory despite variation in length.

Mireya and her husband complete a safety plan that identifies sleep disruption, catastrophic relationship conclusions, urge to send final-sounding messages, and highway imagery as warning signs. He will secure medications and offer transportation when the plan is activated, but he does not receive unrestricted access to counseling content. Mireya wants psychotherapy and a medication consultation while retaining responsibility for repairing harm caused during symptomatic periods.` ,
      questions: [
        {
          id: 'exam-03-mireya-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnosis is best supported by the accumulated evidence?',
          options: [
            'Major Depressive Disorder, recurrent, with premenstrual exacerbation, because a prior postpartum episode and current hopelessness establish recurrent depression',
            'Bipolar II Disorder, because familial bipolar illness and recurrent postmenstrual energy follow severe periods of depression and irritability',
            'Premenstrual Dysphoric Disorder, because prospectively confirmed luteal symptoms remit after menstruation and cause marked impairment without another explanatory disorder',
            'Other Specified Depressive Disorder, short-duration depressive episodes, because each mood disturbance lasts less than the duration required for major depression',
          ],
          correctAnswer: 2,
          explanation: 'Two prospective cycles document the required temporal organization, multiple symptoms including core affective symptoms, clinically significant impairment, and clear postmenstrual remission. Retrospective history suggests the pattern occurs in most cycles. The remote postpartum major depression does not make current symptoms recurrent MDD or premenstrual exacerbation because no ongoing depressive disorder is present between luteal episodes. Family history and productive return to baseline do not establish hypomania. Short-duration depression ignores the reproductive timing and full symptom pattern. Medical and substance explanations were assessed rather than assumed absent.',
        },
        {
          id: 'exam-03-mireya-q5',
          questionNumber: 5,
          domain: 'Treatment planning',
          stem: 'Which treatment plan best matches Mireya’s confirmed pattern, impairment, and preferences?',
          options: [
            'Use weekly supportive counseling during well phases and reserve CBT skills for symptomatic days so treatment does not pathologize normal postmenstrual functioning',
            'Treat the remote major depression with standard depression-focused CBT first, then reconsider a cycle-specific plan if symptoms remain after several months',
            'Begin a bipolar relapse-prevention plan and defer antidepressant consultation until family collateral can exclude every possible prior hypomanic episode',
            'Combine prospective monitoring, CBT and behavioral supports, phase-linked safety planning, and referral for individualized pharmacologic or hormonal evaluation',
          ],
          correctAnswer: 3,
          explanation: 'A multimodal plan can use monitoring to anticipate vulnerable days; CBT to address catastrophic appraisals, conflict, and behavioral escalation; sleep, exercise, and routine supports; repair and prevention work during well phases; and a safety plan that activates before risk peaks. A qualified prescriber or gynecologic clinician should review evidence-based pharmacologic and hormonal options in light of bipolar family history and client preferences. Limiting skills to symptomatic days wastes opportunities for rehearsal. Treating a remitted postpartum episode misidentifies the active pattern. Family history requires screening and monitoring, not a bipolar plan or impossible proof that no unremembered episode ever occurred.',
        },
        {
          id: 'exam-03-mireya-q6',
          questionNumber: 6,
          domain: 'Professional practice and ethics',
          stem: 'The prescribing clinician asks whether Mireya should receive continuous or luteal-phase sertraline. What should the counselor do?',
          options: [
            'Recommend luteal dosing because the daily ratings establish symptom-free intervals and Mireya has stated that she wants to avoid medication during well weeks',
            'With authorization, share relevant tracking, risk, history, goals, and behavioral observations while leaving regimen selection and medical monitoring to the prescriber',
            'Decline to discuss the case because responding to a dosing question would create shared responsibility for a medication decision outside counseling scope',
            'Recommend continuous dosing until bipolar disorder is excluded, because consistent exposure makes antidepressant activation easier for the treatment team to detect',
          ],
          correctAnswer: 1,
          explanation: 'Interprofessional collaboration does not require the counselor either to prescribe or to withdraw. With valid authorization, the counselor can provide the prospective pattern, functional impact, suicide-risk information, lifetime history, family history, preferences, and observed response to psychosocial treatment. The prescriber evaluates contraindications, interactions, bipolar risk, medication choice, schedule, dose, and monitoring. A client preference and symptom-free interval do not authorize the counselor to select intermittent dosing. Refusing all communication fragments care. Recommending continuous exposure as a diagnostic test is also a medication decision and could increase risk.',
        },
      ],
    },
    {
      sessionLabel: 'Sixteenth week',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `After completing an independent medication evaluation and reviewing the bipolar family history, a psychiatric nurse practitioner prescribes luteal-phase sertraline. Mireya continues daily ratings and the agreed safety plan. During the first treated cycle, affective symptoms and work impairment decrease substantially. She has mild nausea but no elevated mood, reduced need for sleep, or unusual behavior.

During the second treated cycle, after the fourth dose, Mireya sleeps about three hours on each of three nights and says she is not tired. She speaks rapidly, reports racing ideas, purchases $1,800 in nonrefundable advertising for an undeveloped consulting business, and drafts a resignation letter because she is certain the business will replace her salary within a month. Her husband describes this as a clear departure from baseline. At the counseling appointment she is bright, irritable when interrupted, and distractible. She denies suicidal intent, psychosis, and substance use. The symptoms began before the usual severe premenstrual depression and do not resemble her ordinary postmenstrual catch-up days.

The nurse practitioner subsequently directs the medication plan and the activation resolves over four days. A psychiatric reassessment finds no additional history of spontaneous hypomania or mania. The evaluator explains that antidepressant-associated activation is clinically significant and reopens the bipolar differential, but the available course does not yet establish bipolar II disorder. The two untreated prospective cycles still document a valid premenstrual syndrome. Future pharmacologic or hormonal decisions will remain with psychiatry and gynecology while counseling continues.

Mireya feels betrayed by diagnostic uncertainty. “First people said hormones were imaginary. Then we proved the pattern. Now one reaction means maybe I am bipolar like my mother.” She worries that every period of confidence will be treated as pathology. Her husband wants the counselor to prohibit all future antidepressants and says Mireya should simply take leave during premenstrual weeks.

In the next untreated cycle, Mireya calls during the late luteal phase after a marital argument. She says the highway image returned and reports placing an old bottle containing approximately twenty sedative tablets in her purse. She states, “I do not know whether I will take them after everyone sleeps.” She is alone in a parked car, will not initially give the location, and says menstruation should begin in two days.` ,
      questions: [
        {
          id: 'exam-03-mireya-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do when Mireya presents with decreased need for sleep, rapid speech, racing ideas, and uncharacteristic spending?',
          options: [
            'Continue the session while collecting a formal hypomania measure, then send the score to the prescriber before Mireya takes the next scheduled dose',
            'Explain that improvement from premenstrual depression can feel unusually energetic, and ask her husband to monitor spending until menstruation clarifies the pattern',
            'Assess immediate safety and functioning, coordinate same-day prescriber or psychiatric evaluation, and avoid independently directing medication changes',
            'Diagnose substance/medication-induced bipolar disorder and advise Mireya to stop sertraline immediately because symptom onset followed the fourth dose',
          ],
          correctAnswer: 2,
          explanation: 'The symptoms represent a meaningful departure from baseline and may reflect antidepressant activation, an emerging hypomanic episode, or another cause. The counselor should assess current risk, judgment, driving, spending, psychosis, supports, and ability to follow a safe disposition, then coordinate same-day evaluation by the prescriber or psychiatric service. A scale may supplement but must not delay action. Calling the change normal relief minimizes decreased need for sleep and impaired judgment. The counselor should not make a definitive bipolar diagnosis from temporal association alone or independently order discontinuation; medication instructions and differential assessment belong to the qualified medical professional.',
        },
        {
          id: 'exam-03-mireya-q8',
          questionNumber: 8,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond when Mireya says the reopened bipolar differential means nobody believes the premenstrual pattern?',
          options: [
            'Validate the fear of being disbelieved, explain that new data can modify rather than erase prior evidence, and invite her into the revised formulation',
            'Reassure her that two tracked cycles prove PMDD and that the psychiatric evaluator is considering bipolar disorder only because of defensive medical practice despite the family history and medication reaction',
            'Explain that diagnostic uncertainty protects her from unsafe treatment, then redirect from identity concerns to objective monitoring of sleep and spending',
            'Acknowledge that clinicians may have overemphasized the cycle pattern and offer to restart assessment without using any previous diagnostic labels',
          ],
          correctAnswer: 0,
          explanation: 'The counselor should hold both bodies of evidence: Mireya prospectively demonstrated a premenstrual pattern, and the later activation requires additional caution and assessment. Validating the identity threat and inviting collaboration supports epistemic trust without promising diagnostic certainty. Declaring the PMDD evidence conclusive against all other conditions or attributing psychiatric caution to defensiveness splits the team. Explaining safety without first addressing the rupture sounds corrective and bypasses meaning. Discarding prior data repeats the all-or-nothing logic Mireya fears. A formulation can remain accurate in part while being revised by new information.',
        },
        {
          id: 'exam-03-mireya-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best response to Mireya’s call from the car with sedative tablets and uncertain intent?',
          options: [
            'Use the existing safety plan to obtain a promise that she will not take the tablets, then remain on the phone until her husband can retrieve them',
            'Ask her to drive to the nearest emergency department while the counselor stays connected, because voluntary self-transport preserves autonomy and privacy',
            'Remind her that prior ideation resolved after menstruation, use grounding to reduce intensity, and reassess intent after she returns home with her husband',
            'Maintain contact, obtain her location and access details, activate emergency intervention and support, and complete a direct handoff based on imminent risk',
          ],
          correctAnswer: 3,
          explanation: 'Mireya has a contemplated method, immediate access to pills, uncertain intent, isolation, and reluctance to disclose location. The counselor should maintain engagement while identifying location, ingestion status, other means, and immediate danger; activate emergency or mobile-crisis response according to local procedure; involve an emergency support within confidentiality exceptions; and facilitate a direct handoff. A no-harm promise is not a sufficient intervention. Asking a potentially impaired and suicidal person to drive creates risk. Grounding may support engagement but cannot replace emergency disposition. Predictable cyclical remission is neither guaranteed nor relevant enough to defer response to present imminent risk.',
        },
      ],
    },
  ],
};
