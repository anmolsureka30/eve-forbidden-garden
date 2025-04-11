
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  imageSrc: string;
  category: string;
  title: string;
  index: number;
}

const GalleryItem = ({ imageSrc, category, title, index }: GalleryItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className={cn(
          "relative overflow-hidden cursor-pointer",
          index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "",
          index % 5 === 0 ? "md:col-span-2" : "",
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square md:h-full w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eve-black/70 via-eve-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="text-eve-cream">
              <span className="text-eve-rose text-sm uppercase tracking-wider">{category}</span>
              <h3 className="text-xl font-playfair font-bold mt-1">{title}</h3>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-eve-rose/80 text-eve-cream w-10 h-10 rounded-full flex items-center justify-center">
                <ZoomIn className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-eve-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={imageSrc} 
              alt={title} 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute -top-12 right-0 text-eve-cream hover:text-eve-rose"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-eve-black/80 text-eve-cream">
              <span className="text-eve-rose text-sm uppercase tracking-wider">{category}</span>
              <h3 className="text-xl font-playfair font-bold mt-1">{title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
