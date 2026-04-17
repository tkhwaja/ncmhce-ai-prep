import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Layers, Target, TrendingUp, Clock, Flame, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DEMO_MODE, demoDashboardStats, demoRecentActivity } from "@/data/demo-stats";

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const Dashboard = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const rawFirst = profile?.full_name?.trim().split(/\s+/)[0] || "there";
  const firstName = capitalize(rawFirst);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const stats = DEMO_MODE
    ? [
        { label: "Narratives Completed", value: String(demoDashboardStats.narrativesCompleted), icon: Target, color: "text-primary" },
        { label: "Average Score", value: `${demoDashboardStats.averageScore}%`, icon: TrendingUp, color: "text-emerald-400" },
        { label: "Study Streak", value: `${demoDashboardStats.studyStreakDays} days`, icon: Flame, color: "text-amber-400" },
        { label: "Hours Studied", value: `${demoDashboardStats.hoursStudied}h`, icon: Clock, color: "text-violet-400" },
      ]
    : [
        { label: "Narratives Completed", value: "0", icon: Target, color: "text-primary" },
        { label: "Average Score", value: "—", icon: TrendingUp, color: "text-emerald-400" },
        { label: "Study Streak", value: "0 days", icon: Flame, color: "text-amber-400" },
        { label: "Hours Studied", value: "0h", icon: Clock, color: "text-violet-400" },
      ];

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
            {DEMO_MODE ? (
              <ul className="space-y-3">
                {demoRecentActivity.map((a) => (
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
                      <p className="text-xs text-muted-foreground">{a.when}</p>
                    </div>
                    <span className={`text-sm font-medium ${a.type === "narrative" ? (a.score >= 70 ? "text-emerald-400" : "text-amber-400") : "text-muted-foreground"}`}>
                      {a.type === "narrative" ? `${a.score}%` : `${a.score} cards`}
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
              Based on your study history, we recommend starting with the{" "}
              <span className="text-foreground font-medium">PTSD differential diagnosis</span>{" "}
              module. Understanding trauma-related disorders is heavily tested on the NCMHCE.
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
