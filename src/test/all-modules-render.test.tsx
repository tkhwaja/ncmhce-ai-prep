import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ModuleRenderer from "@/components/library/ModuleRenderer";
import { libraryModules } from "@/data/library-modules";

describe("All library modules render without crashing", () => {
  for (const mod of libraryModules) {
    if (!mod.data) continue;
    if (mod.moduleType === "glossary") continue;
    if (mod.id === "exam-overview-and-blueprint") continue;
    if (mod.id === "assessment-and-testing") continue;
    it(`renders ${mod.id}`, () => {
      let err: any = null;
      try {
        render(
          <MemoryRouter>
            <ModuleRenderer data={mod.data as any} moduleId={mod.id} />
          </MemoryRouter>
        );
      } catch (e) { err = e; }
      if (err) {
        console.error(`Module ${mod.id} crashed:`, err.message);
      }
      expect(err).toBeNull();
    });
  }
});
