import CloseIcon from "@/assets/icons/close-x.svg";
import { DownloadIcon } from "@/components/icons/order-details";
import { useTranslation } from "react-i18next";
import ShareFatIcon from "@/assets/icons/share-fat.svg";

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
    <div className="fixed bottom-6 right-6 z-50 bg-background border border-nikami-blue p-5 inline-flex items-start gap-5 shadow-2xl relative">
      {/* Content */}
      <div className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <span className="text-primary text-[30px] font-black uppercase leading-8">
            {count}{" "}
          </span>
          <span className="text-primary/20 text-[30px] font-black uppercase leading-8">
            {t("invoices.selection.of")} {total} {t("invoices.selection.selected")}
          </span>
        </div>

        {/* Buttons row */}
        <div className="flex flex-wrap items-start gap-4">
          <button className="h-11 px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 hover:opacity-90 transition-colors">
            <img src={ShareFatIcon} alt="" className="w-5 h-5" />
            <span className="text-primary-foreground text-base font-semibold leading-6">
              {t("invoices.selection.sendEmail")}
            </span>
          </button>

          {["EXCEL", "CSV", "PDF"].map((fmt) => (
            <button
              key={fmt}
              className="h-11 px-4 py-3 rounded-sm border border-nikami-blue flex items-center justify-center gap-2.5 hover:bg-nikami-light-blue transition-colors">
              <DownloadIcon />
              <span className="text-primary text-base font-semibold uppercase leading-6">
                {fmt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Close button - top right corner, border only on top and left to avoid doubling */}
      <button
        onClick={onClose}
        className="absolute -top-px -right-px bg-muted p-3 flex items-center justify-center hover:opacity-60 transition-opacity border-l border-b border-nikami-blue">
        <img src={CloseIcon} alt="Close" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default SelectionBar;
