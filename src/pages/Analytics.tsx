import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip,
  ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import {
  Target, TrendingUp, CheckCircle2, AlertTriangle, Sparkles, BarChart3
} from "lucide-react";
import { DEMO_MODE, demoAttempts } from "@/data/demo-stats";

interface Attempt {
  simulation_id: string;
  total_score: number | null;
  domain_scores: Record<string, number> | null;
  ig_selections: string[] | null;
  completed_at: string | null;
  created_at: string;
}

const DOMAINS = [
  "Assessment & Diagnosis",
  "Treatment Planning",
  "Counselor Attributes & Core Competencies",
  "Professional Practice & Ethics",
  "Information Gathering",
];

const Analytics = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (DEMO_MODE) {
      setAttempts(demoAttempts as unknown as Attempt[]);
      setLoading(false);
      return;
    }
    if (!user) return;
    supabase
      .from("simulation_attempts")
      .select("simulation_id, total_score, domain_scores, ig_selections, completed_at, created_at")
      .eq("user_id", user.id)
      .not("completed_at", "is", null)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setAttempts((data as Attempt[]) || []);
        setLoading(false);
      });
  }, [user]);

  const completed = attempts.filter((a) => a.completed_at);
  const avgScore = completed.length > 0
    ? Math.round(completed.reduce((s, a) => s + (a.total_score || 0), 0) / completed.length)
    : 0;
  const passRate = completed.length > 0
    ? Math.round((completed.filter((a) => (a.total_score || 0) >= 70).length / completed.length) * 100)
    : 0;

  // Domain averages
  const domainTotals: Record<string, { sum: number; count: number }> = {};
  completed.forEach((a) => {
    if (!a.domain_scores) return;
    Object.entries(a.domain_scores as Record<string, number>).forEach(([d, s]) => {
      if (!domainTotals[d]) domainTotals[d] = { sum: 0, count: 0 };
      domainTotals[d].sum += s;
      domainTotals[d].count++;
    });
  });
  const domainAvgs = DOMAINS.map((d) => ({
    domain: d.length > 20 ? d.slice(0, 18) + "…" : d,
    fullDomain: d,
    score: domainTotals[d] ? Math.round(domainTotals[d].sum / domainTotals[d].count) : 0,
  }));

  const radarData = domainAvgs.map((d) => ({ subject: d.domain, score: d.score, fullMark: 100 }));

  // Trend data (last 10)
  const trendData = completed.slice(-10).map((a, i) => ({
    name: `Sim ${i + 1}`,
    score: a.total_score || 0,
  }));

  // IG critical item stats
  const totalCriticalGathered = completed.reduce((acc, a) => {
    const sels = (a.ig_selections as string[]) || [];
    return acc + sels.filter((s) => s.includes("ig")).length;
  }, 0);

  const getColor = (score: number) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-amber-400";
    return "text-red-400";
  };

  const generateAIAnalysis = async () => {
    setAiLoading(true);
    setAiAnalysis("");
    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/counselor-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `Based on my NCMHCE exam preparation analytics, provide personalized study recommendations:\n\n- Total simulations: ${completed.length}\n- Average score: ${avgScore}%\n- Pass rate: ${passRate}%\n- Domain scores:\n${domainAvgs.map((d) => `  ${d.fullDomain}: ${d.score}%`).join("\n")}\n\nIdentify my top 2 strengths, top 2 areas for improvement, and provide specific study recommendations for each weak area including which DSM-5-TR sections to review.`
          }],
          context: "Analytics Dashboard",
        }),
      });

      if (resp.ok && resp.body) {
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let text = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let idx: number;
          while ((idx = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, idx);
            buffer = buffer.slice(idx + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (!line.startsWith("data: ")) continue;
            const json = line.slice(6).trim();
            if (json === "[DONE]") break;
            try {
              const p = JSON.parse(json);
              const c = p.choices?.[0]?.delta?.content;
              if (c) { text += c; setAiAnalysis(text); }
            } catch { break; }
          }
        }
      }
    } catch (e) {
      toast({ title: "Error generating analysis", variant: "destructive" });
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 flex justify-center"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (completed.length === 0) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Analytics</h1>
        <Card className="card-elevated">
          <CardContent className="p-12 text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">No Data Yet</h2>
            <p className="text-muted-foreground text-sm">Complete your first narrative to see your analytics here.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>

      {/* Overall Performance */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="card-elevated">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary"><Target className="h-5 w-5" /></div>
            <div>
              <p className="text-2xl font-bold text-foreground">{completed.length}</p>
              <p className="text-xs text-muted-foreground">Narratives Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-elevated">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-2 rounded-lg ${avgScore >= 70 ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{avgScore}%</p>
              <p className="text-xs text-muted-foreground">Average Score</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-elevated">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-2 rounded-lg ${passRate >= 70 ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{passRate}%</p>
              <p className="text-xs text-muted-foreground">Pass Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Domain Radar */}
        <Card className="card-elevated">
          <CardHeader><CardTitle className="text-base">Domain Performance</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Radar name="Score" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {domainAvgs.map((d) => (
                <div key={d.fullDomain} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground truncate mr-2">{d.fullDomain}</span>
                  <span className={`font-medium ${getColor(d.score)}`}>{d.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Score Trend */}
        <Card className="card-elevated">
          <CardHeader><CardTitle className="text-base">Score Trend (Last 10)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <ReTooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-0.5 w-8 bg-red-400" /> 70% passing threshold
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Analysis */}
      <Card className="card-elevated border-primary/20">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> AI Study Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          {aiAnalysis ? (
            <div className="prose prose-sm prose-invert max-w-none">
              <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              Get personalized study recommendations based on your performance data.
            </p>
          )}
          <Button onClick={generateAIAnalysis} disabled={aiLoading} className="mt-4">
            <Sparkles className="mr-2 h-4 w-4" />
            {aiLoading ? "Generating..." : aiAnalysis ? "Regenerate Recommendations" : "Get AI Study Recommendations"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
