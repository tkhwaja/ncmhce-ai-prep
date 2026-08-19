import { Link } from "react-router-dom";
import { CalendarDays, Clock, MessageSquare, Shield, Users } from "lucide-react";

const previewPartners = [
  {
    name: "Amina R.",
    initials: "AR",
    track: "NCMHCE",
    when: "Testing next month",
    zone: "Eastern (ET)",
    blurb:
      "Doing one narrative a night and talking it out. Looking for someone to swap reasoning with after each case.",
    tags: ["Assessment & Diagnosis", "DSM-5-TR"],
  },
  {
    name: "Marissa L.",
    initials: "ML",
    track: "NCE",
    when: "Testing in 4 weeks",
    zone: "Eastern (ET)",
    blurb:
      "50 questions a night and reviewing every rationale. Would love a partner to compare misses with.",
    tags: ["Counseling Theories", "Test-taking Strategy"],
  },
  {
    name: "Derek M.",
    initials: "DM",
    track: "NCMHCE",
    when: "Testing in 2 months",
    zone: "Central (CT)",
    blurb:
      "Strong on treatment planning, weak on sequencing what to do first. Free most mornings before 9.",
    tags: ["Treatment Planning", "Case Conceptualization"],
  },
];

const CommunitySection = () => (
  <section id="community" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Community</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Find a study partner who is testing when you are
          </h2>
          <p className="mb-6 text-muted-foreground">
            Studying alone is where most people stall. Inside the platform you can list yourself in the
            study partner directory, filter by exam track, target exam month, time zone, and focus area,
            then message privately without handing out your personal contact details.
          </p>
          <ul className="mb-8 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                Browse members by track, exam month, availability, and the domains they want to drill.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                Built-in private messaging and small study groups — no email or phone number required.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                You control your listing, and every member can block or report at any time.
              </span>
            </li>
          </ul>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join and find a study partner
          </Link>
        </div>

        <div className="space-y-3">
          {previewPartners.map((p) => (
            <div key={p.name} className="card-elevated p-4 transition-all hover:border-primary/20">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{p.name}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
                      {p.track}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5">
                      <CalendarDays className="h-3 w-3" />
                      {p.when}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5">
                      <Clock className="h-3 w-3" />
                      {p.zone}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CommunitySection;
