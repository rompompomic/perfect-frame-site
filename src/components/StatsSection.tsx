const stats = [
  {
    value: "7000+ apmierinātu klientu",
    description: "Uzticami pakalpojumi, ātra piegāde un individuāla apkalpošana",
  },
  {
    value: "700+ konteineru",
    description: "Mūsu rīcībā ir dažāda tilpuma konteineri – no 6m³ līdz pat 20m³",
  },
  {
    value: "30+ gadu pieredze",
    description: "Kompetence un zināšanas, kas nodrošina augstu darba kvalitāti",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-40 pb-10">
      <div className="flex flex-col md:flex-row gap-1">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 p-5 bg-secondary flex flex-col justify-between gap-5">
            <h3 className="text-primary text-2xl lg:text-3xl font-black uppercase leading-8">{stat.value}</h3>
            <p className="text-foreground text-lg lg:text-xl leading-7">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
