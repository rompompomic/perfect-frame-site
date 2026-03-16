import { useState } from "react";
import { useTranslation } from "react-i18next";

type PersonType = "physical" | "legal";
type SenderRole = "payer" | "payerAndTransporter";

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5318 20.4701L16.8378 15.777C18.1983 14.1436 18.8767 12.0485 18.7319 9.92764C18.5871 7.80678 17.6302 5.82338 16.0603 4.39005C14.4904 2.95672 12.4284 2.18382 10.3031 2.23212C8.17785 2.28042 6.15303 3.1462 4.64986 4.64937C3.14669 6.15254 2.2809 8.17736 2.2326 10.3026C2.1843 12.4279 2.95721 14.4899 4.39054 16.0598C5.82387 17.6297 7.80726 18.5866 9.92813 18.7314C12.049 18.8762 14.144 18.1978 15.7774 16.8373L20.4706 21.5313C20.5403 21.601 20.623 21.6563 20.714 21.694C20.8051 21.7317 20.9026 21.7511 21.0012 21.7511C21.0997 21.7511 21.1973 21.7317 21.2884 21.694C21.3794 21.6563 21.4621 21.601 21.5318 21.5313C21.6015 21.4616 21.6568 21.3789 21.6945 21.2879C21.7322 21.1968 21.7516 21.0993 21.7516 21.0007C21.7516 20.9022 21.7322 20.8046 21.6945 20.7135C21.6568 20.6225 21.6015 20.5398 21.5318 20.4701ZM3.75119 10.5007C3.75119 9.16568 4.14707 7.86063 4.88877 6.7506C5.63047 5.64057 6.68468 4.77541 7.91808 4.26452C9.15148 3.75362 10.5087 3.61995 11.8181 3.8804C13.1274 4.14085 14.3302 4.78373 15.2742 5.72773C16.2182 6.67174 16.861 7.87447 17.1215 9.18384C17.3819 10.4932 17.2483 11.8504 16.7374 13.0838C16.2265 14.3172 15.3613 15.3714 14.2513 16.1131C13.1413 16.8548 11.8362 17.2507 10.5012 17.2507C8.71159 17.2487 6.99585 16.5369 5.73041 15.2715C4.46497 14.006 3.75318 12.2903 3.75119 10.5007Z"
      fill="hsl(var(--border))"
    />
  </svg>
);

const SenderSection = () => {
  const { t } = useTranslation();
  const [personType, setPersonType] = useState<PersonType>("physical");
  const [senderRole, setSenderRole] = useState<SenderRole>("payerAndTransporter");

  // Physical person form
  const [formData, setFormData] = useState({
    name: "",
    personalCode: "",
    phone: "",
    email: "",
  });

  // Legal person form
  const [legalSearch, setLegalSearch] = useState("");
  const [legalData, setLegalData] = useState({
    companyName: "",
    regNumber: "",
    vatNumber: "",
    responsiblePerson: "",
    email: "",
    phone: "",
    wasteAddress: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  const updateLegalField = (field: string, value: string) => {
    setLegalData((prev) => ({ ...prev, [field]: value }));
  };

  const clearLegalField = (field: string) => {
    setLegalData((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="p-6 sm:p-10 bg-secondary flex flex-col gap-8">
      <h2 className="text-foreground text-2xl sm:text-3xl font-black uppercase leading-8">
        {t("wasteSubmission.sender.title")}
      </h2>

      {/* Person type toggle */}
      <div className="inline-flex border border-primary">
        <button
          onClick={() => setPersonType("physical")}
          className={`h-11 px-4 py-3 flex items-center gap-2 border-r border-primary ${
            personType === "physical" ? "bg-primary" : ""
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-nikami-blue">
              {personType === "physical" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-nikami-blue rounded-full" />
                </div>
              )}
            </div>
          </div>
          <span
            className={`text-base font-semibold leading-6 ${
              personType === "physical" ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {t("wasteSubmission.sender.physical")}
          </span>
        </button>
        <button
          onClick={() => setPersonType("legal")}
          className={`h-11 px-4 py-3 flex items-center gap-2 ${
            personType === "legal" ? "bg-primary" : ""
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-nikami-blue">
              {personType === "legal" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-nikami-blue rounded-full" />
                </div>
              )}
            </div>
          </div>
          <span
            className={`text-base font-semibold leading-6 ${
              personType === "legal" ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {t("wasteSubmission.sender.legal")}
          </span>
        </button>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-7">
        {personType === "physical" ? (
          /* Physical person fields */
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
            <FormField
              label={t("wasteSubmission.sender.email")}
              required
              value={formData.email}
              onChange={(v) => updateField("email", v)}
              onClear={() => clearField("email")}
            />
          </div>
        ) : (
          /* Legal person fields */
          <div className="flex flex-col gap-3">
            {/* Search field */}
            <div className="flex flex-col gap-0.5">
              <div className="pl-2.5">
                <span className="text-foreground text-base font-bold leading-6">
                  {t("wasteSubmission.sender.searchCompany")}*
                </span>
              </div>
              <div className="h-12 pl-5 pr-3 bg-background rounded-xs border border-nikami-blue flex items-center gap-2.5">
                <SearchIcon />
                <input
                  type="text"
                  value={legalSearch}
                  onChange={(e) => setLegalSearch(e.target.value)}
                  className="flex-1 bg-transparent text-foreground text-base font-medium leading-6 outline-none"
                />
                {legalSearch && (
                  <button
                    onClick={() => setLegalSearch("")}
                    className="w-6 h-6 flex items-center justify-center text-nikami-blue hover:opacity-70"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Disabled company info fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <DisabledField label={t("wasteSubmission.sender.companyName")} value={legalData.companyName} />
              <DisabledField label={t("wasteSubmission.sender.regNumber")} value={legalData.regNumber} />
              <DisabledField label={t("wasteSubmission.sender.vatNumber")} value={legalData.vatNumber} />
            </div>

            {/* Editable fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                label={t("wasteSubmission.sender.responsiblePerson")}
                required
                value={legalData.responsiblePerson}
                onChange={(v) => updateLegalField("responsiblePerson", v)}
                onClear={() => clearLegalField("responsiblePerson")}
              />
              <FormField
                label={t("wasteSubmission.sender.email")}
                required
                value={legalData.email}
                onChange={(v) => updateLegalField("email", v)}
                onClear={() => clearLegalField("email")}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                label={t("wasteSubmission.sender.phone")}
                required
                value={legalData.phone}
                onChange={(v) => updateLegalField("phone", v)}
                onClear={() => clearLegalField("phone")}
              />
              <FormField
                label={t("wasteSubmission.sender.wasteAddress")}
                required
                value={legalData.wasteAddress}
                onChange={(v) => updateLegalField("wasteAddress", v)}
                onClear={() => clearLegalField("wasteAddress")}
              />
            </div>
          </div>
        )}

        {/* Sender role radio */}
        <div className="flex flex-col sm:flex-row gap-4">
          <label
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setSenderRole("payer")}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-[1.33px] border-nikami-blue flex items-center justify-center">
                {senderRole === "payer" && (
                  <div className="w-2.5 h-2.5 bg-nikami-blue rounded-full" />
                )}
              </div>
            </div>
            <span className="text-foreground text-base font-bold leading-6">
              {t("wasteSubmission.sender.isPayer")}
            </span>
          </label>
          <label
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setSenderRole("payerAndTransporter")}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-[1.33px] border-nikami-blue flex items-center justify-center">
                {senderRole === "payerAndTransporter" && (
                  <div className="w-2.5 h-2.5 bg-nikami-blue rounded-full" />
                )}
              </div>
            </div>
            <span className="text-foreground text-base font-bold leading-6">
              {t("wasteSubmission.sender.isPayerAndTransporter")}
            </span>
          </label>
        </div>
      </div>
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
    <div className="h-12 pl-5 pr-3 bg-background rounded-xs border border-border flex items-center gap-2.5">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-foreground text-base font-medium leading-6 outline-none"
      />
      {value && (
        <button onClick={onClear} className="w-6 h-6 flex items-center justify-center text-nikami-blue hover:opacity-70">
          ✕
        </button>
      )}
    </div>
  </div>
);

/* Disabled/read-only field for company info */
const DisabledField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-0.5">
    <div className="pl-1">
      <span className="text-foreground text-sm font-bold leading-5">{label}</span>
    </div>
    <div className="h-12 pl-5 pr-3 bg-background rounded-xs border border-border flex items-center gap-2.5">
      <span className="flex-1 text-muted-foreground text-base font-medium leading-6">
        {placeholder}
      </span>
    </div>
  </div>
);

export default SenderSection;
