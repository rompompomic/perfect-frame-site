import { Phone, MapPin, AtSign } from "lucide-react";
import logoWhite from "@/assets/logo-white.webp";
import bwegLogo from "@/assets/bweg-logo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-nikami-dark px-6 lg:px-28 py-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-10">
        {/* Logo and contact */}
        <div className="flex flex-col gap-5">
          <div className="w-24 h-11 relative">
            <img src={logoWhite} alt="NIKAMI logo" className="w-24 h-11 object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-primary-foreground text-xl font-bold leading-7">SIA "NIKA MI"</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
                <span className="text-primary-foreground text-base font-medium leading-6">371 28 60 1111</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
                <span className="text-primary-foreground text-base font-medium leading-6">Kaudzīšu iela 59</span>
              </div>
              <div className="flex items-center gap-2">
                <AtSign className="w-5 h-5 text-nikami-blue" />
                <span className="text-primary-foreground text-base font-medium leading-6">klienti@nikami.lv</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links columns */}
        <div className="flex-1 flex flex-wrap gap-12">
          {/* Informācija */}
          <div className="flex flex-col gap-5">
            <span className="text-primary-foreground/40 text-base font-bold leading-6">Informācija</span>
            <div className="flex flex-col gap-4">
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Atkritumu cenrādis</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Darbības zona</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Konteneru lietošanas noteikumi</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Biežāk uzdotie jautājumi</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Aktualitātes</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Akcijas</span>
            </div>
          </div>

          {/* Pakalpojumi */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-primary-foreground/40 text-base font-bold leading-6">Pakalpojumi</span>
            <div className="flex flex-col gap-4">
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Konteineru noma</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Šķirošanas laukums</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Būvgružu pārstrāde</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Ēku, būvju demontāža</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Sniega izvešana</span>
            </div>
          </div>

          {/* Par uzņēmumu */}
          <div className="w-44 flex flex-col gap-5">
            <span className="text-primary-foreground/40 text-base font-bold leading-6">Par uzņēmumu</span>
            <div className="flex flex-col gap-4">
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Kontakti</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Norēķini</span>
              <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Rekvizīti</span>
            </div>
          </div>

          {/* Darba laiks & Social */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="text-primary-foreground text-xl font-bold leading-7">Darba laiks</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary-foreground text-base font-medium leading-6">P. - Pk.:</span>
                  <span className="text-primary-foreground text-base font-bold leading-6">8:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-foreground text-base font-medium leading-6">S.:</span>
                  <span className="text-primary-foreground text-base font-bold leading-6">8:00 - 12:30</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-foreground text-base font-medium leading-6">Sv.:</span>
                  <span className="text-primary-foreground text-base font-bold leading-6">Pēc vienošanās</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-primary-foreground text-base font-bold leading-6">Seko mums:</span>
              <div className="flex gap-4">
                {/* Facebook */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM13.4766 6C11.3116 6.00001 10.5498 7.0914 10.5498 8.92676V10.2773H9.2002V12.5273H10.5498V19.0557H13.251V12.5273H15.0527L15.292 10.2773H13.251L13.2539 9.15137C13.2539 8.56459 13.3096 8.25001 14.1523 8.25H15.2793V6H13.4766Z" fill="hsl(var(--nikami-blue))"/>
                </svg>
                {/* Instagram */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM11.999 5.59961C10.2623 5.59961 10.0438 5.60761 9.36133 5.63867C8.68039 5.66988 8.21537 5.77739 7.80859 5.93555C7.38774 6.09898 7.03047 6.31809 6.6748 6.67383C6.3188 7.02957 6.09955 7.38681 5.93555 7.80762C5.7769 8.21466 5.66934 8.68031 5.63867 9.36133C5.60815 10.0437 5.59961 10.2622 5.59961 12C5.59961 13.7382 5.60774 13.956 5.63867 14.6387C5.67001 15.3196 5.77752 15.7846 5.93555 16.1914C6.0991 16.6122 6.31813 16.9696 6.67383 17.3252C7.02943 17.6812 7.38695 17.901 7.80762 18.0645C8.21477 18.2227 8.68024 18.3301 9.36133 18.3613C10.0438 18.3924 10.2622 18.4004 12 18.4004C13.7381 18.4004 13.956 18.3924 14.6387 18.3613C15.3197 18.3301 15.7853 18.2227 16.1924 18.0645C16.6132 17.901 16.9696 17.6812 17.3252 17.3252C17.6812 16.9695 17.9005 16.6122 18.0645 16.1914C18.2217 15.7845 18.3293 15.3194 18.3613 14.6387C18.392 13.956 18.4004 13.7382 18.4004 12C18.4004 10.2621 18.392 10.0438 18.3613 9.36133C18.3293 8.68001 18.2218 8.21455 18.0645 7.80762C17.9005 7.38668 17.6812 7.02957 17.3252 6.67383C16.9693 6.31797 16.6136 6.09885 16.1924 5.93555C15.7845 5.77731 15.3188 5.6699 14.6377 5.63867C13.9551 5.60761 13.7373 5.59961 11.999 5.59961Z" fill="hsl(var(--nikami-blue))"/>
                </svg>
                {/* LinkedIn */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM15.1562 9.74707C13.7126 9.74719 13.066 10.5404 12.7051 11.0967V9.93945H9.98535C10.0212 10.7078 9.98535 18.1104 9.98535 18.1104H12.7051V13.5469C12.7051 13.3027 12.723 13.0586 12.7949 12.8838C12.9915 12.396 13.4393 11.8916 14.1904 11.8916C15.1747 11.8917 15.5683 12.6404 15.5684 13.7383V18.1094H18.2871L18.2881 13.4248C18.2881 10.9151 16.9458 9.74707 15.1562 9.74707ZM5.76074 18.1094H8.48047V9.93848H5.76074V18.1094ZM7.13867 6C6.20844 6 5.59972 6.61009 5.59961 7.41113C5.59961 8.19569 6.19053 8.82324 7.10352 8.82324H7.12012C8.06835 8.82324 8.65918 8.19569 8.65918 7.41113C8.64143 6.61014 8.06881 6.00007 7.13867 6Z" fill="hsl(var(--nikami-blue))"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-5">
        <div className="h-px opacity-40 bg-primary-foreground/20" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-primary-foreground/40 text-base font-medium leading-6">
            © 2026 NIKA MI. Visas tiesības aizsargātas.
          </span>
          <img src={bwegLogo} alt="BWEG - Baltic Waste & Energy Group" className="w-24 h-8 object-contain opacity-40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
