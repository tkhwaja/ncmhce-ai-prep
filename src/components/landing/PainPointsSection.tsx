import { Ban, MonitorX, TrendingDown, MessageCircleOff, BarChart2, CalendarClock } from "lucide-react";

const painPoints = [
  {
    icon: Ban,
    title: "You learn content, not case thinking",
    desc: "A lot of prep tools teach facts without training you to choose the safest, most clinically appropriate next step under pressure.",
  },
  {
    icon: MonitorX,
    title: "The interface feels nothing like exam day",
    desc: "If the pacing, layout, and locked-section feel are missing, the real exam still feels unfamiliar when it counts.",
  },
  {
    icon: TrendingDown,
    title: "Scores don’t tell you why you missed it",
    desc: "A raw percentage doesn’t show where your reasoning breaks down or which domain habits are keeping you below passing.",
  },
  {
    icon: MessageCircleOff,
    title: "Explanations stop too early",
    desc: "When an answer still doesn’t click, most platforms leave you stuck between vague rationales and your own guesswork.",
  },
  {
    icon: BarChart2,
    title: "Weak areas stay hidden too long",
    desc: "Without domain-level patterns and review feedback, candidates repeat the same misses until late in the study cycle.",
  },
  {
    icon: CalendarClock,
    title: "Content gets stale fast",
    desc: "When no new narratives are added, you memorize old cases instead of building flexible clinical judgment week after week.",
  },
];

const PainPointsSection = () => (
  <section className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why smart candidates still feel shaky going into the NCMHCE
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The biggest issue usually is not effort. It’s using prep tools that never fully train the way the exam actually thinks.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {painPoints.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="card-elevated p-6 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
              <Icon size={20} className="text-destructive/70" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
