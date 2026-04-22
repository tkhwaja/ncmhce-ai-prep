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
          id: 'darnell-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which feature of the client’s presentation most strongly supports Panic Disorder rather than an acute cardiac event?',
          options: [
            'A family history of heart disease',
            'Repeated unexpected panic episodes followed by persistent worry and avoidance after negative medical workups',
            'The presence of chest pain and sweating',
            'His reluctance to discuss feelings',
          ],
          correctAnswer: 1,
          explanation: 'Panic Disorder is supported by recurrent unexpected panic attacks combined with persistent concern about additional attacks and maladaptive behavior change such as avoidance and safety behaviors. Chest pain and sweating occur in both panic and medical events, while family history and emotional reluctance do not establish the diagnosis.',
        },
        {
          id: 'darnell-q2',
          questionNumber: 2,
          domain: 'Core counseling attributes',
          stem: 'The client states, "Panic sounds weak." What is the most therapeutic response?',
          options: [
            '"It just means anxiety. It is more common than you think."',
            '"What does that word mean to you, especially as a man who is used to being the steady one?"',
            '"There is nothing weak about mental illness."',
            '"Your doctor is the one who used that term, not me."',
          ],
          correctAnswer: 1,
          explanation: 'Exploring what the label means to him invites culturally and personally relevant material about masculinity, identity, and shame without arguing with him. Normalizing, correcting, or distancing from the term moves too quickly past the meaning the word carries for this client.',
        },
        {
          id: 'darnell-q3',
          questionNumber: 3,
          domain: 'Treatment planning',
          stem: 'What is the most appropriate first-phase treatment approach for this client?',
          options: [
            'Immediate trauma processing',
            'CBT for panic with psychoeducation, panic monitoring, and preparation for interoceptive and situational exposure',
            'Supportive therapy focused only on stress reduction',
            'Referral to inpatient psychiatric treatment',
          ],
          correctAnswer: 1,
          explanation: 'First-line treatment for Panic Disorder is CBT that includes psychoeducation about the panic cycle and exposure-based work targeting feared sensations and avoided situations. Trauma processing is not indicated here, supportive therapy alone is insufficient, and inpatient care is not warranted without safety or medical instability concerns.',
        },
        {
          id: 'darnell-q4',
          questionNumber: 4,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which aspect of the client’s report best differentiates Panic Disorder from Generalized Anxiety Disorder?',
          options: [
            'His worry focuses on work and family',
            'His anxiety includes sudden surges of intense physical fear that peak within minutes',
            'He has difficulty sleeping',
            'He feels embarrassed by his symptoms',
          ],
          correctAnswer: 1,
          explanation: 'Panic Disorder is characterized by discrete surges of intense fear with rapid onset and strong physical symptoms, whereas GAD is defined more by persistent, diffuse worry. Sleep difficulty and embarrassment can occur in both disorders.',
        },
        {
          id: 'darnell-q5',
          questionNumber: 5,
          domain: 'Professional practice and ethics',
          stem: 'Because the client is seen in an integrated primary care clinic, what is the most appropriate approach to coordination with his physician?',
          options: [
            'Share all therapy details automatically because you work in the same clinic',
            'Avoid communication with the physician to protect psychotherapy confidentiality',
            'Obtain and document appropriate consent, then coordinate only the information relevant to his care',
            'Ask the client’s daughter to relay information between providers',
          ],
          correctAnswer: 2,
          explanation: 'Integrated care supports communication, but the counselor still needs appropriate informed consent and should share only information relevant to coordination. Automatic broad disclosure or avoiding all coordination are both poor practice, and using family as the go-between is inappropriate.',
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
          id: 'darnell-q6',
          questionNumber: 6,
          domain: 'Counseling skills and interventions',
          stem: 'The client’s church episode is best conceptualized clinically as:',
          options: [
            'Evidence that crowded spaces are objectively unsafe for him',
            'A panic episode intensified by catastrophic interpretation and escape behavior',
            'A sign that he needs a neurological evaluation',
            'A spiritual crisis better addressed by clergy',
          ],
          correctAnswer: 1,
          explanation: 'The church episode reflects the panic cycle: bodily sensations were noticed, interpreted as dangerous, and followed by urgent escape. The setting is important, but the mechanism is panic rather than proof of objective danger or a primarily spiritual problem.',
        },
        {
          id: 'darnell-q7',
          questionNumber: 7,
          domain: 'Treatment planning',
          stem: 'The client has begun asking his daughter to drive when he feels vulnerable in the car. What is the most appropriate treatment direction?',
          options: [
            'Encourage the arrangement until his panic is fully resolved',
            'Help him identify it as a safety behavior and build a gradual exposure plan for driving situations',
            'Advise his daughter not to drive with him anymore',
            'Pause treatment until he feels more confident',
          ],
          correctAnswer: 1,
          explanation: 'Having his daughter take over driving reduces fear in the moment but can reinforce the belief that he cannot tolerate panic sensations while driving. A graded exposure plan is the evidence-based way to reduce panic-related avoidance without overwhelming him.',
        },
        {
          id: 'darnell-q8',
          questionNumber: 8,
          domain: 'Professional practice and ethics',
          stem: 'A coworker offered the client a lorazepam tablet that was not prescribed to him. What is the most appropriate clinical response?',
          options: [
            'Suggest he save it for emergencies only',
            'Tell him medication questions are outside treatment and move on',
            'Advise him not to take medication that is not prescribed to him and discuss legitimate medication options with his physician if desired',
            'Encourage him to try it once so he can see whether panic is the problem',
          ],
          correctAnswer: 2,
          explanation: 'The counselor should clearly advise against taking someone else’s prescription medication and, if the client wants to consider medication, direct him to appropriate prescribing professionals. Encouraging unsupervised use or sidestepping the issue would be poor clinical practice.',
        },
        {
          id: 'darnell-q9',
          questionNumber: 9,
          domain: 'Core counseling attributes',
          stem: 'The client says he hates that his daughter has started asking, "You okay?" every time he goes silent in the car. What is the most therapeutic response?',
          options: [
            '"You should stop discussing your symptoms around her."',
            '"What is it like for you to feel her noticing something you have tried so hard to hide?"',
            '"She is just being supportive."',
            '"That means she is becoming a safety behavior."',
          ],
          correctAnswer: 1,
          explanation: 'This response opens space for the client’s shame, vulnerability, and father-role concerns without rushing into technique. Interpreting the daughter too quickly or minimizing the moment would miss the emotional meaning of being seen by her.',
        },
        {
          id: 'darnell-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'What is the primary purpose of interoceptive exposure in CBT for Panic Disorder?',
          options: [
            'To eliminate all physical anxiety sensations',
            'To help the client experience feared bodily sensations without catastrophic misinterpretation or escape',
            'To distract the client from panic symptoms',
            'To determine whether the symptoms are medically dangerous',
          ],
          correctAnswer: 1,
          explanation: 'Interoceptive exposure is designed to weaken the learned fear of bodily sensations by helping the client experience them safely and without escape or safety behaviors. It is not about making sensations disappear, distracting from them, or performing a medical test.',
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
          id: 'darnell-q11',
          questionNumber: 11,
          domain: 'Treatment planning',
          stem: 'The client asks how to know he is not one bad week away from "being right back where I started." What is the most appropriate focus now?',
          options: [
            'Reassure him that his panic is unlikely to return',
            'Develop a relapse prevention plan including triggers, early warning signs, exposure practice, and when to seek booster sessions',
            'Continue weekly treatment indefinitely so panic does not recur',
            'Advise him to avoid major stressors for the next year',
          ],
          correctAnswer: 1,
          explanation: 'The next phase of treatment should focus on relapse prevention and maintenance, not false reassurance or indefinite intensive treatment. Panic recovery often includes occasional symptoms, and a clear plan helps the client respond skillfully rather than catastrophically.',
        },
        {
          id: 'darnell-q12',
          questionNumber: 12,
          domain: 'Counseling skills and interventions',
          stem: 'The client wants to speak more honestly with his daughter about what has been happening. What is the most appropriate guidance?',
          options: [
            'Encourage full disclosure so she understands the diagnosis completely',
            'Help him develop age-appropriate, honest language that does not place monitoring responsibility on her',
            'Advise him not to discuss it because it may scare her',
            'Have the daughter attend the next session so you can explain panic to her directly',
          ],
          correctAnswer: 1,
          explanation: 'Age-appropriate honesty helps the client remain truthful without burdening his daughter with adult caretaking responsibilities. Full diagnostic detail, secrecy, or counselor-led explanation without first supporting the father’s role would be less appropriate.',
        },
        {
          id: 'darnell-q13',
          questionNumber: 13,
          domain: 'Intake/assessment/diagnosis',
          stem: 'What does the client’s ability to remain in the church service despite dizziness and tingling most strongly indicate?',
          options: [
            'That the original diagnosis was incorrect',
            'That exposure learning is occurring and feared sensations are becoming more tolerable',
            'That the panic symptoms are now fully extinguished',
            'That church was never part of the problem',
          ],
          correctAnswer: 1,
          explanation: 'Remaining in the situation without escaping shows that exposure learning is taking hold: the client is tolerating bodily sensations and discovering they can rise and fall without catastrophe. This does not mean the disorder was misdiagnosed or that symptoms will never recur.',
        },
        {
          id: 'darnell-q14',
          questionNumber: 14,
          domain: 'Counseling skills and interventions',
          stem: 'The client says driving the bridge felt like "the first win that actually felt bigger than the disorder." What is the most therapeutic response?',
          options: [
            '"Good. That means you are cured."',
            '"What made that win feel different from the other progress you’ve had?"',
            '"Let’s make sure you do that drive every day now."',
            '"That proves the bridge was never the real issue."',
          ],
          correctAnswer: 1,
          explanation: 'An open question helps the client integrate the personal meaning of the success and deepen his own sense of change. Declaring cure, prescribing rigid repetition, or reducing the moment to a simple insight would miss the therapeutic value of his experience.',
        },
      ],
    },
  ],
};
