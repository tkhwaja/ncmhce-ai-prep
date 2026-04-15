import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const PaidFeatureGate = ({ children, feature }: { children: React.ReactNode; feature: string }) => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  if (profile?.payment_status === "paid") {
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
            This feature requires a paid account. Get full access to all simulations, flashcards, analytics, study plans, and tools.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate("/checkout")}>
              Upgrade Now — $349
            </Button>
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
