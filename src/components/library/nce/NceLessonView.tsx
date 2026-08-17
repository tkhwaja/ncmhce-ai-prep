import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { getNceLessonContent } from "@/data/nce/library";
import { getLesson, getLessonNeighbors, getModule } from "@/lib/nce-library";
import { useNceLibraryProgress } from "@/hooks/useNceLibraryProgress";
import NceRichText from "./NceRichText";

const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => (
  <section className="space-y-2">
    <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
      {Icon && <Icon className="h-4 w-4 text-primary" />}
      {title}
    </h2>
    {children}
  </section>
);

const NceLessonView = ({
  lessonId,
  onNavigate,
  onBack,
}: {
  lessonId: string;
  onNavigate: (params: Record<string, string>) => void;
  onBack: () => void;
}) => {
  const lesson = getLesson(lessonId);
  const module = lesson ? getModule(lesson.moduleId) : undefined;
  const content = getNceLessonContent(lessonId);
  const { prev, next } = getLessonNeighbors(lessonId);
  const { markOpened, setCompleted, isCompleted, recordCheckAccuracy } = useNceLibraryProgress();
  const [answers, setAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    if (lesson) markOpened(lesson.id, lesson.moduleId);
    setAnswers({});
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  const checks = content?.knowledgeChecks ?? [];
  const answeredAll = checks.length > 0 && checks.every((c) => answers[c.id] !== undefined);
  const correctCount = useMemo(
    () => checks.filter((c) => answers[c.id] === c.correctAnswerIndex).length,
    [answers, checks],
  );
  const accuracy = useMemo(
    () => (answeredAll ? correctCount / checks.length : null),
    [answeredAll, correctCount, checks.length],
  );

  useEffect(() => {
    if (accuracy !== null)
      recordCheckAccuracy(lessonId, accuracy, {
        moduleId: lesson?.moduleId,
        correctCount,
        questionCount: checks.length,
        answers,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accuracy]);

  if (!lesson) return null;
  const done = isCompleted(lesson.id);

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="-ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="space-y-2">
        <button
          type="button"
          onClick={() => onNavigate({ module: lesson.moduleId })}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-3 w-3" />
          {lesson.moduleId} — {module?.title}
        </button>
        <h1 className="text-2xl font-bold text-foreground">{lesson.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {lesson.collectionTitle}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {content?.estimatedMinutes ?? lesson.minutes} min
          </span>
          {content?.contentType && (
            <Badge variant="outline" className="text-xs">
              {content.contentType.replace(/-/g, " ")}
            </Badge>
          )}
        </div>
      </div>

      {!content ? (
        <Card className="card-elevated border-dashed">
          <CardContent className="p-6 space-y-2">
            <h2 className="font-semibold text-foreground">Content in production</h2>
            <p className="text-sm text-muted-foreground">
              This lesson is part of the approved NCE curriculum and its page is ready. The teaching
              content, exam-application notes, and knowledge checks are being written and verified
              against NBCC and primary counseling sources.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          <Section title="Why this matters on the NCE" icon={Target}>
            <p className="text-sm text-muted-foreground">{content.whyItMatters}</p>
          </Section>

          {!!content.learningObjectives?.length && (
            <Section title="Learning objectives" icon={BookOpen}>
              <ul className="space-y-1.5">
                {content.learningObjectives.map((o) => (
                  <li key={o} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Core explanation">
            <NceRichText blocks={content.coreExplanation} />
          </Section>

          {!!content.keyConcepts?.length && (
            <Section title="Key concepts">
              <div className="grid gap-3 sm:grid-cols-2">
                {content.keyConcepts.map((k) => (
                  <Card key={k.term} className="card-elevated">
                    <CardContent className="p-4">
                      <p className="text-sm font-semibold text-foreground">{k.term}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{k.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {content.comparisonTables?.map((t) => (
            <Section key={t.title} title={t.title}>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      {t.headers.map((h) => (
                        <th key={h} className="px-3 py-2 text-left font-semibold text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        {r.map((cell, j) => (
                          <td key={j} className="px-3 py-2 align-top text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {t.note && <p className="text-xs text-muted-foreground">{t.note}</p>}
            </Section>
          ))}

          {!!content.howTested?.length && (
            <Section title="How the NCE may test it" icon={Target}>
              <ul className="space-y-1.5">
                {content.howTested.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {content.appliedExample && (
            <Section title="Applied counseling example">
              <Card className="card-elevated border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <NceRichText blocks={content.appliedExample.split("\n\n")} />
                </CardContent>
              </Card>
            </Section>
          )}

          {!!content.examTraps?.length && (
            <Section title="Common exam traps" icon={AlertTriangle}>
              <ul className="space-y-1.5">
                {content.examTraps.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {!!content.doNotConfuse?.length && (
            <Section title="Do not confuse with">
              <div className="space-y-2">
                {content.doNotConfuse.map((d) => (
                  <Card key={`${d.item}-${d.confusedWith}`} className="card-elevated">
                    <CardContent className="p-4 text-sm">
                      <p className="font-semibold text-foreground">
                        {d.item} vs. {d.confusedWith}
                      </p>
                      <p className="mt-1 text-muted-foreground">{d.distinction}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          )}

          {!!content.doNotConfuseNotes?.length && (
            <Section title="Do not confuse with">
              <Card className="card-elevated border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-4">
                  <NceRichText blocks={content.doNotConfuseNotes} />
                </CardContent>
              </Card>
            </Section>
          )}

          {content.memoryAnchor && (
            <Section title="Memory anchor" icon={Lightbulb}>
              <p className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground">
                {content.memoryAnchor}
              </p>
            </Section>
          )}

          <Section title="Key takeaways">
            <ul className="space-y-1.5">
              {content.keyTakeaways.map((k) => (
                <li key={k} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {k}
                </li>
              ))}
            </ul>
          </Section>

          {!!checks.length && (
            <Section title="Knowledge check">
              {accuracy !== null && (
                <p className="text-sm font-medium text-foreground">
                  You answered {correctCount} of {checks.length} correctly (
                  {Math.round(accuracy * 100)}%).
                </p>
              )}
              <div className="space-y-4">
                {checks.map((c, qi) => {
                  const picked = answers[c.id];
                  return (
                    <Card key={c.id} className="card-elevated">
                      <CardContent className="space-y-3 p-4">
                        <p className="text-sm font-medium text-foreground">
                          {qi + 1}. {c.stem}
                        </p>
                        <div className="space-y-2">
                          {c.options.map((opt, oi) => {
                            const isPicked = picked === oi;
                            const isCorrect = oi === c.correctAnswerIndex;
                            const state =
                              picked === undefined
                                ? "border-border"
                                : isCorrect
                                  ? "border-primary bg-primary/10"
                                  : isPicked
                                    ? "border-destructive bg-destructive/10"
                                    : "border-border opacity-70";
                            return (
                              <button
                                key={oi}
                                type="button"
                                disabled={picked !== undefined}
                                onClick={() => setAnswers((a) => ({ ...a, [c.id]: oi }))}
                                className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${state}`}
                              >
                                {opt}
                                {picked !== undefined && c.optionRationales?.[oi] && (
                                  <span className="mt-1 block text-xs text-muted-foreground">
                                    {c.optionRationales[oi]}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {picked !== undefined && (
                          <p className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                            {c.explanation}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </Section>
          )}

          {!!content.sources?.length && (
            <Section title="Sources and verification">
              <ul className="space-y-1 text-xs text-muted-foreground">
                {content.sources.map((s) => (
                  <li key={s.title}>
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noreferrer" className="underline">
                        {s.title}
                      </a>
                    ) : (
                      s.title
                    )}
                  </li>
                ))}
              </ul>
              {content.reviewedOn && (
                <p className="text-xs text-muted-foreground">Reviewed {content.reviewedOn}</p>
              )}
            </Section>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <Button
          variant={done ? "secondary" : "default"}
          onClick={() => setCompleted(lesson.id, !done, lesson.moduleId)}
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          {done ? "Completed" : "Mark as complete"}
        </Button>
        {prev && (
          <Button variant="outline" onClick={() => onNavigate({ lesson: prev.id })}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
        )}
        {next && (
          <Button variant="outline" onClick={() => onNavigate({ lesson: next.id })}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default NceLessonView;
