import { useState } from "react";
import { libraryModules, LibraryModule } from "@/data/library-modules";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart, Video, Sparkles, Layers } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart,
};

const LibraryModuleDetail = ({ module, onBack }: { module: LibraryModule; onBack: () => void }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
      </Button>
      <h1 className="text-2xl font-bold text-foreground">{module.title}</h1>
      <p className="text-muted-foreground">{module.description}</p>

      {module.videoPlaceholder && (
        <Card className="card-elevated border-dashed">
          <CardContent className="p-8 flex flex-col items-center justify-center text-center">
            <Video className="h-12 w-12 text-muted-foreground mb-3" />
            <p className="font-medium text-foreground">Video Content</p>
            <Badge variant="secondary" className="mt-2">Coming Soon</Badge>
          </CardContent>
        </Card>
      )}

      <Card className="card-elevated">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Key Concepts</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {module.keyConcepts.map((concept, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span> {concept}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="card-elevated">
        <CardContent className="p-6 prose prose-invert prose-sm max-w-none">
          {module.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="text-lg font-semibold text-foreground mt-6 mb-2">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return <h3 key={i} className="text-base font-semibold text-foreground mt-4 mb-1">{paragraph.replace(/\*\*/g, "")}</h3>;
            }
            if (paragraph.startsWith("**")) {
              return <p key={i} className="text-sm text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
            }
            return <p key={i} className="text-sm text-muted-foreground mb-3">{paragraph}</p>;
          })}
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" /> Quiz Me on This
        </Button>
        <Button variant="outline">
          <Layers className="mr-2 h-4 w-4" /> Generate Flashcards
        </Button>
      </div>
    </div>
  );
};

const Library = () => {
  const [selectedModule, setSelectedModule] = useState<LibraryModule | null>(null);

  if (selectedModule) {
    return <LibraryModuleDetail module={selectedModule} onBack={() => setSelectedModule(null)} />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Learning Library</h1>
        <p className="text-muted-foreground">Study materials organized by NCMHCE exam domain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {libraryModules.map((mod) => {
          const Icon = iconMap[mod.icon] || FileText;
          return (
            <Card
              key={mod.id}
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all"
              onClick={() => setSelectedModule(mod)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{mod.title}</h3>
                    <Badge variant="secondary" className="mt-1 text-xs">{mod.keyConcepts.length} concepts</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{mod.description}</p>
                {mod.videoPlaceholder && (
                  <Badge variant="outline" className="mt-3 text-xs">
                    <Video className="mr-1 h-3 w-3" /> Video coming soon
                  </Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
