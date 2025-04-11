
import React from 'react';
import ReservationForm from '@/components/ReservationForm';
import { MapPin, Phone, Clock } from 'lucide-react';

const Reservations = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.8), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Reserve Your Table
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            Join us for an unforgettable dining experience in the heart of Powai.
          </p>
        </div>
      </section>
      
      {/* Reservation Form Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-playfair font-bold text-eve-green">
                Join Us at Eve
              </h2>
              <p className="text-eve-black/80">
                At Eve, we believe in creating memorable experiences around food, drinks, and ambiance. Whether you're planning a romantic dinner, a special celebration, or simply want to enjoy our culinary delights, we're excited to welcome you.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair text-eve-green">Location & Hours</h3>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Eve Restaurant</p>
                    <p className="text-eve-black/70">
                      Central Avenue, Hiranandani Gardens, Powai,<br />
                      Mumbai, Maharashtra 400076
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-eve-black/70">
                      Monday - Thursday: 12:00 PM - 11:00 PM<br />
                      Friday - Sunday: 12:00 PM - 1:00 AM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Reservations</p>
                    <p className="text-eve-black/70">
                      <a href="tel:+919876543210" className="hover:text-eve-rose transition-colors">
                        +91 987 654 3210
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-playfair text-eve-green mb-4">Reservation Policy</h3>
                <ul className="list-disc pl-5 space-y-2 text-eve-black/80">
                  <li>Reservations are recommended, especially for weekends and events.</li>
                  <li>We hold reservations for 15 minutes past the scheduled time.</li>
                  <li>For parties of 8 or more, please call us directly.</li>
                  <li>Special arrangements can be made for private events and celebrations.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg p-8 rounded-md">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.034596150098!2d72.90529531744384!3d19.107925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c8a4872451%3A0x33b0c619bb3ffa60!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681209583339!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Eve Restaurant Location" 
          className="absolute inset-0"
        ></iframe>
        
        <div className="absolute bottom-8 left-8 p-6 bg-eve-green text-eve-cream max-w-sm shadow-xl">
          <h3 className="text-2xl font-playfair font-bold mb-2">Find Us</h3>
          <p className="mb-4">
            Located in the serene neighborhood of Hiranandani Gardens, Eve is easily accessible from all parts of Mumbai.
          </p>
          <a 
            href="https://goo.gl/maps/5Q3ZJ4L8x8YJX7xP6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-eve-rose hover:underline"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
};

export default Reservations;
