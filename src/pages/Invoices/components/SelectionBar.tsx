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
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 bg-background rounded-[8px] shadow-2xl border border-border flex flex-col sm:flex-row sm:flex-nowrap items-stretch sm:items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-primary">
          <span className="text-nikami-blue">{count}</span> {t("invoices.selection.of")} {total} {t("invoices.selection.selected")}
        </span>
        <button onClick={onClose} className="sm:hidden p-1.5 hover:opacity-60 transition-opacity">
          <InvoicesCloseIcon />
        </button>
      </div>
      <div className="hidden sm:block w-px h-5 bg-border" />
      <button className="flex items-center justify-center gap-1.5 bg-nikami-blue text-primary-foreground text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:opacity-90 transition-colors">
        <InvoicesSendIcon /> {t("invoices.selection.sendEmail")}
      </button>
      <div className="grid grid-cols-3 sm:flex gap-2">
        {["EXCEL", "CSV", "PDF"].map((fmt) => (
          <button
            key={fmt}
            className="flex items-center justify-center gap-1.5 border border-border text-primary text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:border-nikami-blue hover:bg-nikami-light-blue transition-colors">
            <DownloadIcon /> {fmt}
          </button>
        ))}
      </div>
      <button onClick={onClose} className="hidden sm:block ml-1 p-1.5 hover:opacity-60 transition-opacity">
        <InvoicesCloseIcon />
      </button>
    </div>
  );
}

export default SelectionBar;
