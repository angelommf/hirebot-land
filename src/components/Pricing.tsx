
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per month',
      description: 'Perfect for small teams getting started with better hiring.',
      features: [
        'Up to 5 active job postings',
        'AI candidate matching',
        'Basic analytics',
        'Email support',
        '1,000 candidate profiles'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per month',
      description: 'Ideal for growing companies with regular hiring needs.',
      features: [
        'Up to 15 active job postings',
        'Advanced AI matching',
        'Comprehensive analytics',
        'Priority support',
        'Team collaboration tools',
        '10,000 candidate profiles',
        'Custom career page'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with complex needs.',
      features: [
        'Unlimited job postings',
        'Premium AI features',
        'Advanced reporting',
        'Dedicated account manager',
        'API access',
        'Custom integrations',
        'Unlimited candidate profiles',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section bg-gradient-to-b from-white to-[#1a4973]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1a4973]/10 text-[#1a4973] text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-[#1a4973]">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your organization's recruitment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl border ${plan.popular ? 'border-[#1a4973] shadow-lg' : 'border-gray-200'} p-8 relative opacity-0 animate-fade-up bg-white`}
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1a4973] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1a4973] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'bg-[#1a4973] hover:bg-[#1a4973]/80 text-white' : 'bg-white text-[#1a4973] border-[#1a4973] hover:bg-[#1a4973]/10'}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
