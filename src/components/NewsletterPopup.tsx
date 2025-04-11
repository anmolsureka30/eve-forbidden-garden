
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('eve_newsletter_subscribed') === 'true';
    
    if (hasSubscribed) {
      return;
    }
    
    // Show popup when user is about to leave (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
      }
    };
    
    // Show popup after 10 seconds on the page as a fallback
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with a newsletter service API
    console.log('Subscribing email:', email);
    
    // Simulating successful subscription
    setIsSubscribed(true);
    localStorage.setItem('eve_newsletter_subscribed', 'true');
    
    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-eve-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-md bg-eve-cream border border-eve-rose p-8 animate-fade-in"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(250, 245, 239, 0.95), rgba(250, 245, 239, 0.85))',
          backgroundSize: 'cover'
        }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-eve-black hover:text-eve-rose transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        {isSubscribed ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-playfair font-bold text-eve-green mb-4">Welcome to the Garden!</h3>
            <p className="text-eve-black">
              Thank you for subscribing. You'll be the first to know about our exclusive events and secret menu items.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-playfair font-bold text-eve-green">Unlock the Secret Menu</h3>
              <p className="text-eve-black/80 mt-2">
                Join our exclusive list for special invites, secret events, and hidden menu items.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 border border-eve-green/20 focus:border-eve-green focus:outline-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-eve-green hover:bg-eve-green/90 text-eve-cream"
              >
                Join the Garden
              </Button>
            </form>
            
            <p className="text-xs text-eve-black/60 mt-4 text-center">
              By subscribing, you agree to our privacy policy and consent to receive updates from Eve Restaurant.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;
