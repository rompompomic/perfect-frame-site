import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import mapPinSimpleAreaIcon from "@/assets/icons/MapPinSimpleArea.svg";
import hardHatIcon from "@/assets/icons/HardHat.svg";
import lightningIcon from "@/assets/icons/Lightning.svg";
import bulldozerIcon from "@/assets/icons/Bulldozer.svg";
import snowflakeIcon from "@/assets/icons/Snowflake.svg";
import certificateIcon from "@/assets/icons/Certificate.svg";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: string;
}

const ServiceCard = ({ icon, title, description, cta = "CTA" }: ServiceCardProps) => (
  <div className="flex-1 min-w-0 p-4 sm:p-5 bg-background border-2 border-secondary flex flex-col justify-between gap-4 sm:gap-5">
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-secondary flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-black uppercase leading-tight">{title}</h3>
        <p className="text-foreground text-sm sm:text-base lg:text-xl">{description}</p>
      </div>
    </div>
    <button className="w-full px-4 py-2.5 sm:py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity">
      {cta}
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
);

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <img src={mapPinSimpleAreaIcon} alt="Šķirošanas laukums" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
    },
    {
      icon: <img src={hardHatIcon} alt="Būvgružu pārstrāde" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
    },
    {
      icon: <img src={lightningIcon} alt="Baltās tehnikas pieņemšana" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
    },
  ];

  const services2 = [
    {
      icon: <img src={bulldozerIcon} alt="Ēku un būvju demontāža" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.3.title"),
      description: t("services.items.3.description"),
    },
    {
      icon: <img src={snowflakeIcon} alt="Sniega izvešana" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.4.title"),
      description: t("services.items.4.description"),
    },
    {
      icon: <img src={certificateIcon} alt="Zaļo ēku sertifikāti" className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: t("services.items.5.title"),
      description: t("services.items.5.description"),
    },
  ];
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-6 sm:pb-10 mb-6 sm:mb-10">
      <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 sm:mb-10">
        {t("services.title")}
      </h2>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {services2.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
