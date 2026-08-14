import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { GraduationCap, ArrowRight, BookOpen, Brain, Layers } from "lucide-react";

const STORAGE_KEY = "tep:welcome-dismissed";

interface WelcomeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WelcomeModal = ({ open, onOpenChange }: WelcomeModalProps) => {
  const { track, config, multiTrack, setTrack } = useExamTrack();
  const navigate = useNavigate();
  const [switching, setSwitching] = useState(false);

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable */
    }
    onOpenChange(false);
  };

  const handleStart = () => {
    handleDismiss();
    navigate("/dashboard");
  };

  const handleSwitchTrack = () => {
    setSwitching(true);
  };

  // Reset switching state when modal closes
  useEffect(() => {
    if (open) setSwitching(false);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-xl">Welcome to The Exam Path</DialogTitle>
          <DialogDescription>
            You&apos;re set up for the{" "}
            <span className="font-medium text-foreground">{config.fullName}</span>.
          </DialogDescription>
        </DialogHeader>

        {!switching ? (
          <>
            <div className="space-y-3 rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                Everything in your dashboard is now curated for {config.label}:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm">
                  <Brain className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>
                    {track === "nce"
                      ? "Domain-tagged multiple-choice question bank"
                      : "Realistic clinical case narratives and practice exams"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <BookOpen className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Track-specific learning library and study plan</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Layers className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>Flashcards, analytics, and progress tracking</span>
                </li>
              </ul>
            </div>

            <DialogFooter className="flex-col gap-2 sm:flex-col">
              <Button onClick={handleStart} className="w-full">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {multiTrack && (
                <Button variant="ghost" size="sm" onClick={handleSwitchTrack} className="w-full">
                  I picked the wrong exam
                </Button>
              )}
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                Select the exam you&apos;re preparing for:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setTrack("ncmhce");
                    handleDismiss();
                    navigate("/dashboard");
                  }}
                  className={`flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all ${
                    track === "ncmhce"
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <span className="text-sm font-semibold text-foreground">NCMHCE</span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    Clinical case simulations, diagnosis and treatment planning.
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTrack("nce");
                    handleDismiss();
                    navigate("/dashboard");
                  }}
                  className={`flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all ${
                    track === "nce"
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <span className="text-sm font-semibold text-foreground">NCE</span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    Multiple-choice mastery across the eight core counseling areas.
                  </span>
                </button>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSwitching(false)} className="w-full">
                Back
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
