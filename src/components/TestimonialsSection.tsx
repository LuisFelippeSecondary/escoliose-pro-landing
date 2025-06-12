
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, ChevronDown } from "lucide-react";

const TestimonialsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Dra. Marina Silva",
      role: "Fisioterapeuta - SP",
      content: "Depois do curso do Dr. André, minha segurança clínica mudou completamente. Hoje consigo explicar cada detalhe da escoliose para meus pacientes e seus familiares.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Fisioterapeuta - RJ",
      content: "O método de avaliação tridimensional revolucionou minha prática. Casos que antes me deixavam inseguro, hoje trato com total confiança e excelentes resultados.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dra. Ana Costa",
      role: "Fisioterapeuta - MG",
      content: "Conteúdo excepcional! A didática do Dr. André é incrível. Consegui aplicar os conhecimentos imediatamente na minha clínica com resultados surpreendentes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleVideoToggle = (index: number) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  const handleReturnToNormal = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que nossos <span className="text-accent">alunos dizem</span>
            </h2>
            <p className="text-xl text-secondary-dark max-w-2xl mx-auto">
              Transformações reais de fisioterapeutas que fizeram a diferença em suas carreiras
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className={`h-full border-0 shadow-lg transition-all duration-700 transform bg-white/80 backdrop-blur-sm overflow-hidden ${
                      playingVideo === index 
                        ? 'scale-105 shadow-2xl ring-4 ring-accent/30' 
                        : 'hover:shadow-xl hover:-translate-y-2'
                    }`}>
                      <CardContent className="p-0 relative">
                        {playingVideo === index ? (
                          // Expanded video view
                          <div className="relative w-full h-full min-h-[400px] flex flex-col">
                            {/* Full video area */}
                            <div className="relative flex-1 bg-gradient-to-br from-primary/10 to-accent/10 group cursor-pointer overflow-hidden">
                              <img 
                                src={testimonial.videoThumbnail}
                                alt={`Depoimento de ${testimonial.name}`}
                                className="w-full h-full object-cover transition-all duration-500 scale-110 brightness-110"
                              />
                              
                              {/* Playing overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <div className="rounded-full p-6 bg-accent text-white scale-125 pulse shadow-2xl">
                                  <Pause className="w-10 h-10 fill-white" />
                                </div>
                              </div>

                              {/* Duration and status */}
                              <div className="absolute bottom-4 right-4 bg-accent/90 text-white text-sm px-3 py-1 rounded">
                                2:34
                              </div>
                              <div className="absolute top-4 left-4 bg-accent text-white text-xs px-3 py-1 rounded-full animate-pulse">
                                ▶ Reproduzindo
                              </div>
                            </div>

                            {/* Compact author info at bottom */}
                            <div className="bg-white/95 backdrop-blur-sm p-4 border-t border-accent/20">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-accent/30"
                                  />
                                  <div>
                                    <div className="font-semibold text-accent text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-secondary-dark">{testimonial.role}</div>
                                  </div>
                                </div>
                                
                                {/* Return arrow */}
                                <button
                                  onClick={(e) => handleReturnToNormal(index, e)}
                                  className="group/btn p-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/20 hover:from-accent/20 hover:to-accent/30 transition-all duration-300 hover:scale-110"
                                >
                                  <ChevronDown className="w-5 h-5 text-accent transition-transform duration-300 group-hover/btn:scale-110" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Normal card view
                          <>
                            {/* Video Section */}
                            <div 
                              className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 group cursor-pointer overflow-hidden transition-all duration-500"
                              onClick={() => handleVideoToggle(index)}
                            >
                              <img 
                                src={testimonial.videoThumbnail}
                                alt={`Depoimento de ${testimonial.name}`}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                              />
                              
                              {/* Play Button Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-500">
                                <div className="rounded-full p-4 bg-accent/90 hover:bg-accent text-white group-hover:scale-110 transition-all duration-500 transform shadow-lg">
                                  <Play className="w-8 h-8 fill-white ml-1" />
                                </div>
                              </div>

                              {/* Duration Badge */}
                              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded transition-all duration-300">
                                2:34
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                              {/* Stars */}
                              <div className="flex mb-4 justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5 fill-current text-accent mx-0.5" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>

                              {/* Quote */}
                              <p className="text-secondary-dark leading-relaxed mb-6 italic text-center text-sm md:text-base line-clamp-4">
                                "{testimonial.content}"
                              </p>

                              {/* Author */}
                              <div className="flex items-center justify-center space-x-3 pt-4 border-t border-secondary/30">
                                <img 
                                  src={testimonial.avatar} 
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                                />
                                <div className="text-center">
                                  <div className="font-semibold text-sm text-primary">{testimonial.name}</div>
                                  <div className="text-xs text-secondary-dark">{testimonial.role}</div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Buttons */}
              <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-accent hover:text-white border-accent/20 shadow-lg" />
              <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-accent hover:text-white border-accent/20 shadow-lg" />
            </Carousel>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2 md:hidden">
              {testimonials.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  playingVideo === index ? 'bg-accent w-6' : 'bg-accent/30'
                }`}></div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm px-8 py-4 rounded-full border border-accent/20 shadow-lg">
              <span className="text-accent font-semibold text-lg">⭐ 4.9/5</span>
              <span className="text-secondary-dark">•</span>
              <span className="text-secondary-dark font-medium">Mais de 500 avaliações positivas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
