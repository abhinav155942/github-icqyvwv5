import { useState, useEffect } from 'react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  targetSelector: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  animation?: 'bounce' | 'pulse' | 'shake' | 'glow';
}

export const useOnboarding = () => {
  const [isOnboardingVisible, setIsOnboardingVisible] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Check if user has completed onboarding before
    const completed = localStorage.getItem('onboardingCompleted');
    if (completed === 'true') {
      setHasCompletedOnboarding(true);
    } else {
      // Show welcome modal for new users after a short delay
      const timer = setTimeout(() => {
        // Only show if user hasn't interacted with the page yet
        if (!document.hidden) {
          setShowWelcomeModal(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const startOnboarding = () => {
    setShowWelcomeModal(false);
    setIsOnboardingVisible(true);
  };

  const completeOnboarding = () => {
    setIsOnboardingVisible(false);
    setShowCelebration(true);
    setHasCompletedOnboarding(true);
    localStorage.setItem('onboardingCompleted', 'true');
    
    // Show celebration effect
    createConfetti();
  };

  const closeCelebration = () => {
    setShowCelebration(false);
  };

  const skipOnboarding = () => {
    setIsOnboardingVisible(false);
    setShowWelcomeModal(false);
    setHasCompletedOnboarding(true);
    localStorage.setItem('onboardingCompleted', 'true');
  };

  const resetOnboarding = () => {
    setHasCompletedOnboarding(false);
    localStorage.removeItem('onboardingCompleted');
  };

  const createConfetti = () => {
    const colors = ['#9333ea', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      document.body.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 5000);
    }
  };

  // Default onboarding steps for the application
  const defaultSteps: OnboardingStep[] = [
    {
      id: 'hero-section',
      title: 'Welcome! Let\'s Start Your Journey',
      description: 'This powerful headline section shows visitors what you can do for their business growth.',
      targetSelector: '.hero-main, [data-onboarding="hero"], h1',
      position: 'bottom',
      animation: 'pulse'
    },
    {
      id: 'services-overview',
      title: 'Your Services Showcase',
      description: 'This section displays all the AI-powered services you offer to help businesses grow.',
      targetSelector: '.services-section, [data-onboarding="services"]',
      position: 'bottom',
      animation: 'bounce'
    },
    {
      id: 'contact-form',
      title: 'Free Demo Request Form',
      description: 'This is where potential clients can request their free demo. The form captures all necessary details.',
      targetSelector: '.contact-form, [data-onboarding="contact-form"]',
      position: 'right',
      animation: 'glow'
    },
    {
      id: 'chat-assistant',
      title: 'AI Chat Helper',
      description: 'This chat button lets visitors get instant answers about your services 24/7.',
      targetSelector: '.chat-button, [data-onboarding="chat-button"]',
      position: 'left',
      animation: 'shake'
    }
  ];

  return {
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
  };
};