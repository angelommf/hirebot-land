
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const MailingListForm = () => {
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
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-3 text-[#0A3C5F]">Stay Updated</h3>
      <p className="text-gray-600 mb-4">Join our mailing list to receive the latest updates, insights, and special offers from MVP.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button 
            type="submit" 
            className="bg-[#0A3C5F] hover:bg-[#072A43]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </div>
        <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
      </form>
    </div>
  );
};

export default MailingListForm;
