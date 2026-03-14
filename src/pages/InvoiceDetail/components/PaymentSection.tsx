import { BANKS } from "@/pages/OrderContainer/components/ApplicationForm/mock";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type PaymentMethod = "banking" | "applepay" | "card" | "email" | "onsite";

export function PaymentSection() {
  const { t } = useTranslation();
  const [method, setMethod] = useState<PaymentMethod>("banking");

  const options: { value: PaymentMethod; label: string; logos?: React.ReactNode }[] = [
    {
      value: "banking",
      label: t("checkout.payment.internetBanking"),
      logos: (
        <div className="flex items-center gap-[6px] ml-auto">
          {BANKS.map((b) => (
            <div
              key={b.value}
              className="w-full text-[9px] font-black border border-[#D0DCE8] px-[5px] py-[2px] rounded-[3px] whitespace-nowrap">
              <img src={b.logo} alt={b.label} className="w-full h-[20px]" />
            </div>
          ))}
        </div>
      ),
    },
    {
      value: "applepay",
      label: t("checkout.payment.appleGooglePay"),
      logos: (
        <div className="flex items-center gap-[6px] ml-auto">
          <span className="text-[9px] font-black text-[#334155] border border-[#D0DCE8] px-[5px] py-[2px] rounded-[3px]">
            G Pay
          </span>
          <span className="text-[9px] font-black text-[#334155] border border-[#D0DCE8] px-[5px] py-[2px] rounded-[3px]">
            Apple Pay
          </span>
        </div>
      ),
    },
    {
      value: "card",
      label: t("checkout.payment.card"),
      logos: (
        <div className="flex items-center gap-[6px] ml-auto">
          <span className="text-[9px] font-black text-[#1A1F71] border border-[#D0DCE8] px-[5px] py-[2px] rounded-[3px]">
            VISA
          </span>
          <span className="text-[9px] font-black text-[#EB001B] border border-[#D0DCE8] px-[5px] py-[2px] rounded-[3px]">
            MC
          </span>
        </div>
      ),
    },
    { value: "email", label: t("checkout.payment.email") },
    { value: "onsite", label: t("checkout.payment.onsite") },
  ];

  return (
    <div className=" bg-white border border-[#E2E8F0] rounded-[6px] p-[20px] sticky top-6">
      <p className="text-[26px] font-black text-[#000] mb-[12px]">{t("checkout.payment.paymentMethod")}</p>

      <div className="flex flex-col gap-[4px] mb-[16px]">
        {options.map((opt) => (
          <label
            key={opt.value}
            onClick={() => setMethod(opt.value)}
            className="flex items-center gap-[10px] cursor-pointer px-[8px] py-[8px] rounded-[4px] hover:bg-[#F8FAFC] transition-colors">
            {/* Radio */}
            <div
              className={`w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                ${method === opt.value ? "border-[#4895E8]" : "border-[#D0DCE8]"}`}>
              {method === opt.value && (
                <div className="w-[8px] h-[8px] rounded-full bg-[#4895E8]" />
              )}
            </div>
            <span className="text-[13px] font-bold text-[#000] flex-1 leading-snug">
              {opt.label}
            </span>
            {opt.logos}
          </label>
        ))}
      </div>

      {/* Lock line */}
      <div className="flex items-center justify-center gap-[6px] mb-[14px]">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V5.625C0 9.74375 1.99375 12.2398 3.66641 13.6086C5.46797 15.082 7.26016 15.582 7.33828 15.6031C7.4457 15.6323 7.55898 15.6323 7.66641 15.6031C7.74453 15.582 9.53438 15.082 11.3383 13.6086C13.0063 12.2398 15 9.74375 15 5.625V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM11.0687 5.44219L6.69375 9.81719C6.6357 9.8753 6.56677 9.9214 6.4909 9.95285C6.41503 9.9843 6.3337 10.0005 6.25156 10.0005C6.16943 10.0005 6.0881 9.9843 6.01222 9.95285C5.93635 9.9214 5.86742 9.8753 5.80938 9.81719L3.93438 7.94219C3.8171 7.82491 3.75121 7.66585 3.75121 7.5C3.75121 7.33415 3.8171 7.17509 3.93438 7.05781C4.05165 6.94054 4.21071 6.87465 4.37656 6.87465C4.54241 6.87465 4.70147 6.94054 4.81875 7.05781L6.25 8.49141L10.1828 4.55781C10.2409 4.49974 10.3098 4.45368 10.3857 4.42225C10.4616 4.39083 10.5429 4.37465 10.625 4.37465C10.7071 4.37465 10.7884 4.39083 10.8643 4.42225C10.9402 4.45368 11.0091 4.49974 11.0672 4.55781C11.1253 4.61588 11.1713 4.68482 11.2027 4.76069C11.2342 4.83656 11.2503 4.91788 11.2503 5C11.2503 5.08212 11.2342 5.16344 11.2027 5.23931C11.1713 5.31518 11.1253 5.38412 11.0672 5.44219H11.0687Z"
            fill="#E0E0E0"
          />
        </svg>

        <span className="w-full text-[12px] font-bold text-left text-[#94A3B8]">
          {t("checkout.payment.securePayments")}
        </span>
      </div>

      <button className="w-full bg-[#05376D] text-white font-bold text-[14px] py-[12px] rounded-[4px] hover:bg-[#15305a] transition-colors">
        {t("checkout.payment.makePayment")}
      </button>
    </div>
  );
}
