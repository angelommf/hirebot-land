
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-hire-super-light/90 to-white/60 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-hire-light text-hire text-sm font-medium mb-6 animate-fade-in">
            Rethinking the Hiring Process
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="gradient-text">Revolutionize</span> How You Hire Talent
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Our AI-powered platform transforms your recruitment process, finding the perfect candidates faster and more efficiently than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Button className="bg-hire hover:bg-hire-dark text-white text-lg px-8 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-xl">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative max-w-4xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-hire to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="HireBot Platform Interface" 
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 w-max animate-float">
            <div className="w-10 h-10 rounded-full bg-hire-light flex items-center justify-center">
              <span className="text-hire font-bold">96%</span>
            </div>
            <p className="text-sm font-medium">Average improvement in time-to-hire</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
