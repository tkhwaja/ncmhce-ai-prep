import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StudyVisuals } from "@/components/library/StudyVisuals";
import { ChevronDown, ChevronRight, Lightbulb, AlertTriangle, BookOpen, Target, HelpCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Generic section renderers for the structured JSON module format    */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 first:mt-0">{children}</h2>
);

const ExamPearl = ({ text }: { text: string }) => (
  <Alert className="border-primary/30 bg-primary/5 my-2">
    <Lightbulb className="h-4 w-4 text-primary" />
    <AlertDescription className="text-sm text-foreground">{text}</AlertDescription>
  </Alert>
);

const ExamPearls = ({ pearls }: { pearls?: string[] }) => {
  if (!pearls?.length) return null;
  return (
    <div className="space-y-1 mt-3">
      <p className="text-xs font-semibold text-primary uppercase tracking-wide">Exam Pearls</p>
      {pearls.map((p, i) => <ExamPearl key={i} text={p} />)}
    </div>
  );
};

const CollapsibleSection = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border border-border rounded-lg mt-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-accent/50 rounded-lg transition-colors">
        <span className="font-semibold text-foreground text-left">{title}</span>
        {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">{children}</CollapsibleContent>
    </Collapsible>
  );
};

/* ---- Intro ---- */
const IntroSection = ({ intro }: { intro: any }) => (
  <div className="space-y-4">
    <p className="text-muted-foreground leading-relaxed">{intro.summary}</p>
    {intro.learningObjectives?.length > 0 && (
      <Card className="card-elevated">
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><Target className="h-4 w-4 text-primary" /> Learning Objectives</h3>
          <ul className="space-y-1">
            {intro.learningObjectives.map((obj: string, i: number) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{obj}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )}
    {intro.highYieldThemes?.length > 0 && (
      <div>
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">High-Yield Themes</p>
        {intro.highYieldThemes.map((t: string, i: number) => <ExamPearl key={i} text={t} />)}
      </div>
    )}
    {intro.howToUse?.length > 0 && (
      <CollapsibleSection title="How to Use This Module">
        <ul className="space-y-1">
          {intro.howToUse.map((h: string, i: number) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">→</span>{h}</li>
          ))}
        </ul>
      </CollapsibleSection>
    )}
  </div>
);

/* ---- Decision Rules ---- */
const DecisionRules = ({ rules }: { rules: any[] }) => (
  <div>
    <SectionHeading>Core Decision Rules</SectionHeading>
    <div className="space-y-3">
      {rules.map((r, i) => (
        <Card key={i} className="card-elevated">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-foreground">{r.rule}</p>
            {r.example && <p className="text-xs text-muted-foreground mt-1 italic">Example: {r.example}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

/* ---- Mini Case Drills ---- */
const MiniCaseDrills = ({ drills }: { drills: any[] }) => (
  <div>
    <SectionHeading>Practice Case Drills</SectionHeading>
    <div className="space-y-3">
      {drills.map((d, i) => (
        <MiniCaseCard key={i} drill={d} index={i} />
      ))}
    </div>
  </div>
);

const MiniCaseCard = ({ drill, index }: { drill: any; index: number }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Card className="card-elevated">
      <CardContent className="p-4">
        <p className="text-sm font-medium text-foreground mb-2">
          <Badge variant="outline" className="mr-2 text-xs">Case {index + 1}</Badge>
          {drill.case}
        </p>
        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="text-xs text-primary hover:underline flex items-center gap-1">
            <HelpCircle className="h-3 w-3" /> Show Answer
          </button>
        ) : (
          <div className="mt-2 p-3 bg-primary/5 rounded-md border border-primary/20">
            <p className="text-sm text-foreground font-medium">
              {drill.bestNextStep || drill.bestConcept || drill.bestTheory || drill.bestLeaderMove || drill.bestStage || drill.bestCorrection || drill.bestLesson}
            </p>
            {drill.rationale && <p className="text-xs text-muted-foreground mt-1">{drill.rationale}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

/* ---- Checkpoint Questions ---- */
const CheckpointQuestions = ({ questions }: { questions: any[] }) => (
  <div>
    <SectionHeading>Checkpoint Questions</SectionHeading>
    <div className="space-y-2">
      {questions.map((q, i) => (
        <CheckpointCard key={i} q={q} />
      ))}
    </div>
  </div>
);

const CheckpointCard = ({ q }: { q: any }) => {
  const [show, setShow] = useState(false);
  return (
    <Card className="card-elevated">
      <CardContent className="p-4">
        <p className="text-sm font-medium text-foreground">{q.question}</p>
        {!show ? (
          <button onClick={() => setShow(true)} className="text-xs text-primary hover:underline mt-2">Reveal Answer</button>
        ) : (
          <p className="text-sm text-muted-foreground mt-2 p-2 bg-accent/50 rounded">{q.answer}</p>
        )}
      </CardContent>
    </Card>
  );
};

/* ---- Quick Review ---- */
const QuickReview = ({ review }: { review: any }) => (
  <div>
    <SectionHeading>Quick Review</SectionHeading>
    <Card className="card-elevated">
      <CardContent className="p-4 space-y-3">
        {review.memoryHooks?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Memory Hooks</p>
            <div className="flex flex-wrap gap-2">
              {review.memoryHooks.map((h: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs">{h}</Badge>
              ))}
            </div>
          </div>
        )}
        {review.finalTakeaways?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 mt-3">Final Takeaways</p>
            <ul className="space-y-1">
              {review.finalTakeaways.map((t: string, i: number) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary">✓</span>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);

/* ---- Common Exam Traps ---- */
const ExamTraps = ({ traps }: { traps: string[] }) => (
  <div>
    <SectionHeading>Common Exam Traps</SectionHeading>
    <div className="space-y-2">
      {traps.map((t, i) => (
        <Alert key={i} className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-sm text-foreground">{t}</AlertDescription>
        </Alert>
      ))}
    </div>
  </div>
);

/* ---- Assessment Framework ---- */
const AssessmentFramework = ({ framework }: { framework: any }) => {
  if (!framework?.types?.length) return null;

  return (
    <div>
      <SectionHeading>{framework.title || "Major Types of Assessment"}</SectionHeading>
      {framework.overview && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{framework.overview}</p>}

      {framework.selectionPrinciples?.length > 0 && (
        <div className="grid gap-3 md:grid-cols-2 mb-5">
          {framework.selectionPrinciples.map((principle: any, index: number) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {framework.types.map((type: any, index: number) => (
          <CollapsibleSection key={type.id || index} title={type.title} defaultOpen={index === 0}>
            <div className="space-y-4">
              {type.purpose && <p className="text-sm text-muted-foreground leading-relaxed">{type.purpose}</p>}

              <div className="grid gap-4 lg:grid-cols-2">
                {type.bestFor?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Best Used For</p>
                      <ul className="space-y-1">
                        {type.bestFor.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {type.notEnoughByItself?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Not Enough By Itself When</p>
                      <ul className="space-y-1">
                        {type.notEnoughByItself.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {type.strengths?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {type.strengths.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {type.limitations?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Limitations</p>
                      <ul className="space-y-1">
                        {type.limitations.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {type.commonExamples?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Common Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {type.commonExamples.map((example: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">{example}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-4 lg:grid-cols-2">
                {type.counselorShouldRemember?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Counselor Should Remember</p>
                      <ul className="space-y-1">
                        {type.counselorShouldRemember.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {type.commonExamMistakes?.length > 0 && (
                  <Card className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Common Exam Mistakes</p>
                      <ul className="space-y-1">
                        {type.commonExamMistakes.map((item: string, i: number) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {type.examClue && <ExamPearls pearls={[type.examClue]} />}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </div>
  );
};

/* ---- Matching Exercise ---- */
const MatchingExercise = ({ exercise }: { exercise: any }) => {
  const prompts = exercise?.prompts || [];
  const options = exercise?.options || [];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!prompts.length || !options.length) return null;

  const correctCount = prompts.filter((prompt: any) => answers[prompt.term] === prompt.correctOptionId).length;

  return (
    <div>
      <SectionHeading>{exercise.title || "Match the Terms"}</SectionHeading>
      {exercise.instructions && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exercise.instructions}</p>}

      <Card className="card-elevated">
        <CardContent className="p-5 space-y-5">
          {prompts.map((prompt: any, index: number) => {
            const selected = answers[prompt.term];
            const isCorrect = submitted && selected === prompt.correctOptionId;
            const isWrong = submitted && selected && selected !== prompt.correctOptionId;

            return (
              <div key={prompt.term} className="space-y-2 rounded-lg border border-border p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-foreground">{index + 1}. {prompt.term}</p>
                  {submitted && isCorrect && <Badge variant="secondary">Correct</Badge>}
                  {submitted && isWrong && <Badge variant="outline">Review</Badge>}
                </div>

                <Select
                  value={selected}
                  onValueChange={(value) => setAnswers((prev) => ({ ...prev, [prompt.term]: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose the matching definition" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option: any) => (
                      <SelectItem key={option.id} value={option.id}>{option.definition}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {submitted && (
                  <div className="rounded-md border border-border bg-accent/40 p-3 space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Correct Definition</p>
                    <p className="text-sm text-foreground">{options.find((option: any) => option.id === prompt.correctOptionId)?.definition}</p>
                    {prompt.whyItMatters && <p className="text-xs text-muted-foreground">Why it matters: {prompt.whyItMatters}</p>}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => setSubmitted(true)}>Check Answers</Button>
            <Button
              variant="outline"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
            >
              Reset
            </Button>
            {submitted && <p className="text-sm text-muted-foreground">Score: {correctCount} / {prompts.length}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

/* ---- Generic Key-Value Section ---- */
const GenericSection = ({ title, data }: { title: string; data: any }) => {
  if (!data) return null;

  // Handle array of objects with various structures
  if (Array.isArray(data)) {
    return (
      <CollapsibleSection title={title}>
        <div className="space-y-2">
          {data.map((item, i) => (
            <div key={i} className="text-sm text-muted-foreground">
              {typeof item === "string" ? (
                <p className="flex items-start gap-2"><span className="text-primary">•</span>{item}</p>
              ) : (
                <Card className="card-elevated">
                  <CardContent className="p-3">
                    {renderObjectContent(item)}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </CollapsibleSection>
    );
  }

  // Handle object with title + content
  if (typeof data === "object") {
    return (
      <CollapsibleSection title={data.title || title}>
        {data.overview && <p className="text-sm text-muted-foreground mb-3">{data.overview}</p>}
        {renderObjectContent(data)}
        <ExamPearls pearls={data.examPearls} />
      </CollapsibleSection>
    );
  }

  return null;
};

/* ---- Object content renderer ---- */
const renderObjectContent = (obj: any): React.ReactNode => {
  const skipKeys = new Set(["title", "overview", "examPearls", "examPearl", "sourceBasis", "moduleId", "moduleTitle", "moduleType", "version", "exam", "uiHints", "intro", "id"]);

  return (
    <div className="space-y-2">
      {Object.entries(obj).map(([key, value]) => {
        if (skipKeys.has(key)) return null;
        if (value === null || value === undefined) return null;

        // Render coreCriteria, mustRuleOut, specifiersToKnow, examClues etc as labeled lists
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string") {
          return (
            <div key={key}>
              <span className="text-xs font-medium text-foreground capitalize">{formatKey(key)}</span>
              <ul className="ml-4 mt-1">
                {value.map((v: string, i: number) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-1"><span className="text-primary text-xs">•</span>{v}</li>
                ))}
              </ul>
            </div>
          );
        }

        // Render severity object as key-value
        if (typeof value === "object" && !Array.isArray(value)) {
          return (
            <div key={key}>
              <span className="text-xs font-medium text-foreground capitalize">{formatKey(key)}</span>
              <div className="ml-4 mt-1 space-y-1">
                {Object.entries(value as Record<string, any>).map(([k, v]) => (
                  <p key={k} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground capitalize">{formatKey(k)}: </span>
                    {typeof v === "string" ? v : JSON.stringify(v)}
                  </p>
                ))}
              </div>
            </div>
          );
        }

        if (typeof value === "string") {
          return (
            <div key={key}>
              <span className="text-xs font-medium text-foreground capitalize">{formatKey(key)}: </span>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).replace(/Section$/, "").trim();

/* ---- DSM Diagnostic Categories ---- */
const DiagnosticCategories = ({ categories }: { categories: any[] }) => (
  <div>
    <SectionHeading>Diagnostic Categories</SectionHeading>
    <div className="space-y-4">
      {categories.map((cat, i) => (
        <CollapsibleSection key={i} title={cat.title} defaultOpen={i === 0}>
          {cat.overview && <p className="text-sm text-muted-foreground mb-3">{cat.overview}</p>}
          {cat.highYieldDisorders?.map((disorder: any, j: number) => (
            <CollapsibleSection key={j} title={disorder.title}>
              {disorder.hallmark && (
                <Alert className="border-primary/30 bg-primary/5 mb-3">
                  <Target className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm text-foreground">{disorder.hallmark}</AlertDescription>
                </Alert>
              )}
              {disorder.coreCriteria && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Core Criteria</p>
                  <ul className="space-y-1 ml-4">
                    {disorder.coreCriteria.map((c: string, k: number) => (
                      <li key={k} className="text-sm text-muted-foreground flex items-start gap-1">
                        <span className="text-primary text-xs">•</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {disorder.minimumThreshold && (
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Minimum Threshold: </span>{disorder.minimumThreshold}
                </p>
              )}
              {disorder.mustRuleOut && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Must Rule Out</p>
                  <ul className="space-y-1 ml-4">
                    {disorder.mustRuleOut.map((r: string, k: number) => (
                      <li key={k} className="text-sm text-muted-foreground flex items-start gap-1">
                        <span className="text-destructive text-xs">✕</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {disorder.severity && typeof disorder.severity === "object" && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Severity Levels</p>
                  {Object.entries(disorder.severity).map(([level, desc]) => (
                    <p key={level} className="text-sm text-muted-foreground ml-4">
                      <span className="font-medium text-foreground capitalize">{level}: </span>{desc as string}
                    </p>
                  ))}
                </div>
              )}
              {disorder.specifiersToKnow && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Specifiers to Know</p>
                  <div className="flex flex-wrap gap-1 ml-4">
                    {disorder.specifiersToKnow.map((s: string, k: number) => (
                      <Badge key={k} variant="outline" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {disorder.examClues && <ExamPearls pearls={disorder.examClues} />}
            </CollapsibleSection>
          ))}
          {cat.redFlags && (
            <div className="mt-3">
              {cat.redFlags.map((rf: any, k: number) => (
                <Alert key={k} className="border-destructive/30 bg-destructive/5 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <AlertDescription className="text-sm">
                    <span className="font-medium text-foreground">{rf.title || rf}</span>
                    {rf.whenToThinkOfIt && <span className="text-muted-foreground"> — {rf.whenToThinkOfIt}</span>}
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          )}
        </CollapsibleSection>
      ))}
    </div>
  </div>
);

/* ================================================================== */
/*  Main Renderer                                                      */
/* ================================================================== */

interface ModuleRendererProps {
  data: any;
}

const ModuleRenderer = ({ data }: ModuleRendererProps) => {
  if (!data) return null;

  const skipTopLevel = new Set([
    "moduleId", "moduleTitle", "moduleType", "version", "exam", "uiHints", "sourceBasis",
    "intro", "coreDecisionRules", "coreDiagnosticReasoningRules", "commonExamTraps", "miniCaseDrills", "quickReview", "checkpointQuestions",
    "diagnosticCategories", "globalDifferentialTables", "redFlagAlerts", "studyAids", "assessmentFramework", "assessmentTerminologyMatch",
  ]);

  // Collect all "other" sections
  const otherSections = Object.entries(data).filter(
    ([key]) => !skipTopLevel.has(key)
  );

  return (
    <div className="space-y-6">
      {/* Intro */}
      {data.intro && <IntroSection intro={data.intro} />}

      {/* Decision Rules */}
      {data.coreDecisionRules && <DecisionRules rules={data.coreDecisionRules} />}
      {data.coreDiagnosticReasoningRules && <DecisionRules rules={data.coreDiagnosticReasoningRules} />}

      {/* DSM Diagnostic Categories */}
      {data.diagnosticCategories && <DiagnosticCategories categories={data.diagnosticCategories} />}

      {/* Assessment Framework */}
      {data.assessmentFramework && <AssessmentFramework framework={data.assessmentFramework} />}

      {/* Global Differential Tables */}
      {data.globalDifferentialTables && (
        <div>
          <SectionHeading>Differential Diagnosis Tables</SectionHeading>
          {data.globalDifferentialTables.map((table: any, i: number) => (
            <CollapsibleSection key={i} title={table.title}>
              <div className="space-y-2">
                {table.rows?.map((row: any, j: number) => (
                  <Card key={j} className="card-elevated">
                    <CardContent className="p-3">{renderObjectContent(row)}</CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleSection>
          ))}
        </div>
      )}

      {/* Red Flag Alerts */}
      {data.redFlagAlerts && (
        <div>
          <SectionHeading>Red Flag Alerts</SectionHeading>
          {data.redFlagAlerts.map((alert: any, i: number) => (
            <Alert key={i} className="border-destructive/30 bg-destructive/5 mb-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-sm">
                <span className="font-medium text-foreground">{alert.title}</span>
                {alert.whenToThinkOfIt && <span className="text-muted-foreground"> — {alert.whenToThinkOfIt}</span>}
                {alert.clinicalPriority && <p className="text-xs text-muted-foreground mt-1">{alert.clinicalPriority}</p>}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      {/* Visual Study Aids */}
      {data.studyAids && (
        <div>
          <SectionHeading>Visual Study Aids</SectionHeading>
          <StudyVisuals aids={data.studyAids} />
        </div>
      )}

      {/* Domain-specific sections */}
      {otherSections.map(([key, value]) => (
        <GenericSection key={key} title={formatKey(key)} data={value} />
      ))}

      {/* Exam Traps */}
      {data.commonExamTraps && <ExamTraps traps={data.commonExamTraps} />}

      {/* Mini Cases */}
      {data.miniCaseDrills && <MiniCaseDrills drills={data.miniCaseDrills} />}

      {/* Quick Review */}
      {data.quickReview && <QuickReview review={data.quickReview} />}

      {/* Checkpoint Questions */}
      {data.checkpointQuestions && <CheckpointQuestions questions={data.checkpointQuestions} />}

      {/* Matching Exercise */}
      {data.assessmentTerminologyMatch && <MatchingExercise exercise={data.assessmentTerminologyMatch} />}
    </div>
  );
};

export default ModuleRenderer;
