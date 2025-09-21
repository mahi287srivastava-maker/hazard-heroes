import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  MapPin, 
  Camera, 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp,
  Medal,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    totalReports: 23,
    validatedReports: 18,
    points: 1250,
    rank: 47,
    badges: 8,
    level: "Civic Guardian"
  };

  const recentReports = [
    {
      id: 1,
      title: "Broken streetlight on Main St",
      status: "validated",
      points: 25,
      date: "2 days ago",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Pothole on Elm Avenue",
      status: "pending",
      points: 0,
      date: "1 week ago",
      category: "Traffic Safety"
    },
    {
      id: 3,
      title: "Fallen tree branch",
      status: "resolved",
      points: 30,
      date: "2 weeks ago",
      category: "Environmental"
    }
  ];

  const achievements = [
    { name: "First Reporter", icon: "🎯", unlocked: true },
    { name: "Photo Pro", icon: "📸", unlocked: true },
    { name: "Validator", icon: "✅", unlocked: false },
    { name: "Community Hero", icon: "🦸", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Hazard Heroes</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/report" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Report
            </Link>
            <Link to="/map" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Map
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Badge variant="secondary">Dashboard</Badge>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  CH
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome back, Civic Hero!</h1>
                <p className="text-muted-foreground">
                  Level: {userStats.level} • Rank #{userStats.rank} in your region
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Stats Overview */}
            <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Reports</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.totalReports}</div>
                  <p className="text-xs text-muted-foreground mt-1">+3 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-muted-foreground">Validated</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.validatedReports}</div>
                  <p className="text-xs text-muted-foreground mt-1">78% success rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Points</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.points.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">+75 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Medal className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Badges</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.badges}</div>
                  <p className="text-xs text-muted-foreground mt-1">2 more to unlock</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow" asChild>
                    <Link to="/report">
                      <Camera className="mr-2 h-4 w-4" />
                      New Report
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/map">
                      <MapPin className="mr-2 h-4 w-4" />
                      Browse Map
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Validate Reports
                  </Button>
                </CardContent>
              </Card>

              {/* Progress to Next Level */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Civic Guardian</span>
                      <span>1,250 / 2,000 pts</span>
                    </div>
                    <Progress value={62.5} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      750 points to reach <strong>Community Champion</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reports */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Reports</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/reports">View All</Link>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex-1">
                          <h4 className="font-medium">{report.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {report.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{report.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {report.status === "validated" && (
                            <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Validated
                            </Badge>
                          )}
                          {report.status === "pending" && (
                            <Badge variant="outline">
                              <Clock className="mr-1 h-3 w-3" />
                              Pending
                            </Badge>
                          )}
                          {report.status === "resolved" && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                              <Target className="mr-1 h-3 w-3" />
                              Resolved
                            </Badge>
                          )}
                          {report.points > 0 && (
                            <span className="text-sm font-medium text-primary">
                              +{report.points}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Medal className="h-5 w-5" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border text-center ${
                          achievement.unlocked 
                            ? 'bg-primary/5 border-primary/20' 
                            : 'bg-muted/50 border-border opacity-60'
                        }`}
                      >
                        <div className="text-2xl mb-2">{achievement.icon}</div>
                        <h4 className="font-medium text-sm">{achievement.name}</h4>
                        {achievement.unlocked && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            Unlocked
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Community Impact */}
            <div className="lg:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Community Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">47</div>
                      <div className="text-sm text-muted-foreground">Issues Resolved</div>
                      <div className="text-xs text-secondary mt-1">↗ +12 this month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">156</div>
                      <div className="text-sm text-muted-foreground">Community Reports</div>
                      <div className="text-xs text-secondary mt-1">↗ +23 this month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">89%</div>
                      <div className="text-sm text-muted-foreground">Validation Rate</div>
                      <div className="text-xs text-accent mt-1">↗ +5% improvement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$12.5K</div>
                      <div className="text-sm text-muted-foreground">Estimated Savings</div>
                      <div className="text-xs text-secondary mt-1">Prevention value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;