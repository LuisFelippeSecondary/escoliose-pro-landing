
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Para quem é indicado este curso?",
      answer: "Este curso é ideal para fisioterapeutas graduados, residentes e estudantes dos últimos períodos que desejam se especializar no tratamento de escoliose e alterações posturais da coluna vertebral."
    },
    {
      question: "Preciso ter experiência prévia com escoliose?",
      answer: "Não é necessário. O curso foi desenvolvido para levar você do básico ao avançado, independentemente do seu nível atual de conhecimento sobre escoliose."
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente os dados de acesso à plataforma. O conteúdo fica disponível 24/7 para estudar no seu ritmo."
    },
    {
      question: "Qual a duração do curso?",
      answer: "O curso possui 40 horas de conteúdo distribuídas em mais de 120 aulas. Você pode concluir em 4-6 semanas estudando 2 horas por dia, ou no seu próprio ritmo."
    },
    {
      question: "Há certificado de conclusão?",
      answer: "Sim! Ao concluir todas as aulas e exercícios, você receberá um certificado de 40 horas reconhecido para seu desenvolvimento profissional."
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento."
    },
    {
      question: "Posso tirar dúvidas durante o curso?",
      answer: "Sim! Você terá acesso a um grupo exclusivo onde pode interagir com outros alunos e tirar dúvidas diretamente com o Dr. André Vieira."
    },
    {
      question: "O curso substitui uma especialização presencial?",
      answer: "O curso oferece conhecimento avançado e prático, mas recomendamos sempre buscar complementação presencial para aperfeiçoamento das habilidades manuais."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            <p className="text-xl text-secondary-dark">
              Tire suas dúvidas antes de começar sua transformação
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-secondary/30 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact for More Questions */}
          <div className="text-center mt-12 p-6 bg-secondary/20 rounded-xl">
            <h3 className="text-xl font-bold text-primary mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-secondary-dark mb-4">
              Nossa equipe está pronta para ajudar você
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>📱</span>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
