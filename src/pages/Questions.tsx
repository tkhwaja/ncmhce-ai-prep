import { useState, useMemo } from "react";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { getActiveQuestions } from "@/lib/exam-content";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen } from "lucide-react";

const Questions = () => {
  const { track } = useExamTrack();
  const questions = useMemo(() => getActiveQuestions(track), [track]);
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState<string>("all");

  const domains = useMemo(
    () => [...new Set(questions.map((q) => q.domain))],
    [questions],
  );

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return questions.filter((question) => {
      const matchesDomain = domainFilter === "all" || question.domain === domainFilter;
      const matchesSearch =
        search === "" ||
        question.stem.toLowerCase().includes(query) ||
        question.options.some((o) => o.toLowerCase().includes(query)) ||
        (question.tags?.some((t) => t.toLowerCase().includes(query)) ?? false);
      return matchesDomain && matchesSearch;
    });
  }, [questions, search, domainFilter]);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Question Bank</h1>
        <p className="text-muted-foreground">Domain-tagged NCE multiple-choice items with rationales</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions, options, or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={domainFilter} onValueChange={setDomainFilter}>
          <SelectTrigger className="w-full sm:w-56">
            <SelectValue placeholder="All Domains" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Domains</SelectItem>
            {domains.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filtered.map((q) => (
          <Card key={q.id} className="card-elevated">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {q.domain}
                  </Badge>
                </div>
                {q.difficulty && (
                  <Badge variant="outline" className="text-xs">
                    {q.difficulty}
                  </Badge>
                )}
              </div>
              <p className="text-foreground font-medium">{q.stem}</p>
              <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
                {q.options.map((opt, idx) => (
                  <li
                    key={idx}
                    className={
                      idx === q.correctAnswerIndex
                        ? "text-emerald-400 font-medium"
                        : ""
                    }
                  >
                    {opt}
                  </li>
                ))}
              </ol>
              <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
                <p className="font-medium text-foreground mb-1">Explanation</p>
                <p className="text-muted-foreground">{q.explanation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No questions match your search.</p>
      )}
    </div>
  );
};

export default Questions;
