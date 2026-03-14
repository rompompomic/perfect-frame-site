import { useTranslation } from "react-i18next";

function StatusBadge({ status }: { status: "awaiting" | "payed" }) {
  const { t } = useTranslation();
  if (status === "awaiting") {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-l-full text-[11px] font-semibold bg-[#FFE4E4] text-[#6D1505]">
        {t("invoiceDetail.status.awaiting")}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-l-full text-[11px] font-semibold bg-[#E8F5E9] text-[#2E7D32]">
      {t("invoiceDetail.status.paid")}
    </span>
  );
}

export default StatusBadge;
