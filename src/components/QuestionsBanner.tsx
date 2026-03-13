import { useTranslation } from "react-i18next";
import anyQuestionsImage from "@/assets/any-questions.webp";

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

export default QuestionsBanner;
