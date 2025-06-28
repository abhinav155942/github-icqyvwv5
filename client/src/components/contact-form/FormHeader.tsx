
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface FormHeaderProps {
  demoSubmitted: boolean;
  submitAttempts?: number;
  progress: number;
}

export const FormHeader = ({ demoSubmitted, submitAttempts = 0, progress }: FormHeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Show submission attempts if any failed attempts */}
      {submitAttempts > 0 && (
        <div className="mb-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>Submission attempts: {submitAttempts}</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 px-2">
          {demoSubmitted ? "Complete Your" : "Request Your"}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {demoSubmitted ? "Purchase" : "AI Services"}
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 px-4 max-w-2xl mx-auto">
          {demoSubmitted 
            ? "Your service request has been submitted! Complete payment to get started with your AI solution."
            : "Since you've already used your free demo, you can now purchase our premium AI services. Tell us about your business needs and proceed to payment."
          }
        </p>
        
        {!demoSubmitted && (
          <div className="mb-8">
            <Button
              onClick={() => navigate('/preview')}
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3"
            >
              <Eye className="mr-2 h-5 w-5" />
              Preview Our Work
            </Button>
          </div>
        )}
      </div>

      {/* Success notification for demo submission */}
      {demoSubmitted && (
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600 mt-1" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">🎉</span>
                  Service Request Successfully Submitted!
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold">Next Step:</span> Complete payment to activate your AI services
                  </p>
                  <p className="leading-relaxed">
                    Your service request has been processed. Since you've already experienced our free demo, 
                    you can now proceed with payment to get full access to your selected AI services.
                  </p>
                  <div className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm font-medium text-purple-700">
                      💡 <strong>Ready to Launch:</strong> Complete secure payment → Receive setup instructions → Launch your AI solution within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
