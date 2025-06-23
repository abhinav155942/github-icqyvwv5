import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CompletionCelebrationProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CompletionCelebration = ({ isVisible, onClose }: CompletionCelebrationProps) => {
  useEffect(() => {
    if (isVisible) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
          />
          
          {/* Celebration Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              delay: 0.2
            }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
          >
            {/* Success Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10,
                delay: 0.5
              }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 border-4 border-green-400 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1.6],
                  opacity: [1, 0.7, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            
            {/* Animated Stars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 3,
                  delay: 0.5 + i * 0.2,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '30%',
                }}
              >
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </motion.div>
            ))}
            
            {/* Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Congratulations!
              </h2>
              <p className="text-gray-600 mb-6">
                You've completed the tour and you're ready to grow your business with our AI-powered tools!
              </p>
            </motion.div>
            
            {/* Achievement badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-2 mb-6"
            >
              {['🎯', '🚀', '💡'].map((emoji, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    delay: 1.2 + i * 0.1,
                    duration: 0.6
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Call to action */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Get Started
              </Button>
            </motion.div>
            
            {/* Progress bar */}
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};