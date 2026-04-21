import { useState } from "react";
import { examInfoSections } from "@/data/exam-info";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react";

const ExamInfo = () => {
  const [activeSection, setActiveSection] = useState(examInfoSections[0].id);
  const currentSection = examInfoSections.find((s) => s.id === activeSection) || examInfoSections[0];

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      // Headers
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-base font-semibold text-foreground mt-6 mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary shrink-0" />
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-lg font-bold text-foreground mt-8 mb-3 pb-2 border-b border-border">
            {block.replace("## ", "")}
          </h2>
        );
      }

      // Callout detection — lines starting with > or containing key phrases
      if (block.startsWith("> ")) {
        const text = block.replace(/^> /gm, "");
        return (
          <Alert key={i} className="border-primary/30 bg-primary/5 my-3">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </Alert>
        );
      }

      // Bullet lists
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 mb-4 ml-1">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }

      // Numbered lists
      if (block.match(/^\d+\./)) {
        const items = block.split("\n").filter(l => l.match(/^\d+\./));
        return (
          <ol key={i} className="space-y-2 mb-4 ml-1">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                <Badge variant="outline" className="h-5 w-5 p-0 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  {j + 1}
                </Badge>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              </li>
            ))}
          </ol>
        );
      }

      // Regular paragraphs
      return (
        <p key={i} className="text-sm text-muted-foreground mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
      );
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-2">Exam Information</h1>
      <p className="text-muted-foreground mb-6">Everything you need to know about the NCMHCE</p>

      <div className="flex gap-6">
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
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-1">{currentSection.title}</h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-6" />
            {renderContent(currentSection.content)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamInfo;
