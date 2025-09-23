const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-primary px-6 md:px-20 text-center">
      <h2 className="font-black text-4xl sm:text-5xl text-white mb-12 invisible-until-scroll">Meet the Team</h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col items-center">
          <img src="https://source.unsplash.com/random/320x400?portrait&sig=101" alt="Oybek" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Abdullaev Oybek</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Founder</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="https://source.unsplash.com/random/320x400?portrait&sig=102" alt="Asadbek" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Asadbek Oltinov</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Co-Founder</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <img src="https://source.unsplash.com/random/320x400?portrait&sig=103" alt="Khabi" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Khabi Abdullakhonov</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Media-Team Manager</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="https://source.unsplash.com/random/320x400?portrait&sig=104" alt="Member 4" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>[Name]</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Tech Department Director</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="https://source.unsplash.com/random/320x400?portrait&sig=105" alt="Member 5" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>[Name]</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>[Role]</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;