
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Mail, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";
import { SoundEffects } from "@/utils/soundEffects";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SuccessDialog = ({ open, onOpenChange }: SuccessDialogProps) => {
  useEffect(() => {
    if (open) {
      SoundEffects.playSuccess();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg glass-effect border-2 border-purple-300 shadow-2xl" aria-describedby="success-dialog-description">
        <div className="relative overflow-hidden">
          {/* Animated sparkles */}
          <Star className="absolute top-2 right-4 w-4 h-4 text-yellow-400 animate-sparkle" />
          <Star className="absolute top-6 left-6 w-3 h-3 text-pink-400 animate-sparkle" style={{ animationDelay: '0.5s' }} />
          <Star className="absolute bottom-4 right-8 w-3 h-3 text-purple-400 animate-sparkle" style={{ animationDelay: '1s' }} />
          
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto animate-bounce-in">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-pulse-glow" />
            </div>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-slide-in-up">
              Form Submitted Successfully!
            </DialogTitle>
          </DialogHeader>
          
          <div id="success-dialog-description" className="text-center space-y-6 py-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-purple-500 mx-auto animate-pulse" />
              <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                Thank you for your submission!
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Your request has been received and is being processed.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-700 rounded-xl p-6 hover-lift animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Mail className="w-6 h-6 text-yellow-600 animate-bounce" />
                <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                  What happens next?
                </h3>
              </div>
              <p className="text-yellow-800 dark:text-yellow-200 font-medium leading-relaxed">
                Please check your email inbox for the personalized demo within 2 days! 
                Our AI specialists are preparing your custom presentation.
              </p>
            </div>
            
            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
              style={{ animationDelay: '0.6s' }}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Perfect! Got it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
