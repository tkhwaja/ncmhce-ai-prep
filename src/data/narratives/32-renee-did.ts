import type { Narrative } from "./types";

export const reneeDid: Narrative = {
  id: "32-renee-did",
  title: "Renee — Dissociative Identity Disorder",
  category: "Dissociative Disorders",
  difficulty: "Advanced",
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 35,
    sexAssignedAtBirth: "Female",
    genderIdentity: "Female",
    pronouns: "she/her",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Black/African American",
    relationshipStatus: "Divorced",
    setting: "Community mental health center (outpatient)",
    payment: "Medicaid",
    typeOfCounseling: "Individual Therapy",
    provisionalDiagnosis:
      "F44.81 Dissociative Identity Disorder; rule out posttraumatic stress disorder / complex trauma; rule out borderline personality disorder; rule out bipolar disorder; rule out a neurological cause for amnestic episodes",
  },

  presentingProblem:
    "Renee Caldwell, a 35-year-old woman, is referred to outpatient therapy by her primary care provider after she disclosed 'losing time' and finding herself in places with no memory of how she arrived. She has struggled for years with depressed mood, anxiety, and sleep problems and has been treated at different points for 'treatment-resistant depression,' bipolar disorder, and borderline personality disorder, without lasting relief. She describes recurrent gaps in memory for everyday events: she finds clothing and groceries she does not remember buying, discovers work completed in handwriting that looks like hers but that she does not recall doing, and is sometimes addressed by names that are not hers by people who say they have spoken with her before. She hears several voices that she experiences as coming from inside her head—one that sounds like a frightened child, others that argue or criticize—and she has never told a clinician about them because she is afraid of being seen as 'crazy' or as making it up. She reports a history of chronic abuse and neglect in childhood that she can describe only in fragments. She has a history of self-harm and of feeling 'outside' herself. She is exhausted, ashamed, and frightened by the lost time, which has begun to affect her work and her few relationships, and she says she has come in now only because the gaps are getting harder to hide.",

  mentalStatusObservation:
    "The client is a neatly dressed woman who appears her stated age and is cooperative but visibly anxious, frequently glancing toward the door. She is alert and oriented to person, place, time, and situation. Psychomotor activity is mildly restless. Speech is normal in rate and volume, though at two points during the interview her tone, posture, and manner shift abruptly and briefly before returning. Mood is described as 'worn down' and 'scared'; affect is anxious and constricted, with moments of incongruence. Thought process is linear and goal-directed, without disorganization or loosening of associations. She reports hearing internal voices, which she recognizes as originating within her own mind; there are no delusions, and reality testing is intact. She endorses passive thoughts that she would be 'better off gone' and a history of self-harm but denies current intent or plan and identifies reasons for living. She describes episodes of depersonalization and recurrent amnesia for everyday events. Cognition is grossly intact on examination, although she cannot account for blocks of time. Insight into the nature of her experiences is limited; judgment is fair.",

  familyHistory:
    "Renee is the middle of three children. After her mother's chronic instability affected her ability to parent, Renee was raised largely by an aunt; she describes her early home as frightening and unpredictable and reports abuse and neglect that she can recall only in pieces, becoming distressed when the subject arises. She is divorced, has no children, and lives alone. She has few close relationships and describes long-standing difficulty trusting others and a fear of being abandoned or disbelieved. She is close to one cousin, who has remarked that Renee 'seems like a different person sometimes' and once called her by a name Renee did not recognize. She knows of no formal family psychiatric diagnoses, though she suspects her mother 'had something going on.' Her faith community was once a source of comfort, but she has withdrawn from it as her symptoms have worsened, partly out of fear that something is deeply wrong with her.",

  workHistory:
    "Renee works as a medical-records and billing coordinator, a position she has held for several years and takes pride in; colleagues have described her as conscientious and reliable. Until recently she had no difficulties at work. Over the past year, however, the lost time has begun to create problems she cannot explain: she finds tasks completed that she does not remember doing, loses track of conversations coworkers say they had with her, and has missed portions of her day with no recollection. Her supervisor has noted occasional gaps and errors, and Renee is increasingly anxious about being found out and losing a job that anchors her sense of competence and stability.",

  intakeSessionSummary:
    "The intake established a provisional diagnosis of dissociative identity disorder: a childhood history of chronic trauma, disruption of identity with distinct self-states and discontinuity in sense of self and agency, recurrent amnesia for everyday events and for portions of her history, and clinically significant distress and impairment. The presentation is not part of a broadly accepted cultural or religious practice, and a recent neurological evaluation, including EEG, was unremarkable, with no substance use that would account for the episodes. The differential—complex PTSD, borderline personality disorder, bipolar disorder, and a primary psychotic disorder—was weighed against the identity discontinuity, the internally experienced voices with intact reality testing, and the inter-episode amnesia. A history of self-harm and passive suicidal ideation was noted and risk was assessed, with identifiable protective factors. The counselor prioritized safety, stabilization, psychoeducation, and a nonjudgmental, validating stance and deferred any trauma processing. Coordination with her primary care provider and prescriber was identified, with an initial plan to build grounding skills and internal communication before any memory work.",

  sections: [
    {
      sessionLabel: "First session",
      recommendedTimeMinutes: 8,
      sectionNarrative:
        "Renee arrives early and sits near the door, her coat still on. She is polite but guarded and watches you carefully as you review confidentiality and its limits and explain how the center coordinates care. She says she almost canceled, and that she has 'never told anyone all of this' because she is afraid you will think she is 'crazy or making it up.'\n\nWhen she begins to describe what brought her in, she focuses on the lost time. She finds clothing and groceries in her apartment that she does not remember buying, has discovered work completed in handwriting that looks like hers but that she cannot recall doing, and has been addressed by names that are not hers by people who insist they have spoken with her before. A cousin once called her by an unfamiliar name and later said she 'seemed like someone else.' She loses track of conversations and has come back to herself in places with no memory of arriving.\n\nShe then, haltingly, tells you about the voices. She hears several that she experiences as coming from inside her own head—one that sounds like a frightened child, others that argue or criticize. She is quick to say she knows they are 'in her mind' and not coming from the room or other people. Years ago a provider suggested she might have schizophrenia, which terrified her; she stopped going. She does not describe disorganized thinking, and she follows the conversation clearly.\n\nShe references a childhood she can only recall in fragments, marked by abuse and neglect, and becomes visibly distressed when it comes up, so you do not press. She mentions a history of self-harm and periods of feeling detached and 'outside' herself, and acknowledges passing thoughts that she would be 'better off gone,' while denying any current intent or plan and naming reasons she keeps going. She also tells you she was once diagnosed with borderline personality disorder and was told her problems were about 'an unstable personality.'\n\nTwice during the session her posture and tone shift briefly before she returns to herself, seemingly without noticing. You keep the focus on safety, validate how hard it is for her to be here, and begin psychoeducation, deferring any exploration of the trauma itself.",
      questions: [
        {
          id: "renee-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Renee reports recurrent gaps in memory for everyday events, finds items she apparently purchased but cannot recall buying, and is addressed by names she does not recognize. Which feature most distinguishes dissociative identity disorder from posttraumatic stress disorder in her presentation?",
          options: [
            "Distressing intrusive memories and nightmares related to past abuse.",
            "Persistent hypervigilance and an exaggerated startle response.",
            "Marked discontinuity in identity and agency accompanied by amnesia for everyday events.",
            "Avoidance of people and places that recall the trauma.",
          ],
          correctAnswer: 2,
          explanation:
            "Disruption of identity—distinct self-states with discontinuity in sense of self and agency—together with amnesia for everyday events is what defines dissociative identity disorder and is absent in posttraumatic stress disorder, making it the discriminating feature. Intrusive memories and nightmares, hypervigilance with exaggerated startle, and trauma-related avoidance are all core PTSD symptoms that also commonly appear in DID, so none of them separates the two.",
        },
        {
          id: "renee-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "Renee describes hearing several voices that she experiences as coming from inside her head, including one that sounds like a young child, and she has previously been told she might have schizophrenia. Which consideration most supports a dissociative rather than a primary psychotic disorder?",
          options: [
            "The voices are experienced as internal and occur with intact reality testing and no formal thought disorder.",
            "The voices sometimes urge her to harm herself, indicating command hallucinations.",
            "She has limited insight into where the voices come from.",
            "The voices began in early adulthood, consistent with the typical onset of psychosis.",
          ],
          correctAnswer: 0,
          explanation:
            "Voices experienced as internal, alongside preserved reality testing and no formal thought disorder, point toward a dissociative process, whereas schizophrenia more often involves voices experienced as external with disorganized thinking and negative symptoms. Command content does not separate the two because command hallucinations occur in both, limited insight is nonspecific, and onset in early adulthood would, if anything, favor a primary psychotic disorder rather than argue against it.",
        },
        {
          id: "renee-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "Renee says she has never told a therapist about the voices and the lost time because she is afraid of being seen as 'crazy' or as making it up. Which response best supports the therapeutic alliance at this point?",
          options: [
            "Reassure her that she is not crazy and that dissociative identity disorder is a real, recognized condition.",
            "Explain that her symptoms are the understandable result of her childhood trauma.",
            "Encourage her to describe the voices in detail now so that you can assess them.",
            "Reflect how hard it must be to risk telling you this after being disbelieved before.",
          ],
          correctAnswer: 3,
          explanation:
            "Validating the relational risk she is taking—disclosing after being disbelieved—is what builds safety and trust and is the priority before reassurance, explanation, or assessment. Telling her she is not crazy and naming a diagnosis is premature and shifts to information over her experience, attributing her symptoms to trauma interprets before she feels understood, and pressing for a detailed account of the voices puts assessment ahead of safety.",
        },
        {
          id: "renee-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: "In planning Renee's treatment, which approach to the early phase is most appropriate?",
          options: [
            "Begin processing her earliest traumatic memories in order to relieve her symptoms.",
            "Prioritize safety, affect regulation, grounding, and internal communication before any trauma processing.",
            "Focus first on identifying and interviewing each self-state to map the system.",
            "Defer all trauma-focused work until her depressive symptoms have fully remitted.",
          ],
          correctAnswer: 1,
          explanation:
            "Phase-oriented treatment of dissociative identity disorder begins with safety, affect regulation, grounding, and internal communication, so stabilization comes before any trauma processing. Processing early memories now and interviewing each self-state to map the system are both destabilizing before stabilization is established, and withholding trauma work until depression fully remits sets an inappropriate threshold, since stabilization and symptom management proceed concurrently.",
        },
        {
          id: "renee-q5",
          questionNumber: 5,
          domain: "Intake/assessment/diagnosis",
          stem: "Renee has previously been diagnosed with borderline personality disorder. Which finding would most support dissociative identity disorder rather than borderline personality disorder?",
          options: [
            "An unstable sense of self and chronic feelings of emptiness.",
            "Intense, unstable relationships and a fear of abandonment.",
            "Recurrent amnesia for everyday events and conversations that others witnessed.",
            "Impulsive behaviors and recurrent self-harm.",
          ],
          correctAnswer: 2,
          explanation:
            "Recurrent amnesia for everyday events and conversations is a hallmark of dissociative identity disorder and is not a feature of borderline personality disorder, which makes it the distinguishing finding. An unstable self-concept with emptiness, unstable relationships with abandonment fear, and impulsivity with self-harm are all consistent with borderline personality disorder and can co-occur with DID, so none of them favors one diagnosis over the other.",
        },
      ],
    },
    {
      sessionLabel: "Sixth session",
      recommendedTimeMinutes: 8,
      sectionNarrative:
        "By the sixth session Renee is more willing to talk, though she still tests whether you believe her. She tells you, with shame and fear, that she recently found fresh cuts on her forearm that she does not remember making. She says it must have been 'someone inside,' because she has no memory of it and would not do that now. She denies any intent to die and is frightened rather than suicidal, but she is shaken that something can happen to her body outside her awareness.\n\nShe describes how the lost time is affecting her work—gaps in her day, tasks finished that she cannot recall, conversations she does not remember—and says she desperately wants the gaps to stop so she can keep her job and feel like herself. Under stress she notices the room 'going far away' and has begun to recognize that switches happen when she is overwhelmed, though she cannot yet control them.\n\nPartway through the session her demeanor changes abruptly: her voice becomes small and childlike, her posture shrinks, and she looks at you warily, as though she does not quite recognize you and is frightened to be there. After a few minutes, with gentle support, she gradually returns to her usual adult presentation and is disoriented about what just happened.\n\nLater she raises something she has been thinking about. She asks whether you could hypnotize her to recover detailed memories of her childhood, because she is considering confronting a relative and possibly pursuing legal action, and she believes that 'remembering everything exactly' would let her prove what happened. She is looking to you to make this happen.\n\nYou work to keep the session contained and safe, attend to the unexplained self-injury, respond to the part that emerged, and address her request and her wish to stop the lost time, while holding the frame of stabilization-phase work.",
      questions: [
        {
          id: "renee-q6",
          questionNumber: 6,
          domain: "Professional practice and ethics",
          stem: "Renee reports finding fresh cuts on her arm that she does not remember making and says 'someone inside' may have done it. What is the most appropriate clinical priority?",
          options: [
            "Reassure her that the self-state was most likely trying to protect her in some way.",
            "Conduct a current safety assessment and collaboratively develop a safety plan that includes all self-states.",
            "Ask to speak directly with the self-state responsible in order to address the behavior.",
            "Arrange immediate psychiatric hospitalization because of the self-injury.",
          ],
          correctAnswer: 1,
          explanation:
            "Unexplained self-injury calls first for a current safety assessment and a collaborative safety plan that accounts for all self-states, since risk in dissociative identity disorder can involve parts outside the host's awareness. Reassuring her about a protective intent skips the assessment, attempting to summon the responsible state to confront it is destabilizing and premature, and arranging hospitalization over-reacts to self-injury that has not been established as acute suicidal risk.",
        },
        {
          id: "renee-q7",
          questionNumber: 7,
          domain: "Core counseling attributes",
          stem: "During the session Renee's voice and manner abruptly shift and she presents as a frightened child who does not seem to recognize you. Which response best reflects sound clinical practice?",
          options: [
            "Gently orient the part to the present and to safety while conveying respect and care.",
            "Continue the session as planned, since acknowledging the part may reinforce the dissociation.",
            "Ask the child part to bring back the adult Renee immediately so that you can proceed.",
            "Use the opportunity to ask the part what traumatic memories it is holding.",
          ],
          correctAnswer: 0,
          explanation:
            "Gently orienting the part to present safety with respect and care stabilizes the client and treats the whole person, which is the appropriate response when a self-state emerges. Proceeding as though nothing happened dismisses a real clinical event, demanding that the adult self return at once forces a switch and is invalidating, and probing the part for traumatic memories pursues content before safety and risks destabilization.",
        },
        {
          id: "renee-q8",
          questionNumber: 8,
          domain: "Counseling skills and interventions",
          stem: "Renee is frequently overwhelmed and switches under stress with little grounding. Which intervention is most appropriate to prioritize during the current stabilization phase?",
          options: [
            "Using hypnosis to access and recover dissociated traumatic memories.",
            "Guiding her through a detailed recounting of the abuse to promote habituation.",
            "Encouraging her to keep the self-states separate in order to reduce internal conflict.",
            "Teaching grounding and affect-regulation skills and fostering communication among self-states.",
          ],
          correctAnswer: 3,
          explanation:
            "Grounding, affect-regulation skills, and building communication among self-states are the core stabilization-phase interventions and directly address her current dysregulation. Using hypnosis to recover memories carries a recognized risk of distortion and is contraindicated, a detailed recounting of the abuse is premature exposure before stabilization, and encouraging the parts to stay separate works against the internal cooperation that treatment aims to build.",
        },
        {
          id: "renee-q9",
          questionNumber: 9,
          domain: "Counseling skills and interventions",
          stem: "Renee is distressed by losing time and wants help with the gaps in her day-to-day functioning. Which approach is most appropriate at this stage?",
          options: [
            "Train her to suppress the other self-states whenever she senses a switch coming.",
            "Help her reconstruct what happened during each gap by recovering the missing memories.",
            "Build internal communication and shared awareness, using tools such as a shared journal among self-states.",
            "Refer her for a medication that will eliminate the dissociative episodes.",
          ],
          correctAnswer: 2,
          explanation:
            "Reducing lost time at this stage is best approached by strengthening communication and shared awareness among self-states, for which tools like a shared journal are well suited. Training her to suppress parts works against internal cooperation, reconstructing each gap pursues memory recovery before stabilization, and referring for a medication to eliminate dissociation rests on a false premise, since no medication treats the core dissociation.",
        },
        {
          id: "renee-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "Renee asks you to hypnotize her to recover detailed memories of her childhood abuse so she can confront a relative and possibly pursue legal action. What is the most appropriate response?",
          options: [
            "Agree, since recovering the memories will help her heal and support her case.",
            "Explain that suggestive memory-recovery techniques can distort recall and that therapy will focus on stabilization and safety rather than retrieving memories for legal use.",
            "Use hypnosis but document it carefully so the memories can be used as evidence.",
            "Refer her to a forensic specialist who can hypnotize her to obtain a usable account.",
          ],
          correctAnswer: 1,
          explanation:
            "Therapy should not use suggestive memory-recovery techniques, which can distort recall, and the counselor should hold a therapeutic rather than forensic role, keeping the focus on stabilization and safety. Agreeing to hypnotize her, performing hypnosis to create evidence, and referring her for hypnosis to obtain a usable account all employ a contraindicated technique and improperly enlist treatment in building a legal case.",
        },
      ],
    },
    {
      sessionLabel: "Fifteenth session",
      recommendedTimeMinutes: 8,
      sectionNarrative:
        "After several months of consistent work, Renee is noticeably more stable. She uses grounding skills when she feels herself drifting, her self-harm has stopped, and she reports more communication and shared awareness among her self-states; she has begun keeping a shared journal that the parts use to leave each other notes. Lost time has decreased, and she has caught up at work. She describes herself as 'more here' than she has been in years.\n\nBecause her stabilization skills are solid and her risk has decreased, the two of you have begun to discuss approaching the traumatic memories. Renee says she wants to understand what happened but is frightened of being overwhelmed, and you talk about how to do this carefully.\n\nShe also voices something tender and difficult. As integration has started to feel possible, she has become uneasy. 'If the others come together, does that mean parts of me disappear?' she asks. 'They've been with me my whole life. I don't know who I'd be without them.' She is grieving even as she improves.\n\nShe asks you directly what the long-term goal of treatment actually is, and whether the aim is for her to 'become one person.' She wants to understand where this is going.\n\nFinally, she mentions that she still sees a psychiatrist for her depression and insomnia and asks whether there is 'a medication that would just make the others go away.' She is hopeful there might be a simpler solution.\n\nYou reflect her progress without overstating it, hold space for her ambivalence about integration, talk through how trauma processing will be paced, and clarify the role of medication and the collaborative nature of the goals, while making clear that meaningful progress does not mean she is 'done.'",
      questions: [
        {
          id: "renee-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: "After several months Renee has stable grounding skills, no recent self-harm, and improved communication among her self-states. Which approach best guides beginning trauma-focused work now?",
          options: [
            "Process the memories in titrated, paced segments with continued grounding and monitoring for destabilization.",
            "Work through the full traumatic narrative in as few sessions as possible to limit her distress.",
            "Continue stabilization indefinitely and avoid any memory work in order to prevent setbacks.",
            "Have each self-state recount its memories separately without sharing them with the others.",
          ],
          correctAnswer: 0,
          explanation:
            "With stabilization established, trauma-focused work should proceed in titrated, paced segments alongside continued grounding and monitoring for destabilization. Working through the entire narrative quickly risks flooding and re-traumatization, continuing stabilization indefinitely needlessly withholds indicated treatment now that she is ready, and having each self-state recount memories in isolation works against the shared awareness and integration that are the goal.",
        },
        {
          id: "renee-q12",
          questionNumber: 12,
          domain: "Core counseling attributes",
          stem: "As integration becomes possible, Renee says, 'If the others come together, does that mean parts of me disappear? I don't know who I'd be without them.' Which response best supports her at this point?",
          options: [
            "Reassure her that integration does not mean any part is lost but rather joined together.",
            "Clarify that the goal is integration and that her fear is a normal part of the process.",
            "Suggest that she may not be ready for integration if she feels this much fear.",
            "Explore what the parts have meant to her and what the prospect of change brings up.",
          ],
          correctAnswer: 3,
          explanation:
            "At this point the work is helping her make meaning of what the parts represent and what change evokes, so an exploratory, holding response fits best. Reassuring her that nothing is lost and clarifying that fear is normal both move past the grief she is voicing, and concluding that she is not ready misreads understandable ambivalence as a reason not to proceed.",
        },
        {
          id: "renee-q13",
          questionNumber: 13,
          domain: "Treatment planning",
          stem: "Renee asks what the long-term goal of treatment is. Which response reflects the most appropriate stance on treatment goals in dissociative identity disorder?",
          options: [
            "Full fusion of all self-states is the only successful outcome and should be the goal.",
            "Goals are collaborative and may range from internal cooperation and improved functioning to full integration, based on her needs.",
            "The goal is to eliminate the self-states as quickly as possible to restore normal functioning.",
            "Treatment should continue until she no longer experiences any dissociation.",
          ],
          correctAnswer: 1,
          explanation:
            "Treatment goals in dissociative identity disorder are collaborative and span a range, from improved internal cooperation and functioning to full integration, chosen together with the client. Insisting that only full fusion counts, aiming to eliminate the parts, and continuing until all dissociation is gone all impose rigid or symptom-free standards that do not reflect accepted, client-centered goals.",
        },
        {
          id: "renee-q14",
          questionNumber: 14,
          domain: "Professional practice and ethics",
          stem: "Renee asks whether there is a medication that will make the other self-states 'go away,' and she also sees a psychiatrist for depression and insomnia. What is the most appropriate response?",
          options: [
            "Tell her to ask her psychiatrist to prescribe an antipsychotic to suppress the self-states.",
            "Reassure her that the right medication will eventually resolve the self-states.",
            "Explain that no medication treats the dissociation itself, that medication can help her co-occurring depression and sleep, and that those decisions rest with her prescriber, with whom you can coordinate.",
            "Advise her to stop her current psychiatric medication so it does not interfere with therapy.",
          ],
          correctAnswer: 2,
          explanation:
            "No medication treats the dissociation itself; medication can address her co-occurring depression and insomnia, and those decisions belong to her prescriber, with whom the counselor can coordinate. Telling her to obtain an antipsychotic to suppress the parts and advising her to stop her medication both direct prescribing decisions outside the counselor's scope, and promising that medication will resolve the self-states rests on a false premise.",
        },
      ],
    },
  ],
};
