
import React, { useRef } from 'react';

const InteractiveExperience = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section id="interactive-experience" className="section bg-gray-50 pattern-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#0A3C5F]/10 text-[#0A3C5F] text-sm font-medium mb-4">
            Interactive Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the <span className="text-[#0A3C5F]">MVP Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Try our interactive demo to see firsthand how our AI-powered platform revolutionizes the hiring process.
          </p>
        </div>

        <div className="rounded-xl shadow-xl overflow-hidden bg-white transition-all duration-300">
          <iframe
            ref={iframeRef}
            src="https://www.chatbase.co/chatbot-iframe/Zm8xXgA0YrtWW4sUCcYZj"
            width="100%"
            style={{ height: '700px', minHeight: '700px' }}
            frameBorder="0"
            title="MVP Interactive Experience"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExperience;
