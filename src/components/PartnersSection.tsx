const PartnersSection = () => {
  const partners = [
    {
      name: "Youth Affairs Agency",
          logo: "/YPCf/partners/youthaffairs.png",
      url: "https://gov.uz/yoshlar"
    },
    {
      name: "Presidential Schools",
      logo: "/YPCf/partners/Presidentialschools.png",
      url: "https://presidentialschools.uz/"
    },
    {
      name: "Garnet Hotel",
      logo: "/YPCf/partners/Garnet.png",
      url: "https://garnethotel.uz/"
    },
    {
      name: "Asaxiy Books",
      logo: "/YPCf/partners/Asaxiy.png",
      url: "https://asaxiy.uz/"
    },
    {
      name: "Domino's Pizza",
      logo: "/YPCf/partners/Domino's.png",
      url: "https://www.dominos.com/"
    }
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-20 bg-gray-100 text-center">
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-primary mb-8 sm:mb-12 invisible-until-scroll px-4">Our Partners</h2>

      <div className="overflow-hidden">
        <div className="flex animate-scroll">
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

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `
      }} />
    </section>
  );
};

export default PartnersSection;