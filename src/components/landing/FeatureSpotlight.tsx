const spotlights = [
  {
    label: "Contextual AI Support",
    title: "An AI Tutor That Understands What You're Studying",
    desc: "Unlike generic chatbots, our AI tutor is embedded directly into your study session. Ask follow-up questions about any simulation, get DSM-5-TR-grounded explanations, and deepen your clinical reasoning — all without leaving the page.",
    mockup: (
      <div className="space-y-3">
        <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm text-foreground/80">
          Can you explain why Major Depressive Disorder was ruled out in this case?
        </div>
        <div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground leading-relaxed">
          Great question. While the client reports depressed mood, the duration and pattern of symptoms are more consistent with an Adjustment Disorder. Specifically, the onset followed a clear psychosocial stressor within the last three months, and the symptoms don't meet the minimum two-week duration criteria for MDD under DSM-5-TR...
        </div>
        <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm text-foreground/80">
          What if the symptoms persist beyond six months?
        </div>
      </div>
    ),
  },
  {
    label: "Pearson VUE-Style Simulation",
    title: "Practice in an Environment That Mirrors the Real Exam",
    desc: "Our simulations replicate the clinical decision-making format of the actual NCMHCE. Navigate information gathering, diagnosis selection, and treatment planning just like you would on exam day.",
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-semibold text-primary">Simulation 4 of 10</span>
          <span>Time: 24:38</span>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-sm text-muted-foreground">
          A 34-year-old female presents with persistent worry, sleep disturbance, and difficulty concentrating at work for the past 8 months...
        </div>
        <div className="text-xs font-semibold text-foreground mt-3 mb-2">Select the most appropriate actions:</div>
        {["Assess for co-occurring substance use", "Administer GAD-7 screening", "Refer for psychiatric evaluation", "Begin CBT-based intervention planning"].map((opt, i) => (
          <div key={i} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs cursor-pointer transition-all ${i === 1 ? "border-primary/40 bg-primary/5 text-foreground" : "border-border/50 bg-muted/20 text-muted-foreground hover:border-border"}`}>
            <div className={`w-3.5 h-3.5 rounded border ${i === 1 ? "border-primary bg-primary/30" : "border-muted-foreground/30"}`} />
            {opt}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Personalized Next-Step Guidance",
    title: "Know Exactly What to Study Next",
    desc: "Your performance dashboard highlights weak domains and recommends targeted study sessions. No more guessing what to review — your study plan adapts in real time.",
    mockup: (
      <div className="space-y-4">
        <div className="text-xs font-semibold text-foreground">Domain Performance</div>
        {[
          { domain: "Assessment & Diagnosis", pct: 82, color: "bg-primary" },
          { domain: "Treatment Planning", pct: 65, color: "bg-secondary" },
          { domain: "Counseling & Psychotherapy", pct: 74, color: "bg-primary" },
          { domain: "Professional Practice", pct: 91, color: "bg-primary" },
          { domain: "Crisis Intervention", pct: 58, color: "bg-destructive/70" },
        ].map(({ domain, pct, color }) => (
          <div key={domain}>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{domain}</span>
              <span>{pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted/40">
              <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs text-foreground">
          <span className="font-semibold text-primary">Recommended: </span>
          Focus on Crisis Intervention and Treatment Planning. We've queued 3 targeted simulations.
        </div>
      </div>
    ),
  },
];

const FeatureSpotlight = () => (
  <section className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Product Preview</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          See What's Coming
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A closer look at the study experience we're building.
        </p>
      </div>

      <div className="space-y-16">
        {spotlights.map(({ label, title, desc, mockup }, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="text-xs font-medium text-secondary uppercase tracking-wider">{label}</span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
            <div className={`card-elevated p-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              {mockup}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSpotlight;
