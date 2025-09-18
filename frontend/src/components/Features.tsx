import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Search, Calendar, Users, BookOpen, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "AI-Powered Insights",
      description: "Get personalized recommendations and insights about your college experience powered by advanced AI."
    },
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "Smart Search",
      description: "Find any information about your college instantly with our intelligent search system."
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Event Discovery",
      description: "Never miss important college events, deadlines, or opportunities with smart notifications."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community Connect",
      description: "Connect with fellow students, faculty, and alumni through our AI-enhanced networking features."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Academic Assistant",
      description: "Get help with course selection, academic planning, and study resources tailored to your needs."
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Campus Navigation",
      description: "Navigate your campus with ease and discover hidden gems with our intelligent mapping system."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Astra's AI technology transforms your college experience with intelligent features designed for modern students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.1)] group">
              <CardHeader>
                <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;