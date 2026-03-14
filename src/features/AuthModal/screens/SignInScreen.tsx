import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ModalInput,
  PasswordInput,
  SocialButtons,
  PrimaryButton,
  OutlineButton,
  Tabs,
} from "../components";
import { AuthScreen } from "../UseAuthModal";

interface SignInScreenProps {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}

export const SignInScreen: FC<SignInScreenProps> = ({ navigate, onClose }) => {
  const { t } = useTranslation();
  const [loginType, setLoginType] = useState<"phone" | "email">("phone");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <div className="flex flex-col gap-5">
      <Tabs
        options={[
          { value: "phone", label: t("auth.signIn.tabPhone") },
          { value: "email", label: t("auth.signIn.tabEmail") },
        ]}
        value={loginType}
        onChange={(v) => setLoginType(v as "phone" | "email")}
      />

      <ModalInput
        label={loginType === "phone" ? t("auth.signIn.phoneLabel") : t("auth.signIn.emailLabel")}
        required
        placeholder={loginType === "phone" ? t("auth.signIn.phonePlaceholder") : t("auth.signIn.emailPlaceholder")}
        value={identifier}
        onChange={(e) => {
          if (loginType === "phone") {
            const value = e.target.value.replace(/[^\d+\s-]/g, "");
            setIdentifier(value);
          } else {
            setIdentifier(e.target.value);
          }
        }}
        onClear={() => setIdentifier("")}
        type={loginType === "phone" ? "tel" : "email"}
      />

      <PasswordInput
        label={t("auth.signIn.passwordLabel")}
        required
        value={password}
        onChange={setPassword}
        rightLabel={
          <button
            type="button"
            onClick={() => navigate("reset-password")}
            className="text-sm text-[#05376D] hover:underline">
            {t("auth.signIn.forgotPassword")}
          </button>
        }
      />

      <label className="flex items-center gap-2 cursor-pointer">
        <div
          onClick={() => setRemember(!remember)}
          className={`w-4 h-4 rounded-[2px] border-2 flex items-center justify-center transition-colors cursor-pointer
            ${remember ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white"}`}>
          {remember && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4l3 3 5-6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className="text-sm font-bold text-[#000]">{t("auth.signIn.rememberMe")}</span>
      </label>

      <OutlineButton onClick={() => navigate("signup")}>{t("auth.signIn.signUpBtn")}</OutlineButton>
      <PrimaryButton onClick={() => navigate("verification")}>{t("auth.signIn.signInBtn")}</PrimaryButton>

      <SocialButtons />
    </div>
  );
};
