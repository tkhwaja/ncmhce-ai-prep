import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeatureSpotlight from "@/components/landing/FeatureSpotlight";
import HowItWorks from "@/components/landing/HowItWorks";
import ComparisonTable from "@/components/landing/ComparisonTable";
import WhoItsFor from "@/components/landing/WhoItsFor";
import Testimonials from "@/components/landing/Testimonials";
import PricingSection from "@/components/landing/PricingSection";
import WaitlistCTA from "@/components/landing/WaitlistCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import FoundingBanner from "@/components/landing/FoundingBanner";
import FoundingPopup from "@/components/landing/FoundingPopup";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is The Exam Path?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Exam Path (formerly TheCounselorExam.com) is an exam prep platform built specifically for the NCMHCE. It combines realistic clinical case narratives, a full-length timed practice exam, domain analytics, flashcards, a DSM-5-TR library, and optional in-session support.",
      },
    },
    {
      "@type": "Question",
      name: "How many practice cases are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The platform currently includes 14+ individual clinical case narratives covering a wide range of diagnoses, plus a full-length timed practice exam, with more cases added regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Who writes the narratives and questions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every clinical case, practice question, and rationale is developed by licensed therapists with real-world clinical experience, alongside clinical psychologists, then reviewed by current counseling students for accuracy and relevance.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anyone preparing for the NCMHCE — first-time test takers, repeat test takers wanting deeper domain insight, and counseling students seeking early clinical simulation practice.",
      },
    },
    {
      "@type": "Question",
      name: "Will my progress be saved if I leave mid-exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Responses are auto-saved as you work through a narrative or practice exam, and you can resume exactly where you left off.",
      },
    },
    {
      "@type": "Question",
      name: "Can I retake practice exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can retake any narrative or practice exam as many times as you want, and each attempt is tracked separately.",
      },
    },
  ],
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>The Exam Path | Free NCMHCE Diagnostic Case</title>
      <meta name="description" content="Take a free NCMHCE diagnostic case, review 20+ narrative simulations, and study with detailed visual guides built for the real exam." />
      <link rel="canonical" href="https://theexampath.com/" />
      <meta property="og:title" content="The Exam Path | Free NCMHCE Diagnostic Case" />
      <meta property="og:description" content="Take a free NCMHCE diagnostic case, review 20+ narrative simulations, and study with detailed visual guides built for the real exam." />
      <meta property="og:url" content="https://theexampath.com/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <FoundingBanner />
    <Navbar />
    <HeroSection />
    <TrustBar />
    <Testimonials />
    <PainPointsSection />
    <SolutionSection />
    <FeatureSpotlight />
    <HowItWorks />
    <ComparisonTable />
    <WhoItsFor />
    <PricingSection />
    <WaitlistCTA />
    <FAQSection />
    <Footer />
    <FoundingPopup />
  </div>
);

export default Index;

