import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type StudyAid = {
  type: "comparisonTable" | "timeline" | "comparisonGrid" | "systemMap" | "bandMap";
  title: string;
  description?: string;
  columns?: string[];
  rows?: string[][];
  items?: Array<Record<string, string | string[]>>;
  layers?: Array<Record<string, string | string[]>>;
  bands?: Array<Record<string, string | string[]>>;
};

const labelMap: Record<string, string> = {
  ageBand: "Age Band",
  title: "Title",
  focus: "Core Focus",
  expected: "Expected",
  risks: "When It Goes Off Track",
  counselorMoves: "Counselor Focus",
  howTheyThink: "How They Think",
  whatHelps: "What Helps",
  watchFor: "Watch For",
  style: "Style",
  childhoodPattern: "In Children",
  adultPattern: "In Adults",
  interventionFocus: "Helpful Counseling Focus",
  name: "Layer",
  meaning: "Meaning",
  caseExample: "Typical Case Example",
  band: "Age Range",
  concerning: "Concerning Signs",
  clinicalMove: "Clinical Move",
};

const formatLabel = (key: string) =>
  labelMap[key] ?? key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();

const renderValue = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1">
        {value.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-primary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-sm leading-relaxed text-muted-foreground">{value}</p>;
};

const StudyAidShell = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <section className="space-y-3 rounded-lg border border-border bg-card p-4 shadow-sm">
    <div className="space-y-1">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </div>
    {children}
  </section>
);

const ComparisonTableAid = ({ aid }: { aid: StudyAid }) => (
  <StudyAidShell title={aid.title} description={aid.description}>
    <Table>
      <TableHeader>
        <TableRow>
          {aid.columns?.map((column) => (
            <TableHead key={column} className="min-w-40">{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {aid.rows?.map((row, index) => (
          <TableRow key={`${aid.title}-${index}`}>
            {row.map((cell, cellIndex) => (
              <TableCell key={`${aid.title}-${index}-${cellIndex}`} className="align-top text-sm text-muted-foreground">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </StudyAidShell>
);

const TimelineAid = ({ aid }: { aid: StudyAid }) => (
  <StudyAidShell title={aid.title} description={aid.description}>
    <div className="space-y-3">
      {aid.items?.map((item, index) => (
        <div key={`${aid.title}-${index}`} className="grid gap-3 rounded-lg border border-border/80 bg-background p-4 md:grid-cols-[140px_1fr]">
          <div className="space-y-2">
            {item.ageBand ? <Badge variant="secondary" className="w-fit">{String(item.ageBand)}</Badge> : null}
            {item.title ? <p className="text-sm font-semibold text-foreground">{String(item.title)}</p> : null}
          </div>
          <div className="space-y-3 border-l border-border/70 pl-4">
            {Object.entries(item)
              .filter(([key]) => !["ageBand", "title"].includes(key))
              .map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{formatLabel(key)}</p>
                  {renderValue(value as string | string[])}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </StudyAidShell>
);

const ComparisonGridAid = ({ aid }: { aid: StudyAid }) => (
  <StudyAidShell title={aid.title} description={aid.description}>
    <div className="grid gap-4 md:grid-cols-2">
      {aid.items?.map((item, index) => (
        <Card key={`${aid.title}-${index}`} className="border-border/80 bg-background">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{String(item.title ?? item.style ?? `Item ${index + 1}`)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(item)
              .filter(([key]) => !["title", "style"].includes(key))
              .map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{formatLabel(key)}</p>
                  {renderValue(value as string | string[])}
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </StudyAidShell>
);

const SystemMapAid = ({ aid }: { aid: StudyAid }) => (
  <StudyAidShell title={aid.title} description={aid.description}>
    <div className="space-y-3">
      {aid.layers?.map((layer, index) => (
        <div key={`${aid.title}-${index}`} className="rounded-lg border border-border/80 bg-background p-4">
          <div className="mb-3 flex items-center gap-3">
            <Badge variant="outline">Layer {index + 1}</Badge>
            <h4 className="text-sm font-semibold text-foreground">{String(layer.name ?? layer.title ?? `Layer ${index + 1}`)}</h4>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {Object.entries(layer)
              .filter(([key]) => !["name", "title"].includes(key))
              .map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{formatLabel(key)}</p>
                  {renderValue(value as string | string[])}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </StudyAidShell>
);

const BandMapAid = ({ aid }: { aid: StudyAid }) => (
  <StudyAidShell title={aid.title} description={aid.description}>
    <div className="grid gap-4 lg:grid-cols-2">
      {aid.bands?.map((band, index) => (
        <Card key={`${aid.title}-${index}`} className="border-border/80 bg-background">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{String(band.band ?? band.title ?? `Band ${index + 1}`)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(band)
              .filter(([key]) => !["band", "title"].includes(key))
              .map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{formatLabel(key)}</p>
                  {renderValue(value as string | string[])}
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </StudyAidShell>
);

export const StudyVisuals = ({ aids }: { aids?: StudyAid[] }) => {
  if (!aids?.length) return null;

  return (
    <div className="space-y-4">
      {aids.map((aid) => {
        switch (aid.type) {
          case "comparisonTable":
            return <ComparisonTableAid key={aid.title} aid={aid} />;
          case "timeline":
            return <TimelineAid key={aid.title} aid={aid} />;
          case "comparisonGrid":
            return <ComparisonGridAid key={aid.title} aid={aid} />;
          case "systemMap":
            return <SystemMapAid key={aid.title} aid={aid} />;
          case "bandMap":
            return <BandMapAid key={aid.title} aid={aid} />;
          default:
            return null;
        }
      })}
    </div>
  );
};