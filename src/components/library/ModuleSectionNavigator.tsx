import { Card, CardContent } from "@/components/ui/card";

type ModuleSectionNavigatorProps = {
  sections: Array<{
    id: string;
    label: string;
  }>;
};

const ModuleSectionNavigator = ({ sections }: ModuleSectionNavigatorProps) => {
  if (!sections.length) return null;

  return (
    <div className="space-y-2">
      <Card className="card-elevated">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-foreground">Jump to a section</p>
          <p className="mt-1 text-sm text-muted-foreground">Start with the overview, then open one section at a time.</p>
        </CardContent>
      </Card>

      <nav className="sticky top-4 z-10 overflow-x-auto rounded-lg border border-border bg-background/95 p-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <ul className="flex min-w-max gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block whitespace-nowrap rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ModuleSectionNavigator;