import { InvoicesCloseIcon, InvoicesSendIcon } from "@/components/icons";
import { DownloadIcon } from "@/components/icons/order-details";
import { useTranslation } from "react-i18next";

function SelectionBar({
  count,
  total,
  onClose,
}: {
  count: number;
  total: number;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 bg-background rounded-[8px] shadow-2xl border border-border flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3">
      <span className="text-sm font-bold text-primary">
        <span className="text-[hsl(var(--ring))]">{count}</span> {t("invoices.selection.of")} {total} {t("invoices.selection.selected")}
      </span>
      <div className="hidden sm:block w-px h-5 bg-border" />
      <button className="flex items-center gap-1.5 bg-[hsl(var(--ring))] text-primary-foreground text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:opacity-90 transition-colors flex-1 sm:flex-none justify-center">
        <InvoicesSendIcon /> {t("invoices.selection.sendEmail")}
      </button>
      {["EXCEL", "CSV", "PDF"].map((fmt) => (
        <button
          key={fmt}
          className="flex items-center gap-1.5 border border-border text-primary text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:border-[hsl(var(--ring))] hover:bg-accent transition-colors">
          <DownloadIcon /> {fmt}
        </button>
      ))}
      <button onClick={onClose} className="ml-auto sm:ml-1 p-1.5 hover:opacity-60 transition-opacity">
        <InvoicesCloseIcon />
      </button>
    </div>
  );
}

export default SelectionBar;
