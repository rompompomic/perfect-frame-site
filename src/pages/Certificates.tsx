import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import WeChatButton from "@/components/WeChatButton";
import heroImage from "@/assets/certificates-hero.webp";
import cert1 from "@/assets/certificate-1.webp";
import cert2 from "@/assets/certificate-2.webp";
import cert3 from "@/assets/certificate-3.webp";

// Benefit icons
import thumbsUpIcon from "@/assets/icons/ThumbsUp.svg";
import leafIcon from "@/assets/icons/Leaf.svg";
import cloudSunIcon from "@/assets/icons/CloudSun.svg";
import handshakeIcon from "@/assets/icons/Handshake.svg";
import chartLineUpIcon from "@/assets/icons/ChartLineUp.svg";
import certificateIcon from "@/assets/icons/Certificate.svg";

// Condition icons
import buildingIcon from "@/assets/icons/building.svg";
import documentIcon from "@/assets/icons/document.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import hourglassIcon from "@/assets/icons/hourglass.svg";
import discountTagIcon from "@/assets/icons/discount-tag.svg";

const benefitIcons = [cloudSunIcon, leafIcon, thumbsUpIcon, chartLineUpIcon, handshakeIcon];
const conditionIcons = [calendarIcon, documentIcon, buildingIcon, discountTagIcon, hourglassIcon];

/* ───── Hero ───── */
const CertificatesHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Green certificates" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-nikami-dark/80" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center pb-10 sm:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-5">
              <h1 className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[849px]">
                {t("certificates.hero.title")}
              </h1>
              <p className="max-w-[724px] text-primary-foreground text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7">
                {t("certificates.hero.description")}{" "}
                <span className="font-bold">{t("certificates.hero.descriptionBold")}</span>
              </p>
            </div>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className="w-36 px-4 py-3 bg-nikami-blue rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
            >
              {t("certificates.hero.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Certificates Section ───── */
const CertificatesSection = () => {
  const { t } = useTranslation();
  const benefits = t("certificates.benefits", { returnObjects: true }) as string[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
            {t("certificates.section.title")}
          </h2>
          <p className="max-w-[933px] text-foreground text-base sm:text-lg lg:text-xl font-medium leading-7">
            {t("certificates.section.subtitle")}
          </p>
        </div>

        {/* Certificate logos */}
        <div className="flex flex-col sm:flex-row gap-1">
          {[cert1, cert2, cert3].map((src, i) => (
            <div key={i} className="flex-1 h-48 p-5 bg-muted flex items-center justify-center">
              <img src={src} alt={["LEED", "BREEAM", "DGNB"][i]} className="w-28 h-28 object-contain" />
            </div>
          ))}
        </div>

        {/* Benefit cards - row 1 */}
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {benefits.slice(0, 3).map((text, i) => (
              <div key={i} className="p-5 border-2 border-secondary flex flex-col justify-between gap-5 min-h-[180px]">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center shrink-0">
                  <img src={benefitIcons[i]} alt="" className="w-10 h-10" />
                </div>
                <p className="text-foreground text-base sm:text-xl font-medium leading-7">{text}</p>
              </div>
            ))}
          </div>
          {/* Row 2 - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {benefits.slice(3, 5).map((text, i) => (
              <div key={i} className="p-5 border-2 border-secondary flex flex-col justify-between gap-5 min-h-[180px]">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center shrink-0">
                  <img src={benefitIcons[i + 3]} alt="" className="w-10 h-10" />
                </div>
                <p className="text-foreground text-base sm:text-xl font-medium leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Conditions Section ───── */
const ConditionsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const conditions = t("certificates.conditions.items", { returnObjects: true }) as string[];

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px]">
          {t("certificates.conditions.title")}
        </h2>

        <div className="flex flex-col gap-1">
          {/* Row 1 - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {conditions.slice(0, 3).map((text, i) => (
              <div key={i} className="p-5 bg-background flex flex-col justify-between gap-5 min-h-[180px]">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center shrink-0">
                  <img src={conditionIcons[i]} alt="" className="w-10 h-10" />
                </div>
                <p className="text-foreground text-base sm:text-xl font-medium leading-7">{text}</p>
              </div>
            ))}
          </div>
          {/* Row 2 - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {conditions.slice(3, 5).map((text, i) => (
              <div key={i} className="p-5 bg-background flex flex-col justify-between gap-5 min-h-[180px]">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center shrink-0">
                  <img src={conditionIcons[i + 3]} alt="" className="w-10 h-10" />
                </div>
                <p className="text-foreground text-base sm:text-xl font-medium leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/sanemt-piedavajumu")}
          className="w-fit px-4 py-3 bg-primary rounded-sm text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity"
        >
          {t("certificates.conditions.cta")}
        </button>
      </div>
    </section>
  );
};

/* ───── Questions Banner ───── */
const QuestionsBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 bg-gradient-to-br from-primary/80 to-muted-foreground/80">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        <p className="text-primary-foreground text-base sm:text-xl font-bold leading-7">
          {t("certificates.questions.subtitle")}
        </p>
        <h2 className="text-primary-foreground text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight lg:leading-[48px] max-w-[820px]">
          {t("certificates.questions.title")}
        </h2>
      </div>
    </section>
  );
};

/* ───── Contact Form ───── */
const ContactFormSection = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 sm:gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight">
          {t("certificates.contact.title")}
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("certificates.contact.name")}<span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("certificates.contact.company")}
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("certificates.contact.phone")}<span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("certificates.contact.email")}<span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <label className="pl-1 text-foreground text-sm font-bold leading-5">
                {t("certificates.contact.message")}<span className="text-nikami-blue">*</span>
              </label>
              <textarea className="flex-1 min-h-[180px] sm:min-h-[200px] pl-5 pr-3 pt-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground resize-none" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 sm:w-6 sm:h-6 accent-nikami-blue border-2 border-nikami-blue rounded-sm appearance-none checked:appearance-auto shrink-0 mt-0.5" />
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("certificates.contact.privacy")}<a href="#" className="underline hover:text-nikami-blue transition-colors">{t("certificates.contact.privacyLink")}</a>.
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 sm:w-6 sm:h-6 accent-nikami-blue border-2 border-nikami-blue rounded-sm appearance-none checked:appearance-auto shrink-0 mt-0.5" />
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("certificates.contact.marketing")}
              </span>
            </label>
          </div>
        </div>
        <button disabled className="w-full sm:w-60 px-8 py-3 bg-primary/20 rounded-sm text-primary-foreground text-base font-semibold leading-6 cursor-not-allowed">
          {t("certificates.contact.submit")}
        </button>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const Certificates = () => {
  return (
    <MainLayout>
      <CertificatesHero />
      <CertificatesSection />
      <ConditionsSection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default Certificates;
