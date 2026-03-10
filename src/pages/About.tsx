import { useState } from "react";
import chevronDownIcon from "@/assets/icons/ChevronDown.svg";
import playIcon from "@/assets/icons/Play.svg";
import checkInCircleIcon from "@/assets/icons/CheckInCircle.svg";
import anyQuestionsImage from "@/assets/any-questions.webp";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeChatButton from "@/components/WeChatButton";
import heroImage from "@/assets/hero-image.webp";
import mapsImage from "@/assets/maps.webp";
import mapPinIcon from "@/assets/icons/MapPinSimpleArea.svg";

/* ───── Hero ───── */
const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[720px]">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Waste management facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-nikami-dark/80" />
      </div>
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-12">
            <div className="relative z-10 w-full max-w-[1400px]">
              <h1 className="text-primary-foreground text-3xl md:text-4xl font-black uppercase leading-[1] lg:leading-[58px] lg:text-5xl">
                {t("about.hero.title")}
              </h1>

              <p className="mt-5 max-w-[1180px] text-primary-foreground text-lg lg:text-xl font-medium leading-7">
                {t("about.hero.description")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-36 px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 flex justify-center items-center hover:opacity-90 transition-opacity">
                {t("common.cta")}
              </button>
              <button className="px-4 py-3 rounded-sm outline outline-1 outline-offset-[-1px] outline-nikami-blue text-primary-foreground text-base font-semibold leading-6 flex items-center gap-2.5 hover:opacity-90 transition-opacity">
                {t("about.hero.watchVideo")}
                <img src={playIcon} alt="Play" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

/* ───── Why Choose Us ───── */
const WhyChooseCard = ({ title, description }: {title: string;description: string;}) =>
<div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
    <div className="flex items-start gap-10">
      <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
        <img src={checkInCircleIcon} alt="" className="w-10 h-10" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-2xl font-black uppercase leading-8 lg:text-2xl">{title}</h3>
        <p className="text-foreground text-lg lg:text-xl font-medium leading-7">{description}</p>
      </div>
    </div>
  </div>;


const WhyChooseSection = () => {
  const { t } = useTranslation();
  const items = t("about.whyChoose.items", { returnObjects: true }) as {title: string;description: string;}[];
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">
            {t("about.whyChoose.title")}
          </h2>
          <p className="text-foreground text-lg lg:text-xl font-medium leading-7 max-w-[933px]">
            {t("about.whyChoose.subtitle")}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row gap-1">
            <WhyChooseCard title={items[0].title} description={items[0].description} />
            <WhyChooseCard title={items[1].title} description={items[1].description} />
          </div>
          <div className="flex flex-col md:flex-row gap-1">
            <WhyChooseCard title={items[2].title} description={items[2].description} />
            <WhyChooseCard title={items[3].title} description={items[3].description} />
          </div>
        </div>
      </div>
    </section>);

};

/* ───── Partners ───── */
import partner1 from "@/assets/partners/partner1.webp";
import partner2 from "@/assets/partners/partner2.svg";
import partner3 from "@/assets/partners/partner3.webp";
import partner4 from "@/assets/partners/partner4.svg";
import partner5 from "@/assets/partners/partner5.webp";
import partner6 from "@/assets/partners/partner6.webp";
import partner7 from "@/assets/partners/partner7.webp";
import partner8 from "@/assets/partners/partner8.webp";

const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">
          {t("about.partners.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {partnerLogos.map((logo, i) =>
          <div key={i} className="h-48 bg-background flex items-center justify-center p-6">
              <img src={logo} alt={`Partner ${i + 1}`} className="max-h-36 max-w-full object-contain" />
            </div>
          )}
        </div>
      </div>
    </section>);

};

/* ───── Map Section ───── */
const AboutMapSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full relative min-h-[300px] sm:min-h-[384px]">
      {/* Full-width map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.7910699420386!2d24.253264094513618!3d56.883825336053185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed2ec1026a8c3%3A0x9c05bc9230970f6!2sKaudz%C4%AB%C5%A1u%20iela%2059%2C%20Rumbula%2C%20Stopi%C5%86u%20pagasts%2C%20Ropa%C5%BEu%20novads%2C%20LV-2121%2C%20Latvija!5e0!3m2!1slv!2snl!4v1773068371217!5m2!1slv!2snl"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIKAMI location map"
      />

      {/* Floating info card */}
      <div className="absolute top-2 sm:top-6 right-2 sm:right-6 md:right-12 lg:right-24 w-[220px] sm:w-[90%] md:w-[500px] lg:w-[598px] p-2 sm:p-5 bg-primary flex flex-col gap-1.5 sm:gap-5 overflow-hidden z-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary-foreground text-xs sm:text-lg lg:text-3xl font-black uppercase leading-6 sm:leading-8">
            {t("about.map.title")}
          </h3>
          <p className="text-primary-foreground text-xs sm:text-lg lg:text-xl font-medium leading-5 sm:leading-7">
            {t("about.map.subtitle")}
          </p>
        </div>
        <div className="h-px bg-primary-foreground/40" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <img src={checkInCircleIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 [filter:invert(43%)_sepia(98%)_saturate(1856%)_hue-rotate(196deg)_brightness(97%)_contrast(101%)]" />
            <span className="text-primary-foreground text-xs sm:text-base font-bold leading-6">{t("about.map.tag1")}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={checkInCircleIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 [filter:invert(43%)_sepia(98%)_saturate(1856%)_hue-rotate(196deg)_brightness(97%)_contrast(101%)]" />
            <span className="text-primary-foreground text-xs sm:text-base font-bold leading-6">{t("about.map.tag2")}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={checkInCircleIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 [filter:invert(43%)_sepia(98%)_saturate(1856%)_hue-rotate(196deg)_brightness(97%)_contrast(101%)]" />
            <span className="text-primary-foreground text-xs sm:text-base font-bold leading-6">{t("about.map.tag3")}</span>
          </div>
        </div>
        <div className="h-px bg-primary-foreground/40" />
        <div className="flex justify-between items-center">
          <button className="px-4 sm:px-8 py-2 sm:py-3 bg-nikami-blue rounded-sm text-primary-foreground text-xs sm:text-base font-semibold leading-6 hover:opacity-90 transition-opacity">
            {t("about.map.cta")}
          </button>
          <span className="text-primary-foreground text-xs sm:text-base font-medium leading-6">{t("about.map.capacity")}</span>
        </div>
      </div>
    </section>);

};

/* ───── FAQ ───── */
const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(-1);
  const items = t("about.faq.items", { returnObjects: true }) as {question: string;answer: string;}[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">{t("about.faq.title")}</h2>
        <div className="flex flex-col gap-1">
          {items.map((item, i) =>
          <div
            key={i}
            className="pl-8 pr-5 py-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
            
              <div className="flex items-center justify-between gap-10">
                <h3 className="text-primary text-xl lg:text-2xl font-black leading-8">{item.question}</h3>
                <button className="px-4 py-3 bg-background rounded-sm outline outline-1 outline-nikami-blue flex items-center shrink-0">
                  <img
                  src={chevronDownIcon}
                  alt=""
                  className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                
                </button>
              </div>
              {openIndex === i &&
            <p className="text-foreground text-base font-medium leading-6 max-w-[880px]">{item.answer}</p>
            }
            </div>
          )}
        </div>
        <p className="text-foreground text-base font-medium leading-6">{t("about.faq.footer")}</p>
      </div>
    </section>);

};

/* ───── Questions Banner ───── */
const QuestionsBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative px-4 sm:px-6 lg:px-28 py-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={anyQuestionsImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-2">
        <p className="text-primary-foreground text-xl font-bold leading-7">{t("about.questions.subtitle")}</p>
        <h2 className="text-primary-foreground text-3xl lg:text-5xl font-black uppercase leading-tight max-w-[820px]">
          {t("about.questions.title")}
        </h2>
      </div>
    </section>);

};

/* ───── Contact Form ───── */
const ContactFormSection = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">
          {t("about.contact.title")}
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("about.contact.name")}
                  <span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">{t("about.contact.company")}</label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("about.contact.phone")}
                  <span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("about.contact.email")}
                  <span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
            </div>
            {/* Right column - message */}
            <div className="flex-1 flex flex-col gap-0.5">
              <label className="pl-1 text-foreground text-sm font-bold leading-5">
                {t("about.contact.message")}
                <span className="text-nikami-blue">*</span>
              </label>
              <textarea className="flex-1 min-h-[200px] pl-5 pr-3 pt-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground resize-none" />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-6 h-6 accent-nikami-blue" />
              <span className="text-foreground text-base font-bold leading-6">{t("about.contact.privacy")}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6 accent-nikami-blue" />
              <span className="text-foreground text-base font-bold leading-6">{t("about.contact.marketing")}</span>
            </label>
          </div>
        </div>
        <button
          disabled
          className="w-60 px-8 py-3 bg-primary/20 rounded-sm text-primary-foreground text-base font-semibold leading-6 cursor-not-allowed">
          
          {t("about.contact.submit")}
        </button>
      </div>
    </section>);

};

/* ───── Page ───── */
const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AboutHero />
      <WhyChooseSection />
      <PartnersSection />
      <AboutMapSection />
      <FAQSection />
      <QuestionsBanner />
      <ContactFormSection />
      <Footer />
      <WeChatButton />
    </div>);

};

export default About;