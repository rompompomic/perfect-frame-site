import { useState } from "react";
import { OtpInput, PrimaryButton } from "../components";
import { AuthScreen } from "../UseAuthModal";

export function VerificationScreen({
  navigate,
  onClose,
}: {
  navigate: (s: AuthScreen) => void;
  onClose: () => void;
}) {
  const [code, setCode] = useState(Array(4).fill(""));
  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-[#334155]">
        We've sent you a text message
        <br />
        with a 4-digit code
      </p>

      <OtpInput length={4} value={code} onChange={setCode} />

      <PrimaryButton onClick={onClose} disabled={!filled}>
        Verify
      </PrimaryButton>

      <p className="text-sm text-[#334155]">
        Didn't receive the code?{" "}
        <button type="button" className="font-semibold text-[#4895E8] underline hover:no-underline">
          Resend
        </button>
      </p>
    </div>
  );
}
