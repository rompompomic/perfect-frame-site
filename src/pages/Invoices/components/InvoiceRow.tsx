import { useTranslation } from "react-i18next";
import { Invoice } from "../mock";
import Checkbox from "./Checkbox";
import StatusBadge from "./StatusBadge";
import Pill from "./Pill";
import { DownloadIcon } from "@/components/icons/order-details";

function InvoiceRow({
  invoice,
  checked,
  onCheck,
  onClick,
}: {
  invoice: Invoice;
  checked: boolean;
  onCheck: () => void;
  onClick: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div
      onClick={onClick}
      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:pl-[3px] sm:pr-[20px] sm:py-4 rounded-[6px] cursor-pointer transition-colors bg-nikami-light-blue">
      
      {/* Checkbox - hidden on mobile, shown on desktop */}
      <div className="hidden sm:flex bg-white w-[88px] h-[132px] items-center justify-center p-4 shrink-0">
        <Checkbox checked={checked} onChange={onCheck} />
      </div>

      {/* Mobile: checkbox + address row */}
      <div className="flex sm:hidden items-start gap-3">
        <Checkbox checked={checked} onChange={onCheck} />
        <div className="min-w-0">
          <p className="font-bold text-primary text-[18px] leading-tight">{invoice.address}</p>
          <span className="text-[14px] font-semibold">№ 12345678</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        {/* Desktop address */}
        <p className="hidden sm:block font-bold text-primary text-[20px] lg:text-[26px]">{invoice.address}</p>
        <span className="hidden sm:block text-[16px] font-semibold mb-2">№ 12345678</span>
        
        <div className="flex items-center gap-2 flex-wrap">
          <StatusBadge status={invoice.status} />
          <Pill className="font-semibold">{invoice.type}</Pill>
          <Pill className="font-semibold">{invoice.date}</Pill>
          <Pill className="font-semibold">{invoice.orders} order</Pill>
          <Pill className="font-bold">{invoice.amount}</Pill>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1 font-medium">№ {invoice.number}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0 flex-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="bg-primary text-primary-foreground text-[12px] font-semibold px-4 py-2 rounded-[2px] hover:opacity-90 transition-colors whitespace-nowrap flex-1 sm:flex-none">
          {t("invoices.row.view")}
        </button>
        <button className="flex items-center justify-center gap-1.5 border border-[hsl(var(--ring))] text-primary text-[12px] font-bold px-3 py-2 rounded-[2px] hover:bg-accent transition-colors whitespace-nowrap flex-1 sm:flex-none">
          <DownloadIcon /> {t("invoices.row.download")}
        </button>
        {invoice.status === "awaiting" && (
          <button className="bg-[hsl(var(--ring))] text-primary-foreground text-[12px] font-semibold px-4 py-2 rounded-[2px] hover:opacity-90 transition-colors whitespace-nowrap flex-1 sm:flex-none">
            {t("invoices.row.pay")}
          </button>
        )}
      </div>
    </div>
  );
}

export default InvoiceRow;
