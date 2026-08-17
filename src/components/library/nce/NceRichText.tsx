import { Fragment } from "react";

/**
 * Renders the markdown-lite blocks produced by the NCE content importer:
 * `## Heading`, `### Sub-heading`, bullet/numbered lists, and inline **bold**.
 * Deliberately tiny — authored batches only use these constructs.
 */

const inline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );

const isListBlock = (block: string) =>
  block.split(/\n/).every((l) => /^\s*(?:[-*]|\d+\.)\s+/.test(l.trim()) || !l.trim());

const NceRichText = ({ blocks }: { blocks: string[] }) => (
  <div className="space-y-3">
    {blocks.map((block, i) => {
      const h2 = block.match(/^##\s+(.*)$/);
      if (h2)
        return (
          <h3 key={i} className="pt-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {h2[1]}
          </h3>
        );

      const h3 = block.match(/^###\s+(.*)$/);
      if (h3)
        return (
          <h4 key={i} className="pt-2 text-sm font-semibold text-foreground">
            {h3[1]}
          </h4>
        );

      if (isListBlock(block)) {
        const items = block
          .split(/\n/)
          .map((l) => l.trim().replace(/^(?:[-*]|\d+\.)\s+/, ""))
          .filter(Boolean);
        return (
          <ul key={i} className="space-y-1.5 pl-1">
            {items.map((item, j) => (
              <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-[2px] text-primary">•</span>
                <span>{inline(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p key={i} className="text-sm leading-relaxed text-muted-foreground">
          {inline(block)}
        </p>
      );
    })}
  </div>
);

export default NceRichText;
