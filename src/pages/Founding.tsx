import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { isFoundingOfferActive } from "@/lib/foundingOffer";

const benefits = [
  "Full access to every NCMHCE clinical case narrative",
  "Full-length timed practice exam",
  "DSM-5-TR reference library + flashcards",
  "Domain analytics and progress tracking",
  "All new cases added during your year",
];

const Founding = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const offerActive = isFoundingOfferActive();

  // If the user just clicked an email confirmation link, the URL contains
  // either ?code=... (PKCE) or #access_token=... — supabase-js handles it
  // asynchronously. Treat that window as "still authenticating" so we don't
  // flash the Log in / Sign up buttons before the session is established.
  const url = typeof window !== "undefined" ? window.location.href : "";
  const hasAuthInUrl = /[?&]code=|#access_token=|[?&]token_hash=/.test(url);

  useEffect(() => {
    if (!offerActive) navigate("/signup", { replace: true });
  }, [offerActive, navigate]);

  if (!offerActive) return null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Founding Member — 1 Year for $67 | The Exam Path</title>
        <meta name="description" content="Lock in 1 year of full NCMHCE prep access for a one-time $67. Founding member offer ends May 31." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <PaymentTestModeBanner />
      <div className="container max-w-5xl mx-auto py-8 px-4">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Founding Member Offer · Ends May 31
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              1 year of full access for $67
            </h1>
            <p className="text-muted-foreground mb-6">
              Join as a founding member and lock in a full year of The Exam Path before public
              subscription pricing launches at <strong>$79/month</strong>. One-time payment, no
              subscription.
            </p>

            <Card className="card-elevated border-primary/30 mb-6">
              <CardContent className="p-5">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-extrabold text-foreground">$67</span>
                  <span className="text-muted-foreground line-through text-sm">$948/yr</span>
                  <span className="text-xs text-primary font-semibold ml-1">save 90%+</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground leading-relaxed">
              The platform is free for everyone until <strong>May 31, 2026</strong>. Your paid year
              of full access runs <strong>May 31, 2026 → May 31, 2027</strong>. One-time $67
              payment, no subscription, no auto-renewal. After your year ends, standard $79/month
              pricing applies.
            </p>

            {!user && (
              <p className="text-sm text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link to="/login?next=/founding" className="text-primary underline">
                  Log in
                </Link>{" "}
                to check out faster.
              </p>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Secure your founding spot</h2>
            {authLoading || (hasAuthInUrl && !user) ? (
              <Card className="card-elevated">
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[160px] gap-3">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  {hasAuthInUrl && !user && (
                    <p className="text-sm text-muted-foreground">Confirming your account…</p>
                  )}
                </CardContent>
              </Card>
            ) : user ? (
              <StripeEmbeddedCheckout
                priceId="early_access_yearly"
                customerEmail={user.email || undefined}
                userId={user.id}
                returnUrl={`${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`}
              />
            ) : (
              <Card className="card-elevated">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-foreground">
                    Please create an account or log in before checking out. We'll attach your
                    purchase to your account so your access starts automatically on May 31, 2026.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="flex-1">
                      <Link to="/signup?next=/founding">Create account</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/login?next=/founding">Log in</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founding;
