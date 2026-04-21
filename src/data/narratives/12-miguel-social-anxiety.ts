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
          id: "miguel-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature most supports a diagnosis of Social Anxiety Disorder rather than Generalized Anxiety Disorder or Avoidant Personality Disorder?",
          options: [
            "The presence of physical anxiety symptoms",
            "Marked fear or anxiety about social situations in which the person is exposed to possible scrutiny by others, with avoidance or intense distress",
            "His depression symptoms",
            "His family history",
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
          id: "miguel-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client asks how to prevent freezing during his exam retake. What is the most clinically useful approach?",
          options: [
            "Reassure him he will do fine if he knows the material",
            "Plan graded exposure including mock exams, develop cognitive strategies for anxiety spikes, and rehearse recovery strategies if he freezes",
            "Suggest he request an accommodation to take the exam alone",
            "Tell him to request medication before the exam",
          ],
          correctAnswer: 1,
          explanation: "Targeted preparation includes in vivo exposure via mock exams, cognitive strategies for anxiety management in the moment, and rehearsed responses to freezing (not avoidance, but recovery). Reassurance is insufficient; accommodation requests are the client's choice to consider; recommending medication prescription exceeds scope.",
        },
        {
          id: "miguel-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: "The client's mother said in Spanish, \"Mijo, we have never cared about you being perfect. We care about you being well.\" What does this reflect clinically?",
          options: [
            "A cognitive distortion about his parents that has now been corrected",
            "A significant discrepancy between his internalized narrative and his parents' actual stance — and an opportunity to update his working model",
            "A sign that his family is enmeshed",
            "A moment that does not warrant clinical attention",
          ],
          correctAnswer: 1,
          explanation: "Long-held internalized narratives about family expectations often diverge significantly from actual family stance, particularly for first-generation children. Recognizing the opportunity to update this internal model is central to clinical work. Labeling his prior belief as simple distortion or the family as enmeshed misses the cultural and relational complexity.",
        },
        {
          id: "miguel-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: "The client is considering attending a Latino graduate student potluck but believes he needs \"his life together\" to belong. What is the most useful clinical framing?",
          options: [
            "Recommend he attend as an exposure regardless of readiness",
            "Help him examine the belief that belonging requires having his life together, and explore what attending could be as a graded step",
            "Suggest he start with a one-on-one meeting with a group member instead",
            "Tell him to wait until further in treatment",
          ],
          correctAnswer: 1,
          explanation: "Examining the specific cognitive belief — belonging requires being perfect — combined with exploring attendance as a graded exposure integrates both cognitive and behavioral work. Prescribing attendance without engagement, pivoting to individual meetings only, or deferring miss the therapeutic opportunity.",
        },
        {
          id: "miguel-q9",
          questionNumber: 9,
          domain: "Professional practice and ethics",
          stem: "The client asks whether you could write a letter to his department requesting an exam accommodation. What is the most appropriate response?",
          options: [
            "Agree to write the letter since it will help him",
            "Decline all such requests to preserve the therapeutic boundary",
            "Discuss the accommodation process, including working through the campus disability services office, and consider what specific support might be appropriate to document from your role",
            "Tell him accommodations are not necessary if treatment is working",
          ],
          correctAnswer: 2,
          explanation: "Academic accommodations typically go through a disability services office, which may request clinical documentation. Discussing the proper process, clarifying what documentation is appropriate from your role, and supporting his choice to pursue accommodations is the correct approach. Blanket letters, blanket refusals, or minimizing the need all fail the standard.",
        },
        {
          id: "miguel-q10",
          questionNumber: 10,
          domain: "Counseling skills and interventions",
          stem: "The client has been doing exposures successfully but still describes intense physiological anxiety during them. What is the most appropriate direction?",
          options: [
            "Reduce the exposure difficulty until he feels less anxious",
            "Continue with exposures while normalizing the anxiety and focusing on disconfirming predictions rather than eliminating anxiety",
            "Teach him to suppress the physical symptoms",
            "Refer for medication to reduce the physical symptoms",
          ],
          correctAnswer: 1,
          explanation: "Exposure therapy works through inhibitory learning — new learning that the feared outcome does not occur despite anxiety. Anxiety during exposures is not a sign to retreat; suppression undermines the mechanism; medication referral may or may not be indicated but is not the first response.",
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
          id: "miguel-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: "The client asks how to know when to continue or stop treatment. What is the most appropriate response?",
          options: [
            "Recommend he continue weekly sessions until the LSAS reaches zero",
            "Discuss the current state of his goals, what continued work might focus on, and consider spacing sessions further apart as part of maintenance",
            "Tell him he's done given his progress",
            "Suggest he decide on his own since he's capable now",
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
