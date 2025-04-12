
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MenuPreviewSection = () => {
  return (
    <section className="py-20 bg-eve-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <h2 className="section-title">Taste of Temptation</h2>
              <p className="text-eve-black/80 text-lg">
                Our menu features a tantalizing fusion of global flavors, crafted with locally-sourced ingredients and presented with artistic flair. Each dish tells a story of culinary passion and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-eve-green/20 pb-2">
                  <span className="font-playfair text-eve-green text-lg">Eve's Garden Salad</span>
                  <span className="text-eve-rose">₹450</span>
                </div>
                <div className="flex justify-between border-b border-eve-green/20 pb-2">
                  <span className="font-playfair text-eve-green text-lg">Forbidden Fruit Cocktail</span>
                  <span className="text-eve-rose">₹650</span>
                </div>
                <div className="flex justify-between border-b border-eve-green/20 pb-2">
                  <span className="font-playfair text-eve-green text-lg">Temptation Truffle Pasta</span>
                  <span className="text-eve-rose">₹850</span>
                </div>
              </div>
              <Link to="/menu">
                <Button className="bg-eve-green text-eve-cream hover:bg-eve-green/90 mt-4">
                  Explore Full Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-md shadow-lg group">
                <img 
                  src="/lovable-uploads/df0bed61-283b-451d-b253-40fa390b7252.png" 
                  alt="Eve's food selection" 
                  className="w-full h-auto rounded-md transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-md shadow-lg group mt-6">
                <img 
                  src="/lovable-uploads/e6b42b10-d53b-4289-9dfb-cddcf1f69d7b.png" 
                  alt="Dessert at Eve" 
                  className="w-full h-auto rounded-md transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
