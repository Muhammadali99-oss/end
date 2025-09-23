

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Trophy, MapPin, Calendar, Star, Quote } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/ypc.uz/';
// TODO: Replace with the actual link to your Google Form for story submissions
const SHARE_STORY_URL = 'https://forms.google.com';

const ImpactSection = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Students Empowered', color: 'text-accent' },
    { icon: Trophy, number: '10+', label: 'Tournaments Organized', color: 'text-primary' },
    { icon: MapPin, number: '6+', label: 'Regions Covered', color: 'text-accent' },
    { icon: Calendar, number: '50+', label: 'Training Sessions', color: 'text-primary' },
  ];

  const testimonials = [
    {
      name: 'Aisha Karimova',
      role: 'Debate Tournament Winner',
      location: 'Tashkent',
      quote: 'YPC transformed my confidence and helped me develop critical thinking skills that I use every day. The debates taught me how to articulate my thoughts clearly and listen to different perspectives.',
      rating: 5
    },
    {
      name: 'Bekzod Umarov',
      role: 'Workshop Participant',
      location: 'Samarkand',
      quote: 'The training sessions were incredible. I learned not just how to debate, but how to research effectively, structure arguments, and present with confidence. It changed my approach to communication.',
      rating: 5
    },
    {
      name: 'Malika Nazarova',
      role: 'Team Leader',
      location: 'Bukhara',
      quote: 'Being part of YPC has been life-changing. The leadership opportunities and the community of like-minded peers has helped me grow both personally and professionally.',
      rating: 5
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-primary mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming lives and building leaders across Uzbekistan through the power of debate and communication.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-gray-50 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`font-black text-4xl ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Placeholder */}
        <div className="mb-20">
          <h3 className="font-bold text-3xl text-primary mb-8 text-center">
            Moments That Matter
          </h3>
          <div className="bg-muted/30 rounded-lg p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <h4 className="font-bold text-xl text-primary mb-4">
                Photo & Video Gallery Coming Soon
              </h4>
              <p className="text-muted-foreground mb-6">
                We're collecting amazing moments from our tournaments, workshops, and training sessions to share with our community.
              </p>
              <Button 
                variant="outline" 
                className="font-semibold"
                onClick={() => window.open(INSTAGRAM_URL, '_blank')}
              >
                Follow Our Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-bold text-3xl text-primary mb-12 text-center">
            What Our Students Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-accent mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-accent">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-dark font-bold text-lg px-8 py-4"
            onClick={() => window.open(SHARE_STORY_URL, '_blank')}
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;