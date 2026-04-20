import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

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
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Alphabet nav */}
      <div className="flex flex-wrap gap-1">
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

      {/* Tag filters */}
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

      {/* Results count */}
      <p className="text-xs text-muted-foreground">{filtered.length} terms</p>

      {/* Term cards grouped by letter */}
      <div className="space-y-6">
        {grouped.map(([letter, letterTerms]) => (
          <div key={letter}>
            <h3 className="text-lg font-bold text-primary mb-2">{letter}</h3>
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
