import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WeChatButton from "@/components/WeChatButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <MapSection />
      <Footer />
      <WeChatButton />
    </div>
  );
};

export default Index;
