import { useState } from "react";
import { CheckCircle, ChevronDown, Play } from "lucide-react";
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
        <div className="w-[1200px] inline-flex flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-5">
            <h1 className="self-stretch text-white text-[60px] font-black uppercase leading-[58px]">
              {t("about.hero.title")}
            </h1>

            <p className="w-[933px] text-white text-xl font-medium leading-7">{t("about.hero.description")}</p>
          </div>

          <div className="inline-flex items-center gap-4">
            <button className="flex h-[48px] w-[144px] items-center justify-center gap-2.5 rounded-[2px] border-x border-[#4895E8] bg-[#4895E8] px-4 py-3">
              <span className="text-base font-semibold leading-6 text-white">Sazināties</span>
            </button>

            <button className="flex h-[48px] items-center justify-start gap-2.5 rounded-[2px] px-4 py-3 outline outline-1 outline-offset-[-1px] outline-[#4895E8]">
              <span className="text-base font-semibold leading-6 text-white">Skatīt video</span>

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.75 10.0004C18.7505 10.2126 18.6961 10.4213 18.5921 10.6063C18.488 10.7912 18.3379 10.9461 18.1562 11.0559L6.9 17.9418C6.71022 18.058 6.49286 18.1214 6.27037 18.1256C6.04788 18.1297 5.82832 18.0743 5.63438 17.9652C5.44227 17.8578 5.28225 17.7012 5.17075 17.5114C5.05926 17.3217 5.00032 17.1056 5 16.8855V3.11523C5.00032 2.89514 5.05926 2.67911 5.17075 2.48935C5.28225 2.29959 5.44227 2.14295 5.63438 2.03555C5.82832 1.92644 6.04788 1.87109 6.27037 1.87521C6.49286 1.87933 6.71022 1.94278 6.9 2.05898L18.1562 8.94492C18.3379 9.05466 18.488 9.20954 18.5921 9.3945C18.6961 9.57945 18.7505 9.78818 18.75 10.0004Z"
                  fill="#4895E8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Why Choose Us ───── */
const WhyChooseCard = ({ title, description }: { title: string; description: string }) => (
  <div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
    <div className="flex items-start gap-10">
      <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
        <CheckCircle className="w-10 h-10 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-2xl lg:text-3xl font-black uppercase leading-8">{title}</h3>
        <p className="text-foreground text-lg lg:text-xl font-medium leading-7">{description}</p>
      </div>
    </div>
  </div>
);

const WhyChooseSection = () => {
  const { t } = useTranslation();
  const items = t("about.whyChoose.items", { returnObjects: true }) as { title: string; description: string }[];
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
    </section>
  );
};

/* ───── Partners ───── */
const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">
          {t("about.partners.title")}
        </h2>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-48 bg-background flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Partner {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Map Section ───── */
const AboutMapSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full h-96 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full relative">
        <div className="flex h-full items-start pt-10 gap-1">
          {/* Map placeholder */}
          <div className="flex-1 relative h-72 flex items-center justify-center">
            <img src={mapsImage} alt="Map" className="w-full h-full object-cover rounded-sm" />
            <img src={mapPinIcon} alt="Location pin" className="absolute w-14 h-14" />
          </div>
          {/* Info card */}
          <div className="w-full md:w-[598px] p-5 bg-primary flex flex-col gap-5 overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary-foreground text-2xl lg:text-3xl font-black uppercase leading-8">
                {t("about.map.title")}
              </h3>
              <p className="text-primary-foreground text-lg lg:text-xl font-medium leading-7">
                {t("about.map.subtitle")}
              </p>
            </div>
            <div className="h-px bg-primary-foreground" />
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-nikami-blue" strokeWidth={1.5} />
                <span className="text-primary-foreground text-base font-bold leading-6">{t("about.map.tag1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-nikami-blue" strokeWidth={1.5} />
                <span className="text-primary-foreground text-base font-bold leading-6">{t("about.map.tag2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-nikami-blue" strokeWidth={1.5} />
                <span className="text-primary-foreground text-base font-bold leading-6">{t("about.map.tag3")}</span>
              </div>
            </div>
            <div className="h-px bg-primary-foreground" />
            <div className="flex justify-between items-center">
              <button className="px-8 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity">
                {t("about.map.cta")}
              </button>
              <span className="text-primary-foreground text-base font-medium leading-6">{t("about.map.capacity")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── FAQ ───── */
const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(1);
  const items = t("about.faq.items", { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight">{t("about.faq.title")}</h2>
        <div className="flex flex-col gap-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="pl-8 pr-5 py-5 bg-background border-l-[6px] border-nikami-blue flex flex-col gap-2 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <div className="flex items-center justify-between gap-10">
                <h3 className="text-primary text-xl lg:text-2xl font-black leading-8">{item.question}</h3>
                <button className="px-4 py-3 bg-background rounded-sm outline outline-1 outline-nikami-blue flex items-center shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-nikami-blue transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {openIndex === i && (
                <p className="text-foreground text-base font-medium leading-6 max-w-[880px]">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-foreground text-base font-medium leading-6">{t("about.faq.footer")}</p>
      </div>
    </section>
  );
};

/* ───── Questions Banner ───── */
const QuestionsBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 bg-gradient-to-br from-primary/80 to-muted-foreground/80 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.10)]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        <p className="text-primary-foreground text-xl font-bold leading-7">{t("about.questions.subtitle")}</p>
        <h2 className="text-primary-foreground text-3xl lg:text-5xl font-black uppercase leading-tight max-w-[820px]">
          {t("about.questions.title")}
        </h2>
      </div>
    </section>
  );
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
          className="w-60 px-8 py-3 bg-primary/20 rounded-sm text-primary-foreground text-base font-semibold leading-6 cursor-not-allowed"
        >
          {t("about.contact.submit")}
        </button>
      </div>
    </section>
  );
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
    </div>
  );
};

export default About;
