import { Phone, Mail, MapPin, Send, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-sm tracking-tight">DENTAL PREMIUM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excelencia clínica y estética dental de alto nivel.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold mb-4">Servicios</h5>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Estética Dental
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Implantes
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Ortodoncia Invisible
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Diseño de Sonrisa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4">Contacto</h5>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +34 900 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                info@clinicapremium.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Paseo de la Reforma, CDMX
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold mb-4">Newsletter</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 h-10 px-4 rounded-lg bg-secondary border-none text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                <Send size={18} />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {currentYear} Clínica Dental Premium. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
