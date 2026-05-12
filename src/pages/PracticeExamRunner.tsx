import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPracticeExamById } from "@/data/practice-exams";
import { getNarrativeById } from "@/data/narratives";
import { computePracticeExamScore, type NarrativeAttemptRow } from "@/lib/practice-exam-scoring";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, PlayCircle, ArrowLeft, Flag, Clock } from "lucide-react";
import { toast } from "sonner";

interface ExamAttemptRow {
  id: string;
  practice_exam_id: string;
  status: string;
  ungraded_narrative_ids: string[];
  started_at: string;
  completed_at: string | null;
}

const PracticeExamRunner = () => {
  const { examId, attemptId } = useParams<{ examId: string; attemptId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [examAttempt, setExamAttempt] = useState<ExamAttemptRow | null>(null);
  const [attempts, setAttempts] = useState<NarrativeAttemptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [finalizing, setFinalizing] = useState(false);

  const exam = examId ? getPracticeExamById(examId) : undefined;

  const loadData = useCallback(async () => {
    if (!user || !attemptId || !exam) return;
    const [{ data: examData }, { data: narrAttempts }] = await Promise.all([
      supabase
        .from("practice_exam_attempts")
        .select("id, practice_exam_id, status, ungraded_narrative_ids, started_at, completed_at")
        .eq("id", attemptId)
        .eq("user_id", user.id)
        .maybeSingle(),
      supabase
        .from("narrative_attempts")
        .select("id, narrative_id, total_score, domain_scores, time_spent, completed_at, created_at")
        .eq("user_id", user.id)
        .in("narrative_id", exam.narrativeIds)
        .order("created_at", { ascending: false }),
    ]);

    if (examData) {
      setExamAttempt({
        ...examData,
        ungraded_narrative_ids: (examData.ungraded_narrative_ids as string[]) ?? [],
      } as ExamAttemptRow);
    }
    setAttempts((narrAttempts as NarrativeAttemptRow[]) ?? []);
    setLoading(false);
  }, [user, attemptId, exam]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Refetch when tab regains focus (user returning from a narrative)
  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible") loadData();
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [loadData]);

  const attemptsByNarrative = useMemo(() => {
    if (!examAttempt) return {} as Record<string, NarrativeAttemptRow>;
    const startedAt = new Date(examAttempt.started_at).getTime();
    const map: Record<string, NarrativeAttemptRow> = {};
    // Pick the first attempt (most recent because ordered desc) per narrative that was created at/after started_at
    attempts
      .filter((a) => new Date(a.created_at).getTime() >= startedAt - 60_000) // 60s grace
      .forEach((a) => {
        if (!map[a.narrative_id]) map[a.narrative_id] = a;
      });
    return map;
  }, [attempts, examAttempt]);

  const score = useMemo(() => {
    if (!exam || !examAttempt) return null;
    return computePracticeExamScore(
      exam.narrativeIds,
      examAttempt.ungraded_narrative_ids,
      attemptsByNarrative,
    );
  }, [exam, examAttempt, attemptsByNarrative]);

  const handleFinalize = async () => {
    if (!exam || !examAttempt || !score || !user || finalizing) return;
    setFinalizing(true);
    const { error } = await supabase
      .from("practice_exam_attempts")
      .update({
        status: "completed",
        total_score: score.totalScore,
        graded_case_count: score.gradedCaseCount,
        domain_scores: score.domainScores as never,
        time_spent_seconds: score.totalTimeSeconds,
        completed_at: new Date().toISOString(),
      })
      .eq("id", examAttempt.id);
    setFinalizing(false);
    if (error) {
      toast.error("Could not finalize exam. Try again.");
      return;
    }
    navigate(`/practice-exam/${exam.id}/results/${examAttempt.id}`);
  };

  if (!exam) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Practice exam not found.</p>
        <Button onClick={() => navigate("/practice-exams")} className="mt-4">Back</Button>
      </div>
    );
  }

  if (loading || !examAttempt || !score) {
    return <div className="p-6 text-center text-muted-foreground">Loading…</div>;
  }

  if (examAttempt.status === "completed") {
    navigate(`/practice-exam/${exam.id}/results/${examAttempt.id}`, { replace: true });
    return null;
  }

  const completedCount = score.perCase.filter((c) => c.completed).length;
  const allComplete = completedCount === exam.narrativeIds.length;
  const progressPct = (completedCount / exam.narrativeIds.length) * 100;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => navigate("/practice-exams")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> All Exams
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">{exam.title}</h1>
        <p className="text-muted-foreground mt-1">{exam.description}</p>
      </div>

      <Card className="card-elevated">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-foreground">
              Progress: {completedCount} of {exam.narrativeIds.length} cases
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {Math.round(score.totalTimeSeconds / 60)} min logged
            </p>
          </div>
          <Progress value={progressPct} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            Complete all cases below, then submit your exam to see your score and per-domain breakdown.
            One case is randomly designated as ungraded (NCMHCE pretest convention) — you won't know which until results.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {score.perCase.map((c, idx) => {
          const narrative = getNarrativeById(c.narrativeId);
          return (
            <Card key={c.narrativeId} className="card-elevated">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-foreground truncate">{narrative?.title ?? c.narrativeId}</p>
                    {c.completed ? (
                      <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> Done {c.score !== null && `· ${c.score}%`}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground">
                        <Circle className="h-3 w-3 mr-1" /> Not started
                      </Badge>
                    )}
                  </div>
                  {narrative && (
                    <p className="text-xs text-muted-foreground mt-1">{narrative.category}</p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant={c.completed ? "outline" : "default"}
                  onClick={() => navigate(`/narrative/${c.narrativeId}?examAttempt=${examAttempt.id}&examId=${exam.id}`)}
                >
                  <PlayCircle className="h-3 w-3 mr-1" />
                  {c.completed ? "Review" : "Start Case"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="card-elevated border-primary/30">
        <CardContent className="p-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Submit Exam</p>
            <p className="text-sm text-muted-foreground mt-1">
              {allComplete
                ? "All cases complete. Submit to lock in your score and view your full results."
                : `Finish all ${exam.narrativeIds.length} cases to submit.`}
            </p>
          </div>
          <Button onClick={handleFinalize} disabled={!allComplete || finalizing}>
            <Flag className="h-4 w-4 mr-1" /> {finalizing ? "Submitting…" : "Submit Exam"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticeExamRunner;
