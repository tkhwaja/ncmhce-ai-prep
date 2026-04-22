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
          id: 'emily-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature most clearly distinguishes Bulimia Nervosa from Anorexia Nervosa in this client?',
          options: [
            'Fear of weight gain',
            'Body dissatisfaction',
            'Recurrent binge eating with compensatory purging in the absence of significantly low body weight',
            'Dieting behavior',
          ],
          correctAnswer: 2,
          explanation: 'Bulimia Nervosa includes recurrent binge eating and compensatory behaviors, often at average weight. Fear of weight gain and body dissatisfaction can occur in both bulimia and anorexia.',
        },
        {
          id: 'emily-q2',
          questionNumber: 2,
          domain: 'Treatment planning',
          stem: 'What is the most important immediate additional step at intake?',
          options: [
            'Begin trauma processing',
            'Coordinate medical evaluation for purging-related risks',
            'Ask her to stop exercising entirely',
            'Refer her boyfriend to counseling',
          ],
          correctAnswer: 1,
          explanation: 'Because recurrent vomiting can lead to electrolyte imbalance, dehydration, dental damage, and cardiac complications, medical coordination is an immediate priority. Other interventions may matter later but do not replace medical assessment.',
        },
        {
          id: 'emily-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'The client says, "I don’t look like someone with an eating disorder." What is the most therapeutic response?',
          options: [
            '"There really isn’t one look for an eating disorder."',
            '"At least you caught it before you lost too much weight."',
            '"Your weight is normal, which is good."',
            '"That means you’re probably functioning better than you think."',
          ],
          correctAnswer: 0,
          explanation: 'A direct, validating correction addresses a harmful myth without minimizing severity. The other responses subtly reinforce weight-based assumptions or downplay impairment.',
        },
        {
          id: 'emily-q4',
          questionNumber: 4,
          domain: 'Counseling skills and interventions',
          stem: 'The client reports trying to "be good" all day before binging at night. This pattern most directly suggests:',
          options: [
            'Psychotic disorganization',
            'Dietary restraint contributing to binge vulnerability',
            'A manic increase in appetite',
            'A primary sleep disorder',
          ],
          correctAnswer: 1,
          explanation: 'CBT-E highlights the role of rigid dietary restraint in increasing the likelihood of binge episodes. Long periods of restriction often set the stage for loss-of-control eating later in the day.',
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
          id: 'emily-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'The client says body image distress feels louder now that binge-purge frequency has decreased. What is the best interpretation?',
          options: [
            'Treatment is making her worse',
            'Reduced behavioral chaos is revealing underlying body image distress more clearly',
            'She has shifted into anorexia nervosa',
            'Medical evaluation likely missed a neurological issue',
          ],
          correctAnswer: 1,
          explanation: 'As symptom cycles begin to loosen, clients often become more aware of the cognitions and body image distress that were previously obscured by the binge-purge routine. This does not mean treatment is failing.',
        },
        {
          id: 'emily-q6',
          questionNumber: 6,
          domain: 'Professional practice and ethics',
          stem: 'The client’s boyfriend wants to "keep an eye on" her eating. What is the most appropriate therapist stance?',
          options: [
            'Encourage him to supervise all meals',
            'Help the client define what support is helpful and what feels intrusive, and obtain consent before involving him',
            'Tell the client to end the relationship',
            'Call the boyfriend for psychoeducation without telling the client',
          ],
          correctAnswer: 1,
          explanation: 'Support persons can help, but eating disorder treatment should not turn loved ones into surveillance agents without collaborative agreement. The client’s autonomy and consent remain central.',
        },
        {
          id: 'emily-q7',
          questionNumber: 7,
          domain: 'Treatment planning',
          stem: 'The client feels "puffy" after a restaurant dinner and wants to skip breakfast. What is the most appropriate intervention?',
          options: [
            'Support regular eating and explore the body-image trigger without reinforcing restriction',
            'Agree that one skipped meal may be reasonable',
            'Shift immediately to psychodynamic exploration of her mother',
            'Advise an extra workout the next morning',
          ],
          correctAnswer: 0,
          explanation: 'Skipping breakfast would reinforce the restriction-binge cycle. The appropriate intervention is to support continued regular eating while addressing the trigger and associated thoughts.',
        },
        {
          id: 'emily-q8',
          questionNumber: 8,
          domain: 'Core counseling attributes',
          stem: 'The client asks how to let someone support her without making him "food police." What is the most therapeutic response?',
          options: [
            '"He should stay out of it completely."',
            '"Let’s clarify what support feels caring to you and what starts to feel controlling or shaming."',
            '"You may not be ready for a relationship right now."',
            '"He probably means well, so try to trust him."',
          ],
          correctAnswer: 1,
          explanation: 'This response supports nuanced exploration rather than all-or-nothing thinking. It centers the client’s lived experience and helps define boundaries and useful support behaviors.',
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
          id: 'emily-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'The client identified that a binge followed supervisor feedback and a wish to "disappear." This most clearly indicates:',
          options: [
            'A psychotic break under stress',
            'An emotional trigger linking shame and binge behavior',
            'Evidence she should leave graduate school',
            'An unrelated coincidence',
          ],
          correctAnswer: 1,
          explanation: 'The client is beginning to identify emotional antecedents to eating disorder behaviors. Shame, exposure, and self-criticism are common binge triggers in bulimia.',
        },
        {
          id: 'emily-q10',
          questionNumber: 10,
          domain: 'Treatment planning',
          stem: 'As the most chaotic symptoms decrease, the next phase of treatment should focus on:',
          options: [
            'Immediate termination',
            'Relapse prevention, body image work, and preparing for high-risk situations such as the family wedding',
            'Stopping all discussion of food to reduce obsession',
            'Transferring care solely to student health',
          ],
          correctAnswer: 1,
          explanation: 'As symptom frequency decreases, treatment appropriately shifts toward relapse prevention, deeper body image work, and planning for anticipated triggers. Abrupt termination would be premature.',
        },
        {
          id: 'emily-q11',
          questionNumber: 11,
          domain: 'Professional practice and ethics',
          stem: 'The client asks whether you can email her graduate supervisor to explain she is under stress. What is the most appropriate response?',
          options: [
            'Email the supervisor because it may protect her performance review',
            'Refuse automatically because counselors never contact academic programs',
            'Explore her goal, review limits and risks of disclosure, and only proceed with specific consent if clinically appropriate',
            'Tell student health to handle it instead',
          ],
          correctAnswer: 2,
          explanation: 'Disclosure to an academic supervisor requires careful consideration of purpose, confidentiality, and potential consequences. The counselor should explore the request rather than reflexively agreeing or refusing.',
        },
        {
          id: 'emily-q12',
          questionNumber: 12,
          domain: 'Counseling skills and interventions',
          stem: 'The client is anxious about family comments at an upcoming wedding. What is the most useful intervention?',
          options: [
            'Recommend she skip the wedding',
            'Help her plan for high-risk triggers, coping responses, support contacts, and regular eating during the trip',
            'Tell her to confront each relative who comments on her body',
            'Advise fasting before the event to feel more in control',
          ],
          correctAnswer: 1,
          explanation: 'High-risk event planning is a key relapse prevention skill. Avoidance, impulsive confrontation, or pre-emptive restriction would likely increase vulnerability rather than reduce it.',
        },
      ],
    },
  ],
};
