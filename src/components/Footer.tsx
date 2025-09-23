import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Instagram, Linkedin, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Debate Tournaments', href: '#programs' },
    { name: 'Training Workshops', href: '#programs' },
    { name: 'Stage Confidence', href: '#programs' },
    { name: 'Debate-a-thons', href: '#programs' }
  ];

  const locations = [
    'Tashkent', 'Samarkand', 'Bukhara', 'Navoi', 'Jizzakh', 'Kashkadarya', 'Fergana'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/Youth/lovable-uploads/ypc-logo.png" 
                alt="Youth Perspective Speaking Club Logo" 
                className="h-20 sm:h-24 md:h-32 w-auto object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Empowering the next generation of leaders through debate, research, communication, and critical thinking skills across Uzbekistan.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                className="w-10 h-10 border border-white/50 text-white hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                onClick={() => window.open('https://t.me/youthperspective', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button 
                className="w-10 h-10 border border-white/50 text-white hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                onClick={() => window.open('https://www.instagram.com/youthperspective24/', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button 
                className="w-10 h-10 border border-white/50 text-white hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/youth-perspective-club-project-062761373/?original_referer=https%3A%2F%2Fuz%2Elinkedin%2Ecom%2F&originalSubdomain=uz', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <button 
                    onClick={() => scrollToSection(program.href)}
                    className="font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <button 
                className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                onClick={() => window.open('https://t.me/youthperspective', '_blank')}
              >
                🚀 Join Our Programs
              </button>
            </div>
          </div>

          {/* Locations & Contact */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-6">Our Reach</h3>
            <div className="mb-6">
              <div className="flex items-center text-primary-foreground/80 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="font-inter text-sm">Active in 6+ regions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span 
                    key={location}
                    className="bg-primary-foreground/10 text-primary-foreground rounded-full px-2 py-1 text-xs font-inter"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="font-inter text-primary-foreground/80">
                <strong>Telegram:</strong> <a href="https://t.me/youthperspective" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">@youthperspective</a>
              </div>
              <div className="font-inter text-primary-foreground/80">
                <strong>Instagram:</strong> <a href="https://www.instagram.com/youthperspective24/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">@youthperspective24</a>
              </div>
              <div className="font-inter text-primary-foreground/80">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/youth-perspective-club-project-062761373/?original_referer=https%3A%2F%2Fuz%2Elinkedin%2Ecom%2F&originalSubdomain=uz" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">Youth Perspective Club</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
          </div>
          
          <div className="mt-6 text-center">
            <p className="font-inter text-primary-foreground/60 text-sm">
              Shaping Leaders and Builders of the Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;