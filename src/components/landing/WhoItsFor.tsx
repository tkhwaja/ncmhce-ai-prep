import { GraduationCap, RotateCcw, BookOpen } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "First-Time Test Takers",
    desc: "You want a structured, guided experience that builds clinical reasoning skills and confidence — not just a stack of practice questions.",
  },
  {
    icon: RotateCcw,
    title: "Repeat Test Takers",
    desc: "You've taken the exam before and need targeted insight into your weak areas, not a one-size-fits-all review course.",
  },
  {
    icon: BookOpen,
    title: "Counseling Students",
    desc: "You want early exposure to NCMHCE-style clinical simulations so you're not starting from scratch after graduation.",
  },
];

const WhoItsFor = () => (
  <section className="section-padding bg-muted/10">
    <div className="container max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Who It's For</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for Every Stage of Your NCMHCE Journey
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {personas.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="card-elevated p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
