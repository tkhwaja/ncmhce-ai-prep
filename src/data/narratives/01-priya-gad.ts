import type { Narrative } from "./types";

// NARRATIVE 01 — PRIYA D. (GAD with emerging Panic Disorder)
// Adapted to codebase schema: capitalized difficulty, added category, dropped estimatedTimeMinutes
// (default minutesPerSection of 20 applies; ~45 min total across 3 sections is approximated).
export const priyaGad: Narrative = {
  id: "01-priya-gad",
  title: "Priya — Generalized Anxiety Disorder",
  category: "Anxiety Disorders",
  difficulty: "Beginner",

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
          domain: "Intake/assessment/diagnosis",
          stem: `Which detail most strongly supports Generalized Anxiety Disorder rather than a time-limited adjustment reaction to work stress?`,
          options: [
            `Her anxiety worsened after beginning her accounting job.`,
            `Her worry spans several domains and has been present more days than not for at least two years.`,
            `She reports muscle tension and fatigue despite adequate sleep.`,
            `She describes her family as close but high-pressure.`,
          ],
          correctAnswer: 1,
          explanation: `The duration and breadth of the worry are the strongest differentiators. Adjustment-related anxiety would be more clearly tied to a recent stressor and would not typically involve a long-standing pattern across work, family, finances, relationships, health, and safety.`,
        },
        {
          id: "priya-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: `The client denied discrete episodes of intense fear with physical symptoms at intake. How should that information affect the initial formulation?`,
          options: [
            `It rules out all panic symptoms for the remainder of treatment.`,
            `It supports GAD as the primary initial formulation while leaving room to reassess if new panic-like episodes emerge.`,
            `It means the clinician should avoid asking about panic again unless the client raises it.`,
            `It suggests the client may be minimizing symptoms and should be treated as having Panic Disorder.`,
          ],
          correctAnswer: 1,
          explanation: `Diagnosis is provisional and based on current information. Her intake presentation supports GAD, but later panic-like episodes would require reassessment rather than rigidly maintaining the original formulation.`,
        },
        {
          id: "priya-q3",
          questionNumber: 3,
          domain: "Professional practice and ethics",
          stem: `The client says her parents would be upset if they knew she was in therapy. What is the most appropriate clinical response?`,
          options: [
            `Reassure her that therapy is private and her parents have no right to know, then move on.`,
            `Explore the meaning and risk of family discovery while clearly reviewing confidentiality and its limits.`,
            `Encourage her to tell her parents so treatment does not become another secret.`,
            `Avoid discussing her parents until the anxiety symptoms are controlled.`,
          ],
          correctAnswer: 1,
          explanation: `The best response combines informed consent with culturally responsive exploration. Reassurance alone is incomplete; pressuring disclosure or avoiding the topic misses a core relational and cultural factor in her anxiety.`,
        },
        {
          id: "priya-q4",
          questionNumber: 4,
          domain: "Counseling skills and interventions",
          stem: `In the first phase of CBT for this client, which intervention is most appropriate?`,
          options: [
            `Begin exposure to family conflict immediately because her parents are the source of anxiety.`,
            `Use worry monitoring to distinguish triggers, predictions, controllable problems, and repetitive worry loops.`,
            `Challenge every worry as irrational to reduce reassurance seeking.`,
            `Focus only on relaxation because cognitive work may increase rumination.`,
          ],
          correctAnswer: 1,
          explanation: `Early CBT for GAD often begins with psychoeducation and monitoring so the client can identify patterns before restructuring or behavioral experiments. Immediate exposure or broad cognitive challenging is premature.`,
        },
        {
          id: "priya-q5",
          questionNumber: 5,
          domain: "Core counseling attributes",
          stem: `The client describes feeling like she had to be “the one who got everything right.” What is the strongest therapeutic response?`,
          options: [
            `That sounds like perfectionism, and perfectionism is maintainable only if we challenge it directly.`,
            `It makes sense that high expectations would produce anxiety; many immigrant families emphasize achievement.`,
            `What has it been like to carry love, loyalty, and pressure in the same role?`,
            `Your parents probably intended to motivate you, not make you anxious.`,
          ],
          correctAnswer: 2,
          explanation: `This response captures the layered meaning of responsibility in her family role without pathologizing her culture, defending the parents, or jumping into technique before understanding.`,
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
          stem: `After two panic-like episodes and emerging avoidance, what is the most accurate diagnostic stance?`,
          options: [
            `Change the diagnosis immediately from GAD to Panic Disorder.`,
            `Maintain GAD but assess whether she now meets criteria for panic attacks and possible Panic Disorder or agoraphobic avoidance.`,
            `Treat the episodes as medical until a cardiologist confirms panic.`,
            `Conceptualize the episodes as proof the initial GAD diagnosis was incorrect.`,
          ],
          correctAnswer: 1,
          explanation: `The clinician should update the assessment without overcorrecting. The new episodes may represent panic attacks and could develop into Panic Disorder, but diagnosis requires careful assessment of recurrent unexpected attacks, persistent concern, and maladaptive behavior change.`,
        },
        {
          id: "priya-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: `She asks, “What is wrong with me?” after urgent care ruled out acute medical causes. What is the best response?`,
          options: [
            `Nothing is wrong with you; this is only anxiety.`,
            `The symptoms were frightening and physically real. Let’s map what happened and how your body and thoughts may have escalated together.`,
            `Your urgent care workup was normal, so we should focus on exposure now.`,
            `You probably had a panic attack, and CBT will stop it from happening again.`,
          ],
          correctAnswer: 1,
          explanation: `The best response validates the reality of the physical fear, avoids dismissing symptoms, and begins collaborative formulation. It neither overpromises nor rushes straight into exposure.`,
        },
        {
          id: "priya-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: `The client says diaphragmatic breathing “didn’t help” during the grocery-store episode. What is the most clinically useful response?`,
          options: [
            `Teach a different breathing technique that works faster.`,
            `Explain that coping skills should eliminate panic symptoms if practiced correctly.`,
            `Explore whether she used breathing to force symptoms away and introduce the goal of tolerating sensations without catastrophic interpretation.`,
            `Discontinue breathing skills because they can become avoidance.`,
          ],
          correctAnswer: 2,
          explanation: `In panic treatment, skills are not only for symptom elimination. If breathing becomes a way to urgently prevent sensations, it can become another safety behavior. The therapeutic target is changing the meaning of sensations and building tolerance.`,
        },
        {
          id: "priya-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `She is avoiding the grocery store, the highway, and visiting her parents. What is the best next treatment step?`,
          options: [
            `Encourage avoidance temporarily until her nervous system calms down.`,
            `Create a graded plan that distinguishes panic-related avoidance from family-conflict avoidance and targets each differently.`,
            `Have her return to all avoided situations this week to disconfirm danger quickly.`,
            `Focus only on cognitive restructuring because exposure could overwhelm her.`,
          ],
          correctAnswer: 1,
          explanation: `The avoided situations have different functions. Grocery and highway avoidance are panic-related, while the parents’ visit may involve relational anxiety. A graded, differentiated plan is more precise than global exposure or global avoidance.`,
        },
        {
          id: "priya-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `Given her urgent care visit and PCP follow-up, how should the counselor handle medical concerns going forward?`,
          options: [
            `Tell her future chest symptoms should be ignored because the workup was normal.`,
            `Encourage her to use therapy instead of medical care whenever symptoms occur.`,
            `Acknowledge the completed medical evaluation, continue panic treatment, and encourage appropriate medical follow-up for new, changed, or severe symptoms.`,
            `Require cardiology clearance before continuing CBT.`,
          ],
          correctAnswer: 2,
          explanation: `The counselor should avoid both unnecessary reassurance-seeking medical use and unsafe dismissal of medical symptoms. Appropriate coordination respects scope and clinical safety.`,
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
          domain: "Treatment planning",
          stem: `At session ten, panic has improved but distress about her parents’ reaction has increased. What is the best treatment focus now?`,
          options: [
            `Return to the original panic protocol because new distress means relapse is likely.`,
            `Shift toward values clarification, family-boundary work, and cognitive work around responsibility while maintaining relapse-prevention skills for panic.`,
            `Advise her to postpone graduate school decisions until anxiety fully remits.`,
            `Focus on convincing her parents to understand therapy and career change.`,
          ],
          correctAnswer: 1,
          explanation: `Her panic symptoms have improved, and the current clinical task is integrating skills into a values-based life decision and family relationship stress. Relapse prevention remains relevant, but the focus should evolve with the case.`,
        },
        {
          id: "priya-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `She asks, “Do you think I should go back to them and tell them I’ve changed my mind?” What is the strongest response?`,
          options: [
            `If the graduate program matters to you, you should not change your mind because of guilt.`,
            `It sounds like part of you wants relief from conflict and part of you wants to honor your own direction. Can we slow down and look at both?`,
            `Your parents need time; wait until they respond before deciding.`,
            `A thought record will tell us whether changing your mind is rational.`,
          ],
          correctAnswer: 1,
          explanation: `The best response avoids giving advice and helps her examine the conflict between immediate anxiety relief and longer-term values. The decision belongs to the client.`,
        },
        {
          id: "priya-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: `She says, “This isn’t a disorder thing. This is a life thing. But I don’t know how to separate them anymore.” What response best fits the clinical moment?`,
          options: [
            `You are right; this is not clinical anxiety anymore.`,
            `Anxiety can attach itself to real life decisions; the work is not to erase the issue but to help you respond with choice rather than fear.`,
            `This is still GAD because you are worrying about the future.`,
            `Let’s avoid labels and focus on breathing exercises.`,
          ],
          correctAnswer: 1,
          explanation: `This response validates that the stressor is real while showing how anxiety can shape her response. It avoids false separation between disorder and life as well as overpathologizing normal conflict.`,
        },
        {
          id: "priya-q14",
          questionNumber: 14,
          domain: "Treatment planning",
          stem: `Which homework assignment best fits this stage of treatment?`,
          options: [
            `Avoid calling her parents until her anxiety is below a 3 out of 10.`,
            `Write a values-based decision map identifying what fear, guilt, family loyalty, and personal goals are each asking her to do.`,
            `Complete daily interoceptive exposure only, since panic was the original acute problem.`,
            `Ask her parents for reassurance that they still love her before making any career decision.`,
          ],
          correctAnswer: 1,
          explanation: `A values-based decision map fits the current phase because the central task is not panic reduction alone; it is making a meaningful life decision while tolerating anxiety, guilt, and family pressure.`,
        },
      ],
    },
  ],
};
