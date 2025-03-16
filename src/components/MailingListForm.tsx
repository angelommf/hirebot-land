
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const MailingListForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for joining our mailing list!",
      });
      setName('');
      setSurname('');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Button 
            type="submit" 
            className="bg-[#0A3C5F] hover:bg-[#072A43] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </div>
        <p className="text-sm text-gray-400 text-center">Join our mailing list to receive the latest updates, insights, and special offers from MVP.</p>
      </form>
    </div>
  );
};

export default MailingListForm;
