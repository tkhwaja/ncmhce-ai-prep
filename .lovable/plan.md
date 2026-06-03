## Goal

Rewrite the 14 questions in the free diagnostic case (Tessa — GAD) so each item follows the real NCMHCE pattern you described: **three of the four options are clinically defensible; only one is the *most* appropriate** given the moment in the case. Keep the narrative, diagnosis, client, and section structure exactly as they are — only the question stems, options, correct answer, and explanations change.

## Why this works for the free diagnostic

- The current items mix strong "best-answer" questions (Q2, Q6, Q8, Q11) with easier ones where 1–2 options are obviously wrong (Q3, Q7, Q10, Q12, Q14). The easy ones make the product feel shallower than it is.
- "Three defensible, one best" forces clinical reasoning over recognition — which is exactly what the NCMHCE tests and what users underestimate.
- Harder distractors mean richer rationales, which is the conversion moment (the breakdown email teaches *why* the tempting wrong answer was wrong).

## What changes per question

For each of Q1–Q14:

1. **Stem** — tighten to a *most appropriate / best next / priority* framing tied to a specific clinical moment in the narrative.
2. **Options** — ensure all four are things a competent counselor might genuinely consider. Remove the "obviously wrong" option (e.g., "do nothing," "ignore the client," "diagnose something clearly off"). Replace with a *plausible-but-second-best* action: right intervention wrong timing, right concern wrong priority, technically allowed but not best practice, accurate but not therapeutic, etc.
3. **Correct answer** — keep the same clinically correct choice where possible; re-index when options are reordered.
4. **Explanation** — rewrite to (a) state why the correct answer is *most* appropriate at this moment, and (b) explain why each of the other three is defensible but not best (timing, sequencing, depth, scope, priority, ethics nuance). This is the part that does the teaching.

## Specific sharpening targets

A few items to call out so you know what the rewrite will look like:

- **Q3 (diagnosis)** — replace Illness Anxiety Disorder distractor (too easy to rule out) with **Social Anxiety Disorder** or **Persistent Depressive Disorder with anxious distress**, both of which share features with her presentation.
- **Q4 (treatment sequencing)** — make all four options legitimate CBT-for-GAD components; the question becomes purely about *sequencing*.
- **Q7 (reinforcement)** — replace "evidence anxiety shifted to interpersonal" with a more tempting behavioral-theory distractor (e.g., *intermittent reinforcement from inconsistent reassurance*).
- **Q10 (fiancé email)** — all four options become ethically defensible; the discriminator is *who controls the disclosure and when*.
- **Q12 (father's hypoglycemic episode)** — replace "normal stress response, no attention needed" with a plausible clinical reframe (e.g., *core schema reactivation warranting schema-focused work*).
- **Q13 (next phase)** — all four become reasonable termination-phase options; the discriminator is matching intervention intensity to current GAD-7 + skill use.
- **Q14 (mechanism of change)** — make every option a real CBT/ACT mechanism so the user has to pick the one that matches *this client's* trajectory.

## Out of scope

- No changes to the narrative text, client info, MSE, family/work history, or session summaries.
- No changes to section count, question count per section, domains, or question numbering.
- No changes to scoring, the lead-capture flow, the breakdown email template, or the diagnostic bundle's JSON schema — only field *values* in `freeNarrative.sections[*].questions[*]`.
- No changes to paid narratives.

## Files touched

- `src/data/free-diagnostic-bundle.json` — rewrite the 14 question objects in place.

## Validation after build

- Confirm `correctAnswer` indexes match the intended option after any reordering.
- Spot-check the free diagnostic flow in the preview (`/free-diagnostic-case`) end-to-end and read the resulting breakdown email content to make sure rationales render cleanly.

## Optional follow-up (not in this plan)

If you like the result, we can apply the same "three defensible, one best" pass to the paid narratives next — but let's prove it on the free case first since that's the one prospects actually see.
