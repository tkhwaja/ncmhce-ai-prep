import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NCE_ENABLED } from "@/config/exam-tracks";

const nceFaqs = [
  {
    q: "Do you cover the NCE as well as the NCMHCE?",
    a: "Yes. The Exam Path supports both counseling licensure exams. The NCMHCE track is built around clinical case simulations, and the NCE track is built around a 1,000-question multiple-choice bank covering all eight CACREP content areas, plus two full-length 200-question practice exams. You choose your exam when you sign up, and the whole platform — practice, analytics, study plan, and library — adapts to it.",
  },
  {
    q: "What is the difference between the NCE and the NCMHCE?",
    a: "The NCE is a 200-question multiple-choice knowledge exam (160 scored) covering the eight CACREP content areas. The NCMHCE is a clinical case-simulation exam built from case narratives with applied clinical decision questions. Put simply, the NCE asks what you know and the NCMHCE asks what you would do next. Your state licensing board determines which one you need.",
  },
  {
    q: "Can I switch exams or study for both?",
    a: "You can switch your active exam any time from your profile, and your progress in each track is tracked separately. Each track is its own subscription, so if your licensure path requires both exams you can add the second track when you are ready for it.",
  },
];

const baseFaqs = [
  {
    q: "What is The Exam Path?",
    a: "The Exam Path (formerly known as TheCounselorExam.com) is an exam prep platform built specifically for the NCMHCE. It combines realistic clinical case narratives, a full-length timed practice exam, domain analytics, flashcards, a DSM-5-TR library, and optional in-session support to help you practice in a way that feels much closer to the real test.",
  },
  {
    q: "How many practice cases are available?",
    a: "The platform currently includes 14+ individual clinical case narratives covering a wide range of diagnoses — from GAD and MDD to PTSD, Bipolar Disorder, Hoarding, Anorexia, BPD, and more. There's also a full-length timed practice exam, with more cases added regularly.",
  },
  {
    q: "Who writes the narratives and questions?",
    a: "Every clinical case, practice question, and rationale is developed by a team of licensed therapists with years of real-world clinical experience, alongside clinical psychologists and subject-matter experts in mental health counseling. All content is then reviewed by a select sample of current counseling students and recent test-takers for accuracy, relevance, and clarity before it goes live.",
  },
  {
    q: "Who is this for?",
    a: "The Exam Path is designed for anyone preparing for the NCMHCE — including first-time test takers, repeat test takers looking for deeper domain-level insight, and counseling students who want early clinical simulation practice.",
  },
  {
    q: "Is this mainly an AI product?",
    a: "No. The main experience is realistic NCMHCE practice through case narratives, timed exams, and domain-based review. Optional in-session support is there when you want clarification, but it is not the center of the platform.",
  },
  {
    q: "Will my progress be saved if I leave mid-exam?",
    a: "Yes. Your responses are auto-saved as you work through a narrative or practice exam. If you close your browser or navigate away, you can resume exactly where you left off.",
  },
  {
    q: "Can I retake practice exams?",
    a: "Absolutely. You can retake any narrative or practice exam as many times as you want. Each attempt is tracked separately so you can measure improvement over time.",
  },
  {
    q: "What's included during beta access?",
    a: "Beta users can try the complete platform: all clinical narratives, practice exams, optional in-session support, flashcards with spaced repetition, DSM-5-TR library, personalized study plan, domain analytics, Pomodoro timer, and note-taking tools.",
  },
];

const faqs = NCE_ENABLED ? [baseFaqs[0], ...nceFaqs, ...baseFaqs.slice(1)] : baseFaqs;

const FAQSection = () => (
  <section id="faq" className="section-padding bg-muted/10">
    <div className="container max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="card-elevated px-6 border rounded-xl"
          >
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
