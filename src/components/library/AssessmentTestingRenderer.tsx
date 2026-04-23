import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Lightbulb,
  Target,
  ListChecks,
  Search,
  Users,
  Brain,
  ShieldAlert,
  GaugeCircle,
  Compass,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Small presentational primitives                                    */
/* ------------------------------------------------------------------ */

const SectionTitle = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="rounded-lg bg-primary/10 p-2 text-primary">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

const Callout = ({
  variant,
  title,
  children,
}: {
  variant: "tip" | "warn" | "rule";
  title: string;
  children: React.ReactNode;
}) => {
  const map = {
    tip: { Icon: Lightbulb, cls: "border-primary/30 bg-primary/5 text-foreground", iconCls: "text-primary" },
    warn: { Icon: AlertTriangle, cls: "border-destructive/30 bg-destructive/5 text-foreground", iconCls: "text-destructive" },
    rule: { Icon: Target, cls: "border-accent bg-accent/30 text-foreground", iconCls: "text-foreground" },
  } as const;
  const { Icon, cls, iconCls } = map[variant];
  return (
    <div className={`rounded-lg border p-4 ${cls}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconCls}`} />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

const KVList = ({ items }: { items: { label: string; text: string }[] }) => (
  <dl className="space-y-3">
    {items.map((it, i) => (
      <div key={i} className="text-base">
        <dt className="font-semibold text-foreground">{it.label}</dt>
        <dd className="text-sm text-muted-foreground leading-relaxed">{it.text}</dd>
      </div>
    ))}
  </dl>
);

/* ------------------------------------------------------------------ */
/*  Tab: Overview                                                      */
/* ------------------------------------------------------------------ */

const OverviewTab = ({ data }: { data: any }) => {
  const intro = data.intro;
  const rules = data.coreDecisionRules ?? [];
  return (
    <div className="space-y-5">
      <SectionTitle icon={Compass} title="What this module covers" subtitle={intro.summary} />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-elevated">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Learning objectives</p>
            <ul className="mt-2 space-y-2">
              {intro.learningObjectives.map((o: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 text-primary">•</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">High-yield themes</p>
            <ul className="mt-2 space-y-2">
              {intro.highYieldThemes.map((t: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 text-primary">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Core decision rules</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {rules.map((r: any, i: number) => (
            <Card key={i} className="card-elevated">
              <CardContent className="p-4">
                <p className="text-sm font-semibold text-foreground">{r.rule}</p>
                <p className="mt-1 text-sm text-muted-foreground italic">e.g. {r.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Callout variant="rule" title="How to use the tabs above">
        Start with <strong>Overview</strong>, then jump to <strong>MSE</strong>, <strong>Instruments</strong>,{" "}
        <strong>Risk &amp; Safety</strong>, or <strong>Psychometrics</strong> based on what you need to study right now.
      </Callout>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Tab: MSE                                                           */
/* ------------------------------------------------------------------ */

const MseTab = ({ data }: { data: any }) => {
  const mse = data.mseDeepDive;
  const content: any[] = mse?.content ?? [];

  const domains = content.find((c) => c.type === "section_group" && c.title?.includes("Core Domains"))?.items ?? [];
  const compares = content.filter((c) => c.type === "compare_block");
  const pearls = content.find((c) => c.type === "clinical_pearls");
  const highYield = content.find((c) => c.type === "high_yield_points");
  const traps = content.find((c) => c.type === "common_traps");
  const quickRef = content.find((c) => c.type === "quick_reference_table");

  return (
    <div className="space-y-5">
      <SectionTitle
        icon={Brain}
        title="Mental Status Examination (MSE)"
        subtitle="A structured snapshot of current functioning. The MSE is not the MMSE — the MMSE is a brief cognitive screen."
      />

      {/* Compare blocks side by side */}
      {compares.length > 0 && (
        <div className="grid gap-3 md:grid-cols-2">
          {compares.map((c: any, i: number) => (
            <Card key={i} className="card-elevated">
              <CardContent className="p-4">
                <p className="text-sm font-semibold text-foreground">{c.title}</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                  {c.items.map((it: any, j: number) => (
                    <div key={j}>
                      <p className="font-medium text-foreground">{it.term}</p>
                      <p className="text-muted-foreground">{it.definition}</p>
                    </div>
                  ))}
                </div>
                {c.keyTakeaway && (
                  <p className="mt-3 rounded bg-muted px-3 py-2 text-xs text-foreground">{c.keyTakeaway}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* 11 domains as a clean grid */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">11 MSE domains</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d: any, i: number) => (
            <Card key={i} className="card-elevated">
              <CardContent className="space-y-2 p-4">
                <p className="text-base font-semibold text-foreground">{d.title}</p>
                {d.whatToAssess && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Assess:</span> {d.whatToAssess.join(", ")}
                  </p>
                )}
                {d.abnormalIndicators && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Watch for:</span> {d.abnormalIndicators.join(", ")}
                  </p>
                )}
                {d.examPearl && (
                  <p className="rounded bg-primary/5 px-2 py-1 text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Exam pearl: </span>
                    {d.examPearl}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pearls + High yield + Traps in a compact row */}
      <div className="grid gap-3 lg:grid-cols-3">
        {pearls && (
          <Callout variant="tip" title={pearls.title}>
            <ul className="space-y-1.5">
              {pearls.items.map((p: any, i: number) => (
                <li key={i}>
                  <span className="font-medium">{p.finding}</span> → {p.suggests}
                </li>
              ))}
            </ul>
          </Callout>
        )}
        {highYield && (
          <Callout variant="rule" title={highYield.title}>
            <ul className="list-disc space-y-1 pl-4">
              {highYield.items.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Callout>
        )}
        {traps && (
          <Callout variant="warn" title={traps.title}>
            <ul className="space-y-1.5">
              {traps.items.map((t: any, i: number) => (
                <li key={i}>
                  <span className="font-medium">{t.trap}:</span> {t.explanation}
                </li>
              ))}
            </ul>
          </Callout>
        )}
      </div>

      {/* Quick reference */}
      {quickRef && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{quickRef.title}</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  {quickRef.columns.map((c: string) => (
                    <th key={c} className="px-3 py-2 text-left font-semibold text-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quickRef.rows.map((row: string[], i: number) => (
                  <tr key={i} className="border-t border-border odd:bg-background even:bg-muted/30">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Tab: Instruments                                                   */
/* ------------------------------------------------------------------ */

type Instrument = {
  name: string;
  fullName?: string;
  ageRange?: string;
  format?: string;
  whatItMeasures?: string;
  examRelevance?: string;
};

type InstrumentCategory = {
  title: string;
  purpose?: string;
  examUse?: string;
  instruments: Instrument[];
};

const InstrumentsTab = ({ data }: { data: any }) => {
  const major = data.majorInstruments;
  const content: any[] = major?.content ?? [];

  const adultGroup = content.find(
    (c) => c.type === "section_group" && /Adult/i.test(c.title) && !/Child|Youth/i.test(c.title),
  );
  const youthGroup = content.find(
    (c) => c.type === "section_group" && /(Youth|Child)/i.test(c.title),
  );
  const flow = content.find((c) => c.type === "diagram");
  const highYield = content.find((c) => c.type === "high_yield_points");
  const traps = content.find((c) => c.type === "common_traps");

  const [tab, setTab] = useState<"adult" | "youth">("adult");
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const groups: Record<"adult" | "youth", InstrumentCategory[]> = {
    adult: adultGroup?.items ?? [],
    youth: youthGroup?.items ?? [],
  };

  const categories = groups[tab];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((cat) => activeCat === "all" || cat.title === activeCat)
      .map((cat) => ({
        ...cat,
        instruments: cat.instruments.filter((inst) => {
          if (!q) return true;
          return (
            inst.name.toLowerCase().includes(q) ||
            inst.fullName?.toLowerCase().includes(q) ||
            inst.whatItMeasures?.toLowerCase().includes(q) ||
            inst.examRelevance?.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((cat) => cat.instruments.length > 0);
  }, [categories, query, activeCat]);

  return (
    <div className="space-y-5">
      <SectionTitle
        icon={ListChecks}
        title="Major Instruments"
        subtitle="Pick the tool that best answers the clinical question. An instrument is a tool, not a diagnosis."
      />

      {/* Population toggle + search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="inline-flex rounded-lg border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => {
              setTab("adult");
              setActiveCat("all");
            }}
            className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === "adult" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Users className="h-4 w-4" /> Adult
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("youth");
              setActiveCat("all");
            }}
            className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === "youth" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Users className="h-4 w-4" /> Child &amp; Adolescent
          </button>
        </div>

        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by instrument name (PHQ-9, WAIS, BASC-3, …)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="-mx-1 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCat("all")}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            activeCat === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          All categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setActiveCat(cat.title)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              activeCat === cat.title
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            {cat.title.replace(/^(Adult|Youth)\s*[—-]\s*/i, "")}
          </button>
        ))}
      </div>

      {/* Categories + instruments */}
      <div className="space-y-6">
        {filtered.map((cat) => (
          <div key={cat.title}>
            <div className="mb-2">
              <p className="text-sm font-semibold text-foreground">
                {cat.title.replace(/^(Adult|Youth)\s*[—-]\s*/i, "")}
              </p>
              {cat.examUse && <p className="text-xs text-muted-foreground">{cat.examUse}</p>}
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {cat.instruments.map((inst) => (
                <Card key={inst.name + (inst.fullName ?? "")} className="card-elevated">
                  <CardContent className="space-y-1.5 p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">{inst.name}</p>
                      {inst.ageRange && (
                        <Badge variant="outline" className="shrink-0 text-[10px]">
                          {inst.ageRange}
                        </Badge>
                      )}
                    </div>
                    {inst.fullName && <p className="text-xs italic text-muted-foreground">{inst.fullName}</p>}
                    {inst.format && (
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Format: </span>
                        {inst.format}
                      </p>
                    )}
                    {inst.whatItMeasures && (
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Measures: </span>
                        {inst.whatItMeasures}
                      </p>
                    )}
                    {inst.examRelevance && (
                      <p className="rounded bg-primary/5 px-2 py-1 text-xs text-foreground">
                        <span className="font-semibold text-primary">Exam: </span>
                        {inst.examRelevance}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">
            No instruments match your search in this population.
          </p>
        )}
      </div>

      {/* Flow + rules + traps */}
      <div className="grid gap-3 lg:grid-cols-3">
        {flow && (
          <Callout variant="tip" title={flow.title}>
            <ol className="list-decimal space-y-1 pl-4">
              {flow.content.map((line: string, i: number) => (
                <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ol>
          </Callout>
        )}
        {highYield && (
          <Callout variant="rule" title={highYield.title}>
            <ul className="list-disc space-y-1 pl-4">
              {highYield.items.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Callout>
        )}
        {traps && (
          <Callout variant="warn" title={traps.title}>
            <ul className="space-y-1.5">
              {traps.items.map((t: any, i: number) => (
                <li key={i}>
                  <span className="font-medium">{t.trap}:</span> {t.explanation}
                </li>
              ))}
            </ul>
          </Callout>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Tab: Risk & Safety                                                 */
/* ------------------------------------------------------------------ */

const RiskTab = ({ data }: { data: any }) => {
  const risk = data.riskAssessmentSection;
  const content: any[] = risk?.content ?? [];

  const domains = content.find((c) => c.type === "section_group" && /What Risk Assessment/i.test(c.title))?.items ?? [];
  const ladder = content.find((c) => c.type === "diagram");
  const passiveActive = content.find((c) => c.type === "compare_block");
  const amplifiers = content.find(
    (c) => c.type === "section_group" && /Amplifiers/i.test(c.title),
  )?.items ?? [];
  const examMoves = content.find(
    (c) => c.type === "section_group" && /Best Exam Answers/i.test(c.title),
  )?.items ?? [];
  const highYield = content.find((c) => c.type === "high_yield_points");
  const traps = content.find((c) => c.type === "common_traps");
  const quickRef = content.find((c) => c.type === "quick_reference_table");
  const loc = data.levelOfCareSection;

  return (
    <div className="space-y-5">
      <SectionTitle
        icon={ShieldAlert}
        title="Risk Assessment & Level of Care"
        subtitle="Safety before comfort. Safety before diagnosis. Safety before routine counseling."
      />

      {/* 5 risk domains */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {domains.map((d: any, i: number) => (
          <Card key={i} className="card-elevated">
            <CardContent className="space-y-2 p-4">
              <p className="text-sm font-semibold text-foreground">{d.title}</p>
              {d.mustAssess && (
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Must assess: </span>
                  {d.mustAssess.join(", ")}
                </p>
              )}
              {d.examPearl && (
                <p className="rounded bg-primary/5 px-2 py-1 text-xs text-foreground">
                  <span className="font-semibold text-primary">Exam pearl: </span>
                  {d.examPearl}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ladder + Passive vs Active */}
      <div className="grid gap-3 lg:grid-cols-2">
        {ladder && (
          <Callout variant="tip" title={ladder.title}>
            <ol className="list-decimal space-y-1 pl-4">
              {ladder.content.map((line: string, i: number) => (
                <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ol>
          </Callout>
        )}
        {passiveActive && (
          <Card className="card-elevated">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-foreground">{passiveActive.title}</p>
              <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                {passiveActive.items.map((it: any, j: number) => (
                  <div key={j}>
                    <p className="font-medium text-foreground">{it.term}</p>
                    <p className="text-muted-foreground">{it.definition}</p>
                  </div>
                ))}
              </div>
              {passiveActive.keyTakeaway && (
                <p className="mt-3 rounded bg-muted px-3 py-2 text-xs text-foreground">{passiveActive.keyTakeaway}</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Amplifiers vs Protective */}
      <div className="grid gap-3 md:grid-cols-2">
        {amplifiers.map((a: any, i: number) => (
          <Card key={i} className="card-elevated">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-foreground">{a.title}</p>
              <ul className="mt-2 grid grid-cols-1 gap-1 text-xs text-muted-foreground sm:grid-cols-2">
                {a.points.map((p: string, j: number) => (
                  <li key={j} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Exam moves + High yield + Traps */}
      <div className="grid gap-3 lg:grid-cols-3">
        <Card className="card-elevated lg:col-span-1">
          <CardContent className="space-y-3 p-4">
            <p className="text-sm font-semibold text-foreground">What strong exam answers look like</p>
            {examMoves.map((m: any, i: number) => (
              <div key={i}>
                <p className="text-xs font-medium text-foreground">{m.title}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-muted-foreground">
                  {m.guidance.map((g: string, j: number) => (
                    <li key={j}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
        {highYield && (
          <Callout variant="rule" title={highYield.title}>
            <ul className="list-disc space-y-1 pl-4">
              {highYield.items.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Callout>
        )}
        {traps && (
          <Callout variant="warn" title={traps.title}>
            <ul className="space-y-1.5">
              {traps.items.map((t: any, i: number) => (
                <li key={i}>
                  <span className="font-medium">{t.trap}:</span> {t.explanation}
                </li>
              ))}
            </ul>
          </Callout>
        )}
      </div>

      {/* Quick reference */}
      {quickRef && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{quickRef.title}</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  {quickRef.columns.map((c: string) => (
                    <th key={c} className="px-3 py-2 text-left font-semibold text-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quickRef.rows.map((row: string[], i: number) => (
                  <tr key={i} className="border-t border-border odd:bg-background even:bg-muted/30">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Level of care */}
      {loc && (
        <div className="space-y-4">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Level of Care Continuum
          </h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {loc.levels.map((lv: any, i: number) => (
              <Card key={i} className="card-elevated">
                <CardContent className="space-y-1.5 p-4">
                  <p className="text-sm font-semibold text-foreground">{lv.level}</p>
                  <p className="text-xs text-muted-foreground">{lv.description}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Best fit: </span>
                    {lv.bestFit.join("; ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {loc.examPearls && (
            <div className="pt-2">
              <Callout variant="tip" title="Level-of-care exam pearls">
                <ul className="list-disc space-y-1 pl-4">
                  {loc.examPearls.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </Callout>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Tab: Psychometrics + Choosing                                      */
/* ------------------------------------------------------------------ */

const PsychometricsTab = ({ data }: { data: any }) => {
  const psy = data.psychometrics;
  const content: any[] = psy?.content ?? [];

  const termCards = content.find((c) => c.type === "term_cards");
  const reliabilityTypes = content.find(
    (c) => c.type === "section_group" && /Reliability/i.test(c.title),
  )?.items ?? [];
  const validityIdeas = content.find(
    (c) => c.type === "section_group" && /Validity/i.test(c.title),
  )?.items ?? [];
  const judgeFlow = content.find((c) => c.type === "diagram");
  const highYield = content.find((c) => c.type === "high_yield_points");
  const traps = content.find((c) => c.type === "common_traps");
  const quickRef = content.find((c) => c.type === "quick_reference_table");

  // Selection guide
  const sel = data.assessmentSelectionGuide;
  const selContent: any[] = sel?.content ?? [];
  const framework = selContent.find((c) => c.type === "decision_framework");
  const selLadder = selContent.find((c) => c.type === "diagram");
  const selPatterns = selContent.find(
    (c) => c.type === "section_group" && /Patterns/i.test(c.title),
  )?.items ?? [];
  const selRef = selContent.find((c) => c.type === "quick_reference_table");

  return (
    <div className="space-y-8">
      {/* Psychometrics */}
      <div className="space-y-4">
        <SectionTitle
          icon={GaugeCircle}
          title="Psychometrics"
          subtitle="Reliability = consistency of scores. Validity = evidence that scores support the interpretation you want to make."
        />

        {termCards && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {termCards.cards.map((c: any, i: number) => (
              <Card key={i} className="card-elevated">
                <CardContent className="space-y-1 p-4">
                  <p className="text-sm font-semibold text-foreground">{c.term}</p>
                  <p className="text-xs text-muted-foreground">{c.meaning}</p>
                  {c.examPearl && (
                    <p className="rounded bg-primary/5 px-2 py-1 text-xs text-foreground">
                      <span className="font-semibold text-primary">Pearl: </span>
                      {c.examPearl}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          <Card className="card-elevated">
            <CardContent className="space-y-3 p-4">
              <p className="text-base font-semibold text-foreground">Reliability types</p>
              <KVList
                items={reliabilityTypes.map((r: any) => ({
                  label: r.title.replace(/^\d+\.\s*/, ""),
                  text: r.definition,
                }))}
              />
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="space-y-3 p-4">
              <p className="text-base font-semibold text-foreground">Validity ideas</p>
              <KVList
                items={validityIdeas.map((r: any) => ({
                  label: r.title.replace(/^\d+\.\s*/, ""),
                  text: r.definition,
                }))}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {judgeFlow && (
            <Callout variant="tip" title={judgeFlow.title}>
              <ol className="list-decimal space-y-1 pl-4">
                {judgeFlow.content.map((line: string, i: number) => (
                  <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>
                ))}
              </ol>
            </Callout>
          )}
          {highYield && (
            <Callout variant="rule" title={highYield.title}>
              <ul className="list-disc space-y-1 pl-4">
                {highYield.items.map((p: string, i: number) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Callout>
          )}
          {traps && (
            <Callout variant="warn" title={traps.title}>
              <ul className="space-y-1.5">
                {traps.items.map((t: any, i: number) => (
                  <li key={i}>
                    <span className="font-medium">{t.trap}:</span> {t.explanation}
                  </li>
                ))}
              </ul>
            </Callout>
          )}
        </div>

        {quickRef && (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  {quickRef.columns.map((c: string) => (
                    <th key={c} className="px-3 py-2 text-left font-semibold text-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quickRef.rows.map((row: string[], i: number) => (
                  <tr key={i} className="border-t border-border odd:bg-background even:bg-muted/30">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Choosing the right assessment */}
      <div className="space-y-4">
        <SectionTitle
          icon={Compass}
          title="How to Choose the Right Assessment on the Exam"
          subtitle="The best answer is usually the one that fills the most important gap right now."
        />

        {framework && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {framework.steps.map((s: any) => (
              <Card key={s.step} className="card-elevated">
                <CardContent className="space-y-1 p-4">
                  <Badge className="mb-1 bg-primary text-primary-foreground">Step {s.step}</Badge>
                  <p className="text-sm font-semibold text-foreground">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid gap-3 lg:grid-cols-2">
          {selLadder && (
            <Callout variant="tip" title={selLadder.title}>
              <ol className="list-decimal space-y-1 pl-4">
                {selLadder.content.map((line: string, i: number) => (
                  <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>
                ))}
              </ol>
            </Callout>
          )}
          {selPatterns.length > 0 && (
            <Card className="card-elevated">
              <CardContent className="space-y-2 p-4">
                <p className="text-sm font-semibold text-foreground">Common case patterns</p>
                {selPatterns.map((p: any, i: number) => (
                  <div key={i} className="text-xs">
                    <p className="font-medium text-foreground">{p.title}</p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">Best move: </span>
                      {p.bestMove}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {selRef && (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  {selRef.columns.map((c: string) => (
                    <th key={c} className="px-3 py-2 text-left font-semibold text-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selRef.rows.map((row: string[], i: number) => (
                  <tr key={i} className="border-t border-border odd:bg-background even:bg-muted/30">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

const AssessmentTestingRenderer = ({ data }: { data: any }) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
        <TabsTrigger value="overview" className="py-2">Overview</TabsTrigger>
        <TabsTrigger value="mse" className="py-2">MSE</TabsTrigger>
        <TabsTrigger value="instruments" className="py-2">Instruments</TabsTrigger>
        <TabsTrigger value="risk" className="py-2">Risk &amp; Safety</TabsTrigger>
        <TabsTrigger value="psychometrics" className="py-2">Psychometrics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6">
        <OverviewTab data={data} />
      </TabsContent>
      <TabsContent value="mse" className="mt-6">
        <MseTab data={data} />
      </TabsContent>
      <TabsContent value="instruments" className="mt-6">
        <InstrumentsTab data={data} />
      </TabsContent>
      <TabsContent value="risk" className="mt-6">
        <RiskTab data={data} />
      </TabsContent>
      <TabsContent value="psychometrics" className="mt-6">
        <PsychometricsTab data={data} />
      </TabsContent>
    </Tabs>
  );
};

export default AssessmentTestingRenderer;
