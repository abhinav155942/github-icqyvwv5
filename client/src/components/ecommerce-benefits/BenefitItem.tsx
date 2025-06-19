
import React from 'react';

interface BenefitItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;

