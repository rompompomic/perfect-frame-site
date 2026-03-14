import { DownloadIcon } from "@/components/icons/order-details";
import StatusBadge from "./StatusBadge";
import { SendIcon, ReorderIcon } from "./icons/InvoiceDetailIcons";

function InvoiceDetailHeader({ inv }: { inv: any }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-3 flex-wrap">
      <div>
        <h1 className="text-[58px] font-black text-[#05376D] tracking-tight leading-tight">
          Invoice № {inv.number}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <StatusBadge status={inv.status} />
          {inv.status === "awaiting" && (
            <span className="inline-flex items-center gap-1.5 bg-[#E4F1FF] text-[#05376D] text-[11px] font-bold px-3 py-1 rounded-full">
              Days until payment
              <span className="bg-[#4895E8] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {inv.daysUntilPayment}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 border border-[#D0DCE8] text-[#334155] text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:border-[#4895E8] transition-colors">
            <SendIcon /> Send to e-mail
          </button>
          <button className="flex items-center gap-1.5 border border-[#D0DCE8] text-[#334155] text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:border-[#4895E8] transition-colors">
            <DownloadIcon /> Download
          </button>
          <button className="flex items-center gap-1.5 bg-[#4895E8] text-white text-[12px] font-semibold px-3 py-2 rounded-[4px] hover:bg-[#3580d0] transition-colors">
            <ReorderIcon /> Reorder
          </button>
        </div>
        <div className="flex items-center gap-2">
          {["EXCEL", "CSV", "PDF"].map((fmt) => (
            <button
              key={fmt}
              className="border border-[#D0DCE8] text-[#334155] text-[11px] font-bold px-3 py-1.5 rounded-[4px] hover:border-[#4895E8] hover:text-[#4895E8] transition-colors">
              {fmt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetailHeader;
