import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getExamLikelihood } from "@/lib/exam-likelihood";

const levelClass = {
  highest: "border-[hsl(var(--yield-highest)/0.45)] bg-[hsl(var(--yield-highest)/0.12)] text-[hsl(var(--yield-highest))]",
  high: "border-[hsl(var(--yield-high)/0.45)] bg-[hsl(var(--yield-high)/0.12)] text-[hsl(var(--yield-high))]",
  moderate: "border-[hsl(var(--yield-moderate)/0.45)] bg-[hsl(var(--yield-moderate)/0.12)] text-[hsl(var(--yield-moderate))]",
  low: "border-[hsl(var(--yield-low)/0.35)] bg-[hsl(var(--yield-low)/0.10)] text-[hsl(var(--yield-low))]",
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
