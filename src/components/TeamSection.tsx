const TeamSection = () => {
  return (
    <section id="team" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary px-3 sm:px-4 md:px-6 lg:px-8 text-center">
      <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 md:mb-12 invisible-until-scroll">Meet the Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="/end/co-founder.png" alt="Oybek" className="w-40 h-48 sm:w-48 sm:h-60 md:w-56 md:h-70 lg:w-64 lg:h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Oybek Abdullaev</p>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Project Manager</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/end/founder.png" alt="Nozanin" className="w-40 h-48 sm:w-48 sm:h-60 md:w-56 md:h-70 lg:w-64 lg:h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Nozanin Abdunayimova</p>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Founder</p>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;