
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dra. Marina Silva",
      role: "Fisioterapeuta - SP",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Dr. Carlos Mendes", 
      role: "Fisioterapeuta - RJ",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Dra. Ana Costa",
      role: "Fisioterapeuta - MG", 
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

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
                    <Card className="h-full border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-0 relative">
                        <div className="aspect-video relative">
                          <div className="relative flex-1 bg-black">
                            <iframe
                              width="100%"
                              height="100%"
                              className="absolute inset-0 w-full h-full"
                              src={testimonial.videoUrl + "?autoplay=0"}
                              title={`Depoimento em vídeo de ${testimonial.name}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
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
                <div key={index} className="w-2 h-2 rounded-full bg-accent/30"></div>
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
