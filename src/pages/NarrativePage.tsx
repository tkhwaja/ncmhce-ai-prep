import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNarrativeById, getNarrativeSectionMinutes, totalQuestionCount, NARRATIVE_DOMAINS } from "@/data/narratives";
import type { NarrativeQuestion } from "@/data/narratives";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Clock, ChevronRight, ChevronLeft, CheckCircle2, XCircle,
  RotateCcw, ArrowRight, LayoutDashboard,
} from "lucide-react";
import NarrativeReviewChat from "@/components/NarrativeReviewChat";

type Phase = "answering" | "section-summary" | "results" | "review";

const formatTime = (s: number) => {
  const abs = Math.max(0, s);
  const m = Math.floor(abs / 60);
  const sec = abs % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

const NarrativePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const narrative = getNarrativeById(id);

  const minutesPerSection = narrative ? getNarrativeSectionMinutes(narrative) : 7;
  const sectionDuration = minutesPerSection * 60;

  // Flat continuous list of questions across all sections (for numbering, results)
  const allQuestions = useMemo<NarrativeQuestion[]>(
    () => (narrative ? narrative.sections.flatMap((s) => s.questions) : []),
    [narrative]
  );

  const [phase, setPhase] = useState<Phase>("answering");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndexInSection, setQuestionIndexInSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(sectionDuration);
  const [timerExpired, setTimerExpired] = useState(false);
  const [showExpiryDialog, setShowExpiryDialog] = useState(false);
  const dialogShownRef = useRef(false);
  const [submitting, setSubmitting] = useState(false);
  const [reviewQuestionGlobalIndex, setReviewQuestionGlobalIndex] = useState(0);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [loadingDraft, setLoadingDraft] = useState(true);

  // Load saved draft on mount
  useEffect(() => {
    if (!user || !narrative) { setLoadingDraft(false); return; }
    supabase
      .from("narrative_attempts")
      .select("id, dm_answers, completed_at")
      .eq("user_id", user.id)
      .eq("narrative_id", narrative.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const latest = data[0];
          if (!latest.completed_at) {
            // Resume draft
            setAttemptId(latest.id);
            const saved = latest.dm_answers as Record<string, number>;
            if (saved && typeof saved === "object") {
              setAnswers(saved);
              // Figure out which section/question to resume at
              const sections = narrative.sections;
              for (let si = sections.length - 1; si >= 0; si--) {
                const qs = sections[si].questions;
                const answeredInSection = qs.filter((q) => saved[q.id] !== undefined);
                if (answeredInSection.length > 0) {
                  setSectionIndex(si);
                  const lastAnsweredIdx = qs.findIndex(
                    (q) => q.id === answeredInSection[answeredInSection.length - 1].id
                  );
                  setQuestionIndexInSection(Math.min(lastAnsweredIdx + 1, qs.length - 1));
                  break;
                }
              }
            }
          }
        }
        setLoadingDraft(false);
      });
  }, [user, narrative]);

  // Auto-save answers to DB on change
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (!user || !narrative || phase === "results" || phase === "review") return;
    if (Object.keys(answers).length === 0) return;

    clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(async () => {
      if (attemptId) {
        await supabase
          .from("narrative_attempts")
          .update({ dm_answers: answers as any })
          .eq("id", attemptId);
      } else {
        const { data } = await supabase
          .from("narrative_attempts")
          .insert({
            user_id: user.id,
            narrative_id: narrative.id,
            ig_selections: [],
            dm_answers: answers as any,
            domain_scores: {},
            total_score: null,
            completed_at: null,
          })
          .select("id")
          .single();
        if (data) setAttemptId(data.id);
      }
    }, 1500);

    return () => clearTimeout(saveTimeoutRef.current);
  }, [answers, user, narrative, attemptId, phase]);

  // Reset timer when entering a new section
  useEffect(() => {
    if (phase === "answering") {
      setSecondsRemaining(sectionDuration);
      setTimerExpired(false);
      dialogShownRef.current = false;
    }
  }, [phase, sectionIndex, sectionDuration]);

  // Countdown
  useEffect(() => {
    if (phase !== "answering") return;
    const interval = setInterval(() => {
      setSecondsRemaining((s) => {
        const next = s - 1;
        if (next <= 0 && !dialogShownRef.current) {
          dialogShownRef.current = true;
          setTimerExpired(true);
          setShowExpiryDialog(true);
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  if (!narrative || loadingDraft) {
    return (
      <div className="p-6 text-center">
        {loadingDraft ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : (
          <>
            <p className="text-muted-foreground">Narrative not found.</p>
            <Button onClick={() => navigate("/narratives")} className="mt-4">Back to Narratives</Button>
          </>
        )}
      </div>
    );
  }

  const totalQs = totalQuestionCount(narrative);
  const currentSection = narrative.sections[sectionIndex];
  const currentQuestion = currentSection.questions[questionIndexInSection];
  const globalQuestionNumber = currentQuestion?.questionNumber ?? 1;

  // Visible right-panel sections: section 0 always visible; section 1, 2 visible only once unlocked.
  const visibleSectionIndex = phase === "review" ? narrative.sections.length - 1 : sectionIndex;

  const handleSelectAnswer = (qid: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
  };

  const goPrev = () => {
    if (questionIndexInSection > 0) setQuestionIndexInSection(questionIndexInSection - 1);
  };

  const goNext = () => {
    if (questionIndexInSection < currentSection.questions.length - 1) {
      setQuestionIndexInSection(questionIndexInSection + 1);
    } else {
      setPhase("section-summary");
    }
  };

  const confirmAndContinue = () => {
    if (sectionIndex < narrative.sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setQuestionIndexInSection(0);
      setPhase("answering");
    } else {
      void submitNarrative();
    }
  };

  const calculateResults = () => {
    let correct = 0;
    const domainStats: Record<string, { correct: number; total: number }> = {};
    NARRATIVE_DOMAINS.forEach((d) => (domainStats[d] = { correct: 0, total: 0 }));

    allQuestions.forEach((q) => {
      domainStats[q.domain].total++;
      if (answers[q.id] === q.correctAnswer) {
        correct++;
        domainStats[q.domain].correct++;
      }
    });

    const totalScore = Math.round((correct / allQuestions.length) * 100);
    return { correct, total: allQuestions.length, totalScore, domainStats };
  };

  const submitNarrative = async () => {
    setSubmitting(true);
    const { totalScore, domainStats } = calculateResults();
    const domainScores: Record<string, number> = {};
    Object.entries(domainStats).forEach(([d, { correct, total }]) => {
      domainScores[d] = total > 0 ? Math.round((correct / total) * 100) : 0;
    });

    if (user) {
      const completedAt = new Date().toISOString();
      const payload = {
        dm_answers: answers as any,
        domain_scores: domainScores as any,
        total_score: totalScore,
        time_spent: sectionDuration * narrative.sections.length - secondsRemaining,
        completed_at: completedAt,
      };

      if (attemptId) {
        await supabase.from("narrative_attempts").update(payload).eq("id", attemptId);
      } else {
        await supabase.from("narrative_attempts").insert({
          user_id: user.id,
          narrative_id: narrative.id,
          ig_selections: [],
          ...payload,
        });
      }
    }
    setPhase("results");
    setSubmitting(false);
  };

  const handleRetry = () => {
    setAnswers({});
    setSectionIndex(0);
    setQuestionIndexInSection(0);
    setPhase("answering");
    setAttemptId(null);
    setTimerExpired(false);
    setSecondsRemaining(sectionDuration);
    dialogShownRef.current = false;
  };

  const allCurrentSectionAnswered = currentSection.questions.every((q) => answers[q.id] !== undefined);
  const answeredCountThisSection = currentSection.questions.filter((q) => answers[q.id] !== undefined).length;

  const results = phase === "results" || phase === "review" ? calculateResults() : null;

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem-2.5rem)]">
      {/* Top Bar */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30 shrink-0">
        <div className="flex items-center gap-4">
          {phase === "answering" && (
            <Badge
              variant="outline"
              className={`font-mono text-sm ${
                secondsRemaining <= 60 ? "border-red-500/40 text-red-400" :
                secondsRemaining <= 300 ? "border-amber-500/40 text-amber-400" : ""
              }`}
            >
              <Clock className="h-3 w-3 mr-1" />
              {timerExpired ? `+${formatTime(Math.abs(secondsRemaining))} over` : formatTime(secondsRemaining)}
            </Badge>
          )}
          <span className="text-sm font-medium text-foreground">{narrative.title}</span>
        </div>
        <Badge variant="outline" className="text-xs">
          {phase === "answering" && `Section ${sectionIndex + 1} of ${narrative.sections.length}`}
          {phase === "section-summary" && `Section ${sectionIndex + 1} Summary`}
          {phase === "results" && "Results"}
          {phase === "review" && "Review Mode"}
        </Badge>
      </div>

      <div className="flex-1 overflow-hidden flex">
        {/* LEFT PANEL — questions / summary / results / review */}
        <div className="flex-1 lg:flex-none lg:w-2/5 overflow-auto border-r border-border">
          {phase === "answering" && (
            <div className="p-6 max-w-2xl mx-auto space-y-6">
              <div>
                <p className="text-xs text-muted-foreground">{currentSection.sessionLabel} — Question {globalQuestionNumber}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{currentQuestion.domain}</p>
                <p className="text-xs text-muted-foreground mt-3">Question {globalQuestionNumber} of {totalQs}</p>
                <Progress value={(globalQuestionNumber / totalQs) * 100} className="h-1.5 mt-2" />
              </div>

              <Card className="card-elevated">
                <CardHeader><CardTitle className="text-base leading-relaxed">{currentQuestion.stem}</CardTitle></CardHeader>
                <CardContent>
                  <RadioGroup
                    value={answers[currentQuestion.id]?.toString() ?? ""}
                    onValueChange={(v) => handleSelectAnswer(currentQuestion.id, parseInt(v))}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((opt, i) => (
                      <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value={i.toString()} id={`${currentQuestion.id}-${i}`} className="mt-0.5" />
                        <Label htmlFor={`${currentQuestion.id}-${i}`} className="text-sm cursor-pointer leading-relaxed">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <a
                  href={`mailto:support@thecounselorexam.com?subject=${encodeURIComponent(`Question Report: ${narrative.title} — Q${globalQuestionNumber} (${currentQuestion.id})`)}&body=${encodeURIComponent(`I would like to report an issue with the following question:\n\nNarrative: ${narrative.title}\nQuestion #${globalQuestionNumber} (ID: ${currentQuestion.id})\nDomain: ${currentQuestion.domain}\n\nIssue:\n`)}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                >
                  Report this question
                </a>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={goPrev} disabled={questionIndexInSection === 0}>
                  <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
                <Button onClick={goNext} disabled={answers[currentQuestion.id] === undefined}>
                  {questionIndexInSection < currentSection.questions.length - 1 ? (
                    <>Next <ChevronRight className="ml-1 h-4 w-4" /></>
                  ) : (
                    <>Review Section <ChevronRight className="ml-1 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </div>
          )}

          {phase === "section-summary" && (
            <div className="p-6 max-w-2xl mx-auto space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Section {sectionIndex + 1} Summary</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Review your answers below. Once you confirm, you cannot return to this section.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Answered {answeredCountThisSection} of {currentSection.questions.length}
                </p>
              </div>

              <Card className="card-elevated">
                <CardContent className="p-4 space-y-2">
                  {currentSection.questions.map((q) => {
                    const answered = answers[q.id] !== undefined;
                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          const idx = currentSection.questions.findIndex((x) => x.id === q.id);
                          setQuestionIndexInSection(idx);
                          setPhase("answering");
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-2">
                          {answered ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border border-amber-500/60 shrink-0" />
                          )}
                          <span className="text-sm text-foreground">Question {q.questionNumber}</span>
                          <span className="text-xs text-muted-foreground">{q.domain}</span>
                        </div>
                        <span className={`text-xs ${answered ? "text-muted-foreground" : "text-amber-400"}`}>
                          {answered ? "Answered" : "Not answered"}
                        </span>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              <div className="flex flex-wrap justify-between gap-3">
                <Button variant="outline" onClick={() => setPhase("answering")}>
                  <ChevronLeft className="mr-1 h-4 w-4" /> Review All
                </Button>
                <Button
                  onClick={confirmAndContinue}
                  disabled={!allCurrentSectionAnswered || submitting}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {sectionIndex < narrative.sections.length - 1
                    ? <>Confirm and Continue <ChevronRight className="ml-1 h-4 w-4" /></>
                    : <>Submit Narrative <CheckCircle2 className="ml-1 h-4 w-4" /></>}
                </Button>
              </div>
            </div>
          )}

          {phase === "results" && results && (
            <div className="p-6 max-w-2xl mx-auto space-y-6">
              <Card className={`card-elevated border-2 ${results.totalScore >= 70 ? "border-emerald-500/30" : "border-red-500/30"}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-semibold text-foreground mb-1">
                    {results.correct} out of {results.total}
                  </div>
                  <div className={`text-5xl font-bold mb-2 ${results.totalScore >= 70 ? "text-emerald-400" : "text-red-400"}`}>
                    {results.totalScore}%
                  </div>
                  <Badge className={results.totalScore >= 70 ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}>
                    {results.totalScore >= 70 ? "PASS" : "BELOW PASSING"}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">Passing threshold: 70%</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader><CardTitle className="text-base">Domain Breakdown</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {NARRATIVE_DOMAINS.map((d) => {
                    const stat = results.domainStats[d];
                    const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                    return (
                      <div key={d}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{d}</span>
                          <span className={pct >= 70 ? "text-emerald-400" : "text-red-400"}>
                            {stat.correct}/{stat.total} ({pct}%)
                          </span>
                        </div>
                        <Progress value={pct} className="h-2" />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => { setReviewQuestionGlobalIndex(0); setPhase("review"); }}>
                  Review this Narrative
                </Button>
                <Button variant="outline" onClick={handleRetry}>
                  <RotateCcw className="mr-2 h-4 w-4" /> Retry
                </Button>
                <Button variant="outline" onClick={() => navigate("/narratives")}>
                  <ArrowRight className="mr-2 h-4 w-4" /> Next Narrative
                </Button>
                <Button variant="outline" onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                </Button>
              </div>

              <NarrativeReviewChat
                narrativeTitle={narrative.title}
                questions={allQuestions.map((q) => ({
                  id: q.id,
                  question: q.stem,
                  options: q.options,
                  userAnswerIndex: answers[q.id],
                  correctIndex: q.correctAnswer,
                  explanation: q.explanation,
                }))}
              />
            </div>
          )}

          {phase === "review" && results && (
            <div className="p-6 max-w-2xl mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Review — Question {reviewQuestionGlobalIndex + 1} of {totalQs}</h2>
                <Button variant="outline" size="sm" onClick={() => setPhase("results")}>Back to Results</Button>
              </div>
              {(() => {
                const q = allQuestions[reviewQuestionGlobalIndex];
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <Card className={`card-elevated border-2 ${isCorrect ? "border-emerald-500/30" : "border-red-500/30"}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Correct
                          </Badge>
                        ) : (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                            <XCircle className="h-3 w-3 mr-1" /> Incorrect — Oh no! That's not correct
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">{q.domain}</Badge>
                      </div>
                      <CardTitle className="text-base leading-relaxed">{q.stem}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {q.options.map((opt, i) => {
                        const isUser = userAns === i;
                        const isRight = q.correctAnswer === i;
                        return (
                          <div
                            key={i}
                            className={`p-3 rounded-lg border text-sm ${
                              isRight ? "border-emerald-500/40 bg-emerald-500/5 text-foreground" :
                              isUser ? "border-red-500/40 bg-red-500/5 text-foreground" :
                              "border-border text-muted-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isRight && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
                              {isUser && !isRight && <XCircle className="h-4 w-4 text-red-400 shrink-0" />}
                              <span>{opt}</span>
                            </div>
                            {isUser && <p className="text-xs text-muted-foreground mt-1 ml-6">Your answer</p>}
                            {isRight && !isUser && <p className="text-xs text-emerald-400 mt-1 ml-6">Correct answer</p>}
                          </div>
                        );
                      })}
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-1">Explanation</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{q.explanation}</p>
                      </div>
                      <div className="pt-2">
                        <a
                          href={`mailto:support@thecounselorexam.com?subject=${encodeURIComponent(`Question Report: ${narrative.title} — Q${q.questionNumber} (${q.id})`)}&body=${encodeURIComponent(`I would like to report an issue with the following question:\n\nNarrative: ${narrative.title}\nQuestion #${q.questionNumber} (ID: ${q.id})\nDomain: ${q.domain}\n\nIssue:\n`)}`}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                        >
                          Report this question
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setReviewQuestionGlobalIndex(Math.max(0, reviewQuestionGlobalIndex - 1))}
                  disabled={reviewQuestionGlobalIndex === 0}
                >
                  <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
                <Button
                  onClick={() => setReviewQuestionGlobalIndex(Math.min(totalQs - 1, reviewQuestionGlobalIndex + 1))}
                  disabled={reviewQuestionGlobalIndex === totalQs - 1}
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL — pinned scrollable case content */}
        <aside className="hidden lg:flex lg:w-3/5 flex-col bg-card/30">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Case File</p>
            <p className="text-sm font-semibold text-foreground">{narrative.title}</p>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-5 pb-8">
              {/* Client info */}
              <section>
                <h3 className="text-sm font-semibold text-foreground mb-2">Client Information</h3>
                <dl className="text-xs space-y-1">
                  <InfoRow label="Age" value={String(narrative.clientInfo.age)} />
                  <InfoRow label="Sex assigned at birth" value={narrative.clientInfo.sexAssignedAtBirth} />
                  <InfoRow label="Gender identity" value={narrative.clientInfo.genderIdentity} />
                  <InfoRow label="Pronouns" value={narrative.clientInfo.pronouns} />
                  <InfoRow label="Sexual orientation" value={narrative.clientInfo.sexualOrientation} />
                  <InfoRow label="Race / ethnicity" value={narrative.clientInfo.raceEthnicity} />
                  <InfoRow label="Relationship" value={narrative.clientInfo.relationshipStatus} />
                  <InfoRow label="Setting" value={narrative.clientInfo.setting} />
                  <InfoRow label="Payment" value={narrative.clientInfo.payment} />
                  <InfoRow label="Type of counseling" value={narrative.clientInfo.typeOfCounseling} />
                  <InfoRow label="Provisional diagnosis" value={narrative.clientInfo.provisionalDiagnosis} />
                </dl>
              </section>

              <CaseSection title="Presenting Problem" body={narrative.presentingProblem} />
              <CaseSection title="Mental Status Observation" body={narrative.mentalStatusObservation} />
              <CaseSection title="Family History" body={narrative.familyHistory} />
              <CaseSection title="Work History" body={narrative.workHistory} />
              <CaseSection title="Intake Session Summary" body={narrative.intakeSessionSummary} />

              {/* Sections 2 & 3 narratives appear only when unlocked */}
              {narrative.sections.slice(1).map((s, i) => {
                const sIdx = i + 1;
                const unlocked = visibleSectionIndex >= sIdx;
                if (!unlocked) {
                  return (
                    <section key={s.sessionLabel} className="rounded-md border border-dashed border-border/60 bg-muted/20 p-3">
                      <p className="text-xs text-muted-foreground">
                        {s.sessionLabel} — unlocks after you confirm Section {sIdx}
                      </p>
                    </section>
                  );
                }
                return <CaseSection key={s.sessionLabel} title={s.sessionLabel} body={s.sectionNarrative} />;
              })}
            </div>
          </ScrollArea>
        </aside>
      </div>

      <AlertDialog open={showExpiryDialog} onOpenChange={setShowExpiryDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Section time is up</AlertDialogTitle>
            <AlertDialogDescription>
              Your allotted time for this section has ended. On the real exam, your responses would be locked.
              You can keep working untimed, or jump to the section summary now.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep working (untimed)</AlertDialogCancel>
            <AlertDialogAction onClick={() => { setShowExpiryDialog(false); setPhase("section-summary"); }}>
              Go to summary
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2">
    <dt className="text-muted-foreground shrink-0 w-[44%]">{label}</dt>
    <dd className="text-foreground">{value}</dd>
  </div>
);

const CaseSection = ({ title, body }: { title: string; body: string }) => (
  <section>
    <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
    <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{body}</p>
  </section>
);

export default NarrativePage;
