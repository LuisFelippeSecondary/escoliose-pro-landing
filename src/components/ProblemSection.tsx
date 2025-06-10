
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Você já olhou para um paciente com escoliose, 
            <br />
            <span className="text-accent">viu a radiografia...</span>
            <br />
            e sentiu que <span className="underline decoration-accent">faltava algo?</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
            <p>
              Aquela sensação de <strong className="text-accent">insegurança</strong> quando o paciente te pergunta: 
              <em className="italic">"Doutor, meu filho vai precisar de cirurgia?"</em>
            </p>
            
            <p>
              A <strong className="text-accent">frustração</strong> de não conseguir explicar com clareza 
              o que realmente está acontecendo com a coluna dele.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-accent">
              Você não está sozinho. E existe uma solução.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-medium">
                👆 Este momento termina hoje
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
