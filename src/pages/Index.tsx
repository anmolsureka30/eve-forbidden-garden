
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HighlightCard from '@/components/HighlightCard';
import NewsletterPopup from '@/components/NewsletterPopup';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Index = () => {
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

  const highlights = [
    {
      title: "Signature Cocktails",
      description: "Expertly crafted exotic concoctions that tantalize the senses.",
      imageSrc: "/lovable-uploads/f0f9bce7-dcc2-4d69-96dc-be4e2382ebcd.png",
      imageAlt: "Signature cocktails at Eve"
    },
    {
      title: "Fine Dining",
      description: "Exquisite culinary creations that celebrate global flavors and local ingredients.",
      imageSrc: "/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png",
      imageAlt: "Beautiful dessert plating at Eve"
    },
    {
      title: "Elegant Atmosphere",
      description: "A lush, captivating ambiance that transports you to a world of luxury.",
      imageSrc: "/lovable-uploads/bf7242ea-9d07-4ef8-b293-1aba1cdbf406.png",
      imageAlt: "The elegant entrance to Eve Restaurant"
    },
    {
      title: "Memorable Experiences",
      description: "Unforgettable moments shared with friends over exceptional food and drinks.",
      imageSrc: "/lovable-uploads/37d89383-87f1-4bf3-b93d-1d825ac2959f.png",
      imageAlt: "Eve branded wine glasses"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 z-0">
          {/* Main Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-eve-green/95 via-eve-green/80 to-eve-black/90 z-20 mix-blend-multiply"></div>
          
          {/* Main Background Image with Parallax Effect */}
          <div className="absolute inset-0 bg-[url('https://etimg.etb2bimg.com/photo/111206456.cms')] bg-cover bg-center z-10 transform scale-110 animate-slow-pulse"></div>
          
          {/* Secondary Textured Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-15 mix-blend-overlay"></div>
          
          {/* Animated Particle Elements */}
          <div className="absolute inset-0 z-20 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-eve-rose/20 to-eve-cream/5 blur-xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-eve-green/30 to-eve-cream/10 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-eve-rose/15 to-transparent blur-xl animate-float" style={{animationDelay: '3s'}}></div>
          </div>
          
          {/* Light Beam Effects */}
          <div className="absolute inset-0 z-30">
            <div className="absolute top-0 left-1/4 w-1 h-screen bg-gradient-to-b from-eve-cream/30 to-transparent transform rotate-45 blur-md"></div>
            <div className="absolute top-0 right-1/3 w-0.5 h-screen bg-gradient-to-b from-eve-rose/20 to-transparent transform -rotate-45 blur-md"></div>
          </div>
          
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-5 z-25 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]"></div>
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 z-25 bg-radial-gradient shadow-inner from-transparent via-transparent to-eve-black/50"></div>
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
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-eve-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-eve-rose/30"></div>
          <div className="absolute -left-40 bottom-0 w-[30rem] h-[30rem] rounded-full bg-eve-green/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Welcome to Eve</h2>
            <p className="text-eve-black/80 text-lg">
              Nestled in the heart of Powai, Eve is a sophisticated sanctuary where culinary artistry meets exotic cocktails in a setting of modern jungle luxe elegance. Our space celebrates the feminine mystique while offering an experience that tempts all the senses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="group relative overflow-hidden rounded-md shadow-xl">
              <img 
                src="/lovable-uploads/bf7242ea-9d07-4ef8-b293-1aba1cdbf406.png" 
                alt="Eve Restaurant Entrance" 
                className="w-full h-auto rounded-md shadow-lg transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eve-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-eve-green">The Garden of Temptation</h3>
              <p className="text-eve-black/80">
                Our concept draws inspiration from the original garden of temptation, reimagined as a modern epicurean paradise. At Eve, we invite you to indulge in life's most exquisite pleasures - from our globally inspired cuisine to our botanical-infused cocktails.
              </p>
              <p className="text-eve-black/80">
                Every corner of our restaurant has been thoughtfully designed to create an atmosphere of luxurious intimacy, with lush greenery, soft lighting, and natural textures that transport you to a world where time slows down and every moment is savored.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-4 border-eve-green text-eve-green hover:bg-eve-green hover:text-eve-cream flex items-center">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-20 bg-eve-green relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-eve-cream mb-4">
              Experience Eve
            </h2>
            <p className="text-eve-cream/80 text-lg max-w-2xl mx-auto">
              Delve into our world of curated experiences designed to delight and enchant your senses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                title={highlight.title}
                description={highlight.description}
                imageSrc={highlight.imageSrc}
                imageAlt={highlight.imageAlt}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Preview Section */}
      <section className="py-20 bg-eve-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6 max-w-xl">
                <h2 className="section-title">Taste of Temptation</h2>
                <p className="text-eve-black/80 text-lg">
                  Our menu features a tantalizing fusion of global flavors, crafted with locally-sourced ingredients and presented with artistic flair. Each dish tells a story of culinary passion and innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-eve-green/20 pb-2">
                    <span className="font-playfair text-eve-green text-lg">Eve's Garden Salad</span>
                    <span className="text-eve-rose">₹450</span>
                  </div>
                  <div className="flex justify-between border-b border-eve-green/20 pb-2">
                    <span className="font-playfair text-eve-green text-lg">Forbidden Fruit Cocktail</span>
                    <span className="text-eve-rose">₹650</span>
                  </div>
                  <div className="flex justify-between border-b border-eve-green/20 pb-2">
                    <span className="font-playfair text-eve-green text-lg">Temptation Truffle Pasta</span>
                    <span className="text-eve-rose">₹850</span>
                  </div>
                </div>
                <Link to="/menu">
                  <Button className="bg-eve-green text-eve-cream hover:bg-eve-green/90 mt-4">
                    Explore Full Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-md shadow-lg group">
                  <img 
                    src="/lovable-uploads/df0bed61-283b-451d-b253-40fa390b7252.png" 
                    alt="Eve's food selection" 
                    className="w-full h-auto rounded-md transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-md shadow-lg group mt-6">
                  <img 
                    src="/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png" 
                    alt="Dessert at Eve" 
                    className="w-full h-auto rounded-md transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reservation CTA Section */}
      <section 
        className="py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-eve-green/90 to-eve-green/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f05fc913-3c45-4354-a32b-e4a819af7cca.png')] bg-cover bg-center z-0 scale-110 animate-slow-pulse"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-5"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="dark-glass inline-block px-10 py-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-eve-cream mb-6">
              Join The Garden After Dark
            </h2>
            <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto mb-10">
              Reserve your table now and experience an unforgettable evening of culinary delights and exotic cocktails.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/reservations">
                <Button className="btn-primary text-lg px-10">
                  Reserve Now
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" className="border-eve-cream text-eve-cream text-green hover:bg-eve-cream/10 text-lg px-10">
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Popup */}
      <NewsletterPopup />
    </>
  );
};

export default Index;
