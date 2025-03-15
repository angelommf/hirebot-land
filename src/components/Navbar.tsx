
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-12',
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/8d749169-7d76-495f-b41d-30a99f36f73f.png" 
              alt="MVP - Most Valuable People" 
              className="h-10"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-hire text-sm font-medium transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-hire text-sm font-medium transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-hire text-sm font-medium transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-hire text-sm font-medium transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-hire text-hire hover:bg-hire hover:text-white transition-colors">
            Log In
          </Button>
          <Button className="bg-hire hover:bg-hire-dark text-white transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-hire px-4 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-hire px-4 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-hire px-4 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-hire px-4 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="w-full border-hire text-hire hover:bg-hire hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-hire hover:bg-hire-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
