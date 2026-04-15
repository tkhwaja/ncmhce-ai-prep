import { MessageSquare, Monitor, CalendarClock, BarChart3, BookOpen, Users2 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Tutor in Every Study Session",
    desc: "Ask questions, get explanations, and explore clinical concepts in real time — right inside your study flow.",
    badge: null,
  },
  {
    icon: Monitor,
    title: "Realistic NCMHCE Simulations",
    desc: "Practice with Pearson VUE-style clinical simulations that mirror the actual exam format, timing, and decision-making structure.",
    badge: null,
  },
  {
    icon: CalendarClock,
    title: "Personalized Study Plans",
    desc: "AI-generated study plans that adapt to your schedule, progress, and weak areas — so you always know what to study next.",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "Smart Performance Analytics",
    desc: "Track your performance across domains, identify patterns in your mistakes, and measure real improvement over time.",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Built-In Study Tools",
    desc: "Flashcards, quiz generation, and productivity tools designed specifically for NCMHCE content and clinical reasoning.",
    badge: "Coming Soon",
  },
  {
    icon: Users2,
    title: "Community & Accountability",
    desc: "Connect with other candidates, share progress, and stay motivated with study groups and accountability features.",
    badge: "Coming Soon",
  },
];

const SolutionSection = () => (
  <section id="features" className="section-padding bg-muted/10">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Solution</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for How Counselors Actually Study
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every feature is designed around real outcomes — not just checking boxes. This is what modern exam prep should look like.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc, badge }, i) => (
          <div
            key={i}
            className="card-elevated p-6 hover:border-primary/20 transition-all duration-300 group relative"
          >
            {badge && (
              <span className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5">
                {badge}
              </span>
            )}
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <Icon size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
