
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

const InteractiveExperience = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const refreshExperience = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <section id="interactive-experience" className="section bg-gray-50 pattern-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-hire-light text-hire text-sm font-medium mb-4">
            Interactive Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the <span className="gradient-text">HireBot Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Try our interactive demo to see firsthand how our AI-powered platform revolutionizes the hiring process.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button 
              onClick={refreshExperience} 
              variant="outline"
              className="border-hire text-hire hover:bg-hire-light"
            >
              <RefreshCcw className="h-4 w-4 mr-2" />
              Refresh Demo
            </Button>
          </div>
        </div>

        <div className="rounded-xl shadow-xl overflow-hidden bg-white transition-all duration-300">
          <iframe
            ref={iframeRef}
            src="https://www.chatbase.co/chatbot-iframe/Zm8xXgA0YrtWW4sUCcYZj"
            width="100%"
            style={{ height: '700px', minHeight: '700px' }}
            frameBorder="0"
            title="HireBot Interactive Experience"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExperience;
