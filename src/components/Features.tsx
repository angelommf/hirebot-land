
import React from 'react';
import { BrainCircuit, Users, Clock, PieChart, Search, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: 'AI-Powered Matching',
      description: 'Our intelligent algorithms analyze skills, experience, and culture fit to find your perfect candidates.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Collaboration',
      description: 'Streamlined tools for your entire hiring team to evaluate and discuss candidates in real-time.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Time-Saving Automation',
      description: 'Automate repetitive tasks like scheduling, initial screening, and follow-ups to save hours.'
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description: 'Gain insights into your hiring process with comprehensive reporting and analytics.'
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Smart Candidate Sourcing',
      description: 'Proactively discover passive candidates that match your exact requirements.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Bias Reduction',
      description: 'Our system helps reduce unconscious bias in the hiring process for more diverse teams.'
    }
  ];

  return (
    <section id="features" className="section bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#0A3C5F]/10 text-[#0A3C5F] text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-[#0A3C5F]">Transform Hiring</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform offers powerful tools designed to make every step of your recruitment process more efficient and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="icon-box bg-[#0A3C5F]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
