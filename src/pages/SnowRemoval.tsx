import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import QuestionsBanner from "@/components/QuestionsBanner";
import ContactFormSection from "@/components/ContactFormSection";
import heroImage from "@/assets/sniega-hero.webp";
import parkingIcon from "@/assets/icons/parking.webp";
import smallHouseIcon from "@/assets/icons/small-house.webp";
import factoryIcon from "@/assets/icons/factory.webp";
import bigHouseIcon from "@/assets/icons/big-house.webp";

/* ───── Masked WebP Icon ───── */
const MaskedIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div
    className="w-14 h-14"
    style={{
      backgroundColor: "hsl(var(--primary))",
      WebkitMaskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskImage: `url(${src})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
    }}
    aria-label={alt}
  />
);

/* ───── Hero ───── */
const SnowHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Snow removal" className="w-full h-full object-cover" />
        <div />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center pb-10 sm:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-5">
              <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[849px]">
                {t("snowRemoval.hero.title")}
              </h1>
              <p className="max-w-[849px] text-primary-foreground text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7">
                {t("snowRemoval.hero.description")}
              </p>
            </div>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className="w-fit px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
            >
              {t("snowRemoval.hero.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Territory Cards ───── */
const TerritorySection = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: parkingIcon, title: t("snowRemoval.territories.parking") },
    { icon: smallHouseIcon, title: t("snowRemoval.territories.yards") },
    { icon: factoryIcon, title: t("snowRemoval.territories.industrial") },
    { icon: bigHouseIcon, title: t("snowRemoval.territories.company") },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
          {t("snowRemoval.territories.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {cards.map((card, i) => (
            <div key={i} className="p-5 bg-secondary flex items-center gap-5">
              <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                <MaskedIcon src={card.icon} alt={card.title} />
              </div>
              <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-black leading-8">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* Pricing banner */}
        <div className="border-2 border-primary flex flex-col sm:flex-row items-stretch">
          <div className="px-6 py-4 bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground text-2xl sm:text-3xl font-black uppercase leading-8">
              {t("snowRemoval.pricing.price")}
            </span>
          </div>
          <div className="flex-1 px-6 py-4 flex items-center">
            <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
              {t("snowRemoval.pricing.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const SnowRemoval = () => {
  return (
    <MainLayout>
      <SnowHero />
      <TerritorySection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default SnowRemoval;
