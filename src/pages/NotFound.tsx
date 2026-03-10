import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar on light background */}
      <div className="bg-background [&_nav]:bg-background [&_.text-primary-foreground]:text-foreground">
        <Navbar />
      </div>

      {/* 404 Content */}
      <div className="relative flex-1 px-6 sm:px-12 md:px-28 pt-12 sm:pt-16 md:pt-20 pb-10 flex flex-col justify-start items-start gap-8 sm:gap-12 overflow-hidden">
        <div className="flex flex-col gap-5 z-10">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-tight md:leading-[58px]">
            {t("notFound.heading")}
          </h1>
        </div>

        <div className="z-10">
          <a
            href="/"
            className="inline-flex px-4 py-3 bg-primary rounded-sm text-primary-foreground text-sm sm:text-base font-semibold leading-6 hover:bg-primary/90 transition-colors"
          >
            {t("notFound.returnHome")}
          </a>
        </div>

        {/* Giant 404 watermark */}
        <span className="absolute right-0 sm:right-4 md:right-12 top-4 sm:top-8 md:top-[101px] text-nikami-light-blue text-[180px] sm:text-[300px] md:text-[480px] lg:text-[565px] font-black uppercase leading-none select-none pointer-events-none">
          404
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
