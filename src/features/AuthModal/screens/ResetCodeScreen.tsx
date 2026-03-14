import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ModalInput, OtpInput, PrimaryButton } from "../components";
import { AuthScreen } from "../UseAuthModal";

export function ResetCodeScreen({
  navigate,
  onClose,
  email,
  setEmail,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
  email: string;
  setEmail: (v: string) => void;
}) {
  const { t } = useTranslation();
  const [code, setCode] = useState(Array(6).fill(""));
  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-[#334155]">
        {t("auth.resetCode.sentTo")}{" "}
        <span className="font-semibold text-[#1a1a1a]">{email || "email@email.lv"}</span>
      </p>

      <ModalInput
        label={t("auth.resetCode.emailLabel")}
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClear={() => setEmail("")}
      />

      <OtpInput length={6} value={code} onChange={setCode} />

      <PrimaryButton onClick={() => navigate("change-password")} disabled={!filled}>
        {t("auth.resetCode.changePasswordBtn")}
      </PrimaryButton>

      <p className="text-sm text-[#000]">
        {t("auth.resetCode.noCode")}{" "}
        <button type="button" className="font-semibold text-[#05376D] underline hover:no-underline">
          {t("auth.resetCode.resendBtn")}
        </button>
      </p>
    </div>
  );
}
