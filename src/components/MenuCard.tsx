
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  imageSrc: string;
  ingredients?: string[];
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
}

const MenuCard = ({
  name,
  description,
  price,
  category,
  imageSrc,
  ingredients = [],
  isVegetarian = false,
  isSpicy = false,
  isSignature = false,
}: MenuCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-eve-green/90 text-eve-cream text-xs uppercase tracking-wider px-2 py-1">
          {category}
        </div>
        
        {/* Dietary Badges */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {isVegetarian && (
            <div className="bg-green-600/90 text-white text-xs uppercase tracking-wider px-2 py-1">
              Veg
            </div>
          )}
          {isSpicy && (
            <div className="bg-red-600/90 text-white text-xs uppercase tracking-wider px-2 py-1">
              Spicy
            </div>
          )}
        </div>
        
        {/* Ingredients Popup on Hover */}
        {ingredients.length > 0 && isHovered && (
          <div className="absolute inset-0 bg-eve-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-eve-cream text-lg font-playfair font-bold mb-2">Ingredients</h4>
            <ul className="text-eve-cream/90 text-sm">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="inline">
                  {ingredient}{index < ingredients.length - 1 ? ', ' : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-playfair font-bold text-eve-green">
            {name}
            {isSignature && (
              <span className="ml-2 text-eve-rose text-sm italic">Signature</span>
            )}
          </h3>
          <span className="text-lg font-medium text-eve-black">{price}</span>
        </div>
        <p className="text-eve-black/70 text-sm">{description}</p>
      </div>
      
      {/* Add Button (for future ordering functionality) */}
      <button className="absolute bottom-4 right-4 bg-eve-rose text-eve-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MenuCard;
