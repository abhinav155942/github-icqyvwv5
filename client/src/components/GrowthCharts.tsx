import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { SoundEffects } from '@/utils/soundEffects';

interface GrowthChartsProps {
  className?: string;
}

const GrowthCharts: React.FC<GrowthChartsProps> = ({ className = "" }) => {
  const [animateCharts, setAnimateCharts] = useState(false);

  // Revenue growth data over 6 months
  const revenueData = [
    { month: 'Jan', revenue: 12000, clients: 15 },
    { month: 'Feb', revenue: 18000, clients: 22 },
    { month: 'Mar', revenue: 25000, clients: 31 },
    { month: 'Apr', revenue: 32000, clients: 38 },
    { month: 'May', revenue: 41000, clients: 47 },
    { month: 'Jun', revenue: 52000, clients: 58 }
  ];

  // Client acquisition channels
  const channelData = [
    { name: 'Sales Funnels', value: 45, color: '#8b5cf6' },
    { name: 'AI Chatbots', value: 25, color: '#06b6d4' },
    { name: 'Viral Content', value: 20, color: '#10b981' },
    { name: 'Websites', value: 10, color: '#f59e0b' }
  ];

  // Conversion rates improvement
  const conversionData = [
    { metric: 'Lead-to-Call', before: 18, after: 65 },
    { metric: 'Call-to-Client', before: 22, after: 48 },
    { metric: 'Content Views', before: 150, after: 3200 },
    { metric: 'Website Bookings', before: 8, after: 34 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCharts(true);
      // Play chart animation sounds
      SoundEffects.playChartAnimation(6); // 6 data points for revenue
      setTimeout(() => SoundEffects.playChartTick(), 800);
      setTimeout(() => SoundEffects.playChartComplete(), 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey === 'revenue' ? `Revenue: $${entry.value.toLocaleString()}` : 
               entry.dataKey === 'clients' ? `Clients: ${entry.value}` :
               `${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Revenue Growth Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Revenue Growth Trajectory</h3>
          <p className="text-gray-600">Average client revenue growth over 6 months</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value/1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                animationDuration={animateCharts ? 2000 : 0}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Starting: $12K/month</span>
          <span className="font-semibold text-purple-600">Current: $52K/month (+333%)</span>
        </div>
      </motion.div>

      {/* Client Acquisition Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Client Acquisition by Service</h3>
          <p className="text-gray-600">How our services contribute to client growth</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={animateCharts ? 1500 : 0}
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {channelData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Conversion Rate Improvements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Performance Improvements</h3>
          <p className="text-gray-600">Before vs. After implementing our solutions</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conversionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="before" 
                fill="#e5e7eb" 
                name="Before"
                animationDuration={animateCharts ? 1000 : 0}
              />
              <Bar 
                dataKey="after" 
                fill="#8b5cf6" 
                name="After"
                animationDuration={animateCharts ? 1500 : 0}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <span className="inline-block w-3 h-3 bg-gray-300 rounded mr-2"></span>
            Before Implementation
            <span className="inline-block w-3 h-3 bg-purple-500 rounded mr-2 ml-6"></span>
            After Implementation
          </p>
        </div>
      </motion.div>

      {/* Key Metrics Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Average Revenue Increase', value: '333%', icon: '📈' },
          { label: 'Client Acquisition Rate', value: '+287%', icon: '👥' },
          { label: 'Time Saved Weekly', value: '15 hrs', icon: '⏰' },
          { label: 'ROI Average', value: '450%', icon: '💰' }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <div className="text-2xl mb-2">{metric.icon}</div>
            <div className="text-2xl font-bold text-purple-600 mb-1">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GrowthCharts;