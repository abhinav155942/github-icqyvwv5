import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DailyPaymentsChart from './DailyPaymentsChart';

const OnboardingProcess: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      number: 1,
      title: "Plan Your Growth",
      description: "Dream big, strategize with us, and turn plans into profits."
    },
    {
      number: 2,
      title: "Handover the project",
      description: "We're your project navigators, turning plans into reality. Smooth sailing guaranteed."
    },
    {
      number: 3,
      title: "Count the profit",
      description: "Sit back, relax, and let the profits set sail. Your success story starts with us!"
    }
  ];

  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, index]);
      }, index * 600);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              How it starts?
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: visibleSteps.includes(index) ? 1 : 0,
                  x: visibleSteps.includes(index) ? 0 : -50
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start space-x-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: visibleSteps.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {step.number}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <DailyPaymentsChart />
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            This is what <span className="font-semibold text-purple-600">your success dashboard</span> will look like
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Track your daily revenue growth and see real results from our proven coaching strategies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingProcess;