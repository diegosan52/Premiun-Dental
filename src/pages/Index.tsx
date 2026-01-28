import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={openContactModal} />
      <HeroSection onOpenContact={openContactModal} />
      <ServicesSection onOpenContact={openContactModal} />
      <TechnologySection />
      <FacilitiesSection />
      <StatsSection />
      <CTASection onOpenContact={openContactModal} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
