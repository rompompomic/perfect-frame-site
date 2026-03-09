import { Clock } from "lucide-react";
import mapsImage from "@/assets/maps.webp";

const MapSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-1">
        {/* Map */}
        <div className="flex-1 relative min-h-[280px]">
          <img src={mapsImage} alt="Map showing location" className="w-full h-full object-cover" />
        </div>

        {/* Info card */}
        <div className="w-full md:w-[500px] lg:w-[598px] p-5 bg-primary flex flex-col gap-8">
          <h3 className="text-primary-foreground text-2xl lg:text-3xl font-black uppercase leading-tight">
            Gaidīsim Jūs mūsu šķirošanas laukumā - Kaudzīšu ielā 59
          </h3>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-primary-foreground/40" />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-nikami-blue" />
                <span className="text-primary-foreground text-base font-bold leading-6">Darba laiki:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-primary-foreground text-sm lg:text-base font-medium leading-6">
                <span>P.-Pk.: 8:00 - 17:00,</span>
                <span>S.: 8:00 - 12:30,</span>
                <span>Sv.: pēc vienošanās</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
