import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { isFoundingOfferActive } from "@/lib/foundingOffer";

const features = [
  "20+ Clinical Case Narratives",
  "11-case Full-Length Practice Exam",
  "Optional In-Session Tutor Support",
  "Personalized Study Plan",
  "DSM-5-TR Reference Library",
  "60+ Flashcards with Spaced Repetition",
  "Score Tracking and Domain Analytics",
  "Auto-Save and Resume Progress",
  "New narratives added regularly",
];

const PricingSection = () => {
  const navigate = useNavigate();
  const founding = isFoundingOfferActive();

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full access when you're ready.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Subscribe monthly, or grab a founding-member year while it lasts.
          </p>
        </div>

        <div className={`grid gap-6 ${founding ? "md:grid-cols-2" : "max-w-md mx-auto"}`}>
          {founding && (
            <Card className="card-elevated border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Founding Member · Ends May 31
              </div>
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-lg text-primary">1 Year Access</CardTitle>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-extrabold text-foreground">$67</span>
                  <span className="text-muted-foreground text-sm">one-time</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  365 days of full access. Then standard $79/mo applies — no auto-renewal.
                </p>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-2 text-left">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg" onClick={() => navigate("/founding")}>
                  Claim founding access →
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="card-elevated border-primary/30">
            <CardHeader className="pb-2 pt-6">
              <CardTitle className="text-lg text-primary">NCMHCE Full Access</CardTitle>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-5xl font-extrabold text-foreground">$79</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Cancel anytime. No commitment.</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <ul className="space-y-2 text-left">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={founding ? "outline" : "default"}
                className="w-full"
                size="lg"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
