
import { CheckCircle, Users, Clock, Award, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Avaliação Tridimensional",
      description: "Aprenda a avaliar a escoliose nos três planos do movimento com precisão científica"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Casos Complexos",
      description: "Estudos de caso reais com pacientes de todas as idades e graus de deformidade"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Condutas Práticas",
      description: "Protocolos específicos para cada tipo de escoliose, desde leve até severa"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Coletes Ortopédicos",
      description: "Indicações precisas, acompanhamento e resultados com órteses modernas"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Diagnóstico Funcional",
      description: "Avaliação integrada: coluna, quadril, joelhos e compensações posturais"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Técnicas Exclusivas",
      description: "Métodos desenvolvidos pelo Dr. André com comprovação científica"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O curso mais completo sobre <span className="text-accent">escoliose do Brasil</span>
            </h2>
            <p className="text-xl text-secondary-dark max-w-3xl mx-auto">
              Transforme sua prática clínica com conhecimento científico avançado 
              e técnicas comprovadas para o tratamento da escoliose
            </p>
          </div>

          {/* Video/Preview Section */}
          <div className="mb-16">
            <div className="relative bg-primary rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Demonstração gratuita</h3>
                    <p className="text-white/80">Veja como funciona a metodologia exclusiva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Course Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">40h</div>
                <div className="text-secondary-dark">de conteúdo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">120+</div>
                <div className="text-secondary-dark">aulas práticas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-secondary-dark">casos clínicos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Vitalício</div>
                <div className="text-secondary-dark">acesso total</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-dark text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero começar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
