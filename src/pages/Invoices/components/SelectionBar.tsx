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
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-[8px] shadow-2xl border border-[#E2E8F0] flex items-center gap-3 px-5 py-3">
      <span className="text-sm font-bold text-[#05376D]">
        <span className="text-[#4895E8]">{count}</span> {t("invoices.selection.of")} {total} {t("invoices.selection.selected")}
      </span>
      <div className="w-px h-5 bg-[#E2E8F0]" />
      <button className="flex items-center gap-1.5 bg-[#4895E8] text-white text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:bg-[#3580d0] transition-colors">
        <InvoicesSendIcon /> {t("invoices.selection.sendEmail")}
      </button>
      {["EXCEL", "CSV", "PDF"].map((fmt) => (
        <button
          key={fmt}
          className="flex items-center gap-1.5 border border-[#D0DCE8] text-[#05376D] text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:border-[#4895E8] hover:bg-[#f0f7ff] transition-colors">
          <DownloadIcon /> {fmt}
        </button>
      ))}
      <button onClick={onClose} className="ml-1 p-1.5 hover:opacity-60 transition-opacity">
        <InvoicesCloseIcon />
      </button>
    </div>
  );
}

export default SelectionBar;
