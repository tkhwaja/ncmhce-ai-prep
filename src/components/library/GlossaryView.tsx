import { useState, useMemo, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  letter: string;
  definition: string;
  examRelevance: string;
  relatedTerms?: string[];
  tags?: string[];
}

interface GlossaryViewProps {
  terms: GlossaryTerm[];
}

const GlossaryView = ({ terms }: GlossaryViewProps) => {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToResults = () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const allLetters = useMemo(() => {
    const letters = new Set(terms.map((t) => t.letter));
    return Array.from(letters).sort();
  }, [terms]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    terms.forEach((t) => t.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [terms]);

  const filtered = useMemo(() => {
    let result = terms;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.examRelevance.toLowerCase().includes(q)
      );
    }
    if (activeLetter) {
      result = result.filter((t) => t.letter === activeLetter);
    }
    if (activeTag) {
      result = result.filter((t) => t.tags?.includes(activeTag));
    }
    return result;
  }, [terms, search, activeLetter, activeTag]);

  // Group by letter
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((t) => {
      if (!map[t.letter]) map[t.letter] = [];
      map[t.letter].push(t);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div ref={topRef} className="space-y-4 scroll-mt-24">
      <div className="sticky top-3 z-20 space-y-3 rounded-lg border border-border bg-background/95 p-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon" onClick={scrollToResults} aria-label="Scroll to glossary results">
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Alphabet nav */}
        <div className="-mx-1 overflow-x-auto px-1 pb-1">
          <div className="flex w-max gap-1">
            <button
              onClick={() => setActiveLetter(null)}
              className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
                !activeLetter ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              All
            </button>
            {allLetters.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLetter(activeLetter === l ? null : l)}
                className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
                  activeLetter === l ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filters */}
        <div className="max-h-20 overflow-y-auto pr-1">
          <div className="flex flex-wrap gap-1">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className="cursor-pointer text-xs"
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground">{filtered.length} terms</p>

      {/* Term cards grouped by letter */}
      <div ref={resultsRef} className="space-y-6 scroll-mt-32">
        {grouped.map(([letter, letterTerms]) => (
          <div key={letter}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary">{letter}</h3>
              <Button variant="ghost" size="sm" onClick={scrollToTop} className="h-7 px-2 text-xs">
                <ArrowUp className="mr-1 h-3 w-3" /> Top
              </Button>
            </div>
            <div className="space-y-2">
              {letterTerms.map((t) => (
                <Card key={t.term} className="card-elevated">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">{t.term}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{t.definition}</p>
                    <p className="text-xs text-primary mt-2">
                      <span className="font-medium">Exam Relevance:</span> {t.examRelevance}
                    </p>
                    {t.relatedTerms && t.relatedTerms.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {t.relatedTerms.map((rt) => (
                          <Badge
                            key={rt}
                            variant="secondary"
                            className="text-xs cursor-pointer"
                            onClick={() => setSearch(rt)}
                          >
                            {rt}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-8">No terms match your search.</p>
      )}
    </div>
  );
};

export default GlossaryView;
