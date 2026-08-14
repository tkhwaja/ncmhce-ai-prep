import {
  nceCollections,
  nceCurrentBlueprintDomains,
  nceFutureBlueprintDomains,
  getNceLessonContent,
  DEFAULT_LESSON_MINUTES,
} from "@/data/nce/library";
import type {
  NceCollection,
  NceModule,
  NceLessonRef,
  NceBlueprintDomain,
  NceExamVersion,
} from "@/data/nce/library";

/** Cutover date for the revised NCE specifications. */
export const NCE_2027_CUTOVER = new Date("2027-07-01T00:00:00Z");

export const resolveExamVersion = (examDate?: string | null): NceExamVersion => {
  if (!examDate) return "current";
  const d = new Date(examDate);
  if (Number.isNaN(d.getTime())) return "current";
  return d >= NCE_2027_CUTOVER ? "2027" : "current";
};

export const examVersionLabel = (v: NceExamVersion) =>
  v === "2027" ? "New NCE — July 1, 2027 and Later" : "Current NCE — Before July 1, 2027";

export const getBlueprintDomains = (v: NceExamVersion): NceBlueprintDomain[] =>
  v === "2027" ? nceFutureBlueprintDomains : nceCurrentBlueprintDomains;

/* ---------------- flat indexes ---------------- */

export interface FlatLesson extends NceLessonRef {
  moduleId: string;
  moduleTitle: string;
  collectionSlug: string;
  collectionTitle: string;
  minutes: number;
  published: boolean;
}

const allModules: NceModule[] = nceCollections.flatMap((c) => c.modules);

export const allLessons: FlatLesson[] = nceCollections.flatMap((c) =>
  c.modules.flatMap((m) =>
    m.lessons.map((l) => ({
      ...l,
      moduleId: m.id,
      moduleTitle: m.title,
      collectionSlug: c.slug,
      collectionTitle: c.title,
      minutes: l.estimatedMinutes ?? DEFAULT_LESSON_MINUTES,
      published: !!getNceLessonContent(l.id),
    })),
  ),
);

const lessonById = new Map(allLessons.map((l) => [l.id, l]));
const moduleById = new Map(allModules.map((m) => [m.id, m]));
const collectionBySlug = new Map(nceCollections.map((c) => [c.slug, c]));

export const getCollection = (slug: string): NceCollection | undefined => collectionBySlug.get(slug);
export const getModule = (id: string): NceModule | undefined => moduleById.get(id);
export const getLesson = (id: string): FlatLesson | undefined => lessonById.get(id);

export const moduleMinutes = (m: NceModule) =>
  m.lessons.reduce((sum, l) => sum + (l.estimatedMinutes ?? DEFAULT_LESSON_MINUTES), 0);

export const collectionMinutes = (c: NceCollection) =>
  c.modules.reduce((sum, m) => sum + moduleMinutes(m), 0);

export const collectionLessonCount = (c: NceCollection) =>
  c.modules.reduce((sum, m) => sum + m.lessons.length, 0);

export const formatStudyTime = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.round((minutes / 60) * 10) / 10;
  return `about ${h % 1 === 0 ? h : h.toFixed(1)} hours`;
};

/** Ordered lesson playlist for a blueprint hub — canonical records, no copies. */
export const getDomainLessons = (domain: NceBlueprintDomain): FlatLesson[] =>
  domain.moduleIds
    .map((id) => moduleById.get(id))
    .filter((m): m is NceModule => !!m)
    .flatMap((m) => m.lessons.map((l) => lessonById.get(l.id)!).filter(Boolean));

/** Domains (for the active exam version) that reference a module. */
export const getModuleDomains = (moduleId: string, v: NceExamVersion): NceBlueprintDomain[] =>
  getBlueprintDomains(v).filter((d) => d.moduleIds.includes(moduleId));

export const getCollectionDomains = (c: NceCollection, v: NceExamVersion): NceBlueprintDomain[] => {
  const ids = new Set(c.modules.map((m) => m.id));
  return getBlueprintDomains(v).filter((d) => d.moduleIds.some((id) => ids.has(id)));
};

/** Previous / next lesson within the owning module, then across the collection. */
export const getLessonNeighbors = (lessonId: string) => {
  const idx = allLessons.findIndex((l) => l.id === lessonId);
  if (idx === -1) return { prev: undefined, next: undefined };
  return { prev: allLessons[idx - 1], next: allLessons[idx + 1] };
};

/* ---------------- search ---------------- */

export const searchLessons = (query: string): FlatLesson[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allLessons.filter((l) => {
    const content = getNceLessonContent(l.id);
    const haystack = [
      l.title,
      l.moduleTitle,
      l.collectionTitle,
      l.moduleId,
      ...(content?.tags ?? []),
      ...(content?.searchAliases ?? []),
      ...(content?.keyTerms ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
};
