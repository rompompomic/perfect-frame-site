import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import QuestionsBanner from "@/components/QuestionsBanner";
import ContactFormSection from "@/components/ContactFormSection";
import heroImage from "@/assets/skirosana-hero.webp";
import truckIcon from "@/assets/icons/TruckSimple.svg";
import wasteIcon from "@/assets/icons/WasteSimple.svg";
import craneIcon from "@/assets/icons/OverheadCrane.svg";
import checkIcon from "@/assets/icons/CheckInCircle.svg";
import anyQuestionsImage from "@/assets/any-questions.webp";

/* ───── Hero ───── */
const SortingHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Sorting area" className="w-full h-full object-cover" />
        <div />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center pb-10 sm:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-5">
              <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[750px]">
                {t("sortingArea.hero.title")}
              </h1>
              <p className="max-w-[724px] text-primary-foreground text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7">
                {t("sortingArea.hero.description")}
              </p>
            </div>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className="w-fit px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
            >
              {t("sortingArea.hero.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Service Cards (3 cards) ───── */
const ServiceCardsSection = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: craneIcon,
      title: t("sortingArea.cards.card3.title"),
      description: t("sortingArea.cards.card3.description"),
    },
    {
      icon: wasteIcon,
      title: t("sortingArea.cards.card2.title"),
      description: t("sortingArea.cards.card2.description"),
    },
    {
      icon: truckIcon,
      title: t("sortingArea.cards.card1.title"),
      description: t("sortingArea.cards.card1.description"),
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
          {t("sortingArea.services.title")}
        </h2>
        <div className="flex flex-col md:flex-row gap-1">
          {cards.map((card, i) => (
            <div key={i} className="flex-1 p-5 bg-secondary flex flex-col gap-3">
              <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                <img src={card.icon} alt="" className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-black leading-8">{card.title}</h3>
                <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── CTA Banner ───── */
const CtaBanner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative px-4 sm:px-6 lg:px-28 py-8 sm:py-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={anyQuestionsImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-primary-foreground text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight max-w-[820px]">
          {t("sortingArea.ctaBanner.title")}{" "}
          <span className="text-nikami-blue">{t("sortingArea.ctaBanner.phone")}</span>
        </h2>
        <button
          onClick={() => navigate("/sanemt-piedavajumu")}
          className="shrink-0 px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
        >
          {t("sortingArea.ctaBanner.cta")}
        </button>
      </div>
    </section>
  );
};

/* ───── Equipment Section ───── */
const EquipmentSection = () => {
  const { t } = useTranslation();

  const equipment = t("sortingArea.equipment.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-8">
          {t("sortingArea.equipment.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* First card spans full height on left */}
          <div className="p-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2 md:row-span-2 lg:row-span-2">
            <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-black leading-8">{equipment[0]?.title}</h3>
            <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
              {equipment[0]?.description}
            </p>
          </div>
          {/* Remaining 4 cards in natural order: grid auto-places into cols 2-3 */}
          {equipment.slice(1).map((item, i) => (
            <div key={i} className="p-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2">
              <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-black leading-8">{item?.title}</h3>
              <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Concrete Recycling Section ───── */
const ConcreteRecyclingSection = () => {
  const { t } = useTranslation();
  const benefits = t("sortingArea.recycling.benefits", { returnObjects: true }) as string[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
          {t("sortingArea.recycling.title")}
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
              {t("sortingArea.recycling.description1")}
            </p>
            <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
              {t("sortingArea.recycling.description2")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {benefits.map((text, i) => (
              <div key={i} className="p-5 bg-secondary flex flex-col justify-between gap-5">
                <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                  <img src={checkIcon} alt="" className="w-10 h-10" />
                </div>
                <p className="text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const SortingArea = () => {
  return (
    <MainLayout>
      <SortingHero />
      <ServiceCardsSection />
      <CtaBanner />
      <EquipmentSection />
      <ConcreteRecyclingSection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default SortingArea;
