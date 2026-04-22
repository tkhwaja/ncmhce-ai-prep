import FreeDiagnosticCTA from "./FreeDiagnosticCTA";

const WaitlistCTA = () => (
  <section id="free-diagnostic" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />

    <div className="container max-w-3xl mx-auto relative z-10 text-center">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Free Diagnostic Case</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Finish one real case and unlock your full breakdown.
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Experience the same exam-style layout your paid users get, then enter your name and email after the case to see your score, review your mistakes, and get the one-page strategy sheet.
      </p>
      <FreeDiagnosticCTA className="items-center" buttonClassName="mx-auto" noteClassName="text-center" />
    </div>
  </section>
);

export default WaitlistCTA;
