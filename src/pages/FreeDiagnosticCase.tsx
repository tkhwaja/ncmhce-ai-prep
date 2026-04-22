import NarrativePage from "./NarrativePage";
import { freeDiagnosticCase } from "@/data/narratives";

const FreeDiagnosticCase = () => (
  <NarrativePage narrativeIdOverride={freeDiagnosticCase.id} publicMode />
);

export default FreeDiagnosticCase;
