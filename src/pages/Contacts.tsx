import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import WeChatButton from "@/components/WeChatButton";
import MainLayout from "@/components/MainLayout";
import anyQuestionsImage from "@/assets/any-questions.webp";
import copyIcon from "@/assets/icons/CopyIcon.svg";

/* ───── Copy button helper ───── */
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="shrink-0 p-0.5 hover:opacity-70 transition-opacity">
      {copied ? (
        <Check className="w-5 h-5 text-nikami-blue" />
      ) : (
        <img src={copyIcon} alt="Copy" className="w-5 h-5" />
      )}
    </button>
  );
};

/* ───── Detail Row ───── */
const DetailRow = ({
  label,
  value,
  showDivider = true,
}: {
  label: string;
  value: string;
  showDivider?: boolean;
}) => (
  <>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
      <span className="text-foreground text-sm sm:text-base font-medium leading-6">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground text-sm sm:text-base font-bold leading-6 sm:text-right">
          {value}
        </span>
        <CopyButton text={value} />
      </div>
    </div>
    {showDivider && <div className="h-px bg-muted-foreground/20" />}
  </>
);

/* ───── Contact Info Card ───── */
const ContactInfoCard = ({
  title,
  subtitle,
  contacts,
  hours,
}: {
  title: string;
  subtitle?: string;
  contacts: { phone: string; phoneNote?: string; email: string };
  hours: string[];
}) => (
  <div className="flex-1 pl-4 sm:pl-8 pr-4 sm:pr-5 py-4 sm:py-5 bg-nikami-light-blue border-l-4 sm:border-l-[6px] border-nikami-blue flex flex-col justify-between gap-4">
    <div className="flex flex-col gap-1">
      <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="text-foreground text-sm sm:text-base font-medium leading-6">{subtitle}</p>
      )}
    </div>
    <div className="flex flex-col sm:flex-row gap-1">
      {/* Contacts sub-card */}
      <div className="flex-1 px-4 sm:px-5 py-3 bg-background flex flex-col gap-3">
        <span className="text-foreground text-base font-bold leading-6">
          {contacts.phone && "Kontakti:"}
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-foreground text-sm sm:text-base font-medium leading-6">
              {contacts.phone}
            </span>
            {contacts.phoneNote && (
              <span className="text-foreground/30 text-xs font-medium leading-4">
                {contacts.phoneNote}
              </span>
            )}
          </div>
          <a
            href={`mailto:${contacts.email}`}
            className="text-foreground text-sm sm:text-base font-medium underline leading-6 hover:text-nikami-blue transition-colors">
            {contacts.email}
          </a>
        </div>
      </div>
      {/* Hours sub-card */}
      <div className="flex-1 px-4 sm:px-5 py-3 bg-background flex flex-col gap-3">
        <span className="text-foreground text-base font-bold leading-6">Darba laiki:</span>
        <div className="flex flex-col gap-1">
          {hours.map((h, i) => (
            <span key={i} className="text-foreground text-sm sm:text-base font-medium leading-6">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ───── Main Contacts Section ───── */
const ContactsInfoSection = () => {
  const { t } = useTranslation();
  const [allCopied, setAllCopied] = useState(false);

  const handleCopyAll = () => {
    const details = [
      `${t("contacts.details.nameLabel")} ${t("contacts.details.nameValue")}`,
      `${t("contacts.details.regLabel")}: ${t("contacts.details.regValue")}`,
      `${t("contacts.details.vatLabel")}: ${t("contacts.details.vatValue")}`,
      `${t("contacts.details.sepaLabel")} ${t("contacts.details.sepaValue")}`,
      `${t("contacts.details.addressLabel")} ${t("contacts.details.addressValue")}`,
      `${t("contacts.details.bankLabel")} ${t("contacts.details.bankValue")}`,
      `${t("contacts.details.bankCodeLabel")} ${t("contacts.details.bankCodeValue")}`,
      `${t("contacts.details.accountLabel")} ${t("contacts.details.accountValue")}`,
    ].join("\n");
    navigator.clipboard.writeText(details);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 2000);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left column – Contact cards */}
        <div className="flex-1 flex flex-col gap-6 lg:gap-10">
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-tight">
            {t("contacts.title")}
          </h2>
          <div className="flex flex-col gap-1 flex-1">
            <ContactInfoCard
              title={t("contacts.administration.title")}
              contacts={{
                phone: t("contacts.administration.phone"),
                phoneNote: t("contacts.administration.phoneNote"),
                email: t("contacts.administration.email"),
              }}
              hours={[t("contacts.administration.weekdays"), t("contacts.administration.weekend")]}
            />
            <ContactInfoCard
              title={t("contacts.sortingArea.title")}
              subtitle={t("contacts.sortingArea.subtitle")}
              contacts={{
                phone: t("contacts.sortingArea.phone"),
                email: t("contacts.sortingArea.email"),
              }}
              hours={[
                t("contacts.sortingArea.weekdays"),
                t("contacts.sortingArea.saturday"),
                t("contacts.sortingArea.sunday"),
              ]}
            />
          </div>
        </div>

        {/* Right column – Rekvizīti */}
        <div className="flex-1 p-4 sm:p-5 outline outline-2 outline-nikami-light-blue flex flex-col gap-6 lg:gap-10">
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-tight">
            {t("contacts.details.title")}
          </h2>
          <div className="flex flex-col gap-8 flex-1 justify-between">
            {/* Par uzņēmumu */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight">
                {t("contacts.details.companyTitle")}
              </h3>
              <div className="flex flex-col gap-2.5">
                <DetailRow
                  label={t("contacts.details.nameLabel")}
                  value={t("contacts.details.nameValue")}
                />
                <DetailRow
                  label={t("contacts.details.regLabel")}
                  value={t("contacts.details.regValue")}
                />
                <DetailRow
                  label={t("contacts.details.vatLabel")}
                  value={t("contacts.details.vatValue")}
                />
                <DetailRow
                  label={t("contacts.details.sepaLabel")}
                  value={t("contacts.details.sepaValue")}
                />
                <DetailRow
                  label={t("contacts.details.addressLabel")}
                  value={t("contacts.details.addressValue")}
                  showDivider={false}
                />
              </div>
            </div>

            {/* Norēķiniem */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight">
                {t("contacts.details.paymentTitle")}
              </h3>
              <div className="flex flex-col gap-2.5">
                <DetailRow
                  label={t("contacts.details.bankLabel")}
                  value={t("contacts.details.bankValue")}
                />
                <DetailRow
                  label={t("contacts.details.bankCodeLabel")}
                  value={t("contacts.details.bankCodeValue")}
                />
                <DetailRow
                  label={t("contacts.details.accountLabel")}
                  value={t("contacts.details.accountValue")}
                  showDivider={false}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyAll}
            className="self-stretch px-8 py-3 rounded-sm outline outline-1 outline-nikami-blue text-primary text-base font-semibold leading-6 flex justify-center items-center gap-2.5 hover:opacity-80 transition-opacity">
            {allCopied ? "✓" : t("contacts.details.copyAll")}
            {!allCopied && (
              <img
                src={copyIcon}
                alt="Copy"
                className="w-5 h-5 [filter:invert(43%)_sepia(98%)_saturate(1856%)_hue-rotate(196deg)_brightness(97%)_contrast(101%)]"
              />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

/* ───── Map Section ───── */
const ContactsMapSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full relative min-h-[300px] sm:min-h-[384px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.7910699420386!2d24.253264094513618!3d56.883825336053185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed2ec1026a8c3%3A0x9c05bc9230970f6!2sKaudz%C4%AB%C5%A1u%20iela%2059%2C%20Rumbula%2C%20Stopi%C5%86u%20pagasts%2C%20Ropa%C5%BEu%20novads%2C%20LV-2121%2C%20Latvija!5e0!3m2!1slv!2snl!4v1773068371217!5m2!1slv!2snl"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIKAMI location map"
      />
      <div className="absolute top-2 right-2 sm:top-6 sm:right-6 md:right-12 lg:right-24 w-[220px] sm:w-[90%] md:w-[500px] lg:w-[598px] p-3 sm:p-5 bg-primary flex flex-col gap-4 sm:gap-8 z-10">
        <h3 className="text-primary-foreground text-sm sm:text-lg lg:text-3xl font-black uppercase leading-tight sm:leading-8">
          {t("contacts.map.title")}
        </h3>
        <button className="w-fit px-4 sm:px-8 py-2 sm:py-3 bg-nikami-blue rounded-sm text-primary-foreground text-xs sm:text-base font-semibold leading-6 hover:opacity-90 transition-opacity">
          {t("contacts.map.cta")}
        </button>
      </div>
    </section>
  );
};

/* ───── Questions Banner (reused from About) ───── */
const QuestionsBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative px-4 sm:px-6 lg:px-28 py-8 sm:py-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={anyQuestionsImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-2">
        <p className="text-primary-foreground text-base sm:text-xl font-bold leading-6 sm:leading-7">
          {t("about.questions.subtitle")}
        </p>
        <h2 className="text-primary-foreground text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight max-w-[820px]">
          {t("about.questions.title")}
        </h2>
      </div>
    </section>
  );
};

/* ───── Contact Form (reused from About) ───── */
const ContactFormSection = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 sm:gap-10">
        <h2 className="text-primary text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight">
          {t("about.contact.title")}
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("about.contact.name")}
                  <span className="text-nikami-blue">*</span>
                </label>
                <input className="h-12 pl-5 pr-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="pl-1 text-foreground text-sm font-bold leading-5">
                  {t("about.contact.company")}
                </label>
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
            <div className="flex-1 flex flex-col gap-0.5">
              <label className="pl-1 text-foreground text-sm font-bold leading-5">
                {t("about.contact.message")}
                <span className="text-nikami-blue">*</span>
              </label>
              <textarea className="flex-1 min-h-[180px] sm:min-h-[200px] pl-5 pr-3 pt-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground resize-none" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 sm:w-6 sm:h-6 accent-nikami-blue border-2 border-nikami-blue rounded-sm appearance-none checked:appearance-auto shrink-0 mt-0.5"
              />
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("about.contact.privacy")}
                <a
                  href="#"
                  className="underline text-foreground hover:text-nikami-blue transition-colors">
                  {t("about.contact.privacyLink")}
                </a>
                .
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-6 sm:h-6 accent-nikami-blue border-2 border-nikami-blue rounded-sm appearance-none checked:appearance-auto shrink-0 mt-0.5"
              />
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("about.contact.marketing")}
              </span>
            </label>
          </div>
        </div>
        <button
          disabled
          className="w-full sm:w-60 px-8 py-3 bg-primary/20 rounded-sm text-primary-foreground text-base font-semibold leading-6 cursor-not-allowed">
          {t("about.contact.submit")}
        </button>
      </div>
    </section>
  );
};

/* ───── Page ───── */
const Contacts = () => {
  return (
    <MainLayout>
      {/* Dark navbar strip */}
      <div className="bg-primary">
        <Navbar />
      </div>
      <ContactsInfoSection />
      <ContactsMapSection />
      <QuestionsBanner />
      <ContactFormSection />
      <WeChatButton />
    </MainLayout>
  );
};

export default Contacts;
