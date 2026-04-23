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

const slugifySectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
const ExamTraps = ({ traps }: { traps: Array<string | { trap: string; explanation?: string }> }) => (
  <div>
    <SectionHeading>Common Exam Traps</SectionHeading>
    <div className="space-y-2">
      {traps.map((t, i) => (
        <Alert key={i} className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-sm text-foreground">
            {typeof t === "string" ? (
              t
            ) : (
              <div className="space-y-1">
                <p className="font-medium">{t.trap}</p>
                {t.explanation && <p className="text-muted-foreground">{t.explanation}</p>}
              </div>
            )}
          </AlertDescription>
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
        <SectionHeading>{section.sectionTitle || section.title || "Mental Status Examination (MSE) Breakdown"}</SectionHeading>

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
      <SectionHeading>{section.title || "Mental Status Examination (MSE) Breakdown"}</SectionHeading>
      {section.overview && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{section.overview}</p>}
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
        </GuidedSection>
      )}

      {data.redFlagAlerts && (
        <GuidedSection id="red-flag-alerts" title="Red flag alerts" summary="This section contains the warning signs that should change urgency, safety planning, or level-of-care decisions.">
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
        </GuidedSection>
      )}

      {data.studyAids && (
        <GuidedSection id="study-aids" title="Visual study aids" summary="This section contains charts, tables, comparisons, and visual organizers for quick review.">
          <div>
            <SectionHeading>Visual Study Aids</SectionHeading>
            <StudyVisuals aids={data.studyAids} />
          </div>
        </GuidedSection>
      )}

      {otherSections.map(([key, value]) => (
        <GuidedSection
          key={key}
          id={slugifySectionId(key)}
          title={formatKey(key)}
          summary={`This section contains the full deep-dive content for ${formatKey(key).toLowerCase()}.`}
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
