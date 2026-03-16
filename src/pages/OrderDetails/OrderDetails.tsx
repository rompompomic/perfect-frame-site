import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mockOrder } from "./mock";
import {
  CartIcon,
  CardIcon,
  StatusIcon,
  DownloadIcon as OrderDetailsDownloadIcon,
  TagIcon,
} from "@/components/icons";
import { PositionCard } from "./components/PositionCard";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";

export default function OrderDetailPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>
      <div className="bg-[#fff] min-h-screen w-full pb-[48px]">
        <div className="max-w-[1040px] mx-auto px-[24px] pt-[40px]">
          <div className="flex items-center justify-between gap-[16px] mb-[32px] ">
            <h1 className="font-black text-[#05376d] text-[40px] tracking-tight">
              Order {mockOrder.id} from {mockOrder.date}
            </h1>
            <div className="flex gap-[10px]">
              <button className="flex items-center gap-[8px] border border-[#4895E8] bg-white font-semibold text-[#05376D] font-semibold text-[13px] px-[14px] py-[8px] rounded-[2px] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                <OrderDetailsDownloadIcon /> {t("orderDetail.invoice")}
              </button>
              <button className="flex items-center gap-[8px] border border-[#4895E8] bg-white font-semibold text-[#05376D] font-semibold text-[13px] px-[14px] py-[8px] rounded-[2px] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                <OrderDetailsDownloadIcon /> {t("orderDetail.receipt")}
              </button>
            </div>
          </div>

          <div className="flex gap-[24px] items-start flex-wrap lg:flex-nowrap">
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-2 gap-[12px] mb-[28px]">
                {[
                  { icon: <TagIcon />, label: t("orderDetail.orderNumber"), value: mockOrder.id },
                  { icon: <CartIcon />, label: t("orderDetail.serviceType"), value: mockOrder.serviceType },
                  { icon: <CardIcon />, label: t("orderDetail.paymentStatus"), value: mockOrder.paymentStatus },
                  { icon: <StatusIcon />, label: t("orderDetail.orderStatus"), value: mockOrder.orderStatus },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#F8F8F8] rounded-[8px] px-[16px] py-[14px] flex items-center gap-[12px]">
                    <div className="shrink-0 w-[56px] h-[56px] flex items-center justify-center bg-[#fff]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#000] text-[14px] font-bold tracking-wide mb-[2px]">
                        {item.label}
                      </p>
                      <p className="text-[#1e293b] text-[16px]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-black text-[#05376d] text-[40px] uppercase tracking-tight mb-[14px]">
                {t("orderDetail.positions")} <span className="text-[#CDD7E2]">({mockOrder.positions.length})</span>
              </h2>

              <div className="flex flex-col gap-[10px]">
                {mockOrder.positions.map((pos) => (
                  <PositionCard key={pos.id} position={pos} />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[300px] shrink-0">
              <div className="bg-white border border-[#dde8f5] p-[20px] mb-[16px]">
                <h3 className="font-black text-[#05376d] text-[32px] uppercase tracking-wide mb-[16px]">
                  {t("orderDetail.summary")}
                </h3>
                <div className="flex flex-col gap-[16px]">
                  {mockOrder.summary.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-[6px]">
                        <span className="font-bold text-[#1e293b] text-[13px]">{item.label}</span>
                        <span className="font-bold text-[#1e293b] text-[13px]">{item.size}</span>
                      </div>
                      <div className="flex flex-col gap-[3px] pl-[2px]">
                        <div className="flex justify-between text-[12px]">
                          <span className="text-[#64748b]">{t("orderDetail.address")}</span>
                          <span className="text-[#1e293b] font-bold text-right">
                            {item.address}
                          </span>
                        </div>
                        <div className="flex justify-between text-[12px]">
                          <span className="text-[#64748b]">{t("orderDetail.service")}</span>
                          <span className="text-[#1e293b] font-bold text-right">
                            {item.service}
                          </span>
                        </div>
                        {item.delivery && (
                          <div className="flex justify-between text-[12px]">
                            <span className="text-[#64748b]">{t("orderDetail.delivery")}</span>
                            <span className="text-[#1e293b] font-bold">{item.delivery}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-[12px]">
                          <span className="text-[#64748b]">{t("orderDetail.removal")}</span>
                          <span className="text-[#1e293b] font-bold">{item.pickup}</span>
                        </div>
                        <div className="flex justify-between text-[12px]">
                          <span className="text-[#64748b]">{t("orderDetail.price")}</span>
                          <span className="text-[#1e293b] font-bold">{item.price}</span>
                        </div>
                      </div>
                      {i < mockOrder.summary.length - 1 && (
                        <div className="mt-[14px] h-px bg-[#f1f5f9]" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-[8px] mt-[20px]">
                  <h3 className="font-black text-[#05376d] text-[20px] uppercase tracking-wide mb-[14px]">
                    {t("orderDetail.priceCalc")}
                  </h3>
                  <div className="flex flex-col gap-[8px]">
                    {[
                      {
                        label: t("orderDetail.wasteRemoval"),
                        value: mockOrder.pricing.wasteRemoval,
                      },
                      {
                        label: t("orderDetail.rentalPeriod"),
                        value: mockOrder.pricing.rentalFee,
                      },
                      { label: t("orderDetail.discount"), value: mockOrder.pricing.discount },
                      { label: t("orderDetail.subtotal"), value: mockOrder.pricing.subtotal },
                      { label: t("orderDetail.vat"), value: mockOrder.pricing.vat },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-[13px]">
                        <span className="text-[#64748b]">{item.label}</span>
                        <span className="text-[#1e293b] font-bold">{item.value}</span>
                      </div>
                    ))}
                    <div className="h-px bg-[#dde8f5] my-[4px]" />
                    <div className="flex justify-between text-[14px]">
                      <span className="font-black text-[#05376D]">{t("orderDetail.total")}</span>
                      <span className="font-black text-[#05376D]">{mockOrder.pricing.total}</span>
                    </div>
                  </div>
                  <div className="mt-[14px] bg-[#DADADA] border border-[#dde8f5] p-[12px] flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#000] text-[13px]">{t("orderDetail.paid")}</p>
                      <p className="text-[#000] font-semibold text-[11px]">
                        {mockOrder.pricing.paymentMethod}
                      </p>
                    </div>
                    <span className="font-black text-[#1e293b] text-[15px]">
                      {mockOrder.pricing.paid}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
