import React from 'react';
import MessengerButton from './MessengerButton';
import { TEXT } from './Constant';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src={TEXT.ABOUT.IMAGE}
                alt="About Us"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-100 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-green-800 font-bold">{TEXT.ABOUT.IMAGE_LABEL}</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXT.ABOUT.SECTION_TITLE}</h2>
            <p className="text-gray-600 mb-4">
              {TEXT.ABOUT.STORY_1}
            </p>
            <p className="text-gray-600 mb-4">
              {TEXT.ABOUT.STORY_2}
            </p>
            <p className="text-gray-600 mb-8">
              {TEXT.ABOUT.STORY_3}
            </p>
            <MessengerButton variant="primary" text={TEXT.ABOUT.BUTTON_CONTACT} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;