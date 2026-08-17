import { getPracticeExamById, isExamNew } from "@/data/practice-exams";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { totalQuestionCount, getNarrativeTotalMinutes } from "@/data/narratives";
import { getActiveNarratives } from "@/lib/exam-content";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Clock, CheckCircle2, PlayCircle, RotateCcw, Lock as LockIcon } from "lucide-react";

const difficultyColor: Record<string, string> = {
  Beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

interface AttemptMap {
  [narrativeId: string]: { total_score: number | null; completed_at: string | null };
}

const Narratives = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { track } = useExamTrack();
  const narratives = getActiveNarratives(track);
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [attempts, setAttempts] = useState<AttemptMap>({});

  useEffect(() => {
    if (!user) return;
    supabase
      .from("narrative_attempts")
      .select("narrative_id, total_score, completed_at")
      .eq("user_id", user.id)
      .eq("exam_track", track)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (!data) return;
        const map: AttemptMap = {};
        data.forEach((a) => {
          if (!map[a.narrative_id]) {
            map[a.narrative_id] = { total_score: a.total_score, completed_at: a.completed_at };
          }
        });
        setAttempts(map);
      });
  }, [user, track]);

  const categories = [...new Set(narratives.map((s) => s.category))];

  // NEW badges auto-expire 7 days after `addedAt`. Add new entries here when shipping a case.
  const NEW_BADGES: Record<string, { addedAt: string; gradient: string; shadow: string }> = {
    "28-rafael-ptsd": {
      addedAt: "2026-05-27",
      gradient: "linear-gradient(135deg, #34D399 0%, #10B981 40%, #6EE7B7 60%, #059669 100%)",
      shadow: "0 4px 14px -2px rgba(16, 185, 129, 0.5), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "32-renee-did": {
      addedAt: "2026-05-30",
      gradient: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 40%, #C4B5FD 60%, #6D28D9 100%)",
      shadow: "0 4px 14px -2px rgba(124, 58, 237, 0.5), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "28-alina-postpartum-ocd": {
      addedAt: "2026-06-04",
      gradient: "linear-gradient(135deg, #F472B6 0%, #DB2777 40%, #FBCFE8 60%, #BE185D 100%)",
      shadow: "0 4px 14px -2px rgba(219, 39, 119, 0.5), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "22-janelle-bipolar-perinatal-ocd": {
      addedAt: "2026-08-14",
      gradient: "linear-gradient(135deg, #60A5FA 0%, #2563EB 40%, #93C5FD 60%, #1D4ED8 100%)",
      shadow: "0 4px 14px -2px rgba(37, 99, 235, 0.55), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "23-malcolm-did-ptsd": {
      addedAt: "2026-08-14",
      gradient: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 40%, #FDE68A 60%, #D97706 100%)",
      shadow: "0 4px 14px -2px rgba(245, 158, 11, 0.55), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "24-priya-atypical-anorexia-ocd": {
      addedAt: "2026-08-14",
      gradient: "linear-gradient(135deg, #5EEAD4 0%, #14B8A6 40%, #99F6E4 60%, #0D9488 100%)",
      shadow: "0 4px 14px -2px rgba(20, 184, 166, 0.55), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
    "25-marcus-ptsd-panic-alcohol": {
      addedAt: "2026-08-14",
      gradient: "linear-gradient(135deg, #FDA4AF 0%, #E11D48 40%, #FECDD3 60%, #BE123C 100%)",
      shadow: "0 4px 14px -2px rgba(225, 29, 72, 0.55), inset 1px 1px 2px rgba(255,255,255,0.55)",
    },
  };
  const NEW_BADGE_DAYS = 14;
  const examTwoIsNew = (() => {
    const exam = getPracticeExamById("practice-exam-2");
    return exam ? isExamNew(exam) : false;
  })();
  const examThree = getPracticeExamById("practice-exam-3");
  const isBadgeActive = (id: string) => {
    const entry = NEW_BADGES[id];
    if (!entry) return false;
    const added = new Date(entry.addedAt).getTime();
    return Date.now() - added < NEW_BADGE_DAYS * 24 * 60 * 60 * 1000;
  };

  const filtered = narratives
    .filter((s) => {
      if (difficultyFilter !== "all" && s.difficulty !== difficultyFilter) return false;
      if (categoryFilter !== "all" && s.category !== categoryFilter) return false;
      if (statusFilter !== "all") {
        const attempt = attempts[s.id];
        if (statusFilter === "completed" && !attempt?.completed_at) return false;
        if (statusFilter === "not-started" && attempt) return false;
      }
      return true;
    })
    .sort((a, b) => {
      const aNew = isBadgeActive(a.id) ? 0 : 1;
      const bNew = isBadgeActive(b.id) ? 0 : 1;
      return aNew - bNew;
    });

  const getStatus = (id: string) => {
    const attempt = attempts[id];
    if (!attempt) return "not-started";
    if (attempt.completed_at) return "completed";
    return "in-progress";
  };

  if (track === "nce") {
    return (
      <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Narratives</h1>
        <p className="text-muted-foreground">The NCE track uses the Question Bank instead of clinical narratives.</p>
        <Button onClick={() => navigate("/questions")}>Go to Question Bank</Button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Narratives</h1>
        <p className="text-muted-foreground mb-6">Practice with realistic NCMHCE clinical case narratives</p>

        <h2 className="text-lg font-semibold text-foreground mb-4">Full-Length Practice Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card
            className="card-elevated cursor-pointer hover:border-primary/30 transition-all group"
            onClick={() => navigate("/practice-exams")}
          >
            <CardContent className="p-6">
              <div className="absolute top-3 right-3" />
              <Brain className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Practice Exam 1</h3>
              <p className="text-sm text-muted-foreground mt-1">11 clinical narratives • ~4 hours</p>
              <Button size="sm" className="mt-4 h-7 text-xs">
                <PlayCircle className="h-3 w-3 mr-1" /> Open Exam
              </Button>
            </CardContent>
          </Card>
          <Card
            className="card-elevated cursor-pointer hover:border-primary/30 transition-all group relative overflow-hidden"
            onClick={() => navigate("/practice-exams")}
          >
            <CardContent className="p-6">
              {examTwoIsNew && (
                <span
                  className="absolute -top-1 -right-1 z-10 px-4 py-1.5 text-[12px] font-extrabold tracking-widest uppercase rounded-[999px] text-white shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #60A5FA 0%, #2563EB 40%, #93C5FD 60%, #1D4ED8 100%)",
                    boxShadow:
                      "0 4px 14px -2px rgba(37, 99, 235, 0.55), inset 1px 1px 2px rgba(255,255,255,0.55)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  NEW
                </span>
              )}
              <Brain className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Practice Exam 2</h3>
              <p className="text-sm text-muted-foreground mt-1">11 clinical narratives • ~4 hours</p>
              <Button size="sm" className="mt-4 h-7 text-xs">
                <PlayCircle className="h-3 w-3 mr-1" /> Open Exam
              </Button>
            </CardContent>
          </Card>
          {examThree && (
            <Card className="card-elevated relative overflow-hidden opacity-70">
              <CardContent className="p-6">
                <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-full bg-muted text-muted-foreground border border-border">
                  COMING SOON
                </span>
                <LockIcon className="h-8 w-8 text-muted-foreground mb-3" />
                <h3 className="font-semibold text-foreground">{examThree.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{examThree.description}</p>
                <Button size="sm" className="mt-4 h-7 text-xs" disabled>
                  <LockIcon className="h-3 w-3 mr-1" /> Coming Soon
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-3">
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-full sm:w-[160px]"><SelectValue placeholder="Difficulty" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[200px]"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="not-started">Not Started</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((n) => {
          const status = getStatus(n.id);
          const attempt = attempts[n.id];
          const qCount = totalQuestionCount(n);
          const minutes = getNarrativeTotalMinutes(n);
          return (
            <Card
              key={n.id}
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all group relative overflow-hidden"
              onClick={() => navigate(`/narrative/${n.id}`)}
            >
              {isBadgeActive(n.id) && (
                <span
                  className="absolute -top-1 -right-1 z-10 px-3.5 py-1 text-[11px] font-extrabold tracking-widest uppercase rounded-[999px] text-white shadow-lg"
                  style={{
                    background: NEW_BADGES[n.id].gradient,
                    boxShadow: NEW_BADGES[n.id].shadow,
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  NEW
                </span>
              )}
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className={difficultyColor[n.difficulty]}>
                    {n.difficulty}
                  </Badge>
                  {status === "completed" && (
                    <div className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">{attempt?.total_score}%</span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{n.category} • {qCount} questions</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> ~{minutes} min
                  </span>
                  <Button size="sm" variant={status === "completed" ? "outline" : "default"} className="h-7 text-xs">
                    {status === "completed" ? (
                      <><RotateCcw className="h-3 w-3 mr-1" /> Retry</>
                    ) : (
                      <><PlayCircle className="h-3 w-3 mr-1" /> Start</>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Narratives;
