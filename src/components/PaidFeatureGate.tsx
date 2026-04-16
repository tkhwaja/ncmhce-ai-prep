import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";

const PaidFeatureGate = ({ children, feature }: { children: React.ReactNode; feature: string }) => {
  const { hasAccess, loading } = useSubscription();
  const navigate = useNavigate();

  // TESTING: paywall temporarily disabled — all authenticated users have full access
  return <>{children}</>;

  // eslint-disable-next-line no-unreachable
  if (loading) {
    return <div className="p-6 text-center text-sm text-muted-foreground">Loading…</div>;
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto flex items-center justify-center min-h-[60vh]">
      <Card className="card-elevated border-primary/20 w-full">
        <CardContent className="p-8 text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Unlock {feature}</h2>
          <p className="text-sm text-muted-foreground">
            This feature requires an active subscription. Get full access to all simulations, flashcards, analytics,
            study plans, and tools.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate("/checkout")}>Subscribe — $129.95/month</Button>
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaidFeatureGate;
