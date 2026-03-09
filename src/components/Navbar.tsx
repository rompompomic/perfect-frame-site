import { useState } from "react";
import { Phone, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import discountIcon from "@/assets/icons/discount.svg";
import logoWhite from "@/assets/logo-white.webp";
import mapPinIcon from "@/assets/icons/MapPin.svg";
import emailIcon from "@/assets/icons/email.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  "Konteineru noma",
  "Šķirošanas laukums",
  "Būvgružu pārstrāde",
  "Ēku un būvju demontāža",
  "Sniega izvešana",
  "Zaļo ēku sertifikāti",
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-10 py-3 flex flex-col justify-center items-start gap-3">
      {/* Top bar */}
      <div className="self-stretch flex justify-between items-center">
        <div className="w-20 h-9 sm:w-24 sm:h-11 relative">
          <img src={logoWhite} alt="NIKAMI logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop contact & actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className="text-primary-foreground text-sm lg:text-base font-semibold leading-6">371 28 60 1111</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
              <span className="text-primary-foreground text-sm lg:text-base font-semibold leading-6">Kaudzīšu iela 59</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
              <span className="text-primary-foreground text-base font-semibold leading-6">klienti@nikami.lv</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-3 bg-primary rounded-sm text-primary-foreground text-base font-semibold leading-6">
              Pasūtīt konteineru
            </button>
            <button className="px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue text-primary-foreground text-base font-semibold leading-6">
              Saņemt piedāvājumu
            </button>
            <button className="px-4 py-3 bg-primary rounded-sm text-primary-foreground text-base font-semibold leading-6">
              Login
            </button>
          </div>
          <button className="relative px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full text-primary-foreground text-xs font-medium flex items-center justify-center">4</span>
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="relative p-2 rounded-sm outline outline-1 outline-nikami-blue flex items-center">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full text-primary-foreground text-xs font-medium flex items-center justify-center">4</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden self-stretch flex flex-col gap-4 pt-4 pb-2 border-t border-primary-foreground/20 animate-in slide-in-from-top-2 duration-200">
          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className="text-primary-foreground text-sm font-semibold">371 28 60 1111</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
              <span className="text-primary-foreground text-sm font-semibold">Kaudzīšu iela 59</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
              <span className="text-primary-foreground text-sm font-semibold">klienti@nikami.lv</span>
            </div>
          </div>

          <div className="h-px bg-primary-foreground/20" />

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <span className="text-primary-foreground text-base font-medium cursor-pointer hover:opacity-80">Par mums</span>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-1 text-primary-foreground text-base font-semibold cursor-pointer hover:opacity-80"
            >
              Pakalpojumi
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {serviceLinks.map((label) => (
                  <span key={label} className="text-primary-foreground/80 text-sm font-medium cursor-pointer hover:opacity-80">
                    {label}
                  </span>
                ))}
                <div className="h-px bg-primary-foreground/20 my-1" />
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <img src={discountIcon} alt="Akcijas" className="w-5 h-5" />
                  <span className="text-nikami-blue text-sm font-bold">Akcijas</span>
                </div>
              </div>
            )}
            <span className="text-primary-foreground text-base font-semibold cursor-pointer hover:opacity-80">Kontakti</span>
          </div>

          <div className="h-px bg-primary-foreground/20" />

          {/* Language switcher */}
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/40 text-sm font-semibold">LV</span>
            <span className="text-primary-foreground text-sm font-semibold cursor-pointer hover:opacity-80">EN</span>
            <span className="text-primary-foreground text-sm font-semibold cursor-pointer hover:opacity-80">RU</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-2">
            <button className="w-full px-4 py-3 bg-primary rounded-sm text-primary-foreground text-sm font-semibold">
              Pasūtīt konteineru
            </button>
            <button className="w-full px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue text-primary-foreground text-sm font-semibold">
              Saņemt piedāvājumu
            </button>
            <button className="w-full px-4 py-3 bg-primary rounded-sm text-primary-foreground text-sm font-semibold">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Desktop bottom bar */}
      <div className="hidden md:block self-stretch">
        <div className="h-px bg-primary-foreground/20 mb-3" />
        <div className="flex justify-between items-center">
          <div className="h-11 flex items-center gap-6 lg:gap-10 overflow-hidden">
            <span className="text-primary-foreground text-sm lg:text-base font-medium leading-6 cursor-pointer hover:opacity-80">Par mums</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-0.5 cursor-pointer hover:opacity-80 outline-none">
                <span className="text-primary-foreground text-sm lg:text-base font-semibold leading-6">Pakalpojumi</span>
                <ChevronDown className="w-4 h-4 text-primary-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="px-6 py-3 bg-secondary rounded-xs shadow-[0px_2px_12px_0px_rgba(0,0,0,0.15)] flex flex-col gap-2 min-w-[220px]">
                {serviceLinks.map((label) => (
                  <DropdownMenuItem
                    key={label}
                    className="text-primary text-base font-bold leading-6 cursor-pointer px-0 py-0 focus:bg-transparent hover:opacity-70"
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-muted-foreground/30" />
                <DropdownMenuItem className="flex items-center gap-2.5 text-nikami-blue text-base font-bold leading-6 cursor-pointer px-0 py-0 focus:bg-transparent hover:opacity-70">
                  <img src={discountIcon} alt="Akcijas" className="w-5 h-5" />
                  Akcijas
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-primary-foreground text-sm lg:text-base font-semibold leading-6 cursor-pointer hover:opacity-80">Kontakti</span>
          </div>
          <div className="flex items-center overflow-hidden">
            <div className="w-10 h-6 px-5 border-r border-primary-foreground/20 flex justify-center items-center overflow-hidden">
              <span className="px-2 py-1 opacity-40 text-primary-foreground text-sm lg:text-base font-semibold leading-6">LV</span>
            </div>
            <div className="w-10 h-6 px-5 border-r border-primary-foreground/20 flex justify-center items-center overflow-hidden">
              <span className="px-2 py-1 text-primary-foreground text-sm lg:text-base font-semibold leading-6 cursor-pointer hover:opacity-80">EN</span>
            </div>
            <div className="w-10 h-6 px-5 flex justify-center items-center overflow-hidden">
              <span className="px-2 py-1 text-primary-foreground text-sm lg:text-base font-semibold leading-6 cursor-pointer hover:opacity-80">RU</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
