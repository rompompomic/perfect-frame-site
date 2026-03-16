import { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowIcon from "@/assets/icons/arrow-black.svg";
import MockBetonIcon from "@/assets/mock-beton.png";

export type Category = "clean" | "mixed" | "wood";

export const InfoAccordion = ({ category }: { category: Category }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const mockItems = [
    t("orderContainer.step1.accordion.items.0"),
    t("orderContainer.step1.accordion.items.1"),
    t("orderContainer.step1.accordion.items.2"),
    t("orderContainer.step1.accordion.items.3"),
    t("orderContainer.step1.accordion.items.4"),
    t("orderContainer.step1.accordion.items.5"),
  ];

  return (
    <div
      className={`overflow-hidden mb-6 bg-transparent transition-all duration-300 ${
        open ? "border bg-white border-[#4895E8]" : "border border-[#4895E8]"
      }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 text-left font-extrabold text-[#1a3c6e] uppercase tracking-wide text-base sm:text-xl lg:text-[26px] transition-colors">
        {t("orderContainer.step1.accordion.title")}
        <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <img src={ArrowIcon} alt="Arrow" className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-3 sm:px-5 pb-4 sm:pb-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {mockItems.map((item, i) => (
              <div key={i} className="flex w-full flex-col items-start">
                <img
                  src={MockBetonIcon}
                  alt={item}
                  className="w-full aspect-square"
                />
                <div className="border-[2px] border-[#E4F1FF] py-2 sm:py-[12px] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  <span className="text-xs sm:text-[16px] p-2 sm:p-[12px] w-full font-bold text-start text-[#000]">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
