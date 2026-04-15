import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Timer, Brain, FileText, Play, Pause, RotateCcw, ChevronRight, Plus, Trash2, Save, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── POMODORO TIMER ───
const PomodoroTimer = () => {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [completedToday, setCompletedToday] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSeconds = (isBreak ? breakMin : workMin) * 60;
  const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    } else if (secondsLeft === 0) {
      if (!isBreak) {
        setCompletedToday(c => c + 1);
        setIsBreak(true);
        setSecondsLeft(breakMin * 60);
      } else {
        setIsBreak(false);
        setSecondsLeft(workMin * 60);
      }
      setIsRunning(false);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, secondsLeft, isBreak, workMin, breakMin]);

  const reset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setSecondsLeft(workMin * 60);
  };

  const circumference = 2 * Math.PI * 90;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div className="relative w-52 h-52">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
            <circle
              cx="100" cy="100" r="90" fill="none"
              stroke={isBreak ? "hsl(var(--accent))" : "hsl(var(--primary))"}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (progress / 100) * circumference}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-mono font-bold text-foreground">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <Badge variant={isBreak ? "secondary" : "default"} className="mt-2">
              {isBreak ? "Break" : "Focus"}
            </Badge>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={() => setIsRunning(!isRunning)} size="lg">
            {isRunning ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" onClick={reset} size="lg">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Completed today: <span className="font-semibold text-foreground">{completedToday}</span> pomodoros
        </p>
      </div>

      <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)} className="w-full">
        {showSettings ? "Hide Settings" : "Customize Intervals"}
      </Button>

      {showSettings && (
        <Card className="card-elevated">
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Work: {workMin} min</label>
              <Slider min={15} max={50} step={5} value={[workMin]} onValueChange={([v]) => { setWorkMin(v); if (!isRunning && !isBreak) setSecondsLeft(v * 60); }} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Break: {breakMin} min</label>
              <Slider min={3} max={15} step={1} value={[breakMin]} onValueChange={([v]) => { setBreakMin(v); if (!isRunning && isBreak) setSecondsLeft(v * 60); }} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// ─── FEYNMAN TECHNIQUE ───
const FeynmanTool = () => {
  const [step, setStep] = useState(1);
  const [concept, setConcept] = useState("");
  const [explanation, setExplanation] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const analyze = async () => {
    if (!concept || !explanation) return;
    setLoading(true);
    setFeedback("");

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/counselor-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `I'm using the Feynman Technique to study for the NCMHCE. The concept I chose is: "${concept}"\n\nHere is my explanation in simple terms:\n"${explanation}"\n\nPlease analyze my explanation. Tell me:\n1. What I got RIGHT (be specific)\n2. What I MISSED (key points I didn't cover)\n3. What I got WRONG (any inaccuracies)\n4. A brief correct explanation for comparison\n\nFormat with markdown headers and bullet points.`
          }],
          context: "Feynman Technique Study Tool"
        }),
      });

      if (!res.ok) throw new Error("AI unavailable");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let result = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          for (const line of chunk.split("\n")) {
            if (!line.startsWith("data: ") || line.includes("[DONE]")) continue;
            try {
              const parsed = JSON.parse(line.slice(6));
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) { result += content; setFeedback(result); }
            } catch {}
          }
        }
      }
      setStep(3);
    } catch (e) {
      toast({ title: "Error", description: "Could not analyze explanation", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Step indicators */}
      <div className="flex gap-2">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className={cn(
            "flex-1 h-1.5 rounded-full transition-colors",
            s <= step ? "bg-primary" : "bg-muted"
          )} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Step 1: Choose a Concept</h3>
          <p className="text-sm text-muted-foreground">What NCMHCE topic do you want to study?</p>
          <Input
            placeholder="e.g., Generalized Anxiety Disorder diagnostic criteria"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />
          <Button onClick={() => setStep(2)} disabled={!concept.trim()}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Step 2: Explain It Simply</h3>
          <p className="text-sm text-muted-foreground">Explain <strong className="text-foreground">{concept}</strong> as if you're teaching it to someone with no background.</p>
          <Textarea
            placeholder="Write your explanation here..."
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows={8}
          />
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={analyze} disabled={!explanation.trim() || loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              Analyze My Explanation
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Step 3: AI Feedback</h3>
          <Card className="card-elevated border-primary/20">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                {feedback || "Analyzing..."}
              </div>
            </CardContent>
          </Card>
          <Button onClick={() => { setStep(4); }}>
            Simplify & Retry <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Step 4: Revise Your Explanation</h3>
          <p className="text-sm text-muted-foreground">Based on the feedback, revise your explanation of <strong className="text-foreground">{concept}</strong>.</p>
          <Textarea
            placeholder="Write your revised explanation..."
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows={8}
          />
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(3)}>View Feedback</Button>
            <Button onClick={() => { setStep(2); }}>Analyze Again</Button>
            <Button variant="outline" onClick={() => { setStep(1); setConcept(""); setExplanation(""); setFeedback(""); }}>
              New Concept
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── NOTES PAD ───
interface Note {
  id: string;
  title: string;
  content: string;
  updated_at: string;
}

const NotesPad = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchNotes = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from("notes")
      .select("id, title, content, updated_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });
    if (data) setNotes(data);
  }, [user]);

  useEffect(() => { fetchNotes(); }, [fetchNotes]);

  const selectNote = (note: Note) => {
    setSelectedId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const createNote = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("notes")
      .insert({ user_id: user.id, title: "Untitled Note", content: "" })
      .select()
      .single();
    if (data) {
      await fetchNotes();
      selectNote(data);
    }
  };

  const saveNote = useCallback(async () => {
    if (!selectedId) return;
    setSaving(true);
    await supabase.from("notes").update({ title, content }).eq("id", selectedId);
    setSaving(false);
    fetchNotes();
  }, [selectedId, title, content, fetchNotes]);

  // Auto-save every 30s
  useEffect(() => {
    if (!selectedId) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(saveNote, 30000);
    return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
  }, [content, title, saveNote, selectedId]);

  const deleteNote = async (id: string) => {
    await supabase.from("notes").delete().eq("id", id);
    if (selectedId === id) { setSelectedId(null); setTitle(""); setContent(""); }
    fetchNotes();
    toast({ title: "Note deleted" });
  };

  return (
    <div className="flex gap-4 h-[500px]">
      {/* Notes list */}
      <div className="w-48 flex-shrink-0 space-y-2 overflow-auto">
        <Button size="sm" onClick={createNote} className="w-full">
          <Plus className="mr-2 h-3 w-3" /> New Note
        </Button>
        {notes.map(n => (
          <div
            key={n.id}
            onClick={() => selectNote(n)}
            className={cn(
              "p-2 rounded-md cursor-pointer text-sm group flex items-center justify-between",
              selectedId === n.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
            )}
          >
            <div className="truncate flex-1">
              <p className="font-medium truncate">{n.title}</p>
              <p className="text-xs opacity-60">{new Date(n.updated_at).toLocaleDateString()}</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); deleteNote(n.id); }}
              className="opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col">
        {selectedId ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="font-semibold text-foreground"
                placeholder="Note title"
              />
              <Button size="sm" variant="outline" onClick={saveNote}>
                <Save className="mr-1 h-3 w-3" /> {saving ? "Saving..." : "Save"}
              </Button>
            </div>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 resize-none font-mono text-sm"
              placeholder="Start writing..."
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
            Select a note or create a new one
          </div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN TOOLS PAGE ───
const Tools = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Study Tools</h1>
        <p className="text-muted-foreground">Built-in utilities to supercharge your study sessions</p>
      </div>

      <Tabs defaultValue="pomodoro">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="pomodoro" className="flex items-center gap-1.5">
            <Timer className="h-4 w-4" /> Pomodoro
          </TabsTrigger>
          <TabsTrigger value="feynman" className="flex items-center gap-1.5">
            <Brain className="h-4 w-4" /> Feynman
          </TabsTrigger>
          <TabsTrigger value="notes" className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" /> Notes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pomodoro" className="mt-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Timer className="h-5 w-5 text-primary" /> Pomodoro Timer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PomodoroTimer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feynman" className="mt-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" /> Feynman Technique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FeynmanTool />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="mt-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Study Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NotesPad />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tools;
