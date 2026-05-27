import type { Narrative } from "./types";

export const jamesAud: Narrative = {
  id: "05-james-aud",
  title: "James — Alcohol Use Disorder",
  category: "Substance-Related Disorders",
  difficulty: "Beginner",

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
          stem: `James is five weeks alcohol-free post-detox, on ART with undetectable viral load, and has flagged liver enzymes. His HIV physician already knows about IOP. What is the most clinically meaningful next coordination step the counselor should take in the first session?`,
          options: [
            `Defer all medical coordination until James completes the 30-day IOP phase so treatment teams do not duplicate effort.`,
            `Obtain a written release specific to 42 CFR Part 2 standards and request shared monitoring of liver function and ART adherence as recovery progresses.`,
            `Send a courtesy note to the HIV physician confirming abstinence so liver values can be re-checked sooner.`,
            `Recommend James self-report his sobriety progress to the HIV physician at his next visit and document that he agreed.`,
          ],
          correctAnswer: 1,
          explanation: `Substance-use records require heightened 42 CFR Part 2 authorization beyond standard HIPAA. The counselor's role is to set up consented, ongoing coordination — not a one-time courtesy note, not deferring care, and not outsourcing the coordination to the client. Deferring or relying on client self-report misses the integrated-care opportunity early sobriety creates.`,
        },
        {
          id: "james-q2",
          questionNumber: 2,
          domain: "Core counseling attributes",
          stem: `He says he is in treatment because court requires it and his partner may leave. What MI-consistent response is best?`,
          options: [
            `External motivation is not enough for recovery`,
            `What parts of being here are for other people, and what parts might be for you?`,
            `You should focus on your partner if that is what keeps you sober`,
            `Court pressure often prevents honest therapy`,
          ],
          correctAnswer: 1,
          explanation: `MI meets the client’s mixed motivation without judgment and invites development of internal reasons for change. Challenging external motivation too early often increases resistance.`,
        },
        {
          id: "james-q3",
          questionNumber: 3,
          domain: "Treatment planning",
          stem: `He is five weeks sober after detox and IOP entry. What should individual counseling prioritize first?`,
          options: [
            `Exploring drinking triggers, relapse-prevention skills, grief, and the function alcohol served`,
            `Processing childhood trauma in detail before relapse prevention`,
            `Focusing only on legal compliance until court is resolved`,
            `Requiring AA attendance as a condition of individual therapy`,
          ],
          correctAnswer: 0,
          explanation: `Early recovery work should address triggers, coping, relapse prevention, and functions of alcohol use, including grief and sleep. Mandating a specific mutual-help path or focusing only on court compliance is too narrow.`,
        },
        {
          id: "james-q4",
          questionNumber: 4,
          domain: "Professional practice and ethics",
          stem: `Because treatment is connected to a DUI agreement, what confidentiality issue should be clarified early?`,
          options: [
            `Court-mandated treatment removes confidentiality`,
            `What, if anything, may be reported to legal parties under written authorization and applicable substance-use confidentiality rules`,
            `His partner has a right to know attendance because he is affected`,
            `Group facilitators cannot share any information with individual counselors`,
          ],
          correctAnswer: 1,
          explanation: `Legally involved substance-use treatment requires clear informed consent about what information may be released, to whom, and under what authorization. Confidentiality is not erased by court involvement.`,
        },
        {
          id: "james-q5",
          questionNumber: 5,
          domain: "Counseling skills and interventions",
          stem: `He says, “I wasn’t like my dad because I had a good job and relationship.” What is the best clinical direction?`,
          options: [
            `Challenge the statement because he clearly became like his father`,
            `Explore how work and relationship stability became proof that his drinking was under control`,
            `Reassure him that he is different because he sought treatment`,
            `Shift to relapse-prevention worksheets only`,
          ],
          correctAnswer: 1,
          explanation: `The statement reveals an identity-based belief that protected denial. Exploring that belief deepens treatment without shaming or prematurely reassuring him.`,
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
          stem: `After a work event with open champagne, he stayed sober but cried at home. What is the best relapse-prevention focus?`,
          options: [
            `The event was successful, so no further processing is needed`,
            `The emotional aftermath of a high-risk situation and how it may affect future vulnerability`,
            `He should avoid all work events for one year`,
            `He must disclose sobriety to coworkers to prevent relapse`,
          ],
          correctAnswer: 1,
          explanation: `Relapse prevention includes processing both the behavioral success and the emotional residue afterward. Shame, isolation, or exhaustion after high-risk events can increase later vulnerability.`,
        },
        {
          id: "james-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: `His partner says he was planning to leave before the DUI. The client feels shame, gratitude, and fear. What is the best response?`,
          options: [
            `Your partner stayed, and that is what matters now`,
            `All three feelings make sense; none of them cancels the others out`,
            `Try not to focus on shame because shame can trigger relapse`,
            `Your partner should have told you earlier`,
          ],
          correctAnswer: 1,
          explanation: `The response validates complex, simultaneous emotions without redirecting or taking sides. It supports emotional tolerance, a key recovery task.`,
        },
        {
          id: "james-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: `He asks how to answer coworkers who ask why he is not drinking. What is the best intervention?`,
          options: [
            `Help him develop several disclosure options based on privacy, safety, and context`,
            `Tell him to disclose that he is in recovery to reduce secrecy`,
            `Tell him to say he is taking medication even if he is not`,
            `Recommend leaving the job if drinking culture continues`,
          ],
          correctAnswer: 0,
          explanation: `Recovery disclosure is contextual. Practicing a range of truthful or boundaried responses gives the client agency without forcing disclosure or deception.`,
        },
        {
          id: "james-q9",
          questionNumber: 9,
          domain: "Intake/assessment/diagnosis",
          stem: `His liver enzymes are trending toward normal. What is the best clinical use of this information?`,
          options: [
            `Reassure him that his body has recovered`,
            `Use it as one marker of progress while continuing medical coordination and relapse-prevention work`,
            `Reduce treatment intensity because the medical risk has passed`,
            `Share the improvement with his IOP group as encouragement`,
          ],
          correctAnswer: 1,
          explanation: `Improved labs are meaningful but not proof of full recovery or reason to reduce care automatically. The information can strengthen motivation while maintaining integrated treatment.`,
        },
        {
          id: "james-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: `His supervisor asks for a letter confirming treatment engagement. What is the best response?`,
          options: [
            `Provide attendance confirmation because the supervisor already knows about IOP`,
            `Require specific written authorization and release only the minimum necessary information allowed by substance-use confidentiality rules`,
            `Give a verbal confirmation but no written details`,
            `Refuse any employer documentation under all circumstances`,
          ],
          correctAnswer: 1,
          explanation: `Even confirming substance-use treatment requires careful authorization and minimum necessary disclosure, especially under heightened confidentiality protections. Employer awareness does not replace a valid release.`,
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
          stem: `His sober brother says he is “white-knuckling it.” What is the best clinical direction for James?`,
          options: [
            `Help James plan a family intervention`,
            `Explore how he can offer support while respecting his brother’s autonomy and protecting his own recovery`,
            `Tell James not to get involved because it could trigger relapse`,
            `Refer the brother directly to your program`,
          ],
          correctAnswer: 1,
          explanation: `James can offer support as a sibling in recovery, but he is not responsible for managing his brother’s sobriety. The work is boundaries, support, and protecting his own recovery.`,
        },
        {
          id: "james-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: `He remembers his father teaching him to fish after years of seeing him only through drinking. What does this indicate clinically?`,
          options: [
            `Denial of the harm caused by his father’s alcohol use`,
            `Integration of a more complex grief narrative about his father`,
            `A relapse warning sign because nostalgia is risky`,
            `Evidence that family-of-origin work is complete`,
          ],
          correctAnswer: 1,
          explanation: `The client is beginning to hold both harm and love in the same relationship narrative. That integration is a marker of grief and identity work, not denial or completion.`,
        },
        {
          id: "james-q13",
          questionNumber: 13,
          domain: "Treatment planning",
          stem: `He says he is stable but not finished. What continuing-care plan best fits this phase?`,
          options: [
            `Terminate because court-mandated IOP is complete`,
            `Maintain weekly therapy indefinitely due to chronic AUD`,
            `Collaboratively define ongoing work around relapse prevention, grief, identity, and relationships, possibly at reduced frequency`,
            `Transfer him to couples therapy only`,
          ],
          correctAnswer: 2,
          explanation: `After stabilization, continuing care often shifts to relapse prevention and broader recovery work. Reduced frequency may be appropriate, but abrupt termination or indefinite weekly care without rationale is not ideal.`,
        },
        {
          id: "james-q14",
          questionNumber: 14,
          domain: "Counseling skills and interventions",
          stem: `He is considering a leadership role at work and says wanting it for its own sake feels different. What is the best response?`,
          options: [
            `You should accept it because it reflects recovery`,
            `Be careful; major changes can destabilize early sobriety`,
            `What feels different about wanting something without guilt or proving yourself?`,
            `Let’s focus on sobriety and postpone career decisions`,
          ],
          correctAnswer: 2,
          explanation: `The response helps him explore emerging authentic desire, a meaningful recovery marker. It avoids directing the decision, overcaution, or narrowing treatment to abstinence alone.`,
        },
      ],
    },
  ],
};
