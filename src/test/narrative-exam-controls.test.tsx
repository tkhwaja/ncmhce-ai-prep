import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import NarrativePage from "@/pages/NarrativePage";

const narrative = {
  id: "case-1",
  title: "Test Case",
  category: "Assessment",
  difficulty: "Beginner",
  recommendedTimeBySectionMinutes: [7],
  clientInfo: {
    age: 30, sexAssignedAtBirth: "F", genderIdentity: "Woman", pronouns: "she/her",
    sexualOrientation: "Straight", raceEthnicity: "—", relationshipStatus: "Single",
    setting: "Clinic", payment: "Self-pay", typeOfCounseling: "Individual",
    provisionalDiagnosis: "—",
  },
  presentingProblem: "Presenting problem",
  mentalStatusObservation: "MSE",
  familyHistory: "Family",
  workHistory: "Work",
  intakeSessionSummary: "Intake",
  sections: [
    {
      sessionLabel: "First session",
      sectionNarrative: "Section narrative",
      questions: [1, 2].map((n) => ({
        id: `q${n}`,
        questionNumber: n,
        domain: "Intake/assessment/diagnosis",
        stem: `Question ${n}`,
        options: ["Choice A", "Choice B"],
        correctAnswer: 0,
        explanation: "Explanation",
      })),
    },
  ],
};

vi.mock("@/data/narratives", () => ({
  getNarrativeById: (id: string) => (id === "case-1" ? narrative : undefined),
  getNarrativeSectionMinutesAt: () => 7,
  totalQuestionCount: () => 2,
  NARRATIVE_DOMAINS: ["Intake/assessment/diagnosis"],
}));
vi.mock("@/contexts/AuthContext", () => ({ useAuth: () => ({ user: null }) }));
vi.mock("@/contexts/ExamTrackContext", () => ({ useExamTrack: () => ({ track: "ncmhce" }) }));
vi.mock("@/hooks/useStudyPartnerListingPrompt", () => ({
  useStudyPartnerListingPrompt: () => ({ shouldPrompt: false, dismiss: vi.fn() }),
}));
vi.mock("@/lib/meta-pixel", () => ({ trackMetaEvent: vi.fn() }));
vi.mock("@/components/NarrativeReviewChat", () => ({ default: () => null }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: vi.fn() } }));

const openCase = () =>
  render(
    <MemoryRouter initialEntries={["/narrative/case-1"]}>
      <Routes>
        <Route path="/narrative/:id" element={<NarrativePage />} />
      </Routes>
    </MemoryRouter>,
  );
const tick = (seconds: number) => act(() => { vi.advanceTimersByTime(seconds * 1000); });

describe("NCMHCE case controls", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => { cleanup(); vi.useRealTimers(); });

  it("pauses the timer and resumes counting from the same time", () => {
    openCase();
    tick(3);
    expect(screen.getByText("06:57")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Pause" }));
    tick(10);
    expect(screen.getByText(/Paused/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Resume" }));
    expect(screen.getByText("06:57")).toBeTruthy();
    tick(2);
    expect(screen.getByText("06:55")).toBeTruthy();
  });

  it("only clears answers after confirming start over", () => {
    openCase();
    fireEvent.click(screen.getByText("Choice A"));
    fireEvent.click(screen.getByRole("button", { name: "Start over" }));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.getByRole("radio", { name: "Choice A" }).getAttribute("aria-checked")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Start over" }));
    fireEvent.click(screen.getByRole("button", { name: "Clear and start over" }));
    expect(screen.getByRole("radio", { name: "Choice A" }).getAttribute("aria-checked")).toBe("false");
    expect(screen.getByText("07:00")).toBeTruthy();
  });
});
