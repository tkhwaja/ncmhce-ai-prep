import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { simulations } from "@/data/simulations";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import {
  Clock, ChevronRight, CheckCircle2, XCircle, AlertTriangle,
  RotateCcw, ArrowRight, LayoutDashboard, Sparkles, Eye, EyeOff, Lock
} from "lucide-react";
import { getNarrativeDurationSeconds, getUnlockedPart, splitNarrativeIntoParts, PART_LABELS } from "@/lib/narrative";
import NarrativeReviewChat from "@/components/NarrativeReviewChat";

type Phase = "ig" | "dm" | "results";

const SimulationPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const sim = simulations.find((s) => s.id === id);

  const totalDuration = useMemo(
    () => (sim ? getNarrativeDurationSeconds(sim.dmQuestions.length) : 0),
    [sim]
  );

  const [phase, setPhase] = useState<Phase>("ig");
  const [secondsRemaining, setSecondsRemaining] = useState(totalDuration);
  const [timerExpired, setTimerExpired] = useState(false);
  const [showExpiryDialog, setShowExpiryDialog] = useState(false);
  const [gatheredItems, setGatheredItems] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [dmAnswers, setDmAnswers] = useState<Record<string, number>>({});
  const [currentDmIndex, setCurrentDmIndex] = useState(0);
  const [results, setResults] = useState<{
    totalScore: number;
    domainScores: Record<string, number>;
    aiFeedback: string;
  } | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dialogShownRef = useRef(false);

  // Sync initial seconds when sim loads
  useEffect(() => {
    setSecondsRemaining(totalDuration);
  }, [totalDuration]);

  // Countdown timer
  useEffect(() => {
    if (phase === "results" || totalDuration === 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((s) => {
        const next = s - 1;
        if (next <= 0 && !dialogShownRef.current) {
          dialogShownRef.current = true;
          setTimerExpired(true);
          setShowExpiryDialog(true);
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, totalDuration]);

  const elapsed = totalDuration - secondsRemaining;
  const timer = elapsed; // alias used downstream where time-spent is reported

  const formatTime = (s: number) => {
    const abs = Math.max(0, s);
    const m = Math.floor(abs / 60);
    const sec = abs % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  if (!sim) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Narrative not found.</p>
        <Button onClick={() => navigate("/narratives")} className="mt-4">Back to Narratives</Button>
      </div>
    );
  }

  // Sectioned narrative reveal — gated by how many DM questions have been answered.
  const narrativeParts = splitNarrativeIntoParts(sim.narrative);
  const answeredCount = Object.keys(dmAnswers).length;
  const unlockedPart = getUnlockedPart(answeredCount);

  const toggleItem = (itemId: string) => {
    setGatheredItems((prev) => new Set(prev).add(itemId));
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  const canProceedToDM = gatheredItems.size >= 3;

  const handleDmAnswer = (questionId: string, optionIndex: number) => {
    setDmAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const allDmAnswered = sim.dmQuestions.every((q) => dmAnswers[q.id] !== undefined);

  const calculateResults = () => {
    const domainScores: Record<string, { correct: number; total: number }> = {};
    sim.dmQuestions.forEach((q) => {
      if (!domainScores[q.domain]) domainScores[q.domain] = { correct: 0, total: 0 };
      domainScores[q.domain].total++;
      if (dmAnswers[q.id] === q.correctIndex) domainScores[q.domain].correct++;
    });

    // IG scoring: bonus for gathering critical items
    const criticalItems = sim.igItems.filter((i) => i.critical);
    const gatheredCritical = criticalItems.filter((i) => gatheredItems.has(i.id));
    const igScore = criticalItems.length > 0 ? (gatheredCritical.length / criticalItems.length) * 100 : 100;

    const dmScore = sim.dmQuestions.reduce((acc, q) => acc + (dmAnswers[q.id] === q.correctIndex ? 1 : 0), 0) / sim.dmQuestions.length * 100;

    const totalScore = Math.round(igScore * 0.4 + dmScore * 0.6);

    const domainPcts: Record<string, number> = {};
    Object.entries(domainScores).forEach(([domain, { correct, total }]) => {
      domainPcts[domain] = Math.round((correct / total) * 100);
    });
    domainPcts["Information Gathering"] = Math.round(igScore);

    return { totalScore, domainScores: domainPcts };
  };

  const handleSubmit = async () => {
    if (!user) return;
    setSubmitting(true);
    const { totalScore, domainScores } = calculateResults();

    setResults({ totalScore, domainScores, aiFeedback: "" });
    setPhase("results");

    // Save attempt
    await supabase.from("simulation_attempts").insert({
      user_id: user.id,
      simulation_id: sim.id,
      ig_selections: Array.from(gatheredItems),
      dm_answers: dmAnswers,
      domain_scores: domainScores,
      total_score: totalScore,
      time_spent: timer,
      completed_at: new Date().toISOString(),
    });

    // Get AI feedback
    setFeedbackLoading(true);
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
            content: `I just completed a clinical simulation for "${sim.title}". Here are my results:\n\n**Information Gathered:** ${Array.from(gatheredItems).map(id => sim.igItems.find(i => i.id === id)?.label).join(", ")}\n\n**Critical items missed:** ${sim.igItems.filter(i => i.critical && !gatheredItems.has(i.id)).map(i => i.label).join(", ") || "None"}\n\n**Decision Making Answers:**\n${sim.dmQuestions.map(q => `- ${q.question}: My answer: "${q.options[dmAnswers[q.id]]}" (${dmAnswers[q.id] === q.correctIndex ? "Correct" : `Incorrect - correct was "${q.options[q.correctIndex]}"`})`).join("\n")}\n\n**Score: ${totalScore}%**\n\nPlease provide 2-3 paragraphs of clinical feedback evaluating my reasoning, highlighting what I did well, areas for improvement, and specific study recommendations.`
          }],
          context: `Simulation: ${sim.title}`
        }),
      });

      if (resp.ok && resp.body) {
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let feedback = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let newlineIdx: number;
          while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, newlineIdx);
            buffer = buffer.slice(newlineIdx + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (!line.startsWith("data: ")) continue;
            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;
            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                feedback += content;
                setResults(prev => prev ? { ...prev, aiFeedback: feedback } : prev);
              }
            } catch { break; }
          }
        }

        // Save feedback
        if (feedback) {
          const { data: attemptData } = await supabase
            .from("simulation_attempts")
            .select("id")
            .eq("user_id", user.id)
            .eq("simulation_id", sim.id)
            .order("created_at", { ascending: false })
            .limit(1)
            .single();

          if (attemptData) {
            await supabase.from("simulation_attempts")
              .update({ feedback })
              .eq("id", attemptData.id);
          }
        }
      }
    } catch (e) {
      console.error("Failed to get AI feedback:", e);
    } finally {
      setFeedbackLoading(false);
      setSubmitting(false);
    }
  };

  const categoryGroups = {
    "Intake/Assessment": sim.igItems.filter(i => i.category === "Intake/Assessment"),
    "History": sim.igItems.filter(i => i.category === "History"),
    "Clinical Observations": sim.igItems.filter(i => i.category === "Clinical Observations"),
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem-2.5rem)]">
      {/* Top Bar */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30 shrink-0">
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className={`font-mono text-sm ${
              phase !== "results" && secondsRemaining <= 60 ? "border-red-500/40 text-red-400" :
              phase !== "results" && secondsRemaining <= 300 ? "border-amber-500/40 text-amber-400" : ""
            }`}
          >
            <Clock className="h-3 w-3 mr-1" />
            {phase === "results"
              ? formatTime(elapsed)
              : timerExpired
                ? `+${formatTime(Math.abs(secondsRemaining))} over`
                : formatTime(secondsRemaining)}
          </Badge>
          <span className="text-sm font-medium text-foreground">{sim.title}</span>
        </div>
        <Badge variant="outline" className="text-xs">
          {phase === "ig" ? "Information Gathering" : phase === "dm" ? "Decision Making" : "Results & Feedback"}
        </Badge>
      </div>

      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 overflow-auto">
          {/* Client Narrative — staged reveal in 3 parts */}
          <div className="p-4 border-b border-border bg-card/50 space-y-3">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" /> Client Narrative
            </h3>
            {narrativeParts.map((text, i) => {
              const isUnlocked = i <= unlockedPart;
              return (
                <div key={i} className={`rounded-md border p-3 ${isUnlocked ? "border-border bg-background/40" : "border-dashed border-border/60 bg-muted/20"}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium text-foreground">{PART_LABELS[i]}</span>
                    {!isUnlocked && (
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Unlocks after {i === 1 ? "Question 5" : "Question 10"}
                      </span>
                    )}
                  </div>
                  {isUnlocked ? (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{text}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">
                      This section will be revealed once you've answered the required number of decision-making questions.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content Area */}
          <div className="p-4">
            <Tabs value={phase} onValueChange={(v) => {
              if (v === "ig" && phase !== "results") setPhase("ig");
              if (v === "dm" && canProceedToDM && phase !== "results") setPhase("dm");
              if (v === "results" && results) setPhase("results");
            }}>
              <TabsList className="mb-4">
                <TabsTrigger value="ig" disabled={phase === "results"}>
                  Information Gathering
                </TabsTrigger>
                <TabsTrigger value="dm" disabled={!canProceedToDM || phase === "results"}>
                  Decision Making
                </TabsTrigger>
                <TabsTrigger value="results" disabled={!results}>
                  Results & Feedback
                </TabsTrigger>
              </TabsList>

              {/* === INFORMATION GATHERING === */}
              <TabsContent value="ig" className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Select the information you would like to gather about this client. Click on an item to reveal the information.
                  You must gather at least 3 items before proceeding to Decision Making.
                </p>

                {Object.entries(categoryGroups).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-foreground mb-3">{category}</h4>
                    <div className="space-y-2">
                      {items.map((item) => {
                        const isGathered = gatheredItems.has(item.id);
                        const isExpanded = expandedItems.has(item.id);
                        return (
                          <Card
                            key={item.id}
                            className={`cursor-pointer transition-all ${
                              isGathered
                                ? "border-primary/30 bg-primary/5"
                                : "card-elevated hover:border-primary/20"
                            }`}
                            onClick={() => toggleItem(item.id)}
                          >
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {isGathered ? (
                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                  ) : (
                                    <div className="h-4 w-4 rounded-full border border-muted-foreground shrink-0" />
                                  )}
                                  <span className="text-sm text-foreground">{item.label}</span>
                                </div>
                                {isGathered && (
                                  <span className="text-xs text-muted-foreground">
                                    {isExpanded ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                                  </span>
                                )}
                              </div>
                              {isGathered && isExpanded && (
                                <div className="mt-3 pl-6 text-sm text-muted-foreground border-l-2 border-primary/30 ml-1">
                                  {item.revealText}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {gatheredItems.size} of {sim.igItems.length} items gathered
                  </span>
                  <Button onClick={() => setPhase("dm")} disabled={!canProceedToDM}>
                    Proceed to Decision Making <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* === DECISION MAKING === */}
              <TabsContent value="dm" className="space-y-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Answer each clinical decision question based on the information you gathered.
                  Question {currentDmIndex + 1} of {sim.dmQuestions.length}
                </p>

                <Progress value={((currentDmIndex + 1) / sim.dmQuestions.length) * 100} className="h-1.5 mb-4" />

                {(() => {
                  const q = sim.dmQuestions[currentDmIndex];
                  return (
                    <Card className="card-elevated">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2 text-xs">{q.domain}</Badge>
                        <CardTitle className="text-base">{q.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup
                          value={dmAnswers[q.id]?.toString()}
                          onValueChange={(val) => handleDmAnswer(q.id, parseInt(val))}
                          className="space-y-3"
                        >
                          {q.options.map((opt, i) => (
                            <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value={i.toString()} id={`${q.id}-${i}`} className="mt-0.5" />
                              <Label htmlFor={`${q.id}-${i}`} className="text-sm cursor-pointer leading-relaxed">
                                {opt}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </CardContent>
                    </Card>
                  );
                })()}

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentDmIndex(Math.max(0, currentDmIndex - 1))}
                    disabled={currentDmIndex === 0}
                  >
                    Previous
                  </Button>
                  {currentDmIndex < sim.dmQuestions.length - 1 ? (
                    <Button
                      onClick={() => setCurrentDmIndex(currentDmIndex + 1)}
                      disabled={dmAnswers[sim.dmQuestions[currentDmIndex].id] === undefined}
                    >
                      Next <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!allDmAnswered || submitting}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      {submitting ? "Submitting..." : "Submit Simulation"}
                    </Button>
                  )}
                </div>
              </TabsContent>

              {/* === RESULTS & FEEDBACK === */}
              <TabsContent value="results" className="space-y-6">
                {results && (
                  <>
                    {/* Overall Score */}
                    <Card className={`card-elevated border-2 ${results.totalScore >= 70 ? "border-emerald-500/30" : "border-red-500/30"}`}>
                      <CardContent className="p-6 text-center">
                        <div className={`text-5xl font-bold mb-2 ${results.totalScore >= 70 ? "text-emerald-400" : "text-red-400"}`}>
                          {results.totalScore}%
                        </div>
                        <Badge className={results.totalScore >= 70 ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}>
                          {results.totalScore >= 70 ? "PASS" : "BELOW PASSING"}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Passing threshold: 70% • Time: {formatTime(timer)}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Domain Scores */}
                    <Card className="card-elevated">
                      <CardHeader><CardTitle className="text-base">Domain Breakdown</CardTitle></CardHeader>
                      <CardContent className="space-y-4">
                        {Object.entries(results.domainScores).map(([domain, score]) => (
                          <div key={domain}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">{domain}</span>
                              <span className={score >= 70 ? "text-emerald-400" : "text-red-400"}>{score}%</span>
                            </div>
                            <Progress value={score} className="h-2" />
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* IG Review */}
                    <Card className="card-elevated">
                      <CardHeader><CardTitle className="text-base">Information Gathering Review</CardTitle></CardHeader>
                      <CardContent className="space-y-2">
                        {sim.igItems.filter(i => i.critical).map((item) => {
                          const wasGathered = gatheredItems.has(item.id);
                          return (
                            <div key={item.id} className={`flex items-start gap-2 p-2 rounded-lg text-sm ${
                              wasGathered ? "bg-emerald-500/10" : "bg-red-500/10"
                            }`}>
                              {wasGathered ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                              ) : (
                                <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                              )}
                              <div>
                                <span className={wasGathered ? "text-foreground" : "text-red-300"}>
                                  {item.label}
                                </span>
                                {!wasGathered && (
                                  <p className="text-xs text-red-400 mt-1">
                                    <AlertTriangle className="h-3 w-3 inline mr-1" />
                                    Critical item missed — {item.label.toLowerCase().includes("suicide") || item.label.toLowerCase().includes("safety")
                                      ? "This is a critical clinical safety item."
                                      : "This information is essential for accurate clinical assessment."}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>

                    {/* DM Review */}
                    <Card className="card-elevated">
                      <CardHeader><CardTitle className="text-base">Decision Making Review</CardTitle></CardHeader>
                      <CardContent className="space-y-4">
                        {sim.dmQuestions.map((q) => {
                          const userAnswer = dmAnswers[q.id];
                          const isCorrect = userAnswer === q.correctIndex;
                          return (
                            <div key={q.id} className={`p-4 rounded-lg border ${isCorrect ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"}`}>
                              <p className="text-sm font-medium text-foreground mb-2">{q.question}</p>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="text-muted-foreground">Your answer: </span>
                                  <span className={isCorrect ? "text-emerald-400" : "text-red-400"}>
                                    {q.options[userAnswer]}
                                  </span>
                                </p>
                                {!isCorrect && (
                                  <p>
                                    <span className="text-muted-foreground">Correct answer: </span>
                                    <span className="text-emerald-400">{q.options[q.correctIndex]}</span>
                                  </p>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{q.explanation}</p>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>

                    {/* AI Feedback */}
                    <Card className="card-elevated border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" /> AI Clinical Feedback
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {results.aiFeedback ? (
                          <div className="prose prose-sm prose-invert max-w-none">
                            <ReactMarkdown>{results.aiFeedback}</ReactMarkdown>
                          </div>
                        ) : feedbackLoading ? (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            Generating clinical feedback...
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">Feedback unavailable.</p>
                        )}
                      </CardContent>
                    </Card>

                    {/* Review-mode AI chat — focused on wrong answers */}
                    <NarrativeReviewChat
                      narrativeTitle={sim.title}
                      questions={sim.dmQuestions.map((q) => ({
                        id: q.id,
                        question: q.question,
                        options: q.options,
                        userAnswerIndex: dmAnswers[q.id],
                        correctIndex: q.correctIndex,
                        explanation: q.explanation,
                      }))}
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button variant="outline" onClick={() => window.location.reload()}>
                        <RotateCcw className="mr-2 h-4 w-4" /> Retry This Narrative
                      </Button>
                      <Button variant="outline" onClick={() => navigate("/narratives")}>
                        <ArrowRight className="mr-2 h-4 w-4" /> Next Narrative
                      </Button>
                      <Button onClick={() => navigate("/dashboard")}>
                        <LayoutDashboard className="mr-2 h-4 w-4" /> Return to Dashboard
                      </Button>
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;
