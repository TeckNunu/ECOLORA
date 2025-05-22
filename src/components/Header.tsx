import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Leaf } from 'lucide-react';
import MessengerButton from './MessengerButton';
import { TEXT } from './Constant';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-green-800' : 'text-white'}`}>
            {TEXT.HEADER.LOGO}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#products"
            className={`font-medium transition hover:text-green-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {TEXT.HEADER.NAV.PRODUCTS}
          </a>
          <a
            href="#benefits"
            className={`font-medium transition hover:text-green-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {TEXT.HEADER.NAV.BENEFITS}
          </a>
          <a
            href="#testimonials"
            className={`font-medium transition hover:text-green-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {TEXT.HEADER.NAV.TESTIMONIALS}
          </a>
          <a
            href="#about"
            className={`font-medium transition hover:text-green-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {TEXT.HEADER.NAV.ABOUT}
          </a>
          <MessengerButton variant="header" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a
              href="#products"
              className="font-medium text-gray-700 py-2 hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              {TEXT.HEADER.NAV.PRODUCTS}
            </a>
            <a
              href="#benefits"
              className="font-medium text-gray-700 py-2 hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              {TEXT.HEADER.NAV.BENEFITS}
            </a>
            <a
              href="#testimonials"
              className="font-medium text-gray-700 py-2 hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              {TEXT.HEADER.NAV.TESTIMONIALS}
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 py-2 hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              {TEXT.HEADER.NAV.ABOUT}
            </a>
            <MessengerButton variant="mobile" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;