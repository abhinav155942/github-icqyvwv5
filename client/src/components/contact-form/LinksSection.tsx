
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link, Plus, X } from "lucide-react";

interface LinkItem {
  url: string;
  description: string;
}

interface LinksSectionProps {
  links: LinkItem[];
  onLinksChange: (links: LinkItem[]) => void;
  isSubmitting: boolean;
}

export const LinksSection = ({ links, onLinksChange, isSubmitting }: LinksSectionProps) => {
  const [newLink, setNewLink] = useState<LinkItem>({ url: "", description: "" });

  const addLink = () => {
    if (newLink.url.trim()) {
      onLinksChange([...links, newLink]);
      setNewLink({ url: "", description: "" });
    }
  };

  const removeLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    onLinksChange(updatedLinks);
  };

  const updateLink = (index: number, field: keyof LinkItem, value: string) => {
    const updatedLinks = links.map((link, i) => 
      i === index ? { ...link, [field]: value } : link
    );
    onLinksChange(updatedLinks);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-purple-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <Link className="h-5 w-5 mr-2 text-purple-600" />
        Website Links & References (Optional)
      </h3>
      
      <Label className="text-gray-700 font-medium">
        Add any relevant website links, portfolios, or references
      </Label>

      {/* Add new link section */}
      <div className="mt-4 space-y-4 p-4 bg-white rounded-xl border border-purple-200">
        <div>
          <Label htmlFor="new-url" className="text-gray-700 font-medium">
            Website URL
          </Label>
          <Input
            id="new-url"
            type="url"
            value={newLink.url}
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
            placeholder="https://example.com"
            disabled={isSubmitting}
          />
          {newLink.url && !isValidUrl(newLink.url) && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="new-description" className="text-gray-700 font-medium">
            Description (What is this link for?)
          </Label>
          <Textarea
            id="new-description"
            value={newLink.description}
            onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
            className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            placeholder="e.g., My portfolio website, Current website that needs improvement, Competitor example, etc."
            disabled={isSubmitting}
            rows={3}
          />
        </div>
        
        <Button
          type="button"
          onClick={addLink}
          disabled={!newLink.url.trim() || !isValidUrl(newLink.url) || isSubmitting}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Link
        </Button>
      </div>

      {/* Display added links */}
      {links.length > 0 && (
        <div className="mt-4 space-y-3">
          <Label className="text-gray-700 font-medium">
            Added Links ({links.length})
          </Label>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {links.map((link, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl border border-purple-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div>
                      <Label className="text-xs text-gray-500">URL</Label>
                      <Input
                        value={link.url}
                        onChange={(e) => updateLink(index, 'url', e.target.value)}
                        className="mt-1 h-10 text-sm"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-gray-500">Description</Label>
                      <Textarea
                        value={link.description}
                        onChange={(e) => updateLink(index, 'description', e.target.value)}
                        className="mt-1 text-sm"
                        rows={2}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLink(index)}
                    disabled={isSubmitting}
                    className="ml-2 h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
