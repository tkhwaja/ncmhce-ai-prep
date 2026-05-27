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
          stem: `Marcus's symptoms began after a plant closure four months ago. He endorses depressed mood, anhedonia, early-morning awakening, 12-pound weight loss, poor concentration, worthlessness, and passive thoughts that his family would be better off without him. Which single feature most clearly supports MDD over Adjustment Disorder with depressed mood?`,
          options: [
            `The episode began after an identifiable psychosocial stressor.`,
            `He endorses shame related to his wife now serving as primary earner.`,
            `He meets the full symptom count and 2-week duration with passive death ideation and clear functional impairment, regardless of the precipitating stressor.`,
            `He has a paternal history of completed suicide.`,
          ],
          correctAnswer: 2,
          explanation: `MDD and Adjustment Disorder are distinguished by symptom count, duration, and severity rather than the presence or absence of a stressor; an identifiable stressor does not exclude MDD. The full syndrome with passive SI and impairment exceeds Adjustment Disorder criteria. Family history raises risk but does not establish the current diagnosis.`,
        },
        {
          id: "marcus-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: `He says his family would be "better off with the insurance money." Following the C-SSRS workflow, what is the next step within the same session?`,
          options: [
            `Document passive ideation, confirm no plan or intent, and proceed with the rest of the intake.`,
            `Assess ideation frequency, intensity, controllability, intent, plan, preparatory behavior, lifetime attempts, and current access to lethal means before continuing.`,
            `Initiate a voluntary emergency department evaluation given the financial motive in the statement.`,
            `Contact his wife from session, with his consent, to begin means restriction immediately.`,
          ],
          correctAnswer: 1,
          explanation: `The C-SSRS sequence and any structured risk framework require moving from a passive statement into structured assessment of ideation intensity, intent, plan, behavior, history, and means access. ED evaluation may follow if risk indicates imminent danger; collateral contact can be appropriate but is not the next step before the risk picture is complete.`,
        },
        {
          id: "marcus-q3",
          questionNumber: 3,
          domain: "Treatment planning",
          stem: `Which initial treatment plan best matches Marcus's presentation?`,
          options: [
            `Behavioral activation, structured suicide-risk monitoring, problem-solving around financial and role stress, and warm handoff to the on-site psychiatrist for medication evaluation.`,
            `Cognitive restructuring of his worthlessness beliefs as the central intervention before behavioral work.`,
            `Couples counseling, because the relational shift to his wife as primary earner is driving his shame.`,
            `Defer psychotherapy until the prescriber confirms whether symptoms are biologically driven and an SSRI is titrated.`,
          ],
          correctAnswer: 0,
          explanation: `Moderate-to-severe MDD with passive SI and functional impairment is best treated with combined behavioral activation, risk monitoring, problem-solving around real stressors, and prescriber coordination. Restructuring-first protocols, exclusively relational treatment, or delaying therapy for medication are each defensible techniques but each misses the breadth of his presentation.`,
        },
        {
          id: "marcus-q4",
          questionNumber: 4,
          domain: "Professional practice and ethics",
          stem: `Marcus agrees to move his hunting rifle to his brother-in-law's house. What is the most appropriate documentation and follow-through plan?`,
          options: [
            `Document the verbal agreement and revisit firearms only if active intent re-emerges.`,
            `Document the plan, ask him to confirm transfer by photo or text after the session, and reassess means access at each subsequent session.`,
            `Ask his wife to confirm the transfer rather than placing the verification burden on him.`,
            `Have him sign a no-suicide contract specifying the firearm transfer, alongside ongoing risk assessment.`,
          ],
          correctAnswer: 1,
          explanation: `Means safety is an ongoing collaborative process and the evidence base supports verifying follow-through and reassessing at each visit. Verbal agreement alone is insufficient documentation; transferring verification to his wife undermines his agency; no-suicide contracts have not been shown to reduce risk and can create false reassurance.`,
        },
        {
          id: "marcus-q5",
          questionNumber: 5,
          domain: "Core counseling attributes",
          stem: `Marcus says, "I should be providing. I feel like a burden." What is the most therapeutic response?`,
          options: [
            `You're not a burden — your wife clearly still loves you and your kids need you here.`,
            `Losing your job has injured how you see your worth and your place in this family, not just your paycheck.`,
            `Plenty of people in this region have lost their jobs in the past year and rebuilt their careers within months.`,
            `Let's notice that "burden" thought and run a cost-benefit analysis on whether the evidence supports it.`,
          ],
          correctAnswer: 1,
          explanation: `Reflection of meaning captures the identity injury without arguing the belief, normalizing prematurely, or jumping into technique. Direct reassurance, statistical normalization, and immediate cognitive challenge are all real CBT moves, but each closes the moment before he has fully named what is at stake.`,
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
          stem: `Marcus has been on the SSRI for two weeks and reports he does not feel different yet. What is the best counseling response?`,
          options: [
            `Suggest he ask the prescriber about increasing the dose, since nausea has resolved and benefit has not emerged.`,
            `Normalize that antidepressants typically take 4–6 weeks for full response, support adherence, and encourage him to communicate any concerns directly to the prescriber.`,
            `Let him know that the brief mood lift from fishing is evidence that behavioral activation will work faster than the SSRI, so he can taper if he chooses.`,
            `Recommend he stop the SSRI if no benefit appears by week three, since failed early response predicts later non-response.`,
          ],
          correctAnswer: 1,
          explanation: `Counselors stay within scope by supporting adherence and prescriber communication; dose changes, taper recommendations, and predictions about treatment failure are prescriber decisions. The 4–6 week timeline is consistent with current guidelines and is what the client needs to hear at week two.`,
        },
        {
          id: "marcus-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: `After fishing, Marcus felt better for about twenty minutes and then "everything came back." What is the best clinical interpretation?`,
          options: [
            `The fishing exposure was insufficiently dose-matched; the next assignment should last at least 90 minutes for benefit to persist.`,
            `Activation is working as designed — re-engagement interrupts withdrawal and builds mastery/pleasure contact before global mood lifts.`,
            `Brief mood lifts followed by rebound suggest underlying bipolar features and warrant a Mood Disorder Questionnaire today.`,
            `The activity should be replaced with a job-search task because tangible progress will sustain mood better than recreation.`,
          ],
          correctAnswer: 1,
          explanation: `Behavioral activation is not evaluated by sustained euthymia after one activity; it works by re-establishing reinforcer contact over time. Dose-titration of activities is a real concept but not the issue here; brief lifts after fishing are not a bipolar signal; substituting job applications collapses BA into productivity.`,
        },
        {
          id: "marcus-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: `He missed his son's basketball game and describes feeling ashamed. What response best supports treatment?`,
          options: [
            `Missing the game makes sense given how depressed you are — try not to let it become more guilt.`,
            `Let's slow down and look at that moment in the driveway with curiosity rather than as evidence you failed your son.`,
            `Your son is at an age where he'll understand more than you think; this isn't as wounding as it feels.`,
            `Commit to attending the next game even if you feel exactly the same way — the only way out is through.`,
          ],
          correctAnswer: 1,
          explanation: `A curious, shame-reducing examination of the avoidance chain creates space for both learning and the next behavioral assignment. Reassurance, secondhand reframing of his son's reaction, and prescriptive directives all bypass the clinical learning available in the moment.`,
        },
        {
          id: "marcus-q9",
          questionNumber: 9,
          domain: "Intake/assessment/diagnosis",
          stem: `His alcohol use has escalated to 4–5 beers nightly plus occasional whiskey. He denies morning drinking and withdrawal. What is the most appropriate clinical step?`,
          options: [
            `Administer the AUDIT, assess quantity/frequency/consequences/function and SSRI interaction, and integrate findings into the depression treatment plan.`,
            `Document at-risk drinking, hold treatment focus on MDD, and reassess substance use after PHQ-9 has improved.`,
            `Recommend a 30-day inpatient substance program because nightly drinking constitutes Alcohol Use Disorder.`,
            `Refer him to a separate AUD specialist and continue depression treatment in parallel without integration.`,
          ],
          correctAnswer: 0,
          explanation: `Co-occurring alcohol use at this level can worsen depression, disrupt sleep, blunt SSRI response, and elevate suicide risk; structured assessment and integrated treatment are first-line. Deferring assessment, sending him to inpatient on quantity alone, or splitting care without integration each misses the clinical urgency or fragments his treatment.`,
        },
        {
          id: "marcus-q10",
          questionNumber: 10,
          domain: "Treatment planning",
          stem: `Marcus removed the rifle as planned and has not asked for it back. What should you do with this in today's plan?`,
          options: [
            `Acknowledge the follow-through and remove suicide-risk monitoring from the standing agenda, since means have been restricted.`,
            `Reinforce the step, re-administer a brief risk screen in light of alcohol use, shame, and persistent depressive symptoms, and update the safety plan accordingly.`,
            `Discuss a timeline for returning the rifle once PHQ-9 falls below 10 to reinforce his autonomy.`,
            `Transfer ongoing means-safety responsibility to his wife now that the firearm is out of the home.`,
          ],
          correctAnswer: 1,
          explanation: `Means restriction is protective but not curative; ongoing depression, increased drinking, and shame all warrant continued risk monitoring. Removing risk monitoring, setting reintroduction milestones, or delegating safety to a partner each weakens the safety plan rather than strengthening it.`,
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
          stem: `Marcus asks how he will know when he is ready to stop therapy. What is the best response?`,
          options: [
            `His PHQ-9 score in the mild range across two consecutive sessions is the standard discharge marker.`,
            `Termination is a collaborative process — review goals met, build a relapse-prevention plan, coordinate medication continuation, and step down session frequency before ending.`,
            `Given his history of passive SI, treatment should continue weekly for at least 12 months of full remission before discharge is considered.`,
            `Because he is taking medication, termination from psychotherapy should be timed to whenever the psychiatrist tapers the SSRI.`,
          ],
          correctAnswer: 1,
          explanation: `Best-practice termination is goal-based, collaborative, and staged, and includes relapse-prevention planning and coordination of medication continuity. Symptom-score thresholds, fixed remission durations, and yoking psychotherapy termination to medication decisions are each tempting heuristics but oversimplify a clinical judgment.`,
        },
        {
          id: "marcus-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `Which relapse-prevention target is most important given Marcus's specific history?`,
          options: [
            `Avoidance of triggers tied to the layoff, since exposure to former coworkers and the old plant predicts rumination.`,
            `Personalized early-warning indicators including withdrawal from family activities, increased evening alcohol use, return of passive death ideation, and sleep changes.`,
            `Tapering behavioral activation once intrinsic motivation returns, to avoid dependency on structured scheduling.`,
            `Continued employment in operations management, since job functioning is the change that resolved his depression.`,
          ],
          correctAnswer: 1,
          explanation: `Effective relapse prevention identifies the client's own historical warning signs and the action steps for each. The other options recommend avoidance, premature tapering of a working strategy, or attribute his recovery to a single factor — all of which weaken the plan.`,
        },
        {
          id: "marcus-q13",
          questionNumber: 13,
          domain: "Professional practice and ethics",
          stem: `He says, "I'll get it back eventually. Not yet." What is the best response regarding the rifle?`,
          options: [
            `Tie return of the firearm to PHQ-9 below 5 sustained for 6 months as an objective benchmark.`,
            `Add return-of-firearm decision points to the relapse-prevention plan, with criteria he defines, and revisit collaboratively over time.`,
            `Recommend he relinquish firearm ownership permanently given his lifetime risk profile.`,
            `Defer firearm discussions now that he denies active suicidal thoughts and is functionally improved.`,
          ],
          correctAnswer: 1,
          explanation: `Building means-safety into relapse prevention with client-defined criteria respects autonomy while keeping the issue active. Fixed cut-off scores are arbitrary, permanent relinquishment is a directive beyond the counselor's role, and dropping the discussion eliminates a key protective factor.`,
        },
        {
          id: "marcus-q14",
          questionNumber: 14,
          domain: "Core counseling attributes",
          stem: `He says, "I need to trust myself to keep doing this on my own." What response best fits this phase?`,
          options: [
            `That kind of confidence is exactly the marker we use to know you are ready — let's plan a discharge date today.`,
            `Let's translate "trusting yourself" into concrete behaviors, supports, and a written plan for setbacks.`,
            `Self-trust can be misleading after depressive episodes that included passive SI; weekly therapy should continue.`,
            `It might be worth asking your wife whether she sees the same readiness you do before we change anything.`,
          ],
          correctAnswer: 1,
          explanation: `Operationalizing self-trust into specific behaviors and contingencies respects autonomy and supports relapse prevention. Setting a discharge date in one response, contradicting his self-assessment, or transferring readiness judgment to his spouse each undermines the developmental task at hand.`,
        },
      ],
    },
  ],
};
