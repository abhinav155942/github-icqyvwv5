
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CoachServices from "@/components/CoachServices";
import CreatorServices from "@/components/CreatorServices";
import EcommerceServices from "@/components/EcommerceServices";
import CoachBenefits from "@/components/CoachBenefits";
import CreatorBenefits from "@/components/CreatorBenefits";
import EcommerceBenefits from "@/components/EcommerceBenefits";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import UserTypeSelector from "@/components/UserTypeSelector";
import RecommendationPopup from "@/components/RecommendationPopup";
import ChatBot from "@/components/ChatBot";
import { OnboardingOverlay } from "@/components/onboarding/OnboardingOverlay";
import { OnboardingTrigger } from "@/components/onboarding/OnboardingTrigger";
import { WelcomeModal } from "@/components/onboarding/WelcomeModal";
import { CompletionCelebration } from "@/components/onboarding/CompletionCelebration";
import { useOnboarding } from "@/hooks/useOnboarding";

const Index = () => {
  const [userType, setUserType] = useState<string>("");
  const [showUserTypeSelector, setShowUserTypeSelector] = useState(true);
  
  const {
    isOnboardingVisible,
    hasCompletedOnboarding,
    showWelcomeModal,
    showCelebration,
    startOnboarding,
    completeOnboarding,
    skipOnboarding,
    closeCelebration,
    defaultSteps
  } = useOnboarding();

  useEffect(() => {
    // Check if user type is already saved
    const savedUserType = localStorage.getItem('userType');
    if (savedUserType) {
      setUserType(savedUserType);
      setShowUserTypeSelector(false);
    }
  }, []);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
    setShowUserTypeSelector(false);
    // Save user type to localStorage
    localStorage.setItem('userType', type);
  };

  const renderServices = () => {
    switch(userType) {
      case "coach":
        return <CoachServices />;
      case "creator":
        return <CreatorServices />;
      case "ecommerce":
        return <EcommerceServices />;
      default:
        return <CoachServices />; // Default fallback
    }
  };

  const renderBenefits = () => {
    switch(userType) {
      case "coach":
        return <CoachBenefits />;
      case "creator":
        return <CreatorBenefits />;
      case "ecommerce":
        return <EcommerceBenefits />;
      default:
        return <CoachBenefits />; // Default fallback
    }
  };

  return (
    <div className="min-h-screen">
      <UserTypeSelector 
        open={showUserTypeSelector} 
        onSelect={handleUserTypeSelect} 
      />
      <RecommendationPopup userType={userType} />
      <div data-onboarding="hero">
        <Hero />
      </div>
      <div data-onboarding="services">
        {renderServices()}
      </div>
      {renderBenefits()}
      <Process />
      <div data-onboarding="contact-form">
        <ContactForm userType={userType} />
      </div>
      <div data-onboarding="testimonials">
        <FAQ />
      </div>
      <Footer />
      <div data-onboarding="chat-button">
        <ChatBot />
      </div>
      
      {/* Onboarding System */}
      <WelcomeModal
        isVisible={showWelcomeModal}
        onStartTour={startOnboarding}
        onSkip={skipOnboarding}
      />
      
      <OnboardingOverlay
        isVisible={isOnboardingVisible}
        onComplete={completeOnboarding}
        onSkip={skipOnboarding}
        steps={defaultSteps}
      />
      
      <OnboardingTrigger
        onStart={startOnboarding}
        hasCompleted={hasCompletedOnboarding}
      />
      
      <CompletionCelebration
        isVisible={showCelebration}
        onClose={closeCelebration}
      />
    </div>
  );
};

export default Index;
