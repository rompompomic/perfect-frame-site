import { useTranslation } from "react-i18next";
import { InvoicePosition } from "@/pages/Invoices/mock";
import { TagIcon } from "./icons/InvoiceDetailIcons";
import { ContainerIcon, LocationIcon } from "@/components/icons/order-details";

export function PositionCard({ pos }: { pos: InvoicePosition }) {
  const { t } = useTranslation();
  return (
    <div className="border border-[#E2E8F0] rounded-[6px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#E4F1FF] px-[20px] py-[12px]">
        <h3 className="font-black text-[#05376D] text-[22px]">
          {t("invoiceDetail.position.titlePrefix")} {pos.orderId}
        </h3>
      </div>

      {/* Info rows — divided */}
      <div className="divide-y divide-[#E2E8F0]">
        {/* Delivery address */}
        <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
          <div className="w-[56px] h-[56px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
            <LocationIcon />
          </div>
          <div>
            <p className="text-[11px] text-[#000] font-bold mb-[2px]">{t("invoiceDetail.position.deliveryAddress")}</p>
            <p className="text-[13px] font-semibold text-[#000]">{pos.address}</p>
          </div>
        </div>

        {/* Container */}
        <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
          <div className="w-[56px] h-[56px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
            <ContainerIcon />
          </div>
          <div>
            <p className="text-[11px] text-[#000] font-bold mb-[2px]">{t("invoiceDetail.position.container")}</p>
            <p className="text-[13px] font-semibold text-[#000]">{pos.container}</p>
          </div>
        </div>

        {/* Promo */}
        {pos.promo && (
          <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
            <div className="w-[56px] h-[56px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
              <TagIcon />
            </div>
            <div>
              <p className="text-[11px] text-[#000] font-semibold mb-[2px]">{t("invoiceDetail.position.promoUsed")}</p>
              <div className="flex items-center gap-[8px] flex-wrap">
                <p className="text-[13px] font-bold text-[#000]">
                  {pos.promo.discount} ({pos.promo.from}{" "}
                  <span className="line-through text-[#94A3B8]">{pos.promo.to}</span> )
                </p>
                <span className="border border-dashed border-[#94a3b8] text-[#64748b] text-[11px] font-bold px-[8px] py-[2px] rounded-full">
                  {pos.promo.code}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Price breakdown */}
      <div className="px-[16px] py-[14px] flex flex-col gap-[8px]">
        {[
          { label: t("invoiceDetail.position.originalPrice"), value: `€${pos.originalPrice}`, bold: true },
          { label: t("invoiceDetail.position.priceWithPromo"), value: `€${pos.priceWithPromo}`, bold: true },
          { label: t("invoiceDetail.position.vat"), value: `€${pos.vat}`, bold: true },
          { label: t("invoiceDetail.position.rentalPeriod"), value: `${pos.rentalDays} days`, bold: true },
          { label: t("invoiceDetail.position.processingFee"), value: `€${pos.processingFee}`, bold: true },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <span className="text-[13px] text-[#000]">{row.label}</span>
            <span className={`text-[13px] text-[#000] ${row.bold ? "font-bold" : "font-medium"}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
