const spotlights = [
  {
    label: "In-Session Support",
    title: "Get help without breaking exam momentum",
    desc: "When you want clarification, you can ask follow-up questions and get grounded explanations right inside the case you’re working through.",
    mockup: (
      <div className="space-y-3">
        <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm text-foreground/80">
          Can you explain why Major Depressive Disorder was ruled out in this case?
        </div>
        <div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground leading-relaxed">
          Great question. While the client reports depressed mood, the duration and pattern of symptoms are more consistent with an Adjustment Disorder. The onset followed a clear psychosocial stressor within the last three months, and the symptoms don't meet the minimum two-week duration criteria for MDD under DSM-5-TR...
        </div>
        <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm text-foreground/80">
          What if the symptoms persist beyond six months?
        </div>
      </div>
    ),
  },
  {
    label: "Clinical Case Narratives",
    title: "20+ realistic cases, with new narratives added weekly",
    desc: "Practice across anxiety, mood, trauma, personality, substance use, OCD-spectrum, grief, and more. Every case uses the same three-session structure and question flow the real exam expects.",
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-semibold text-primary">Section 2 of 3 — Fourth Session</span>
          <span>Q6 of 14</span>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-sm text-muted-foreground">
          After April accidentally discarded the recipe cards, Claudette became panicked and accused her of violating her trust...
        </div>
        <div className="text-xs font-semibold text-foreground mt-3 mb-2">What is the most useful immediate clinical focus?</div>
        {["Tell Claudette that one mistake should not matter", "Validate the sense of rupture and help identify conditions for safe future help", "Encourage her to stop involving family", "Advise April to take over the cleanup"].map((opt, i) => (
          <div key={i} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs cursor-pointer transition-all ${i === 1 ? "border-primary/40 bg-primary/5 text-foreground" : "border-border/50 bg-muted/20 text-muted-foreground hover:border-border"}`}>
            <div className={`w-3.5 h-3.5 rounded border ${i === 1 ? "border-primary bg-primary/30" : "border-muted-foreground/30"}`} />
            {opt}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Study Tools and Analytics",
    title: "See exactly where your reasoning breaks down",
    desc: "Your performance dashboard highlights all five domains so you can spot the difference between a content problem, a pacing problem, and a clinical judgment problem.",
    mockup: (
      <div className="space-y-4">
        <div className="text-xs font-semibold text-foreground">Domain Performance</div>
        {[
          { domain: "Intake/Assessment/Diagnosis", pct: 82, color: "bg-primary" },
          { domain: "Treatment Planning", pct: 65, color: "bg-secondary" },
          { domain: "Counseling Skills & Interventions", pct: 74, color: "bg-primary" },
          { domain: "Professional Practice & Ethics", pct: 91, color: "bg-primary" },
          { domain: "Core Counseling Attributes", pct: 58, color: "bg-destructive/70" },
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
          Focus on Core Counseling Attributes and Treatment Planning. Review narratives 3, 8, and 14.
        </div>
      </div>
    ),
  },
];

const FeatureSpotlight = () => (
  <section className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Inside the Platform</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          A closer look at the study experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything is built to feel familiar on exam day.
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
