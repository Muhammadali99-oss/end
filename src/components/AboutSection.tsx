import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-primary mb-6">
            About Youth Perspective Club
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of leaders through debate, communication, and critical thinking skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-bold text-3xl text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
            We empower students to master research-driven debating, leadership, and communication skills. By integrating critical analysis, data, and structured argumentation, we prepare the next generation of changemakers who build their impact on knowledge, not just words.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We believe that every young person has the potential to become a leader, and through structured debate, public speaking, and critical thinking exercises, we help unlock that potential.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg text-primary mb-2">Leadership Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Building confidence and leadership skills in every participant
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg text-primary mb-2">Youth-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Created by young people, for young people across Uzbekistan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-3xl text-primary mb-8 text-center">Our Story</h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-primary mb-2">November 2024 - The Beginning</h4>
                <p className="text-lg text-foreground leading-relaxed">
                Started as an initiative to bring research-based debate and leadership training to young people across Uzbekistan.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-primary mb-2">Expanding Across Uzbekistan</h4>
                <p className="text-lg text-foreground leading-relaxed">
                We quickly grew into offline programs where students not only debate, but also conduct surveys, case studies, and analytical projects to strengthen their arguments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-primary mb-2">Today - Growing Impact</h4>
                <p className="text-lg text-foreground leading-relaxed">
                With 1000+ students, 10+ research-debate tournaments, and presence in 6+ regions, we continue to expand our mission of developing leaders who combine logic, evidence, and communication.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;