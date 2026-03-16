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
      <div className="bg-background min-h-screen w-full pb-8 md:pb-12">
        <div className="max-w-[1040px] mx-auto px-4 md:px-6 pt-6 md:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
            <h1 className="font-black text-primary text-2xl md:text-[40px] tracking-tight">
              Order {mockOrder.id} from {mockOrder.date}
            </h1>
            <div className="flex gap-2 md:gap-[10px]">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-accent bg-white font-semibold text-primary text-xs md:text-[13px] px-3 md:px-[14px] py-2 rounded-sm hover:bg-muted transition-colors cursor-pointer">
                <OrderDetailsDownloadIcon /> {t("orderDetail.invoice")}
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-accent bg-white font-semibold text-primary text-xs md:text-[13px] px-3 md:px-[14px] py-2 rounded-sm hover:bg-muted transition-colors cursor-pointer">
                <OrderDetailsDownloadIcon /> {t("orderDetail.receipt")}
              </button>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 items-start flex-wrap lg:flex-nowrap">
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[12px] mb-6 md:mb-7">
                {[
                  { icon: <TagIcon />, label: t("orderDetail.orderNumber"), value: mockOrder.id },
                  { icon: <CartIcon />, label: t("orderDetail.serviceType"), value: mockOrder.serviceType },
                  { icon: <CardIcon />, label: t("orderDetail.paymentStatus"), value: mockOrder.paymentStatus },
                  { icon: <StatusIcon />, label: t("orderDetail.orderStatus"), value: mockOrder.orderStatus },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-muted rounded-lg px-3 md:px-4 py-3 md:py-[14px] flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-background rounded">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground text-xs md:text-sm font-bold tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-foreground/80 text-sm md:text-base truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-black text-primary text-2xl md:text-[40px] uppercase tracking-tight mb-3 md:mb-[14px]">
                {t("orderDetail.positions")} <span className="text-muted-foreground/40">({mockOrder.positions.length})</span>
              </h2>

              <div className="flex flex-col gap-2.5 md:gap-[10px]">
                {mockOrder.positions.map((pos) => (
                  <PositionCard key={pos.id} position={pos} />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[300px] shrink-0">
              <div className="bg-background border border-border p-4 md:p-5 mb-4">
                <h3 className="font-black text-primary text-2xl md:text-[32px] uppercase tracking-wide mb-4">
                  {t("orderDetail.summary")}
                </h3>
                <div className="flex flex-col gap-4">
                  {mockOrder.summary.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-foreground/80 text-[13px]">{item.label}</span>
                        <span className="font-bold text-foreground/80 text-[13px]">{item.size}</span>
                      </div>
                      <div className="flex flex-col gap-1 pl-0.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{t("orderDetail.address")}</span>
                          <span className="text-foreground/80 font-bold text-right">
                            {item.address}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{t("orderDetail.service")}</span>
                          <span className="text-foreground/80 font-bold text-right">
                            {item.service}
                          </span>
                        </div>
                        {item.delivery && (
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">{t("orderDetail.delivery")}</span>
                            <span className="text-foreground/80 font-bold">{item.delivery}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{t("orderDetail.removal")}</span>
                          <span className="text-foreground/80 font-bold">{item.pickup}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{t("orderDetail.price")}</span>
                          <span className="text-foreground/80 font-bold">{item.price}</span>
                        </div>
                      </div>
                      {i < mockOrder.summary.length - 1 && (
                        <div className="mt-3.5 h-px bg-muted" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="bg-background rounded-lg mt-5">
                  <h3 className="font-black text-primary text-lg md:text-xl uppercase tracking-wide mb-3.5">
                    {t("orderDetail.priceCalc")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: t("orderDetail.wasteRemoval"), value: mockOrder.pricing.wasteRemoval },
                      { label: t("orderDetail.rentalPeriod"), value: mockOrder.pricing.rentalFee },
                      { label: t("orderDetail.discount"), value: mockOrder.pricing.discount },
                      { label: t("orderDetail.subtotal"), value: mockOrder.pricing.subtotal },
                      { label: t("orderDetail.vat"), value: mockOrder.pricing.vat },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-[13px]">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground/80 font-bold">{item.value}</span>
                      </div>
                    ))}
                    <div className="h-px bg-border my-1" />
                    <div className="flex justify-between text-sm">
                      <span className="font-black text-primary">{t("orderDetail.total")}</span>
                      <span className="font-black text-primary">{mockOrder.pricing.total}</span>
                    </div>
                  </div>
                  <div className="mt-3.5 bg-muted border border-border p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-foreground text-[13px]">{t("orderDetail.paid")}</p>
                      <p className="text-foreground font-semibold text-[11px]">
                        {mockOrder.pricing.paymentMethod}
                      </p>
                    </div>
                    <span className="font-black text-foreground text-[15px]">
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
