import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import uploadIcon from "@/assets/icons/upload.svg";
import crossIcon from "@/assets/icons/cross.svg";
import dropdownIcon from "@/assets/icons/dropdown.svg";

const SERVICE_OPTIONS = [
  { value: "container", label: "Konteineru noma" },
  { value: "sorting", label: "Šķirošanas laukums" },
  { value: "waste", label: "Būvgružu izvešana" },
  { value: "demolition", label: "Demontāžas darbi" },
  { value: "snow", label: "Sniega tīrīšana" },
];

const GetOffer = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [serviceType, setServiceType] = useState("container");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newPhotos = Array.from(files)
      .slice(0, 5 - photos.length)
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
    setPhotos((prev) => [...prev, ...newPhotos].slice(0, 5));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const selectedServiceLabel =
    SERVICE_OPTIONS.find((o) => o.value === serviceType)?.label || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit logic
  };

  return (
    <MainLayout>
      <div className="bg-primary w-full">
        <Navbar variant="dark" />
      </div>

      <div className="bg-nikami-light-blue px-4 sm:px-8 md:px-16 lg:px-28 py-12 md:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-10">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            {t("getOffer.title")}
          </h1>
          <p className="text-foreground text-lg md:text-xl font-medium leading-7 max-w-[933px]">
            {t("getOffer.subtitle")}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Service type selector */}
              <div className="flex flex-col gap-0.5">
                <div className="pl-1">
                  <span className="text-foreground text-sm font-bold leading-5">
                    {t("getOffer.serviceType")}
                  </span>
                  <span className="text-nikami-blue text-sm font-bold leading-5">*</span>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="w-full h-12 pl-5 pr-3 bg-background rounded-xs border border-nikami-blue flex justify-between items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-foreground text-base font-medium leading-6">
                      {selectedServiceLabel}
                    </span>
                    <img
                      src={dropdownIcon}
                      alt=""
                      className={`w-6 h-6 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {serviceDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-background border border-nikami-blue rounded-xs shadow-lg overflow-hidden">
                      {SERVICE_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setServiceType(opt.value);
                            setServiceDropdownOpen(false);
                          }}
                          className={`w-full px-5 py-2.5 text-left text-base font-medium transition-colors hover:bg-nikami-light-blue ${
                            opt.value === serviceType
                              ? "bg-nikami-light-blue text-nikami-blue font-semibold"
                              : "text-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-0.5">
                <div className="pl-1">
                  <span className="text-foreground text-sm font-bold leading-5">
                    {t("getOffer.name")}
                  </span>
                  <span className="text-nikami-blue text-sm font-bold leading-5">*</span>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 pl-5 pr-3 bg-background rounded-xs border border-muted-foreground/30 focus:border-nikami-blue outline-none text-foreground text-base font-medium leading-6 transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-0.5">
                <div className="pl-1">
                  <span className="text-foreground text-sm font-bold leading-5">
                    {t("getOffer.phone")}
                  </span>
                  <span className="text-nikami-blue text-sm font-bold leading-5">*</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 pl-5 pr-3 bg-background rounded-xs border border-muted-foreground/30 focus:border-nikami-blue outline-none text-foreground text-base font-medium leading-6 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-0.5">
                <div className="pl-1">
                  <span className="text-foreground text-sm font-bold leading-5">
                    {t("getOffer.email")}
                  </span>
                  <span className="text-nikami-blue text-sm font-bold leading-5">*</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-5 pr-3 bg-background rounded-xs border border-muted-foreground/30 focus:border-nikami-blue outline-none text-foreground text-base font-medium leading-6 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-9">
              {/* Comments */}
              <div className="flex flex-col gap-0.5">
                <div className="pl-1">
                  <span className="text-foreground text-sm font-bold leading-5">
                    {t("getOffer.comments")}
                  </span>
                </div>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="h-60 pl-5 pr-3 pt-5 bg-background rounded-xs border border-muted-foreground/30 focus:border-nikami-blue outline-none text-foreground text-base font-medium leading-6 resize-none transition-colors"
                />
              </div>

              {/* Photo upload */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex flex-col gap-0.5">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={photos.length >= 5}
                    className="px-8 py-3 rounded-xs border border-nikami-blue flex items-center gap-2.5 cursor-pointer hover:bg-nikami-light-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <img src={uploadIcon} alt="" className="w-5 h-5" />
                    <span className="text-primary text-base font-semibold leading-6">
                      {t("getOffer.uploadPhoto")}
                    </span>
                  </button>
                  <span className="text-foreground text-xs font-medium leading-4">
                    {t("getOffer.photoLimit")}
                  </span>
                </div>

                {/* Photo previews + upload button in one row */}
                <div className="flex items-center gap-2 flex-wrap">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative w-[46px] h-[46px] rounded-sm overflow-hidden border border-muted-foreground/20">
                      <img
                        src={photo.preview}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-0.5 -right-0.5 w-5 h-4 bg-nikami-blue rounded-sm flex items-center justify-center"
                      >
                        <img src={crossIcon} alt="Remove" className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  ))}

                  {photos.length < 5 && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-[46px] h-[46px] rounded-sm border border-nikami-blue flex items-center justify-center cursor-pointer hover:bg-nikami-light-blue transition-colors"
                    >
                      <img src={uploadIcon} alt="" className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 mt-2">
            {/* Privacy checkbox */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPrivacyAccepted(!privacyAccepted)}>
              <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center">
                {privacyAccepted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" fill="hsl(var(--nikami-blue))" stroke="hsl(var(--nikami-blue))" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" stroke="hsl(var(--nikami-blue))" />
                  </svg>
                )}
                {privacyAccepted && (
                  <svg className="absolute" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M0.650391 5.63062L4.15039 8.63062L10.6504 0.630615" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-base font-bold leading-6">
                {t("getOffer.privacy")}{" "}
                <span className="underline">{t("getOffer.privacyLink")}</span>.
              </span>
            </div>

            {/* Marketing checkbox */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setMarketingAccepted(!marketingAccepted)}>
              <div className="w-6 h-6 relative flex-shrink-0 flex items-center justify-center">
                {marketingAccepted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" fill="hsl(var(--nikami-blue))" stroke="hsl(var(--nikami-blue))" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="15" stroke="hsl(var(--nikami-blue))" />
                  </svg>
                )}
                {marketingAccepted && (
                  <svg className="absolute" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M0.650391 5.63062L4.15039 8.63062L10.6504 0.630615" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-base font-bold leading-6">
                {t("getOffer.marketing")}
              </span>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3 bg-primary rounded-xs text-primary-foreground text-base font-semibold leading-6 hover:bg-primary/90 transition-colors"
          >
            {t("getOffer.submit")}
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default GetOffer;
