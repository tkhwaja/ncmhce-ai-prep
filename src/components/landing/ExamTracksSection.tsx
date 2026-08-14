import { Link } from "react-router-dom";
import { Check, FileText, ListChecks } from "lucide-react";
import { EXAM_TRACKS, NCE_ENABLED, formatPrice } from "@/config/exam-tracks";

const nce = EXAM_TRACKS.nce;

const tracks = [
  {
    id: "ncmhce",
    icon: FileText,
    label: EXAM_TRACKS.ncmhce.label,
    fullName: EXAM_TRACKS.ncmhce.fullName,
    blurb:
      "The clinical case-simulation exam. Practice full narratives with sequential sessions, then review why each clinical decision was right or wrong.",
    points: [
      "20+ individual clinical case narratives",
      "Two full-length 11-case practice exams",
      "Domain analytics across all five scored areas",
      "DSM-5-TR reference library and flashcards",
    ],
    price: `${formatPrice(EXAM_TRACKS.ncmhce.monthlyPriceCents)}/month`,
    status: "Available now",
  },
  {
    id: "nce",
    icon: ListChecks,
    label: nce.label,
    fullName: nce.fullName,
    blurb:
      "The 200-question multiple-choice knowledge exam. Drill the eight CACREP content areas with per-option rationales that teach the reasoning, not just the answer.",
    points: [
      "1,000-question bank across all eight content areas",
      "Two full-length timed 200-question practice exams",
      "Rationales for every answer option",
      "Content-area analytics and a targeted study plan",
    ],
    price: nce.founderMonthlyPriceCents
      ? `${formatPrice(nce.founderMonthlyPriceCents)}/month founding price`
      : `${formatPrice(nce.monthlyPriceCents)}/month`,
    status: "Launching soon",
  },
];

const ExamTracksSection = () => (
  <section id="exams" className="section-padding">
    <div className="container max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Exam Tracks</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Two exams. One study platform.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Pick your exam when you sign up and the entire platform — practice, analytics, study plan and
          library — reshapes around it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {tracks.map(({ id, icon: Icon, label, fullName, blurb, points, price, status }) => (
          <div key={id} className="card-elevated p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon size={22} className="text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                {status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground">{label}</h3>
            <p className="text-xs text-muted-foreground mb-3">{fullName}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{blurb}</p>

            <ul className="space-y-2 mb-6">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-foreground">{price}</span>
              <Link
                to={`/signup?track=${id}`}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!nce.contentReady && (
        <p className="text-xs text-muted-foreground text-center mt-6">
          NCE content is being finalized. Founding members keep the founding rate for as long as they stay
          subscribed.
        </p>
      )}
    </div>
  </section>
);

export default NCE_ENABLED ? ExamTracksSection : () => null;
