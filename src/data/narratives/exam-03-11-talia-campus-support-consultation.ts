import type { Narrative } from "./types";

export const taliaCampusSupportConsultationNarrative: Narrative = {
  id: 'exam-03-11-talia-campus-support-consultation',
  title: 'Talia — Campus Support Consultation',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [8, 7, 7],

  clientInfo: {
    age: 20,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender woman',
    pronouns: 'She/her',
    sexualOrientation: 'Bisexual',
    raceEthnicity: 'Black and Filipina American',
    relationshipStatus: 'Single',
    setting: 'Confidential university counseling center',
    payment: 'Covered by student health services',
    typeOfCounseling: 'Individual counseling with client-authorized medical, advocacy, and academic coordination',
    provisionalDiagnosis: 'Acute Stress Disorder: F43.0; later Posttraumatic Stress Disorder with dissociative symptoms: F43.10',
  },

  presentingProblem: `Talia M., a 20-year-old engineering student, requests an urgent appointment nine days after nonconsensual sexual contact by a student acquaintance following an off-campus party. She drank alcohol voluntarily and remembers portions of the evening: saying she wanted to leave, feeling unable to move, telling the student to stop, and later finding herself alone. Other portions remain unclear. She worries that the gaps mean she cannot trust her own account. A friend reports that Talia appeared impaired and that the acquaintance guided her away despite the friend's attempt to intervene.

Since the event, Talia has experienced involuntary images, two nightmares, and one episode in which a familiar cologne made the residence-hall corridor feel as if the event were happening again. She avoids the building where the acquaintance lives, has stopped answering friends from the party, and cannot enter a shared laboratory without scanning exits. She feels detached, describes the campus as unreal, and sometimes observes herself “from above.” She cannot recall one segment of the event despite trying. Sleep is fragmented; concentration, startle response, irritability, and hypervigilance have worsened. She missed four classes and one laboratory assignment.

Talia used cannabis about twice monthly before the event and now uses it most nights to sleep. She drank heavily once afterward to stop thinking and had a panic-like episode the next morning. Intrusions, avoidance, dissociation, and vigilance occur during sober daytime hours. She denies other drug use, mania, sustained psychosis, or a prior trauma-related disorder. She has no known head injury from the event but has not received medical evaluation.

Talia told a residence adviser because she wanted the acquaintance moved from her building. The adviser explained that the role required institutional notification and submitted a report. A Title IX email arrived the next morning. Talia felt betrayed and has not replied. She wants the student kept away from her classes but does not want police contact, a formal grievance, or her parents informed. She has not sought a sexual-assault medical examination because she assumes nine days is “too late for anything useful” and fears being pressured to collect evidence.

Talia says she sometimes wishes she could sleep until the semester is over. Last night she briefly thought, “It would be easier if I did not wake up,” but denies intent, planning, preparatory behavior, or a suicide attempt history. The acquaintance has not made an explicit threat, though Talia saw him outside a dining hall and left through a service exit. Immediate suicide risk, ongoing interpersonal danger, access to means, supports, and ability to remain safe still require direct assessment.` ,

  mentalStatusObservation: `Talia arrives early and chooses a chair facing the door. She is alert and fully oriented. Speech is quiet but coherent. Mood is “numb and terrified”; affect is constricted with brief tearfulness. Thought process is linear. She pauses and looks distant when footsteps sound in the hallway, then says the room felt far away. There is no fixed delusion, mania, or sustained hallucination. Concentration is reduced. Insight is good regarding change from baseline, but self-blame distorts her interpretation of alcohol use and freezing. Judgment is intact enough to seek help. Passive death-related thinking requires fuller assessment.` ,

  familyHistory: `Talia's parents live in another state, and she has not told them. She expects her mother to focus on drinking and her father to demand that she leave school. Talia recalls family messages about protecting reputation and handling problems privately. She also fears that institutional staff will stereotype a bisexual Black and Filipina student as reckless or unreliable. An aunt has previously responded supportively to Talia's sexual orientation and could be a resource, but Talia is not ready to contact her.

Talia has two close friends. One believes she should report immediately; the other will follow Talia's lead. The counselor must explore culture, identity, family meaning, and community support without treating any group value as inherently protective or harmful.` ,

  workHistory: `Talia is a junior with a merit scholarship and previously strong attendance. She works eight hours weekly in an engineering laboratory where the acquaintance also has access. Missed work and coursework now threaten a competitive placement, but no disciplinary action has occurred. She wants academic and laboratory safety adjustments without disclosing clinical details to faculty.` ,

  intakeSessionSummary: `The first meeting should emphasize present safety, suicide assessment, stabilization, informed choice, medical and advocacy options, symptom timing, functional impact, substances, and differential diagnosis. A detailed forensic reconstruction is not required for counseling assessment and could increase distress. The counselor must not decide whether Talia should report, tell her that medical care is pointless, or make medication and forensic-evidence decisions outside scope.

For this case, university policy designates the counseling center and campus sexual-assault advocate as confidential resources. The counselor does not disclose identifying information to Title IX, faculty, family, or police without Talia's authorization unless a valid legal demand survives privilege review, abuse of a child or vulnerable adult is suspected, or a serious and imminent danger activates an applicable exception. State law does not require police reporting of a competent adult's past sexual assault. Residence advisers are institutional reporters. The Title IX coordinator must offer supportive measures whether or not Talia files a formal complaint; participation in a police process is not required.` ,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-talia-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnostic assessment approach is most appropriate nine days after the event?',
          options: [
            'Diagnose PTSD from the four cluster thresholds and use the nine-day duration only to specify acute onset',
            'Assess trauma exposure, the three-day-to-one-month window, total acute-stress symptoms, impairment, dissociation, safety, functioning, substances, medical factors, prior history, and competing diagnoses over time',
            'Diagnose Adjustment Disorder provisionally until one month passes, because neither Acute Stress Disorder nor PTSD can be established while alcohol-related memory gaps remain',
            'Delay trauma diagnosis until Talia completes medical and institutional processes, then determine whether persistent symptoms are better explained by PTSD, substance effects, or campus conflict',
          ],
          correctAnswer: 1,
          explanation: 'At nine days, Acute Stress Disorder is available if trauma exposure, at least nine qualifying symptoms, three-day-to-one-month duration, distress or impairment, and exclusions are established. Assessment should also cover safety, functioning, dissociation, substances, prior conditions, medical issues, and alternatives. PTSD requires duration beyond one month, so meeting its symptom clusters now is insufficient. Adjustment Disorder is not a holding diagnosis when another syndrome fits. Medical or reporting decisions are not prerequisites for a valid clinical assessment.',
        },
        {
          id: 'exam-03-talia-q2',
          questionNumber: 2,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best immediate response during the first meeting?',
          options: [
            'Obtain a detailed chronology while memory is fresh, then assess suicide risk and identify discrepancies that could affect reporting or diagnosis',
            'Arrange a forensic examination and Title IX appointment before beginning psychotherapy, because preserving medical and institutional options takes priority over temporary emotional discomfort',
            'Use grounding and reassurance, defer suicide questions until Talia is calmer, and recommend avoiding the acquaintance and all party-related reminders through the first month',
            'Assess suicide and current danger, orient Talia, identify supports, and offer choice-based medical, advocacy, reporting, and safety options without a detailed retelling',
          ],
          correctAnswer: 3,
          explanation: 'Immediate work integrates direct risk and ongoing-threat assessment with present-focused stabilization, support, and accurate options. A trained medical provider can still evaluate health needs and explain what remains time sensitive; the counselor should facilitate access without ordering an examination or evidence collection. Detailed reconstruction is unnecessary and may feel interrogative. Suicide assessment should not wait for complete calm. Short-term pacing may reduce overwhelm, but prescribing broad avoidance can strengthen the cycle that maintains trauma symptoms.',
        },
        {
          id: 'exam-03-talia-q3',
          questionNumber: 3,
          domain: 'Core counseling attributes',
          stem: 'Talia says telling the residence adviser was a mistake and nobody should be trusted. What is the best response?',
          options: [
            'Explain that the adviser followed policy rather than betraying her, then distinguish the counseling center so Talia does not generalize one painful interaction to every helper',
            'Agree that the institutional report removed her control and promise that nothing from counseling will ever be disclosed, because a categorical assurance is needed to restore safety',
            'Validate the loss of control, clarify the counselor’s actual limits before further disclosure, and ask what choices, pace, and forms of support would feel safest now',
            'Invite Talia to postpone discussing the event until trust develops, while focusing sessions on academic functioning so the counselor does not reproduce institutional pressure',
          ],
          correctAnswer: 2,
          explanation: 'The response begins with the impact of lost control and replaces vague reassurance with transparent limits, collaboration, and choice. This is trauma informed without endorsing the conclusion that nobody is trustworthy. Defending the adviser before addressing harm centers policy over Talia. Absolute confidentiality cannot be promised. Postponing any trauma discussion may be a consensual short-term choice, but preemptively redirecting treatment avoids rather than negotiates what Talia wants and needs.',
        },
        {
          id: 'exam-03-talia-q4',
          questionNumber: 4,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor handle Talia’s wish for academic protection without another report?',
          options: [
            'Clarify the confidential role and separate records, obtain authorization for coordination, and help Talia consider supportive measures through confidential resources without requiring a formal complaint',
            'Send a minimum-necessary clinical summary to the Title IX coordinator because the university already has actual notice and cannot arrange meaningful safety measures without verification',
            'Ask the Title IX coordinator to close the adviser’s report and route all accommodations through disability services, preserving confidentiality by describing the condition only as anxiety',
            'Avoid campus coordination and write Talia a generic medical-absence letter, because even authorized Title IX communication may create an institutional duty to investigate against her wishes',
          ],
          correctAnswer: 0,
          explanation: 'The counselor should explain what remains confidential and what the adviser’s separate report already triggered. With Talia’s authorization, a confidential advocate or counselor can help her explore supportive measures; a formal complaint or police report is not required by the supplied policy. Existing notice does not open counseling records or authorize a summary. The counselor cannot order Title IX to erase a report or disguise clinical information. Avoiding all coordination unnecessarily restricts informed options and may not secure adequate protection.',
        },
      ],
    },
    {
      sessionLabel: 'Fourth week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Talia chooses an appointment with a specialized community sexual-assault clinic accompanied by a confidential advocate. The clinician explains medical options and their timing, completes the care Talia accepts, and arranges follow-up testing. Talia declines forensic evidence collection and police contact. The counselor receives only information Talia authorizes.

Through the advocate, Talia requests a laboratory schedule change, a no-contact directive, and flexibility for missed work. She does not file a formal complaint. The Title IX coordinator provides supportive measures and explains their limits without requiring police participation. Faculty receive only the information needed to implement adjustments.

At twenty-four days post-event, a structured assessment establishes eleven qualifying Acute Stress Disorder symptoms: intrusive memories, nightmares, a flashback, persistent negative mood, altered sense of reality, inability to recall part of the event, avoidance of memories, avoidance of external reminders, sleep disturbance, hypervigilance, and exaggerated startle. Symptoms produce marked impairment. They occur while sober and are not better explained by the alcohol exposure, cannabis use, psychosis, head injury, or another disorder.

During a session, a man's loud voice in the corridor causes Talia to become motionless. Her gaze fixes beyond the counselor, and she says the office is shrinking and her hands do not belong to her. She can hear the counselor but responds slowly. She has not asked to recount the assault and says unexpected touch would make the episode worse.

Talia now uses high-potency cannabis nightly and drank before two daytime classes. She reports short-term relief followed by worse concentration, increased unreality, and missed work. She has tried unsuccessfully to reduce cannabis on three nights but does not yet show a sufficient established pattern for a substance-use diagnosis. She fears the counselor will require abstinence before trauma treatment.` ,
      questions: [
        {
          id: 'exam-03-talia-q5',
          questionNumber: 5,
          domain: 'Counseling skills and interventions',
          stem: 'What should the counselor do when Talia becomes detached and motionless in session?',
          options: [
            'Ask Talia to describe the assault image causing the episode so the memory becomes organized, stopping only if she loses awareness of the counselor’s voice',
            'Move closer and place a hand on the chair to provide physical orientation, then use rapid breathing exercises to interrupt the freeze response before exploring meaning',
            'Use a calm voice, obtain permission for present-focused sensory grounding, offer simple choices, monitor orientation and safety, and postpone trauma processing until she is reoriented',
            'End the session and arrange psychiatric evaluation because depersonalization, derealization, and altered visual perception cannot be safely differentiated from psychosis in outpatient counseling',
          ],
          correctAnswer: 2,
          explanation: 'The counselor should reduce stimulation, orient Talia to current time and place, seek permission before each grounding step, offer manageable choices, and monitor whether she can regain present awareness. This restores control and stays within her tolerance. Pressing for memory content during dissociation can intensify disconnection. Uninvited proximity or touch may retraumatize, and rapid breathing can worsen arousal. Dissociation requires assessment, but the preserved connection, trigger, and course do not automatically indicate psychosis or require ending outpatient care.',
        },
        {
          id: 'exam-03-talia-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which treatment plan best fits Talia’s confirmed presentation and preferences?',
          options: [
            'Use supportive counseling and symptom monitoring until one month passes, then begin trauma-focused work only if a PTSD diagnosis replaces the acute condition',
            'Develop a collaborative phased plan combining safety, psychoeducation, sleep and grounding skills, multi-session trauma-focused CBT when tolerable, substance-risk work, coordinated supports, and monitoring',
            'Conduct a single structured trauma debriefing before avoidance consolidates, followed by weekly exposure assignments that Talia completes regardless of temporary distress or reporting decisions',
            'Prioritize cannabis and alcohol abstinence, academic stabilization, and complete memory recovery before trauma treatment so substance effects and incomplete recall do not compromise exposure work',
          ],
          correctAnswer: 1,
          explanation: 'Talia has a diagnosed, impairing acute syndrome and is open to treatment; therapy need not wait for PTSD. A collaborative plan can begin with safety, psychoeducation, regulation, sleep, and practical supports, then use multi-session trauma-focused cognitive and exposure elements at a tolerable pace while addressing substance-related risk. A single compulsory debriefing is unsupported and removes control. Abstinence, perfect academic stability, and complete memory are not prerequisites; substance use should be integrated rather than used to postpone trauma care.',
        },
        {
          id: 'exam-03-talia-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'How should the counselor address Talia’s increased cannabis and alcohol use?',
          options: [
            'Diagnose Cannabis Use Disorder provisionally from unsuccessful reduction and role impairment, then suspend trauma exposure until a substance specialist documents early remission',
            'Normalize temporary self-medication after assault and focus on safer settings for use, because confronting coping behavior before trust is secure can reproduce blame and increase dropout',
            'Require a written abstinence agreement only for days involving trauma work, allowing use at other times so the counselor can distinguish substance effects from dissociation during sessions',
            'Use motivational interviewing to examine relief and costs, assess safety and emerging criteria, develop harm-reduction or change goals, and integrate alternative regulation skills into trauma treatment',
          ],
          correctAnswer: 3,
          explanation: 'Motivational interviewing respects autonomy while examining the functional link among trauma cues, relief, rebound dissociation, impairment, and risk. Ongoing assessment can determine whether a substance-use disorder emerges, and collaboratively chosen harm-reduction or abstinence goals can accompany trauma treatment. Current information does not yet establish the full cannabis diagnosis, and treatment need not be suspended. Normalization without change work minimizes harm. A counselor-imposed, session-specific abstinence contract is coercive and clinically arbitrary.',
        },
      ],
    },
    {
      sessionLabel: 'Seventh week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Talia practices grounding, restores a more regular sleep schedule, stops drinking before class, and reduces cannabis to two nights per week. She begins consent-based cognitive work and gradual reentry into one academic building with a support person. She remains unwilling to file a formal complaint, and the counselor does not pressure her.

Talia nevertheless says, “You told me I had choices, but every choice changed something. My professor knows I needed an exception, the advocate knows, and there is a file with my name.” No one received information beyond what she authorized, yet she experiences the accommodations as another loss of privacy. She wonders whether the counselor cared more about completing a safety plan than hearing how exposed she felt.

Two days later, the acquaintance sends Talia a message stating, “Stop making trouble. I know when your night lab ends.” He also posts a photograph taken outside the engineering building that evening. His current location is unknown. Talia is scheduled to leave the laboratory alone at 10:00 p.m. She does not want the counselor to contact police automatically but asks, “Is this serious enough that I should be scared?”

At forty-seven days post-event, symptoms remain clinically significant despite reduced substance use. Talia reports recurrent involuntary memories and nightmares; avoidance of the party group and specific campus locations; persistent self-blame, diminished interest, and detachment; hypervigilance, exaggerated startle, sleep disturbance, and concentration impairment. Episodes of derealization and depersonalization continue. Symptoms have persisted beyond one month, interfere with school and relationships, and are not better explained by substances, a medical condition, or another disorder.` ,
      questions: [
        {
          id: 'exam-03-talia-q8',
          questionNumber: 8,
          domain: 'Core counseling attributes',
          stem: 'How should the counselor respond when Talia says the support process made her feel exposed?',
          options: [
            'Acknowledge that authorized actions can still feel costly, invite feedback, and collaborate on what control and privacy can be restored now where possible',
            'Reassure Talia that confidentiality was preserved because no unauthorized disclosure occurred, then review each consent so she can distinguish exposure feelings from actual privacy loss',
            'Apologize for recommending accommodations and offer to withdraw every support request, because repairing autonomy requires reversing decisions that Talia now experiences as harmful',
            'Explain that safety planning necessarily limits privacy after assault and emphasize that coordinated action prevented greater academic and interpersonal harm',
          ],
          correctAnswer: 0,
          explanation: 'Trauma-informed care recognizes that technically authorized steps can still carry emotional, relational, and practical costs. The counselor should address impact without defensiveness, seek feedback, and identify present choices about pace, goals, information flow, and supports. Reciting consent accuracy before validating the experience turns the rupture into a factual correction. Automatically withdrawing useful measures may create new harm and bypass informed reconsideration. Presenting privacy loss as a necessary price of safety repeats the coercive dynamic Talia is naming.',
        },
        {
          id: 'exam-03-talia-q9',
          questionNumber: 9,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best response to the acquaintance’s message and photograph?',
          options: [
            'Notify police, campus safety, and Title IX immediately because the schedule and photograph establish stalking and activate the imminent-danger exception',
            'Assess immediacy, location, access, prior conduct, and Talia’s plan; preserve the messages; arrange safe departure; and offer advocate, campus-safety, police, and emergency options collaboratively',
            'Advise Talia to block the account and avoid the laboratory until Title IX acts, because replying, documenting, or involving multiple systems could escalate the acquaintance’s behavior',
            'Ask Talia to authorize a counselor-mediated warning to the acquaintance, creating a record that he understood contact was unwanted before confidentiality is breached or police are involved',
          ],
          correctAnswer: 1,
          explanation: 'The message and photograph require prompt threat assessment and an immediate plan for safe departure, not a predetermined institutional response. Preserving evidence and presenting advocacy, campus, police, and emergency options support informed choice; emergency disclosure follows only if the assessed facts meet the stated serious-and-imminent threshold. Automatic multi-agency reporting skips that assessment. Blocking and avoidance alone may leave the risk unmanaged and destroy access to evidence. Counselor contact with the acquaintance creates safety, role, and confidentiality problems.',
        },
        {
          id: 'exam-03-talia-q10',
          questionNumber: 10,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnosis best reflects Talia’s presentation at forty-seven days?',
          options: [
            'Acute Stress Disorder, because the syndrome began within one month and the original diagnosis remains valid until symptoms remit or a new traumatic event occurs',
            'Adjustment Disorder with mixed anxiety and depressed mood, because campus conflict, academic disruption, and privacy consequences now maintain distress beyond the acute post-assault period despite reduced substance use',
            'Posttraumatic Stress Disorder with dissociative symptoms, because required clusters, impairment, exclusions, duration beyond one month, and continuing depersonalization and derealization during sober periods are established',
            'Cannabis-Induced Anxiety Disorder with dissociative features, because derealization persisted during frequent high-potency use and improved only after Talia substantially reduced cannabis',
          ],
          correctAnswer: 2,
          explanation: 'Beyond one month, Talia has qualifying intrusion, avoidance, negative cognition and mood, and arousal symptoms with impairment and appropriate exclusions. Continuing depersonalization and derealization support the dissociative specifier. Acute Stress Disorder is limited to three days through one month and does not persist merely because onset occurred inside that window. Adjustment Disorder is displaced by the more specific trauma syndrome. Symptoms continue during sober periods after cannabis reduction, so a cannabis-induced disorder does not best explain the course.',
        },
      ],
    },
  ],
};
