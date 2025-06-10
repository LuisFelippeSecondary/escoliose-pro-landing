
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dr. André Vieira</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Especialista em Escoliose e Alterações Posturais da Coluna Vertebral. 
                Transformando a prática de fisioterapeutas em todo o Brasil.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">Sobre o Curso</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-accent transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="text-white/80 hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Course Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Sobre o Curso</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>40 horas de conteúdo</li>
                <li>120+ aulas práticas</li>
                <li>Acesso vitalício</li>
                <li>Certificado reconhecido</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>📧 contato@drandrevieira.com.br</p>
                <p>📱 (11) 99999-9999</p>
                <p>📍 São Paulo - SP</p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">📷</div>
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">💼</div>
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  <span className="sr-only">YouTube</span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">📺</div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/80">
                © 2024 Dr. André Vieira. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-white/80">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-accent" />
                <span>para fisioterapeutas</span>
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
