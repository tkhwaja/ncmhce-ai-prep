import { useAuth } from "@/contexts/AuthContext";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { formatPrice, resolveTrack, trackConfig } from "@/config/exam-tracks";

const CheckoutPage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Defaults to NCMHCE, so every existing /checkout link behaves exactly as before.
  const track = resolveTrack(searchParams.get("track"));
  const config = trackConfig(track);
  const nextPath = `/checkout?track=${track}`;

  return (
    <div className="min-h-screen bg-background">
      <PaymentTestModeBanner />
      <div className="container max-w-2xl mx-auto py-8 px-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          {config.label} Pro — {formatPrice(config.monthlyPriceCents)}/month
        </h1>
        <p className="text-muted-foreground mb-6">
          Full access to the {config.label} track on The Exam Path. Cancel anytime from your
          profile.
        </p>


        {authLoading ? (
          <div className="flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : !user ? (
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold mb-2">Create an account to continue</h2>
            <p className="text-sm text-muted-foreground mb-4">
              You'll need an account so we can link your subscription and give you access right
              after payment.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/signup?next=/checkout">Create account</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/login?next=/checkout">Log in</Link>
              </Button>
            </div>
          </div>
        ) : (
          <StripeEmbeddedCheckout
            priceId="ncmhce_monthly"
            customerEmail={user.email || undefined}
            userId={user.id}
            returnUrl={`${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
