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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our community or have questions about our programs? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-2xl text-primary mb-6">
                Other Ways to Connect
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-card shadow-lg group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => window.open(method.action, '_blank')}>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="font-inter text-sm text-accent font-semibold">
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