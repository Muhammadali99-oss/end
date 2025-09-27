import { useEffect, useRef } from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: "Youth Affairs Agency",
      logo: "/partners/youthaffairs.png",
      url: "https://gov.uz/yoshlar"
    },
    {
      name: "Presidential Schools",
      logo: "/partners/Presidentialschools.png",
      url: "https://presidentialschools.uz/"
    },
    {
      name: "Garnet Hotel",
      logo: "/partners/Garnet.png",
      url: "https://garnethotel.uz/"
    },
    {
      name: "Asaxiy Books",
      logo: "/partners/Asaxiy.png",
      url: "https://asaxiy.uz/"
    },
    {
      name: "Domino's Pizza",
      logo: "/partners/Domino's.png",
      url: "https://www.dominos.com/"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // Faster movement

    const animate = () => {
      position += speed;
      
      // Get the width of one set of partners
      const firstChild = container.firstElementChild as HTMLElement;
      const secondChild = container.children[partners.length] as HTMLElement;
      
      if (firstChild && secondChild) {
        const setWidth = secondChild.offsetLeft - firstChild.offsetLeft;
        
        // Reset position when we've scrolled one complete set
        if (position >= setWidth) {
          position = 0;
        }
      }
      
      container.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a delay
    const timeoutId = setTimeout(animate, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [partners.length]);

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-20 bg-gray-100 text-center">
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-primary mb-8 sm:mb-12 invisible-until-scroll px-4">Our Partners</h2>

      <div className="overflow-hidden">
        <div ref={containerRef} className="flex">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-32 object-contain" 
                />
              </a>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-32 object-contain" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;