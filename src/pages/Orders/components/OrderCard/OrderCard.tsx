import { FC } from "react";
import { useTranslation } from "react-i18next";
import { orders } from "../../mock";
import {
  ContainerIcon,
  ContainerSmallIcon,
  DateIcon,
  DownloadIcon,
  PriceIcon,
  ReorderIcon,
} from "@/components/icons";

interface OrderCardProps {
  order: (typeof orders)[0];
  navigate: (path: string) => void;
}

export const OrderCard: FC<OrderCardProps> = ({ order, navigate }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-[#dde8f5] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-secondary px-4 md:px-5 py-3 md:py-[14px] flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
        <div className="bg-white w-14 h-14 md:w-[72px] md:h-[72px] flex items-center justify-center rounded-md p-2 shrink-0">
          <ContainerIcon />
        </div>
        <div className="flex items-start flex-col gap-2 flex-1 min-w-0">
          <span className="font-black text-primary text-base md:text-lg tracking-tight">
            Order №{order.id}
          </span>
          <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
            <span className="border border-accent text-accent text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-full">
              {t("orders.card.orderStatus")}
            </span>
            <span className="border border-border text-foreground text-[11px] md:text-xs font-medium px-2 py-0.5 rounded-full">
              {order.date}
            </span>
            <span className="border border-border text-foreground text-[11px] md:text-xs font-bold px-2 py-0.5 rounded-full">
              {order.price}
            </span>
            <span className="border border-border text-foreground text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full">
              {order.type}
            </span>
            <span
              className={`text-[11px] md:text-xs font-semibold px-2 py-0.5 rounded-full ${order.paymentPaid ? "bg-[#E1F5E7] text-[#16a34a]" : "bg-[#E9D0D0] text-[#6D1505]"}`}>
              {order.paymentStatus}
            </span>
          </div>
        </div>
        {!order.paymentPaid && (
          <button className="bg-accent text-white font-bold text-xs md:text-[13px] px-4 md:px-5 py-2 rounded-md hover:bg-primary transition-colors shrink-0 cursor-pointer w-full sm:w-auto">
            {t("orders.card.payNow")}
          </button>
        )}
      </div>

      {/* Positions */}
      <div className="divide-y divide-muted">
        {order.positions.map((pos, i) => (
          <div key={i} className="px-4 md:px-5 py-3 md:py-[14px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
            <div className="min-w-0">
              <p className="font-bold text-foreground text-sm mb-1.5 break-words">{pos.address}</p>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <span className="flex rounded-sm pr-1.5 border border-secondary items-center gap-1.5 font-semibold text-primary text-[11px] md:text-xs">
                  <span className="flex items-center justify-center w-7 h-7 bg-secondary rounded-sm shrink-0">
                    <DateIcon />
                  </span>
                  {pos.date}
                </span>
                <span className="flex rounded-sm pr-1.5 border border-secondary items-center gap-1.5 font-semibold text-primary text-[11px] md:text-xs">
                  <span className="flex items-center justify-center w-7 h-7 bg-secondary rounded-sm shrink-0">
                    <ContainerSmallIcon />
                  </span>
                  {pos.container}
                </span>
                <span className="flex rounded-sm pr-1.5 border border-secondary items-center gap-1.5 font-semibold text-primary text-[11px] md:text-xs">
                  <span className="flex items-center justify-center w-7 h-7 bg-secondary rounded-sm shrink-0">
                    <PriceIcon />
                  </span>
                  {pos.price}
                </span>
              </div>
            </div>
            <button className="border border-accent text-primary font-semibold text-xs px-3 py-1.5 rounded-sm hover:bg-secondary transition-colors shrink-0 cursor-pointer whitespace-nowrap w-full sm:w-auto">
              {t("orders.card.replaceContainer")}
            </button>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="px-4 md:px-5 py-3 md:py-[14px] border-t border-muted grid grid-cols-1 sm:grid-cols-4 gap-2 md:gap-[10px]">
        <button
          onClick={() => navigate(`/order/${order.id}`)}
          className="bg-primary text-primary-foreground font-bold text-xs md:text-[13px] py-2.5 rounded-sm hover:bg-primary/90 transition-colors cursor-pointer">
          {t("orders.card.viewOrder")}
        </button>
        <button className="border border-accent text-primary font-semibold text-xs md:text-[13px] py-2.5 rounded-sm hover:bg-secondary transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
          <DownloadIcon /> {t("orders.card.invoice")}
        </button>
        <button className="border border-accent text-primary font-semibold text-xs md:text-[13px] py-2.5 rounded-sm hover:bg-secondary transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
          <DownloadIcon /> {t("orders.card.receipt")}
        </button>
        <button className="bg-accent text-accent-foreground font-bold text-xs md:text-[13px] py-2.5 rounded-md hover:bg-accent/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
          <ReorderIcon /> {t("orders.card.reorder")}
        </button>
      </div>
    </div>
  );
};
