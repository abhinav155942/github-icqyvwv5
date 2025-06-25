
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

interface ServicesSectionProps {
  userType: string;
  services: string[];
  onServiceToggle: (service: string) => void;
  isSubmitting: boolean;
  showActualPrice?: boolean;
}

export const ServicesSection = ({ userType, services, onServiceToggle, isSubmitting, showActualPrice = false }: ServicesSectionProps) => {
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

  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-purple-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <Zap className="h-5 w-5 mr-2 text-purple-600" />
        Services Needed
      </h3>
      <Label className="text-gray-700 font-medium">Select all that apply</Label>
      <div className="mt-4 space-y-4">
        {getServiceDetails().map((service) => (
          <div key={service.id} className="relative">
            <div className={`flex items-center justify-between p-4 bg-white rounded-xl border border-purple-200 hover:border-purple-400 transition-colors cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <div className="flex items-center space-x-4 flex-1">
                <input
                  type="checkbox"
                  id={service.id}
                  checked={services.includes(service.id)}
                  onChange={() => !isSubmitting && onServiceToggle(service.id)}
                  className="w-5 h-5 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
                  disabled={isSubmitting}
                />
                <div className="flex-1">
                  <Label htmlFor={service.id} className={`text-gray-700 font-medium ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    {service.label}
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {service.popular && (
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-500 line-through">
                    ${service.cost}
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    FREE DEMO
                  </div>
                  <div className="text-xs text-gray-500">
                    Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
