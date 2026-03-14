import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import { PaymentSection } from "@/pages/InvoiceDetail/components/PaymentSection";
import { CheckoutForm } from "./components/CheckoutForm";
import {
  AdditionalServiceSection,
  PricingSection,
  SummarySection,
} from "./components/CheckoutSections";

const ShareIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.2806 7.71997L12.7806 0.219965C12.6757 0.115014 12.5421 0.0435071 12.3967 0.0144895C12.2512 -0.0145282 12.1004 0.000246406 11.9633 0.0569445C11.8262 0.113643 11.709 0.209718 11.6265 0.333019C11.5441 0.456321 11.5 0.601311 11.4999 0.749653V4.53246C9.06807 4.74059 6.38213 5.93122 4.17244 7.80528C1.51182 10.0628 -0.144745 12.9718 -0.492557 15.9962C-0.519737 16.2313 -0.472062 16.4691 -0.356316 16.6755C-0.24057 16.882 -0.0626507 17.0467 0.152121 17.1462C0.366893 17.2457 0.607575 17.2749 0.839913 17.2297C1.07225 17.1845 1.28441 17.0671 1.44619 16.8943C2.47744 15.7965 6.14682 12.325 11.4999 12.0193V15.7497C11.5 15.898 11.5441 16.043 11.6265 16.1663C11.709 16.2896 11.8262 16.3857 11.9633 16.4424C12.1004 16.4991 12.2512 16.5138 12.3967 16.4848C12.5421 16.4558 12.6757 16.3843 12.7806 16.2793L20.2806 8.77934C20.4208 8.63874 20.4996 8.44825 20.4996 8.24965C20.4996 8.05105 20.4208 7.86057 20.2806 7.71997ZM12.9999 13.9393V11.2497C12.9999 11.0507 12.9209 10.86 12.7803 10.7193C12.6396 10.5787 12.4489 10.4997 12.2499 10.4997C9.61744 10.4997 7.05338 11.1868 4.629 12.5434C3.39427 13.2374 2.24383 14.0716 1.20057 15.0297C1.74432 12.7947 3.11494 10.6693 5.14276 8.94903C7.31963 7.10309 9.9765 5.99965 12.2499 5.99965C12.4489 5.99965 12.6396 5.92063 12.7803 5.77998C12.9209 5.63933 12.9999 5.44857 12.9999 5.24965V2.5609L18.6896 8.24965L12.9999 13.9393Z"
      fill="#4895E8"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path
      d="M1 4l3 3 5-6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-[10px] cursor-pointer" onClick={onChange}>
      <div
        className={`w-[18px] h-[18px] rounded-[3px] border-2 flex items-center justify-center shrink-0 transition-colors
          ${checked ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white"}`}>
        {checked && <CheckIcon />}
      </div>
      <span className="text-[13px] text-[#334155]">{children}</span>
    </label>
  );
}

export default function CheckoutPage() {
  const { t } = useTranslation();
  const [agreeMarketing, setAgreeMarketing] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[40px]">
          {/* ── Page header ── */}
          <div className="flex items-center justify-between mb-[28px]">
            <h1 className="text-[58px] font-black text-[#05376D] uppercase tracking-tight">
              {t("checkout.title")}
            </h1>
            <button className="flex items-center gap-[8px] border border-[#4895E8] rounded-[4px] px-[14px] py-[8px] text-[16px] font-semibold text-[#05376D] hover:border-[#4895E8] hover:text-[#4895E8] transition-colors">
              <ShareIcon /> {t("checkout.shareOrder")}
            </button>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[24px] items-start mb-[32px]">
            {/* Left — billing form */}
            <CheckoutForm />

            {/* Right — summary + pricing + payment */}
            <div className="flex flex-col gap-[20px]">
              <SummarySection />
              <PricingSection />

              {/* Payment */}
              <div>
                <h2 className="text-[22px] font-black text-[#05376D] uppercase tracking-tight mb-[14px]">
                  {t("checkout.paymentMethod")}
                </h2>
                <PaymentSection />
              </div>
            </div>
          </div>

          {/* ── Additional Service — full width ── */}
          <div className="mb-[32px]">
            <AdditionalServiceSection />
          </div>

          {/* ── Checkboxes + submit ── */}
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <Checkbox checked={agreeMarketing} onChange={() => setAgreeMarketing(!agreeMarketing)}>
              <span className="text-[16px] text-[#000]">{t("checkout.confirmOur")} </span>
              <button
                type="button"
                className="text-[#000] text-[16px] underline hover:no-underline font-bold">
                {t("checkout.marketingPolicy")}
              </button>
            </Checkbox>
            <Checkbox checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)}>
              <span className="text-[16px] text-[#000]">{t("checkout.confirmOur")} </span>
              <button
                type="button"
                className="text-[#000] text-[16px] underline hover:no-underline font-bold">
                {t("checkout.termsAndPrivacy")}
              </button>
            </Checkbox>
          </div>

          {/* Pay button — full width */}
          <button
            disabled={!agreeTerms}
            className={`w-full py-[16px] rounded-[4px] text-[16px] font-bold transition-colors
              ${
                agreeTerms
                  ? "bg-[#05376D] text-white hover:bg-[#15305a]"
                  : "bg-[#B0C4D8] text-white cursor-not-allowed"
              }`}>
            {t("checkout.payOrder")}
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
