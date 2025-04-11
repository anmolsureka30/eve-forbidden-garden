
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
      imageSrc: "/lovable-uploads/0491d272-ac12-4613-85f9-1363405b2bbd.png",
      imageAlt: "Signature cocktail being poured"
    },
    {
      title: "Ladies Night",
      description: "Every Wednesday, ladies enjoy special cocktails and exclusive perks.",
      imageSrc: "https://images.unsplash.com/photo-1613843451161-17f99277598a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      imageAlt: "Ladies enjoying drinks at Eve"
    },
    {
      title: "Live DJs",
      description: "Weekend vibes with Mumbai's best DJs spinning eclectic beats.",
      imageSrc: "https://images.unsplash.com/photo-1642114657145-47bdf5d78cb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      imageAlt: "DJ performing at Eve"
    },
    {
      title: "Chef's Tasting Menu",
      description: "A curated journey through our most exquisite culinary creations.",
      imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      imageAlt: "Gourmet dish from Chef's Tasting Menu"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-eve-black" 
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.7), rgba(10, 61, 59, 0.8)), url('/lovable-uploads/0491d272-ac12-4613-85f9-1363405b2bbd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-eve-black/80 via-eve-black/60 to-eve-green/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-eve-cream mb-4">
            EVE
          </h1>
          <p className="text-2xl md:text-3xl text-eve-rose font-playfair mb-8">
            DISCOVER THE FORBIDDEN LUXE
          </p>
          <Link to="/reservations">
            <Button className="btn-primary text-lg">
              RESERVE NOW
            </Button>
          </Link>
          
          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-eve-cream/70 animate-bounce">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </div>
          )}
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-eve-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Welcome to Eve</h2>
            <p className="text-eve-black/80 text-lg">
              Nestled in the heart of Powai, Eve is a sophisticated sanctuary where culinary artistry meets exotic cocktails in a setting of modern jungle luxe elegance. Our space celebrates the feminine mystique while offering an experience that tempts all the senses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="/lovable-uploads/a2c7145a-df4c-4111-824b-4b4c5593c95c.png" 
                alt="Eve Restaurant Interior" 
                className="w-full h-auto rounded-md shadow-lg"
              />
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
      <section className="py-20 bg-eve-green">
        <div className="container mx-auto px-4">
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
      <section className="py-20 bg-eve-cream">
        <div className="container mx-auto px-4">
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
                <img 
                  src="/lovable-uploads/44b69435-ae39-4cc1-8222-4edaaff45be2.png" 
                  alt="Eve's food selection" 
                  className="w-full h-auto rounded-md shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" 
                  alt="Cocktail at Eve" 
                  className="w-full h-auto rounded-md shadow-lg mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reservation CTA Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 61, 59, 0.9), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
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
              <Button variant="outline" className="border-eve-cream text-eve-cream hover:bg-eve-cream/10 text-lg px-10">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Popup */}
      <NewsletterPopup />
    </>
  );
};

export default Index;
