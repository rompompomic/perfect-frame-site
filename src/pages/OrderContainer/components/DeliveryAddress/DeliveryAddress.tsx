"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import { InfoTooltip } from "@/components/ui/InfoTooltip/InfoTooltip";
import MainLayout from "@/components/MainLayout";
import { AddressInput } from "./components/AddressInput/AddressInput";

function MapPlaceholder({ count }: { count: number }) {
  const mockPins = [
    { top: "48%", left: "30%", label: 1 },
    { top: "65%", left: "48%", label: 2 },
    { top: "36%", left: "64%", label: 3 },
  ].slice(0, count);

  return (
    <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[340px] bg-[#E8EEF3] rounded-[4px] overflow-hidden border border-[#D0DCE8]">
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7a9ab5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Fake roads */}
      <svg className="absolute inset-0 w-full h-full">
        <path
          d="M 0 180 Q 300 160 700 200 T 1200 180"
          fill="none"
          stroke="#C5D0D8"
          strokeWidth="6"
        />
        <path
          d="M 0 220 Q 200 240 500 210 T 1200 230"
          fill="none"
          stroke="#C5D0D8"
          strokeWidth="4"
        />
        <path d="M 300 0 Q 320 170 340 340" fill="none" stroke="#C5D0D8" strokeWidth="3" />
        <path d="M 650 0 Q 630 170 670 340" fill="none" stroke="#C5D0D8" strokeWidth="3" />
        <path d="M 100 90 Q 280 110 430 80" fill="none" stroke="#D8E0E6" strokeWidth="2" />
        <path d="M 750 70 Q 900 100 1050 60" fill="none" stroke="#D8E0E6" strokeWidth="2" />
      </svg>

      {/* Fake water/park blobs */}
      <svg className="absolute inset-0 w-full h-full opacity-25">
        <ellipse cx="150" cy="110" rx="75" ry="48" fill="#B8CDD8" />
        <ellipse cx="860" cy="75" rx="60" ry="38" fill="#B8D4C8" />
        <ellipse cx="500" cy="290" rx="95" ry="42" fill="#B8CDD8" />
      </svg>

      {/* Numbered pins */}
      {mockPins.map((pin) => (
        <div
          key={pin.label}
          className="absolute -translate-x-1/2 -translate-y-full drop-shadow-md"
          style={{ top: pin.top, left: pin.left }}>
          <svg width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4895E8"
              d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26S36 31.5 36 18C36 8.06 27.94 0 18 0z"
            />
            <circle cx="18" cy="18" r="11" fill="white" opacity="0.2" />
            <text
              x="18"
              y="23"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fontFamily="sans-serif"
              fill="white">
              {pin.label}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
}

export interface FlatContainer {
  id: number;
  size: number;
}

export interface AddressEntry {
  containerId: number;
  value: string;
}

interface Props {
  containers: FlatContainer[];
  onBack: () => void;
  onNext: (addresses: AddressEntry[]) => void;
}

export function DeliveryAddress({ containers, onBack, onNext }: Props) {
  const { t } = useTranslation();

  const [addresses, setAddresses] = useState<AddressEntry[]>(
    containers.map((c) => ({ containerId: c.id, value: "" })),
  );

  const update = (containerId: number, value: string) =>
    setAddresses((prev) => prev.map((a) => (a.containerId === containerId ? { ...a, value } : a)));

  const clear = (containerId: number) => update(containerId, "");

  const filledCount = addresses.filter((a) => a.value.trim() !== "").length;
  const canProceed = filledCount === addresses.length;

  return (
    <div className="w-full">
      <h1 className="text-[28px] sm:text-[40px] lg:text-[58px] font-black text-[#1a3c6e] uppercase tracking-tight mb-2">
        {t("orderContainer.step2.title")}
      </h1>
      <div className="flex items-center gap-2 mb-4 sm:mb-8 text-[#334155] font-semibold text-sm sm:text-[20px]">
        <span>{t("orderContainer.step2.subtitle")}</span>
        <InfoTooltip variant="red" text={t("orderContainer.tooltip.text")} />
      </div>

      {/* Address fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {containers.map((container, i) => {
          const entry = addresses.find((a) => a.containerId === container.id);
          return (
            <AddressInput
              key={container.id}
              index={i + 1}
              size={container.size}
              value={entry?.value || ""}
              onChange={(val) => update(container.id, val)}
              onClear={() => clear(container.id)}
            />
          );
        })}
      </div>

      {/* Map */}
      <div className="mb-6 sm:mb-8">
        <MapPlaceholder count={filledCount} />
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onBack}
          className="flex-1 min-h-[36px] h-[46px] border border-[#4895E8] font-semibold text-sm rounded-[4px] flex items-center relative transition-colors">
          <span className="absolute left-1/2 -translate-x-1/2 text-[#05376D]">{t("orderContainer.back")}</span>
          <span className="rotate-180 ml-auto bg-[#4895E8] w-12 h-full absolute left-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Next" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>

        <button
          onClick={() => onNext(addresses)}
          className="flex-1 min-h-[36px] h-[46px] text-white font-semibold text-sm rounded-[4px] flex items-center relative transition-colors bg-[#05376D] hover:bg-[#15305a]">
          <span className="absolute left-1/2 -translate-x-1/2">{t("orderContainer.next")}</span>
          <span className="ml-auto bg-[#4895E8] w-12 h-full absolute right-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Next" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>
      </div>
    </div>
  );
}
