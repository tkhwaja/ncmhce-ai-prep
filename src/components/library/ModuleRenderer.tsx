import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StudyVisuals } from "@/components/library/StudyVisuals";
import ModuleSectionNavigator from "@/components/library/ModuleSectionNavigator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronRight, Lightbulb, AlertTriangle, BookOpen, Target, HelpCircle, Sparkles, ListChecks, Brain, Repeat, ShieldAlert, Compass } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Generic section renderers for the structured JSON module format    */
/*  Visual primitives mirror the Assessment & Testing renderer so all  */
/*  modules share one cohesive look.                                   */
/* ------------------------------------------------------------------ */

/* SectionHeading — used as the top-of-section title throughout.
   Now styled like A&T's SectionTitle: icon chip + larger heading. */
const SectionHeading = ({
  children,
  icon: Icon = Sparkles,
  subtitle,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3 mt-8 mb-4 first:mt-0">
    <div className="rounded-lg bg-primary/10 p-2 text-primary shrink-0">
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0">
      <h2 className="text-xl font-semibold text-foreground leading-tight">{children}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

/* Callout — tip / warn / rule, matches A&T styling */
const Callout = ({
  variant,
  title,
  children,
}: {
  variant: "tip" | "warn" | "rule";
  title: string;
  children: React.ReactNode;
}) => {
  const map = {
    tip: { Icon: Lightbulb, cls: "border-primary/30 bg-primary/5 text-foreground", iconCls: "text-primary" },
    warn: { Icon: AlertTriangle, cls: "border-destructive/30 bg-destructive/5 text-foreground", iconCls: "text-destructive" },
    rule: { Icon: Target, cls: "border-accent bg-accent/30 text-foreground", iconCls: "text-foreground" },
  } as const;
  const { Icon, cls, iconCls } = map[variant];
  return (
    <div className={`rounded-lg border p-4 ${cls}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconCls}`} />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

const ExamPearl = ({ text }: { text: string }) => (
  <Alert className="border-primary/30 bg-primary/5 my-2">
    <Lightbulb className="h-4 w-4 text-primary" />
    <AlertDescription className="text-sm text-foreground leading-relaxed">{text}</AlertDescription>
  </Alert>
);

const ExamPearls = ({ pearls }: { pearls?: string[] }) => {
  if (!pearls?.length) return null;
  if (pearls.length === 1) {
    return (
      <div className="mt-3">
        <Callout variant="tip" title="Exam Pearl">{pearls[0]}</Callout>
      </div>
    );
  }
  return (
    <div className="mt-3">
      <Callout variant="tip" title="Exam Pearls">
        <ul className="list-disc space-y-1 pl-4">
          {pearls.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </Callout>
    </div>
  );
};

const CollapsibleSection = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border border-border rounded-lg mt-4 card-elevated">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-accent/40 rounded-lg transition-colors">
        <span className="font-semibold text-foreground text-left text-base">{title}</span>
        {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">{children}</CollapsibleContent>
    </Collapsible>
  );
};

const slugifySectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const formatKey = (key: string) =>
  key
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/Section$/, "")
    .replace(/\bAca\b/g, "ACA")
    .replace(/\bDsm\b/g, "DSM")
    .replace(/\bHipaa\b/g, "HIPAA")
    .replace(/\bFerpa\b/g, "FERPA")
    .replace(/\bMse\b/g, "MSE")
    .replace(/\bRoi\b/g, "ROI")
    .trim();

const formatValue = (value: string) =>
  value
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/\bAca\b/g, "ACA")
    .replace(/\bDsm\b/g, "DSM")
    .replace(/\bHipaa\b/g, "HIPAA")
    .replace(/\bFerpa\b/g, "FERPA")
    .replace(/\bMse\b/g, "MSE")
    .replace(/\bRoi\b/g, "ROI");

const pillListKeys = new Set([
  "commonDistortions",
  "signatureTechniques",
  "interventions",
  "bestFor",
  "examClues",
  "quickReview",
]);

const GuidedSection = ({
  id,
  title,
  summary,
  defaultOpen = false,
  children,
}: {
  id: string;
  title: string;
  summary?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24">
    <CollapsibleSection title={title} defaultOpen={defaultOpen}>
      <div className="space-y-4 pt-1">
        {summary ? <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p> : null}
        {children}
      </div>
    </CollapsibleSection>
  </section>
);

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
    <SectionHeading icon={Target} subtitle="Quick rules to anchor your reasoning on exam items.">Core Decision Rules</SectionHeading>
    <div className="grid gap-3 md:grid-cols-2">
      {rules.map((r, i) => (
        <Card key={i} className="card-elevated">
          <CardContent className="p-4">
            <p className="text-sm font-semibold text-foreground leading-relaxed">{r.rule}</p>
            {r.example && <p className="text-xs text-muted-foreground mt-2 italic">e.g. {r.example}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

/* ---- Mini Case Drills ---- */
const MiniCaseDrills = ({ drills }: { drills: any[] }) => (
  <div>
    <SectionHeading icon={Brain} subtitle="Short cases — try to answer before revealing.">Practice Case Drills</SectionHeading>
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
    <SectionHeading icon={HelpCircle} subtitle="Test recall before moving on.">Checkpoint Questions</SectionHeading>
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
        <button onClick={() => setShow((current) => !current)} className="text-xs text-primary hover:underline mt-2">
          {show ? "Hide Answer" : "Reveal Answer"}
        </button>
        {show && (
          <div className="mt-2 rounded bg-accent/50 p-3 space-y-1">
            <p className="text-sm text-muted-foreground">{q.answer}</p>
            {q.rationale && <p className="text-xs text-muted-foreground">Why: {q.rationale}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

/* ---- Quick Review ---- */
const QuickReview = ({ review }: { review: any }) => (
  <div>
    <SectionHeading icon={Repeat} subtitle="Memory hooks and final takeaways for fast review.">Quick Review</SectionHeading>
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
const ExamTraps = ({ traps }: { traps: Array<string | { trap: string; explanation?: string }> }) => (
  <div>
    <SectionHeading icon={ShieldAlert} subtitle="Mistakes the exam baits you into making.">Common Exam Traps</SectionHeading>
    <Callout variant="warn" title="Watch out for">
      <ul className="list-disc space-y-2 pl-5">
        {traps.map((t, i) => (
          <li key={i} className="pl-1 leading-relaxed marker:text-destructive">
            {typeof t === "string" ? (
              t
            ) : (
              <>
                <span className="font-semibold">{t.trap}</span>
                {t.explanation && <span className="text-muted-foreground"> — {t.explanation}</span>}
              </>
            )}
          </li>
        ))}
      </ul>
    </Callout>
  </div>
);

/* ---- Assessment Framework ---- */
const AssessmentFramework = ({ framework }: { framework: any }) => {
  if (!framework?.types?.length) return null;

  return (
    <div>
      <SectionHeading icon={ListChecks} subtitle={framework.overview}>{framework.title || "Major Types of Assessment"}</SectionHeading>
      {!framework.overview && false}

      {framework.learningObjectives?.length > 0 && (
        <Card className="card-elevated mb-5">
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Learning Objectives</p>
            <ul className="space-y-1">
              {framework.learningObjectives.map((objective: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{objective}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {framework.coreDistinction && (
        <div className="mb-5 space-y-3">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">Core Distinction</p>
          <div className="grid gap-3 md:grid-cols-2">
            <Card className="card-elevated">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">Screening</p>
                <p className="text-sm text-muted-foreground">{framework.coreDistinction.screening}</p>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-semibold text-foreground">Assessment</p>
                <p className="text-sm text-muted-foreground">{framework.coreDistinction.assessment}</p>
              </CardContent>
            </Card>
          </div>
          {framework.coreDistinction.keyTakeaway && <ExamPearls pearls={[framework.coreDistinction.keyTakeaway]} />}
        </div>
      )}

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

      {framework.decisionLadder?.steps?.length > 0 && (
        <Card className="card-elevated mb-5">
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">{framework.decisionLadder.title || "Assessment Decision Ladder"}</p>
            <div className="space-y-3">
              {framework.decisionLadder.steps.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3 rounded-md border border-border bg-background px-3 py-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">{index + 1}</Badge>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {framework.quickReference?.rows?.length > 0 && (
        <Card className="card-elevated mb-5">
          <CardContent className="p-4 space-y-3">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">{framework.quickReference.title || "Quick Reference"}</p>
            <Table>
              <TableHeader>
                <TableRow>
                  {framework.quickReference.columns?.map((column: string) => (
                    <TableHead key={column}>{column}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {framework.quickReference.rows.map((row: string[], index: number) => (
                  <TableRow key={`${framework.quickReference.title || "reference"}-${index}`}>
                    {row.map((cell: string, cellIndex: number) => (
                      <TableCell key={`${index}-${cellIndex}`} className="align-top text-sm text-muted-foreground">{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {framework.highYieldPoints?.items?.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{framework.highYieldPoints.title || "High-Yield Exam Rules"}</p>
          <div className="space-y-1">
            {framework.highYieldPoints.items.map((item: string, index: number) => <ExamPearl key={index} text={item} />)}
          </div>
        </div>
      )}

      <div className="space-y-4">
        {framework.types.map((type: any, index: number) => (
          <CollapsibleSection key={type.id || index} title={type.title} defaultOpen={index === 0}>
            <div className="space-y-4">
              {type.purpose && <p className="text-sm text-muted-foreground leading-relaxed">{type.purpose}</p>}

              {(type.examUse || type.commonMistake) && (
                <div className="grid gap-3 lg:grid-cols-2">
                  {type.examUse && (
                    <Alert className="border-primary/30 bg-primary/5">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-sm text-foreground">
                        <span className="font-medium">Exam Use:</span> {type.examUse}
                      </AlertDescription>
                    </Alert>
                  )}
                  {type.commonMistake && (
                    <Alert className="border-destructive/30 bg-destructive/5">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <AlertDescription className="text-sm text-foreground">
                        <span className="font-medium">Common Mistake:</span> {type.commonMistake}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}

              {type.includes?.length > 0 && (
                <Card className="card-elevated">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">What It Includes</p>
                    <div className="flex flex-wrap gap-2">
                      {type.includes.map((item: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

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

/* ---- Mental Status Examination ---- */
const MSEDeepDive = ({ section }: { section: any }) => {
  if (!section) return null;

  if (section.content?.length) {
    return (
      <div>
        <SectionHeading icon={Brain}>{section.sectionTitle || section.title || "Mental Status Examination (MSE) Breakdown"}</SectionHeading>

        {section.learningObjectives?.length > 0 && (
          <Card className="card-elevated mb-5">
            <CardContent className="p-4">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Learning Objectives</p>
              <ul className="space-y-1">
                {section.learningObjectives.map((objective: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{objective}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {section.content.map((block: any, index: number) => {
            if (block.type === "overview") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    {block.body?.map((paragraph: string, paragraphIndex: number) => (
                      <p key={paragraphIndex} className="text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "high_yield_alert") {
              return (
                <Alert key={index} className="border-primary/30 bg-primary/5">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <AlertDescription className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    {block.body?.map((line: string, lineIndex: number) => (
                      <p key={lineIndex} className="text-sm text-foreground">{line}</p>
                    ))}
                  </AlertDescription>
                </Alert>
              );
            }

            if (block.type === "concept_block") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-4">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {block.body?.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="rounded-lg border border-border bg-background p-3 space-y-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    {block.keyTakeaway ? <ExamPearls pearls={[block.keyTakeaway]} /> : null}
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "section_group") {
              return (
                <div key={index} className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">{block.title}</p>
                  {block.items?.map((item: any, itemIndex: number) => (
                    <CollapsibleSection key={itemIndex} title={item.title} defaultOpen={itemIndex === 0}>
                      <div className="space-y-4 pt-1">
                        {item.purpose && (
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.purpose}</p>
                        )}

                        <div className="grid gap-4 lg:grid-cols-2">
                          {item.whatToAssess?.length > 0 && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">What to Assess</p>
                                <ul className="space-y-1">
                                  {item.whatToAssess.map((entry: string, entryIndex: number) => (
                                    <li key={entryIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{entry}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {item.whyItMatters && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Why It Matters</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.whyItMatters}</p>
                              </CardContent>
                            </Card>
                          )}

                          {item.bestUsedWhen?.length > 0 && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Best Used When</p>
                                <ul className="space-y-1">
                                  {item.bestUsedWhen.map((entry: string, entryIndex: number) => (
                                    <li key={entryIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{entry}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {item.examUse && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Exam Use</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.examUse}</p>
                              </CardContent>
                            </Card>
                          )}
                        </div>

                        {item.instruments?.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wide">Key Instruments</p>
                            <div className="grid gap-3 md:grid-cols-2">
                              {item.instruments.map((inst: any, iIdx: number) => (
                                <Card key={iIdx} className="card-elevated">
                                  <CardContent className="p-4 space-y-2">
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="min-w-0">
                                        <p className="text-sm font-semibold text-foreground">{inst.name}</p>
                                        {inst.fullName && <p className="text-xs text-muted-foreground">{inst.fullName}</p>}
                                      </div>
                                      {inst.ageRange && (
                                        <Badge variant="outline" className="text-xs whitespace-nowrap">{inst.ageRange}</Badge>
                                      )}
                                    </div>
                                    {inst.format && (
                                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Format:</span> {inst.format}</p>
                                    )}
                                    {inst.whatItMeasures && (
                                      <p className="text-sm text-muted-foreground leading-relaxed">{inst.whatItMeasures}</p>
                                    )}
                                    {inst.examRelevance && (
                                      <p className="text-xs text-muted-foreground italic"><span className="font-medium not-italic text-foreground">Exam relevance: </span>{inst.examRelevance}</p>
                                    )}
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid gap-4 lg:grid-cols-2">
                          {item.normalIndicators?.length > 0 && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Typical / Expected Signs</p>
                                <ul className="space-y-1">
                                  {item.normalIndicators.map((entry: string, entryIndex: number) => (
                                    <li key={entryIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{entry}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {item.abnormalIndicators?.length > 0 && (
                            <Card className="card-elevated">
                              <CardContent className="p-4">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Abnormal / Concerning Clues</p>
                                <ul className="space-y-1">
                                  {item.abnormalIndicators.map((entry: string, entryIndex: number) => (
                                    <li key={entryIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{entry}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}
                        </div>

                        {item.caution && (
                          <Alert className="border-destructive/30 bg-destructive/5">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                            <AlertDescription className="text-sm text-foreground">{item.caution}</AlertDescription>
                          </Alert>
                        )}

                        {item.examPearl ? <ExamPearls pearls={[item.examPearl]} /> : null}
                      </div>
                    </CollapsibleSection>
                  ))}
                </div>
              );
            }

            if (block.type === "instrument_cards") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {block.cards?.map((card: any, cardIndex: number) => (
                        <div key={cardIndex} className="rounded-lg border border-border bg-background p-3 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold text-foreground">{card.name}</p>
                            {card.category && <Badge variant="outline" className="text-xs whitespace-nowrap">{card.category}</Badge>}
                          </div>
                          {card.whatItHelpsWith && <p className="text-sm text-muted-foreground">{card.whatItHelpsWith}</p>}
                          {card.examPearl && <p className="text-xs text-muted-foreground italic">{card.examPearl}</p>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "diagram") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <div className="space-y-2">
                      {block.content?.map((step: string, stepIndex: number) => (
                        <div key={stepIndex} className="rounded-md border border-border bg-background px-3 py-2">
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "compare_block") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-4">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {block.items?.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="rounded-lg border border-border bg-background p-4 space-y-2">
                          <p className="text-sm font-semibold text-foreground">{item.term}</p>
                          <p className="text-sm text-muted-foreground">{item.definition}</p>
                          {item.example ? <p className="text-xs text-muted-foreground italic">Example: {item.example}</p> : null}
                        </div>
                      ))}
                    </div>
                    {block.keyTakeaway ? <ExamPearls pearls={[block.keyTakeaway]} /> : null}
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "clinical_pearls") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {block.items?.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="rounded-lg border border-border bg-background p-3 space-y-1">
                          <p className="text-sm font-medium text-foreground">{item.finding}</p>
                          <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Suggests:</span> {item.suggests}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "high_yield_points") {
              return (
                <div key={index}>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{block.title}</p>
                  <div className="space-y-1">
                    {block.items?.map((item: string, itemIndex: number) => <ExamPearl key={itemIndex} text={item} />)}
                  </div>
                </div>
              );
            }

            if (block.type === "common_traps") {
              return <ExamTraps key={index} traps={block.items || []} />;
            }

            if (block.type === "quick_reference_table") {
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-4 space-y-3">
                    <p className="text-sm font-semibold text-foreground">{block.title}</p>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {block.columns?.map((column: string) => (
                            <TableHead key={column}>{column}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {block.rows?.map((row: string[], rowIndex: number) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell: string, cellIndex: number) => (
                              <TableCell key={cellIndex} className="align-top text-sm text-muted-foreground">{cell}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              );
            }

            if (block.type === "mini_quiz") {
              return <CheckpointQuestions key={index} questions={block.questions || []} />;
            }

            if (block.type === "implementation_notes" || block.type === "future_topics_to_add") {
              return (
                <CollapsibleSection key={index} title={block.title}>
                  <ul className="space-y-1">
                    {block.items?.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                    ))}
                  </ul>
                </CollapsibleSection>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  }

  if (!section.domains?.length) return null;

  return (
    <div>
      <SectionHeading icon={Brain} subtitle={section.overview}>{section.title || "Mental Status Examination (MSE) Breakdown"}</SectionHeading>
      {!section.overview && false}
      <div className="grid gap-3 md:grid-cols-2">
        {section.domains.map((domain: any, index: number) => (
          <Card key={index} className="card-elevated">
            <CardContent className="p-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">{domain.domain}</p>
              {domain.whatToObserve?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">What to Observe</p>
                  <ul className="space-y-1">
                    {domain.whatToObserve.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {domain.examples?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.examples.map((example: string, exampleIndex: number) => (
                      <Badge key={exampleIndex} variant="outline" className="text-xs">{example}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <ExamPearls pearls={section.examPearls} />
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

const TheoryCards = ({ theories }: { theories: any[] }) => (
  <div>
    <SectionHeading icon={Brain} subtitle="Theory-by-theory reference with clear exam cues and techniques.">Theories</SectionHeading>
    <div className="grid gap-4 lg:grid-cols-2">
      {theories.map((theory, index) => (
        <Card key={theory.id || index} className="card-elevated overflow-hidden">
          <CardContent className="p-5 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 space-y-1">
                <h3 className="text-lg font-semibold leading-tight text-foreground">{theory.title}</h3>
                {theory.founder && <p className="text-sm text-muted-foreground">Founder: {theory.founder}</p>}
              </div>
              {theory.examPriority && <Badge variant="secondary" className="shrink-0">{formatValue(theory.examPriority)} priority</Badge>}
            </div>

            {theory.overview && <p className="text-sm leading-relaxed text-muted-foreground">{theory.overview}</p>}

            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(theory).map(([key, value]) => {
                if (["id", "title", "founder", "examPriority", "overview", "sourceBasis"].includes(key) || value == null) return null;
                if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string") {
                  return (
                    <div key={key} className="rounded-lg border border-border bg-muted/30 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">{formatKey(key)}</p>
                      {pillListKeys.has(key) ? (
                        <div className="flex flex-wrap gap-1.5">
                          {value.map((item: string, i: number) => <Badge key={i} variant="outline" className="text-xs">{formatValue(item)}</Badge>)}
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {value.slice(0, 5).map((item: string, i: number) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-primary">•</span>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  );
                }
                if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
                  return (
                    <div key={key} className="rounded-lg border border-border bg-muted/30 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">{formatKey(key)}</p>
                      <div className="space-y-2">
                        {value.slice(0, 4).map((item: any, i: number) => (
                          <p key={i} className="text-sm text-muted-foreground"><span className="font-medium text-foreground">{item.term || item.module || item.title || item.trap || `Item ${i + 1}`}: </span>{item.definition || item.description || item.rationale || (Array.isArray(item.skills) ? item.skills.join(", ") : "")}</p>
                        ))}
                      </div>
                    </div>
                  );
                }
                if (typeof value === "string") {
                  return <p key={key} className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground"><span className="font-medium text-foreground">{formatKey(key)}: </span>{formatValue(value)}</p>;
                }
                return null;
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

/* ---- Comprehensive lesson-based content from uploaded learning packs ---- */
const ContentBlock = ({ block }: { block: any }) => {
  if (!block) return null;

  if (block.type === "table" && block.columns && block.rows) {
    return (
      <div className="rounded-lg border border-border overflow-hidden">
        {block.title && <p className="px-3 py-2 text-sm font-semibold text-foreground bg-muted/30">{block.title}</p>}
        <Table>
          <TableHeader>
            <TableRow>{block.columns.map((column: string) => <TableHead key={column}>{column}</TableHead>)}</TableRow>
          </TableHeader>
          <TableBody>
            {block.rows.map((row: string[], rowIndex: number) => (
              <TableRow key={rowIndex}>{row.map((cell, cellIndex) => <TableCell key={cellIndex} className="align-top text-sm text-muted-foreground">{cell}</TableCell>)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if ((block.type === "ordered_list" || block.type === "flowchart") && block.items?.length) {
    return (
      <div className="rounded-lg border border-border bg-muted/30 p-3">
        {block.title && <p className="text-sm font-semibold text-foreground mb-2">{block.title}</p>}
        <ol className="ml-5 list-decimal space-y-1 text-sm text-muted-foreground">
          {block.items.map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }

  if (block.type === "flowchart" && block.steps?.length) {
    return (
      <div className="rounded-lg border border-border bg-muted/30 p-3">
        {block.title && <p className="text-sm font-semibold text-foreground mb-2">{block.title}</p>}
        <ol className="ml-5 list-decimal space-y-1 text-sm text-muted-foreground">
          {block.steps.map((step: string, index: number) => <li key={index}>{step}</li>)}
        </ol>
      </div>
    );
  }

  if (block.type === "exam_tip") return <Callout variant="tip" title="Exam Tip">{block.content}</Callout>;
  if (block.type === "warning") return <Callout variant="warn" title="Watch Out">{block.content}</Callout>;

  return (
    <div className="rounded-lg border border-border bg-card p-3">
      {block.title && <p className="text-sm font-semibold text-foreground mb-1">{block.title}</p>}
      {block.content && <p className="text-sm leading-relaxed text-muted-foreground">{block.content}</p>}
    </div>
  );
};

const ComprehensiveLearningSection = ({ data }: { data: any }) => (
  <div className="space-y-4">
    {data.description && <p className="text-sm leading-relaxed text-muted-foreground">{data.description}</p>}
    {data.learning_objectives?.length > 0 && (
      <Card className="card-elevated">
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><Target className="h-4 w-4 text-primary" /> Learning Objectives</h3>
          <ul className="space-y-1">
            {data.learning_objectives.map((objective: string, index: number) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )}
    {data.lessons?.map((lesson: any, index: number) => (
      <CollapsibleSection key={lesson.lesson_id || index} title={lesson.title} defaultOpen={index === 0}>
        <div className="space-y-4">
          {lesson.why_it_matters_for_ncmhce && <Callout variant="rule" title="Why this matters for the NCMHCE">{lesson.why_it_matters_for_ncmhce}</Callout>}
          {lesson.key_terms?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {lesson.key_terms.map((term: string) => <Badge key={term} variant="outline" className="text-xs">{term}</Badge>)}
            </div>
          )}
          {lesson.content_blocks?.map((block: any, blockIndex: number) => <ContentBlock key={blockIndex} block={block} />)}
          <div className="grid gap-3 md:grid-cols-3">
            {lesson.exam_cues?.length > 0 && <Callout variant="tip" title="Exam Cues"><ul className="ml-4 list-disc space-y-1">{lesson.exam_cues.map((cue: string, cueIndex: number) => <li key={cueIndex}>{cue}</li>)}</ul></Callout>}
            {lesson.common_traps?.length > 0 && <Callout variant="warn" title="Common Traps"><ul className="ml-4 list-disc space-y-1">{lesson.common_traps.map((trap: string, trapIndex: number) => <li key={trapIndex}>{trap}</li>)}</ul></Callout>}
            {lesson.memory_anchors?.length > 0 && <Callout variant="rule" title="Memory Anchors"><ul className="ml-4 list-disc space-y-1">{lesson.memory_anchors.map((anchor: string, anchorIndex: number) => <li key={anchorIndex}>{anchor}</li>)}</ul></Callout>}
          </div>
          {lesson.mini_practice_questions?.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide">Mini Practice</p>
              {lesson.mini_practice_questions.map((practice: any, practiceIndex: number) => (
                <Card key={practiceIndex} className="card-elevated"><CardContent className="p-3 space-y-1"><p className="text-sm font-medium text-foreground">{practice.question}</p><p className="text-sm text-muted-foreground">{practice.answer}</p></CardContent></Card>
              ))}
            </div>
          )}
        </div>
      </CollapsibleSection>
    ))}
    {data.section_exam_mastery_checklist?.length > 0 && <Callout variant="tip" title="Mastery Checklist"><ul className="ml-4 list-disc space-y-1">{data.section_exam_mastery_checklist.map((item: string, index: number) => <li key={index}>{item}</li>)}</ul></Callout>}
  </div>
);

/* ---- Generic Key-Value Section ---- */
const GenericSection = ({ title, data }: { title: string; data: any }) => {
  if (!data) return null;

  if (data.lessons && Array.isArray(data.lessons)) {
    return <ComprehensiveLearningSection data={data} />;
  }

  if (title === "Theories" && Array.isArray(data)) {
    return <TheoryCards theories={data} />;
  }

  // Handle array of objects with various structures
  if (Array.isArray(data)) {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        {data.map((item, i) => (
          <div key={i} className="text-sm text-muted-foreground">
            {typeof item === "string" ? (
              <p className="flex items-start gap-2 rounded-lg border border-border bg-muted/30 p-3"><span className="text-primary">•</span>{item}</p>
            ) : (
              <Card className="card-elevated h-full">
                <CardContent className="p-4 space-y-3">
                  {item.title && <h3 className="text-base font-semibold text-foreground">{item.title}</h3>}
                  {renderObjectContent(item)}
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Handle object with title + content
  if (typeof data === "object") {
    const nestedEntries = Object.entries(data).filter(([key, value]) => (
      !["title", "overview", "examPearls", "examPearl", "sourceBasis", "moduleId", "moduleTitle", "moduleType", "version", "exam", "uiHints", "intro", "id"].includes(key)
      && value !== null
      && value !== undefined
    ));

    return (
      <div className="space-y-3">
        {data.overview && <p className="text-sm text-muted-foreground mb-3">{data.overview}</p>}
        <div className={nestedEntries.length > 3 ? "grid gap-3 md:grid-cols-2" : "space-y-3"}>
          {renderObjectContent(data)}
        </div>
        <ExamPearls pearls={data.examPearls} />
      </div>
    );
  }

  return null;
};

/* ---- Object content renderer ---- */
const renderObjectContent = (obj: any): React.ReactNode => {
  const skipKeys = new Set(["title", "overview", "examPearls", "examPearl", "sourceBasis", "moduleId", "moduleTitle", "moduleType", "version", "exam", "uiHints", "intro", "id"]);

  return (
    <>
      {Object.entries(obj).map(([key, value]) => {
        if (skipKeys.has(key)) return null;
        if (value === null || value === undefined) return null;

        // Render coreCriteria, mustRuleOut, specifiersToKnow, examClues etc as labeled lists
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === "string") {
          return (
            <div key={key} className="rounded-lg border border-border bg-muted/30 p-3">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">{formatKey(key)}</span>
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
            <div key={key} className="rounded-lg border border-border bg-card p-3">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">{formatKey(key)}</span>
              <div className="ml-4 mt-1 space-y-1">
                {Object.entries(value as Record<string, any>).map(([k, v]) => (
                  Array.isArray(v) ? (
                    <div key={k} className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{formatKey(k)}</p>
                      <ul className="ml-4 space-y-1">
                        {v.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-1 text-sm text-muted-foreground"><span className="text-primary text-xs">•</span>{typeof item === "string" ? item : JSON.stringify(item)}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p key={k} className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground capitalize">{formatKey(k)}: </span>
                      {typeof v === "string" ? formatValue(v) : JSON.stringify(v)}
                    </p>
                  )
                ))}
              </div>
            </div>
          );
        }

        if (typeof value === "string") {
          return (
            <div key={key} className="rounded-lg border border-border bg-muted/30 p-3">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">{formatKey(key)}</span>
              <p className="mt-1 text-sm text-muted-foreground">{formatValue(value)}</p>
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

/* ---- DSM Diagnostic Categories ---- */
const DiagnosticCategories = ({ categories }: { categories: any[] }) => (
  <div>
    <SectionHeading icon={BookOpen} subtitle="Conditions you must recognize and differentiate.">Diagnostic Categories</SectionHeading>
    <div className="space-y-4">
      {categories.map((cat, i) => (
        <CollapsibleSection key={i} title={cat.title} defaultOpen={i === 0}>
          {cat.overview && <p className="text-sm text-muted-foreground mb-3">{cat.overview}</p>}
          {cat.highYieldDisorders?.map((disorder: any, j: number) => (
            <CollapsibleSection key={j} title={disorder.title}>
              {disorder.description && (
                <div className="mb-4 rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">What it is</p>
                  <p className="text-base text-foreground leading-relaxed">{disorder.description}</p>
                </div>
              )}
              {disorder.hallmark && (
                <Alert className="border-primary/30 bg-primary/5 mb-3">
                  <Target className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm text-foreground">
                    <span className="font-semibold">Hallmark: </span>{disorder.hallmark}
                  </AlertDescription>
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
              {disorder.differentialDiagnosis && (
                <div className="mt-3 rounded-lg border border-border bg-muted/30 p-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Differential Diagnosis</p>
                  <div className="space-y-2">
                    {disorder.differentialDiagnosis.map((diff: any, k: number) => (
                      <p key={k} className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-medium text-foreground">vs. {diff.compareTo}: </span>{diff.keyDifference}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {disorder.miniCase && (
                <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Mini Case</p>
                  <p className="text-sm text-foreground leading-relaxed">{disorder.miniCase.prompt}</p>
                  <p className="mt-2 text-sm text-muted-foreground"><span className="font-medium text-foreground">Best answer: </span>{disorder.miniCase.bestAnswer}</p>
                  {disorder.miniCase.why && <p className="text-xs text-muted-foreground mt-1">Why: {disorder.miniCase.why}</p>}
                </div>
              )}
            </CollapsibleSection>
          ))}
          {cat.categoryQuickReview && (
            <div className="mt-3 rounded-lg border border-border bg-card p-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Category Quick Review</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.categoryQuickReview.map((item: string, k: number) => (
                  <Badge key={k} variant="secondary" className="text-xs">{item}</Badge>
                ))}
              </div>
            </div>
          )}
          {cat.redFlags && (
            <div className="mt-3">
              {cat.redFlags.map((rf: any, k: number) => (
                <Alert key={k} className="border-destructive/30 bg-destructive/5 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <AlertDescription className="text-sm">
                    <span className="font-medium text-foreground">{rf.title || rf}</span>
                    {rf.whenToThinkOfIt && (
                      <span className="text-muted-foreground"> — {Array.isArray(rf.whenToThinkOfIt) ? rf.whenToThinkOfIt.join(", ") : rf.whenToThinkOfIt}</span>
                    )}
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
    "diagnosticCategories", "globalDifferentialTables", "redFlagAlerts", "studyAids", "assessmentFramework", "assessmentTerminologyMatch", "mseDeepDive",
    "majorInstruments", "riskAssessmentSection", "psychometrics", "assessmentSelectionGuide", "levelOfCareSection",
  ]);

  // Collect all "other" sections
  const otherSections = Object.entries(data).filter(
    ([key]) => !skipTopLevel.has(key)
  );

  const flowSections: Array<{ id: string; label: string }> = [];

  if (data.intro) flowSections.push({ id: "module-overview", label: "Overview" });
  if (data.coreDecisionRules || data.coreDiagnosticReasoningRules) flowSections.push({ id: "decision-rules", label: "Decision rules" });
  if (data.assessmentFramework) flowSections.push({ id: "assessment-framework", label: "Assessment types" });
  if (data.mseDeepDive) flowSections.push({ id: "mse-deep-dive", label: "MSE" });
  if (data.majorInstruments) flowSections.push({ id: "major-instruments", label: "Major instruments" });
  if (data.riskAssessmentSection) flowSections.push({ id: "risk-assessment", label: "Risk assessment" });
  if (data.psychometrics) flowSections.push({ id: "psychometrics", label: "Psychometrics" });
  if (data.assessmentSelectionGuide) flowSections.push({ id: "assessment-selection", label: "Choosing assessments" });
  if (data.levelOfCareSection) flowSections.push({ id: "level-of-care", label: "Level of care" });
  if (data.diagnosticCategories) flowSections.push({ id: "diagnostic-categories", label: "Diagnostic categories" });
  if (data.globalDifferentialTables) flowSections.push({ id: "differential-tables", label: "Differentials" });
  if (data.redFlagAlerts) flowSections.push({ id: "red-flag-alerts", label: "Red flags" });
  if (data.studyAids) flowSections.push({ id: "study-aids", label: "Visual aids" });
  otherSections.forEach(([key]) => {
    flowSections.push({ id: slugifySectionId(key), label: formatKey(key) });
  });
  if (data.commonExamTraps) flowSections.push({ id: "exam-traps", label: "Exam traps" });
  if (data.miniCaseDrills) flowSections.push({ id: "mini-case-drills", label: "Case drills" });
  if (data.quickReview) flowSections.push({ id: "quick-review", label: "Quick review" });
  if (data.checkpointQuestions) flowSections.push({ id: "checkpoint-questions", label: "Checkpoint quiz" });
  if (data.assessmentTerminologyMatch) flowSections.push({ id: "terminology-match", label: "Term matching" });

  return (
    <div className="space-y-6">
      <ModuleSectionNavigator sections={flowSections} />

      {data.intro && (
        <GuidedSection id="module-overview" title="Module overview" summary="Begin here to understand the full topic before opening the later sections." defaultOpen>
          <IntroSection intro={data.intro} />
        </GuidedSection>
      )}

      {(data.coreDecisionRules || data.coreDiagnosticReasoningRules) && (
        <GuidedSection id="decision-rules" title="Core decision rules" summary="This section contains the core logic you should know before applying any assessment or diagnostic content.">
          {data.coreDecisionRules && <DecisionRules rules={data.coreDecisionRules} />}
          {data.coreDiagnosticReasoningRules && <DecisionRules rules={data.coreDiagnosticReasoningRules} />}
        </GuidedSection>
      )}

      {data.assessmentFramework && (
        <GuidedSection id="assessment-framework" title="Major types of assessment" summary="This section is the full deep dive for assessment categories, not a preview. Open it when you want everything about assessment types in one place.">
          <AssessmentFramework framework={data.assessmentFramework} />
        </GuidedSection>
      )}

      {data.mseDeepDive && (
        <GuidedSection id="mse-deep-dive" title="Mental status examination (MSE)" summary="The full MSE deep dive — domain-by-domain structure, normal vs. abnormal indicators, clues, and review.">
          <MSEDeepDive section={data.mseDeepDive} />
        </GuidedSection>
      )}

      {data.majorInstruments && (
        <GuidedSection id="major-instruments" title="Major instruments" summary="A comprehensive reference of the assessment tools you must know — depression, anxiety, trauma, suicide risk, substance use, personality, cognitive, career, family, and behavioral measures.">
          <MSEDeepDive section={data.majorInstruments} />
        </GuidedSection>
      )}

      {data.riskAssessmentSection && (
        <GuidedSection id="risk-assessment" title="Risk assessment priorities" summary="How to triage risk on the exam — suicide, homicide, abuse, and safety decisions in the right clinical order.">
          <MSEDeepDive section={data.riskAssessmentSection} />
        </GuidedSection>
      )}

      {data.psychometrics && (
        <GuidedSection id="psychometrics" title="Psychometric foundations" summary="Reliability, validity, standardization, norms, and score types — the testing concepts the exam tests directly.">
          <MSEDeepDive section={data.psychometrics} />
        </GuidedSection>
      )}

      {data.assessmentSelectionGuide && (
        <GuidedSection id="assessment-selection" title="Choosing the best assessment" summary="A step-by-step decision framework for picking the right tool when the question gives you several plausible options.">
          <MSEDeepDive section={data.assessmentSelectionGuide} />
        </GuidedSection>
      )}

      {data.levelOfCareSection && (
        <GuidedSection id="level-of-care" title="Assessment and level of care" summary="How assessment data drives placement decisions across the continuum of care, including ASAM-style criteria for substance use.">
          <GenericSection title="Assessment and Level of Care" data={data.levelOfCareSection} />
        </GuidedSection>
      )}

      {data.diagnosticCategories && (
        <GuidedSection id="diagnostic-categories" title="Diagnostic categories" summary="This is the full reference section for diagnosis-focused distinctions and disorders within this module.">
          <DiagnosticCategories categories={data.diagnosticCategories} />
        </GuidedSection>
      )}

      {data.globalDifferentialTables && (
        <GuidedSection id="differential-tables" title="Differential diagnosis tables" summary="This section holds the full differential reference content for side-by-side comparison.">
          <div>
            <SectionHeading icon={Compass} subtitle="Side-by-side comparisons for fast disambiguation.">Differential Diagnosis Tables</SectionHeading>
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
        </GuidedSection>
      )}

      {data.redFlagAlerts && (
        <GuidedSection id="red-flag-alerts" title="Red flag alerts" summary="This section contains the warning signs that should change urgency, safety planning, or level-of-care decisions.">
          <div>
            <SectionHeading icon={ShieldAlert} subtitle="Signs that escalate urgency, safety planning, or level of care.">Red Flag Alerts</SectionHeading>
            {data.redFlagAlerts.map((alert: any, i: number) => (
              <Alert key={i} className="border-destructive/30 bg-destructive/5 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-sm">
                  <span className="font-medium text-foreground">{alert.title}</span>
                  {alert.whenToThinkOfIt && (
                    Array.isArray(alert.whenToThinkOfIt) ? (
                      <ul className="mt-1 ml-4 list-disc space-y-0.5 text-muted-foreground">
                        {alert.whenToThinkOfIt.map((item: string, k: number) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-muted-foreground"> — {alert.whenToThinkOfIt}</span>
                    )
                  )}
                  {alert.clinicalPriority && <p className="text-xs text-muted-foreground mt-1">{alert.clinicalPriority}</p>}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </GuidedSection>
      )}

      {data.studyAids && (
        <GuidedSection id="study-aids" title="Visual study aids" summary="This section contains charts, tables, comparisons, and visual organizers for quick review.">
          <div>
            <SectionHeading icon={Sparkles} subtitle="Charts, tables, and organizers for quick review.">Visual Study Aids</SectionHeading>
            <StudyVisuals aids={data.studyAids} />
          </div>
        </GuidedSection>
      )}

      {otherSections.map(([key, value]) => (
        <GuidedSection
          key={key}
          id={slugifySectionId(key)}
          title={formatKey(key)}
          summary={`Study the key rules, exam cues, and decision points for ${formatKey(key).toLowerCase()}.`}
        >
          <GenericSection title={formatKey(key)} data={value} />
        </GuidedSection>
      ))}

      {data.commonExamTraps && (
        <GuidedSection id="exam-traps" title="Common exam traps" summary="Use this section to study the mistakes the exam expects you to avoid.">
          <ExamTraps traps={data.commonExamTraps} />
        </GuidedSection>
      )}

      {data.miniCaseDrills && (
        <GuidedSection id="mini-case-drills" title="Practice case drills" summary="Use these case drills to apply the section content in a more exam-like way.">
          <MiniCaseDrills drills={data.miniCaseDrills} />
        </GuidedSection>
      )}

      {data.quickReview && (
        <GuidedSection id="quick-review" title="Quick review" summary="Use this section when you want a shorter recap after studying the full content.">
          <QuickReview review={data.quickReview} />
        </GuidedSection>
      )}

      {data.checkpointQuestions && (
        <GuidedSection id="checkpoint-questions" title="Checkpoint questions" summary="Open this section to test recall after working through the main material.">
          <CheckpointQuestions questions={data.checkpointQuestions} />
        </GuidedSection>
      )}

      {data.assessmentTerminologyMatch && (
        <GuidedSection id="terminology-match" title="Match the terms" summary="Use the matching activity to reinforce the major terms and definitions from the module.">
          <MatchingExercise exercise={data.assessmentTerminologyMatch} />
        </GuidedSection>
      )}
    </div>
  );
};

export default ModuleRenderer;
