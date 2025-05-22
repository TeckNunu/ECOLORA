import React from 'react';
import { TEXT } from './Constant';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={author} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = TEXT.TESTIMONIALS.LIST;

  return (
    <section id="testimonials" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{TEXT.TESTIMONIALS.SECTION_TITLE}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {TEXT.TESTIMONIALS.SECTION_DESC}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.QUOTE}
              author={testimonial.AUTHOR}
              role={testimonial.ROLE}
              image={testimonial.IMAGE}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;