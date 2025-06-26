
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CoachServices from "@/components/CoachServices";
import CoachBenefits from "@/components/CoachBenefits";
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
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { HeroSkeleton, ServiceBenefitSkeleton, ProcessSkeleton, FAQSkeleton } from "@/components/ui/loading-skeletons";

const Index = () => {
  const [userType, setUserType] = useState<string>("coach");
  const [showUserTypeSelector, setShowUserTypeSelector] = useState(false);
  
  const {
    isOnboardingVisible,
    hasCompletedOnboarding,
    showWelcomeModal,
    showCelebration,
    startOnboarding,
    completeOnboarding,
    skipOnboarding,
    resetOnboarding,
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
    return <CoachServices />;
  };

  const renderBenefits = () => {
    return <CoachBenefits />;
  };

  return (
    <div className="min-h-screen">
      <UserTypeSelector 
        open={showUserTypeSelector} 
        onSelect={handleUserTypeSelect} 
      />
      <RecommendationPopup userType={userType} />
      <div data-onboarding="hero">
        <LoadingWrapper skeleton={<HeroSkeleton />} delay={100}>
          <Hero />
        </LoadingWrapper>
      </div>
      <div data-onboarding="services">
        <LoadingWrapper skeleton={<ServiceBenefitSkeleton />} delay={300}>
          {renderServices()}
        </LoadingWrapper>
      </div>
      <LoadingWrapper skeleton={<ServiceBenefitSkeleton />} delay={500}>
        {renderBenefits()}
      </LoadingWrapper>
      <LoadingWrapper skeleton={<ProcessSkeleton />} delay={700}>
        <Process />
      </LoadingWrapper>
      <div data-onboarding="contact-form">
        <ContactForm userType={userType} />
      </div>
      <div data-onboarding="testimonials">
        <LoadingWrapper skeleton={<FAQSkeleton />} delay={900}>
          <FAQ />
        </LoadingWrapper>
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
