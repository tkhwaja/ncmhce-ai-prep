import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Clock,
  Compass,
  Scale,
  Heart,
  Sprout,
  Globe,
  ClipboardCheck,
  Users,
  Briefcase,
  FlaskConical,
  BookOpen,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { nceCollections, nceQuickReviewResources } from "@/data/nce/library";
import {
  allLessons,
  collectionLessonCount,
  collectionMinutes,
  formatStudyTime,
  getBlueprintDomains,
  getDomainLessons,
  getLesson,
  getModule,
  examVersionLabel,
  resolveExamVersion,
  searchLessons,
} from "@/lib/nce-library";
import { useNceLibraryProgress } from "@/hooks/useNceLibraryProgress";
import { ProgressSummary, DomainWeightBadge, LessonRow } from "./NceShared";
import NceCollectionView from "./NceCollectionView";
import NceModuleView from "./NceModuleView";
import NceLessonView from "./NceLessonView";
import NceBlueprintHubView from "./NceBlueprintHubView";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Scale,
  Heart,
  Sprout,
  Globe,
  ClipboardCheck,
  Users,
  Briefcase,
  FlaskConical,
};

const TOTAL_LESSONS = allLessons.length;
const PUBLISHED_LESSONS = allLessons.filter((l) => l.published).length;

const NceLibrary = () => {
  const { profile } = useAuth();
  const [params, setParams] = useSearchParams();
  const examVersion = resolveExamVersion(profile?.target_exam_date);
  const { completedCount, isCompleted, lastLessonId } = useNceLibraryProgress();

  const [search, setSearch] = useState("");
  const [collectionFilter, setCollectionFilter] = useState("all");
  const [progressFilter, setProgressFilter] = useState("all");
  const [sort, setSort] = useState("curriculum");

  const navigate = (next: Record<string, string>) => {
    const sp = new URLSearchParams();
    Object.entries(next).forEach(([k, v]) => sp.set(k, v));
    setParams(sp);
    window.scrollTo({ top: 0 });
  };
  const backHome = () => setParams(new URLSearchParams());

  const lessonParam = params.get("lesson");
  const moduleParam = params.get("module");
  const collectionParam = params.get("collection");
  const domainParam = params.get("domain");

  if (lessonParam && getLesson(lessonParam))
    return <NceLessonView lessonId={lessonParam} onNavigate={navigate} onBack={backHome} />;
  if (moduleParam && getModule(moduleParam))
    return (
      <NceModuleView
        moduleId={moduleParam}
        examVersion={examVersion}
        onNavigate={navigate}
        onBack={backHome}
      />
    );
  if (collectionParam)
    return (
      <NceCollectionView
        slug={collectionParam}
        examVersion={examVersion}
        onNavigate={navigate}
        onBack={backHome}
      />
    );
  if (domainParam)
    return (
      <NceBlueprintHubView
        domainId={domainParam}
        examVersion={examVersion}
        onNavigate={navigate}
        onBack={backHome}
      />
    );

  const allIds = allLessons.map((l) => l.id);
  const overallCompleted = completedCount(allIds);
  const domains = getBlueprintDomains(examVersion);

  const nextLesson = useMemo(
    () => allLessons.find((l) => !isCompleted(l.id)),
    [isCompleted],
  );
  const resumeLesson = lastLessonId ? getLesson(lastLessonId) : undefined;

  const searchResults = useMemo(() => {
    let results = search ? searchLessons(search) : [];
    if (collectionFilter !== "all")
      results = results.filter((l) => l.collectionSlug === collectionFilter);
    if (progressFilter === "completed") results = results.filter((l) => isCompleted(l.id));
    if (progressFilter === "not-started") results = results.filter((l) => !isCompleted(l.id));
    return results.slice(0, 40);
  }, [search, collectionFilter, progressFilter, isCompleted]);

  const visibleCollections = useMemo(() => {
    let list = [...nceCollections];
    if (collectionFilter !== "all") list = list.filter((c) => c.slug === collectionFilter);
    if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "least-complete")
      list.sort(
        (a, b) =>
          completedCount(a.modules.flatMap((m) => m.lessons.map((l) => l.id))) /
            collectionLessonCount(a) -
          completedCount(b.modules.flatMap((m) => m.lessons.map((l) => l.id))) /
            collectionLessonCount(b),
      );
    return list;
  }, [collectionFilter, sort, completedCount]);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">NCE Learning Library</h1>
        <p className="text-muted-foreground">
          Master the knowledge and decision-making skills tested on the National Counselor
          Examination.
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs font-normal">
            {examVersionLabel(examVersion)}
          </Badge>
          <span>
            {overallCompleted}/{TOTAL_LESSONS} lessons complete
          </span>
          <span>·</span>
          <span>{PUBLISHED_LESSONS} lessons available now</span>
        </div>
        <div className="max-w-md pt-1">
          <ProgressSummary
            completed={overallCompleted}
            total={TOTAL_LESSONS}
            label="Overall completion"
          />
        </div>
      </div>

      {/* Continue studying */}
      <Card className="card-elevated border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          {resumeLesson ? (
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Continue studying
              </p>
              <p className="font-semibold text-foreground">{resumeLesson.title}</p>
              <p className="text-xs text-muted-foreground">
                {resumeLesson.moduleId} — {resumeLesson.moduleTitle} ·{" "}
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {resumeLesson.minutes} min
                </span>
              </p>
            </div>
          ) : (
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Recommended starting point
              </p>
              <p className="font-semibold text-foreground">NCE Exam Orientation and Blueprint</p>
              <p className="text-xs text-muted-foreground">
                Learn the exam structure first, then move through ethics and counselor
                decision-making.
              </p>
            </div>
          )}
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button
              onClick={() =>
                navigate({ lesson: (resumeLesson ?? nextLesson ?? allLessons[0]).id })
              }
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              {resumeLesson ? "Continue lesson" : "Start the learning path"}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                navigate({ module: (resumeLesson ?? allLessons[0]).moduleId })
              }
            >
              View module
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search + filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search theories, theorists, assessments, statistics, ethics, or key terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={collectionFilter} onValueChange={setCollectionFilter}>
          <SelectTrigger className="w-full sm:w-56">
            <SelectValue placeholder="All knowledge areas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All knowledge areas</SelectItem>
            {nceCollections.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {c.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={progressFilter} onValueChange={setProgressFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="All progress" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All progress</SelectItem>
            <SelectItem value="not-started">Not complete</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="curriculum">Curriculum order</SelectItem>
            <SelectItem value="least-complete">Least complete</SelectItem>
            <SelectItem value="az">A → Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {search ? (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            {searchResults.length} matching {searchResults.length === 1 ? "lesson" : "lessons"}
          </h2>
          <div className="space-y-2">
            {searchResults.map((l, i) => (
              <LessonRow
                key={l.id}
                lesson={l}
                index={i + 1}
                completed={isCompleted(l.id)}
                onOpen={() => navigate({ lesson: l.id })}
              />
            ))}
          </div>
          {!searchResults.length && (
            <p className="py-8 text-center text-muted-foreground">No lessons match your search.</p>
          )}
        </div>
      ) : (
        <Tabs defaultValue="subject">
          <TabsList>
            <TabsTrigger value="subject">Learn by Subject</TabsTrigger>
            <TabsTrigger value="blueprint">Review by Blueprint</TabsTrigger>
            <TabsTrigger value="quick">Quick Review</TabsTrigger>
          </TabsList>

          {/* --- Learn by Subject --- */}
          <TabsContent value="subject" className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visibleCollections.map((c) => {
                const Icon = iconMap[c.icon] ?? BookOpen;
                const ids = c.modules.flatMap((m) => m.lessons.map((l) => l.id));
                const done = completedCount(ids);
                return (
                  <Card
                    key={c.slug}
                    className="card-elevated cursor-pointer transition-colors hover:border-primary/40"
                    onClick={() => navigate({ collection: c.slug })}
                  >
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold leading-tight text-foreground">{c.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {c.modules.length} modules · {collectionLessonCount(c)} lessons ·{" "}
                        {formatStudyTime(collectionMinutes(c))}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{c.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.topicLabels.slice(0, 2).map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <ProgressSummary completed={done} total={ids.length} />
                      <Button variant="ghost" size="sm" className="px-0 text-primary">
                        {done === 0 ? "Start" : done === ids.length ? "Review" : "Continue"}
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* --- Review by Blueprint --- */}
          <TabsContent value="blueprint" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Official NBCC domains and weights for your exam version. Each hub assembles the same
              canonical lessons from across the subject collections, so your progress stays in sync.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {domains.map((d) => {
                const ids = getDomainLessons(d).map((l) => l.id);
                return (
                  <Card
                    key={d.id}
                    className="card-elevated cursor-pointer transition-colors hover:border-primary/40"
                    onClick={() => navigate({ domain: d.id })}
                  >
                    <CardContent className="space-y-3 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-tight text-foreground">{d.title}</h3>
                        <DomainWeightBadge percentage={d.percentage} scoredItems={d.scoredItems} />
                      </div>
                      <p className="text-sm text-muted-foreground">{d.description}</p>
                      <p className="text-xs text-muted-foreground">{ids.length} mapped lessons</p>
                      <ProgressSummary
                        completed={completedCount(ids)}
                        total={ids.length}
                        label="Mapped lessons"
                      />
                      <Button variant="ghost" size="sm" className="px-0 text-primary">
                        Review domain <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* --- Quick Review --- */}
          <TabsContent value="quick" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              High-yield comparison charts, timelines, score guides, decision guides, and the
              glossary. Each resource is built once its source modules are authored and verified.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {nceQuickReviewResources.map((r) => (
                <Card key={r.id} className="card-elevated">
                  <CardContent className="space-y-2 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-tight text-foreground">{r.title}</h3>
                      <Badge variant={r.status === "available" ? "secondary" : "outline"} className="text-xs">
                        {r.status === "available" ? "Ready" : "In production"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                    {!!r.sourceModuleIds.length && (
                      <p className="text-xs text-muted-foreground/80">
                        Source modules: {r.sourceModuleIds.join(", ")}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default NceLibrary;
