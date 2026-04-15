import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  "10+ Clinical Simulations (NCMHCE-style)",
  "60+ Flashcards with Spaced Repetition",
  "AI-Powered Study Tools",
  "Personalized Study Plan",
  "Score Tracking & Analytics",
  "Learning Library",
  "Community Forum",
  "Pomodoro Timer & Note-Taking",
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          One Price. Full Access. Pass Your Exam.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          No subscriptions. No hidden fees. Pay once and get lifetime access to everything.
        </p>

        <Card className="card-elevated border-primary/30 max-w-md mx-auto">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">NCMHCE Full Access</CardTitle>
            <div className="flex items-baseline justify-center gap-1 mt-2">
              <span className="text-5xl font-extrabold text-foreground">$349</span>
              <span className="text-muted-foreground text-sm">one-time</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Use code <span className="font-semibold text-primary">FIRST15</span> for 15% off
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
            <Button className="w-full" size="lg" onClick={() => navigate("/checkout")}>
              Get Started — $349
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
