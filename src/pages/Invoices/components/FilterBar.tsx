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
    <div className="mb-8 flex flex-wrap gap-2.5 sm:mb-10">
      <div className="flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 sm:w-auto sm:min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.dates")}
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-base text-muted-foreground outline-none placeholder:text-muted-foreground/80"
        />
        <CalendarIcon />
      </div>

      <div className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 sm:w-auto sm:min-w-[228px]">
        <span className="flex-1 text-base text-muted-foreground">{t("invoices.filter.orderStatus")}</span>
        <ChevronIcon />
      </div>

      <div className="flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 sm:w-auto sm:min-w-[180px]">
        <input
          type="text"
          placeholder={t("invoices.filter.address")}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-base text-muted-foreground outline-none placeholder:text-muted-foreground/80"
        />
        <SearchIcon />
      </div>

      <div className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 sm:w-auto sm:min-w-[170px]">
        <span className="flex-1 text-base text-muted-foreground">{t("invoices.filter.paymentStatus")}</span>
        <ChevronIcon />
      </div>

      <button
        onClick={onClear}
        className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-base font-semibold text-muted-foreground transition-colors hover:bg-muted sm:w-auto"
      >
        {t("invoices.filter.clear")}
      </button>
    </div>
  );
};

export default FilterBar;
