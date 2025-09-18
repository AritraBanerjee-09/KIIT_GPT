import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Clock, Search, Building, Utensils, BookOpen, Car } from "lucide-react";
import NavigationComponent from "@/components/Navigation";
import Footer from "@/components/Footer";

const CampusMaps = () => {
  const locations = [
    {
      name: "Central Library",
      type: "Academic",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Main library with study halls and digital resources",
      walkTime: "3 min",
      isOpen: true
    },
    {
      name: "Student Cafeteria",
      type: "Food",
      icon: <Utensils className="w-5 h-5" />,
      description: "Multiple food courts and dining options",
      walkTime: "5 min",
      isOpen: true
    },
    {
      name: "Engineering Block A",
      type: "Academic",
      icon: <Building className="w-5 h-5" />,
      description: "Computer Science and IT departments",
      walkTime: "7 min",
      isOpen: true
    },
    {
      name: "Sports Complex",
      type: "Recreation",
      icon: <MapPin className="w-5 h-5" />,
      description: "Gymnasium, courts, and fitness center",
      walkTime: "10 min",
      isOpen: false
    },
    {
      name: "Parking Area B",
      type: "Parking",
      icon: <Car className="w-5 h-5" />,
      description: "Main parking area for students",
      walkTime: "2 min",
      isOpen: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <NavigationComponent />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Campus Maps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate your campus with ease. Find buildings, facilities, and get real-time directions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search for buildings, departments, or facilities..." 
                className="pl-10 py-6 text-lg border-accent/20 bg-background/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <Card className="mb-8 border-accent/20 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Campus Map</h3>
                  <p className="text-muted-foreground">Map view will be available here</p>
                  <Button className="mt-4">
                    <Navigation className="w-4 h-4 mr-2" />
                    Enable Location Services
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access Locations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Quick Access Locations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {location.icon}
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {location.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={location.type === "Academic" ? "default" : location.type === "Food" ? "secondary" : "outline"}>
                              {location.type}
                            </Badge>
                            <Badge variant={location.isOpen ? "default" : "destructive"}>
                              {location.isOpen ? "Open" : "Closed"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {location.walkTime}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {location.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" className="w-full">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <Navigation className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Turn-by-Turn Navigation</h3>
              <p className="text-sm text-muted-foreground">Get detailed walking directions to any campus location</p>
            </Card>
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-sm text-muted-foreground">Live information about facility hours and availability</p>
            </Card>
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Precise Locations</h3>
              <p className="text-sm text-muted-foreground">Accurate positioning for all campus buildings and rooms</p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampusMaps;