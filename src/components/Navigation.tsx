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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/end/lovable-uploads/34063bc5-78ea-48ac-b6a7-c910f4061ee7.png"
              alt="YPC Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - always visible on screens 480px and up */}
          <div className="hidden min-[480px]:flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-black hover:text-blue-600 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-1 sm:px-2 md:px-3 py-1"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button - visible only on very small screens below 480px */}
          <div className="min-[480px]:hidden">
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

        {/* Mobile Navigation - visible only on very small screens when menu is open */}
        {isMenuOpen && (
          <div className="min-[480px]:hidden border-t bg-white shadow-lg">
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