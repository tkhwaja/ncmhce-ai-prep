import { Link } from "react-router-dom";
import { useSubscription } from "@/hooks/useSubscription";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";

const FEATURES = [
  "Full clinical narrative library",
  "Realistic NCMHCE practice exams",
  "Personalized study plan & analytics",
  "Flashcards, AI counselor chat & study tools",
  "Cancel anytime from your profile",
];

const PaidFeatureGate = ({ children, feature }: { children: React.ReactNode; feature: string }) => {
  const { hasAccess, loading } = useSubscription();

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-center text-xl font-semibold text-foreground">
            {feature} is a Pro feature
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Subscribe to NCMHCE Pro to unlock {feature.toLowerCase()} and every other study tool on The Exam Path.
          </p>

          <div className="my-6 rounded-xl border border-border bg-background p-5">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold text-foreground">$79</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mt-4 space-y-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild className="w-full" size="lg">
            <Link to="/checkout">Subscribe to unlock</Link>
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Already subscribed?{" "}
            <Link to="/profile" className="underline hover:text-foreground">
              Check your account
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PaidFeatureGate;
