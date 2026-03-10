import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const MapSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full relative min-h-[300px] sm:min-h-[384px]">
      {/* Full-width map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.7910699420386!2d24.253264094513618!3d56.883825336053185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed2ec1026a8c3%3A0x9c05bc9230970f6!2sKaudz%C4%AB%C5%A1u%20iela%2059%2C%20Rumbula%2C%20Stopi%C5%86u%20pagasts%2C%20Ropa%C5%BEu%20novads%2C%20LV-2121%2C%20Latvij a!5e0!3m2!1slv!2snl!4v1773068371217!5m2!1slv!2snl"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIKAMI location map"
      />

      {/* Floating info card */}
      <div className="absolute top-2 sm:top-6 right-2 sm:right-6 md:right-12 lg:right-24 w-[220px] sm:w-[90%] md:w-[500px] lg:w-[598px] p-2 sm:p-5 bg-primary flex flex-col gap-1.5 sm:gap-8 overflow-hidden z-10">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h3 className="text-primary-foreground text-lg sm:text-2xl lg:text-3xl font-black uppercase leading-6 sm:leading-8">
            {t("map.title")}
          </h3>
          <div className="flex flex-col gap-3 sm:gap-5">
            <div className="h-px bg-primary-foreground/40" />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-nikami-blue" />
                <span className="text-primary-foreground text-sm sm:text-base font-bold leading-6">
                  {t("map.workingHours")}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-primary-foreground text-xs sm:text-sm lg:text-base font-medium leading-5 sm:leading-6">
                <span>{t("map.weekdays")}</span>
                <span>{t("map.saturday")}</span>
                <span>{t("map.sunday")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
