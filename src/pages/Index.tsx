import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import WeChatButton from "@/components/WeChatButton";
import MainLayout from "@/components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <MapSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default Index;
