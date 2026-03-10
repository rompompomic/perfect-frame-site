import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = t("stats", { returnObjects: true }) as Array<{
    value: string;
    description: string;
  }>;
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-10">
      <div className="flex flex-col sm:flex-row gap-1">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 p-4 sm:p-5 bg-secondary flex flex-col gap-2 sm:gap-3">
            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight">
              {stat.value}
            </h3>
            <p className="text-foreground text-base sm:text-lg lg:text-xl">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
