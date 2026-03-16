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
      className={`w-[22px] h-[22px] rounded border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0
        ${checked ? "bg-accent border-accent" : "border-border bg-card hover:border-accent"}`}>
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function CartGroupCard({ group }: { group: CartGroup }) {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-secondary p-3">
      <div className="flex items-center justify-between px-1 py-1">
        <div className="flex items-center gap-3 min-w-0">
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          <span className="truncate text-lg font-black tracking-tight text-primary sm:text-xl">
            {group.title}
          </span>
        </div>
        <span className="shrink-0 text-lg font-black tracking-tight text-primary sm:text-xl">{group.price}</span>
      </div>

      <div className="flex flex-col gap-1.5">
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

      <div className="min-h-screen bg-card">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 sm:py-10">
          <h1 className="mb-5 text-3xl font-black tracking-tight text-primary sm:mb-6 sm:text-[48px]">
            {t("cart.title").toUpperCase()} <span className="text-muted-foreground">({totalPositions})</span>
          </h1>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col gap-4">
              {MOCK_CART.map((group) => (
                <CartGroupCard key={group.id} group={group} />
              ))}
            </div>

            <div className="sticky top-6 rounded-lg border border-border bg-card p-4 sm:p-5">
              <h2 className="mb-4 text-xl font-black uppercase tracking-tight text-primary sm:text-[22px]">
                {t("cart.totalTitle")}
              </h2>

              <div className="mb-1 flex items-center justify-between">
                <span className="text-[13px] text-muted-foreground">
                  {t("cart.wasteRemoval", { count: totalPositions })}
                </span>
              </div>

              <div className="mb-5 mt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">{t("cart.priceVat")}</span>
                <span className="text-xl font-black text-primary sm:text-[22px]">{TOTAL_PRICE}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full rounded bg-primary py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("cart.checkout")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
