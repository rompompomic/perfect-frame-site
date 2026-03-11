import { useTranslation } from "react-i18next";
import StepOneIcon from "@/assets/icons/step1.svg";
import StepTwoIcon from "@/assets/icons/step2.svg";
import StepThreeIcon from "@/assets/icons/step3.svg";
import StepFourIcon from "@/assets/icons/step4.svg";

const steps = [
  { icon: StepOneIcon, labelKey: "orderContainer.steps.container" },
  { icon: StepTwoIcon, labelKey: "orderContainer.steps.address" },
  { icon: StepThreeIcon, labelKey: "orderContainer.steps.period" },
  { icon: StepFourIcon, labelKey: "orderContainer.steps.application" },
];

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center w-full max-w-[1200px] mb-10">
      {steps.map((step, i) => {
        const isCompleted = i < currentStep;
        const isActive = i === currentStep;

        return (
          <>
            <div key={i} className="flex flex-col items-center shrink-0">
              <div
                className={`w-[56px] h-[56px] cursor-pointer rounded-full flex items-center justify-center border-2 transition-colors
                  ${isCompleted || isActive ? "bg-[#4895E8] border-[#4895E8]" : "bg-white border-white"}`}>
                {isCompleted ? (
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <img
                    src={step.icon}
                    className={`w-7 h-7 ${isActive ? "brightness-0 invert" : ""}`}
                    alt={t(step.labelKey)}
                  />
                )}
              </div>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-[4px] transition-colors ${
                  i < currentStep ? "bg-[#4895E8]" : "bg-white"
                }`}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
