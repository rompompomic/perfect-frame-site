import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_INVOICE_DETAIL } from "../Invoices/mock";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";

import { CardIcon, CartIcon, DownloadIcon } from "@/components/icons/order-details";
import { SendIcon } from "@/components/icons/invoices";
import { ClockIcon, ReorderIcon } from "@/components/icons";
import { StatusBadge } from "./components";
import { PositionCard } from "./components/PositionCard";
import { PaymentSection } from "./components/PaymentSection";

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-[12px] bg-[#F8FAFC] rounded-[6px] px-[16px] py-[12px]">
      <div className="text-[#4895E8] bg-white p-3 shrink-0">{icon}</div>
      <div>
        <p className="text-[11px] text-[#000] font-semibold mb-[2px]">{label}</p>
        <p className="text-[13px] font-bold text-[#000]">{value}</p>
      </div>
    </div>
  );
}

export default function InvoiceDetailPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const inv = MOCK_INVOICE_DETAIL;

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[40px]">
          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-6 mb-[16px] flex-wrap">
            <div>
              <h1 className="text-[52px] font-black text-[#05376D] tracking-tight leading-[1.1]">
                {t("invoiceDetail.titlePrefix")} {inv.number}
              </h1>
              <div className="w-fit flex border border-[#FFE4E4] rounded-full items-center mt-[8px]">
                <StatusBadge status={inv.status} />
                {inv.status === "awaiting" && (
                  <span className="inline-flex items-center rounded-r-full gap-[6px] text-[#6D1505] text-[11px] font-bold px-[10px] py-[4px]">
                    {t("invoiceDetail.daysUntilPayment")}
                    <span className="bg-[#6D1505] text-white text-[10px] font-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
                      {inv.daysUntilPayment}
                    </span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <button className="flex items-center gap-[6px] border border-[#4895E8] text-[#05376D] text-[12px] font-bold px-[12px] py-[8px] rounded-[2px] transition-colors">
                  <SendIcon /> {t("invoiceDetail.sendEmail")}
                </button>
                <button className="flex items-center gap-[6px] bg-[#E4EFFC] text-[#4895E8] text-[12px] font-bold px-[12px] py-[8px] rounded-[2px] transition-colors">
                  <DownloadIcon /> {t("invoiceDetail.download")}
                </button>
                <button className="flex items-center gap-[6px] bg-[#4895E8] text-white text-[12px] font-bold px-[12px] py-[8px] rounded-[2px]  transition-colors">
                  <ReorderIcon /> {t("invoiceDetail.reorder")}
                </button>
              </div>
              <div className="flex items-center gap-[6px] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] p-2">
                {["EXCEL", "CSV", "PDF"].map((fmt) => (
                  <button
                    key={fmt}
                    className="border border-[#4895E8] text-[#05376D] text-[11px] font-bold px-[10px] py-[5px] rounded-[4px] hover:border-[#4895E8] hover:text-[#4895E8] transition-colors">
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Info tiles ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] mt-[60px] mb-[10px]">
            <InfoTile icon={<CardIcon />} label={t("invoiceDetail.paymentStatus")} value={inv.paymentStatus} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.type")} value={inv.type} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.createdAt")} value={inv.createdAt} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.paymentPeriod")} value={inv.paymentPeriod} />
          </div>

          {/* ── Related orders ── */}
          <div className="border border-[#E2E8F0] rounded-[6px] px-[16px] py-[14px] mb-[40px] flex items-start gap-[12px]">
            <div className="text-[#4895E8] shrink-0 mt-[2px]">
              <CartIcon />
            </div>
            <div>
              <p className="text-[14px] text-[#000] font-bold mb-[8px]">{t("invoiceDetail.relatedOrders")}</p>
              <div className="flex flex-wrap gap-[6px]">
                {inv.relatedOrders.map((order, i) => (
                  <span
                    key={i}
                    className="border border-[#CDCDCD] text-[#000] text-[12px] font-semibold px-[8px] py-[3px] rounded-full hover:border-[#4895E8] cursor-pointer transition-colors">
                    {order}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Positions + Payment ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
            {/* Left */}
            <div>
              <h2 className="text-[48px] font-black text-[#05376D] mb-[20px]">
                {t("invoiceDetail.positions")} <span className="text-[#CDD7E2]">({inv.positions.length})</span>
              </h2>

              <div className="flex flex-col gap-[16px] mb-[16px]">
                {inv.positions.map((pos, i) => (
                  <PositionCard key={i} pos={pos} />
                ))}
              </div>

              {/* Total */}
              <div className="bg-[#E0E0E0] rounded-[6px] px-[20px] py-[16px] flex items-center justify-between">
                <span className="text-[26px] font-black text-[#000]">{t("invoiceDetail.totalTitle")}</span>
                <div className="flex items-center">
                  <div className="text-left pr-[20px]">
                    <p className="text-[10px] text-[#000] font-semibold mb-[2px]">{t("invoiceDetail.vat")}</p>
                    <p className="text-[16px] font-bold text-[#000]">€{inv.totalVat.toFixed(2)}</p>
                  </div>
                  <div className="w-px h-[45px] bg-[#000]" />
                  <div className="text-left px-[20px]">
                    <p className="text-[10px] text-[#000] font-semibold mb-[2px]">{t("invoiceDetail.minusVat")}</p>
                    <p className="text-[16px] font-bold text-[#000]">
                      €{inv.totalMinusVat.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-px h-[45px] bg-[#000]" />
                  <div className="text-left pl-[20px]">
                    <p className="text-[10px] text-[#000] font-semibold mb-[2px]">{t("invoiceDetail.totalPrice")}</p>
                    <p className="text-[26px] font-black text-[#000]">
                      €{inv.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            {inv.status === "awaiting" && (
              <div>
                <h2 className="text-[48px] font-black text-[#05376D] mb-[20px]">{t("invoiceDetail.payInvoice")}</h2>
                <PaymentSection />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
