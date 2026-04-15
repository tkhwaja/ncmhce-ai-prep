import { useState } from "react";
import { examInfoSections } from "@/data/exam-info";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ExamInfo = () => {
  const [activeSection, setActiveSection] = useState(examInfoSections[0].id);
  const currentSection = examInfoSections.find((s) => s.id === activeSection) || examInfoSections[0];

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("### ")) {
        return <h3 key={i} className="text-base font-semibold text-foreground mt-5 mb-2">{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("## ")) {
        return <h2 key={i} className="text-lg font-semibold text-foreground mt-6 mb-3">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-1 mb-3">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d+\./)) {
        const items = block.split("\n").filter(l => l.match(/^\d+\./));
        return (
          <ol key={i} className="space-y-1 mb-3 list-decimal list-inside">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            ))}
          </ol>
        );
      }
      return <p key={i} className="text-sm text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Exam Information</h1>

      <div className="flex gap-6">
        {/* TOC Sidebar */}
        <div className="hidden md:block w-56 flex-shrink-0">
          <nav className="sticky top-6 space-y-1">
            {examInfoSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-3 mb-4 w-full">
          {examInfoSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <Card className="card-elevated flex-1">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">{currentSection.title}</h2>
            {renderContent(currentSection.content)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamInfo;
