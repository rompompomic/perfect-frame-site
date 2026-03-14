import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContainerSummary, MOCK_CONTAINERS, MOCK_PRICING } from "../mock";

const EditIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3113 4.62821L14.1216 0.439461C13.9823 0.300137 13.8169 0.189617 13.6349 0.114213C13.4529 0.03881 13.2578 0 13.0608 0C12.8638 0 12.6687 0.03881 12.4867 0.114213C12.3047 0.189617 12.1393 0.300137 12 0.439461L0.439695 11.9998C0.299801 12.1386 0.188889 12.3038 0.113407 12.4858C0.0379245 12.6678 -0.000621974 12.863 7.58901e-06 13.0601V17.2498C7.58901e-06 17.6476 0.158043 18.0291 0.439347 18.3104C0.720652 18.5917 1.10218 18.7498 1.50001 18.7498H17.25C17.4489 18.7498 17.6397 18.6708 17.7803 18.5301C17.921 18.3895 18 18.1987 18 17.9998C18 17.8009 17.921 17.6101 17.7803 17.4694C17.6397 17.3288 17.4489 17.2498 17.25 17.2498H7.81126L18.3113 6.74977C18.4506 6.61048 18.5611 6.44511 18.6365 6.2631C18.7119 6.08109 18.7507 5.886 18.7507 5.68899C18.7507 5.49198 18.7119 5.2969 18.6365 5.11489C18.5611 4.93288 18.4506 4.7675 18.3113 4.62821ZM15 7.93946L10.8113 3.74977L13.0613 1.49977L17.25 5.68946L15 7.93946Z"
      fill="#E0E0E0"
    />
  </svg>
);

const TrashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75V15.75ZM15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V15.75ZM15 4.5H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z"
      fill="#E0E0E0"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 10C19 9.80109 18.921 9.61032 18.7803 9.46967C18.6397 9.32902 18.4489 9.25 18.25 9.25H1.75C1.55109 9.25 1.36032 9.32902 1.21967 9.46967C1.07902 9.61032 1 9.80109 1 10C1 10.1989 1.07902 10.3897 1.21967 10.5303C1.36032 10.671 1.55109 10.75 1.75 10.75H18.25C18.4489 10.75 18.6397 10.671 18.7803 10.5303C18.921 10.3897 19 10.1989 19 10Z"
      fill="#4895E8"
    />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1v10M1 6h10" stroke="#4895E8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function SummaryRow({ c }: { c: ContainerSummary }) {
  const { t } = useTranslation();
  return (
    <div className="pb-[14px] mb-[14px] border-b border-[#E2E8F0] last:border-0 last:mb-0 last:pb-0">
      <div className="flex items-start justify-between gap-2 mb-[6px]">
        <span className="text-[16px] font-bold text-[#000]">{t("checkout.summary.container", { id: c.id })}</span>
        <div className="flex items-center gap-[6px]">
          <span className="text-[13px] font-bold text-[#000]">{c.size}</span>
          <button className="text-[#4895E8] hover:opacity-70 transition-opacity">
            <EditIcon />
          </button>
          <button className="text-[#4895E8] hover:opacity-70 transition-opacity">
            <TrashIcon />
          </button>
        </div>
      </div>

      {[
        { label: t("checkout.summary.address"), value: c.address },
        { label: t("checkout.summary.service"), value: c.service },
        ...(c.piegade ? [{ label: t("checkout.summary.delivery"), value: c.piegade }] : []),
        { label: t("checkout.summary.removal"), value: c.izvesana },
        { label: t("checkout.summary.price"), value: `${c.price.toFixed(2)} €` },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-start justify-between gap-2">
          <span className="text-[14px] text-[#000] shrink-0">{label}</span>
          <div className="flex items-center gap-[6px]">
            <span className="text-[14px] text-[#000] text-right font-medium">{value}</span>
            <button className="text-[#4895E8] hover:opacity-70 transition-opacity">
              <EditIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SummarySection() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-[32px] font-black text-[#05376D] uppercase tracking-tight mb-[16px]">
        {t("checkout.summary.title")}
      </h2>
      <div className="border border-[#E2E8F0] rounded-[6px] p-[16px] bg-white">
        {MOCK_CONTAINERS.map((c) => (
          <SummaryRow key={c.id} c={c} />
        ))}
      </div>
    </div>
  );
}

export function PricingSection() {
  const { t } = useTranslation();
  const p = MOCK_PRICING;
  return (
    <div>
      <h2 className="text-[32px] font-black text-[#000] uppercase tracking-tight mb-[14px]">
        {t("checkout.summary.priceCalc")}
      </h2>
      <div className="border border-[#E2E8F0] rounded-[6px] p-[16px] bg-white flex flex-col gap-[8px]">
        {[
          { label: t("checkout.summary.wasteRemoval"), value: `${p.buvnieciba.toFixed(2)} €` },
          { label: t("checkout.summary.rentalPeriod"), value: `${p.noma.toFixed(2)} €` },
          { label: t("checkout.summary.discount"), value: `${p.atlaide.toFixed(2)} €` },
          { label: t("checkout.summary.subtotal"), value: `${p.kopaBezPvn.toFixed(2)} €` },
          { label: t("checkout.summary.vat"), value: `${p.pvn.toFixed(2)} €` },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-[#000]">{label}</span>
            <span className="text-[14px] font-bold text-[#000]">{value}</span>
          </div>
        ))}
        <div className="border-t border-[#E2E8F0] pt-[8px] flex items-center justify-between">
          <span className="text-[20px] font-black text-[#05376D]">{t("checkout.summary.total")}</span>
          <span className="text-[20px] font-black text-[#05376D]">{p.kopaArPvn.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
}

export function AdditionalServiceSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [needed, setNeeded] = useState<"ir" | "nav">("ir");
  const [container, setContainer] = useState("all");
  const [code6, setCode6] = useState("12364346");
  const [code9, setCode9] = useState("123564346");

  return (
    <div>
      <h2 className="text-[48px] font-black text-[#05376D] uppercase tracking-tight mb-[14px]">
        {t("checkout.additionalService.title")}
      </h2>

      <div className="border border-[#E2E8F0] rounded-[6px] overflow-hidden bg-white">
        {/* Accordion header */}
        <div
          className="flex items-center justify-between px-[16px] py-[14px] cursor-pointer bg-[#E4F1FF] hover:bg-[#d8ecff] transition-colors"
          onClick={() => setOpen(!open)}>
          <span className="text-[26px] font-bold text-[#05376D]">
            {t("checkout.additionalService.apusQuestion")}
          </span>
          <div className="border border-[#4895E8] rounded-[2px] w-[52px] h-[44px] flex items-center justify-center shrink-0">
            <MinusIcon />
          </div>
        </div>

        {open && (
          <div className="p-[16px] flex flex-col gap-[14px]">
            {/* Ir/Nav tabs */}
            <div className="flex border border-[#05376D] rounded-[4px] w-fit overflow-hidden">
              {(["ir", "nav"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setNeeded(tab)}
                  className={`px-[16px] py-[7px] text-[12px] font-semibold transition-colors
                    ${needed === tab ? "bg-[#05376D] text-white" : "bg-white text-[#05376D] hover:bg-[#f0f6ff]"}`}>
                  {tab === "ir" ? t("checkout.additionalService.required") : t("checkout.additionalService.notRequired")}
                </button>
              ))}
            </div>

            {needed === "ir" && (
              <>
                {/* Container inputs */}
                <div className="flex items-end gap-[12px] flex-wrap">
                  <div className="flex flex-col gap-[4px]">
                    <label className="text-[14px] font-semibold text-[#000]">{t("checkout.additionalService.containers")}</label>
                    <div className="flex items-center border border-[#D0DCE8] rounded-[4px] bg-white px-[10px] py-[8px] gap-[6px] min-w-[100px]">
                      <span className="text-[13px] text-[#334155] flex-1">{t("checkout.additionalService.all")}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="#334155"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <label className="text-[14px] font-semibold text-[#000]">6 m²</label>
                    <input
                      value={code6}
                      onChange={(e) => setCode6(e.target.value)}
                      className="border border-[#D0DCE8] rounded-[4px] px-[10px] py-[8px] text-[13px] text-[#334155] outline-none focus:border-[#4895E8] w-[120px]"
                    />
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <label className="text-[14px] font-semibold text-[#000]">9 m²</label>
                    <input
                      value={code9}
                      onChange={(e) => setCode9(e.target.value)}
                      className="border border-[#D0DCE8] rounded-[4px] px-[10px] py-[8px] text-[13px] text-[#334155] outline-none focus:border-[#4895E8] w-[120px]"
                    />
                  </div>
                </div>

                {/* Prices */}
                <div className="flex flex-col gap-[6px]">
                  {[
                    { label: t("checkout.additionalService.containerPrice", { size: "6 m³(x2)" }), value: "€10" },
                    { label: t("checkout.additionalService.containerPrice", { size: "9 m³(x2)" }), value: "€10" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-[16px] text-[#000]">{label}</span>
                      <span className="text-[16px] font-bold text-[#000]">{value}</span>
                    </div>
                  ))}
                  <div className="border-t border-[#E2E8F0] pt-[6px] flex items-center justify-between">
                    <span className="text-[20px] font-bold text-[#000]">{t("checkout.additionalService.total")}</span>
                    <span className="text-[20px] font-bold text-[#000]">€20</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
