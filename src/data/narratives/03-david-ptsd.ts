import type { Narrative } from "./types";

export const davidPtsd: Narrative = {
  id: "03-david-ptsd",
  title: "David — Post-Traumatic Stress Disorder",
  category: "Trauma & Stressor-Related Disorders",
  difficulty: "Intermediate",

  clientInfo: {
    age: 34,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "White",
    relationshipStatus: "Married",
    setting: "VA outpatient mental health clinic",
    payment: "VA benefits",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Post-Traumatic Stress Disorder: F43.10",
  },

  presentingProblem: `You are a licensed mental health counselor at a VA outpatient clinic. Your client was referred by his primary care provider after disclosing nightmares and difficulty sleeping during a routine appointment. He stated, "I wasn't going to come but my wife said she's at the end of her rope. I figured I owed her at least this much."

The client is a former Army infantryman who served three combat deployments to Afghanistan between 2012 and 2019. He medically separated from the Army four years ago following a non-combat back injury. He reported that he "held it together fine" for the first two years after separation but began experiencing significant symptoms about eighteen months ago after attending the funeral of a close friend from his unit who died by suicide. He stated, "After Miguel's funeral, something broke loose. I can't put it back."

The client reported recurrent, intrusive memories of a specific incident during his second deployment in which a roadside bomb killed two members of his squad. He stated, "I'll be doing something normal and I'm back there. I can smell it. I can hear it." He reported frequent nightmares of the incident, waking multiple times per night in a sweat. He described avoiding crowds, fireworks, highway overpasses, and news coverage of Afghanistan. He stated, "My wife wanted to go to her niece's quinceañera last month. I couldn't do it. Too many people, too loud. I sat in the truck."

The client reported persistent feelings of detachment from his family. He stated, "I love my wife and my kids. But there's a pane of glass between us. I can see them but I can't reach them." He described feeling emotionally numb, hypervigilant, and "angry at nothing." He reported startling at loud noises and scanning crowds for threats. His wife has told him he "isn't the same man" she married before his last deployment. He reported drinking four to six beers most nights and smoking cannabis "to get to sleep." He denied current suicidal ideation but acknowledged, "I've had the thought that my family would be better off without me. Not acting on it. Just a thought."`,

  mentalStatusObservation: `Your client presented in jeans, work boots, and a hooded sweatshirt. He chose the chair closest to the door and sat with his back against the wall, scanning the room intermittently. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were adequate; he was clean-shaven and appeared physically fit. Eye contact was intermittent and guarded. Speech was measured, with long pauses before answering sensitive questions. Mood was reported as "angry and tired." Affect was constricted and guarded. Psychomotor activity was notable for mild hypervigilance — he glanced at the door twice during the interview when sounds came from the hallway. Thought processes were linear. Thought content was notable for intrusive memories (triggered when discussing his deployment), themes of guilt regarding his deceased friend, and passive thoughts about his family being "better off." He denied active suicidal intent, plan, or preparatory behavior. He denied homicidal ideation. No delusions or hallucinations. He reported the combat memories are intrusive and distressing rather than perceived as real-time events. He has not experienced a manic or hypomanic episode. He denied illicit substance use beyond cannabis. A recent VA physical was within normal limits.`,

  familyHistory: `The client is the older of two children. His father is a retired police officer, age 66; they have a "respectful but distant" relationship. His mother passed from cancer six years ago, while he was deployed. He stated, "I couldn't get home in time. That still sits with me." His younger brother, age 31, is a paramedic and the family member he is closest to. No known family psychiatric history beyond his father's "drinking problem" during the client's childhood. No known family history of bipolar disorder, schizophrenia, or completed suicide, though the client noted "a lot of veterans in my family over the generations."`,

  workHistory: `The client enlisted in the Army at age 18, completed Ranger School, and served eight years on active duty with three combat deployments. He separated medically at rank E-6 following a back injury sustained during a training exercise. Since separation, he has worked intermittently in construction and briefly in private security. He has been unable to hold a job for more than seven months since separation. He is currently unemployed and receiving VA disability benefits (70% rated for physical injuries, pending review for mental health). His wife works as a dental hygienist. They have two children, ages 6 and 9. The family is financially stable but the client stated, "I was supposed to be the provider. I'm not."`,

  intakeSessionSummary: `You administered the PCL-5. The client scored 52, well above the provisional PTSD threshold. You administered the PHQ-9 (score: 14) and the AUDIT-C (score: 7, indicating at-risk drinking). You asked directly about suicidal ideation; he endorsed passive thoughts without intent, plan, or preparatory behavior. His firearms — a service pistol and two hunting rifles — are stored in a gun safe to which only he has the combination. You discussed means restriction; the client was reluctant but agreed to give the combination to his wife for the next thirty days. You discussed evidence-based treatments for PTSD including Prolonged Exposure, Cognitive Processing Therapy, and EMDR. He expressed interest but stated, "I'm not doing any of that talking-about-it stuff today." You validated his pace, introduced grounding techniques, and scheduled weekly sessions.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "david-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: `The client’s symptoms worsened after a unit friend’s funeral. Which detail most strongly supports PTSD rather than grief or Adjustment Disorder?`,
          options: [
            `His wife encouraged him to attend counseling`,
            `He has sensory intrusive memories of the IED incident with avoidance and hyperarousal`,
            `He has been unemployed since separating from the Army`,
            `He feels guilty about not being emotionally present`,
          ],
          correctAnswer: 1,
          explanation: `The trauma-linked intrusive sensory memories, avoidance, detachment, and arousal symptoms best support PTSD. The funeral may have triggered symptoms, but grief, unemployment, and relationship distress alone do not establish PTSD.`,
        },
        {
          id: "david-q2",
          questionNumber: 2,
          domain: "Professional practice and ethics",
          stem: `He reports passive thoughts that his family may be “better off” and has firearms locked in a safe. What is the best immediate clinical response?`,
          options: [
            `Ask his wife to remove all firearms without discussing it with him`,
            `Assess intent, plan, preparatory behavior, protective factors, and collaborate on temporary means safety`,
            `Document passive ideation only because he denies a plan`,
            `Initiate hospitalization because firearms are present in the home`,
          ],
          correctAnswer: 1,
          explanation: `Passive ideation plus firearm access requires direct risk assessment and collaborative means safety. Hospitalization is not automatic without imminent risk, and contacting his wife without consent is not the first step unless risk escalates.`,
        },
        {
          id: "david-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: `He sits with his back to the wall and watches the door. Which response best balances validation with clinical usefulness?`,
          options: [
            `You do not need to watch the door here; this is a safe clinic`,
            `I notice you chose a seat where you can see the door; does that help you feel more settled here?`,
            `This hypervigilance is a symptom we will need to extinguish`,
            `Would you be willing to sit with your back to the door next time?`,
          ],
          correctAnswer: 1,
          explanation: `The response gently names the behavior and invites collaboration without reassurance, pathologizing, or pushing exposure prematurely. Trauma-informed care supports safety and choice early in treatment.`,
        },
        {
          id: "david-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: `He drinks most evenings and uses cannabis for sleep. What information is most clinically important before deciding how to address this?`,
          options: [
            `Whether his wife also uses substances`,
            `The function, frequency, consequences, and relationship of use to PTSD avoidance and sleep`,
            `Whether he is willing to commit to lifetime abstinence today`,
            `Whether cannabis is legal in his state`,
          ],
          correctAnswer: 1,
          explanation: `Substance use should be assessed in relation to trauma symptoms, sleep, avoidance, impairment, and risk. Legal status and partner behavior may matter later, but the clinical function and consequences are central.`,
        },
        {
          id: "david-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: `He says he is not ready for “talking-about-it stuff” after you describe trauma treatments. What is the best first-phase plan?`,
          options: [
            `Begin imaginal exposure anyway so avoidance does not strengthen`,
            `Delay treatment until he agrees to a full trauma protocol`,
            `Use stabilization, psychoeducation, skills, risk monitoring, and shared planning for later trauma processing`,
            `Focus only on marital problems until PTSD symptoms decrease`,
          ],
          correctAnswer: 2,
          explanation: `When the client is not ready for trauma processing, the appropriate first phase is stabilization, psychoeducation, skills, safety monitoring, and collaborative preparation. Forcing exposure or delaying care would likely damage engagement.`,
        },
      ],
    },
    {
      sessionLabel: "Fifth session",
      sectionNarrative: `Your client arrived on time and reported he has been practicing grounding techniques you taught him, with mixed results. He stated, "The box breathing helps. The five-senses thing feels stupid but I'll try it." He reported that he followed through on giving his gun safe combination to his wife and has not attempted to retrieve it. He has reduced alcohol to "two or three beers" on most evenings and stopped using cannabis "so I can actually remember what I dream."

He reported a significant incident from the previous weekend. He was at a barbecue at his brother's house when a neighbor lit fireworks unexpectedly. The client stated, "I was on the ground. I don't remember hitting the ground. My brother's wife saw me and didn't know what to do. My kids saw me." He reported feeling intensely ashamed and has been avoiding his brother's calls since. He stated, "My nine-year-old asked me later if I was okay. I didn't know what to say to her."

The client disclosed additional information about the combat incident that led to his symptoms. He revealed that he was the team leader during the IED attack and believes he should have identified the threat. He stated, "I keep running it back. The way the ground looked. The way the guy on the overpass was watching us. I should have called it." He reported feeling responsible for the deaths of his two squad members. He stated, "I have not told this to anyone. Not my wife. Not the counselor at the VA five years ago. Not Miguel before he died." He asked you, "What do I do with that?"

His PCL-5 this week is 48. PHQ-9 is 12. AUDIT-C is 4.`,
      questions: [
        {
          id: "david-q6",
          questionNumber: 6,
          domain: "Core counseling attributes",
          stem: `After disclosing that he blames himself for the deaths of squad members, he asks, “What do I do with that?” What is the best initial response?`,
          options: [
            `No one could have known; it was not your fault`,
            `That sounds like a stuck point we should challenge now`,
            `That is a heavy thing to have carried alone; I’m glad you trusted me with it`,
            `Survivor guilt is common in combat veterans`,
          ],
          correctAnswer: 2,
          explanation: `A first disclosure of moral injury/self-blame calls for grounded validation and alliance before cognitive challenge. Reassurance or labeling can be premature and may feel dismissive.`,
        },
        {
          id: "david-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: `From a CPT perspective, his belief “I should have called it” is best understood as:`,
          options: [
            `A stuck point involving hindsight-based responsibility`,
            `A delusion of control over the battlefield`,
            `An avoidance behavior maintained by sleep disruption`,
            `A values clarification statement`,
          ],
          correctAnswer: 0,
          explanation: `The belief reflects a trauma-related stuck point shaped by hindsight bias and responsibility overestimation. It is not delusional, and it is more than a values statement.`,
        },
        {
          id: "david-q8",
          questionNumber: 8,
          domain: "Intake/assessment/diagnosis",
          stem: `He dropped to the ground when fireworks went off and does not remember hitting the ground. What is the most accurate clinical interpretation?`,
          options: [
            `A panic attack unrelated to trauma cues`,
            `A dissociative trauma reaction/flashback with behavioral response`,
            `A voluntary safety behavior`,
            `Evidence of a seizure disorder that explains the PTSD`,
          ],
          correctAnswer: 1,
          explanation: `The sudden behavioral response to a trauma cue with altered awareness is most consistent with a dissociative trauma reaction. Medical concerns can be monitored, but the described context is trauma-linked.`,
        },
        {
          id: "david-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `His children witnessed the barbecue reaction and he is avoiding his brother’s calls. What should treatment target next?`,
          options: [
            `Require a family session before continuing individual trauma work`,
            `Help him address shame and plan an age-appropriate explanation for his children`,
            `Encourage him to avoid gatherings until trauma processing is complete`,
            `Tell his brother the details so family members understand`,
          ],
          correctAnswer: 1,
          explanation: `The immediate clinical target is shame-driven avoidance and age-appropriate family communication. A family session may be useful later, but requiring it or disclosing details without consent is not appropriate.`,
        },
        {
          id: "david-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `He mentions a VA counselor from five years ago and asks whether you can look up those records. What is the most appropriate response?`,
          options: [
            `Access them because they are in the same VA system`,
            `Request records only with his informed written authorization and clarify what you are seeking`,
            `Avoid old records because they may bias your assessment`,
            `Ask his wife to summarize what happened in prior treatment`,
          ],
          correctAnswer: 1,
          explanation: `Prior mental health records should be accessed with informed authorization and a clear clinical purpose. Same-system access does not eliminate confidentiality and consent considerations.`,
        },
      ],
    },
    {
      sessionLabel: "Fifteenth session",
      sectionNarrative: `Your client arrived on time for his fifteenth session and reported substantial change. Over the past ten weeks, you have completed psychoeducation, skill-building, and the early processing phase of Cognitive Processing Therapy. He has worked through multiple stuck points including his beliefs about responsibility for the IED incident. His PCL-5 this week is 28, down from 52 at intake. PHQ-9 is 6. He has maintained reduced alcohol use and has not used cannabis in four months.

He reported a meaningful experience from the previous week. He attended his daughter's school play. He stated, "There were a lot of people. I sat in the back. I used the grounding stuff. And I stayed. I saw her do her part." He had a conversation with his nine-year-old the following morning about what happened at the barbecue. He stated, "I told her what the counselor told me to say. That my brain sometimes thinks I'm still at war, and it takes a minute for me to come back. She said, 'Like when I have a scary dream?' I said, 'Yeah. Kind of like that.'"

The client also reported that he has begun searching for work again and had an interview for a position as a facilities manager at a local hospital. He stated, "I think I can do it. I wasn't sure three months ago." He reported that his wife has noticed the changes and they have been "talking more than we have in years."

He asked you directly, "How do I know if this is going to stick? What happens if I have a bad week six months from now?" He reported that he has been thinking about continuing treatment at a reduced frequency and wants to discuss next steps.`,
      questions: [
        {
          id: "david-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: `With PCL-5 reduction and improved functioning, he asks how to know progress will “stick.” What should you do next?`,
          options: [
            `Reassure him that relapse is unlikely after CPT gains`,
            `Develop a relapse prevention plan with warning signs, coping steps, support contacts, and means-safety review`,
            `Continue weekly sessions indefinitely because PTSD is chronic`,
            `End treatment immediately to reinforce independence`,
          ],
          correctAnswer: 1,
          explanation: `Relapse prevention should translate treatment gains into a concrete maintenance plan, including symptom warning signs and safety considerations. Reassurance or abrupt termination does not prepare him for setbacks.`,
        },
        {
          id: "david-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `He told his daughter, “My brain sometimes thinks I’m still at war.” What makes this response clinically appropriate?`,
          options: [
            `It gives full trauma details so the child understands`,
            `It offers age-appropriate psychoeducation without burdening the child with adult content`,
            `It shifts responsibility for his symptoms to the family`,
            `It functions as exposure therapy for the child`,
          ],
          correctAnswer: 1,
          explanation: `The explanation is developmentally appropriate and reduces confusion without graphic disclosure. It supports family repair and emotional literacy.`,
        },
        {
          id: "david-q13",
          questionNumber: 13,
          domain: "Professional practice and ethics",
          stem: `A potential employer may request medical information for a hospital job. What is your appropriate role?`,
          options: [
            `Write a broad letter stating he is fit for duty`,
            `Advise him to disclose PTSD so the employer cannot accuse him later`,
            `Review possible authorization forms, limits of disclosure, and avoid fitness-for-duty opinions outside your role`,
            `Contact the employer to explain his progress`,
          ],
          correctAnswer: 2,
          explanation: `Counselors should help clients understand disclosure and authorization issues while avoiding employment determinations outside scope. Direct employer advocacy or fitness opinions may create ethical and role problems.`,
        },
        {
          id: "david-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: `He has reduced alcohol use, stopped cannabis, and is interviewing for work. What is the best clinical integration?`,
          options: [
            `Focus only on job readiness now that PTSD symptoms improved`,
            `Explore how work re-entry, sleep, substance use, and PTSD warning signs interact in his maintenance plan`,
            `Warn him that taking a job may destabilize him`,
            `Delay work until he has no trauma symptoms`,
          ],
          correctAnswer: 1,
          explanation: `Work re-entry is a meaningful recovery step but should be integrated with relapse prevention, sleep, substance-use monitoring, and trauma coping. Avoiding work or focusing only on employment misses the whole clinical picture.`,
        },
      ],
    },
  ],
};
