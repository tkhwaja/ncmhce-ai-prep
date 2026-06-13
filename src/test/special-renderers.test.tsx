import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ExamOverviewRenderer from "@/components/library/ExamOverviewRenderer";
import AssessmentTestingRenderer from "@/components/library/AssessmentTestingRenderer";
import GlossaryView from "@/components/library/GlossaryView";
import { libraryModules } from "@/data/library-modules";

describe("Special-case renderers", () => {
  it("renders exam overview", () => {
    const m = libraryModules.find((x) => x.id === "exam-overview-and-blueprint");
    expect(m?.data).toBeTruthy();
    expect(() =>
      render(<MemoryRouter><ExamOverviewRenderer data={m!.data as any} /></MemoryRouter>)
    ).not.toThrow();
  });
  it("renders assessment + testing", () => {
    const m = libraryModules.find((x) => x.id === "assessment-and-testing");
    expect(m?.data).toBeTruthy();
    expect(() =>
      render(<MemoryRouter><AssessmentTestingRenderer data={m!.data as any} /></MemoryRouter>)
    ).not.toThrow();
  });
  it("renders glossary", () => {
    const m = libraryModules.find((x) => x.moduleType === "glossary");
    if (!m?.data?.terms) return;
    expect(() =>
      render(<MemoryRouter><GlossaryView terms={(m.data as any).terms} /></MemoryRouter>)
    ).not.toThrow();
  });
});
