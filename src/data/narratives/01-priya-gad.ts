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
          stem: `Across the intake she described worry that spans work, finances, her parents' health, her relationship, and her safety walking home. Sleep onset is delayed most nights and she endorses muscle tension and irritability. Which detail is the single strongest evidence that this is GAD rather than an adjustment reaction to her new job?`,
          options: [
            `Her anxiety has worsened in the months since beginning the accounting job.`,
            `Her worry has been excessive and difficult to control across multiple domains for substantially longer than six months.`,
            `She reports muscle tension and fatigue alongside the worry.`,
            `She describes her family system as warm but achievement-focused.`,
          ],
          correctAnswer: 1,
          explanation: `GAD requires excessive, hard-to-control worry across multiple domains more days than not for at least 6 months. Recent worsening, somatic symptoms, and family climate are consistent with GAD but are not specific differentiators from an adjustment disorder, which by definition is tied to an identifiable recent stressor and resolves within 6 months of its termination.`,
        },
        {
          id: "priya-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: `Priya denies discrete episodes of intense fear with physical symptoms peaking within minutes. How should this finding shape your provisional formulation?`,
          options: [
            `Note that panic is not currently present, retain GAD as the working diagnosis, and plan to reassess if discrete attacks emerge.`,
            `Conclude that Panic Disorder can be definitively ruled out for the duration of treatment.`,
            `Specifier "with panic attacks" should be added prophylactically given her somatic load.`,
            `Defer all diagnosis until a 30-day symptom diary distinguishes worry from panic.`,
          ],
          correctAnswer: 0,
          explanation: `Diagnoses are provisional and revisable. The absence of discrete panic attacks at intake supports GAD as the working formulation but does not warrant permanently ruling out panic, adding a specifier without evidence, or delaying treatment to gather diary data she does not yet need.`,
        },
        {
          id: "priya-q3",
          questionNumber: 3,
          domain: "Professional practice and ethics",
          stem: `Priya says her parents would be hurt if they learned she was in therapy and asks how confidentiality works. What is the most appropriate response?`,
          options: [
            `Affirm that her parents have no legal right to her records and move on.`,
            `Review confidentiality and its limits in plain language, then explore the cultural and relational meaning of secrecy in her family.`,
            `Encourage her to disclose to her parents now so therapy does not become another hidden burden.`,
            `Add a note to the chart limiting any future release to her parents and discuss it later if she raises it again.`,
          ],
          correctAnswer: 1,
          explanation: `Informed consent is an ongoing conversation, not a one-time form. Integrating confidentiality information with culturally responsive exploration of disclosure addresses both the ACA A.2 requirement and the clinical issue. Reassurance alone is incomplete; pressuring disclosure or unilateral chart changes bypass the client's autonomy.`,
        },
        {
          id: "priya-q4",
          questionNumber: 4,
          domain: "Counseling skills and interventions",
          stem: `Which intervention is most appropriate for the opening phase of CBT for GAD with this client?`,
          options: [
            `Schedule daily structured worry exposure to her parents' phone calls.`,
            `Begin worry monitoring to help her distinguish triggers, predictions, productive problem-solving, and unproductive worry loops.`,
            `Use Socratic disputation of each catastrophic thought during session to weaken belief credibility.`,
            `Train applied relaxation as the primary intervention to lower baseline arousal before cognitive work.`,
          ],
          correctAnswer: 1,
          explanation: `Early-phase CBT for GAD emphasizes psychoeducation and self-monitoring so the client can identify her own patterns before restructuring or behavioral experiments. Aggressive disputation, structured exposure, and relaxation-only protocols are all defensible CBT components but are not the recommended first move.`,
        },
        {
          id: "priya-q5",
          questionNumber: 5,
          domain: "Core counseling attributes",
          stem: `Priya says, "Growing up I had to be the one who got everything right." What response best fits this moment?`,
          options: [
            `That sounds like perfectionism; we'll need to challenge those rules over time.`,
            `Many second-generation children carry that pressure; you are not alone in this.`,
            `What was it like to carry both love and responsibility in the same role?`,
            `Your parents likely intended that pressure as motivation rather than harm.`,
          ],
          correctAnswer: 2,
          explanation: `An open exploratory reflection invites her to articulate her own meaning of the role before the counselor labels, normalizes, or reframes it. Labeling as perfectionism or generalizing to a cohort may be accurate but moves prematurely past her affect; defending the parents takes a side.`,
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
          stem: `Two unexpected attacks with peak symptoms within minutes have now occurred, along with avoidance of the grocery store, the highway, and her parents' house. What is the most defensible diagnostic stance at this session?`,
          options: [
            `Replace GAD with Panic Disorder as the primary diagnosis on the basis of two recurrent attacks.`,
            `Retain GAD, formally screen for recurrent unexpected attacks and persistent concern or behavioral change over the past month, and consider an additional Panic Disorder diagnosis if criteria are met.`,
            `Add a Panic Disorder with Agoraphobia diagnosis given the three avoided settings.`,
            `Defer any diagnostic change until cardiology has issued written clearance.`,
          ],
          correctAnswer: 1,
          explanation: `Panic Disorder requires recurrent unexpected attacks plus ≥1 month of persistent concern about additional attacks or maladaptive behavioral change. Two attacks across a few days does not yet meet the one-month criterion, so the appropriate move is structured screening rather than immediate diagnostic change. Agoraphobia is a separate disorder with its own criteria.`,
        },
        {
          id: "priya-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: `She asks, "What is wrong with me?" after the urgent care workup was negative. What is the best response?`,
          options: [
            `Nothing is wrong with you; this is your anxiety, which we already know how to treat.`,
            `What you felt was physically real and frightening; let's map what happened in your body and your mind together.`,
            `The urgent care workup was negative, which means we can move forward to exposure with confidence.`,
            `That sounds like a classic panic attack and CBT will reliably prevent further episodes.`,
          ],
          correctAnswer: 1,
          explanation: `The strongest response validates the somatic reality of the experience and opens collaborative formulation. Dismissive reassurance, premature commitment to exposure, and overpromising the outcome of CBT all bypass the client's question and risk weakening alliance or distorting informed consent.`,
        },
        {
          id: "priya-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: `Priya says diaphragmatic breathing "didn't help" during the grocery-store episode. What is the most clinically useful response?`,
          options: [
            `Teach paced 4-7-8 breathing because it acts more quickly than diaphragmatic breathing.`,
            `Explore whether she used breathing to make the sensations stop, and introduce the goal of tolerating sensations without escape.`,
            `Reframe the failure as evidence she needs an adjunctive benzodiazepine consultation.`,
            `Discontinue breathing skills, since they often become safety behaviors and undermine exposure.`,
          ],
          correctAnswer: 1,
          explanation: `When a coping skill is used to forcibly suppress sensations, it can function as a safety behavior that maintains panic. The clinical task is to examine the function of her use, not to swap techniques, push medication, or abolish the skill outright; breathing can be retained as a regulation tool while exposure changes the meaning of sensations.`,
        },
        {
          id: "priya-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `She is avoiding the grocery store, the highway, and her parents' house. What is the most appropriate next treatment move?`,
          options: [
            `Suspend exposure work for two weeks to allow autonomic baseline to settle.`,
            `Develop a graded plan that distinguishes panic-related interoceptive/situational avoidance from family-related relational avoidance and targets each on its own hierarchy.`,
            `Return to all three avoided settings this week to disconfirm danger as efficiently as possible.`,
            `Use cognitive restructuring alone until catastrophic interpretations weaken before introducing any in-vivo work.`,
          ],
          correctAnswer: 1,
          explanation: `The three avoided settings serve different functions: the grocery store and highway are panic-related, while the parents' visit involves relational conflict. A differentiated, graded hierarchy is more precise than blanket exposure, blanket avoidance, or cognitive-only treatment, all of which are defensible-sounding but mismatched to the formulation.`,
        },
        {
          id: "priya-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `Given her urgent care visit and PCP follow-up, how should you handle medical concerns going forward?`,
          options: [
            `Instruct her that future chest symptoms are panic and do not warrant medical evaluation, since the workup is negative.`,
            `Acknowledge the completed evaluation, continue panic-focused care, and reinforce appropriate medical follow-up for new, changed, or severe symptoms.`,
            `Require cardiology clearance before continuing in-vivo exposure work.`,
            `Encourage her to bring you each future ECG or lab so you can interpret results in session.`,
          ],
          correctAnswer: 1,
          explanation: `The counselor must avoid both reinforcing reassurance-seeking medical use and dangerously dismissing new symptoms, while staying within scope. Interpreting medical results or gatekeeping cardiology clearance are outside the counselor's scope of practice (ACA C.2.a).`,
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
          stem: `Panic has remitted but family-related distress has intensified. What is the most appropriate focus for this phase?`,
          options: [
            `Resume the panic protocol because new distress predicts panic recurrence within weeks.`,
            `Shift to values clarification and family-system work around the graduate school decision while maintaining relapse-prevention practices for panic.`,
            `Recommend she postpone the graduate school decision until anxiety has remitted for at least six months.`,
            `Hold a joint session with her parents to help them understand the developmental need for differentiation.`,
          ],
          correctAnswer: 1,
          explanation: `Treatment focus should follow the case formulation: panic has resolved, and the active clinical issue is integrating skills into a values-based life decision. Returning to the original protocol, deferring the decision, or pulling in the parents without invitation either misallocates the work or oversteps the client's autonomy.`,
        },
        {
          id: "priya-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `She asks, "Do you think I should go back to them and tell them I've changed my mind?" What is the strongest response?`,
          options: [
            `If the program reflects what you actually want, changing your mind out of guilt would be a step backward.`,
            `It sounds like part of you wants relief from this conflict and part of you wants to stay with your direction; can we slow down and look at both?`,
            `Most clients in this position regret the avoidant decision later; I'd encourage you to stay with the program.`,
            `Let's run a thought record on the changing-your-mind option to see whether the prediction holds up to evidence.`,
          ],
          correctAnswer: 1,
          explanation: `Direct advice — even framed neutrally — pulls the decision away from the client. Reflection of the competing pulls preserves autonomy and opens both sides for examination. A thought record is a defensible technique but answers the wrong question at this moment; the issue is values conflict, not a distorted prediction.`,
        },
        {
          id: "priya-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: `She says, "This isn't a disorder thing. This is a life thing. But I don't know how to separate them anymore." What response best fits the clinical moment?`,
          options: [
            `You're right that this is no longer clinical anxiety; we can transition out of treatment.`,
            `Anxiety attaches itself to real-life decisions; the work is helping you respond from choice rather than fear.`,
            `Worrying about the future means GAD is still active and we should re-intensify cognitive work.`,
            `Let's set that aside and return to your breathing practice, which is what got you here.`,
          ],
          correctAnswer: 1,
          explanation: `This response validates that the stressor is real while showing how anxiety can shape responses to real life. The other options either falsely tidy the distinction, re-pathologize a normal conflict, or retreat into technique at the expense of meaning.`,
        },
        {
          id: "priya-q14",
          questionNumber: 14,
          domain: "Treatment planning",
          stem: `Which between-session task best fits this stage?`,
          options: [
            `Refrain from contacting her mother until her GAD-7 drops below 5 to prevent escalation.`,
            `Build a values-based decision map laying out what fear, guilt, family loyalty, and personal goals are each asking her to do.`,
            `Continue daily interoceptive exposure, given that panic is the historical core problem.`,
            `Draft a written request for parental reassurance that her parents still love her before deciding about graduate school.`,
          ],
          correctAnswer: 1,
          explanation: `A values-based decision map fits the current phase because the core task is making a meaningful life decision while tolerating anxiety, guilt, and family pressure. The other options either reinforce avoidance, run the wrong protocol, or set up reassurance-seeking as the path to a decision.`,
        },
      ],
    },
  ],
};
