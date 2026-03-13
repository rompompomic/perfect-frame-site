import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
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
            <div className="flex-1 flex flex-col gap-0.5">
              <label className="pl-1 text-foreground text-sm font-bold leading-5">
                {t("about.contact.message")}
                <span className="text-nikami-blue">*</span>
              </label>
              <textarea className="flex-1 min-h-[180px] sm:min-h-[200px] pl-5 pr-3 pt-3 bg-background rounded-sm outline outline-1 outline-muted-foreground/30 text-foreground resize-none" />
            </div>
          </div>
          {/* Checkboxes */}
          <div className="flex flex-col gap-3 mt-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setPrivacyAccepted(!privacyAccepted)}
            >
              <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center">
                {privacyAccepted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" fill="hsl(var(--nikami-blue))" stroke="hsl(var(--nikami-blue))" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" stroke="hsl(var(--nikami-blue))" />
                  </svg>
                )}
                {privacyAccepted && (
                  <svg className="absolute" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M0.650391 5.63062L4.15039 8.63062L10.6504 0.630615" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-base font-bold leading-6">
                {t("getOffer.privacy")} <span className="underline">{t("getOffer.privacyLink")}</span>.
              </span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setMarketingAccepted(!marketingAccepted)}
            >
              <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center">
                {marketingAccepted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" fill="hsl(var(--nikami-blue))" stroke="hsl(var(--nikami-blue))" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" stroke="hsl(var(--nikami-blue))" />
                  </svg>
                )}
                {marketingAccepted && (
                  <svg className="absolute" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M0.650391 5.63062L4.15039 8.63062L10.6504 0.630615" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-base font-bold leading-6">{t("getOffer.marketing")}</span>
            </div>
          </div>
        </div>
        <button
          disabled
          className="w-full sm:w-60 px-8 py-3 bg-primary/20 rounded-sm text-primary-foreground text-base font-semibold leading-6 cursor-not-allowed"
        >
          {t("about.contact.submit")}
        </button>
      </div>
    </section>
  );
};

export default ContactFormSection;
