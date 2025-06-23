import React from 'react';
import { Button } from '@/components/ui/button';

interface OnboardingDebugProps {
  onStartOnboarding: () => void;
  onResetOnboarding: () => void;
}

export const OnboardingDebug = ({ onStartOnboarding, onResetOnboarding }: OnboardingDebugProps) => {
  const checkSelectors = () => {
    const selectors = [
      '.hero-main, [data-onboarding="hero"], h1',
      '.services-section, [data-onboarding="services"]',
      '.contact-form, [data-onboarding="contact-form"]',
      '.chat-button, [data-onboarding="chat-button"]'
    ];

    console.log('=== Onboarding Selector Check ===');
    selectors.forEach((selector, index) => {
      const elements = document.querySelectorAll(selector);
      console.log(`Step ${index + 1} - Selector: "${selector}"`);
      console.log(`Found ${elements.length} element(s):`, elements);
      if (elements.length > 0) {
        console.log('First element:', elements[0]);
      }
    });
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-[1200] bg-white p-4 rounded-lg shadow-lg border">
      <h3 className="text-sm font-bold mb-2">Onboarding Debug</h3>
      <div className="flex flex-col gap-2">
        <Button size="sm" onClick={checkSelectors}>
          Check Selectors
        </Button>
        <Button size="sm" onClick={onStartOnboarding}>
          Start Tour
        </Button>
        <Button size="sm" onClick={onResetOnboarding} variant="outline">
          Reset Progress
        </Button>
      </div>
    </div>
  );
};