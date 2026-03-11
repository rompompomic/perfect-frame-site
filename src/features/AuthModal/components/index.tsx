import { useState, useRef, useEffect, forwardRef } from "react";

import GoogleIcon from "@/assets/google.png";
import MetaIcon from "@/assets/meta.png";
import AppleIcon from "@/assets/apple.png";

interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  onClear?: () => void;
  rightSlot?: React.ReactNode;
}

export const ModalInput = forwardRef<HTMLInputElement, ModalInputProps>(
  ({ label, required, onClear, rightSlot, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm pl-[4px] font-semibold text-[#000]">
          {label}
          {required && <span className="text-[#4895E8] ml-0.5">*</span>}
        </label>
        <div className="relative flex items-center">
          <input
            ref={ref}
            className={`w-full px-3 py-2.5 border border-[#D0DCE8] rounded-[4px] text-sm text-[#334155] bg-white outline-none focus:border-[#4895E8] transition-colors ${rightSlot || onClear ? "pr-10" : ""} ${className ?? ""}`}
            {...props}
          />
          {onClear && props.value && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 text-[#4895E8] hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4l8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          {rightSlot && <div className="absolute right-3">{rightSlot}</div>}
        </div>
      </div>
    );
  },
);

interface PasswordInputProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rightLabel?: React.ReactNode;
}

export function PasswordInput({
  label,
  required,
  value,
  onChange,
  placeholder,
  rightLabel,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  const EyeIcon = () => (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      {show ? (
        <path
          d="M1 7C1 7 4 1 10 1s9 6 9 6-3 6-9 6S1 7 1 7z M10 10a3 3 0 100-6 3 3 0 000 6z"
          stroke="#4895E8"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M1 7C1 7 4 1 10 1s9 6 9 6-3 6-9 6S1 7 1 7z"
            stroke="#4895E8"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M8.5 4.5C9 4.2 9.5 4 10 4M10 10c-1.5 0-2.8-.6-3.7-1.5"
            stroke="#4895E8"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path d="M2 12L18 2" stroke="#4895E8" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-sm pl-[4px] font-semibold text-[#000]">
          {label}
          {required && <span className="text-[#4895E8] ml-0.5">*</span>}
        </label>
        {rightLabel}
      </div>
      <div className="relative flex items-center">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 pr-10 border border-[#D0DCE8] rounded-[4px] text-sm text-[#334155] bg-white outline-none focus:border-[#4895E8] transition-colors"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 hover:opacity-70 transition-opacity">
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}

interface OtpInputProps {
  length: number;
  value: string[];
  onChange: (val: string[]) => void;
}

export function OtpInput({ length, value, onChange }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, v: string) => {
    const digit = v.replace(/\D/g, "").slice(-1);
    const next = [...value];
    next[i] = digit;
    onChange(next);
    if (digit && i < length - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-[#1a1a1a]">Code</label>
      <div className="flex items-center justify-between gap-2">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[i] || ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`w-11 h-12 text-center text-sm font-semibold border rounded-[4px] outline-none transition-colors
              ${value[i] ? "border-[#4895E8] bg-white" : "border-[#D0DCE8] bg-white"}
              focus:border-[#4895E8]`}
          />
        ))}
      </div>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 ">
        <span className="text-[12px] text-[#000]">Or continue with</span>
        <div className="flex-1 h-px bg-[#E2E8F0]" />
      </div>
      <div className="flex gap-3">
        {[
          {
            label: "Google",
            icon: <img src={GoogleIcon} alt="Google" width={26} height={26} />,
          },
          {
            label: "Meta",
            icon: <img src={MetaIcon} alt="Meta" width={33} height={22} />,
          },
          {
            label: "Apple",
            icon: <img src={AppleIcon} alt="Apple" width={26} height={26} />,
          },
        ].map((s) => (
          <button
            key={s.label}
            type="button"
            className="flex-1 flex items-center justify-center py-3 bg-[#F8F8F8] rounded-[4px] hover:border-[#4895E8] hover:bg-[#f8fbff] transition-colors">
            {s.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-[4px] text-sm font-semibold transition-colors
        ${
          disabled
            ? "bg-[#B0C4D8] text-white cursor-not-allowed"
            : "bg-[#05376D] text-white hover:bg-[#15305a]"
        }`}>
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-3 rounded-[4px] text-sm font-semibold border border-[#4895E8] text-[#05376D] hover:bg-[#f0f6ff] transition-colors">
      {children}
    </button>
  );
}

export function Tabs<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex border border-[#05376D] rounded-[4px] w-fit overflow-hidden mb-5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`px-5 py-2 text-sm font-semibold transition-colors
            ${
              value === o.value
                ? "bg-[#05376D] text-white"
                : "bg-transparent text-[#05376D] hover:bg-[#f0f6ff]"
            }`}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
