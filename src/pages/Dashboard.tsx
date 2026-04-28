import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Layers, Target, TrendingUp, Clock, Flame, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getNarrativeById } from "@/data/narratives";

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

interface NarrativeAttempt {
  id: string;
  narrative_id: string;
  total_score: number | null;
  domain_scores: Record<string, number> | null;
  time_spent: number | null;
  completed_at: string | null;
  created_at: string;
}

interface FlashcardProgress {
  id: string;
  deck_id: string;
  card_id: string;
  status: string;
  last_reviewed: string | null;
  created_at: string;
}

const formatRelativeTime = (value: string | null) => {
  if (!value) return "Recently";
  const diffMs = Date.now() - new Date(value).getTime();
  const minutes = Math.max(0, Math.floor(diffMs / 60000));
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  return new Date(value).toLocaleDateString();
};

const Dashboard = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [attempts, setAttempts] = useState<NarrativeAttempt[]>([]);
  const [flashcardProgress, setFlashcardProgress] = useState<FlashcardProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const rawFirst = profile?.full_name?.trim().split(/\s+/)[0] || "there";
  const firstName = capitalize(rawFirst);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  useEffect(() => {
    if (!user) return;

    const loadDashboardData = async () => {
      setLoading(true);
      const [{ data: attemptData }, { data: flashcardData }] = await Promise.all([
        supabase
          .from("narrative_attempts")
          .select("id, narrative_id, total_score, domain_scores, time_spent, completed_at, created_at")
          .eq("user_id", user.id)
          .not("completed_at", "is", null)
          .order("completed_at", { ascending: false }),
        supabase
          .from("flashcard_progress")
          .select("id, deck_id, card_id, status, last_reviewed, created_at")
          .eq("user_id", user.id)
          .order("last_reviewed", { ascending: false, nullsFirst: false }),
      ]);
      setAttempts((attemptData as NarrativeAttempt[]) || []);
      setFlashcardProgress((flashcardData as FlashcardProgress[]) || []);
      setLoading(false);
    };

    loadDashboardData();
  }, [user]);

  const completedAttempts = attempts.filter((attempt) => attempt.completed_at);
  const averageScore = completedAttempts.length
    ? Math.round(completedAttempts.reduce((sum, attempt) => sum + (attempt.total_score || 0), 0) / completedAttempts.length)
    : null;
  const totalStudySeconds = completedAttempts.reduce((sum, attempt) => sum + (attempt.time_spent || 0), 0);
  const reviewedDates = new Set(
    [
      ...completedAttempts.map((attempt) => attempt.completed_at?.slice(0, 10)),
      ...flashcardProgress.map((card) => card.last_reviewed?.slice(0, 10)),
    ].filter(Boolean) as string[],
  );
  let studyStreak = 0;
  const cursor = new Date();
  while (reviewedDates.has(cursor.toISOString().slice(0, 10))) {
    studyStreak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  const stats = [
    { label: "Narratives Completed", value: loading ? "…" : String(completedAttempts.length), icon: Target, color: "text-primary" },
    { label: "Average Score", value: loading ? "…" : averageScore === null ? "—" : `${averageScore}%`, icon: TrendingUp, color: "text-emerald-400" },
    { label: "Study Streak", value: loading ? "…" : `${studyStreak} day${studyStreak === 1 ? "" : "s"}`, icon: Flame, color: "text-amber-400" },
    { label: "Hours Studied", value: loading ? "…" : `${Math.round((totalStudySeconds / 3600) * 10) / 10}h`, icon: Clock, color: "text-violet-400" },
  ];

  const recentActivity = useMemo(() => {
    const narrativeItems = completedAttempts.map((attempt) => ({
      id: attempt.id,
      type: "narrative" as const,
      title: getNarrativeById(attempt.narrative_id)?.title || "Clinical narrative",
      score: attempt.total_score,
      date: attempt.completed_at || attempt.created_at,
    }));
    const flashcardItems = flashcardProgress
      .filter((card) => card.last_reviewed)
      .map((card) => ({
        id: card.id,
        type: "flashcards" as const,
        title: `${card.deck_id.replace(/-/g, " ")} flashcard review`,
        score: null,
        date: card.last_reviewed || card.created_at,
      }));

    return [...narrativeItems, ...flashcardItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [completedAttempts, flashcardProgress]);

  const weakestDomain = useMemo(() => {
    const totals: Record<string, { sum: number; count: number }> = {};
    completedAttempts.forEach((attempt) => {
      Object.entries(attempt.domain_scores || {}).forEach(([domain, score]) => {
        if (!totals[domain]) totals[domain] = { sum: 0, count: 0 };
        totals[domain].sum += score;
        totals[domain].count += 1;
      });
    });
    return Object.entries(totals)
      .map(([domain, value]) => ({ domain, average: Math.round(value.sum / value.count) }))
      .sort((a, b) => a.average - b.average)[0];
  }, [completedAttempts]);

  const quickActions = [
    { title: "Start a Narrative", desc: "Practice with realistic NCMHCE clinical case narratives", icon: Brain, path: "/narratives", color: "from-primary/20 to-primary/5" },
    { title: "Review Study Plan", desc: "Track your progress and upcoming topics", icon: BarChart3, path: "/study-plan", color: "from-emerald-500/20 to-emerald-500/5" },
    { title: "Practice Flashcards", desc: "Review key concepts and DSM-5-TR criteria", icon: Layers, path: "/flashcards", color: "from-violet-500/20 to-violet-500/5" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back, {firstName}</h1>
        <p className="text-muted-foreground">{today}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="card-elevated">
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Card
              key={action.title}
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all group"
              onClick={() => navigate(action.path)}
            >
              <CardContent className={`p-6 bg-gradient-to-br ${action.color} rounded-xl`}>
                <action.icon className="h-8 w-8 text-foreground mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">{action.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{action.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity + AI Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length > 0 ? (
              <ul className="space-y-3">
                {recentActivity.map((a) => (
                  <li key={a.id} className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      {a.type === "narrative" ? (
                        <Brain className="h-4 w-4 text-primary" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-violet-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground truncate">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{formatRelativeTime(a.date)}</p>
                    </div>
                    <span className={`text-sm font-medium ${a.type === "narrative" ? ((a.score || 0) >= 70 ? "text-emerald-400" : "text-amber-400") : "text-muted-foreground"}`}>
                      {a.type === "narrative" ? `${a.score ?? "—"}%` : "Reviewed"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-muted-foreground text-center py-8">
                No activity yet. Start a narrative or flashcard session to see your progress here.
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="card-elevated border-primary/20">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> AI Recommended
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {weakestDomain
                ? <>
                    Based on your completed narratives, your lowest domain is{" "}
                    <span className="text-foreground font-medium">{weakestDomain.domain}</span> at {weakestDomain.average}%.
                    Start with targeted review and then retake a related case.
                  </>
                : "Complete a narrative to unlock personalized recommendations based on your actual score history."}
            </p>
            <Button variant="outline" size="sm" className="mt-4" onClick={() => navigate("/narratives")}>
              Start Learning
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
