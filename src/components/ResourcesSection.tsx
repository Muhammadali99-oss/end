import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Video, FileText, Users, Lightbulb, Target, FileCheck } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Beginner's Debate Handbook",
      description: "Complete guide to debate fundamentals, formats, and basic techniques for newcomers.",
      icon: BookOpen,
      type: 'PDF Guide',
      size: '2.5 MB',
      downloadCount: '500+'
    },
    {
      title: 'Topic Bank & Motion Archive',
      description: 'Comprehensive collection of debate topics and motions from past tournaments.',
      icon: FileText,
      type: 'Database',
      size: '1.8 MB',
      downloadCount: '750+'
    },
    {
      title: 'Argumentation Toolkit',
      description: 'Advanced strategies for building strong arguments and rebuttals.',
      icon: Target,
      type: 'PDF Guide',
      size: '3.2 MB',
      downloadCount: '400+'
    },
    {
      title: 'Confidence & Stage Skills Guide',
      description: 'Practical tips for overcoming stage anxiety and building speaking confidence.',
      icon: Lightbulb,
      type: 'PDF Guide',
      size: '1.9 MB',
      downloadCount: '650+'
    },
    {
      title: 'Practice Sheets',
      description: 'Worksheets and exercises for skill development and practice sessions.',
      icon: FileCheck,
      type: 'Worksheets',
      size: '2.1 MB',
      downloadCount: '300+'
    },
    {
      title: 'Recommended Reading & Videos',
      description: 'Curated list of books, articles, and video resources for debate improvement.',
      icon: Video,
      type: 'Resource List',
      size: '0.8 MB',
      downloadCount: '800+'
    }
  ];

  const categories = [
    {
      title: 'For Beginners',
      description: 'Start your debate journey with our foundational resources',
      resources: ['Beginner\'s Debate Handbook', 'Practice Sheets', 'Confidence & Stage Skills Guide'],
      color: 'bg-accent/10 text-accent-foreground'
    },
    {
      title: 'For Advanced',
      description: 'Take your skills to the next level with advanced materials',
      resources: ['Argumentation Toolkit', 'Topic Bank & Motion Archive'],
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'For Everyone',
      description: 'Universal resources beneficial for all skill levels',
      resources: ['Recommended Reading & Videos', 'Practice Sheets'],
      color: 'bg-muted/50 text-foreground'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-primary mb-6">
            Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of debate materials, guides, and tools to enhance your skills and knowledge.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="bg-card shadow-lg">
              <CardContent className="p-6">
                <div className={`inline-block ${category.color} rounded-full px-3 py-1 text-sm font-semibold mb-3`}>
                  {category.title}
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-1">
                  {category.resources.map((resource, idx) => (
                    <div key={idx} className="font-inter text-xs text-foreground flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                      {resource}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-card shadow-navy group hover:shadow-glow transition-all duration-300 hover:scale-110">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="font-inter text-xs text-muted-foreground">{resource.type}</div>
                    <div className="font-inter text-xs text-accent font-semibold">{resource.size}</div>
                  </div>
                </div>
                <CardTitle className="font-inter font-bold text-lg text-primary">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="font-inter text-sm text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{resource.downloadCount} downloads</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary font-inter font-semibold hover:opacity-90 transition-opacity"
                  onClick={() => {
                    // In a real app, this would trigger the download
                    alert('Download will be available soon! Check back for updates.');
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="font-inter font-bold text-2xl text-primary mb-4">
              Need More Resources?
            </h3>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              We're constantly developing new materials. Have a specific request or suggestion for resources you'd like to see?
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-inter font-bold text-lg text-primary mb-2">
                Request Resources
              </h4>
              <p className="font-inter text-sm text-muted-foreground mb-4">
                Let us know what materials would help you most
              </p>
              <Button 
                variant="outline"
                className="font-inter font-semibold"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Submit Request
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h4 className="font-inter font-bold text-lg text-primary mb-2">
                Contribute Resources
              </h4>
              <p className="font-inter text-sm text-muted-foreground mb-4">
                Share your expertise and help the community grow
              </p>
              <Button 
                variant="outline"
                className="font-inter font-semibold"
                onClick={() => window.open('mailto:resources@ypc.uz', '_blank')}
              >
                Contribute
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-bold text-lg px-8 py-4"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Access All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;