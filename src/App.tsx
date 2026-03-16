import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useScrollToTop } from "./hooks/useScrollToTop";
import StaggeredMenu from "@/components/MenuFolder/StaggeredMenu";
import { MenuOverlayProvider, useMenuOverlay } from "@/components/MenuFolder/MenuOverlayContext";

const queryClient = new QueryClient();

const ScrollHandler = () => {
  useScrollToTop();
  return null;
};

const GlobalMenuOverlay = () => {
  const { isOpen, closeMenu } = useMenuOverlay();

  return (
    <StaggeredMenu
      isOpen={isOpen}
      onClose={closeMenu}
      position="right"
      colors={["#b9dcf8", "#0571d3", "#044fa0"]}
      items={[
        { label: "Home", ariaLabel: "Home section", link: "/" },
        { label: "Framework", ariaLabel: "Framework section", link: "/#framework" },
        { label: "Proof of Work", ariaLabel: "Proof of work section", link: "/#proof" },
        { label: "Services", ariaLabel: "Services section", link: "/#services" },
        { label: "Contact", ariaLabel: "Contact section", link: "/#contact" }
      ]}
      accentColor="#0571d3"
      displaySocials={false}
    />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MenuOverlayProvider>
          <ScrollHandler />
          <GlobalMenuOverlay />
          <AnimatedRoutes />
        </MenuOverlayProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
