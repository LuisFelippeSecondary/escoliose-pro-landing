
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dra. Marina Silva",
      role: "Fisioterapeuta - SP",
      content: "Depois do curso do Dr. André, minha segurança clínica mudou completamente. Hoje consigo explicar cada detalhe da escoliose para meus pacientes e seus familiares.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Fisioterapeuta - RJ",
      content: "O método de avaliação tridimensional revolucionou minha prática. Casos que antes me deixavam inseguro, hoje trato com total confiança e excelentes resultados.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dra. Ana Costa",
      role: "Fisioterapeuta - MG",
      content: "Conteúdo excepcional! A didática do Dr. André é incrível. Consegui aplicar os conhecimentos imediatamente na minha clínica com resultados surpreendentes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que nossos <span className="text-accent">alunos dizem</span>
            </h2>
            <p className="text-xl text-secondary-dark">
              Transformações reais de fisioterapeutas que fizeram a diferença em suas carreiras
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-secondary/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-secondary-dark leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-secondary-dark">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
              <span className="text-accent font-semibold">⭐ 4.9/5</span>
              <span className="text-secondary-dark">•</span>
              <span className="text-secondary-dark">Mais de 500 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
