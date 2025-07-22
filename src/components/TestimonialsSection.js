import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = ({
  heading = "What Our Clients Say",
  testimonials = [
    {
      quote: "TopNotch Remodeling LLC did an incredible job on our bathroom. The one-day shower installation was seamless and the result is stunning!",
      author: "Jane Doe",
      location: "Springfield, IL"
    },
    {
      quote: "Professional, efficient, and friendly! Their handyman services saved us so much time and hassle. Truly a top-notch experience.",
      author: "John Smith",
      location: "Shelbyville, IL"
    },
    {
      quote: "We are absolutely thrilled with our new tub. The team was fantastic, and they completed the installation exactly as promised.",
      author: "Emily White",
      location: "Capital City, IL"
    }
  ]
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// DONE