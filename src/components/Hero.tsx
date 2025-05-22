import React from 'react';
import MessengerButton from './MessengerButton';
import { TEXT } from './Constant';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${TEXT.HERO.BG_IMAGE}')`,
          filter: "brightness(0.65)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 text-center md:text-left">
        <div className="max-w-lg md:max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {TEXT.HERO.TITLE} <span className="text-green-400">{TEXT.HERO.TITLE_HIGHLIGHT}</span>
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            {TEXT.HERO.DESCRIPTION}
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <MessengerButton variant="primary" text={TEXT.HERO.BUTTON_ORDER} />
            <a
              href="#products"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-800 py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              {TEXT.HERO.BUTTON_COLLECTION}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;