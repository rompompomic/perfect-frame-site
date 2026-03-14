function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-[6px] px-4 py-3">
      <div className="text-[#4895E8] shrink-0">{icon}</div>
      <div>
        <p className="text-[11px] text-[#94A3B8] font-semibold mb-0.5">{label}</p>
        <p className="text-[13px] font-bold text-[#1a1a1a]">{value}</p>
      </div>
    </div>
  );
}

export default InfoTile;
