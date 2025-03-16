
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Define Your Ideal Candidate',
      description: 'Use our intuitive tools to create detailed job descriptions and candidate profiles.'
    },
    {
      number: '02',
      title: 'AI-Powered Candidate Matching',
      description: 'Our algorithms find and rank the best candidates based on your requirements.'
    },
    {
      number: '03',
      title: 'Streamlined Interview Process',
      description: 'Conduct and evaluate interviews efficiently with our collaborative platform.'
    },
    {
      number: '04',
      title: 'Make Data-Driven Decisions',
      description: 'Access comprehensive analytics to help you make the best hiring decisions.'
    }
  ];

  const benefits = [
    'Reduce time-to-hire by up to 75%',
    'Increase quality-of-hire metrics',
    'Improve candidate experience',
    'Reduce recruitment costs',
    'Build more diverse teams'
  ];

  return (
    <section id="how-it-works" className="section bg-[#1a4973]/5 clip-path-slant">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1a4973]/10 text-[#1a4973] text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="text-[#1a4973]">Simple Process</span> for Remarkable Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined approach helps you find and hire the best talent with minimal friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#1a4973] text-[#1a4973] font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1a4973] to-[#1a4973]/80 rounded-2xl blur opacity-20"></div>
            <div className="glass-card rounded-2xl p-8 relative opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-bold mb-6">The Results You'll See</h3>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1a4973] flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-[#1a4973] hover:bg-[#1a4973]/80 text-white">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
