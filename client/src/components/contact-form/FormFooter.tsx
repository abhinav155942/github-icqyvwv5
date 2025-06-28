
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, Gift, Rocket, Shield, Clock, Zap } from "lucide-react";
import { SoundEffects } from "@/utils/soundEffects";

interface FormFooterProps {
  isSubmitting: boolean;
  isPurchaseDisabled: boolean;
  demoSubmitted: boolean;
  totalCost: number;
}

export const FormFooter = ({ 
  isSubmitting, 
  isPurchaseDisabled, 
  demoSubmitted, 
  totalCost 
}: FormFooterProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (!isPurchaseDisabled && !isSubmitting) {
      SoundEffects.playClick();
    }
  };

  const handleHover = () => {
    if (!isPurchaseDisabled && !isSubmitting) {
      SoundEffects.playHover();
    }
  };

  return (
    <div className="pt-6 md:pt-8 animate-slide-in-up">
      {isPurchaseDisabled && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-300 dark:border-yellow-600 rounded-2xl p-6 mb-6 animate-bounce-in">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-600 animate-pulse" />
            <p className="text-yellow-800 dark:text-yellow-200 font-medium text-center">
              Please select at least one service to proceed with your order
            </p>
          </div>
        </div>
      )}

      {!isPurchaseDisabled && totalCost > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-2xl p-6 mb-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Total Investment: <span className="text-2xl font-bold text-green-600">${totalCost}</span>
            </p>
            <p className="text-sm text-gray-600">
              Premium AI services • One-time payment • Lifetime access
            </p>
          </div>
        </div>
      )}

      <Button 
        type="submit"
        onClick={handleClick}
        onMouseEnter={handleHover}
        className={`w-full py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 flex items-center justify-center animate-pulse-glow hover-lift group relative overflow-hidden ${isPurchaseDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSubmitting || isPurchaseDisabled}
      >
        {/* Animated background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div className="relative flex items-center">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-3 h-6 w-6 animate-spin" />
              <span className="animate-pulse">
                Submitting your request...
              </span>
            </>
          ) : (
            <>
              <CreditCard className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              {totalCost > 0 ? `Submit Order - $${totalCost}` : 'Submit Service Request'}
              <Rocket className="ml-3 h-6 w-6 group-hover:animate-bounce" />
            </>
          )}
        </div>
      </Button>
      
      <div className="mt-6 text-center space-y-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Premium AI Services • Secure Payment Processing
        </p>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Setup within 24-48 hours • Lifetime access included
        </p>
        
        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <div className="flex items-center space-x-1 text-green-600">
            <Shield className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-medium">Secure</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-600">
            <Clock className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-medium">Fast</span>
          </div>
          <div className="flex items-center space-x-1 text-purple-600">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-medium">Reliable</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 mt-6 text-xs text-gray-500 dark:text-gray-400 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
        <button
          type="button"
          onClick={() => navigate('/terms')}
          className="hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors duration-200"
        >
          Terms & Conditions
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={() => navigate('/privacy')}
          className="hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors duration-200"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};
