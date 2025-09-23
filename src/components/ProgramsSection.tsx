import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, GraduationCap, Mic } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Research Debate Tournaments',
      description: 'Competitive tournaments where students showcase their argumentative skills, backed by solid research, case studies, and data analysis, to build stronger, evidence-based arguments.',
      icon: Trophy,
        image: '/YPC-/Debate.JPG',
      features: ['Structured debate formats', 'Expert judging', 'Awards and recognition', 'Regional championships']
    },
    {
      title: 'Research Debate-a-thons',
      description: 'Marathon-style debate sessions designed to sharpen skills through continuous research, analysis, and real-time feedback, helping participants learn to think fast and argue with proof.',
      icon: Zap,
        image: '/YPC-/Debathons.JPG',
      features: ['Rapid research & fact-checking challenges', 'Evidence-based debating practice', 'Peer collaboration & feedback', 'Mentorship from experienced researchers']
    },
    {
      title: 'Training Sessions & Workshops',
      description: 'Interactive sessions that combine debate techniques with research methods, teaching students how to collect data, evaluate sources, and integrate findings into compelling arguments.',
      icon: GraduationCap,
        image: '/YPC-/Trainings.JPG',
      features: ['Expert-led sessions', 'Interactive workshops', 'Skill-building exercises', 'Practical training']
    },
    {
      title: 'Stage Confidence Building',
      description: 'Specialized programs focused on developing public speaking confidence, stage presence, and effective communication techniques.',
      icon: Mic,
        image: '/YPC-/Confidenceonstage.JPG',
      features: ['Public speaking practice', 'Confidence building', 'Stage presence training', 'Communication skills']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-primary mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Programs designed to develop debate skills, research skills, leadership qualities, and communication abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-primary">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-dark font-semibold hover:opacity-90 transition-opacity"
                  onClick={() => window.open('https://forms.google-forms.com', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-inter font-bold text-lg px-8 py-4"
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