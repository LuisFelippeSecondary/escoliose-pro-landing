
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Invista no seu <span className="text-accent">futuro profissional</span>
            </h2>
            <p className="text-xl text-white/90">
              O conhecimento que vai transformar sua carreira por toda a vida
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-white px-6 py-2 rounded-full font-semibold">
                🔥 Oferta Limitada
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Especialização Completa em Escoliose
              </h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-sm text-secondary-dark line-through">De R$ 1.497</span>
                  <span className="bg-accent text-white px-2 py-1 rounded text-sm font-semibold">50% OFF</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  R$ 697
                </div>
                <div className="text-secondary-dark">
                  ou 12x de R$ 67,90 sem juros
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {[
                  "40 horas de conteúdo premium",
                  "120+ aulas práticas",
                  "50+ casos clínicos reais",
                  "Certificado de conclusão",
                  "Acesso vitalício",
                  "Grupo exclusivo de alunos"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-secondary-dark">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  "Material complementar para download",
                  "Suporte direto com Dr. André",
                  "Atualizações gratuitas",
                  "Garantia de 7 dias",
                  "Acesso em todos os dispositivos",
                  "Metodologia exclusiva"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-secondary-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-accent font-semibold">
                <Clock className="w-5 h-5" />
                <span>Promoção válida até 31/12/2024 ou enquanto houver vagas</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-secondary-dark">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>+1.200 alunos</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>4.9/5 (500+ avaliações)</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-dark text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              >
                QUERO ME INSCREVER AGORA
              </Button>
              
              <div className="mt-4 text-sm text-secondary-dark">
                🔒 Compra 100% segura • Acesso imediato após pagamento
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
              <span>🛡️</span>
              <span className="font-semibold">Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
