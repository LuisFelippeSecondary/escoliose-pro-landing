
const TransformationSection = () => {
  const scenarios = [
    {
      title: "Paciente chega ao seu consultório...",
      description: "Radiografia na mão, medo no olhar, mãe desesperada perguntando se o filho precisará de cirurgia."
    },
    {
      title: "Você faz a avaliação completa...",
      description: "Análise tridimensional, testes funcionais específicos, medições precisas que poucos dominam."
    },
    {
      title: "Explica com clareza total...",
      description: "Cada curva, cada compensação, cada possibilidade de tratamento. A família respira aliviada."
    },
    {
      title: "Prescreve o tratamento ideal...",
      description: "Exercícios específicos, órtese quando necessária, acompanhamento estruturado e eficaz."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Imagine este <span className="text-accent">cenário</span>...
            </h2>
            <p className="text-xl text-white/90">
              Como seria sua prática clínica se você dominasse completamente o tratamento da escoliose?
            </p>
          </div>

          {/* Scenarios */}
          <div className="space-y-12">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {scenario.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="text-center mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Você tem <span className="text-accent">clareza</span>.
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Este curso é o divisor de águas na sua prática como fisioterapeuta.
            </p>
            <div className="inline-block bg-accent text-white px-6 py-3 rounded-full font-semibold">
              ✨ Sua confiança clínica nunca mais será a mesma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
