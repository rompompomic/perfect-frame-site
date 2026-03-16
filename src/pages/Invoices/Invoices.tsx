import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_INVOICES } from "./mock";

import { InvoiceRow, SelectionBar, FilterBar } from "./components";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";

export default function InvoicesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set(["1", "2"]));

  const awaiting = MOCK_INVOICES.filter((i) => i.status === "awaiting");
  const payed = MOCK_INVOICES.filter((i) => i.status === "payed");

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>
      <div className="min-h-screen bg-[#F1F5F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 sm:py-7">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[52px] font-black text-primary uppercase tracking-tight mb-5 sm:mb-8">
            {t("invoices.title")}
          </h1>

          <FilterBar onClear={() => {}} />

          {awaiting.length > 0 && (
            <section className="mb-8">
              <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-black text-foreground uppercase tracking-wide mb-3">
                {t("invoices.awaitingPayment")}
              </h2>
              <div className="flex flex-col gap-2">
                {awaiting.map((inv) => (
                  <InvoiceRow
                    key={inv.id}
                    invoice={inv}
                    checked={selected.has(inv.id)}
                    onCheck={() => toggle(inv.id)}
                    onClick={() => navigate(`/invoices/${inv.id}`)}
                  />
                ))}
              </div>
            </section>
          )}

          {payed.length > 0 && (
            <section>
              <h2 className="text-[32px] font-black text-[#000] uppercase tracking-wide mb-3">
                {t("invoices.paid")}
              </h2>
              <div className="flex flex-col gap-2">
                {payed.map((inv) => (
                  <InvoiceRow
                    key={inv.id}
                    invoice={inv}
                    checked={selected.has(inv.id)}
                    onCheck={() => toggle(inv.id)}
                    onClick={() => navigate(`/invoices/${inv.id}`)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        {selected.size > 0 && (
          <SelectionBar
            count={selected.size}
            total={MOCK_INVOICES.length}
            onClose={() => setSelected(new Set())}
          />
        )}
      </div>
    </MainLayout>
  );
}
