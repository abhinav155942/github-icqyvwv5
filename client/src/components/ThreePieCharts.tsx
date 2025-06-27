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

  // Lead Generation - Before vs After
  const leadGenerationBefore = [
    { name: 'Manual Outreach', value: 70, color: '#ef4444' },
    { name: 'Referrals', value: 20, color: '#f97316' },
    { name: 'Social Media', value: 10, color: '#eab308' }
  ];

  const leadGenerationAfter = [
    { name: 'Automated Funnels', value: 45, color: '#8b5cf6' },
    { name: 'AI Chatbots', value: 25, color: '#ec4899' },
    { name: 'Content Marketing', value: 20, color: '#06b6d4' },
    { name: 'Referrals', value: 10, color: '#10b981' }
  ];

  // Time Allocation - Before vs After
  const timeBefore = [
    { name: 'Admin Tasks', value: 40, color: '#ef4444' },
    { name: 'Client Acquisition', value: 35, color: '#f97316' },
    { name: 'Actual Coaching', value: 25, color: '#eab308' }
  ];

  const timeAfter = [
    { name: 'Actual Coaching', value: 60, color: '#8b5cf6' },
    { name: 'Strategy & Growth', value: 25, color: '#ec4899' },
    { name: 'Admin Tasks', value: 15, color: '#06b6d4' }
  ];

  // Revenue Sources - Before vs After
  const revenueBefore = [
    { name: '1-on-1 Sessions', value: 85, color: '#ef4444' },
    { name: 'Workshops', value: 15, color: '#f97316' }
  ];

  const revenueAfter = [
    { name: '1-on-1 Sessions', value: 45, color: '#8b5cf6' },
    { name: 'Automated Courses', value: 30, color: '#ec4899' },
    { name: 'Group Coaching', value: 15, color: '#06b6d4' },
    { name: 'Consulting', value: 10, color: '#10b981' }
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
      {/* Lead Generation - Before vs After */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          Lead Generation Transformation
        </h4>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          From 70% manual outreach to 45% automated funnels - see how AI automation transforms client acquisition.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-red-600 mb-4">BEFORE</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadGenerationBefore}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 1500 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {leadGenerationBefore.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {leadGenerationBefore.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* After Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-purple-600 mb-4">AFTER</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadGenerationAfter}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 1800 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {leadGenerationAfter.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {leadGenerationAfter.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Time Allocation - Before vs After */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          Time Allocation Transformation
        </h4>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          From 40% admin tasks to 60% actual coaching - automation frees up time for what matters most.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-red-600 mb-4">BEFORE</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeBefore}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 1800 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {timeBefore.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {timeBefore.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* After Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-purple-600 mb-4">AFTER</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeAfter}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 2100 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {timeAfter.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {timeAfter.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Sources - Before vs After */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="bg-white/60 rounded-3xl p-8 border border-purple-200"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
          Revenue Diversification
        </h4>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          From 85% dependency on 1-on-1 sessions to diversified income streams - automation creates multiple revenue sources.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-red-600 mb-4">BEFORE</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueBefore}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 2100 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {revenueBefore.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {revenueBefore.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* After Chart */}
          <div className="text-center">
            <h5 className="text-lg font-semibold text-purple-600 mb-4">AFTER</h5>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueAfter}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={animateCharts ? 2400 : 0}
                    onMouseEnter={() => SoundEffects.playChartTick()}
                  >
                    {revenueAfter.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {revenueAfter.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreePieCharts;