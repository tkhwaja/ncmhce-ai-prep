import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NarrativePage from "./NarrativePage";
import { freeDiagnosticCase } from "@/data/narratives";
import { trackMetaEvent } from "@/lib/meta-pixel";

const FreeDiagnosticCase = () => {
  useEffect(() => {
    // Fire Lead when the user starts the free diagnostic case
    trackMetaEvent("Lead", {
      content_name: "Free Diagnostic Case",
      content_category: "free_diagnostic_start",
    });
  }, []);

  return (
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
};

export default FreeDiagnosticCase;
