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
    <div onClick={onClick} className={`cursor-pointer rounded-md transition-colors ${checked ? "bg-secondary" : "bg-secondary/70"}`}>
      <div className="flex flex-col gap-3 p-3 sm:p-4 md:flex-row md:items-center md:gap-4 md:pl-[3px] md:pr-5 md:py-4">
        <div className="flex h-auto w-full items-center justify-start bg-card p-3 md:h-[132px] md:w-[88px] md:justify-center md:p-4">
          <Checkbox checked={checked} onChange={onCheck} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="break-words text-xl font-bold text-primary sm:text-[26px]">{invoice.address}</p>
          <span className="mb-2 block text-sm font-semibold sm:text-base">№ 12345678</span>

          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={invoice.status} />
            <Pill className="font-semibold">{invoice.type}</Pill>
            <Pill className="font-semibold">{invoice.date}</Pill>
            <Pill className="font-semibold">{invoice.orders} order</Pill>
            <Pill className="font-bold">{invoice.amount}</Pill>
          </div>

          <p className="mt-1 text-xs font-medium text-muted-foreground">№ {invoice.number}</p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-2 md:w-auto md:shrink-0" onClick={(e) => e.stopPropagation()}>
          <button className="h-9 flex-1 whitespace-nowrap rounded-sm bg-primary px-4 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:flex-none">
            {t("invoices.row.view")}
          </button>

          <button className="flex h-9 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-accent px-3 text-xs font-bold text-primary transition-colors hover:bg-accent/5 md:flex-none">
            <DownloadIcon /> {t("invoices.row.download")}
          </button>

          {invoice.status === "awaiting" && (
            <button className="h-9 flex-1 whitespace-nowrap rounded-sm bg-accent px-4 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:flex-none">
              {t("invoices.row.pay")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceRow;
