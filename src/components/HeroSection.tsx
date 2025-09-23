import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroCollage from '@/assets/hero-collage.jpg';

const HeroSection = () => {
  const scrollToImpact = () => {
    const element = document.querySelector('#impact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCollage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
          Shaping Leaders and
          <span className="block text-accent">Builders of the Future</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-1 sm:px-2">
        Youth Perspective Club empowers students across Uzbekistan to combine debate with research, analysis, and evidence-based thinking, because it helps them become changemakers who prove, analyze, and innovate instead of just speak.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[44px]"
            onClick={() => window.open('https://t.me/youthperspective', '_blank')}
          >
            Join Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <button 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 min-h-[44px] backdrop-blur-sm w-full sm:w-auto"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onClick={scrollToImpact}
          >
            See Testimonials
          </button>
        </div>

        {/* Stats Preview */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center px-2 sm:px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-4">
            <div className="font-black text-lg sm:text-xl md:text-2xl text-accent">1200+</div>
            <div className="text-xs sm:text-sm text-white/80">Participants</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-4">
            <div className="font-black text-lg sm:text-xl md:text-2xl text-accent">40+</div>
            <div className="text-xs sm:text-sm text-white/80">Events</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-4">
            <div className="font-black text-lg sm:text-xl md:text-2xl text-accent">12</div>
            <div className="text-xs sm:text-sm text-white/80">Regions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-4">
            <div className="font-black text-lg sm:text-xl md:text-2xl text-accent">2024</div>
            <div className="text-xs sm:text-sm text-white/80">Founded</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;