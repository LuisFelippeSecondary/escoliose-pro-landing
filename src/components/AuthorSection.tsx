
const AuthorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Conheça o <span className="text-accent">Dr. André Vieira</span>
            </h2>
            <p className="text-xl text-secondary-dark">
              Especialista reconhecido em Escoliose e Alterações Posturais da Coluna
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
                alt="Dr. André Vieira"
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              
              {/* Credential Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">Especialista há</div>
                <div className="text-2xl font-bold">15+ anos</div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Uma trajetória dedicada à excelência
                </h3>
                
                <p className="text-lg text-secondary-dark leading-relaxed">
                  Dr. André Vieira é fisioterapeuta especialista com mais de 15 anos de experiência 
                  no tratamento de escoliose e alterações posturais da coluna vertebral.
                </p>
                
                <p className="text-lg text-secondary-dark leading-relaxed">
                  Formado pela Universidade Federal de São Paulo (UNIFESP), possui especialização 
                  em Fisioterapia Ortopédica e já tratou mais de <strong className="text-accent">3.000 pacientes</strong> 
                  com deformidades da coluna.
                </p>
              </div>
              
              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "3.000+", label: "Pacientes tratados" },
                  { number: "15+", label: "Anos de experiência" },
                  { number: "1.200+", label: "Alunos formados" },
                  { number: "95%", label: "Taxa de sucesso" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{stat.number}</div>
                    <div className="text-sm text-secondary-dark">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-secondary-dark">
                "Minha missão é capacitar fisioterapeutas para que transformem a vida de seus pacientes 
                através do conhecimento científico e da prática clínica especializada."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
