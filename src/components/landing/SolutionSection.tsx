import { MessageSquare, Monitor, CalendarClock, BarChart3, BookOpen, Layers } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Support when you need it",
    desc: "Get optional in-context help and follow-up explanations without turning the platform into a gimmick.",
    badge: null,
  },
  {
    icon: Monitor,
    title: "Realistic NCMHCE simulations",
    desc: "Practice inside an exam-style layout that mirrors how clinical information unfolds, sections lock, and timing pressure builds.",
    badge: null,
  },
  {
    icon: CalendarClock,
    title: "New narratives added regularly",
    desc: "Keep sharpening your judgment with fresh cases instead of overfitting to the same limited set over and over.",
    badge: "Weekly",
  },
  {
    icon: BarChart3,
    title: "Score tracking and analytics",
    desc: "See domain patterns, breakdowns, and review trends so your study decisions are based on more than a pass/fail score.",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Learning library and flashcards",
    desc: "Use the built-in DSM-5-TR library, counseling review modules, and flashcards to close content gaps fast.",
    badge: null,
  },
  {
    icon: Layers,
    title: "Full-length practice exams",
    desc: "Run the full exam experience across 11 narratives with one random case left ungraded, just like the actual test structure.",
    badge: null,
  },
];

const SolutionSection = () => (
  <section id="features" className="section-padding bg-muted/10">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Platform</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built to train the exact reasoning the exam rewards
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every feature is designed to help you think like a careful, ethical, entry-level clinician under exam pressure.
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
