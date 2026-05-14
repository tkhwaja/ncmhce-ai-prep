import { useState } from "react";
import { examInfoSections } from "@/data/exam-info";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ExamInfo = () => {
  const [activeSection, setActiveSection] = useState(examInfoSections[0].id);
  const currentSection = examInfoSections.find((s) => s.id === activeSection) || examInfoSections[0];

  const renderInline = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');

  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, i) => {
      // H3
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-base font-semibold text-foreground mt-7 mb-2">
            {block.replace("### ", "")}
          </h3>
        );
      }
      // H2 with separator above (except first)
      if (block.startsWith("## ")) {
        return (
          <div key={i}>
            {i > 0 && <Separator className="my-8" />}
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {block.replace("## ", "")}
            </h2>
          </div>
        );
      }

      // Quote / callout — light left-border style, no icon
      if (block.startsWith("> ")) {
        const text = block.replace(/^> /gm, "");
        return (
          <blockquote
            key={i}
            className="my-4 border-l-2 border-primary bg-primary/5 rounded-r-md px-4 py-3 text-[15px] text-foreground leading-7"
            dangerouslySetInnerHTML={{ __html: renderInline(text) }}
          />
        );
      }

      // Bulleted list — clean disc, primary marker
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc marker:text-primary pl-5 space-y-1.5 mb-4 text-[15px] leading-7 text-muted-foreground">
            {items.map((item, j) => (
              <li
                key={j}
                dangerouslySetInnerHTML={{ __html: renderInline(item.replace(/^- /, "")) }}
              />
            ))}
          </ul>
        );
      }

      // Numbered list — native ol
      if (block.match(/^\d+\./)) {
        const items = block.split("\n").filter((l) => l.match(/^\d+\./));
        return (
          <ol key={i} className="list-decimal marker:text-primary marker:font-semibold pl-5 space-y-1.5 mb-4 text-[15px] leading-7 text-muted-foreground">
            {items.map((item, j) => (
              <li
                key={j}
                dangerouslySetInnerHTML={{ __html: renderInline(item.replace(/^\d+\.\s*/, "")) }}
              />
            ))}
          </ol>
        );
      }

      // Paragraph
      return (
        <p
          key={i}
          className="text-[15px] leading-7 text-muted-foreground mb-4"
          dangerouslySetInnerHTML={{ __html: renderInline(block) }}
        />
      );
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-1">Exam Information</h1>
      <p className="text-muted-foreground mb-8">Everything you need to know about the NCMHCE</p>

      {/* Mobile tabs */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-3 mb-4 w-full">
        {examInfoSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors border flex-shrink-0",
              activeSection === section.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted text-muted-foreground border-transparent",
            )}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="md:flex md:gap-8">
        {/* TOC Sidebar */}
        <div className="hidden md:block w-56 flex-shrink-0">
          <nav className="sticky top-6 space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-3">Sections</p>
            {examInfoSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>


        {/* Content */}
        <Card className="card-elevated flex-1">
          <CardContent className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">{currentSection.title}</h2>
            {renderContent(currentSection.content)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamInfo;
