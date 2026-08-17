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
    difficulty: (fm.difficulty as string) || undefined,
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

/* --------------------------------- main ----------------------------------- */

const [file, ...rest] = process.argv.slice(2);
if (!file) {
  console.error("usage: bun scripts/import-nce-batch.ts <batch.md> [--out <file.ts>]");
  process.exit(1);
}
const outFlag = rest.indexOf("--out");
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
