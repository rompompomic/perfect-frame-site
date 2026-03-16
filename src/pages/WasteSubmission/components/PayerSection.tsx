import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormField } from "./SenderSection";

const PayerSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    responsiblePerson: "",
    personalCode: "",
    email: "",
    phone: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-secondary flex flex-col gap-6 sm:gap-8">
      <h2 className="text-foreground text-xl sm:text-2xl md:text-3xl font-black uppercase leading-7 sm:leading-8">
        {t("wasteSubmission.payer.title")}
      </h2>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            label={t("wasteSubmission.payer.responsiblePerson")}
            required
            value={formData.responsiblePerson}
            onChange={(v) => updateField("responsiblePerson", v)}
            onClear={() => clearField("responsiblePerson")}
          />
          <FormField
            label={t("wasteSubmission.payer.personalCode")}
            required
            value={formData.personalCode}
            onChange={(v) => updateField("personalCode", v)}
            onClear={() => clearField("personalCode")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            label={t("wasteSubmission.payer.email")}
            required
            value={formData.email}
            onChange={(v) => updateField("email", v)}
            onClear={() => clearField("email")}
          />
          <FormField
            label={t("wasteSubmission.payer.phone")}
            required
            value={formData.phone}
            onChange={(v) => updateField("phone", v)}
            onClear={() => clearField("phone")}
          />
        </div>
      </div>
    </div>
  );
};

export default PayerSection;
