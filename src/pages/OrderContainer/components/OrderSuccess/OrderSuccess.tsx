import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

interface Props {
  onGoToOrders: () => void;
}

export function OrderSuccess({ onGoToOrders }: Props) {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-[58px] font-black text-[#05376D] uppercase tracking-tight mb-4 leading-tight">
        Thank you.
      </h1>
      <p className="text-sm sm:text-[16px] text-[#000] mb-6 sm:mb-8">
        Your order has been successfully placed. Track the status in your account.
      </p>
      <button
        onClick={onGoToOrders}
        className="bg-[#05376D] text-white font-semibold text-sm px-5 py-3 rounded-[4px] flex items-center gap-3 hover:bg-[#15305a] transition-colors w-full sm:w-auto justify-center sm:justify-start">
        <span>Go to orders</span>
        <img src={ArrowRightIcon} alt="Arrow" className="w-4 h-4 brightness-0 invert" />
      </button>
    </div>
  );
}
