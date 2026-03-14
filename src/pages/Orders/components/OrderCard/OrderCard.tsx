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
    <div className="bg-white border border-[#dde8f5] rounded-[8px] overflow-hidden">
      <div className="bg-[#e8f1fb] px-[20px] py-[14px] flex items-center gap-[16px]">
        <div className="bg-white w-[72px] h-[72px] flex items-center justify-center rounded-[6px] p-[10px] shrink-0">
          <ContainerIcon />
        </div>
        <div className="flex items-start flex-col gap-[8px] flex-1 flex-wrap">
          <div>
            <span className="font-black text-[#05376d] text-[18px] tracking-tight">
              Order №{order.id}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="border border-[#4895E8] text-[#4895E8] text-[11px] font-medium px-[8px] py-[2px] rounded-full">
              {t("orders.card.orderStatus")}
            </span>
            <span className="border border-[#BDC8D3] text-[#000] text-[12px] font-medium px-[8px] py-[2px] rounded-full">
              {order.date}
            </span>
            <span className="border border-[#BDC8D3] text-[#000] text-[12px] font-bold px-[8px] py-[2px] rounded-full">
              {order.price}
            </span>
            <span className="border border-[#BDC8D3] text-[#000] text-[12px] font-semibold px-[8px] py-[2px] rounded-full">
              {order.type}
            </span>
            <span
              className={`text-[12px] font-semibold px-[8px] py-[2px] rounded-full ${order.paymentPaid ? "bg-[#E1F5E7] text-[#16a34a]" : "bg-[#E9D0D0] text-[#6D1505]"}`}>
              {order.paymentStatus}
            </span>
          </div>
        </div>
        {!order.paymentPaid && (
          <button className="bg-[#4895E8] text-white font-bold text-[13px] px-[20px] py-[8px] rounded-[6px] hover:bg-[#042c5a] transition-colors shrink-0 cursor-pointer">
            {t("orders.card.payNow")}
          </button>
        )}
      </div>

      <div className="divide-y divide-[#f1f5f9]">
        {order.positions.map((pos, i) => (
          <div key={i} className="px-[20px] py-[14px] flex items-center justify-between gap-[16px]">
            <div>
              <p className="font-bold text-[#000] text-[14px] mb-[6px]">{pos.address}</p>
              <div className="flex items-center gap-[12px] flex-wrap">
                <span className="flex rounded-[1px] pr-[6px] border border-[#E4F1FF] items-center gap-[8px] font-semibold text-[#05376D] text-[12px]">
                  <span className="flex items-center justify-center w-[28px] h-[28px] bg-[#E4F1FF] rounded-[1px] shrink-0">
                    <DateIcon />
                  </span>
                  {pos.date}
                </span>
                <span className="flex rounded-[1px] pr-[6px] border border-[#E4F1FF] items-center gap-[8px] font-semibold text-[#05376D] text-[12px]">
                  <span className="flex items-center justify-center w-[28px] h-[28px] bg-[#E4F1FF] rounded-[1px] shrink-0">
                    <ContainerSmallIcon />
                  </span>
                  {pos.container}
                </span>
                <span className="flex rounded-[1px] pr-[6px] border border-[#E4F1FF] items-center gap-[8px] font-semibold text-[#05376D] text-[12px]">
                  <span className="flex items-center justify-center w-[28px] h-[28px] bg-[#E4F1FF] rounded-[1px] shrink-0">
                    <PriceIcon />
                  </span>
                  {pos.price}
                </span>
              </div>
            </div>
            <button className="border border-[#4895E8] text-[#05376D] font-semibold text-[12px] px-[14px] py-[7px] rounded-[2px] hover:bg-[#e8f1fb] transition-colors shrink-0 cursor-pointer whitespace-nowrap">
              {t("orders.card.replaceContainer")}
            </button>
          </div>
        ))}
      </div>

      <div className="px-[20px] py-[14px] border-t border-[#f1f5f9] grid grid-cols-4 gap-[10px]">
        <button
          onClick={() => navigate(`/order/${order.id}`)}
          className="bg-[#05376d] text-white font-bold text-[13px] py-[10px] rounded-[2px] hover:bg-[#042c5a] transition-colors cursor-pointer">
          {t("orders.card.viewOrder")}
        </button>
        <button className="border border-[#4895E8] text-[#05376D] font-semibold text-[13px] py-[10px] rounded-[2px] hover:bg-[#f8faff] transition-colors flex items-center justify-center gap-[6px] cursor-pointer">
          <DownloadIcon /> {t("orders.card.invoice")}
        </button>
        <button className="border border-[#4895E8] text-[#05376D] font-semibold text-[13px] py-[10px] rounded-[2px] hover:bg-[#f8faff] transition-colors flex items-center justify-center gap-[6px] cursor-pointer">
          <DownloadIcon /> {t("orders.card.receipt")}
        </button>
        <button className="bg-[#4a90d9] text-white font-bold text-[13px] py-[10px] rounded-[6px] hover:bg-[#357abd] transition-colors flex items-center justify-center gap-[6px] cursor-pointer">
          <ReorderIcon /> {t("orders.card.reorder")}
        </button>
      </div>
    </div>
  );
};
