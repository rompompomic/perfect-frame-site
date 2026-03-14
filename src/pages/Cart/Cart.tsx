import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import { PositionCard, PositionData } from "../OrderDetails/components/PositionCard";

const POSITION_BASE: Omit<PositionData, "id" | "container" | "price"> = {
  address: "Citadeles iela 6A, Riga, LV-1010",
  date: "02.10.2025 14:00",
  deliveryAddress: "Citadeles iela 6A, Riga, LV-1010",
  containerSize: "6 m³ (x2)",
  orderedAt: "02.10.2025 14:00",
  pickupAt: "02.10.2025 14:00",
  deliverAt: "02.10.2025 14:00",
  promo: "-25 € (€208.42 €233.42) NEWYEAR2026",
  rentalDays: "2 (Free)",
};

interface CartGroup {
  id: string;
  title: string;
  price: string;
  positions: PositionData[];
}

const MOCK_CART: CartGroup[] = [
  {
    id: "g1",
    title: "Construction Waste",
    price: "416,84 €",
    positions: [
      { ...POSITION_BASE, id: "1", container: "6 m³ (x2)", price: "€208.42" },
      { ...POSITION_BASE, id: "2", container: "9 m³ (x1)", price: "€208.42" },
    ],
  },
  {
    id: "g2",
    title: "Construction Waste",
    price: "416,84 €",
    positions: [{ ...POSITION_BASE, id: "3", container: "9 m³ (x1)", price: "€208.42" }],
  },
];

const TOTAL_PRICE = "833,68 €";

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div
      onClick={onChange}
      className={`w-[22px] h-[22px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0
        ${checked ? "bg-[#4895E8] border-[#4895E8]" : "border-[#D0DCE8] bg-white hover:border-[#4895E8]"}`}>
      {checked && (
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
  );
}

function CartGroup({ group }: { group: CartGroup }) {
  const [checked, setChecked] = useState(true);

  return (
    <div className="bg-[#E4F1FF] rounded-[8px] p-[12px] flex flex-col gap-[8px]">
      <div className="flex items-center justify-between px-[8px] py-[4px]">
        <div className="flex items-center gap-[12px]">
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          <span className="font-black text-[#05376D] text-[20px] tracking-tight">
            {group.title}
          </span>
        </div>
        <span className="font-black text-[#05376D] text-[20px] tracking-tight">{group.price}</span>
      </div>

      <div className="flex flex-col gap-[6px]">
        {group.positions.map((pos, i) => (
          <PositionCard
            key={pos.id}
            position={pos}
            variant="cart"
            defaultOpen={i === 0 && group.id === "g1"}
          />
        ))}
      </div>
    </div>
  );
}

export default function CartPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const totalPositions = MOCK_CART.reduce((acc, g) => acc + g.positions.length, 0);

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>

      <div className="min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[40px]">
          <h1 className="text-[48px] font-black text-[#05376D] tracking-tight mb-[24px]">
            {t("cart.title").toUpperCase()} <span className="text-[#94A3B8]">({totalPositions})</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[24px] items-start">
            <div className="flex flex-col gap-[16px]">
              {MOCK_CART.map((group) => (
                <CartGroup key={group.id} group={group} />
              ))}
            </div>

            <div className="sticky top-[24px] border border-[#E2E8F0] rounded-[8px] p-[20px] bg-white">
              <h2 className="font-black text-[#05376D] text-[22px] uppercase tracking-tight mb-[16px]">
                {t("cart.totalTitle")}
              </h2>

              <div className="flex items-center justify-between mb-[4px]">
                <span className="text-[13px] text-[#334155]">
                  {t("cart.wasteRemoval", { count: totalPositions })}
                </span>
              </div>

              <div className="flex items-center justify-between mb-[20px] mt-[12px]">
                <span className="text-[14px] font-bold text-[#334155]">{t("cart.priceVat")}</span>
                <span className="text-[22px] font-black text-[#05376D]">{TOTAL_PRICE}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#05376D] text-white font-bold text-[14px] py-[13px] rounded-[4px] hover:bg-[#15305a] transition-colors">
                {t("cart.checkout")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
