import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUpIcon,
  OrderDetailsContainerIcon,
  OrderDetailsLocationIcon,
  PromoIcon,
  RentalIcon,
  TimeIcon,
} from "@/components/icons";

export interface PositionData {
  id: string;
  address: string;
  date: string;
  container: string;
  price: string;
  deliveryAddress: string;
  containerSize: string;
  orderedAt: string;
  pickupAt: string;
  deliverAt: string;
  promo?: string;
  rentalDays: string;
}

interface PositionCardProps {
  position: PositionData;
  variant?: "order" | "cart";
  defaultOpen?: boolean;
}

const PriceIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clipPath="url(#clip0_price)">
      <path
        d="M6 4.125C5.62916 4.125 5.26665 4.23497 4.95831 4.44099C4.64996 4.64702 4.40964 4.93986 4.26773 5.28247C4.12581 5.62508 4.08868 6.00208 4.16103 6.36579C4.23337 6.72951 4.41195 7.0636 4.67417 7.32583C4.9364 7.58805 5.27049 7.76663 5.63421 7.83897C5.99792 7.91132 6.37492 7.87419 6.71753 7.73227C7.06014 7.59036 7.35298 7.35004 7.55901 7.04169C7.76503 6.73335 7.875 6.37084 7.875 6C7.875 5.50272 7.67746 5.02581 7.32583 4.67417C6.97419 4.32254 6.49728 4.125 6 4.125ZM6 7.125C5.7775 7.125 5.55999 7.05902 5.37498 6.9354C5.18998 6.81179 5.04578 6.63609 4.96064 6.43052C4.87549 6.22495 4.85321 5.99875 4.89662 5.78052C4.94002 5.56229 5.04717 5.36184 5.2045 5.2045C5.36184 5.04717 5.56229 4.94002 5.78052 4.89662C5.99875 4.85321 6.22495 4.87549 6.43052 4.96064C6.63609 5.04578 6.81179 5.18998 6.9354 5.37498C7.05902 5.55999 7.125 5.7775 7.125 6C7.125 6.29837 7.00647 6.58452 6.7955 6.7955C6.58452 7.00647 6.29837 7.125 6 7.125ZM11.25 2.625H0.75C0.650544 2.625 0.555161 2.66451 0.484835 2.73484C0.414509 2.80516 0.375 2.90054 0.375 3V9C0.375 9.09946 0.414509 9.19484 0.484835 9.26517C0.555161 9.33549 0.650544 9.375 0.75 9.375H11.25C11.3495 9.375 11.4448 9.33549 11.5152 9.26517C11.5855 9.19484 11.625 9.09946 11.625 9V3C11.625 2.90054 11.5855 2.80516 11.5152 2.73484C11.4448 2.66451 11.3495 2.625 11.25 2.625ZM9.07734 8.625H2.92266C2.79675 8.19919 2.56632 7.81164 2.25234 7.49766C1.93836 7.18368 1.55081 6.95325 1.125 6.82734V5.17266C1.55081 5.04675 1.93836 4.81632 2.25234 4.50234C2.56632 4.18836 2.79675 3.80081 2.92266 3.375H9.07734C9.20325 3.80081 9.43368 4.18836 9.74766 4.50234C10.0616 4.81632 10.4492 5.04675 10.875 5.17266V6.82734C10.4492 6.95325 10.0616 7.18368 9.74766 7.49766C9.43368 7.81164 9.20325 8.19919 9.07734 8.625ZM10.875 4.37672V3.375H9.87328C10.0667 3.82479 10.4252 4.18331 10.875 4.37672ZM2.12672 3.375H1.125V4.37672C1.57479 4.18331 1.93331 3.82479 2.12672 3.375ZM1.125 7.62328V8.625H2.12672C1.93331 8.17521 1.57479 7.81669 1.125 7.62328ZM9.87328 8.625H10.875V7.62328C10.4252 7.81669 10.0667 8.17521 9.87328 8.625Z"
        fill="#05376D"
      />
    </g>
    <defs>
      <clipPath id="clip0_price">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PositionCard: FC<PositionCardProps> = ({
  position,
  variant = "order",
  defaultOpen,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(defaultOpen ?? position.id === "1");
  const isCart = variant === "cart";

  return (
    <div
      className={`rounded-[8px] overflow-hidden border border-[#dde8f5] ${
        isCart ? "bg-white" : "bg-[#e8f1fb]"
      }`}>
      <div
        className="flex items-center justify-between px-[20px] py-[14px] cursor-pointer"
        onClick={() => setOpen(!open)}>
        <div>
          <p className="font-black text-[#05376d] text-[18px] tracking-tight">{position.address}</p>
          <div className="flex items-center gap-[10px] mt-[5px] flex-wrap">
            {[
              { icon: <TimeIcon />, value: position.date },
              { icon: <OrderDetailsContainerIcon />, value: position.container },
              { icon: <PriceIcon />, value: position.price },
            ].map(({ icon, value }) => (
              <span
                key={value}
                className={`flex rounded-[2px] pr-[6px] border items-center gap-[6px] font-semibold text-[#05376D] text-[12px] ${
                  isCart ? "border-[#dde8f5]" : "border-[#fff]"
                }`}>
                <span
                  className={`flex items-center justify-center w-[26px] h-[26px] rounded-[2px] shrink-0 ${
                    isCart ? "bg-[#E4F1FF]" : "bg-[#fff]"
                  }`}>
                  {icon}
                </span>
                {value}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="border border-[#4895E8] flex items-center justify-center w-[44px] h-[38px] rounded-[2px] shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}>
          <motion.div
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <ChevronUpIcon />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mx-[12px] mb-[12px] bg-white border border-[#dde8f5] rounded-[6px] divide-y divide-[#dde8f5]">
              {/* Delivery address */}
              <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
                <div className="w-[36px] h-[36px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
                  <OrderDetailsLocationIcon />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-[11px] font-semibold uppercase tracking-wide mb-[2px]">
                    {t("orderDetail.position.deliveryAddress")}
                  </p>
                  <p className="text-[#1e293b] text-[13px] font-medium">
                    {position.deliveryAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
                <div className="w-[36px] h-[36px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
                  <OrderDetailsContainerIcon />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-[11px] font-semibold uppercase tracking-wide mb-[2px]">
                    {t("orderDetail.position.container")}
                  </p>
                  <p className="text-[#1e293b] text-[13px] font-medium">{position.containerSize}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-[#dde8f5]">
                {[
                  { label: t("orderDetail.position.orderedAt"), value: position.orderedAt },
                  { label: t("orderDetail.position.pickupAt"), value: position.pickupAt },
                  { label: t("orderDetail.position.deliverAt"), value: position.deliverAt },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-[10px] px-[14px] py-[13px]">
                    <div className="w-[36px] h-[36px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
                      <TimeIcon />
                    </div>
                    <div>
                      <p className="text-[#94a3b8] text-[11px] font-semibold uppercase tracking-wide mb-[2px]">
                        {label}
                      </p>
                      <p className="text-[#1e293b] text-[13px] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {position.promo && (
                <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
                  <div className="w-[36px] h-[36px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
                    <PromoIcon />
                  </div>
                  <div>
                    <p className="text-[#94a3b8] text-[11px] font-semibold uppercase tracking-wide mb-[2px]">
                      {t("orderDetail.position.promoUsed")}
                    </p>
                    <div className="flex items-center gap-[8px] flex-wrap">
                      <p className="text-[#1e293b] text-[13px] font-medium">
                        {position.promo.split(" NEWYEAR")[0]}
                      </p>
                      <span className="border border-dashed border-[#94a3b8] text-[#64748b] text-[11px] font-bold px-[8px] py-[2px] rounded">
                        NEWYEAR2026
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-[12px] px-[16px] py-[13px]">
                <div className="w-[36px] h-[36px] bg-[#E4F1FF] rounded-[6px] flex items-center justify-center shrink-0">
                  <RentalIcon />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-[11px] font-semibold uppercase tracking-wide mb-[2px]">
                    {t("orderDetail.position.rentalDays")}
                  </p>
                  <p className="text-[#1e293b] text-[13px] font-medium">{position.rentalDays}</p>
                </div>
              </div>
            </motion.div>

            <div className="mx-[12px] mb-[12px]">
              <p className="text-[#000] text-[12px] font-semibold mb-[6px]">{t("orderDetail.position.comments")}</p>
              <textarea
                placeholder="Some comments..."
                className="w-full bg-white border border-[#dde8f5] rounded-[6px] p-[12px] min-h-[70px] text-[#334155] text-[13px] focus:outline-none focus:border-[#4895E8] transition-colors resize-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
