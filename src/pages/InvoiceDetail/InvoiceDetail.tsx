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
    <div className="flex items-center gap-3 rounded-md bg-muted px-4 py-3">
      <div className="shrink-0 rounded-md bg-card p-3 text-accent">{icon}</div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[11px] font-semibold text-foreground">{label}</p>
        <p className="text-[13px] font-bold text-foreground">{value}</p>
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

      <div className="min-h-screen bg-card">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 sm:py-10">
          {/* ── Header ── */}
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h1 className="break-words text-3xl font-black tracking-tight text-primary sm:text-[52px] sm:leading-[1.1]">
                {t("invoiceDetail.titlePrefix")} {inv.number}
              </h1>
              <div className="mt-2 inline-flex w-auto items-center rounded-full border border-destructive/20">
                <StatusBadge status={inv.status} />
                {inv.status === "awaiting" && (
                  <span className="inline-flex items-center gap-1.5 rounded-r-full px-2.5 py-1 text-[11px] font-bold text-destructive">
                    {t("invoiceDetail.daysUntilPayment")}
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-destructive text-[10px] font-black text-white">
                      {inv.daysUntilPayment}
                    </span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 sm:items-end">
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-1.5 rounded-sm border border-accent px-3 py-2 text-xs font-bold text-primary transition-colors">
                  <SendIcon /> {t("invoiceDetail.sendEmail")}
                </button>
                <button className="flex items-center gap-1.5 rounded-sm bg-secondary px-3 py-2 text-xs font-bold text-accent transition-colors">
                  <DownloadIcon /> {t("invoiceDetail.download")}
                </button>
                <button className="flex items-center gap-1.5 rounded-sm bg-accent px-3 py-2 text-xs font-bold text-accent-foreground transition-colors">
                  <ReorderIcon /> {t("invoiceDetail.reorder")}
                </button>
              </div>
              <div className="flex items-center gap-1.5 rounded-md p-2 shadow-sm">
                {["EXCEL", "CSV", "PDF"].map((fmt) => (
                  <button
                    key={fmt}
                    className="rounded border border-accent px-2.5 py-1 text-[11px] font-bold text-primary transition-colors hover:text-accent"
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Info tiles ── */}
          <div className="mb-2.5 mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:mt-14">
            <InfoTile icon={<CardIcon />} label={t("invoiceDetail.paymentStatus")} value={inv.paymentStatus} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.type")} value={inv.type} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.createdAt")} value={inv.createdAt} />
            <InfoTile icon={<ClockIcon />} label={t("invoiceDetail.paymentPeriod")} value={inv.paymentPeriod} />
          </div>

          {/* ── Related orders ── */}
          <div className="mb-8 flex items-start gap-3 rounded-md border border-border px-4 py-3.5 sm:mb-10">
            <div className="mt-0.5 shrink-0 text-accent">
              <CartIcon />
            </div>
            <div className="min-w-0">
              <p className="mb-2 text-sm font-bold text-foreground">{t("invoiceDetail.relatedOrders")}</p>
              <div className="flex flex-wrap gap-1.5">
                {inv.relatedOrders.map((order, i) => (
                  <span
                    key={i}
                    className="cursor-pointer rounded-full border border-border px-2 py-0.5 text-xs font-semibold text-foreground transition-colors hover:border-accent"
                  >
                    {order}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Positions + Payment ── */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left */}
            <div>
              <h2 className="mb-5 text-3xl font-black text-primary sm:text-[48px]">
                {t("invoiceDetail.positions")} <span className="text-primary/30">({inv.positions.length})</span>
              </h2>

              <div className="mb-4 flex flex-col gap-4">
                {inv.positions.map((pos, i) => (
                  <PositionCard key={i} pos={pos} />
                ))}
              </div>

              {/* Total */}
              <div className="flex flex-col gap-3 rounded-md bg-muted-foreground/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <span className="text-xl font-black text-foreground sm:text-[26px]">{t("invoiceDetail.totalTitle")}</span>
                <div className="flex flex-wrap items-center gap-3 sm:gap-0">
                  <div className="pr-4 text-left sm:pr-5">
                    <p className="text-[10px] font-semibold text-foreground">{t("invoiceDetail.vat")}</p>
                    <p className="text-sm font-bold text-foreground sm:text-base">€{inv.totalVat.toFixed(2)}</p>
                  </div>
                  <div className="hidden h-[45px] w-px bg-foreground sm:block" />
                  <div className="px-4 text-left sm:px-5">
                    <p className="text-[10px] font-semibold text-foreground">{t("invoiceDetail.minusVat")}</p>
                    <p className="text-sm font-bold text-foreground sm:text-base">€{inv.totalMinusVat.toFixed(2)}</p>
                  </div>
                  <div className="hidden h-[45px] w-px bg-foreground sm:block" />
                  <div className="pl-4 text-left sm:pl-5">
                    <p className="text-[10px] font-semibold text-foreground">{t("invoiceDetail.totalPrice")}</p>
                    <p className="text-xl font-black text-foreground sm:text-[26px]">€{inv.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            {inv.status === "awaiting" && (
              <div>
                <h2 className="mb-5 text-3xl font-black text-primary sm:text-[48px]">{t("invoiceDetail.payInvoice")}</h2>
                <PaymentSection />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
