"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { CONTAINERS } from "./components/ContainerCard/mock";
import { ContainerCard } from "./components/ContainerCard/ContainerCard";
import { StepIndicator } from "./components/StepIndicator/StepIndicator";
import { InfoTooltip } from "@/components/ui/InfoTooltip/InfoTooltip";
import { Category, InfoAccordion } from "./components/InfoAccordion/InfoAccordion";
import { DeliveryAddress } from "./components/DeliveryAddress/DeliveryAddress";
import { FlatContainer, UsagePeriod, ContainerPeriod } from "./components/UsagePeriod/UsagePeriod";
import { ApplicationForm } from "./components/ApplicationForm/ApplicationForm";
import { OrderSuccess } from "./components/OrderSuccess/OrderSuccess";
import { useNavigate } from "react-router-dom";

export default function OrderContainer() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>("mixed");
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [deliveryMode, setDeliveryMode] = useState<"single" | "multiple">("single");
  const [currentStep, setCurrentStep] = useState(0);
  const [periods, setPeriods] = useState<ContainerPeriod[]>([]);
  const [addresses, setAddresses] = useState<Record<number, string>>({});

  const navigate = useNavigate();

  const handleIncrement = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: number) => {
    setQuantities((prev) => {
      const next = (prev[id] || 0) - 1;
      if (next <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: next };
    });
  };

  const wasteCategories = [
    { id: "clean" as Category, labelKey: "orderContainer.step1.categories.clean" },
    { id: "mixed" as Category, labelKey: "orderContainer.step1.categories.mixed" },
    { id: "wood" as Category, labelKey: "orderContainer.step1.categories.wood" },
  ];

  const flatContainersWithAddress: FlatContainer[] = Object.entries(quantities).flatMap(
    ([idStr, qty]) => {
      const c = CONTAINERS.find((c) => c.id === Number(idStr))!;
      return Array.from({ length: qty }, (_, i) => ({
        id: Number(idStr) * 10 + i,
        size: c.size,
        address: addresses[Number(idStr) * 10 + i] ?? "",
      }));
    },
  );

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="white" />
      </div>

      <div className="min-h-screen bg-[#E4F1FF] px-4 py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          {currentStep !== 4 && <StepIndicator currentStep={currentStep} />}

          {currentStep == 0 && (
            <>
              <h1 className="text-[58px] sm:text-5xl font-black text-[#1a3c6e] uppercase tracking-tight mb-2">
                {t("orderContainer.step1.title")}
              </h1>
              <div className="flex items-center gap-2 mb-6 text-[#334155] font-semibold text-[20px]">
                <span>{t("orderContainer.step1.subtitle")}</span>
                <InfoTooltip variant="red" text={t("orderContainer.tooltip.text")} />
              </div>

              <div className="flex items-center gap-2 mb-5">
                <div className="flex bg-transparent rounded-[2px] border-[1px] border-[#05376D] shadow-sm">
                  {wasteCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-[18px] py-[12px] rounded-[2px] text-sm font-semibold transition-all duration-200
                    ${
                      selectedCategory === cat.id
                        ? "bg-[#1a3c6e] text-white shadow"
                        : "text-[#1a3c6e] "
                    }`}>
                      {t(cat.labelKey)}
                    </button>
                  ))}
                </div>
                <InfoTooltip text={t("orderContainer.tooltip.text")} />
              </div>

              <InfoAccordion category={selectedCategory} />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[4px] mb-6">
                {CONTAINERS.map((container) => (
                  <ContainerCard
                    key={container.id}
                    container={container}
                    quantity={quantities[container.id] || 0}
                    onIncrement={() => handleIncrement(container.id)}
                    onDecrement={() => handleDecrement(container.id)}
                  />
                ))}
              </div>

              <div className="flex gap-3 mb-8">
                <button
                  onClick={() => setDeliveryMode("single")}
                  className={`px-5 py-2.5 rounded-[2px] border-[1px] border-[#05366A] text-sm font-semibold transition-all`}>
                  {t("orderContainer.step1.delivery.single")}
                </button>
                <button
                  onClick={() => setDeliveryMode("multiple")}
                  className={`px-5 py-2.5 rounded-[2px] border-[1px] bg-[#05366A] text-white text-sm font-semibold transition-all`}>
                  {t("orderContainer.step1.delivery.multiple")}
                </button>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="w-full bg-[#05376D] h-[46px] text-white font-semibold text-sm tracking-wide py-4 rounded-[4px] flex items-center relative hover:bg-[#15305a] transition-colors">
                <span className="absolute left-1/2 -translate-x-1/2">
                  {t("orderContainer.step1.nextStep")}
                </span>
                <span className="ml-auto bg-[#4895E8] w-12 h-full absolute right-0 top-0 rounded-r-[4px] flex items-center justify-center text-lg">
                  <img src={ArrowRightIcon} alt="Arrow right" />
                </span>
              </button>
            </>
          )}

          {currentStep == 1 && (
            <DeliveryAddress
              containers={CONTAINERS}
              onBack={() => setCurrentStep(0)}
              onNext={(addrs) => {
                const map: Record<number, string> = {};
                addrs.forEach((a) => {
                  map[a.containerId] = a.value;
                });
                setAddresses(map);
                setCurrentStep(2);
              }}
            />
          )}

          {currentStep == 2 && (
            <UsagePeriod
              containers={flatContainersWithAddress}
              currentStep={2}
              onBack={() => setCurrentStep(1)}
              onNext={(periods) => {
                setPeriods(periods);
                setCurrentStep(3);
              }}
            />
          )}

          {currentStep === 3 && (
            <ApplicationForm onBack={() => setCurrentStep(2)} onSubmit={() => setCurrentStep(4)} />
          )}

          {currentStep === 4 && <OrderSuccess onGoToOrders={() => navigate("/orders")} />}
        </div>
      </div>
    </MainLayout>
  );
}
