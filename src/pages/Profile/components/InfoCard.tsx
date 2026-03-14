interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-[#F8F8F8] rounded-[4px] px-5 py-4 flex items-start gap-4">
      <div className="text-[#4895E8] bg-[#fff] p-[16px] mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-[14px] text-[#000] font-semibold mb-0.5">{label}</p>
        <p className="text-[20px] text-[#000]">{value}</p>
      </div>
    </div>
  );
}
