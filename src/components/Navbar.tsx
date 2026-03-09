import { Phone, ShoppingCart, ChevronDown } from "lucide-react";
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
  return (
    <nav className="w-full px-10 py-3 flex flex-col justify-center items-start gap-3">
      {/* Top bar */}
      <div className="self-stretch flex justify-between items-center">
        <div className="w-24 h-11 relative">
          <img src={logoWhite} alt="NIKAMI logo" className="w-24 h-11 object-contain" />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 overflow-hidden">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
                <span className="text-primary-foreground text-base font-semibold leading-6">371 28 60 1111</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
                <span className="text-primary-foreground text-base font-semibold leading-6">Kaudzīšu iela 59</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
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
          </div>
          <button className="relative px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full text-primary-foreground text-xs font-medium flex items-center justify-center">4</span>
          </button>
        </div>
      </div>

      <div className="self-stretch h-px bg-primary-foreground/20" />

      {/* Bottom bar */}
      <div className="self-stretch flex justify-between items-center">
        <div className="h-11 flex items-center gap-10 overflow-hidden">
          <span className="text-primary-foreground text-base font-medium leading-6 cursor-pointer hover:opacity-80">Par mums</span>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-0.5 cursor-pointer hover:opacity-80 outline-none">
              <span className="text-primary-foreground text-base font-semibold leading-6">Pakalpojumi</span>
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
          <span className="text-primary-foreground text-base font-semibold leading-6 cursor-pointer hover:opacity-80">Kontakti</span>
        </div>
        <div className="flex items-center overflow-hidden">
          <div className="w-10 h-6 px-5 border-r border-primary-foreground/20 flex justify-center items-center overflow-hidden">
            <span className="px-2 py-1 opacity-40 text-primary-foreground text-base font-semibold leading-6">LV</span>
          </div>
          <div className="w-10 h-6 px-5 border-r border-primary-foreground/20 flex justify-center items-center overflow-hidden">
            <span className="px-2 py-1 text-primary-foreground text-base font-semibold leading-6 cursor-pointer hover:opacity-80">EN</span>
          </div>
          <div className="w-10 h-6 px-5 flex justify-center items-center overflow-hidden">
            <span className="px-2 py-1 text-primary-foreground text-base font-semibold leading-6 cursor-pointer hover:opacity-80">RU</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
