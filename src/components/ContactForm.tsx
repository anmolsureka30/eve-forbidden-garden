
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !inquiryType || !message) {
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
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setInquiryType('');
      setMessage('');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-eve-black">
            Name <span className="text-red-500">*</span>
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
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-eve-black">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <Select value={inquiryType} onValueChange={setInquiryType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="reservation">Reservation Issues</SelectItem>
              <SelectItem value="event">Event Booking</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="collaboration">Collaboration</SelectItem>
              <SelectItem value="press">Press/Media</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-eve-black">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 border border-eve-green/20 focus:border-eve-green focus:outline-none"
          placeholder="How can we help you?"
          rows={6}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-eve-green hover:bg-eve-green/90 text-eve-cream py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
