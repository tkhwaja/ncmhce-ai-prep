import { Brain, BookOpen, Sparkles, FileText } from "lucide-react";

const items = [
  { icon: Brain, text: "20+ clinical case narratives" },
  { icon: FileText, text: "11-case full-length practice exam" },
  { icon: Sparkles, text: "New narratives added weekly" },
  { icon: BookOpen, text: "DSM-5-TR reference library" },
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
