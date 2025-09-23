const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-primary px-4 sm:px-6 md:px-20 text-center">
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white mb-8 sm:mb-12 invisible-until-scroll">Meet the Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="/YPC-/co-founder.png" alt="Oybek" className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Oybek Abdullaev</p>
          <p className="text-sm sm:text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Project Manager</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/YPC-/founder.png" alt="Nozanin" className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Nozanin Abdunayimova</p>
          <p className="text-sm sm:text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Founder</p>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;