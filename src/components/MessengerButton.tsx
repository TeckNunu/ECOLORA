import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';
import { TEXT } from './Constant';

interface MessengerButtonProps {
  variant?: 'primary' | 'secondary' | 'header' | 'mobile' | 'floating';
  text?: string;
}

const MessengerButton: React.FC<MessengerButtonProps> = ({
  variant = 'primary',
  text = TEXT.MESSENGER.DEFAULT
}) => {
  const messengerUrl = TEXT.MESSENGER.URL;

  // Styling based on variant
  let buttonClasses = '';

  switch (variant) {
    case 'primary':
      buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-center transition duration-300 transform hover:scale-105';
      break;
    case 'secondary':
      buttonClasses = 'bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition duration-300';
      break;
    case 'header':
      buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-300';
      break;
    case 'mobile':
      buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center w-full transition duration-300';
      break;
    case 'floating':
      buttonClasses = 'bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl flex items-center justify-center transition duration-300 fixed bottom-8 right-8 z-50';
      text = '';
      break;
  }

  return (
    <a
      href={messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      {variant === 'floating' ? (
        <MessageCircle className="h-6 w-6" />
      ) : (
        <>
          <Facebook className="h-5 w-5 mr-2" />
          {text}
        </>
      )}
    </a>
  );
};

export default MessengerButton;