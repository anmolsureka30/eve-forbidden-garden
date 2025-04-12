
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-eve-green/80 via-eve-green/60 to-eve-black/90 z-20 mix-blend-multiply"></div>
        
        {/* Main Background Image with Parallax Effect */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8bc5089c-36fb-4231-a833-37c455a63140.png')] bg-cover bg-center z-10 transform scale-110 animate-slow-pulse"></div>
        
        {/* Secondary Textured Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-15 mix-blend-overlay"></div>
        
        {/* Animated Particle Elements */}
        <div className="absolute inset-0 z-20 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-eve-rose/20 to-eve-cream/5 blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-eve-green/30 to-eve-cream/10 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Light Beam Effects */}
        <div className="absolute inset-0 z-30">
          <div className="absolute top-0 left-1/4 w-1 h-screen bg-gradient-to-b from-yellow-100/40 to-transparent transform rotate-45 blur-md"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-screen bg-gradient-to-b from-eve-rose/20 to-transparent transform -rotate-45 blur-md"></div>
        </div>
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-5 z-25 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]"></div>
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 z-25 bg-radial-gradient shadow-inner from-transparent via-transparent to-eve-black/50"></div>
        
        {/* Golden Light Glow (to match the lantern in the image) */}
        <div className="absolute right-1/4 top-1/4 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl animate-pulse"></div>
        
        {/* Firefly-like particles */}
        <div className="absolute inset-0 z-40">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index}
              className="absolute w-1 h-1 bg-yellow-100 rounded-full animate-ping opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-40">
        <div className="glass-card transform transition-all duration-700 hover:scale-105">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-eve-cream mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            EVE
          </h1>
          <p className="text-2xl md:text-3xl text-eve-rose font-playfair mb-8 drop-shadow-md">
            DISCOVER THE FORBIDDEN LUXE
          </p>
          <Link to="/reservations">
            <Button className="btn-primary text-lg">
              RESERVE NOW
            </Button>
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-eve-cream/70 animate-bounce">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
