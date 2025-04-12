
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Press', path: '/press' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if user scrolled up or down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Set isScrolled to true if user scrolled down at all
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        // Changed this line to always have a dark background at the top
        !isScrolled ? 'dark-glass py-6' : 'dark-glass py-2',
        isVisible ? 'top-0' : '-top-24'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-eve-cream text-3xl font-playfair font-bold">
          EVE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                location.pathname === link.path && "after:w-full text-eve-rose"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+919876543210" className="text-eve-cream hover:text-eve-rose transition-colors">
            <Phone className="h-5 w-5" />
          </a>
          <Link to="/reservations">
            <Button className="bg-eve-rose hover:bg-eve-rose/90 text-eve-black border-none">
              <Calendar className="mr-2 h-4 w-4" />
              Reserve
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-eve-cream hover:text-eve-rose"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden dark-glass text-eve-cream animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xl py-2",
                  location.pathname === link.path ? "text-eve-rose" : "text-eve-cream"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-eve-rose/20">
              <a 
                href="tel:+919876543210" 
                className="flex items-center text-eve-cream hover:text-eve-rose transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Us</span>
              </a>
              <Link 
                to="/reservations" 
                className="flex items-center text-eve-rose hover:text-eve-rose/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                <span>Reserve Table</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
