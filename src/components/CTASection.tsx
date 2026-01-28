interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection = ({ onOpenContact }: CTASectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          {/* Decorative element */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-foreground/5 skew-x-12 transform translate-x-20" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-primary-foreground text-3xl md:text-4xl font-extrabold mb-4">
              ¿Listo para transformar su sonrisa?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl">
              Reserve su primera consulta y experimente la diferencia de un tratamiento odontológico impulsado por la tecnología más avanzada.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto">
            <button
              onClick={onOpenContact}
              className="w-full md:min-w-[240px] h-16 bg-card text-primary font-extrabold text-lg rounded-xl shadow-elevated hover:scale-105 transition-transform"
            >
              AGENDAR AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
