import { AnimatePresence, motion } from "framer-motion";
import type { AuthScreen } from "./UseAuthModal";
import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { VerificationScreen } from "./screens/VerificationScreen";
import { ResetPasswordScreen } from "./screens/ResetPasswordScreen";
import { ResetCodeScreen } from "./screens/ResetCodeScreen";
import { ChangePasswordScreen } from "./screens/ChangePasswordScreen";

const SCREEN_TITLES: Record<AuthScreen, string> = {
  signin: "Sign in",
  signup: "Sign up",
  verification: "Verification",
  "reset-password": "Reset password",
  "reset-code": "Reset password",
  "change-password": "Change password",
};

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 w-[52px] h-[44px] flex items-center justify-center rounded-[2px] bg-[#DEDEDE] hover:bg-[#75A6D9] transition-colors">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.281 16.2198C17.3507 16.2895 17.406 16.3722 17.4437 16.4632C17.4814 16.5543 17.5008 16.6519 17.5008 16.7504C17.5008 16.849 17.4814 16.9465 17.4437 17.0376C17.406 17.1286 17.3507 17.2114 17.281 17.281C17.2114 17.3507 17.1286 17.406 17.0376 17.4437C16.9465 17.4814 16.849 17.5008 16.7504 17.5008C16.6519 17.5008 16.5543 17.4814 16.4632 17.4437C16.3722 17.406 16.2895 17.3507 16.2198 17.281L10.0004 11.0607L3.78104 17.281C3.64031 17.4218 3.44944 17.5008 3.25042 17.5008C3.05139 17.5008 2.86052 17.4218 2.71979 17.281C2.57906 17.1403 2.5 16.9494 2.5 16.7504C2.5 16.5514 2.57906 16.3605 2.71979 16.2198L8.9401 10.0004L2.71979 3.78104C2.57906 3.64031 2.5 3.44944 2.5 3.25042C2.5 3.05139 2.57906 2.86052 2.71979 2.71979C2.86052 2.57906 3.05139 2.5 3.25042 2.5C3.44944 2.5 3.64031 2.57906 3.78104 2.71979L10.0004 8.9401L16.2198 2.71979C16.3605 2.57906 16.5514 2.5 16.7504 2.5C16.9494 2.5 17.1403 2.57906 17.281 2.71979C17.4218 2.86052 17.5008 3.05139 17.5008 3.25042C17.5008 3.44944 17.4218 3.64031 17.281 3.78104L11.0607 10.0004L17.281 16.2198Z"
          fill="#222222"
        />
      </svg>
    </button>
  );
}

interface AuthModalProps {
  isOpen: boolean;
  screen: AuthScreen;
  email: string;
  setEmail: (v: string) => void;
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}

export function AuthModal({ isOpen, screen, email, setEmail, navigate, onClose }: AuthModalProps) {
  const renderScreen = () => {
    const props = { navigate, onClose, email, setEmail };
    switch (screen) {
      case "signin":
        return <SignInScreen {...props} />;
      case "signup":
        return <SignUpScreen {...props} />;
      case "verification":
        return <VerificationScreen {...props} />;
      case "reset-password":
        return <ResetPasswordScreen {...props} />;
      case "reset-code":
        return <ResetCodeScreen {...props} />;
      case "change-password":
        return <ChangePasswordScreen {...props} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              className="relative bg-white rounded-[4px] w-full max-w-[420px] max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <CloseButton onClick={onClose} />

                {/* Title */}
                <h2 className="text-[28px] font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                  {SCREEN_TITLES[screen]}
                </h2>

                {/* Screen content — animated on screen change */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screen}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}>
                    {renderScreen()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
