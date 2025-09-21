import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Camera, Upload, Navigation, Map, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ReportHazard = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const hazardCategories = [
    "Infrastructure Damage",
    "Environmental Hazard", 
    "Traffic Safety",
    "Public Health",
    "Utilities",
    "Other"
  ];

  const priorityLevels = [
    { value: "low", label: "Low - Minor inconvenience", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Medium - Needs attention", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High - Safety concern", color: "bg-orange-100 text-orange-800" },
    { value: "critical", label: "Critical - Immediate danger", color: "bg-red-100 text-red-800" }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedImages(prev => [...prev, ...files]);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">← Hazard Heroes</span>
          </Link>
          <Badge variant="secondary">Report Mode</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Report a Hazard</h1>
            <p className="text-muted-foreground">
              Help make your community safer by reporting hazards you discover.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Hazard Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Hazard Title *</Label>
                    <Input 
                      id="title" 
                      placeholder="Brief description of the hazard" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select hazard category" />
                      </SelectTrigger>
                      <SelectContent>
                        {hazardCategories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority Level *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Assess the urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorityLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                              <span>{level.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Provide a detailed description of the hazard, including any relevant context..."
                      className="mt-1 min-h-24"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Location Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button 
                      variant="outline" 
                      onClick={getCurrentLocation}
                      className="flex items-center space-x-2"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>GPS Location</span>
                    </Button>
                    
                    <Button variant="outline" className="flex items-center space-x-2">
                      <ImageIcon className="h-4 w-4" />
                      <span>From Photo</span>
                    </Button>
                    
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Map className="h-4 w-4" />
                      <span>Pick on Map</span>
                    </Button>
                  </div>

                  {selectedLocation && (
                    <div className="p-3 bg-muted rounded-lg">
                      <Label className="text-sm font-medium">Selected Location:</Label>
                      <p className="text-sm text-muted-foreground mt-1">{selectedLocation}</p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="address">Address (Optional)</Label>
                    <Input 
                      id="address" 
                      placeholder="Street address or landmark" 
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Image Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5" />
                    <span>Evidence Photos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <Upload className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Upload photos of the hazard</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG up to 10MB each. Location data will be extracted automatically.
                        </p>
                      </div>
                      <label htmlFor="image-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Choose Files
                        </Button>
                        <input
                          id="image-upload"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {uploadedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {uploadedImages.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded border"
                          />
                          <Badge 
                            variant="secondary" 
                            className="absolute top-1 right-1 text-xs"
                          >
                            {(file.size / 1024 / 1024).toFixed(1)}MB
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Submission Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Submission Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points Earned:</span>
                    <span className="font-medium text-primary">+25 pts</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Images:</span>
                    <span className="font-medium">{uploadedImages.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{selectedLocation ? "✓" : "Required"}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow shadow-civic" 
                      size="lg"
                    >
                      Submit Report
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save as Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reporting Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex space-x-2">
                    <span className="text-primary">•</span>
                    <span>Take multiple photos from different angles</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-primary">•</span>
                    <span>Include context like nearby landmarks</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-primary">•</span>
                    <span>Be specific in your description</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-primary">•</span>
                    <span>Report only genuine safety concerns</span>
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

export default ReportHazard;