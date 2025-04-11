
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Aarav Sharma",
      role: "Executive Chef",
      bio: "With 15 years of experience in luxury restaurants across Europe and Asia, Chef Aarav brings his passion for global flavors and innovative techniques to Eve's kitchen.",
      imageSrc: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
    },
    {
      name: "Priya Mehta",
      role: "Bar Director",
      bio: "An award-winning mixologist, Priya has crafted Eve's signature cocktail menu, focusing on botanical infusions and unexpected flavor combinations.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    {
      name: "Vikram Kapoor",
      role: "General Manager",
      bio: "With a background in luxury hospitality, Vikram ensures that every aspect of your experience at Eve is seamless, memorable, and exceeds expectations.",
      imageSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"
    },
    {
      name: "Anjali Singh",
      role: "Creative Director",
      bio: "The visionary behind Eve's unique aesthetic, Anjali has created a space that balances luxury, comfort, and Instagram-worthy moments.",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center relative bg-eve-black"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.7), rgba(10, 61, 59, 0.8)), url('/lovable-uploads/a2c7145a-df4c-4111-824b-4b4c5593c95c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-eve-black/80 via-eve-black/60 to-eve-green/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-eve-rose font-playfair max-w-3xl mx-auto">
            A journey through taste, temptation, and the art of dining
          </p>
        </div>
      </section>
      
      {/* Origin Story Section */}
      <section className="py-20 bg-eve-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-eve-green mb-6">
                The Garden of Eden Reimagined
              </h2>
              <div className="space-y-4 text-eve-black/80">
                <p>
                  Eve was born from a passion to create a dining experience that celebrates the sensory pleasures of life - exceptional food, exotic drinks, captivating ambiance, and meaningful connections.
                </p>
                <p>
                  Inspired by the original garden of temptation, we've crafted a modern sanctuary where indulgence is celebrated rather than forbidden. Our restaurant is a tribute to the feminine mystique, with every detail designed to enchant and delight.
                </p>
                <p>
                  Founded in 2023 by a collective of culinary artists, mixologists, and design visionaries, Eve quickly established itself as Powai's premier destination for those seeking an extraordinary dining experience. Our concept brings together global flavors, innovative techniques, and the freshest local ingredients in a setting that feels both luxurious and welcoming.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Eve Restaurant Interior" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-eve-rose h-24 w-24 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 bg-eve-green h-24 w-24 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 61, 59, 0.95), rgba(10, 61, 59, 0.8)), url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-eve-cream">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl mb-12 text-eve-cream/90">
              At Eve, we believe that dining is an art form that engages all the senses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Culinary Excellence</h3>
                <p className="text-eve-cream/80">
                  We combine time-honored techniques with innovative approaches to create dishes that surprise and delight. Every ingredient is thoughtfully sourced and prepared with reverence.
                </p>
              </div>
              
              <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Immersive Atmosphere</h3>
                <p className="text-eve-cream/80">
                  Our space is designed to transport you to another world—one where time slows down and each moment is savored. Every detail contributes to a multi-sensory experience.
                </p>
              </div>
              
              <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Genuine Hospitality</h3>
                <p className="text-eve-cream/80">
                  We believe in creating connections through thoughtful, attentive service that anticipates needs while respecting personal space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-eve-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-eve-green mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-eve-black/80 max-w-2xl mx-auto">
              The passionate individuals who bring Eve's vision to life each day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-eve-green">{member.name}</h3>
                  <p className="text-eve-rose font-medium mb-3">{member.role}</p>
                  <p className="text-eve-black/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-eve-green text-eve-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-12 text-center">Our Values</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 text-center">
                  <div className="w-24 h-24 rounded-full bg-eve-rose/20 flex items-center justify-center mx-auto">
                    <span className="text-4xl text-eve-rose">01</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Sustainability</h3>
                  <p className="text-eve-cream/80">
                    We're committed to reducing our environmental impact through thoughtful sourcing, waste reduction, and energy-efficient practices. We work with local farmers and producers who share our values of sustainable and ethical production.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 text-center">
                  <div className="w-24 h-24 rounded-full bg-eve-rose/20 flex items-center justify-center mx-auto">
                    <span className="text-4xl text-eve-rose">02</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Inclusivity</h3>
                  <p className="text-eve-cream/80">
                    Eve is a space where everyone is welcomed and celebrated. We embrace diversity in our team, our cuisine, and our guests, believing that different perspectives enrich the dining experience for all.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 text-center">
                  <div className="w-24 h-24 rounded-full bg-eve-rose/20 flex items-center justify-center mx-auto">
                    <span className="text-4xl text-eve-rose">03</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-eve-rose">Community</h3>
                  <p className="text-eve-cream/80">
                    We're proud to be part of the vibrant Powai community. Beyond serving delicious food, we aim to contribute positively to our neighborhood through partnerships, events, and initiatives that strengthen local connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-eve-cream text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-eve-green mb-6">
            Experience Eve For Yourself
          </h2>
          <p className="text-lg text-eve-black/80 max-w-2xl mx-auto mb-10">
            We invite you to join us and discover why Eve has become Powai's destination for those seeking extraordinary dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/reservations">
              <Button className="bg-eve-green hover:bg-eve-green/90 text-eve-cream">
                Make a Reservation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-eve-green text-eve-green hover:bg-eve-green hover:text-eve-cream">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
