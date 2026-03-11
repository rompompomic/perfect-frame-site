import { useEffect, useRef, useState } from "react";

export const CustomSelect = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full appearance-none border border-[#4895E8] rounded-[4px] px-3 py-2.5 text-sm text-[#334155] bg-white outline-none focus:border-[#4895E8] transition-colors pr-3 cursor-pointer flex items-center justify-between">
        <span>{selectedOption?.label}</span>
        <svg
          className={`transition-transform duration-200  ${isOpen ? "rotate-180" : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.281 9.53104L12.781 17.031C12.7114 17.1008 12.6287 17.1561 12.5376 17.1938C12.4466 17.2316 12.349 17.251 12.2504 17.251C12.1519 17.251 12.0543 17.2316 11.9632 17.1938C11.8722 17.1561 11.7894 17.1008 11.7198 17.031L4.21979 9.53104C4.07906 9.39031 4 9.19944 4 9.00042C4 8.80139 4.07906 8.61052 4.21979 8.46979C4.36052 8.32906 4.55139 8.25 4.75042 8.25C4.94944 8.25 5.14031 8.32906 5.28104 8.46979L12.2504 15.4401L19.2198 8.46979C19.2895 8.40011 19.3722 8.34483 19.4632 8.30712C19.5543 8.26941 19.6519 8.25 19.7504 8.25C19.849 8.25 19.9465 8.26941 20.0376 8.30712C20.1286 8.34483 20.211 8.40011 20.281 8.46979C20.3507 8.53947 20.406 8.6222 20.4437 8.71324C20.4814 8.80429 20.5008 8.90187 20.5008 9.00042C20.5008 9.09896 20.4814 9.19654 20.4437 9.28759C20.406 9.37863 20.3507 9.46136 20.281 9.53104Z"
            fill="#4895E8"
          />
        </svg>
      </button>

      <div
        className={`absolute z-10 w-full mt-1 bg-white border border-[#4895E8] rounded-[4px] shadow-lg overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="max-h-48 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2.5 text-sm text-left hover:bg-[#E4F1FF] transition-colors ${
                option.value === value
                  ? "bg-[#E4F1FF] text-[#4895E8] font-semibold"
                  : "text-[#334155]"
              }`}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
