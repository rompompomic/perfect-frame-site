import { DimensionsTooltip } from "./components/DimensionsTooltip/DimensionsTooltip";
import { Container } from "./type";

export const ContainerCard = ({
  container,
  quantity,
  onIncrement,
  onDecrement,
}: {
  container: Container;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  const isSelected = quantity > 0;

  return (
    <div
      onClick={onIncrement}
      className={`relative min-h-[140px] sm:h-[200px] rounded-[4px] p-3 sm:p-4 cursor-pointer transition-all duration-200 select-none flex flex-col
        ${
          isSelected
            ? "bg-[#1a3c6e] text-white shadow-lg"
            : "bg-white text-[#1a3c6e] border border-[#dde8f0] hover:border-[#05376D] hover:shadow-md"
        }`}>
      {/* Size label */}
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <span className="text-lg sm:text-2xl font-black tracking-tight">
          {container.size} m<sup>3</sup>
        </span>
        <div className={isSelected ? "text-white" : "text-[#7a9ab5]"}>
          <DimensionsTooltip container={container} />
        </div>
      </div>

      {/* Container image placeholder */}
      <div className="w-full flex items-center justify-center mb-2 sm:mb-3 flex-1">
        <img
          src={container.image}
          alt={`Container ${container.size}m³`}
          className="w-full object-contain max-h-[60px] sm:max-h-[81px]"
        />
      </div>

      {/* Quantity stepper — shown when selected */}
      {isSelected && (
        <div className="flex items-center justify-between bg-white/15 rounded-lg overflow-hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDecrement();
            }}
            className="w-10 h-9 flex items-center justify-center text-white text-xl font-bold hover:bg-white/20 transition-colors">
            −
          </button>
          <span className="flex-1 text-center text-white font-bold">{quantity}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIncrement();
            }}
            className="w-10 h-9 flex items-center justify-center text-white text-xl font-bold hover:bg-white/20 transition-colors">
            +
          </button>
        </div>
      )}
    </div>
  );
};
