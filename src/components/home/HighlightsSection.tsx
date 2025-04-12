
import React from 'react';
import HighlightCard from '@/components/HighlightCard';

const highlights = [
  {
    title: "Signature Cocktails",
    description: "Expertly crafted exotic concoctions that tantalize the senses.",
    imageSrc: "/lovable-uploads/f0f9bce7-dcc2-4d69-96dc-be4e2382ebcd.png",
    imageAlt: "Signature cocktails at Eve"
  },
  {
    title: "Fine Dining",
    description: "Exquisite culinary creations that celebrate global flavors and local ingredients.",
    imageSrc: "/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png",
    imageAlt: "Beautiful dessert plating at Eve"
  },
  {
    title: "Elegant Atmosphere",
    description: "A lush, captivating ambiance that transports you to a world of luxury.",
    imageSrc: "/lovable-uploads/bf7242ea-9d07-4ef8-b293-1aba1cdbf406.png",
    imageAlt: "The elegant entrance to Eve Restaurant"
  },
  {
    title: "Memorable Experiences",
    description: "Unforgettable moments shared with friends over exceptional food and drinks.",
    imageSrc: "/lovable-uploads/37d89383-87f1-4bf3-b93d-1d825ac2959f.png",
    imageAlt: "Eve branded wine glasses"
  }
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-eve-green relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
  );
};

export default HighlightsSection;
