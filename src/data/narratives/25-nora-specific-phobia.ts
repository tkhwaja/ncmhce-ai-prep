import type { Narrative } from "./types";

export const noraSpecificPhobia: Narrative = {
  id: "25-nora-specific-phobia",
  title: "Nora — Specific Phobia, Blood-Injection-Injury Type",
  category: "Specific Phobia",
  difficulty: "Intermediate",
  recommendedTimeBySectionMinutes: [8, 8, 7],

  clientInfo: {
    age: 34,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Middle Eastern/North African (Lebanese American, second generation)",
    relationshipStatus: "Married",
    setting: "Integrated primary care behavioral health clinic",
    payment: "Private insurance",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Specific Phobia, blood-injection-injury type: F40.231",
  },

  presentingProblem: `You are a licensed mental health counselor embedded in an integrated primary care clinic. Your client was referred by her primary care physician after she fainted during a routine blood draw and then canceled two follow-up lab appointments. She stated, "I know it sounds ridiculous. I am a grown woman with two kids, and I cannot handle a needle."

The client is a 34-year-old married woman who works as an elementary school reading specialist. She reported a long-standing fear of blood draws, injections, IVs, and medical procedures involving visible blood or needles. She recalled fainting at age 12 when a school nurse administered vaccines. She stated, "I remember the room getting gray, everyone sounding far away, and then waking up on the floor with adults staring down at me." Since then, she has avoided medical care whenever possible. She delayed routine physicals, avoided flu shots, and refused bloodwork during both pregnancies unless her husband was present and she could lie down.

The current episode occurred three months ago when her physician ordered bloodwork because of fatigue, heavier menstrual bleeding, and a family history of thyroid disease. During the blood draw, she saw the needle, felt lightheaded, and fainted. She hit her shoulder against the chair but did not sustain serious injury. Since then, she has canceled two lab appointments and has avoided opening messages from the clinic. She stated, "I know I need the labs. That is what scares me. I am afraid of the needle, but I am also afraid of what happens if I keep avoiding it."

The client reported intense anticipatory anxiety beginning days before any medical appointment. She imagines fainting, embarrassing herself, or being told something is seriously wrong. When exposed to needles or blood, she experiences dizziness, nausea, sweating, ringing in her ears, weakness in her legs, and fear that she will pass out. She denied unexpected panic attacks outside medical contexts. She denied persistent health anxiety when not facing medical procedures and does not spend time researching symptoms online. She stated, "This is not me thinking I have every disease. This is me avoiding the test because I do not want to drop to the floor in front of everybody."

The client described the fear as interfering with health care, parenting, and work. Her school offers annual flu shots, but she avoids the room where they are administered. Last year, one of her students had a nosebleed during class, and she had to call another teacher in because she became dizzy. She stated, "I felt awful. This little boy needed an adult, and my body checked out." She worries that her children will learn to fear doctors because of her reactions.

Culturally, the client described growing up in a Lebanese American family where women were expected to be capable and composed. Her mother often says, "You gave birth twice. How can a tiny needle scare you?" The client feels ashamed and misunderstood. Her husband is supportive but has started to become frustrated because he has taken time off work to accompany her to appointments she later cancels. She denied suicidal ideation, homicidal ideation, self-harm history, mania, psychosis, trauma involving medical injury beyond the fainting episodes, and substance misuse. She drinks socially once or twice per month and denied cannabis or other substances.`,

  mentalStatusObservation: `Your client presented in casual professional clothing after coming from work. Grooming and hygiene were appropriate. She was alert and oriented to person, place, time, and situation. Eye contact was appropriate, though she looked away and became visibly uncomfortable when discussing needles. Speech was normal in rate, volume, and coherence. Mood was reported as "embarrassed and frustrated." Affect was anxious but congruent and reactive. Psychomotor activity was generally calm, with increased hand wringing when describing medical procedures.

Thought processes were linear and goal-directed. Thought content was notable for anticipatory anxiety, fear of fainting, shame, and concern about health-care avoidance. There was no evidence of delusions, hallucinations, or formal thought disorder. She denied suicidal and homicidal ideation. Insight was good; she recognized that the fear is excessive relative to the actual danger of a routine blood draw, but she felt unable to control the physiological response. Judgment was intact overall, though impaired in the specific area of medical avoidance. She denied current substance misuse. She reported fatigue, which is part of the reason labs were ordered. The physician documented vasovagal syncope during the recent blood draw and recommended behavioral health support to improve medical adherence.`,

  familyHistory: `The client is the oldest of three siblings. Her parents immigrated from Lebanon before she was born and own a small grocery store. She described her family as loving, hardworking, and highly practical. Emotional distress was usually handled with humor or dismissal. Her mother has a history of fainting during blood draws but describes it as "weak blood" rather than anxiety. Her father avoids doctors and has untreated hypertension. No known family history of bipolar disorder, schizophrenia, completed suicide, or substance use disorders. The client is close with her siblings but has not told them the extent of her avoidance because she expects teasing. She is married and has two children, ages 5 and 8.`,

  workHistory: `The client earned a master's degree in literacy education and has worked in elementary schools for 11 years. She is currently a reading specialist serving children in kindergarten through third grade. She enjoys her work and is respected by colleagues. Her phobia has occasionally interfered at school, especially when children are injured or bleeding. She has avoided volunteering for field trips where she worries about medical emergencies. She has not disclosed the phobia formally at work and worries colleagues will see her as unreliable if they know she struggles with blood or injuries.`,

  intakeSessionSummary: `You completed an intake assessment and administered a brief phobia severity rating scale focused on blood-injection-injury stimuli, which indicated marked avoidance and functional impairment. You administered the GAD-7, on which she scored 6, reflecting mild general anxiety, and the PHQ-9, on which she scored 5, reflecting mild depressive symptoms secondary to shame and avoidance. You assessed for panic disorder, illness anxiety disorder, trauma-related symptoms, and obsessive-compulsive symptoms. Her symptoms were specifically tied to blood, needles, and injury cues rather than unexpected panic attacks, broad health preoccupation, trauma re-experiencing, or compulsions.

You provided psychoeducation about Specific Phobia, blood-injection-injury type, including the common vasovagal response involving a drop in blood pressure and fainting. You explained that treatment often includes gradual exposure, applied tension to reduce fainting risk, and coordination with medical providers for safe blood draws. You clarified that the goal is not to force her through a procedure immediately, but to help her approach necessary care with a plan. She expressed relief that the fainting had a name and stated, "So I am not being dramatic. My body is actually doing something." You scheduled weekly sessions and asked her to begin tracking avoided situations and fear ratings.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "nora-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which diagnosis best fits the client's presentation?",
          options: [
            "Panic Disorder",
            "Illness Anxiety Disorder",
            "Specific Phobia, blood-injection-injury type",
            "Post-Traumatic Stress Disorder",
          ],
          correctAnswer: 2,
          explanation:
            "Her fear and avoidance are specifically tied to blood, needles, injections, and injury cues, with marked impairment and vasovagal fainting. Panic Disorder would involve recurrent unexpected panic attacks; Illness Anxiety Disorder would involve persistent health preoccupation; PTSD would require trauma-related intrusion and avoidance symptoms.",
        },
        {
          id: "nora-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "What feature is especially characteristic of blood-injection-injury phobia compared with many other phobias?",
          options: [
            "Compulsive checking",
            "Vasovagal fainting response",
            "Grandiose beliefs",
            "Fear of contamination",
          ],
          correctAnswer: 1,
          explanation:
            "Blood-injection-injury phobia is often associated with a vasovagal response that can lead to fainting. This makes applied tension and medical coordination especially relevant in treatment.",
        },
        {
          id: "nora-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "The client says, \"I am a grown woman with two kids, and I cannot handle a needle.\" What is the most therapeutic response?",
          options: [
            "Lots of adults are afraid of needles.",
            "You should not judge yourself for this.",
            "It sounds painful to feel competent in so many areas and still feel powerless here.",
            "Needles are medically necessary, so we need to face this.",
          ],
          correctAnswer: 2,
          explanation:
            "The response validates the shame and discrepancy she experiences without minimizing or rushing her. Simple reassurance or advice may miss the deeper emotional meaning.",
        },
        {
          id: "nora-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: "What is the most appropriate first-line treatment plan?",
          options: [
            "Gradual exposure with applied tension and coordination for necessary medical care",
            "Avoid all needles unless absolutely life-threatening",
            "Insight-oriented therapy focused only on childhood embarrassment",
            "Immediate psychiatric hospitalization",
          ],
          correctAnswer: 0,
          explanation:
            "Specific phobias are commonly treated with exposure-based interventions. For blood-injection-injury phobia, applied tension and medical coordination are important because fainting risk may be part of the presentation.",
        },
        {
          id: "nora-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: "The primary care physician asks whether the client is ready to complete bloodwork next week. What is the best response?",
          options: [
            "Tell the physician she is ready if she attended therapy",
            "Share details of her fear hierarchy",
            "Coordinate only with the client's written consent and discuss what information may be shared",
            "Decline all coordination because therapy is confidential",
          ],
          correctAnswer: 2,
          explanation:
            "Integrated care can be clinically useful, but information sharing requires the client's written consent and clear agreement about what will be shared. Confidentiality does not prevent coordination when authorized.",
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      sectionNarrative: `Your client arrived for her fourth session after completing a fear hierarchy. Lower-level items included saying the word "needle," looking at a cartoon drawing of a syringe, and holding a capped pen against her arm. Mid-level items included watching a short video of a blood draw, walking past the lab area in the clinic, and discussing the steps of a blood draw. Higher-level items included sitting in the lab chair, using applied tension while a tourniquet is placed, and completing the ordered bloodwork.

She practiced applied tension in session and was surprised that intentionally tensing her muscles made her feel steadier. She stated, "This is the first thing that makes me feel like I have something to do besides panic or faint." She also completed a brief imaginal exposure describing walking into the lab. Her fear rating rose from 35 to 70 and then decreased to 45 after several minutes.

A setback occurred at school. A student scraped his knee on the playground, and the client saw blood on his sock. She became dizzy and had to sit down while another teacher helped the student. She was ashamed and stated, "This is why I need to fix it. I cannot be the adult who freezes when a child needs help." She also reported that her mother laughed when she heard the client was in therapy for needle fear and said, "Americans make therapy for everything." The client stated, "I know my mom loves me, but I felt twelve years old again."

She is scheduled for bloodwork in three weeks. She asked whether she should bring her husband again or try to do it alone because "doing it with help feels like cheating."`,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "nora-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "Why is applied tension appropriate for this client?",
          options: [
            "It distracts her from thinking about needles",
            "It helps counter the blood-pressure drop associated with vasovagal fainting",
            "It functions as a relaxation exercise",
            "It eliminates the need for exposure",
          ],
          correctAnswer: 1,
          explanation:
            "Applied tension is used in blood-injection-injury phobia to reduce fainting risk by increasing muscle tension and supporting blood pressure. It does not replace exposure, but it can make exposure safer and more tolerable.",
        },
        {
          id: "nora-q7",
          questionNumber: 7,
          domain: "Treatment planning",
          stem: "What is the best next step in her exposure hierarchy?",
          options: [
            "Complete the blood draw immediately",
            "Avoid blood-related exposures until the appointment",
            "Continue gradual exposures while practicing applied tension",
            "Skip lower-level exposures because they are too easy",
          ],
          correctAnswer: 2,
          explanation:
            "Gradual exposure paired with applied tension allows the client to build mastery and reduce avoidance. Jumping too quickly may overwhelm her, while avoiding exposures maintains the phobia.",
        },
        {
          id: "nora-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: "The client says her mother's comment made her feel \"twelve years old again.\" What is the most therapeutic response?",
          options: [
            "Your mother should take this more seriously.",
            "You should ignore comments like that.",
            "What did that younger part of you need in that moment?",
            "This is why family should not be involved.",
          ],
          correctAnswer: 2,
          explanation:
            "The response invites exploration of the emotional impact without blaming the mother or dismissing the client's reaction. It keeps the focus on the client's experience.",
        },
        {
          id: "nora-q9",
          questionNumber: 9,
          domain: "Counseling skills and interventions",
          stem: "The client calls bringing her husband to the blood draw \"cheating.\" What is the best clinical response?",
          options: [
            "Agree that true exposure must be done alone",
            "Encourage her to avoid all support people",
            "Explore whether support helps values-based approach or becomes a safety behavior that prevents learning",
            "Tell her husband not to attend",
          ],
          correctAnswer: 2,
          explanation:
            "Support is not automatically harmful, but it can become a safety behavior if it prevents new learning. The clinician should help the client evaluate its function and make a planned decision.",
        },
        {
          id: "nora-q10",
          questionNumber: 10,
          domain: "Intake/assessment/diagnosis",
          stem: "Her dizziness after seeing a student's blood at school is best understood as:",
          options: [
            "A psychotic symptom",
            "A trauma flashback",
            "A phobic response to blood-injury cues",
            "A manic symptom",
          ],
          correctAnswer: 2,
          explanation:
            "The dizziness occurred in response to blood/injury cues and fits the diagnosed phobic pattern. There is no evidence of psychosis, trauma re-experiencing, or mania.",
        },
      ],
    },
    {
      sessionLabel: "Ninth session",
      sectionNarrative: `Your client arrived for her ninth session with visible pride and fatigue. She completed her bloodwork the previous week. She brought her husband to the appointment but decided beforehand that he would sit in the waiting room rather than beside her. She used applied tension, told the phlebotomist she has a fainting response, asked to recline, and kept her eyes on a neutral spot on the ceiling. She became lightheaded but did not faint. She stated, "I cried afterward in the parking lot. Not because it was terrible. Because I did it."

Her lab results showed iron-deficiency anemia related to heavy menstrual bleeding, and her physician started treatment and referred her to gynecology for follow-up. The client stated, "Part of me is relieved. Part of me is angry that I delayed this because of fear." She has also practiced looking at first-aid supplies at school and created a simple plan for what to do if a student is bleeding: call the nurse, sit or kneel if dizzy, use applied tension, and give calm instructions.

She reported a meaningful conversation with her mother. She told her, "I know you think therapy is dramatic, but I am doing it so I can take care of my health and my kids." Her mother did not apologize but later brought soup to the house and asked when the next doctor appointment was. The client stated, "That is basically a Lebanese apology."

A new gynecology appointment is scheduled in one month, and the client is worried about additional procedures. She asked, "How do I keep this from becoming a one-time miracle instead of something I can actually do again?"`,
      recommendedTimeMinutes: 7,
      questions: [
        {
          id: "nora-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: "What is the most appropriate treatment focus after the successful blood draw?",
          options: [
            "Terminate treatment because the main goal was achieved",
            "Consolidate gains, plan for future medical exposures, and prevent relapse into avoidance",
            "Avoid discussing future appointments until they occur",
            "Shift to unrelated family therapy",
          ],
          correctAnswer: 1,
          explanation:
            "After a successful exposure, treatment should consolidate learning and plan for future phobic situations. This helps the client generalize skills rather than treat the event as a one-time exception.",
        },
        {
          id: "nora-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: "The client says she is angry she delayed care because of fear. What is the most therapeutic response?",
          options: [
            "At least you finally did it.",
            "Anger makes sense; let's hold both the cost of avoidance and the courage it took to change.",
            "You should focus on the positive now.",
            "The delay was medically irresponsible.",
          ],
          correctAnswer: 1,
          explanation:
            "The response validates both grief/anger about the cost of avoidance and pride in change. It avoids minimizing, shaming, or forcing positivity.",
        },
        {
          id: "nora-q13",
          questionNumber: 13,
          domain: "Counseling skills and interventions",
          stem: "Which statement best captures the new learning from the blood draw exposure?",
          options: [
            "Medical procedures are now safe and will not cause anxiety",
            "She can experience fear and lightheadedness while still completing necessary care",
            "She should always bring her husband to all appointments",
            "Avoidance was not actually a problem",
          ],
          correctAnswer: 1,
          explanation:
            "The key exposure learning is not that anxiety disappears, but that she can tolerate fear and physiological sensations while acting according to her values and health needs.",
        },
      ],
    },
  ],
};
