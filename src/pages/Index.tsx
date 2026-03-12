import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FrameworkSection from "@/components/FrameworkSection";
import ProofSection from "@/components/ProofSection";
import ServicesSection from "@/components/ServicesSection";
import ContentExamplesSection from "@/components/ContentExamplesSection";
import EarlyPartnerSection from "@/components/EarlyPartnerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="framework">
        <FrameworkSection />
      </div>
      <div id="proof">
        <ProofSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="content">
        <ContentExamplesSection />
      </div>
      <div id="partners">
        <EarlyPartnerSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
