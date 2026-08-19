
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BuildingConstruction from "./pages/services/BuildingConstruction";
import OilGasEnergy from "./pages/services/OilGasEnergy";
import PowerUtilities from "./pages/services/PowerUtilities";
import ChemicalsPetrochemicals from "./pages/services/ChemicalsPetrochemicals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/building-construction" element={<BuildingConstruction />} />
          <Route path="/services/oil-gas-energy" element={<OilGasEnergy />} />
          <Route path="/services/power-utilities" element={<PowerUtilities />} />
          <Route path="/services/chemicals-petrochemicals" element={<ChemicalsPetrochemicals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
