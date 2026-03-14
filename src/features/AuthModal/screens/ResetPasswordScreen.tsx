import { useTranslation } from "react-i18next";
import { ModalInput, PrimaryButton } from "../components";
import { AuthScreen } from "../UseAuthModal";

export function ResetPasswordScreen({
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
  return (
    <div className="flex flex-col gap-5">
      <ModalInput
        label={t("auth.resetPassword.emailLabel")}
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClear={() => setEmail("")}
      />
      <PrimaryButton onClick={() => navigate("reset-code")}>{t("auth.resetPassword.sendLinkBtn")}</PrimaryButton>
    </div>
  );
}
