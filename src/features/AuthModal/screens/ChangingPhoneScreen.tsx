import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthScreen } from "../UseAuthModal";
import { ModalInput, OtpInput, PrimaryButton } from "../components";

export const ChangingPhoneScreen = ({
  navigate,
  onClose,
  phone,
  setPhone,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
  phone: string;
  setPhone: (v: string) => void;
}) => {
  const { t } = useTranslation();
  const [newPhone, setNewPhone] = useState(phone);
  const [code, setCode] = useState(Array(4).fill(""));
  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-[#334155]">
        {t("auth.changingPhone.sentTo")}{" "}
        <span className="font-semibold text-[#1a1a1a]">{phone || "+9 999 999 99 99"}</span>
      </p>

      <ModalInput
        label={t("auth.changingPhone.newPhoneLabel")}
        type="tel"
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
        onClear={() => setNewPhone("")}
      />

      <OtpInput length={4} value={code} onChange={setCode} />

      <PrimaryButton onClick={onClose} disabled={!filled}>
        {t("auth.changingPhone.saveBtn")}
      </PrimaryButton>

      <p className="text-sm text-[#334155]">
        {t("auth.changingPhone.noCode")}{" "}
        <button type="button" className="font-semibold text-[#4895E8] underline hover:no-underline">
          {t("auth.changingPhone.resendBtn")}
        </button>
      </p>
    </div>
  );
};
