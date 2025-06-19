
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Youtube, Instagram, Facebook, Twitter, FileText, Globe, Video } from "lucide-react";

interface ServiceConfig {
  description: string;
  links: string[];
  platforms?: string[];
}

interface ServiceConfigSectionProps {
  serviceId: string;
  serviceName: string;
  isSelected: boolean;
  config: ServiceConfig;
  onConfigChange: (serviceId: string, config: ServiceConfig) => void;
}

export const ServiceConfigSection = ({ 
  serviceId, 
  serviceName, 
  isSelected, 
  config, 
  onConfigChange 
}: ServiceConfigSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(isSelected);
  const [newLink, setNewLink] = useState("");

  if (!isSelected) return null;

  const addLink = () => {
    if (newLink.trim()) {
      onConfigChange(serviceId, {
        ...config,
        links: [...config.links, newLink.trim()]
      });
      setNewLink("");
    }
  };

  const removeLink = (index: number) => {
    onConfigChange(serviceId, {
      ...config,
      links: config.links.filter((_, i) => i !== index)
    });
  };

  const togglePlatform = (platform: string) => {
    const currentPlatforms = config.platforms || [];
    const updatedPlatforms = currentPlatforms.includes(platform)
      ? currentPlatforms.filter(p => p !== platform)
      : [...currentPlatforms, platform];
    
    onConfigChange(serviceId, {
      ...config,
      platforms: updatedPlatforms
    });
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return <Youtube className="h-5 w-5" />;
      case 'instagram': return <Instagram className="h-5 w-5" />;
      case 'facebook': return <Facebook className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'tiktok': return <Video className="h-5 w-5" />; // Using Video icon instead of TikTok
      default: return null;
    }
  };

  const getServicePrompts = () => {
    switch (serviceId) {
      case 'chatbot':
        return {
          descriptionPrompt: "How do you envision this AI assistant helping your business? What specific tasks should it handle?",
          linkPrompt: "Provide websites, documents, or resources you want the AI to learn from (optional):"
        };
      case 'funnel':
        return {
          descriptionPrompt: "What's your main goal for this sales funnel? Describe your target audience and desired outcomes:",
          linkPrompt: "Share examples of funnels you like or reference materials (optional):"
        };
      case 'video':
        return {
          descriptionPrompt: "What type of content clips do you want? Describe your brand style and target audience:",
          linkPrompt: "Provide sample videos or reference content (optional):"
        };
      default:
        return {
          descriptionPrompt: "How do you think this service can benefit your business?",
          linkPrompt: "Provide any reference materials (optional):"
        };
    }
  };

  const { descriptionPrompt, linkPrompt } = getServicePrompts();

  return (
    <Card className="mt-4 border-purple-200 bg-purple-50/30">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-gray-800 flex items-center">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            Configure {serviceName}
          </h4>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {isExpanded && (
          <div className="space-y-4">
            {/* Mandatory Description */}
            <div>
              <Label className="text-gray-700 font-medium flex items-center">
                <span className="text-red-500 mr-1">*</span>
                {descriptionPrompt}
              </Label>
              <Textarea
                value={config.description}
                onChange={(e) => onConfigChange(serviceId, { ...config, description: e.target.value })}
                className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl min-h-[100px]"
                placeholder="Please provide a detailed description..."
                required
              />
              {!config.description.trim() && (
                <p className="text-red-500 text-sm mt-1">This field is required</p>
              )}
            </div>

            {/* Social Media Platforms for Video Service */}
            {serviceId === 'video' && (
              <div>
                <Label className="text-gray-700 font-medium">
                  Target Platforms (Select all that apply):
                </Label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-5 gap-2">
                  {['youtube', 'instagram', 'facebook', 'twitter', 'tiktok'].map((platform) => (
                    <Button
                      key={platform}
                      type="button"
                      variant={config.platforms?.includes(platform) ? "default" : "outline"}
                      size="sm"
                      onClick={() => togglePlatform(platform)}
                      className={`flex items-center space-x-2 ${
                        config.platforms?.includes(platform) 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'border-purple-200 hover:border-purple-400'
                      }`}
                    >
                      {getPlatformIcon(platform)}
                      <span className="capitalize">{platform}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Links Section */}
            <div>
              <Label className="text-gray-700 font-medium">
                {linkPrompt}
              </Label>
              
              <div className="mt-2 flex space-x-2">
                <Input
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
                  placeholder="https://example.com or describe your resource"
                />
                <Button
                  type="button"
                  onClick={addLink}
                  disabled={!newLink.trim()}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4"
                >
                  Add
                </Button>
              </div>

              {config.links.length > 0 && (
                <div className="mt-3 space-y-2">
                  {config.links.map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2 flex-1 min-w-0">
                        {link.startsWith('http') ? <Globe className="h-4 w-4 text-blue-500" /> : 
                         link.includes('video') || link.includes('mp4') ? <Video className="h-4 w-4 text-green-500" /> : 
                         <FileText className="h-4 w-4 text-gray-500" />}
                        <span className="text-sm text-gray-700 truncate">{link}</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLink(index)}
                        className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-sm flex items-start">
                  <span className="font-semibold mr-1">💡 Tip:</span>
                  You can also upload files and add website links in the dedicated sections below if you prefer.
                  <Button
                    type="button"
                    variant="link"
                    size="sm"
                    className="ml-2 h-auto p-0 text-blue-600 underline"
                    onClick={() => {
                      document.getElementById('file-upload-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Skip to upload sections →
                  </Button>
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
