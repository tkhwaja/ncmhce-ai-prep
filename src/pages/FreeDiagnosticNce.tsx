import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { NCE_ENABLED } from "@/config/exam-tracks";
import {
  NCE_DIAGNOSTIC_ID,
  NCE_DIAGNOSTIC_MINUTES,
  nceDiagnosticQuestions,
  shortDomainLabel,
} from "@/data/nce/diagnostic";

const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
});

const formatTime = (s: number) => {
  const m = Math.floor(Math.abs(s) / 60);
  const sec = Math.abs(s) % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

type Phase = "intro" | "answering" | "results";

const FreeDiagnosticNce = () => {
  const navigate = useNavigate();
  const questions = nceDiagnosticQuestions;

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(NCE_DIAGNOSTIC_MINUTES * 60);

  const [leadForm, setLeadForm] = useState({ fullName: "", email: "" });
  const [leadError, setLeadError] = useState("");
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    if (!NCE_ENABLED) navigate("/free-diagnostic-case", { replace: true });
  }, [navigate]);

  useEffect(() => {
    trackMetaEvent("Lead", {
      content_name: "Free NCE Diagnostic",
      content_category: "free_diagnostic_start",
    });
  }, []);

  useEffect(() => {
    if (phase !== "answering") return;
    const id = window.setInterval(() => setSecondsRemaining((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  const results = useMemo(() => {
    const domainStats: Record<string, { correct: number; total: number }> = {};
    let correct = 0;
    questions.forEach((q) => {
      const stat = (domainStats[q.domain] ??= { correct: 0, total: 0 });
      stat.total += 1;
      if (answers[q.id] === q.correctAnswerIndex) {
        stat.correct += 1;
        correct += 1;
      }
    });
    const domainScores: Record<string, number> = {};
    Object.entries(domainStats).forEach(([d, s]) => {
      domainScores[d] = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    });
    return {
      correct,
      total: questions.length,
      totalScore: Math.round((correct / questions.length) * 100),
      domainScores,
      domainStats,
    };
  }, [answers, questions]);

  const current = questions[index];
  const answeredCount = Object.keys(answers).length;

  const handleSubmitLead = async () => {
    const parsed = leadSchema.safeParse(leadForm);
    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      setLeadError(f.fullName?.[0] ?? f.email?.[0] ?? "Please check your details.");
      return;
    }

    const answerBreakdown = questions.map((q, i) => ({
      questionId: q.id,
      questionNumber: i + 1,
      domain: q.domain,
      prompt: q.stem,
      selectedAnswer: q.options[answers[q.id]] ?? "No answer selected",
      correctAnswer: q.options[q.correctAnswerIndex],
      explanation: q.explanation,
      isCorrect: answers[q.id] === q.correctAnswerIndex,
    }));

    setLeadLoading(true);
    setLeadError("");

    const { data, error } = await supabase.functions.invoke("free-diagnostic-lead", {
      body: {
        fullName: parsed.data.fullName,
        email: parsed.data.email.toLowerCase(),
        narrativeId: NCE_DIAGNOSTIC_ID,
        examTrack: "nce",
        totalScore: results.totalScore,
        correctAnswers: results.correct,
        totalQuestions: results.total,
        domainScores: results.domainScores,
        answerBreakdown,
      },
    });

    if (error || data?.error) {
      setLeadError("Something went wrong while unlocking your breakdown. Please try again.");
      setLeadLoading(false);
      return;
    }

    setLeadSubmitted(true);
    setLeadLoading(false);
    trackMetaEvent("Lead", {
      content_name: "Free NCE Diagnostic",
      content_category: "free_diagnostic_submit",
    });
  };

  /* ---------------------------------------------------------------- intro */
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Free NCE Diagnostic Quiz | The Exam Path</title>
          <meta
            name="description"
            content="Take a free NCE diagnostic across all eight CACREP content areas and see exactly where you stand before test day."
          />
          <link rel="canonical" href="https://theexampath.com/free-diagnostic-nce" />
        </Helmet>

        <div className="container max-w-2xl mx-auto px-4 py-12">
          <Link to="/free-diagnostic" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" /> Choose a different exam
          </Link>

          <Badge variant="outline" className="mb-4">NCE • Free diagnostic</Badge>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            See where you stand on the NCE
          </h1>
          <p className="text-muted-foreground mb-8">
            {questions.length} exam-style multiple-choice questions, balanced across all eight
            CACREP content areas. You'll get a score by content area and the reasoning behind every
            answer option.
          </p>

          <Card className="card-elevated mb-8">
            <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                {NCE_DIAGNOSTIC_MINUTES} minutes — roughly real NCE pacing
              </p>
              <p>• One best answer per question, four options, just like the real exam.</p>
              <p>• Your content-area breakdown unlocks as soon as you finish.</p>
              <p>• No account needed. We email you the full rationale breakdown.</p>
            </CardContent>
          </Card>

          <Button size="lg" onClick={() => setPhase("answering")}>
            Start the diagnostic <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------ answering */
  if (phase === "answering" && current) {
    const selected = answers[current.id];
    return (
      <div className="min-h-screen bg-background">
        <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className={`font-mono text-sm ${
                secondsRemaining <= 60
                  ? "border-red-500/40 text-red-400"
                  : secondsRemaining <= 300
                    ? "border-amber-500/40 text-amber-400"
                    : ""
              }`}
            >
              <Clock className="h-3 w-3 mr-1" />
              {secondsRemaining < 0 ? `+${formatTime(secondsRemaining)} over` : formatTime(secondsRemaining)}
            </Badge>
            <span className="text-sm font-medium text-foreground">Free NCE Diagnostic</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {index + 1} of {questions.length}
          </span>
        </div>

        <Progress value={((index + 1) / questions.length) * 100} className="h-1 rounded-none" />

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
            {shortDomainLabel(current.domain)}
          </p>
          <h2 className="text-lg font-medium text-foreground leading-relaxed mb-6">{current.stem}</h2>

          <div className="space-y-2 mb-8">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: i }))}
                className={`w-full text-left rounded-lg border p-4 text-sm transition-colors ${
                  selected === i
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:bg-muted/50 text-muted-foreground"
                }`}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
            {index < questions.length - 1 ? (
              <Button disabled={selected === undefined} onClick={() => setIndex((i) => i + 1)}>
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                disabled={answeredCount < questions.length}
                onClick={() => setPhase("results")}
              >
                Finish and see my score <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
          {index === questions.length - 1 && answeredCount < questions.length && (
            <p className="text-xs text-muted-foreground mt-3">
              Answer all {questions.length} questions to see your breakdown ({answeredCount} done).
            </p>
          )}
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------- results */
  const sortedDomains = Object.entries(results.domainScores).sort((a, b) => b[1] - a[1]);
  const strongest = sortedDomains[0]?.[0];
  const weakest = sortedDomains[sortedDomains.length - 1]?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Your Free NCE Diagnostic Results | The Exam Path</title>
      </Helmet>

      <div className="container max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-1">Your NCE diagnostic results</h1>
        <p className="text-muted-foreground mb-8">
          {results.correct} of {results.total} correct
        </p>

        <Card className="card-elevated mb-6">
          <CardContent className="p-6">
            <p className="text-4xl font-bold text-primary mb-1">{results.totalScore}%</p>
            <p className="text-sm text-muted-foreground mb-6">Overall diagnostic score</p>

            <div className="space-y-3">
              {sortedDomains.map(([domain, score]) => (
                <div key={domain}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-foreground">{shortDomainLabel(domain)}</span>
                    <span className="text-muted-foreground">
                      {results.domainStats[domain].correct}/{results.domainStats[domain].total} · {score}%
                    </span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </div>

            {strongest && weakest && (
              <>
                <Separator className="my-6" />
                <p className="text-sm text-muted-foreground">
                  Strongest area: <span className="text-foreground font-medium">{shortDomainLabel(strongest)}</span>
                  {" · "}
                  Focus next on: <span className="text-foreground font-medium">{shortDomainLabel(weakest)}</span>
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {!leadSubmitted ? (
          <Card className="card-elevated mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-primary" />
                <h2 className="text-base font-semibold text-foreground">
                  Unlock your full answer breakdown
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                See why each answer is right or wrong, question by question — and get the same
                breakdown emailed to you to study from later.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    value={leadForm.fullName}
                    onChange={(e) => setLeadForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder="Jordan Rivera"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {leadError && <p className="text-sm text-destructive mb-3">{leadError}</p>}

              <Button onClick={handleSubmitLead} disabled={leadLoading}>
                <Mail className="h-4 w-4" />
                {leadLoading ? "Unlocking…" : "Unlock my breakdown"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4 mb-8">
            <p className="text-sm text-muted-foreground">
              Your breakdown is on its way to {leadForm.email.toLowerCase()}.
            </p>
            {questions.map((q, i) => {
              const chosen = answers[q.id];
              const isCorrect = chosen === q.correctAnswerIndex;
              return (
                <Card key={q.id} className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Q{i + 1} · {shortDomainLabel(q.domain)}
                      </p>
                      {isCorrect ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-foreground mb-3">{q.stem}</p>
                    <div className="space-y-1.5 mb-3">
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className={`rounded-md border p-2.5 text-xs ${
                            oi === q.correctAnswerIndex
                              ? "border-emerald-500/40 bg-emerald-500/5 text-foreground"
                              : oi === chosen
                                ? "border-destructive/40 bg-destructive/5 text-foreground"
                                : "border-border text-muted-foreground"
                          }`}
                        >
                          <span className="font-semibold mr-1.5">{String.fromCharCode(65 + oi)}.</span>
                          {opt}
                          {q.optionRationales?.[oi] && (
                            <span className="block mt-1 text-muted-foreground">
                              {q.optionRationales[oi]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{q.explanation}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="card-elevated">
          <CardContent className="p-6">
            <h2 className="text-base font-semibold text-foreground mb-2">
              Turn this into a study plan
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              The NCE track gives you a full question bank with rationales for every option,
              full-length timed practice exams, a structured learning library and content-area
              analytics that keep pointing you at your weakest areas.
            </p>
            <Button onClick={() => navigate("/signup?track=nce")}>
              Start studying for the NCE <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FreeDiagnosticNce;
