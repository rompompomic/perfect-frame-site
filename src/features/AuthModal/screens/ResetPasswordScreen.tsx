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
  return (
    <div className="flex flex-col gap-5">
      <ModalInput
        label="E-mail"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClear={() => setEmail("")}
      />
      <PrimaryButton onClick={() => navigate("reset-code")}>Send link</PrimaryButton>
    </div>
  );
}
