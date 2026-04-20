import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  const skipKeys = new Set(["title", "overview", "examPearls", "examPearl", "sourceBasis", "moduleId", "moduleTitle", "moduleType", "version", "exam", "uiHints", "intro"]);

  return (
    <div className="space-y-2">
      {Object.entries(obj).map(([key, value]) => {
        if (skipKeys.has(key)) return null;
        if (value === null || value === undefined) return null;

        if (typeof value === "string") {
          return (
            <div key={key}>
              <span className="text-xs font-medium text-foreground capitalize">{formatKey(key)}: </span>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          );
        }

        if (Array.isArray(value) && value.length > 0) {
          if (typeof value[0] === "string") {
            return (
              <div key={key}>
                <span className="text-xs font-medium text-foreground capitalize">{formatKey(key)}</span>
                <ul className="ml-4 mt-1">
                  {value.map((v, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-1"><span className="text-primary text-xs">•</span>{v}</li>
                  ))}
                </ul>
              </div>
            );
          }
        }

        return null;
      })}
    </div>
  );
};

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).replace(/Section$/, "").trim();

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
    "intro", "coreDecisionRules", "commonExamTraps", "miniCaseDrills", "quickReview", "checkpointQuestions",
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
    </div>
  );
};

export default ModuleRenderer;
