import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import heroImage from "@/assets/hero-image.webp";

const TruckIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.2187 13.5172C39.6491 13.5172 39.9999 13.868 39.9999 14.2984L40 7.26719C40 7.69851 39.65 8.04844 39.2188 8.04844C38.7883 8.04844 38.4375 7.69851 38.4375 7.26719L38.4374 14.2984C38.4374 13.868 38.7882 13.5172 39.2187 13.5172Z" fill="hsl(var(--primary))"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.12501 0H39.2188C39.6502 0 40 0.349844 40 0.78125V7.26719C40 7.69851 39.65 8.04844 39.2188 8.04844C38.7883 8.04844 38.4375 7.69851 38.4375 7.26719V4.6875H27.5391H25.9766H16.6016H15.0391H9.71821L3.9579 10.3252L8.59844 19.2187H35.0719L38.4374 16.9297V14.2984C38.4374 13.868 38.7882 13.5172 39.2187 13.5172C39.6491 13.5172 39.9999 13.868 39.9999 14.2984V17.3437C39.9999 17.6023 39.8718 17.8446 39.6577 17.9898L35.7782 20.628L31.8943 23.7351C31.7558 23.8459 31.5837 23.9062 31.4063 23.9062H9.68751C9.39165 23.9062 9.1211 23.7391 8.98868 23.4744L7.43407 20.3651L7.43204 20.3617L6.28962 18.1719L4.37493 19.5079C4.23884 19.6029 4.0829 19.6485 3.9286 19.6485C3.68266 19.6485 3.44071 19.5328 3.28868 19.3163L1.54829 16.8396C1.42892 16.6698 1.38212 16.4593 1.41813 16.2548C1.45415 16.0504 1.57017 15.8686 1.74048 15.7498L4.14915 14.0691L2.36118 10.6419L0.22954 8.51609C0.0816499 8.36851 -0.00100637 8.16797 9.25001e-06 7.95906C0.00102487 7.75015 0.0856342 7.55031 0.235009 7.40429L7.57876 0.222734C7.72477 0.0799217 7.92087 0 8.12501 0ZM3.27743 16.5827L4.11946 17.7809L5.56095 16.7752L4.8779 15.4659L3.27743 16.5827ZM31.1322 22.3437L33.0853 20.7812H9.38907L10.1703 22.3437H31.1322ZM8.85321 3.34766C9.00009 3.20391 9.19407 3.125 9.39954 3.125H38.4375V1.5625H8.44352L1.89313 7.96828L3.00188 9.07398L8.85321 3.34766Z" fill="hsl(var(--primary))"/>
    <path d="M15.0391 4.6875V10H9.37501C8.94352 10 8.59376 10.3498 8.59376 10.7812C8.59376 11.2127 8.94352 11.5625 9.37501 11.5625H33.2031C33.6346 11.5625 33.9844 11.2127 33.9844 10.7812C33.9844 10.3498 33.6346 10 33.2031 10H27.5391V4.6875H25.9766V10H16.6016V4.6875H15.0391Z" fill="hsl(var(--primary))"/>
  </svg>
);

const RecycleIcon = () => (
  <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.9248 7.06222C28.77 6.86883 28.4993 6.79148 28.2285 6.90751L27.2229 7.2943L24.1286 0.448204C24.0126 0.216133 23.8192 0.100098 23.5871 0.100098H13.5307C13.3373 0.100098 13.1826 0.177455 13.0666 0.332169L7.38083 7.13958C7.2648 7.25562 7.22612 7.44901 7.2648 7.60372C7.30348 7.75844 7.38083 7.91315 7.49687 8.02919L13.1826 12.2451C13.4534 12.4385 13.8401 12.3999 14.0335 12.1291L17.7467 7.1009L19.5259 10.2725L18.4042 10.8527C18.1721 10.9688 18.0561 11.2008 18.0948 11.4329C18.1335 11.665 18.2882 11.897 18.5589 11.9357L24.9022 13.4829C24.9409 13.4829 24.9795 13.4829 25.0569 13.4829C25.2503 13.4829 25.4437 13.3668 25.5597 13.2121L28.9634 7.75844C29.1181 7.52637 29.0795 7.25562 28.9248 7.06222Z" fill="hsl(var(--primary))"/>
    <path d="M15.542 22.6883L9.27608 22.4176L10.9006 19.1686L11.9836 19.7874C12.2156 19.9035 12.4864 19.9035 12.6798 19.7101C12.8732 19.5554 12.9505 19.2846 12.8345 19.0526L10.5525 12.9414C10.4751 12.7093 10.243 12.5546 9.97229 12.5546L3.51299 12.7866C3.24224 12.7866 3.04884 12.98 2.97149 13.2121C2.89413 13.4442 3.01017 13.7149 3.20356 13.8696L4.09316 14.4885L0.186636 20.9091C0.0706005 21.1025 0.0706005 21.3733 0.186636 21.5667L4.51863 27.9486L6.1818 30.4627C6.29784 30.6174 6.49123 30.7335 6.68462 30.7335H15.5033C15.8514 30.7335 16.1222 30.4627 16.1222 30.1146V23.3072C16.1222 22.9978 15.8514 22.727 15.542 22.6883Z" fill="hsl(var(--primary))"/>
    <path d="M36.0416 20.6771L32.1737 12.7093C32.0964 12.5546 31.9804 12.4385 31.8256 12.3999C31.6709 12.3612 31.5162 12.3612 31.3615 12.4772L25.1729 15.9196C24.9022 16.0743 24.7862 16.4611 24.9409 16.7318L27.9578 22.1855L24.322 22.4949L24.2833 21.2572C24.2833 20.9865 24.0899 20.7931 23.8579 20.7157C23.6258 20.6384 23.355 20.7157 23.2003 20.9091L19.1778 26.0534C19.0231 26.2468 19.0231 26.5562 19.1391 26.7496L22.7362 32.0872C22.8522 32.2419 23.0456 32.358 23.239 32.358C23.2777 32.358 23.355 32.358 23.3937 32.3193C23.6258 32.2419 23.8192 32.0098 23.8192 31.7778L23.8579 30.6948H31.3615C31.5936 30.6948 31.8256 30.5401 31.903 30.3467L36.0416 21.1799C36.119 21.0252 36.119 20.8318 36.0416 20.6771Z" fill="hsl(var(--primary))"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Waste management facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(48deg, rgba(12,74,120,0.7) 30%, rgba(64,64,64,0.8) 100%)' }} />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-6 pt-10 lg:pt-16 pb-0">
          <h1 className="text-primary-foreground text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px] max-w-[951px]">
            Būvniecības atkritumu pieņemšana, šķirošana, pārstrāde un konteineru noma
          </h1>
        </div>

        {/* Service cards overlapping */}
        <div className="max-w-[1200px] mx-auto px-6 mt-16 lg:mt-24 flex flex-col md:flex-row gap-1 -mb-32 relative z-20">
          <div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
            <div className="flex items-start gap-10">
              <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                <TruckIcon />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-primary text-2xl lg:text-3xl font-black uppercase leading-8">Konteineru<br/>noma</h3>
                <p className="text-foreground text-lg lg:text-xl leading-7">Piegāde, maiņa, izvešana. Būvgružiem un kokmateriālu atkritumiem.</p>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity">
              Pasūtīt konteineru
              <ArrowRight className="w-5 h-5 text-nikami-blue" />
            </button>
          </div>
          <div className="flex-1 p-5 bg-secondary flex flex-col gap-5">
            <div className="flex items-start gap-10">
              <div className="w-20 h-20 bg-background flex items-center justify-center shrink-0">
                <RecycleIcon />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-primary text-2xl lg:text-3xl font-black uppercase leading-8">Atkritumu nodošana<br/>laukumā</h3>
                <p className="text-foreground text-lg lg:text-xl leading-7">Piesaki atkritumu nodošanu šķirošanas laukumā – Kaudzīšu ielā 59, Rumbulā.</p>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-primary rounded-sm flex items-center justify-center gap-2.5 text-primary-foreground text-base font-semibold leading-6 hover:opacity-90 transition-opacity">
              Pieteikt atkritumu nodošanu
              <ArrowRight className="w-5 h-5 text-nikami-blue" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for overlapping cards */}
      <div className="h-32" />

      {/* Chat widget */}
      <div className="fixed bottom-6 right-6 z-50 w-20 h-20 bg-nikami-blue rounded-[44px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.10)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.625 8.125C23.9446 8.12572 22.2924 8.56166 20.8297 9.39128C19.367 10.2209 18.1434 11.4152 17.2789 12.8572C16.4144 14.2992 15.9389 15.9397 15.8984 17.6198C15.858 19.2999 16.2538 20.9609 17.0469 22.4422L15.7281 25.8969C15.6606 26.0743 15.6426 26.2666 15.6763 26.4533C15.7099 26.6399 15.7939 26.8134 15.9189 26.9552C16.044 27.097 16.2052 27.2015 16.3847 27.2573C16.5643 27.313 16.7554 27.3179 16.9375 27.2714L20.7469 26.3214C22.0427 26.948 23.4704 27.2596 24.9122 27.2309C26.354 27.2022 27.7681 26.834 29.0379 26.1559C30.3076 25.4778 31.396 24.5094 32.2167 23.327C33.0374 22.1447 33.5672 20.7822 33.7611 19.3522C33.955 17.9222 33.8074 16.466 33.3302 15.1017C32.853 13.7374 32.0597 12.5042 31.0156 11.5057C29.9714 10.5071 28.7052 9.77122 27.3222 9.35709C25.9392 8.94296 24.4795 8.86219 23.0609 9.12122" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.375 21.875C12.812 21.8749 11.2754 21.4841 9.90781 20.7391L6.5625 21.5625L7.67344 18.6484C6.55816 16.9063 6.07335 14.8385 6.29829 12.7857C6.52324 10.7329 7.44483 8.82131 8.90607 7.36537C10.3673 5.90942 12.282 4.99481 14.3355 4.77731C16.389 4.55982 18.4551 5.05215 20.193 6.17344" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
