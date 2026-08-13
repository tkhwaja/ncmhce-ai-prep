import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { getActivePracticeExams } from "@/lib/exam-content";
import { getUngradedNarrativeIdsForAttempt } from "@/lib/practice-exams";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, PlayCircle, RotateCcw, CheckCircle2, ArrowRight, Lock } from "lucide-react";

interface ExamAttemptRow {
  id: string;
  practice_exam_id: string;
  status: string;
  total_score: number | null;
  graded_case_count: number | null;
  time_spent_seconds: number | null;
  started_at: string;
  completed_at: string | null;
}

const PracticeExams = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { track, config } = useExamTrack();
  const practiceExams = getActivePracticeExams(track);
  const [attempts, setAttempts] = useState<ExamAttemptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  const loadAttempts = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("practice_exam_attempts")
      .select("id, practice_exam_id, status, total_score, graded_case_count, time_spent_seconds, started_at, completed_at")
      .eq("user_id", user.id)
      .eq("exam_track", track)
      .order("started_at", { ascending: false });
    setAttempts((data as ExamAttemptRow[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    loadAttempts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, track]);

  const startNewAttempt = async (examId: string) => {
    if (!user || creating) return;
    setCreating(true);
    const attemptKey = crypto.randomUUID();
    const ungradedIds = getUngradedNarrativeIdsForAttempt(examId, attemptKey);
    const { data, error } = await supabase
      .from("practice_exam_attempts")
      .insert({
        user_id: user.id,
        practice_exam_id: examId,
        status: "in_progress",
        ungraded_narrative_ids: ungradedIds,
        domain_scores: {},
        exam_track: track,
      })
      .select("id")
      .single();
    setCreating(false);
    if (!error && data) navigate(`/practice-exam/${examId}/attempt/${data.id}`);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Practice Exams</h1>
        <p className="text-muted-foreground">
          Full-length, timed {config.label}-style practice exams. Each exam saves your score and tracks your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {practiceExams.map((exam) => {
          const examAttempts = attempts.filter((a) => a.practice_exam_id === exam.id);
          const inProgress = examAttempts.find((a) => a.status === "in_progress");
          const completedAttempts = examAttempts.filter((a) => a.status === "completed");
          const bestScore = completedAttempts.length
            ? Math.max(...completedAttempts.map((a) => a.total_score ?? 0))
            : null;

          return (
            <Card key={exam.id} className={`card-elevated ${exam.comingSoon ? "opacity-70" : ""}`}>
              <CardContent className="p-6 relative">
                {exam.comingSoon && (
                  <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-full bg-muted text-muted-foreground border border-border">
                    COMING SOON
                  </span>
                )}
                {!exam.comingSoon && exam.isNew && (
                  <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-full bg-primary text-primary-foreground shadow">
                    NEW
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${exam.comingSoon ? "bg-muted" : "bg-primary/10"}`}>
                    {exam.comingSoon ? (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Brain className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exam.description}</p>
                    {!exam.comingSoon && exam.ungradedNarrativeCount ? (
                      <p className="text-xs text-muted-foreground mt-2">
                        {exam.ungradedNarrativeCount} ungraded pretest case (mirrors the real NCMHCE)
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Attempts</p>
                    <p className="text-lg font-semibold text-foreground">{exam.comingSoon ? "—" : loading ? "…" : completedAttempts.length}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Best Score</p>
                    <p className="text-lg font-semibold text-foreground">
                      {exam.comingSoon ? "—" : bestScore !== null ? `${bestScore}%` : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Cases</p>
                    <p className="text-lg font-semibold text-foreground">{exam.comingSoon ? "—" : exam.narrativeIds.length}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  {exam.comingSoon ? (
                    <Button className="flex-1" disabled>
                      <Lock className="h-4 w-4 mr-1" /> Coming Soon
                    </Button>
                  ) : inProgress ? (
                    <Button
                      className="flex-1"
                      onClick={() => navigate(`/practice-exam/${exam.id}/attempt/${inProgress.id}`)}
                    >
                      <ArrowRight className="h-4 w-4 mr-1" /> Resume Attempt
                    </Button>
                  ) : (
                    <Button
                      className="flex-1"
                      disabled={creating}
                      onClick={() => startNewAttempt(exam.id)}
                    >
                      <PlayCircle className="h-4 w-4 mr-1" /> {creating ? "Starting…" : "Start Exam"}
                    </Button>
                  )}
                  {!exam.comingSoon && completedAttempts.length > 0 && !inProgress && (
                    <Button
                      variant="outline"
                      onClick={() => startNewAttempt(exam.id)}
                      disabled={creating}
                    >
                      <RotateCcw className="h-4 w-4 mr-1" /> Retake
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Your History</h2>
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : attempts.length === 0 ? (
          <Card className="card-elevated">
            <CardContent className="p-6 text-sm text-muted-foreground text-center">
              No attempts yet. Start your first practice exam above.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {attempts.map((a) => {
              const exam = practiceExams.find((e) => e.id === a.practice_exam_id);
              return (
                <Card key={a.id} className="card-elevated">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{exam?.title ?? a.practice_exam_id}</p>
                        {a.status === "completed" ? (
                          <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-amber-400 border-amber-500/30">In Progress</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Started {new Date(a.started_at).toLocaleString()}
                        {a.completed_at && ` • Finished ${new Date(a.completed_at).toLocaleString()}`}
                      </p>
                    </div>
                    {a.status === "completed" ? (
                      <>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-foreground">{a.total_score ?? "—"}%</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                            <Clock className="h-3 w-3" />
                            {a.time_spent_seconds ? `${Math.round(a.time_spent_seconds / 60)} min` : "—"}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/practice-exam/${a.practice_exam_id}/results/${a.id}`)}
                        >
                          View Results
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => navigate(`/practice-exam/${a.practice_exam_id}/attempt/${a.id}`)}
                      >
                        Resume
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeExams;
