import { useState } from "react";
import { Check, X, Minus } from "lucide-react";
import { NCE_ENABLED } from "@/config/exam-tracks";

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

type Row = { feature: string; statuses: Status[] };

interface TrackComparison {
  id: "ncmhce" | "nce";
  label: string;
  heading: string;
  blurb: string;
  competitors: string[];
  rows: Row[];
}

const COMPARISONS: TrackComparison[] = [
  {
    id: "ncmhce",
    label: "NCMHCE",
    heading: "The Closest Thing to the Real NCMHCE",
    blurb:
      "See how The Exam Path compares when realism, pacing, and clinical decision-making matter most.",
    competitors: ["The Exam Path", "Therapist Dev Center", "Mometrix", "AATBS"],
    rows: [
      { feature: "Exam-style clinical case narratives", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Continuous question flow like the exam", statuses: ["yes", "limited", "no", "no"] },
      { feature: "Realistic clinical case narratives", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Full-length timed practice exams", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Auto-save & resume mid-exam", statuses: ["yes", "no", "no", "no"] },
      { feature: "Domain-level performance analytics", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "DSM-5-TR reference library", statuses: ["yes", "no", "no", "limited"] },
      { feature: "Optional in-session support", statuses: ["yes", "no", "no", "no"] },
      { feature: "Flashcards with spaced repetition", statuses: ["yes", "no", "no", "limited"] },
      { feature: "Personalized study plans", statuses: ["yes", "no", "no", "limited"] },
      { feature: "Modern user experience", statuses: ["yes", "no", "no", "no"] },
    ],
  },
  {
    id: "nce",
    label: "NCE",
    heading: "Built for How the NCE Actually Tests You",
    blurb:
      "Multiple-choice mastery across the eight core counseling areas, with rationales that teach the reasoning behind every answer.",
    competitors: ["The Exam Path", "Therapist Dev Center", "Mometrix", "AATBS"],
    rows: [
      { feature: "Questions mapped to the NBCC work behavior domains", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Full 200-item timed practice exams", statuses: ["yes", "yes", "limited", "yes"] },
      { feature: "Rationales for every option, not just the key", statuses: ["yes", "limited", "no", "limited"] },
      { feature: "Structured learning library by CACREP area", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Auto-save & resume mid-exam", statuses: ["yes", "no", "no", "no"] },
      { feature: "Domain-level performance analytics", statuses: ["yes", "limited", "limited", "limited"] },
      { feature: "Free NCE diagnostic before you buy", statuses: ["yes", "no", "no", "no"] },
      { feature: "Flashcards with spaced repetition", statuses: ["yes", "no", "no", "limited"] },
      { feature: "Personalized study plans", statuses: ["yes", "no", "no", "limited"] },
      { feature: "Modern user experience", statuses: ["yes", "no", "no", "no"] },
    ],
  },
];

const ComparisonTable = () => {
  const tracks = COMPARISONS.filter((t) => t.id === "ncmhce" || NCE_ENABLED);
  const [active, setActive] = useState<"ncmhce" | "nce">("ncmhce");
  const current = tracks.find((t) => t.id === active) ?? tracks[0];

  return (
    <section id="compare" className="section-padding">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Compare</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{current.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{current.blurb}</p>
        </div>

        {tracks.length > 1 && (
          <div className="flex justify-center mb-10">
            <div
              role="tablist"
              aria-label="Choose exam track"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 p-1"
            >
              {tracks.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === t.id}
                  onClick={() => setActive(t.id)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    active === t.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop table */}
        <div className="hidden md:block card-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                  {current.competitors.map((c, i) => (
                    <th key={i} className={`p-4 text-center font-semibold ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {current.rows.map(({ feature, statuses }, i) => (
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
          {current.rows.map(({ feature, statuses }, i) => (
            <div key={i} className="card-elevated p-4">
              <p className="font-medium text-foreground mb-3 text-sm">{feature}</p>
              <div className="grid grid-cols-2 gap-2">
                {current.competitors.map((c, j) => (
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
};

export default ComparisonTable;
