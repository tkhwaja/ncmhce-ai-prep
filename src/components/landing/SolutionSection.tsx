import { MessageSquare, Monitor, CalendarClock, BarChart3, BookOpen, Layers } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Support When You Need It",
    desc: "Get optional in-context help, explanations, and clarification without interrupting the flow of exam-style practice.",
    badge: null,
  },
  {
    icon: Monitor,
    title: "Realistic NCMHCE Simulations",
    desc: "Practice with clinical case narratives that mirror the actual exam format — information gathering, diagnosis, and treatment planning.",
    badge: null,
  },
  {
    icon: CalendarClock,
    title: "Personalized Study Plans",
    desc: "Build a study plan around your exam date, weekly availability, and weaker domains so your prep stays focused and realistic.",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "Score Tracking & Analytics",
    desc: "Track your performance across all five NCMHCE domains, review past attempts, and measure real improvement over time.",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Learning Library & Flashcards",
    desc: "A comprehensive DSM-5-TR reference, counseling theory modules, glossary, and spaced-repetition flashcards — all built in.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Full-Length Practice Exams",
    desc: "Timed, multi-narrative practice exams that simulate the real NCMHCE experience with auto-save and retake support.",
    badge: null,
  },
];

const SolutionSection = () => (
  <section id="features" className="section-padding bg-muted/10">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Platform</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Everything You Need to Pass the NCMHCE
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every feature is designed to mirror exam-style decision making and help you prepare with confidence.
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
