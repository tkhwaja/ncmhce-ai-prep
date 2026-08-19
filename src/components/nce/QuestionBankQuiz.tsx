import { useMemo, useState } from "react";
import type { NCEQuestion } from "@/data/nce/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export type QuizMode = "study" | "test";

interface QuestionBankQuizProps {
  questions: NCEQuestion[];
  mode: QuizMode;
  title: string;
  onExit: () => void;
  onComplete: (results: { id: string; correct: boolean }[]) => void;
  onRetryMissed?: (missed: NCEQuestion[]) => void;
}

const letters = ["A", "B", "C", "D", "E"];

const QuestionBankQuiz = ({
  questions,
  mode,
  title,
  onExit,
  onComplete,
  onRetryMissed,
}: QuestionBankQuizProps) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const selected = question ? answers[question.id] : undefined;
  const isRevealed = question ? !!revealed[question.id] : false;

  const graded = useMemo(
    () =>
      questions.map((q) => ({
        question: q,
        selected: answers[q.id],
        correct: answers[q.id] === q.correctAnswerIndex,
      })),
    [questions, answers],
  );

  const correctCount = graded.filter((g) => g.correct).length;
  const missed = graded.filter((g) => !g.correct).map((g) => g.question);

  const finish = () => {
    setFinished(true);
    onComplete(graded.map((g) => ({ id: g.question.id, correct: g.correct })));
  };

  const submitAnswer = () => {
    if (selected === undefined || !question) return;
    if (mode === "study") {
      setRevealed((prev) => ({ ...prev, [question.id]: true }));
    } else if (index === questions.length - 1) {
      finish();
    } else {
      setIndex((i) => i + 1);
    }
  };

  const next = () => {
    if (index === questions.length - 1) {
      finish();
    } else {
      setIndex((i) => i + 1);
    }
  };

  if (!question) return null;

  /* ---------------------------- Results screen ---------------------------- */
  if (finished) {
    const percent = Math.round((correctCount / questions.length) * 100);
    const byDomain = new Map<string, { correct: number; total: number }>();
    graded.forEach((g) => {
      const entry = byDomain.get(g.question.domain) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (g.correct) entry.correct += 1;
      byDomain.set(g.question.domain, entry);
    });

    return (
      <div className="space-y-6">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-xl">Set complete — {title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-foreground">{percent}%</span>
              <span className="text-muted-foreground pb-1">
                {correctCount} of {questions.length} correct
              </span>
            </div>
            <Progress value={percent} />

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">By content area</p>
              {[...byDomain.entries()].map(([domain, stats]) => (
                <div key={domain} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{domain}</span>
                    <span className="text-foreground">
                      {stats.correct}/{stats.total}
                    </span>
                  </div>
                  <Progress value={(stats.correct / stats.total) * 100} className="h-1.5" />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {missed.length > 0 && onRetryMissed && (
                <Button onClick={() => onRetryMissed(missed)}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retry {missed.length} missed
                </Button>
              )}
              <Button variant="outline" onClick={onExit}>
                Back to question bank
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-sm font-medium text-foreground">Review every item</p>
          {graded.map((g, i) => (
            <Card key={g.question.id} className="card-elevated">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {g.question.domain}
                  </Badge>
                  {g.correct ? (
                    <span className="flex items-center gap-1 text-sm text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" /> Correct
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-destructive">
                      <XCircle className="h-4 w-4" /> Incorrect
                    </span>
                  )}
                </div>
                <p className="font-medium text-foreground">
                  {i + 1}. {g.question.stem}
                </p>
                <ul className="space-y-1.5 text-sm">
                  {g.question.options.map((opt, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        "rounded-md px-3 py-2 border border-transparent",
                        idx === g.question.correctAnswerIndex &&
                          "border-emerald-500/40 bg-emerald-500/10 text-foreground",
                        idx === g.selected &&
                          idx !== g.question.correctAnswerIndex &&
                          "border-destructive/40 bg-destructive/10 text-foreground",
                        idx !== g.question.correctAnswerIndex &&
                          idx !== g.selected &&
                          "text-muted-foreground",
                      )}
                    >
                      <span className="font-medium mr-2">{letters[idx]}.</span>
                      {opt}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm space-y-2">
                  <p className="font-medium text-foreground">Why</p>
                  <p className="text-muted-foreground">{g.question.explanation}</p>
                  {g.question.keyTakeaway && (
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <Lightbulb className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      {g.question.keyTakeaway}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------------------- Question screen ---------------------------- */
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Button variant="ghost" size="sm" onClick={onExit}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Exit set
        </Button>
        <div className="text-sm text-muted-foreground">
          Question {index + 1} of {questions.length}
          {mode === "study" && ` · ${answeredCount} answered`}
        </div>
      </div>

      <Progress value={((index + (isRevealed ? 1 : 0)) / questions.length) * 100} className="h-1.5" />

      <Card className="card-elevated">
        <CardContent className="p-6 space-y-5">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="secondary" className="text-xs">
              {question.domain}
            </Badge>
            {question.difficulty && (
              <Badge variant="outline" className="text-xs">
                {question.difficulty}
              </Badge>
            )}
          </div>

          <p className="text-foreground font-medium text-lg leading-relaxed">{question.stem}</p>

          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              const isCorrect = idx === question.correctAnswerIndex;
              const isChosen = selected === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isRevealed}
                  onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: idx }))}
                  className={cn(
                    "w-full text-left rounded-lg border px-4 py-3 text-sm transition-colors",
                    "border-border hover:border-primary/50",
                    isChosen && !isRevealed && "border-primary bg-primary/10",
                    isRevealed && isCorrect && "border-emerald-500/50 bg-emerald-500/10",
                    isRevealed && isChosen && !isCorrect && "border-destructive/50 bg-destructive/10",
                    isRevealed && "cursor-default",
                  )}
                >
                  <span className="font-medium mr-2">{letters[idx]}.</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {isRevealed && (
            <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm space-y-3">
              <p
                className={cn(
                  "flex items-center gap-2 font-medium",
                  selected === question.correctAnswerIndex ? "text-emerald-500" : "text-destructive",
                )}
              >
                {selected === question.correctAnswerIndex ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Correct
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4" /> Not quite — the best answer is{" "}
                    {letters[question.correctAnswerIndex]}
                  </>
                )}
              </p>
              <p className="text-muted-foreground">{question.explanation}</p>
              {question.optionRationales && (
                <ul className="space-y-1 text-muted-foreground">
                  {question.optionRationales.map((r, idx) => (
                    <li key={idx}>
                      <span className="font-medium text-foreground">{letters[idx]}.</span> {r}
                    </li>
                  ))}
                </ul>
              )}
              {question.keyTakeaway && (
                <p className="flex items-start gap-2 text-muted-foreground">
                  <Lightbulb className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  {question.keyTakeaway}
                </p>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3">
            {!isRevealed ? (
              <Button onClick={submitAnswer} disabled={selected === undefined}>
                {mode === "study"
                  ? "Check answer"
                  : index === questions.length - 1
                    ? "Submit set"
                    : "Next question"}
              </Button>
            ) : (
              <Button onClick={next}>
                {index === questions.length - 1 ? "See results" : "Next question"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionBankQuiz;
