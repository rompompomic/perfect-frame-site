import { Phone, MapPin, AtSign, ShoppingCart, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.webp";

const Navbar = () => {
  return (
    <nav className="w-full px-6 lg:px-10 py-3 flex flex-col gap-3">
      {/* Top bar */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="w-24 h-11">
          <img src={logoWhite} alt="NIKAMI logo" className="w-24 h-11 object-contain" />
        </div>
        <div className="flex items-center gap-4 lg:gap-8 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className="text-primary-foreground text-sm lg:text-base font-semibold">371 28 60 1111</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className="text-primary-foreground text-sm lg:text-base font-semibold">Kaudzīšu iela 59</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <AtSign className="w-5 h-5 text-nikami-blue" />
              <span className="text-primary-foreground text-sm lg:text-base font-semibold">klienti@nikami.lv</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2.5 bg-primary rounded-sm text-primary-foreground text-sm font-semibold">
              Pasūtīt konteineru
            </button>
            <button className="px-4 py-2.5 rounded-sm border border-nikami-blue text-primary-foreground text-sm font-semibold">
              Saņemt piedāvājumu
            </button>
            <button className="px-4 py-2.5 bg-primary rounded-sm text-primary-foreground text-sm font-semibold">
              Login
            </button>
          </div>
          <button className="relative px-3 py-2.5 rounded-sm border border-nikami-blue flex items-center">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full text-primary-foreground text-[10px] font-medium flex items-center justify-center">4</span>
          </button>
        </div>
      </div>

      <div className="h-px bg-primary-foreground/20" />

      {/* Bottom bar */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <span className="text-primary-foreground text-base font-medium cursor-pointer hover:opacity-80">Par mums</span>
          <div className="flex items-center gap-0.5 cursor-pointer hover:opacity-80">
            <span className="text-primary-foreground text-base font-semibold">Pakalpojumi</span>
            <ChevronDown className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-primary-foreground text-base font-semibold cursor-pointer hover:opacity-80">Kontakti</span>
        </div>
        <div className="flex items-center">
          <div className="px-5 border-r border-primary-foreground/20 flex items-center">
            <span className="px-2 py-1 text-primary-foreground text-base font-semibold opacity-40 cursor-pointer">LV</span>
          </div>
          <div className="px-5 border-r border-primary-foreground/20 flex items-center">
            <span className="px-2 py-1 text-primary-foreground text-base font-semibold cursor-pointer hover:opacity-80">EN</span>
          </div>
          <div className="px-5 flex items-center">
            <span className="px-2 py-1 text-primary-foreground text-base font-semibold cursor-pointer hover:opacity-80">RU</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
