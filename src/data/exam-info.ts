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
According to the current NBCC/CCE Candidate Handbook for State Licensure, the NCMHCE is composed of **11 case studies**. One case study is unscored and is used to generate statistics for future test forms; **100 multiple-choice questions are scored**.

Each case study includes a clinical narrative and **9–15 multiple-choice questions**. Current case studies are organized across three parts: an initial intake summary and two subsequent counseling sessions. Questions test applied clinical judgment across professional practice and ethics, intake, assessment and diagnosis, treatment planning, counseling skills and interventions, and core counseling attributes.

### Scoring
The NCMHCE uses a criterion-referenced scoring system. You must demonstrate minimum competency across multiple domains:
- **Professional Practice and Ethics**
- **Intake, Assessment, and Diagnosis**
- **Treatment Planning**
- **Counseling Skills and Interventions**
- **Core Counseling Attributes**

Areas of clinical focus, such as diagnoses and presenting problems, appear through the case scenarios rather than as a separate item-level score category.

### Time Limit
The total test session is **255 minutes (4 hours and 15 minutes)**. This includes 5 minutes for the Test Administration and Confidentiality Agreement, 10 minutes for the tutorial, **225 minutes for the examination**, and one scheduled 15-minute break after the fifth case study. Time management is critical — the exam portion averages roughly 20 minutes per case study.

### Test Day
The NCMHCE is administered through **Pearson VUE** as either an in-person test center appointment or, when available and appropriate, an online OnVUE appointment. Both delivery formats require compliance with NBCC/CCE and Pearson VUE testing rules.`
  },
  {
    id: "strategies",
    title: "Test-Taking Strategies",
    content: `## Approaching Clinical Simulations

### Information Gathering Strategy
1. **Read each narrative section carefully** — Note demographics, presenting concern, referral source, setting, and any red flags such as self-harm, substance use, violence, or acute impairment.
2. **Track safety and ethics throughout the case** — If risk indicators appear, prioritize appropriate assessment, documentation, consultation, mandated reporting, level-of-care decisions, or emergency response.
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
- Set a mental timer: roughly 20 minutes per case study during the scored exam portion
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
Exam fees can vary by registration pathway and state requirements. Candidates should confirm the current fee during registration through NBCC/CCE or their state licensing process. State licensing boards may also charge separate application or licensing fees.

**How long is my ATT valid?**
Your Authorization to Test email from Pearson VUE includes your Candidate ID and specific test authorization dates. You must schedule and take the exam within the dates listed in that authorization window.

## Scoring & Results

**What score do I need to pass?**
The NCMHCE uses a criterion-referenced passing standard. You need to demonstrate minimum competency across all scored domains. The passing standard is set by the NBCC using a modified Angoff method and is not a simple percentage score. Results are reported as **pass or fail**.

**When do I get my results?**
After the examination, test center candidates receive an unofficial score report at the test center. Online candidates can access score report information through their Pearson VUE dashboard. Official reporting processes may vary by state or credentialing pathway.

**What is the pass rate?**
Pass rates can change over time and may vary by candidate group, program, and jurisdiction. For the most reliable current data, check official NBCC/CCE reporting or your licensing board rather than relying on a fixed estimate.

## Retaking the Exam

**Can I retake the NCMHCE if I fail?**
Yes. According to the current NBCC/CCE Candidate Handbook for State Licensure, candidates who fail the NCMHCE may take the examination again after a **30-day window**. A separate registration and fee are required for reregistration.

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
