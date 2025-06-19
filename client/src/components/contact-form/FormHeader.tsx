
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface FormHeaderProps {
  demoSubmitted: boolean;
  submitAttempts: number;
  progress: number;
}

export const FormHeader = ({ demoSubmitted, submitAttempts, progress }: FormHeaderProps) => {
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
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          {demoSubmitted ? "Ready to Get Started?" : "Get Your"}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {demoSubmitted ? "Purchase Now" : "Free Demo"}
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
          {demoSubmitted 
            ? "Your demo request has been submitted! Ready to purchase your AI solution?"
            : "Tell us about your business and we'll create a tailored AI solution for you"
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
                  Demo Request Successfully Submitted!
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold">Timeline:</span> You will receive your custom demo within 24-48 hours
                  </p>
                  <p className="leading-relaxed">
                    Our AI specialists are now crafting a personalized demo based on your specific business needs and requirements. 
                    Once you review the demo and see how it can transform your business, you can select the services you'd like to purchase below.
                  </p>
                  <div className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm font-medium text-purple-700">
                      💡 <strong>Next Steps:</strong> Review your demo → Select desired services → Complete secure payment → Launch your AI solution
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
