import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Join our community chat',
      value: '@youthperspective',
      action: 'https://t.me/youthperspective',
      color: 'text-blue-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our journey',
      value: '@youthperspective24',
      action: 'https://www.instagram.com/youthperspective24/',
      color: 'text-pink-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional network',
      value: 'Youth Perspective Club',
      action: 'https://www.linkedin.com/in/youth-perspective-club-project-062761373/?original_referer=https%3A%2F%2Fuz%2Elinkedin%2Ecom%2F&originalSubdomain=uz',
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Ready to join our community or have questions about our programs? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-primary mb-4 sm:mb-6">
                Other Ways to Connect
              </h3>
              <div className="grid gap-3 sm:gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-card shadow-lg group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => window.open(method.action, '_blank')}>
                    <CardContent className="p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <method.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">
                          {method.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="font-inter text-xs sm:text-sm text-accent font-semibold truncate">
                          {method.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;