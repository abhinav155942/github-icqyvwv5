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
        setShowWelcomeModal(true);
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
      title: 'Welcome to Your Business Growth Platform!',
      description: 'Let\'s take a quick tour to help you get started with growing your business using AI-powered tools.',
      targetSelector: 'body',
      position: 'center',
      animation: 'glow'
    },
    {
      id: 'hero-section',
      title: 'Your Growth Journey Starts Here',
      description: 'This is where potential clients first learn about your services. The powerful headline captures attention immediately.',
      targetSelector: '[data-onboarding="hero"]',
      position: 'bottom',
      animation: 'pulse'
    },
    {
      id: 'services-overview',
      title: 'Discover Our Services',
      description: 'Here you can see all the ways we help businesses like yours grow with automation and AI-powered solutions.',
      targetSelector: '[data-onboarding="services"]',
      position: 'top',
      animation: 'bounce'
    },
    {
      id: 'contact-form',
      title: 'Get Your Free Demo',
      description: 'This contact form is where interested clients can request a free demo of our services. It\'s completely free to get started!',
      targetSelector: '[data-onboarding="contact-form"]',
      position: 'left',
      animation: 'shake'
    },
    {
      id: 'chat-assistant',
      title: 'AI Chat Assistant',
      description: 'Need help anytime? Click this chat button to get instant answers about our services and how we can help your business.',
      targetSelector: '[data-onboarding="chat-button"]',
      position: 'left',
      animation: 'pulse'
    },
    {
      id: 'testimonials',
      title: 'Success Stories',
      description: 'See how other businesses have grown using our services. Real results from real clients who started just like you.',
      targetSelector: '[data-onboarding="testimonials"]',
      position: 'top',
      animation: 'glow'
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