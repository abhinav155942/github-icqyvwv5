
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
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-purple-200 hover:border-purple-400 transition-colors cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 w-full sm:w-auto mb-2 sm:mb-0">
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
              
              <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-between sm:justify-end">
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
