
import { CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, CreditCard } from "lucide-react";
import { PricingDisplay } from "./PricingDisplay";

interface FormCardHeaderProps {
  demoSubmitted: boolean;
  userType: string;
  services: string[];
  totalCost: number;
  progress: number;
}

export const FormCardHeader = ({ 
  demoSubmitted, 
  userType, 
  services, 
  totalCost, 
  progress 
}: FormCardHeaderProps) => {
  return (
    <CardHeader className="relative pb-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          {demoSubmitted ? (
            <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-white" />
          ) : (
            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
          )}
        </div>
        <CardTitle className="text-xl md:text-2xl text-center text-gray-800 mb-2">
          {demoSubmitted ? "Complete Your Purchase" : "Free Demo Request"}
        </CardTitle>
        <p className="text-sm md:text-base text-gray-600 px-4">
          {demoSubmitted ? (
            <>✨ <span className="font-semibold">Demo submitted!</span> Select your services and complete your purchase</>
          ) : (
            <>🚀 <span className="font-semibold">88+ businesses</span> have already transformed their growth with our AI solutions</>
          )}
        </p>
      </div>
      
      <PricingDisplay 
        userType={userType}
        services={services}
        totalCost={totalCost}
        showActualPrice={demoSubmitted}
      />

      {!demoSubmitted && (
        <div className="bg-white/80 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Form Progress</span>
            <span>{progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </CardHeader>
  );
};
