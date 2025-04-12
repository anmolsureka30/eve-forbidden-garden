
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
