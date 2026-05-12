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
import WaitlistCTA from "@/components/landing/WaitlistCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustBar />
    <PainPointsSection />
    <SolutionSection />
    <FeatureSpotlight />
    <HowItWorks />
    <ComparisonTable />
    <WhoItsFor />
    <Testimonials />
    <WaitlistCTA />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
