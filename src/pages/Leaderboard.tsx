import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Star, 
  TrendingUp, 
  Users, 
  MapPin,
  Camera,
  CheckCircle,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const topReporters = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "/placeholder-avatar-1.jpg",
      points: 2450,
      reports: 47,
      validationRate: 94,
      badges: 12,
      level: "Community Champion",
      trend: "up"
    },
    {
      rank: 2,
      name: "Mike Rodriguez",
      avatar: "/placeholder-avatar-2.jpg",
      points: 2280,
      reports: 41,
      validationRate: 89,
      badges: 10,
      level: "Safety Guardian",
      trend: "up"
    },
    {
      rank: 3,
      name: "Emily Johnson",
      avatar: "/placeholder-avatar-3.jpg",
      points: 2150,
      reports: 38,
      validationRate: 92,
      badges: 11,
      level: "Civic Hero",
      trend: "down"
    }
  ];

  const globalStats = {
    totalReports: 12547,
    resolvedIssues: 8923,
    activeHeroes: 1456,
    communitiesServed: 89
  };

  const achievements = [
    {
      title: "First Reporter",
      description: "Submit your first hazard report",
      icon: "🎯",
      progress: 100,
      unlocked: 847
    },
    {
      title: "Photo Professional",
      description: "Upload 50 high-quality evidence photos",
      icon: "📸",
      progress: 73,
      unlocked: 234
    },
    {
      title: "Validation Expert",
      description: "Successfully validate 100 community reports",
      icon: "✅",
      progress: 45,
      unlocked: 156
    },
    {
      title: "Community Champion",
      description: "Reach 2000 points and help resolve 25 issues",
      icon: "🏆",
      progress: 28,
      unlocked: 89
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">← Hazard Heroes</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/report" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Report
            </Link>
            <Link to="/map" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Map
            </Link>
            <Badge variant="secondary">Community</Badge>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Community Leaderboard</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating our heroes who are making communities safer every day
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{globalStats.totalReports.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Reports</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto text-secondary mb-2" />
                <div className="text-2xl font-bold">{globalStats.resolvedIssues.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                <div className="text-2xl font-bold">{globalStats.activeHeroes.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Active Heroes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{globalStats.communitiesServed}</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="reporters" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="reporters">Top Reporters</TabsTrigger>
              <TabsTrigger value="validators">Expert Validators</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="reporters" className="space-y-6">
              {/* Top 3 Podium */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {topReporters.slice(0, 3).map((reporter, index) => (
                  <Card key={reporter.rank} className={`text-center p-6 ${index === 0 ? 'ring-2 ring-primary shadow-civic' : ''}`}>
                    <CardContent className="pt-6">
                      <div className="relative mb-4">
                        <Avatar className="h-20 w-20 mx-auto">
                          <AvatarImage src={reporter.avatar} />
                          <AvatarFallback className="text-xl">
                            {reporter.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'
                        }`}>
                          {reporter.rank}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{reporter.name}</h3>
                      <Badge variant="secondary" className="mb-4">{reporter.level}</Badge>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Points:</span>
                          <span className="font-medium text-primary">{reporter.points.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Reports:</span>
                          <span className="font-medium">{reporter.reports}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Success Rate:</span>
                          <span className="font-medium text-secondary">{reporter.validationRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Badges:</span>
                          <span className="font-medium text-accent">{reporter.badges}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Extended Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle>Full Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 7 }, (_, i) => i + 4).map((rank) => (
                      <div key={rank} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">
                            {rank}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>U{rank}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">User {rank}</div>
                            <div className="text-sm text-muted-foreground">Civic Volunteer</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="text-center">
                            <div className="font-medium text-primary">{(2000 - rank * 50).toLocaleString()}</div>
                            <div className="text-muted-foreground">Points</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{35 - rank}</div>
                            <div className="text-muted-foreground">Reports</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-secondary">{95 - rank}%</div>
                            <div className="text-muted-foreground">Success</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="validators" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Validators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rank) => (
                      <div key={rank} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary">
                            {rank}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>V{rank}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Validator {rank}</div>
                            <div className="text-sm text-muted-foreground">Expert Reviewer</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="text-center">
                            <div className="font-medium text-secondary">{(500 - rank * 25)}</div>
                            <div className="text-muted-foreground">Validated</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-accent">{98 - rank}%</div>
                            <div className="text-muted-foreground">Accuracy</div>
                          </div>
                          <Badge variant="outline" className="bg-secondary/10 text-secondary">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Verified Expert
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Community Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                            <div className="text-xs text-muted-foreground">
                              {achievement.unlocked} heroes have unlocked this achievement
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="mt-8 text-center">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Climb the Rankings?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our community of heroes and start making a difference in your neighborhood. 
                Every report counts towards a safer community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow" asChild>
                  <Link to="/report">
                    <Camera className="mr-2 h-5 w-5" />
                    Report Your First Hazard
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/dashboard">View Your Progress</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;