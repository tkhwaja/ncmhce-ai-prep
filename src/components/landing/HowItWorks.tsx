import { ClipboardCheck, BrainCircuit, LockKeyhole, TrendingUp } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Take the free diagnostic case", desc: "Start one full exam-style case and experience the same layout, pacing, and case flow as the platform." },
  { icon: LockKeyhole, title: "Unlock your breakdown", desc: "After you finish, enter your full name and email to reveal your score, missed questions, and detailed review." },
  { icon: BrainCircuit, title: "See exactly what to fix", desc: "Use the domain breakdown, rationale review, and one-page strategy sheet to identify how your reasoning needs to improve." },
  { icon: TrendingUp, title: "Move into full prep", desc: "Step into 20+ narratives, full-length exams, and ongoing weekly case drops once you’re ready for the full platform." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-muted/10">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Train the way you’ll be tested
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="text-center relative">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">Step {i + 1}</div>
            <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
