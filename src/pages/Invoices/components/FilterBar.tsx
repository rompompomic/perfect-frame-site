import { CalendarIcon, ChevronIcon, SearchIcon } from "@/components/icons";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

interface FilterBarProps {
  onClear: () => void;
}

export const FilterBar: FC<FilterBarProps> = ({ onClear }) => {
  const { t } = useTranslation();
  const [dateFrom, setDateFrom] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="flex flex-wrap gap-[10px] mb-[40px]">
      <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.dates")}
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="flex-1 text-[16px] text-[#9F9F9F] outline-none placeholder:text-[#94a3b8] bg-transparent"
        />
        <CalendarIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[228px] cursor-pointer">
        <span className="flex-1 text-[16px] text-[#9F9F9F]">{t("invoices.filter.orderStatus")}</span>
        <ChevronIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.address")}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1 text-[16px] text-[#9F9F9F] outline-none placeholder:text-[#94a3b8] bg-transparent"
        />
        <SearchIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[170px] cursor-pointer">
        <span className="flex-1 text-[16px] text-[#9F9F9F]">{t("invoices.filter.paymentStatus")}</span>
        <ChevronIcon />
      </div>

      <button className="bg-white border border-[#dde8f5] rounded-[6px] px-[16px] py-[9px] text-[16px] text-[#9F9F9F] font-semibold hover:bg-[#f1f5f9] transition-colors cursor-pointer">
        {t("invoices.filter.clear")}
      </button>
    </div>
  );
};

export default FilterBar;
