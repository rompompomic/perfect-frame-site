import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import heroImage from "@/assets/hero-image.webp";
import wasteIcon from "@/assets/icons/Waste.svg";
import containerIcon from "@/assets/icons/Container.svg";

const ServiceCard = ({
  icon,
  title,
  description,
  cta,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  cta: string;
}) => (
  <div className="flex-1 p-4 sm:p-5 bg-secondary flex flex-col gap-4 sm:gap-5 py-4 sm:py-[21px] my-0 md:my-[50px]">
    <div className="flex items-start gap-4 sm:gap-6 lg:gap-10">
      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-background flex flex-col items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-primary text-lg sm:text-xl lg:text-3xl font-black uppercase leading-tight">{title}</h3>
        <p className="text-foreground text-sm sm:text-base lg:text-xl">{description}</p>
      </div>
    </div>
    <button className="w-full px-4 py-2.5 sm:py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity">
      {cta}
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-nikami-blue" />
    </button>
  </div>
);

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Waste management facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-nikami-dark/80" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-16 pb-0">
          <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight max-w-4xl mb-6 sm:mb-8 lg:mb-12">
            {t("hero.title")}
          </h1>
        </div>

        {/* Service cards */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-1 pb-6 sm:pb-8 md:pb-2">
          <ServiceCard
            icon={<img src={containerIcon} alt="Konteineru noma" className="w-8 h-8 sm:w-10 sm:h-10" />}
            title={
              <>
                {t("hero.containerRental.title")
                  .split(" ")
                  .map((word, index) => (
                    <span key={index}>
                      {word}
                      {index < t("hero.containerRental.title").split(" ").length - 1 && " "}
                      {index === 0 && <br />}
                    </span>
                  ))}
              </>
            }
            description={t("hero.containerRental.description")}
            cta={t("hero.containerRental.cta")}
          />

          <ServiceCard
            icon={<img src={wasteIcon} alt="Atkritumu nodošana" className="w-8 h-8 sm:w-10 sm:h-10" />}
            title={t("hero.wasteDelivery.title")}
            description={t("hero.wasteDelivery.description")}
            cta={t("hero.wasteDelivery.cta")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
