
import { Shield, Clock, Award, Users, Headphones, Download } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Acesso Vitalício",
      description: "Estude no seu ritmo, quantas vezes quiser, para sempre"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificado Reconhecido",
      description: "Certificação com 40 horas para seu currículo profissional"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de 7 dias",
      description: "Não gostou? Devolvemos 100% do seu investimento"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Exclusiva",
      description: "Grupo privado para trocar experiências com outros alunos"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Direto",
      description: "Tire suas dúvidas diretamente com o Dr. André Vieira"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Material Complementar",
      description: "PDFs, checklists e protocolos para download"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Muito mais que um curso, <span className="text-accent">uma transformação</span>
            </h2>
            <p className="text-xl text-secondary-dark">
              Tudo que você precisa para se tornar referência em escoliose
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-secondary-dark leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Quality Seals */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-accent text-3xl">🏆</div>
                <div className="font-bold text-primary">Qualidade Garantida</div>
                <div className="text-sm text-secondary-dark">Conteúdo atualizado e científico</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-accent text-3xl">🔒</div>
                <div className="font-bold text-primary">Compra Segura</div>
                <div className="text-sm text-secondary-dark">Transação 100% protegida</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-accent text-3xl">📱</div>
                <div className="font-bold text-primary">Multi-dispositivos</div>
                <div className="text-sm text-secondary-dark">Acesse de qualquer lugar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
