import { Ban, MonitorX, TrendingDown, MessageCircleOff, BarChart2, Users } from "lucide-react";

const painPoints = [
  {
    icon: Ban,
    title: "Static Question Banks",
    desc: "Most platforms offer rigid, unchanging question sets with no way to ask why an answer is correct or explore concepts deeper.",
  },
  {
    icon: MonitorX,
    title: "Outdated Interfaces",
    desc: "Prep tools rarely replicate the actual Pearson VUE exam experience, leaving you underprepared for test-day navigation.",
  },
  {
    icon: TrendingDown,
    title: "No Adaptive Guidance",
    desc: "You get a score, but no real direction on what to study next. Weak areas stay weak because nobody tells you where to focus.",
  },
  {
    icon: MessageCircleOff,
    title: "No Follow-Up Learning",
    desc: "When you don't understand an explanation, there's no way to ask a follow-up question. You're stuck Googling on your own.",
  },
  {
    icon: BarChart2,
    title: "Weak Analytics",
    desc: "Basic pass/fail scoring doesn't help you understand domain-level performance or track real progress over time.",
  },
  {
    icon: Users,
    title: "Studying in Isolation",
    desc: "Most platforms offer no community, no accountability, and no sense that anyone else is going through the same struggle.",
  },
];

const PainPointsSection = () => (
  <section className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Current NCMHCE Prep Feels Frustrating
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          You're putting in the hours, but your study tools aren't keeping up. Here's what's holding most candidates back.
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
