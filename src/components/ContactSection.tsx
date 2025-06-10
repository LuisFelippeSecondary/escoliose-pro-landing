
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Precisa de mais <span className="text-accent">informações?</span>
            </h2>
            <p className="text-xl text-secondary-dark">
              Nossa equipe está pronta para esclarecer todas suas dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Envie sua mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary font-medium">Nome</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary font-medium">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">Telefone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(11) 99999-9999"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-primary font-medium">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Como podemos ajudar você?"
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 font-semibold"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Fale conosco
                </h3>
                <p className="text-lg text-secondary-dark leading-relaxed mb-8">
                  Estamos aqui para ajudar você a dar o próximo passo na sua carreira. 
                  Entre em contato através dos canais abaixo ou use o formulário ao lado.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                    <p className="text-secondary-dark">(11) 99999-9999</p>
                    <p className="text-sm text-secondary-dark">Segunda a sexta, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                    <p className="text-secondary-dark">contato@drandrevieira.com.br</p>
                    <p className="text-sm text-secondary-dark">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Localização</h4>
                    <p className="text-secondary-dark">São Paulo - SP</p>
                    <p className="text-sm text-secondary-dark">Atendimento online em todo Brasil</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-2">
                  💬 Prefere conversar pelo WhatsApp?
                </h4>
                <p className="text-green-700 mb-4 text-sm">
                  Fale diretamente conosco para tirar suas dúvidas rapidamente
                </p>
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o curso de escoliose."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <span>📱</span>
                  <span>Conversar agora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
