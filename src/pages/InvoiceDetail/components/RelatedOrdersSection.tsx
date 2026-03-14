import { CartIcon } from "./icons/InvoiceDetailIcons";

function RelatedOrdersSection({ relatedOrders }: { relatedOrders: string[] }) {
  return (
    <div className="border border-[#E2E8F0] rounded-[6px] p-4 mb-8 flex items-start gap-3">
      <div className="text-[#4895E8] shrink-0 mt-0.5">
        <CartIcon />
      </div>
      <div>
        <p className="text-[11px] text-[#94A3B8] font-semibold mb-2">Related orders</p>
        <div className="flex flex-wrap gap-1.5">
          {relatedOrders.map((order, i) => (
            <span
              key={i}
              className="border border-[#D0DCE8] text-[#05376D] text-[11px] font-semibold px-2 py-0.5 rounded-full hover:border-[#4895E8] cursor-pointer transition-colors">
              {order}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedOrdersSection;
