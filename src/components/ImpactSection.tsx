

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const ImpactSection = () => {
  const testimonials = [
    {
      name: 'Nodirbek A.',
      role: 'One of the first members',
      location: '',
      quote: 'I first started attending YPC sessions back in 2024 because I was interested in improving my debate skills. But I think I gained more than just debate skills, especially after attending offline events later on. I have improved my research skills and overall delivery, which are crucial components of any debate.'
    },
    {
      name: 'Laziza D.',
      role: 'Tashkent Debate-a-thon participant',
      location: '',
      quote: 'YPC is not just a club for you to have some debates and leave. During the debate-a-thon, I really had to stretch my mind. I learned to research quicker, think better on my feet, and, most importantly, made some cool friends during the coffee breaks.'
    },
    {
      name: 'Muhammadali D.',
      role: 'Debate tournament winner in Samarkand',
      location: '',
      quote: 'I participated first in Samarkand\'s debate tournament, and I really liked it. The quality of YPC events is unlike any other student-led club. Real teachers as judges, strict rules, and feedback made it feel like a real professional competition. What I liked the most is the emphasis on research because teachers weren\'t granting points just for words but for fact-checked, factual and logical arguments.'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



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

      </div>
    </section>
  );
};

export default ImpactSection;