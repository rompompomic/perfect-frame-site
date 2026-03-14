import { useState } from "react";
import { useTranslation } from "react-i18next";
import { OtpInput, PrimaryButton } from "../components";
import { AuthScreen } from "../UseAuthModal";

export function VerificationScreen({
  navigate,
  onClose,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [code, setCode] = useState(Array(4).fill(""));
  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-[#334155]">
        {t("auth.verification.message")}
        <br />
        {t("auth.verification.message2")}
      </p>

      <OtpInput length={4} value={code} onChange={setCode} />

      <PrimaryButton onClick={onClose} disabled={!filled}>
        {t("auth.verification.verifyBtn")}
      </PrimaryButton>

      <p className="text-sm text-[#334155]">
        {t("auth.verification.noCode")}{" "}
        <button type="button" className="font-semibold text-[#4895E8] underline hover:no-underline">
          {t("auth.verification.resendBtn")}
        </button>
      </p>
    </div>
  );
}
