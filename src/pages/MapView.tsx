import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Filter, Navigation, Layers, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MapView = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const hazardReports = [
    {
      id: 1,
      title: "Broken streetlight",
      category: "Infrastructure",
      priority: "medium",
      status: "validated",
      lat: 40.7128,
      lng: -74.0060,
      reporter: "John D.",
      points: 25
    },
    {
      id: 2,
      title: "Large pothole",
      category: "Traffic Safety",
      priority: "high",
      status: "pending",
      lat: 40.7589,
      lng: -73.9851,
      reporter: "Sarah M.",
      points: 30
    },
    {
      id: 3,
      title: "Fallen tree blocking path",
      category: "Environmental",
      priority: "critical",
      status: "resolved",
      lat: 40.7549,
      lng: -73.9840,
      reporter: "Mike R.",
      points: 35
    }
  ];

  const categories = [
    "All Categories",
    "Infrastructure",
    "Traffic Safety", 
    "Environmental",
    "Public Health",
    "Utilities"
  ];

  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800", 
    high: "bg-orange-100 text-orange-800",
    critical: "bg-red-100 text-red-800"
  };

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
            <Badge variant="secondary">Map</Badge>
            <Link to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Map Filters */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="search">Search Location</Label>
                    <div className="relative mt-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="search"
                        placeholder="Address or landmark"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Priority Level</Label>
                    <div className="space-y-2">
                      {['critical', 'high', 'medium', 'low'].map((priority) => (
                        <label key={priority} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <Badge variant="outline" className={priorityColors[priority as keyof typeof priorityColors]}>
                            {priority.charAt(0).toUpperCase() + priority.slice(1)}
                          </Badge>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Map Layers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">Hazard Reports</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Resolved Issues</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Infrastructure</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Emergency Services</span>
                  </label>
                </CardContent>
              </Card>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-3">
              <Card className="h-[600px]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Community Hazard Map</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Layers className="mr-2 h-4 w-4" />
                        Satellite
                      </Button>
                      <Button variant="outline" size="sm">
                        <Navigation className="mr-2 h-4 w-4" />
                        My Location
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="h-full">
                  {!mapboxToken ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <MapPin className="h-16 w-16 text-muted-foreground" />
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold">Interactive Map Coming Soon</h3>
                        <p className="text-muted-foreground">
                          To enable the interactive map, please add your Mapbox public token
                        </p>
                      </div>
                      <div className="w-full max-w-sm space-y-2">
                        <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                        <Input
                          id="mapbox-token"
                          type="password"
                          placeholder="pk.eyJ1..."
                          value={mapboxToken}
                          onChange={(e) => setMapboxToken(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                        </p>
                      </div>
                      <Button onClick={() => {/* Initialize map */}}>
                        Load Map
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Map will load here with Mapbox integration</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Report List */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Reports in Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hazardReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex-1">
                          <h4 className="font-medium">{report.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {report.category}
                            </Badge>
                            <Badge variant="outline" className={`text-xs ${priorityColors[report.priority as keyof typeof priorityColors]}`}>
                              {report.priority}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              by {report.reporter}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={report.status === "resolved" ? "secondary" : "outline"}>
                            {report.status}
                          </Badge>
                          <span className="text-sm font-medium text-primary">
                            +{report.points}
                          </span>
                        </div>
                      </div>
                    ))}
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

export default MapView;