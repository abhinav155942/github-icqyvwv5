
import { DollarSign } from "lucide-react";

interface PricingDisplayProps {
  userType: string;
  services: string[];
  totalCost: number;
  showActualPrice?: boolean;
}

export const PricingDisplay = ({ userType, services, totalCost, showActualPrice = false }: PricingDisplayProps) => {
  const getServiceDetails = () => {
    switch(userType) {
      case "coach":
        return [
          { id: "funnel", label: "Sales Funnel Setup", description: "Pages + Emails", popular: true, cost: 300 },
          { id: "chatbot", label: "AI Coach Assistant", description: "RAG-based Chatbot", popular: true, cost: 300 },
          { id: "video", label: "Viral Content Clips", description: "Short-Form Video Creation", popular: false, cost: 300 }
        ];
      case "creator":
        return [
          { id: "funnel", label: "Creator Funnel Setup", description: "Monetization Pages", popular: true, cost: 300 },
          { id: "chatbot", label: "AI Content Assistant", description: "Audience Engagement Bot", popular: true, cost: 300 },
          { id: "video", label: "Viral Clip Creation", description: "Content Optimization", popular: false, cost: 300 }
        ];
      case "ecommerce":
        return [
          { id: "funnel", label: "E-commerce Funnel Setup", description: "Product Pages + Upsells", popular: true, cost: 300 },
          { id: "chatbot", label: "AI Sales Assistant", description: "Customer Support Bot", popular: true, cost: 300 },
          { id: "video", label: "Product Video Ads", description: "Marketing Content", popular: false, cost: 300 }
        ];
      default:
        return [
          { id: "funnel", label: "Sales Funnel Setup", description: "Pages + Emails", popular: true, cost: 300 },
          { id: "chatbot", label: "AI Assistant", description: "RAG-based Chatbot", popular: true, cost: 300 },
          { id: "video", label: "Content Clips", description: "Short-Form Videos", popular: false, cost: 300 }
        ];
    }
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
            {!showActualPrice && (
              <div className="text-lg font-bold text-gray-500 line-through">
                ${totalCost}
              </div>
            )}
            <div className={`text-2xl font-bold ${showActualPrice ? 'text-purple-600' : 'text-green-600'}`}>
              ${showActualPrice ? totalCost : 0}
            </div>
            <div className="text-xs text-gray-500">
              {showActualPrice ? 'Total Price' : 'First Demo Free'}
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
                {!showActualPrice && (
                  <div className="text-sm font-bold text-gray-500 line-through">
                    ${service.cost}
                  </div>
                )}
                <div className={`text-lg font-bold ${showActualPrice ? 'text-purple-600' : 'text-green-600'}`}>
                  ${showActualPrice ? service.cost : 0}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
