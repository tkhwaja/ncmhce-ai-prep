import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import NceExamRunner from "@/pages/NceExamRunner";

vi.mock("@/config/exam-tracks", () => ({ NCE_ENABLED: true }));
vi.mock("@/data/nce/practice-exams", () => ({
  getNCEPracticeExamById: (id: string) => ({ id, title: `Exam ${id}`, timeLimitMinutes: 225 }),
  getNCEExamItems: () => [1, 2].map((sequence) => ({
    id: `q${sequence}`, sequence, stem: `Question ${sequence}`, options: ["Choice A", "Choice B"],
    correctAnswerIndex: 0, scored: true, blueprintDomainName: "Assessment", topic: "Assessment",
    optionRationales: ["Reason A", "Reason B"], explanation: "Explanation", keyTakeaway: "Takeaway",
  })),
}));

const openExam = (id = "pe-01") => render(
  <MemoryRouter initialEntries={[`/exam/${id}`]}>
    <Routes>
      <Route path="/exam/:examId" element={<NceExamRunner />} />
      <Route path="/practice-exams" element={<p>Exam directory</p>} />
    </Routes>
  </MemoryRouter>,
);
const saved = (id = "pe-01") => JSON.parse(localStorage.getItem(`nce-exam-attempt:${id}`) ?? "{}");
const tick = (seconds: number) => act(() => { vi.advanceTimersByTime(seconds * 1000); });

describe.each(["pe-01", "pe-02"])("NCE exam controls: %s", (id) => {
  beforeEach(() => { localStorage.clear(); vi.useFakeTimers(); });
  afterEach(() => { cleanup(); vi.useRealTimers(); });

  it("pauses time and preserves answers through reload, then resumes counting", () => {
    const view = openExam(id);
    fireEvent.click(screen.getByRole("button", { name: /Choice A/ }));
    tick(3);
    fireEvent.click(screen.getByRole("button", { name: "Pause timer" }));
    tick(10);
    expect(saved(id).secondsLeft).toBe(13497);
    expect(saved(id).answers).toEqual({ q1: 0 });
    view.unmount();
    openExam(id);
    tick(5);
    expect(saved(id).secondsLeft).toBe(13497);
    fireEvent.click(screen.getByRole("button", { name: "Resume exam" }));
    tick(2);
    expect(saved(id).secondsLeft).toBe(13495);
  });

  it("stops with saved progress and can resume from the saved question", () => {
    const view = openExam(id);
    fireEvent.click(screen.getByRole("button", { name: /Choice B/ }));
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    tick(2);
    fireEvent.click(screen.getByRole("button", { name: "Stop exam" }));
    fireEvent.click(screen.getByRole("button", { name: "Save and exit" }));
    expect(saved(id)).toMatchObject({ paused: true, index: 1, answers: { q1: 1 }, secondsLeft: 13498 });
    view.unmount();
    openExam(id);
    fireEvent.click(screen.getByRole("button", { name: "Resume exam" }));
    expect(saved(id).index).toBe(1);
  });

  it("only resets the attempt after confirmation, clearing answers and flags and resetting time", () => {
    openExam(id);
    fireEvent.click(screen.getByRole("button", { name: /Choice A/ }));
    fireEvent.click(screen.getByRole("button", { name: "Flag" }));
    tick(4);
    fireEvent.click(screen.getByRole("button", { name: "Start over" }));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(saved(id).answers).toEqual({ q1: 0 });
    fireEvent.click(screen.getByRole("button", { name: "Start over" }));
    fireEvent.click(screen.getByRole("button", { name: "Clear and start over" }));
    expect(saved(id)).toEqual({ answers: {}, flags: [], index: 0, secondsLeft: 13500, breakTaken: false, submitted: false, paused: false });
  });
});