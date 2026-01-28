import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image - Replace src with your actual image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-dental.jpg"
          alt="Clínica dental moderna"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
            <CheckCircle size={14} />
            Odontología de Alta Complejidad
          </div>

          {/* Heading */}
          <h1 className="text-foreground text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Recupera tu <br />
            <span className="text-primary">sonrisa</span> y tu <br />
            confianza
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-10 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Especialistas en rehabilitación oral avanzada y estética dental personalizada en un entorno diseñado exclusivamente para tu bienestar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={onOpenContact}
              className="btn-primary flex items-center justify-center gap-2 text-lg h-14 px-8"
            >
              Reserva tu cita de valoración
              <ArrowRight size={20} />
            </button>
            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 px-8 h-14 bg-card border-2 border-border text-foreground font-bold rounded-lg hover:border-primary/50 transition-all"
            >
              Ver casos de éxito
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center gap-8 border-t border-border/50 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Años de Exp.</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold text-primary">2.5k+</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Casos Éxito</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Especialistas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
