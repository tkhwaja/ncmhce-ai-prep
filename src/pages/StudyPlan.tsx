import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { getActiveLibraryModules, getActiveNarratives, getActiveFlashcardDecks, getActivePracticeExams } from "@/lib/exam-content";
import type { ExamTrack } from "@/config/exam-tracks";
import {
  CalendarIcon, Sparkles, ChevronDown, ChevronRight, RotateCcw, BookOpen, CheckCircle2
} from "lucide-react";

interface WeekPlan {
  week: number;
  topic: string;
  activities: string[];
  hours: number;
  completed?: boolean[];
}

interface StudyPlan {
  id: string;
  intake_data: any;
  plan_data: WeekPlan[];
}


type StudyResource = {
  label: string;
  href: string;
};

const normalizeResourceKey = (value: string) =>
  value
    .toLowerCase()
    .replace(/[—–-]/g, " ")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const findByTitle = <T extends { title?: string; name?: string; id: string }>(
  items: T[],
  topic: string,
) => {
  const key = normalizeResourceKey(topic);
  return items.find((item) => normalizeResourceKey(item.title ?? item.name ?? "") === key);
};

const libraryAliases: Record<string, string> = {
  "treatment planning": "clinical-case-conceptualization",
  "case conceptualization": "clinical-case-conceptualization",
  "ethical codes and standards": "ethics-and-legal-issues",
  "ethics and legal issues": "ethics-and-legal-issues",
  "boundaries and informed consent": "ethics-and-legal-issues",
  "crisis intervention": "crisis-trauma-and-disaster-counseling",
  "trauma and mandatory reporting": "crisis-trauma-and-disaster-counseling",
  "counseling skills and attributes": "counseling-theories-techniques",
  "counselor client relationship": "counseling-theories-techniques",
  "diagnosis and assessment": "assessment-and-testing",
  "assessment and diagnosis": "assessment-and-testing",
  "dsm 5 tr criteria": "dsm-5-tr-diagnoses",
  "dsm 5 tr overview": "dsm-5-tr-diagnoses",
};

const flashcardAliases: Record<string, string> = {
  "dsm 5 tr criteria": "dsm5",
  "dsm 5 tr disorders": "dsm5",
  "therapeutic modalities": "treatment",
  "treatment modalities": "treatment",
  "ethical codes and standards": "ethics",
  "ethical codes aca": "ethics",
  "counseling theories": "theories",
  "assessment tools": "assessment",
  "crisis intervention": "crisis",
};

const narrativeAliases: Record<string, string> = {
  "mood disorders": "02-marcus-mdd",
  "major depressive disorder": "02-marcus-mdd",
  "anxiety disorders": "01-priya-gad",
  "generalized anxiety disorder": "01-priya-gad",
  "social anxiety": "12-miguel-social-anxiety",
  "trauma": "03-david-ptsd",
  "ptsd": "03-david-ptsd",
  "substance use": "05-james-aud",
  "alcohol use disorder": "05-james-aud",
  "obsessive compulsive disorder": "09-mei-ocd",
  "eating disorders": "07-jordan-anorexia",
  "personality disorders": "10-tyrone-bpd",
  "suicidality and self harm": "02-marcus-mdd",
  "self harm": "10-tyrone-bpd",
  "treatment sequencing": "28-rafael-ptsd",
};

interface ContentSet {
  libraryModules: { title: string; id: string }[];
  flashcardDecks: { name: string; id: string }[];
  narratives: { title: string; id: string }[];
}

const createResolvers = (content: ContentSet) => {
  const resolveLibraryHref = (topic: string): string | null => {
    const exact = findByTitle(content.libraryModules, topic);
    const module = exact ?? content.libraryModules.find((item) => item.id === libraryAliases[normalizeResourceKey(topic)]);
    return module ? `/library?module=${module.id}` : null;
  };

  const resolveFlashcardHref = (topic: string): string | null => {
    const exact = findByTitle(content.flashcardDecks, topic);
    const deck = exact ?? content.flashcardDecks.find((item) => item.id === flashcardAliases[normalizeResourceKey(topic)]);
    return deck ? `/flashcards?deck=${deck.id}` : null;
  };

  const resolveNarrativeHref = (topic: string): string | null => {
    const exact = findByTitle(content.narratives, topic);
    const narrative = exact ?? content.narratives.find((item) => item.id === narrativeAliases[normalizeResourceKey(topic)]);
    return narrative ? `/narrative/${narrative.id}` : null;
  };

  // IMPORTANT: Never rewrite the saved activity label. Only attach a link.
  // Match strictly within the activity's own type (library / flashcards / narrative).
  // If no clean same-type match, fall back to that section's index page.
  const resolveStudyActivity = (activity: string): StudyResource => {
    const trimmed = activity.trim();
    const normalizedActivity = normalizeResourceKey(trimmed.replace(/^[^:]+:\s*/, ""));

    if (/complete timed practice exam/i.test(trimmed) || normalizedActivity === "multi domain integration") {
      return { label: trimmed, href: "/practice-exams" };
    }

    const match = trimmed.match(/^(Study Learning Library|Review Flashcards|Practice Narrative):\s*(.+)$/i);
    if (!match) return { label: trimmed, href: "/study-plan" };

    const [, type, topic] = match;
    if (/study learning library/i.test(type)) {
      return { label: trimmed, href: resolveLibraryHref(topic) ?? "/library" };
    }
    if (/review flashcards/i.test(type)) {
      return { label: trimmed, href: resolveFlashcardHref(topic) ?? "/flashcards" };
    }
    // Practice Narrative — narrative only, no cross-type fallback
    return { label: trimmed, href: resolveNarrativeHref(topic) ?? "/narratives" };
  };

  return { resolveStudyActivity };
};

const getResourcePrompt = (track: ExamTrack, content: ContentSet): string => {
  const practiceItems = track === "nce"
    ? `Practice questions: use the Question Bank and the practice exams listed above.`
    : `Practice narratives: ${content.narratives.map((narrative) => narrative.title).join("; ")}.`;
  return `Available platform resources. Use ONLY these exact names after the activity prefix.
Learning Library modules: ${content.libraryModules.map((module) => module.title).join("; ")}.
Flashcard decks: ${content.flashcardDecks.map((deck) => deck.name).join("; ")}.
${practiceItems}
Full exam simulation: Complete timed practice exam.`;
};

const StudyPlan = () => {
  const { user, session } = useAuth();
  const { track, config } = useExamTrack();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  const content = useMemo<ContentSet>(() => ({
    libraryModules: getActiveLibraryModules(track),
    flashcardDecks: getActiveFlashcardDecks(track),
    narratives: getActiveNarratives(track),
  }), [track]);

  const { resolveStudyActivity } = useMemo(() => createResolvers(content), [content]);
  const platformResourcePrompt = useMemo(() => getResourcePrompt(track, content), [track, content]);

  // Intake form state
  const [examDate, setExamDate] = useState<Date>();
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [takenBefore, setTakenBefore] = useState(false);
  const [confidence, setConfidence] = useState<Record<string, number>>({});
  const [biggestConcern, setBiggestConcern] = useState("");

  // Rate every content area for the active track (NCE has 8, NCMHCE has 3).
  const confidenceAreas = config.domains;

  useEffect(() => {
    if (!user) return;
    supabase
      .from("study_plans")
      .select("*")
      .eq("user_id", user.id)
      .eq("exam_track", track)
      .order("created_at", { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPlan(data[0] as unknown as StudyPlan);
        }
        setLoading(false);
      });
  }, [user, track]);

  const generatePlan = async () => {
    if (!user || !examDate) return;
    setGenerating(true);

    // Always use a fresh access token — a tab left open can hold an expired one,
    // which made generation fail with a generic error.
    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token ?? session?.access_token ?? "";
    if (!accessToken) {
      setGenerating(false);
      toast({
        title: "Please sign in again",
        description: "Your session expired. Refresh the page and try once more.",
        variant: "destructive",
      });
      return;
    }

    const intakeData = {
      examDate: examDate.toISOString(),
      hoursPerWeek: hoursPerWeek[0],
      takenBefore,
      confidence,
      biggestConcern,
    };

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/counselor-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `Generate a structured week-by-week ${config.label} study plan as a JSON array. Each element should have: week (number), topic (string), activities (array of strings), hours (number).

Student info:
- Exam date: ${format(examDate, "PPP")}
- Today's date: ${format(new Date(), "PPP")}
- Weeks until exam: ${Math.max(1, Math.ceil((examDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000)))}
- Study hours per week: ${hoursPerWeek[0]}
- Taken ${config.label} before: ${takenBefore ? "Yes" : "No"}
- Confidence ratings (1-5): ${JSON.stringify(confidence)}
- Biggest concern: ${biggestConcern}

CRITICAL: Generate EXACTLY ${Math.max(1, Math.ceil((examDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000)))} weeks — this is the actual number of weeks until the student's exam date. Do NOT default to 10 weeks.

Create a realistic plan focusing more time on weaker areas. All activities MUST reference real resources available on the platform.
${platformResourcePrompt}

Allowed activity formats:
- "Study Learning Library: [exact module title from the list]"
- "Review Flashcards: [exact deck name from the list]"
${track === "nce" ? '- "Practice Question Bank: [domain or topic from the list]"\n- "Complete timed practice exam"' : '- "Practice Narrative: [exact practice narrative title from the list]"\n- "Complete timed practice exam"'}

Do NOT create generic activity titles unless that exact resource appears in the list.

Do NOT suggest external textbooks, websites, or resources not on the platform.

IMPORTANT: Return ONLY a valid JSON array, no markdown, no explanation. Example format:
[{"week":1,"topic":"${config.domains[0] || "Foundations"}","activities":["Study Learning Library: ${content.libraryModules[0]?.title || "Foundations"}","Review Flashcards: ${content.flashcardDecks[0]?.name || "Key Terms"}","Complete timed practice exam"],"hours":10}]`
          }],
          context: "Study Plan Generator",
        }),
      });

      if (!resp.ok) {
        if (resp.status === 401 || resp.status === 403) {
          throw new Error("Your session expired. Please refresh the page and try again.");
        }
        if (resp.status === 429) {
          throw new Error("The planner is busy right now. Please wait a minute and try again.");
        }
        throw new Error("We couldn't build your plan just now. Please try again in a moment.");
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";

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
            if (c) fullText += c;
          } catch {
            // Ignore non-JSON keepalive/metadata lines instead of aborting the stream.
            continue;
          }
        }
      }

      // Parse JSON from response. Long plans can arrive truncated, so recover the
      // complete weeks instead of failing the whole generation.
      const parsePlanArray = (text: string): any[] | null => {
        const start = text.indexOf("[");
        if (start === -1) return null;
        const candidates = [text.slice(start, text.lastIndexOf("]") + 1)];
        const lastComplete = text.lastIndexOf("}");
        if (lastComplete > start) candidates.push(`${text.slice(start, lastComplete + 1)}]`);
        for (const candidate of candidates) {
          try {
            const parsed = JSON.parse(candidate);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
          } catch {
            // try the next candidate
          }
        }
        return null;
      };

      const parsedWeeks = parsePlanArray(fullText);
      if (!parsedWeeks) throw new Error("We couldn't build your plan just now. Please try again.");

      const planData: WeekPlan[] = parsedWeeks.map((w: any) => ({
        ...w,
        activities: Array.isArray(w.activities)
          ? w.activities.map((activity: string) => resolveStudyActivity(activity).label)
          : [],
        completed: new Array(Array.isArray(w.activities) ? w.activities.length : 0).fill(false),
      }));

      // Save to DB
      const { data: saved, error } = await supabase
        .from("study_plans")
        .insert({ user_id: user.id, intake_data: intakeData, plan_data: planData as any, exam_track: track })
        .select()
        .single();

      if (error) throw error;
      setPlan(saved as unknown as StudyPlan);
      toast({ title: "Study plan generated!" });
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const toggleActivity = async (weekIdx: number, actIdx: number) => {
    if (!plan) return;
    const newPlan = { ...plan };
    const weeks = [...(newPlan.plan_data as WeekPlan[])];
    const week = { ...weeks[weekIdx] };
    const completed = [...(week.completed || new Array(week.activities.length).fill(false))];
    completed[actIdx] = !completed[actIdx];
    week.completed = completed;
    weeks[weekIdx] = week;
    newPlan.plan_data = weeks;
    setPlan(newPlan);

    await supabase
      .from("study_plans")
      .update({ plan_data: weeks as any })
      .eq("id", plan.id);
  };

  const resetPlan = () => {
    setPlan(null);
  };

  if (loading) {
    return <div className="p-6 flex justify-center"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  // State 2: Plan exists
  if (plan) {
    const weeks = plan.plan_data as WeekPlan[];
    return (
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Your Study Plan</h1>
          <Button variant="outline" onClick={resetPlan}>
            <RotateCcw className="mr-2 h-4 w-4" /> Regenerate Plan
          </Button>
        </div>

        <div className="space-y-3">
          {weeks.map((week, wi) => {
            const completedCount = (week.completed || []).filter(Boolean).length;
            const totalActivities = week.activities.length;
            const allDone = completedCount === totalActivities;

            return (
              <Collapsible key={wi} defaultOpen={wi < 3}>
                <Card className={`card-elevated ${allDone ? "border-emerald-500/30" : ""}`}>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="font-mono">Week {week.week}</Badge>
                        <CardTitle className="text-sm">{week.topic}</CardTitle>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{completedCount}/{totalActivities}</span>
                        <span className="text-xs text-muted-foreground">{week.hours}h</span>
                        {allDone && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 px-4 pb-4">
                      <div className="space-y-2">
                        {week.activities.map((activity, ai) => {
                          const resolved = resolveStudyActivity(activity);
                          const isComplete = week.completed?.[ai] || false;
                          return (
                            <div key={ai} className="flex items-start gap-3 py-1">
                              <Checkbox
                                checked={isComplete}
                                onCheckedChange={() => toggleActivity(wi, ai)}
                                className="mt-0.5"
                              />
                              <button
                                type="button"
                                onClick={() => navigate(resolved.href)}
                                className={cn(
                                  "group/activity flex min-w-0 flex-1 items-start justify-between gap-2 rounded-md px-1 py-0.5 text-left text-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                  isComplete ? "text-muted-foreground line-through" : "text-foreground",
                                )}
                              >
                                <span className="min-w-0 break-words">{resolved.label}</span>
                                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover/activity:opacity-100" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      </div>
    );
  }

  // State 1: Intake form
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-foreground">Let's Build Your Personalized {config.label} Study Plan</h1>
        <p className="text-muted-foreground mt-2">Answer a few questions and our AI will create a custom study schedule</p>
      </div>

      <Card className="card-elevated">
        <CardContent className="p-6 space-y-6">
          {/* Exam Date */}
          <div className="space-y-2">
            <Label>When is your exam date?</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !examDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {examDate ? format(examDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={examDate} onSelect={setExamDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>

          {/* Hours per week */}
          <div className="space-y-3">
            <Label>How many hours per week can you commit? ({hoursPerWeek[0]} hours)</Label>
            <Slider value={hoursPerWeek} onValueChange={setHoursPerWeek} min={3} max={20} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>3 hours</span><span>20 hours</span>
            </div>
          </div>

          {/* Taken before */}
          <div className="flex items-center justify-between">
            <Label>Have you taken the {config.label} before?</Label>
            <Switch checked={takenBefore} onCheckedChange={setTakenBefore} />
          </div>

          {/* Confidence ratings */}
          <div className="space-y-3">
            <Label>Rate your confidence in these areas (1-5)</Label>
            {confidenceAreas.map((area) => (
              <div key={area} className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground flex-1">{area}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Button
                      key={n}
                      variant={confidence[area] === n ? "default" : "outline"}
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setConfidence((p) => ({ ...p, [area]: n }))}
                    >
                      {n}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Biggest concern */}
          <div className="space-y-2">
            <Label>What's your biggest concern about the exam?</Label>
            <Textarea
              value={biggestConcern}
              onChange={(e) => setBiggestConcern(e.target.value)}
              placeholder="e.g., I struggle with differential diagnosis between similar disorders..."
              rows={3}
            />
          </div>

          <Button
            className="w-full"
            onClick={generatePlan}
            disabled={
              !examDate || generating || Object.keys(confidence).length < confidenceAreas.length
            }
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {generating ? "Generating Your Plan..." : "Generate My Study Plan"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyPlan;
