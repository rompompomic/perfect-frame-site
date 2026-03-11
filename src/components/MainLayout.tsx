import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full bg-background flex flex-col min-h-screen">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
