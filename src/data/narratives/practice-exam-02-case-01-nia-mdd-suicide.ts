import type { Narrative } from "./types";

export const niaMddSuicidePracticeExam2Narrative: Narrative = {
  id: "practice-exam-02-case-01-nia-mdd-suicide-risk",
  title: "Nia — Major Depressive Disorder with Suicidal Ideation",
  category: "Depressive Disorders",
  difficulty: "Advanced",
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 37,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Nigerian American, second generation",
    relationshipStatus: "Single; engagement ended six months ago",
    setting: "Outpatient behavioral health clinic receiving an Employee Assistance Program referral",
    payment: "Initial EAP authorization with anticipated transition to insurance",
    typeOfCounseling: "Individual",
    provisionalDiagnosis:
      "Major Depressive Disorder, recurrent episode, severe, without psychotic features, with anxious distress and suicidal ideation: F33.2",
  },

  presentingProblem: `You are a licensed mental health counselor at an outpatient behavioral health clinic that accepts employee assistance program referrals. Your client was encouraged by an EAP coordinator to schedule an appointment after she disclosed to a primary care provider that she had been "thinking about not being here anymore." She also recently received a corrective performance notice at work. At the beginning of intake, she stated, "I need to know what gets back to my employer before I tell you the part that matters."

The client is a 37-year-old Nigerian American woman who works as an inpatient clinical pharmacist at a regional medical center. She has worked there for nine years and was promoted to shift coordinator two years ago. She has historically been highly reliable and is respected for catching medication errors before they reach patients. During the last three months, she has arrived late several times, struggled to complete documentation, and made one near-error while verifying a medication order. Another pharmacist caught the dosage discrepancy before the medication was dispensed, and no patient was harmed. The client stated, "Nobody got hurt. That is supposed to make me feel better. Instead I keep thinking maybe I am no longer safe to be the person people depend on."

She reported four months of depressed mood nearly every day, marked loss of interest in singing, running, cooking, church choir, and social gatherings, early-morning awakening, fatigue, reduced appetite, a 14-pound unintentional weight loss, impaired concentration, indecisiveness, guilt, and feelings of worthlessness. She described spending entire weekends in her apartment with the curtains closed and her phone silenced. She stated, "I do enough to look functional. Then I go home and disappear." Her PHQ-9 at intake is 23, and her GAD-7 is 13, with worry primarily related to job loss, disappointing family, and whether treatment could affect her license.

The current episode developed in the context of several stressors. Six months ago, her fiancé ended their engagement after disclosing another relationship. Nia had already paid deposits for their wedding and publicly announced the engagement within her family and church community. Two months later, she received critical feedback from her pharmacy director about appearing distracted and unavailable to staff. She stated, "At home I was the woman whose marriage disappeared. At work I was still supposed to be the woman who never misses anything." She reports one prior depressive episode during pharmacy school after failing an important licensing examination on the first attempt. She never received counseling or medication then and eventually improved after several months. She denied any history of mania, hypomania, psychosis, psychiatric hospitalization, self-harm, or suicide attempts.

The client lives alone. Her older sister, Adaeze, lives twenty minutes away and is the person she trusts most, although Nia has concealed the severity of her depression from her. Her parents attend a Nigerian Pentecostal church and frequently describe Nia as the dependable daughter who "makes the family proud." Nia still values her faith and misses singing in the church choir, but she has stopped attending because she fears questions about the broken engagement and her appearance. She stated, "People pray for a woman like me to recover her joy. They do not expect her to be thinking the kinds of thoughts I am thinking."

When you asked directly about suicidal ideation, she initially said, "I do not want to traumatize my family." She then disclosed that she has imagined combining leftover opioid tablets from a dental procedure with a bottle of wine in her apartment. She denied ever taking medication from her workplace and denied bringing controlled substances home from work. She stated that the unopened bottle from her own prescription remains in her kitchen cabinet. She also stated, "I know enough pharmacology to make the thought more frightening, not less." At this point in the interview, she has not yet fully described whether she has made preparations, whether she has researched the method, or whether she believes she can stay safe tonight.`,

  mentalStatusObservation: `Your client arrived in clean professional clothing and stated that she had come directly from a scheduled day off rather than from the hospital. Grooming and hygiene were appropriate, though she appeared fatigued and had visibly lost weight compared with the driver's-license photo used at check-in. She was alert and oriented to person, place, time, and situation. Eye contact was guarded when discussing her employer and more limited when discussing suicidal thoughts. Speech was soft, coherent, and slowed, with longer pauses before answering questions about risk. Mood was described as "ashamed and hollow." Affect was constricted and tearful, congruent with content.

Psychomotor activity was slowed; she held her hands tightly together throughout most of the intake. Thought processes were linear and goal-directed. Thought content was notable for hopelessness, excessive guilt, perceived professional failure, shame about the ended engagement, fear of license consequences, and suicidal thinking involving medication and alcohol. There was no evidence of delusions, hallucinations, disorganization, or intoxication. She denied homicidal ideation. She denied elevated or expansive mood, decreased need for sleep accompanied by energy, grandiosity, increased goal-directed behavior, or impulsive spending. Insight was fair; she recognized that she is depressed and at risk but remained ashamed of requiring protection. Judgment was impaired by concealment and ongoing access to medication at home. She denied current alcohol misuse, stating that she typically drinks wine socially less than once per month, but owns wine in her apartment.`,

  familyHistory: `The client is the younger of two daughters born in the United States to Nigerian immigrant parents. Her parents are active in their church and are proud of her educational achievement. She described a close but achievement-oriented family system in which emotional distress is frequently addressed through prayer, encouragement, and practical support rather than direct discussion of mental illness. Her older sister Adaeze is a physical therapist and has historically been emotionally supportive, although Nia often protects her from difficult information. Her mother has experienced periods of anxiety but has never sought formal care. No known family history of bipolar disorder, schizophrenia, suicide attempts, or completed suicide. Her father has hypertension and diabetes. The client has never been married and has no children.`,

  workHistory: `The client completed a Doctor of Pharmacy degree and a hospital pharmacy residency. She has worked as an inpatient clinical pharmacist for nine years and currently coordinates portions of evening shift workflow. Her responsibilities include medication verification, consultation with providers, monitoring high-alert medications, and coaching junior pharmacists. She has not reported misusing or diverting workplace medications, and no allegation of diversion is present. The recent near-error and corrective notice have intensified her fear that depression makes her dangerous or professionally unfit. She is particularly concerned about confidentiality because her employer initiated the EAP referral and because she works around medications.`,

  intakeSessionSummary: `During the initial intake information gathered before treatment disposition is determined, Nia presents with a four-month major depressive syndrome, recurrent history, clinically significant functional decline, and suicidal ideation involving medication and alcohol. She denies manic, hypomanic, psychotic, or substance-use symptoms. She has stated access to her own leftover prescription medication at home and possible work-related access by virtue of her role, while denying any diversion or workplace misuse. She has not yet completed the full suicide inquiry when the first clinical decision questions begin. The counselor must further assess current intent, plan, preparatory behavior, access to means, occupational access considerations, protective factors, ability to remain safe, need for urgent evaluation, confidentiality limits, and appropriate coordination.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "nia-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Nia's symptoms followed the end of an engagement and a workplace performance review. Which formulation is best supported at this point?",
          options: [
            "Adjustment Disorder with depressed mood because the episode followed identifiable stressors and includes work impairment.",
            "Major Depressive Disorder because the breadth, persistence, neurovegetative symptoms, recurrent history, functional impairment, and suicidal ideation exceed an expected stress response.",
            "Occupational burnout with secondary depressive symptoms because errors at work are the most immediate functional concern.",
            "Persistent Depressive Disorder because she describes having struggled privately for years before seeking care.",
          ],
          correctAnswer: 1,
          explanation:
            "Identifiable stressors are relevant, but Nia has a sustained major depressive syndrome with anhedonia, sleep and appetite disturbance, weight loss, guilt, concentration impairment, prior depressive history, and suicidal ideation. Burnout does not account for the full syndrome, and the narrative does not establish the chronic duration required for Persistent Depressive Disorder.",
        },
        {
          id: "nia-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "Nia states that she has imagined combining leftover opioid tablets with wine and works in an inpatient pharmacy. Which assessment step is most appropriate next?",
          options: [
            "Determine whether the prior opioid prescription is expired because outdated medication may be less medically dangerous.",
            "Ask whether her employer has a policy requiring disclosure whenever an employee experiences suicidal ideation.",
            "Clarify current intent, timing, preparatory behavior, home and occupational access to means, reasons for living, and her ability to remain safe today.",
            "Ask her sister to remove medications from the home before discussing occupational medication access, since workplace disclosure could damage trust.",
          ],
          correctAnswer: 2,
          explanation:
            "The stated method and occupational context justify a complete suicide inquiry that includes intent, timing, preparatory behavior, access to means at home and through work, protective factors, and current ability to remain safe. Employer policy, collateral involvement, and means restriction may become relevant after risk is more fully assessed.",
        },
        {
          id: "nia-q3",
          questionNumber: 3,
          domain: "Treatment planning",
          stem: "After further inquiry, Nia reports that last night she searched whether her medication quantity could be lethal, placed the bottle and wine on the counter, stopped when her sister called, and is unsure she can stay safe alone tonight. She is willing to accept help. What is the best immediate plan?",
          options: [
            "Collaboratively arrange same-day emergency or crisis evaluation, involve an agreed support person for transport and means safety, and maintain support while disposition is arranged.",
            "Complete a detailed written safety plan, have her voluntarily surrender the medication to her sister, and schedule urgent outpatient follow-up the next morning.",
            "Initiate involuntary hospitalization because researching and arranging means demonstrate that voluntary collaboration is no longer appropriate.",
            "Arrange urgent psychiatry follow-up and daily family check-ins because she denies a final decision to die.",
          ],
          correctAnswer: 0,
          explanation:
            "Her method research, staging of means, interrupted near-action, accessible means, inability to assure safety tonight, and living alone support immediate same-day higher-level evaluation while using her willingness to collaborate. A safety plan alone is insufficient. Involuntary action may become necessary if she refuses needed care or cannot be protected, but the narrative states she is willing to accept help.",
        },
        {
          id: "nia-q4",
          questionNumber: 4,
          domain: "Core counseling attributes",
          stem: "Nia says, \u201CI dispense medications for a living. I am Nigerian, I am the reliable daughter, and I am supposed to know better than to let my mind get here.\u201D Which response is most therapeutic?",
          options: [
            "\u201CDepression can affect anyone, including highly trained healthcare professionals, so this is not a moral failure.\u201D",
            "\u201CYour family may value strength, but they would rather have you alive than appearing reliable.\u201D",
            "\u201CWe can decide later what anyone else needs to know; right now I need you to agree to the safest plan.\u201D",
            "\u201CIt sounds like your profession and family role are both becoming reasons you believe you are not allowed to need protection right now.\u201D",
          ],
          correctAnswer: 3,
          explanation:
            "The best response reflects the meaning of her professional and family identity without bypassing it through education or persuasion. Safety remains urgent, but attuned validation improves engagement in the safety process. The other responses contain potentially useful truths but move too quickly into correction or action.",
        },
        {
          id: "nia-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: "Before agreeing to crisis evaluation, Nia asks, \u201CWill my hospital know I told you this? I could lose my license.\u201D What is the best response?",
          options: [
            "Tell her that employer notification is required because she works with controlled medications and identified medication as a suicide method.",
            "Explain confidentiality and its safety-related limits, clarify that employer disclosure is not automatic, and discuss only the information-sharing steps necessary for immediate safety and authorized coordination.",
            "Assure her that nothing can be shared with her hospital because suicidal thoughts are protected health information.",
            "Recommend that she self-disclose to employee health immediately so the hospital hears it from her rather than treatment providers.",
          ],
          correctAnswer: 1,
          explanation:
            "She needs accurate information about confidentiality and exceptions while urgent safety planning proceeds. Working around medications raises important safety questions, but it does not automatically establish a need for employer disclosure. Blanket secrecy and directing self-disclosure are also not justified by the current facts.",
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      recommendedTimeMinutes: 8,
      sectionNarrative: `The remainder of the first intake is summarized here for continuity. Nia completed the suicide inquiry described during the first section of this case, including her method research, the medication and wine placed on her kitchen counter, the interrupted sequence when her sister called, and her uncertainty about remaining safe alone that night.

Nia accepted a collaborative plan for same-day crisis evaluation. With her permission, Adaeze transported her and removed the opioid medication and alcohol from the apartment. Following evaluation, Nia participated in a short intensive outpatient stabilization program and began medication management with a psychiatric prescriber. Written releases permitted limited coordination among you, the prescriber, and the IOP team. She returned to weekly outpatient sessions with you following step-down from the program and continues to use an updated safety plan.

At her fourth outpatient session, Nia reported no current intent and no remaining unsecured opioid medication in her apartment. She still experiences brief suicidal images at night, particularly when she reviews work emails or notices bills from the cancelled wedding. She reports following her safety plan by leaving her bedroom, using grounding exercises, and contacting Adaeze when the images become persistent. She stated, "I am not standing at the counter anymore. But I hate that the counter is still in my mind."

Nia reports emotional blunting after starting an antidepressant and worries it may affect clinical judgment at work. She said, "I am less likely to burst into tears, but I also feel slow and flattened. I cannot be verifying medication orders if I do not feel sharp." She has not changed or stopped the medication and has an upcoming appointment with the prescriber.

Her hospital's employee health office has sent a standard form requesting documentation before she returns from medical leave. Nia asks whether you can write that she is "safe to dispense medications" and does not pose a risk. She wants to return, but is afraid that disclosure of suicidal thinking will permanently affect her license or career.

Her sister has also become highly vigilant. Adaeze calls four times each evening and becomes alarmed if Nia does not answer promptly. Nia stated, "She saved my life. How do I tell her I cannot live like a patient under observation forever?" She wants help retaining her sister as a support while reclaiming privacy and independence.`,
      questions: [
        {
          id: "nia-q6",
          questionNumber: 6,
          domain: "Treatment planning",
          stem: "Three weeks later, Nia has completed a voluntary crisis evaluation, participated in short intensive outpatient stabilization, transferred the leftover medication and alcohol out of her apartment, and begun coordinated psychiatric care. She denies current intent but reports brief suicidal images when alone at night. What is the best outpatient focus now?",
          options: [
            "Begin cognitive restructuring of suicidal thoughts because immediate safety was addressed through the crisis program.",
            "Recommend extending intensive outpatient care until she experiences no suicidal images for several weeks.",
            "Continue direct risk reassessment and safety-plan refinement while beginning depression treatment targeting activation, sleep, isolation, and hopelessness in coordination with her care team.",
            "Shift focus to occupational reintegration because remaining thoughts are expected after a crisis and means have been removed.",
          ],
          correctAnswer: 2,
          explanation:
            "After acute stabilization, suicidal content still requires ongoing reassessment, safety planning, and coordinated treatment alongside evidence-based depression work. The narrative does not establish a need for higher care solely because brief images persist, nor does it justify treating safety monitoring as complete.",
        },
        {
          id: "nia-q7",
          questionNumber: 7,
          domain: "Professional practice and ethics",
          stem: "Nia reports emotional blunting after starting an antidepressant and says, \u201CMaybe I should stop it before I return to work. I cannot make pharmacy decisions feeling numb.\u201D What is the best counselor response?",
          options: [
            "Explore her side effects and safety/functioning concerns, encourage prompt discussion with the prescriber, and coordinate with consent while continuing to monitor mood and suicide risk.",
            "Recommend continuing the medication until the prescriber can see her because stopping suddenly may increase risk.",
            "Suggest reducing her work hours first, since the medication may be protecting her from suicidal thoughts.",
            "Explore whether the emotional blunting represents avoidance of shame rather than a medication effect.",
          ],
          correctAnswer: 0,
          explanation:
            "The counselor should take side effects and occupational functioning seriously, assess for changes in depression and suicide risk, and refer medication decisions to the prescriber. Directing her to continue or alter treatment exceeds scope, and reinterpreting side effects psychologically is not supported by the stated facts.",
        },
        {
          id: "nia-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: "Nia says her sister now calls four times every evening and becomes distressed if Nia does not answer immediately. Nia says, \u201CShe saved my life, so I feel cruel asking her to back off.\u201D What response best supports treatment?",
          options: [
            "\u201CYour sister's anxiety is understandable, and frequent check-ins are appropriate until suicidal thoughts stop entirely.\u201D",
            "\u201CYou may need firmer boundaries because being monitored can prevent you from rebuilding independence.\u201D",
            "\u201CA joint session is indicated so your sister can understand the difference between support and monitoring.\u201D",
            "\u201CLet\u2019s consider how to honor the support that protected you while creating a safety plan that does not require either of you to live in constant alarm.\u201D",
          ],
          correctAnswer: 3,
          explanation:
            "The best response validates the sister's lifesaving role and Nia's need for autonomy while opening collaborative revision of safety supports. Boundary work or a joint session may follow, but neither should be prescribed before clarifying needs and consent.",
        },
        {
          id: "nia-q9",
          questionNumber: 9,
          domain: "Professional practice and ethics",
          stem: "Nia's employer requires documentation before she returns from medical leave. She asks you to state that she is safe to dispense medications and does not pose a workplace risk. What is the best response?",
          options: [
            "Provide the requested assurance because she completed crisis treatment and currently denies suicidal intent.",
            "Clarify the employer's documentation requirement, discuss releases and minimum necessary disclosure, and avoid making a fitness-for-duty or no-risk determination outside your role.",
            "Refer the documentation request entirely to her psychiatrist because medication management determines occupational risk.",
            "Recommend that she disclose her prior suicidal plan so the employer can decide what safeguards are required.",
          ],
          correctAnswer: 1,
          explanation:
            "The counselor can support authorized, limited coordination but should not guarantee fitness or absence of risk. The narrative does not establish that disclosure of detailed suicidal content is required, nor that the psychiatrist alone determines workplace clearance.",
        },
        {
          id: "nia-q10",
          questionNumber: 10,
          domain: "Counseling skills and interventions",
          stem: "Nia is avoiding her church choir because people will ask why she was absent, but she says singing was one of the few activities that previously made her feel connected. What is the best intervention?",
          options: [
            "Explore a graded, values-based return to music and community while planning how she wants to handle questions without requiring disclosure she has not chosen.",
            "Recommend she attend a different church temporarily so she can regain support without confronting questions about the crisis.",
            "Encourage her to tell one trusted choir member about the depression so she is less likely to isolate if suicidal thoughts return.",
            "Delay choir exposure until she returns to work successfully because too many role transitions could destabilize her.",
          ],
          correctAnswer: 0,
          explanation:
            "A values-based, graded return addresses depressive withdrawal while respecting her privacy and preparing for social concerns. Changing churches or requiring disclosure assumes more than the narrative supports; waiting unnecessarily prolongs avoidance of a meaningful protective activity.",
        },
      ],
    },
    {
      sessionLabel: "Twelfth session",
      recommendedTimeMinutes: 8,
      sectionNarrative: `At her twelfth outpatient session, Nia reports significant but incomplete improvement. Her PHQ-9 score is now 10, down from 23, and her GAD-7 score is 7. She has consistently attended appointments with her psychiatric prescriber and has worked with the prescriber to adjust the medication plan after discussing emotional blunting. She reports better concentration and improved appetite. She continues to deny current suicidal intent or plan and has no opioid medication or excess sedative medication in her apartment.

With appropriate medical and employer processes outside the counseling relationship, Nia returned to work on a reduced schedule six weeks ago and resumed full clinical duties two weeks ago. She did not provide coworkers with details about her mental health leave. Her first weeks back were stressful, but she has completed verification duties without error and has used structured double-check routines already standard in her department. She stated, "I am beginning to believe that needing treatment and being competent are not opposites."

One difficult shift occurred after a physician criticized her for delaying a high-alert medication order while clarifying a discrepancy. Although her decision was later supported by her supervisor, she left work ashamed and briefly imagined the prior medication-and-wine method again. She did not have access to her old prescription at home, denied intent, followed her safety plan, and called Adaeze. She disclosed the recurrence in session, stating, "I am proud I called her. I am also scared that the thought still knows the address."

Nia has gradually returned to church choir rehearsals. She has chosen to tell one trusted choir friend only that she had been struggling with depression and needed support returning to music; she has not disclosed details of suicidal thoughts. She described singing as "the first place I feel like more than a risk assessment." She has also worked with Adaeze to reduce routine check-ins from four nightly calls to a mutually agreed schedule, with additional contact if Nia notices specific safety warning signs.

Nia asks whether she is ready to reduce therapy frequency as her schedule becomes busier. She also asks how to distinguish an ordinary difficult day from a meaningful return to suicide risk, especially because she works in an environment where medications are present. She stated, "I do not want to be treated as dangerous forever. I also do not ever want to be alone at that counter again."`,
      questions: [
        {
          id: "nia-q11",
          questionNumber: 11,
          domain: "Intake/assessment/diagnosis",
          stem: "At session twelve, Nia's PHQ-9 has decreased from 23 to 10 and she denies current intent. She reports that after a difficult shift she briefly imagined the medication-and-wine method again, then used her safety plan and contacted her sister. What is the best clinical interpretation?",
          options: [
            "The recurrence means outpatient care is no longer appropriate because the original method has reappeared.",
            "Her improved score indicates the image is a residual symptom and does not require formal reassessment unless she develops intent.",
            "The recurrence is a meaningful warning sign requiring direct reassessment of intent, means access, stressors, and plan effectiveness while recognizing her successful use of safety strategies.",
            "The recurrence indicates that working around medications is maintaining suicidal thoughts and occupational change should become the priority.",
          ],
          correctAnswer: 2,
          explanation:
            "Reappearance of a previously researched method after stress is clinically meaningful even when she used her plan successfully. It warrants direct reassessment and reinforcement or refinement of protective steps, not automatic escalation or dismissal based on symptom improvement.",
        },
        {
          id: "nia-q12",
          questionNumber: 12,
          domain: "Treatment planning",
          stem: "Nia asks whether reduced depressive symptoms mean she should stop therapy before returning to her full schedule. Which plan is most appropriate?",
          options: [
            "Recommend ending weekly therapy because a return to normal roles will provide the best test of recovery.",
            "Collaboratively consider step-down only after reviewing recent suicidal imagery, means safety, supports, workplace transition stress, medication coordination, and a clear relapse-response plan.",
            "Continue weekly sessions until she reports no suicidal thoughts for several months because her job involves medication access.",
            "Transfer her to occupational health counseling because return-to-work stress is now the primary clinical issue.",
          ],
          correctAnswer: 1,
          explanation:
            "Step-down after a recent high-risk suicidal crisis should be based on functioning, risk trajectory, means safety, support use, transition stress, and relapse planning rather than symptom score alone. Indefinite treatment based solely on her job is also unsupported.",
        },
        {
          id: "nia-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: "Nia says, \u201CEveryone wants me back to normal. I do too. But normal was the woman who almost died without anybody knowing.\u201D Which response best deepens the work?",
          options: [
            "\u201CYou may need to accept that your family and coworkers cannot fully understand what happened internally.\u201D",
            "\u201CThat is why you should keep at least one person informed about every return of suicidal thoughts.\u201D",
            "\u201CIt sounds like your old normal was built on perfectionism, which we can challenge through cognitive restructuring.\u201D",
            "\u201CThe goal may not be returning to the version of you who could hide everything; what would recovery look like if it included being protected and known in ways you choose?\u201D",
          ],
          correctAnswer: 3,
          explanation:
            "The best response honors the identity rupture created by a concealed suicidal crisis and invites client-led integration of support and autonomy. Monitoring and cognitive work may be useful, but prescribing disclosure or immediately reducing the moment to perfectionism is premature.",
        },
        {
          id: "nia-q14",
          questionNumber: 14,
          domain: "Treatment planning",
          stem: "As she prepares for full work duties, Nia asks how to tell whether a hard day is ordinary sadness or a dangerous return to crisis. What relapse-prevention focus is best?",
          options: [
            "Develop a personalized plan based on changes in suicidal intent, method-related thinking, means access, isolation, concealment, work errors, sleep, support use, and thresholds for contacting the treatment team or seeking urgent care.",
            "Teach her to treat any return of the medication-and-wine image as a crisis requiring removal from work duties that day.",
            "Have her sister monitor evening calls and notify the counselor if Nia becomes less responsive or more withdrawn.",
            "Ask occupational health to establish monitoring procedures because medication access makes self-assessment unreliable.",
          ],
          correctAnswer: 0,
          explanation:
            "Relapse prevention should distinguish ordinary emotional fluctuation from meaningful risk escalation using her specific warning signs, access-to-means concerns, concealment pattern, supports, and action thresholds. Automatic work removal, family surveillance, or occupational monitoring are not established as necessary.",
        },
      ],
    },
  ],
};
