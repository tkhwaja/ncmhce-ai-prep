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
          id: `rafael-q1`,
          questionNumber: 1,
          domain: `Intake/assessment/diagnosis`,
          stem: `Which feature most strongly supports Hoarding Disorder in Rafael’s case?`,
          options: [
            `He grew up poor and values reuse`,
            `He dislikes his daughter entering his apartment without permission`,
            `Difficulty discarding and excessive acquisition have compromised living spaces, hygiene routines, exits, and family contact`,
            `He is grieving his wife and keeps some of her belongings`,
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
          id: `rafael-q6`,
          questionNumber: 6,
          domain: `Counseling skills and interventions`,
          stem: `Rafael brings a rusted wrench, old utility bills, and his wife’s chipped mug to session. What is the most clinically useful way to use this material?`,
          options: [
            `Ask him to choose one item to discard immediately as exposure`,
            `Explore the different meanings attached to the items and begin developing sorting categories and decision rules`,
            `Point out that none of the items are currently useful`,
            `Avoid discussing the items because it reinforces attachment`,
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
          id: `rafael-q11`,
          questionNumber: 11,
          domain: `Treatment planning`,
          stem: `Safety hazards have improved and acquisition has decreased, but his wife’s belongings remain mostly untouched. What is the best next treatment phase?`,
          options: [
            `Move directly to discarding grief-related items because safety areas are improved`,
            `Gradually address sentimental possessions while maintaining acquisition and safety gains`,
            `End treatment because the landlord granted an extension`,
            `Shift entirely to grief counseling and stop hoarding-specific interventions`,
      ],
    },
  ],
};
