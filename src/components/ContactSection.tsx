import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Users, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@ypc.uz',
      action: 'mailto:hello@ypc.uz'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Join our community chat',
      value: '@YouthPerspectiveClub',
      action: 'https://t.me/YouthPerspectiveClub'
    },
    {
      icon: Users,
      title: 'Instagram',
      description: 'Follow our journey',
      value: '@ypc_uzbekistan',
      action: 'https://instagram.com/ypc_uzbekistan'
    },
    {
      icon: Users,
      title: 'LinkedIn',
      description: 'Professional network',
      value: 'Youth Perspective Club',
      action: 'https://linkedin.com/company/ypc-uzbekistan'
    }
  ];

  const offices = [
    {
      city: 'Tashkent',
      address: 'Main Office - Yunusobod District',
      region: 'Tashkent Region',
      isMain: true
    },
    {
      city: 'Samarkand',
      address: 'Regional Office - Central District',
      region: 'Samarkand Region',
      isMain: false
    },
    {
      city: 'Bukhara',
      address: 'Regional Office - Historic Center',
      region: 'Bukhara Region',
      isMain: false
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-bold text-2xl text-primary">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-semibold text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark font-bold text-lg py-3"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
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
                        <method.icon className="h-6 w-6 text-primary" />
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

            <div>
              <h3 className="font-inter font-bold text-2xl text-primary mb-6">
                Our Locations
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className={`bg-card shadow-navy ${office.isMain ? 'border-accent border-2' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-inter font-bold text-foreground">
                              {office.city}
                            </h4>
                            {office.isMain && (
                              <span className="bg-accent/20 text-accent-foreground rounded-full px-2 py-1 text-xs font-inter font-semibold">
                                Main Office
                              </span>
                            )}
                          </div>
                          <p className="font-inter text-sm text-muted-foreground">
                            {office.address}
                          </p>
                          <p className="font-inter text-sm text-accent">
                            {office.region}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="font-inter font-bold text-2xl text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              Don't wait - join thousands of students who are already developing their leadership and debate skills with YPC.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-bold text-lg px-8 py-4"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Join YPC Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="font-inter font-bold text-lg px-8 py-4"
              onClick={() => window.open('https://t.me/YouthPerspectiveClub', '_blank')}
            >
              Join Telegram Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;