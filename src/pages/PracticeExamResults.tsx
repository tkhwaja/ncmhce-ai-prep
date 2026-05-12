import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPracticeExamById } from "@/data/practice-exams";
import { getNarrativeById } from "@/data/narratives";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, Trophy, BookOpen } from "lucide-react";

interface ExamAttemptRow {
  id: string;
  practice_exam_id: string;
  status: string;
  ungraded_narrative_ids: string[];
  total_score: number | null;
  graded_case_count: number | null;
  domain_scores: Record<string, number> | null;
  time_spent_seconds: number | null;
  started_at: string;
  completed_at: string | null;
}

interface NarrativeAttemptRow {
  id: string;
  narrative_id: string;
  total_score: number | null;
  completed_at: string | null;
  created_at: string;
}

const PracticeExamResults = () => {
  const { examId, attemptId } = useParams<{ examId: string; attemptId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [examAttempt, setExamAttempt] = useState<ExamAttemptRow | null>(null);
  const [narrativeAttempts, setNarrativeAttempts] = useState<NarrativeAttemptRow[]>([]);
  const [loading, setLoading] = useState(true);

  const exam = examId ? getPracticeExamById(examId) : undefined;

  useEffect(() => {
    if (!user || !attemptId || !exam) return;
    (async () => {
      const [{ data: examData }, { data: narrData }] = await Promise.all([
        supabase
          .from("practice_exam_attempts")
          .select("*")
          .eq("id", attemptId)
          .eq("user_id", user.id)
          .maybeSingle(),
        supabase
          .from("narrative_attempts")
          .select("id, narrative_id, total_score, completed_at, created_at")
          .eq("user_id", user.id)
          .in("narrative_id", exam.narrativeIds)
          .order("created_at", { ascending: false }),
      ]);
      if (examData) {
        setExamAttempt({
          ...examData,
          ungraded_narrative_ids: (examData.ungraded_narrative_ids as string[]) ?? [],
          domain_scores: (examData.domain_scores as Record<string, number>) ?? {},
        } as ExamAttemptRow);
      }
      setNarrativeAttempts((narrData as NarrativeAttemptRow[]) ?? []);
      setLoading(false);
    })();
  }, [user, attemptId, exam]);

  if (!exam) {
    return <div className="p-6 text-center text-muted-foreground">Exam not found.</div>;
  }
  if (loading || !examAttempt) {
    return <div className="p-6 text-center text-muted-foreground">Loading…</div>;
  }

  const startedAt = new Date(examAttempt.started_at).getTime();
  const attemptsByNarrative: Record<string, NarrativeAttemptRow> = {};
  narrativeAttempts
    .filter((a) => new Date(a.created_at).getTime() >= startedAt - 60_000)
    .forEach((a) => {
      if (!attemptsByNarrative[a.narrative_id]) attemptsByNarrative[a.narrative_id] = a;
    });

  const totalScore = examAttempt.total_score ?? 0;
  const passLikely = totalScore >= 70;
  const totalMin = Math.round((examAttempt.time_spent_seconds ?? 0) / 60);
  const domainEntries = Object.entries(examAttempt.domain_scores ?? {});

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => navigate("/practice-exams")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> All Exams
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">{exam.title} — Results</h1>
        <p className="text-muted-foreground mt-1">
          Completed {examAttempt.completed_at ? new Date(examAttempt.completed_at).toLocaleString() : "—"}
        </p>
      </div>

      <Card className="card-elevated">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Trophy className={`h-6 w-6 ${passLikely ? "text-emerald-400" : "text-amber-400"}`} />
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Overall Score</p>
            </div>
            <p className={`text-4xl font-bold mt-2 ${passLikely ? "text-emerald-400" : "text-amber-400"}`}>
              {totalScore}%
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {passLikely ? "Strong performance — at or above a typical pass band." : "Below typical pass band — keep practicing."}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Graded Cases</p>
            <p className="text-2xl font-semibold text-foreground mt-2">
              {examAttempt.graded_case_count ?? 0} / {exam.narrativeIds.length - examAttempt.ungraded_narrative_ids.length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {examAttempt.ungraded_narrative_ids.length} pretest case excluded from scoring
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> Time Used
            </p>
            <p className="text-2xl font-semibold text-foreground mt-2">{totalMin} min</p>
            <p className="text-xs text-muted-foreground mt-1">Across all {exam.narrativeIds.length} cases</p>
          </div>
        </CardContent>
      </Card>

      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="text-base">Performance by Domain</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {domainEntries.length === 0 ? (
            <p className="text-sm text-muted-foreground">No domain data recorded.</p>
          ) : (
            domainEntries.map(([domain, score]) => (
              <div key={domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{domain}</span>
                  <span className="font-medium text-foreground">{score}%</span>
                </div>
                <Progress value={score} className="h-2" />
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Per-Case Breakdown</h2>
        <div className="space-y-2">
          {exam.narrativeIds.map((nid, idx) => {
            const narrative = getNarrativeById(nid);
            const attempt = attemptsByNarrative[nid];
            const isUngraded = examAttempt.ungraded_narrative_ids.includes(nid);
            return (
              <Card key={nid} className="card-elevated">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-foreground truncate">{narrative?.title ?? nid}</p>
                      {isUngraded && (
                        <Badge variant="outline" className="text-violet-400 border-violet-500/30">
                          Pretest (ungraded)
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{narrative?.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
                      isUngraded ? "text-muted-foreground" :
                      (attempt?.total_score ?? 0) >= 70 ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {attempt?.total_score ?? "—"}%
                    </p>
                  </div>
                  {attempt && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate(`/narrative/${nid}`)}
                    >
                      <BookOpen className="h-3 w-3 mr-1" /> Review
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticeExamResults;
