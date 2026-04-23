import { useState, useMemo, useEffect } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { libraryModules, LibraryModule, LibraryCategory, categoryOrder } from "@/data/library-modules";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, BookOpen, Sparkles, ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart } from "lucide-react";
import ModuleRenderer from "@/components/library/ModuleRenderer";
import ExamOverviewRenderer from "@/components/library/ExamOverviewRenderer";
import GlossaryView from "@/components/library/GlossaryView";
import type { AppLayoutOutletContext } from "@/components/app/AppLayout";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart,
};

/* ================================================================== */
/*  Module Detail View                                                 */
/* ================================================================== */

const LibraryModuleDetail = ({ module, onBack }: { module: LibraryModule; onBack: () => void }) => {
  const isGlossary = module.moduleType === "glossary";
  const hasStructuredData = !!module.data;
  const { openChatWithPrompt } = useOutletContext<AppLayoutOutletContext>();

  const handleQuizClick = () => {
    openChatWithPrompt(`Quiz me on the ${module.title} module. Create 5 NCMHCE-style multiple choice questions based on the exact material in this section, ask them one at a time, wait for my answer after each, then explain why the correct answer is right.`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
      </Button>
      <div>
        <h1 className="text-2xl font-bold text-foreground">{module.title}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary">{module.category}</Badge>
          {module.tags.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
          ))}
        </div>
      </div>

      {isGlossary && module.data?.terms ? (
        <GlossaryView terms={module.data.terms} />
      ) : module.id === "exam-overview-and-blueprint" && module.data ? (
        <ExamOverviewRenderer data={module.data} />
      ) : hasStructuredData ? (
        <ModuleRenderer data={module.data} />
      ) : (
        <>
          {/* Key concepts */}
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

          {/* Legacy content */}
          {module.content && (
            <Card className="card-elevated">
              <CardContent className="p-6 prose prose-sm max-w-none">
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
          )}
        </>
      )}

      {!isGlossary && (
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleQuizClick}>
            <Sparkles className="mr-2 h-4 w-4" /> Quiz Me on This
          </Button>
        </div>
      )}
    </div>
  );
};

/* ================================================================== */
/*  Library Index                                                      */
/* ================================================================== */

const Library = () => {
  const [selectedModule, setSelectedModule] = useState<LibraryModule | null>(null);
  const location = useLocation();
  const [search, setSearch] = useState("");

  // Reset to library index whenever the user re-navigates to /library
  // (e.g. clicking "Learning Library" in the sidebar while viewing a module)
  useEffect(() => {
    setSelectedModule(null);
  }, [location.key]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sort, setSort] = useState<"default" | "az" | "za">("default");

  const filtered = useMemo(() => {
    let result = libraryModules;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.keyConcepts.some((c) => c.toLowerCase().includes(q)) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (categoryFilter !== "all") {
      result = result.filter((m) => m.category === categoryFilter);
    }

    if (sort === "az") result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") result = [...result].sort((a, b) => b.title.localeCompare(a.title));

    return result;
  }, [search, categoryFilter, sort]);

  // Group by category
  const grouped = useMemo(() => {
    const map: Record<string, LibraryModule[]> = {};
    filtered.forEach((m) => {
      if (!map[m.category]) map[m.category] = [];
      map[m.category].push(m);
    });
    return categoryOrder
      .filter((c) => map[c]?.length)
      .map((c) => ({ category: c, modules: map[c] }));
  }, [filtered]);

  if (selectedModule) {
    return <LibraryModuleDetail module={selectedModule} onBack={() => setSelectedModule(null)} />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Learning Library</h1>
        <p className="text-muted-foreground">Study materials organized by NCMHCE exam domain</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search modules, concepts, or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categoryOrder.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(v) => setSort(v as any)}>
          <SelectTrigger className="w-full sm:w-36">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="az">A → Z</SelectItem>
            <SelectItem value="za">Z → A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Module cards grouped by category */}
      {grouped.map(({ category, modules }) => (
        <div key={category}>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">{category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {modules.map((mod) => {
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
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground leading-tight">{mod.title}</h3>
                        <Badge variant="secondary" className="mt-1 text-xs">{mod.keyConcepts.length} concepts</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{mod.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {mod.tags.slice(0, 3).map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No modules match your search.</p>
      )}
    </div>
  );
};

export default Library;
