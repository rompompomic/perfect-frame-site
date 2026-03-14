import { useTranslation } from "react-i18next";

interface SecurityFieldProps {
  label: string;
  value: string;
  masked?: boolean;
  onEdit: () => void;
  confirmed?: boolean;
  additional?: { value: string; onEdit: () => void; onDelete: () => void }[];
  onAddAdditional?: () => void;
}

export function SecurityField({
  label,
  value,
  masked,
  onEdit,
  confirmed,
  additional,
  onAddAdditional,
}: SecurityFieldProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs pl-[4px] font-bold text-[#000]">
        {label}
        <span className="text-[#4895E8]">*</span>
      </label>

      <div className="flex items-center border border-[#D0DCE8] rounded-[4px] bg-white px-3 py-2.5 gap-2">
        <span className="flex-1 text-sm text-[#000]">{masked ? "••••••••••" : value}</span>
        <button onClick={onEdit} className="text-[#4895E8] hover:opacity-70 transition-opacity">
          {/* EditIcon will be imported */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.3113 6.87821L17.1216 2.68946C16.9823 2.55014 16.8169 2.43962 16.6349 2.36421C16.4529 2.28881 16.2578 2.25 16.0608 2.25C15.8638 2.25 15.6687 2.28881 15.4867 2.36421C15.3047 2.43962 15.1393 2.55014 15 2.68946L3.43969 14.2498C3.2998 14.3886 3.18889 14.5538 3.11341 14.7358C3.03792 14.9178 2.99938 15.113 3.00001 15.3101V19.4998C3.00001 19.8976 3.15804 20.2791 3.43935 20.5604C3.72065 20.8417 4.10218 20.9998 4.50001 20.9998H20.25C20.4489 20.9998 20.6397 20.9208 20.7803 20.7801C20.921 20.6395 21 20.4487 21 20.2498C21 20.0509 20.921 19.8601 20.7803 19.7194C20.6397 19.5788 20.4489 19.4998 20.25 19.4998H10.8113L21.3113 8.99977C21.4506 8.86048 21.5611 8.69511 21.6365 8.5131C21.7119 8.33109 21.7507 8.136 21.7507 7.93899C21.7507 7.74198 21.7119 7.5469 21.6365 7.36489C21.5611 7.18288 21.4506 7.0175 21.3113 6.87821ZM18 10.1895L13.8113 5.99977L16.0613 3.74977L20.25 7.93946L18 10.1895Z"
              fill="#4895E8"
            />
          </svg>
        </button>
      </div>

      {confirmed && (
        <div className="flex items-center gap-1.5">
          {/* ConfirmedIcon will be imported */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#45AC61" strokeWidth="1.2" />
            <path
              d="M4 7l2 2 4-4"
              stroke="#45AC61"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-[#45AC61] font-semibold">{t("profile.confirmed")}</span>
        </div>
      )}

      {additional?.map((item, i) => (
        <div key={i}>
          <p className="text-xs font-bold pl-[4px] text-[#000] mb-1">
            {t("profile.additionalNumber", { label: label.toLowerCase() })}
          </p>
          <div className="flex items-center border border-[#D0DCE8] rounded-[4px] bg-white px-3 py-2.5 gap-2">
            <span className="flex-1 text-sm text-[#334155]">{item.value}</span>
            <button
              onClick={item.onEdit}
              className="text-[#4895E8] hover:opacity-70 transition-opacity">
              {/* EditIcon will be imported */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.3113 6.87821L17.1216 2.68946C16.9823 2.55014 16.8169 2.43962 16.6349 2.36421C16.4529 2.28881 16.2578 2.25 16.0608 2.25C15.8638 2.25 15.6687 2.28881 15.4867 2.36421C15.3047 2.43962 15.1393 2.55014 15 2.68946L3.43969 14.2498C3.2998 14.3886 3.18889 14.5538 3.11341 14.7358C3.03792 14.9178 2.99938 15.113 3.00001 15.3101V19.4998C3.00001 19.8976 3.15804 20.2791 3.43935 20.5604C3.72065 20.8417 4.10218 20.9998 4.50001 20.9998H20.25C20.4489 20.9998 20.6397 20.9208 20.7803 20.7801C20.921 20.6395 21 20.4487 21 20.2498C21 20.0509 20.921 19.8601 20.7803 19.7194C20.6397 19.5788 20.4489 19.4998 20.25 19.4998H10.8113L21.3113 8.99977C21.4506 8.86048 21.5611 8.69511 21.6365 8.5131C21.7119 8.33109 21.7507 8.136 21.7507 7.93899C21.7507 7.74198 21.7119 7.5469 21.6365 7.36489C21.5611 7.18288 21.4506 7.0175 21.3113 6.87821ZM18 10.1895L13.8113 5.99977L16.0613 3.74977L20.25 7.93946L18 10.1895Z"
                  fill="#4895E8"
                />
              </svg>
            </button>
            <button
              onClick={item.onDelete}
              className="text-[#E05C5C] hover:opacity-70 transition-opacity">
              {/* DeleteIcon will be imported */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.281 18.2198C19.3507 18.2895 19.406 18.3722 19.4437 18.4632C19.4814 18.5543 19.5008 18.6519 19.5008 18.7504C19.5008 18.849 19.4814 18.9465 19.4437 19.0376C19.406 19.1286 19.3507 19.2114 19.281 19.281C19.2114 19.3507 19.1286 19.406 19.0376 19.4437C18.9465 19.4814 18.849 19.5008 18.7504 19.5008C18.6519 19.5008 18.5543 19.4814 18.4632 19.4437C18.3722 19.406 18.2895 19.3507 18.2198 19.281L12.0004 13.0607L5.78104 19.281C5.64031 19.4218 5.44944 19.5008 5.25042 19.5008C5.05139 19.5008 4.86052 19.4218 4.71979 19.281C4.57906 19.1403 4.5 18.9494 4.5 18.7504C4.5 18.5514 4.57906 18.3605 4.71979 18.2198L10.9401 12.0004L4.71979 5.78104C4.57906 5.64031 4.5 5.44944 4.5 5.25042C4.5 5.05139 4.57906 4.86052 4.71979 4.71979C4.86052 4.57906 5.05139 4.5 5.25042 4.5C5.44944 4.5 5.64031 4.57906 5.78104 4.71979L12.0004 10.9401L18.2198 4.71979C18.3605 4.57906 18.5514 4.5 18.7504 4.5C18.9494 4.5 19.1403 4.57906 19.281 4.71979C19.4218 4.86052 19.5008 5.05139 19.5008 5.25042C19.5008 5.44944 19.4218 5.64031 19.281 5.78104L13.0607 12.0004L19.281 18.2198Z"
                  fill="#C26161"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}

      {onAddAdditional && (
        <button
          onClick={onAddAdditional}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#4895E8] hover:opacity-70 transition-opacity w-fit">
          {/* PlusIcon will be imported */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="#4895E8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {t("profile.additional", { label: label.toLowerCase() })}
        </button>
      )}
    </div>
  );
}
