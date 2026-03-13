"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { InfoTooltip } from "@/components/ui/InfoTooltip/InfoTooltip";
import { CustomSelect } from "@/components/ui/CustomSelect/CustomSelect";
import SEBicon from "@/assets/banks/SEB.png";
import Swedbankicon from "@/assets/banks/Swedbank.png";
import Luminoricon from "@/assets/banks/luminor.png";
import Citadeleicon from "@/assets/banks/Citadele.png";

type PersonType = "fiziska" | "juridiska";
type ServiceKind = "noma" | "izvešana" | "maina";
type PaymentMethod = "tiessaiste" | "vietas" | "epasts";
type PaymentType = "internetbanka" | "karte" | "googlepay";
type Bank = "seb" | "swedbank" | "luminor" | "citadele";

export interface ApplicationFormData {
  personType: PersonType;
  serviceKind: ServiceKind;
  name: string;
  phone: string;
  email: string;
  comment: string;
  needsCertificate: boolean;
  cadastreNumber: string;
  paymentMethod: PaymentMethod;
  paymentType: PaymentType;
  bank: Bank | null;
  agreeTerms: boolean;
  agreeMarketing: boolean;
  companySearch: string;
  companyName: string;
  legalAddress: string;
  registrationNumber: string;
  pvnNumber: string;
}

interface Props {
  onBack: () => void;
  onSubmit: (data: ApplicationFormData) => void;
}

const SERVICE_OPTIONS: { value: ServiceKind; label: string }[] = [
  { value: "noma", label: "Konteineru noma" },
  { value: "izvešana", label: "Konteineru izvešana" },
  { value: "maina", label: "Konteineru maiņa" },
];

const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: "tiessaiste", label: "Apmaksa tiešsaistē" },
  { value: "vietas", label: "Samaksa uz vietas" },
  { value: "epasts", label: "Rēķins uz e-pastu" },
];

const PAYMENT_TYPES: { value: PaymentType; label: string }[] = [
  { value: "internetbanka", label: "Internetbanka" },
  { value: "karte", label: "Kredītkarte/debatkarte" },
  { value: "googlepay", label: "Google Pay/Apple Pay" },
];

const BANKS: { value: Bank; label: string; logo: string }[] = [
  { value: "seb", label: "SEB", logo: SEBicon },
  { value: "swedbank", label: "Swedbank", logo: Swedbankicon },
  { value: "luminor", label: "Luminor", logo: Luminoricon },
  { value: "citadele", label: "Citadele", logo: Citadeleicon },
];

const CERTIFICATE_PRICE = 34;

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#000]">
        {label}
        {required && <span className="text-[#4895E8] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-3 py-2.5 border border-[#D0DCE8] rounded-[4px] text-sm text-[#334155] bg-white outline-none focus:border-[#4895E8] transition-colors";

const ClearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.281 18.2198C19.3507 18.2895 19.406 18.3722 19.4437 18.4632C19.4814 18.5543 19.5008 18.6519 19.5008 18.7504C19.5008 18.849 19.4814 18.9465 19.4437 19.0376C19.406 19.1286 19.3507 19.2114 19.281 19.281C19.2114 19.3507 19.1286 19.406 19.0376 19.4437C18.9465 19.4814 18.849 19.5008 18.7504 19.5008C18.6519 19.5008 18.5543 19.4814 18.4632 19.4437C18.3722 19.406 18.2895 19.3507 18.2198 19.281L12.0004 13.0607L5.78104 19.281C5.64031 19.4218 5.44944 19.5008 5.25042 19.5008C5.05139 19.5008 4.86052 19.4218 4.71979 19.281C4.57906 19.1403 4.5 18.9494 4.5 18.7504C4.5 18.5514 4.57906 18.3605 4.71979 18.2198L10.9401 12.0004L4.71979 5.78104C4.57906 5.64031 4.5 5.44944 4.5 5.25042C4.5 5.05139 4.57906 4.86052 4.71979 4.71979C4.86052 4.57906 5.05139 4.5 5.25042 4.5C5.44944 4.5 5.64031 4.57906 5.78104 4.71979L12.0004 10.9401L18.2198 4.71979C18.3605 4.57906 18.5514 4.5 18.7504 4.5C18.9494 4.5 19.1403 4.57906 19.281 4.71979C19.4218 4.86052 19.5008 5.05139 19.5008 5.25042C19.5008 5.44944 19.4218 5.64031 19.281 5.78104L13.0607 12.0004L19.281 18.2198Z"
      fill="#4895E8"
    />
  </svg>
);

export function ApplicationForm({ onBack, onSubmit }: Props) {
  const { t } = useTranslation();

  const [form, setForm] = useState<ApplicationFormData>({
    personType: "fiziska",
    serviceKind: "noma",
    name: "Jānis Bērziņš",
    phone: "",
    email: "",
    comment: "",
    needsCertificate: false,
    cadastreNumber: "",
    paymentMethod: "tiessaiste",
    paymentType: "internetbanka",
    bank: "seb",
    agreeTerms: false,
    agreeMarketing: false,
    companySearch: "",
    companyName: "",
    legalAddress: "",
    registrationNumber: "",
    pvnNumber: "",
  });

  const set = <K extends keyof ApplicationFormData>(key: K, val: ApplicationFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const isFiziska = form.personType === "fiziska";
  const canSubmit = form.agreeTerms && form.name && form.phone && form.email;

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[58px] font-black text-[#1a3c6e] uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
        4. Pieteikuma aizpildīšana
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#000] uppercase mb-4">Aizpildiet pieteikumu</h2>

      <div className="flex mb-5 border border-[#05376D] rounded-[4px] w-fit overflow-hidden">
        {(["fiziska", "juridiska"] as PersonType[]).map((type) => (
          <button
            key={type}
            onClick={() => set("personType", type)}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors
              ${
                form.personType === type
                  ? "bg-[#05376D] text-white"
                  : "bg-transparent text-[#05376D] hover:bg-[#f0f6ff]"
              }`}>
            {type === "fiziska" ? "Fiziska persona" : "Juridiska persona"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col gap-4">
          {isFiziska ? (
            <>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <label className="text-xs font-semibold text-[#334155]">
                  Pakalpojuma veids<span className="text-[#4895E8]">*</span>
                </label>
                <div className="relative">
                  <CustomSelect
                    value={form.serviceKind}
                    onChange={(value) => set("serviceKind", value as ServiceKind)}
                    options={SERVICE_OPTIONS}
                  />
                </div>
              </div>

              <Field label="Vārds, uzvārds" required>
                <div className="relative">
                  <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
                  {form.name && (
                    <button onClick={() => set("name", "")} className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ClearIcon />
                    </button>
                  )}
                </div>
              </Field>

              <Field label="Telefona numurs" required>
                <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
              </Field>

              <Field label="E-pasts" required>
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
              </Field>
            </>
          ) : (
            <>
              <Field label="Meklēt kompāniju pēc reģistrācijas numura vai nosaukuma" required>
                <div className="relative">
                  <input type="text" value={form.companySearch} onChange={(e) => set("companySearch", e.target.value)} placeholder="40003825499" className={inputCls} />
                  {form.companySearch && (
                    <button onClick={() => set("companySearch", "")} className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ClearIcon />
                    </button>
                  )}
                </div>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Uzņēmuma nosaukums">
                  <input type="text" value={form.companyName} onChange={(e) => set("companyName", e.target.value)} placeholder="SIA Uzņēmums" className={inputCls} />
                </Field>
                <Field label="Juridiskā adrese">
                  <input type="text" value={form.legalAddress} onChange={(e) => set("legalAddress", e.target.value)} placeholder="Adreses nosaukums 123" className={inputCls} />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Reģistrācijas numurs">
                  <input type="text" value={form.registrationNumber} onChange={(e) => set("registrationNumber", e.target.value)} placeholder="40003825499" className={inputCls} />
                </Field>
                <Field label="PVN maksātāja nr.">
                  <input type="text" value={form.pvnNumber} onChange={(e) => set("pvnNumber", e.target.value)} placeholder="LV40003825499" className={inputCls} />
                </Field>
              </div>

              <Field label="Vārds, uzvārds" required>
                <div className="relative">
                  <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
                  {form.name && (
                    <button onClick={() => set("name", "")} className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ClearIcon />
                    </button>
                  )}
                </div>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="E-pasts" required>
                  <div className="relative">
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="janis.berzins@gmail.com" className={inputCls} />
                    {form.email && (
                      <button onClick={() => set("email", "")} className="absolute right-3 top-1/2 -translate-y-1/2">
                        <ClearIcon />
                      </button>
                    )}
                  </div>
                </Field>
                <Field label="Telefona numurs" required>
                  <div className="relative">
                    <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+371 277 00 770" className={inputCls} />
                    {form.phone && (
                      <button onClick={() => set("phone", "")} className="absolute right-3 top-1/2 -translate-y-1/2">
                        <ClearIcon />
                      </button>
                    )}
                  </div>
                </Field>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <Field label="Komentāri">
            <textarea
              value={form.comment}
              onChange={(e) => set("comment", e.target.value)}
              placeholder="Cikos ērtākais laiks? Kur jānovieto konteiners? piem. sētā, uz ielas, zaļā zonā"
              rows={6}
              className={`${inputCls} resize-none`}
            />
          </Field>

          <div className="rounded-[4px] font-normal text-sm sm:text-[16px] text-[#000] leading-relaxed">
            <span className="font-bold text-sm sm:text-[16px] text-[#05376D]">Uzmanību!</span> Izvēlētais laiks
            ir aptuvens. Pēc pasūtījuma saņemšanas dispečeris ar Jums sazināsies un apstiprinās
            pasūtījumu. Pakalpojuma cena var mainīties atkarībā no laikapstākļiem un ceļu satiksmes.
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#000] uppercase">
            Vai ir nepieciešama apus izziņa?
          </h2>
          <InfoTooltip variant="red" text="Apus izziņa ir nepieciešama noteiktos gadījumos." />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 sm:gap-3 rounded-[4px] overflow-hidden">
            <button
              onClick={() => set("needsCertificate", false)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors border border-[#05376D]
                ${!form.needsCertificate ? "text-[#05376D]" : "text-[#05376D] hover:bg-[#f0f6ff]"}`}>
              Nav nepieciešama
            </button>
            <button
              onClick={() => set("needsCertificate", true)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors border border-[#05376D]
                ${form.needsCertificate ? "bg-[#05376D] text-white" : "text-[#05376D] hover:bg-[#f0f6ff]"}`}>
              Ir nepieciešama
            </button>
          </div>

          {form.needsCertificate && (
            <input
              type="text"
              value={form.cadastreNumber}
              onChange={(e) => set("cadastreNumber", e.target.value)}
              placeholder="123564346"
              className="px-3 py-2.5 border border-[#D0DCE8] rounded-[4px] text-sm text-[#334155] outline-none focus:border-[#4895E8] transition-colors w-full sm:w-48"
            />
          )}

          {form.needsCertificate && (
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-[#05376D]">{CERTIFICATE_PRICE} €</span>
              <span className="text-xs text-[#7a9ab5]">Info</span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-base font-black text-[#05376D] uppercase mb-4">
          Izvēlies apmaksas veidu
        </h2>

        <div className="flex flex-wrap gap-0 mb-5 border border-[#05376D] rounded-[4px] w-fit overflow-hidden">
          {PAYMENT_METHODS.map((m) => (
            <button
              key={m.value}
              onClick={() => set("paymentMethod", m.value)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors border-r border-[#05376D] last:border-r-0
                ${
                  form.paymentMethod === m.value
                    ? "bg-[#05376D] text-white"
                    : "text-[#05376D] hover:bg-[#f0f6ff]"
                }`}>
              {m.label}
            </button>
          ))}
        </div>

        {form.paymentMethod === "tiessaiste" && (
          <>
            <div className="flex flex-wrap gap-3 sm:gap-6 mb-4">
              {PAYMENT_TYPES.map((pt) => (
                <label key={pt.value} className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => set("paymentType", pt.value)}
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors
                      ${form.paymentType === pt.value ? "border-[#4895E8]" : "border-[#D0DCE8]"}`}>
                    {form.paymentType === pt.value && (
                      <div className="w-2 h-2 rounded-full bg-[#4895E8]" />
                    )}
                  </div>
                  <span className="text-sm sm:text-[16px] font-semibold text-[#000]">{pt.label}</span>
                </label>
              ))}
            </div>

            {form.paymentType === "internetbanka" && (
              <div className="flex flex-wrap gap-3">
                {BANKS.map((bank) => (
                  <div key={bank.value} className="bg-white p-2 sm:p-3 rounded-[4px]">
                    <img src={bank.logo} alt={bank.label} className="h-6 sm:h-8 w-auto" />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-6 sm:mb-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => set("agreeTerms", !form.agreeTerms)}
            className={`mt-0.5 w-4 h-4 rounded-[2px] border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer
              ${form.agreeTerms ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white"}`}>
            {form.agreeTerms && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-sm sm:text-[16px] font-semibold text-[#000]">
            Esmu informēts, ka konteinerā nedrīkst iekraut bīstamos atkritumus – riepas, šiferis,
            krāsas un citus, kas atbilstoši MK Nr. 302 no 2011.19.04. noteikumiem kvalificējas kā
            bīstamie/neatļautie atkritumi. <br />
            Piekrītu portāla:{" "}
            <a href="#" className="text-[#4895E8] hover:underline">
              Būvniecības atkritumu konteineru pasūtīšanas un lietošanas noteikumiem
            </a>
            ;{" "}
            <a href="#" className="text-[#4895E8] hover:underline">
              Privātuma politikai
            </a>
            .<span className="text-[#4895E8]"> *</span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => set("agreeMarketing", !form.agreeMarketing)}
            className={`mt-0.5 w-4 h-4 rounded-[2px] border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer
              ${form.agreeMarketing ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white"}`}>
            {form.agreeMarketing && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-sm sm:text-[16px] font-semibold text-[#000]">
            Piekrītu saņemt īpašos piedāvājumus no SIA "NIKA MI".
          </span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          onClick={onBack}
          className="flex-1 h-[46px] border border-[#4895E8] font-semibold text-sm rounded-[4px] flex items-center relative transition-colors">
          <span className="absolute left-1/2 -translate-x-1/2 text-[#05376D]">Atpakaļ</span>
          <span className="rotate-180 bg-[#4895E8] w-12 h-full absolute left-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Back" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>

        <button
          onClick={() => onSubmit(form)}
          disabled={!canSubmit}
          className="flex-1 cursor-pointer h-[46px] text-white font-semibold text-sm rounded-[4px] flex items-center relative transition-colors bg-[#05376D] hover:bg-[#15305a]">
          <span className="absolute left-1/2 -translate-x-1/2">Nākamais solis</span>
          <span className="bg-[#4895E8] w-12 h-full absolute right-0 top-0 rounded-r-[4px] flex items-center justify-center">
            <img src={ArrowRightIcon} alt="Next" className="w-5 h-5 brightness-0 invert" />
          </span>
        </button>
      </div>
    </div>
  );
}
