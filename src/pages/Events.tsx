
import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import EventCard from '@/components/EventCard';
import { Link } from 'react-router-dom';

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'ladies-night', label: 'Ladies Night' },
    { id: 'live-music', label: 'Live Music' },
    { id: 'food-tasting', label: 'Food Tasting' },
    { id: 'masterclass', label: 'Masterclass' }
  ];
  
  // Sample recurring events
  const recurringEvents = [
    {
      id: 1,
      title: "Ladies Night",
      description: "Join us every Wednesday for special cocktails, exclusive perks, and live DJ sets curated for our female guests.",
      imageSrc: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isRecurring: true,
      recurrenceDay: "Wednesday",
      startTime: "7:00 PM",
      endTime: "11:00 PM",
      location: "Eve, Main Lounge",
      category: "ladies-night"
    },
    {
      id: 2,
      title: "Jazz Fridays",
      description: "Unwind to the smooth sounds of live jazz while enjoying our signature cocktails and special small plates menu.",
      imageSrc: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isRecurring: true,
      recurrenceDay: "Friday",
      startTime: "8:00 PM",
      endTime: "12:00 AM",
      location: "Eve, Lounge Bar",
      category: "live-music"
    },
    {
      id: 3,
      title: "Sunday Brunch",
      description: "A lavish spread featuring international cuisine, free-flowing mimosas, and live acoustic music.",
      imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isRecurring: true,
      recurrenceDay: "Sunday",
      startTime: "11:00 AM",
      endTime: "3:00 PM",
      location: "Eve, Garden Terrace",
      category: "food-tasting"
    }
  ];
  
  // Sample upcoming special events
  const specialEvents = [
    {
      id: 4,
      title: "Cocktail Masterclass",
      description: "Learn the art of mixology from our expert bartenders. Create and taste Eve's signature cocktails while discovering the secrets behind them.",
      imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      date: addDays(new Date(), 5),
      startTime: "6:00 PM",
      endTime: "8:00 PM",
      location: "Eve, Bar Lounge",
      category: "masterclass"
    },
    {
      id: 5,
      title: "Wine Tasting Evening",
      description: "Join our sommelier for a journey through premium wines from around the world, paired with exquisite cheese and charcuterie.",
      imageSrc: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: addDays(new Date(), 12),
      startTime: "7:00 PM",
      endTime: "9:30 PM",
      location: "Eve, Private Dining Room",
      category: "food-tasting"
    },
    {
      id: 6,
      title: "Guest Chef Night: Mediterranean Feast",
      description: "An exclusive dining experience featuring renowned Chef Maria Gomez and her contemporary take on Mediterranean classics.",
      imageSrc: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: addDays(new Date(), 18),
      startTime: "7:30 PM",
      endTime: "10:30 PM",
      location: "Eve, Main Dining Room",
      category: "food-tasting"
    },
    {
      id: 7,
      title: "Live DJ: Tropical House",
      description: "Dance the night away with tropical house beats by Mumbai's top DJ, complemented by special themed cocktails.",
      imageSrc: "https://images.unsplash.com/photo-1571266028253-6c7f1cffe890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: addDays(new Date(), 25),
      startTime: "9:00 PM",
      endTime: "1:00 AM",
      location: "Eve, Lounge Bar",
      category: "live-music"
    }
  ];

  // Filter events based on selected filter
  const filteredRecurringEvents = recurringEvents.filter(
    event => activeFilter === 'all' || event.category === activeFilter
  );
  
  const filteredSpecialEvents = specialEvents.filter(
    event => activeFilter === 'all' || event.category === activeFilter
  );

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 61, 59, 0.8), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-eve-cream mb-4">
            Experience Eve
          </h1>
          <p className="text-eve-cream/80 text-xl max-w-2xl mx-auto">
            Discover our specially curated events designed to delight all your senses.
          </p>
        </div>
      </section>
      
      {/* Calendar & Filters Section */}
      <section className="py-12 bg-eve-cream border-b border-eve-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-auto justify-start text-left font-normal border-eve-green/20",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={
                    activeFilter === filter.id 
                      ? "bg-eve-green text-eve-cream"
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
      
      {/* Regular Events Section */}
      <section className="py-16 bg-eve-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-10">
            Regular Events
          </h2>
          
          {filteredRecurringEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecurringEvents.map(event => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  imageSrc={event.imageSrc}
                  date={new Date()} // Not used for recurring events
                  startTime={event.startTime}
                  endTime={event.endTime}
                  location={event.location}
                  isRecurring={event.isRecurring}
                  recurrenceDay={event.recurrenceDay}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-lg shadow-md">
              <p className="text-eve-black/70">No regular events in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Special Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-eve-green mb-10">
            Upcoming Special Events
          </h2>
          
          {filteredSpecialEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredSpecialEvents.map(event => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  imageSrc={event.imageSrc}
                  date={event.date}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  location={event.location}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-eve-cream rounded-lg shadow-md">
              <p className="text-eve-black/70">No special events in this category right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Private Events Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 61, 59, 0.9), rgba(10, 61, 59, 0.7)), url(https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-eve-cream">
            <h2 className="text-4xl font-playfair font-bold mb-6">Host Your Private Event</h2>
            <p className="text-eve-cream/90 text-lg mb-8">
              From intimate celebrations to corporate gatherings, Eve offers a stunning backdrop for your special occasions. Our dedicated events team will work with you to create a bespoke experience.
            </p>
            <div className="space-y-6">
              <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-playfair font-bold mb-2">Available Spaces</h3>
                <ul className="text-eve-cream/80 space-y-2">
                  <li>Main Dining Room (up to 60 guests)</li>
                  <li>Private Dining Suite (up to 18 guests)</li>
                  <li>Garden Terrace (up to 40 guests)</li>
                  <li>Full Venue Buyout (up to 120 guests)</li>
                </ul>
              </div>
              
              <Link to="/contact">
                <Button className="bg-eve-rose hover:bg-eve-rose/90 text-eve-black">
                  Inquire About Private Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
