import React from 'react'

const Testimonials = () => {
  return (
    <>
      <section className="testimonial-section  ">
        <div className="container  mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                text: "Amazing service! The caregivers are professional and kind.",
                name: "Ramesh Patel",
              },
              {
                text: "Highly recommended. Our family felt at ease with their care.",
                name: "Meera Shah",
              },
              {
                text: "Professional and reliable caregivers. We are grateful!",
                name: "Rajiv Mehta",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md">
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <h4 className="mt-4 font-semibold">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials