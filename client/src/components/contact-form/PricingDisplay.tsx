
import { DollarSign } from "lucide-react";

interface PricingDisplayProps {
  userType: string;
  services: string[];
  totalCost: number;
  showActualPrice?: boolean;
}

export const PricingDisplay = ({ userType, services, totalCost, showActualPrice = false }: PricingDisplayProps) => {
  const getServiceDetails = () => {
    return [
      { 
        id: "funnel", 
        label: "Sales Funnel Setup", 
        description: "Complete landing pages, opt-in forms, sales pages, email sequences, and automated follow-ups designed to convert leads into paying coaching clients", 
        popular: true, 
        cost: 300 
      },
      { 
        id: "chatbot", 
        label: "AI Coach Assistant", 
        description: "RAG-powered chatbot trained on your coaching methodology, client FAQs, and knowledge base to handle inquiries and pre-qualify leads 24/7", 
        popular: true, 
        cost: 300 
      },
      { 
        id: "video", 
        label: "Viral Content Clips", 
        description: "Short-form videos optimized for Instagram Reels, TikTok, and YouTube Shorts to showcase your expertise and attract ideal coaching clients", 
        popular: false, 
        cost: 300 
      },
      { 
        id: "website", 
        label: "Professional Coach Website", 
        description: "Mobile-responsive website with booking calendar, testimonials, service pages, and SEO optimization to establish your online presence", 
        popular: false, 
        cost: 300 
      }
    ];
  };

  if (services.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 md:p-6 border border-purple-100 mb-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
            <span className="font-semibold text-gray-800">
              Selected Services ({services.length})
            </span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-500 line-through">
              ${totalCost}
            </div>
            <div className="text-2xl font-bold text-green-600">
              FREE DEMO
            </div>
            <div className="text-xs text-gray-500">
              First Demo Free
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {getServiceDetails()
            .filter(service => services.includes(service.id))
            .map((service, index) => (
            <div key={index} className="flex items-center justify-between bg-white/60 rounded-lg p-3">
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{service.label}</div>
                <div className="text-xs text-gray-600">{service.description}</div>
              </div>
              <div className="text-right ml-4">
                <div className="text-sm font-bold text-gray-500 line-through">
                  ${service.cost}
                </div>
                <div className="text-lg font-bold text-green-600">
                  FREE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
