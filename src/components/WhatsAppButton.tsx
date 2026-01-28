import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "34900000000"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hola, me gustaría agendar una cita en Clínica Dental Premium.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-pulse-soft"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
