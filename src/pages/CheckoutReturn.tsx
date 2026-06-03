import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { trackMetaEvent } from "@/lib/meta-pixel";

const CheckoutReturn = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  const { refreshProfile } = useAuth();

  useEffect(() => {
    if (sessionId) {
      // Fire Meta Pixel Purchase on successful return from Stripe Checkout
      trackMetaEvent("Purchase", {
        value: 79,
        currency: "USD",
        content_name: "NCMHCE Pro Monthly",
        content_type: "product",
      });
      // Refresh profile to pick up updated payment_status
      const timer = setTimeout(() => refreshProfile(), 2000);
      return () => clearTimeout(timer);
    }
  }, [sessionId, refreshProfile]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center space-y-4">
          {sessionId ? (
            <>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Access Active!</h1>
              <p className="text-muted-foreground">
                Your account has full access to the complete platform.
              </p>
              <Button onClick={() => navigate("/dashboard")} className="w-full">
                Go to Dashboard
              </Button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-foreground">No Session Found</h1>
              <p className="text-muted-foreground">Something went wrong. Please try again.</p>
              <Button onClick={() => navigate("/")} variant="outline">Go Home</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutReturn;
