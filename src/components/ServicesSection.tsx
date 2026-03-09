import { ArrowRight } from "lucide-react";

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
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);

const SortingIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 35 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.25 12.37V23.75a1.25 1.25 0 002.5 0V12.37c1.52-.31 2.87-1.17 3.78-2.42.91-1.25 1.33-2.79 1.17-4.33a6.25 6.25 0 00-12.44 0c-.16 1.54.26 3.08 1.18 4.33.91 1.25 2.26 2.11 3.78 2.42zM17.5 2.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zM35 23.75c0 4.87-9.02 7.5-17.5 7.5S0 28.62 0 23.75c0-1.21.6-2.99 3.44-4.6 1.92-1.08 4.55-1.91 7.62-2.41a1.25 1.25 0 01.43 2.47c-2.74.44-5.16 1.19-6.79 2.12C3.29 22.11 2.5 22.99 2.5 23.75c0 2.09 5.71 5 15 5s15-2.91 15-5c0-.76-.79-1.64-2.16-2.42-1.63-.93-4.04-1.68-6.78-2.12a1.25 1.25 0 01.43-2.47c3.07.49 5.7 1.33 7.62 2.41C34.4 20.76 35 22.54 35 23.75z" />
  </svg>
);

const CrusherIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 35 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.5 20v-2.5a15 15 0 00-10-14.14V2.5A2.5 2.5 0 0020 0h-5a2.5 2.5 0 00-2.5 2.5v.86a15 15 0 00-10 14.14V20A2.5 2.5 0 000 22.5v3.75a2.5 2.5 0 002.5 2.5h30a2.5 2.5 0 002.5-2.5V22.5a2.5 2.5 0 00-2.5-2.5zM30 17.5V20h-7.5V6.04a12.5 12.5 0 017.5 11.46zM20 2.5V20h-5V2.5h5zM5 17.5a12.5 12.5 0 017.5-11.46V20H5v-2.5zm27.5 8.75h-30V22.5h30v3.75z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 28 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.47 17.21a1.25 1.25 0 00-.78-.88l-9-3.38 2.29-11.46a1.25 1.25 0 00-2.14-1.1L.34 19.15a1.25 1.25 0 00.47 1.99l9 3.38-2.28 11.46a1.25 1.25 0 002.14 1.1L27.17 18.34a1.25 1.25 0 00.3-1.13zm-16.63 14.97l1.64-8.18a1.25 1.25 0 00-.78-1.42L3.44 19.48 16.67 5.31l-1.63 8.19c-.06.29-.02.59.12.85.14.26.37.46.65.57l8.25 3.09-14.09 14.17z" />
  </svg>
);

const BulldozerIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 40 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.75 25h-1.25a1.25 1.25 0 01-1.25-1.25v-5a1.25 1.25 0 011.25-1.25h1.25a1.25 1.25 0 000-2.5h-1.25a3.75 3.75 0 00-3.75 3.75V20h-2.63a7.5 7.5 0 00-5.27-4.94L20.23 1.54A3.75 3.75 0 0017.92 0H3.75A2.5 2.5 0 001.25 2.5v15a7.5 7.5 0 005 12.5H25a7.5 7.5 0 006.13-5H33.75v1.25a3.75 3.75 0 003.75 3.75h1.25a1.25 1.25 0 000-2.5zM23.13 15H10V2.5h7.92l5.21 12.5zM7.5 2.5V15h-1.25a7.5 7.5 0 00-2.5.52V2.5h3.75zM25 25H6.25a5 5 0 010-10H25a5 5 0 010 10zm1.25-3.75a1.25 1.25 0 01-1.25 1.25H6.25a1.25 1.25 0 010-2.5H25a1.25 1.25 0 011.25 1.25z" />
  </svg>
);

const SnowflakeIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.97 18.45a1.25 1.25 0 01-1.52.92l-3.85-.94 1.01 3.77a1.25 1.25 0 01-2.42.64l-1.21-4.5-6.33-3.66v7.32l3.38 3.38a1.25 1.25 0 01-1.77 1.77L15 24.77l-2.87 2.87a1.25 1.25 0 01-1.77-1.77l3.39-3.38v-7.32l-6.34 3.66-1.2 4.5a1.25 1.25 0 01-2.42-.65l1.01-3.77-3.85.94a1.25 1.25 0 11-.6-2.43l4.6-1.13 6.35-3.67-6.35-3.66-4.6 1.13a1.25 1.25 0 11-.6-2.43l3.85-.94-1.01-3.77a1.25 1.25 0 012.42-.64l1.2 4.5 6.34 3.66V5.52L10.37 2.14a1.25 1.25 0 011.77-1.77L15 3.23l2.87-2.86a1.25 1.25 0 011.77 1.77l-3.39 3.38v7.32l6.33-3.66 1.21-4.5a1.25 1.25 0 012.42.65l-1.01 3.76 3.85-.94a1.25 1.25 0 11.6 2.44l-4.6 1.13-6.35 3.66 6.35 3.67 4.6-1.13a1.25 1.25 0 011.52.92z" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 35 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.25 15a1.25 1.25 0 01-1.25 1.25H7.5a1.25 1.25 0 010-2.5H15a1.25 1.25 0 011.25 1.25zM15 8.75H7.5a1.25 1.25 0 000 2.5H15a1.25 1.25 0 000-2.5zm17.5 10.23v9.77a1.25 1.25 0 01-1.88 1.08l-3.75-2.15-3.75 2.15a1.25 1.25 0 01-1.87-1.08V25H2.5A2.5 2.5 0 010 22.5v-20A2.5 2.5 0 012.5 0H30a2.5 2.5 0 012.5 2.5v5.77a8.75 8.75 0 010 10.71zM21.25 22.5v-3.52a8.75 8.75 0 01-1.19-12.6A8.75 8.75 0 0130 5.63V2.5H2.5v20h18.75zm8.75-1.88a6.25 6.25 0 01-6.25.01v5.97l2.5-1.43a1.25 1.25 0 011.24 0l2.5 1.43.01-5.98zM32.5 13.13a6.25 6.25 0 10-12.5 0 6.25 6.25 0 0012.5 0z" />
  </svg>
);

const services = [
  {
    icon: <SortingIcon />,
    title: "Šķirošanas laukums",
    description: "Profesionāla būvniecības atkritumu šķirošana un pārstrāde, Rumbulā – Kaudzīšu iela 59.",
  },
  {
    icon: <CrusherIcon />,
    title: "Būvgružu pārstrāde",
    description: "Būvgružu pārstrāde gan mūsu šķirošanas poligonā, gan Jūsu objektā, izmantojot mobilo smalcinātāju.",
  },
  {
    icon: <LightningIcon />,
    title: "Baltās tehnikas pieņemšana MOSK",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const services2 = [
  {
    icon: <BulldozerIcon />,
    title: "Ēku un būvju demontāža",
    description: "Sākot no ēkas nojaukšanas līdz būvgružu izvešanai un to utilizācijai.",
  },
  {
    icon: <SnowflakeIcon />,
    title: "Sniega izvešana",
    description: "Sniega izvešana no Jūsu teritorijas no 7.50 € / m³.",
  },
  {
    icon: <CertificateIcon />,
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
