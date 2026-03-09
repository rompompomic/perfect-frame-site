import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import heroImage from "@/assets/hero-image.webp";

const ServiceCard = ({ icon, title, description, cta }: { icon: React.ReactNode; title: string; description: string; cta: string }) => (
  <div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
    <div className="flex items-start gap-6 lg:gap-10">
      <div className="w-20 h-20 bg-background flex flex-col items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary text-xl lg:text-3xl font-black uppercase leading-tight">{title}</h3>
        <p className="text-foreground text-base lg:text-xl">{description}</p>
      </div>
    </div>
    <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-base font-semibold hover:opacity-90 transition-opacity">
      {cta}
      <ArrowRight className="w-5 h-5 text-nikami-blue" />
    </button>
  </div>
);

const TruckIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.2187 13.5172C39.6491 13.5172 39.9999 13.868 39.9999 14.2984L40 7.26719C40 7.69851 39.65 8.04844 39.2188 8.04844C38.7883 8.04844 38.4375 7.69851 38.4375 7.26719L38.4374 14.2984C38.4374 13.868 38.7882 13.5172 39.2187 13.5172Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.12501 0H39.2188C39.6502 0 40 0.349844 40 0.78125V7.26719C40 7.69851 39.65 8.04844 39.2188 8.04844C38.7883 8.04844 38.4375 7.69851 38.4375 7.26719V4.6875H27.5391H25.9766H16.6016H15.0391H9.71821L3.9579 10.3252L8.59844 19.2187H35.0719L38.4374 16.9297V14.2984C38.4374 13.868 38.7882 13.5172 39.2187 13.5172C39.6491 13.5172 39.9999 13.868 39.9999 14.2984V17.3437C39.9999 17.6023 39.8718 17.8446 39.6577 17.9898L35.7782 20.628L31.8943 23.7351C31.7558 23.8459 31.5837 23.9062 31.4063 23.9062H9.68751C9.39165 23.9062 9.1211 23.7391 8.98868 23.4744L7.43407 20.3651L7.43204 20.3617L6.28962 18.1719L4.37493 19.5079C4.23884 19.6029 4.0829 19.6485 3.9286 19.6485C3.68266 19.6485 3.44071 19.5328 3.28868 19.3163L1.54829 16.8396C1.42892 16.6698 1.38212 16.4593 1.41813 16.2548C1.45415 16.0504 1.57017 15.8686 1.74048 15.7498L4.14915 14.0691L2.36118 10.6419L0.22954 8.51609C0.0816499 8.36851 -0.00100637 8.16797 9.25001e-06 7.95906C0.00102487 7.75015 0.0856342 7.55031 0.235009 7.40429L7.57876 0.222734C7.72477 0.0799217 7.92087 0 8.12501 0ZM3.27743 16.5827L4.11946 17.7809L5.56095 16.7752L4.8779 15.4659L3.27743 16.5827ZM31.1322 22.3437L33.0853 20.7812H9.38907L10.1703 22.3437H31.1322ZM8.85321 3.34766C9.00009 3.20391 9.19407 3.125 9.39954 3.125H38.4375V1.5625H8.44352L1.89313 7.96828L3.00188 9.07398L8.85321 3.34766Z" fill="currentColor"/>
    <path d="M15.0391 4.6875V10H9.37501C8.94352 10 8.59376 10.3498 8.59376 10.7812C8.59376 11.2127 8.94352 11.5625 9.37501 11.5625H33.2031C33.6346 11.5625 33.9844 11.2127 33.9844 10.7812C33.9844 10.3498 33.6346 10 33.2031 10H27.5391V4.6875H25.9766V10H16.6016V4.6875H15.0391Z" fill="currentColor"/>
  </svg>
);

const WasteIcons = () => (
  <div className="flex flex-col items-center gap-1">
    <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4365 0.050293C16.6567 0.0503189 16.8448 0.147811 16.9717 0.338379L17.0225 0.42627L17.0234 0.427246L20.0977 7.22998L21.0596 6.86084C21.3497 6.73718 21.6445 6.81952 21.8135 7.03076C21.9798 7.23875 22.0229 7.53401 21.8545 7.78662L18.4512 13.2388L18.4492 13.2427L18.4482 13.2417C18.3248 13.4062 18.1184 13.5327 17.9062 13.5327H17.7393V13.5317L11.3965 11.9839V11.9829C11.0999 11.938 10.9352 11.6847 10.8945 11.4409C10.8522 11.1865 10.9801 10.9336 11.2305 10.8081L12.3057 10.2515L10.5898 7.19189L6.92285 12.1567L6.92383 12.1577C6.7122 12.454 6.29296 12.4928 6.00293 12.2856H6.00195L0.316406 8.06982L0.310547 8.06494C0.186926 7.94132 0.105864 7.77746 0.0654297 7.61572C0.0233224 7.44705 0.0639708 7.23447 0.194336 7.104L5.87793 0.300293C6.00321 0.134471 6.17173 0.0503322 6.37988 0.050293H16.4365Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1"/>
    </svg>
    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.97266 0.050293C10.2609 0.0504314 10.5129 0.215236 10.5986 0.469238L12.8789 6.57568C13.0066 6.83099 12.9207 7.12655 12.7109 7.29443L12.71 7.29346C12.4972 7.50263 12.2045 7.49922 11.9609 7.37744L11.959 7.37646L10.9219 6.78271L9.35547 9.9165L15.5439 10.1841H15.5479C15.8787 10.2254 16.1719 10.5149 16.1719 10.853V17.6597C16.1719 18.0354 15.8787 18.3286 15.5029 18.3286H6.68457C6.47241 18.3286 6.26505 18.2031 6.1416 18.0386L6.13965 18.0356L4.47656 15.522V15.521L0.145508 9.14014L0.143555 9.13818C0.0180771 8.92905 0.0181939 8.6384 0.143555 8.4292V8.42822L4.02637 2.04736L3.1748 1.45654L3.17188 1.45459C2.96695 1.2906 2.83811 0.99884 2.92383 0.741699C3.00574 0.496024 3.21382 0.282805 3.51074 0.281738L9.9707 0.050293H9.97266Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1"/>
    </svg>
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8809 0.074707C13.0541 0.118013 13.1801 0.247506 13.2617 0.410645L17.1299 8.37842L17.1572 8.44287C17.2124 8.59754 17.2025 8.77512 17.1299 8.92236L17.1309 8.92334L12.9922 18.0903L12.9912 18.0894C12.9053 18.3026 12.6548 18.4683 12.4043 18.4683H4.94922L4.91211 19.5034C4.91088 19.7601 4.70073 20.0077 4.45312 20.0903C4.42557 20.11 4.39471 20.121 4.36816 20.1255C4.33454 20.1311 4.30128 20.1313 4.28223 20.1313C4.07 20.1313 3.86271 20.0049 3.73926 19.8403L3.73828 19.8384L0.140625 14.5005L0.139648 14.4985C0.0759299 14.3923 0.044653 14.2565 0.0498047 14.1226C0.0550152 13.9887 0.0964679 13.8522 0.181641 13.7456L4.2041 8.60205V8.60107C4.37207 8.39111 4.66531 8.3082 4.91699 8.39209C5.16278 8.47409 5.37619 8.6818 5.37695 8.979L5.41309 10.1636L8.91895 9.86475L5.94043 4.479V4.47998C5.77138 4.18394 5.89807 3.76674 6.19141 3.59912L12.3809 0.156738C12.5497 0.0329872 12.7192 0.0343168 12.8809 0.074707Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1"/>
    </svg>
  </div>
);

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
          <h1 className="text-primary-foreground text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-tight max-w-4xl mb-16 lg:mb-24">
            Būvniecības atkritumu pieņemšana, šķirošana, pārstrāde un konteineru noma
          </h1>
        </div>

        {/* Service cards overlapping */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-1 -mb-32 relative z-20">
          <ServiceCard
            icon={<TruckIcon />}
            title={"Konteineru\nnoma"}
            description="Piegāde, maiņa, izvešana. Būvgružiem un kokmateriālu atkritumiem."
            cta="Pasūtīt konteineru"
          />
          <ServiceCard
            icon={<WasteIcons />}
            title={"Atkritumu nodošana\nlaukumā"}
            description="Piesaki atkritumu nodošanu šķirošanas laukumā – Kaudzīšu ielā 59, Rumbulā."
            cta="Pieteikt atkritumu nodošanu"
          />
        </div>
      </div>

      {/* Spacer for overlapping cards */}
      <div className="h-32" />
    </section>
  );
};

export default HeroSection;
