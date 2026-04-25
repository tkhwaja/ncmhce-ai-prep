import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip,
  ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar, ReferenceLine
} from "recharts";
import {
  Target, TrendingUp, CheckCircle2, Sparkles, BarChart3
} from "lucide-react";
import TceIcon, { TceIconName } from "@/components/icons/TceIcon";
import { DEMO_MODE, demoAttempts } from "@/data/demo-stats";

const DOMAIN_ICONS: Record<string, TceIconName> = {
  "Intake/assessment/diagnosis": "domain-assessment",
  "Professional practice and ethics": "domain-ethics",
  "Core counseling attributes": "domain-counseling",
  "Treatment planning": "domain-treatment",
  "Counseling skills and interventions": "domain-intervention",
};

const DOMAIN_SHORT: Record<string, string> = {
  "Intake/assessment/diagnosis": "Assessment",
  "Professional practice and ethics": "Ethics",
  "Core counseling attributes": "Core Counseling",
  "Treatment planning": "Treatment",
  "Counseling skills and interventions": "Interventions",
};

interface Attempt {
  narrative_id: string;
  total_score: number | null;
  domain_scores: Record<string, number> | null;
  ig_selections: string[] | null;
  completed_at: string | null;
  created_at: string;
}

const DOMAINS = [
  "Intake/assessment/diagnosis",
  "Professional practice and ethics",
  "Core counseling attributes",
  "Treatment planning",
  "Counseling skills and interventions",
];

const DOMAIN_ALIASES: Record<string, string> = {
  "Assessment & Diagnosis": "Intake/assessment/diagnosis",
  "Information Gathering": "Intake/assessment/diagnosis",
  "Professional Practice & Ethics": "Professional practice and ethics",
  "Counselor Attributes & Core Competencies": "Core counseling attributes",
  "Treatment Planning": "Treatment planning",
  "Counseling Skills & Interventions": "Counseling skills and interventions",
};

const normalizeDomain = (domain: string) => DOMAIN_ALIASES[domain] || domain;

const Analytics = () => {
  const { user, session } = useAuth();
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
      .from("narrative_attempts")
      .select("narrative_id, total_score, domain_scores, ig_selections, completed_at, created_at")
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
      const normalizedDomain = normalizeDomain(d);
      if (!domainTotals[normalizedDomain]) domainTotals[normalizedDomain] = { sum: 0, count: 0 };
      domainTotals[normalizedDomain].sum += s;
      domainTotals[normalizedDomain].count++;
    });
  });
  const domainAvgs = DOMAINS.map((d) => ({
    domain: d,
    shortName: DOMAIN_SHORT[d] || d,
    score: domainTotals[d] ? Math.round(domainTotals[d].sum / domainTotals[d].count) : 0,
  }));

  const radarData = domainAvgs.map((d) => ({ subject: d.shortName, score: d.score, fullMark: 100 }));

  // Trend data (last 10)
  const trendData = completed.slice(-10).map((a, i) => ({
    name: `N${i + 1}`,
    score: a.total_score || 0,
  }));

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
          Authorization: `Bearer ${session?.access_token ?? ""}`,
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `Analyze my NCMHCE prep data and give structured recommendations. Use exactly these 3 markdown headers and keep each section to 2-3 bullet points max:

## 💪 Strengths
## ⚠️ Areas to Improve  
## 📋 Study Plan

My data:
- Narratives completed: ${completed.length}
- Average score: ${avgScore}%
- Pass rate: ${passRate}%
- Domain scores:
${domainAvgs.map((d) => `  ${d.domain}: ${d.score}%`).join("\n")}

Be specific — name exact DSM-5-TR categories or topics to review. Keep it actionable and concise.`
          }],
          context: "Analytics Dashboard — structured analysis",
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
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData} cx="50%" cy="52%" outerRadius="56%" margin={{ top: 24, right: 36, bottom: 16, left: 36 }}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                />
                <PolarRadiusAxis angle={35} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Radar name="Score" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {domainAvgs.map((d) => (
                <div key={d.domain} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <TceIcon name={DOMAIN_ICONS[d.domain]} size={16} className="text-blue-400 shrink-0" />
                    <span>{d.domain}</span>
                  </span>
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
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <ReTooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                <ReferenceLine y={70} stroke="hsl(var(--destructive))" strokeDasharray="6 4" label={{ value: "Pass: 70%", fill: "hsl(var(--destructive))", fontSize: 10, position: "insideTopRight" }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
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
            <div className="prose prose-sm dark:prose-invert max-w-none [&>h2]:text-base [&>h2]:font-semibold [&>h2]:mt-4 [&>h2]:mb-2 [&>ul]:my-2 [&>ul>li]:text-sm">
              <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              Get personalized study recommendations based on your performance data.
            </p>
          )}
          <Button onClick={generateAIAnalysis} disabled={aiLoading} className="mt-4">
            <Sparkles className="mr-2 h-4 w-4" />
            {aiLoading ? "Generating..." : aiAnalysis ? "Regenerate" : "Get AI Recommendations"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
