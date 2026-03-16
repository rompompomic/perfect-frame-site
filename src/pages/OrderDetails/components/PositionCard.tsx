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
      className={`overflow-hidden rounded-lg border border-border ${
        isCart ? "bg-card" : "bg-secondary"
      }`}
    >
      {/* Header - always visible */}
      <div
        className="flex items-center justify-between gap-3 px-3 py-3 cursor-pointer sm:px-5 sm:py-3.5"
        onClick={() => setOpen(!open)}
      >
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-black tracking-tight text-primary sm:text-lg">{position.address}</p>
          <div className="mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            {[
              { icon: <TimeIcon />, value: position.date },
              { icon: <OrderDetailsContainerIcon />, value: position.container },
              { icon: <PriceIcon />, value: position.price },
            ].map(({ icon, value }) => (
              <span
                key={value}
                className={`flex items-center gap-1.5 rounded-sm border pr-1.5 text-xs font-semibold text-primary ${
                  isCart ? "border-border" : "border-card"
                }`}
              >
                <span
                  className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-sm ${
                    isCart ? "bg-secondary" : "bg-card"
                  }`}
                >
                  {icon}
                </span>
                {value}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-sm border border-accent sm:w-[44px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronUpIcon />
          </motion.div>
        </motion.div>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mx-3 mb-3 divide-y divide-border overflow-hidden rounded-md border border-border bg-card"
            >
              {/* Delivery address */}
              <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <OrderDetailsLocationIcon />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("orderDetail.position.deliveryAddress")}
                  </p>
                  <p className="break-words text-[13px] font-medium text-foreground">
                    {position.deliveryAddress}
                  </p>
                </div>
              </div>

              {/* Container */}
              <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <OrderDetailsContainerIcon />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("orderDetail.position.container")}
                  </p>
                  <p className="text-[13px] font-medium text-foreground">{position.containerSize}</p>
                </div>
              </div>

              {/* Dates — stack on mobile, 3-col on sm+ */}
              <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  { label: t("orderDetail.position.orderedAt"), value: position.orderedAt },
                  { label: t("orderDetail.position.pickupAt"), value: position.pickupAt },
                  { label: t("orderDetail.position.deliverAt"), value: position.deliverAt },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-2.5 px-3 py-3 sm:px-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                      <TimeIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      <p className="text-[13px] font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo */}
              {position.promo && (
                <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                    <PromoIcon />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("orderDetail.position.promoUsed")}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[13px] font-medium text-foreground">
                        {position.promo.split(" NEWYEAR")[0]}
                      </p>
                      <span className="rounded border border-dashed border-muted-foreground px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                        NEWYEAR2026
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Rental days */}
              <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <RentalIcon />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("orderDetail.position.rentalDays")}
                  </p>
                  <p className="text-[13px] font-medium text-foreground">{position.rentalDays}</p>
                </div>
              </div>
            </motion.div>

            {/* Comments */}
            <div className="mx-3 mb-3">
              <p className="mb-1.5 text-xs font-semibold text-foreground">{t("orderDetail.position.comments")}</p>
              <textarea
                placeholder="Some comments..."
                className="min-h-[70px] w-full resize-none rounded-md border border-border bg-card p-3 text-[13px] text-foreground transition-colors focus:border-accent focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
