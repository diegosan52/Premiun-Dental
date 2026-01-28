const StatsSection = () => {
  const stats = [
    { value: "15+", label: "Años Transformando Vidas" },
    { value: "2.500+", label: "Casos Clínicos Exitosos" },
    { value: "100%", label: "Satisfacción del Paciente" },
  ];

  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around gap-12 text-primary-foreground">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
