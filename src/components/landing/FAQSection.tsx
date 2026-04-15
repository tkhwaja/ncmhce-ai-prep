import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is CounselorExam.io?",
    a: "CounselorExam.io is an upcoming AI-powered exam prep platform built specifically for the NCMHCE. It combines realistic clinical simulations, a contextual AI tutor, adaptive analytics, and personalized study tools to help you prepare smarter and pass with confidence.",
  },
  {
    q: "Is the platform live yet?",
    a: "Not yet. We're currently building the platform and collecting waitlist signups. Early access will open soon — join the waitlist to be notified first and secure founding-user benefits.",
  },
  {
    q: "Who is this for?",
    a: "CounselorExam.io is designed for anyone preparing for the NCMHCE — including first-time test takers, repeat test takers looking for deeper insight, and counseling students who want early clinical simulation practice.",
  },
  {
    q: "Will there be full-length simulations?",
    a: "Yes. We're building full-length, Pearson VUE-style NCMHCE simulations that mirror the real exam's clinical decision-making format, including information gathering, diagnosis, and treatment planning sections.",
  },
  {
    q: "Will AI explanations be grounded in DSM-5-TR concepts?",
    a: "Absolutely. Our AI tutor is designed to provide explanations rooted in DSM-5-TR diagnostic criteria, evidence-based treatment approaches, and clinical reasoning frameworks relevant to the NCMHCE.",
  },
  {
    q: "Is this only for repeat test takers?",
    a: "Not at all. While repeat test takers benefit from targeted weak-area analysis, first-time takers and students gain just as much from structured simulations, guided study plans, and AI-supported learning.",
  },
  {
    q: "When will early access open?",
    a: "We'll announce the early access date to waitlist subscribers first. Join the waitlist to stay in the loop and get priority access when we launch.",
  },
];

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
