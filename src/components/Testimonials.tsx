
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MVP has completely transformed our recruitment process. We've reduced our time-to-hire by 70% while finding better culture fits for our team.",
      author: "Sarah Johnson",
      position: "Head of HR, TechVision Inc.",
      rating: 5
    },
    {
      quote: "The AI-powered candidate matching is like having an entire recruitment team working 24/7. We're finding qualified candidates we would have missed with traditional methods.",
      author: "Michael Chen",
      position: "Talent Acquisition Lead, Innovate Labs",
      rating: 5
    },
    {
      quote: "As a fast-growing startup, we needed to scale our team quickly without sacrificing quality. MVP delivered beyond our expectations and saved us thousands in agency fees.",
      author: "Emma Rodriguez",
      position: "COO, FinTech Solutions",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1a4973]/10 text-[#1a4973] text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-[#1a4973]">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with our revolutionary hiring platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-[#1a4973]/10 p-8 md:p-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join 1,000+ companies revolutionizing their hiring
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, organizations of all sizes are transforming their recruitment process with our platform.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-gray-500 font-medium text-lg">Company A</div>
            <div className="text-gray-500 font-medium text-lg">Company B</div>
            <div className="text-gray-500 font-medium text-lg">Company C</div>
            <div className="text-gray-500 font-medium text-lg">Company D</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
