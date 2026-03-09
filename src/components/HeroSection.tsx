import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import heroImage from "@/assets/hero-image.webp";
import wasteIcon from "@/assets/icons/Waste.svg";
import containerIcon from "@/assets/icons/Container.svg";

const ServiceCard = ({
  icon,
  title,
  description,
  cta





}: {icon: React.ReactNode;title: React.ReactNode;description: string;cta: string;}) =>
<div className="flex-1 p-5 bg-secondary flex flex-col gap-5 py-[21px] my-[50px]">
    <div className="flex items-start gap-6 lg:gap-10">
      <div className="w-20 h-20 bg-background flex flex-col items-center justify-center shrink-0">{icon}</div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-xl lg:text-3xl font-black uppercase leading-tight">{title}</h3>
        <p className="text-foreground text-base lg:text-xl">{description}</p>
      </div>
    </div>
    <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-base font-semibold hover:opacity-90 transition-opacity">
      {cta}
      <ArrowRight className="w-5 h-5 text-nikami-blue" />
    </button>
  </div>;


const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Waste management facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-nikami-dark/80" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-6 pt-10 lg:pt-16 pb-0">
          <h1 className="text-primary-foreground text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-2 max-w-4xl mb-8 lg:mb-12">
            Būvniecības atkritumu pieņemšana, šķirošana, pārstrāde un konteineru noma
          </h1>
        </div>

        {/* Service cards overlapping */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-1 -mb-32 relative z-20">
          <ServiceCard
            icon={<img src={containerIcon} alt="Konteineru noma" className="w-10 h-10" />}
            title={
            <>
                Konteineru
                <br />
                noma
              </>
            }
            description="Piegāde, maiņa, izvešana. Būvgružiem un kokmateriālu atkritumiem."
            cta="Pasūtīt konteineru" />
          

          <ServiceCard
            icon={<img src={wasteIcon} alt="Atkritumu nodošana" className="w-10 h-10" />}
            title={"Atkritumu nodošana\nlaukumā"}
            description="Piesaki atkritumu nodošanu šķirošanas laukumā – Kaudzīšu ielā 59, Rumbulā."
            cta="Pieteikt atkritumu nodošanu" />
          
        </div>
      </div>

      {/* Spacer for overlapping cards */}
      <div className="h-32" />
    </section>);

};

export default HeroSection;