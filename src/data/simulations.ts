export interface IGItem {
  id: string;
  category: "Intake/Assessment" | "History" | "Clinical Observations";
  label: string;
  revealText: string;
  critical: boolean;
}

export interface DMQuestion {
  id: string;
  domain: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Simulation {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  narrative: string;
  igItems: IGItem[];
  dmQuestions: DMQuestion[];
}

export const simulations: Simulation[] = [
  {
    id: "sim-1-mdd",
    title: "Case 1: Adult Major Depression",
    category: "Mood Disorders",
    difficulty: "Beginner",
    estimatedMinutes: 25,
    narrative: `Sarah Mitchell is a 34-year-old Caucasian female referred by her primary care physician (PCP) for persistent low mood and functional impairment. She presents as a divorced mother of two children (ages 6 and 9) who works as a 4th-grade elementary school teacher. Her divorce was finalized approximately 5 months ago after a 2-year separation.

Sarah reports feeling "empty and exhausted all the time" for the past 3+ months. She describes difficulty falling asleep, early morning awakening (around 4:00 AM), and significant fatigue throughout the day. She has lost approximately 12 pounds without intentional dieting. She states she no longer enjoys reading or hiking, activities she previously found pleasurable.

At work, Sarah reports difficulty concentrating, frequently forgetting lesson plans, and feeling overwhelmed by routine tasks. Her principal has expressed concern about her performance. She tearfully reports feeling like "a terrible mother" because she lacks the energy to engage with her children after school. She denies any current suicidal ideation but admits to occasional passive thoughts of "not wanting to wake up." She has no prior psychiatric history and takes no medications other than a daily multivitamin.`,
    igItems: [
      { id: "ig1-1", category: "Intake/Assessment", label: "Review intake questionnaire and demographic information", revealText: "Intake form confirms Sarah is a 34-year-old divorced female, employed full-time as a teacher. She lists her PCP as the referral source. She checked 'yes' for depressed mood, sleep problems, appetite changes, and difficulty concentrating. Emergency contact is her sister. No prior mental health treatment.", critical: false },
      { id: "ig1-2", category: "Intake/Assessment", label: "Conduct mental status examination", revealText: "Sarah appears her stated age, casually dressed with minimal grooming effort. She makes intermittent eye contact. Speech is soft and slow in rate. Mood is described as 'sad and empty.' Affect is constricted and tearful. Thought process is linear but slowed. Thought content is negative and self-deprecating. No hallucinations or delusions. Cognition appears intact but attention is poor. Insight is fair; judgment is intact.", critical: true },
      { id: "ig1-3", category: "Intake/Assessment", label: "Administer PHQ-9 depression screening", revealText: "PHQ-9 total score: 19 (moderately severe depression). She endorsed 'more than half the days' for: little interest/pleasure, feeling down/hopeless, sleep problems, fatigue, poor appetite, difficulty concentrating, and feeling like a failure. She endorsed 'several days' for psychomotor retardation and passive suicidal ideation (Item 9 score: 1).", critical: true },
      { id: "ig1-4", category: "Intake/Assessment", label: "Administer GAD-7 anxiety screening", revealText: "GAD-7 total score: 8 (mild anxiety). She endorses some worry about finances and her children's wellbeing post-divorce, but anxiety does not appear to be the primary presenting concern. No panic attacks reported.", critical: false },
      { id: "ig1-5", category: "History", label: "Explore family psychiatric history", revealText: "Sarah reports her mother was treated for depression in her 40s and took antidepressants for several years. Her maternal grandmother was described as 'always sad' but never received formal treatment. Father has no known mental health history. No family history of bipolar disorder, psychosis, or suicide.", critical: false },
      { id: "ig1-6", category: "History", label: "Assess trauma history", revealText: "Sarah denies any history of physical or sexual abuse. She describes her childhood as 'stable but emotionally distant.' She identifies the divorce process as the most distressing experience of her life, describing feelings of betrayal after discovering her husband's infidelity. She does not meet criteria for acute stress or PTSD symptoms related to the divorce.", critical: false },
      { id: "ig1-7", category: "History", label: "Review medical records and current medications", revealText: "PCP records indicate Sarah was seen 6 weeks ago for fatigue and weight loss. Lab work including CBC, thyroid panel (TSH), and metabolic panel were all within normal limits. PCP prescribed trazodone 50mg for sleep but Sarah reports she never filled the prescription. No chronic medical conditions. No current medications except a multivitamin.", critical: true },
      { id: "ig1-8", category: "History", label: "Explore relationship and social support history", revealText: "Sarah was married for 8 years. She describes the marriage as 'good at first' but reports growing emotional distance over the last 3 years. She discovered her husband's affair 2 years ago, which precipitated the separation. She has a close relationship with her sister who lives nearby. She has a few coworkers she considers friends but reports withdrawing from social activities since the divorce.", critical: false },
      { id: "ig1-9", category: "Clinical Observations", label: "Assess suicide risk and safety", revealText: "Sarah endorses passive suicidal ideation ('sometimes I wish I wouldn't wake up') but firmly denies active suicidal ideation, plan, or intent. She states, 'I would never do anything because of my kids.' No history of suicide attempts. Protective factors include her children, her sister, her employment, and her stated desire to 'get better.' Risk level assessed as low-moderate with passive ideation requiring monitoring.", critical: true },
      { id: "ig1-10", category: "Clinical Observations", label: "Evaluate substance use patterns", revealText: "Sarah reports drinking 1-2 glasses of wine on weekends, occasionally increasing to 3 glasses since the divorce. She denies any blackouts, cravings, or consequences related to alcohol use. She denies any illicit drug use. CAGE screening is negative (0/4). Substance use does not appear clinically significant at this time.", critical: true },
      { id: "ig1-11", category: "Clinical Observations", label: "Observe affect, behavior, and interpersonal style", revealText: "Throughout the session, Sarah is cooperative but passive. She frequently pauses before responding and occasionally loses her train of thought. She becomes tearful when discussing her children and her perceived failure as a mother. She demonstrates some psychomotor retardation — slow movements, minimal gestures. She is self-critical but shows capacity for insight when reflecting on her patterns.", critical: false },
      { id: "ig1-12", category: "Clinical Observations", label: "Assess functional impairment and daily activities", revealText: "Sarah reports significant impairment in multiple domains. At work, she has received a verbal warning about missed deadlines. At home, she relies on her sister for childcare help 2-3 evenings per week because she feels too exhausted. She has stopped exercising, cooking meals (relying on takeout), and socializing. She rates her overall functioning at 4/10 compared to her baseline of 8/10.", critical: false },
    ],
    dmQuestions: [
      {
        id: "dm1-1",
        domain: "Assessment & Diagnosis",
        question: "Based on the information gathered, what is the most appropriate DSM-5-TR diagnosis for Sarah?",
        options: [
          "Adjustment Disorder with Depressed Mood",
          "Major Depressive Disorder, Single Episode, Moderate to Severe",
          "Persistent Depressive Disorder (Dysthymia)",
          "Bipolar II Disorder, Current Episode Depressed"
        ],
        correctIndex: 1,
        explanation: "Sarah meets DSM-5-TR criteria for Major Depressive Disorder (MDD), Single Episode: depressed mood (Criterion A1), markedly diminished interest (A2), significant weight loss (A3), insomnia (A4), fatigue (A6), diminished concentration (A8), and recurrent thoughts of death (A9) — totaling 7 of 9 criteria, well exceeding the 5 required. Duration exceeds 2 weeks (3+ months). Adjustment Disorder is excluded because full MDD criteria are met. Dysthymia requires 2+ years of symptoms. No evidence of manic/hypomanic episodes rules out Bipolar II."
      },
      {
        id: "dm1-2",
        domain: "Treatment Planning",
        question: "What is the most appropriate initial treatment approach for Sarah?",
        options: [
          "Immediate psychiatric referral for medication only",
          "Cognitive Behavioral Therapy (CBT) with coordination with PCP regarding medication evaluation",
          "Psychodynamic therapy focused on childhood attachment patterns",
          "Group therapy for divorced individuals"
        ],
        correctIndex: 1,
        explanation: "CBT is the first-line evidence-based treatment for moderate-to-severe MDD (APA Practice Guidelines). Given Sarah's PHQ-9 score of 19, combined treatment (psychotherapy + pharmacotherapy) is recommended for moderate-to-severe depression. Coordinating with her PCP for medication evaluation is appropriate collaborative care. Medication-only lacks the psychoeducation and coping skill development Sarah needs. Psychodynamic therapy and group therapy may be adjunctive but are not the most appropriate initial approach for acute MDD."
      },
      {
        id: "dm1-3",
        domain: "Counselor Attributes & Core Competencies",
        question: "What is the most important immediate counselor action in this initial session?",
        options: [
          "Develop a comprehensive treatment plan with measurable goals",
          "Conduct a thorough safety assessment and establish a safety plan given passive suicidal ideation",
          "Begin cognitive restructuring of negative automatic thoughts",
          "Assign homework to resume physical exercise and social activities"
        ],
        correctIndex: 1,
        explanation: "Given Sarah's endorsement of passive suicidal ideation (PHQ-9 Item 9 score of 1, and verbal report of wishing she wouldn't wake up), the most critical immediate action is a thorough safety assessment and collaborative safety plan. While her risk is low-moderate with strong protective factors, clinical best practice and ethical duty (nonmaleficence) require addressing safety before proceeding with treatment planning. A safety plan should include warning signs, coping strategies, social supports, and emergency contacts."
      },
      {
        id: "dm1-4",
        domain: "Professional Practice & Ethics",
        question: "What ethical principle is most relevant to this case?",
        options: [
          "Beneficence — the obligation to promote Sarah's wellbeing through effective treatment",
          "Autonomy — respecting Sarah's right to refuse medication",
          "Nonmaleficence — the duty to 'do no harm' and prioritize safety given suicidal ideation",
          "Justice — ensuring equitable access to mental health services"
        ],
        correctIndex: 2,
        explanation: "While all ethical principles apply, nonmaleficence is most directly relevant given Sarah's passive suicidal ideation. The counselor has a duty to assess and mitigate risk of harm. The ACA Code of Ethics (A.1.a) requires counselors to safeguard the welfare of clients. Failure to adequately assess and plan for safety when suicidal ideation is present would be a violation of this principle. Beneficence is also important but is secondary to the immediate safety concern."
      },
      {
        id: "dm1-5",
        domain: "Treatment Planning",
        question: "What is the most appropriate disposition for Sarah at this time?",
        options: [
          "Weekly outpatient counseling sessions with PCP coordination for medication evaluation",
          "Immediate referral to an intensive outpatient program (IOP)",
          "Psychiatric hospitalization for suicidal ideation",
          "Bi-weekly counseling sessions with reassessment in 30 days"
        ],
        correctIndex: 0,
        explanation: "Weekly outpatient counseling with PCP coordination is the appropriate level of care for Sarah's presentation. Her depression is moderate-to-severe but she has strong protective factors, denies active suicidal ideation/plan/intent, and maintains functional capacity (still working, caring for children with help). IOP would be considered if outpatient treatment fails or symptoms worsen. Hospitalization is not warranted as she is not an imminent danger. Bi-weekly sessions are too infrequent for acute moderate-to-severe MDD."
      }
    ]
  },
  {
    id: "sim-2-gad",
    title: "Case 2: Generalized Anxiety Disorder",
    category: "Anxiety Disorders",
    difficulty: "Beginner",
    estimatedMinutes: 25,
    narrative: `Marcus Johnson is a 28-year-old African American male who self-referred for counseling after reading an article about anxiety disorders online. He works as a software engineer at a mid-size technology company and has been in his current position for 2 years. He is unmarried, lives alone in an apartment, and has no children.

Marcus reports experiencing excessive and uncontrollable worry about multiple areas of his life for approximately 8-9 months. He describes persistent concern about his job performance despite consistently positive reviews, fear that he will develop a serious illness despite normal annual physicals, and worry about his financial stability despite having adequate savings. He states, "I know my worrying is irrational, but I can't stop it."

Physically, Marcus reports chronic muscle tension in his shoulders and neck, frequent headaches, restlessness described as "feeling keyed up," and difficulty falling asleep due to racing thoughts. He reports that his worry has intensified over the past 3 months, and he has started avoiding social events with coworkers because he worries about "saying something stupid." He has no prior mental health treatment and has never taken psychiatric medication. He drinks 3-4 cups of coffee daily and exercises sporadically.`,
    igItems: [
      { id: "ig2-1", category: "Intake/Assessment", label: "Review intake questionnaire and demographic information", revealText: "Intake confirms Marcus is a 28-year-old single male, employed full-time as a software engineer. He self-referred after recognizing his symptoms in an online article. He checked 'yes' for excessive worry, muscle tension, sleep difficulty, and restlessness. No prior mental health treatment. Emergency contact is his mother. No legal issues.", critical: false },
      { id: "ig2-2", category: "Intake/Assessment", label: "Conduct mental status examination", revealText: "Marcus appears well-groomed and neatly dressed. He is alert and oriented x4. He fidgets frequently, tapping his foot and adjusting his glasses. Speech is normal in rate but slightly pressured when discussing worries. Mood is 'anxious and stressed.' Affect is anxious with appropriate range. Thought process is linear but ruminative. No suicidal/homicidal ideation. No hallucinations or delusions. Insight is good — he recognizes his worry is excessive. Judgment is intact.", critical: true },
      { id: "ig2-3", category: "Intake/Assessment", label: "Administer GAD-7 anxiety screening", revealText: "GAD-7 total score: 15 (severe anxiety). He endorsed 'nearly every day' for: feeling nervous/anxious, not being able to stop worrying, worrying too much about different things, and trouble relaxing. He endorsed 'more than half the days' for restlessness, irritability, and feeling afraid something awful might happen.", critical: true },
      { id: "ig2-4", category: "Intake/Assessment", label: "Administer PHQ-9 depression screening", revealText: "PHQ-9 total score: 7 (mild depression). He endorses some fatigue and sleep disturbance, likely secondary to anxiety. He denies depressed mood, anhedonia, and suicidal ideation. Depression does not appear to be the primary diagnosis.", critical: false },
      { id: "ig2-5", category: "History", label: "Explore developmental and family history", revealText: "Marcus grew up in a stable two-parent household. He describes his mother as a 'worrier' who frequently expressed concern about safety and health. His father is described as stoic and emotionally reserved. Marcus was a high-achieving student who always felt pressure to perform. No family history of diagnosed mental health conditions, though he suspects his mother may have undiagnosed anxiety.", critical: false },
      { id: "ig2-6", category: "History", label: "Assess history of anxiety symptoms and prior episodes", revealText: "Marcus reports that he has 'always been a worrier' but that his anxiety became significantly worse approximately 8-9 months ago coinciding with a major project deadline at work. He recalls similar but less intense periods during college exams. He has never experienced a panic attack. No history of specific phobias. He does describe increasing avoidance of social situations over the past 3 months.", critical: true },
      { id: "ig2-7", category: "History", label: "Review medical history and current health", revealText: "Marcus had a normal annual physical 4 months ago. Labs including thyroid function (TSH) were normal. He reports chronic tension headaches (2-3 per week) managed with ibuprofen. No chronic medical conditions. No current medications. He consumes 3-4 cups of coffee daily and reports that caffeine 'helps him focus' but may worsen his restlessness.", critical: true },
      { id: "ig2-8", category: "History", label: "Explore social relationships and support system", revealText: "Marcus has a small circle of close friends from college, though he reports seeing them less frequently due to anxiety about social situations. He has not dated in over a year because he worries about rejection. He has a supportive relationship with his mother (weekly phone calls) and a more distant relationship with his father. He reports feeling isolated but attributes it to his own avoidance.", critical: false },
      { id: "ig2-9", category: "Clinical Observations", label: "Assess suicide risk and safety", revealText: "Marcus firmly denies any suicidal ideation, intent, or plan. He states, 'I'm anxious, not depressed — I want to fix this.' No history of self-harm or suicide attempts. No access to firearms. He has strong protective factors: employment, family support, help-seeking behavior, and future orientation. Risk level assessed as low.", critical: true },
      { id: "ig2-10", category: "Clinical Observations", label: "Evaluate substance use and caffeine intake", revealText: "Marcus drinks 3-4 cups of coffee daily (estimated 300-400mg caffeine). He reports occasional social drinking (1-2 beers on weekends) with no binge episodes, blackouts, or negative consequences. He denies illicit drug use. CAGE screening is negative. High caffeine intake may be exacerbating anxiety symptoms and should be addressed in treatment.", critical: true },
      { id: "ig2-11", category: "Clinical Observations", label: "Observe behavioral manifestations of anxiety", revealText: "Throughout the session, Marcus displays multiple behavioral indicators of anxiety: frequent foot tapping, hand wringing, checking his phone twice (apologizing each time), shifting positions in his chair, and asking for reassurance ('Does this sound normal?'). He becomes notably more tense when discussing work performance. He demonstrates avoidance by changing the subject when asked about romantic relationships.", critical: false },
      { id: "ig2-12", category: "Clinical Observations", label: "Assess functional impairment across domains", revealText: "Marcus reports moderate functional impairment. At work, he spends excessive time checking and rechecking his code, staying 1-2 hours late most days. Socially, he has declined invitations to team outings 4 times in the past 2 months. He reports his sleep has deteriorated (takes 45-60 minutes to fall asleep due to racing thoughts). He has stopped exercising, which previously helped manage his stress. He rates his functioning at 5/10.", critical: false },
    ],
    dmQuestions: [
      {
        id: "dm2-1",
        domain: "Assessment & Diagnosis",
        question: "Based on the information gathered, what is the most appropriate DSM-5-TR diagnosis for Marcus?",
        options: [
          "Social Anxiety Disorder",
          "Generalized Anxiety Disorder",
          "Panic Disorder",
          "Illness Anxiety Disorder"
        ],
        correctIndex: 1,
        explanation: "Marcus meets DSM-5-TR criteria for GAD: excessive anxiety and worry about multiple events/activities (work, health, finances) occurring more days than not for 6+ months (Criterion A), difficulty controlling the worry (B), and 3+ associated symptoms — restlessness, muscle tension, sleep disturbance, difficulty concentrating, irritability (C). While he has some social avoidance, his worry is not limited to social evaluation (ruling out Social Anxiety Disorder). He denies panic attacks (ruling out Panic Disorder). His health worry is one of multiple worry domains, not the sole focus (ruling out Illness Anxiety Disorder)."
      },
      {
        id: "dm2-2",
        domain: "Treatment Planning",
        question: "What is the most appropriate initial treatment approach for Marcus?",
        options: [
          "Cognitive Behavioral Therapy (CBT) with relaxation training and psychoeducation about caffeine reduction",
          "EMDR therapy for anxiety processing",
          "Benzodiazepine prescription for immediate symptom relief",
          "Mindfulness-Based Stress Reduction (MBSR) program only"
        ],
        correctIndex: 0,
        explanation: "CBT is the gold-standard, first-line treatment for GAD (APA, NICE guidelines). CBT for GAD includes cognitive restructuring of worry beliefs, behavioral experiments, worry exposure, and relaxation training (progressive muscle relaxation, diaphragmatic breathing). Psychoeducation about caffeine's anxiogenic effects is important given his high intake. EMDR is primarily evidence-based for PTSD. Benzodiazepines carry dependence risks and are not first-line. MBSR can be adjunctive but lacks the cognitive restructuring component critical for GAD."
      },
      {
        id: "dm2-3",
        domain: "Counselor Attributes & Core Competencies",
        question: "What is the most important immediate counselor action?",
        options: [
          "Challenge Marcus's irrational thoughts about work performance immediately",
          "Establish therapeutic rapport, validate his experience, and provide psychoeducation about GAD",
          "Teach deep breathing exercises to reduce immediate anxiety symptoms",
          "Refer Marcus to a psychiatrist for medication evaluation immediately"
        ],
        correctIndex: 1,
        explanation: "Building therapeutic rapport and validating Marcus's experience is the essential first step. As a first-time therapy client who self-referred, Marcus needs to feel understood and normalized. Psychoeducation about GAD helps him understand his symptoms within a clinical framework, reducing self-blame and increasing treatment motivation. Jumping to cognitive challenging (CBT technique) is premature without rapport. Breathing exercises are useful but secondary to the therapeutic relationship. Psychiatric referral may be warranted later if therapy alone is insufficient, but is premature as a first action."
      },
      {
        id: "dm2-4",
        domain: "Professional Practice & Ethics",
        question: "What ethical consideration is most relevant in Marcus's case?",
        options: [
          "Duty to warn — Marcus may be a danger to others due to anxiety",
          "Informed consent — ensuring Marcus understands CBT treatment process, risks, benefits, and alternatives",
          "Dual relationships — avoiding social contact with Marcus outside sessions",
          "Confidentiality — Marcus's employer cannot be informed about his treatment"
        ],
        correctIndex: 1,
        explanation: "Informed consent is the most directly relevant ethical consideration for a new client beginning treatment. Per ACA Code of Ethics (A.2.a), counselors must inform clients about the counseling process, including treatment approaches, potential risks and benefits, alternatives, and the client's right to refuse or terminate treatment. Marcus should understand what CBT involves, the expected timeline, and what to expect. Duty to warn is not applicable (no danger to others). While confidentiality matters, informed consent is the primary ethical action at the start of treatment."
      },
      {
        id: "dm2-5",
        domain: "Treatment Planning",
        question: "What is the most appropriate disposition for Marcus?",
        options: [
          "Weekly outpatient CBT sessions with reassessment at 8 weeks",
          "Bi-weekly supportive counseling sessions indefinitely",
          "Intensive outpatient program for anxiety",
          "Self-help workbook with monthly check-in sessions"
        ],
        correctIndex: 0,
        explanation: "Weekly outpatient CBT is the appropriate level of care for GAD with a GAD-7 score of 15 (severe). Evidence-based CBT for GAD typically involves 12-16 weekly sessions. Reassessment at 8 weeks allows evaluation of treatment response and adjustment. Bi-weekly sessions are too infrequent for active CBT skill acquisition. IOP is too intensive for his functional level. Self-help alone is insufficient for severe anxiety and would not constitute appropriate clinical care."
      }
    ]
  },
  {
    id: "sim-3-ptsd",
    title: "Case 3: PTSD (Combat Veteran)",
    category: "Trauma & Stressor-Related",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    narrative: `James Rivera is a 42-year-old Hispanic male military veteran referred by the Veterans Affairs (VA) primary care clinic for mental health evaluation. He served two combat deployments to Afghanistan (2007 and 2010) as an Army infantryman and was honorably discharged in 2012 at the rank of Staff Sergeant. He is currently married to his wife Elena (married 15 years) and has two teenage sons (ages 14 and 16).

James presents reluctantly, stating his wife "made him come" after an incident where he dove to the ground in a grocery store parking lot when a car backfired nearby. He reports persistent nightmares about combat (3-4 times per week), difficulty sleeping (averaging 4-5 hours per night), and hypervigilance that has worsened over the past year. He describes feeling emotionally numb and detached from his family, stating "I love them but I can't feel it."

James avoids crowds, fireworks, news coverage of military conflicts, and driving on highways (reminds him of convoy routes). He reports increased irritability and angry outbursts, particularly with his sons. Elena has expressed concern that the marriage is "falling apart." James works as a warehouse manager but reports difficulty with concentration and has had conflicts with coworkers. He reluctantly admits to drinking 4-6 beers nightly to "quiet the noise in my head." He has not previously sought mental health treatment, citing stigma within military culture.`,
    igItems: [
      { id: "ig3-1", category: "Intake/Assessment", label: "Review intake questionnaire and military service records", revealText: "Intake confirms James is a 42-year-old married male veteran with two combat deployments. He served 12 years in the Army (2000-2012). DD-214 indicates honorable discharge. He reports combat exposure including direct firefights, IED explosions (was within 50 meters of 3 blasts), and witnessing the death of two squad members. He checked 'yes' for nightmares, flashbacks, avoidance, hypervigilance, and sleep problems on the intake checklist.", critical: false },
      { id: "ig3-2", category: "Intake/Assessment", label: "Conduct mental status examination", revealText: "James presents as a muscular, well-built male who appears older than his stated age. He wears a military-style haircut and maintains rigid posture. He sits with his back to the wall and positions his chair to face the door. Eye contact is intense and scanning. Speech is clipped and controlled. Mood is 'fine' (guarded). Affect is constricted and flat. Thought process is linear but hypervigilant. He is alert and oriented x4. Denies hallucinations but reports intrusive visual images of combat. Insight is limited; judgment is fair.", critical: true },
      { id: "ig3-3", category: "Intake/Assessment", label: "Administer PCL-5 (PTSD Checklist)", revealText: "PCL-5 total score: 58 (clinical cutoff for probable PTSD is 31-33). Highest-scoring clusters: Intrusion symptoms (Criterion B) — score 16/20; Avoidance (Criterion C) — score 8/8; Negative alterations in cognition and mood (Criterion D) — score 16/20; Arousal and reactivity (Criterion E) — score 18/20. All four symptom clusters are significantly elevated, consistent with severe PTSD.", critical: true },
      { id: "ig3-4", category: "Intake/Assessment", label: "Administer PHQ-9 depression screening", revealText: "PHQ-9 total score: 14 (moderate depression). He endorses sleep disturbance, fatigue, diminished interest in activities, difficulty concentrating, and feelings of worthlessness. He endorses 'not at all' for suicidal ideation on Item 9. Depressive symptoms may be secondary to or comorbid with PTSD.", critical: false },
      { id: "ig3-5", category: "History", label: "Explore detailed trauma history and combat exposure", revealText: "James describes his index trauma as witnessing the death of his closest friend during an IED ambush in 2010. He attempted to render aid but his friend died in his arms. He also witnessed civilian casualties including children. He experienced multiple direct combat engagements and was under mortar fire on several occasions. He reports one mild TBI from an IED blast concussion in 2010, cleared by medical evaluation. Pre-military trauma is denied — he describes his childhood as 'normal' and 'happy.'", critical: true },
      { id: "ig3-6", category: "History", label: "Assess family and marital relationship functioning", revealText: "James and Elena have been married 15 years. Elena reports that James has become increasingly withdrawn and emotionally unavailable since discharge. Arguments have escalated, primarily about his drinking and emotional absence. James's sons have expressed fear of his anger outbursts. No domestic violence reported, though James admits to punching walls twice in the past year. Elena has threatened to leave if he doesn't get help. James describes his relationship with his sons as 'distant' and expresses guilt.", critical: true },
      { id: "ig3-7", category: "History", label: "Review medical history and TBI screening", revealText: "James reports one mild TBI from IED blast (2010), cleared by neurological evaluation at the time. He reports chronic lower back pain and tinnitus, both service-connected. He takes ibuprofen for pain and uses earplugs for sleep. No other chronic conditions. No current psychiatric medications. He has been evaluated by VA primary care and referred for mental health treatment.", critical: false },
      { id: "ig3-8", category: "History", label: "Explore previous coping strategies and help-seeking barriers", revealText: "James has never sought mental health treatment. He cites military culture stigma: 'Seeking help means you're weak.' He reports using alcohol, physical exercise (less frequent now), and isolation as coping mechanisms. He previously attended a veterans' support group once but left because 'those guys had it worse.' He expresses ambivalence about therapy but acknowledges his wife's ultimatum as motivation.", critical: false },
      { id: "ig3-9", category: "Clinical Observations", label: "Assess suicide and homicide risk", revealText: "James denies current suicidal ideation, plan, or intent. He states, 'That's not me — I'm a fighter, not a quitter.' However, he endorses passive death ideation: 'Sometimes I think my family would be better off without me.' He denies homicidal ideation but admits to difficulty controlling anger. He owns firearms (3 hunting rifles, 1 handgun) stored in a locked safe. Given veteran status, combat trauma, alcohol use, firearm access, and passive ideation, risk is assessed as moderate.", critical: true },
      { id: "ig3-10", category: "Clinical Observations", label: "Evaluate substance use patterns in detail", revealText: "James reports drinking 4-6 beers nightly, increasing to 8-10 on weekends for the past 3 years. He describes drinking as 'the only thing that shuts my brain off.' He denies morning drinking or drinking at work. AUDIT score: 19 (hazardous/harmful use). He reports increasing tolerance. He denies withdrawal symptoms but has never attempted to stop. He denies illicit drug use. His alcohol use represents a significant comorbid concern that must be addressed in treatment planning.", critical: true },
      { id: "ig3-11", category: "Clinical Observations", label: "Observe trauma-related behaviors during session", revealText: "Throughout the session, James demonstrates multiple trauma-related behaviors: positioned himself with back to wall facing door (tactical seating), startled visibly when the HVAC system turned on, maintained scanning eye contact rather than sustained engagement, became notably more tense and speech became pressured when discussing the IED incident, and gripped chair arms tightly when describing his friend's death. He dissociated briefly (5-10 seconds, staring at a fixed point) before redirecting himself.", critical: false },
      { id: "ig3-12", category: "Clinical Observations", label: "Assess motivation for treatment and readiness for change", revealText: "James is in the contemplation stage of change regarding treatment. He acknowledges problems but is ambivalent about therapy. Primary motivator is saving his marriage. He expresses skepticism about 'talking curing anything' but is willing to 'give it a shot.' He is resistant to medication. He is in the pre-contemplation stage regarding alcohol use — he does not view drinking as a problem and becomes defensive when asked about it.", critical: false },
    ],
    dmQuestions: [
      {
        id: "dm3-1",
        domain: "Assessment & Diagnosis",
        question: "Based on the information gathered, what is the most appropriate primary DSM-5-TR diagnosis?",
        options: [
          "Acute Stress Disorder",
          "Posttraumatic Stress Disorder with dissociative symptoms",
          "Posttraumatic Stress Disorder",
          "Adjustment Disorder with mixed anxiety and depressed mood"
        ],
        correctIndex: 2,
        explanation: "James meets full DSM-5-TR criteria for PTSD (309.81): Criterion A — exposure to combat, death of friend; Criterion B — intrusive memories, nightmares, flashbacks (car backfire); Criterion C — avoidance of crowds, highways, military news; Criterion D — emotional numbing, detachment, negative self-cognitions; Criterion E — hypervigilance, exaggerated startle, sleep disturbance, irritability. Duration exceeds 1 month (3+ years). Symptoms cause significant functional impairment. While he showed a brief dissociative moment, it does not meet the sustained depersonalization/derealization required for the dissociative subtype. Acute Stress Disorder requires onset within 1 month. Adjustment Disorder is excluded when full PTSD criteria are met."
      },
      {
        id: "dm3-2",
        domain: "Treatment Planning",
        question: "What is the most appropriate evidence-based treatment approach?",
        options: [
          "Supportive counseling focused on stress management techniques",
          "Cognitive Processing Therapy (CPT) with concurrent assessment of alcohol use",
          "Exposure and Response Prevention (ERP) for avoidance behaviors",
          "Couples therapy to address marital conflict as the primary intervention"
        ],
        correctIndex: 1,
        explanation: "CPT is one of the two VA/DoD strongly recommended first-line treatments for PTSD (along with Prolonged Exposure). CPT addresses the stuck points in James's cognitive processing of his trauma — guilt about his friend's death, beliefs about weakness, and emotional numbing. Concurrent assessment of alcohol use is critical as hazardous drinking (AUDIT: 19) may interfere with treatment. ERP is primarily for OCD, not PTSD. Supportive counseling alone lacks the trauma-focused component needed. Couples therapy may be a valuable adjunct but cannot be the primary intervention for PTSD."
      },
      {
        id: "dm3-3",
        domain: "Counselor Attributes & Core Competencies",
        question: "What is the most important immediate counselor action?",
        options: [
          "Begin trauma processing by having James describe the index trauma in detail",
          "Develop a safety plan addressing firearm access, alcohol use, and passive suicidal ideation",
          "Confront James about his alcohol use as a barrier to treatment",
          "Schedule Elena for a joint session to discuss the marital issues"
        ],
        correctIndex: 1,
        explanation: "Given James's moderate risk assessment (veteran status + passive ideation + firearm access + hazardous alcohol use), developing a comprehensive safety plan is the most critical first action. This should include: a voluntary plan for firearm storage with a trusted party, identification of warning signs, coping strategies, social supports, crisis resources (Veterans Crisis Line: 988, press 1), and reduction of lethal means access. Trauma processing in the first session is contraindicated without adequate stabilization. Confronting alcohol use may damage rapport with an already-resistant client. Couples therapy is premature."
      },
      {
        id: "dm3-4",
        domain: "Professional Practice & Ethics",
        question: "What ethical consideration is most critical in James's case?",
        options: [
          "Mandated reporting — James's anger outbursts may constitute child abuse",
          "Duty to protect — assessing lethality given firearm access and passive suicidal ideation",
          "Cultural competency — understanding military culture and its impact on help-seeking",
          "Scope of practice — referring James to a PTSD specialist rather than treating him"
        ],
        correctIndex: 1,
        explanation: "Duty to protect (Tarasoff) and lethality assessment are the most critical ethical considerations. James has passive suicidal ideation ('family would be better off without me'), access to firearms, hazardous alcohol use, and combat trauma — all significant risk factors for veteran suicide. The counselor must assess lethality, discuss voluntary means restriction (firearm storage), and develop a safety plan. While cultural competency and scope of practice are important, they are secondary to the immediate safety and duty-to-protect obligation. Anger outbursts (wall punching) without harm directed at children do not meet mandated reporting thresholds, though monitoring is warranted."
      },
      {
        id: "dm3-5",
        domain: "Treatment Planning",
        question: "What is the most appropriate disposition for James?",
        options: [
          "Weekly individual CPT sessions with integrated alcohol use monitoring and safety plan review",
          "Immediate referral to inpatient PTSD treatment program",
          "Bi-weekly supportive counseling with monthly psychiatry check-ins",
          "Group therapy for combat veterans as the sole treatment modality"
        ],
        correctIndex: 0,
        explanation: "Weekly individual CPT with integrated alcohol monitoring is the appropriate outpatient level of care. James's symptoms are severe but he maintains employment, denies active suicidal intent, and has protective factors. CPT typically involves 12 sessions. Alcohol use should be monitored at each session; if it worsens or interferes with treatment, a more intensive intervention (e.g., AUDIT-based brief intervention, referral to SUD treatment) would be warranted. Inpatient treatment is not indicated given his current functioning. Bi-weekly sessions are too infrequent for active trauma-focused treatment. Group therapy alone is insufficient for severe PTSD."
      }
    ]
  },
  {
    id: "sim-4-sud",
    title: "Case 4: Alcohol Use Disorder",
    category: "Substance-Related Disorders",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    narrative: `Nicole Patterson is a 38-year-old Caucasian female presenting for court-mandated counseling following her first DUI arrest 6 weeks ago. She was pulled over after leaving a work happy hour and registered a blood alcohol content (BAC) of 0.14, nearly twice the legal limit. As part of her legal requirements, she must complete a substance use evaluation and attend a minimum of 12 counseling sessions.

Nicole works as an account manager at a marketing firm and describes herself as "successful and high-functioning." She is dismissive of the court mandate, stating "I just had a bad night — I'm not an alcoholic." She reports drinking 4-5 glasses of wine nightly for the past 2+ years, starting typically around 6:00 PM when she arrives home from work. On weekends, she may drink 6-8 glasses during social events.

Nicole grew up in a household where her father drank heavily and was emotionally neglectful. Her parents divorced when she was 12, and she reports minimal contact with her father since. She describes her childhood as "fine" and minimizes its impact. She is currently in a stable relationship with her partner David (3 years) who has expressed concern about her drinking. Nicole has a 10-year-old daughter, Lily, from a previous relationship who lives with her full-time. Nicole presents well-groomed and articulate, but becomes defensive when the topic of her drinking patterns is explored in depth.`,
    igItems: [
      { id: "ig4-1", category: "Intake/Assessment", label: "Review court documentation and legal history", revealText: "Court records indicate Nicole was arrested for DUI with BAC of 0.14. No prior arrests or legal history. Judge ordered substance use evaluation and minimum 12 counseling sessions. Driver's license was suspended for 90 days (currently using rideshare). She is also required to attend 4 sessions of a DUI education program. Failure to complete requirements could result in additional penalties including possible jail time.", critical: false },
      { id: "ig4-2", category: "Intake/Assessment", label: "Conduct mental status examination", revealText: "Nicole is an attractive, well-groomed woman who appears her stated age. She is articulate, maintains good eye contact, and presents with a confident, slightly guarded demeanor. Speech is fluent and well-organized. Mood is described as 'annoyed about being here.' Affect is congruent, with flashes of defensiveness and irritability when discussing alcohol. Thought process is linear and goal-directed. No suicidal or homicidal ideation. No hallucinations or delusions. Insight is poor regarding substance use; judgment is impaired regarding drinking behaviors but intact in other domains.", critical: true },
      { id: "ig4-3", category: "Intake/Assessment", label: "Administer AUDIT (Alcohol Use Disorders Identification Test)", revealText: "AUDIT total score: 22 (scores ≥20 indicate possible alcohol dependence). She scored high on frequency of drinking (daily), quantity (4-5 standard drinks), and frequency of 6+ drinks in one sitting (weekly on weekends). She endorsed 'yes' to: inability to stop once started (sometimes), failed expectations due to drinking (once in the past year — the DUI), and a relative/friend expressing concern about her drinking (David). She answered 'no' to morning drinking, guilt, and memory blackouts, though further exploration is warranted.", critical: true },
      { id: "ig4-4", category: "Intake/Assessment", label: "Administer PHQ-9 and GAD-7 screenings", revealText: "PHQ-9 total score: 9 (mild depression). She endorses some fatigue, sleep disturbance, and occasional feelings of failure. GAD-7 total score: 6 (mild anxiety). She reports some generalized worry about the legal situation and its impact on her career. Both may be secondary to or masked by alcohol use. Reassessment after a period of reduced drinking would provide clearer clinical picture.", critical: false },
      { id: "ig4-5", category: "History", label: "Explore family history of substance use and addiction", revealText: "Nicole's father was a heavy drinker — she describes him drinking 'a six-pack every night and more on weekends.' Her parents divorced when she was 12, primarily due to his drinking. She reports feeling angry and embarrassed by his behavior as a child. Her paternal grandfather also had a 'drinking problem.' She states emphatically, 'I am nothing like my father.' Her mother does not drink. No other family history of substance use disorders. This family history represents a significant genetic and environmental risk factor.", critical: true },
      { id: "ig4-6", category: "History", label: "Assess history of childhood experiences and attachment", revealText: "Nicole describes her father as emotionally neglectful and unpredictable. She recalls many evenings waiting for him to come home, and feeling responsible for her younger brother when their mother worked late shifts. She describes learning to 'take care of everything myself' from a young age. She identifies as a perfectionist and people-pleaser. She denies physical or sexual abuse but acknowledges emotional neglect. She becomes notably more guarded when discussing her father, stating 'I've moved past all that.'", critical: false },
      { id: "ig4-7", category: "History", label: "Explore detailed drinking history and progression", revealText: "Nicole began drinking socially in college. She reports her drinking increased in her late 20s after her daughter was born and her relationship with Lily's father ended. Drinking escalated to daily use approximately 2.5 years ago when she started a high-pressure job. She has developed tolerance — she reports needing more wine to achieve the same relaxation effect. She has never attempted to quit or reduce her drinking. She does not recognize her drinking pattern as problematic beyond the DUI incident.", critical: true },
      { id: "ig4-8", category: "History", label: "Assess impact of drinking on parenting and family life", revealText: "Nicole insists her drinking 'doesn't affect Lily at all' because she drinks after Lily goes to bed. However, upon further exploration, she admits Lily has seen her drinking on weekends and once said 'Mommy, you smell funny.' David has expressed concern multiple times and they have argued about her drinking. She admits to being less patient with Lily on mornings after heavy drinking. She has never missed work due to drinking, which reinforces her 'high-functioning' self-image.", critical: true },
      { id: "ig4-9", category: "Clinical Observations", label: "Assess suicide risk and safety", revealText: "Nicole denies any suicidal ideation, intent, or plan. She denies any history of self-harm. She reports no access to firearms. She has a generally positive outlook and strong motivation to maintain her career and parenting role. She expresses frustration with the legal situation but does not express hopelessness. Risk is assessed as low.", critical: true },
      { id: "ig4-10", category: "Clinical Observations", label: "Evaluate for signs of physical dependence and withdrawal", revealText: "Nicole denies morning shaking, sweating, or nausea. She reports that she has never experienced seizures related to alcohol. However, she reports difficulty sleeping on the rare occasions she doesn't drink, and increased irritability on days without alcohol. She has never had more than 1 day without drinking in the past 2 years. These findings suggest possible early physiological dependence that should be monitored. Medical clearance for detox should be considered if significant reduction is planned.", critical: true },
      { id: "ig4-11", category: "Clinical Observations", label: "Assess motivation and readiness for change", revealText: "Nicole is clearly in the pre-contemplation/contemplation stage of change. She minimizes her drinking ('Everyone drinks wine after work'), rationalizes ('I've never missed work'), and externalizes the problem ('The cop was just looking for someone to pull over'). However, she shows some ambivalence — she becomes thoughtful when discussing Lily's comment and David's concerns. She states, 'I don't think I have a problem, but I also don't want to lose David or have Lily worry about me.' This ambivalence is a therapeutic entry point.", critical: false },
      { id: "ig4-12", category: "Clinical Observations", label: "Observe defense mechanisms and interpersonal patterns", revealText: "Nicole employs several defense mechanisms throughout the session: denial ('I don't have a problem'), minimization ('It's just wine'), rationalization ('Everyone in my industry drinks'), intellectualization (discussing alcohol statistics she read online), and projection ('David is the one with the control issue'). Her interpersonal style is charming but controlling — she attempts to redirect the conversation, uses humor to deflect serious questions, and becomes subtly hostile when challenged.", critical: false },
    ],
    dmQuestions: [
      {
        id: "dm4-1",
        domain: "Assessment & Diagnosis",
        question: "Based on the information gathered, what is the most appropriate DSM-5-TR diagnosis?",
        options: [
          "Alcohol Use Disorder, Mild",
          "Alcohol Use Disorder, Moderate",
          "Alcohol Use Disorder, Severe",
          "No diagnosis — problematic drinking not meeting disorder criteria"
        ],
        correctIndex: 1,
        explanation: "Nicole meets criteria for Alcohol Use Disorder, Moderate (4-5 criteria). Evidence supports: (1) alcohol taken in larger amounts/longer than intended (drinks more on weekends than planned), (2) persistent desire/unsuccessful efforts to cut down (has never tried), (3) tolerance (needs more to achieve relaxation), (4) continued use despite social/interpersonal problems (conflicts with David, Lily's concern), (5) recurrent use in hazardous situations (DUI). The presence of 4-5 criteria places her in the moderate severity range. Mild requires 2-3 criteria; Severe requires 6+."
      },
      {
        id: "dm4-2",
        domain: "Treatment Planning",
        question: "What is the most appropriate initial treatment approach?",
        options: [
          "Confrontational intervention to break through denial",
          "Motivational Interviewing (MI) to explore ambivalence and build intrinsic motivation for change",
          "Immediate referral to a 28-day inpatient rehabilitation program",
          "12-step program (AA) attendance as the sole intervention"
        ],
        correctIndex: 1,
        explanation: "Motivational Interviewing is the evidence-based approach most appropriate for Nicole's pre-contemplation/contemplation stage of change. MI's non-confrontational, collaborative style works with ambivalence rather than against resistance — critical for a mandated client who is defensive. Key MI strategies include expressing empathy, developing discrepancy (between values and behavior), rolling with resistance, and supporting self-efficacy. Confrontation increases resistance in pre-contemplative clients. Inpatient treatment is premature and not indicated for moderate AUD without severe withdrawal risk. AA alone is insufficient for the complexity of her presentation."
      },
      {
        id: "dm4-3",
        domain: "Counselor Attributes & Core Competencies",
        question: "What is the most important immediate counselor action?",
        options: [
          "Establish rapport by meeting Nicole where she is and avoiding power struggles about her drinking",
          "Educate Nicole on the genetic risks given her family history of alcoholism",
          "Set clear boundaries that she must achieve abstinence to complete the program",
          "Focus on the childhood emotional neglect as the root cause of her drinking"
        ],
        correctIndex: 0,
        explanation: "With a mandated, resistant client, establishing rapport and avoiding power struggles is paramount. The counselor should use MI principles: express empathy, avoid the 'righting reflex' (urge to correct), and acknowledge her autonomy while exploring ambivalence. Educating about genetic risk may be perceived as labeling. Requiring abstinence creates a power struggle and is not evidence-based for moderate AUD (controlled drinking may be an appropriate intermediate goal). Exploring childhood trauma is premature without rapport and stabilization."
      },
      {
        id: "dm4-4",
        domain: "Professional Practice & Ethics",
        question: "What ethical consideration is most relevant in Nicole's case?",
        options: [
          "Mandated reporting — Nicole's drinking may constitute child neglect",
          "Dual relationship boundaries — managing the court-mandated reporting requirement while maintaining therapeutic alliance",
          "Beneficence — the counselor knows what's best for Nicole and should guide her toward abstinence",
          "Confidentiality — Nicole's employer should not be informed about her treatment"
        ],
        correctIndex: 1,
        explanation: "The most relevant ethical consideration is managing dual obligations inherent in court-mandated treatment: therapeutic alliance with Nicole vs. reporting obligations to the court. The counselor must be transparent about what information will and will not be shared with the court (informed consent), maintain appropriate boundaries, and balance advocacy for the client with legal reporting requirements (ACA Code of Ethics B.2.a). Nicole's drinking at this point does not constitute reportable child neglect. True beneficence respects autonomy rather than imposing the counselor's values."
      },
      {
        id: "dm4-5",
        domain: "Treatment Planning",
        question: "What is the most appropriate disposition for Nicole?",
        options: [
          "Weekly outpatient MI-based counseling (12+ sessions) with medical screening for withdrawal risk",
          "Referral to AA meetings 3 times per week with monthly counseling check-ins",
          "Intensive outpatient program (IOP) with daily group therapy",
          "Bi-weekly counseling focused on childhood trauma processing"
        ],
        correctIndex: 0,
        explanation: "Weekly outpatient MI-based counseling fulfills the court requirement (12+ sessions) and is clinically appropriate for moderate AUD without severe withdrawal. Medical screening is important given daily drinking for 2+ years — if significant reduction is attempted, withdrawal monitoring is warranted. IOP is a higher level of care not yet indicated. AA may be a useful adjunct but is not sufficient alone. Trauma processing is premature; stabilization of drinking patterns should precede deeper therapeutic work with the childhood issues."
      }
    ]
  },
  {
    id: "sim-5-bpd",
    title: "Case 5: Borderline Personality Disorder",
    category: "Personality Disorders",
    difficulty: "Advanced",
    estimatedMinutes: 35,
    narrative: `Chloe Dawson is a 25-year-old Caucasian female presenting for outpatient counseling following her third emergency room visit in 6 months for superficial self-harm (cutting on forearms). She was referred by the ER social worker. Chloe currently works part-time as a barista and lives with her boyfriend, Tyler, in a rented apartment. She has an associate's degree in graphic design but has not been able to maintain steady employment in her field.

Chloe presents as an articulate and emotionally expressive young woman who oscillates between tearful vulnerability and sharp, sarcastic humor within minutes. She describes a lifelong pattern of unstable relationships, stating "Everyone always leaves me eventually." She reports an intense fear of abandonment that manifests as desperate attempts to prevent real or imagined separation — including frequent texting, going through Tyler's phone, and threatening self-harm during arguments.

Her relationship with Tyler (1 year) is described as volatile — characterized by intense passion followed by explosive arguments. She reports that Tyler is "the love of my life" but also describes him as "selfish and uncaring" when he spends time with friends. She has a history of 7 romantic relationships in the past 5 years, each described initially as "perfect" before ending dramatically.

Chloe reports chronic feelings of emptiness, rapid mood shifts (feeling elated one hour and despairing the next), and impulsive behaviors including binge spending, binge eating, and unsafe sexual encounters during relationship breaks. She has a history of cutting since age 16, with the behavior intensifying during relationship conflicts. She denies current suicidal intent but reports 2 previous suicidal gestures (overdose of over-the-counter medications) at ages 19 and 22, both following breakups.`,
    igItems: [
      { id: "ig5-1", category: "Intake/Assessment", label: "Review ER records and self-harm history", revealText: "ER records document 3 visits in 6 months for superficial lacerations on bilateral forearms from cutting with a razor blade. Wounds were cleaned and dressed; no sutures required. Each visit followed a conflict with Tyler. Previous ER visits at ages 19 and 22 for intentional OTC medication overdose (acetaminophen and ibuprofen) — both were treated medically and released with safety plans. Social work notes describe a pattern of crisis presentation followed by rapid stabilization and discharge.", critical: true },
      { id: "ig5-2", category: "Intake/Assessment", label: "Conduct mental status examination", revealText: "Chloe is an attractive young woman with visible healed scars on both forearms partially covered by bracelets. She makes intense eye contact. Emotional state shifts rapidly — tearful when discussing abandonment fears, then laughing sarcastically about her 'drama.' Speech varies from pressured (when agitated) to soft (when vulnerable). Mood is 'empty inside.' Affect is labile with full range. Thought process is linear but emotionally driven. She reports intermittent passive suicidal ideation ('What's the point?') without current plan or intent. Identity disturbance evident — struggles to describe who she is. Insight is partial; judgment is impaired during emotional crises.", critical: true },
      { id: "ig5-3", category: "Intake/Assessment", label: "Administer BSL-23 (Borderline Symptom List)", revealText: "BSL-23 total score: 72/92 (elevated, consistent with BPD). Highest-scoring items: fear of abandonment, feeling empty, rapid mood changes, self-harm urges, unstable self-image, and intense anger. She also scored high on dissociative experiences during stress. The profile is consistent with BPD features across affective instability, identity disturbance, interpersonal dysfunction, and behavioral dysregulation domains.", critical: true },
      { id: "ig5-4", category: "Intake/Assessment", label: "Administer PHQ-9 and screen for comorbid conditions", revealText: "PHQ-9 total score: 16 (moderately severe depression). She endorses depressed mood, loss of interest, sleep disturbance, low energy, feelings of worthlessness, and passive suicidal ideation. However, her mood presentation is more consistent with affective instability (rapid shifts) than sustained major depression. GAD-7 score: 11 (moderate anxiety), primarily related to abandonment fears. Screen for bipolar disorder (MDQ) is negative — mood shifts occur within hours, not days/weeks. Comorbid features of depression and anxiety are common in BPD.", critical: false },
      { id: "ig5-5", category: "History", label: "Explore childhood and developmental history in detail", revealText: "Chloe describes a chaotic childhood. Her biological father left when she was 3; she has no contact with him. Her mother remarried when Chloe was 7 to a man Chloe describes as 'cold and critical.' She reports emotional invalidation from her stepfather ('Stop crying or I'll give you something to cry about') and inconsistent attention from her mother. She began cutting at age 16 during her parents' second divorce. She describes feeling 'invisible' in her family. She denies sexual abuse but reports emotional abuse/neglect. Early attachment disruption and invalidating environment are consistent with BPD developmental pathways.", critical: true },
      { id: "ig5-6", category: "History", label: "Assess relationship patterns and attachment style", revealText: "Chloe describes a pattern of idealization/devaluation in all relationships. New relationships feel 'magical and intense' (idealization) before rapidly deteriorating into conflict and perceived betrayal (devaluation). She reports terror at any sign of distance or disinterest from partners. She describes herself as either 'totally devoted' or 'completely done' with people. Friendships follow a similar pattern — she has had multiple 'best friends' who she now describes as 'toxic.' She recognizes the pattern intellectually but feels unable to control it emotionally.", critical: true },
      { id: "ig5-7", category: "History", label: "Explore self-harm functions and patterns", revealText: "Chloe began cutting at age 16. She describes cutting as serving multiple functions: emotional regulation ('it releases the pressure'), self-punishment ('I deserve pain for being so messed up'), communication ('it shows how much I'm hurting'), and grounding ('it brings me back when I feel numb'). Cutting typically occurs during or after interpersonal conflict, particularly perceived rejection. She reports increased frequency over the past year (2-3 times monthly). She uses razor blades stored in her bathroom. She reports some urges but no cutting in the past 2 weeks.", critical: true },
      { id: "ig5-8", category: "History", label: "Explore previous treatment history", revealText: "Chloe attended counseling twice before: at age 19 after her first overdose (4 sessions, terminated — felt the therapist 'didn't understand her') and at age 22 after her second overdose (8 sessions of supportive counseling, terminated when she moved for a relationship). She reports no experience with evidence-based BPD treatments (DBT, MBT, Schema Therapy). She has been prescribed sertraline by a PCP (never took it consistently) and was offered mood stabilizers (declined). She expresses both hope and cynicism about therapy.", critical: false },
      { id: "ig5-9", category: "Clinical Observations", label: "Conduct thorough suicide risk assessment", revealText: "Chloe endorses chronic passive suicidal ideation ('What's the point?' 'Sometimes I think about not existing'). She denies current active plan or intent. History of 2 previous suicidal gestures (overdoses at 19 and 22, both impulsive, both following breakups). She differentiates between self-harm (cutting for emotional regulation) and suicidal behavior (overdoses when 'everything falls apart'). Risk factors: history of attempts, self-harm, impulsivity, BPD features, unstable relationships. Protective factors: stated desire to 'get better,' employment, relationship (despite volatility), engagement in help-seeking. Risk is assessed as chronic moderate with episodic acute elevation during interpersonal crises.", critical: true },
      { id: "ig5-10", category: "Clinical Observations", label: "Evaluate substance use and impulsive behaviors", revealText: "Chloe reports binge drinking during social outings (5-6 drinks on weekends) and occasional cannabis use. No daily substance use. She denies other drug use. More clinically significant are non-substance impulsive behaviors: binge spending (credit card debt of approximately $8,000), binge eating followed by guilt (not purging), and history of impulsive sexual encounters (unprotected sex with strangers during breakups). These impulsive behaviors are consistent with BPD Criterion 4.", critical: true },
      { id: "ig5-11", category: "Clinical Observations", label: "Assess identity disturbance and sense of self", revealText: "When asked to describe herself, Chloe struggles significantly. She states, 'I don't know who I am — I become whoever I'm with.' She reports changing her appearance, interests, and career goals based on her current partner's preferences. Her self-image alternates between grandiosity ('I'm special and creative') and self-loathing ('I'm fundamentally broken'). She reports feeling 'empty' as her baseline emotional state. She has difficulty identifying personal values, long-term goals, or consistent preferences independent of relationships.", critical: false },
      { id: "ig5-12", category: "Clinical Observations", label: "Observe transference and therapeutic relationship dynamics", revealText: "During the initial session, Chloe demonstrates early idealization of the therapeutic relationship ('You actually seem like you care — not like the other therapists'). She also tests boundaries — asking personal questions about the counselor, requesting the counselor's personal phone number 'for emergencies,' and asking if she can schedule longer sessions. She becomes visibly anxious when the end of the session approaches, asking 'You're not going to abandon me like the others, right?' These dynamics are diagnostically informative and important to manage with clear, warm boundaries.", critical: false },
    ],
    dmQuestions: [
      {
        id: "dm5-1",
        domain: "Assessment & Diagnosis",
        question: "Based on the information gathered, what is the most appropriate primary DSM-5-TR diagnosis?",
        options: [
          "Major Depressive Disorder, Recurrent, with self-harm",
          "Bipolar II Disorder with rapid cycling",
          "Borderline Personality Disorder",
          "Complex PTSD (proposed diagnosis)"
        ],
        correctIndex: 2,
        explanation: "Chloe meets DSM-5-TR criteria for Borderline Personality Disorder (301.83), demonstrating 7 of 9 criteria: (1) frantic efforts to avoid abandonment, (2) pattern of unstable/intense relationships with idealization/devaluation, (3) identity disturbance — markedly unstable self-image, (4) impulsivity in spending, sex, and binge eating, (5) recurrent self-harm and suicidal gestures, (6) affective instability — rapid mood shifts within hours, (7) chronic emptiness. She also shows features of (8) inappropriate intense anger and (9) transient stress-related dissociation. MDD does not account for the pervasive personality pattern. Bipolar II is excluded — her mood shifts occur over hours, not the days/weeks required for hypomanic episodes. Complex PTSD is not a DSM-5-TR diagnosis."
      },
      {
        id: "dm5-2",
        domain: "Treatment Planning",
        question: "What is the most appropriate evidence-based treatment approach?",
        options: [
          "Cognitive Behavioral Therapy (CBT) focused on automatic thoughts",
          "Dialectical Behavior Therapy (DBT) with skills training and individual therapy",
          "Psychoanalytic psychotherapy exploring unconscious conflicts",
          "Medication management with an SSRI as the primary treatment"
        ],
        correctIndex: 1,
        explanation: "DBT is the most extensively researched and recommended treatment for BPD (Linehan, 2015). DBT specifically targets the core deficits in BPD: emotional dysregulation, distress intolerance, interpersonal ineffectiveness, and identity disturbance. Standard DBT includes: individual therapy, skills training group (mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness), phone coaching for crisis skills, and therapist consultation team. DBT has the strongest evidence for reducing self-harm, suicidal behavior, and ER visits in BPD. Standard CBT lacks the emotional regulation focus. Psychoanalysis can be destabilizing. Medication alone does not address the personality pattern."
      },
      {
        id: "dm5-3",
        domain: "Counselor Attributes & Core Competencies",
        question: "What is the most important immediate counselor action?",
        options: [
          "Immediately remove all self-harm instruments from Chloe's home",
          "Collaboratively develop a crisis response plan with a means restriction component and chain analysis of recent self-harm",
          "Set firm boundaries about future self-harm and communicate that cutting will result in termination",
          "Focus on building self-esteem through positive affirmations and strength identification"
        ],
        correctIndex: 1,
        explanation: "A collaborative crisis response plan is the essential first step with a client with active self-harm and history of suicidal gestures. This should include: identifying emotional triggers and warning signs, hierarchical coping strategies (DBT distress tolerance skills), people to call for support, emergency contacts and crisis hotlines, and a means restriction plan (collaborative discussion about reducing access to razor blades). Chain analysis of recent self-harm episodes helps identify the function and triggers. Demanding removal of all instruments is impractical and paternalistic. Threatening termination for self-harm is contraindicated and potentially dangerous. Building self-esteem is premature without stabilization."
      },
      {
        id: "dm5-4",
        domain: "Professional Practice & Ethics",
        question: "What ethical consideration is most critical in Chloe's case?",
        options: [
          "Informed consent — explaining the risks, benefits, and limitations of DBT treatment including the possibility that therapy may initially increase emotional distress",
          "Mandated reporting — Chloe's self-harm may require hospitalization against her will",
          "Scope of practice — BPD treatment requires specialized training that many counselors lack",
          "Boundary management — establishing clear therapeutic boundaries given Chloe's tendency toward idealization and boundary testing"
        ],
        correctIndex: 3,
        explanation: "While all options have merit, boundary management is the most critical ongoing ethical consideration in BPD treatment. Chloe already demonstrates idealization and boundary testing (requesting personal phone number, asking personal questions, seeking reassurance about abandonment). Firm, consistent, warm boundaries are both therapeutically essential and ethically required. Poor boundary management can lead to therapeutic harm, dual relationship concerns, and treatment failure. BPD clients may evoke strong countertransference reactions that require active management. Informed consent and scope of practice are important initial considerations, and involuntary hospitalization is only warranted for imminent danger."
      },
      {
        id: "dm5-5",
        domain: "Treatment Planning",
        question: "What is the most appropriate disposition for Chloe?",
        options: [
          "Comprehensive DBT program (individual therapy + skills group) with crisis coaching protocol, weekly for 12+ months",
          "Weekly supportive counseling with crisis ER visits as needed",
          "Intensive outpatient program (IOP) followed by step-down to weekly therapy",
          "Psychiatric hospitalization for stabilization followed by residential treatment"
        ],
        correctIndex: 0,
        explanation: "Comprehensive DBT (individual therapy + skills group + phone coaching + consultation team) is the evidence-based standard of care for BPD with self-harm. DBT commitment is typically 12 months minimum. This provides the structure, skill-building, and crisis management framework Chloe needs. Skills training group teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — directly targeting her core deficits. Phone coaching between sessions provides in-vivo crisis support. Supportive counseling alone lacks the structure and evidence base. IOP may be a useful adjunct but not a substitute. Hospitalization is not warranted as she is not in imminent danger and has outpatient resources."
      }
    ]
  }
];
