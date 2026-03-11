import { useState } from "react";
import { AuthScreen } from "../UseAuthModal";
import { PasswordInput, PrimaryButton } from "../components";

export function ChangePasswordScreen({
  navigate,
  onClose,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <PasswordInput label="Current password" required value={current} onChange={setCurrent} />
      <PasswordInput label="New password" required value={next} onChange={setNext} />
      <PasswordInput label="Confirm new password" required value={confirm} onChange={setConfirm} />
      <PrimaryButton onClick={onClose}>Save changes</PrimaryButton>
    </div>
  );
}
