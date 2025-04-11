
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-eve-green text-eve-cream pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">EVE</h3>
            <p className="text-eve-cream/80">Discover the Forbidden Luxe</p>
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-eve-rose" />
                <p>Central Avenue, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-eve-rose" />
                <a href="tel:+919876543210" className="hover:text-eve-rose transition-colors">+91 987 654 3210</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-eve-rose" />
                <a href="mailto:reservations@everestaurant.com" className="hover:text-eve-rose transition-colors">
                  reservations@everestaurant.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 text-eve-rose" />
                <div>
                  <p>Mon-Thu: 12pm - 11pm</p>
                  <p>Fri-Sun: 12pm - 1am</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="hover:text-eve-rose transition-colors py-1">Home</Link>
              <Link to="/menu" className="hover:text-eve-rose transition-colors py-1">Our Menu</Link>
              <Link to="/reservations" className="hover:text-eve-rose transition-colors py-1">Reservations</Link>
              <Link to="/events" className="hover:text-eve-rose transition-colors py-1">Events</Link>
              <Link to="/gallery" className="hover:text-eve-rose transition-colors py-1">Gallery</Link>
              <Link to="/about" className="hover:text-eve-rose transition-colors py-1">About Us</Link>
              <Link to="/contact" className="hover:text-eve-rose transition-colors py-1">Contact</Link>
              <Link to="/press" className="hover:text-eve-rose transition-colors py-1">Press</Link>
            </div>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eve-cream hover:text-eve-rose transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eve-cream hover:text-eve-rose transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Join Our Secret Garden</h3>
            <p className="text-eve-cream/80 mb-4">
              Subscribe to unlock exclusive invites, secret events, and special offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-eve-cream/10 border border-eve-rose/30 px-4 py-2 text-eve-cream placeholder:text-eve-cream/50 focus:outline-none focus:border-eve-rose"
              />
              <Button className="bg-eve-rose hover:bg-eve-rose/90 text-eve-black border-none w-full">
                Unlock the Secret Menu
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-eve-rose/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-eve-cream/70 text-sm">
            &copy; {new Date().getFullYear()} Eve Restaurant, Powai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-eve-cream/70 hover:text-eve-rose text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-eve-cream/70 hover:text-eve-rose text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
