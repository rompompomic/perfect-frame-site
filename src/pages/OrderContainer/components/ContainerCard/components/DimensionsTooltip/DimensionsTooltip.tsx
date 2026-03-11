import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../../type";
import ToolTioContainerIcon from "@/assets/icons/tooltip-container.svg";

export const DimensionsTooltip = ({ container }: { container: Container }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-opacity">
        <img
          src={ToolTioContainerIcon}
          alt="Info"
          className={`w-5 h-5 transition-all ${
            open
              ? "[filter:invert(48%)_sepia(79%)_saturate(476%)_hue-rotate(190deg)_brightness(118%)_contrast(119%)]"
              : "[filter:invert(93%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)_brightness(95%)_contrast(85%)]"
          }`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-7 z-50 bg-[#F4F9FF] font-semibold rounded-lg shadow-lg p-3 w-[130px] text-[12px] text-[#000]">
          <p>
            {t("orderContainer.step1.dimensions.height")}: {container.dimensions.height} cm
          </p>
          <p>
            {t("orderContainer.step1.dimensions.width")}: {container.dimensions.width} cm
          </p>
          <p>
            {t("orderContainer.step1.dimensions.length")}: {container.dimensions.length} cm
          </p>
          <p className="mt-2 text-[16px] font-bold text-[#05376D]">{container.weight}</p>
        </div>
      )}
    </div>
  );
};
