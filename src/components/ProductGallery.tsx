import React, { useState } from 'react';
import MessengerButton from './MessengerButton';
import { TEXT } from './Constant';

interface ProductProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, description }) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <MessengerButton variant="secondary" text={TEXT.MESSENGER.DEFAULT} />
      </div>
    </div>
  );
};

const ProductGallery: React.FC = () => {
  const products = TEXT.GALLERY.PRODUCTS.map(product => ({
    image: product.IMAGE,
    title: product.TITLE,
    description: product.DESC
  }));

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXT.GALLERY.SECTION_TITLE}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {TEXT.GALLERY.SECTION_DESC}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">{TEXT.GALLERY.CUSTOM_REQUEST}</p>
          <MessengerButton variant="primary" text={TEXT.GALLERY.BUTTON_CONTACT} />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;