import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Target,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Compass,
  GraduationCap,
  Brain,
  ListChecks,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------------- Section primitives ---------------- */

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-foreground leading-tight">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  </div>
);

const Pearl = ({ text }: { text: string }) => (
  <Alert className="border-primary/30 bg-primary/5">
    <Lightbulb className="h-4 w-4 text-primary" />
    <AlertDescription className="text-sm text-foreground">{text}</AlertDescription>
  </Alert>
);

/* ---------------- Section sub-views ---------------- */

const NavPills = ({
  sections,
}: {
  sections: { id: string; label: string }[];
}) => (
  <nav className="flex flex-wrap gap-2 sticky top-2 z-10 bg-background/95 backdrop-blur py-3 border-b border-border mb-2">
    {sections.map((s) => (
      <a
        key={s.id}
        href={`#${s.id}`}
        className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
      >
        {s.label}
      </a>
    ))}
  </nav>
);

const Intro = ({ intro }: { intro: any }) => (
  <section id="overview" className="scroll-mt-24">
    <SectionHeader
      icon={Compass}
      title="Module Overview"
      subtitle="Start here — what this module gives you and how to use it."
    />
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{intro.summary}</p>

    <div className="grid gap-4 md:grid-cols-2">
      {intro.learningObjectives?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" /> Learning Objectives
            </h3>
            <ul className="space-y-1.5">
              {intro.learningObjectives.map((obj: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {intro.howToUse?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" /> How to Use This Module
            </h3>
            <ul className="space-y-1.5">
              {intro.howToUse.map((h: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">→</span>
                  {h}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>

    {intro.highYieldThemes?.length > 0 && (
      <div className="mt-5">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
          High-Yield Themes
        </p>
        <div className="space-y-2">
          {intro.highYieldThemes.map((t: string, i: number) => (
            <Pearl key={i} text={t} />
          ))}
        </div>
      </div>
    )}
  </section>
);

const ExamSnapshot = ({ snapshot }: { snapshot: any }) => (
  <section id="snapshot" className="scroll-mt-24">
    <SectionHeader
      icon={Brain}
      title={snapshot.title || "NCMHCE Snapshot"}
      subtitle="What the exam actually measures and how it differs from a trivia test."
    />
    {snapshot.overview && (
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {snapshot.overview}
      </p>
    )}

    <div className="grid gap-4 md:grid-cols-2">
      {snapshot.whatTheExamTests?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              What the Exam Tests
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {snapshot.whatTheExamTests.map((item: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs capitalize">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      {snapshot.whatMakesItDifferent?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              What Makes It Different
            </h3>
            <ul className="space-y-1.5">
              {snapshot.whatMakesItDifferent.map((item: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>

    {snapshot.examPearls?.length > 0 && (
      <div className="mt-4 space-y-2">
        {snapshot.examPearls.map((p: string, i: number) => (
          <Pearl key={i} text={p} />
        ))}
      </div>
    )}
  </section>
);

const BlueprintDomains = ({ blueprint }: { blueprint: any }) => (
  <section id="domains" className="scroll-mt-24">
    <SectionHeader
      icon={Layers}
      title={blueprint.title || "Core Domain Map"}
      subtitle={blueprint.overview}
    />
    <div className="grid gap-3 md:grid-cols-2">
      {blueprint.domains?.map((d: any, i: number) => (
        <Card key={i} className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-1">{d.title}</h3>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              {d.whyItMatters}
            </p>
            {d.highYieldFocus?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {d.highYieldFocus.map((f: string, j: number) => (
                  <Badge key={j} variant="outline" className="text-[10px]">
                    {f}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const HowCasesWork = ({ data }: { data: any }) => (
  <section id="case-reasoning" className="scroll-mt-24">
    <SectionHeader
      icon={ListChecks}
      title={data.title || "How Case-Based Reasoning Works"}
      subtitle={data.overview}
    />
    <ol className="space-y-3">
      {data.caseSequence?.map((step: any, i: number) => (
        <li key={i} className="flex gap-3">
          <div className="shrink-0 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
            {step.step}
          </div>
          <Card className="card-elevated flex-1">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-foreground mb-1">{step.title}</p>
              {step.questions?.length > 0 && (
                <ul className="space-y-0.5">
                  {step.questions.map((q: string, j: number) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex items-start gap-1.5"
                    >
                      <HelpCircle className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
    {data.examPearls?.length > 0 && (
      <div className="mt-4 space-y-2">
        {data.examPearls.map((p: string, i: number) => (
          <Pearl key={i} text={p} />
        ))}
      </div>
    )}
  </section>
);

const PRIORITY_COLORS = [
  "border-destructive/40 bg-destructive/5",
  "border-orange-500/40 bg-orange-500/5",
  "border-amber-500/40 bg-amber-500/5",
  "border-primary/40 bg-primary/5",
  "border-emerald-500/40 bg-emerald-500/5",
];

const DecisionHierarchy = ({ data }: { data: any }) => (
  <section id="hierarchy" className="scroll-mt-24">
    <SectionHeader
      icon={ShieldAlert}
      title={data.title || "Practical Decision Hierarchy"}
      subtitle="When answers feel close, work down this list — top wins."
    />
    <div className="space-y-2">
      {data.hierarchy?.map((h: any, i: number) => (
        <Card
          key={i}
          className={cn(
            "border",
            PRIORITY_COLORS[(h.priority - 1) % PRIORITY_COLORS.length]
          )}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="text-xs">
                Priority {h.priority}
              </Badge>
              <p className="text-sm font-semibold text-foreground">{h.title}</p>
            </div>
            {h.includes?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 ml-1">
                {h.includes.map((item: string, j: number) => (
                  <Badge key={j} variant="secondary" className="text-[10px]">
                    {item}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
    {data.examPearls?.length > 0 && (
      <div className="mt-4 space-y-2">
        {data.examPearls.map((p: string, i: number) => (
          <Pearl key={i} text={p} />
        ))}
      </div>
    )}
  </section>
);

const StudyStrategy = ({ data }: { data: any }) => (
  <section id="strategy" className="scroll-mt-24">
    <SectionHeader
      icon={GraduationCap}
      title={data.title || "How to Study Strategically"}
      subtitle={data.overview}
    />

    {data.recommendedStudyOrder?.length > 0 && (
      <div className="space-y-3 mb-5">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">
          Recommended Study Order
        </p>
        {data.recommendedStudyOrder.map((tier: any, i: number) => (
          <Card key={i} className="card-elevated">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="text-xs">Tier {tier.tier}</Badge>
                <p className="text-xs text-muted-foreground">{tier.why}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tier.modules.map((m: string, j: number) => (
                  <Badge key={j} variant="outline" className="text-xs">
                    {m}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )}

    <div className="grid gap-4 md:grid-cols-2">
      {data.studyHabitsThatWork?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Habits That Work
            </h3>
            <ul className="space-y-1.5">
              {data.studyHabitsThatWork.map((h: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {data.studyHabitsThatBackfire?.length > 0 && (
        <Card className="card-elevated">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" /> Habits That Backfire
            </h3>
            <ul className="space-y-1.5">
              {data.studyHabitsThatBackfire.map((h: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-destructive mt-0.5">✕</span>
                  {h}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>

    {data.examPearls?.length > 0 && (
      <div className="mt-4 space-y-2">
        {data.examPearls.map((p: string, i: number) => (
          <Pearl key={i} text={p} />
        ))}
      </div>
    )}
  </section>
);

const PerformanceMindset = ({ data }: { data: any }) => (
  <section id="mindset" className="scroll-mt-24">
    <SectionHeader
      icon={Sparkles}
      title={data.title || "Performance Mindset on Test Day"}
      subtitle={data.overview}
    />
    {data.rules?.length > 0 && (
      <Card className="card-elevated mb-4">
        <CardContent className="p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Test-Day Rules</h3>
          <ul className="space-y-1.5">
            {data.rules.map((r: string, i: number) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-0.5">→</span>
                {r}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )}
    {data.commonThoughtErrorsDuringTesting?.length > 0 && (
      <div>
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
          Common Thought Errors → Corrections
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          {data.commonThoughtErrorsDuringTesting.map((e: any, i: number) => (
            <Card key={i} className="card-elevated">
              <CardContent className="p-4">
                <p className="text-sm font-medium text-foreground mb-1 flex items-start gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-destructive mt-0.5 shrink-0" />
                  {e.error}
                </p>
                <p className="text-xs text-muted-foreground ml-5">→ {e.correction}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )}
  </section>
);

const Crosslinks = ({ data }: { data: any }) => (
  <section id="crosslinks" className="scroll-mt-24">
    <SectionHeader
      icon={ArrowRight}
      title={data.title || "High-Yield Crosslinks"}
      subtitle="How the domains reinforce each other."
    />
    <div className="grid gap-2 md:grid-cols-2">
      {data.crosslinks?.map((c: any, i: number) => (
        <Card key={i} className="card-elevated">
          <CardContent className="p-4">
            <p className="text-sm text-foreground flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-[10px]">{c.from}</Badge>
              <ArrowRight className="h-3 w-3 text-primary" />
              <Badge variant="outline" className="text-[10px]">{c.to}</Badge>
            </p>
            <p className="text-xs text-muted-foreground">{c.why}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const CommonMistakes = ({ mistakes }: { mistakes: string[] }) => (
  <section id="mistakes" className="scroll-mt-24">
    <SectionHeader
      icon={AlertTriangle}
      title="Common Exam Mistakes"
      subtitle="Avoid these patterns in case-based items."
    />
    <div className="space-y-2">
      {mistakes.map((m, i) => (
        <Alert key={i} className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-sm text-foreground">{m}</AlertDescription>
        </Alert>
      ))}
    </div>
  </section>
);

const ReadinessChecklist = ({ data }: { data: any }) => (
  <section id="readiness" className="scroll-mt-24">
    <SectionHeader
      icon={CheckCircle2}
      title={data.title || "Learner Readiness Checklist"}
      subtitle={data.scoringHint}
    />
    <Card className="card-elevated">
      <CardContent className="p-5">
        <ul className="space-y-2">
          {data.items?.map((item: string, i: number) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);

const MiniCases = ({ drills }: { drills: any[] }) => (
  <section id="drills" className="scroll-mt-24">
    <SectionHeader
      icon={Brain}
      title="Practice Case Drills"
      subtitle="Tap to reveal the lesson and rationale."
    />
    <div className="grid gap-3 md:grid-cols-2">
      {drills.map((d, i) => (
        <DrillCard key={i} drill={d} index={i} />
      ))}
    </div>
  </section>
);

const DrillCard = ({ drill, index }: { drill: any; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="card-elevated">
      <CardContent className="p-4">
        <Badge variant="outline" className="text-xs mb-2">
          Case {index + 1}
        </Badge>
        <p className="text-sm text-foreground mb-3 leading-relaxed">{drill.case}</p>
        {!open ? (
          <Button variant="ghost" size="sm" onClick={() => setOpen(true)} className="h-7 px-2 text-xs">
            <HelpCircle className="h-3 w-3 mr-1" /> Show lesson
          </Button>
        ) : (
          <div className="rounded-md border border-primary/20 bg-primary/5 p-3">
            <p className="text-sm font-medium text-foreground">{drill.bestLesson}</p>
            {drill.rationale && (
              <p className="text-xs text-muted-foreground mt-1">{drill.rationale}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const QuickReview = ({ review }: { review: any }) => (
  <section id="quick-review" className="scroll-mt-24">
    <SectionHeader icon={Sparkles} title="Quick Review" />
    <Card className="card-elevated">
      <CardContent className="p-5 space-y-4">
        {review.memoryHooks?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
              Memory Hooks
            </p>
            <div className="flex flex-wrap gap-1.5">
              {review.memoryHooks.map((h: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {h}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {review.finalTakeaways?.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
              Final Takeaways
            </p>
            <ul className="space-y-1.5">
              {review.finalTakeaways.map((t: string, i: number) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  </section>
);

const CheckpointQuiz = ({ questions }: { questions: any[] }) => (
  <section id="checkpoint" className="scroll-mt-24">
    <SectionHeader icon={HelpCircle} title="Checkpoint Questions" />
    <div className="space-y-2">
      {questions.map((q, i) => (
        <CheckpointCard key={i} q={q} index={i} />
      ))}
    </div>
  </section>
);

const CheckpointCard = ({ q, index }: { q: any; index: number }) => {
  const [show, setShow] = useState(false);
  return (
    <Card className="card-elevated">
      <CardContent className="p-4">
        <p className="text-sm font-medium text-foreground">
          <span className="text-primary mr-2">Q{index + 1}.</span>
          {q.question}
        </p>
        <Button variant="ghost" size="sm" onClick={() => setShow((current) => !current)} className="mt-2 h-7 px-2 text-xs">
          {show ? "Hide answer" : "Reveal answer"}
        </Button>
        {show && (
          <div className="mt-2 rounded-md bg-accent/50 p-3">
            <p className="text-sm text-foreground">{q.answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

/* ---------------- Main renderer ---------------- */

const ExamOverviewRenderer = ({ data }: { data: any }) => {
  if (!data) return null;

  const sections: { id: string; label: string }[] = [];
  if (data.intro) sections.push({ id: "overview", label: "Overview" });
  if (data.examSnapshot) sections.push({ id: "snapshot", label: "Snapshot" });
  if (data.blueprintDomains) sections.push({ id: "domains", label: "Domains" });
  if (data.howCasesWork) sections.push({ id: "case-reasoning", label: "Case Reasoning" });
  if (data.decisionHierarchy) sections.push({ id: "hierarchy", label: "Priorities" });
  if (data.studyStrategySection) sections.push({ id: "strategy", label: "Study Plan" });
  if (data.performanceMindsetSection) sections.push({ id: "mindset", label: "Test-Day Mindset" });
  if (data.highYieldCrosslinks) sections.push({ id: "crosslinks", label: "Crosslinks" });
  if (data.commonExamMistakes) sections.push({ id: "mistakes", label: "Mistakes" });
  if (data.readinessChecklist) sections.push({ id: "readiness", label: "Readiness" });
  if (data.miniCaseDrills) sections.push({ id: "drills", label: "Case Drills" });
  if (data.quickReview) sections.push({ id: "quick-review", label: "Quick Review" });
  if (data.checkpointQuestions) sections.push({ id: "checkpoint", label: "Checkpoint" });

  return (
    <div className="space-y-10">
      <NavPills sections={sections} />
      {data.intro && <Intro intro={data.intro} />}
      {data.examSnapshot && <ExamSnapshot snapshot={data.examSnapshot} />}
      {data.blueprintDomains && <BlueprintDomains blueprint={data.blueprintDomains} />}
      {data.howCasesWork && <HowCasesWork data={data.howCasesWork} />}
      {data.decisionHierarchy && <DecisionHierarchy data={data.decisionHierarchy} />}
      {data.studyStrategySection && <StudyStrategy data={data.studyStrategySection} />}
      {data.performanceMindsetSection && <PerformanceMindset data={data.performanceMindsetSection} />}
      {data.highYieldCrosslinks && <Crosslinks data={data.highYieldCrosslinks} />}
      {data.commonExamMistakes && <CommonMistakes mistakes={data.commonExamMistakes} />}
      {data.readinessChecklist && <ReadinessChecklist data={data.readinessChecklist} />}
      {data.miniCaseDrills && <MiniCases drills={data.miniCaseDrills} />}
      {data.quickReview && <QuickReview review={data.quickReview} />}
      {data.checkpointQuestions && <CheckpointQuiz questions={data.checkpointQuestions} />}
    </div>
  );
};

export default ExamOverviewRenderer;
