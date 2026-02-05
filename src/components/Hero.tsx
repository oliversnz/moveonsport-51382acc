import { ArrowRight, Leaf, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Eco Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-leaf" />
            <span className="text-sm font-medium text-primary-foreground/90">100% Eco-Friendly</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            MUÉVETE CON<br />
            <span className="text-leaf">PROPÓSITO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ropa deportiva premium fabricada con materiales reciclados y sostenibles. 
            Cada compra ayuda a proteger nuestro planeta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-leaf hover:bg-leaf/90 text-foreground font-semibold px-8"
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Colección
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Recycle className="mr-2 h-5 w-5" />
              Nuestra Misión
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-display text-leaf">50K+</p>
              <p className="text-sm text-primary-foreground/70">Botellas Recicladas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-leaf">100%</p>
              <p className="text-sm text-primary-foreground/70">Materiales Eco</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-leaf">0</p>
              <p className="text-sm text-primary-foreground/70">Huella de Carbono</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
