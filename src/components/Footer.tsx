import React from 'react';
import { TEXT } from './Constant';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{TEXT.HEADER.LOGO}</h3>
            <p className="mb-4 text-green-100">
              {TEXT.FOOTER.ABOUT}
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{TEXT.FOOTER.QUICK_LINKS.TITLE}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-green-100 hover:text-white transition">{TEXT.FOOTER.QUICK_LINKS.PRODUCTS}</a>
              </li>
              <li>
                <a href="#benefits" className="text-green-100 hover:text-white transition">{TEXT.FOOTER.QUICK_LINKS.BENEFITS}</a>
              </li>
              <li>
                <a href="#testimonials" className="text-green-100 hover:text-white transition">{TEXT.FOOTER.QUICK_LINKS.TESTIMONIALS}</a>
              </li>
              <li>
                <a href="#about" className="text-green-100 hover:text-white transition">{TEXT.FOOTER.QUICK_LINKS.ABOUT}</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{TEXT.FOOTER.CONTACT.TITLE}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span>{TEXT.FOOTER.CONTACT.ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-300" />
                <span>{TEXT.FOOTER.CONTACT.PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-300" />
                <span>{TEXT.FOOTER.CONTACT.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6 text-center text-green-200">
          <p>{TEXT.FOOTER.COPYRIGHT(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;