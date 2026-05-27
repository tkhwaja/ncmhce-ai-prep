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
          stem: `David's symptoms intensified after the funeral of a former unit member. Which single feature most clearly supports PTSD rather than complicated grief or Adjustment Disorder?`,
          options: [
            `Sleep disturbance and increased irritability over the past three months.`,
            `Trauma-cue–triggered intrusive sensory re-experiencing of the IED event with associated avoidance and hyperarousal that began well before the funeral.`,
            `Marked distress and functional impairment following the funeral.`,
            `Persistent feelings of detachment from family members.`,
          ],
          correctAnswer: 1,
          explanation: `PTSD criteria require all four symptom clusters (intrusion, avoidance, negative cognitions/mood, arousal) tied to a Criterion A trauma. Sleep, distress after the funeral, and detachment occur in grief and adjustment disorders as well; the trauma-specific intrusive re-experiencing is the decisive feature.`,
        },
        {
          id: "david-q2",
          questionNumber: 2,
          domain: "Professional practice and ethics",
          stem: `He reports passive thoughts that his family "would be better off" and has firearms locked in a home safe. What is the most appropriate immediate clinical action?`,
          options: [
            `Call his wife from the session, with his consent, and request that she change the safe combination today.`,
            `Conduct a structured suicide risk assessment, then collaboratively develop a means-safety plan including temporary firearm storage outside the home if indicated.`,
            `Document passive ideation without intent or plan and continue with the standard intake.`,
            `Refer him for voluntary inpatient evaluation given combat history and firearm access.`,
          ],
          correctAnswer: 1,
          explanation: `Passive ideation with firearm access requires structured risk assessment and collaborative means-restriction planning. Routing means-safety through his wife without first engaging him directly bypasses his agency; deferring action to documentation misses the clinical priority; inpatient referral is reserved for imminent risk.`,
        },
        {
          id: "david-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: `David sits with his back to the wall and watches the door throughout the session. Which response best balances trauma-informed care with clinical movement?`,
          options: [
            `You're safe here — this clinic doesn't have any of the risks you're scanning for.`,
            `I notice you chose a seat where you can see the door; does that arrangement help you feel more present here?`,
            `That hypervigilance is a PTSD symptom we'll need to extinguish through gradual exposure to less-controlled seating.`,
            `Would you be open to facing away from the door next session to start desensitizing the response?`,
          ],
          correctAnswer: 1,
          explanation: `Gently naming the behavior and inviting collaboration honors the client's autonomy and the trauma-informed principle of choice. Reassurance dismisses the vigilance, labeling it a symptom to extinguish pathologizes a coping behavior early in care, and assigning seating exposure is premature before stabilization.`,
        },
        {
          id: "david-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: `He drinks 4–6 beers most evenings and uses cannabis nightly for sleep. What information is most clinically essential before deciding how to address substance use in this case?`,
          options: [
            `Whether his wife has expressed concern about either substance.`,
            `The function and timing of each substance relative to PTSD avoidance, nightmares, hyperarousal, and re-experiencing.`,
            `Whether he is prepared to commit to abstinence as a condition of continuing trauma-focused therapy.`,
            `Whether cannabis is legal under state law where he resides.`,
          ],
          correctAnswer: 1,
          explanation: `In co-occurring PTSD and substance use, the functional relationship between substance use and trauma symptoms drives the treatment plan. Partner concern, abstinence commitments, and legal status are real factors but secondary to functional assessment.`,
        },
        {
          id: "david-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: `David tells you he is not ready for "talking-about-it stuff" after you describe trauma-focused options. What is the most appropriate first-phase plan?`,
          options: [
            `Begin imaginal exposure now in a graded way, since avoidance will otherwise strengthen.`,
            `Decline to deliver active treatment until he agrees to a full trauma protocol with a defined endpoint.`,
            `Implement Phase 1 stabilization: psychoeducation, grounding/affect-regulation skills, sleep work, risk monitoring, and joint planning for later trauma processing.`,
            `Set PTSD aside and focus on marital communication until intrusion symptoms remit.`,
          ],
          correctAnswer: 2,
          explanation: `When a client is not ready for trauma processing, evidence-based care follows a phased model: stabilization first, then trauma-focused work when readiness and resources are adequate. Forcing imaginal exposure violates informed consent; gatekeeping treatment is coercive; reassigning the case to marital work avoids the central diagnosis.`,
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
          stem: `After disclosing he blames himself for his squad members' deaths, he asks, "What do I do with that?" What is the best initial response?`,
          options: [
            `No one could have called that IED with what you had — that's the kind of belief CPT helps us correct.`,
            `That's a stuck point we'll need to work through, and CPT is exactly the protocol for it.`,
            `Carrying that alone for years takes something out of a person — I'm glad you trusted me with it.`,
            `Survivor guilt and moral injury are well-documented in combat veterans and very treatable.`,
          ],
          correctAnswer: 2,
          explanation: `A first disclosure of moral injury calls for grounded presence and alliance-strengthening before reframing, technique, or normalization. Each of the other options is technically accurate and may belong in a later session, but each shortcuts the relational moment.`,
        },
        {
          id: "david-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: `Within Cognitive Processing Therapy, his belief "I should have called it" is best conceptualized as:`,
          options: [
            `A stuck point reflecting hindsight bias and assimilated overresponsibility for the trauma outcome.`,
            `An overaccommodated belief about personal danger that has generalized to other settings.`,
            `A trauma-related avoidance behavior maintained by ongoing sleep disruption.`,
            `A values-based commitment statement about leadership accountability.`,
          ],
          correctAnswer: 0,
          explanation: `In CPT, "should have known/should have called it" beliefs are classic assimilated stuck points driven by hindsight bias and over-responsibility for the trauma. Overaccommodation refers to overgeneralized beliefs about ongoing danger or self/other (e.g., "no one can be trusted"); avoidance and values commitments are different constructs.`,
        },
        {
          id: "david-q8",
          questionNumber: 8,
          domain: "Intake/assessment/diagnosis",
          stem: `He dropped to the ground when fireworks went off and cannot remember hitting the ground. What is the most accurate clinical interpretation?`,
          options: [
            `An unexpected panic attack triggered by ambient noise.`,
            `A trauma-cue–driven flashback with peritraumatic dissociation and an automatic motor response.`,
            `A learned safety behavior consistent with combat training, not a clinical symptom.`,
            `A possible seizure event that requires medical workup before continuing PTSD treatment.`,
          ],
          correctAnswer: 1,
          explanation: `The combination of a clear trauma cue, altered awareness during the event, and an automatic protective motor response is consistent with a dissociative flashback. Panic lacks the trauma cue specificity; trained safety behavior is voluntary and remembered; seizure workup is not indicated by this presentation alone.`,
        },
        {
          id: "david-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `His children witnessed the barbecue reaction and he is now avoiding his brother's calls. What should treatment target next?`,
          options: [
            `Require a family session with his brother before continuing individual trauma work.`,
            `Address shame-driven avoidance and develop age-appropriate language he can use with his children about what happened.`,
            `Pause social gatherings until trauma processing is further along.`,
            `Coordinate with his brother to share a summary of the PTSD diagnosis so the family responds appropriately.`,
          ],
          correctAnswer: 1,
          explanation: `The immediate clinical target is the shame cycle and the relational rupture with his children; concrete, age-appropriate language gives him agency and protects the relationships. Requiring a family session imposes the counselor's plan; avoidance of gatherings reinforces the symptom; sharing his diagnosis without his consent violates confidentiality.`,
        },
        {
          id: "david-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `He mentions a VA counselor from five years ago and asks if you can pull those records since you both work in the VA system. What is the most appropriate response?`,
          options: [
            `Access them through the shared VA record system since same-system access does not require separate authorization.`,
            `Discuss what clinical questions the prior records would answer, obtain written authorization, and request only the records needed.`,
            `Decline to access old records because prior diagnoses may bias your current assessment.`,
            `Ask his wife to summarize what she remembers from prior treatment as a faster alternative.`,
          ],
          correctAnswer: 1,
          explanation: `Mental health record access requires informed written authorization regardless of system continuity (ACA B.6.g), and the scope of release should match the clinical purpose. Declining records reflexively or substituting a spouse's recollection misses both the clinical value of accurate history and the ethics framework.`,
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
          stem: `David asks how to know if his progress will "stick." What is the best next step?`,
          options: [
            `Reassure him that CPT response is durable and relapse rates are low for clients who completed the protocol.`,
            `Develop a written relapse-prevention plan with personalized warning signs, trauma-cue coping steps, support contacts, and a means-safety review.`,
            `Maintain weekly sessions indefinitely because combat-related PTSD has a chronic course.`,
            `Schedule a structured taper to monthly sessions immediately to reinforce independent skill use.`,
          ],
          correctAnswer: 1,
          explanation: `A concrete maintenance plan translates treatment gains into a durable framework. Reassurance about durability misrepresents the evidence base; defaulting to indefinite weekly care or to immediate taper substitutes a schedule for clinical decision-making.`,
        },
        {
          id: "david-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `He told his daughter, "My brain sometimes thinks I'm still at war." What makes this developmentally and clinically appropriate?`,
          options: [
            `It offers age-appropriate psychoeducation that names the experience without exposing the child to adult trauma content.`,
            `It shifts emotional responsibility onto the child so she can become a regulating presence for him.`,
            `It functions as an in vivo exposure exercise for her by introducing trauma language.`,
            `It serves as a confession that prevents future shame for both father and child.`,
          ],
          correctAnswer: 0,
          explanation: `Naming the experience in concrete, non-graphic language matches the developmental level of a 9-year-old and supports family repair. The other framings either misuse the child as a regulator, misapply exposure therapy outside its context, or moralize a developmental conversation.`,
        },
        {
          id: "david-q13",
          questionNumber: 13,
          domain: "Professional practice and ethics",
          stem: `A potential hospital employer requests medical information. What is the most appropriate role for you?`,
          options: [
            `Provide a fitness-for-duty letter confirming he can perform facilities-manager duties safely.`,
            `Help him understand applicable authorization forms, the minimum-necessary standard, and explicit limits on what you can and cannot opine on within your role.`,
            `Advise him to disclose his PTSD diagnosis proactively to avoid future ADA disputes.`,
            `Contact the employer to share his treatment progress in support of his application.`,
          ],
          correctAnswer: 1,
          explanation: `Counselors should support informed authorization decisions and stay within scope; fitness-for-duty determinations and unsolicited employer contact exceed the role. Whether to disclose is a client decision that depends on context and risk, not a uniform recommendation.`,
        },
        {
          id: "david-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: `He has reduced alcohol, stopped cannabis, and is interviewing for work. What is the best clinical integration of these changes?`,
          options: [
            `Pivot the focus to job-readiness coaching now that PTSD symptoms have meaningfully reduced.`,
            `Map how work re-entry, sleep, substance use, and PTSD early-warning signs interact within his maintenance plan.`,
            `Warn him that major life changes can destabilize PTSD recovery and recommend a 6-month hold on accepting new responsibilities.`,
            `Recommend he delay accepting any position until his PCL-5 falls below 20.`,
          ],
          correctAnswer: 1,
          explanation: `Integrated maintenance planning links his strengths and risk factors into one coherent framework. Pivoting to job-coaching narrows the work; warning against change or pegging job acceptance to a score over-pathologizes a healthy step.`,
        },
      ],
    },
  ],
};
