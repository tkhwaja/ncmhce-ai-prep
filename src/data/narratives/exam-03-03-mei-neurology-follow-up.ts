import type { Narrative } from "./types";

export const meiNeurologyFollowUpNarrative: Narrative = {
  id: 'exam-03-03-mei-neurology-follow-up',
  title: 'Mei — Neurology Follow-Up',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [7, 7, 6],

  clientInfo: {
    age: 29,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender woman',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Asian American / Chinese American',
    relationshipStatus: 'Engaged',
    setting: 'Integrated outpatient behavioral health service affiliated with a university neurology center',
    payment: 'Employer-sponsored insurance',
    typeOfCounseling: 'Individual counseling with neurological, family, and occupational coordination',
    provisionalDiagnosis: 'Functional Neurological Symptom Disorder, with attacks or seizures: F44.5',
  },

  presentingProblem: `You are a licensed mental health counselor in a behavioral health service affiliated with a university neurology center. Mei L., a 29-year-old hospital laboratory technologist, was referred for “episodes of altered awareness under neurological evaluation.” She has had 18 events over five months, including three emergency-department visits. An epilepsy specialist will admit her for video-EEG monitoring in two weeks. The referral asks you to address distress and functioning while the medical evaluation continues, not to determine whether the events are epileptic.

Mei describes a typical episode as an internal wave, distant hearing, narrowing vision, and difficulty speaking, followed by closed eyes and shaking that others describe as irregular. Some events begin with a racing heart or faster breathing, but she usually reports confusion or detachment rather than sudden fear of dying or losing control. She can sometimes hear her fiancé during an event but cannot respond consistently. Events last between four and eighteen minutes, may pause and resume, and leave her tired for hours. They have occurred after conflict, during demanding laboratory work, while waiting in a grocery line, and once at home after a relaxed evening. A coworker’s phone video shows side-to-side head movement and asynchronous arm movement, but a counselor cannot establish seizure type from the recording.

Brain MRI, cardiac testing, metabolic studies, and neurological examination between episodes were unremarkable. A 30-minute routine EEG did not show epileptiform activity, but no habitual event occurred during it. One emergency physician documented “probable stress reaction”; another prescribed levetiracetam pending specialist review. Mei reports irritability since starting it. The neurologist instructed her not to drive and not to work alone around open chemicals or operating centrifuges until evaluation is complete. Mei asks whether she should stop the medication because “nothing electrical showed up.” You explain that medication decisions remain with neurology.

In college, Mei had two panic attacks involving abrupt terror, chest pressure, fear of dying, and an urge to escape. She has not had that pattern in years. She worries before presentations and medical appointments but does not report pervasive anxiety across domains, panic-focused avoidance, obsessions, psychosis, mania, substance use, or an established trauma syndrome. Sleep has become fragmented because she monitors every sensation. She denies deliberately producing symptoms and is offended that her supervisor implied the episodes appear when work becomes difficult.

Mei requested medical leave only after her third emergency visit. Her first nine events predated a corrective-action meeting at work, although leave and a pending grievance now create potential external benefit. She says, “I know that makes me look suspicious. I would trade the leave to have my body back.” There is no observed deception, covert medication manipulation, falsified record, or evidence that she induces attacks. At the same time, absence of detected deception cannot by itself determine whether symptoms are voluntary.

Mei identifies several current stressors: her father’s recovery from a stroke, rotating shifts, conflict with a supervisor, and her mother’s insistence that the family keep health problems private. She rejects the assumption that a hidden trauma must explain the attacks. “Every appointment becomes a hunt for the emotional secret that caused this. Then if I cannot produce one, they think I am lying.”

She denies suicidal or homicidal ideation and has no self-injury history. During one event she fell from a stool and sustained a mild concussion. Her fiancé, Evan, now calls emergency services for every episode and does not let her shower or walk outside alone. Mei appreciates his concern but says their apartment has become “a surveillance unit.” Her immediate goals are an accurate diagnosis, a safe response plan, and as much independence as possible.`,

  mentalStatusObservation: `Mei arrives early, appropriately groomed, and fully oriented. She is attentive, precise, and initially guarded. Speech is fluent and organized. Mood is “angry and scared that no one believes me.” Affect is tense and tearful when prior medical encounters are discussed, with appropriate range elsewhere. There is no psychosis, mania, intoxication, or cognitive disorganization.

She frequently checks her pulse and pauses when noticing tingling, then redirects with prompting. Insight is good regarding impairment and uncertainty; she does not claim certainty about epilepsy or a psychological cause. Judgment is intact in following temporary medical precautions. Mei denies suicidal or homicidal ideation. Current risk centers on injury during episodes, medication and driving questions, occupational exposure, and possible overrestriction rather than intentional self-harm.`,

  familyHistory: `Mei lives with Evan, her fiancé of four years. He is supportive and frightened, having witnessed her fall. With Mei’s authorization, he may participate in event-response planning but does not receive unrestricted session information.

Mei’s parents immigrated from China before she was born. Her mother describes the episodes as “weak nerves from overwork” and fears stigma within their community; her father wants another neurological opinion. Mei worries that clinicians may stereotype an Asian American woman with unexplained symptoms as emotionally repressed or “somatizing.” She wants cultural and family context explored without treating it as a causal shortcut.

There is no known family history of epilepsy. An aunt has panic disorder. Mei’s father has post-stroke motor limitations without seizures. No family suicide is known.`,

  workHistory: `Mei has worked for four years in a hospital microbiology laboratory. Earlier reviews were strong. Rotating shifts and staffing shortages preceded reduced concentration and two documentation errors, neither occurring during an attack. The first episode at work occurred before formal discipline. After later episodes, occupational health placed her on leave pending neurological guidance.

Her duties include handling specimens, using chemicals, operating centrifuges, and occasionally working alone. Mei has filed a grievance alleging that her supervisor mocked her symptoms. She wants eventual return with reasonable safety measures, while the employer and disability carrier request clinical documentation. You clarify that treating symptoms and documenting observed functioning are different from independently determining neurological causation, legal disability, or fitness for every laboratory duty.`,

  intakeSessionSummary: `You validate that Mei’s events and impairment are real regardless of their final classification. You explain that a normal MRI or routine EEG does not mean “nothing happened” and does not by itself establish functional symptoms or exclude epilepsy. The most useful next information includes detailed descriptions from Mei and witnesses, videos when safely available, whether each event type is habitual, medical red flags, and the neurologist’s interpretation of a typical captured event.

With authorization, you coordinate with neurology and occupational health. Until diagnostic clarification, you follow the neurologist’s activity and emergency guidance, assess injury and mental-health risk, and avoid advising medication or driving changes. You also begin examining sleep, anticipatory fear, body monitoring, functional loss, stress, family responses, and Mei’s understanding without assuming these caused the attacks.

Mei agrees that therapy may support coping and function during evaluation but says she will leave if counseling becomes proof that the episodes are fabricated. You review a collaborative treatment frame and explain that factitious disorder and malingering require evidence of intentional production; external incentives or unusual symptoms alone do not establish either.`,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-mei-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'What is the counselor’s most appropriate diagnostic priority at this stage?',
          options: [
            'Assess panic-related catastrophic thoughts and avoidance first because the autonomic prodrome and stress-sensitive pattern most strongly support panic attacks',
            'Use the variable motor pattern and normal testing to document a provisional functional diagnosis while neurology evaluates possible comorbid epilepsy',
            'Characterize every event type, obtain records and witness data, coordinate neurological evaluation, and maintain medical and injury precautions without assigning causation',
            'Assess intentional symptom production before treatment because workplace leave and a grievance make factitious disorder or malingering clinically consequential',
          ],
          correctAnswer: 2,
          explanation: 'The counselor should characterize the events and their contexts, obtain neurological data, and preserve safety while the epilepsy specialist evaluates a typical event. A normal routine EEG without an event does not exclude epilepsy, and suggestive semiology does not authorize the counselor to make a neurological determination. Panic remains a differential, but the current events do not consistently begin with the defining surge of intense fear or discomfort. External benefit warrants neutral documentation without making intentional production the presumptive question. Functional symptoms, factitious disorder, and malingering are not interchangeable; the latter two require evidence of conscious production. The correct answer protects both diagnostic accuracy and role boundaries.',
        },
        {
          id: 'exam-03-mei-q2',
          questionNumber: 2,
          domain: 'Counseling skills and interventions',
          stem: 'Mei says, “If the tests are normal, everyone will decide I am faking.” What is the best response?',
          options: [
            'Explain that stress can produce genuine neurological symptoms and that treatment can begin even if the specific emotional cause is not yet conscious',
            'Reassure her that the episode video looks unlike epilepsy, while emphasizing that only the neurologist can enter the formal diagnosis',
            'Ask which clinicians felt disbelieving and postpone explanation until video-EEG prevents the counselor from reinforcing an inaccurate illness belief',
            'Validate the disbelief, affirm that symptoms can be real and involuntary, and explain that diagnosis requires positive evidence—not normal tests alone',
          ],
          correctAnswer: 3,
          explanation: 'The response addresses both alliance and diagnostic accuracy. It validates Mei’s experience without promising a particular diagnosis and explains that genuine involuntary symptoms are not equivalent to structural test abnormalities. A functional diagnosis should be supported by positive clinical evidence, not delivered as the leftover conclusion after normal tests. Telling her stress is already producing the symptoms assumes causation and revives the hidden-cause problem she described. Interpreting the phone video exceeds the counselor’s role, even with a disclaimer. Delaying all explanation may avoid one error but abandons a needed corrective message: uncertainty can coexist with respect, safety, and treatment.',
        },
        {
          id: 'exam-03-mei-q3',
          questionNumber: 3,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which future finding would provide the strongest support for functional attacks rather than epilepsy?',
          options: [
            'A neurologist identifies positive functional semiology during multiple habitual events captured without an ictal correlate on synchronized video-EEG',
            'Events decline after grounding and occur more often during interpersonal conflict than during periods Mei describes as emotionally neutral',
            'Repeated MRI, cardiac, metabolic, and routine EEG results remain normal while the events continue despite antiseizure medication',
            'Witnesses report closed eyes, variable duration, preserved recall, and no incontinence, tongue injury, or prolonged post-event confusion',
          ],
          correctAnswer: 0,
          explanation: 'Synchronized video-EEG of the client’s habitual events, interpreted together with positive semiology by an experienced clinician, provides the strongest evidence among the options. Improvement with grounding and association with stress may inform formulation but cannot distinguish functional attacks from all epileptic or panic phenomena. Repeated normal tests are not a positive diagnosis, and some epileptic seizures may not appear on a short routine EEG. Individual features such as eye closure, duration, recall, or absence of injury are suggestive only in context. The diagnostic value comes from confirming that the captured event is typical and integrating its observed pattern with the concurrent EEG—not from any isolated sign.',
        },
        {
          id: 'exam-03-mei-q4',
          questionNumber: 4,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor incorporate Mei’s cultural concerns into the assessment?',
          options: [
            'Explore whether family privacy and emotional restraint have led distress to emerge physically, while emphasizing that this pattern is culturally understandable',
            'Invite Mei’s own meanings, examine family and medical-system responses, and negotiate support without assuming that ethnicity, privacy, or emotion caused the attacks',
            'Keep cultural formulation separate from diagnosis so concerns about stereotyping do not reduce the objectivity of neurological and behavioral evidence',
            'Prioritize individual sessions until Mei accepts the diagnosis, because early family involvement may strengthen stigma and excessive monitoring',
          ],
          correctAnswer: 1,
          explanation: 'Cultural responsiveness requires inquiry without stereotype. The counselor should ask how Mei understands the events, health, privacy, family roles, and prior clinical encounters; examine the effects of stigma and bias; and collaborate about support. Assuming that emotional restraint has become a physical symptom reproduces the causal shortcut Mei fears. Excluding culture creates a different distortion because evidence is interpreted within relationships and systems. Family involvement may help when Mei authorizes it, but neither automatic exclusion nor automatic inclusion is culturally responsive. The best answer preserves Mei’s authority over her experience while keeping clinical formulation open and evidence based.',
        },
      ],
    },
    {
      sessionLabel: 'Fifth session',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `By the fifth session, Mei has completed four days of inpatient video-EEG monitoring. The team captured two events that Mei, Evan, and a coworker each identified as habitual. Both involved closed eyes, waxing and waning responsiveness, side-to-side head movement, and discontinuous asynchronous limb activity. The epilepsy specialist identified positive semiologic findings incompatible with recognized epileptic events. No ictal epileptiform activity appeared before, during, or after either event. The team found no second event type requiring separate classification and no current evidence of co-occurring epilepsy.

In a joint feedback visit, the neurologist explains that the events are real and involuntary and reflect a problem in nervous-system functioning rather than structural damage or epileptic discharges. She states that psychological stress or trauma may be relevant for some people but is not required to validate the findings. She creates a supervised levetiracetam taper, continues temporary driving and laboratory precautions, and gives written criteria for emergency evaluation. The counselor does not alter these instructions.

Further assessment does not establish panic disorder, PTSD, a major mood episode, substance involvement, factitious disorder, or malingering. Mei has significant anticipatory anxiety and sleep disruption but no separate full syndrome. Work conflict and disability benefits are relevant contextual data; neither supplies evidence that the attacks are consciously produced.

Mei says, “Part of me is relieved. Part of me hears ‘functional’ as a polite word for imaginary.” Evan accepts the diagnosis but remains hypervigilant. He times every sensation, repeatedly asks whether an attack is beginning, physically holds Mei down when shaking starts, and calls emergency services even when an event matches the neurologist-documented pattern and emergency criteria are absent. He says attention is the only way to prove he believes her.

Mei wants treatment to reduce attacks, but she places equal importance on showering alone, walking to a nearby café, resuming household tasks, and returning to laboratory work safely. She is willing to examine arousal, attention, avoidance, emotion, and learning processes if the counselor does not present any one factor as the hidden cause.`,
      questions: [
        {
          id: 'exam-03-mei-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnosis is now best supported by the available evidence?',
          options: [
            'Panic Disorder with dissociative features because autonomic arousal, anticipatory anxiety, and episodic loss of control can produce seizure-like behavior',
            'Factitious Disorder imposed on self because Mei seeks a patient role and occupational relief despite repeated negative neurological findings',
            'Unspecified epilepsy with an Adjustment Disorder because scalp EEG can miss seizures and the work conflict explains her current emotional distress',
            'Functional Neurological Symptom Disorder with attacks or seizures because typical events show positive incompatibility with recognized neurological disease',
          ],
          correctAnswer: 3,
          explanation: 'The diagnosis is supported by positive functional semiology during two confirmed habitual events and the epilepsy team’s integrated video-EEG interpretation. It is not based merely on normal tests or the presence of stress. Panic disorder does not account for the observed attack pattern, and the episodes do not consistently contain a panic attack’s defining affective surge. Factitious disorder requires intentional falsification or induction to assume the sick role; no such evidence exists. Possible external benefit likewise does not demonstrate malingering. Although scalp EEG has limitations, the specialist considered the simultaneous recordings, event semiology, and absence of another spell type rather than treating a negative tracing in isolation.',
        },
        {
          id: 'exam-03-mei-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which treatment plan best fits Mei’s diagnosis, goals, and current medical guidance?',
          options: [
            'Use a shared functional formulation, attack-interruption and regulation skills, graded independence and activity, family response training, and continued neurological and occupational coordination',
            'Begin trauma-focused treatment to identify the dissociated precipitant, adding functional rehabilitation once Mei can connect attacks to emotional triggers',
            'Prioritize interoceptive exposure and cognitive restructuring for catastrophic sensations, with neurology follow-up only if a new event pattern develops',
            'Set seizure freedom as the first treatment phase and postpone work or independence goals because activity before symptom remission may create injury risk',
          ],
          correctAnswer: 0,
          explanation: 'An integrated plan addresses the attacks while restoring function. It combines an understandable shared formulation, attention and arousal regulation, early interruption strategies, reduced avoidance, graded return to valued activity, partner training, and ongoing medical and occupational coordination. Trauma treatment is indicated only when assessment supports a trauma-related target and Mei chooses it; FND does not require uncovering a hidden trauma. Panic methods may contribute selectively but should not replace the functional-neurological formulation or medical continuity. Waiting for complete seizure freedom can reinforce disability and makes symptom elimination the gatekeeper for recovery. Graded activity should follow individualized medical precautions rather than either blanket avoidance or unsafe exposure.',
        },
        {
          id: 'exam-03-mei-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best way to address Evan’s response to Mei’s habitual attacks?',
          options: [
            'Teach him to withdraw attention once physical danger is removed because consistent extinction is necessary to prevent inadvertent reinforcement',
            'Continue emergency activation until Mei has remained event-free for several months, then reduce monitoring as neurological risk becomes negligible',
            'Develop a neurologist-consistent response plan that protects from injury, avoids restraint and alarm, supports recovery, and identifies new features requiring medical escalation',
            'Ask Evan to record each event and repeatedly test responsiveness so the team can document change while demonstrating that the symptoms are taken seriously',
          ],
          correctAnswer: 2,
          explanation: 'The best response is safe, calm, predictable, and individualized. Evan can reduce injury risk, avoid restraint and escalating attention, support Mei’s practiced recovery steps, and follow explicit criteria for emergency care when injury, a new event type, unusual duration, or another red flag occurs. Describing the plan as extinction implies manipulation and may turn appropriate reduction of reinforcement into emotional abandonment. Automatic emergency activation can cause unnecessary intervention and preserve helplessness when it conflicts with the medical plan. Intensive filming and repeated testing may heighten monitoring and arousal. Partner involvement should communicate belief in the symptom’s reality while increasing Mei’s agency rather than surveillance.',
        },
      ],
    },
    {
      sessionLabel: 'Twelfth session',
      // Recommended pacing: ~6 minutes
      sectionNarrative: `Seven weeks later, Mei and Evan use the written event protocol. Evan remains nearby without restraining her, reduces repeated checking, and helps her resume activity after recovery. Mei identifies early narrowing of attention, shifts focus outward, slows exhalation, presses her feet into the floor, and continues a planned task when safe. Attacks decline from three or four weekly to one in the past month, average duration decreases, and emergency visits stop. She measures progress through independence and recovery time as well as frequency.

With neurological and occupational-health collaboration, Mei begins a graded return to administrative laboratory duties. She is not yet working alone with hazardous materials or driving. Sleep and confidence improve. She remains distressed when coworkers call the condition “just anxiety,” and therapy addresses communication, grief over lost trust in her body, and flexible response to physical cues.

At the current session, Mei reads an email stating that her disability carrier may close the claim without more documentation. Without her familiar warning, she abruptly stops speaking. Her eyes remain open, her head and eyes turn right, and her right arm becomes stiff in a sustained position. The pattern does not wax and wane, and she does not respond to her usual grounding cue. Evan has never observed this presentation, and it was not one of the events captured during monitoring. There is no fall or obstructed breathing. The event has lasted 45 seconds when the next action is considered.

The insurer’s form asks the counselor to certify that workplace harassment medically caused the disorder, that Mei is totally unable to perform any laboratory role for six months, and that she will pose no future safety risk after return. You have treated adjustment, coping, and function; you have not performed a neurological causation analysis, an independent disability evaluation, or a job-specific fitness examination.

After recovering, Mei says, “An attack after all that work means treatment failed.” Evan asks whether the new event proves that levetiracetam should be restarted. The neurologist’s taper has ended, and no other medication indication is documented. The counselor does not yet know whether this event belongs to the previously captured habitual pattern.`,
      questions: [
        {
          id: 'exam-03-mei-q8',
          questionNumber: 8,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best immediate response to the event occurring in session?',
          options: [
            'Apply the habitual functional-attack protocol because emotional activation and absence of injury make a second seizure disorder unlikely',
            'Protect and time the event, use general seizure first aid, and activate urgent medical evaluation because this is new, uncaptured semiology',
            'Use the familiar grounding sequence to test whether responsiveness returns, then report the outcome to neurology after the session',
            'Observe without intervention unless the event lasts five minutes, since premature emergency activation can reinforce functional attacks',
          ],
          correctAnswer: 1,
          explanation: 'A confirmed functional diagnosis does not classify every future spell. Abrupt onset, sustained lateralized posturing, absent usual warning, and lack of waxing and waning make this a new event type outside Mei’s established plan. The counselor should protect her from injury, time and observe the event, avoid restraint or objects in the mouth, and activate urgent medical assessment rather than diagnose it. Emotional context does not prove that the new event is functional, and absence of current injury does not remove the need to evaluate new semiology. Grounding should not become a diagnostic test. Waiting solely for a five-minute threshold risks diagnostic overshadowing and ignores the neurologist’s need to assess possible co-occurring epilepsy or another medical cause.',
        },
        {
          id: 'exam-03-mei-q9',
          questionNumber: 9,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor respond to the disability carrier’s form?',
          options: [
            'Certify current total disability based on attack recurrence, while asking neurology to complete the causation and future-risk portions of the form',
            'Decline all documentation because disability decisions are forensic and any treating-clinician opinion would create an impermissible dual relationship',
            'Complete the form jointly with Mei so her report, the counselor’s observations, and neurology’s findings are equally represented in each conclusion',
            'With authorization, document treatment and observed function within competence, state evidentiary limits, and refer causation, disability, and fitness conclusions appropriately',
          ],
          correctAnswer: 3,
          explanation: 'The counselor may provide accurate, authorized treatment and functional information without converting the therapy relationship into an unsupported disability or occupational evaluation. The requested causal, total-incapacity, and future-safety conclusions require methods, records, and expertise beyond the work completed. These limits should be explicit, and appropriate neurological, occupational, or independent evaluators should address the remaining questions. Recurrence alone does not establish total disability, especially when graded work has succeeded. Refusing every document is unnecessarily absolute and may withhold useful factual information. Collaboration with Mei supports accuracy and informed consent, but client participation cannot make each requested conclusion evidence based or within the counselor’s competence.',
        },
        {
          id: 'exam-03-mei-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best response to Mei’s conclusion that the new event means treatment failed and Evan’s medication request?',
          options: [
            'Validate the fear, avoid classifying the new event, preserve the broader functional gains, and coordinate classification and medication questions with neurology',
            'Explain that symptom recurrence can occur during FND recovery and reassure them that restarting antiseizure medication would be premature',
            'Suspend work and intensify functional-seizure treatment until medical reassessment confirms that the event did not reflect therapeutic regression',
            'Separate the new medical event from counseling progress and avoid processing it further so uncertainty does not strengthen symptom monitoring',
          ],
          correctAnswer: 0,
          explanation: 'The new event requires medical classification before it is called functional recurrence, epilepsy, or treatment failure. The counselor can validate fear, preserve the documented gains in independence and habitual-attack reduction, record observations, and coordinate promptly with neurology. Medication decisions remain medical and should not be settled through reassurance or by the event’s emotional context. Automatically suspending all work or intensifying functional treatment assumes a classification that has not been established; activity restrictions should follow updated medical and occupational guidance. Avoiding the event entirely is also unhelpful because accurate description, emotional processing, and care coordination matter. Diagnostic uncertainty can be held without catastrophizing or false reassurance.',
        },
      ],
    },
  ],
};
