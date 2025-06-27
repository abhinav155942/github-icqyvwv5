import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DailyPaymentsChartProps {
  className?: string;
}

const DailyPaymentsChart: React.FC<DailyPaymentsChartProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);

  // Chart data matching the exact image layout
  const chartData = [
    { label: '20', height: 75 },
    { label: '30', height: 50 },
    { label: '35', height: 90 },
    { label: '40', height: 60 },
    { label: '45', height: 95 },
    { label: '50+', height: 70 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimateChart(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto ${className}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Daily Payments</h3>
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Publish
        </button>
      </div>

      {/* Chart Area */}
      <div className="relative h-72 mb-8">
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: animateChart ? 1 : 0, scale: animateChart ? 1 : 0.8 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-3 rounded-lg text-sm z-10"
        >
          <div className="font-semibold text-white">Avg: 3K</div>
          <div className="text-slate-300 text-xs">Date: Jul 18</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </motion.div>

        {/* Chart Bars */}
        <div className="flex items-end justify-center space-x-6 h-48 pt-24">
          {chartData.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: animateChart ? `${item.height}%` : 0 }}
                transition={{ 
                  delay: 1 + (index * 0.1), 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                className="w-10 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-xl mb-3"
                style={{ minHeight: '8px', maxHeight: '120px' }}
              />
              <span className="text-sm text-gray-500 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Revenue Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animateChart ? 1 : 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-center"
      >
        <div className="text-2xl font-bold text-gray-800 mb-1">
          $<CountUp end={3000} duration={2} delay={2.2} />
        </div>
        <div className="text-sm text-gray-500">Your Potential Daily Revenue</div>
        <div className="text-xs text-purple-600 mt-1 font-medium">
          Based on our coaching client success rates
        </div>
      </motion.div>
    </motion.div>
  );
};

// CountUp animation component
const CountUp: React.FC<{ end: number; duration: number; delay: number }> = ({ 
  end, 
  duration, 
  delay 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(startValue + (end - startValue) * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count.toLocaleString()}</span>;
};

export default DailyPaymentsChart;