import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { SoundEffects } from '@/utils/soundEffects';

interface ThreePieChartsProps {
  className?: string;
}

const ThreePieCharts: React.FC<ThreePieChartsProps> = ({ className = "" }) => {
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCharts(true);
      SoundEffects.playChartAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Service Distribution
  const serviceData = [
    { name: 'Sales Funnels', value: 45, color: '#8b5cf6' },
    { name: 'AI Chatbots', value: 25, color: '#ec4899' },
    { name: 'Content Creation', value: 20, color: '#06b6d4' },
    { name: 'Website Development', value: 10, color: '#10b981' }
  ];

  // Revenue Sources
  const revenueData = [
    { name: 'Coaching Sessions', value: 55, color: '#8b5cf6' },
    { name: 'Course Sales', value: 25, color: '#ec4899' },
    { name: 'Consulting', value: 15, color: '#06b6d4' },
    { name: 'Workshops', value: 5, color: '#10b981' }
  ];

  // Client Success Levels
  const successData = [
    { name: 'High Performers', value: 35, color: '#8b5cf6' },
    { name: 'Good Progress', value: 40, color: '#ec4899' },
    { name: 'Steady Growth', value: 20, color: '#06b6d4' },
    { name: 'Getting Started', value: 5, color: '#10b981' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{payload[0].name}</p>
          <p className="text-purple-600">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Service Distribution Chart */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Service Distribution
        </h4>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={animateCharts ? 1500 : 0}
                  onMouseEnter={() => SoundEffects.playChartTick()}
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {serviceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center justify-between p-3 bg-white/40 rounded-xl"
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Revenue Sources Chart */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Revenue Sources
        </h4>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={animateCharts ? 1800 : 0}
                  onMouseEnter={() => SoundEffects.playChartTick()}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {revenueData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex items-center justify-between p-3 bg-white/40 rounded-xl"
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Client Success Levels Chart */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Client Success Levels
        </h4>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={successData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={animateCharts ? 2100 : 0}
                  onMouseEnter={() => SoundEffects.playChartTick()}
                >
                  {successData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {successData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="flex items-center justify-between p-3 bg-white/40 rounded-xl"
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreePieCharts;