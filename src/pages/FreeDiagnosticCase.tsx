import { Helmet } from "react-helmet-async";
import NarrativePage from "./NarrativePage";
import { freeDiagnosticCase } from "@/data/narratives";

const FreeDiagnosticCase = () => (
  <>
    <Helmet>
      <title>Free NCMHCE Diagnostic Case | The Exam Path</title>
      <meta name="description" content="Try a full realistic NCMHCE clinical case narrative free — practice diagnosis, treatment planning, and clinical reasoning before the real exam." />
      <link rel="canonical" href="https://theexampath.com/free-diagnostic-case" />
      <meta property="og:title" content="Free NCMHCE Diagnostic Case | The Exam Path" />
      <meta property="og:description" content="Try a full realistic NCMHCE clinical case narrative free — practice diagnosis, treatment planning, and clinical reasoning before the real exam." />
      <meta property="og:url" content="https://theexampath.com/free-diagnostic-case" />
    </Helmet>
    <NarrativePage narrativeIdOverride={freeDiagnosticCase.id} publicMode />
  </>
);

export default FreeDiagnosticCase;
