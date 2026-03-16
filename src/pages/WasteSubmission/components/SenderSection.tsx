import { useState } from "react";
import { useTranslation } from "react-i18next";

type PersonType = "physical" | "legal";
type SenderRole = "payer" | "payerAndTransporter";

interface SenderSectionProps {
  onPersonTypeChange?: (type: PersonType) => void;
}

const SenderSection = ({ onPersonTypeChange }: SenderSectionProps) => {
  const { t } = useTranslation();
  const [personType, setPersonType] = useState<PersonType>("physical");
  const [senderRole, setSenderRole] = useState<SenderRole>("payerAndTransporter");

  const [formData, setFormData] = useState({
    name: "",
    personalCode: "",
    phone: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePersonTypeChange = (type: PersonType) => {
    setPersonType(type);
    onPersonTypeChange?.(type);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-secondary flex flex-col gap-6 sm:gap-8">
      <h2 className="text-foreground text-xl sm:text-2xl md:text-3xl font-black uppercase leading-7 sm:leading-8">
        {t("wasteSubmission.sender.title")}
      </h2>

      {/* Person type toggle */}
      <div className="inline-flex w-fit border border-primary">
        <button
          onClick={() => handlePersonTypeChange("physical")}
          className={`h-10 sm:h-11 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 border-r border-primary ${
            personType === "physical" ? "bg-primary" : ""
          }`}
        >
          <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
            <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border border-nikami-blue">
              {personType === "physical" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-nikami-blue rounded-full" />
                </div>
              )}
            </div>
          </div>
          <span
            className={`text-sm sm:text-base font-semibold leading-5 sm:leading-6 ${
              personType === "physical" ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {t("wasteSubmission.sender.physical")}
          </span>
        </button>
        <button
          onClick={() => handlePersonTypeChange("legal")}
          className={`h-10 sm:h-11 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 ${
            personType === "legal" ? "bg-primary" : ""
          }`}
        >
          <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
            <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border border-nikami-blue">
              {personType === "legal" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-nikami-blue rounded-full" />
                </div>
              )}
            </div>
          </div>
          <span
            className={`text-sm sm:text-base font-semibold leading-5 sm:leading-6 ${
              personType === "legal" ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {t("wasteSubmission.sender.legal")}
          </span>
        </button>
      </div>

      {/* Form fields - only for physical person */}
      {personType === "physical" && (
        <div className="flex flex-col gap-5 sm:gap-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              label={t("wasteSubmission.sender.name")}
              required
              value={formData.name}
              onChange={(v) => updateField("name", v)}
              onClear={() => clearField("name")}
            />
            <FormField
              label={t("wasteSubmission.sender.phone")}
              required
              value={formData.phone}
              onChange={(v) => updateField("phone", v)}
              onClear={() => clearField("phone")}
            />
            <FormField
              label={t("wasteSubmission.sender.personalCode")}
              required
              value={formData.personalCode}
              onChange={(v) => updateField("personalCode", v)}
              onClear={() => clearField("personalCode")}
            />
          </div>

          {/* Sender role radio */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setSenderRole("payer")}
            >
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center">
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-[1.33px] border-nikami-blue flex items-center justify-center">
                  {senderRole === "payer" && (
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-nikami-blue rounded-full" />
                  )}
                </div>
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.sender.isPayer")}
              </span>
            </label>
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setSenderRole("payerAndTransporter")}
            >
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center">
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-[1.33px] border-nikami-blue flex items-center justify-center">
                  {senderRole === "payerAndTransporter" && (
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-nikami-blue rounded-full" />
                  )}
                </div>
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.sender.isPayerAndTransporter")}
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

/* Reusable form field */
const FormField = ({
  label,
  required,
  value,
  onChange,
  onClear,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}) => (
  <div className="flex flex-col gap-0.5">
    <div className="pl-1">
      <span className="text-foreground text-sm font-bold leading-5">{label}</span>
      {required && <span className="text-nikami-blue text-sm font-bold leading-5">*</span>}
    </div>
    <div className="h-11 sm:h-12 pl-4 sm:pl-5 pr-3 bg-background rounded-xs border border-border flex items-center gap-2.5">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-foreground text-sm sm:text-base font-medium leading-5 sm:leading-6 outline-none"
      />
      {value && (
        <button onClick={onClear} className="w-6 h-6 flex items-center justify-center text-nikami-blue hover:opacity-70">
          ✕
        </button>
      )}
    </div>
  </div>
);

export { FormField };
export default SenderSection;
