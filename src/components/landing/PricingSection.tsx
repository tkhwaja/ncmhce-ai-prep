import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  "20+ Clinical Case Narratives",
  "11-case Full-Length Practice Exam",
  "Optional In-Session Tutor Support",
  "Personalized Study Plan",
  "DSM-5-TR Reference Library",
  "60+ Flashcards with Spaced Repetition",
  "Score Tracking and Domain Analytics",
  "Auto-Save and Resume Progress",
  "New narratives added weekly",
  "Cancel anytime",
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Beta Access</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Full access when you’re ready.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Create an account to try the complete exam-prep platform during the beta period.
        </p>

        <Card className="card-elevated border-primary/30 max-w-md mx-auto">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">NCMHCE Full Access</CardTitle>
            <div className="flex items-baseline justify-center gap-1 mt-2">
              <span className="text-5xl font-extrabold text-foreground blur-sm select-none">Beta</span>
              <span className="text-muted-foreground text-sm">access</span>
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
            <Button className="w-full" size="lg" onClick={() => navigate("/signup")}>
              Create Beta Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
