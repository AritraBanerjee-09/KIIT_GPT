import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, Book, MessageCircle, Video, FileText, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      description: "Learn the basics of using ASTRA",
      articles: 12,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "AI Assistant",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "How to interact with our AI features",
      articles: 8,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Campus Navigation",
      icon: <Video className="w-6 h-6" />,
      description: "Using maps and location services",
      articles: 6,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Account & Settings",
      icon: <FileText className="w-6 h-6" />,
      description: "Manage your profile and preferences",
      articles: 10,
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to set up your student profile",
      category: "Getting Started",
      views: "2.3k views",
      isNew: true
    },
    {
      title: "Using the AI Assistant for study help",
      category: "AI Assistant",
      views: "1.8k views",
      isNew: false
    },
    {
      title: "Finding your way around campus",
      category: "Campus Navigation",
      views: "1.5k views",
      isNew: false
    },
    {
      title: "Privacy settings and data protection",
      category: "Account & Settings",
      views: "1.2k views",
      isNew: false
    },
    {
      title: "Joining and creating study groups",
      category: "Getting Started",
      views: "980 views",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to your questions and learn how to make the most of ASTRA.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search for help articles, guides, and tutorials..." 
                className="pl-12 py-6 text-lg border-accent/20 bg-background/80 backdrop-blur-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20 bg-background/80 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-4">
                      {category.articles} articles
                    </Badge>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:translate-x-1 transition-transform">
                      View Articles <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/10 transition-colors group cursor-pointer">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          {article.isNew && <Badge variant="secondary" className="text-xs">New</Badge>}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-accent/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Still Need Help?</CardTitle>
                <CardDescription className="text-base">
                  Can't find what you're looking for? Our support team is here to help you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;