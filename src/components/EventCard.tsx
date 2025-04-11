
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface EventCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  isRecurring?: boolean;
  recurrenceDay?: string;
}

const EventCard = ({
  title,
  description,
  imageSrc,
  date,
  startTime,
  endTime,
  location,
  isRecurring = false,
  recurrenceDay,
}: EventCardProps) => {
  return (
    <div className="group bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isRecurring && (
          <div className="absolute top-4 right-4 bg-eve-rose text-eve-black text-xs uppercase tracking-wider px-3 py-1">
            {recurrenceDay}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-playfair font-bold text-eve-green mb-2">{title}</h3>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-eve-black/70">
            <Calendar className="h-4 w-4 mr-2 text-eve-rose" />
            <span>
              {isRecurring 
                ? `Every ${recurrenceDay}` 
                : format(date, 'EEEE, MMMM d, yyyy')}
            </span>
          </div>
          
          <div className="flex items-center text-eve-black/70">
            <Clock className="h-4 w-4 mr-2 text-eve-rose" />
            <span>{startTime} - {endTime}</span>
          </div>
          
          <div className="flex items-center text-eve-black/70">
            <MapPin className="h-4 w-4 mr-2 text-eve-rose" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-eve-black/70 mb-6">{description}</p>
        
        <div className="flex space-x-3">
          <Button className="bg-eve-green hover:bg-eve-green/90 text-eve-cream flex-1">
            Reserve Spot
          </Button>
          <Button variant="outline" className="border-eve-rose text-eve-rose hover:bg-eve-rose/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
