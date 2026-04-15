import { UserPlus, Key, BrainCircuit, TrendingUp } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Join the Waitlist", desc: "Sign up with your email to get early access and launch updates." },
  { icon: Key, title: "Get Early Access", desc: "Be among the first to try the platform with founding-user benefits." },
  { icon: BrainCircuit, title: "Practice with AI Simulations", desc: "Study with realistic NCMHCE simulations and contextual AI support." },
  { icon: TrendingUp, title: "Study Smarter", desc: "Focus on your weak areas with adaptive analytics and personalized plans." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-muted/10">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get Started in Four Steps
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
