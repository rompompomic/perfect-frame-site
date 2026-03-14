import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthScreen } from "../UseAuthModal";
import { ModalInput, OtpInput, PrimaryButton } from "../components";

export const ChangingEmailScreen = ({
  navigate,
  onClose,
  email,
  setEmail,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
  email: string;
  setEmail: (v: string) => void;
}) => {
  const { t } = useTranslation();
  const [newEmail, setNewEmail] = useState(email);
  const [code, setCode] = useState(Array(6).fill(""));
  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-[#334155]">
        {t("auth.changingEmail.sentTo")}{" "}
        <span className="font-semibold text-[#1a1a1a]">{email || "email@email.lv"}</span>
      </p>

      <ModalInput
        label={t("auth.changingEmail.newEmailLabel")}
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        onClear={() => setNewEmail("")}
      />

      <OtpInput length={6} value={code} onChange={setCode} />

      <PrimaryButton onClick={onClose} disabled={!filled}>
        {t("auth.changingEmail.saveBtn")}
      </PrimaryButton>

      <p className="text-sm text-[#334155]">
        {t("auth.changingEmail.noCode")}{" "}
        <button type="button" className="font-semibold text-[#4895E8] underline hover:no-underline">
          {t("auth.changingEmail.resendBtn")}
        </button>
      </p>
    </div>
  );
};
