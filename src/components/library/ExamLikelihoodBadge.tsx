import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getExamLikelihood } from "@/lib/exam-likelihood";

const levelClass = {
  highest: "border-primary/40 bg-primary/10 text-primary",
  high: "border-primary/30 bg-primary/5 text-primary",
  moderate: "border-border bg-muted/60 text-muted-foreground",
  low: "border-border bg-background text-muted-foreground",
} as const;

export const ExamLikelihoodBadge = ({
  topic,
  context,
  compact = false,
  className,
}: {
  topic: string;
  context?: string;
  compact?: boolean;
  className?: string;
}) => {
  const likelihood = getExamLikelihood(topic, context);

  return (
    <Badge
      variant="outline"
      title={likelihood.rationale}
      className={cn("shrink-0 whitespace-nowrap text-[10px] font-semibold", levelClass[likelihood.level], className)}
    >
      {compact ? likelihood.shortLabel : likelihood.label}
    </Badge>
  );
};
