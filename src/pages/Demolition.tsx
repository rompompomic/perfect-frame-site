import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import QuestionsBanner from "@/components/QuestionsBanner";
import ContactFormSection from "@/components/ContactFormSection";
import heroImage from "@/assets/demontaza-hero.webp";
import bulldozerIcon from "@/assets/icons/Bulldozer.svg";
import hardHatIcon from "@/assets/icons/HardHat.svg";

/* ───── Hero ───── */
const DemolitionHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Demolition works" className="w-full h-full object-cover" />
        <div />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center pb-10 sm:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-5">
              <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[849px]">
                {t("demolition.hero.title")}
              </h1>
              <p className="max-w-[724px] text-primary-foreground text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7">
                {t("demolition.hero.description")}
              </p>
            </div>
            <button
              onClick={() => navigate("/kontakti")}
              className="w-36 px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
            >
              {t("common.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── About + Service Types ───── */
const ServiceTypesSection = () => {
  const { t } = useTranslation();

  const types = [
    {
      number: "1",
      title: t("demolition.serviceTypes.type1.title"),
      description: t("demolition.serviceTypes.type1.description"),
      icon: bulldozerIcon,
    },
    {
      number: "2",
      title: t("demolition.serviceTypes.type2.title"),
      description: t("demolition.serviceTypes.type2.description"),
      icon: hardHatIcon,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
            {t("demolition.about.title")}
          </h2>
          <p className="max-w-[933px] text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
            {t("demolition.about.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-8">
            {t("demolition.serviceTypes.title")}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          {types.map((type, i) => (
            <div key={i} className="flex-1 p-5 bg-secondary flex flex-col gap-5">
              <div className="flex items-start gap-6 sm:gap-10">
                <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-black">{type.number}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-primary text-lg sm:text-xl lg:text-2xl font-black leading-8">{type.title}</h4>
                  <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Services List ───── */
const ServicesListSection = () => {
  const { t } = useTranslation();
  const services = t("demolition.services.items", { returnObjects: true }) as string[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-8">
            {t("demolition.services.title")}
          </h3>
          <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
            {t("demolition.services.subtitle")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-1">
            {services
              .filter((_, i) => i % 2 === 0)
              .map((text, i) => (
                <div key={i} className="p-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2">
                  <p className="text-primary text-base sm:text-lg lg:text-2xl font-black leading-8">{text}</p>
                </div>
              ))}
          </div>
          {/* Right column */}
          <div className="flex-1 flex flex-col gap-1">
            {services
              .filter((_, i) => i % 2 !== 0)
              .map((text, i) => (
                <div key={i} className="p-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2">
                  <p className="text-primary text-base sm:text-lg lg:text-2xl font-black leading-8">{text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const Demolition = () => {
  return (
    <MainLayout>
      <DemolitionHero />
      <ServiceTypesSection />
      <ServicesListSection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default Demolition;
