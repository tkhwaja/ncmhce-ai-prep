import type { Narrative } from "./types";

export const daniellePeripartumMDDNarrative: Narrative = {
  id: 'exam-01-02-danielle-mdd',
  title: 'Danielle — Major Depressive Disorder',
  difficulty: "Advanced",
  minutesPerSection: 8,
  category: 'Major Depressive Disorder',

  clientInfo: {
    age: 31,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black/African American',
    relationshipStatus: 'Married',
    setting: 'Integrated behavioral health in an OB/GYN clinic',
    payment: 'Private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Major Depressive Disorder, single episode, moderate, with anxious distress, with peripartum onset: F32.1',
  },

  presentingProblem: `You are a licensed mental health counselor embedded in an OB/GYN clinic. Your client was referred by her obstetrician at eleven weeks postpartum after scoring high on a depression screening at her follow-up visit. She arrived to session with her infant son in a car seat and stated, "I thought I was supposed to feel overwhelmed. I did not know I was supposed to feel gone."

The client reported that her symptoms began approximately two weeks after delivery and have intensified steadily. She described persistent low mood, frequent tearfulness, loss of appetite, guilt, difficulty concentrating, and profound fatigue that feels different from ordinary new-parent sleep deprivation. She stated, "The tired is real, yes. But this feels heavier than tired. It feels like my whole body is moving through wet cement." She reported sleeping when she can, but even when the baby sleeps she often lies awake anticipating the next time he will cry. She stated, "I am exhausted and also somehow never at rest."

The client and her husband had been trying to conceive for nearly three years and underwent fertility treatment before this pregnancy. She stated, "Everyone knows how wanted he was. That makes this worse. I got the miracle and somehow I am still miserable." She reported intense shame about not feeling "grateful enough" and stated that people from church and extended family keep saying things like, "Enjoy every minute," and "You prayed for this." She experiences those comments as crushing rather than supportive. She stated, "I smile and nod and then cry in the bathroom."

The client described feeling emotionally disconnected at times from both her husband and her baby, though she emphasized that she loves her son and is meeting his needs. She stated, "I take care of him. I feed him, change him, hold him. But sometimes it feels like I am doing it from behind glass." She denied any desire to hurt him. However, she disclosed intrusive, unwanted images that frighten her, including brief flashes of accidentally dropping him while walking down the apartment stairs or tripping while carrying him in the kitchen. She stated, "The thought comes in like a flash and I feel sick. Then I hand him to somebody or put him in the crib and cry." She described these thoughts as ego-dystonic, horrifying, and inconsistent with how she wants to act.

Her husband works overnight shifts as a respiratory therapist three nights per week. The client reported that those nights are especially difficult. Her mother lives in another state, and her mother-in-law helps with practical tasks but often makes comments the client experiences as judgmental, such as, "In my day we just pushed through," or "Maybe you would feel better if you stopped overthinking every little thing." The client reported dreading her planned return to work as a middle-school assistant principal in five weeks. She stated, "I cannot even answer a text message some days. How am I supposed to supervise a building full of children?"

She denied any history of manic or hypomanic symptoms. She denied substance use, psychotic symptoms, or prior psychiatric hospitalization. She acknowledged fleeting thoughts such as, "Everyone would be better off if I could disappear for a week," but denied wanting to die, denied any plan or intent, and stated, "I do not want to leave my son. I want this feeling to stop."`,

  mentalStatusObservation: `Your client presented in clean but rumpled casual clothing with her hair pulled back hastily. She was alert and oriented to person, place, time, and situation. Grooming and hygiene were adequate, though she appeared sleep-deprived. Eye contact was intermittent and improved as rapport developed. Speech was soft, coherent, and slowed at times, especially when discussing shame and guilt. Mood was reported as "numb, sad, and on edge." Affect was tearful and constricted but congruent with content. Psychomotor activity was mildly slowed; she rocked one foot while seated and checked the baby monitor app twice during session. Thought processes were linear and goal-directed. Thought content was notable for worthlessness, maternal inadequacy, anxious rumination, and intrusive ego-dystonic images of accidental harm to the infant. She denied delusions, hallucinations, or any belief that the baby would be better off dead. She denied homicidal ideation. She denied active suicidal ideation, plan, or intent, though she endorsed passive escape fantasies during high-distress moments. Insight was good; judgment appeared intact. No substance use was reported. Her OB noted an uncomplicated physical recovery from childbirth and stable vital signs.`,

  familyHistory: `The client is the older of two daughters. She described her childhood as stable and achievement-focused. Her father is a deacon in their church and recently retired from municipal government. Her mother is a former elementary school teacher. The client reported that her mother experienced "a bad depression" after the client was in high school following the death of the client’s maternal grandmother, though the family referred to it at the time as "stress" and no formal treatment was discussed openly. A maternal aunt reportedly "stayed in bed for months" after a divorce and was eventually prescribed antidepressant medication. No known family history of bipolar disorder, schizophrenia, or completed suicide. The client described strong family expectations around competence, faith, and composure, which make her feel both supported and constrained.`,

  workHistory: `The client holds a master’s degree in educational leadership and has worked in public education for nine years. She taught middle-school English for five years before becoming an assistant principal at a large urban public school. She is regarded as highly organized, dependable, and calm under pressure. She has been on maternity leave since delivery and is scheduled to return in just over a month. She reported that work had long been a source of competence and identity, stating, "At work I know what to do. There is a plan. There are deadlines. There is a version of me that functions." She worries that returning while symptomatic will expose her sense of impairment and disappoint colleagues who view her as capable.`,

  intakeSessionSummary: `You administered the PHQ-9, on which the client scored 19, indicating moderately severe depressive symptoms. You administered the GAD-7, on which she scored 14, and the Edinburgh Postnatal Depression Scale, on which she scored 18, all consistent with significant postpartum mood symptoms. You conducted a thorough risk assessment, clarifying the difference between intrusive ego-dystonic harm thoughts, passive escape fantasies, and active suicidal or homicidal intent. She denied intent or plan to harm herself or the baby and identified her husband, faith, and attachment to her infant as major protective factors. You provided psychoeducation regarding perinatal mood disorders, including the difference between postpartum blues, postpartum depression, and postpartum psychosis. You discussed treatment options including CBT or IPT-oriented work, behavioral activation, sleep protection strategies, and referral back to her OB or a psychiatric prescriber to discuss medication. She agreed to weekly sessions and to sign a release so you may coordinate care with her OB if needed.`,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: 'danielle-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature most strongly supports Major Depressive Disorder with peripartum onset rather than postpartum blues?',
          options: [
            'She is tearful after delivery',
            'Her symptoms began after childbirth',
            'Her symptoms have persisted and worsened for weeks with significant impairment',
            'She is tired caring for a newborn',
          ],
          correctAnswer: 2,
          explanation: 'The persistence, worsening, and functional impairment of her symptoms well beyond the brief, self-limited postpartum blues pattern support Major Depressive Disorder with peripartum onset. Tearfulness and fatigue alone can occur in postpartum blues or ordinary adjustment to newborn care.',
        },
        {
          id: 'danielle-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'How should the client’s intrusive images of accidentally dropping the baby be understood clinically at intake?',
          options: [
            'As evidence of postpartum psychosis',
            'As ego-dystonic intrusive thoughts that still require careful risk assessment',
            'As clear homicidal intent toward the infant',
            'As a normal parenting fear that needs no further exploration',
          ],
          correctAnswer: 1,
          explanation: 'Her intrusive images are unwanted, frightening, and inconsistent with her wishes, which is more consistent with ego-dystonic intrusive thoughts than psychosis or intent. They still require careful assessment of intent, impulse control, psychosis, and safety rather than dismissal.',
        },
        {
          id: 'danielle-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'The client says, "I got the miracle and somehow I am still miserable." What is the most therapeutic response?',
          options: [
            '"Many women feel this way. It will pass."',
            '"What is it like to suffer in a season where everyone expects gratitude from you?"',
            '"You should try to focus on the blessing of finally becoming a mother."',
            '"Your hormones are probably making you think this way."',
          ],
          correctAnswer: 1,
          explanation: 'An open, empathic question honors the conflict between her external circumstances and internal suffering without minimizing or correcting her. Reassurance, gratitude-pushing, or reducing her experience to hormones all risk deepening shame.',
        },
        {
          id: 'danielle-q4',
          questionNumber: 4,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate initial treatment plan for this client?',
          options: [
            'Weekly CBT or IPT-informed therapy with behavioral activation and coordination with her OB regarding medication options',
            'Immediate inpatient hospitalization',
            'Supportive counseling only until the baby sleeps through the night',
            'Couples counseling as the sole intervention',
          ],
          correctAnswer: 0,
          explanation: 'Moderate postpartum depression with anxious distress and intact reality testing is appropriately treated with outpatient psychotherapy, functional support, and coordinated medical consultation about medication when indicated. Hospitalization is reserved for acute safety or psychosis, and supportive waiting alone is inadequate.',
        },
        {
          id: 'danielle-q5',
          questionNumber: 5,
          domain: 'Professional practice and ethics',
          stem: 'After session, the client’s husband asks in the hallway, "Can you just tell me what she said so I know how serious this is?" What is the most appropriate response?',
          options: [
            'Provide a brief summary since he is her spouse',
            'Decline to share clinical information without her permission and encourage discussing together what support would help',
            'Confirm only whether she is depressed',
            'Tell him he should attend every session from now on',
          ],
          correctAnswer: 1,
          explanation: 'Spousal status does not override confidentiality. The appropriate response is to protect her privacy while inviting collaborative support through her consent rather than disclosing clinical content unilaterally.',
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      sectionNarrative: `Your client arrives for her fifth session approximately one month later. She reports some improvement but remains symptomatic. Her PHQ-9 this week is 13 and her GAD-7 is 10. After consultation with her OB three weeks ago, she started sertraline; she reports mild nausea during the first week that has improved. She stated, "I am not better-better. But I am not crying on the bathroom floor every day anymore."

She described one especially difficult weekend when her husband worked two consecutive overnight shifts and the baby was cluster feeding. She slept less than three hours across the night. The next morning she texted her younger sister, "I could disappear and nobody would even notice until the baby cried." Her sister immediately called. The client reported she answered and said, "I do not want to die. I just wanted to not be in my body for a while." She denied any suicidal intent, planning, or preparatory behavior then or now.

She also reported a painful interaction with her mother-in-law, who said, "Maybe all this would ease up if you stopped formula and tried harder to breastfeed." The client had stopped pumping two weeks earlier after recurrent mastitis, low milk supply, and escalating distress around feeding. She stated, "I know logically that feeding him is feeding him. But emotionally it feels like I failed the first assignment." She missed a pediatric follow-up appointment last week after sleeping through alarms and described that as "proof I am not fit for this."

The client has begun brief behavioral activation work. She is taking the baby outside for one short walk most days and attended a virtual postpartum support group twice. She almost did not return after one mother casually said, "At least your baby sleeps, you’re lucky," which made the client feel fraudulent and ashamed. She asked you, "How do I know the difference between being depressed and just being bad at this?" She also asked whether you can write a letter to her school district saying she is "fully cleared" to return to work next month if she needs one.`,
      questions: [
        {
          id: 'danielle-q6',
          questionNumber: 6,
          domain: 'Intake/assessment/diagnosis',
          stem: 'The client’s text, "I could disappear," should prompt which immediate clinical response?',
          options: [
            'Treat it as manipulation and redirect to coping skills',
            'Clarify suicidal intent, plan, means, and context while distinguishing escape fantasies from active self-harm intent',
            'Recommend inpatient admission because any disappearance statement is high risk',
            'Ignore it since she later denied intent',
          ],
          correctAnswer: 1,
          explanation: 'Statements about wanting to disappear require direct risk assessment rather than assumption, dismissal, or automatic hospitalization. Clarifying intent, plan, means, and context helps differentiate passive escape wishes from active suicidality while still taking the statement seriously.',
        },
        {
          id: 'danielle-q7',
          questionNumber: 7,
          domain: 'Core counseling attributes',
          stem: 'The client says missing the pediatric appointment is "proof I am not fit for this." What is the most therapeutic response?',
          options: [
            '"You missed one appointment. That does not matter."',
            '"It sounds like one mistake becomes evidence, in your mind, that you are failing as a mother."',
            '"You need a better calendar system."',
            '"Your mother-in-law is making this worse."',
          ],
          correctAnswer: 1,
          explanation: 'A reflective response identifies the meaning she is assigning to the event and invites deeper work on shame and self-judgment. Minimizing the missed appointment, problem-solving too quickly, or blaming the mother-in-law all miss the emotional core.',
        },
        {
          id: 'danielle-q8',
          questionNumber: 8,
          domain: 'Treatment planning',
          stem: 'Given the role of severe sleep disruption in symptom escalation, what is the most useful treatment-planning focus now?',
          options: [
            'Have her avoid sleeping during the day so she is tired at night',
            'Collaboratively develop a sleep-protection plan using partner or family support when possible',
            'Stop the support group and focus only on medication',
            'Delay all treatment changes until the baby is older',
          ],
          correctAnswer: 1,
          explanation: 'For postpartum mood symptoms, protecting consolidated sleep whenever feasible is a meaningful treatment target alongside psychotherapy and medication. Waiting passively or narrowing treatment to one domain ignores a major maintaining factor.',
        },
        {
          id: 'danielle-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'The client asks, "How do I know the difference between being depressed and just being bad at this?" What is the most appropriate response?',
          options: [
            '"Bad mothers do not ask that question."',
            '"Let’s look together at what depression is distorting and what evidence you use against yourself when you are exhausted and ashamed."',
            '"You are definitely depressed, not bad at this."',
            '"Once the medication works, you will know the difference."',
          ],
          correctAnswer: 1,
          explanation: 'This response invites collaborative examination of depressive distortion, exhaustion, shame, and self-criticism without offering simplistic reassurance. Flat reassurance may feel good briefly but usually does not shift entrenched beliefs.',
        },
        {
          id: 'danielle-q10',
          questionNumber: 10,
          domain: 'Professional practice and ethics',
          stem: 'The client asks you to write a letter saying she is "fully cleared" to return to work. What is the most appropriate response?',
          options: [
            'Agree if she has attended sessions consistently',
            'Decline because counselors can never provide documentation of any kind',
            'Clarify what documentation is being requested and provide only information within your scope, avoiding a fitness-for-duty determination',
            'Refer the request to her husband',
          ],
          correctAnswer: 2,
          explanation: 'A counselor may document attendance, symptoms, or treatment participation within scope, but declaring someone fully fit for duty is a different type of evaluation. Clarifying the request and staying within role is the ethical approach.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      sectionNarrative: `Your client arrives for her twelfth session approximately three months after intake. Her PHQ-9 is now 6, her GAD-7 is 5, and her EPDS has dropped into the mild range. She has returned to work part-time for the past three weeks and reports that the transition has been tiring but manageable. She stated, "I still have hard days, but I am back inside my life."

She reports feeling more connected to her son and less flooded by shame. She described a recent evening rocking him to sleep and noticing, "I was there for it. Not evaluating myself, not grading myself, just there." She continues sertraline through her OB and reports no significant side effects. She and her husband created a more consistent overnight support plan on his days off, and she resumed the virtual mothers group after deciding she did not want one awkward comment to determine whether she received support.

She reported that when she becomes severely sleep-deprived, she still occasionally experiences a brief, unwanted image of accidentally dropping the baby on the stairs. She stated, "It still scares me when it happens, but now I recognize it and I do not spiral for an hour about what kind of person it makes me." She denies any intent to harm herself or the baby and denies psychotic symptoms. Her mother-in-law has become less intrusive after the client told her directly, with her husband’s support, that comments about feeding were not helpful.

The client asked two direct questions. First: "How do I know when we can taper?" Second: "Do I tell my principal any of this, or do I keep it private and just keep doing my job?" She stated that part of her wants to be open about postpartum depression, while another part wants to "close the file and move on."`,
      questions: [
        {
          id: 'danielle-q11',
          questionNumber: 11,
          domain: 'Intake/assessment/diagnosis',
          stem: 'The client still has occasional intrusive accidental-harm images when severely sleep-deprived. Which interpretation is most accurate now?',
          options: [
            'They indicate emerging postpartum psychosis',
            'They remain ego-dystonic intrusive thoughts and should continue to be monitored in context',
            'They prove treatment has failed',
            'They represent covert intent toward the infant',
          ],
          correctAnswer: 1,
          explanation: 'The thoughts remain brief, unwanted, distressing, and inconsistent with intent, which supports continued understanding as ego-dystonic intrusive thoughts rather than psychosis or covert intent. Ongoing monitoring is appropriate, especially with sleep deprivation as a trigger.',
        },
        {
          id: 'danielle-q12',
          questionNumber: 12,
          domain: 'Core counseling attributes',
          stem: 'The client says, "I was there for it. Not evaluating myself, not grading myself, just there." What is the most therapeutic response?',
          options: [
            '"That means you are cured."',
            '"What was it like to experience a moment of mothering without self-surveillance?"',
            '"That is what should have been happening all along."',
            '"You should write that down in a gratitude journal."',
          ],
          correctAnswer: 1,
          explanation: 'An open question helps the client deepen her awareness of meaningful change and integrate it into her recovery story. Declaring cure, implying she failed before, or prematurely assigning homework flattens a significant moment.',
        },
        {
          id: 'danielle-q13',
          questionNumber: 13,
          domain: 'Treatment planning',
          stem: 'The client asks how to know when treatment can taper. What is the most appropriate response?',
          options: [
            'End treatment now because her scores are improved',
            'Continue weekly indefinitely because postpartum relapse is common',
            'Review symptom improvement, functioning, supports, and relapse-prevention needs, then consider tapering collaboratively',
            'Wait until her baby turns one before discussing any taper',
          ],
          correctAnswer: 2,
          explanation: 'Taper decisions should be collaborative and based on symptom trend, functioning, support systems, medication coordination, and a relapse-prevention plan rather than a single score or arbitrary timeline. Both abrupt ending and indefinite weekly treatment are poor fits.',
        },
        {
          id: 'danielle-q14',
          questionNumber: 14,
          domain: 'Counseling skills and interventions',
          stem: 'The client asks whether to disclose postpartum depression to her principal. What is the most appropriate clinical direction?',
          options: [
            'Advise her to keep it private to protect her career',
            'Advise full disclosure so she can fight stigma',
            'Help her weigh privacy, support, accommodations, and values so she can decide what level of disclosure fits',
            'Tell her employers cannot ever ask about mental health',
          ],
          correctAnswer: 2,
          explanation: 'Disclosure at work is a personal and contextual decision. The counselor’s role is to help her think through practical needs, values, privacy, and possible accommodations rather than prescribing disclosure or silence.',
        },
      ],
    },
  ],
};
