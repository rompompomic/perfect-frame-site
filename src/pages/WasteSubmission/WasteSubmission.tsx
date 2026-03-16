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
                  materialsAcknowledged
                    ? "bg-nikami-blue border-nikami-blue"
                    : "border-nikami-blue"
                }`}
                onClick={() => setMaterialsAcknowledged(!materialsAcknowledged)}
              >
                {materialsAcknowledged && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.materialsAck")}{" "}
                <span className="text-primary underline cursor-pointer">
                  {t("wasteSubmission.materialsAckLink")}
                </span>
                .
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={handlePhotoUpload}
                  className="px-6 sm:px-8 py-3 rounded-xs border border-nikami-blue flex items-center gap-2.5 hover:opacity-80 transition-opacity"
                >
                  <img src={uploadIcon} alt="" className="w-5 h-5" />
                  <span className="text-primary text-sm sm:text-base font-semibold leading-6">
                    {t("wasteSubmission.uploadPhoto")}
                  </span>
                </button>
                <span className="text-foreground text-xs font-medium leading-4">
                  {t("wasteSubmission.photoLimit")}
                </span>
              </div>
              {photos.length > 0 && (
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {photos.map((photo, i) => (
                    <div key={i} className="w-11 h-11 relative">
                      <img
                        src={photo}
                        alt=""
                        className="w-11 h-11 rounded-xs object-cover"
                      />
                      <button
                        onClick={() => removePhoto(i)}
                        className="absolute -top-1 -right-1 w-5 h-4 bg-nikami-blue rounded-xs flex items-center justify-center"
                      >
                        <span className="text-primary-foreground text-xs">✕</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Transporter */}
          <TransporterSection />

          {/* Consent checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 rounded-xs border flex items-center justify-center ${
                  privacyAccepted
                    ? "bg-nikami-blue border-nikami-blue"
                    : "border-nikami-blue"
                }`}
                onClick={() => setPrivacyAccepted(!privacyAccepted)}
              >
                {privacyAccepted && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.privacyText")}{" "}
                <span className="text-primary underline cursor-pointer">
                  {t("wasteSubmission.privacyLink")}
                </span>
                .
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 rounded-xs border flex items-center justify-center ${
                  marketingAccepted
                    ? "bg-nikami-blue border-nikami-blue"
                    : "border-nikami-blue"
                }`}
                onClick={() => setMarketingAccepted(!marketingAccepted)}
              >
                {marketingAccepted && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-foreground text-sm sm:text-base font-bold leading-5 sm:leading-6">
                {t("wasteSubmission.marketingText")}
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="flex">
            <button className="w-full sm:w-auto sm:min-w-[320px] flex">
              <div className="flex-1 px-6 sm:px-8 py-3 bg-nikami-blue rounded-l-xs flex justify-center items-center hover:opacity-90 transition-opacity">
                <span className="text-primary-foreground text-sm sm:text-base font-semibold leading-6">
                  {t("wasteSubmission.submit")}
                </span>
              </div>
              <div className="w-11 px-3 py-3 bg-accent rounded-r-xs flex justify-center items-center hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
