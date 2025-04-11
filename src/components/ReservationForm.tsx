
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ReservationForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', 
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', 
    '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!date || !time || !name || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Reservation Confirmed!",
        description: `We've received your reservation for ${format(date, 'PPP')} at ${time}.`,
      });
      
      // Reset form
      setDate(undefined);
      setTime('');
      setGuests('2');
      setName('');
      setEmail('');
      setPhone('');
      setSpecialRequests('');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4 md:col-span-2">
        <h3 className="text-2xl font-playfair font-bold text-eve-green">Book Your Table</h3>
        <p className="text-eve-black/70">
          Reserve your spot in our garden of temptation. For parties larger than 8, please call us directly.
        </p>
      </div>
      
      {/* Date Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Date <span className="text-red-500">*</span>
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => {
                // Disable dates in the past
                return date < new Date(new Date().setHours(0, 0, 0, 0));
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* Time Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Time <span className="text-red-500">*</span>
        </label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time">
              {time ? (
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                </div>
              ) : (
                <span>Select time</span>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Number of Guests */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Number of Guests <span className="text-red-500">*</span>
        </label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select guests">
              {guests && (
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Contact Information */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
          placeholder="Your phone number"
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-eve-black">
          Special Requests
        </label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
          placeholder="Any special requests or dietary requirements?"
          rows={4}
        />
      </div>
      
      <div className="md:col-span-2">
        <Button 
          type="submit" 
          className="w-full bg-eve-green hover:bg-eve-green/90 text-eve-cream py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Confirming Reservation..." : "Confirm Reservation"}
        </Button>
      </div>
      
      <div className="md:col-span-2 text-center text-eve-black/60 text-sm">
        By making a reservation, you agree to our <a href="#" className="text-eve-rose hover:underline">reservation policy</a>.
      </div>
    </form>
  );
};

export default ReservationForm;
