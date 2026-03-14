import { InvoicesCheckIcon } from "@/components/icons";

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`w-[32px] h-[32px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0
        ${checked ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white hover:border-[#4895E8]"}`}>
      {checked && <InvoicesCheckIcon />}
    </div>
  );
}

export default Checkbox;
