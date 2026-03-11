import { useState } from "react";

export type AuthScreen =
  | "signin"
  | "signup"
  | "verification"
  | "reset-password"
  | "reset-code"
  | "change-password";

export function useAuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<AuthScreen>("signin");
  const [email, setEmail] = useState("");

  const open = (initialScreen: AuthScreen = "signin") => {
    setScreen(initialScreen);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const navigate = (to: AuthScreen) => setScreen(to);

  return { isOpen, screen, email, setEmail, open, close, navigate };
}
