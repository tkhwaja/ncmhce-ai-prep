import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ModuleRenderer from "@/components/library/ModuleRenderer";
import data from "@/data/library/dsm-5-tr.json";

describe("DSM-5-TR module renders without crashing", () => {
  it("renders fully", () => {
    expect(() => {
      render(
        <MemoryRouter>
          <ModuleRenderer data={data as any} moduleId="dsm-5-tr-diagnoses" />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
});
