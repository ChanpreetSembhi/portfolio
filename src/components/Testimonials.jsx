import React from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-18 lg:py-32">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 pb-2">Testimonials</h2>
        <p className="text-gray-600">
          In my role as a frontend web developer, I excel at creating visually
          appealing and user-friendly websites that enhance client satisfaction
          and engagement through innovative design and seamless functionality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Customer"
                src={testimonial.profile}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.position}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{testimonial.comment}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
