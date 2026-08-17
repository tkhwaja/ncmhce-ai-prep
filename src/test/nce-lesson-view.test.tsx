import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NceLessonView from "@/components/library/nce/NceLessonView";

vi.mock("@/hooks/useNceLibraryProgress", () => ({
  useNceLibraryProgress: () => ({
    progress: { lessons: {} },
    loading: false,
    markOpened: vi.fn(),
    setCompleted: vi.fn(),
    recordCheckAccuracy: vi.fn(),
    isCompleted: () => false,
    completedCount: () => 0,
  }),
}));

describe("NceLessonView with imported OR-01 content", () => {
  it("renders the authored teaching sections, table and knowledge checks", () => {
    render(<NceLessonView lessonId="OR-01-L03" onNavigate={vi.fn()} onBack={vi.fn()} />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "The Six Current NBCC Domains",
    );
    expect(screen.getByText("Why this matters on the NCE")).toBeTruthy();
    expect(screen.getByText("Core explanation")).toBeTruthy();
    expect(screen.getByText("Key takeaways")).toBeTruthy();
    expect(screen.getByText("Knowledge check")).toBeTruthy();
    expect(screen.queryByText("Content in production")).toBeNull();

    // the authored domain-distribution table renders as a real table
    const table = document.querySelector("table");
    expect(table).toBeTruthy();
    expect(table?.querySelectorAll("tbody tr").length).toBe(6);

    // markdown-lite is rendered, not printed
    expect(document.body.textContent).not.toMatch(/\*\*/);
    expect(document.body.textContent).not.toMatch(/^###\s/m);
  });

  it("renders lesson-level objectives and exam traps when authored", () => {
    render(<NceLessonView lessonId="OR-01-L01" onNavigate={vi.fn()} onBack={vi.fn()} />);
    expect(screen.getByText("Learning objectives")).toBeTruthy();
    expect(screen.getByText("Do not confuse with")).toBeTruthy();
    expect(screen.getAllByText(/Knowledge check/).length).toBeGreaterThan(0);
  });
});
