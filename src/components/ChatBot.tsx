
import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 bg-[#1a4973] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#1a4973]/80"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>

      {/* Chatbot Container */}
      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden chatbot-container',
          isOpen ? 'visible' : 'hidden'
        )}
      >
        <div className="bg-[#1a4973] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <h3 className="font-medium">MVP Assistant</h3>
          </div>
          <button
            onClick={toggleChatbot}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close chat assistant"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="bg-white h-96 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="bg-[#1a4973]/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">
                  Hi there! I'm your AI hiring assistant. How can I help you with your recruitment needs today?
                </p>
              </div>
            </div>
            
            {/* This is a placeholder for your custom chatbot implementation */}
            <div className="text-center text-xs text-gray-400 py-2">
              Your custom chatbot code will go here
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 border-t">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4973]/50"
            />
            <Button className="bg-[#1a4973] hover:bg-[#1a4973]/80 text-white">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
