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
    },
  ],
};
