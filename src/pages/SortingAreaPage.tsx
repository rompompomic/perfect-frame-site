import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import QuestionsBanner from "@/components/QuestionsBanner";
import ContactFormSection from "@/components/ContactFormSection";
import MapSection from "@/components/MapSection";
import heroImage from "@/assets/skirosanas-hero.webp";
import jauktiImg from "@/assets/waste/jaukti-neskiroti.webp";
import tiriImg from "@/assets/waste/tiri-buvniecibas.webp";
import betonaImg from "@/assets/waste/monolitas-betona.webp";
import elektroImg from "@/assets/waste/elektrotehnika.webp";
import kokaImg from "@/assets/waste/koka-atkritumi.webp";
import lielgabaritaImg from "@/assets/waste/lielgabarita.webp";

/* ───── Hero ───── */
const SortingHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Šķirošanas laukums" className="w-full h-full object-cover" />
        <div />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center pb-10 sm:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-5">
              <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[1000px]">
                {t("sortingAreaPage.hero.title")}
              </h1>
              <p className="max-w-[560px] text-primary-foreground text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7">
                {t("sortingAreaPage.hero.description")}{" "}
                <span className="font-bold">{t("sortingAreaPage.hero.descriptionBold")}</span>
              </p>
            </div>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className="w-fit px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
            >
              {t("sortingAreaPage.hero.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Waste Cards ───── */
const WasteCardsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cards = [
    {
      img: betonaImg,
      title: t("sortingAreaPage.cards.concrete.title"),
      price: t("sortingAreaPage.cards.concrete.price"),
    },
    { img: tiriImg, title: t("sortingAreaPage.cards.clean.title"), price: t("sortingAreaPage.cards.clean.price") },
    { img: jauktiImg, title: t("sortingAreaPage.cards.mixed.title"), price: t("sortingAreaPage.cards.mixed.price") },
    {
      img: lielgabaritaImg,
      title: t("sortingAreaPage.cards.bulky.title"),
      price: t("sortingAreaPage.cards.bulky.price"),
    },
    { img: kokaImg, title: t("sortingAreaPage.cards.wood.title"), price: t("sortingAreaPage.cards.wood.price") },
    {
      img: elektroImg,
      title: t("sortingAreaPage.cards.electronics.title"),
      price: t("sortingAreaPage.cards.electronics.price"),
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
          {t("sortingAreaPage.cards.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {cards.map((card, i) => (
            <div key={i} className="bg-secondary p-5 flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-5">
                <img src={card.img} alt={card.title} className="w-full h-60 object-cover" />
                <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-8">
                  {card.title}
                </h3>
              </div>
              <div className="px-6 py-3 bg-background inline-block w-fit">
                <span className="text-primary text-lg sm:text-xl font-bold leading-7">{card.price}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-foreground text-base font-medium leading-6 max-w-[810px]">
          <span className="font-bold">{t("sortingAreaPage.cards.noticeTitle")}</span>{" "}
          {t("sortingAreaPage.cards.noticeText")}
        </p>
        <button
          onClick={() => navigate("/atkritumu-nodosana")}
          className="w-full px-4 py-3 bg-primary rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
        >
          {t("sortingAreaPage.cards.cta")}
        </button>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const SortingAreaPage = () => {
  return (
    <MainLayout>
      <SortingHero />
      <WasteCardsSection />
      <MapSection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default SortingAreaPage;
