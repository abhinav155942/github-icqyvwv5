import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeModalProps {
  isVisible: boolean;
  onStartTour: () => void;
  onSkip: () => void;
}

export const WelcomeModal = ({ isVisible, onStartTour, onSkip }: WelcomeModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onSkip}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-200"
          >
            {/* Close button */}
            <button
              onClick={onSkip}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Animated sparkles */}
            <div className="relative mb-6">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              
              {/* Floating sparkles around main icon */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
            
            {/* Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Welcome to Your Growth Platform!
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to transform your business with AI-powered automation? 
                Let's take a quick tour to show you everything you can achieve here.
              </p>
            </motion.div>
            
            {/* Features preview */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-3 mb-6"
            >
              {[
                { icon: "🚀", text: "Grow Faster" },
                { icon: "🤖", text: "AI Tools" },
                { icon: "💰", text: "Free Demo" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs text-gray-600 font-medium">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Action buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              <Button
                variant="outline"
                onClick={onSkip}
                className="flex-1"
              >
                Skip for now
              </Button>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  onClick={onStartTour}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center justify-center gap-2"
                >
                  Start Tour
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Progress indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-4 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};