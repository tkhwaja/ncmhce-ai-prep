import { useNavigate } from "react-router-dom";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NCE_ENABLED } from "@/config/exam-tracks";

interface FreeDiagnosticCTAProps {
  className?: string;
  buttonClassName?: string;
  noteClassName?: string;
  size?: "default" | "lg";
}

/** Public path for the free diagnostic funnel — the exam chooser once NCE ships. */
export const FREE_DIAGNOSTIC_PATH = NCE_ENABLED ? "/free-diagnostic" : "/free-diagnostic-case";

const FreeDiagnosticCTA = ({
  className,
  buttonClassName,
  noteClassName,
  size = "lg",
}: FreeDiagnosticCTAProps) => {
  const navigate = useNavigate();

  return (
    <div className={cn("space-y-3", className)}>
      <Button
        size={size}
        className={cn("w-full sm:w-auto", buttonClassName)}
        onClick={() => navigate(FREE_DIAGNOSTIC_PATH)}
      >
        <ClipboardCheck className="h-4 w-4" />
        {NCE_ENABLED ? "Take the Free Diagnostic" : "Take the Free Diagnostic Case"}
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className={cn("text-xs text-muted-foreground", noteClassName)}>
        {NCE_ENABLED
          ? "Pick your exam. Breakdown unlocked after you finish."
          : "One full exam-style case. Breakdown unlocked after you finish."}
      </p>
    </div>
  );
};

export default FreeDiagnosticCTA;
