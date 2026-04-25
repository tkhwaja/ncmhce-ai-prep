export interface ExamInfoSection {
  id: string;
  title: string;
  content: string;
}

export const examInfoSections: ExamInfoSection[] = [
  {
    id: "about",
    title: "About the NCMHCE",
    content: `## Exam Structure

The National Clinical Mental Health Counseling Examination (NCMHCE) is a standardized exam required for licensure as a clinical mental health counselor in most U.S. states. Unlike the NCE (which is a multiple-choice knowledge exam), the NCMHCE is a clinical simulation exam that tests your ability to apply clinical knowledge to realistic client scenarios.

### Format
The exam consists of **10 clinical simulations**, each presenting a unique client case. Each simulation has two main sections:

- **Information Gathering (IG)**: You are presented with a list of potential actions (reviewing records, conducting assessments, gathering history) and must select which information to gather. Not all items are relevant — the exam tests your clinical judgment in deciding what information is necessary.
- **Decision Making (DM)**: After gathering information, you answer a series of clinical decision questions covering diagnosis, treatment planning, ethical considerations, and counselor actions.

### Scoring
The NCMHCE uses a criterion-referenced scoring system. You must demonstrate minimum competency across multiple domains:
- **Assessment & Diagnosis**
- **Counseling & Psychotherapy**
- **Administration, Consultation, & Supervision**

Each simulation is scored based on the quality of your information gathering choices and the accuracy of your clinical decisions. There is no penalty for gathering non-critical information, but **failing to gather critical safety information** (such as suicide risk assessment) is heavily penalized.

### Time Limit
You have **3 hours (180 minutes)** to complete all 10 simulations. This gives you approximately 18 minutes per simulation. Time management is critical — you should aim to spend about 8-10 minutes on Information Gathering and 8-10 minutes on Decision Making for each case.

### Test Day
The NCMHCE is administered at **Pearson VUE testing centers** throughout the United States. The exam is computer-based. You will be assigned a workstation in a proctored testing environment.`
  },
  {
    id: "strategies",
    title: "Test-Taking Strategies",
    content: `## Approaching Clinical Simulations

### Information Gathering Strategy
1. **Read the vignette carefully** — Note demographics, presenting concern, referral source, and any red flags (mentions of self-harm, substance use, relationship violence).
2. **Always assess safety first** — If there's any indication of risk, suicide assessment should be your first priority. Missing critical safety items is the fastest way to fail a simulation.
3. **Think systematically** — Use the biopsychosocial model as a framework. Gather biological (medical history, medications, substances), psychological (symptoms, cognitions, affect), and social (relationships, support, stressors) information.
4. **Don't over-gather** — You don't need to click every item. Focus on clinically relevant information. Over-gathering wastes time and may indicate poor clinical judgment.
5. **Prioritize assessment instruments** — When standardized tools are available (PHQ-9, GAD-7, AUDIT), selecting them demonstrates Evidence-Based Practice (EBP).

### Decision Making Strategy
1. **Use elimination** — Read all four options before selecting. Eliminate clearly wrong answers first.
2. **Match diagnosis to criteria** — Don't diagnose based on a single symptom. Ensure the client meets the full DSM-5-TR criteria including duration requirements.
3. **Choose the most complete answer** — When two options seem correct, choose the one that is more comprehensive or specific.
4. **Think about what a competent counselor would do** — Not what's ideal in a perfect world, but what's appropriate, ethical, and evidence-based.
5. **Don't second-guess** — Your first instinct is usually correct. Only change answers if you have a clear reason.

### Common Mistakes to Avoid
- Jumping to a diagnosis without sufficient information gathering
- Failing to assess for suicide risk when clinical indicators are present
- Choosing treatments that don't match the diagnosis
- Ignoring cultural considerations
- Spending too long on one simulation at the expense of others
- Selecting the most complex or dramatic intervention when a simpler one is appropriate

### Time Management
- Set a mental timer: ~18 minutes per simulation
- If stuck on a question, make your best choice and move on
- Don't go back to change answers unless you're certain
- Leave the hardest simulations for last if you can identify them early`
  },
  {
    id: "checklist",
    title: "Pre-Exam Checklist",
    content: `## What to Bring

### Required Items
- **Two forms of valid, unexpired identification** — Primary ID must be government-issued with a photo and signature (driver's license or passport). Secondary ID must have a name and signature.
- **Confirmation email or authorization to test** — Print a copy or have it accessible on your phone.
- **Know your testing center location** — Do a practice drive if possible. Plan to arrive 30 minutes early.

### What NOT to Bring
- Cell phones (must be stored in a locker)
- Notes, textbooks, or study materials
- Food or drinks (some centers allow water in a clear container)
- Watches or fitness trackers (some centers prohibit)

## Day Before Preparation

### Study
- **Do NOT cram** — Light review only. Go through your flashcards or review key concepts, but avoid learning new material.
- **Review your weakest areas briefly** — Glance at crisis intervention protocols and common ethical scenarios.
- **Review the exam format** — Remind yourself of the IG/DM structure so it feels familiar.

### Self-Care
- **Prepare your clothes and documents** the night before
- **Eat a balanced dinner** — Avoid heavy, greasy food or excessive caffeine
- **Set multiple alarms** if you're a heavy sleeper
- **Go to bed at your normal time** — Aim for 7-8 hours of sleep. Don't take sleep aids you've never used before.

## Morning of the Exam

### Routine
1. Wake up with enough time to not feel rushed
2. Eat a **protein-rich breakfast** (eggs, yogurt, oatmeal) — avoid sugar crashes
3. **Light caffeine** if that's your norm — don't change your routine
4. Review your ID and confirmation one last time
5. Arrive at the testing center **30 minutes early**

### Anxiety Management Techniques

**Box Breathing (4-4-4-4)**
Inhale for 4 seconds → Hold for 4 seconds → Exhale for 4 seconds → Hold for 4 seconds. Repeat 4-5 cycles.

**5-4-3-2-1 Grounding**
Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.

**Progressive Muscle Relaxation**
Starting from your toes, tense each muscle group for 5 seconds, then release. Work your way up to your shoulders and face.

**Positive Self-Talk**
"I have prepared for this. I know this material. I am a competent counselor." Replace catastrophic thoughts with realistic, balanced ones.`
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    content: `## Registration & Logistics

**How do I register for the NCMHCE?**
Registration is through the **National Board for Certified Counselors (NBCC)**. You must meet eligibility requirements, which typically include a master's degree in counseling from a CACREP-accredited program, supervised clinical experience, and state-specific requirements. Apply through the NBCC website, and once approved, you'll receive an authorization to test (ATT) to schedule at a Pearson VUE testing center.

**How much does the exam cost?**
The NCMHCE costs approximately **$275** for first-time test-takers. Retake fees may vary. Some states have additional licensing fees separate from the exam cost.

**How long is my ATT valid?**
Your Authorization to Test is typically valid for **90 days** from the date of issuance. You must schedule and take the exam within this window.

## Scoring & Results

**What score do I need to pass?**
The NCMHCE uses a criterion-referenced passing standard. You need to demonstrate minimum competency across all scored domains. The passing standard is set by the NBCC using a modified Angoff method and is not a simple percentage score. Results are reported as **pass or fail**.

**When do I get my results?**
Results are typically available **within 2 weeks** of taking the exam. You'll receive notification from NBCC. Your state licensing board will also be notified of your results.

**What is the pass rate?**
The national first-time pass rate is approximately **75-80%**. Pass rates vary by program and preparation level.

## Retaking the Exam

**Can I retake the NCMHCE if I fail?**
Yes. You may retake the exam, but you must wait at least **90 days** between attempts. There is no limit on the number of retakes, but each attempt requires a new registration and fee.

**How should I prepare differently for a retake?**
Focus on the domains where you were weakest. If your score report indicates deficits in specific areas, concentrate your study there. Consider using a structured study plan, joining a study group, or working with a tutor who specializes in NCMHCE preparation.

## State Licensure

**Is the NCMHCE required in all states?**
No. Each state has its own licensure requirements. Most states require either the NCMHCE, the NCE, or offer a choice. Check with your specific state licensing board for requirements.

**What other requirements do states have beyond the exam?**
Most states require a master's degree in counseling, 2,000-4,000 hours of supervised post-graduate clinical experience, and passing the required exam(s). Some states also require jurisprudence exams covering state-specific laws and regulations.

**Can I transfer my license to another state?**
Licensure portability varies by state. Some states have reciprocity agreements, while others require you to meet their full set of requirements. Having the NCMHCE completed can facilitate transfer in many cases.`
  }
];
