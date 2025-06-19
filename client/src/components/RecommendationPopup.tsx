import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecommendationPopupProps {
  userType?: string;
}

const RecommendationPopup = ({ userType }: RecommendationPopupProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem('hasShownRecommendationPopup');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSeeProjects = () => {
    navigate('/projects');
    setShowPopup(false);
    // Mark popup as shown
    localStorage.setItem('hasShownRecommendationPopup', 'true');
  };

  const handleClose = () => {
    setShowPopup(false);
    // Mark popup as shown even if closed
    localStorage.setItem('hasShownRecommendationPopup', 'true');
  };

  const getPopupContent = () => {
    switch(userType) {
      case "coach":
        return {
          title: "See Our Coaching Success Stories!",
          message: "Check out how we've helped coaches like you achieve 75% revenue growth with AI-powered funnels and automation!"
        };
      case "creator":
        return {
          title: "Creator Portfolio Awaits!",
          message: "Discover viral content systems and monetization funnels we've built for content creators just like you!"
        };
      case "ecommerce":
        return {
          title: "E-commerce Success Stories!",
          message: "See how we've boosted online stores with AI chatbots, product funnels, and automated marketing systems!"
        };
      default:
        return {
          title: "Check Our Work!",
          message: "Please check our projects to get a preview of our work and see what we can create for you!"
        };
    }
  };

  const content = getPopupContent();

  return (
    <Dialog open={showPopup} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800 flex items-center justify-center">
            <Eye className="mr-2 h-6 w-6 text-purple-600" />
            {content.title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4 py-4">
          <p className="text-gray-700">
            {content.message}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleSeeProjects}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Eye className="mr-2 h-4 w-4" />
              See Our Projects
            </Button>
            <Button 
              variant="outline"
              onClick={handleClose}
              className="border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendationPopup;
