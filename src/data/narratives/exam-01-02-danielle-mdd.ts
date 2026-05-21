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
    },
  ],
};
