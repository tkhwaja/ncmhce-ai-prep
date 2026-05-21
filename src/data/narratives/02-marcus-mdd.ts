import type { Narrative } from "./types";

// NARRATIVE 02 — MARCUS B. (Major Depressive Disorder, Moderate, with Anxious Distress)
// Adapted to codebase schema: capitalized difficulty, added category, dropped estimatedTimeMinutes.
export const marcusMdd: Narrative = {
  id: "02-marcus-mdd",
  title: "Marcus — Major Depressive Disorder",
  category: "Mood Disorders",
  difficulty: "Beginner",

  clientInfo: {
    age: 42,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Black/African American",
    relationshipStatus: "Married",
    setting: "Community mental health center",
    payment: "Medicaid",
    typeOfCounseling: "Individual",
    provisionalDiagnosis:
      "Major Depressive Disorder, single episode, moderate, with anxious distress: F32.1",
  },

  presentingProblem: `You are a licensed mental health counselor at a community mental health center. Your client was referred by his primary care physician after screening positive for depression during a routine visit. He stated, "My doctor said I should come here. My wife has been asking me to get help for months. I figured I should stop dragging my feet."

The client reported that he has been feeling "off" for about four months, since he was laid off from his position as a shift supervisor at a manufacturing plant where he had worked for fourteen years. He stated, "I keep thinking I should be further along by now. I apply for jobs and nothing comes of it. I sit in the house most days and my wife comes home to find me in the same chair." He described feeling sad and "empty" most of the day, nearly every day, for the past three months. He reported diminished interest in fishing ("I used to go every weekend, I haven't been out in two months") and watching football ("I'll sit there with the TV on but I don't really care who wins").

The client reported sleeping nine to eleven hours a night and still feeling "exhausted all day." He has gained fifteen pounds over the past three months, attributing it to "eating whatever, whenever." He reported difficulty concentrating — "I start reading a job listing and by the end I can't remember what it said." He endorsed feelings of worthlessness, stating, "My wife is still working full-time and taking care of everything. I should be providing. I feel like a burden." He reported recurrent thoughts that his family would be "better off with the insurance money" but denied any active suicidal ideation, plan, or intent. He stated, "I would never do that to them. But the thought creeps in."

The client also reported significant worry and restlessness. He stated, "I catch myself pacing the kitchen at two in the morning thinking about money, about my kids, about what happens if my wife loses her job too." He described tension in his chest and stomach "like something bad is about to happen." This is his first experience with counseling.`,

  mentalStatusObservation: `Your client presented casually dressed in a polo shirt and jeans. He was alert and oriented to person, place, time, and situation. His grooming was adequate but he reported not having shaved in "a few days." Eye contact was limited — he often looked at the floor while speaking. Speech was slow but coherent, with long pauses before answering questions. Mood was reported as "down, just down." Affect was blunted and congruent with reported mood. Psychomotor retardation was observed. Thought processes were linear but slow. Thought content was notable for themes of worthlessness, failure, and concern about being a burden. He denied current suicidal ideation with plan or intent but endorsed passive thoughts that his family would be "better off." He denied homicidal ideation. No delusions or hallucinations were noted. He has not experienced a manic or hypomanic episode. He reported drinking two to three beers most evenings, an increase from his prior pattern of weekends only. He denied illicit substance use. He had a physical exam one month ago; labs including thyroid and vitamin D were within normal limits.`,

  familyHistory: `The client is the middle of three children. His father passed away from a heart attack five years ago. His mother, age 68, lives in the same city and has hypertension. The client reported a close relationship with his mother and older sister. His younger brother "struggles with alcohol" and is currently estranged from the family. The client's maternal grandmother was "always sad and tired" according to family stories; she was never formally diagnosed or treated. No known family history of bipolar disorder, schizophrenia, or completed suicide. His father had "nerves" and took medication "for stress" for many years, though the client is unsure what the medication was.`,

  workHistory: `The client worked at the same manufacturing plant for fourteen years, starting as a line worker and promoted to shift supervisor six years ago. He was laid off four months ago when the plant closed a production line. He received a modest severance package and has been drawing unemployment. He stated, "I've had three interviews. Nothing stuck. I think they look at me and see an old worn-out version of myself." He has a high school diploma and some community college coursework. His wife works full-time as a registered nurse. They have two children, ages 11 and 14, both in public school. The family is current on their mortgage but the client stated, "We're burning through savings. I don't know how much longer we can go like this."`,

  intakeSessionSummary: `You administered the PHQ-9. The client scored 18, reflecting moderately severe depression. You administered the GAD-7; he scored 14, indicating moderate anxiety. You discussed the scores with him. You asked directly about suicidal ideation using the Columbia Suicide Severity Rating Scale; he endorsed passive ideation without intent, plan, or access to lethal means beyond what exists in any household. You collaboratively developed a preliminary safety plan including contacting his wife if suicidal thoughts intensify, removing his hunting rifle to his brother-in-law's house (which he agreed to do that day), and the 988 crisis line. You recommended weekly sessions and offered a referral to the psychiatrist on staff for medication evaluation. The client agreed to the referral and to weekly sessions. You scheduled the next appointment for one week.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "marcus-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: `Which feature most strongly supports Major Depressive Disorder rather than Adjustment Disorder with depressed mood?`,
          options: [
            `The episode began after he was laid off.`,
            `He feels ashamed that his wife is working while he is unemployed.`,
            `He has a multi-month syndrome including depressed mood, anhedonia, sleep and appetite change, impaired concentration, worthlessness, passive death thoughts, and functional impairment.`,
            `He worries about finances and his children.`,
          ],
          correctAnswer: 2,
          explanation: `The presence of a full depressive syndrome with neurovegetative symptoms, worthlessness, passive death ideation, and impairment supports MDD. A stressor can precipitate MDD; the existence of a layoff does not make Adjustment Disorder the better diagnosis.`,
        },
        {
          id: "marcus-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: `The client says his family would be “better off with the insurance money.” What is the best immediate clinical response?`,
          options: [
            `Document passive ideation and continue the intake because he denies active intent.`,
            `Assess suicidal intent, plan, means, access to lethal methods, past behavior, protective factors, and collaborate on safety steps.`,
            `Call emergency services because the statement includes a financial motive.`,
            `Ask his wife to monitor him because she is the main protective factor.`,
          ],
          correctAnswer: 1,
          explanation: `The statement requires direct suicide risk assessment and safety planning. Denial of intent lowers but does not eliminate concern; immediate emergency action is not automatically indicated without imminent risk.`,
        },
        {
          id: "marcus-q3",
          questionNumber: 3,
          domain: "Treatment planning",
          stem: `Which initial treatment plan best fits the client’s presentation?`,
          options: [
            `Behavioral activation, suicide-risk monitoring, problem-solving around work stress, and medication evaluation coordination.`,
            `Employment coaching only, since the depression is caused by unemployment.`,
            `Couples counseling as the primary intervention because his wife is affected.`,
            `Delay therapy until the medication evaluation determines whether symptoms are biological.`,
          ],
          correctAnswer: 0,
          explanation: `His depression includes behavioral withdrawal, passive death ideation, functional impairment, and anxious distress. A combined plan addressing activation, risk, practical stressors, and prescriber coordination is more complete than reducing the case to employment or medication.`,
        },
        {
          id: "marcus-q4",
          questionNumber: 4,
          domain: "Professional practice and ethics",
          stem: `The client agrees to move his hunting rifle to his brother-in-law’s house. What is the most appropriate way to handle this safety step?`,
          options: [
            `Treat the agreement as sufficient and avoid revisiting firearms unless suicidal intent returns.`,
            `Document the plan, confirm follow-through, and continue reassessing access to lethal means as risk changes.`,
            `Require his wife to remove all household knives and medications as well.`,
            `Report firearm ownership to authorities because he has passive death ideation.`,
          ],
          correctAnswer: 1,
          explanation: `Means safety is an ongoing collaborative process. The clinician should document and monitor the agreed step without treating it as a one-time cure or escalating beyond what risk indicates.`,
        },
        {
          id: "marcus-q5",
          questionNumber: 5,
          domain: "Core counseling attributes",
          stem: `He says, “I should be providing. I feel like a burden.” What is the most therapeutic response?`,
          options: [
            `You are not a burden because your wife still loves you.`,
            `Your job loss has injured your sense of role and worth, not just your income.`,
            `Many people lose jobs and recover with persistence.`,
            `Let’s challenge the thought that a man must always provide.`,
          ],
          correctAnswer: 1,
          explanation: `The response reflects the meaning of the loss without prematurely reassuring or debating his belief system. It opens clinical space for identity, role, and worth.`,
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      sectionNarrative: `Your client arrived on time and reported that he began taking an SSRI prescribed by the clinic psychiatrist two weeks ago. He reported some initial nausea and early morning waking that has since resolved. He stated, "I don't feel different yet, but I'm sticking with it." His PHQ-9 this week is 16, a minimal reduction from intake. His GAD-7 is 12.

He completed two of three agreed-upon behavioral activation tasks in the past week. He went fishing on Saturday morning with an old friend from the plant. He stated, "It was good. For about twenty minutes I forgot about everything. Then I came home and it all came back." He did not complete the second task, which was to attend his son's middle school basketball game. He stated, "I told my wife I would go. Then I got in the car and I couldn't make myself drive there. I sat in the driveway for twenty minutes and then went back inside." He reported feeling "ashamed" about missing the game. His son has not spoken to him directly about it.

The client disclosed that his alcohol use has increased. He reported drinking four to five beers most evenings and occasionally a whiskey before bed. He stated, "It's the only thing that quiets my head enough to sleep. My wife noticed. She said something last night." He denied morning drinking, withdrawal symptoms, or drinking during the day. He denied driving after drinking. He stated, "I know it's not helping. But I don't know what else to do at ten at night when I can't stop thinking."

He reported that he has applied to four additional jobs this week, including two outside his field. He had a phone interview scheduled for this upcoming week. He removed the rifle to his brother-in-law's house as agreed in the first session and has not requested it back.`,
      questions: [
        {
          id: "marcus-q6",
          questionNumber: 6,
          domain: "Professional practice and ethics",
          stem: `He has taken the SSRI for two weeks and says he does not feel different yet. What is the best counseling response?`,
          options: [
            `Encourage him to stop if he has not improved after two weeks.`,
            `Normalize that response can take several weeks, encourage communication with the prescriber about concerns, and continue therapy targets.`,
            `Tell him medication is unlikely to help because behavioral activation worked briefly.`,
            `Suggest increasing the dose if nausea has resolved.`,
          ],
          correctAnswer: 1,
          explanation: `The counselor should stay within scope, support adherence and prescriber communication, and continue psychotherapy. Dose changes or stopping medication are prescriber decisions.`,
        },
        {
          id: "marcus-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: `After fishing, he says he felt better for twenty minutes and then everything came back. What is the best clinical interpretation?`,
          options: [
            `Behavioral activation is not effective if mood improvement does not last.`,
            `The activity still matters because activation targets withdrawal and builds contact with mastery or pleasure before mood fully shifts.`,
            `The fishing task should be replaced with job applications because practical progress is more important.`,
            `He should only repeat activities that improve mood for the entire day.`,
          ],
          correctAnswer: 1,
          explanation: `Behavioral activation is not judged solely by immediate sustained happiness. Re-engagement can interrupt avoidance, increase contact with reinforcement, and gradually rebuild functioning.`,
        },
        {
          id: "marcus-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: `He missed his son’s basketball game and describes feeling ashamed. What response best supports treatment?`,
          options: [
            `Missing the game is understandable given depression, so he should not feel guilty.`,
            `Let’s look at the moment in the driveway with curiosity instead of using it as evidence that you failed your son.`,
            `Your son probably understands more than you think.`,
            `You need to attend the next game even if you feel depressed.`,
          ],
          correctAnswer: 1,
          explanation: `This response reduces shame while analyzing the avoidance chain. Reassurance or directives may bypass the clinical learning needed to plan the next step.`,
        },
        {
          id: "marcus-q9",
          questionNumber: 9,
          domain: "Intake/assessment/diagnosis",
          stem: `His alcohol use has increased to four to five beers most evenings plus occasional whiskey before bed. What is the most appropriate clinical step?`,
          options: [
            `Diagnose Alcohol Use Disorder immediately and refer him out.`,
            `Assess quantity, frequency, withdrawal risk, function of use, consequences, and readiness to change while integrating it into the depression plan.`,
            `Focus on depression first because alcohol use is clearly secondary.`,
            `Recommend total abstinence before continuing depression treatment.`,
          ],
          correctAnswer: 1,
          explanation: `The alcohol use is clinically significant and may worsen depression, sleep, medication response, and safety. It requires integrated assessment rather than immediate diagnostic closure, dismissal, or treatment exclusion.`,
        },
        {
          id: "marcus-q10",
          questionNumber: 10,
          domain: "Treatment planning",
          stem: `He removed the rifle as planned and denies requesting it back. What should the counselor do now?`,
          options: [
            `Praise the step and remove suicide risk monitoring from the treatment plan.`,
            `Review the safety plan, reinforce follow-through, and reassess risk in light of alcohol use, shame, and ongoing depressive symptoms.`,
            `Tell him the rifle can return once medication begins working.`,
            `Shift all safety responsibility to his wife because the firearm is no longer in the home.`,
          ],
          correctAnswer: 1,
          explanation: `Means safety is protective, but risk monitoring continues because depression, alcohol use, and shame remain active. The plan should be reviewed and adjusted as the clinical picture changes.`,
        },
      ],
    },
    {
      sessionLabel: "Tenth session",
      sectionNarrative: `Your client arrived on time and reported significant changes since the previous session. His PHQ-9 this week is 8, down from 18 at intake. His GAD-7 is 7. He has been taking his SSRI consistently for eight weeks and reported that he "feels like the fog is lifting." He started a new job three weeks ago as an operations manager at a smaller manufacturing company. The pay is less than his previous position but he stated, "I'm back in a plant. I know this work. I can do this work." He has been sleeping seven to eight hours per night and waking with enough energy to leave the house by seven AM.

He reported reducing his alcohol consumption to "maybe a beer or two on weekends" following the AUDIT-based discussion and a conversation with his wife. He stated, "It wasn't easy for the first week or two. But I was using it to avoid, and I don't need to avoid as much right now."

He attended three of his son's basketball games over the past month and reported a meaningful conversation with his son last weekend. He stated, "He told me he noticed I was around more. That hit me harder than I expected." He has resumed fishing on Saturday mornings.

The client also reported that he has been thinking about what he learned in therapy and whether he is ready to taper sessions. He stated, "I don't want to rush it. But I also feel like I need to trust myself to keep doing this on my own." He asked you directly, "How do I know when I'm ready to stop?" He reported that his wife is supportive of whatever he decides but is "proud of the work" he has done.

He denied any return of passive suicidal thoughts. The rifle remains at his brother-in-law's house. He stated, "I'll get it back eventually. Not yet. Maybe when the kids are older."`,
      questions: [
        {
          id: "marcus-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: `The client asks how he will know when he is ready to stop therapy. What is the best response?`,
          options: [
            `Because his PHQ-9 is now mild, he is ready to terminate.`,
            `Collaboratively review goals, warning signs, coping plans, supports, medication follow-up, and consider spacing sessions before ending.`,
            `Recommend continuing weekly therapy until he has no depressive symptoms for a year.`,
            `Tell him termination should be decided by the psychiatrist because he is taking medication.`,
          ],
          correctAnswer: 1,
          explanation: `Termination should be collaborative and planned. Symptom improvement is important but should be integrated with relapse-prevention planning and continuity of medication care.`,
        },
        {
          id: "marcus-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `Which relapse-prevention target is most important given his history?`,
          options: [
            `Avoiding all reminders of the layoff to prevent depressive rumination.`,
            `Identifying early signs such as withdrawal, missed family activities, increased alcohol use, and passive death thoughts.`,
            `Stopping behavioral activation once he feels motivated again.`,
            `Focusing primarily on job performance because employment solved the depression.`,
          ],
          correctAnswer: 1,
          explanation: `Relapse prevention should identify the client’s specific early warning signs and action steps. His history shows withdrawal, alcohol use, shame, and passive death ideation as important signals.`,
        },
        {
          id: "marcus-q13",
          questionNumber: 13,
          domain: "Professional practice and ethics",
          stem: `He says the rifle remains at his brother-in-law’s house and adds, “I’ll get it back eventually. Not yet.” What is the best clinical response?`,
          options: [
            `Agree that he can retrieve it when his PHQ-9 is below 5.`,
            `Explore what would make return of the firearm safer or riskier, include it in relapse-prevention planning, and reassess collaboratively over time.`,
            `Tell him he should never own a firearm again.`,
            `Avoid discussing the rifle because he denies suicidal thoughts.`,
          ],
          correctAnswer: 1,
          explanation: `The response maintains collaborative safety planning without making rigid promises, avoiding the topic, or giving absolute directives outside the therapeutic role.`,
        },
        {
          id: "marcus-q14",
          questionNumber: 14,
          domain: "Core counseling attributes",
          stem: `He says he needs to “trust myself to keep doing this on my own.” What response best fits this phase?`,
          options: [
            `That confidence suggests treatment has worked and can end today.`,
            `Let’s define what trusting yourself would look like in behaviors, supports, and a plan for setbacks.`,
            `Self-trust can be dangerous when depression has included suicidal thoughts.`,
            `You should wait until your wife agrees you are ready.`,
          ],
          correctAnswer: 1,
          explanation: `The response supports autonomy while grounding it in observable behaviors and safeguards. It avoids abrupt termination, undermining self-trust, or giving decision-making authority to someone else.`,
        },
      ],
    },
  ],
};
