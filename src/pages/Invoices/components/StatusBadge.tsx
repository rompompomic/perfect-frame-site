import { InvoicesCheckIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

function StatusBadge({ status }: { status: "awaiting" | "payed" }) {
  const { t } = useTranslation();
  if (status === "awaiting") {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFE4E4] text-[#6D1505]">
        {t("invoices.awaitingPayment")}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#E9FEEF] text-[#45AC61]">
      {t("invoices.paid")}
    </span>
  );
}

export default StatusBadge;
