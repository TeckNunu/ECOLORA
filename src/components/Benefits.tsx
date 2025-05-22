import React from 'react';
import { TEXT } from './Constant';
import { Recycle, Clock, Sun, ThumbsUp } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const iconList = [
    <Recycle className="h-12 w-12" />,
    <Clock className="h-12 w-12" />,
    <Sun className="h-12 w-12" />,
    <ThumbsUp className="h-12 w-12" />
  ];
  const benefits = TEXT.BENEFITS.LIST.map((benefit, idx) => ({
    icon: iconList[idx],
    title: benefit.TITLE,
    description: benefit.DESC
  }));

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXT.BENEFITS.SECTION_TITLE}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {TEXT.BENEFITS.SECTION_DESC}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;