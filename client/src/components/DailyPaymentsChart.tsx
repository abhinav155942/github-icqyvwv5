import React from 'react';
import { motion } from 'framer-motion';

interface DailyPaymentsChartProps {
  className?: string;
}

const DailyPaymentsChart: React.FC<DailyPaymentsChartProps> = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`max-w-md mx-auto ${className}`}
    >
      {/* Static Chart Image */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <svg 
          width="100%" 
          height="520" 
          viewBox="0 0 400 520" 
          className="w-full h-auto">
          
          {/* Background */}
          <rect width="400" height="520" fill="#ffffff" rx="24"/>
          
          {/* Header */}
          <text x="40" y="60" fontSize="20" fontWeight="600" fill="#374151">Daily Payments</text>
          <rect x="320" y="40" width="60" height="32" rx="8" fill="#1f2937"/>
          <text x="350" y="58" fontSize="12" fontWeight="500" fill="#ffffff" textAnchor="middle">Publish</text>
          
          {/* Tooltip */}
          <rect x="150" y="200" width="100" height="50" rx="8" fill="#1f2937"/>
          <text x="200" y="218" fontSize="14" fontWeight="600" fill="#ffffff" textAnchor="middle">Avg: 3K</text>
          <text x="200" y="235" fontSize="10" fill="#9ca3af" textAnchor="middle">Date: Jul 18</text>
          <polygon points="200,250 195,255 205,255" fill="#1f2937"/>
          
          {/* Chart Bars */}
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#a855f7"/>
              <stop offset="100%" stopColor="#c084fc"/>
            </linearGradient>
          </defs>
          
          {/* Bar 1 - 20 */}
          <rect x="50" y="280" width="25" height="120" rx="12" fill="url(#barGradient)"/>
          <text x="62.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">20</text>
          
          {/* Bar 2 - 30 */}
          <rect x="105" y="320" width="25" height="80" rx="12" fill="url(#barGradient)"/>
          <text x="117.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">30</text>
          
          {/* Bar 3 - 35 */}
          <rect x="160" y="260" width="25" height="140" rx="12" fill="url(#barGradient)"/>
          <text x="172.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">35</text>
          
          {/* Bar 4 - 40 */}
          <rect x="215" y="310" width="25" height="90" rx="12" fill="url(#barGradient)"/>
          <text x="227.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">40</text>
          
          {/* Bar 5 - 45 */}
          <rect x="270" y="250" width="25" height="150" rx="12" fill="url(#barGradient)"/>
          <text x="282.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">45</text>
          
          {/* Bar 6 - 50+ */}
          <rect x="325" y="290" width="25" height="110" rx="12" fill="url(#barGradient)"/>
          <text x="337.5" y="420" fontSize="12" fill="#6b7280" textAnchor="middle">50+</text>
          
          {/* Revenue Text */}
          <text x="200" y="465" fontSize="24" fontWeight="700" fill="#374151" textAnchor="middle">$3,000</text>
          <text x="200" y="485" fontSize="12" fill="#6b7280" textAnchor="middle">Your potential daily revenue if you implement</text>
          <text x="200" y="500" fontSize="12" fill="#6b7280" textAnchor="middle">right steps with us</text>
        </svg>
      </div>
    </motion.div>
  );
};

export default DailyPaymentsChart;