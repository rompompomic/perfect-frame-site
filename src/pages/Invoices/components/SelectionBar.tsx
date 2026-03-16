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
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1rem)] max-w-[760px] -translate-x-1/2 rounded-lg border border-primary bg-card p-4 shadow-2xl sm:bottom-6 sm:w-[calc(100%-3rem)] sm:p-5 md:left-auto md:right-6 md:translate-x-0">
      <button
        onClick={onClose}
        className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-sm bg-muted transition-opacity hover:opacity-70"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 5l10 10M15 5L5 15" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <p className="pr-12 text-2xl font-black uppercase leading-8 sm:text-[30px]">
        <span className="text-primary">{count} </span>
        <span className="text-primary/30">
          {t("invoices.selection.of")} {total} {t("invoices.selection.selected")}
        </span>
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
        <button className="flex h-11 w-full items-center justify-center gap-2.5 rounded-sm bg-primary px-4 py-3 transition-opacity hover:opacity-90 sm:w-auto">
          <img src={sendEmailIcon} alt="" className="h-5 w-5 brightness-0 invert" />
          <span className="text-sm font-semibold leading-6 text-primary-foreground sm:text-base">{t("invoices.selection.sendEmail")}</span>
        </button>

        {["EXCEL", "CSV", "PDF"].map((fmt) => (
          <button
            key={fmt}
            className="flex h-11 min-w-[88px] flex-1 items-center justify-center gap-2.5 rounded-sm border border-accent px-3 py-3 transition-colors hover:bg-accent/5 sm:flex-none sm:px-4"
          >
            <DownloadIcon />
            <span className="text-sm font-semibold uppercase leading-6 text-primary sm:text-base">{fmt}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectionBar;
