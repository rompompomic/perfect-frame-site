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
import ProfilePage from "./pages/Profile/Profile.tsx";
import OrdersPage from "./pages/Orders/Orders.tsx";
import OrderDetailPage from "./pages/OrderDetails/OrderDetails.tsx";
import InvoicesPage from "./pages/Invoices/Invoices.tsx";
import InvoiceDetailPage from "./pages/InvoiceDetail/InvoiceDetail.tsx";
import CartPage from "./pages/Cart/Cart.tsx";
import CheckoutPage from "./pages/Checkout/Checkout.tsx";
import Promotions from "./pages/Promotions.tsx";
import GetOffer from "./pages/GetOffer/GetOffer.tsx";
import Certificates from "./pages/Certificates.tsx";
import Demolition from "./pages/Demolition.tsx";
import SortingArea from "./pages/SortingArea.tsx";
import SnowRemoval from "./pages/SnowRemoval.tsx";
import SortingAreaPage from "./pages/SortingAreaPage.tsx";
import WasteSubmission from "./pages/WasteSubmission/WasteSubmission.tsx";


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
          <Route path="/buvgruzu-izvesana" element={<SortingArea />} />
          <Route path="/sniega-tirisana" element={<SnowRemoval />} />
          <Route path="/skirosanas-laukumi" element={<SortingAreaPage />} />
          <Route path="/atkritumu-nodosana" element={<WasteSubmission />} />
          <Route path="/sanemt-piedavajumu" element={<GetOffer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:id" element={<OrderDetailPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/invoices/:id" element={<InvoiceDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
