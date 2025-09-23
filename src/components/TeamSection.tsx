const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-primary px-6 md:px-20 text-center">
      <h2 className="font-black text-4xl sm:text-5xl text-white mb-12 invisible-until-scroll">Meet the Team</h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col items-center">
          <img src="/Youth/co-founder.png" alt="Oybek" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Oybek Abdullaev</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Project Manager</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Youth/founder.png" alt="Nozanin" className="w-64 h-80 object-cover rounded-2xl shadow-lg invisible-until-scroll" style={{ transitionDelay: '0.1s' }} />
          <p className="mt-6 text-xl font-bold text-white invisible-until-scroll" style={{ transitionDelay: '0.3s' }}>Nozanin Abdunayimova</p>
          <p className="text-md font-semibold text-white/80 mt-1 invisible-until-scroll" style={{ transitionDelay: '0.4s' }}>Founder</p>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;