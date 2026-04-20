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
          stem: "Which of the client's reported experiences most clearly meets Criterion B (intrusion symptoms) for PTSD?",
          options: [
            "Avoiding crowds, fireworks, and news coverage",
            "Recurrent involuntary memories of the incident with sensory detail",
            "Feeling detached from his wife and children",
            "Hypervigilance and exaggerated startle response",
          ],
          correctAnswer: 1,
          explanation: "Criterion B (intrusion symptoms) includes recurrent involuntary intrusive memories, distressing dreams, dissociative reactions, and intense psychological distress or physiological reactions to trauma cues. Avoidance is Criterion C, negative alterations in cognition and mood are Criterion D, and hypervigilance falls under Criterion E.",
        },
        {
          id: "david-q2",
          questionNumber: 2,
          domain: "Professional practice and ethics",
          stem: "The client asks whether his VA benefits claim will be affected by the content of his therapy sessions. What is the most appropriate response?",
          options: [
            "Explain that VA benefits reviewers routinely access treatment records",
            "Reassure him that therapy content is fully confidential from all VA processes",
            "Clarify what information can and cannot be shared with benefits reviewers and what authorizations he controls",
            "Tell him you cannot discuss VA policy and refer the question to a benefits counselor",
          ],
          correctAnswer: 2,
          explanation: "Informed consent requires accurate, specific information. VA mental health records can be relevant to benefits determinations in specific circumstances, and the client has rights and control over certain disclosures. Reassurance that is inaccurate and blanket refusal to discuss both fail the informed consent standard.",
        },
        {
          id: "david-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "The client chose a seat with his back to the wall and scans the room intermittently. What is the most appropriate response to this behavior?",
          options: [
            "Ignore it to avoid drawing attention",
            "Name it gently and acknowledge it as a trauma response that makes sense",
            "Reassure him that he is safe in your office",
            "Suggest he try to sit somewhere with less visibility to the door",
          ],
          correctAnswer: 1,
          explanation: "Trauma-informed care involves naming observable responses with respect, framing them as adaptive responses to past experiences rather than pathology. This supports safety without dismissing the underlying vigilance or pressuring him to perform calmness.",
        },
        {
          id: "david-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: "The client's alcohol and cannabis use raises clinical concern. What is the most appropriate next step?",
          options: [
            "Require abstinence as a condition of continued treatment",
            "Assess the function of the substance use and its relationship to trauma symptoms",
            "Refer immediately to inpatient substance use treatment",
            "Address it only if it interferes with attendance",
          ],
          correctAnswer: 1,
          explanation: "Substance use in PTSD frequently serves as avoidance or self-medication for symptoms. Understanding its function guides integrated treatment. Requiring abstinence as a precondition is not trauma-informed and can prevent treatment engagement; immediate inpatient referral is not indicated at this severity.",
        },
        {
          id: "david-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: 'The client says he is "not doing any of that talking-about-it stuff today." What is the most appropriate treatment plan for the first phase of therapy?',
          options: [
            "Begin Prolonged Exposure protocol immediately to build momentum",
            "Focus on stabilization, skill-building, and psychoeducation before trauma processing",
            "Postpone treatment until he is willing to engage in exposure work",
            "Refer him to a trauma specialist since he is not ready for therapy",
          ],
          correctAnswer: 1,
          explanation: "Phase-based trauma treatment begins with stabilization: safety, skills, psychoeducation, and alliance-building. Moving to trauma processing before stabilization risks destabilization and dropout. Respecting his pace supports eventual engagement in evidence-based trauma treatment.",
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
          stem: 'The client asks, "What do I do with that?" after disclosing his sense of responsibility for his squad members\' deaths. What is the most appropriate initial response?',
          options: [
            '"It wasn\'t your fault. No one could have predicted that."',
            '"That\'s a heavy thing to carry alone. Thank you for trusting me with it."',
            '"We should address this with cognitive restructuring to change that belief."',
            '"Have you considered that you may have survivor\'s guilt?"',
          ],
          correctAnswer: 1,
          explanation: "Meeting a first-time disclosure of moral injury with presence and acknowledgment, rather than correction or reassurance, preserves the therapeutic alliance and honors the weight of the disclosure. Challenging the belief prematurely can feel invalidating; labeling it as survivor's guilt is technical before it is relational.",
        },
        {
          id: "david-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: 'From a Cognitive Processing Therapy (CPT) perspective, what kind of belief is the client expressing when he says, "I should have called it"?',
          options: [
            "A just-world belief",
            "A stuck point related to hindsight bias",
            "A thought-action fusion",
            "A dissociative intrusion",
          ],
          correctAnswer: 1,
          explanation: 'In CPT, "stuck points" are beliefs that prevent recovery, often involving hindsight-based self-blame ("I should have known"). Recognizing these as products of hindsight rather than accurate assessments of what was knowable in the moment is central to trauma processing.',
        },
        {
          id: "david-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: "The client described dropping to the ground at the barbecue when fireworks went off. What is this response best understood as?",
          options: [
            "A panic attack",
            "A dissociative flashback with a behavioral response",
            "A voluntary safety behavior",
            "A hypomanic symptom",
          ],
          correctAnswer: 1,
          explanation: "An involuntary behavioral response to a trauma trigger, occurring without conscious awareness, is characteristic of a dissociative flashback. The client noted he did not remember hitting the ground, indicating altered awareness at the moment of the response.",
        },
        {
          id: "david-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: "The client is avoiding his brother's calls because his children witnessed his trauma response. What is the most appropriate treatment focus?",
          options: [
            "Refer the family for family therapy immediately",
            "Work on his shame and help him consider how to talk with his children",
            "Instruct him to call his brother this week as a homework assignment",
            "Focus only on individual trauma work and leave family matters to family therapy",
          ],
          correctAnswer: 1,
          explanation: "Shame about trauma responses often maintains isolation and avoidance. Addressing the shame directly and supporting the client in considering age-appropriate conversation with his children is a core part of integrated trauma treatment. Directives to repair the relationship before working on shame miss the underlying therapeutic opportunity.",
        },
        {
          id: "david-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "The client mentions the counselor he saw at the VA five years ago. He asks whether you can access those records. What is the most appropriate response?",
          options: [
            "Access the records since you work within the same VA system",
            "Explain that you can request the records with his written authorization",
            "Tell him those records are too old to be relevant",
            "Suggest he request them himself and bring copies",
          ],
          correctAnswer: 1,
          explanation: "Even within the same system, accessing prior mental health records requires written authorization. Informed consent for records requests is a core ethical practice and preserves the client's control over his information.",
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
          stem: 'The client asks how he will know if his progress will "stick." What is the most appropriate focus for this phase of treatment?',
          options: [
            "Reassure him that his symptoms are unlikely to return given his progress",
            "Develop a relapse prevention plan including warning signs, coping strategies, and when to return",
            "Recommend he continue weekly sessions indefinitely to prevent relapse",
            "Tell him that concern about relapse is itself a trauma response",
          ],
          correctAnswer: 1,
          explanation: "A written relapse prevention plan — identifying early warning signs, specific coping strategies, and criteria for returning to treatment — is a core component of evidence-based trauma treatment. It supports the client's agency and provides structure for the post-treatment phase.",
        },
        {
          id: "david-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: 'The client told his nine-year-old, "My brain sometimes thinks I\'m still at war." What skill is he modeling?',
          options: [
            "Cognitive restructuring",
            "Distress tolerance",
            "Age-appropriate psychoeducation and emotional literacy",
            "Exposure and response prevention",
          ],
          correctAnswer: 2,
          explanation: "Translating complex trauma concepts into age-appropriate language for his child is a form of psychoeducation and emotional literacy. It models healthy communication about mental health within the family and reduces shame and confusion for the child.",
        },
        {
          id: "david-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: 'The client says, "I wasn\'t sure three months ago." What does this statement reflect about his internal experience?',
          options: [
            "A cognitive distortion about the past",
            "Emerging self-efficacy and recognition of change",
            "Minimization of current functioning",
            "A need for additional validation from the counselor",
          ],
          correctAnswer: 1,
          explanation: "Recognizing that one's current functioning differs from an earlier internal state reflects growing self-awareness and self-efficacy. This kind of insight is a key marker of therapeutic progress and supports sustained change.",
        },
        {
          id: "david-q14",
          questionNumber: 14,
          domain: "Professional practice and ethics",
          stem: "The client is being considered for a hospital job requiring a background check including medical records. What is the most appropriate action?",
          options: [
            "Provide a letter of support to strengthen his application",
            "Discuss the scope and limits of any records that might be requested and review authorizations with him",
            "Tell him to disclose his PTSD on the application to avoid complications later",
            "Contact the hospital to advocate on his behalf",
          ],
          correctAnswer: 1,
          explanation: "The counselor's role is to inform the client about his rights and what he controls regarding disclosure of records, not to intervene in the employment process or make disclosure decisions for him. Letters of support or employer contact create dual-role conflicts.",
        },
      ],
    },
  ],
};
