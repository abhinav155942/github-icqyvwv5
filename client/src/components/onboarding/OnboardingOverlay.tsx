import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  targetSelector: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  animation?: 'bounce' | 'pulse' | 'shake' | 'glow';
}

interface OnboardingOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
  onSkip: () => void;
  steps: OnboardingStep[];
}

export const OnboardingOverlay = ({ isVisible, onComplete, onSkip, steps }: OnboardingOverlayProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isVisible || !steps[currentStep]) return;

    const targetElement = document.querySelector(steps[currentStep].targetSelector) as HTMLElement;
    if (targetElement) {
      setHighlightedElement(targetElement);
      
      // Calculate tooltip position
      const rect = targetElement.getBoundingClientRect();
      const step = steps[currentStep];
      
      let x = 0, y = 0;
      
      switch (step.position) {
        case 'top':
          x = rect.left + rect.width / 2;
          y = rect.top - 20;
          break;
        case 'bottom':
          x = rect.left + rect.width / 2;
          y = rect.bottom + 20;
          break;
        case 'left':
          x = rect.left - 20;
          y = rect.top + rect.height / 2;
          break;
        case 'right':
          x = rect.right + 20;
          y = rect.top + rect.height / 2;
          break;
        case 'center':
          x = window.innerWidth / 2;
          y = window.innerHeight / 2;
          break;
      }
      
      setTooltipPosition({ x, y });
      
      // Add highlight animation to target element
      targetElement.style.position = 'relative';
      targetElement.style.zIndex = '1001';
      targetElement.classList.add('onboarding-highlight');
      
      // Add specific animation class
      if (step.animation) {
        targetElement.classList.add(`onboarding-${step.animation}`);
      }
      
      // Scroll element into view
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return () => {
      if (targetElement) {
        targetElement.style.position = '';
        targetElement.style.zIndex = '';
        targetElement.classList.remove('onboarding-highlight');
        if (steps[currentStep]?.animation) {
          targetElement.classList.remove(`onboarding-${steps[currentStep].animation}`);
        }
      }
    };
  }, [currentStep, isVisible, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    // Clean up current highlight
    if (highlightedElement) {
      highlightedElement.style.position = '';
      highlightedElement.style.zIndex = '';
      highlightedElement.classList.remove('onboarding-highlight');
      if (steps[currentStep]?.animation) {
        highlightedElement.classList.remove(`onboarding-${steps[currentStep].animation}`);
      }
    }
    onSkip();
  };

  if (!isVisible || !steps[currentStep]) return null;

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] pointer-events-none"
      >
        {/* Dark overlay with cutout for highlighted element */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute pointer-events-auto bg-white rounded-xl shadow-2xl p-6 max-w-sm border border-gray-200"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: currentStepData.position === 'center' ? 'translate(-50%, -50%)' : 
                      currentStepData.position === 'top' ? 'translate(-50%, -100%)' :
                      currentStepData.position === 'bottom' ? 'translate(-50%, 0%)' :
                      currentStepData.position === 'left' ? 'translate(-100%, -50%)' :
                      'translate(0%, -50%)'
          }}
        >
          {/* Animated icon */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto"
          >
            <Play className="h-6 w-6 text-white" />
          </motion.div>

          {/* Step indicator */}
          <div className="flex justify-center mb-4">
            <motion.div
              className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Step {currentStep + 1} of {steps.length}
            </motion.div>
          </div>

          {/* Content */}
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-bold text-gray-800 mb-2 text-center"
          >
            {currentStepData.title}
          </motion.h3>
          
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-sm mb-6 text-center leading-relaxed"
          >
            {currentStepData.description}
          </motion.p>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700"
            >
              Skip Tour
            </Button>

            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevious}
                  className="flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleNext}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-1"
                >
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSkip}
          className="absolute top-4 right-4 pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <X className="h-5 w-5 text-gray-600" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};