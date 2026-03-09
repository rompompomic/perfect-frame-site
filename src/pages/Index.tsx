import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
