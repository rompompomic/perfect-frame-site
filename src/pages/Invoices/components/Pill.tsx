function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full border border-[#D0DCE8] text-[12px] text-[#334155] ${className}`}>
      {children}
    </span>
  );
}

export default Pill;
