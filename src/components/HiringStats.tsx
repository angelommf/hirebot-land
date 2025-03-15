
import React from 'react';

const HiringStats = () => {
  return (
    <section id="hiring-stats" className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="pattern-bg absolute inset-0 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0A3C5F] to-[#1C5680] text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Problem with Today's Hiring Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-white">$2,700</div>
                <p className="text-gray-100">Average cost to hire a new employee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-white">68 days</div>
                <p className="text-gray-100">Average time until an offer is accepted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-white">35%</div>
                <p className="text-gray-100">New hires who leave within their first year</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-100 mb-6">
              On average, hiring a new employee costs $2,700 and takes 68 days for an offer to be accepted. But the real problem? 13% of new hires leave within the first 90 days, and 35% don't make it past their first year. The cycle keeps repeating—costing businesses time, money, and productivity. How much is inefficient hiring draining your company?
            </p>
            
            <div className="text-right text-sm text-gray-300">
              — PwC Saratoga Workforce Index, 2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringStats;
