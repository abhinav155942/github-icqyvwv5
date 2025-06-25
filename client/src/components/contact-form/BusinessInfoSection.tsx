
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

interface BusinessInfoSectionProps {
  userType: string;
  formData: {
    business: string;
    coachingNiche: string;
    otherNiche: string;
    monthlyRevenue: string;
  };
  onUpdate: (updates: { business?: string; coachingNiche?: string; otherNiche?: string; monthlyRevenue?: string }) => void;
  showOtherNiche: boolean;
  onNicheChange: (value: string) => void;
  isSubmitting: boolean;
}

export const BusinessInfoSection = ({ 
  userType, 
  formData, 
  onUpdate, 
  showOtherNiche, 
  onNicheChange, 
  isSubmitting 
}: BusinessInfoSectionProps) => {
  const getNicheOptions = () => {
    switch(userType) {
      case "coach":
        return [
          { value: "business", label: "Business Coaching" },
          { value: "life", label: "Life Coaching" },
          { value: "wellness", label: "Health & Wellness" },
          { value: "mindset", label: "Mindset & Personal Development" },
          { value: "relationship", label: "Relationship Coaching" },
          { value: "career", label: "Career Coaching" },
          { value: "finance", label: "Financial Coaching" },
          { value: "other", label: "Other" }
        ];
      case "creator":
        return [
          { value: "youtube", label: "YouTube Creator" },
          { value: "podcast", label: "Podcaster" },
          { value: "influencer", label: "Social Media Influencer" },
          { value: "education", label: "Educational Content" },
          { value: "entertainment", label: "Entertainment" },
          { value: "lifestyle", label: "Lifestyle Content" },
          { value: "other", label: "Other" }
        ];
      case "ecommerce":
        return [
          { value: "fashion", label: "Fashion & Apparel" },
          { value: "beauty", label: "Beauty & Cosmetics" },
          { value: "electronics", label: "Electronics" },
          { value: "home", label: "Home & Garden" },
          { value: "health", label: "Health & Supplements" },
          { value: "food", label: "Food & Beverages" },
          { value: "other", label: "Other" }
        ];
      default:
        return [{ value: "other", label: "Other" }];
    }
  };

  const getNicheLabel = () => {
    switch(userType) {
      case "coach":
        return "Coaching Niche";
      case "creator":
        return "Content Category";
      case "ecommerce":
        return "Product Category";
      default:
        return "Business Category";
    }
  };

  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-purple-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
        Business Information
      </h3>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="business" className="text-gray-700 font-medium flex items-center">
            Business/Brand Name <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="business"
            name="business"
            type="text"
            value={formData.business}
            onChange={(e) => onUpdate({ business: e.target.value })}
            className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
            placeholder="Enter your business name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="coachingNiche" className="text-gray-700 font-medium flex items-center">
            {getNicheLabel()} <span className="text-red-500 ml-1">*</span>
          </Label>
          <Select onValueChange={onNicheChange} disabled={isSubmitting} value={formData.coachingNiche}>
            <SelectTrigger className="mt-2 border-purple-200 focus:border-purple-500 rounded-xl h-12">
              <SelectValue placeholder={`Select your ${getNicheLabel().toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {getNicheOptions().map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {showOtherNiche && (
          <div className="animate-fade-in">
            <Label htmlFor="otherNiche" className="text-gray-700 font-medium flex items-center">
              Please specify your niche <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="otherNiche"
              name="otherNiche"
              type="text"
              value={formData.otherNiche}
              onChange={(e) => onUpdate({ otherNiche: e.target.value })}
              className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
              placeholder="Describe your specific niche or category"
              required
              disabled={isSubmitting}
            />
          </div>
        )}

        <div>
          <Label htmlFor="monthlyRevenue" className="text-gray-700 font-medium">
            Current Monthly Revenue
          </Label>
          <Select 
            onValueChange={(value) => onUpdate({ monthlyRevenue: value })} 
            disabled={isSubmitting}
            value={formData.monthlyRevenue}
          >
            <SelectTrigger className="mt-2 border-purple-200 focus:border-purple-500 rounded-xl h-12">
              <SelectValue placeholder="Select revenue range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1k">$0 - $1,000</SelectItem>
              <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k+">$25,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
