import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, Clock } from "lucide-react";
import {
  formatStudyTime,
  getCollection,
  getLesson,
  getModule,
  getModuleDomains,
  moduleMinutes,
} from "@/lib/nce-library";
import type { NceExamVersion } from "@/data/nce/library";
import { useNceLibraryProgress } from "@/hooks/useNceLibraryProgress";
import { LessonRow, ProgressSummary } from "./NceShared";

const NceModuleView = ({
  moduleId,
  examVersion,
  onNavigate,
  onBack,
}: {
  moduleId: string;
  examVersion: NceExamVersion;
  onNavigate: (params: Record<string, string>) => void;
  onBack: () => void;
}) => {
  const module = getModule(moduleId);
  const { completedCount, isCompleted } = useNceLibraryProgress();
  if (!module) return null;

  const collection = getCollection(module.collectionSlug);
  const ids = module.lessons.map((l) => l.id);
  const domains = getModuleDomains(module.id, examVersion).slice(0, 2);

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="-ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => onNavigate({ collection: module.collectionSlug })}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-3 w-3" /> {collection?.title}
        </button>
        <div>
          <p className="text-xs text-muted-foreground">{module.id}</p>
          <h1 className="text-2xl font-bold text-foreground">{module.title}</h1>
        </div>
        {module.description && (
          <p className="text-sm text-muted-foreground">{module.description}</p>
        )}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="secondary" className="text-xs">
            {module.lessons.length} lessons
          </Badge>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {formatStudyTime(moduleMinutes(module))}
          </span>
          {domains.map((d) => (
            <Badge key={d.id} variant="outline" className="text-xs">
              {d.title} · {d.percentage}%
            </Badge>
          ))}
        </div>
        <div className="max-w-md">
          <ProgressSummary completed={completedCount(ids)} total={ids.length} label="Module progress" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-foreground">Lessons</h2>
        <div className="space-y-2">
          {module.lessons.map((l, i) => {
            const flat = getLesson(l.id);
            if (!flat) return null;
            return (
              <LessonRow
                key={l.id}
                lesson={flat}
                index={i + 1}
                completed={isCompleted(l.id)}
                onOpen={() => onNavigate({ lesson: l.id })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NceModuleView;
