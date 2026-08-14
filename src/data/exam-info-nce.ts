import type { ExamInfoSection } from "./exam-info";

/**
 * NCE (National Counselor Examination) exam information.
 * Structure and figures follow the official NBCC/CCE NCE candidate materials.
 * Where fees, windows, or pass rates change over time, the copy points
 * candidates back to NBCC rather than stating a fixed number.
 */
export const nceExamInfoSections: ExamInfoSection[] = [
  {
    id: "about",
    title: "About the NCE",
    content: `## Exam Structure

The National Counselor Examination for Licensure and Certification (NCE) is a standardized knowledge exam administered by the **National Board for Certified Counselors (NBCC)**. It is used for the National Certified Counselor (NCC) credential and is accepted for licensure in many states. Unlike the NCMHCE, which is a clinical case-simulation exam, the NCE measures **knowledge and application** through standalone multiple-choice questions.

### Format
The NCE contains **200 multiple-choice questions**. **160 questions are scored**; the remaining items are unscored pretest questions used to develop future exam forms. Each question has one best answer among four options.

### Content Areas
NCE content is organized around the **eight CACREP core curricular areas**:
- **Professional Counseling Orientation and Ethical Practice**
- **Social and Cultural Diversity**
- **Human Growth and Development**
- **Career Development**
- **Counseling and Helping Relationships**
- **Group Counseling and Group Work**
- **Assessment and Testing**
- **Research and Program Evaluation**

Questions are also mapped to counselor **work behavior domains**, which describe what counselors actually do: fundamentals of counseling, assessment and diagnosis, areas of clinical focus, treatment planning, counseling skills and interventions, core counseling attributes, and professional practice and ethics.

### Scoring
The NCE uses a **criterion-referenced** passing standard set by NBCC using a modified Angoff process — not a fixed percentage and not a curve against other candidates. Results are reported as **pass or fail**, with a score report showing performance by content area so you can target a retake or continued study.

### Time Limit
Candidates are allotted **3 hours and 45 minutes (225 minutes)** for the examination itself, plus additional time for the confidentiality agreement and tutorial. That works out to roughly **70 seconds per question**, so pacing and disciplined item triage matter as much as content knowledge.

### Test Day
The NCE is delivered through **Pearson VUE**, either at a test center or, when eligible, as a remotely proctored online appointment. Both formats require compliance with NBCC/CCE and Pearson VUE testing rules, including identification requirements and a clear testing space for online delivery.`,
  },
  {
    id: "strategies",
    title: "Test-Taking Strategies",
    content: `## Approaching Multiple-Choice Items

The NCE rewards recognition speed plus disciplined reasoning. Most missed questions are not knowledge failures — they are pacing failures, misread stems, or a "true but not best" answer.

### Read the stem for the task, not the topic
- Identify what is being asked: define, identify, sequence, choose the *best first* action, or apply a theory.
- Watch qualifiers: **first**, **best**, **most likely**, **except**, **initially**, **primary**.
- Predict your answer before reading the options, then look for the closest match.

### Eliminate systematically
1. Remove options that are factually wrong.
2. Remove options that are true but do not answer the question asked.
3. Compare the remaining two on **scope and timing** — the best answer is usually the one that is safe, ethical, and appropriate *right now*.

### Pacing plan
- Target roughly **50 questions every 55 minutes** to leave a review buffer.
- Answer every question; there is no penalty for guessing.
- Flag and move on after about 90 seconds. Long deliberation rarely changes a correct first instinct.

## High-Yield Study Priorities

- **Ethics** — the ACA Code of Ethics and NBCC standards: confidentiality and its limits, informed consent, dual relationships, competence, supervision, and technology-assisted counseling.
- **Theory identification** — match founders, key terms, and core techniques (psychodynamic, Adlerian, person-centered, Gestalt, existential, behavioral, CBT/REBT, reality, solution-focused, narrative, feminist, family systems).
- **Human development** — Erikson, Piaget, Kohlberg, Bowlby, Super, Holland, and career theory.
- **Assessment and testing** — reliability, validity, standard error of measurement, normal curve, standard scores, percentiles, and common instruments.
- **Research** — designs, sampling, statistical tests, and interpretation of results.
- **Group work** — stages, leadership styles, member roles, and ethical issues unique to groups.

> Because the NCE spans eight content areas, breadth beats depth. Cycle through every area weekly instead of over-studying one favorite topic.`,
  },
  {
    id: "checklist",
    title: "Pre-Exam Checklist",
    content: `## Four Weeks Out

- Take a full-length timed practice exam to establish a baseline by content area.
- Rank the eight content areas from weakest to strongest and build your study plan in that order.
- Schedule daily question sets rather than long passive reading blocks.

## Two Weeks Out

- Review every missed question and record *why* it was missed: content gap, misread stem, or pacing.
- Drill ethics, assessment statistics, and theory identification — the areas most often reported as unexpectedly heavy.
- Do at least one timed 200-question simulation to build stamina.

## The Week Of

- Confirm your Pearson VUE appointment, location or online system check, and identification requirements.
- Shift from new content to review of flashcards, summary sheets, and mnemonics.
- Protect sleep. Retrieval speed drops sharply when you are sleep deprived.

## The Day Before

- Do a light review only — no new material.
- Lay out identification, confirmation details, and directions or your online test-day setup.
- Plan your break strategy and food and hydration for a nearly four-hour session.

## Test Day

- Arrive early, or complete your online check-in well before the start time.
- Use the first few questions to settle your pace before evaluating whether you are on schedule.
- Trust preparation, keep moving, and never leave an item blank.`,
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    content: `## Registration & Logistics

**How do I register for the NCE?**
Registration goes through **NBCC** or, in many cases, through your **state licensing board** if the board administers the exam as part of its licensure process. Graduate students in eligible programs may also qualify through the graduate student application pathway. Once approved, Pearson VUE issues an authorization to test with your scheduling window.

**How much does the exam cost?**
Fees vary by pathway — national certification versus state licensure — and states may add their own application fees. Confirm the current amount with NBCC or your board during registration.

**Can I take the NCE before I graduate?**
Many candidates test during their final graduate term through the student pathway, but eligibility depends on your program and state. Verify with your program coordinator and licensing board.

## NCE vs. NCMHCE

**What is the difference between the two exams?**
The NCE is a **200-question multiple-choice knowledge exam** covering the eight CACREP content areas. The NCMHCE is a **clinical case-simulation exam** built from case narratives with applied clinical decision questions. The NCE asks what you know; the NCMHCE asks what you would do next.

**Which one do I need?**
It depends on your state and credential. Some states accept either, some require a specific exam, and some require both at different stages. Always confirm with your state licensing board.

**Should I take both?**
Only if your credentialing path calls for it. If you need both, most candidates prepare for the NCE first because its content foundation supports NCMHCE clinical reasoning.

## Scoring & Results

**What score do I need to pass?**
There is no fixed percentage. NBCC sets a criterion-referenced cut score, and results are reported as **pass or fail** with a content-area breakdown.

**When do I get my results?**
Score reporting timelines depend on your pathway and whether you tested for certification or state licensure. Pearson VUE and NBCC communicate results according to the process attached to your registration.

**What is the pass rate?**
Pass rates change over time and by candidate group. Rely on current NBCC reporting rather than a fixed figure.

## Retaking the Exam

**Can I retake the NCE if I fail?**
Yes. A waiting period applies between attempts, and a new registration and fee are required. Confirm the current retest window with NBCC or your board before scheduling.

**How should I prepare differently for a retake?**
Use your content-area score report as the study plan. Rebuild from your two weakest areas, then run timed full-length simulations to fix pacing before test day.`,
  },
];
