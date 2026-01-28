const TechnologySection = () => {
  const technologies = [
    {
      title: "Escaneado Intraoral 3D",
      description: "Eliminamos los moldes de pasta tradicionales por un escaneo óptico cómodo y preciso, creando un modelo digital exacto de sus dientes en segundos.",
      image: "/images/tech-scanner.jpg",
    },
    {
      title: "Fresado CEREC In-House",
      description: "Diseñamos y fabricamos sus coronas o carillas de porcelana en nuestra propia clínica. Entrega de restauraciones finales en una sola sesión.",
      image: "/images/tech-cerec.jpg",
    },
    {
      title: "Láser de Diodo Avanzado",
      description: "Procedimientos mínimamente invasivos para encías y tejidos blandos. Menos inflamación, sin sangrado y recuperación biológica acelerada.",
      image: "/images/tech-laser.jpg",
    },
  ];

  return (
    <section id="tecnologia" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h4 className="section-title">Equipamiento</h4>
          <h2 className="section-heading">Equipamiento de Vanguardia</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Invertimos en el estándar de oro de la tecnología odontológica global para asegurar que cada diagnóstico sea perfecto y cada tratamiento impecable.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group flex flex-col gap-5">
              <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden shadow-card border border-border">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
