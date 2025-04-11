
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.8), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Contact Us
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-eve-green mb-6">Get in Touch</h2>
                <p className="text-eve-black/80 mb-8">
                  Have questions, feedback, or special requests? Our team is here to assist you. Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-eve-green">Location</p>
                      <p className="text-eve-black/70">
                        Central Avenue, Hiranandani Gardens, Powai,<br />
                        Mumbai, Maharashtra 400076
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-eve-green">Phone</p>
                      <p className="text-eve-black/70">
                        <a href="tel:+919876543210" className="hover:text-eve-rose transition-colors">
                          +91 987 654 3210
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-eve-green">Email</p>
                      <p className="text-eve-black/70">
                        <a href="mailto:info@everestaurant.com" className="hover:text-eve-rose transition-colors">
                          info@everestaurant.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-eve-rose flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-eve-green">Opening Hours</p>
                      <p className="text-eve-black/70">
                        Monday - Thursday: 12:00 PM - 11:00 PM<br />
                        Friday - Sunday: 12:00 PM - 1:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-playfair font-bold text-eve-green mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-eve-green text-eve-cream flex items-center justify-center rounded-full hover:bg-eve-rose transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-eve-green text-eve-cream flex items-center justify-center rounded-full hover:bg-eve-rose transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-eve-green text-eve-cream flex items-center justify-center rounded-full hover:bg-eve-rose transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-eve-green/10">
                <h3 className="text-2xl font-playfair font-bold text-eve-green mb-4">
                  Instant Message
                </h3>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="bg-white shadow-lg p-8 rounded-md">
              <h3 className="text-2xl font-playfair font-bold text-eve-green mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
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
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-10 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-2">
                Do you require reservations?
              </h3>
              <p className="text-eve-black/70">
                While walk-ins are welcome, we highly recommend making a reservation, especially for weekends and special events. You can reserve through our website, by phone, or via WhatsApp.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-2">
                Is there a dress code?
              </h3>
              <p className="text-eve-black/70">
                We encourage smart casual attire. While we don't have a strict dress code, we ask guests to refrain from wearing sportswear or beachwear.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-2">
                Do you accommodate dietary restrictions?
              </h3>
              <p className="text-eve-black/70">
                Absolutely! Our menu features various vegetarian options, and we can accommodate most dietary restrictions with advance notice. Please inform us of any allergies or special dietary needs when making your reservation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-2">
                Can I host a private event at Eve?
              </h3>
              <p className="text-eve-black/70">
                Yes, we offer several spaces for private dining and events. Whether you're planning an intimate dinner, a corporate gathering, or a celebration, our events team will work with you to create a bespoke experience.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-eve-black/70 mb-4">
              Don't see your question answered here?
            </p>
            <Button className="bg-eve-green hover:bg-eve-green/90 text-eve-cream">
              Ask Us Directly
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
