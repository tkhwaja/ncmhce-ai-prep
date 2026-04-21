import { Check, X, Minus } from "lucide-react";

type Status = "yes" | "no" | "limited";

const statusIcon = (s: Status) => {
  switch (s) {
    case "yes": return <Check size={16} className="text-primary" />;
    case "no": return <X size={16} className="text-destructive/60" />;
    case "limited": return <Minus size={16} className="text-muted-foreground" />;
  }
};

const statusLabel = (s: Status) => {
  switch (s) {
    case "yes": return "Included";
    case "no": return "No";
    case "limited": return "Limited";
  }
};

const competitors = ["TheCounselorExam.com", "Therapist Dev Center", "Mometrix", "AATBS"];

const rows: { feature: string; statuses: Status[] }[] = [
  { feature: "AI tutoring built into study flow", statuses: ["yes", "no", "no", "no"] },
  { feature: "Ask follow-up questions in context", statuses: ["yes", "no", "no", "no"] },
  { feature: "Realistic clinical case narratives", statuses: ["yes", "limited", "limited", "limited"] },
  { feature: "Full-length timed practice exams", statuses: ["yes", "limited", "limited", "limited"] },
  { feature: "Auto-save & resume mid-exam", statuses: ["yes", "no", "no", "no"] },
  { feature: "Domain-level performance analytics", statuses: ["yes", "limited", "limited", "limited"] },
  { feature: "DSM-5-TR reference library", statuses: ["yes", "no", "no", "limited"] },
  { feature: "Flashcards with spaced repetition", statuses: ["yes", "no", "no", "limited"] },
  { feature: "AI-generated study plans", statuses: ["yes", "no", "no", "limited"] },
  { feature: "Modern user experience", statuses: ["yes", "no", "no", "no"] },
];

const ComparisonTable = () => (
  <section id="compare" className="section-padding">
    <div className="container max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Compare</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Not Just Another Question Bank
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how TheCounselorExam.com stacks up against the tools you've probably already tried.
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                {competitors.map((c, i) => (
                  <th key={i} className={`p-4 text-center font-semibold ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, statuses }, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="p-4 text-foreground">{feature}</td>
                  {statuses.map((s, j) => (
                    <td key={j} className={`p-4 text-center ${j === 0 ? "bg-primary/5" : ""}`}>
                      <div className="flex items-center justify-center gap-1.5">
                        {statusIcon(s)}
                        <span className="text-xs text-muted-foreground">{statusLabel(s)}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map(({ feature, statuses }, i) => (
          <div key={i} className="card-elevated p-4">
            <p className="font-medium text-foreground mb-3 text-sm">{feature}</p>
            <div className="grid grid-cols-2 gap-2">
              {competitors.map((c, j) => (
                <div key={j} className={`flex items-center gap-2 text-xs rounded-md px-2 py-1.5 ${j === 0 ? "bg-primary/10" : "bg-muted/30"}`}>
                  {statusIcon(statuses[j])}
                  <span className={j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonTable;
