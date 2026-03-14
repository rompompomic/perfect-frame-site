import { EditIcon } from "@/components/icons";

interface ProfileFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  editable?: boolean;
  onEdit?: () => void;
}

export function ProfileField({
  label,
  value,
  onChange,
  required,
  type = "text",
  editable,
  onEdit,
}: ProfileFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#334155]">
        {label}
        {required && <span className="text-[#4895E8]">*</span>}
      </label>
      <div className="relative flex items-center">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={editable}
          className={`w-full px-3 py-2.5 border border-[#D0DCE8] rounded-[4px] text-sm text-[#334155] bg-white outline-none focus:border-[#4895E8] transition-colors ${editable ? "pr-10 cursor-default" : ""}`}
        />
        {editable && onEdit && (
          <button
            onClick={onEdit}
            className="absolute right-3 text-[#4895E8] hover:opacity-70 transition-opacity">
            <EditIcon />
          </button>
        )}
      </div>
    </div>
  );
}
