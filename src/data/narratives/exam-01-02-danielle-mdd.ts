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
          id: "danielle-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: `Which feature most strongly supports Major Depressive Disorder with peripartum onset rather than postpartum blues?`,
          options: [
            `She experiences tearfulness and fatigue after delivery.`,
            `Her symptoms began within the postpartum period after a wanted pregnancy.`,
            `Symptoms have persisted and intensified for weeks with impaired functioning, guilt, appetite disturbance, insomnia, and emotional disconnection.`,
            `She feels overwhelmed when her husband works overnight shifts.`,
          ],
          correctAnswer: 2,
          explanation: `Postpartum blues are typically brief and self-limited. Danielle’s persistent and impairing depressive syndrome, with guilt, appetite change, insomnia, concentration problems, and functional impairment, supports MDD with peripartum onset.`,
        },
        {
          id: "danielle-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: `How should her intrusive images of accidentally dropping the baby be interpreted at intake?`,
          options: [
            `They are ego-dystonic intrusive thoughts that require careful assessment of intent, psychosis, impulse control, and safety.`,
            `They indicate postpartum psychosis because the content involves the infant.`,
            `They are normal parenting worries and should not be explored because exploration may reinforce them.`,
            `They are equivalent to homicidal ideation unless proven otherwise.`,
          ],
          correctAnswer: 0,
          explanation: `The thoughts are unwanted, horrifying, and inconsistent with her values, which supports an ego-dystonic intrusive-thought formulation. They still require careful risk assessment and monitoring rather than dismissal.`,
        },
        {
          id: "danielle-q3",
          questionNumber: 3,
          domain: "Professional practice and ethics",
          stem: `She reports fleeting thoughts that everyone would be better off if she could disappear for a week. What is the best immediate response?`,
          options: [
            `Differentiate passive escape fantasies from suicidal ideation while directly assessing intent, plan, means, protective factors, and infant safety.`,
            `Document that she denies suicidality and continue with psychoeducation.`,
            `Inform her husband immediately because she is postpartum.`,
            `Recommend hospitalization because any postpartum escape thought is high risk.`,
          ],
          correctAnswer: 0,
          explanation: `The statement requires direct assessment without assuming either imminent danger or no risk. The clinician should assess both client safety and infant safety while distinguishing passive escape wishes from active suicidal or homicidal intent.`,
        },
        {
          id: "danielle-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: `Which initial treatment plan best fits the clinical picture?`,
          options: [
            `Weekly CBT or IPT-informed therapy, sleep-protection planning, behavioral activation, risk monitoring, and coordinated care with OB/prescriber as authorized.`,
            `Couples counseling only, because her husband’s overnight schedule is the main problem.`,
            `Supportive reassurance until hormone changes resolve naturally.`,
            `Immediate inpatient hospitalization to prevent infant harm.`,
          ],
          correctAnswer: 0,
          explanation: `Moderate peripartum depression with anxious distress and intact reality testing can often be treated outpatient with psychotherapy, sleep supports, risk monitoring, and medication consultation as appropriate.`,
        },
        {
          id: "danielle-q5",
          questionNumber: 5,
          domain: "Core counseling attributes",
          stem: `She says, “I got the miracle and somehow I am still miserable.” What is the strongest therapeutic response?`,
          options: [
            `It sounds like infertility made you expect motherhood would feel easier than it does.`,
            `What is it like to suffer in a season where everyone expects gratitude from you?`,
            `Postpartum depression often makes mothers feel disconnected from wanted babies.`,
            `You can love your baby and still feel depressed.`,
          ],
          correctAnswer: 1,
          explanation: `All but the first option may contain some truth, but the best response most directly meets the shame and contradiction in the client’s own language without moving too quickly into education or reassurance.`,
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
          id: "danielle-q6",
          questionNumber: 6,
          domain: "Professional practice and ethics",
          stem: `After she texts, “I could disappear and nobody would even notice until the baby cried,” what should the counselor do first in the next session?`,
          options: [
            `Praise her for answering her sister’s call and then move to behavioral activation.`,
            `Reassess suicidal ideation, intent, plan, means, context, protective factors, sleep deprivation, and infant safety before proceeding.`,
            `Increase the frequency of sessions automatically because any recurrence of escape thoughts means deterioration.`,
            `Contact her husband because her sister was alarmed.`,
          ],
          correctAnswer: 1,
          explanation: `A new passive escape statement during severe sleep deprivation requires fresh assessment of risk and safety context. Collateral contact requires consent or a clear safety exception.`,
        },
        {
          id: "danielle-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: `She says missing the pediatric appointment is “proof I am not fit for this.” What response is most therapeutic?`,
          options: [
            `One missed appointment does not mean anything about your parenting.`,
            `It sounds like your mind turned an exhausted mistake into a verdict on your worth as a mother.`,
            `Let’s make a reminder system so it cannot happen again.`,
            `Your husband should share responsibility for appointments.`,
          ],
          correctAnswer: 1,
          explanation: `The best response names the depressive meaning-making process without arguing, solving too quickly, or redirecting blame. Practical planning can follow after the shame is addressed.`,
        },
        {
          id: "danielle-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: `Her mother-in-law’s breastfeeding comment intensifies shame after medical complications led her to stop pumping. What is the best clinical focus?`,
          options: [
            `Encourage her to educate the mother-in-law about mastitis so the comment stops.`,
            `Explore the meaning of feeding, maternal adequacy, and boundaries while reinforcing that feeding decisions should be coordinated with medical providers.`,
            `Avoid the topic because feeding decisions are outside counseling scope.`,
            `Focus on getting her to accept formula so depressive symptoms resolve.`,
          ],
          correctAnswer: 1,
          explanation: `The counselor can work with the emotional meaning, shame, boundaries, and interpersonal context while not stepping into medical or lactation advice.`,
        },
        {
          id: "danielle-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `She almost stopped attending the virtual postpartum group after one invalidating comment. What is the best treatment response?`,
          options: [
            `Recommend leaving the group because it increased shame.`,
            `Help her evaluate whether the group offers enough support to justify returning with a coping plan for comparison triggers.`,
            `Tell her support groups always include difficult comments and she should not take them personally.`,
            `Shift to individual therapy only because group settings are too unpredictable postpartum.`,
          ],
          correctAnswer: 1,
          explanation: `The response neither forces continued attendance nor reflexively avoids a potentially helpful support. It treats the comment as a trigger to plan for, not as proof the group is unsafe or useless.`,
        },
        {
          id: "danielle-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `She asks whether you can write a letter saying she is “fully cleared” to return to work next month. What is the best response?`,
          options: [
            `Write the letter if her PHQ-9 has decreased and she denies active safety concerns.`,
            `Decline all work-related documentation because return-to-work decisions are medical.`,
            `Discuss what limited, accurate clinical documentation you can provide with consent, coordinate with OB/prescriber as needed, and avoid guarantees outside your role.`,
            `Tell her school district she should delay returning because postpartum depression is still active.`,
          ],
          correctAnswer: 2,
          explanation: `Counselors can provide accurate, limited documentation within scope but should avoid broad medical/legal clearance claims. Coordination and informed consent are essential.`,
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
          id: "danielle-q11",
          questionNumber: 11,
          domain: "Intake/assessment/diagnosis",
          stem: `She still has occasional unwanted images of accidentally dropping the baby when severely sleep-deprived. What is the most accurate interpretation?`,
          options: [
            `They remain ego-dystonic intrusive thoughts that should be monitored in relation to sleep, distress, and safety.`,
            `They indicate the diagnosis should change to postpartum psychosis.`,
            `They mean treatment has not sufficiently reduced risk to continue outpatient care.`,
            `They should be ignored because she now recognizes them.`,
          ],
          correctAnswer: 0,
          explanation: `The thoughts remain unwanted, brief, distressing, and inconsistent with intent. Improved response to them is progress, but ongoing monitoring is appropriate, especially under sleep deprivation.`,
        },
        {
          id: "danielle-q12",
          questionNumber: 12,
          domain: "Treatment planning",
          stem: `She asks how to know when therapy can taper. What is the best response?`,
          options: [
            `Because her PHQ-9 and GAD-7 are mild, tapering should begin immediately.`,
            `Collaboratively review symptom stability, sleep supports, relapse warning signs, medication follow-up, supports, and consider spacing sessions before ending.`,
            `Continue weekly therapy until all intrusive thoughts disappear.`,
            `Ask her OB to decide because she is taking sertraline.`,
          ],
          correctAnswer: 1,
          explanation: `Tapering should be collaborative and based on stability, supports, relapse prevention, and coordination with medication care. Symptom scores help but are not the only factor.`,
        },
        {
          id: "danielle-q13",
          questionNumber: 13,
          domain: "Professional practice and ethics",
          stem: `She asks whether to tell her principal about the postpartum depression. What is the best clinical response?`,
          options: [
            `Encourage disclosure to reduce stigma and normalize postpartum depression.`,
            `Discourage disclosure because mental health information could harm her reputation.`,
            `Help her weigh privacy, workplace needs, possible accommodations, and what limited information she may choose to share without deciding for her.`,
            `Offer to call the principal and explain the diagnosis in clinical terms.`,
          ],
          correctAnswer: 2,
          explanation: `The disclosure decision belongs to the client. The counselor helps her consider goals, risks, privacy, accommodations, and boundaries without directing disclosure or contacting the employer without consent.`,
        },
        {
          id: "danielle-q14",
          questionNumber: 14,
          domain: "Core counseling attributes",
          stem: `She says, “I still have hard days, but I am back inside my life.” What is the most therapeutic response?`,
          options: [
            `That means your depression is in remission.`,
            `What tells you that you are back inside your life, even though hard days still happen?`,
            `Hard days are normal for any new mother.`,
            `Let’s focus on preventing the hard days from returning.`,
          ],
          correctAnswer: 1,
          explanation: `The question helps her consolidate meaningful change without prematurely declaring remission, minimizing difficulty, or framing recovery as eliminating all hard days.`,
        },
      ],
    },
  ],
};
