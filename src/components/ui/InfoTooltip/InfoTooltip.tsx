import { useState } from "react";
import { useTranslation } from "react-i18next";

import ToolTipRedIcon from "@/assets/icons/tooltip-red.svg";
import ToolTipIcon from "@/assets/icons/tooltip-white.svg";

interface InfoTooltipProps {
  text: string;
  variant?: "default" | "red";
}

export const InfoTooltip = ({ text, variant = "default" }: InfoTooltipProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center justify-center">
        <img src={variant === "red" ? ToolTipRedIcon : ToolTipIcon} alt="Info" />
      </button>
      <div
        className={`absolute left-10 top-0 z-50 bg-white border border-[#dde8f0] rounded-lg shadow-lg p-4 w-72 text-sm text-[#334155] transition-all duration-200 ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}>
        <p className="font-semibold mb-2">{t("orderContainer.tooltip.title")}</p>
        <p className="mb-1">{text}</p>
        <p className="mb-1">{text}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
