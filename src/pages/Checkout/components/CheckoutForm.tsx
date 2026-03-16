import { useState } from "react";
import { useTranslation } from "react-i18next";

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 10C19 10.1989 18.921 10.3897 18.7803 10.5303C18.6397 10.671 18.4489 10.75 18.25 10.75H10.75V18.25C10.75 18.4489 10.671 18.6397 10.5303 18.7803C10.3897 18.921 10.1989 19 10 19C9.80109 19 9.61032 18.921 9.46967 18.7803C9.32902 18.6397 9.25 18.4489 9.25 18.25V10.75H1.75C1.55109 10.75 1.36032 10.671 1.21967 10.5303C1.07902 10.3897 1 10.1989 1 10C1 9.80109 1.07902 9.61032 1.21967 9.46967C1.36032 9.32902 1.55109 9.25 1.75 9.25H9.25V1.75C9.25 1.55109 9.32902 1.36032 9.46967 1.21967C9.61032 1.07902 9.80109 1 10 1C10.1989 1 10.3897 1.07902 10.5303 1.21967C10.671 1.36032 10.75 1.55109 10.75 1.75V9.25H18.25C18.4489 9.25 18.6397 9.32902 18.7803 9.46967C18.921 9.61032 19 9.80109 19 10Z"
      fill="#4895E8"
    />
  </svg>
);

const ClearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.281 18.2198C19.3507 18.2895 19.406 18.3722 19.4437 18.4632C19.4814 18.5543 19.5008 18.6519 19.5008 18.7504C19.5008 18.849 19.4814 18.9465 19.4437 19.0376C19.406 19.1286 19.3507 19.2114 19.281 19.281C19.2114 19.3507 19.1286 19.406 19.0376 19.4437C18.9465 19.4814 18.849 19.5008 18.7504 19.5008C18.6519 19.5008 18.5543 19.4814 18.4632 19.4437C18.3722 19.406 18.2895 19.3507 18.2198 19.281L12.0004 13.0607L5.78104 19.281C5.64031 19.4218 5.44944 19.5008 5.25042 19.5008C5.05139 19.5008 4.86052 19.4218 4.71979 19.281C4.57906 19.1403 4.5 18.9494 4.5 18.7504C4.5 18.5514 4.57906 18.3605 4.71979 18.2198L10.9401 12.0004L4.71979 5.78104C4.57906 5.64031 4.5 5.44944 4.5 5.25042C4.5 5.05139 4.57906 4.86052 4.71979 4.71979C4.86052 4.57906 5.05139 4.5 5.25042 4.5C5.44944 4.5 5.64031 4.57906 5.78104 4.71979L12.0004 10.9401L18.2198 4.71979C18.3605 4.57906 18.5514 4.5 18.7504 4.5C18.9494 4.5 19.1403 4.57906 19.281 4.71979C19.4218 4.86052 19.5008 5.05139 19.5008 5.25042C19.5008 5.44944 19.4218 5.64031 19.281 5.78104L13.0607 12.0004L19.281 18.2198Z"
      fill="#4895E8"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5318 20.4701L16.8378 15.777C18.1983 14.1436 18.8767 12.0485 18.7319 9.92764C18.5871 7.80678 17.6302 5.82338 16.0603 4.39005C14.4904 2.95672 12.4284 2.18382 10.3031 2.23212C8.17785 2.28042 6.15303 3.1462 4.64986 4.64937C3.14669 6.15254 2.2809 8.17736 2.2326 10.3026C2.1843 12.4279 2.95721 14.4899 4.39054 16.0598C5.82387 17.6297 7.80726 18.5866 9.92813 18.7314C12.049 18.8762 14.144 18.1978 15.7774 16.8373L20.4706 21.5313C20.5403 21.601 20.623 21.6563 20.714 21.694C20.8051 21.7317 20.9026 21.7511 21.0012 21.7511C21.0997 21.7511 21.1973 21.7317 21.2884 21.694C21.3794 21.6563 21.4621 21.601 21.5318 21.5313C21.6015 21.4616 21.6568 21.3789 21.6945 21.2879C21.7322 21.1968 21.7516 21.0993 21.7516 21.0007C21.7516 20.9022 21.7322 20.8046 21.6945 20.7135C21.6568 20.6225 21.6015 20.5398 21.5318 20.4701ZM3.75119 10.5007C3.75119 9.16568 4.14707 7.86063 4.88877 6.7506C5.63047 5.64057 6.68468 4.77541 7.91808 4.26452C9.15148 3.75362 10.5087 3.61995 11.8181 3.8804C13.1274 4.14085 14.3302 4.78373 15.2742 5.72773C16.2182 6.67174 16.861 7.87447 17.1215 9.18384C17.3819 10.4932 17.2483 11.8504 16.7374 13.0838C16.2265 14.3172 15.3613 15.3714 14.2513 16.1131C13.1413 16.8548 11.8362 17.2507 10.5012 17.2507C8.71159 17.2487 6.99585 16.5369 5.73041 15.2715C4.46497 14.006 3.75318 12.2903 3.75119 10.5007Z"
      fill="#E0E0E0"
    />
  </svg>
);

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  clearable,
  search,
}: {
  label?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  clearable?: boolean;
  search?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="pl-1 text-sm font-semibold text-foreground">
          {label}
          {required && <span className="text-accent">*</span>}
        </label>
      )}
      <div className="relative flex items-center rounded border border-border bg-card transition-colors focus-within:border-accent">
        {search && (
          <div className="pl-2.5">
            <SearchIcon />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-2.5 py-2.5 text-base text-foreground outline-none"
        />
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2.5 text-accent transition-opacity hover:opacity-70"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}

function Tabs({
  value,
  onChange,
}: {
  value: "fiziska" | "juridiska";
  onChange: (v: "fiziska" | "juridiska") => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="mb-4 flex h-[46px] w-fit overflow-hidden rounded border border-primary">
      {(["fiziska", "juridiska"] as const).map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`px-4 py-[7px] text-sm font-semibold transition-colors sm:text-base
            ${value === tab ? "bg-primary text-primary-foreground" : "bg-transparent text-primary hover:bg-secondary"}`}
        >
          {tab === "fiziska" ? t("checkout.form.individualTab") : t("checkout.form.legalTab")}
        </button>
      ))}
    </div>
  );
}

interface BillingContact {
  name: string;
  personalCode: string;
  billingAddress: string;
  email: string;
  phone: string;
  additionalEmails: string[];
  comment: string;
}

export function CheckoutForm() {
  const { t } = useTranslation();
  const [personType, setPersonType] = useState<"fiziska" | "juridiska">("fiziska");
  const [form, setForm] = useState<BillingContact>({
    name: "Jānis Bērziņš",
    personalCode: "123456-12345",
    billingAddress: "Citadeles iela 6A, Riga, LV-1010",
    email: "",
    phone: "",
    additionalEmails: [],
    comment: "",
  });

  const set = (key: keyof BillingContact) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  return (
    <div>
      <div className="rounded-lg bg-secondary p-4 sm:p-5">
        <h2 className="mb-3.5 break-words text-xl font-black text-foreground sm:text-[32px]">
          Citadeles iela 6A, Riga, LV-1010
        </h2>

        <Tabs value={personType} onChange={setPersonType} />

        <div className="flex flex-col gap-3">
          <Field label={t("checkout.form.nameLabel")} required value={form.name} onChange={set("name")} clearable />
          <Field label={t("checkout.form.personalCode")} required value={form.personalCode} onChange={set("personalCode")} clearable />
          <Field label={t("checkout.form.billingAddress")} required value={form.billingAddress} onChange={set("billingAddress")} clearable search />

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Field label={t("checkout.form.emailLabel")} required type="email" value={form.email} onChange={set("email")} />
            <Field label={t("checkout.form.phoneLabel")} required type="tel" value={form.phone} onChange={set("phone")} />
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-1.5 text-[13px] font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <PlusIcon /> {t("checkout.form.additionalEmail")}
          </button>

          <div className="flex flex-col gap-1">
            <label className="pl-1 text-sm font-bold text-foreground">{t("checkout.form.comments")}</label>
            <textarea
              placeholder="Placeholder"
              value={form.comment}
              onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
              rows={4}
              className="w-full resize-none rounded border border-border bg-card px-2.5 py-2.5 text-[13px] text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded border border-accent py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
      >
        <PlusIcon /> {t("checkout.form.addBillingContacts")}
      </button>
    </div>
  );
}
