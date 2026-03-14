import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import discountIcon from "@/assets/icons/discount.svg";
import logoBlack from "@/assets/logo-black.png";
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
import { useAuthModal } from "@/features/AuthModal/UseAuthModal";
import { AuthModal } from "@/features/AuthModal/AuthModal";

interface NavbarProps {
  variant?: "dark" | "light";
}

const Navbar = ({ variant = "dark" }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const auth = useAuthModal();

  const isLight = variant === "light";

  const textColor = isLight ? "text-foreground" : "text-primary-foreground";
  const borderColor = isLight ? "border-muted-foreground/20" : "border-primary-foreground/20";
  const dividerBg = isLight ? "bg-muted-foreground/20" : "bg-primary-foreground/20";
  const btnPrimaryBg = isLight ? "bg-primary" : "bg-primary";
  const btnPrimaryText = "text-primary-foreground";
  const btnOutlineText = isLight ? "text-primary" : "text-primary-foreground";
  const hamburgerText = isLight ? "text-foreground" : "text-primary-foreground";
  const mobileSubText = isLight ? "text-foreground/80" : "text-primary-foreground/80";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`${isLight ? "bg-white" : "bg-transparent"} w-full px-4 sm:px-6 lg:px-10 py-3 flex flex-col justify-center items-start gap-3`}>
      {/* Top bar */}
      <div className="self-stretch flex justify-between items-center">
        <Link to="/" className="w-20 h-9 sm:w-24 sm:h-11 relative block">
          <img
            src={isLight ? logoBlack : logoWhite}
            alt="NIKAMI logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop contact & actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className={`${textColor} text-sm lg:text-base font-semibold leading-6`}>
                {t("navbar.phone")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
              <span className={`${textColor} text-sm lg:text-base font-semibold leading-6`}>
                {t("navbar.address")}
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
              <span className={`${textColor} text-base font-semibold leading-6`}>
                {t("navbar.email")}
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate("/order-container")}
              className={`px-4 py-3 ${btnPrimaryBg} rounded-sm ${btnPrimaryText} text-base font-semibold leading-6`}>
              {t("navbar.orderContainer")}
            </button>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className={`px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue ${btnOutlineText} text-base font-semibold leading-6`}>
              {t("navbar.getOffer")}
            </button>
            <button
              onClick={() => auth.open("signin")}
              className={`px-4 py-3 bg-primary rounded-sm text-white text-base font-semibold leading-6`}>
              {t("navbar.login")}
            </button>
          </div>
          <button className="relative px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" onClick={() => navigate("/cart")} />
            <span
              className={`absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full ${isLight ? "text-white" : "text-primary-foreground"} text-xs font-medium flex items-center justify-center`}>
              4
            </span>
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="relative p-2 rounded-sm outline outline-1 outline-nikami-blue flex items-center">
            <ShoppingCart className="w-5 h-5 text-nikami-blue" onClick={() => navigate("/cart")} />
            <span
              className={`absolute -top-1.5 -right-1.5 w-4 h-4 bg-nikami-blue rounded-full ${isLight ? "text-white" : "text-primary-foreground"} text-xs font-medium flex items-center justify-center`}>
              4
            </span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${hamburgerText}`}
            aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden self-stretch flex flex-col gap-4 pt-4 pb-2 border-t ${borderColor} animate-in slide-in-from-top-2 duration-200`}>
          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-nikami-blue" fill="currentColor" strokeWidth={0} />
              <span className={`${textColor} text-sm font-semibold`}>{t("navbar.phone")}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
              <span className={`${textColor} text-sm font-semibold`}>{t("navbar.address")}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
              <span className={`${textColor} text-sm font-semibold`}>{t("navbar.email")}</span>
            </div>
          </div>

          <div className={`h-px ${dividerBg}`} />

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <Link
              to="/par-mums"
              className={`${textColor} text-base font-medium cursor-pointer hover:opacity-80`}>
              {t("navbar.about")}
            </Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center gap-1 ${textColor} text-base font-semibold cursor-pointer hover:opacity-80`}>
              {t("navbar.services")}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {[
                  t("navbar.serviceLinks.containerRental"),
                  t("navbar.serviceLinks.sortingArea"),
                  t("navbar.serviceLinks.constructionWaste"),
                  t("navbar.serviceLinks.demolition"),
                  t("navbar.serviceLinks.snowRemoval"),
                  t("navbar.serviceLinks.greenCertificates"),
                ].map((label, index) => (
                  <span
                    key={index}
                    className={`${mobileSubText} text-sm font-medium cursor-pointer hover:opacity-80`}>
                    {label}
                  </span>
                ))}
                <div className={`h-px ${dividerBg} my-1`} />
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <img src={discountIcon} alt="Akcijas" className="w-5 h-5" />
                  <span className="text-nikami-blue text-sm font-bold">
                    {t("navbar.promotions")}
                  </span>
                </div>
              </div>
            )}
            <Link
              to="/kontakti"
              className={`${textColor} text-base font-semibold cursor-pointer hover:opacity-80`}>
              {t("navbar.contacts")}
            </Link>
          </div>

          <div className={`h-px ${dividerBg}`} />

          {/* Language switcher */}
          <div className="flex items-center gap-4">
            <span
              className={`${textColor} text-sm font-semibold ${i18n.language === "lv" ? "opacity-40" : "cursor-pointer hover:opacity-80"}`}
              onClick={() => i18n.language !== "lv" && changeLanguage("lv")}>
              LV
            </span>
            <span
              className={`${textColor} text-sm font-semibold ${i18n.language === "en" ? "opacity-40" : "cursor-pointer hover:opacity-80"}`}
              onClick={() => i18n.language !== "en" && changeLanguage("en")}>
              EN
            </span>
            <span
              className={`${textColor} text-sm font-semibold ${i18n.language === "ru" ? "opacity-40" : "cursor-pointer hover:opacity-80"}`}
              onClick={() => i18n.language !== "ru" && changeLanguage("ru")}>
              RU
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/order-container")}
              className={`w-full px-4 py-3 ${btnPrimaryBg} rounded-sm ${btnPrimaryText} text-sm font-semibold`}>
              {t("navbar.orderContainer")}
            </button>
            <button
              onClick={() => navigate("/sanemt-piedavajumu")}
              className={`w-full px-4 py-3 rounded-sm outline outline-1 outline-nikami-blue ${btnOutlineText} text-sm font-semibold`}>
              {t("navbar.getOffer")}
            </button>
            <button
              onClick={() => auth.open("signin")}
              className={`w-full px-4 py-3 bg-primary rounded-sm text-white text-sm font-semibold`}>
              {t("navbar.login")}
            </button>
          </div>
        </div>
      )}

      {/* Desktop bottom bar */}
      <div className="hidden md:block self-stretch">
        <div className={`h-px ${dividerBg} mb-3`} />
        <div className="flex justify-between items-center">
          <div className="h-11 flex items-center gap-6 lg:gap-10 overflow-hidden">
            <Link
              to="/par-mums"
              className={`${textColor} text-sm lg:text-base font-medium leading-6 cursor-pointer hover:opacity-80`}>
              {t("navbar.about")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-0.5 cursor-pointer hover:opacity-80 outline-none">
                <span className={`${textColor} text-sm lg:text-base font-semibold leading-6`}>
                  {t("navbar.services")}
                </span>
                <ChevronDown className={`w-4 h-4 ${textColor}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="px-6 py-3 bg-secondary rounded-xs shadow-[0px_2px_12px_0px_rgba(0,0,0,0.15)] flex flex-col gap-2 min-w-[220px]">
                {[
                  { label: t("navbar.serviceLinks.containerRental"), to: "/order-container" },
                  { label: t("navbar.serviceLinks.sortingArea"), to: "/skirosanas-laukumi" },
                  { label: t("navbar.serviceLinks.constructionWaste"), to: "/buvgruzu-izvesana" },
                  { label: t("navbar.serviceLinks.demolition"), to: "/demontaza" },
                  { label: t("navbar.serviceLinks.snowRemoval"), to: "/sniega-tirisana" },
                ].map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="text-primary text-base font-bold leading-6 cursor-pointer px-0 py-0 focus:bg-transparent hover:opacity-70">
                    <Link to={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="text-primary text-base font-bold leading-6 cursor-pointer px-0 py-0 focus:bg-transparent hover:opacity-70">
                  <Link to="/sertifikati">
                    {t("navbar.serviceLinks.greenCertificates")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-muted-foreground/30" />
                <DropdownMenuItem className="flex items-center gap-2.5 text-nikami-blue text-base font-bold leading-6 cursor-pointer px-0 py-0 focus:bg-transparent hover:opacity-70">
                  <Link to="/akcijas" className="flex items-center gap-2.5">
                    <img src={discountIcon} alt="Akcijas" className="w-5 h-5" />
                    {t("navbar.promotions")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/kontakti"
              className={`${textColor} text-sm lg:text-base font-semibold leading-6 cursor-pointer hover:opacity-80`}>
              {t("navbar.contacts")}
            </Link>
          </div>
          <div className="flex items-center overflow-hidden">
            <div
              className={`w-10 h-6 px-5 border-r ${borderColor} flex justify-center items-center overflow-hidden`}>
              <span
                className={`px-2 py-1 ${i18n.language === "lv" ? "opacity-40" : "cursor-pointer hover:opacity-80"} ${textColor} text-sm lg:text-base font-semibold leading-6`}
                onClick={() => i18n.language !== "lv" && changeLanguage("lv")}>
                LV
              </span>
            </div>
            <div
              className={`w-10 h-6 px-5 border-r ${borderColor} flex justify-center items-center overflow-hidden`}>
              <span
                className={`px-2 py-1 ${i18n.language === "en" ? "opacity-40" : "cursor-pointer hover:opacity-80"} ${textColor} text-sm lg:text-base font-semibold leading-6`}
                onClick={() => i18n.language !== "en" && changeLanguage("en")}>
                EN
              </span>
            </div>
            <div className="w-10 h-6 px-5 flex justify-center items-center overflow-hidden">
              <span
                className={`px-2 py-1 ${i18n.language === "ru" ? "opacity-40" : "cursor-pointer hover:opacity-80"} ${textColor} text-sm lg:text-base font-semibold leading-6`}
                onClick={() => i18n.language !== "ru" && changeLanguage("ru")}>
                RU
              </span>
            </div>
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={auth.isOpen}
        screen={auth.screen}
        email={auth.email}
        setEmail={auth.setEmail}
        navigate={auth.navigate}
        onClose={auth.close}
        phone={auth.phone}
        setPhone={auth.setPhone}
      />
    </nav>
  );
};

export default Navbar;
