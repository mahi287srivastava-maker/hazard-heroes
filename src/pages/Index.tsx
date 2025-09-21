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

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple four-step process to transform your community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Report Hazards */}
            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Report Hazards</h3>
                <p className="text-muted-foreground mb-4">
                  Snap a photo and pin the location using GPS, image geotags, or map placement
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">GPS Location</div>
                      <div className="text-xs text-muted-foreground">±3 meters accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">EXIF Data</div>
                      <div className="text-xs text-muted-foreground">±10 meters from photos</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Map Pin</div>
                      <div className="text-xs text-muted-foreground">±5 meters manual placement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Community Validates */}
            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Validates</h3>
                <p className="text-muted-foreground mb-4">
                  Volunteers and experts review submissions to ensure accuracy and legitimacy
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="text-sm font-medium">Peer Review</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="text-sm font-medium">Expert Analysis</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="text-sm font-medium">Evidence Check</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Escalate & Prioritize */}
            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Escalate & Prioritize</h3>
                <p className="text-muted-foreground mb-4">
                  Issues flow from local to state to national levels based on severity and impact
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="text-sm font-medium">Local First</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="text-sm font-medium">State Priority</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="text-sm font-medium">National Alert</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Take Action */}
            <Card className="text-center p-8 shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4">Take Action</h3>
                <p className="text-muted-foreground mb-4">
                  Open-source remediation plans drive real-world solutions and community improvement
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="text-sm font-medium">Action Plans</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="text-sm font-medium">Progress Tracking</div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded bg-background border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="text-sm font-medium">Community Updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precise Location Reporting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to accurately pinpoint hazards for faster response
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* GPS Real-Time Location */}
            <Card className="p-8 shadow-card hover:shadow-civic transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">GPS Real-Time Location</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Use your device's current location to report hazards on-site with pinpoint accuracy
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Typical Accuracy</span>
                    <Badge variant="secondary">±3 meters</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Speed</span>
                    <Badge variant="outline">Instant positioning</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best For</span>
                    <Badge variant="outline">On-site reporting</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Setup</span>
                    <Badge className="bg-secondary text-secondary-foreground">Automatic</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Geotags (EXIF) */}
            <Card className="p-8 shadow-card hover:shadow-civic transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Image Geotags (EXIF)</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Extract location data embedded in photos taken with smartphones automatically
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Typical Accuracy</span>
                    <Badge variant="secondary">±10 meters</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Method</span>
                    <Badge variant="outline">Photo metadata extraction</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best For</span>
                    <Badge variant="outline">Past incidents</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Input</span>
                    <Badge className="bg-secondary text-secondary-foreground">Visual</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Pin & Satellite View */}
            <Card className="p-8 shadow-card hover:shadow-civic transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Map Pin & Satellite View</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Manually place hazards on interactive maps with satellite imagery for precise positioning
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Typical Accuracy</span>
                    <Badge variant="secondary">±5 meters</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Verification</span>
                    <Badge variant="outline">Visual confirmation</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best For</span>
                    <Badge variant="outline">Remote areas</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">View</span>
                    <Badge className="bg-accent text-accent-foreground">Satellite imagery</Badge>
                  </div>
                </div>
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
