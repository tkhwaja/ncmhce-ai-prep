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
    },
  ],
};
