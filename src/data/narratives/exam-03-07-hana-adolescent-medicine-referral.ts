import type { Narrative } from "./types";

export const hanaAdolescentMedicineReferralNarrative: Narrative = {
  id: 'exam-03-07-hana-adolescent-medicine-referral',
  title: 'Hana — Adolescent Medicine Referral',
  category: 'Practice Exam Case',
  difficulty: 'Advanced',
  recommendedTimeBySectionMinutes: [8, 7, 7],

  clientInfo: {
    age: 17,
    sexAssignedAtBirth: 'Female',
    genderIdentity: 'Cisgender girl',
    pronouns: 'She/her',
    sexualOrientation: 'Heterosexual',
    raceEthnicity: 'Korean American',
    relationshipStatus: 'Single; lives with both parents and a younger brother',
    setting: 'Integrated outpatient behavioral-health clinic affiliated with adolescent medicine',
    payment: 'Family health-insurance plan',
    typeOfCounseling: 'Individual counseling with planned caregiver participation and multidisciplinary coordination',
    provisionalDiagnosis: 'Avoidant/Restrictive Food Intake Disorder, fear of aversive consequences presentation: F50.82',
  },

  presentingProblem: `Hana K., a 17-year-old high-school senior, is referred urgently after four months of progressively restricted eating. The change began when grilled chicken lodged briefly in her throat. Hana coughed and vomited but could speak when emergency staff arrived. A neck radiograph showed no foreign body. She now says every swallow can become “the one that does not go down.”

Hana first stopped meat, crusty bread, raw vegetables, and rice cakes, then eliminated rice, noodles, mixed textures, and anything not smooth. She relies on yogurt, broth, thin porridge, applesauce, and nutrition drinks. She takes tiny bites, chews food nearly liquid, checks her throat, and needs a parent nearby. She avoids school lunch, restaurants, and friends. Grilled-food smells produce choking images, rapid heartbeat, throat tightness, and escape urges.

Her weight decreased from 132 to 108 pounds in four months, a steep departure from her growth trajectory despite a nonexceptional population weight. Menstruation stopped two months ago. She is cold, tired, and unable to concentrate. She quit tennis after nearly fainting but wants to regain strength and return. Yesterday she became light-headed in the shower; today she drank only half a nutrition drink because it felt “too thick.”

Six days earlier her pulse was 54 and blood pressure 94/60. Today Hana is pale and reports tunnel vision on standing. Pulse is 47 supine and rises 44 beats after standing; blood pressure is 87/53 and temperature 96.0°F. The counselor does not determine medical stability.

Hana denies wanting thinness and says weight loss makes her weak and “unrecognizable.” She wants her previous weight, menstruation, and endurance. When texture seems safe, she sometimes chooses the higher-calorie drink. Her mother nevertheless reports label reading, meal photographs, oversized sweatshirts, wellness accounts, and distress over preparation changes. Hana says she checks allergens, thickness, and prescribed calories; photographs record foods swallowed safely; and sweatshirts address cold. These accounts require assessment, not automatic acceptance.

Hana reports choking images, seeks reassurance that her lips are not blue, counts about 30 chews, and replays the incident. She denies contamination, harm, taboo, or symmetry obsessions; checking outside meals; and unrelated rituals. She recognizes that near-total solid avoidance is “bigger than the first accident,” but notes that anxiety cannot prove her throat is normal.

The complaint cannot be presumed psychological. For two years, dense food occasionally required water and Hana finished meals last. She has eczema and seasonal allergies but no completed gastrointestinal or swallowing evaluation. She denies intentional vomiting, compensatory behaviors, binge eating, substance use, suicidal ideation, and self-injury.

Her mother signed consent and wants the counselor to “make her take a bite.” Hana requests private time and will not speak honestly if every fear is reported. Under the stated rules, a parent consents to ongoing outpatient care, the counselor seeks Hana's assent, and Hana receives private time. Caregivers may receive information necessary for safety and their treatment role; other psychotherapy content is protected unless disclosure is legally required. These limits must be explained first.` ,

  mentalStatusObservation: `Hana is alert, oriented, cooperative, and fatigued. She wears a loose sweatshirt; an unopened nutrition drink sits beside her. Speech is soft, coherent, and goal directed. Mood is “scared and embarrassed”; affect is anxious and constricted. She swallows repeatedly during food discussion without respiratory distress. Thought content centers on choking. There is no psychosis, mania, suicidality, or violent intent. Attention slows during the interview. She recognizes that fear has generalized but cannot identify which sensations are medically significant. Fear compromises nutritional judgment, and the physical findings require immediate medical determination.` ,

  familyHistory: `Hana lives with both parents and her 12-year-old brother. Meals are the family's main connection. Her mother, raised in South Korea, expresses care through food; Hana feels guilty when refusal appears rejecting. Her father emphasizes following medical instructions. He demands another bite while her mother blends separate meals and checks Hana's breathing. This pressure-rescue pattern increases conflict and may maintain fear, although necessary nutrition support is not merely “accommodation.”

Her brother has a peanut allergy, so the family uses labels and emergency plans; Hana tested negative. Her mother has treated panic disorder. No family eating disorder, OCD, psychosis, suicide, or substance disorder is reported. Cultural meaning, realistic allergy experience, and fear-maintaining behavior require individualized assessment.` ,

  workHistory: `Hana is an academically strong senior who played varsity tennis. Breakfast now takes over an hour; she eats alone in the health office and misses classes involving food odors. Two grades have declined. She stopped tennis after presyncope and avoids food-centered socializing. A school counselor asks about accommodations, but Hana has not authorized communication and no request is defined.` ,

  intakeSessionSummary: `The counselor explains roles, consent, assent, private time, safety-related sharing, records, and medical-scope limits. Current vital signs, orthostasis, rapid loss, presyncope, and reduced intake require a disposition decision with the medical team before routine behavioral treatment begins.

Subsequent assessment must integrate medical, nutritional, developmental, psychological, and family data. Relevant uncertainties include the function of restriction, growth, intake, menstrual change, weight-shape beliefs, compensatory behavior, obsessions, compulsions, panic, impairment, and possible dysphagia. Family participation will be transparent while preserving developmentally appropriate voice and privacy for Hana.` ,

  sections: [
    {
      sessionLabel: 'First session',
      // Recommended pacing: ~8 minutes
      sectionNarrative: '',
      questions: [
        {
          id: 'exam-03-hana-q1',
          questionNumber: 1,
          domain: 'Intake/assessment/diagnosis',
          stem: 'What is the counselor’s best immediate response to Hana’s current presentation?',
          options: [
            'Complete a brief eating-disorder and suicide assessment, offer the nutrition drink, and contact the pediatrician before Hana leaves if symptoms persist',
            'Ask the parent to take Hana home for supervised fluids and arrange a next-day pediatric visit because she remains conscious and oriented',
            'Pause counseling, keep Hana supervised, and coordinate immediate medical evaluation with capacity for laboratory testing, ECG, and hospital admission',
            'Begin a low-intensity swallowing exposure while medical staff are nearby so the counselor can distinguish panic symptoms from physiological instability',
          ],
          correctAnswer: 2,
          explanation: 'Hana has severe bradycardia, hypotension, hypothermia, an orthostatic pulse increase above the adolescent threshold, presyncope, rapid loss, and markedly reduced intake. The counselor should stop routine interviewing, maintain supervision, involve the parent in safe transfer, and obtain immediate medical assessment where admission can be considered. A nonexceptional population weight, alertness, or missing laboratory results does not make outpatient care safe. Nutrition and suicide assessment still matter, but completing them first delays medical care. Home monitoring or a next-day visit is insufficient. Exposure before clearance converts therapy into an unsafe medical test.',
        },
        {
          id: 'exam-03-hana-q2',
          questionNumber: 2,
          domain: 'Intake/assessment/diagnosis',
          stem: 'After medical safety is addressed, which assessment strategy best differentiates the leading formulations?',
          options: [
            'Integrate growth and medical findings with the function of restriction, weight-shape beliefs, swallowing history, food-bound fear, broader obsessions, and impairment',
            'Determine whether choking fear or weight-gain fear is stronger, then assign the diagnosis associated with whichever fear receives the higher rating',
            'Use successful consumption of a high-calorie drink to rule out anorexia nervosa and use persistent solid-food refusal to confirm a swallowing disorder',
            'Administer eating-disorder and obsessive-compulsive inventories and select the formulation associated with the larger standardized severity score',
          ],
          correctAnswer: 0,
          explanation: 'The differential depends on mechanism, course, context, and consequences. Medical and growth data must be integrated with weight-shape overvaluation, weight-gain fear, choking-linked restriction, obsessions and rituals across contexts, phobia features, and possible dysphagia. One fear rating cannot resolve overlap. Calorie acceptance is informative but does not alone exclude anorexia nervosa; solid refusal does not prove structural disease. Measures can organize but not replace clinical formulation. The emergency radiograph also did not complete gastrointestinal and swallowing evaluation.',
        },
        {
          id: 'exam-03-hana-q3',
          questionNumber: 3,
          domain: 'Professional practice and ethics',
          stem: 'How should the counselor structure confidentiality and caregiver participation at the outset?',
          options: [
            'Give the parents access to all eating-related content because they provided consent and must assume responsibility for every meal while Hana is medically vulnerable',
            'Promise Hana that private-session content will not be shared unless she reports suicidal intent, because food restriction is already known to her parents',
            'Delay private time until medical stability is restored, since individual confidentiality could allow Hana to conceal behavior that caregivers need to monitor',
            'Explain the stated rules to everyone, seek Hana’s assent, define necessary safety and treatment sharing, and preserve privacy beyond those limits',
          ],
          correctAnswer: 3,
          explanation: 'The case supplies the governing policy. Before inviting sensitive information, the counselor explains parental consent, private time, foreseeable safety and treatment disclosures, other exceptions, and caregiver roles. Assent and collaborative planning respect Hana without pretending that necessary information always remains private. Parental consent does not require disclosure of every psychotherapy detail. A promise limited to suicide risk ignores medical danger and other exceptions. Automatically delaying private time can damage assessment and alliance; privacy can coexist with a clear safety boundary.',
        },
        {
          id: 'exam-03-hana-q4',
          questionNumber: 4,
          domain: 'Core counseling attributes',
          stem: 'Hana’s mother says food refusal rejects the family, and Hana begins to cry. Which response is most appropriate?',
          options: [
            'Explain that restrictive eating commonly appears oppositional to relatives, then redirect the family from cultural meaning to the immediate medical facts that require cooperation before proceeding',
            'Acknowledge food as care and belonging, separate fear from rejection, and ask how the family can support nourishment without turning meals into loyalty tests',
            'Ask Hana to reassure her mother that she values family meals, because repairing the misunderstanding will reduce guilt enough to improve intake',
            'Meet separately with the mother to examine enmeshment and food-centered expectations before including her in treatment planning with Hana',
          ],
          correctAnswer: 1,
          explanation: 'The response validates food as family care without treating culture as pathology or proof that Hana should eat through danger. It separates symptoms from disloyalty and invites effective support. Calling the behavior oppositional assigns motive and dismisses relational meaning. Asking Hana to reassure her mother burdens Hana with regulating the parent while neglecting fear and risk. Presuming enmeshment pathologizes the family and delays transparent involvement. Cultural humility explores this family’s meanings and power while keeping nutrition, autonomy, and safety visible.',
        },
      ],
    },
    {
      sessionLabel: 'Third week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Hana is admitted that day to a pediatric medical service. ECG shows sinus bradycardia. Laboratory studies identify dehydration and a phosphorus decrease during early refeeding, both corrected under medical supervision. Her pulse, blood pressure, and orthostatic symptoms improve over five days. She consumes prescribed nutrition through drinks and familiar smooth foods and asks for the higher-calorie drink when offered a choice. She does not require tube feeding. Discharge is to a specialized outpatient team with frequent adolescent-medicine monitoring; a higher level of eating-disorder care remains available if intake or medical status deteriorates.

A clinical swallowing evaluation and contrast study show coordinated oropharyngeal swallowing and no fixed obstruction. Because Hana reports earlier episodes of dense food sticking and has an atopic history, gastroenterology schedules endoscopy rather than declaring the complaint entirely anxiety based. The physician clears a specific range of liquids and soft textures in the interim. The team explicitly states that medical clearance for those items does not establish that every food is safe.

Structured interviews clarify the pattern. Before the restaurant episode, Hana ate across food groups, maintained her growth curve, enjoyed desserts, and had no weight-control behaviors. Since the event, restriction has been organized by perceived choking risk: she accepts more calories when texture is held constant, wants to regain her prior weight, and identifies return of menstruation, concentration, and tennis as goals. She reports no drive for thinness, weight-gain fear, body checking, bingeing, purging, or compulsive exercise. Nutrition-label reading is used to locate allergens, compare thickness, and meet the prescribed calorie target.

The choking images are unwanted and distressing, but they occur when eating or anticipating eating. Chewing, throat checking, and reassurance function as food-safety behaviors. A broader assessment finds no independent obsessional theme, nonfood ritual, or history of clinically significant compulsions. Fear and avoidance have produced weight loss, nutritional compromise, medical hospitalization, and marked social and educational interference. The medical evaluation remains active, so the formulation must neither ignore possible esophageal disease nor treat that possibility as an explanation for avoiding all medically cleared intake.

At home, Hana's mother prepares every item as a puree and watches each swallow; her father sometimes threatens loss of phone privileges if Hana does not finish. Both want recovery. Nutrition currently depends on several tolerated foods and supplements. Hana says she can consider treatment if no one surprises her with food and if she helps build the steps.` ,
      questions: [
        {
          id: 'exam-03-hana-q5',
          questionNumber: 5,
          domain: 'Intake/assessment/diagnosis',
          stem: 'Which diagnosis best organizes the evidence available at this point?',
          options: [
            'Anorexia Nervosa, restricting type, because rapid weight loss, amenorrhea, medical instability, label reading, and continued refusal persist despite serious consequences',
            'Obsessive-Compulsive Disorder, because intrusive choking images are neutralized through chewing, checking, reassurance seeking, and rigid preparation rules',
            'Specific Phobia, other type, because a circumscribed choking fear followed an aversive event and produces immediate anxiety and avoidance',
            'Avoidant/Restrictive Food Intake Disorder, because consequence-driven restriction causes nutritional and psychosocial impairment without weight-shape motivation',
          ],
          correctAnswer: 3,
          explanation: 'Choking fear, not weight or shape, drives restriction that caused weight loss, physiological compromise, hospitalization, and psychosocial interference. This supports Avoidant/Restrictive Food Intake Disorder with fear of aversive consequences. Amenorrhea and instability show severity but do not establish anorexia nervosa without weight-gain fear or weight-shape disturbance. Food-bound images and safety behaviors do not establish OCD without a broader syndrome. Choking phobia remains plausible, but ARFID better captures the feeding disturbance and nutritional consequences. Medical evaluation must continue; psychiatric formulation does not make dysphagia unreal.',
        },
        {
          id: 'exam-03-hana-q6',
          questionNumber: 6,
          domain: 'Treatment planning',
          stem: 'Which initial outpatient plan is best matched to Hana’s formulation and recent hospitalization?',
          options: [
            'Start daily solid-food exposure at the top of Hana’s fear hierarchy while maintaining weekly medical checks, because early disconfirmation prevents chronic avoidance',
            'Use family-based treatment for anorexia, give parents full control of meals, and postpone discussion of choking until weight is restored',
            'Coordinate medical and nutrition monitoring, restore regular intake with tolerated foods, and use family-supported, graded consequence-focused exposure when cleared',
            'Provide supportive counseling and seek medication evaluation for anxiety before behavioral treatment, because exposure could be unsafe until endoscopy is complete',
          ],
          correctAnswer: 2,
          explanation: 'Treatment must address medical recovery, nutrition, the fear mechanism, and family support. Early change begins with regular, adequate intake using preferred, medically cleared items; graded exposure then targets consequence fear within current texture guidance. Medical and dietetic coordination remain essential. Starting atop the hierarchy is neither graded nor medically bounded. Parent support fits, but imposing an anorexia formulation and postponing choking fear misformulates the case. Supportive work or medication referral may be adjunctive; waiting for fear or all testing to end risks reinforcing avoidance and nutritional decline.',
        },
        {
          id: 'exam-03-hana-q7',
          questionNumber: 7,
          domain: 'Counseling skills and interventions',
          stem: 'What is the best first intervention for the family’s mixture of nutritional support, reassurance, rescue, and coercion?',
          options: [
            'Map how each response affects intake and fear, preserve prescribed nutrition supports, and collaboratively fade one nonessential safety behavior at a time',
            'Ask both parents to stop blending, monitoring, and reassurance immediately so natural consequences can expose Hana to the full cost of continued avoidance at home',
            'Maintain all current accommodations until Hana reports minimal anxiety, then remove them together to avoid inconsistent expectations between parents',
            'Give the father responsibility for meal completion and the mother responsibility for emotional support so they no longer undermine one another',
          ],
          correctAnswer: 0,
          explanation: 'A functional analysis avoids labeling every parent action helpful or pathological. Prescribed drinks, adequate volume, and cleared textures protect recovery; repeated reassurance, unnecessary surveillance, surprises, or coercion can maintain fear and conflict. Fading one dispensable behavior while tracking intake, anxiety, and learning permits graded change without sacrificing nutrition. Abrupt withdrawal risks deterioration and turns treatment into a willpower test. Waiting for anxiety to disappear reinforces the need for certainty. Fixed parent roles preserve the pressure-rescue cycle instead of building one transparent response.',
        },
      ],
    },
    {
      sessionLabel: 'Ninth week',
      // Recommended pacing: ~7 minutes
      sectionNarrative: `Eight weeks after discharge, Hana has gained seven pounds, vital signs are stable, and she follows a three-meal and three-snack plan. She drinks supplements without reassurance and has progressed from purees to several soft solids cleared by the medical team. During exposures she practices taking a planned bite, allowing throat sensations, and dropping repeated mirror checks rather than seeking certainty that choking is impossible. She attends one lunch period with a friend. Her parents use a shared response: validate fear once, refer to the plan, and avoid bargaining.

During an in-session exposure to a soft dumpling listed on the interim medical plan, Hana abruptly points to her chest. She can breathe and speak, but she begins drooling and cannot swallow water. The sensation does not diminish with paced breathing. This differs from her usual anxiety, during which she can swallow and symptoms rise and fall.

Emergency endoscopy removes an esophageal food bolus. Biopsies confirm eosinophilic esophagitis, an inflammatory condition that can narrow the esophagus and cause food impaction. Gastroenterology explains that the disease likely contributed to Hana's history of dense foods sticking and may have contributed to the original restaurant event. Treatment begins, and the physician and dietitian provide an updated texture and emergency plan. They do not advise avoidance of all solids, all restaurant food, or all eating without a parent. Several foods already mastered remain medically appropriate.

Hana says, “Everyone called it fear, and my body was warning me.” Her mother says exposure caused the emergency and wants all behavioral treatment stopped. The original medical workup had remained open, and the exposed food was on the interim plan; the diagnosis now changes what may be medically protective. Hana also avoids cleared drinks when alone and predicts that any unfamiliar food will obstruct her airway. The team must determine whether medical management fully accounts for the remaining restriction.

Hana is willing to continue only if the hierarchy is rebuilt with gastroenterology and dietetic input and she can stop an exposure when agreed warning signs occur. Her parents ask for guidance that distinguishes symptoms requiring emergency care from anxiety that can be observed. The school again requests information, but that request will be handled separately through a specific authorization and a function-focused accommodation plan rather than by releasing psychotherapy notes.` ,
      questions: [
        {
          id: 'exam-03-hana-q8',
          questionNumber: 8,
          domain: 'Counseling skills and interventions',
          stem: 'When Hana drools and cannot swallow water during the exposure, what should the counselor do first?',
          options: [
            'Coach paced breathing for several minutes and compare the sensations with prior exposures before deciding whether the episode is medically different',
            'Ask Hana to take a smaller bite of a previously mastered food so avoidance does not become reinforced if the symptom is anxiety',
            'Stop the exposure, follow the emergency protocol, and obtain immediate medical care for possible esophageal obstruction',
            'Have Hana’s mother transport her to gastroenterology after the session because she can still breathe and speak normally',
          ],
          correctAnswer: 2,
          explanation: 'Drooling and inability to swallow water warn of possible food-bolus obstruction. Speech and breathing make complete airway obstruction less likely but do not make an esophageal emergency suitable for continued exposure or delayed transport. The counselor stops, follows emergency procedure, and obtains immediate evaluation. Breathing practice may help familiar panic, but insisting on it here delays care and psychologizes a changed symptom pattern. Another bite could worsen obstruction. Preventing avoidance never overrides new medical evidence or scope-appropriate emergency response.',
        },
        {
          id: 'exam-03-hana-q9',
          questionNumber: 9,
          domain: 'Treatment planning',
          stem: 'How should confirmed eosinophilic esophagitis change the ongoing treatment plan?',
          options: [
            'End the restrictive-eating formulation and transfer care to gastroenterology because a verified disease now explains both the fear and all avoidance',
            'Rebuild the hierarchy around medically cleared textures, continue nutrition restoration, and target avoidance that exceeds the updated disease-management plan',
            'Resume the original hierarchy after medication starts, because changing exposure targets would confirm that Hana was correct to distrust anxiety treatment',
            'Suspend all exposure until Hana has no dysphagia, no anticipatory fear, and unrestricted medical clearance for every major food texture',
          ],
          correctAnswer: 1,
          explanation: 'The disease is neither irrelevant nor automatically the whole formulation. The team revises nutrition and exposure around medical restrictions, defines warning signs, and addresses avoidance disproportionate to the updated plan. A medical condition can coexist with a feeding disturbance that exceeds its requirements. Ending behavioral care ignores refusal of cleared items and the established fear cycle. Resuming an unchanged hierarchy disregards real risk and collaboration. Waiting for symptoms, fear, and uncertainty to vanish makes treatment depend on an unrealistic guarantee and prolongs impairment.',
        },
        {
          id: 'exam-03-hana-q10',
          questionNumber: 10,
          domain: 'Counseling skills and interventions',
          stem: 'What is the counselor’s best response when Hana says the impaction proves that clinicians dismissed her body?',
          options: [
            'Apologize for treating a medical symptom as fear and agree that behavioral work should stop until gastroenterology can guarantee that choking will not recur',
            'Review the stable-vital-sign and weight gains to show that the earlier formulation was useful even though one exposure produced an unexpected complication',
            'Explain that one impaction does not support the prediction that every food is dangerous, then use a probability estimate to challenge overgeneralization',
            'Validate that a feared medical event occurred, invite her account, and jointly distinguish disease protection from fear-driven restriction before resuming work',
          ],
          correctAnswer: 3,
          explanation: 'A genuine impaction changes evidence and alliance. The counselor validates the event and Hana’s experience of not feeling believed, remains open to accountability, and restores collaboration by distinguishing medical protection from generalized restriction with the team. This does not concede that every prior intervention was wrong or promise zero recurrence. Stopping until certainty reinforces avoidance. Defending prior gains bypasses the rupture. Probability work may later help, but using it before validation and reformulation repeats the experience of being argued out of bodily information. Choice, medical boundaries, and shared formulation come first.',
        },
      ],
    },
  ],
};
