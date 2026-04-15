import { Brain, Monitor, Sparkles, Clock } from "lucide-react";

const items = [
  { icon: Brain, text: "Built specifically for NCMHCE preparation" },
  { icon: Sparkles, text: "Designed around clinical reasoning, not memorization" },
  { icon: Monitor, text: "Inspired by real exam pain points" },
  { icon: Clock, text: "Early access launching soon" },
];

const TrustBar = () => (
  <section id="trust" className="py-12 border-y border-border bg-muted/20">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
            <Icon size={18} className="text-primary shrink-0" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
