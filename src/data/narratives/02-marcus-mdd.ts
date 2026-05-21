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
    },
  ],
};
