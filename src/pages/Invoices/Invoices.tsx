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

      <div className="min-h-screen bg-muted">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-6 pb-40 sm:px-6 sm:py-7 sm:pb-44 md:pb-32">
          <h1 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary sm:mb-8 sm:text-[52px]">
            {t("invoices.title")}
          </h1>

          <FilterBar onClear={() => {}} />

          {awaiting.length > 0 && (
            <section className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-2xl font-black uppercase tracking-wide text-foreground sm:text-[32px]">
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
              <h2 className="mb-3 text-2xl font-black uppercase tracking-wide text-foreground sm:text-[32px]">
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
