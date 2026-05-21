import type { Narrative } from "./types";

export const emilyBulimiaPracticeExamNarrative: Narrative = {
  id: 'practice-exam-01-case-09-emily-bulimia',
  title: 'Emily — Bulimia Nervosa',
  category: 'Bulimia Nervosa',
  difficulty: "Advanced",
  minutesPerSection: 7,

  clientInfo: {
    age: 24,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender Female',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'White',
    relationshipStatus: 'Dating',
    setting: 'University counseling center with medical coordination',
    payment: 'Student health plan',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Bulimia Nervosa, moderate: F50.2',
  },

  presentingProblem: `You are a licensed mental health counselor at a university counseling center. Your client self-referred after a professor she trusts suggested she might benefit from counseling. She is a first-year graduate student in speech-language pathology. At intake she stated, "I don’t think I look like someone with an eating disorder, which is part of why it took me this long to say anything."

The client reported recurrent episodes of binge eating followed by self-induced vomiting occurring three to five times per week over the past eleven months, with milder symptoms beginning during her senior year of college. She described binge episodes as happening most often in the evening after a day of "trying to be good." She stated, "I can hold myself together all day, and then something tiny tips me over. I’m suddenly eating whatever is fastest, and once it starts I feel like I’m not really making decisions." She reported feeling intense shame afterward and almost always purges by vomiting. She occasionally uses laxatives after especially distressing binges but denied daily or heavy laxative use.

The client’s weight has remained within the average range, and she stated this has contributed to her not feeling "sick enough" to seek help. She described rigid food rules, intense fear of weight gain, body checking, and frequent comparison of her body to classmates and social media images. She stated, "When people say I look healthy, I hear it as code for getting bigger." She denied current low body weight and denied missing menstrual cycles. She exercises four to five times weekly but denied compulsive exercise of the intensity typically seen in anorexia presentations.

She reported that the eating disorder worsened after moving away for graduate school. She feels lonely, academically pressured, and embarrassed by how chaotic she feels behind a competent exterior. She stated, "I am supposed to be training for a helping profession, and meanwhile I’m hiding in my apartment making myself throw up." Her boyfriend lives two hours away and knows only that she has "stress around food." She has not told friends or family.

The client endorsed dental sensitivity, occasional dizziness after purging, and a recent episode of near-fainting during class. She denied chest pain and denied vomiting blood. She has not been medically evaluated specifically for the eating behaviors. She denied current suicidal ideation, self-harm, mania, psychosis, or substance misuse. She drinks socially about twice per month and denied cannabis or other drug use. She endorsed depressed mood and anxiety secondary to shame, secrecy, and exhaustion.

She described growing up in a family that valued appearance and self-discipline. Her mother frequently dieted and commented on her own body. The client stated, "No one ever told me to throw up. But I definitely learned that taking up less space gets praised." She said she wants help because, "I’m tired of arranging my whole life around whether I think I can keep food down."`,

  mentalStatusObservation: `Your client presented neatly dressed in casual graduate student attire with a backpack and coffee. She was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. Eye contact was intermittent initially and improved as rapport developed. Speech was coherent, thoughtful, and soft in volume. Mood was reported as "ashamed and worn out." Affect was anxious and constricted but appropriate to content, with tearfulness when discussing secrecy and the sense of "not looking sick enough." Psychomotor activity was mildly tense; she clasped and unclasped her hands when describing binge-purge episodes. Thought processes were linear and reflective. Thought content was notable for body dissatisfaction, perfectionism, secrecy, rigid food rules, shame, and fear of weight gain. No psychotic symptoms or mania were evident. Insight was good; she recognized the behaviors as harmful and increasingly out of control. Judgment was fair and somewhat compromised around eating disorder behaviors. She denied suicidal ideation, homicidal ideation, and self-harm. She denied problematic substance use. She reported dental sensitivity and occasional dizziness and agreed that medical coordination is needed.`,

  familyHistory: `The client is the younger of two daughters. Her parents are married and live in another state. She described her family as loving, achievement-focused, and appearance-conscious. Her mother has a long history of dieting, calorie tracking, and negative body talk but no formal diagnosis. Her older sister, age 28, works in corporate marketing and is described by the client as "the naturally thin one," which has fueled years of comparison. The client reported that a maternal cousin was treated for an eating disorder in high school, though the family rarely discusses it. No known family history of bipolar disorder, psychosis, or completed suicide. The client described emotions in her family as managed through humor or productivity rather than direct discussion.`,

  workHistory: `The client completed her bachelor’s degree in communication sciences with strong grades and is now in a competitive graduate program. She works eight hours per week in a pediatric clinic as a graduate assistant. She has always been seen as highly responsible and academically polished. She reported that graduate school’s combination of performance pressure, isolation, and unstructured time in the evenings has intensified binge-purge behaviors. She has missed no classes but stated that the amount of mental energy spent planning restriction, binging, purging, and "starting over tomorrow" has affected concentration and enjoyment of her training.`,

  intakeSessionSummary: `You completed a thorough assessment of eating disorder symptoms, compensatory behaviors, body image concerns, mood symptoms, and safety. The client met criteria for Bulimia Nervosa based on recurrent binge eating with loss of control, recurrent compensatory purging, overvaluation of body shape and weight, and symptoms occurring on average multiple times weekly. You administered the PHQ-9, on which she scored 11, and the GAD-7, on which she scored 10. You completed a risk assessment; she denied suicidal ideation and self-harm. You explained the importance of medical evaluation for electrolyte imbalance, dehydration, dental consequences, and cardiac risk, and obtained consent to coordinate with student health. You provided psychoeducation that bulimia often occurs at average weight and does not require visible emaciation to be clinically serious. You discussed a CBT-E informed treatment plan including regular eating, reduction of dietary restraint, self-monitoring, identifying binge triggers, body image work, and coordinated medical follow-up. Weekly sessions were scheduled.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: `emily-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `Which detail best supports Bulimia Nervosa rather than Anorexia Nervosa, binge-eating/purging type?`,
          options: [
            `She fears weight gain and frequently body checks`,
            `She has recurrent binge eating followed by vomiting while not being at significantly low body weight`,
            `She exercises several times per week and compares herself to peers`,
            `She has shame, secrecy, and rigid food rules`,
          ],
          correctAnswer: 1,
          explanation: `Both disorders can include fear of weight gain, body dissatisfaction, and purging. The absence of significantly low body weight with recurrent binge-purge episodes supports Bulimia Nervosa.`,
        },
        {
          id: `emily-q2`,
          questionNumber: 2,
          domain: `Treatment planning`,
          stem: `What is the most important immediate treatment step after identifying recurrent vomiting three to five times per week?`,
          options: [
            `Begin body image exposure before discussing medical risks to avoid increasing shame`,
            `Coordinate medical evaluation for electrolyte imbalance, dehydration, dental issues, and cardiac risk with the client’s consent`,
            `Ask her boyfriend to monitor whether she goes to the bathroom after meals`,
            `Recommend she stop purging immediately and return if she cannot`,
          ],
          correctAnswer: 1,
          explanation: `Purging can create serious medical risk even at average weight. Medical coordination is an immediate priority and should occur alongside, not after, counseling work.`,
        },
        {
          id: `emily-q3`,
          questionNumber: 3,
          domain: `Core counseling attributes`,
          stem: `Emily says, “I don’t think I look like someone with an eating disorder.” Which response best validates without reinforcing weight-based assumptions?`,
          options: [
            `“There is no single body type that proves someone is suffering with an eating disorder.”`,
            `“That is why bulimia can be easier to hide than anorexia.”`,
            `“You are at an average weight, but your behaviors are still dangerous.”`,
            `“Looking healthy does not mean you are emotionally healthy.”`,
          ],
          correctAnswer: 0,
          explanation: `The best response challenges the myth directly without centering weight status as the measure of severity. The other options may be partly true but can reinforce appearance-based thinking.`,
        },
        {
          id: `emily-q4`,
          questionNumber: 4,
          domain: `Counseling skills and interventions`,
          stem: `She describes trying to “be good” with food all day and then bingeing at night. What CBT-E mechanism does this most strongly suggest?`,
          options: [
            `Dietary restraint increasing vulnerability to binge eating`,
            `A primary impulse-control disorder unrelated to eating rules`,
            `Manic appetite increase after sustained productivity`,
            `Trauma reenactment through food`,
          ],
          correctAnswer: 0,
          explanation: `Rigid restriction and food rules commonly increase vulnerability to binge eating. The pattern does not suggest mania, psychosis, or a primary impulse disorder based on the case details.`,
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Your client arrived on time for her fourth session with completed self-monitoring records. She has been seen by student health; lab work was within normal limits, though the physician emphasized that normal initial labs do not eliminate medical risk if purging continues. The client reported some relief after that appointment, saying, "It helped to have someone take it seriously without acting shocked."

Her self-monitoring shows that binge-purge episodes have decreased from about four per week to two in the last week after beginning structured meals and snacks. She reported, however, that the reduction has made body image distress feel louder. She stated, "When I’m not trapped in the binge-purge cycle, I notice how much of my brain is just hating my body." She described intense urges to skip breakfast after feeling "puffy" the morning after a restaurant dinner with classmates.

She also disclosed a rupture in her dating relationship. During a weekend visit, her boyfriend noticed that she repeatedly went to the bathroom after meals and asked directly if she was making herself vomit. She denied it in the moment, then later cried and admitted "some of it." He responded by telling her he would "keep an eye on" her eating from now on. She reported feeling both cared for and panicked. "Part of me liked that someone finally knew. Another part of me immediately wanted to hide everything better."

She reported no suicidal ideation and no self-harm. Her energy has improved slightly with more consistent eating. She asked, "How do I let somebody support me without turning them into food police?"`,
      questions: [
        {
          id: `emily-q5`,
          questionNumber: 5,
          domain: `Counseling skills and interventions`,
          stem: `After structured eating reduces binge-purge episodes, Emily says body image distress feels louder. What is the best interpretation?`,
          options: [
            `Treatment is increasing body dissatisfaction and should slow down`,
            `Reduced behavioral chaos may make underlying body image beliefs and distress more visible`,
            `She is developing anorexia because restriction urges are increasing`,
            `The medical evaluation likely reassured her too much`,
          ],
          correctAnswer: 1,
          explanation: `As binge-purge cycles reduce, underlying body image distress often becomes more noticeable. This does not mean treatment is failing or that the diagnosis has changed.`,
        },
        {
          id: `emily-q6`,
          questionNumber: 6,
          domain: `Professional practice and ethics`,
          stem: `Her boyfriend says he will “keep an eye on” her eating. What is the best therapist stance?`,
          options: [
            `Encourage supervised meals because secrecy maintains bulimia`,
            `Help Emily define supportive versus intrusive behaviors and obtain consent before any partner involvement`,
            `Tell Emily that her boyfriend should not be involved because it risks dependency`,
            `Call him to explain how to respond if she purges`,
          ],
          correctAnswer: 1,
          explanation: `Support can help, but turning a partner into surveillance often increases shame and hiding. Client autonomy, consent, and clear roles are essential.`,
        },
        {
          id: `emily-q7`,
          questionNumber: 7,
          domain: `Treatment planning`,
          stem: `Emily feels “puffy” after a restaurant dinner and wants to skip breakfast. What intervention best fits her treatment plan?`,
          options: [
            `Support continued regular eating while exploring the body-image trigger and urge to compensate`,
            `Agree to one skipped meal if it prevents a binge later`,
            `Shift away from food planning because she is becoming overly focused on meals`,
            `Recommend extra exercise as a less harmful compensatory behavior than purging`,
          ],
          correctAnswer: 0,
          explanation: `Skipping breakfast reinforces restriction and compensation. The treatment target is continued regular eating while addressing body image distress and urges.`,
        },
        {
          id: `emily-q8`,
          questionNumber: 8,
          domain: `Core counseling attributes`,
          stem: `Emily asks how to let her boyfriend support her without making him “food police.” What is the most therapeutic response?`,
          options: [
            `“He should avoid commenting on food entirely.”`,
            `“Let’s clarify what support helps you feel less alone and what starts to feel controlling or shame-based.”`,
            `“He probably feels scared and is trying to protect you.”`,
            `“A partner cannot be your accountability system in eating disorder treatment.”`,
          ],
          correctAnswer: 1,
          explanation: `The best response supports nuance and autonomy. It neither bans partner involvement nor excuses intrusive monitoring.`,
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Your client arrived for her tenth session reporting continued improvement. Over the past three weeks she has had one binge episode and no purging for twelve days. She described the binge as occurring after receiving critical feedback on a clinic note from her graduate supervisor. She stated, "I realized afterward it wasn’t really about food. It was that I felt stupid and exposed and wanted to disappear." She was able to return to regular eating the next day rather than escalating into several days of restriction.

She has begun talking more honestly with her boyfriend. Together they agreed that instead of monitoring meals, he will ask broad questions such as, "Do you want support, distraction, or space?" She described this as "annoyingly healthy, but actually helpful." She also told one close classmate about being in treatment and was surprised by how relieved she felt.

A new challenge has emerged around returning home for a family wedding next month. She anticipates comments from relatives about appearance, food, and "looking healthy." She stated, "Being around my family means being around commentary all day." She worries the trip could trigger relapse. She asked, "How do I handle going home without either white-knuckling every meal or falling apart afterward?"

Her mood has improved, and she continues to deny suicidal ideation and self-harm. She asked what the next phase of treatment should focus on now that the most chaotic symptoms are decreasing.`,
      questions: [
        {
          id: `emily-q9`,
          questionNumber: 9,
          domain: `Counseling skills and interventions`,
          stem: `A binge occurred after critical supervisor feedback and a feeling of wanting to “disappear.” What is the most useful clinical focus?`,
          options: [
            `Identify the shame/exposure trigger and strengthen alternative responses before the binge-purge cycle begins`,
            `Help her determine whether graduate school is too triggering for recovery`,
            `Focus on meal planning because binges are primarily caused by eating inconsistency`,
            `Encourage her to request softer feedback from supervisors`,
          ],
          correctAnswer: 0,
          explanation: `The episode reveals shame and exposure as emotional triggers. Meal consistency still matters, but the key new learning is how criticism activates eating disorder behavior.`,
        },
        {
          id: `emily-q10`,
          questionNumber: 10,
          domain: `Treatment planning`,
          stem: `With reduced binge-purge frequency and improved openness, what should treatment emphasize next?`,
          options: [
            `Relapse prevention, body image work, regular eating, and high-risk event planning`,
            `Immediate termination because purging has stopped for twelve days`,
            `Stopping food tracking entirely because it may become obsessive`,
            `Transferring care solely to student health because medical risk is stabilized`,
          ],
          correctAnswer: 0,
          explanation: `Reduced symptoms should lead to consolidation, body image work, and relapse prevention, especially around upcoming triggers. Twelve days without purging is progress, not completion.`,
        },
        {
          id: `emily-q11`,
          questionNumber: 11,
          domain: `Professional practice and ethics`,
          stem: `Emily asks whether you can email her graduate supervisor to explain that she is under stress. What is the best response?`,
          options: [
            `Email the supervisor because academic pressure is a major trigger`,
            `Refuse because contacting academic programs is outside the therapist role`,
            `Explore the goal, risks, possible alternatives, and obtain specific written consent before any contact if clinically appropriate`,
            `Send a general letter through student health without naming the eating disorder`,
          ],
          correctAnswer: 2,
          explanation: `Academic communication requires clear purpose, informed consent, and minimum necessary disclosure. Alternatives such as coaching the client to communicate herself should also be considered.`,
        },
        {
          id: `emily-q12`,
          questionNumber: 12,
          domain: `Counseling skills and interventions`,
          stem: `Emily worries that the family wedding will trigger relapse through comments about food, weight, and appearance. What is the best intervention?`,
          options: [
            `Recommend skipping the wedding until symptoms are stable for at least three months`,
            `Develop a high-risk situation plan including regular eating, coping statements, support contacts, exit options, and responses to body/food comments`,
            `Encourage her to confront relatives when they make comments so she can reclaim control`,
            `Suggest eating less before the event to reduce anxiety about the meal`,
          ],
          correctAnswer: 1,
          explanation: `Relapse prevention involves planning concretely for predictable triggers while maintaining regular eating. Avoidance, confrontation as the main strategy, or restriction would raise relapse risk.`,
        },
      ],
    },
  ],
};
