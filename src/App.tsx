import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contacts from "./pages/Contacts.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./lib/i18n";
import OrderContainer from "./pages/OrderContainer/OrderContainer.tsx";
import Promotions from "./pages/Promotions.tsx";
import GetOffer from "./pages/GetOffer/GetOffer.tsx";
import Certificates from "./pages/Certificates.tsx";
import Demolition from "./pages/Demolition.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/par-mums" element={<About />} />
          <Route path="/kontakti" element={<Contacts />} />
          <Route path="/order-container" element={<OrderContainer />} />
          <Route path="/akcijas" element={<Promotions />} />
          <Route path="/sertifikati" element={<Certificates />} />
          <Route path="/demontaza" element={<Demolition />} />
          <Route path="/sanemt-piedavajumu" element={<GetOffer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
