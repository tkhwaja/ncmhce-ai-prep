import { useAuth } from "@/contexts/AuthContext";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PaymentTestModeBanner />
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold text-foreground mb-6">Start Your Subscription</h1>
        <StripeEmbeddedCheckout
          priceId="ncmhce_monthly"
          customerEmail={user?.email || undefined}
          userId={user?.id || ""}
          returnUrl={`${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
