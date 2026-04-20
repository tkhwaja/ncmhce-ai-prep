import type { Narrative } from "./types";

export const jamesAud: Narrative = {
  id: "05-james-aud",
  title: "James — Alcohol Use Disorder",
  category: "Substance-Related Disorders",
  difficulty: "Intermediate",

  clientInfo: {
    age: 38,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him",
    sexualOrientation: "Gay",
    raceEthnicity: "White",
    relationshipStatus: "Partnered, unmarried",
    setting: "Intensive outpatient program (IOP)",
    payment: "Private insurance",
    typeOfCounseling: "Individual (within IOP)",
    provisionalDiagnosis: "Alcohol Use Disorder, moderate: F10.20",
  },

  presentingProblem: `You are a licensed mental health counselor at an intensive outpatient program for substance use. Your client was referred following a DUI arrest six weeks ago. He is attending IOP three evenings per week as part of a deferred prosecution agreement, and he is meeting with you individually once per week within the program. He stated, "I'm here because I have to be. But my partner said if I don't take this seriously, he's done. So I guess I'm here for that too."

The client is a senior graphic designer at a marketing firm. He reported that his drinking escalated over the past three years, particularly since his father's death two years ago. He described his typical pattern as starting with a glass of wine with dinner and progressing to "however much it takes to get to sleep" — usually six to eight drinks on weeknights and more on weekends. He reported that he had successfully hidden the extent of his drinking from his partner of six years until the DUI. He stated, "He knew I drank. He didn't know I was drinking bourbon at 2 PM on a Tuesday in my home office."

The client disclosed that he is HIV-positive, diagnosed twelve years ago, and on antiretroviral therapy with a consistently undetectable viral load. He reported concern that his drinking may be affecting his liver and that his HIV physician flagged elevated liver enzymes at his last appointment. He stated, "My doctor wasn't preachy about it. He just said my numbers don't look great and asked me what was going on. I lied. He probably knew."

The client reported that his father, who died of a heart attack, had been a "functional alcoholic" for decades. He stated, "He drank every day until the day he died. My mother pretended not to notice. That was our family theology." The client has one brother who is sober in AA for eleven years. He stated, "I always thought I wasn't like my dad because I had a good job and a good relationship. Turns out those are really nice accessories for a drinking problem."`,

  mentalStatusObservation: `Your client presented in well-fitting casual clothes — a button-down shirt and jeans. He was alert and oriented to person, place, time, and situation. Grooming and hygiene were meticulous. Eye contact was good. Speech was clear, articulate, and occasionally sardonic. Mood was reported as "annoyed and humbled." Affect was appropriate, with dry humor used at times to deflect. Thought processes were linear and goal-directed. Thought content was notable for themes of shame, comparison to his father, and uncertainty about his identity without drinking. No delusions or hallucinations. He denied current suicidal or homicidal ideation. He has no history of suicide attempts. He completed three days of medically supervised detox immediately following his DUI and has been alcohol-free for five weeks. He denied cravings in the past week, though he acknowledged "thinking about it a lot, still." He denied other substances including cannabis, cocaine, and methamphetamine. He has smoked socially in the past but has not in over a year. He reported adherence to his HIV medication regimen.`,

  familyHistory: `The client is the younger of two sons. His father passed two years ago at age 63 of a heart attack, with documented alcohol-related cardiomyopathy. His mother, age 70, lives independently and has no known psychiatric history but "drinks her two glasses of wine every night like it's sacred." His older brother, age 41, has been sober eleven years and lives in another state. The client described his brother as his closest family tie. No known family history of bipolar disorder, schizophrenia, or completed suicide. The client noted that his paternal grandfather "also drank heavily" and died of cirrhosis.`,

  workHistory: `The client graduated from a competitive design program and has worked as a graphic designer for fifteen years. He has been at his current firm for seven years and was promoted to senior designer three years ago. His work performance has remained strong, though he disclosed that he has been increasingly "phoning it in" and working shorter actual hours while appearing to be at his desk. His supervisor is aware of his IOP enrollment following the DUI arrest; the client was granted flexible scheduling for three evenings per week. He has not disclosed the DUI to coworkers beyond his supervisor. He reported feeling fortunate in his employer's response and grateful his job is not at risk.`,

  intakeSessionSummary: `You reviewed the intake information with the client. You administered the AUDIT (score: 22, indicating likely alcohol dependence) and the PHQ-9 (score: 11, indicating moderate depression, likely intertwined with substance use and grief). You conducted a thorough risk assessment; he denied suicidal or homicidal ideation. You discussed the stages of change model; he identified himself as being in the action stage, though he acknowledged his action was externally motivated. You discussed the role of individual counseling within IOP, which focuses on the underlying and co-occurring factors supporting his substance use. You discussed coordination with his HIV physician and group facilitators within IOP. You provided a release of information form for his HIV physician. You scheduled weekly individual sessions within his IOP structure.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "james-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Based on the client's reported drinking pattern and history, which DSM-5-TR severity specifier most accurately describes his Alcohol Use Disorder?",
          options: [
            "Mild — two to three symptoms",
            "Moderate — four to five symptoms",
            "Severe — six or more symptoms",
            "Cannot be determined without more information",
          ],
          correctAnswer: 1,
          explanation: "AUD severity is specified by the number of diagnostic criteria met. The client demonstrates tolerance, unsuccessful control, significant time spent drinking, cravings, hazardous use (DUI), continued use despite consequences, and likely social/occupational consequences — placing him at the moderate to severe boundary. With five clearly present criteria, moderate is the most accurate specifier.",
        },
        {
          id: "james-q2",
          questionNumber: 2,
          domain: "Core counseling attributes",
          stem: 'The client said, "I guess I\'m here for that too" regarding his partner. What is the most therapeutic initial response to his externally-motivated framing?',
          options: [
            '"External motivation counts. Many people start in treatment that way and find their own reasons later."',
            '"Unless you\'re doing this for yourself, it won\'t work."',
            '"That\'s a form of codependence. Let\'s explore that."',
            '"Your partner will leave if you don\'t do this anyway."',
          ],
          correctAnswer: 0,
          explanation: "Meeting the client where he is — including external motivation — supports the therapeutic alliance and allows internal motivation to develop. Insisting on self-motivation as a precondition is not evidence-based and increases resistance. The other responses pathologize, threaten, or bypass his stated experience.",
        },
        {
          id: "james-q3",
          questionNumber: 3,
          domain: "Intake/assessment/diagnosis",
          stem: "The client disclosed his HIV status and elevated liver enzymes. What is the most important reason to coordinate with his HIV physician?",
          options: [
            "To confirm his medication adherence",
            "To address the physical health consequences of his alcohol use and ensure integrated care",
            "To verify his diagnosis of HIV",
            "To include the physician in treatment planning for confidentiality reasons",
          ],
          correctAnswer: 1,
          explanation: "Coordination with his HIV physician addresses the direct interaction between his substance use and his physical health (liver function, potential medication interactions, and long-term HIV care). Integrated care improves outcomes in clients with co-occurring conditions.",
        },
        {
          id: "james-q4",
          questionNumber: 4,
          domain: "Counseling skills and interventions",
          stem: 'The client stated, "I always thought I wasn\'t like my dad because I had a good job and a good relationship." What is the most useful clinical direction?',
          options: [
            "Agree that his life is different from his father's to build hope",
            "Challenge the comparison as a cognitive distortion",
            "Explore what beliefs about his identity have been connected to not drinking like his father",
            "Suggest he attend a support group focused on adult children of alcoholics",
          ],
          correctAnswer: 2,
          explanation: 'Exploring the identity story the client has used to manage his drinking — "I\'m not like Dad" — opens the door to deeper work on self-concept, family scripts, and internalized shame. Agreement, challenge, or immediate referral short-circuits the insight already beginning to emerge.',
        },
        {
          id: "james-q5",
          questionNumber: 5,
          domain: "Treatment planning",
          stem: "The client is alcohol-free following detox and IOP attendance. What is the most appropriate treatment goal for the first phase of individual counseling?",
          options: [
            "Build relapse prevention skills, examine drinking triggers, and explore the function the alcohol served",
            "Confront his defenses about his father's drinking",
            "Require attendance at 90 AA meetings in 90 days",
            "Focus exclusively on his partner's needs and how to repair the relationship",
          ],
          correctAnswer: 0,
          explanation: "Evidence-based early recovery treatment focuses on understanding triggers, developing coping skills, and examining the function of substance use. Confrontation is not evidence-based; mandatory AA attendance exceeds the counselor's scope to require; the partner's needs are secondary to the client's primary treatment.",
        },
      ],
    },
    {
      sessionLabel: "Fifth session",
      sectionNarrative: `Your client arrived on time and reported he has been sober for nine weeks total. He completed his required thirty days of IOP group and is now in a step-down phase with two evenings of group per week plus his individual session with you. His AUDIT would not be applicable now; his PHQ-9 this week is 7.

He reported a significant disclosure from his partner this week. His partner revealed that he had been aware of the extent of the drinking for at least a year before the DUI and had been increasingly hopeless. His partner stated, "I was going to leave you. The DUI was the last thing that could have happened before I did." The client described feeling "knocked down" by this disclosure and stated, "I thought I was hiding it and he was letting me. He was actually planning how to leave." He reported feeling shame, gratitude, and fear in roughly equal measure.

The client also disclosed that he experienced a close call last weekend. He was at a work event for a client launch. He stated, "There were open bottles of champagne on every table. Everyone was holding a glass. I had club soda in a champagne flute. I was fine. And then at the end of the night, someone I have worked with for years asked why I wasn't drinking. I didn't know what to say. I said I was driving. He said, 'Since when?' I laughed it off. I got home and I cried for an hour in the kitchen."

He reported he has been attending an LGBTQ+ sobriety support meeting that his IOP facilitator recommended. He stated, "It's the first space where I've felt like I don't have to explain myself on either side of my life. I thought it would be cheesy. It's not cheesy."

His HIV physician followed up with his repeat liver panel, which is trending back toward normal. The client stated, "That's the first thing I've done in years that I feel unambiguously proud of."`,
      questions: [
        {
          id: "james-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client describes crying in the kitchen after the work event. From a relapse prevention perspective, what was the most important aspect of this situation?",
          options: [
            "He did not drink, which is the only relevant outcome",
            "He successfully navigated a high-risk situation and identified the emotional aftermath that could increase future vulnerability",
            "He should avoid work events until he has a year of sobriety",
            "He needs to come out about his sobriety at work",
          ],
          correctAnswer: 1,
          explanation: "Relapse prevention recognizes that successfully avoiding use in a high-risk situation is only part of the picture; the emotional residue — shame, exhaustion, isolation — can increase risk later. Processing this is essential. Avoidance of all triggers is not sustainable; disclosure decisions are personal.",
        },
        {
          id: "james-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: "The client's partner revealed he was planning to leave before the DUI. The client describes shame, gratitude, and fear. What is the most therapeutic response?",
          options: [
            '"Your partner stayed. That\'s what matters."',
            '"That\'s a lot to hold. All three of those feelings can be true at the same time."',
            '"Shame isn\'t useful. Let\'s focus on the gratitude."',
            '"Your partner should have told you sooner."',
          ],
          correctAnswer: 1,
          explanation: "Naming the simultaneity of conflicting emotions validates the client's experience without pushing toward premature resolution. Attempting to redirect or resolve the feelings, or criticizing the partner, closes the emotional space rather than opening it.",
        },
        {
          id: "james-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: "The client asks how he should respond next time a colleague asks why he isn't drinking. What is the most useful clinical direction?",
          options: [
            "Tell him he must disclose his sobriety to prevent using",
            "Tell him to lie and say he has a medication that prevents drinking",
            "Help him develop a range of responses he can use depending on safety, privacy, and context",
            "Suggest he switch jobs to avoid the drinking culture",
          ],
          correctAnswer: 2,
          explanation: 'Sobriety disclosure at work is personal and context-dependent. A range of options — "I\'m taking a break," "I\'m driving," "I don\'t drink," or full disclosure — gives the client agency. Prescribing either disclosure or deception removes his autonomy and ignores workplace safety considerations.',
        },
        {
          id: "james-q9",
          questionNumber: 9,
          domain: "Intake/assessment/diagnosis",
          stem: "The client's liver enzymes are trending back toward normal. What is the most appropriate use of this information clinically?",
          options: [
            "Reassure him his body has fully recovered",
            "Incorporate it into his broader view of progress and reinforce the integration of physical, emotional, and behavioral change",
            "Reduce his session frequency since his health is improving",
            "Share the result with his IOP group to inspire others",
          ],
          correctAnswer: 1,
          explanation: "Physical health improvement is one of several meaningful markers of progress. Incorporating it into the client's broader understanding of recovery reinforces multidimensional healing. Premature reassurance, session reduction based on labs alone, or sharing protected information with others is inappropriate.",
        },
        {
          id: "james-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "The client's supervisor at work asks you directly for a letter confirming his engagement in treatment. How should you respond?",
          options: [
            "Provide the letter since the employer has a legitimate interest",
            "Require a written authorization from the client before releasing any information",
            "Provide general information without confirming specific attendance",
            "Refuse because you cannot discuss a client with any third party",
          ],
          correctAnswer: 1,
          explanation: "Any release of information, even confirming treatment engagement, requires written authorization from the client. SAMHSA's 42 CFR Part 2 regulations for substance use treatment records are particularly stringent. The employer's interest does not override this requirement.",
        },
      ],
    },
    {
      sessionLabel: "Twelfth session",
      sectionNarrative: `Your client arrived on time and reported that he recently passed the six-month mark of sobriety. He and his partner celebrated with a weekend trip. His PHQ-9 this week is 4. He has completed his court-mandated IOP and is attending a weekly LGBTQ+ sobriety meeting and continuing individual sessions with you.

He reported a meaningful milestone. He attended his father's memorial service on the two-and-a-half-year anniversary of his death. His brother flew in for the service. The client stated, "It was the first time I've been able to actually think about my dad without just thinking about his drinking. I remembered that he taught me to fish. I hadn't let myself remember that in years." He reported crying with his brother at the gravesite and feeling that his grief was finally moving.

He also reported a professional development. He has been asked to lead a new creative team at work, an opportunity that will involve additional responsibility and visibility. He stated, "Six months ago I would have said no. Three months ago I would have said yes out of guilt. I think I'm going to say yes because I actually want it. That feels different."

He disclosed a new concern. His brother, who is eleven years sober, confided at the funeral that he has been struggling recently and "white-knuckling it" for the past several months. The client stated, "He's the reason I believed recovery was possible. And now he's not doing well. I don't know what to do." He asked you whether he should "intervene" with his brother.

He asked you directly about what continuing treatment looks like. He stated, "I don't feel finished. But I don't feel in crisis either. What does this phase look like?"`,
      questions: [
        {
          id: "james-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: 'The client asks whether he should "intervene" with his brother. What is the most appropriate clinical direction?',
          options: [
            "Help him plan a formal intervention with his family",
            "Help him explore what he can offer his brother as a peer in recovery, including honoring his brother's autonomy",
            "Tell him his brother's recovery is not his responsibility",
            "Refer his brother directly to your IOP program",
          ],
          correctAnswer: 1,
          explanation: "Helping the client consider what genuine support looks like between siblings in recovery — offering presence, sharing his own experience, respecting his brother's agency — is more aligned with both recovery principles and counseling scope than planning a formal intervention, dismissing his concern, or making unauthorized referrals.",
        },
        {
          id: "james-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: 'The client said, "I remembered that he taught me to fish. I hadn\'t let myself remember that in years." What does this statement reflect clinically?',
          options: [
            "A dissociative memory recovery",
            "The emergence of complicated grief that warrants referral",
            "Integration of a more complex, less binary view of his father alongside grief processing",
            "A warning sign of emotional dysregulation",
          ],
          correctAnswer: 2,
          explanation: "The capacity to hold multiple, sometimes contradictory truths about a parent — that he was an alcoholic and that he taught the client to fish — is a marker of successful grief integration. It is not pathological recovery of memory, a warning sign, or complicated grief requiring referral.",
        },
        {
          id: "james-q13",
          questionNumber: 13,
          domain: "Treatment planning",
          stem: "The client asks what continuing treatment looks like when he is stable but not finished. What is the most appropriate response?",
          options: [
            "Recommend termination since he has achieved stability",
            "Collaboratively discuss what ongoing work might focus on — grief, identity, growth — and consider a reduced frequency",
            "Maintain weekly sessions indefinitely since substance use disorders are chronic",
            "Refer him to a different therapist to avoid fostering dependency",
          ],
          correctAnswer: 1,
          explanation: "Recovery-oriented care includes a phase of ongoing growth beyond acute stabilization. Collaboratively defining the focus of this phase — grief, identity, relationships, meaning — and adjusting frequency accordingly is appropriate. Termination, indefinite weekly sessions, and referral without clinical cause all miss this phase.",
        },
        {
          id: "james-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: 'The client reflects on his promotion: "I think I\'m going to say yes because I actually want it. That feels different." What is the most therapeutic response?',
          options: [
            '"You\'ve earned this. You should take it."',
            '"What is different about that? What does it feel like to want something for its own sake?"',
            '"Be careful — sudden changes early in recovery can be risky."',
            '"Let\'s add this to your progress log."',
          ],
          correctAnswer: 1,
          explanation: "An open-ended reflective question invites the client to deepen his awareness of what recovery has changed internally. Endorsement, caution, or logging the moment as data short-circuits the opportunity to explore authentic desire — a core therapeutic terrain.",
        },
      ],
    },
  ],
};
