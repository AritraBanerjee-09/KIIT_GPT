import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle, Calendar, BookOpen, Coffee, Code, Beaker, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Community = () => {
  const studyGroups = [
    {
      name: "Data Structures Study Group",
      members: 24,
      subject: "Computer Science",
      icon: <Code className="w-5 h-5" />,
      meetTime: "Mon, Wed 4:00 PM",
      difficulty: "Intermediate"
    },
    {
      name: "Physics Lab Partners",
      members: 12,
      subject: "Physics",
      icon: <Beaker className="w-5 h-5" />,
      meetTime: "Tue, Thu 2:00 PM",
      difficulty: "Beginner"
    },
    {
      name: "Design Thinking Circle",
      members: 18,
      subject: "Design",
      icon: <Palette className="w-5 h-5" />,
      meetTime: "Fri 3:00 PM",
      difficulty: "All Levels"
    }
  ];

  const recentActivity = [
    {
      user: "Priya S.",
      action: "shared notes",
      subject: "Machine Learning",
      time: "2 hours ago",
      avatar: "PS"
    },
    {
      user: "Arjun M.",
      action: "created study group",
      subject: "Database Systems",
      time: "4 hours ago",
      avatar: "AM"
    },
    {
      user: "Riya K.",
      action: "answered question in",
      subject: "Calculus Help",
      time: "6 hours ago",
      avatar: "RK"
    },
    {
      user: "Dev P.",
      action: "posted assignment solution in",
      subject: "Programming Fundamentals",
      time: "8 hours ago",
      avatar: "DP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Student Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow students, join study groups, and collaborate on your academic journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">2,847</h3>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </Card>
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">156</h3>
              <p className="text-sm text-muted-foreground">Study Groups</p>
            </Card>
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">8,912</h3>
              <p className="text-sm text-muted-foreground">Messages Today</p>
            </Card>
            <Card className="text-center p-6 border-accent/20 bg-background/80 backdrop-blur-sm">
              <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">43</h3>
              <p className="text-sm text-muted-foreground">Meetups This Week</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Study Groups */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Popular Study Groups</h2>
                <Button variant="outline">View All</Button>
              </div>
              <div className="space-y-4">
                {studyGroups.map((group, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20 bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {group.icon}
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {group.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary">{group.subject}</Badge>
                              <Badge variant="outline">{group.difficulty}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {group.members}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {group.meetTime}
                        </div>
                        <Button size="sm">Join Group</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Create New Study Group
              </Button>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Button variant="outline">View All</Button>
              </div>
              <Card className="border-accent/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {activity.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>
                            <span className="text-muted-foreground"> {activity.action} </span>
                            <span className="font-medium text-primary">{activity.subject}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <Button className="w-full" variant="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start a Discussion
                </Button>
                <Button className="w-full" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Share Study Materials
                </Button>
                <Button className="w-full" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Study Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;