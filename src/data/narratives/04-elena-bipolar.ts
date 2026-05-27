import { Narrative } from "./types";

export const elenaBipolar: Narrative = {
  id: "elena-bipolar",
  title: "Elena: Bipolar I Disorder",
  clientName: "Elena",
  intakeSessionSummary: `Elena is a 32-year-old woman who presents for outpatient counseling following a 9-day inpatient psychiatric hospitalization. She was admitted after a manic episode characterized by decreased need for sleep, expansive mood, religious delusions, impulsive spending, and grandiose plans. She has a history of a depressive episode at age 23. She is currently prescribed lithium and olanzapine. She is a single mother to a 7-year-old daughter and is currently navigating a contentious custody situation with her ex-husband.`,

  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "",
      questions: [
        {
          id: "elena-q1",
          questionNumber: 1,
          domain: "Intake/assessment/diagnosis",
          stem: `Elena had a 9-day hospitalization with decreased need for sleep, expansive mood, religious delusions, $7,000 in impulsive spending, and grandiose plans. Which feature most clearly distinguishes Bipolar I from Major Depressive Disorder with psychotic features in this case?`,
          options: [
            `The presence of psychotic content (religious delusions) during the episode.`,
            `A discrete episode of mood elevation with decreased need for sleep, marked impairment, and psychotic features lasting more than a week.`,
            `Her childhood depressive episode at age 23 with full remission.`,
            `Persistent fear about losing custody following hospitalization.`,
          ],
          correctAnswer: 1,
          explanation: `Bipolar I requires a manic episode (≥1 week or any duration if hospitalization). Psychotic features can occur in either MDD or bipolar episodes, so psychosis alone does not differentiate. The clear manic syndrome with reduced sleep need, impairment, and psychosis is the discriminator.`,
        },
        {
          id: "elena-q2",
          questionNumber: 2,
          domain: "Counseling skills and interventions",
          stem: `Elena says, "I don't think I need pills. I just needed to sleep more." Which response best uses motivational interviewing?`,
          options: [
            `Help me understand — what worries you most about the medication, and what did the hospitalization change for you?`,
            `Stopping lithium without your psychiatrist's input would substantially increase the risk of relapse.`,
            `Medication decisions belong with your prescriber, so let's set this aside and work on what we can change here.`,
            `That perspective is common right after a first episode and tends to soften with time and education.`,
          ],
          correctAnswer: 0,
          explanation: `MI explores ambivalence with open questions and reflections rather than warnings, deflection, or normalization. Warnings tend to evoke resistance; deflection misses a critical adherence issue; normalization makes a guess about her experience instead of inviting hers.`,
        },
        {
          id: "elena-q3",
          questionNumber: 3,
          domain: "Core counseling attributes",
          stem: `Her family describes past distress as "nervios" and views prayer as healing. What is the most clinically appropriate stance?`,
          options: [
            `Educate the family that bipolar disorder is biologically based and requires medical treatment.`,
            `Explore with her how spiritual practice, family support, and psychiatric treatment can coexist in a plan that fits her values.`,
            `Stay neutral on cultural/religious content to avoid imposing your worldview.`,
            `Encourage the family's prayer practices because they are likely to support medication adherence.`,
          ],
          correctAnswer: 1,
          explanation: `Culturally responsive practice (ACA E.8) integrates spiritual and family supports without subordinating one to the other. Educating the family contradicts their framework, neutrality avoids the client's lived context, and instrumentalizing prayer for adherence misuses cultural meaning.`,
        },
        {
          id: "elena-q4",
          questionNumber: 4,
          domain: "Professional practice and ethics",
          stem: `Her older sister calls and says, "She seems fine — does she really need to keep taking the lithium?" What should you do?`,
          options: [
            `Provide general psychoeducation about bipolar disorder without naming Elena specifically.`,
            `Explain that you cannot confirm whether Elena is a client or share treatment information without authorization, but you are willing to listen to anything the sister wants you to know.`,
            `Decline the call entirely and document the contact attempt.`,
            `Direct the sister to the prescribing psychiatrist for any medication questions.`,
          ],
          correctAnswer: 1,
          explanation: `Even confirming the existence of a treatment relationship is protected information. The counselor may receive collateral information without disclosing any client-identifiable detail. Generalized education that implies treatment, declining all contact, or redirecting without acknowledging collateral all miss the correct posture.`,
        },
        {
          id: "elena-q5",
          questionNumber: 5,
          domain: "Professional practice and ethics",
          stem: `Elena asks if you can help her prove to CPS that she is safe to parent. What is the best response?`,
          options: [
            `Write a letter stating she is safe to parent given that she is currently euthymic.`,
            `Clarify your treating-counselor role, discuss what factual treatment information can be released with authorization, and decline to render parenting-fitness opinions.`,
            `Decline all involvement with CPS to avoid a dual role.`,
            `Recommend a forensic evaluator while continuing therapy without any CPS-related documentation.`,
          ],
          correctAnswer: 1,
          explanation: `Treating clinicians can release factual treatment information with authorization but should not render forensic opinions about parenting fitness (ACA E.13). Writing such a letter exceeds scope; declining all involvement abandons the client; redirecting without offering legitimate documentation withholds appropriate support.`,
        },
      ],
    },
    {
      sessionLabel: "Sixth session",
      sectionNarrative: `Your client arrived on time and appeared stable. Her YMRS this week is 4 and her PHQ-9 is 8. She has continued her medications consistently and has seen her psychiatrist twice. She returned to work part-time two weeks ago. Her daughter returned to living with her four days ago following a successful CPS assessment and safety plan. She stated, "She was so happy to come home. I was so scared she wouldn't want to."

The client reported a new challenge. Her mother and older sister have been "hovering" since her hospitalization, calling multiple times a day and dropping by unannounced. Her mother has begun to give her daughter gifts and food that conflict with the client's parenting decisions. Her mother told her last week, "I'm just making sure you're okay. You scared us, mija." The client stated, "I know they love me. But I feel like I'm a patient in my own house. My sister asked if I had taken my pills this morning. In front of my daughter." She reported feeling "ashamed all the time" and stated, "My family looks at me like I might break again."

She also reported increasing difficulty with her ex-husband. The restraining order is still in effect, but he has begun sending messages through their daughter. He told the seven-year-old that "Mommy is sick and can't take care of you anymore." The client stated, "I want to strangle him but I can't even talk to him. My daughter doesn't know what to do with this." The client has consulted a family law attorney through legal aid and is considering requesting a modification to custody that clarifies no communication through their daughter.

She disclosed that she has had brief moments over the past two weeks where she has thought, "Maybe I don't need the lithium. I've been fine for weeks." She reported continuing to take it as prescribed but stated, "I notice the thought."`,
      questions: [
        {
          id: "elena-q6",
          questionNumber: 6,
          domain: "Counseling skills and interventions",
          stem: `Her family asks about medication in front of her daughter and drops by unannounced. What is the best clinical focus?`,
          options: [
            `Help her develop and rehearse specific boundaries that preserve family support while reducing the felt surveillance.`,
            `Suggest she limit family contact for several weeks to consolidate her recovery space.`,
            `Offer to call her mother and sister to coach them on how to behave around her.`,
            `Validate that the family's behavior is intrusive and would constitute enmeshment in any system.`,
          ],
          correctAnswer: 0,
          explanation: `Skill-building around specific, rehearsable boundary scripts respects her autonomy and her cultural context. Cutoff recommendations override her values; the counselor calling the family creates a dual role and bypasses her agency; labeling the family as enmeshed imposes a clinical frame she has not asked for.`,
        },
        {
          id: "elena-q7",
          questionNumber: 7,
          domain: "Counseling skills and interventions",
          stem: `She reports occasional thoughts that she "may not need lithium" but is still taking it as prescribed. What is the best response?`,
          options: [
            `Document possible early non-adherence and notify the psychiatrist before the next session.`,
            `Acknowledge the thought, explore when it shows up, reinforce her ability to notice without acting, and plan coordination if behavior changes.`,
            `Frame the thought as a known early-warning sign of relapse and increase session frequency.`,
            `Recommend she discuss the thought with her psychiatrist today and ask for a long-acting injectable.`,
          ],
          correctAnswer: 1,
          explanation: `She is demonstrating metacognitive awareness with intact behavior. Validation plus exploration plus a clear coordination plan supports adherence. Treating the thought as non-adherence, automatic relapse signal, or trigger for LAI escalation pathologizes a self-aware moment and may damage alliance.`,
        },
        {
          id: "elena-q8",
          questionNumber: 8,
          domain: "Professional practice and ethics",
          stem: `Her ex-husband is sending messages through their daughter despite a restraining order. What is your appropriate role?`,
          options: [
            `Contact him through a third-party advocate to convey that contact through the child is harmful.`,
            `Document the disclosure, support her in returning to legal aid, and help her develop child-protective communication strategies.`,
            `File a CPS report for emotional abuse of the child by the ex-husband.`,
            `Coach her on confronting him directly the next time he uses their daughter as a messenger.`,
          ],
          correctAnswer: 1,
          explanation: `The counselor supports documentation, the legal pathway already in motion, and concrete child-protective skills. Direct contact (even indirect) exceeds the role and may interfere with the legal process; CPS reporting thresholds vary by jurisdiction and the child is in her care; direct confrontation violates the restraining order.`,
        },
        {
          id: "elena-q9",
          questionNumber: 9,
          domain: "Treatment planning",
          stem: `Which relapse-prevention element is most important to develop collaboratively at this phase?`,
          options: [
            `A dating-disclosure plan for future partners.`,
            `Sleep protection rules, adherence supports, personal early-warning signs, and named crisis contacts.`,
            `A scheduled olanzapine taper plan to be presented to her psychiatrist within 30 days.`,
            `A plan to minimize contact with her mother and sister to reduce stress exposure.`,
          ],
          correctAnswer: 1,
          explanation: `For Bipolar I, sleep, adherence, warning signs, and crisis contacts form the spine of relapse prevention. Dating, taper planning, and family minimization are downstream issues that do not replace the core framework, and taper planning is a prescriber decision.`,
        },
        {
          id: "elena-q10",
          questionNumber: 10,
          domain: "Core counseling attributes",
          stem: `She says, "My family looks at me like I might break again." What response best deepens the work?`,
          options: [
            `They are watching closely because the hospitalization frightened them; their love and their fear are tangled.`,
            `What is it like to be watched for symptoms by the same people you need support from?`,
            `That feeling makes sense; many families need time to recalibrate after a first hospitalization.`,
            `That perception may be amplified by shame — let's check the evidence on whether they actually see you that way.`,
          ],
          correctAnswer: 1,
          explanation: `An open exploratory reflection holds the painful paradox without interpreting the family's intent, normalizing prematurely, or moving to cognitive evidence-checking. Each of the other responses contains truth but pulls away from the lived experience she just named.`,
        },
      ],
    },
    {
      sessionLabel: "Twelfth session",
      sectionNarrative: `Your client arrived on time and reported continued stability. Her YMRS is 2 and her PHQ-9 is 5. She has now been on medication for four months without missed doses. She had her dose of olanzapine reduced by her psychiatrist last month; lithium remains at the same dose with therapeutic blood levels. She returned to full-time work three weeks ago. Her daughter is thriving in second grade and the client reported attending a school event last week "where I was just another mom in the audience. Not the one who scared everyone."

She reported significant progress with her family. She had a difficult but productive conversation with her mother and older sister three weeks ago, in which she shared specifically what had been helpful and what had been hurtful. She used English words she had prepared in advance with you. Her mother cried; her sister apologized. The daily check-ins have become twice-weekly and by her initiation. She stated, "I didn't know I could do that. Talk to them like that, in their faces, with respect, and still ask for what I needed. I learned that here."

She also reported that her petition for modification of the custody arrangement was granted last week; her ex-husband is now prohibited from using their daughter as a messenger. She stated, "I slept better that night than I have in years."

The client expressed a new concern. She is considering beginning to date again and wonders how to disclose her diagnosis to a potential partner. She asked, "When do I tell someone? On the first date? After a year? Do I have to tell them at all?" She has not yet been on any dates and is not currently seeing anyone specific. She stated, "I don't want to be defined by this. But I don't want to lie either."

Finally, she reported a specific worry about her daughter. Her daughter, now nearly eight, has begun asking questions about why Mommy takes pills every morning. She asked you, "What do I say?"`,
      questions: [
        {
          id: "elena-q11",
          questionNumber: 11,
          domain: "Counseling skills and interventions",
          stem: `Her daughter asks why Mommy takes pills every morning. What guidance is most appropriate?`,
          options: [
            `Help her describe the pills as "vitamins for my mood" to provide simple, reassuring language.`,
            `Help her develop honest, age-appropriate language that explains taking care of her health without graphic detail or adult worry content.`,
            `Recommend she share the diagnosis name so her daughter does not imagine something worse.`,
            `Suggest deferring the conversation until her daughter is older and can understand bipolar disorder.`,
          ],
          correctAnswer: 1,
          explanation: `Age-appropriate honesty builds trust and reduces shame. Inaccurate framing models dishonesty; sharing the diagnostic label at age 7 may overwhelm without informing; deferring sends the message that the topic is unspeakable.`,
        },
        {
          id: "elena-q12",
          questionNumber: 12,
          domain: "Counseling skills and interventions",
          stem: `She asks when to disclose Bipolar I Disorder to a future romantic partner. What is the best response?`,
          options: [
            `Disclose by the third date so it does not become a secret that grows in significance.`,
            `Disclosure isn't required unless the relationship becomes serious or the partner asks directly.`,
            `Let's look at timing, safety, your values, and what level of detail fits a given relationship — there isn't a universal rule.`,
            `Wait until engagement, since the diagnosis is private health information.`,
          ],
          correctAnswer: 2,
          explanation: `Disclosure is context-dependent and values-based; the counselor supports decision-making, not a universal rule. The other responses prescribe a fixed timeline (early or late) or take an absolute privacy position that may not match her values.`,
        },
        {
          id: "elena-q13",
          questionNumber: 13,
          domain: "Treatment planning",
          stem: `She is stable, working full-time, parenting, and engaged with psychiatry. What treatment adjustment best fits this phase?`,
          options: [
            `Discharge from therapy since acute mania has resolved and her psychiatrist is managing ongoing risk.`,
            `Step down to biweekly sessions focused on relapse prevention, parenting, identity integration, and skill consolidation.`,
            `Maintain weekly sessions indefinitely because Bipolar I has a chronic course requiring sustained psychotherapy.`,
            `Transition to a Bipolar-specific group therapy and discontinue individual sessions.`,
          ],
          correctAnswer: 1,
          explanation: `A graduated step-down with continued relapse-prevention focus matches stable functioning. Discharge is premature given chronicity; indefinite weekly sessions are not warranted by stability; substituting group for individual without rationale changes the therapeutic frame she has been benefiting from.`,
        },
        {
          id: "elena-q14",
          questionNumber: 14,
          domain: "Professional practice and ethics",
          stem: `She asks whether she can request her psychiatrist stop olanzapine because she feels stable. What is your appropriate response?`,
          options: [
            `Recommend she stay on olanzapine because discontinuation increases breakthrough psychosis risk.`,
            `Help her articulate her benefits, side effects, and questions so she can have an informed conversation with her psychiatrist, and explore meaning in therapy.`,
            `Defer entirely — medication decisions are outside the therapy frame and should not be discussed.`,
            `Suggest a slow taper plan that she can present to her psychiatrist as a proposed schedule.`,
          ],
          correctAnswer: 1,
          explanation: `Counselors do not direct medication decisions but support informed prescriber communication. Recommending continuation, deferring entirely, or proposing a taper schedule each cross scope lines in different directions.`,
        },
      ],
    },
  ],
};
