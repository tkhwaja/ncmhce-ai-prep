import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, FileText, Sparkles } from "lucide-react";
import type { FlatLesson } from "@/lib/nce-library";

export const ProgressSummary = ({
  completed,
  total,
  label,
}: {
  completed: number;
  total: number;
  label?: string;
}) => {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label ?? "Progress"}</span>
        <span>
          {completed}/{total} lessons · {pct}%
        </span>
      </div>
      <Progress value={pct} className="h-1.5" />
    </div>
  );
};

export const LessonRow = ({
  lesson,
  index,
  completed,
  onOpen,
}: {
  lesson: FlatLesson;
  index: number;
  completed: boolean;
  onOpen: () => void;
}) => (
  <button
    type="button"
    onClick={onOpen}
    className="w-full flex items-start gap-3 rounded-lg border border-border/70 bg-card px-3 py-2.5 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
  >
    <span className="mt-0.5 shrink-0 text-xs text-muted-foreground w-5 text-right">{index}</span>
    {completed ? (
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
    ) : (
      <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
    )}
    <span className="min-w-0 flex-1">
      <span className="block text-sm text-foreground">{lesson.title}</span>
      <span className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {lesson.minutes} min
        </span>
        {lesson.published ? (
          <span className="inline-flex items-center gap-1 text-primary">
            <Sparkles className="h-3 w-3" /> Knowledge check included
          </span>
        ) : (
          <span className="inline-flex items-center gap-1">
            <FileText className="h-3 w-3" /> Content in production
          </span>
        )}
      </span>
    </span>
  </button>
);

export const DomainWeightBadge = ({
  percentage,
  scoredItems,
}: {
  percentage: number;
  scoredItems?: number;
}) => (
  <Badge variant="secondary" className="text-xs font-medium">
    {percentage}%{scoredItems ? ` · ${scoredItems} scored items` : ""}
  </Badge>
);
