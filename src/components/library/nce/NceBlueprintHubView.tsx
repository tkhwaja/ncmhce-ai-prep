import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getBlueprintDomains, getDomainLessons } from "@/lib/nce-library";
import type { NceExamVersion } from "@/data/nce/library";
import { useNceLibraryProgress } from "@/hooks/useNceLibraryProgress";
import { DomainWeightBadge, LessonRow, ProgressSummary } from "./NceShared";

const NceBlueprintHubView = ({
  domainId,
  examVersion,
  onNavigate,
  onBack,
}: {
  domainId: string;
  examVersion: NceExamVersion;
  onNavigate: (params: Record<string, string>) => void;
  onBack: () => void;
}) => {
  const domain = getBlueprintDomains(examVersion).find((d) => d.id === domainId);
  const { completedCount, isCompleted } = useNceLibraryProgress();
  if (!domain) return null;

  const lessons = getDomainLessons(domain);
  const ids = lessons.map((l) => l.id);
  const grouped = domain.moduleIds
    .map((id) => ({ moduleId: id, lessons: lessons.filter((l) => l.moduleId === id) }))
    .filter((g) => g.lessons.length);

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="-ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
      </Button>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-foreground">{domain.title}</h1>
        <DomainWeightBadge percentage={domain.percentage} scoredItems={domain.scoredItems} />
        <p className="text-sm text-muted-foreground">{domain.description}</p>
        {!!domain.taskSummary.length && (
          <Card className="card-elevated">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-foreground">What this domain tests</p>
              <ul className="mt-2 space-y-1.5">
                {domain.taskSummary.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        <div className="max-w-md">
          <ProgressSummary
            completed={completedCount(ids)}
            total={ids.length}
            label="Mapped lesson completion"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Recommended lesson playlist</h2>
        {grouped.map((g) => (
          <div key={g.moduleId} className="space-y-2">
            <button
              type="button"
              onClick={() => onNavigate({ module: g.moduleId })}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              {g.moduleId} — {g.lessons[0].moduleTitle}
            </button>
            <div className="space-y-2">
              {g.lessons.map((l, i) => (
                <LessonRow
                  key={l.id}
                  lesson={l}
                  index={i + 1}
                  completed={isCompleted(l.id)}
                  onOpen={() => onNavigate({ lesson: l.id })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NceBlueprintHubView;
