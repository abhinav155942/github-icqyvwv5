
import React from 'react';
import BenefitItem from './BenefitItem';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface BenefitsListProps {
  benefits: Benefit[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {benefits.map((benefit, index) => (
        <BenefitItem
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};

export default BenefitsList;

