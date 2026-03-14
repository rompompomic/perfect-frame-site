import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthScreen } from "../UseAuthModal";
import { PasswordInput, PrimaryButton } from "../components";

export function ChangePasswordScreen({
  navigate,
  onClose,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <PasswordInput label={t("auth.changePassword.currentLabel")} required value={current} onChange={setCurrent} />
      <PasswordInput label={t("auth.changePassword.newLabel")} required value={next} onChange={setNext} />
      <PasswordInput label={t("auth.changePassword.confirmLabel")} required value={confirm} onChange={setConfirm} />
      <PrimaryButton onClick={onClose}>{t("auth.changePassword.saveBtn")}</PrimaryButton>
    </div>
  );
}
