import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NCE_ENABLED, EXAM_TRACKS } from "@/config/exam-tracks";
import { nceDiagnosticQuestions, NCE_DIAGNOSTIC_MINUTES } from "@/data/nce/diagnostic";

/**
 * Public entry point for the free diagnostic. Lets a visitor pick their exam
 * before entering the funnel. When NCE is not yet enabled this page simply
 * forwards the visitor to the NCMHCE case so the funnel is unchanged.
 */
const FreeDiagnosticChooser = () => {
  const navigate = useNavigate();

  const options = [
    {
      id: "ncmhce",
      icon: FileText,
      label: EXAM_TRACKS.ncmhce.label,
      title: "Clinical case simulation",
      blurb:
        "Work one full exam-style client case with sequential sessions, then see how your clinical decisions scored across the exam domains.",
      meta: "1 full case • same layout as the real exam",
      to: "/free-diagnostic-case",
    },
    {
      id: "nce",
      icon: ListChecks,
      label: EXAM_TRACKS.nce.label,
      title: "Knowledge diagnostic",
      blurb:
        "Answer a balanced set of multiple-choice questions across all eight CACREP content areas and see exactly which areas need work.",
      meta: `${nceDiagnosticQuestions.length} questions • ${NCE_DIAGNOSTIC_MINUTES} minutes`,
      to: "/free-diagnostic-nce",
    },
  ];

  if (!NCE_ENABLED) {
    navigate("/free-diagnostic-case", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free NCE & NCMHCE Diagnostic | The Exam Path</title>
        <meta
          name="description"
          content="Choose your exam and take a free diagnostic — a full NCMHCE clinical case or an NCE knowledge diagnostic across all eight content areas."
        />
        <link rel="canonical" href="https://theexampath.com/free-diagnostic" />
      </Helmet>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Which exam are you preparing for?
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Pick your exam and we'll give you the matching free diagnostic. You'll get a scored
          breakdown by content area, plus the reasoning behind every answer.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {options.map(({ id, icon: Icon, label, title, blurb, meta, to }) => (
            <div key={id} className="card-elevated p-6 flex flex-col">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">{label}</p>
              <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{blurb}</p>
              <p className="text-xs text-muted-foreground mb-6">{meta}</p>
              <Button className="mt-auto w-full" onClick={() => navigate(to)}>
                Start the free diagnostic
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeDiagnosticChooser;
