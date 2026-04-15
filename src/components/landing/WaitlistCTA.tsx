import WaitlistForm from "./WaitlistForm";

const WaitlistCTA = () => (
  <section id="waitlist" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />

    <div className="container max-w-2xl mx-auto relative z-10 text-center">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Don't Miss Out</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Be First in Line When We Launch
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Join the waitlist for early access, launch updates, and founding-user perks.
        We're building something worth the wait.
      </p>
      <div className="max-w-md mx-auto mb-4">
        <WaitlistForm />
      </div>
      <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);

export default WaitlistCTA;
