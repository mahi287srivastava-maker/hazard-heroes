import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Users, Trophy, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroCivic from "@/assets/hero-civic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Hazard Heroes</span>
          </div>
          
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
            <Button variant="default" size="sm" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Civic Engagement Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Report. Validate. 
                <span className="text-primary"> Transform</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empower communities to identify and address hazards through collaborative reporting, 
                expert validation, and gamified civic engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow shadow-civic" asChild>
                  <Link to="/report">
                    <Camera className="mr-2 h-5 w-5" />
                    Report Hazard
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/map">
                    <MapPin className="mr-2 h-5 w-5" />
                    View Map
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Reports Submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">892</div>
                  <div className="text-sm text-muted-foreground">Issues Resolved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">456</div>
                  <div className="text-sm text-muted-foreground">Active Heroes</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroCivic} 
                alt="Citizens using mobile app to report hazards" 
                className="rounded-lg shadow-civic w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to transform your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Report</h3>
                <p className="text-muted-foreground">
                  Capture hazards with photos, GPS location, and detailed descriptions. 
                  Earn points for every validated submission.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Validate</h3>
                <p className="text-muted-foreground">
                  Community volunteers and experts verify submissions, 
                  ensuring accuracy and priority classification.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transform</h3>
                <p className="text-muted-foreground">
                  Issues are escalated to authorities with open-source remediation plans, 
                  creating real community impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Become a Hazard Hero?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of citizens making their communities safer, one report at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow shadow-civic" asChild>
              <Link to="/report">Start Reporting</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/leaderboard">
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
