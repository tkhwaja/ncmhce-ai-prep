import { useState, useMemo, useEffect, useRef } from "react";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { LibraryModule, LibraryCategory } from "@/data/library-modules";
import type { NCELibraryModule } from "@/data/nce/types";
import { getActiveLibraryModules, getActiveCategoryOrder } from "@/lib/exam-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, BookOpen, Sparkles, ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart, Bookmark } from "lucide-react";
import ModuleRenderer from "@/components/library/ModuleRenderer";
import ExamOverviewRenderer from "@/components/library/ExamOverviewRenderer";
import AssessmentTestingRenderer from "@/components/library/AssessmentTestingRenderer";
import GlossaryView from "@/components/library/GlossaryView";
import { ExamLikelihoodBadge } from "@/components/library/ExamLikelihoodBadge";
import { useBookmark } from "@/hooks/useBookmark";
import { InlineBackToTop, FloatingBackToTop } from "@/components/library/BackToTopButton";
import type { AppLayoutOutletContext } from "@/components/app/AppLayout";

type AnyLibraryModule = LibraryModule | NCELibraryModule;

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck, FileText, Lightbulb, Scale, AlertTriangle, Heart,
};

/* ================================================================== */
/*  Module Detail View                                                 */
/* ================================================================== */

const LibraryModuleDetail = ({ module, onBack, trackLabel }: { module: AnyLibraryModule; onBack: () => void; trackLabel: string }) => {
  const isGlossary = module.moduleType === "glossary";
  const hasStructuredData = !!module.data;
  const { openChatWithPrompt } = useOutletContext<AppLayoutOutletContext>();

  const handleQuizClick = () => {
    openChatWithPrompt(`Quiz me on the ${module.title} module. Create 5 ${trackLabel}-style multiple choice questions based on the exact material in this section, ask them one at a time, wait for my answer after each, then explain why the correct answer is right.`);
  };

  const { bookmarkedId } = useBookmark(module.id);

  const scrollToBookmark = () => {
    if (!bookmarkedId) return;
    const el = document.getElementById(bookmarkedId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // On mount: if a bookmark exists, jump to it after layout settles.
  useEffect(() => {
    if (!bookmarkedId) return;
    const t = setTimeout(() => {
      const el = document.getElementById(bookmarkedId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-2">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
      </Button>
      <div>
        <h1 className="text-2xl font-bold text-foreground">{module.title}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary">{module.category}</Badge>
          <ExamLikelihoodBadge topic={module.title} context={module.category} />
          {module.tags.slice(0, 4).map((t) => (
            <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
          ))}
        </div>
      </div>

      {bookmarkedId && (
        <button
          type="button"
          onClick={scrollToBookmark}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-foreground hover:bg-primary/10 transition-colors"
        >
          <Bookmark className="h-4 w-4 text-primary fill-primary/30" />
          <span>Resume where you left off</span>
        </button>
      )}

      {isGlossary && module.data?.terms ? (
        <GlossaryView terms={module.data.terms} />
      ) : module.id === "exam-overview-and-blueprint" && module.data ? (
        <ExamOverviewRenderer data={module.data} />
      ) : module.id === "assessment-and-testing" && module.data ? (
        <AssessmentTestingRenderer data={module.data} />
      ) : hasStructuredData ? (
        <ModuleRenderer data={module.data} moduleId={module.id} />
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

      <div className="flex flex-wrap gap-3 pt-2 border-t border-border mt-4 pt-6">
        {!isGlossary && (
          <Button variant="outline" onClick={handleQuizClick}>
            <Sparkles className="mr-2 h-4 w-4" /> Quiz Me on This
          </Button>
        )}
        <InlineBackToTop />
      </div>

      <FloatingBackToTop />
    </div>
  );
};

/* ================================================================== */
/*  Library Index                                                      */
/* ================================================================== */

const Library = () => {
  const { track, config } = useExamTrack();
  const libraryModules = getActiveLibraryModules(track);
  const categoryOrder = getActiveCategoryOrder(track);
  const [selectedModule, setSelectedModule] = useState<AnyLibraryModule | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const previousPathname = useRef(location.pathname);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const moduleId = new URLSearchParams(location.search).get("module");
    if (!moduleId) return;
    const module = libraryModules.find((item) => item.id === moduleId);
    if (module) setSelectedModule(module);
  }, [location.search, libraryModules]);

  // Reset to library index only on real /library re-navigation, not direct module links.
  useEffect(() => {
    const hasModuleLink = new URLSearchParams(location.search).has("module");
    if (location.pathname === previousPathname.current && !location.hash && !hasModuleLink) {
      setSelectedModule(null);
    }
    previousPathname.current = location.pathname;
  }, [location.key, location.pathname, location.hash, location.search]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sort, setSort] = useState<"default" | "az" | "za">("default");

  const filtered = useMemo(() => {
    let result = libraryModules;

    if (search) {
      const q = search.toLowerCase();

      // Recursively collect every string value inside any nested object/array.
      const deepStringMatch = (value: unknown): boolean => {
        if (value == null) return false;
        if (typeof value === "string") return value.toLowerCase().includes(q);
        if (typeof value === "number" || typeof value === "boolean") {
          return String(value).toLowerCase().includes(q);
        }
        if (Array.isArray(value)) return value.some(deepStringMatch);
        if (typeof value === "object") {
          return Object.values(value as Record<string, unknown>).some(deepStringMatch);
        }
        return false;
      };

      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.keyConcepts.some((c) => c.toLowerCase().includes(q)) ||
          m.tags.some((t) => t.toLowerCase().includes(q)) ||
          (m.content ? m.content.toLowerCase().includes(q) : false) ||
          (m.data ? deepStringMatch(m.data) : false),
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
    return <LibraryModuleDetail module={selectedModule} onBack={() => { setSelectedModule(null); navigate("/library"); }} trackLabel={config.label} />;
  }

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Learning Library</h1>
        <p className="text-muted-foreground">Study materials organized by {config.label} exam domain</p>
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
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          <Badge variant="secondary" className="text-xs">{mod.keyConcepts.length} concepts</Badge>
                          <ExamLikelihoodBadge topic={mod.title} context={mod.category} compact />
                        </div>
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
