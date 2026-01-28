import { Smile, Target, Sparkles, ChevronRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const ServicesSection = ({ onOpenContact }: ServicesSectionProps) => {
  const services = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Diseño Digital de Sonrisa (DSD)",
      description: "Planificamos su nueva sonrisa mediante software de análisis facial 3D, permitiéndole previsualizar el resultado final antes de iniciar cualquier procedimiento.",
      tags: ["Simulación 3D", "Análisis Facial", "Personalización"],
      image: "/images/service-dsd.jpg",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Implantes de Alta Precisión",
      description: "Utilizamos cirugía guiada por ordenador para una colocación exacta, reduciendo el tiempo de intervención y garantizando una recuperación más rápida.",
      tags: ["Cirugía Guiada", "Mínimamente Invasivo", "Carga Inmediata"],
      image: "/images/service-implants.jpg",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="section-title">Especialidades</h4>
            <h2 className="section-heading">Especialidades en Rehabilitación</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Combinamos la maestría artesanal con herramientas digitales para devolver la funcionalidad y armonía a su boca.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-1 hover:underline">
            Ver todas las especialidades
            <ChevronRight size={18} />
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              {/* Image - Replace with actual images */}
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-semibold text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={onOpenContact}
                  className="w-full btn-outline h-12"
                >
                  Saber más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
