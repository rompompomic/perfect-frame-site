import { useState } from "react";
import { useTranslation } from "react-i18next";
import betonaImg from "@/assets/waste/monolitas-betona.webp";
import lielgabaritaImg from "@/assets/waste/lielgabarita.webp";
import tiriImg from "@/assets/waste/tiri-buvniecibas.webp";
import kokaImg from "@/assets/waste/koka-atkritumi.webp";
import jauktiImg from "@/assets/waste/jaukti-neskiroti.webp";
import elektroImg from "@/assets/waste/elektrotehnika.webp";

interface WasteCard {
  img: string;
  titleKey: string;
  price: string;
  free?: boolean;
  materialsKey: string;
}

const WasteCardsSection = () => {
  const { t } = useTranslation();
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);

  const cards: WasteCard[] = [
    { img: betonaImg, titleKey: "wasteSubmission.wasteCards.concrete.title", price: "10.29 €/t", materialsKey: "wasteSubmission.wasteCards.concrete.materials" },
    { img: lielgabaritaImg, titleKey: "wasteSubmission.wasteCards.bulky.title", price: "160.00 €/t", materialsKey: "wasteSubmission.wasteCards.bulky.materials" },
    { img: tiriImg, titleKey: "wasteSubmission.wasteCards.clean.title", price: "8.50 €/t", materialsKey: "wasteSubmission.wasteCards.clean.materials" },
    { img: kokaImg, titleKey: "wasteSubmission.wasteCards.wood.title", price: "0.00 €", free: true, materialsKey: "wasteSubmission.wasteCards.wood.materials" },
    { img: jauktiImg, titleKey: "wasteSubmission.wasteCards.mixed.title", price: "no 79 €/t", materialsKey: "wasteSubmission.wasteCards.mixed.materials" },
    { img: elektroImg, titleKey: "wasteSubmission.wasteCards.electronics.title", price: "0.00 €", free: true, materialsKey: "wasteSubmission.wasteCards.electronics.materials" },
  ];

  return (
    <div className="p-6 sm:p-10 bg-background flex flex-col gap-5">
      <h3 className="text-foreground text-2xl sm:text-3xl font-black uppercase leading-8">
        {t("wasteSubmission.wasteCards.title")}
      </h3>
      <p className="max-w-[810px] text-foreground text-base font-medium leading-6">
        <span className="font-bold">{t("wasteSubmission.wasteCards.noticeTitle")}</span>{" "}
        {t("wasteSubmission.wasteCards.noticeText")}
      </p>
      <div className="flex flex-col gap-3">
        {/* Cards in rows of 2 */}
        {[0, 2, 4].map((rowStart) => (
          <div key={rowStart} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {cards.slice(rowStart, rowStart + 2).map((card, i) => {
              const idx = rowStart + i;
              return (
                <div
                  key={idx}
                  className="h-32 border-2 border-secondary flex items-center relative"
                >
                  <img
                    src={card.img}
                    alt={t(card.titleKey)}
                    className="w-32 h-full object-cover shrink-0"
                  />
                  <div className="flex-1 p-5 flex items-start gap-5">
                    <div className="flex-1 flex flex-col justify-between h-full gap-3">
                      <span className="text-foreground text-base font-bold leading-6">
                        {t(card.titleKey)}
                      </span>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => setOpenTooltip(openTooltip === idx ? null : idx)}
                      >
                        <span className="text-nikami-blue text-base font-bold underline leading-6">
                          {t("wasteSubmission.wasteCards.materialsList")}
                        </span>
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-nikami-blue text-xs font-bold">i</span>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-primary text-xl font-bold leading-7">
                        {card.price}
                      </span>
                      <span
                        className={`text-xs font-medium leading-4 ${
                          card.free ? "text-amber-500" : "text-foreground"
                        }`}
                      >
                        {card.free
                          ? t("wasteSubmission.wasteCards.free")
                          : t("wasteSubmission.wasteCards.withVat")}
                      </span>
                    </div>
                  </div>
                  {/* Tooltip */}
                  {openTooltip === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full z-20 mt-1 w-96 p-3 bg-muted rounded-xs shadow-lg flex flex-col gap-3">
                      <div className="flex flex-col">
                        <span className="text-foreground text-base font-bold leading-6">
                          {t(card.titleKey)}
                        </span>
                        <span className="text-foreground text-xs font-medium leading-4">
                          {t(card.materialsKey)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCardsSection;
