
import React from 'react';
import { ExternalLink, Calendar, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Press = () => {
  const pressFeatures = [
    {
      id: 1,
      title: "Eve: Powai's New Garden of Culinary Delights",
      publication: "Mumbai Food Guide",
      date: "March 15, 2023",
      excerpt: "Eve brings a fresh concept to Powai's dining scene, blending luxury with botanical elements in a space that feels both intimate and dramatic...",
      imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "The 10 Best New Restaurants in Mumbai",
      publication: "Culinary Chronicles",
      date: "April 5, 2023",
      excerpt: "Claiming the #3 spot on our list, Eve Restaurant stands out with its bold flavors and even bolder design choices. The concept draws inspiration from the garden of temptation...",
      imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Meet the Mixologist Behind Eve's Exotic Cocktails",
      publication: "Spirits & Mixology Today",
      date: "May 12, 2023",
      excerpt: "We sat down with Priya Mehta, the award-winning mixologist crafting Eve's show-stopping cocktails. Her botanical infusions and unexpected flavor combinations are setting new standards...",
      imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      link: "#"
    }
  ];
  
  const testimonials =  [
    {
      id: 1,
      quote: "Eve creates a dining experience that seduces all the senses - from the lush interiors to the exquisite plating and bold flavor combinations. It's a welcome addition to Mumbai's culinary landscape.",
      author: "Anjali Kapoor",
      title: "Food Critic, Mumbai Mirror"
    },
    {
      id: 2,
      quote: "The cocktail program at Eve deserves special recognition for its innovation and execution. Each drink tells a story, with presentations that are as impressive as the flavors themselves.",
      author: "Rajiv Desai",
      title: "Beverage Director, Liquid Arts Institute"
    },
    {
      id: 3,
      quote: "In a city filled with fantastic dining options, Eve stands out by creating an ambiance that feels both luxurious and welcoming. The attention to detail extends from the décor to the service to the menu.",
      author: "Priyanka Chopra",
      title: "Lifestyle Influencer"
    }
  ];
  
  const accolades = [
    {
      id: 1,
      title: "Best New Restaurant",
      organization: "Mumbai Food Awards",
      year: "2023"
    },
    {
      id: 2,
      title: "Top 10 Cocktail Menus",
      organization: "India Beverage Association",
      year: "2023"
    },
    {
      id: 3,
      title: "Excellence in Interior Design",
      organization: "Hospitality Design Awards",
      year: "2023"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.8), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Press & Features
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            Discover what the media and critics are saying about Eve Restaurant.
          </p>
        </div>
      </section>
      
      {/* Press Features Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-10">
            Media Coverage
          </h2>
          
          <div className="space-y-12">
            {pressFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="md:col-span-2 overflow-hidden rounded-md">
                  <img 
                    src={feature.imageSrc} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-eve-rose font-medium">{feature.publication}</span>
                      <span className="mx-2 text-eve-black/30">|</span>
                      <div className="flex items-center text-eve-black/60 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {feature.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-eve-green mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-eve-black/70 mb-6">
                      {feature.excerpt}
                    </p>
                  </div>
                  <a 
                    href={feature.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eve-green hover:text-eve-rose transition-colors"
                  >
                    Read Full Article
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-eve-green text-eve-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-10 text-center">
            What the Critics Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-black/20 p-8 rounded-lg backdrop-blur-sm"
              >
                <Quote className="h-10 w-10 text-eve-rose mb-4 opacity-50" />
                <p className="text-eve-cream/90 text-lg italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-playfair font-bold text-eve-rose">{testimonial.author}</p>
                  <p className="text-eve-cream/70">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Accolades Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-10 text-center">
            Awards & Accolades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {accolades.map((accolade) => (
              <div 
                key={accolade.id} 
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-eve-rose flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-white"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h3 className="text-xl font-playfair font-bold text-eve-green mb-2">
                  {accolade.title}
                </h3>
                <p className="text-eve-black/70">{accolade.organization}</p>
                <p className="text-eve-rose font-medium">{accolade.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Media Kit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-6">
            Media Resources
          </h2>
          <p className="text-eve-black/70 max-w-2xl mx-auto mb-10">
            Looking to feature Eve in your publication? Access our press kit, high-resolution images, and connect with our media relations team.
          </p>
          
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-eve-cream p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-4">
                Press Kit
              </h3>
              <p className="text-eve-black/70 mb-6">
                Download our comprehensive press kit including fact sheets, executive bios, and our restaurant's story.
              </p>
              <Button className="bg-eve-green hover:bg-eve-green/90 text-eve-cream w-full">
                Download Press Kit
              </Button>
            </div>
            
            <div className="bg-eve-cream p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-bold text-eve-green mb-4">
                Media Inquiries
              </h3>
              <p className="text-eve-black/70 mb-6">
                For interview requests, additional information, or to arrange a visit, please contact our media relations team.
              </p>
              <Link to="/contact">
                <Button className="bg-eve-rose hover:bg-eve-rose/90 text-eve-black w-full">
                  Contact Media Relations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Press;
