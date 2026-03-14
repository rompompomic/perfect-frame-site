import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";

interface Props {
  onGoToOrders: () => void;
}

export function OrderSuccess({ onGoToOrders }: Props) {
  const { t } = useTranslation();
  return (
    <div className="w-full py-16">
      <h1 className="text-[58px] font-black text-[#05376D] uppercase tracking-tight mb-4">
        {t("orderContainer.success.title")}
      </h1>
      <p className="text-[16px] text-[#000] mb-8">
        {t("orderContainer.success.message")}
      </p>
      <button
        onClick={onGoToOrders}
        className="bg-[#05376D] text-white font-semibold text-sm px-5 py-3 rounded-[4px] flex items-center gap-3 hover:bg-[#15305a] transition-colors">
        <span>{t("orderContainer.success.goToOrders")}</span>
        <img src={ArrowRightIcon} alt="Arrow" className="w-4 h-4 brightness-0 invert" />
      </button>
    </div>
  );
}
