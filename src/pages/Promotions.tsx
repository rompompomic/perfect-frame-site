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
  <div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
      {/* Tag icon */}
      <div className="w-full lg:w-36 h-28 lg:h-auto lg:self-stretch bg-background flex items-center justify-center shrink-0">
        <img src={discountTag} alt="" className="w-[60px] h-[70px]" />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="text-primary text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight sm:leading-8">
            {title}
          </h3>
          <p className="text-foreground text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7">
            {description}
          </p>
        </div>
        <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 hover:bg-primary/90 transition-colors text-nikami-blue">
          <span className="text-primary-foreground text-sm sm:text-base font-semibold leading-6">
            {cta}
          </span>
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M17.7806 8.03104L11.0306 14.781C10.8899 14.9218 10.699 15.0008 10.5 15.0008C10.301 15.0008 10.1101 14.9218 9.96937 14.781C9.82864 14.6403 9.74958 14.4494 9.74958 14.2504C9.74958 14.0514 9.82864 13.8605 9.96937 13.7198L15.4397 8.25042H0.75C0.551088 8.25042 0.360322 8.1714 0.21967 8.03075C0.0790178 7.8901 0 7.69933 0 7.50042C0 7.3015 0.0790178 7.11074 0.21967 6.97009C0.360322 6.82943 0.551088 6.75042 0.75 6.75042H15.4397L9.96937 1.28104C9.82864 1.14031 9.74958 0.94944 9.74958 0.750417C9.74958 0.551394 9.82864 0.360523 9.96937 0.219792C10.1101 0.0790615 10.301 0 10.5 0C10.699 0 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8504 7.03945 17.9057 7.12216 17.9434 7.21321C17.9812 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9812 7.69657 17.9434 7.78762C17.9057 7.87867 17.8504 7.96139 17.7806 8.03104Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const Promotions = () => {
  const { t } = useTranslation();
  const promotions = t("promotions.items", { returnObjects: true }) as Promotion[];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="bg-background">
        <Navbar variant="light" />
      </div>

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
    </div>
  );
};

export default Promotions;
