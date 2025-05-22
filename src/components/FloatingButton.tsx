import React, { useEffect, useState } from 'react';
import MessengerButton from './MessengerButton';
import { TEXT } from './Constant';

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TEXT.FLOATING_BUTTON.SHOW_SCROLL_Y) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <MessengerButton variant="floating" />
      )}
    </>
  );
};

export default FloatingButton;