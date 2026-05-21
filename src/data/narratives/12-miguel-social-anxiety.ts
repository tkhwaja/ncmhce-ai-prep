import type { Narrative } from "./types";

export const miguelSocialAnxiety: Narrative = {
  id: "12-miguel-social-anxiety",
  title: "Miguel — Social Anxiety Disorder",
  category: "Anxiety Disorders",
  difficulty: "Intermediate",
  clientInfo: {
    age: 23,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him / Él",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Latino (Mexican American, second generation)",
    relationshipStatus: "Single",
    setting: "University graduate counseling center",
    payment: "Student health plan",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Social Anxiety Disorder: F40.10",
  },
  presentingProblem: `You are a licensed mental health counselor at a graduate student counseling center at a large university. Your client self-referred after his academic advisor suggested he "might benefit from talking to someone" following a poor performance in a required oral exam. He stated, "I almost didn't come. I sat in the waiting room for twenty minutes thinking about leaving. I'm here. That's about all I can promise today."

The client is a second-year doctoral student in chemistry. He reported that he has experienced intense anxiety in social and performance situations for as long as he can remember. He described severe fear of being judged, embarrassed, or humiliated in situations involving unfamiliar people or possible scrutiny. He reported that his most recent significant episode occurred two weeks ago during his oral qualifying exam. He stated, "I had prepared for months. I knew the material. When they asked the first question, I went blank. I saw three faces looking at me, and I heard my own voice shake, and then I couldn't hear the question anymore. I think I said something. I don't remember what. They failed me. I have six weeks to retake it."

The client reported significant avoidance of social and performance situations. He does not attend departmental seminars unless required. He does not eat in the shared graduate lounge. He eats lunch alone in his car or at his desk. He has declined every invitation to social events since starting the program. He does not raise his hand in class, even when he knows the answer. He calls ahead to restaurants when he has to order, so he does not have to speak in person. He stated, "I have been doing this my whole life. I used to think it was a personality thing. It isn't. I can't keep doing it."

He reported that his physical symptoms in social situations include sweating, trembling, racing heart, dry mouth, and a sensation of "my face being on fire." He reported frequently feeling that people are watching him and judging him, even when rationally he knows they are not. He stated, "My roommate will have a friend over and I'll hide in my room until they leave. Once I walked five blocks out of my way to avoid passing a group of students I thought I recognized."

He disclosed that he is the first person in his family to attend graduate school. He stated, "My parents sacrificed everything for me to be here. They tell everyone their son is going to be a doctor, meaning a PhD, and they can't wait. I can't tell them I failed the exam. I haven't told them. I don't know how." He denied current suicidal ideation but stated, "I have thought about just disappearing. Not dying. Just disappearing. Moving to a different city. Becoming someone else. Not having to be the son who didn't make it." He denied any history of suicide attempts, any plan, or any intent.`,
  mentalStatusObservation: `Your client presented casually dressed in jeans and a hoodie. He was alert and oriented to person, place, time, and situation. Grooming was adequate. Eye contact was limited; he looked primarily at his hands or at the floor. Speech was quiet and careful; he paused frequently, with visible effort to continue. Mood was reported as "anxious and exhausted." Affect was constricted, congruent, with moments of visible physiological anxiety (sweating palms that he wiped on his jeans, reddening of his face when discussing the exam). Psychomotor activity was notable for anxious fidgeting, including tapping his foot, picking at his fingernails, and rolling up the hem of his hoodie. Thought processes were linear. Thought content was notable for themes of shame, family disappointment, fear of judgment, and passive escape ideation framed as "disappearing" rather than dying. He denied delusions or hallucinations. He denied active suicidal ideation, plan, or intent. He denied homicidal ideation. He denied substance use beyond occasional drinking "in situations where I need it to be okay in a room with people." A recent campus health physical was unremarkable.`,
  familyHistory: `The client is the oldest of two. His parents immigrated from Michoacán, Mexico in the late 1990s. His father works in landscaping; his mother is a certified nursing assistant. His younger sister, age 19, is a sophomore at a local community college. He reported a close relationship with his family, particularly his mother, who calls him weekly. No known psychiatric history in the family. He noted that his maternal grandfather was known as "quiet and kept to himself" his whole life, which the client suspects may have been undiagnosed social anxiety. No known family history of bipolar disorder, schizophrenia, or completed suicide.`,
  workHistory: `The client is a full-time doctoral student in chemistry with a research assistantship in his advisor's lab. He reported that he does his best work alone at the bench, where the social demands are minimal. He struggles significantly with departmental events, lab group meetings (he attends but rarely speaks), and teaching assistant duties in which he must lead discussion sections. He has received mixed student evaluations that frequently reference that he is "knowledgeable but hard to follow" or "seems uncomfortable in front of the class." He has an undergraduate history of similar avoidance, which he navigated by selecting courses with minimal participation requirements and working largely alone.`,
  intakeSessionSummary: `You conducted a thorough intake at a pace that respected the client's careful processing. You administered the Liebowitz Social Anxiety Scale (LSAS), which yielded a score of 82, consistent with severe social anxiety. You administered the PHQ-9 (score: 11, moderate depression, likely comorbid). You conducted a thorough risk assessment. He denied suicidal ideation with intent or plan. You discussed his "disappearing" thoughts; he clarified these are escape fantasies rather than desire to die. You collaboratively assessed and he denied access to lethal means beyond standard household risks. You discussed evidence-based treatments for Social Anxiety Disorder, including CBT with exposure as the first-line approach. He expressed willingness despite trepidation. He stated, "I know I have to do things that scare me. I also know I can't keep not doing them." You scheduled weekly sessions and offered to coordinate with his advisor if he chose to request an extension for his retake exam. He stated he would think about it.`,
  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: `miguel-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `Which feature most strongly supports Social Anxiety Disorder rather than Generalized Anxiety Disorder?`,
          options: [
            `He worries about disappointing his parents`,
            `His anxiety is centered on situations involving possible scrutiny, judgment, embarrassment, or performance failure`,
            `He experiences sweating, trembling, and racing heart`,
            `He has moderate depressive symptoms`,
          ],
          correctAnswer: 1,
          explanation: `Social Anxiety Disorder is defined by fear of negative evaluation in social or performance situations. GAD involves broader worry across domains, and physical symptoms can occur in both.`,
        },
        {
          id: `miguel-q2`,
          questionNumber: 2,
          domain: `Intake/assessment/diagnosis`,
          stem: `Miguel says he has thought about “disappearing” and becoming someone else, but denies wanting to die. What is the best clinical action?`,
          options: [
            `Treat it as active suicidal ideation because disappearance implies self-harm risk`,
            `Clarify meaning, assess suicide risk directly, and monitor escape ideation without assuming active intent`,
            `Dismiss it as a common social anxiety fantasy`,
            `Shift immediately to exposure planning because he denied suicidal intent`,
          ],
          correctAnswer: 1,
          explanation: `Escape ideation should be clarified and assessed. It may not indicate active suicidal intent, but it still requires direct risk assessment and monitoring.`,
        },
        {
          id: `miguel-q3`,
          questionNumber: 3,
          domain: `Core counseling attributes`,
          stem: `Miguel says he almost left the waiting room before intake. Which response best supports engagement without making him feel scrutinized?`,
          options: [
            `“I’m glad you stayed. That shows you are ready to change.”`,
            `“It took effort to stay. What helped you make it into the room today?”`,
            `“Avoidance is exactly what we will need to work on.”`,
            `“Many anxious clients feel that way at first.”`,
          ],
          correctAnswer: 1,
          explanation: `This response affirms the effort and invites ownership of motivation. It is less evaluative and less generic than the other options.`,
        },
        {
          id: `miguel-q4`,
          questionNumber: 4,
          domain: `Treatment planning`,
          stem: `What is the most appropriate initial treatment approach for Miguel?`,
          options: [
            `CBT with psychoeducation, cognitive work, and graded exposure to feared social and performance situations`,
            `Supportive counseling until the qualifying exam is over`,
            `Immediate family therapy to address parental expectations`,
            `Avoidance accommodations so he can complete graduate school with less distress`,
          ],
          correctAnswer: 0,
          explanation: `CBT with graded exposure is first-line for Social Anxiety Disorder. Family issues and academic accommodations may be relevant but should not replace evidence-based treatment.`,
        },
        {
          id: `miguel-q5`,
          questionNumber: 5,
          domain: `Professional practice and ethics`,
          stem: `Miguel asks whether you can contact his advisor to explain why he failed the qualifying exam. What should you do first?`,
          options: [
            `Contact the advisor because academic functioning is impaired`,
            `Help Miguel clarify the purpose, risks, and limits of disclosure, and obtain written authorization before any contact`,
            `Decline because counselor contact with academic programs is inappropriate`,
            `Recommend he disclose his diagnosis directly to the entire committee`,
          ],
          correctAnswer: 1,
          explanation: `Academic coordination can be appropriate, but only with informed consent, a clear purpose, and minimum necessary disclosure.`,
        },
          ],
          correctAnswer: 1,
          explanation: "Social Anxiety Disorder is specifically characterized by fear of scrutiny in social or performance situations, with fear of embarrassment or humiliation, and corresponding avoidance or distress. GAD involves generalized worry across topics; Avoidant Personality Disorder involves pervasive patterns of inadequacy that begin early and affect multiple domains broadly.",
        },
        {
          id: "miguel-q2",
          questionNumber: 2,
          domain: "Core counseling attributes",
          stem: "The client said, \"I sat in the waiting room for twenty minutes thinking about leaving.\" What is the most therapeutic response?",
          options: [
            "\"I'm glad you stayed. It takes courage.\"",
            "\"It took a lot for you to walk in here. Thank you for staying. What made you stay?\"",
            "\"Many clients feel that way.\"",
            "\"Let's talk about why you almost left.\"",
          ],
          correctAnswer: 1,
          explanation: "Acknowledging his experience and inviting him to articulate his own motivation gives him ownership of a meaningful moment. Brief affirmation alone is insufficient; generalization to \"many clients\" minimizes his specific experience; immediate problem-focus on why he almost left may feel like scrutiny.",
        },
        {
          id: "miguel-q3",
          questionNumber: 3,
          domain: "Intake/assessment/diagnosis",
          stem: "The client described \"disappearing\" thoughts. How should these be understood clinically?",
          options: [
            "Active suicidal ideation that requires safety planning",
            "Passive escape fantasies that warrant ongoing monitoring without immediate crisis intervention",
            "Dissociation",
            "A cognitive distortion to be reframed",
          ],
          correctAnswer: 1,
          explanation: "Escape fantasies — wishing to disappear or become someone else — are clinically distinct from suicidal ideation when the client explicitly frames them as escape rather than death. They warrant ongoing monitoring and exploration, but do not trigger crisis-level intervention. Misidentifying them as active ideation or dismissing them as distortion are both errors.",
        },
        {
          id: "miguel-q4",
          questionNumber: 4,
          domain: "Counseling skills and interventions",
          stem: "What is the most appropriate first-line evidence-based treatment for the client's Social Anxiety Disorder?",
          options: [
            "Supportive counseling without exposure",
            "Cognitive Behavioral Therapy including graded exposure to feared situations",
            "Psychodynamic therapy exploring childhood origins",
            "Medication management alone",
          ],
          correctAnswer: 1,
          explanation: "CBT with graded exposure is the first-line evidence-based treatment for Social Anxiety Disorder. Supportive counseling alone does not address the maintaining avoidance; exclusively exploratory approaches are not first-line; medication alone may help but does not build the skills needed for lasting change.",
        },
        {
          id: "miguel-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: "The client has six weeks until his exam retake. What is the most appropriate treatment goal for this period?",
          options: [
            "Eliminate all social anxiety before the exam",
            "Build specific skills and graded exposure exercises to support functioning in the exam, while recognizing full remission takes longer",
            "Recommend he delay the exam for a year",
            "Focus only on family pressure",
          ],
          correctAnswer: 1,
          explanation: "A realistic, focused approach targeting the exam while framing it as part of longer-term work serves the client's real deadline. Elimination as a six-week goal is unrealistic; delaying may be appropriate but is his choice, not a default; narrow focus on family pressure misses the immediate functional need.",
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      sectionNarrative: `Your client arrived on time and reported notable progress. His LSAS this week is 74. He has completed several lower-level exposures from his hierarchy. He attended two departmental seminars in the past two weeks and stayed through the entire program. He ate lunch in the graduate lounge three times; on one occasion, a classmate sat with him and they had a conversation about their research for seven minutes. He stated, "He asked me about my project. I answered him without dying. He seemed interested. He gave me a suggestion for a paper to read. That was a whole interaction."

He reported that he raised his hand in his TA training session last week and asked a question. He stated, "Twelve people looked at me. I thought I was going to pass out. I asked the question. The instructor said it was a good question. I do not remember his answer. But I asked it."

He disclosed that he told his parents about failing the qualifying exam. He called them on Sunday. He stated, "I told them I had failed and that I was retaking it. My mom was quiet for a long time. Then she said in Spanish, 'Mijo, we have never cared about you being perfect. We care about you being well.' My dad got on the phone and asked what I needed. I cried. I was not expecting that from him. I had been carrying this for a month because I thought I knew what they would say. I was wrong."

The client also disclosed that he has been considering reaching out to a Latino graduate student group on campus. He stated, "I never went because I thought I had to have my life together to belong. I saw that they were having a potluck. I don't know if I'll go. I'm thinking about it."

He asked you about his exam preparation. He stated, "How do I not freeze again? I can't take it again just to fail the same way. Help me figure out what to do."`,
      questions: [
        {
          id: `miguel-q6`,
          questionNumber: 6,
          domain: `Counseling skills and interventions`,
          stem: `Miguel attended seminars, ate in the lounge, and asked a question despite high anxiety. What is the most important therapeutic learning to reinforce?`,
          options: [
            `His anxiety disappears when he prepares enough`,
            `He can take social risks and remain present even when anxiety is active`,
            `Peers are less judgmental than he believed`,
            `He should now move quickly to the highest exposure items`,
          ],
          correctAnswer: 1,
          explanation: `The key learning is not that anxiety disappears or that others are always kind; it is that he can act according to goals while anxiety is present.`,
        },
        {
          id: `miguel-q7`,
          questionNumber: 7,
          domain: `Core counseling attributes`,
          stem: `After Miguel tells his parents about failing the exam, his mother says, “We care about you being well.” What is the best therapeutic response?`,
          options: [
            `“That proves your fear of disappointing them was inaccurate.”`,
            `“What is it like to receive care where you expected disappointment?”`,
            `“You should remind yourself of that whenever anxiety appears.”`,
            `“Your parents sound more supportive than you realized.”`,
          ],
          correctAnswer: 1,
          explanation: `The response invites emotional processing of a corrective experience rather than turning it into reassurance or a simple cognitive correction.`,
        },
        {
          id: `miguel-q8`,
          questionNumber: 8,
          domain: `Treatment planning`,
          stem: `Miguel asks how not to freeze again during the qualifying exam. What is the best plan?`,
          options: [
            `Practice graded mock oral-exam exposures, coping with pauses, and tolerating not knowing while reducing avoidance and over-rehearsal`,
            `Encourage him to memorize answers until he feels confident`,
            `Request that the exam committee avoid unexpected questions`,
            `Focus primarily on relaxation so he can enter the exam calm`,
          ],
          correctAnswer: 0,
          explanation: `The best plan targets the actual performance fear and includes graded exposure to uncertainty, pauses, and evaluation. Over-rehearsal and accommodations that remove the feared element can maintain anxiety.`,
        },
        {
          id: `miguel-q9`,
          questionNumber: 9,
          domain: `Counseling skills and interventions`,
          stem: `Miguel wants to write full scripts for every possible qualifying-exam question. What is the best clinical concern?`,
          options: [
            `Scripting is always maladaptive and should be prohibited`,
            `Extensive scripting may become a safety behavior that reinforces the belief that he cannot tolerate uncertainty`,
            `The strategy is useful because social anxiety improves with preparation`,
            `Scripting suggests obsessive-compulsive disorder rather than social anxiety`,
          ],
          correctAnswer: 1,
          explanation: `Preparation can be adaptive, but exhaustive scripting can become a safety behavior that prevents learning to tolerate uncertainty and imperfection.`,
        },
        {
          id: `miguel-q10`,
          questionNumber: 10,
          domain: `Core counseling attributes`,
          stem: `Miguel is considering attending a Latino graduate student potluck but says he feels he must “have his life together to belong.” Which response is most therapeutic?`,
          options: [
            `“You do not need to have your life together to belong anywhere.”`,
            `“What do you imagine people would see if you arrived as you are?”`,
            `“This would be a good exposure, so you should go.”`,
            `“Belonging to that group may reduce your anxiety.”`,
          ],
          correctAnswer: 1,
          explanation: `The response explores shame, feared visibility, and belonging without reassurance or turning the event into only a task.`,
        },
      ],
    },
    {
      sessionLabel: "Tenth session",
      sectionNarrative: `Your client arrived on time for his tenth session. His LSAS this week is 52, down from 82 at intake. His PHQ-9 is 5. He took and passed his qualifying exam retake three weeks ago. He stated, "I froze for about four seconds on the second question. I remembered what we had practiced. I took a breath. I said, 'Let me think about that for a moment.' I thought about it. I answered. I did not fail."

He reported continued progress across multiple areas. He attended the Latino graduate student potluck after all. He stated, "I did not talk to very many people. I said hello to the organizer. I ate. I stayed for forty-five minutes. I was tired afterward. I think I'll go again." He has continued eating in the graduate lounge regularly and has had four lunches with classmates over the past month.

He reported a significant professional development. His advisor asked him to present his research at a small group meeting with two visiting faculty members. He stated, "Two months ago I would have manufactured an emergency to avoid it. I said yes. I was nervous. I practiced. I presented. One of the visitors asked a question I did not know the answer to. I said I did not know. I said I would look into it. She thanked me for being honest. That was the first time in my life I have ever said 'I don't know' in an academic setting without wanting to crawl under the table."

He also reported that his relationship with his parents has continued to deepen. He stated, "My mom and I have been talking about the anxiety. Not in those words. She has started telling me things about my grandfather I never knew. He apparently did not speak at his own wedding. She told me he was the most loved man in her family. I did not know that."

He asked you about continuing treatment. He stated, "I'm better. I'm not done. My social anxiety still comes up. I can function through it now most of the time. What happens now? Do I keep coming? Do I stop? How do I know?"`,
      questions: [
        {
          id: `miguel-q11`,
          questionNumber: 11,
          domain: `Counseling skills and interventions`,
          stem: `During the qualifying exam retake, Miguel paused and said, “Let me think about that for a moment,” then answered. Why is this clinically significant?`,
          options: [
            `It shows he eliminated performance anxiety`,
            `It reflects a flexible replacement for freezing, over-apologizing, or escaping under scrutiny`,
            `It proves his social anxiety was primarily about inadequate preparation`,
            `It means future exposure work is no longer needed`,
          ],
          correctAnswer: 1,
          explanation: `He used an adaptive behavior under scrutiny, tolerating a pause without escaping or collapsing. This is a meaningful performance-exposure gain.`,
        },
        {
          id: `miguel-q12`,
          questionNumber: 12,
          domain: `Treatment planning`,
          stem: `Miguel has improved significantly but still experiences social anxiety. What is the best next phase of treatment?`,
          options: [
            `Terminate because he passed the exam and PHQ-9 is now mild`,
            `Continue with relapse prevention and higher-value exposures tied to graduate, social, and professional goals`,
            `Shift entirely to family-of-origin exploration`,
            `Refer to medication because residual anxiety means CBT was incomplete`,
          ],
          correctAnswer: 1,
          explanation: `Improvement does not require abrupt termination. Treatment can shift toward relapse prevention and exposures that support broader functioning.`,
        },
        {
          id: `miguel-q13`,
          questionNumber: 13,
          domain: `Core counseling attributes`,
          stem: `Miguel says he said “I don’t know” to visiting faculty without wanting to crawl under the table. What response best deepens the clinical meaning?`,
          options: [
            `“That is proof you can handle academic pressure now.”`,
            `“What did it mean to be seen not knowing something and still remain in the room?”`,
            `“You should practice saying ‘I don’t know’ more often.”`,
            `“That shows the exposure hierarchy worked.”`,
          ],
          correctAnswer: 1,
          explanation: `The response explores the deeper corrective experience: being imperfect under evaluation without disappearing, collapsing, or losing belonging.`,
        },
        {
          id: `miguel-q14`,
          questionNumber: 14,
          domain: `Treatment planning`,
          stem: `Which indicator best supports readiness to reduce session frequency rather than end immediately or continue unchanged?`,
          options: [
            `He passed the qualifying exam and his LSAS decreased`,
            `He reports no anxiety before recent social interactions`,
            `He is using skills, approaching previously avoided situations, and can identify future triggers and exposure goals`,
            `His parents are more supportive than expected`,
          ],
          correctAnswer: 2,
          explanation: `Step-down readiness is based on skill use, improved functioning, and relapse-prevention capacity, not only symptom-score improvement or one major success.`,
        },
          ],
          correctAnswer: 1,
          explanation: "A collaborative review of current goals, remaining work, and options — including spacing sessions — respects his progress and his ongoing needs. Requiring symptom elimination, premature termination, or deflection without engagement all miss the therapeutic moment.",
        },
        {
          id: "miguel-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: "The client learned that his maternal grandfather \"did not speak at his own wedding\" and \"was the most loved man in her family.\" What does this reflect clinically?",
          options: [
            "Evidence that his anxiety is genetic and therefore untreatable",
            "An opportunity to see anxiety, cultural context, and identity in a more layered and connected way, including the possibility of being loved as he is",
            "A distraction from his own work",
            "A sign he should seek genetic testing",
          ],
          correctAnswer: 1,
          explanation: "Discovering family members who lived with similar challenges, and who were loved despite — or alongside — those challenges, often shifts the client's identity and self-acceptance. Neither genetic fatalism nor dismissal serves the therapeutic opportunity.",
        },
        {
          id: "miguel-q13",
          questionNumber: 13,
          domain: "Counseling skills and interventions",
          stem: "The client said \"I don't know\" in an academic setting without wanting to \"crawl under the table.\" What is the most useful clinical integration?",
          options: [
            "Note it as a behavioral data point",
            "Recognize it as a significant cognitive-behavioral shift and explore what it means for his broader relationship with judgment and perfectionism",
            "Caution him that this does not mean the anxiety is cured",
            "Suggest he continue practicing saying \"I don't know\"",
          ],
          correctAnswer: 1,
          explanation: "Tolerating public imperfection — and being met with appreciation for honesty — represents a core change for clients with social anxiety organized around perfectionism. Exploring the broader meaning integrates the moment into lasting change.",
        },
        {
          id: "miguel-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: "During his exam retake, the client froze for four seconds, paused, and recovered. How should this be integrated clinically?",
          options: [
            "Recognize it as incomplete recovery and plan additional work to prevent any freezing",
            "Recognize it as a successful application of recovery skills — the freezing did not derail him, which is the central learning",
            "Minimize the freezing since he passed",
            "Suggest he request accommodations for future exams",
          ],
          correctAnswer: 1,
          explanation: "The therapeutic target for social anxiety is not elimination of anxiety but capacity to function through it. A four-second freeze that he recovered from is a successful application of skills. Aiming for elimination, minimizing the freeze entirely, or pivoting to accommodations all miss the clinical achievement.",
        },
      ],
    },
  ],
};
