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
      <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-nikami-blue">
        <path d="M17.7806 8.03104L11.0306 14.781C10.8899 14.9218 10.699 15.0008 10.5 15.0008C10.301 15.0008 10.1101 14.9218 9.96937 14.781C9.82864 14.6403 9.74958 14.4494 9.74958 14.2504C9.74958 14.0514 9.82864 13.8605 9.96937 13.7198L15.4397 8.25042H0.75C0.551088 8.25042 0.360322 8.1714 0.21967 8.03075C0.0790178 7.8901 0 7.69933 0 7.50042C0 7.3015 0.0790178 7.11074 0.21967 6.97009C0.360322 6.82943 0.551088 6.75042 0.75 6.75042H15.4397L9.96937 1.28104C9.82864 1.14031 9.74958 0.94944 9.74958 0.750417C9.74958 0.551394 9.82864 0.360523 9.96937 0.219792C10.1101 0.0790615 10.301 0 10.5 0C10.699 0 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8504 7.03945 17.9057 7.12216 17.9434 7.21321C17.9812 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9812 7.69657 17.9434 7.78762C17.9057 7.87867 17.8504 7.96139 17.7806 8.03104Z" fill="currentColor"/>
      </svg>
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
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-10 pb-6 sm:pb-10 mb-6 sm:mb-10">
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
