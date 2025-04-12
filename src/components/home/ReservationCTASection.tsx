
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ReservationCTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
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
              <Button variant="outline" className="border-eve-cream text-eve-cream hover:bg-eve-cream/10 text-lg px-10">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTASection;
