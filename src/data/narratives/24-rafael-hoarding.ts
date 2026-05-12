import type { Narrative } from "./types";

export const rafaelHoarding: Narrative = {
  id: "24-rafael-hoarding",
  title: "Rafael — Hoarding Disorder",
  category: "Hoarding Disorder",
  difficulty: "Advanced",
  recommendedTimeBySectionMinutes: [8, 8, 8],

  clientInfo: {
    age: 67,
    sexAssignedAtBirth: "Male",
    genderIdentity: "Cisgender Male",
    pronouns: "He/him",
    sexualOrientation: "Heterosexual",
    raceEthnicity: "Latino (Puerto Rican, second generation)",
    relationshipStatus: "Widowed",
    setting: "Community mental health agency with older adult services",
    payment: "Medicare",
    typeOfCounseling: "Individual, with optional family collateral involvement",
    provisionalDiagnosis: "Hoarding Disorder, with excessive acquisition, with poor insight: F42.3",
  },

  presentingProblem: `You are a licensed mental health counselor at a community mental health agency that provides outpatient services for older adults. Your client was referred by his primary care physician after his adult daughter accompanied him to a medical appointment and expressed concern about the condition of his apartment. The client agreed to the referral reluctantly. He stated, "My daughter thinks I'm crazy because I don't throw away good things. I'm not crazy. I grew up poor. I know what things are worth."

The client is a 67-year-old widowed man who lives alone in a rent-stabilized apartment where he has lived for 38 years. His wife died six years ago after a stroke. He reported that the apartment became "messier" after her death, but he denied that the situation is as serious as his daughter describes. He stated, "It's organized in my head. Other people just don't know where things go." His daughter reported to the physician that narrow paths are the only way to move through the apartment, that the kitchen table and counters are unusable, and that the bathtub is filled with boxes, folded clothing, old newspapers, and plastic storage bins. The client confirmed that he has been bathing with a basin at the bathroom sink for several months because "the tub became storage temporarily."

The client reported difficulty discarding items including newspapers, tools, broken appliances, food containers, mail, clothing, his wife's belongings, and objects found on the street or given away by neighbors. He stated, "You never know when something will be useful. People throw away perfectly good things because they have no imagination." He also reported buying items from discount stores, estate sales, and online marketplace listings. He estimated he spends $200 to $300 per month on "supplies and useful things," though his daughter believes it is more.

He described intense distress when others attempt to remove items. Last month, his daughter threw away several bags of expired food while he was at a doctor's appointment. He stated, "I couldn't sleep for three nights. I kept thinking about what else she touched. It felt like somebody had gone through my pockets." Since then, he has stopped giving her a spare key. He acknowledged that his daughter is worried but said, "She sees trash. I see history, money, memory, and possibility."

The referral became urgent after the building superintendent entered the apartment to address a leak from the unit above and reported "excessive clutter and blocked access" to management. The client received a notice requiring him to clear access to windows, the stove, and the front door within 30 days or face further action. He brought the notice to session folded in his shirt pocket and stated, "They're trying to push old Puerto Ricans out of this building so they can raise the rent. That's what this is really about."

He denied suicidal ideation, homicidal ideation, self-harm, psychosis, mania, and substance misuse. He drinks one beer occasionally during baseball games. He denied memory problems, though he admitted he sometimes loses important documents in the apartment. His daughter reported concern that he has fallen twice in the past year while stepping over clutter; he minimized this and said, "Everybody falls sometimes. I'm not made of glass." He is seeking counseling primarily because his daughter said she would stop bringing his grandchildren to visit unless he speaks with someone. He stated, "I don't want to lose my grandchildren over boxes."`,

  mentalStatusObservation: `Your client presented in a clean guayabera shirt, pressed trousers, and a baseball cap. Grooming and hygiene were appropriate. He was alert and oriented to person, place, time, and situation. Eye contact was direct and at times challenging, especially when discussing his daughter's concerns. Speech was normal in rate and volume, with moments of humor and defensiveness. Mood was reported as "annoyed but here." Affect was constricted initially but became warmer when discussing his grandchildren and his late wife.

Psychomotor activity was calm. Thought processes were linear and goal-directed. Thought content was notable for minimization of the severity of clutter, attachment to possessions, fear of waste, suspicion of landlord motives, grief-related meaning attached to his wife's belongings, and resentment toward family intrusion. His suspicion about building management appeared grounded in plausible housing stress and gentrification concerns rather than delusional conviction; he could consider multiple explanations when asked. There was no evidence of hallucinations, formal thought disorder, mania, or intoxication. He denied suicidal and homicidal ideation. Insight was limited regarding the functional impairment and safety risk created by the clutter. Judgment was mixed: intact in many daily decisions but impaired around acquiring and discarding possessions. He denied current substance misuse. He reported hypertension and type 2 diabetes managed by his primary care physician.`,

  familyHistory: `The client was born and raised in the Bronx. His parents migrated from Puerto Rico before he was born and worked in factory and maintenance jobs. He described childhood poverty and frequent moves before the family stabilized in public housing when he was 11. He stated, "We saved everything because replacing things wasn't an option." His father was emotionally distant and drank heavily but remained employed. His mother was described as anxious and "always collecting things for somebody who might need them." No formal family psychiatric diagnoses are known. The client was married for 39 years. His wife was a school aide and, according to the client, "the one who kept the house moving." He has one adult daughter, age 41, and two grandchildren, ages 8 and 11, whom he loves deeply. His daughter is his primary support but their relationship has become strained over the apartment.`,

  workHistory: `The client completed high school and worked for the city sanitation department for 31 years before retiring at age 60. He described pride in his work and stated that it taught him "how wasteful people are." He often brought home items he believed could be repaired, donated, or reused. After retirement and especially after his wife's death, the amount of time he spent sorting, collecting, and looking for useful items increased. He receives a pension and Social Security. He is financially stable but spends more on household items and storage containers than he initially acknowledged. He denied gambling or other impulsive spending patterns.`,

  intakeSessionSummary: `You completed an intake interview and administered the Saving Inventory-Revised (SI-R), which yielded clinically significant elevations across clutter, difficulty discarding, and acquisition. You administered the PHQ-9 (score: 8, mild depressive symptoms), the GAD-7 (score: 7, mild anxiety), and completed a brief cognitive screen because of the client's age and functional concerns; his score did not suggest major cognitive impairment, though you noted that cognitive concerns should continue to be monitored and coordinated with primary care as needed. You conducted a risk assessment; he denied suicidal or homicidal ideation, self-harm, and violence.

You discussed Hoarding Disorder as a provisional diagnosis, emphasizing that it is not a character flaw or laziness. You provided psychoeducation that hoarding involves persistent difficulty discarding possessions regardless of actual value, distress associated with discarding, clutter that compromises living spaces, and impairment or safety risk. The client was skeptical but listened. You used motivational interviewing to explore what matters most to him, and he identified maintaining contact with his grandchildren, staying in his apartment, and preserving meaningful memories of his wife. You discussed that treatment would not begin by forcing him to discard everything, but by collaboratively improving safety, reducing acquisition, and helping him make decisions consistent with his own values. He agreed to return weekly for at least four sessions.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "rafael-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: "Which feature most clearly supports Hoarding Disorder in this case?",
          options: [
            "He has grief related to his wife's death",
            "He keeps items because they may be useful",
            "Persistent difficulty discarding possessions has led to cluttered living spaces, impairment, and safety risk",
            "He dislikes his daughter entering the apartment",
          ],
          correctAnswer: 2,
          explanation:
            "Hoarding Disorder is characterized by persistent difficulty discarding possessions, distress associated with discarding, clutter that compromises living areas, and clinically significant impairment or safety risk. Grief, saving useful items, and family conflict may be part of the presentation but do not alone establish the diagnosis.",
        },
        {
          id: "rafael-q2",
          questionNumber: 2,
          domain: "Intake/assessment/diagnosis",
          stem: "Which differential diagnosis is most important to consider given the client's age and apartment conditions?",
          options: [
            "Major Neurocognitive Disorder",
            "Dissociative Identity Disorder",
            "Anorexia Nervosa",
            "Panic Disorder",
          ],
          correctAnswer: 0,
          explanation:
            "In an older adult with significant functional impairment at home, cognitive decline should be screened and monitored. The case does not suggest dissociative identity disorder, anorexia nervosa, or panic disorder as central differentials.",
        },
        {
          id: "rafael-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: "The client says, \"She sees trash. I see history, money, memory, and possibility.\" What is the most therapeutic response?",
          options: [
            "Most of those items are probably trash though.",
            "Your daughter is only trying to protect you.",
            "Help me understand what those items represent to you before we talk about changing anything.",
            "That kind of thinking is why the apartment became unsafe.",
          ],
          correctAnswer: 2,
          explanation:
            "The response communicates respect and curiosity about the meanings attached to possessions. Direct correction, siding with the daughter, or confrontation would likely increase defensiveness and reduce engagement.",
        },
        {
          id: "rafael-q4",
          questionNumber: 4,
          domain: "Treatment planning",
          stem: "What is the most appropriate initial treatment focus?",
          options: [
            "Have his daughter remove items while he is out",
            "Begin with safety priorities, motivational interviewing, reduced acquisition, and collaborative decision-making",
            "Focus only on grief counseling",
            "Tell him he must clear the entire apartment within 30 days",
          ],
          correctAnswer: 1,
          explanation:
            "Early treatment should prioritize safety and engagement while using motivational interviewing and CBT-based strategies for hoarding. Forced cleanouts or ultimatums often increase distress and relapse, while grief work alone would not address the hoarding behaviors.",
        },
        {
          id: "rafael-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: "The daughter calls asking whether her father has \"admitted he has hoarding.\" What is the most appropriate response?",
          options: [
            "Explain the diagnosis because she is his daughter",
            "Decline to disclose information without written authorization while inviting her to share concerns",
            "Tell her he has poor insight but is attending",
            "Confirm only whether he attended the session",
          ],
          correctAnswer: 1,
          explanation:
            "Family members do not have automatic access to treatment information. The counselor may listen to collateral concerns without disclosing protected information unless the client has provided appropriate authorization.",
        },
      ],
    },
    {
      sessionLabel: "Fifth session",
      sectionNarrative: `Your client arrived for his fifth session carrying a small paper bag containing three items: a rusted wrench, a stack of old utility bills, and a chipped ceramic mug. He said, "I brought examples because people keep acting like all this is simple." He explained that the wrench belonged to his father, the bills prove how long he has lived in the apartment, and the mug was one his wife used after her stroke because it was easier for her to grip.

He has completed two home-based assignments. First, he took photos of the front door area, stove area, and path from the bedroom to the bathroom. He was visibly embarrassed while showing them but stated, "I can see why the fire people would complain about the door." Second, he agreed not to bring home any new items from the street for one week. He succeeded for five days, then brought home a small bookshelf left outside his building. He stated, "It was solid wood. I couldn't leave it there to rot."

The building management deadline is now 10 days away. His daughter wants to hire a cleaning company, but he fears they will "throw away pieces of my life." He also reported that his grandchildren have not visited in two months because his daughter says the apartment is unsafe. He became tearful for the first time and said, "My grandson asked if I love the boxes more than him. That one hurt."

You ask about safety. He acknowledges that the front door does not open fully, one window is blocked, and he has not used the stove in months because items are stacked on it. He has been eating microwaved meals and takeout. He denied current falls since intake but admitted he sometimes feels unsteady when stepping over items at night. He asked, "Can you write a letter telling the landlord I'm in treatment so they back off?"`,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "rafael-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: "The client brings three possessions to explain their meaning. What is the most clinically useful response?",
          options: [
            "Sort the items into keep and discard piles immediately",
            "Explore the meaning of each item and use this to introduce decision-making categories",
            "Tell him sentimental attachment is maintaining the disorder",
            "Avoid discussing the items because it reinforces hoarding",
          ],
          correctAnswer: 1,
          explanation:
            "Exploring item meaning helps build alliance and supports collaborative decision-making. The goal is not immediate forced discarding, but helping the client differentiate categories such as sentimental value, practical use, legal importance, and clutter risk.",
        },
        {
          id: "rafael-q7",
          questionNumber: 7,
          domain: "Treatment planning",
          stem: "Given the blocked front door, blocked window, and unusable stove, what should be prioritized?",
          options: [
            "Aesthetic organization of the living room",
            "Immediate safety access to exits, stove, and pathways",
            "Sorting sentimental items first",
            "Exploring childhood poverty before any home changes",
          ],
          correctAnswer: 1,
          explanation:
            "Safety priorities such as exits, stove access, and clear walking paths should come first. Treatment can still be collaborative, but fire, fall, and emergency-access risks require focused attention.",
        },
        {
          id: "rafael-q8",
          questionNumber: 8,
          domain: "Core counseling attributes",
          stem: "The client says his grandson asked whether he loves the boxes more than him. What is the most therapeutic response?",
          options: [
            "That should motivate you to clean faster.",
            "Children often say dramatic things.",
            "That sounds painful because your love for him is not what is in question, but the clutter is affecting access to him.",
            "Your daughter should not have allowed him to say that.",
          ],
          correctAnswer: 2,
          explanation:
            "The response validates the pain while gently linking the client's values to the consequences of clutter. It avoids shame, minimization, and blaming the family.",
        },
        {
          id: "rafael-q9",
          questionNumber: 9,
          domain: "Counseling skills and interventions",
          stem: "He brought home a bookshelf after five days of no acquisition. What is the best clinical response?",
          options: [
            "Frame it as total failure and restart treatment",
            "Analyze the acquisition chain and identify decision points for next time",
            "Tell his daughter to monitor him more closely",
            "Avoid discussing it to prevent shame",
          ],
          correctAnswer: 1,
          explanation:
            "A lapse in acquisition is an opportunity for chain analysis and skill-building. Examining triggers, thoughts, emotions, and decision points is more useful than shame, surveillance, or avoidance.",
        },
        {
          id: "rafael-q10",
          questionNumber: 10,
          domain: "Professional practice and ethics",
          stem: "The client asks for a letter telling the landlord to \"back off.\" What is the most appropriate response?",
          options: [
            "Write the letter exactly as requested",
            "Refuse all documentation because housing is legal, not clinical",
            "Discuss what limited factual documentation you can ethically provide with consent, avoiding legal advocacy beyond your role",
            "Call the landlord directly to negotiate",
          ],
          correctAnswer: 2,
          explanation:
            "The counselor may provide limited factual documentation, such as attendance or treatment engagement, with consent. The counselor should avoid legal advocacy, guarantees, or statements outside professional knowledge.",
        },
      ],
    },
    {
      sessionLabel: "Twelfth session",
      sectionNarrative: `Your client arrived for his twelfth session appearing tired but less defensive. With his written consent, his daughter attended one collateral session last month. The focus was not for her to force a cleanout, but to identify safety priorities and agree on a respectful support plan. The client allowed a specialized clutter-reduction service, experienced with hoarding, to help clear the front door, stove, bathroom entrance, and one window. He personally chose which items from those areas would be saved, donated, recycled, or discarded.

His SI-R scores have improved modestly, particularly on acquisition. He has reduced bringing home street items from several times per week to once in the past month. He still struggles with mail, newspapers, tools, and his wife's belongings. He stated, "I can do the obvious stuff now. The hard things are the things that still feel like people."

The building management completed a follow-up inspection and granted a 60-day extension because the most urgent safety hazards were addressed. His daughter has resumed bringing the grandchildren for short visits, though only in the cleared kitchen area. He stated, "My granddaughter sat at the table and did homework. That table hasn't been a table in years."

A new issue emerged. His daughter wants him to move to a smaller senior apartment closer to her. He is angry and hurt, stating, "First they take my things, then my home." He also disclosed that he has been avoiding the box containing his wife's scarves and medical supplies from after her stroke. He said, "That box is where I stop. Everything else I can argue with. That box shuts me up."

He asked, "What if getting better means losing the only proof that my life happened?"`,
      recommendedTimeMinutes: 8,
      questions: [
        {
          id: "rafael-q11",
          questionNumber: 11,
          domain: "Treatment planning",
          stem: "The client has reduced safety hazards and acquisition but remains attached to his wife's belongings. What is the best next phase of treatment?",
          options: [
            "Shift to deeper work on sentimental items while maintaining safety and acquisition goals",
            "Stop treatment because the landlord extension was granted",
            "Require disposal of all grief-related possessions",
            "Focus only on moving to senior housing",
          ],
          correctAnswer: 0,
          explanation:
            "Once urgent safety risks are reduced, treatment can carefully address sentimental items while maintaining gains in acquisition and safety. Forced disposal or premature termination would not match the client's ongoing clinical needs.",
        },
        {
          id: "rafael-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: "The client says the box of his wife's scarves and medical supplies \"shuts me up.\" What is the most therapeutic response?",
          options: [
            "That box should be discarded last.",
            "Let's slow down and understand what that box holds before deciding what happens to it.",
            "Keeping medical supplies after death is unhealthy.",
            "You have avoided that box long enough.",
          ],
          correctAnswer: 1,
          explanation:
            "The response respects the emotional intensity of the item category and avoids rushing the client into discarding. Hoarding treatment often requires pacing and careful meaning-making around highly sentimental possessions.",
        },
        {
          id: "rafael-q13",
          questionNumber: 13,
          domain: "Core counseling attributes",
          stem: "He asks, \"What if getting better means losing the only proof that my life happened?\" What is the most therapeutic response?",
          options: [
            "Your memories are proof enough.",
            "That fear makes sense; let's explore ways to preserve memory without letting possessions take over your home.",
            "That is the hoarding disorder talking.",
            "Your family is more important than objects.",
          ],
          correctAnswer: 1,
          explanation:
            "The response validates the existential fear while opening a path toward adaptive memory preservation. Reassurance, labeling, or value confrontation would likely increase shame and resistance.",
        },
        {
          id: "rafael-q14",
          questionNumber: 14,
          domain: "Professional practice and ethics",
          stem: "The daughter asks you to tell him he must move to senior housing. What is the most appropriate response?",
          options: [
            "Agree because the daughter's plan is safer",
            "Tell the client he must move if he wants grandchildren visits",
            "Clarify that housing decisions belong to the client unless capacity or immediate safety concerns require further action",
            "Refuse to discuss housing in therapy",
          ],
          correctAnswer: 2,
          explanation:
            "The client retains autonomy over housing decisions unless there is evidence of impaired capacity or immediate danger requiring intervention. The counselor can facilitate discussion and planning but should not coerce the client on the daughter's behalf.",
        },
      ],
    },
  ],
};
