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
      className={`flex max-h-[135px] items-center gap-4 pl-[3px] pr-[20px] py-4 rounded-[6px] cursor-pointer transition-colors
        ${checked ? "bg-[#E4F1FF]" : "bg-[#E4F1FF]"}`}>
      <div className="bg-white w-[88px] h-[132px] flex items-center justify-center p-4">
        <Checkbox checked={checked} onChange={onCheck} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#05376D] text-[26px]">{invoice.address}</p>
        <span className="text-[16px] font-semibold mb-2">№ 12345678</span>
        <div className="flex items-center gap-2 flex-wrap">
          <StatusBadge status={invoice.status} />
          <Pill className="font-semibold">{invoice.type}</Pill>
          <Pill className="font-semibold">{invoice.date}</Pill>
          <Pill className="font-semibold">{invoice.orders} order</Pill>
          <Pill className="font-bold">{invoice.amount}</Pill>
        </div>
        <p className="text-[11px] text-[#94A3B8] mt-1 font-medium">№ {invoice.number}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
        <button className="bg-[#05376D] text-white text-[12px] font-semibold px-4 py-2 rounded-[2px] hover:bg-[#15305a] transition-colors whitespace-nowrap">
          {t("invoices.row.view")}
        </button>
        <button className="flex items-center gap-1.5 border border-[#4895E8] text-[#05376D] text-[12px] font-bold px-3 py-2 rounded-[2px] hover:border-[#4895E8] hover:bg-[#f0f7ff] transition-colors whitespace-nowrap">
          <DownloadIcon /> {t("invoices.row.download")}
        </button>
        {invoice.status === "awaiting" && (
          <button className="bg-[#4895E8] text-white text-[12px] font-semibold px-4 py-2 rounded-[2px] hover:bg-[#3580d0] transition-colors whitespace-nowrap">
            {t("invoices.row.pay")}
          </button>
        )}
      </div>
    </div>
  );
}

export default InvoiceRow;
