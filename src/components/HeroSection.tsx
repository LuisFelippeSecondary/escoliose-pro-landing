
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary/20 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Domine a</span>
                <br />
                <span className="gradient-text">Escoliose</span>
                <br />
                <span className="text-secondary-dark">como nunca antes</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary-dark leading-relaxed">
                O curso mais completo do Brasil para fisioterapeutas que querem 
                <span className="font-semibold text-accent"> transformar vidas</span> através do tratamento especializado da coluna vertebral.
              </p>
            </div>

            {/* Benefits Quick List */}
            <div className="space-y-3">
              {[
                "Avaliação tridimensional completa",
                "Casos complexos resolvidos na prática", 
                "Técnicas exclusivas do Dr. André Vieira"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Quero me inscrever agora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Assistir demonstração
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                alt="Fisioterapeuta especialista trabalhando"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-accent">
                <div className="text-sm text-secondary-dark mb-1">Alunos aprovados</div>
                <div className="text-2xl font-bold text-primary">+1.200</div>
                <div className="text-sm text-accent font-medium">em todo Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
