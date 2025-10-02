import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#impact' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#partners' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b-2 border-blue-600 shadow-lg z-[9999]">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/34063bc5-78ea-48ac-b6a7-c910f4061ee7.png`}
              alt="YPC Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - always visible on all screens */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-black hover:text-blue-600 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 py-1"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button - hidden on all screens */}
          <div className="hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - hidden on all screens */}
        {isMenuOpen && (
          <div className="hidden border-t bg-white shadow-lg">
            <div className="px-4 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium text-base transition-colors active:bg-blue-100"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;