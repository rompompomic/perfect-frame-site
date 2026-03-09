import { ArrowRight, MapPin, HardHat, Snowflake, Award, Zap, Truck } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: string;
}

const ServiceCard = ({ icon, title, description, cta = "CTA" }: ServiceCardProps) => (
  <div className="flex-1 min-w-[280px] p-5 bg-background border-2 border-secondary flex flex-col justify-between gap-5">
    <div className="flex flex-col gap-6">
      <div className="w-20 h-20 bg-secondary flex items-center justify-center">{icon}</div>
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
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Ēku un būvju demontāža",
    description: "Sākot no ēkas nojaukšanas līdz būvgružu izvešanai un to utilizācijai.",
  },
  {
    icon: <Snowflake className="w-10 h-10 text-primary" />,
    title: "Sniega izvešana",
    description: "Sniega izvešana no Jūsu teritorijas no 7.50 € / m³.",
  },
  {
    icon: <svg className="w-10 h-10" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 15C16.25 15.3315 16.1183 15.6495 15.8839 15.8839C15.6495 16.1183 15.3315 16.25 15 16.25H7.5C7.16848 16.25 6.85054 16.1183 6.61612 15.8839C6.3817 15.6495 6.25 15.3315 6.25 15C6.25 14.6685 6.3817 14.3505 6.61612 14.1161C6.85054 13.8817 7.16848 13.75 7.5 13.75H15C15.3315 13.75 15.6495 13.8817 15.8839 14.1161C16.1183 14.3505 16.25 14.6685 16.25 15ZM15 8.75H7.5C7.16848 8.75 6.85054 8.8817 6.61612 9.11612C6.3817 9.35054 6.25 9.66848 6.25 10C6.25 10.3315 6.3817 10.6495 6.61612 10.8839C6.85054 11.1183 7.16848 11.25 7.5 11.25H15C15.3315 11.25 15.6495 11.1183 15.8839 10.8839C16.1183 10.6495 16.25 10.3315 16.25 10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75ZM32.5 18.9797V28.75C32.502 28.9704 32.4457 29.1873 32.3368 29.3789C32.2279 29.5705 32.0702 29.7299 31.8799 29.841C31.6895 29.952 31.4732 30.0108 31.2528 30.0112C31.0324 30.0117 30.8158 29.9539 30.625 29.8438L26.875 27.6969L23.125 29.8438C22.9342 29.9539 22.7176 30.0117 22.4972 30.0112C22.2768 30.0108 22.0605 29.952 21.8701 29.841C21.6798 29.7299 21.5221 29.5705 21.4132 29.3789C21.3043 29.1873 21.248 28.9704 21.25 28.75V25H2.5C1.83696 25 1.20107 24.7366 0.732233 24.2678C0.263392 23.7989 0 23.163 0 22.5V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H30C30.663 0 31.2989 0.263392 31.7678 0.732233C32.2366 1.20107 32.5 1.83696 32.5 2.5V7.27031C33.2902 8.02701 33.919 8.93582 34.3486 9.94201C34.7782 10.9482 34.9997 12.0309 34.9997 13.125C34.9997 14.2191 34.7782 15.3018 34.3486 16.308C33.919 17.3142 33.2902 18.223 32.5 18.9797ZM21.25 22.5V18.9797C19.8878 17.666 19.027 15.918 18.8159 14.0374C18.6049 12.1567 19.057 10.2614 20.0941 8.67849C21.1312 7.09556 22.6884 5.92431 24.4969 5.36685C26.3053 4.80939 28.2517 4.90069 30 5.625V2.5H2.5V22.5H21.25ZM30 20.625C29.0101 21.0386 27.9479 21.2516 26.875 21.2516C25.8021 21.2516 24.7399 21.0386 23.75 20.625V26.5969L26.25 25.1656C26.4389 25.0576 26.6527 25.0008 26.8703 25.0008C27.0879 25.0008 27.3017 25.0576 27.4906 25.1656L29.9906 26.5969L30 20.625ZM32.5 13.125C32.5 12.0125 32.1701 10.9249 31.552 9.99992C30.9339 9.07489 30.0554 8.35392 29.0276 7.92818C27.9998 7.50243 26.8688 7.39104 25.7776 7.60808C24.6865 7.82512 23.6842 8.36085 22.8975 9.14752C22.1109 9.9342 21.5751 10.9365 21.3581 12.0276C21.141 13.1188 21.2524 14.2498 21.6782 15.2776C22.1039 16.3054 22.8249 17.1839 23.7499 17.802C24.6749 18.4201 25.7625 18.75 26.875 18.75C27.6137 18.75 28.3451 18.6045 29.0276 18.3218C29.71 18.0391 30.3301 17.6248 30.8525 17.1025C31.3748 16.5801 31.7891 15.96 32.0718 15.2776C32.3545 14.5951 32.5 13.8637 32.5 13.125Z" fill="currentColor" className="text-primary" /></svg>,
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
