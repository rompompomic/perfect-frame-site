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
    <div className="flex flex-col sm:flex-row flex-wrap gap-[10px] mb-[24px] sm:mb-[40px]">
      <div className="flex items-center gap-[8px] bg-background border border-border rounded-[6px] px-[12px] py-[9px] w-full sm:w-auto sm:min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.dates")}
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="flex-1 text-[16px] text-muted-foreground outline-none placeholder:text-muted-foreground bg-transparent"
        />
        <CalendarIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-background border border-border rounded-[6px] px-[12px] py-[9px] w-full sm:w-auto sm:min-w-[228px] cursor-pointer">
        <span className="flex-1 text-[16px] text-muted-foreground">{t("invoices.filter.orderStatus")}</span>
        <ChevronIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-background border border-border rounded-[6px] px-[12px] py-[9px] w-full sm:w-auto sm:min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.address")}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1 text-[16px] text-muted-foreground outline-none placeholder:text-muted-foreground bg-transparent"
        />
        <SearchIcon />
      </div>

      <div className="flex items-center gap-[8px] bg-background border border-border rounded-[6px] px-[12px] py-[9px] w-full sm:w-auto sm:min-w-[170px] cursor-pointer">
        <span className="flex-1 text-[16px] text-muted-foreground">{t("invoices.filter.paymentStatus")}</span>
        <ChevronIcon />
      </div>

      <button className="bg-background border border-border rounded-[6px] px-[16px] py-[9px] text-[16px] text-muted-foreground font-semibold hover:bg-muted transition-colors cursor-pointer w-full sm:w-auto">
        {t("invoices.filter.clear")}
      </button>
    </div>
  );
};

export default FilterBar;
