import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, GraduationCap, Mic } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Research Debate Tournaments',
      description: 'Competitive tournaments where students showcase their argumentative skills, backed by solid research, case studies, and data analysis, to build stronger, evidence-based arguments.',
      icon: Trophy,
        image: '/Debate.JPG',
      features: ['Structured debate formats', 'Expert judging', 'Awards and recognition', 'Regional championships']
    },
    {
      title: 'Research Debate-a-thons',
      description: 'Marathon-style debate sessions designed to sharpen skills through continuous research, analysis, and real-time feedback, helping participants learn to think fast and argue with proof.',
      icon: Zap,
        image: '/Debathons.JPG',
      features: ['Rapid research & fact-checking challenges', 'Evidence-based debating practice', 'Peer collaboration & feedback', 'Mentorship from experienced researchers']
    },
    {
      title: 'Training Sessions & Workshops',
      description: 'Interactive sessions that combine debate techniques with research methods, teaching students how to collect data, evaluate sources, and integrate findings into compelling arguments.',
      icon: GraduationCap,
        image: '/Trainings.JPG',
      features: ['Expert-led sessions', 'Interactive workshops', 'Skill-building exercises', 'Practical training']
    },
    {
      title: 'Stage Confidence Building',
      description: 'Specialized programs focused on developing public speaking confidence, stage presence, and effective communication techniques.',
      icon: Mic,
        image: '/Confidenceonstage.JPG',
      features: ['Public speaking practice', 'Confidence building', 'Stage presence training', 'Communication skills']
    }
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4 sm:mb-6">
            Our Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-1 sm:px-2">
            Programs designed to develop debate skills, research skills, leadership qualities, and communication abilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-60"></div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center">
                    <program.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-5 md:p-6">
                <CardTitle className="font-bold text-lg sm:text-xl md:text-2xl text-primary">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 pt-0">
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-xs sm:text-sm text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-dark font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => window.open('https://forms.google-forms.com', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-inter font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Join Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;