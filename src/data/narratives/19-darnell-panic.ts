import type { Narrative } from "./types";

export const darnellPanic: Narrative = {
  id: '19-darnell-panic',
  title: 'Darnell — Panic Disorder',
  difficulty: "Intermediate",
  category: 'Panic Disorder',

  clientInfo: {
    age: 46,
    sexAssignedAtBirth: 'Male',
    genderIdentity: 'Cisgender Male',
    pronouns: 'He/him',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Black/African American',
    relationshipStatus: 'Divorced, coparenting',
    setting: 'Integrated behavioral health in a primary care clinic',
    payment: 'Employer-sponsored private insurance',
    typeOfCounseling: 'Individual',
    provisionalDiagnosis: 'Panic Disorder: F41.0',
  },

  presentingProblem: `You are a licensed mental health counselor embedded in a large primary care practice. Your client was referred by his primary care physician after four emergency department visits in the past three months for chest pain, shortness of breath, sweating, dizziness, and fear that he was about to die. He opened the session by saying, "I need you to understand something before we start. I am not here because I like talking about feelings. I am here because my doctor says my heart is fine, and I know what a man about to die feels like. Those two things cannot both be true."

The client reported that his first major episode occurred five months ago while driving home from an overnight shift inspection. He had consumed two coffees and an energy drink and was crossing the Whitestone Bridge when he suddenly felt a surge of heat move through his chest, followed by pounding heart, tingling in both hands, blurred vision, and the thought, "This is it. I am having the same heart attack my father had." He pulled to the shoulder, called 911, and was transported to the emergency department. The cardiac workup was negative. He stated, "They told me it was anxiety like that explained anything. I don’t think anxiety makes your fingers go numb."

Since that first episode, he has experienced repeated attacks that feel similarly abrupt and overwhelming. Two occurred at work during morning operations briefings. One happened in a grocery store checkout line when he felt trapped between carts. Another occurred in church while he was standing in the middle of a packed pew during the closing hymn. He described the episodes as peaking within minutes and including heart palpitations, sweating, trembling, shortness of breath, chest tightness, dizziness, derealization, and fear of losing control, fainting, or dying. He stated, "It feels like my body hits a hidden alarm and then I’m chasing it after it already went off."

The client reported that the attacks are now affecting his life in ways he finds humiliating. He has begun carrying aspirin in his pocket, checking his smartwatch repeatedly, sitting only near exits, avoiding long bridges and tunnels when possible, and leaving meetings early if he feels "too aware" of his breathing. He has stopped taking certain cross-borough site visits for work and has asked a subordinate to cover them, citing blood pressure concerns. He recently asked his sixteen-year-old daughter to drive during practice on local parkways because he was afraid of having an attack behind the wheel. He stated, "I can feel my world getting smaller and I hate that I can see it happening in real time."

He denied any trauma history that would better account for the episodes, though he noted that his father died of a heart attack at age fifty-two when the client was nineteen and that "every man in my family talks like stress is weakness until it kills somebody." He denied manic symptoms, psychosis, and suicidal or homicidal ideation. He drinks one to two beers on some weekends and denied illicit substance use. He reported sleeping four to five hours most nights and consuming three to four caffeinated drinks per day. He stated that his physician started blood pressure medication two years ago and that his hypertension is controlled. He remains unconvinced the episodes are panic. He said, "If this is anxiety, then anxiety is a lot more physical than anybody tells you."`,

  mentalStatusObservation: `Your client presented in a pressed polo shirt, work slacks, and steel-toe boots, having come directly from his transit operations job. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were good. He set his phone face-up on the table and checked his smartwatch twice during the intake when discussing his symptoms. Eye contact was generally direct, though it shifted away when discussing fear and embarrassment. Speech was normal in volume and articulate, with brief acceleration when recounting panic episodes. Mood was reported as "tired, irritated, and on guard." Affect was anxious but controlled, with flashes of dry humor. Psychomotor activity was mildly restless; he adjusted in his seat frequently and kept one hand around a bottle of water. Thought processes were linear and goal-directed. Thought content was notable for catastrophic interpretations of bodily sensations, fear of sudden cardiac death, anticipatory anxiety about future attacks, and shame about avoidance. He denied delusions and hallucinations. He denied current suicidal or homicidal ideation. Insight was partial: he recognized a pattern but remained ambivalent about the panic framework. Judgment was intact. He denied substance misuse. He reported controlled hypertension, repeated negative cardiac evaluations, poor sleep, and high caffeine intake.`,

  familyHistory: `The client is the oldest of three siblings and was raised in southeast Queens. His father worked for the sanitation department and died suddenly of a myocardial infarction at age fifty-two when the client was nineteen. The client described that loss as "the day everybody in the house stopped talking plain." His mother, now seventy-one, is a retired nursing assistant with hypertension and what the family calls "nerves," especially in crowded places, though she has never sought formal mental health treatment. His younger sister experienced postpartum anxiety several years ago and saw a therapist briefly, which the client described as "something the women in the family were allowed to do, not the men." He has one daughter, age sixteen, with whom he shares custody and a close relationship. His Baptist church community is important to him, though he has recently started leaving services early when he feels trapped or lightheaded. No known family history of bipolar disorder, schizophrenia, or completed suicide.`,

  workHistory: `The client has worked for the city transit system for twenty-three years and is currently a borough operations supervisor overseeing bus routes, staffing problems, and early-morning field inspections. He is viewed as dependable, calm under pressure, and "the one who doesn’t rattle," a role he takes pride in. He completed some college coursework in business administration but entered full-time work after his father’s death to help support the family. Over the past four months, panic-related avoidance has begun to interfere with his job. He has reassigned bridge and tunnel inspections, avoided standing in the center of crowded employee briefings, and started taking phone calls from his car rather than inside dispatch offices when he feels physically activated. He worries that others will notice and interpret it as weakness or unreliability.`,

  intakeSessionSummary: `You reviewed the client’s recent primary care and emergency department records, which documented repeated negative cardiac evaluations and controlled hypertension. You administered the Panic Disorder Severity Scale (PDSS), on which he scored 15, consistent with moderate panic severity. You administered the GAD-7 (score: 10) and PHQ-9 (score: 7). You conducted a thorough risk assessment; he denied suicidal ideation, self-harm history, and homicidal ideation. You also assessed for trauma, substance-induced symptoms, psychosis, and manic symptoms; none appeared to better account for the presentation. You provided initial psychoeducation about the panic cycle, including how catastrophic interpretation of bodily sensations and avoidance can maintain the disorder. You emphasized that panic symptoms are real, physical, and frightening, and that treatment is not based on dismissing his body but on changing his relationship to the sensations. You discussed CBT for panic disorder, including interoceptive exposure and gradual reduction of avoidance and safety behaviors. He agreed to weekly sessions and to begin monitoring panic episodes, caffeine use, and avoidance patterns. You also discussed that if he wants to explore medication, that would be coordinated through his physician or a psychiatrist rather than managed by you directly.`,

  sections: [
    {
      sessionLabel: 'First session',
      sectionNarrative: '',
      questions: [
        {
          id: "darnell-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "The client has repeated chest-pain episodes, a family history of sudden cardiac death, and negative emergency evaluations. Which detail most strongly supports Panic Disorder as the working diagnosis while still respecting medical risk?",
          options: [
            "He feels embarrassed discussing fear and weakness",
            "The episodes include chest pain, sweating, dizziness, and fear of dying",
            "He has recurrent sudden episodes that peak within minutes, followed by persistent fear, safety behaviors, and avoidance after repeated negative medical workups",
            "He consumed caffeine before the first episode on the bridge",
          ],
          correctAnswer: 2,
          explanation: "The strongest support is the full panic-disorder pattern: recurrent abrupt attacks plus persistent concern and maladaptive avoidance/safety behaviors after medical causes have been repeatedly evaluated. Physical symptoms alone can occur in panic or medical conditions, so the answer must preserve medical caution without missing the panic pattern.",
        },
        {
          id: "darnell-q2",
          questionNumber: 2,
          domain: "Core counseling attributes",
          stem: "The client says, “My doctor says my heart is fine, and I know what a man about to die feels like. Those two things cannot both be true.” Which response best validates the experience without reinforcing catastrophic interpretation?",
          options: [
            "“Your body can feel fully convinced it is dying during panic, and we can work with that without dismissing what you felt.”",
            "“Your doctor has ruled out your heart, so the next step is accepting anxiety.”",
            "“Your father’s death is making you misread normal sensations.”",
            "“Those two things actually can both be true because panic is irrational.”",
          ],
          correctAnswer: 0,
          explanation: "The best response validates the physical conviction and fear while opening the door to the panic framework. It avoids arguing, shaming, or implying the client is irrational.",
        },
        {
          id: "darnell-q3",
          questionNumber: 3,
          domain: "Treatment planning",
          stem: "What is the most appropriate first-phase counseling plan after reviewing the negative cardiac workups and controlled hypertension documentation?",
          options: [
            "Begin trauma processing around his father’s death because the cardiac fear is clearly grief-based",
            "Use CBT for panic with psychoeducation, panic monitoring, caffeine/sleep tracking, and preparation for interoceptive and situational exposure",
            "Focus on supportive counseling until he fully accepts the panic diagnosis",
            "Recommend avoiding bridges and crowded spaces until his confidence returns",
          ],
          correctAnswer: 1,
          explanation: "CBT for panic is appropriate and should include education, monitoring, and exposure preparation. His father’s death is relevant but does not make trauma processing the first-line target; avoidance would maintain the disorder.",
        },
        {
          id: "darnell-q4",
          questionNumber: 4,
          domain: "Intake/assessment/diagnosis",
          stem: "Which follow-up question would best sharpen the differential between panic attacks, generalized worry, and medical recurrence?",
          options: [
            "“Do you think your family has made you too focused on strength?”",
            "“When symptoms begin, do they surge rapidly to a peak and then become followed by fear of future attacks or avoidance?”",
            "“Do you feel worried about several areas of life most days?”",
            "“Would you feel better if your doctor ordered one more cardiac test?”",
          ],
          correctAnswer: 1,
          explanation: "The question targets the time course and aftermath of panic attacks: rapid surge, peak, fear of recurrence, and avoidance. General worry matters but is less specific; seeking more medical reassurance may feed the cycle unless medically indicated.",
        },
        {
          id: "darnell-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: "In the integrated primary care setting, what is the best approach to communication with the physician?",
          options: [
            "Coordinate relevant information with appropriate consent, including panic formulation, safety assessment, caffeine/sleep factors, and continued medical follow-up as needed",
            "Avoid physician communication because therapy content should remain completely separate",
            "Tell the physician the client’s symptoms are psychological so emergency visits can be discouraged",
            "Share all session details because the physician made the referral and remains responsible for care",
          ],
          correctAnswer: 0,
          explanation: "Integrated care supports clinically relevant coordination, but consent and minimum necessary disclosure still apply. The counselor should not dismiss symptoms as purely psychological or automatically share full therapy content.",
        },
      ],
    },
    {
      sessionLabel: 'Fourth session',
      sectionNarrative: `Your client arrived on time and reported that simply keeping a panic log has been "annoying but useful." His PDSS this week is 12. He reduced his caffeine intake from four drinks most days to one coffee in the morning and no energy drinks. He stated, "I hate admitting the caffeine was not helping. That feels embarrassingly simple."

He described a recent panic episode during Sunday service. He was seated in the middle of a crowded pew between his mother and daughter when he noticed his heart beating harder during the final hymn. He immediately thought, "I can’t get out fast enough if something happens." He became dizzy, sweaty, and lightheaded, then stepped over several people to leave the pew. He waited in the vestibule until the service ended. He stated, "I wasn’t even thinking about God. I was thinking about where the nearest door was and whether I would pass out in front of everybody."

The client also disclosed that he has begun having his daughter drive short stretches when they practice on the local parkway. He framed it as helping her get hours behind the wheel, but then said, "That’s not the whole truth. Part of me wants somebody else in control in case my body does that thing again." He became quiet and said he hates that his daughter has started asking, "You okay?" every time he goes silent in the car.

He reported another development that occurred at work. A coworker offered him one of the coworker’s prescribed lorazepam tablets after hearing about the emergency room visits. The client did not take it and brought it up in session by asking, "Would that have been crazy? Because in the moment it sounded like relief."

You and the client reviewed how escape, reassurance, health checking, and handing over the wheel can function as safety behaviors that reduce fear short term but keep panic powerful long term. He listened closely and then said, "So the things I do to keep this from happening again are part of why it keeps feeling dangerous." He has agreed to begin interoceptive exposures next session, though he stated he is "not excited about intentionally making myself feel weird."`,
      questions: [
        {
          id: "darnell-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client has begun sitting near exits, avoiding bridges/tunnels, leaving meetings early, and skipping crowded church services. How should these behaviors be conceptualized?",
          options: [
            "Reasonable accommodations until panic fully remits",
            "Agoraphobic-type avoidance and safety behaviors that reduce distress short term but maintain panic long term",
            "Evidence that the panic diagnosis should be replaced by social anxiety disorder",
            "Healthy self-monitoring given his family cardiac history",
          ],
          correctAnswer: 1,
          explanation: "These behaviors center on fear of panic or inability to escape, not fear of social judgment. They provide short-term relief but maintain the panic cycle and should be targeted carefully through exposure-based work.",
        },
        {
          id: "darnell-q7",
          questionNumber: 7,
          domain: "Treatment planning",
          stem: "The client asks his teenage daughter to drive practice routes when he feels vulnerable, then feels ashamed that she is starting to monitor him. What is the best clinical direction?",
          options: [
            "Frame the daughter’s driving as a practical support and keep it in place until panic symptoms are gone",
            "Create a plan to reduce daughter-involved safety behaviors while preserving age-appropriate communication and actual driving safety",
            "Tell him to stop all driving with his daughter until treatment is complete",
            "Recommend family therapy before continuing panic exposure",
          ],
          correctAnswer: 1,
          explanation: "The daughter’s involvement may be functioning as a safety behavior and can burden the child. The plan should reduce accommodation while preserving safety and a developmentally appropriate parent-child relationship.",
        },
        {
          id: "darnell-q8",
          questionNumber: 8,
          domain: "Professional practice and ethics",
          stem: "A coworker offered him a lorazepam tablet during an attack. He did not take it but asks if it might help “just in emergencies.” What is the best response?",
          options: [
            "Encourage him to keep one available only for severe attacks",
            "Explain that using medication not prescribed to him is unsafe, assess what made the offer tempting, and coordinate medication questions with his physician if he wants",
            "Tell him benzodiazepines are always contraindicated in panic disorder",
            "Shift away from the topic because medication is outside counseling scope",
          ],
          correctAnswer: 1,
          explanation: "The counselor should address safety and scope without giving medication advice beyond role. The clinical moment is also useful for understanding fear, rescue behaviors, and treatment-interfering safety strategies.",
        },
        {
          id: "darnell-q9",
          questionNumber: 9,
          domain: "Core counseling attributes",
          stem: "He says, “Now my daughter asks if I’m okay every time I go quiet in the car.” Which response best targets the emotional meaning without turning the daughter into the treatment focus?",
          options: [
            "“That sounds like it touches the fear that panic is changing how your daughter experiences you as her father.”",
            "“You can reassure her that everything is fine and she does not need to worry.”",
            "“This shows why she should not be involved in your driving exposures.”",
            "“Teenagers notice everything, so honesty is the only solution.”",
          ],
          correctAnswer: 0,
          explanation: "The response identifies the shame and fatherhood meaning of the moment while keeping the client’s experience central. The other choices either reassure, overcorrect, or prescribe disclosure too quickly.",
        },
        {
          id: "darnell-q10",
          questionNumber: 10,
          domain: "Counseling skills and interventions",
          stem: "What is the main purpose of interoceptive exposure exercises such as stair sprints, spinning, straw breathing, or brief breath-holding?",
          options: [
            "To prove definitively that cardiac risk is absent",
            "To make the client physically tired enough to relax afterward",
            "To help him learn that feared sensations can be tolerated without catastrophic interpretation or escape behavior",
            "To distract him from thinking about his father’s death",
          ],
          correctAnswer: 2,
          explanation: "Interoceptive exposure teaches new learning about bodily sensations. It does not prove medical absence, serve mainly as relaxation, or avoid grief material.",
        },
      ],
    },
    {
      sessionLabel: 'Tenth session',
      sectionNarrative: `Your client arrived on time for his tenth session and looked noticeably more at ease in his body. His PDSS this week is 7 and his GAD-7 is 6. Over the past six weeks, he has completed interoceptive exercises including stair sprints, straw breathing, spinning in a chair, and brief breath-holding. He repeatedly described the work as "miserable and effective." He stated, "I still don’t enjoy the sensations. I just don’t immediately think they mean I’m dying anymore. That feels like a major upgrade."

He reported an important success from the previous weekend. He drove across the Whitestone Bridge alone for the first time since his first panic episode. He noticed his heart race on the incline, kept driving, and narrated to himself what you had practiced in session: "This is adrenaline, not a heart attack. Let it rise and fall." He said the fear peaked and then dropped before he reached the other side. He called it "the first win that actually felt bigger than the disorder."

He also remained in church for an entire service for the first time in months, choosing a seat one row farther from the exit than usual. During the closing hymn he felt a wave of dizziness and tingling, noticed the urge to leave, and stayed. He stated, "I was singing and panicking at the same time for maybe ninety seconds. Then I was just singing." His mother later told him he looked more like himself.

He described one recent setback: an attack in a long pharmacy line after a poor night of sleep. He gripped the cart, felt the urge to abandon it, and then stayed in line without checking his pulse. He said, "It bothered me for the rest of the night that I even had one." He asked, "How do I know I’m not just one bad week away from being right back where I started?"

The client also said he wants to talk more honestly with his daughter. He stated, "I don’t want her thinking I’m sick in some mysterious way or that she has to monitor me. I want to tell her enough truth without making her carry adult stuff." He is open to reducing session frequency in the future but does not want to end abruptly.`,
      questions: [
        {
          id: "darnell-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: "After several successes, he has one panic attack in a pharmacy line after poor sleep and worries he is back at the beginning. What should treatment emphasize now?",
          options: [
            "Reassure him that relapse is unlikely because his PDSS score is lower",
            "Develop a relapse-prevention plan that includes sleep/caffeine triggers, continued exposure practice, early warning signs, and booster-session criteria",
            "Return to the first session protocol because any panic attack means treatment has not generalized",
            "Encourage temporary avoidance of pharmacies and long lines until stability returns",
          ],
          correctAnswer: 1,
          explanation: "A symptom spike after poor sleep is relapse-prevention material, not proof of failure. The goal is a flexible plan for responding skillfully to future false alarms.",
        },
        {
          id: "darnell-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: "He wants to tell his daughter enough truth without making her feel responsible for monitoring him. What guidance is most appropriate?",
          options: [
            "Help him prepare a brief, age-appropriate explanation that names panic as treatable, reassures her adults are handling it, and avoids making her responsible for symptoms",
            "Encourage full disclosure so she does not imagine something worse",
            "Advise him not to discuss panic until treatment is complete",
            "Recommend that her mother explain it since the client feels ashamed",
          ],
          correctAnswer: 0,
          explanation: "The best guidance is honest, limited, age-appropriate, and protective of the child’s role. Overdisclosure, secrecy, or outsourcing the conversation can increase confusion or burden.",
        },
        {
          id: "darnell-q13",
          questionNumber: 13,
          domain: "Counseling skills and interventions",
          stem: "He remained in church during dizziness and tingling and later said he was “singing and panicking at the same time.” What is the most clinically important learning?",
          options: [
            "The church setting was never a true trigger",
            "He can stay engaged in valued activity while panic sensations rise and fall without escape",
            "His symptoms are now fully extinguished in crowded settings",
            "He should repeat the same church exposure until it no longer produces any sensation",
          ],
          correctAnswer: 1,
          explanation: "The key is not eliminating sensation, but learning that panic symptoms can be tolerated while remaining engaged in valued life.",
        },
        {
          id: "darnell-q14",
          questionNumber: 14,
          domain: "Core counseling attributes",
          stem: "He calls driving the bridge alone “the first win that actually felt bigger than the disorder.” What response best deepens integration of this progress?",
          options: [
            "“That proves you can drive any bridge now.”",
            "“What did that drive tell you about the part of you that panic had convinced you was gone?”",
            "“Great. Now the next goal should be to drive bridges daily.”",
            "“That means your fear of the bridge was never rational.”",
          ],
          correctAnswer: 1,
          explanation: "The response helps the client integrate the meaning of the success into identity and recovery. The other options overgeneralize, prescribe rigid exposure, or invalidate the fear.",
        },
      ],
    },
  ],
};
