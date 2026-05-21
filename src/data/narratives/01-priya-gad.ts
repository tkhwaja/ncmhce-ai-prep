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
    },
  ],
};
