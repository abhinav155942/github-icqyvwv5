import { useState, useEffect } from 'react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  targetSelector?: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export const useOnboarding = () => {
  const [isOnboardingVisible, setIsOnboardingVisible] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Check if user has completed onboarding before
    const completed = localStorage.getItem('onboardingCompleted');
    const welcomeShown = localStorage.getItem('welcomeModalShown');
    
    if (completed === 'true') {
      setHasCompletedOnboarding(true);
    } else if (welcomeShown !== 'true') {
      // Show welcome modal for new users after a short delay
      const timer = setTimeout(() => {
        if (!document.hidden) {
          setShowWelcomeModal(true);
          localStorage.setItem('welcomeModalShown', 'true');
        }
      }, 2000);
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
    localStorage.setItem('welcomeModalShown', 'true');
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
      id: 'welcome',
      title: 'Welcome to Your AI Coach Platform',
      description: 'This platform helps coaches and creators grow their business with AI-powered tools.',
      targetSelector: '',
      position: 'center'
    },
    {
      id: 'services',
      title: 'AI Services Available',
      description: 'Browse through various AI services like chatbots, sales funnels, and content creation.',
      targetSelector: '',
      position: 'center'
    },
    {
      id: 'contact',
      title: 'Get Your Free Demo',
      description: 'Use the contact form to request a personalized demo of our services.',
      targetSelector: '',
      position: 'center'
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