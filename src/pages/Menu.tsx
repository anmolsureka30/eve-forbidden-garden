
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuCard from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'mocktails', label: 'Mocktails' }
  ];
  
  const dietaryFilters = [
    { id: 'all', label: 'All' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten Free' }
  ];
  
  const [activeDietaryFilter, setActiveDietaryFilter] = useState('all');
  
  const menuItems = [
    {
      id: 1,
      name: "Forbidden Fruit Martini",
      description: "Pomegranate vodka, elderflower liqueur, fresh lime, apple foam",
      price: "₹650",
      category: "cocktails",
      imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      ingredients: ["Pomegranate vodka", "Elderflower liqueur", "Fresh lime juice", "Apple foam", "Edible gold flakes"],
      isVegetarian: true,
      isSignature: true
    },
    {
      id: 2,
      name: "Eve's Garden Salad",
      description: "Fresh greens, heirloom tomatoes, candied walnuts, feta, raspberry vinaigrette",
      price: "₹450",
      category: "starters",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ingredients: ["Mixed greens", "Heirloom tomatoes", "Candied walnuts", "Feta cheese", "Raspberry vinaigrette"],
      isVegetarian: true
    },
    {
      id: 3,
      name: "Temptation Truffle Pasta",
      description: "Handmade fettuccine, black truffle, wild mushrooms, parmesan",
      price: "₹850",
      category: "mains",
      imageSrc: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ingredients: ["Handmade fettuccine", "Black truffle", "Wild mushrooms", "Parmesan", "Truffle oil"],
      isVegetarian: true,
      isSignature: true
    },
    {
      id: 4,
      name: "Forbidden Mousse",
      description: "Dark chocolate mousse, raspberry gel, gold flakes, hazelnut crumble",
      price: "₹450",
      category: "desserts",
      imageSrc: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      ingredients: ["Dark chocolate", "Raspberry gel", "Edible gold flakes", "Hazelnut crumble"],
      isVegetarian: true
    },
    {
      id: 5,
      name: "Eden Spice Sour",
      description: "Bourbon, cinnamon, fresh lemon, egg white, angostura bitters",
      price: "₹600",
      category: "cocktails",
      imageSrc: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ingredients: ["Bourbon", "Cinnamon syrup", "Fresh lemon juice", "Egg white", "Angostura bitters"],
      isVegetarian: false
    },
    {
      id: 6,
      name: "Paradise Mule",
      description: "Vodka, fresh lime, ginger beer, cucumber, mint",
      price: "₹550",
      category: "cocktails",
      imageSrc: "https://images.unsplash.com/photo-1613063035869-58d36f32a74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      ingredients: ["Vodka", "Fresh lime juice", "Ginger beer", "Cucumber", "Mint"],
      isVegetarian: true
    },
    {
      id: 7,
      name: "Siren's Seafood Platter",
      description: "Grilled lobster, prawns, scallops, lemon butter, saffron rice",
      price: "₹1950",
      category: "mains",
      imageSrc: "https://images.unsplash.com/photo-1565344412971-f64be8eeacfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      ingredients: ["Lobster", "Prawns", "Scallops", "Lemon butter sauce", "Saffron rice"],
      isVegetarian: false,
      isSpicy: true,
      isSignature: true
    },
    {
      id: 8,
      name: "Velvet Garden",
      description: "Cucumber, mint, elderflower, soda, lime",
      price: "₹350",
      category: "mocktails",
      imageSrc: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      ingredients: ["Cucumber", "Mint", "Elderflower syrup", "Soda water", "Fresh lime"],
      isVegetarian: true
    },
  ];
  
  // Filter menu items based on active category and dietary filter
  const filteredMenuItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    let dietaryMatch = true;
    
    if (activeDietaryFilter === 'vegetarian') {
      dietaryMatch = item.isVegetarian === true;
    } else if (activeDietaryFilter === 'vegan') {
      dietaryMatch = item.isVegetarian === true && !item.ingredients.some(i => 
        ['cheese', 'cream', 'butter', 'milk', 'egg'].some(dairy => i.toLowerCase().includes(dairy))
      );
    }
    
    return categoryMatch && dietaryMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative bg-eve-green"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.9), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Taste of Temptation
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            Indulge in a curated selection of dishes and drinks designed to delight the senses.
          </p>
        </div>
      </section>
      
      {/* Menu Navigation & Filters */}
      <section className="py-12 bg-eve-cream border-b border-eve-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-eve-cream border border-eve-green/20">
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
            
            <div className="flex space-x-2">
              {dietaryFilters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeDietaryFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveDietaryFilter(filter.id)}
                  className={
                    activeDietaryFilter === filter.id 
                      ? "bg-eve-rose text-eve-black"
                      : "border-eve-green/20 text-eve-black hover:bg-eve-green/5"
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          {filteredMenuItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenuItems.map(item => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  imageSrc={item.imageSrc}
                  ingredients={item.ingredients}
                  isVegetarian={item.isVegetarian}
                  isSpicy={item.isSpicy}
                  isSignature={item.isSignature}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-playfair text-eve-green mb-2">
                No items match your selection
              </h3>
              <p className="text-eve-black/70 mb-6">
                Please try another combination of filters
              </p>
              <Button 
                onClick={() => {
                  setActiveCategory('all');
                  setActiveDietaryFilter('all');
                }}
                className="bg-eve-green text-eve-cream"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Reservation CTA */}
      <section className="py-20 bg-eve-green text-eve-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready to Experience Eve?
          </h2>
          <p className="text-eve-cream/80 text-lg max-w-2xl mx-auto mb-8">
            Reserve your table now to indulge in our full menu and bespoke cocktail experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/reservations">
              <Button className="bg-eve-rose hover:bg-eve-rose/90 text-eve-black">
                Reserve a Table
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" className="border-eve-cream text-eve-cream hover:bg-eve-cream/10">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
