import { useMemo, useState } from "react";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { getActiveQuestions } from "@/lib/exam-content";
import type { NCEQuestion } from "@/data/nce/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Play, Target, RotateCcw, Sparkles } from "lucide-react";
import QuestionBankQuiz, { type QuizMode } from "@/components/nce/QuestionBankQuiz";
import { useQuestionBankProgress } from "@/hooks/useQuestionBankProgress";

type Pool = "all" | "unseen" | "missed";

const SET_SIZES = [10, 25, 50] as const;

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Questions = () => {
  const { track } = useExamTrack();
  const questions = useMemo(() => getActiveQuestions(track), [track]);
  const { progress, recordAttempts, resetProgress } = useQuestionBankProgress();

  const [activeSet, setActiveSet] = useState<NCEQuestion[] | null>(null);
  const [setTitle, setSetTitle] = useState("");
  const [mode, setMode] = useState<QuizMode>("study");
  const [pool, setPool] = useState<Pool>("all");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [search, setSearch] = useState("");

  const domains = useMemo(() => [...new Set(questions.map((q) => q.domain))], [questions]);

  const answeredIds = useMemo(() => new Set(Object.keys(progress)), [progress]);
  const missedIds = useMemo(
    () => new Set(Object.entries(progress).filter(([, a]) => !a.correct).map(([id]) => id)),
    [progress],
  );

  const attempted = questions.filter((q) => answeredIds.has(q.id)).length;
  const correct = questions.filter((q) => progress[q.id]?.correct).length;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  /** Apply the current filters (pool, difficulty, search) to a domain slice. */
  const buildPool = (domain?: string) => {
    const query = search.trim().toLowerCase();
    return questions.filter((q) => {
      if (domain && q.domain !== domain) return false;
      if (difficulty !== "all" && q.difficulty !== difficulty) return false;
      if (pool === "unseen" && answeredIds.has(q.id)) return false;
      if (pool === "missed" && !missedIds.has(q.id)) return false;
      if (query) {
        const hit =
          q.stem.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query)) ||
          (q.topic?.toLowerCase().includes(query) ?? false) ||
          (q.tags?.some((t) => t.toLowerCase().includes(query)) ?? false);
        if (!hit) return false;
      }
      return true;
    });
  };

  const startSet = (size: number | "all", domain?: string) => {
    const available = shuffle(buildPool(domain));
    if (available.length === 0) return;
    const items = size === "all" ? available : available.slice(0, size);
    setSetTitle(
      `${domain ?? "Mixed"} · ${items.length} question${items.length === 1 ? "" : "s"}`,
    );
    setActiveSet(items);
  };

  if (activeSet) {
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <QuestionBankQuiz
          questions={activeSet}
          mode={mode}
          title={setTitle}
          onExit={() => setActiveSet(null)}
          onComplete={recordAttempts}
          onRetryMissed={(missed) => {
            setSetTitle(`Missed items · ${missed.length}`);
            setActiveSet(shuffle(missed));
          }}
        />
      </div>
    );
  }

  const mixedAvailable = buildPool().length;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Question Bank</h1>
        <p className="text-muted-foreground">
          Practice NCE-style multiple-choice items by content area. Answers and rationales are
          revealed after you respond.
        </p>
      </div>

      {/* Progress summary */}
      <Card className="card-elevated">
        <CardContent className="p-6 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Items in bank</p>
            <p className="text-2xl font-bold text-foreground">{questions.length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Attempted</p>
            <p className="text-2xl font-bold text-foreground">
              {attempted}
              <span className="text-sm font-normal text-muted-foreground"> / {questions.length}</span>
            </p>
            <Progress
              value={questions.length ? (attempted / questions.length) * 100 : 0}
              className="h-1.5 mt-2"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-2xl font-bold text-foreground">{attempted ? `${accuracy}%` : "—"}</p>
            {attempted > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-1 -ml-2 h-7 text-xs text-muted-foreground"
                onClick={resetProgress}
              >
                <RotateCcw className="mr-1.5 h-3 w-3" />
                Reset progress
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Session options */}
      <Card className="card-elevated">
        <CardContent className="p-6 space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Mode</p>
              <Select value={mode} onValueChange={(v) => setMode(v as QuizMode)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="study">Study — feedback after each question</SelectItem>
                  <SelectItem value="test">Test — feedback at the end</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Item pool
              </p>
              <Select value={pool} onValueChange={(v) => setPool(v as Pool)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All items</SelectItem>
                  <SelectItem value="unseen">Unseen only</SelectItem>
                  <SelectItem value="missed">Previously missed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Difficulty
              </p>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any difficulty</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Optional keyword filter (topic, term, tag)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-sm text-muted-foreground mr-1">
              <Sparkles className="inline h-4 w-4 mr-1 text-primary" />
              Mixed set ({mixedAvailable} available):
            </span>
            {SET_SIZES.map((size) => (
              <Button
                key={size}
                size="sm"
                variant={size === 10 ? "default" : "outline"}
                disabled={mixedAvailable === 0}
                onClick={() => startSet(size)}
              >
                <Play className="mr-1.5 h-3.5 w-3.5" />
                {size} questions
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Domains */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Practice by content area</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {domains.map((domain) => {
            const inDomain = questions.filter((q) => q.domain === domain);
            const domainAttempted = inDomain.filter((q) => answeredIds.has(q.id));
            const domainCorrect = domainAttempted.filter((q) => progress[q.id]?.correct).length;
            const available = buildPool(domain).length;
            return (
              <Card key={domain} className="card-elevated">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium text-foreground">{domain}</p>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {inDomain.length} items
                    </Badge>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {domainAttempted.length} attempted
                        {domainAttempted.length > 0 &&
                          ` · ${Math.round((domainCorrect / domainAttempted.length) * 100)}% correct`}
                      </span>
                    </div>
                    <Progress
                      value={inDomain.length ? (domainAttempted.length / inDomain.length) * 100 : 0}
                      className="h-1.5"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={available === 0}
                      onClick={() => startSet(10, domain)}
                    >
                      <Target className="mr-1.5 h-3.5 w-3.5" />
                      Drill 10
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={available === 0}
                      onClick={() => startSet("all", domain)}
                    >
                      All {available}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {questions.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No question bank items are available for this track yet.
        </p>
      )}
    </div>
  );
};

export default Questions;
