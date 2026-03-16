import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CalendarIcon, SearchIcon, ChevronIcon } from "@/components/icons";
import { archiveOrders, orders } from "./mock";
import { OrderCard } from "./components/OrderCard/OrderCard";

export default function OrdersPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dateFrom, setDateFrom] = useState("");
  const [address, setAddress] = useState("");

  return (
    <MainLayout>
      <div className="bg-primary">
        <Navbar variant="light" />
      </div>
      <div className="min-h-screen w-full bg-[#F8F8F8] pb-8 md:pb-12">
        <div className="max-w-[1040px] mx-auto px-4 md:px-6 pt-6 md:pt-10">
          <h1 className="font-black text-primary text-[32px] md:text-[58px] uppercase tracking-tighter mb-4 md:mb-5">
            {t("orders.title")}
          </h1>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-[10px] mb-6 md:mb-10">
            <div className="flex items-center gap-2 bg-white border border-[#dde8f5] rounded-[6px] px-3 py-2 min-w-0 sm:min-w-[180px]">
              <input
                type="text"
                placeholder={t("orders.filter.dates")}
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="flex-1 min-w-0 text-sm md:text-base text-muted-foreground outline-none placeholder:text-muted-foreground bg-transparent"
              />
              <CalendarIcon />
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#dde8f5] rounded-[6px] px-3 py-2 min-w-0 sm:min-w-[228px] cursor-pointer">
              <span className="flex-1 text-sm md:text-base text-muted-foreground">{t("orders.filter.orderStatus")}</span>
              <ChevronIcon />
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#dde8f5] rounded-[6px] px-3 py-2 min-w-0 sm:min-w-[180px]">
              <input
                type="text"
                placeholder={t("orders.filter.address")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 min-w-0 text-sm md:text-base text-muted-foreground outline-none placeholder:text-muted-foreground bg-transparent"
              />
              <SearchIcon />
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#dde8f5] rounded-[6px] px-3 py-2 min-w-0 sm:min-w-[170px] cursor-pointer">
              <span className="flex-1 text-sm md:text-base text-muted-foreground">{t("orders.filter.paymentStatus")}</span>
              <ChevronIcon />
            </div>

            <button className="bg-white border border-[#dde8f5] rounded-[6px] px-4 py-2 text-sm md:text-base text-muted-foreground font-semibold hover:bg-muted transition-colors cursor-pointer">
              {t("orders.filter.clear")}
            </button>
          </div>

          <section className="mb-8 md:mb-10">
            <h2 className="font-black text-foreground text-xl md:text-[32px] uppercase tracking-wide mb-3 md:mb-4">
              {t("orders.activeOrders")}
            </h2>
            <div className="flex flex-col gap-3 md:gap-4">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} navigate={navigate} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-black text-foreground text-xl md:text-[32px] uppercase tracking-wide mb-3 md:mb-4">
              {t("orders.orderArchive")}
            </h2>
            <div className="flex flex-col gap-3 md:gap-4">
              {archiveOrders.map((order) => (
                <OrderCard key={order.id} order={order} navigate={navigate} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
