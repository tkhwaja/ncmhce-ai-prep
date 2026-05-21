import type { Narrative } from "./types";

export const keishaAdjustment: Narrative = {
  id: "11-keisha-adjustment",
  title: "Keisha — Adjustment Disorder with Depressed Mood",
  category: "Adjustment Disorders",
  difficulty: "Beginner",
  clientInfo: {
    age: 34,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Black/African American",
    relationshipStatus: "Married",
    setting: "Employee Assistance Program (EAP) private practice",
    payment: "EAP (first 6 sessions free)",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Adjustment Disorder with Depressed Mood: F43.21",
  },
  presentingProblem: `You are a licensed mental health counselor in private practice accepting EAP referrals. Your client was referred through her employer's EAP after she spoke with the EAP intake counselor following a difficult few weeks at work. She stated, "My company has an EAP. I've never used it before. I figured six free sessions was worth trying."

The client reported that approximately seven weeks ago, she was passed over for a promotion to senior project manager that she had been assuming was hers. The promotion went to a colleague with less tenure at the company. She stated, "I had done the work. I had been told informally that it was mine. Then in the meeting they announced someone else. I smiled and congratulated him. I went home and I have not been right since."

The client reported that since that event, she has been feeling sad, tearful, and unmotivated. She stated, "I go to work. I do my job. I come home. I cry in the shower. My husband asks me what's wrong and I can't explain it without sounding petty. It was just a promotion. People don't fall apart over a promotion." She reported sleeping well at night but feeling exhausted during the day. She has lost approximately five pounds because she "just isn't hungry." She has withdrawn from her weekly book club and has been declining social invitations.

The client reported that she has started scrolling job postings at night and has begun to wonder if she should leave the company. She stated, "I don't know if I'm actually ready to leave or if I'm just looking for a way to feel like I have some control." She disclosed that her husband has been supportive but "doesn't quite get it" and her mother has told her to "pray on it and let it go."

She denied any prior episodes of significant depression or anxiety. She reported that she was "fine" before this event — busy, engaged, satisfied with her life. She denied current suicidal or homicidal ideation. She denied substance use beyond occasional wine with dinner. She denied previous mental health treatment. She reported that this is the first time in her life she has considered therapy. She stated, "In my family, you don't do this. I'm here because my friend Tanya told me the EAP was free and confidential. If it weren't both, I wouldn't be here."`,
  mentalStatusObservation: `Your client presented professionally dressed in a blazer and slacks, having come directly from work. She was alert and oriented to person, place, time, and situation. Grooming was impeccable. Eye contact was direct. Speech was clear, articulate, and measured. Mood was reported as "flat, I guess. Just flat." Affect was mildly constricted, congruent with reported mood, with brief tearfulness when discussing the promotion. She apologized for crying. Psychomotor activity was calm. Thought processes were linear and goal-directed. Thought content was notable for themes of disappointment, self-questioning about whether her reaction is proportionate, and early rumination about workplace dynamics including possible racial dynamics. She denied delusions or hallucinations. She denied suicidal or homicidal ideation, plan, or intent. She denied substance use beyond occasional wine. A recent physical three months ago was unremarkable.`,
  familyHistory: `The client is the middle of three children. Her parents are both living and married for forty-one years; her father is a retired postal worker and her mother is a retired elementary school teacher. She has an older sister who is a family medicine physician and a younger brother who is an attorney. She described her family as "high-achieving and emotionally private." No known family psychiatric history. She noted that her maternal grandmother "had her quiet spells" but "we didn't call it anything." No known family history of bipolar disorder, schizophrenia, or completed suicide.`,
  workHistory: `The client completed a bachelor's degree and an MBA. She has worked at her current company, a mid-sized financial services firm, for six years as a project manager. Her performance reviews have been consistently strong. She was the only Black woman on her team and one of very few in her division. She disclosed that she has begun to wonder if race played a role in the promotion decision, though she has not raised this with anyone. She stated, "I don't have proof. I have a feeling. I've been telling myself for years that I'm imagining it when I feel this way. I don't know what to do with it now." She has not considered filing any formal complaint.`,
  intakeSessionSummary: `You conducted a structured intake and reviewed the EAP framework (six sessions included, additional sessions available at a reduced rate or via insurance if she chooses to continue). You administered the PHQ-9 (score: 9, mild depression) and the GAD-7 (score: 6, mild anxiety). You conducted a risk assessment; she denied any suicidal or homicidal ideation. You discussed that her symptoms appear consistent with Adjustment Disorder with Depressed Mood — a time-limited response to an identifiable stressor that exceeds what would be expected and causes significant distress or impairment. You framed the EAP work as short-term, focused counseling with clear goals. You scheduled weekly sessions.`,
  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "keisha-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature most supports Adjustment Disorder with Depressed Mood rather than Major Depressive Disorder?",
          options: [
            "The presence of tearfulness and low motivation",
            "Symptoms occurring within three months of an identifiable stressor, not meeting full MDD criteria, and likely to resolve within six months of the stressor's resolution",
            "Her PHQ-9 score of 9",
            "Her withdrawal from social activities",
      ],
    },
    {
      sessionLabel: "Third session",
      sectionNarrative: `Your client arrived on time for her third session. Her PHQ-9 this week is 7. She reported that she had a significant conversation with her husband over the weekend. She stated, "I told him what I hadn't been telling him. That this wasn't just about one promotion. That I've been carrying this feeling for years. That every time something at work has gone a certain way, I've wondered, and I've pushed it down, and I've kept going." She reported that he listened and asked questions she did not expect him to ask. She stated, "He asked me why I never told him. I said because I didn't want to sound like I was making excuses. He said, 'You sound like you've been holding up a building.'"

She also reported that she met with her supervisor on Monday and asked, directly, what factors led to the decision. She stated, "I walked in shaking. I had my questions written down. She gave me answers that were plausible. She also gave me answers that contradicted each other. I walked out knowing more than I knew and also knowing less than I want to know."

The client reported that she has begun to think more clearly about her options. She stated, "I don't know if I'm leaving. But I know I'm no longer assuming I'm staying. That feels different. That feels like having my feet back under me." She disclosed that she has contacted a recruiter and has had one preliminary conversation about positions at competitor firms.

She asked you a direct question. "Is it okay to make a big decision when you're still in this? Or do I have to wait until I'm fully over it?"`,
      questions: [
        {
          id: "keisha-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client asks whether she can make a major decision while still processing the event. What is the most useful response?",
          options: [
            "\"You should wait until you feel better to make a big decision.\"",
            "\"Let's explore what 'over it' would look like for you, and what considerations matter in timing a decision like this.\"",
            "\"Make the decision now while you have clarity.\"",
            "\"That's up to you. I can't tell you what to do.\"",
      ],
    },
    {
      sessionLabel: "Sixth session",
      sectionNarrative: `Your client arrived on time for her sixth and final EAP session. Her PHQ-9 is 4. She has been sleeping well, eating normally, and has re-engaged with her book club. She attended a book club meeting two weeks ago for the first time in two months and stated, "I laughed. I actually laughed. I had forgotten what that felt like."

She reported significant decisions. After her recruiter conversations and further reflection, she has decided to stay with her current company for at least the next year. She stated, "Not because I've decided it's the right place. Because I've decided I want to stay on my own terms, long enough to see if anything changes, with my eyes open. If it doesn't change, I leave. I gave myself a deadline."

She reported that she requested and received a formal development plan from her supervisor, including specific criteria for promotion and a six-month check-in. She stated, "I watched her face when I asked. She looked surprised. I've decided I don't mind surprising her." She also reached out informally to two Black women in senior positions at other firms in her industry, both of whom responded warmly and offered to connect her with their professional networks.

She reported that she has told her mother about the therapy. She stated, "My mother was quiet for a long time. Then she said, 'I should have done this myself, a long time ago.' We cried. It was the most honest conversation we have had in years."

She asked you about continuing care. She stated, "I don't think I need weekly therapy. But I don't think I'm done forever either. How does this work? Do I call you if something comes up? Do I find someone new? What makes sense?"`,
      questions: [
        {
          id: "keisha-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: "The client asks how ongoing care works after the EAP sessions end. What is the most appropriate response?",
          options: [
            "Recommend she continue weekly sessions with you using her insurance",
            "Discuss options including ending now with the door open, periodic check-ins, insurance-based continued care, or a referral, and help her consider what fits",
            "Tell her that Adjustment Disorder does not require ongoing care",
            "Suggest she decide on her own",
      ],
    },
  ],
};
