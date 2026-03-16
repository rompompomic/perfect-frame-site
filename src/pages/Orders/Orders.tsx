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
      <div className="min-h-screen w-full bg-[#F8F8F8] pb-[48px]">
        <div className="max-w-[1040px] mx-auto px-[24px] pt-[40px]">
          <h1 className="font-black text-[#05376d] text-[58px] uppercase tracking-tighter mb-[20px]">
            {t("orders.title")}
          </h1>

          <div className="flex flex-wrap gap-[10px] mb-[40px]">
            <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[180px]">
              <input
                type="text"
                placeholder={t("orders.filter.dates")}
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="flex-1 text-[16px] text-[#9F9F9F] outline-none placeholder:text-[#94a3b8] bg-transparent"
              />
              <CalendarIcon />
            </div>

            <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[228px] cursor-pointer">
              <span className="flex-1 text-[16px] text-[#9F9F9F]">{t("orders.filter.orderStatus")}</span>
              <ChevronIcon />
            </div>

            <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[180px]">
              <input
                type="text"
                placeholder={t("orders.filter.address")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 text-[16px] text-[#9F9F9F] outline-none placeholder:text-[#94a3b8] bg-transparent"
              />
              <SearchIcon />
            </div>

            <div className="flex items-center gap-[8px] bg-white border border-[#dde8f5] rounded-[6px] px-[12px] py-[9px] min-w-[170px] cursor-pointer">
              <span className="flex-1 text-[16px] text-[#9F9F9F]">{t("orders.filter.paymentStatus")}</span>
              <ChevronIcon />
            </div>

            <button className="bg-white border border-[#dde8f5] rounded-[6px] px-[16px] py-[9px] text-[16px] text-[#9F9F9F] font-semibold hover:bg-[#f1f5f9] transition-colors cursor-pointer">
              {t("orders.filter.clear")}
            </button>
          </div>

          <section className="mb-[40px]">
            <h2 className="font-black text-[#000] text-[32px] uppercase tracking-wide mb-[16px]">
              {t("orders.activeOrders")}
            </h2>
            <div className="flex flex-col gap-[16px]">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} navigate={navigate} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-black text-[#000] text-[32px] uppercase tracking-wide mb-[16px]">
              {t("orders.orderArchive")}
            </h2>
            <div className="flex flex-col gap-[16px]">
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
