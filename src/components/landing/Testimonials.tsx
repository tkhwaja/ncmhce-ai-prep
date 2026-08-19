import { NCE_ENABLED } from "@/config/exam-tracks";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jordan K.",
    role: "LMHC Candidate",
    quote:
      "Honestly, I think it's absolutely perfect and I wouldn't change anything. A no-brainer for anyone studying for the NCMHCE.",
  },
  {
    name: "Marcus T.",
    role: "Pre-Licensed Counselor",
    quote:
      "Never thought I'd say this but — one and done. Walked out of the NCMHCE knowing I had it.",
  },
  {
    name: "Aisha R.",
    role: "Counseling Graduate",
    quote:
      "The narratives feel exactly like the real exam. The rationales taught me how to think clinically instead of just memorizing answers.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-muted/10">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          What students are saying
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by counselors preparing for the {NCE_ENABLED ? "NCMHCE & NCE" : "NCMHCE"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real feedback from students and pre-licensed counselors using The Exam Path to study smarter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Quote className="absolute top-4 right-4 h-5 w-5 text-primary/20" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-5">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
