import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="w-full bg-background flex flex-col min-h-screen">
      <div className="bg-primary">
        <Navbar />
      </div>

      <div className="relative flex-1 min-h-[400px] sm:min-h-[480px] md:min-h-[580px] px-6 sm:px-12 md:px-28 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 flex flex-col justify-start items-start gap-8 sm:gap-12 overflow-hidden">
        {/* Giant 404 background text */}
        <span className="absolute -right-4 sm:-right-8 md:-right-8 lg:-right-12 -bottom-8 sm:-bottom-12 md:-bottom-16 lg:top-[101px] lg:bottom-auto text-[180px] sm:text-[480px] md:text-[480px] lg:text-[565px] font-black uppercase leading-none text-nikami-light-blue select-none pointer-events-none z-0">
          404
        </span>

        <div className="relative z-10 flex flex-col gap-5">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-tight md:leading-[58px]">
            Lapa nav atrasta
          </h1>
        </div>

        <div className="relative z-10">
          <a
            href="/"
            className="inline-flex justify-center items-center px-4 py-3 bg-primary rounded-sm text-primary-foreground text-sm sm:text-base font-semibold leading-6"
          >
            Uz sākumlapu
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
