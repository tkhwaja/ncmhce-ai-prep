import type { Narrative } from "./types";

// NARRATIVE 01 — PRIYA D. (GAD with emerging Panic Disorder)
// Adapted to codebase schema: capitalized difficulty, added category, dropped estimatedTimeMinutes
// (default minutesPerSection of 20 applies; ~45 min total across 3 sections is approximated).
export const priyaGad: Narrative = {
  id: "01-priya-gad",
  title: "Priya — Generalized Anxiety Disorder",
  category: "Anxiety Disorders",
  difficulty: "Intermediate",

  clientInfo: {
    age: 28,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Cisgender Female",
    pronouns: "She/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "South Asian (Indian American, second generation)",
    relationshipStatus: "Single, never married",
    setting: "Private practice",
    payment: "Insurance",
    typeOfCounseling: "Individual",
    provisionalDiagnosis: "Generalized Anxiety Disorder: F41.1",
  },

  presentingProblem: `You are a licensed mental health counselor in private practice. Your client self-referred after searching online for a therapist who accepts her insurance. She stated, "I think I'm tired of feeling like this. I don't know what else to do."

The client reported persistent worry that she traces back to adolescence, with significant worsening over the past two years since beginning her job as a staff accountant. She stated, "It just cycles all day. I can't turn it off." She described worrying about work performance, her parents' health, her apartment's safety, whether she'll find a partner, finances, and her younger brother. She stated, "I worry about things that haven't even happened yet."

The client reported feeling restless and on edge most days, with persistent muscle tension in her neck and shoulders, fatigue despite adequate sleep, difficulty concentrating ("I'll reread the same paragraph four times"), and irritability she directs at herself. She rated her distress as "a seven out of ten, most days." Symptoms have been present more days than not for at least two years. She denied any history of elevated or expansive mood, discrete episodes of intense fear with physical symptoms, worry specific to social evaluation, or significant trauma history.

The client described her family as "close, but high-pressure." She reported her parents immigrated from Gujarat, India in the late 1980s. She stated, "My parents have always had high expectations. I felt like I had to be the one who got everything right." She visits her parents most weekends. She stated, "My parents don't believe in therapy. If they knew I was here they would be upset." This is her first attempt at counseling.`,

  mentalStatusObservation: `Your client presented professionally dressed and arrived ten minutes early. She was alert and oriented to person, place, time, and situation. Her grooming and hygiene were appropriate. Eye contact was good. Speech was clear, organized, and at a normal rate, though she apologized twice for "talking too much." Mood was reported as "worried." Affect was appropriate to content but somewhat constricted. Thought processes were linear and goal-directed. Thought content was notable for repeated self-critical statements and anticipatory worry across multiple topics. No delusions or hallucinations were noted. She denied suicidal and homicidal ideation, plan, or intent. She has not experienced a manic or hypomanic episode. She denied using illicit substances and reported drinking two to three drinks over a weekend, with no increase in the past year. She had a physical examination four months ago with normal labs including thyroid function.`,

  familyHistory: `The client is the older of two children. Her parents live 40 minutes away. Her younger brother, age 24, lives with their parents. The client has no family history of diagnosed psychiatric illness that she knows of, though she described her mother as "always worrying" and her paternal grandmother as "the nervous type." No known family history of bipolar disorder, schizophrenia, suicide, or substance use disorders.`,

  workHistory: `Your client graduated with honors three years ago with a bachelor's degree in accounting. She was hired directly into a mid-sized accounting firm and is on track for a senior associate promotion. She stated, "It's objectively fine — I'm good at it — but I've never felt like this is what I was supposed to be doing." She recently began researching graduate programs in occupational therapy.`,

  intakeSessionSummary: `You administered the GAD-7. The client scored 16, reflecting severe anxiety symptoms. You shared the score with her. You offered CBT as your recommended approach. The client expressed openness to learning skills and ambivalence about medication, stating, "I'd like to see if I can do this without it first." At the end of the session, you acknowledged the courage it took for her to seek help. She became briefly tearful. You scheduled weekly sessions.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "priya-q1",
          questionNumber: 1,
          domain: "Professional practice and ethics",
          stem: "Your client asks how confidentiality works when her insurance requires a diagnostic code on claims. What is the most appropriate response?",
          options: [
            "Explain that you will not submit the diagnosis to protect her privacy.",
            "Explain what information is shared with insurers and discuss her options, including self-pay.",
            "Reassure her that insurance companies keep everything confidential.",
            "Ask her to consult an attorney before proceeding with treatment.",
          ],
          correctAnswer: 1,
          explanation:
            "Informed consent requires accurate information about how client data is handled. The client has the right to understand what insurers receive and to choose self-pay if privacy is a priority. Withholding the diagnosis while billing is insurance fraud.",
        },
        {
          id: "priya-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature of the client's presentation most strongly supports the diagnosis of Generalized Anxiety Disorder?",
          options: [
            "Her muscle tension and difficulty sleeping",
            "Her worry spanning multiple unrelated topics for more than six months",
            "Her GAD-7 score of 16",
            "Her family history of anxious traits",
          ],
          correctAnswer: 1,
          explanation:
            "The diagnostic hallmarks of GAD are generalized worry across multiple topics and duration of more days than not for at least six months. Physical symptoms and severity scores support the diagnosis but do not distinguish GAD from other anxiety disorders.",
        },
        {
          id: "priya-q3",
          questionNumber: 3,
          domain: "Intake/assessment/diagnosis",
          stem: "Which co-occurring condition would be most important to monitor throughout treatment?",
          options: [
            "Substance use disorder",
            "Depressive disorder",
            "Obsessive-compulsive disorder",
            "Post-traumatic stress disorder",
          ],
          correctAnswer: 1,
          explanation:
            "Depression is the most common comorbidity with GAD. The client's reports of fatigue, concentration difficulties, and irritability overlap with depressive symptoms and warrant ongoing screening.",
        },
        {
          id: "priya-q4",
          questionNumber: 4,
          domain: "Core counseling attributes",
          stem: "When you acknowledge the courage it took for the client to seek help despite her family's views, the client becomes briefly tearful. What counseling attribute are you demonstrating?",
          options: [
            "Empathic attunement",
            "Congruence",
            "Self-disclosure",
            "Confrontation",
          ],
          correctAnswer: 0,
          explanation:
            "Empathic attunement is the ability to recognize and respond to a client's emotional experience in the moment. Naming the difficulty of her choice allows her to feel seen during a vulnerable first contact.",
        },
        {
          id: "priya-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: "What is the most appropriate long-term goal for this client?",
          options: [
            "Eliminate all worry within twelve weeks of treatment",
            "Develop skills to manage anxiety and reduce functional impairment",
            "Resolve the conflict with her parents about her career path",
            "Discontinue dating until symptoms improve",
          ],
          correctAnswer: 1,
          explanation:
            "Evidence-based goals for GAD focus on skill-building and functional improvement rather than symptom elimination. Goals should be realistic, measurable, and connected to the client's diagnosis.",
        },
      ],
    },
    {
      sessionLabel: "Fourth session",
      sectionNarrative: `Your client arrived five minutes late, visibly shaken. She apologized and began speaking before she had fully sat down. She stated, "I had one of those attacks. A panic attack. I think. It was the worst thing I've ever felt."

She described an episode three days prior. She was at a grocery store on Saturday afternoon, standing in the produce section. Without warning, she felt her heart begin to pound rapidly. Within seconds, she felt short of breath, dizzy, and detached "like I was watching myself from outside my body." She reported thinking she was having a heart attack and was going to die in the store. She stated, "My hands went numb. I couldn't figure out how to leave. I just left my cart there and drove to urgent care." The episode peaked within minutes. An EKG and basic labs at urgent care were normal. The physician told her it was "probably anxiety" and suggested she follow up with her therapist.

A second, shorter episode occurred the following day while driving home from her parents' house. She reported feeling her heart race and her chest tighten. She pulled over and called her best friend, who stayed on the phone until the sensations passed after about ten minutes. The client stated, "I'm terrified it will happen again. I canceled plans to visit my parents this weekend. I haven't gone back to that grocery store. I've been avoiding the highway I was on when it happened the second time." She asked you directly, "Is this going to keep happening? What is wrong with me?"

In the prior three sessions, you established a working alliance, introduced the cognitive model, and began thought-record work. The client has been engaged and completing homework between sessions. She reported using diaphragmatic breathing "sometimes, but it didn't help when this happened." Her GAD-7 score this week is 15, essentially unchanged from intake. She denied any recent substance use, changes in caffeine intake, or new medications. She had a follow-up with her PCP two days ago who confirmed her EKG and labs were normal and suggested "this is likely panic."`,
      questions: [
        {
          id: "priya-q6",
          questionNumber: 6,
          domain: "Intake/assessment/diagnosis",
          stem: "Given the client's report of two discrete episodes with multiple physical symptoms, ongoing worry about recurrence, and developing avoidance, what is the most appropriate diagnostic action?",
          options: [
            "Replace the GAD diagnosis with Panic Disorder",
            "Evaluate for an additional diagnosis of Panic Disorder",
            "Add a diagnosis of Agoraphobia",
            "Wait for a third episode before changing the diagnosis",
          ],
          correctAnswer: 1,
          explanation:
            "The episodes meet criteria for panic attacks, followed by persistent worry about recurrence and behavioral avoidance — the defining features of Panic Disorder. GAD and Panic Disorder commonly co-occur and should be evaluated as comorbid diagnoses.",
        },
        {
          id: "priya-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: 'The client asks, "What is wrong with me?" What is the most appropriate first response?',
          options: [
            "Reassure her you will work through it together without explaining further",
            "Provide psychoeducation about the physiology of panic and normalize her experience",
            "Begin interoceptive exposure in session",
            "Return to the thought record from last week",
          ],
          correctAnswer: 1,
          explanation:
            "Psychoeducation about the fight-or-flight response directly addresses the catastrophic interpretation that drives panic. It reduces shame, validates her experience, and prepares her for later interventions.",
        },
        {
          id: "priya-q8",
          questionNumber: 8,
          domain: "Treatment planning",
          stem: "Given the emergence of panic symptoms, what is the most appropriate treatment plan revision?",
          options: [
            "Discontinue CBT and begin exploring family-of-origin dynamics",
            "Integrate panic-specific interventions while continuing to address generalized worry",
            "Increase sessions to three times per week indefinitely",
            "Refer her to a therapist who specializes in panic disorder",
          ],
          correctAnswer: 1,
          explanation:
            "CBT-based protocols for panic disorder can be integrated with ongoing GAD treatment. Referral is indicated only when a client's needs exceed the counselor's competence, which is not the case here.",
        },
        {
          id: "priya-q9",
          questionNumber: 9,
          domain: "Counseling skills and interventions",
          stem: "From a CBT perspective, what intervention most directly targets the client's fear that panic symptoms mean she is having a heart attack?",
          options: [
            "Interoceptive exposure",
            "Thought stopping",
            "Systematic desensitization",
            "Free association",
          ],
          correctAnswer: 0,
          explanation:
            "Interoceptive exposure gradually introduces the bodily sensations the client fears (increased heart rate, dizziness) in a controlled way, disconfirming the catastrophic interpretation that these sensations indicate danger.",
        },
        {
          id: "priya-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "The client expresses renewed interest in exploring medication. What is the most appropriate action?",
          options: [
            "Discourage her from seeking medication given her earlier preference",
            "Recommend a specific medication and dosage",
            "Refer her to a psychiatrist or her primary care physician for evaluation",
            "Tell her medication is not necessary if she continues with CBT",
          ],
          correctAnswer: 2,
          explanation:
            "Licensed counselors do not prescribe medication. Referring for evaluation respects client autonomy and provides access to an evidence-based treatment option. Framing medication as one option among several supports informed consent.",
        },
      ],
    },
    {
      sessionLabel: "Tenth session",
      sectionNarrative: `Your client arrived on time and appeared notably different. She made easier eye contact, her posture was less rigid, and she smiled when she entered. Her GAD-7 score this week was 9, down from 16 at intake. She reported no panic attacks in the past three weeks. Over the previous six weeks, you worked through psychoeducation about the physiology of panic, introduced interoceptive exposure exercises, and continued cognitive restructuring around catastrophic misinterpretation of bodily sensations. She reported using diaphragmatic breathing and a thought record daily. She has returned to the grocery store where the first attack occurred, twice, without incident. She drove the section of highway she had been avoiding last week. She stated, "I'm still a little on edge when I'm driving, but I can catch the thought now before it spirals."

However, she reported a new and different kind of distress. Two weeks ago, after researching graduate programs for over a year, she told her parents she was considering leaving accounting to pursue a master's degree in occupational therapy. Her parents reacted strongly. Her father told her she was "throwing away a stable career to chase a fantasy" and asked her how she expected to pay for it. Her mother has not returned her calls or texts for ten days. The client stated, "I've never gone this long without talking to my mom. I keep picking up the phone and putting it back down."

She reported that she is "almost relieved" the panic has receded but is now "sick to my stomach every time I think about my parents." She stated, "I know this is different. This isn't a disorder thing. This is a life thing. But I don't know how to separate them anymore." She reported having difficulty sleeping the past week, with racing thoughts at night, though she denied the return of panic symptoms. She is still completing homework and using her skills. She asked you directly, "Do you think I should go back to them and tell them I've changed my mind?"`,
      questions: [
        {
          id: "priya-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: "What is the most appropriate response to the client's direct question about what she should do?",
          options: [
            "Tell her what you think based on what you have learned in treatment",
            "Decline to answer and redirect to a thought record",
            "Reflect the difficulty of the decision and invite her to explore each path",
            "Agree that she should tell them she has changed her mind",
          ],
          correctAnswer: 2,
          explanation:
            "Directing a client toward a specific major life decision violates autonomy and exceeds the counselor's role. Reflecting and inviting exploration honors her agency and models tolerating uncertainty.",
        },
        {
          id: "priya-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: "How should your client's cultural context inform your response to her distress about her parents' reaction?",
          options: [
            "Encourage her to assert independence from her family",
            "Explore what family, career, and cultural identity mean to her specifically",
            "Frame the conflict as a generational issue that will resolve with time",
            "Suggest bringing her parents to a family session",
          ],
          correctAnswer: 1,
          explanation:
            "Cultural humility requires exploring the individual client's meaning-making rather than assuming values based on ethnicity. Prescribing independence imposes a Western framework; dismissing the conflict minimizes her experience.",
        },
        {
          id: "priya-q13",
          questionNumber: 13,
          domain: "Treatment planning",
          stem: "The client has made significant progress: GAD-7 reduced from 16 to 9, no panic attacks in three weeks, daily use of skills. How should you engage her in reviewing progress?",
          options: [
            "Recommend termination within the next two weeks",
            "Collaboratively review changes and discuss remaining goals",
            "Avoid discussing progress to prevent premature termination",
            "Increase exposure work to prevent relapse",
          ],
          correctAnswer: 1,
          explanation:
            "A GAD-7 of 9 still reflects clinical-range symptoms. Collaborative progress review supports the client's agency, reinforces skill use, and identifies remaining goals before termination is considered.",
        },
        {
          id: "priya-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: 'The client reflects, "Am I actually ready for this change, or is this just me reacting to being in therapy?" From a motivational interviewing perspective, what is the most appropriate response?',
          options: [
            '"You\'re ready. You\'ve done the work."',
            '"Let\'s examine the cognitive distortion in \'just reacting.\'"',
            "Reflect her ambivalence and invite her to notice her values when she considers each path",
            '"That\'s a decision for you and your family, not something to discuss here."',
          ],
          correctAnswer: 2,
          explanation:
            "Reflecting ambivalence without forcing resolution is core to motivational interviewing. It supports client autonomy and allows her to access her own values rather than the counselor's direction.",
        },
      ],
    },
  ],
};
