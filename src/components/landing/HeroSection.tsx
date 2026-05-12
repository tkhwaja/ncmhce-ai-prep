import FreeDiagnosticCTA from "./FreeDiagnosticCTA";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Built to Feel Like the Real Exam
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-3">
                The modern way to study
                <span className="text-gradient"> for the NCMHCE.</span>
            </h1>


            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                AI tutoring, narrative simulations, and smart study tools — built for how you actually learn.
                Start with a free diagnostic case and see exactly where you stand before test day.
            </p>

              <div className="mb-4 flex flex-col sm:flex-row gap-3 sm:items-start">
                <Link
                  to="/signup"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
                <FreeDiagnosticCTA />
              </div>

            <p className="text-xs text-muted-foreground">
                Realistic pacing, exam-style layout, and a full results breakdown after completion.
            </p>
          </div>

          {/* Right: Product mockup */}
          <div className="animate-fade-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <ProductMockup />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductMockup = () => (
  <div className="card-elevated p-1 glow-primary rounded-2xl">
    <div className="bg-muted/30 rounded-xl p-6 space-y-4">
      {/* Mock header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-secondary/40" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
        </div>
        <div className="flex-1 h-6 rounded-md bg-muted/50 max-w-[200px]" />
      </div>

      {/* Simulation mock */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 space-y-3">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider">Clinical Narrative</div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            A 28-year-old male presents with persistent worry about multiple areas of life, including work and finances, for the past 8 months...
          </div>
          <div className="mt-4 space-y-2">
            {["Assess for co-occurring substance use", "Administer GAD-7 screening", "Begin CBT-based intervention"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
                <div className={`w-3 h-3 rounded border ${i === 1 ? "border-primary bg-primary/20" : "border-muted-foreground/30"}`} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* AI chat mock */}
        <div className="col-span-2 border-l border-border/50 pl-4">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">AI Tutor</div>
          <div className="space-y-3">
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-2.5 text-xs text-foreground/80">
              Why is GAD-7 preferred over PHQ-9 here?
            </div>
            <div className="rounded-lg bg-muted/30 p-2.5 text-xs text-muted-foreground">
              The GAD-7 targets generalized anxiety symptoms, which align with the client's persistent worry pattern...
            </div>
            <div className="h-8 rounded-lg border border-border/30 bg-muted/20 flex items-center px-2">
              <span className="text-xs text-muted-foreground/50">Ask a follow-up...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
