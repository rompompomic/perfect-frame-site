import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import heroImage from "@/assets/hero-image.webp";
import discountTag from "@/assets/icons/discount-tag.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";

interface Promotion {
  title: string;
  description: string;
  cta: string;
}

const PromotionCard = ({ title, description, cta }: Promotion) => (
  <div className="flex-1 min-w-[280px] p-5 bg-secondary flex flex-col gap-5">
    <div className="flex gap-10">
      {/* Tag icon */}
      <div className="w-36 min-h-[140px] bg-background flex items-center justify-center shrink-0">
        <img src={discountTag} alt="" className="w-[60px] h-[70px]" />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-primary text-2xl md:text-3xl font-black uppercase leading-8">
            {title}
          </h3>
          <p className="text-foreground text-lg md:text-xl font-normal leading-7">
            {description}
          </p>
        </div>
        <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 hover:bg-primary/90 transition-colors">
          <span className="text-primary-foreground text-base font-semibold leading-6">
            {cta}
          </span>
          <img src={arrowRight} alt="" className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const Promotions = () => {
  const { t } = useTranslation();
  const promotions = t("promotions.items", { returnObjects: true }) as Promotion[];

  return (
    <MainLayout>
      {/* Hero header with navbar */}
      <section className="relative w-full flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Promotions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-nikami-dark/80" />
        </div>
        <div className="relative z-10">
          <Navbar />
        </div>
      </section>

      {/* Title section */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-28 pt-12 md:pt-20 pb-10 flex flex-col gap-5">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px]">
          {t("promotions.title")}
        </h1>
        <p className="max-w-[933px] text-foreground text-lg md:text-xl font-medium leading-7">
          {t("promotions.subtitle")}
        </p>
      </div>

      {/* Promotions grid */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-28 pb-12 md:pb-20">
        <div className="flex flex-col gap-1">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-1">
            {promotions.slice(0, 2).map((promo, i) => (
              <PromotionCard key={i} {...promo} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-1">
            {promotions.slice(2, 4).map((promo, i) => (
              <PromotionCard key={i} {...promo} />
            ))}
          </div>
        </div>
      </div>

      <WeChatButton />
    </MainLayout>
  );
};

export default Promotions;
