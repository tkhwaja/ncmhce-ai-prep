import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { narratives, totalQuestionCount, getNarrativeTotalMinutes } from "@/data/narratives";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Clock, Lock, CheckCircle2, PlayCircle, RotateCcw } from "lucide-react";

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
  }, [user]);

  const categories = [...new Set(narratives.map((s) => s.category))];

  const filtered = narratives.filter((s) => {
    if (difficultyFilter !== "all" && s.difficulty !== difficultyFilter) return false;
    if (categoryFilter !== "all" && s.category !== categoryFilter) return false;
    if (statusFilter !== "all") {
      const attempt = attempts[s.id];
      if (statusFilter === "completed" && !attempt?.completed_at) return false;
      if (statusFilter === "not-started" && attempt) return false;
    }
    return true;
  });

  const getStatus = (id: string) => {
    const attempt = attempts[id];
    if (!attempt) return "not-started";
    if (attempt.completed_at) return "completed";
    return "in-progress";
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
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
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Difficulty" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[200px]"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
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
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all group"
              onClick={() => navigate(`/narrative/${n.id}`)}
            >
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
