
import React from 'react';
import { cn } from '@/lib/utils';

interface HighlightCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const HighlightCard = ({ title, description, imageSrc, imageAlt, index }: HighlightCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden",
        index % 2 === 0 ? "md:translate-y-8" : ""
      )}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eve-black/80 via-eve-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-2xl font-playfair font-bold text-eve-cream mb-2">{title}</h3>
            <p className="text-eve-cream/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
            <div className="h-0.5 w-16 bg-eve-rose"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
