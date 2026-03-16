import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import WeChatButton from "@/components/WeChatButton";
import SenderSection from "./components/SenderSection";
import WasteCardsSection from "./components/WasteCardsSection";
import TransporterSection from "./components/TransporterSection";
import uploadIcon from "@/assets/icons/upload.svg";
import crossIcon from "@/assets/icons/cross.svg";

const WasteSubmission = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [materialsAcknowledged, setMaterialsAcknowledged] = useState(false);
  const [notes, setNotes] = useState("");
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="bg-background">
        <Navbar variant="light" />
      </div>
      <section className="px-4 sm:px-6 md:px-10 lg:px-28 pt-8 sm:pt-14 pb-12 sm:pb-20">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* Title */}
          <h1 className="text-primary text-2xl sm:text-4xl lg:text-6xl font-black uppercase leading-tight lg:leading-[58px]">
            {t("wasteSubmission.title")}
          </h1>

          {/* Sender */}
          <SenderSection />

          {/* Waste Cards inside sender box */}
          <div className="p-4 sm:p-6 md:p-10 bg-secondary flex flex-col gap-6 sm:gap-8">
            <WasteCardsSection />

            {/* Materials acknowledgment */}
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 rounded-xs border flex items-center justify-center ${
                  materialsAcknowledged ? "bg-nikami-blue border-nikami-blue" : "border-nikami-blue"
                }`}
                onClick={() => setMaterialsAcknowledged(!materialsAcknowledged)}
              >
                {materialsAcknowledged && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.materialsAck")}{" "}
                <span className="text-primary underline cursor-pointer">{t("wasteSubmission.materialsAckLink")}</span>.
              </span>
            </label>

            {/* Notes */}
            <div className="flex flex-col gap-0.5">
              <label className="pl-2.5 text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.notes")}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t("wasteSubmission.notesPlaceholder")}
                className="w-full h-28 sm:h-36 px-4 sm:px-5 pt-4 sm:pt-5 bg-background rounded-xs border border-border text-sm sm:text-base font-medium leading-5 sm:leading-6 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-nikami-blue"
              />
            </div>

            {/* Photo upload */}
            <div className="flex flex-col sm:flex-row items-start gap-5">
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
                  <span className="text-primary text-sm sm:text-base font-semibold leading-6">
                    {t("wasteSubmission.uploadPhoto")}
                  </span>
                </button>
                <span className="text-foreground text-xs font-medium leading-4">{t("wasteSubmission.photoLimit")}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative w-12 h-12 rounded-sm overflow-hidden border border-muted-foreground/20"
                  >
                    <img src={photo.preview} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-0.5 -right-0.5 w-5 h-4 bg-nikami-blue rounded-sm flex items-center justify-center"
                    >
                      <img src={crossIcon} alt="Remove" className="w-2.5 h-2.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transporter */}
          <TransporterSection />

          {/* Consent checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 rounded-xs border flex items-center justify-center ${
                  privacyAccepted ? "bg-nikami-blue border-nikami-blue" : "border-nikami-blue"
                }`}
                onClick={() => setPrivacyAccepted(!privacyAccepted)}
              >
                {privacyAccepted && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.privacyText")}{" "}
                <span className="text-primary underline cursor-pointer">{t("wasteSubmission.privacyLink")}</span>.
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 rounded-xs border flex items-center justify-center ${
                  marketingAccepted ? "bg-nikami-blue border-nikami-blue" : "border-nikami-blue"
                }`}
                onClick={() => setMarketingAccepted(!marketingAccepted)}
              >
                {marketingAccepted && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.marketingText")}
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <button className="flex-1 flex justify-start items-start">
              <div className="flex-1 px-8 py-3 bg-primary rounded-l-xs flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity">
                <span className="text-primary-foreground text-base font-semibold leading-6">
                  {t("wasteSubmission.submit")}
                </span>
              </div>
              <div className="w-11 self-stretch px-3 py-3 bg-nikami-blue rounded-r-xs flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 20 15" fill="none" className="w-5 h-5">
                  <path
                    d="M17.7806 8.03104L11.0306 14.781C10.8899 14.9218 10.699 15.0008 10.5 15.0008C10.301 15.0008 10.1101 14.9218 9.96937 14.781C9.82864 14.6403 9.74958 14.4494 9.74958 14.2504C9.74958 14.0514 9.82864 13.8605 9.96937 13.7198L15.4397 8.25042H0.75C0.551088 8.25042 0.360322 8.1714 0.21967 8.03075C0.0790178 7.8901 0 7.69933 0 7.50042C0 7.3015 0.0790178 7.11074 0.21967 6.97009C0.360322 6.82943 0.551088 6.75042 0.75 6.75042H15.4397L9.96937 1.28104C9.82864 1.14031 9.74958 0.94944 9.74958 0.750417C9.74958 0.551394 9.82864 0.360523 9.96937 0.219792C10.1101 0.0790615 10.301 0 10.5 0C10.699 0 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8504 7.03945 17.9057 7.12216 17.9434 7.21321C17.9812 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9812 7.69657 17.9434 7.78762C17.9057 7.87867 17.8504 7.96139 17.7806 8.03104Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      <WeChatButton />
    </div>
  );
};

export default WasteSubmission;
