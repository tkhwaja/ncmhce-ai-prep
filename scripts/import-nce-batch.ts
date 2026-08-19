/**
 * NCE content batch importer (dev tool — not part of the app bundle).
 *
 * Usage:
 *   bun scripts/import-nce-batch.ts <batch.md> [--out src/data/nce/library/lesson-content/or-01.ts]
 *
 * Converts an authored markdown batch (one module per file, the OR-01 format)
 * into typed `NceLessonContent` records and validates the result:
 *  - module + lesson ids must exist in the curriculum
 *  - every lesson needs why-it-matters, objectives, core text, takeaways
 *  - every knowledge check needs 3+ options, one correct answer, a rationale
 *  - domain ids must exist in the current/future blueprints
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, basename } from "node:path";

/* ------------------------- tiny yaml front matter ------------------------- */

interface FrontMatter {
  [key: string]: string | string[];
}

const normalizeDifficulty = (raw?: string): string | undefined => {
  if (!raw) return undefined;
  const parts = raw.toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const allowed = ["foundational", "intermediate", "advanced"];
  // authored batches sometimes span two levels ("foundational-intermediate");
  // keep the higher of the two so filters do not under-rate the lesson.
  const matched = parts.filter((p) => allowed.includes(p));
  if (!matched.length) return undefined;
  return matched.sort((a, b) => allowed.indexOf(b) - allowed.indexOf(a))[0];
};

const parseFrontMatter = (src: string): { fm: FrontMatter; body: string } => {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { fm: {}, body: src };
  const fm: FrontMatter = {};
  let key = "";
  for (const raw of m[1].split(/\r?\n/)) {
    const line = raw.replace(/\s+$/, "");
    if (!line.trim()) continue;
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && key) {
      const cur = fm[key];
      fm[key] = Array.isArray(cur) ? [...cur, listItem[1].trim()] : [listItem[1].trim()];
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) {
      key = kv[1];
      fm[key] = kv[2].trim();
      if (fm[key] === "") fm[key] = [];
    }
  }
  return { fm, body: src.slice(m[0].length) };
};

/* ------------------------------ block helpers ----------------------------- */

const stripInline = (s: string) =>
  s
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+$/g, "")
    .trim();

const bullets = (block: string): string[] =>
  block
    .split(/\r?\n/)
    .map((l) => l.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/)?.[1])
    .filter((v): v is string => !!v)
    .map(stripInline);

/** Paragraphs, list groups, sub-headings and markdown tables, in order. */
const parseProse = (block: string) => {
  const paragraphs: string[] = [];
  const tables: { title: string; headers: string[]; rows: string[][] }[] = [];
  const lines = block.split(/\r?\n/);
  let buf: string[] = [];
  let lastHeading = "";

  const flush = () => {
    const text = buf.join("\n").trim();
    buf = [];
    if (!text) return;
    // list group -> keep markdown bullets so the renderer can show a list
    paragraphs.push(text);
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*$/.test(line)) {
      flush();
      continue;
    }
    const heading = line.match(/^(#{3,6})\s+(.*)$/);
    if (heading) {
      flush();
      lastHeading = stripInline(heading[2]);
      paragraphs.push(`### ${lastHeading}`);
      continue;
    }
    // markdown table
    if (/^\s*\|/.test(line) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] ?? "")) {
      flush();
      const cells = (l: string) =>
        l
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => stripInline(c.replace(/\*\*/g, "")));
      const headers = cells(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(cells(lines[i]));
        i++;
      }
      i--;
      tables.push({ title: lastHeading || "Comparison", headers, rows });
      continue;
    }
    buf.push(line.replace(/\s+$/, ""));
  }
  flush();
  return { paragraphs, tables };
};

/* ------------------------------ section split ----------------------------- */

interface Section {
  heading: string;
  body: string;
}

const splitSections = (body: string, level: 1 | 2): { intro: string; sections: Section[] } => {
  const marker = level === 1 ? /^#\s+(.*)$/ : /^##\s+(.*)$/;
  const lines = body.split(/\r?\n/);
  const sections: Section[] = [];
  let intro: string[] = [];
  let cur: Section | null = null;
  for (const line of lines) {
    const m = line.match(marker);
    if (m) {
      if (cur) sections.push(cur);
      cur = { heading: stripInline(m[1]), body: "" };
      continue;
    }
    if (cur) cur.body += line + "\n";
    else intro.push(line);
  }
  if (cur) sections.push(cur);
  return { intro: intro.join("\n"), sections };
};

/* --------------------------- knowledge checks ----------------------------- */

interface Check {
  id: string;
  stem: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

const parseChecks = (block: string, lessonId: string): Check[] => {
  const { sections } = splitSections(block, 2).sections.length
    ? { sections: splitSections(block, 2).sections }
    : { sections: [] };
  // knowledge checks use "### Question n"
  const chunks = block.split(/^###\s+Question\s*/m).slice(1);
  void sections;
  return chunks.map((chunk, idx) => {
    const lines = chunk.split(/\r?\n/);
    const stemLines: string[] = [];
    const options: string[] = [];
    let correct = -1;
    let explanation = "";
    for (const raw of lines) {
      const line = raw.replace(/\s+$/, "");
      if (/^\d+\s*$/.test(line.trim()) && !stemLines.length) continue; // question number line
      const opt = line.match(/^([A-E])\.\s+(.*)$/);
      if (opt) {
        options.push(stripInline(opt[2]));
        continue;
      }
      const ans = line.match(/^\*\*Correct answer:\s*([A-E])\*\*/i);
      if (ans) {
        correct = ans[1].toUpperCase().charCodeAt(0) - 65;
        continue;
      }
      const rat = line.match(/^\*\*Rationale:?\*\*:?\s*(.*)$/i);
      if (rat) {
        explanation = stripInline(rat[1]);
        continue;
      }
      if (explanation && line.trim()) {
        explanation += " " + stripInline(line);
        continue;
      }
      if (!options.length && line.trim()) stemLines.push(stripInline(line));
    }
    return {
      id: `${lessonId}-Q${idx + 1}`,
      stem: stemLines.join(" ").replace(/^\d+\s*/, "").trim(),
      options,
      correctAnswerIndex: correct,
      explanation,
    };
  });
};

/* ------------------------------- lesson map ------------------------------- */

const CONTENT_TYPES = new Set([
  "concept",
  "theory-profile",
  "theory-comparison",
  "theorist-profile",
  "applied-skill",
  "assessment-statistics",
  "ethics-legal-decision",
  "clinical-concern",
  "timeline",
  "formula-score-guide",
  "case-integration",
  "quick-review",
]);

const H = {
  why: /why (this|it) matters/i,
  objectives: /learning objectives/i,
  takeaways: /key takeaways/i,
  traps: /exam trap/i,
  doNotConfuse: /do not confuse/i,
  memory: /memory anchor|memory hook/i,
  applied: /applied (example|counseling example|scenario)/i,
  howTested: /how (the nce|it) (may )?(test|tests|is tested)/i,
  checks: /knowledge check/i,
  sources: /^sources|source basis|verification/i,
  keyConcepts: /^key concepts|key terms/i,
};

interface LessonRecord {
  lessonId: string;
  title: string;
  estimatedMinutes: number;
  contentType: string;
  difficulty?: string;
  examVersions: string[];
  currentDomains: string[];
  futureDomains?: string[];
  tags: string[];
  whyItMatters: string;
  learningObjectives: string[];
  coreExplanation: string[];
  comparisonTables?: { title: string; headers: string[]; rows: string[][] }[];
  howTested?: string[];
  appliedExample?: string;
  examTraps?: string[];
  doNotConfuseNotes?: string[];
  memoryAnchor?: string;
  keyTakeaways: string[];
  knowledgeChecks?: Check[];
  reviewedOn?: string;
}

/** Front-matter domain slugs sometimes differ slightly from the blueprint ids. */
const DOMAIN_ALIASES: Record<string, string> = {
  "professional-development-counselor-self-awareness": "professional-development-self-awareness",
  "counseling-process": "counseling-skills-interventions",
  "direct-client-care": "provision-counseling-interventions",
  "provision-of-counseling-interventions": "provision-counseling-interventions",
  "treatment-planning-continuity-of-care": "treatment-planning-continuity-care",
};


const normalizeDomain = (d: string) => DOMAIN_ALIASES[d] ?? d;

const asArray = (v: string | string[] | undefined): string[] =>
  v === undefined ? [] : Array.isArray(v) ? v : v ? [v] : [];

const buildLesson = (
  moduleId: string,
  order: number,
  title: string,
  body: string,
  fm: FrontMatter,
): LessonRecord => {
  const lessonId = `${moduleId}-L${String(order).padStart(2, "0")}`;
  const { intro, sections } = splitSections(body, 2);

  const meta = intro;
  const minutes = Number(meta.match(/\*\*Estimated time:\*\*\s*(\d+)/i)?.[1] ?? 0) || 10;
  const rawType = meta.match(/\*\*Content type:\*\*\s*(.*)/i)?.[1]?.trim() ?? "";
  const typeSlug = rawType.toLowerCase().replace(/\s+/g, "-");
  const contentType = CONTENT_TYPES.has(typeSlug) ? typeSlug : "concept";
  const versionLine = meta.match(/\*\*Exam versions?:\*\*\s*(.*)/i)?.[1] ?? "";
  const examVersions = /2027/.test(versionLine)
    ? /current/i.test(versionLine)
      ? ["current", "2027"]
      : ["2027"]
    : ["current"];

  const rec: LessonRecord = {
    lessonId,
    title,
    estimatedMinutes: minutes,
    contentType,
    difficulty: normalizeDifficulty(fm.difficulty as string | undefined),
    examVersions,
    currentDomains: asArray(fm.currentDomains).map(normalizeDomain),
    futureDomains: asArray(fm.futureDomains).map(normalizeDomain),
    tags: asArray(fm.tags),
    whyItMatters: "",
    learningObjectives: [],
    coreExplanation: [],
    keyTakeaways: [],
    reviewedOn: (fm.reviewedOn as string) || undefined,
  };

  const core: string[] = [];
  const tables: LessonRecord["comparisonTables"] = [];

  for (const s of sections) {
    const h = s.heading;
    if (H.why.test(h)) {
      const { paragraphs } = parseProse(s.body);
      rec.whyItMatters = paragraphs.filter((p) => !p.startsWith("###")).join(" ");
      continue;
    }
    if (H.objectives.test(h)) {
      rec.learningObjectives = bullets(s.body);
      continue;
    }
    if (H.takeaways.test(h)) {
      rec.keyTakeaways = bullets(s.body);
      continue;
    }
    if (H.traps.test(h)) {
      const list = bullets(s.body);
      const { paragraphs } = parseProse(s.body);
      rec.examTraps = list.length ? list : paragraphs.filter((p) => !p.startsWith("###"));
      continue;
    }
    if (H.doNotConfuse.test(h)) {
      const { paragraphs } = parseProse(s.body);
      rec.doNotConfuseNotes = paragraphs.filter((p) => !p.startsWith("###"));
      continue;
    }
    if (H.memory.test(h)) {
      rec.memoryAnchor = parseProse(s.body).paragraphs.join(" ");
      continue;
    }
    if (H.applied.test(h)) {
      rec.appliedExample = parseProse(s.body)
        .paragraphs.filter((p) => !p.startsWith("###"))
        .join("\n\n");
      continue;
    }
    if (H.howTested.test(h)) {
      const list = bullets(s.body);
      rec.howTested = list.length ? list : parseProse(s.body).paragraphs;
      continue;
    }
    if (H.checks.test(h)) {
      rec.knowledgeChecks = parseChecks(s.body, lessonId);
      continue;
    }
    if (H.sources.test(h)) continue;

    // everything else is teaching content, keeping the authored sub-heading
    const { paragraphs, tables: t } = parseProse(s.body);
    core.push(`## ${h}`);
    core.push(...paragraphs);
    tables.push(...t.map((tb) => ({ ...tb, title: tb.title === "Comparison" ? h : tb.title })));
  }

  rec.coreExplanation = core;
  if (tables.length) rec.comparisonTables = tables;
  return rec;
};

/* -------------------------------- validate -------------------------------- */

const validate = (
  records: LessonRecord[],
  moduleId: string,
): { errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const curriculum = readFileSync("src/data/nce/library/curriculum.ts", "utf8");
  const blueprint = readFileSync("src/data/nce/library/blueprint-domains.ts", "utf8");

  if (!curriculum.includes(`id: "${moduleId}"`)) errors.push(`module ${moduleId} not in curriculum`);

  const seen = new Set<string>();
  for (const r of records) {
    const where = `${r.lessonId} (${r.title})`;
    if (seen.has(r.lessonId)) errors.push(`${where}: duplicate lesson id`);
    seen.add(r.lessonId);
    if (!curriculum.includes(`id: "${r.lessonId}"`)) errors.push(`${where}: lesson id not in curriculum`);
    if (!r.whyItMatters) errors.push(`${where}: missing "Why this matters"`);
    if (!r.learningObjectives.length)
      warnings.push(`${where}: no lesson-level learning objectives (module objectives will apply)`);
    if (!r.coreExplanation.length) errors.push(`${where}: missing core explanation`);
    if (!r.keyTakeaways.length) errors.push(`${where}: missing key takeaways`);
    for (const d of r.currentDomains)
      if (!blueprint.includes(`id: "${d}"`)) errors.push(`${where}: unknown current domain "${d}"`);
    for (const d of r.futureDomains ?? [])
      if (!blueprint.includes(`id: "${d}"`)) errors.push(`${where}: unknown future domain "${d}"`);
    for (const c of r.knowledgeChecks ?? []) {
      if (c.options.length < 3) errors.push(`${c.id}: fewer than 3 options`);
      if (c.correctAnswerIndex < 0 || c.correctAnswerIndex >= c.options.length)
        errors.push(`${c.id}: missing or out-of-range correct answer`);
      if (!c.explanation) errors.push(`${c.id}: missing rationale`);
      if (!c.stem) errors.push(`${c.id}: missing stem`);
    }
  }
  return { errors, warnings };
};

/* --------------------------------- emit ----------------------------------- */

const emit = (records: LessonRecord[], moduleId: string, sourceFile: string) => {
  const clean = records.map((r) => {
    const out: Record<string, unknown> = { ...r };
    if (!out.futureDomains || (out.futureDomains as string[]).length === 0) delete out.futureDomains;
    if (!out.difficulty) delete out.difficulty;
    if (!out.reviewedOn) delete out.reviewedOn;
    delete out.title;
    return out;
  });
  const entries = records
    .map((r, i) => `  "${r.lessonId}": ${JSON.stringify(clean[i], null, 2).replace(/\n/g, "\n  ")},`)
    .join("\n");
  return `/**
 * ${moduleId} — authored NCE lesson content.
 *
 * Generated by scripts/import-nce-batch.ts from ${basename(sourceFile)}.
 * Edit the source markdown batch and re-run the importer rather than hand-editing.
 */
import type { NceLessonContent } from "../types";

export const ${moduleId.toLowerCase().replace(/-/g, "")}LessonContent: Record<string, NceLessonContent> = {
${entries}
};
`;
};

/* --------------------------- question batch mode -------------------------- */

import { nceCollections } from "../src/data/nce/library/curriculum";

const BLUEPRINT_NAMES: Record<string, string> = {
  D1: "Professional Practice and Ethics",
  D2: "Intake, Assessment, and Diagnosis",
  D3: "Areas of Clinical Focus",
  D4: "Treatment Planning",
  D5: "Counseling Skills and Interventions",
  D6: "Core Counseling Attributes",
};

/** Target items per 100-item batch, per NBCC blueprint domain. */
const DOMAIN_QUOTA: Record<string, number> = { D1: 12, D2: 12, D3: 29, D4: 9, D5: 30, D6: 8 };
const DOMAIN_TOLERANCE = 3;
/** Target items per 100-item batch, per authored difficulty level. */
const DIFFICULTY_QUOTA: Record<number, number> = { 2: 15, 3: 45, 4: 30, 5: 10 };
const DIFFICULTY_TOLERANCE = 5;
const MAX_TOPIC_REPEATS = 3;

const CACREP_DOMAINS = [
  "Professional Counseling Orientation and Ethical Practice",
  "Social and Cultural Diversity",
  "Human Growth and Development",
  "Career Development",
  "Counseling and Helping Relationships",
  "Group Counseling and Group Work",
  "Assessment and Testing",
  "Research and Program Evaluation",
];

const curriculumModuleIds = new Set(
  nceCollections.flatMap((c) => c.modules.map((m) => m.id)),
);

interface RawQuestion {
  id?: string;
  domain?: string;
  blueprintDomainId?: string;
  taskCode?: string;
  topic?: string;
  subtopic?: string;
  moduleId?: string;
  difficultyLevel?: number;
  stem?: string;
  options?: string[];
  correctAnswerIndex?: number;
  explanation?: string;
  optionRationales?: string[];
  keyTakeaway?: string;
  tags?: string[];
}

const difficultyLabel = (level: number): string =>
  level <= 2 ? "Easy" : level === 3 ? "Medium" : "Hard";

const validateQuestions = (items: RawQuestion[]) => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const ids = new Set<string>();
  const stems = new Set<string>();
  const byDomain: Record<string, number> = {};
  const byLevel: Record<number, number> = {};
  const byTopic = new Map<string, number>();
  const byAnswer: Record<number, number> = {};

  items.forEach((q, i) => {
    const at = `item ${i + 1} (${q.id ?? "no id"})`;
    if (!q.id) errors.push(`${at}: missing id`);
    else if (ids.has(q.id)) errors.push(`${at}: duplicate id`);
    else ids.add(q.id);

    if (q.stem) {
      const key = q.stem.trim().toLowerCase();
      if (stems.has(key)) errors.push(`${at}: duplicate stem`);
      stems.add(key);
    } else errors.push(`${at}: missing stem`);

    if (!q.domain || !CACREP_DOMAINS.includes(q.domain)) errors.push(`${at}: invalid CACREP domain "${q.domain}"`);
    if (!q.blueprintDomainId || !BLUEPRINT_NAMES[q.blueprintDomainId])
      errors.push(`${at}: invalid blueprintDomainId "${q.blueprintDomainId}" (expected D1–D6)`);
    else byDomain[q.blueprintDomainId] = (byDomain[q.blueprintDomainId] ?? 0) + 1;

    if (!q.topic) errors.push(`${at}: missing topic`);
    else byTopic.set(q.topic, (byTopic.get(q.topic) ?? 0) + 1);

    if (!q.moduleId) errors.push(`${at}: missing moduleId`);
    else if (!curriculumModuleIds.has(q.moduleId)) errors.push(`${at}: unknown moduleId "${q.moduleId}"`);

    const level = q.difficultyLevel;
    if (typeof level !== "number" || level < 1 || level > 5) errors.push(`${at}: difficultyLevel must be 1–5`);
    else byLevel[level] = (byLevel[level] ?? 0) + 1;

    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${at}: needs exactly 4 options`);
    if (typeof q.correctAnswerIndex !== "number" || !q.options?.[q.correctAnswerIndex])
      errors.push(`${at}: correctAnswerIndex does not point at an option`);
    else byAnswer[q.correctAnswerIndex] = (byAnswer[q.correctAnswerIndex] ?? 0) + 1;
    if (!Array.isArray(q.optionRationales) || q.optionRationales.length !== q.options?.length)
      errors.push(`${at}: needs one rationale per option`);
    if (!q.explanation) errors.push(`${at}: missing explanation`);
    if (!q.keyTakeaway) warnings.push(`${at}: no keyTakeaway`);
  });

  const scale = items.length / 100;
  for (const [domain, target] of Object.entries(DOMAIN_QUOTA)) {
    const want = Math.round(target * scale);
    const got = byDomain[domain] ?? 0;
    if (Math.abs(got - want) > DOMAIN_TOLERANCE)
      errors.push(`blueprint quota: ${domain} has ${got} items, expected ~${want} (±${DOMAIN_TOLERANCE})`);
  }
  for (const [level, target] of Object.entries(DIFFICULTY_QUOTA)) {
    const want = Math.round(target * scale);
    const got = byLevel[Number(level)] ?? 0;
    if (Math.abs(got - want) > DIFFICULTY_TOLERANCE)
      errors.push(`difficulty spread: level ${level} has ${got} items, expected ~${want} (±${DIFFICULTY_TOLERANCE})`);
  }
  for (const [topic, count] of byTopic) {
    if (count > MAX_TOPIC_REPEATS) errors.push(`topic "${topic}" appears ${count} times (max ${MAX_TOPIC_REPEATS})`);
  }
  for (let i = 0; i < 4; i += 1) {
    const share = (byAnswer[i] ?? 0) / Math.max(items.length, 1);
    if (share < 0.15) warnings.push(`answer position ${"ABCD"[i]} used in only ${Math.round(share * 100)}% of items`);
  }

  return { errors, warnings, byDomain, byLevel };
};

const emitQuestions = (items: RawQuestion[], batchId: string, sourceFile: string) => {
  const records = items.map((q) => ({
    id: q.id,
    domain: q.domain,
    stem: q.stem,
    options: q.options,
    correctAnswerIndex: q.correctAnswerIndex,
    explanation: q.explanation,
    optionRationales: q.optionRationales,
    blueprintDomainId: q.blueprintDomainId,
    blueprintDomainName: BLUEPRINT_NAMES[q.blueprintDomainId as string],
    ...(q.taskCode ? { taskCode: q.taskCode } : {}),
    topic: q.topic,
    ...(q.subtopic ? { subtopic: q.subtopic } : {}),
    moduleId: q.moduleId,
    difficultyLevel: q.difficultyLevel,
    difficulty: difficultyLabel(q.difficultyLevel as number),
    ...(q.keyTakeaway ? { keyTakeaway: q.keyTakeaway } : {}),
    ...(q.tags?.length ? { tags: q.tags } : {}),
  }));
  const varName = `nceQuestionsBatch${batchId}`;
  return `import type { NCEQuestion } from "./types";

/**
 * NCE question bank — Batch ${batchId} (${records.length} items).
 *
 * Generated by scripts/import-nce-batch.ts from ${basename(sourceFile)}.
 * Authored to the blueprint quota in docs/nce-question-batch-spec.md.
 * Do not hand-edit; update the source JSON and re-import.
 */
export const ${varName}: NCEQuestion[] = ${JSON.stringify(records, null, 2)};
`;
};

const importQuestionBatch = (file: string, outOverride?: string) => {
  const parsed = JSON.parse(readFileSync(file, "utf8")) as RawQuestion[] | { questions: RawQuestion[]; batchId?: string };
  const items = Array.isArray(parsed) ? parsed : parsed.questions;
  const batchId =
    (Array.isArray(parsed) ? undefined : parsed.batchId) ??
    basename(file).match(/(\d{3})/)?.[1] ??
    "999";
  const { errors, warnings, byDomain, byLevel } = validateQuestions(items ?? []);

  console.log(`parsed ${items?.length ?? 0} questions from ${basename(file)} (batch ${batchId})`);
  console.log(
    "  blueprint:",
    Object.keys(BLUEPRINT_NAMES)
      .map((d) => `${d}=${byDomain[d] ?? 0}`)
      .join(" "),
  );
  console.log(
    "  difficulty:",
    [2, 3, 4, 5].map((l) => `L${l}=${byLevel[l] ?? 0}`).join(" "),
  );
  if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  if (errors.length) {
    console.error(`\n${errors.length} validation error(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  const outPath = outOverride ?? `src/data/nce/questions-batch-${batchId}.ts`;
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, emitQuestions(items ?? [], batchId, file));
  console.log(`\nwrote ${outPath}`);
};

/* ------------------- compact batch format (Batches 10+) ------------------- */
/**
 * Batches 10+ follow docs/nce-library-batch-spec.md:
 *   `moduleId` front matter, `## Lesson <ID>-L01 — Title` headings,
 *   fixed `### ...` section names, and `1. stem / - A) ... / **Answer: B**`
 *   knowledge checks. Violations fail the import — nothing is written.
 */

const FUTURE_ONLY_DOMAIN_IDS = new Set([
  "professional-development-self-awareness",
  "intake-assessment",
  "treatment-planning-continuity-care",
  "treatment-planning-continuity-of-care",
  "provision-counseling-interventions",
  "provision-of-counseling-interventions",
  "indirect-client-care",
  "legal-ethical-compliance",
]);

/** Modules allowed 7 lessons and the full 6,000-word budget. */
const HIGH_YIELD_MODULES = new Set(["CH-05", "CH-07", "CH-09", "AT-03", "AT-06"]);
const DIFFICULTY_VALUES = new Set(["foundational", "intermediate", "advanced"]);

const V2_HEADINGS = {
  overview: /^overview$/i,
  why: /^why it matters for the nce$/i,
  keyConcepts: /^key concepts$/i,
  inPractice: /^in practice$/i,
  table: /^comparison table/i,
  traps: /^exam traps$/i,
  anchors: /^memory anchors$/i,
  takeaways: /^key takeaways$/i,
  checks: /^knowledge checks$/i,
  sources: /^sources$/i,
};

const parseChecksV2 = (block: string, lessonId: string): Check[] => {
  const chunks = block.split(/^\s*\d+\.\s+/m).slice(1);
  return chunks.map((chunk, idx) => {
    const stemLines: string[] = [];
    const options: string[] = [];
    let correct = -1;
    let explanation = "";
    for (const raw of chunk.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      const opt = line.match(/^[-*]?\s*([A-E])\)\s+(.*)$/);
      if (opt && !/^\*\*/.test(line)) {
        options.push(stripInline(opt[2]));
        continue;
      }
      const ans = line.match(/^[-*]?\s*\*\*Answer:\s*([A-E])\*\*/i);
      if (ans) {
        correct = ans[1].toUpperCase().charCodeAt(0) - 65;
        continue;
      }
      const rat = line.match(/^[-*]?\s*\*\*Rationale:?\*\*:?\s*(.*)$/i);
      if (rat) {
        explanation = stripInline(rat[1]);
        continue;
      }
      if (explanation) {
        explanation += " " + stripInline(line.replace(/^[-*]\s*/, ""));
        continue;
      }
      if (!options.length) stemLines.push(stripInline(line));
    }
    return {
      id: `${lessonId}-Q${idx + 1}`,
      stem: stemLines.join(" ").trim(),
      options,
      correctAnswerIndex: correct,
      explanation,
    };
  });
};

interface V2Lesson extends LessonRecord {
  slug: string;
  order: number;
  keyConcepts?: { term: string; definition: string }[];
}

const buildLessonV2 = (
  moduleId: string,
  heading: string,
  body: string,
  fm: FrontMatter,
  fallbackOrder: number,
): V2Lesson => {
  const idMatch = heading.match(/^([A-Z]{2}-\d{2}-L\d{2})\s*[—–:-]\s*(.*)$/);
  const lessonId = idMatch ? idMatch[1] : `${moduleId}-L${String(fallbackOrder).padStart(2, "0")}`;
  const title = idMatch ? idMatch[2].trim() : heading.replace(/^\S+\s*[—–:-]\s*/, "").trim();

  const { intro, sections } = splitSections(body, 3);
  const slug = intro.match(/^\s*slug:\s*(.*)$/m)?.[1]?.trim() ?? "";
  const minutes = Number(intro.match(/^\s*estimatedMinutes:\s*(\d+)/m)?.[1] ?? 0) || 9;

  const domain = normalizeDomain(String(fm.blueprintDomain ?? ""));
  const rec: V2Lesson = {
    lessonId,
    slug,
    order: Number(lessonId.match(/L(\d{2})$/)?.[1] ?? fallbackOrder),
    title,
    estimatedMinutes: minutes,
    contentType: "concept",
    difficulty: normalizeDifficulty(fm.difficulty as string | undefined),
    examVersions: ["current"],
    currentDomains: domain ? [domain] : [],
    tags: asArray(fm.tags),
    whyItMatters: "",
    learningObjectives: [],
    coreExplanation: [],
    keyTakeaways: [],
  };

  const core: string[] = [];
  const tables: LessonRecord["comparisonTables"] = [];
  const prose = (b: string) => parseProse(b).paragraphs.filter((p) => !p.startsWith("###"));

  for (const s of sections) {
    const h = s.heading;
    if (V2_HEADINGS.overview.test(h)) {
      core.push(...prose(s.body));
      continue;
    }
    if (V2_HEADINGS.why.test(h)) {
      rec.whyItMatters = prose(s.body).join(" ");
      continue;
    }
    if (V2_HEADINGS.keyConcepts.test(h)) {
      rec.keyConcepts = bullets(s.body).map((b) => {
        const m = b.match(/^\*\*(.+?)\*\*\s*[—–:-]\s*(.*)$/) ?? b.match(/^(.+?)\s+[—–]\s+(.*)$/);
        return m
          ? { term: stripInline(m[1]), definition: stripInline(m[2]) }
          : { term: stripInline(b), definition: "" };
      });
      continue;
    }
    if (V2_HEADINGS.inPractice.test(h)) {
      rec.appliedExample = prose(s.body).join("\n\n");
      continue;
    }
    if (V2_HEADINGS.table.test(h)) {
      const t = parseProse(s.body).tables;
      tables.push(...t.map((tb) => ({ ...tb, title: tb.title === "Comparison" ? h : tb.title })));
      continue;
    }
    if (V2_HEADINGS.traps.test(h)) {
      rec.examTraps = bullets(s.body);
      continue;
    }
    if (V2_HEADINGS.anchors.test(h)) {
      rec.memoryAnchor = bullets(s.body).join(" • ") || prose(s.body).join(" ");
      continue;
    }
    if (V2_HEADINGS.takeaways.test(h)) {
      rec.keyTakeaways = bullets(s.body);
      continue;
    }
    if (V2_HEADINGS.checks.test(h)) {
      rec.knowledgeChecks = parseChecksV2(s.body, lessonId);
      continue;
    }
    if (V2_HEADINGS.sources.test(h)) continue;

    const { paragraphs, tables: t } = parseProse(s.body);
    core.push(`## ${h}`);
    core.push(...paragraphs);
    tables.push(...t.map((tb) => ({ ...tb, title: tb.title === "Comparison" ? h : tb.title })));
  }

  rec.coreExplanation = core;
  if (tables.length) rec.comparisonTables = tables;
  // Memory Anchors double as takeaways when the batch omits an explicit section.
  if (!rec.keyTakeaways.length && rec.memoryAnchor) rec.keyTakeaways = bullets(rec.memoryAnchor);
  return rec;
};

const validateV2 = (
  records: V2Lesson[],
  moduleId: string,
  fm: FrontMatter,
): { errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const curriculum = readFileSync("src/data/nce/library/curriculum.ts", "utf8");
  const blueprint = readFileSync("src/data/nce/library/blueprint-domains.ts", "utf8");

  if (!curriculum.includes(`id: "${moduleId}"`))
    errors.push(`module ${moduleId} is not in the curriculum`);

  const rawDifficulty = String(fm.difficulty ?? "").trim();
  if (!DIFFICULTY_VALUES.has(rawDifficulty))
    errors.push(
      `front matter difficulty "${rawDifficulty}" must be exactly one of foundational | intermediate | advanced (no spans)`,
    );

  const domain = normalizeDomain(String(fm.blueprintDomain ?? ""));
  if (!domain) errors.push("front matter is missing blueprintDomain");
  else if (FUTURE_ONLY_DOMAIN_IDS.has(domain))
    errors.push(
      `blueprintDomain "${fm.blueprintDomain}" is a July 2027 domain — Batches 10+ must use a current domain id`,
    );
  else if (!blueprint.includes(`id: "${domain}"`))
    errors.push(`unknown blueprintDomain "${fm.blueprintDomain}"`);

  const maxLessons = HIGH_YIELD_MODULES.has(moduleId) ? 7 : 6;
  if (records.length > maxLessons)
    errors.push(
      `${records.length} lessons exceeds the ${maxLessons}-lesson limit for ${moduleId}` +
        (maxLessons === 6 ? " (only CH-05, CH-07, CH-09, AT-03, AT-06 may use 7)" : ""),
    );
  if (records.length < 5) warnings.push(`${records.length} lessons is below the 5-lesson target`);

  const fmMinutes = Number(fm.estimatedMinutes ?? 0);
  const sumMinutes = records.reduce((s, r) => s + r.estimatedMinutes, 0);
  if (fmMinutes && fmMinutes !== sumMinutes)
    errors.push(`front matter estimatedMinutes ${fmMinutes} !== sum of lesson minutes ${sumMinutes}`);

  const slugs = new Set<string>();
  records.forEach((r, i) => {
    const where = `${r.lessonId} (${r.title})`;
    const expected = `${moduleId}-L${String(i + 1).padStart(2, "0")}`;
    if (r.lessonId !== expected)
      errors.push(`${where}: lesson ids must be sequential — expected ${expected}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug))
      errors.push(`${where}: slug "${r.slug}" must be lowercase kebab-case`);
    else if (slugs.has(r.slug)) errors.push(`${where}: duplicate slug "${r.slug}"`);
    else slugs.add(r.slug);

    if (!curriculum.includes(`id: "${r.lessonId}"`))
      warnings.push(`${where}: not yet in the curriculum — update the module lesson list after import`);
    if (!r.whyItMatters) errors.push(`${where}: missing "### Why It Matters for the NCE"`);
    if (!r.coreExplanation.length) errors.push(`${where}: missing "### Overview" / teaching content`);
    if (!r.keyTakeaways.length)
      errors.push(`${where}: missing "### Key Takeaways" (or "### Memory Anchors" to derive them)`);
    if (!r.keyConcepts?.length) warnings.push(`${where}: no "### Key Concepts" bullets`);
    if (r.estimatedMinutes > 12) warnings.push(`${where}: ${r.estimatedMinutes} min exceeds the 12-min max`);

    const checks = r.knowledgeChecks ?? [];
    if (checks.length < 2) errors.push(`${where}: needs 2 knowledge checks (found ${checks.length})`);
    if (checks.length > 3) errors.push(`${where}: ${checks.length} knowledge checks exceeds the max of 3`);
    for (const c of checks) {
      if (c.options.length !== 4) errors.push(`${c.id}: needs exactly 4 options (found ${c.options.length})`);
      if (c.correctAnswerIndex < 0 || c.correctAnswerIndex >= c.options.length)
        errors.push(`${c.id}: missing or out-of-range "**Answer: X**"`);
      if (!c.explanation) errors.push(`${c.id}: missing "**Rationale:**"`);
      if (!c.stem) errors.push(`${c.id}: missing stem`);
    }
  });

  return { errors, warnings };
};

const importCompactBatch = (file: string, fm: FrontMatter, body: string, outPath: string) => {
  const moduleId = String(fm.moduleId ?? fm.id ?? "");
  const chunks = body
    .split(/^##\s+Lesson\s+/m)
    .slice(1)
    .map((chunk) => {
      const nl = chunk.indexOf("\n");
      return { heading: stripInline(chunk.slice(0, nl < 0 ? undefined : nl)), body: chunk.slice(nl + 1) };
    });
  const records = chunks.map((c, i) => buildLessonV2(moduleId, c.heading, c.body, fm, i + 1));
  const { errors, warnings } = validateV2(records, moduleId, fm);

  console.log(`parsed ${records.length} lessons from ${basename(file)} (module ${moduleId}, compact format)`);
  for (const r of records)
    console.log(
      `  ${r.lessonId}  ${r.estimatedMinutes}min  ${r.coreExplanation.length} blocks  ` +
        `${r.knowledgeChecks?.length ?? 0} checks  ${r.comparisonTables?.length ?? 0} tables`,
    );
  if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  if (errors.length) {
    console.error(`\n${errors.length} validation error(s) — nothing written:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  const emitted = records.map(({ slug, order, ...rest }) => {
    void slug;
    void order;
    return rest as LessonRecord;
  });
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, emit(emitted, moduleId, file));
  console.log(`\nwrote ${outPath}`);
};

/* --------------------------------- main ----------------------------------- */


const [file, ...rest] = process.argv.slice(2);
if (!file) {
  console.error(
    "usage: bun scripts/import-nce-batch.ts <batch.md> [--out <file.ts>]\n" +
      "       bun scripts/import-nce-batch.ts <questions.json> --questions [--out <file.ts>]",
  );
  process.exit(1);
}
const outFlag = rest.indexOf("--out");
if (rest.includes("--questions") || file.endsWith(".json")) {
  importQuestionBatch(file, outFlag >= 0 ? rest[outFlag + 1] : undefined);
  process.exit(0);
}
const src = readFileSync(file, "utf8");
const { fm, body } = parseFrontMatter(src);
const moduleId = String(fm.id ?? "");
if (!moduleId) {
  console.error("batch front matter is missing `id` (e.g. id: OR-01)");
  process.exit(1);
}
const outPath =
  outFlag >= 0
    ? rest[outFlag + 1]
    : `src/data/nce/library/lesson-content/${moduleId.toLowerCase()}.ts`;

const { sections } = splitSections(body, 1);
const lessonSections = sections.filter((s) => /^lesson\s*\d+/i.test(s.heading));

const records = lessonSections.map((s, i) => {
  const m = s.heading.match(/^lesson\s*(\d+)\s*[—–-]\s*(.*)$/i);
  const order = m ? Number(m[1]) : i + 1;
  const title = m ? m[2].trim() : s.heading;
  return buildLesson(moduleId, order, title, s.body, fm);
});

const { errors, warnings } = validate(records, moduleId);
console.log(`parsed ${records.length} lessons from ${basename(file)} (module ${moduleId})`);
for (const r of records) {
  console.log(
    `  ${r.lessonId}  ${r.estimatedMinutes}min  ${r.coreExplanation.length} blocks  ` +
      `${r.knowledgeChecks?.length ?? 0} checks  ${r.comparisonTables?.length ?? 0} tables`,
  );
}
if (warnings.length) {
  console.warn(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  - ${w}`);
}
if (errors.length) {
  console.error(`\n${errors.length} validation error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, emit(records, moduleId, file));
console.log(`\nwrote ${outPath}`);
