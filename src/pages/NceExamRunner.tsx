import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNCEPracticeExamById, getNCEExamItems } from "@/data/nce/practice-exams";
import type { NCEExamItem } from "@/data/nce/practice-exam-types";
import { NCE_ENABLED } from "@/config/exam-tracks";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Coffee,
  Flag,
  Lock,
  CheckCircle2,
  XCircle,
  LayoutGrid,
} from "lucide-react";

/**
 * Full-length NCE practice exam runner (design preview).
 *
 * Attempt state is kept in localStorage only — this flow is not released to
 * users yet, so no backend attempt records are created.
 */

interface AttemptState {
  answers: Record<string, number>;
  flags: string[];
  index: number;
  secondsLeft: number;
  breakTaken: boolean;
  submitted: boolean;
}

const storageKey = (examId: string) => `nce-exam-preview:${examId}`;

const blankState = (seconds: number): AttemptState => ({
  answers: {},
  flags: [],
  index: 0,
  secondsLeft: seconds,
  breakTaken: false,
  submitted: false,
});

const formatClock = (totalSeconds: number) => {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

const NceExamRunner = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();

  const exam = examId ? getNCEPracticeExamById(examId) : undefined;
  const items = useMemo(() => (examId ? getNCEExamItems(examId) : []), [examId]);
  const format = exam?.format;
  const totalSeconds = (format?.testingMinutes ?? exam?.timeLimitMinutes ?? 225) * 60;

  const [state, setState] = useState<AttemptState>(() => blankState(totalSeconds));
  const [onBreak, setOnBreak] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    if (!examId) return;
    const raw = localStorage.getItem(storageKey(examId));
    if (raw) {
      try {
        setState({ ...blankState(totalSeconds), ...(JSON.parse(raw) as AttemptState) });
      } catch {
        setState(blankState(totalSeconds));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId]);

  useEffect(() => {
    if (!examId) return;
    localStorage.setItem(storageKey(examId), JSON.stringify(state));
  }, [examId, state]);

  // Testing timer — pauses during the scheduled break and after submission.
  useEffect(() => {
    if (state.submitted || onBreak) return;
    const t = window.setInterval(() => {
      setState((prev) =>
        prev.secondsLeft <= 1
          ? { ...prev, secondsLeft: 0, submitted: true }
          : { ...prev, secondsLeft: prev.secondsLeft - 1 },
      );
    }, 1000);
    return () => window.clearInterval(t);
  }, [state.submitted, onBreak]);

  const breakAfter = format?.breakAfterQuestion ?? 0;
  const lockFirstHalf = Boolean(format?.lockFirstHalfAfterBreak) && state.breakTaken;

  const current: NCEExamItem | undefined = items[state.index];
  const answeredCount = Object.keys(state.answers).length;
  const isLocked = useCallback(
    (item: NCEExamItem) => lockFirstHalf && breakAfter > 0 && item.sequence <= breakAfter,
    [lockFirstHalf, breakAfter],
  );

  const select = (item: NCEExamItem, optionIndex: number) => {
    if (isLocked(item) || state.submitted) return;
    setState((prev) => ({ ...prev, answers: { ...prev.answers, [item.id]: optionIndex } }));
  };

  const toggleFlag = (item: NCEExamItem) => {
    setState((prev) => ({
      ...prev,
      flags: prev.flags.includes(item.id)
        ? prev.flags.filter((f) => f !== item.id)
        : [...prev.flags, item.id],
    }));
  };

  const goTo = (index: number) => {
    if (index < 0 || index >= items.length) return;
    setState((prev) => ({ ...prev, index }));
    setShowPalette(false);
  };

  const handleNext = () => {
    const nextSeq = (current?.sequence ?? 0) + 1;
    if (breakAfter > 0 && !state.breakTaken && nextSeq === breakAfter + 1) {
      setOnBreak(true);
      return;
    }
    goTo(state.index + 1);
  };

  const results = useMemo(() => {
    const scored = items.filter((i) => i.scored);
    const correct = scored.filter((i) => state.answers[i.id] === i.correctAnswerIndex);
    const byDomain = new Map<string, { correct: number; total: number }>();
    scored.forEach((i) => {
      const key = i.blueprintDomainName;
      const row = byDomain.get(key) ?? { correct: 0, total: 0 };
      row.total += 1;
      if (state.answers[i.id] === i.correctAnswerIndex) row.correct += 1;
      byDomain.set(key, row);
    });
    return {
      rawScore: correct.length,
      rawMax: scored.length,
      percent: scored.length ? Math.round((correct.length / scored.length) * 100) : 0,
      domains: [...byDomain.entries()].map(([name, row]) => ({ name, ...row })),
    };
  }, [items, state.answers]);

  if (!NCE_ENABLED || !exam || items.length === 0) {
    return (
      <div className="p-6 text-center space-y-4">
        <p className="text-muted-foreground">This practice exam is not available yet.</p>
        <Button onClick={() => navigate("/practice-exams")}>Back to Practice Exams</Button>
      </div>
    );
  }

  /* ------------------------------- Break screen ------------------------------- */
  if (onBreak) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Card className="card-elevated border-primary/30">
          <CardContent className="p-8 text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              Scheduled {format?.breakMinutes}-minute break
            </h1>
            <p className="text-sm text-muted-foreground">
              Your testing timer is paused. On the real exam, starting question {breakAfter + 1}
              {" "}permanently locks your answers to questions 1–{breakAfter}, so use this time to
              finish anything you flagged in the first half.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              <Button variant="outline" onClick={() => setOnBreak(false)}>
                Return to first half
              </Button>
              <Button
                onClick={() => {
                  setState((prev) => ({ ...prev, breakTaken: true, index: breakAfter }));
                  setOnBreak(false);
                }}
              >
                Start second half <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* --------------------------------- Results --------------------------------- */
  if (state.submitted) {
    const reviewItem = items[reviewIndex];
    const chosen = state.answers[reviewItem.id];
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => navigate("/practice-exams")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> All Exams
        </Button>

        <Card className="card-elevated">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-foreground">{exam.title} — Results</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Scaled estimate</p>
                <p className="text-2xl font-bold text-foreground">{results.percent}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Raw score</p>
                <p className="text-2xl font-bold text-foreground">
                  {results.rawScore}/{results.rawMax}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Answered</p>
                <p className="text-2xl font-bold text-foreground">
                  {answeredCount}/{items.length}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time used</p>
                <p className="text-2xl font-bold text-foreground">
                  {Math.round((totalSeconds - state.secondsLeft) / 60)} min
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Field-test questions are excluded from scoring, exactly as on the real exam.
            </p>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardContent className="p-6 space-y-4">
            <h2 className="font-semibold text-foreground">Domain breakdown</h2>
            {results.domains.map((d) => (
              <div key={d.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{d.name}</span>
                  <span className="text-muted-foreground">
                    {d.correct}/{d.total} ({Math.round((d.correct / d.total) * 100)}%)
                  </span>
                </div>
                <Progress value={(d.correct / d.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold text-foreground">
                Review • Question {reviewIndex + 1} of {items.length}
              </h2>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))}
                >
                  Previous
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setReviewIndex(Math.min(items.length - 1, reviewIndex + 1))}
                >
                  Next
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{reviewItem.blueprintDomainName}</Badge>
              <Badge variant="outline">{reviewItem.topic}</Badge>
              {!reviewItem.scored && <Badge variant="outline">Field-test (unscored)</Badge>}
            </div>

            <p className="text-foreground">{reviewItem.stem}</p>

            <div className="space-y-2">
              {reviewItem.options.map((opt, i) => {
                const isCorrect = i === reviewItem.correctAnswerIndex;
                const isChosen = chosen === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "rounded-lg border p-3 text-sm",
                      isCorrect
                        ? "border-emerald-500/40 bg-emerald-500/5"
                        : isChosen
                          ? "border-destructive/40 bg-destructive/5"
                          : "border-border",
                    )}
                  >
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      ) : isChosen ? (
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                      ) : (
                        <span className="h-4 w-4 shrink-0" />
                      )}
                      <div>
                        <p className="text-foreground">{opt}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {reviewItem.optionRationales[i]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <p className="text-sm text-foreground">{reviewItem.explanation}</p>
              <p className="text-sm font-medium text-primary">{reviewItem.keyTakeaway}</p>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          onClick={() => {
            setState(blankState(totalSeconds));
            setReviewIndex(0);
          }}
        >
          Reset preview attempt
        </Button>
      </div>
    );
  }

  /* --------------------------------- Attempt --------------------------------- */
  if (!current) return null;
  const chosen = state.answers[current.id];
  const locked = isLocked(current);
  const half = breakAfter > 0 && current.sequence <= breakAfter ? "First half" : "Second half";

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-foreground">{exam.title}</p>
          <p className="text-xs text-muted-foreground">
            {half} • {answeredCount} of {items.length} answered
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono">
            <Clock className="h-3 w-3 mr-1" /> {formatClock(state.secondsLeft)}
          </Badge>
          <Button size="sm" variant="outline" onClick={() => setShowPalette((v) => !v)}>
            <LayoutGrid className="h-4 w-4 mr-1" /> Review
          </Button>
        </div>
      </div>

      <Progress value={((state.index + 1) / items.length) * 100} className="h-1.5" />

      {showPalette && (
        <Card className="card-elevated">
          <CardContent className="p-4">
            <div className="grid grid-cols-10 gap-1.5">
              {items.map((item, i) => {
                const answered = state.answers[item.id] !== undefined;
                const flagged = state.flags.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-7 rounded text-[10px] font-medium border transition-colors",
                      i === state.index && "ring-2 ring-primary",
                      flagged
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-500"
                        : answered
                          ? "bg-primary/15 border-primary/30 text-primary"
                          : "bg-muted/40 border-border text-muted-foreground",
                    )}
                  >
                    {item.sequence}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-muted-foreground mt-3">
              Blue = answered • Amber = flagged • Grey = unanswered
            </p>
          </CardContent>
        </Card>
      )}

      <Card className="card-elevated">
        <CardContent className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
              Question {current.sequence} of {items.length}
            </p>
            <Button
              size="sm"
              variant={state.flags.includes(current.id) ? "default" : "outline"}
              onClick={() => toggleFlag(current)}
            >
              <Flag className="h-3.5 w-3.5 mr-1" />
              {state.flags.includes(current.id) ? "Flagged" : "Flag"}
            </Button>
          </div>

          {locked && (
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              Answers to questions 1–{breakAfter} are locked now that the second half has started.
            </div>
          )}

          <p className="text-foreground leading-relaxed">{current.stem}</p>

          <div className="space-y-2">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => select(current, i)}
                disabled={locked}
                className={cn(
                  "w-full text-left rounded-lg border p-3.5 text-sm transition-colors",
                  chosen === i
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/40 hover:bg-muted/40 text-foreground",
                  locked && "opacity-60 cursor-not-allowed",
                )}
              >
                <span className="font-semibold mr-2 text-muted-foreground">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          onClick={() => goTo(state.index - 1)}
          disabled={state.index === 0 || (lockFirstHalf && current.sequence === breakAfter + 1)}
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Previous
        </Button>
        {state.index === items.length - 1 ? (
          <Button onClick={() => setState((prev) => ({ ...prev, submitted: true }))}>
            Submit Exam
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>

      <p className="text-[11px] text-muted-foreground text-center">
        No feedback is shown during the attempt. Rationales unlock after you submit.
      </p>
    </div>
  );
};

export default NceExamRunner;
