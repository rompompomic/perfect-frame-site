"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { InfoTooltip } from "@/components/ui/InfoTooltip/InfoTooltip";
import { CustomSelect } from "@/components/ui/CustomSelect/CustomSelect";

export interface FlatContainer {
  id: number;
  size: number;
  address: string;
}

export type ServiceType = "new" | "swap" | "pickup";

export interface ContainerPeriod {
  containerId: number;
  service: ServiceType;
  dateFrom: Date | null;
  dateTo: Date | null;
}

interface Props {
  containers: FlatContainer[];
  currentStep?: number;
  onBack: () => void;
  onNext: (periods: ContainerPeriod[]) => void;
}

const BASE_PRICE_PER_CONTAINER = 46.08;
const VAT_RATE = 0.21;
const PROMO_CODES: Record<string, number> = {
  ATLADE20: 20,
  SAVE10: 10,
};

const SERVICE_OPTION_VALUES: ServiceType[] = ["new", "swap", "pickup"];

function formatDate(date: Date | null): string {
  if (!date) return "—";
  return date.toLocaleDateString("lv-LV", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function ContainerPeriodCard({
  index,
  container,
  period,
  onChange,
  isComplete,
}: {
  index: number;
  container: FlatContainer;
  period: ContainerPeriod;
  onChange: (p: ContainerPeriod) => void;
  isComplete: boolean;
}) {
  const { t } = useTranslation();
  const SERVICE_OPTIONS = [
    { value: "new" as ServiceType, label: t("orderContainer.step3.serviceNew") },
    { value: "swap" as ServiceType, label: t("orderContainer.step3.serviceSwap") },
    { value: "pickup" as ServiceType, label: t("orderContainer.step3.servicePickup") },
  ];
  return (
    <div
      className={`rounded-[4px] border mb-3 transition-colors ${
        isComplete ? "border-[#D0DCE8] bg-white" : "border-[#D0DCE8] bg-white"
      }`}>
      {/* Header */}
      <p className="text-[26px] px-6 py-3 font-black text-[#05376D] mb-0.5">
        {index}. {t("orderContainer.step3.containerHeader")} {container.size} m³
      </p>
      <p className="text-[16px] font-semibold px-6 text-[#05376D] mb-4">
        {container.address}Jaunaudzes iela 4, Jūrmala
      </p>

      <div className="h-[2px] w-full bg-[#E4F1FF] "></div>

      {/* Fields row */}
      <div className="flex px-6 py-3 gap-3 flex-wrap">
        {/* Service select */}
        <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
          <label className="text-xs font-semibold text-[#334155]">
            {t("orderContainer.step3.service")}<span className="text-[#4895E8]">*</span>
          </label>
          <div className="relative">
            <CustomSelect
              value={period.service}
              onChange={(value) => onChange({ ...period, service: value as ServiceType })}
              options={SERVICE_OPTIONS}
            />
          </div>
        </div>

        {/* Date range */}
        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          <label className="text-xs font-semibold text-[#334155]">
            {t("orderContainer.step3.period")}<span className="text-[#4895E8]">*</span>
          </label>
          <DatePicker
            selectsRange={true}
            startDate={period.dateFrom ?? undefined}
            endDate={period.dateTo ?? undefined}
            onChange={(dates: [Date | null, Date | null]) => {
              const [from, to] = dates;
              onChange({ ...period, dateFrom: from, dateTo: to });
            }}
            dateFormat="dd.MM.yyyy"
            placeholderText="dd.mm.yyyy – dd.mm.yyyy"
            className="w-full min-w-[200px] px-3 py-2.5 text-sm text-[#334155] outline-none bg-transparent cursor-pointer border border-[#4895E8] rounded-[4px] focus:border-[#4895E8] transition-colors"
            minDate={new Date()}
            customInput={
              <div className="relative flex items-center justify-between w-full min-w-[200px] px-3 py-2.5 text-sm text-[#334155] outline-none bg-transparent cursor-pointer border border-[#4895E8] rounded-[4px] focus:border-[#4895E8] transition-colors">
                <span className="flex-1">
                  {period.dateFrom && period.dateTo
                    ? `${period.dateFrom.toLocaleDateString("lv-LV")} – ${period.dateTo.toLocaleDateString("lv-LV")}`
                    : "dd.mm.yyyy – dd.mm.yyyy"}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.868 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5Z"
                    fill="#4895E8"
                  />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

function OrderSummary({
  containers,
  periods,
  promoDiscount,
}: {
  containers: FlatContainer[];
  periods: ContainerPeriod[];
  promoDiscount: number;
}) {
  const { t } = useTranslation();
  const subtotal = containers.length * BASE_PRICE_PER_CONTAINER;
  const afterDiscount = subtotal - promoDiscount;
  const vat = afterDiscount * VAT_RATE;
  const total = afterDiscount + vat;

  const SERVICE_OPTIONS = [
    { value: "new" as ServiceType, label: t("orderContainer.step3.serviceNew") },
    { value: "swap" as ServiceType, label: t("orderContainer.step3.serviceSwap") },
    { value: "pickup" as ServiceType, label: t("orderContainer.step3.servicePickup") },
  ];

  const getPeriod = (id: number) => periods.find((p) => p.containerId === id);
  const getService = (id: number) =>
    SERVICE_OPTIONS.find((o) => o.value === getPeriod(id)?.service)?.label ?? "—";

  return (
    <div className="bg-white rounded-[4px] border border-[#D0DCE8] p-6">
      {/* Title */}
      <h2 className="text-[32px] font-[900] text-[#05376D] uppercase mb-5">{t("orderContainer.step3.orderDetails")}</h2>

      {/* Per container */}
      <div className="space-y-5 mb-6">
        {containers.map((c, i) => {
          const p = getPeriod(c.id);
          return (
            <div key={c.id}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-bold text-[#000]">{t("orderContainer.step3.containerNumber", { index: i + 1 })}</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-[#000]">{c.size} m³</span>
                  <button className="text-[#E0E0E0] hover:text-[#4895E8] transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21.3113 6.87821L17.1216 2.68946C16.9823 2.55014 16.8169 2.43962 16.6349 2.36421C16.4529 2.28881 16.2578 2.25 16.0608 2.25C15.8638 2.25 15.6687 2.28881 15.4867 2.36421C15.3047 2.43962 15.1393 2.55014 15 2.68946L3.43969 14.2498C3.2998 14.3886 3.18889 14.5538 3.11341 14.7358C3.03792 14.9178 2.99938 15.113 3.00001 15.3101V19.4998C3.00001 19.8976 3.15804 20.2791 3.43935 20.5604C3.72065 20.8417 4.10218 20.9998 4.50001 20.9998H20.25C20.4489 20.9998 20.6397 20.9208 20.7803 20.7801C20.921 20.6395 21 20.4487 21 20.2498C21 20.0509 20.921 19.8601 20.7803 19.7194C20.6397 19.5788 20.4489 19.4998 20.25 19.4998H10.8113L21.3113 8.99977C21.4506 8.86048 21.5611 8.69511 21.6365 8.5131C21.7119 8.33109 21.7507 8.136 21.7507 7.93899C21.7507 7.74198 21.7119 7.5469 21.6365 7.36489C21.5611 7.18288 21.4506 7.0175 21.3113 6.87821ZM18 10.1895L13.8113 5.99977L16.0613 3.74977L20.25 7.93946L18 10.1895Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {[
                { key: "address", label: t("orderContainer.step3.summary.address"), value: c.address },
                { key: "service", label: t("orderContainer.step3.summary.service"), value: getService(c.id) },
                p?.dateFrom ? { key: "delivery", label: t("orderContainer.step3.summary.delivery"), value: formatDate(p.dateFrom) } : null,
                p?.dateTo ? { key: "removal", label: t("orderContainer.step3.summary.removal"), value: formatDate(p.dateTo) } : null,
                { key: "price", label: t("orderContainer.step3.summary.price"), value: `${BASE_PRICE_PER_CONTAINER.toFixed(2)} €` },
              ]
                .filter(Boolean)
                .map(({ key, label, value }) => (
                  <div key={key} className="flex justify-between items-center py-0.5">
                    <span className="text-sm font-bold text-[#000]">{label}</span>
                    <div className="flex items-center gap-1">
                      <span
                        className={`text-xs ${key === "service" || key === "price" ? "font-bold text-[#334155]" : "text-[#334155]"}`}>
                        {value}
                      </span>
                      {(key === "delivery" || key === "removal") && (
                        <button className="text-sm font-bold text-[#000] hover:text-[#4895E8]">
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M9.5 2.5l2 2L4 12H2v-2L9.5 2.5z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              {i < containers.length - 1 && <div className="border-t border-[#F0F4F8] mt-3" />}
            </div>
          );
        })}
      </div>

      {/* Price breakdown */}
      <div className="border-t border-[#D0DCE8] pt-4">
        <h3 className="text-[32px] font-[900] text-[#05376D] uppercase mb-3">{t("orderContainer.step3.summary.priceCalc")}</h3>
        <div className="space-y-1.5">
          {[
            [t("orderContainer.step3.summary.wasteRemoval"), `${subtotal.toFixed(2)} €`],
            [t("orderContainer.step3.summary.rentalFee"), "0.00 €"],
            ...(promoDiscount > 0 ? [[t("orderContainer.step3.summary.discount"), `${promoDiscount.toFixed(2)} €`]] : []),
            [t("orderContainer.step3.summary.subtotal"), `${afterDiscount.toFixed(2)} €`],
            [t("orderContainer.step3.summary.vat"), `${vat.toFixed(2)} €`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="text-xs font-bold text-[#000]">{label}</span>
              <span className="text-xs font-bold text-[#000]">{value}</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-[#D0DCE8] pt-2 mt-2">
            <span className="text-sm font-black text-[#05376D]">{t("orderContainer.step3.summary.total")}</span>
            <span className="text-sm font-black text-[#05376D]">{total.toFixed(2)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UsagePeriod({ containers, onBack, onNext }: Props) {
  const { t } = useTranslation();

  const [periods, setPeriods] = useState<ContainerPeriod[]>(
    containers.map((c) => ({ containerId: c.id, service: "new", dateFrom: null, dateTo: null })),
  );
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState(false);

  const updatePeriod = (updated: ContainerPeriod) =>
    setPeriods((prev) => prev.map((p) => (p.containerId === updated.containerId ? updated : p)));

  const applyPromo = () => {
    const discount = PROMO_CODES[promoCode.toUpperCase()];
    if (discount) {
      setPromoDiscount(discount);
      setPromoError(false);
    } else {
      setPromoDiscount(0);
      setPromoError(true);
    }
  };

  const isContainerComplete = (p: ContainerPeriod) => p.service && p.dateFrom && p.dateTo;
  const allComplete = periods.every(isContainerComplete);

  // Find first incomplete container index
  const firstIncompleteIndex = periods.findIndex((p) => !isContainerComplete(p));

  return (
    <div className="w-full">
      <h1 className="text-[58px] sm:text-5xl font-black text-[#1a3c6e] uppercase tracking-tight mb-2">
        {t("orderContainer.step3.title")}
      </h1>
      <div className="flex items-center gap-2 mb-8 text-[#334155] font-semibold text-[20px]">
        <span>{t("orderContainer.step3.subtitle")}</span>
        <InfoTooltip variant="red" text={t("orderContainer.tooltip.text")} />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Left — container period cards */}
        <div>
          {containers.map((container, i) => {
            const period = periods.find((p) => p.containerId === container.id)!;
            const complete = !!isContainerComplete(period);
            const isNext = i === firstIncompleteIndex;

            // Show card only if previous is complete or it's the first
            const visible = i === 0 || !!isContainerComplete(periods[i - 1]);

            return (
              <div
                key={container.id}
                className={`transition-opacity ${visible ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                <ContainerPeriodCard
                  index={i + 1}
                  container={container}
                  period={period}
                  onChange={updatePeriod}
                  isComplete={complete}
                />
              </div>
            );
          })}

          {/* Promo code */}
          <div className="mt-4 bg-[#787878] rounded-[4px] p-5">
            <p className="text-[26px] font-bold text-[#fff] mb-3">
              {t("orderContainer.step3.promoLabel")}
            </p>
            <div className="relative flex items-center">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                  setPromoError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && applyPromo()}
                placeholder="ATLADE20"
                className={`w-full px-4 py-3 rounded-[4px] border text-sm text-[#334155] bg-white outline-none transition-colors
                  ${promoError ? "border-red-400 focus:border-red-400" : "border-[#D0DCE8] focus:border-[#4895E8]"}`}
              />
              <button
                onClick={applyPromo}
                className="absolute right-3 text-[#7a9ab5] hover:text-[#4895E8] transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.2">
                    <path
                      d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                      fill="#4895E8"
                    />
                  </g>
                </svg>
              </button>
            </div>
            {promoError && <p className="text-xs text-red-500 mt-1">{t("orderContainer.step3.promoError")}</p>}
            {promoDiscount > 0 && (
              <p className="text-xs text-green-600 font-semibold mt-1">
                {t("orderContainer.step3.promoSuccess", { amount: promoDiscount.toFixed(2) })}
              </p>
            )}
          </div>
        </div>

        {/* Right — order summary */}
        <div>
          <OrderSummary containers={containers} periods={periods} promoDiscount={promoDiscount} />
        </div>
      </div>

      {/* Navigation */}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className={`flex-1 h-[46px] border border-[#4895E8]  font-semibold text-sm rounded-[4px] flex items-center relative transition-colors`}>
          <span className="absolute left-1/2 -translate-x-1/2 text-[#05376D]">{t("orderContainer.back")}</span>
          <span className="rotate-180 ml-auto bg-[#4895E8] w-12 h-full absolute left-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Next" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>

        <button
          onClick={() => onNext(periods)}
          // disabled={!canProceed}
          className={`flex-1 h-[46px] text-white font-semibold text-sm rounded-[4px] flex items-center relative transition-colors
                ${"bg-[#05376D] hover:bg-[#15305a]"}
                `}>
          <span className="absolute left-1/2 -translate-x-1/2">{t("orderContainer.next")}</span>
          <span className="ml-auto bg-[#4895E8] w-12 h-full absolute right-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Next" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>
      </div>
    </div>
  );
}
