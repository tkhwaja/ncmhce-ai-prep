import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, Layers } from "lucide-react";
import {
  collectionLessonCount,
  collectionMinutes,
  formatStudyTime,
  getCollection,
  getCollectionDomains,
  moduleMinutes,
} from "@/lib/nce-library";
import type { NceExamVersion } from "@/data/nce/library";
import { nceQuickReviewResources } from "@/data/nce/library";
import { useNceLibraryProgress } from "@/hooks/useNceLibraryProgress";
import { ProgressSummary } from "./NceShared";

const NceCollectionView = ({
  slug,
  examVersion,
  onNavigate,
  onBack,
}: {
  slug: string;
  examVersion: NceExamVersion;
  onNavigate: (params: Record<string, string>) => void;
  onBack: () => void;
}) => {
  const collection = getCollection(slug);
  const { completedCount } = useNceLibraryProgress();
  if (!collection) return null;

  const lessonIds = collection.modules.flatMap((m) => m.lessons.map((l) => l.id));
  const domains = getCollectionDomains(collection, examVersion);
  const moduleIds = new Set(collection.modules.map((m) => m.id));
  const quickReview = nceQuickReviewResources.filter((r) =>
    r.sourceModuleIds.some((id) => moduleIds.has(id)),
  );

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="-ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
      </Button>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-foreground">{collection.title}</h1>
        <p className="text-sm text-muted-foreground">{collection.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <Badge variant="secondary" className="text-xs">
            {collection.modules.length} modules
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {collectionLessonCount(collection)} lessons
          </Badge>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {formatStudyTime(collectionMinutes(collection))}
          </span>
        </div>
        <div className="max-w-md">
          <ProgressSummary completed={completedCount(lessonIds)} total={lessonIds.length} />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Layers className="h-4 w-4 text-primary" /> Modules
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {collection.modules.map((m) => {
            const ids = m.lessons.map((l) => l.id);
            const done = completedCount(ids);
            return (
              <Card
                key={m.id}
                className="card-elevated cursor-pointer transition-colors hover:border-primary/40"
                onClick={() => onNavigate({ module: m.id })}
              >
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">{m.id}</p>
                      <h3 className="font-semibold leading-tight text-foreground">{m.title}</h3>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{m.lessons.length} lessons</span>
                    <span>·</span>
                    <span>{formatStudyTime(moduleMinutes(m))}</span>
                  </div>
                  <ProgressSummary completed={done} total={ids.length} label="Module progress" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {!!domains.length && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Related blueprint domains</h2>
          <div className="flex flex-wrap gap-2">
            {domains.map((d) => (
              <Button
                key={d.id}
                variant="outline"
                size="sm"
                onClick={() => onNavigate({ domain: d.id })}
              >
                {d.title} · {d.percentage}%
              </Button>
            ))}
          </div>
        </div>
      )}

      {!!quickReview.length && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Quick-review resources</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {quickReview.map((r) => (
              <li key={r.id}>
                {r.title}
                {r.status === "planned" && (
                  <span className="ml-2 text-xs text-muted-foreground/70">in production</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NceCollectionView;
