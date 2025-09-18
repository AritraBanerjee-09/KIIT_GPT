import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Map, Users, Calendar, BookOpen, Zap, Shield, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Assistant",
      description: "Get instant answers to academic questions, study tips, and personalized learning recommendations.",
      category: "Core"
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: "Campus Navigation",
      description: "Interactive maps with real-time directions to classrooms, libraries, cafeterias, and more.",
      category: "Navigation"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Student Community",
      description: "Connect with classmates, join study groups, and collaborate on projects.",
      category: "Social"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Smart Scheduling",
      description: "Optimize your class schedule, track assignments, and never miss important deadlines.",
      category: "Productivity"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Study Resources",
      description: "Access curated study materials, past papers, and course-specific resources.",
      category: "Academic"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Analytics",
      description: "Track your academic progress with detailed insights and improvement suggestions.",
      category: "Analytics"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Private",
      description: "Your data is protected with end-to-end encryption and privacy-first design.",
      category: "Security"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cross-Platform",
      description: "Access ASTRA from any device - web, mobile, or desktop applications.",
      category: "Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the tools and capabilities that make ASTRA the ultimate companion for your college journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {feature.icon}
                  <Badge variant="secondary">{feature.category}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">More features coming soon!</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;