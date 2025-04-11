
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GalleryItem from '@/components/GalleryItem';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'food', label: 'Food' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'events', label: 'Events' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      title: "Eve Restaurant Interior",
      category: "interiors",
      imageSrc: "/lovable-uploads/a2c7145a-df4c-4111-824b-4b4c5593c95c.png"
    },
    {
      id: 2,
      title: "Exotic Cocktail",
      category: "cocktails",
      imageSrc: "/lovable-uploads/0491d272-ac12-4613-85f9-1363405b2bbd.png"
    },
    {
      id: 3,
      title: "Pastry Selection",
      category: "food",
      imageSrc: "/lovable-uploads/44b69435-ae39-4cc1-8222-4edaaff45be2.png"
    },
    {
      id: 4,
      title: "Eve Branded Wine Glasses",
      category: "interiors",
      imageSrc: "/lovable-uploads/37d89383-87f1-4bf3-b93d-1d825ac2959f.png"
    },
    {
      id: 5,
      title: "Gourmet Pizza",
      category: "food",
      imageSrc: "/lovable-uploads/df0bed61-283b-451d-b253-40fa390b7252.png"
    },
    {
      id: 6,
      title: "Craft Cocktails",
      category: "cocktails",
      imageSrc: "/lovable-uploads/f0f9bce7-dcc2-4d69-96dc-be4e2382ebcd.png"
    },
    {
      id: 7,
      title: "Lush Restaurant Entrance",
      category: "interiors",
      imageSrc: "/lovable-uploads/bf7242ea-9d07-4ef8-b293-1aba1cdbf406.png"
    },
    {
      id: 8,
      title: "Signature Cheesecake",
      category: "food",
      imageSrc: "/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png"
    },
    {
      id: 9,
      title: "Festive Interiors",
      category: "interiors",
      imageSrc: "/lovable-uploads/f05fc913-3c45-4354-a32b-e4a819af7cca.png"
    },
    {
      id: 10,
      title: "Rose Gold Cocktail",
      category: "cocktails",
      imageSrc: "https://images.unsplash.com/photo-1560512823-829485b8bf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
    },
    {
      id: 11,
      title: "Private Dining Room",
      category: "interiors",
      imageSrc: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 12,
      title: "Wine Tasting Event",
      category: "events",
      imageSrc: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];
  
  // Filter gallery items based on active category
  const filteredItems = galleryItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.8), rgba(10, 61, 59, 0.7)), url(/lovable-uploads/f0f9bce7-dcc2-4d69-96dc-be4e2382ebcd.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            The Garden of Senses
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            Immerse yourself in the visual story of Eve's enchanting ambiance, culinary delights, and memorable moments.
          </p>
        </div>
      </section>
      
      {/* Gallery Navigation */}
      <section className="py-8 bg-eve-cream">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-eve-cream border border-eve-green/20 mx-auto flex justify-center">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="data-[state=active]:bg-eve-green data-[state=active]:text-eve-cream"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 bg-eve-cream">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  imageSrc={item.imageSrc}
                  category={item.category}
                  title={item.title}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-playfair text-eve-green mb-2">
                No images in this category yet
              </h3>
              <p className="text-eve-black/70">
                Please check another category or come back soon for updates.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-eve-black/70 max-w-2xl mx-auto mb-10">
            Tag your photos with #EveRestaurant for a chance to be featured on our website and social media.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "/lovable-uploads/37d89383-87f1-4bf3-b93d-1d825ac2959f.png",
              "/lovable-uploads/df0bed61-283b-451d-b253-40fa390b7252.png",
              "/lovable-uploads/bf7242ea-9d07-4ef8-b293-1aba1cdbf406.png",
              "/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png",
              "/lovable-uploads/f05fc913-3c45-4354-a32b-e4a819af7cca.png",
              "/lovable-uploads/f0f9bce7-dcc2-4d69-96dc-be4e2382ebcd.png"
            ].map((imageSrc, index) => (
              <a 
                key={index} 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group overflow-hidden"
              >
                <div className="aspect-square">
                  <img 
                    src={imageSrc} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-eve-green/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-eve-cream font-medium">View Post</span>
                </div>
              </a>
            ))}
          </div>
          
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-10 text-eve-green hover:text-eve-rose font-medium transition-colors"
          >
            @everestaurant
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
