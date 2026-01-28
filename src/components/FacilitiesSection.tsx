import { Leaf, Cpu, Armchair } from "lucide-react";

const FacilitiesSection = () => {
  const features = [
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Ambiente Relajante",
      description: "Espacios diseñados arquitectónicamente para reducir la ansiedad, utilizando cromoterapia y luz natural para su bienestar emocional.",
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Tecnología Avanzada",
      description: "Escaneo 3D, radiología digital y software de diseño de sonrisa para una rehabilitación oral precisa y mínimamente invasiva.",
    },
    {
      icon: <Armchair className="w-7 h-7" />,
      title: "Diseño Ergonómico",
      description: "Sillones odontológicos de última generación con tapicería viscoelástica para garantizar el máximo confort durante su estética dental.",
    },
  ];

  const galleryImages = [
    {
      src: "/images/facility-light.jpg",
      title: "Luz Natural y Calma",
      subtitle: "Espacios abiertos que fluyen con el entorno.",
    },
    {
      src: "/images/facility-views.jpg",
      title: "Vistas Panorámicas",
      subtitle: "Privacidad absoluta con el horizonte como fondo.",
    },
  ];

  return (
    <section id="instalaciones" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="section-title">Confort de Élite</h4>
          <h2 className="section-heading">Experiencia Premium</h2>
          <div className="w-16 h-1 bg-primary mt-4 mx-auto rounded-full" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card-premium">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video shadow-card cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <p className="text-xl font-bold tracking-tight">{image.title}</p>
                <p className="text-sm font-light opacity-80">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
