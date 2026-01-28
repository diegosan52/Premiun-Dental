import { useState } from "react";
import { X, Phone, Mail, MapPin, Send, Calendar } from "lucide-react";
import { z } from "zod";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email demasiado largo"),
  phone: z.string().trim().min(1, "El teléfono es requerido").max(20, "Teléfono demasiado largo"),
  message: z.string().trim().max(1000, "Mensaje demasiado largo").optional(),
});

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X size={24} className="text-muted-foreground" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Agenda tu Cita</h2>
            <p className="text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">¡Mensaje Enviado!</h3>
              <p className="text-muted-foreground">Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-lg border ${
                    errors.name ? "border-destructive" : "border-border"
                  } bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-lg border ${
                    errors.email ? "border-destructive" : "border-border"
                  } bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-lg border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                  placeholder="+34 600 000 000"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje (opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu caso..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-14 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Cita"}
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+34 900 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>info@clinicapremium.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Paseo de la Reforma, CDMX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
