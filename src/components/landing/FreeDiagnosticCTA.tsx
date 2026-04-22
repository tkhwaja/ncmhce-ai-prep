import { useNavigate } from "react-router-dom";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FreeDiagnosticCTAProps {
  className?: string;
  buttonClassName?: string;
  noteClassName?: string;
  size?: "default" | "lg";
}

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
        onClick={() => navigate("/free-diagnostic-case")}
      >
        <ClipboardCheck className="h-4 w-4" />
        Take the Free Diagnostic Case
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className={cn("text-xs text-muted-foreground", noteClassName)}>
        One full exam-style case. Breakdown unlocked after you finish.
      </p>
    </div>
  );
};

export default FreeDiagnosticCTA;
