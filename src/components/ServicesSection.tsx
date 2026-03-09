import { ArrowRight, MapPin, HardHat, Snowflake, Award, Zap, Bulldozer } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: string;
}

const ServiceCard = ({ icon, title, description, cta = "CTA" }: ServiceCardProps) => (
  <div className="flex-1 min-w-[280px] p-5 bg-background border-2 border-secondary flex flex-col justify-between gap-5">
    <div className="flex flex-col gap-6">
      <div className="w-20 h-20 bg-secondary flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-xl lg:text-2xl font-black uppercase leading-tight">{title}</h3>
        <p className="text-foreground text-base lg:text-xl">{description}</p>
      </div>
    </div>
    <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-base font-semibold hover:opacity-90 transition-opacity">
      {cta}
      <ArrowRight className="w-5 h-5 text-nikami-blue" />
    </button>
  </div>
);

const services = [
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Šķirošanas laukums",
    description: "Profesionāla būvniecības atkritumu šķirošana un pārstrāde, Rumbulā – Kaudzīšu iela 59.",
  },
  {
    icon: <HardHat className="w-10 h-10 text-primary" />,
    title: "Būvgružu pārstrāde",
    description: "Būvgružu pārstrāde gan mūsu šķirošanas poligonā, gan Jūsu objektā, izmantojot mobilo smalcinātāju.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Baltās tehnikas pieņemšana MOSK",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const services2 = [
  {
    icon: <Bulldozer className="w-10 h-10 text-primary" />,
    title: "Ēku un būvju demontāža",
    description: "Sākot no ēkas nojaukšanas līdz būvgružu izvešanai un to utilizācijai.",
  },
  {
    icon: <Snowflake className="w-10 h-10 text-primary" />,
    title: "Sniega izvešana",
    description: "Sniega izvešana no Jūsu teritorijas no 7.50 € / m³.",
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Zaļo ēku sertifikāti",
    description: "Iegūsti 50% NĪN atlaidi uz 10 gadiem ar zaļās būvniecības sertifikātiem.",
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10 lg:px-28">
      <h2 className="text-primary text-3xl lg:text-5xl font-black uppercase leading-tight mb-10">
        Pieteikt atkritumu nodošanu
      </h2>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col md:flex-row gap-1">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          {services2.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
