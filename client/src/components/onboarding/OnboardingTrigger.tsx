import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OnboardingTriggerProps {
  onStart: () => void;
  hasCompleted: boolean;
}

export const OnboardingTrigger = ({ onStart, hasCompleted }: OnboardingTriggerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg rounded-full p-3 flex items-center gap-2"
        >
          {hasCompleted ? (
            <>
              <HelpCircle className="h-5 w-5" />
              <span className="hidden sm:inline">Tour</span>
            </>
          ) : (
            <>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <span className="hidden sm:inline">Take Tour</span>
            </>
          )}
        </Button>
      </motion.div>
      
      {!hasCompleted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 text-xs text-gray-600 whitespace-nowrap border"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ New here? Take a quick tour!
          </motion.div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </motion.div>
      )}
    </motion.div>
  );
};