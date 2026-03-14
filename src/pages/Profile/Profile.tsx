import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import { useAuthModal } from "@/features/AuthModal/UseAuthModal";
import { AuthModal } from "@/features/AuthModal/AuthModal";
import { EditIcon } from "@/components/icons";
import {
  BuildingIcon,
  LocationIcon,
  TagIcon,
  BusinessIcon,
  CashIcon,
  DocIcon,
  ClockIcon,
} from "@/components/icons/profile";
import { InfoCard, SecurityField, ProfileField } from "@/pages/Profile/components";

export default function ProfilePage() {
  const { t } = useTranslation();
  const auth = useAuthModal();

  const [profileType] = useState<"individual" | "legal">("individual");

  const [firstName, setFirstName] = useState("Kristin");
  const [lastName, setLastName] = useState("Lasis");

  const [additionalPhones, setAdditionalPhones] = useState(["+9 999 999 99 99"]);

  const hasChanges = true;

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>

      <div className=" bg-white px-6 py-10 max-w-[1200px] mx-auto">
        <h1 className="text-[48px] font-black text-[#05376D] uppercase tracking-tight mb-8">
          {t("profile.title")}
        </h1>

        {profileType === "individual" ? (
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-[780px]">
              <ProfileField label={t("profile.firstName")} required value={firstName} onChange={setFirstName} />
              <ProfileField label={t("profile.lastName")} required value={lastName} onChange={setLastName} />

              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <ProfileField
                    label={t("profile.email")}
                    required
                    value="email@email.lv"
                    onChange={() => {}}
                    type="email"
                    editable={true}
                    onEdit={() => {
                      auth.setEmail("email@email.lv");
                      auth.open("changing-email");
                    }}
                  />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <ProfileField
                    label={t("profile.phone")}
                    required
                    value="+9 999 999 99 99"
                    onChange={() => {}}
                    type="tel"
                    editable={true}
                    onEdit={() => {
                      auth.setPhone("+9 999 999 99 99");
                      auth.open("changing-phone");
                    }}
                  />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="text-xs font-semibold text-[#334155]">
                    {t("profile.password")}<span className="text-[#4895E8]">*</span>
                  </label>
                  <div className="flex items-center border border-[#D0DCE8] rounded-[4px] bg-white px-3 py-2.5 mt-1">
                    <span className="flex-1 text-sm text-[#334155] tracking-widest">
                      ••••••••••
                    </span>
                    <button
                      onClick={() => auth.open("changing-password")}
                      className="mb-[1px] rounded-[4px] hover:border-[#4895E8] transition-colors">
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={!hasChanges}
              className="w-full max-w-[780px] py-3 rounded-[4px] text-sm font-semibold bg-[#B0C4D8] text-white cursor-not-allowed transition-colors">
              {t("profile.saveChanges")}
            </button>
          </div>
        ) : (
          /* ── Legal ── */
          <>
            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <InfoCard icon={<BuildingIcon />} label={t("profile.companyName")} value="SIA CAMEL" />
              <InfoCard icon={<BusinessIcon />} label={t("profile.type")} value="Business" />
              <InfoCard icon={<TagIcon />} label={t("profile.regNumber")} value="12345678901" />
              <InfoCard icon={<CashIcon />} label={t("profile.paymentTerms")} value="Prepayment only" />
              <InfoCard icon={<TagIcon />} label={t("profile.vatNumber")} value="12345678901" />
              <InfoCard icon={<DocIcon />} label={t("profile.invoicingPeriod")} value="1 a month" />
              <InfoCard
                icon={<LocationIcon />}
                label={t("profile.billingAddress")}
                value="Citadeles iela 6A, Riga, LV-1010"
              />
              <InfoCard icon={<ClockIcon />} label={t("profile.rentalDays")} value="First 10 days free" />
            </div>

            {/* Security section */}
            <div className="bg-[#E4F1FF] rounded-[4px] p-6">
              <h2 className="text-[22px] font-black text-[#05376D] uppercase tracking-tight mb-6">
                {t("profile.security")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Password */}
                <SecurityField
                  label={t("profile.password")}
                  value="••••••••••"
                  masked
                  onEdit={() => auth.open("changing-password")}
                />

                {/* E-mail */}
                <SecurityField
                  label={t("profile.email")}
                  value="email@email.lv"
                  onEdit={() => {
                    auth.setEmail("email@email.lv");
                    auth.open("changing-email");
                  }}
                  onAddAdditional={() => {
                    auth.setEmail("");
                    auth.open("changing-email");
                  }}
                />

                {/* Phone */}
                <SecurityField
                  label={t("profile.phone")}
                  value="+9 999 999 99 99"
                  onEdit={() => {
                    auth.setPhone("+9 999 999 99 99");
                    auth.open("changing-phone");
                  }}
                  confirmed
                  additional={additionalPhones.map((p) => ({
                    value: p,
                    onEdit: () => {
                      auth.setPhone(p);
                      auth.open("changing-phone");
                    },
                    onDelete: () => setAdditionalPhones((prev) => prev.filter((x) => x !== p)),
                  }))}
                  onAddAdditional={() => {
                    auth.setPhone("");
                    auth.open("changing-phone");
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={auth.isOpen}
        screen={auth.screen}
        email={auth.email}
        setEmail={auth.setEmail}
        phone={auth.phone}
        setPhone={auth.setPhone}
        navigate={auth.navigate}
        onClose={auth.close}
      />
    </MainLayout>
  );
}
