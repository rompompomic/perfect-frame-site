import { useState } from "react";
import { AuthScreen } from "../UseAuthModal";
import { ModalInput, PasswordInput, PrimaryButton, SocialButtons, Tabs } from "../components";

export function SignUpScreen({
  navigate,
  onClose,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}) {
  const [personType, setPersonType] = useState<"individual" | "legal">("individual");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Tabs
        options={[
          { value: "individual", label: "Individual" },
          { value: "legal", label: "Legal" },
        ]}
        value={personType}
        onChange={(v) => setPersonType(v as "individual" | "legal")}
      />

      {personType === "individual" ? (
        <>
          <ModalInput
            label="First name"
            required
            placeholder="Placeholder"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onClear={() => setFirstName("")}
          />
          <ModalInput
            label="Last name"
            required
            placeholder="Placeholder"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onClear={() => setLastName("")}
          />
          <ModalInput
            label="E-mail"
            required
            type="email"
            placeholder="Placeholder"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClear={() => setEmail("")}
          />
          <ModalInput
            label="Phone number"
            required
            type="tel"
            placeholder="Placeholder"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onClear={() => setPhone("")}
          />
        </>
      ) : (
        <>
          <ModalInput
            label="Company name"
            required
            placeholder="Placeholder"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            rightSlot={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="#4895E8" strokeWidth="1.4" />
                <path d="M11 11l3 3" stroke="#4895E8" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            }
          />
          <ModalInput
            label="E-mail"
            required
            type="email"
            placeholder="Placeholder"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClear={() => setEmail("")}
          />
          <ModalInput
            label="Phone number"
            required
            type="tel"
            placeholder="Placeholder"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onClear={() => setPhone("")}
          />
        </>
      )}

      <PasswordInput label="Password" required value={password} onChange={setPassword} />
      <PasswordInput
        label="Confirm password"
        required
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <PrimaryButton onClick={() => navigate("verification")}>Sign up</PrimaryButton>

      {personType === "individual" && <SocialButtons />}
    </div>
  );
}
