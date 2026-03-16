import { DownloadIcon } from "@/components/icons/order-details";
import { useTranslation } from "react-i18next";
import sendEmailIcon from "@/assets/icons/send-email.svg";

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
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg border border-primary p-5 flex flex-col gap-5">
      {/* Close button - top right */}
      <button
        onClick={onClose}
        className="absolute top-0 right-0 h-11 w-11 bg-muted rounded-sm flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5l10 10M15 5L5 15" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Count text */}
      <p className="text-[30px] font-black uppercase leading-8">
        <span className="text-primary">{count} </span>
        <span className="text-primary/20">{t("invoices.selection.of")} {total} {t("invoices.selection.selected")}</span>
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        <button className="h-11 px-4 py-3 bg-primary-dark rounded-sm flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <img src={sendEmailIcon} alt="" className="w-5 h-5 brightness-0 invert" />
          <span className="text-white text-base font-semibold leading-6">
            {t("invoices.selection.sendEmail")}
          </span>
        </button>
        {["EXCEL", "CSV", "PDF"].map((fmt) => (
          <button
            key={fmt}
            className="h-11 px-4 py-3 rounded-sm border border-primary flex items-center gap-2.5 hover:bg-primary/5 transition-colors"
          >
            <DownloadIcon />
            <span className="text-primary-dark text-base font-semibold uppercase leading-6">
              {fmt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectionBar;
